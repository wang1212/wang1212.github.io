---
title: Monorepo 中使用 TypeScript 的问题
date: 2024-10-20 13:48:00
update: 2024-10-23 01:12:00
authors: wang1212
tags: &ref_0
  - 计算机技术
  - 工具
  - TypeScript
  - Monorepo
  - 实践案例
keywords: *ref_0
description: 在 Monorepo 中使用 TypeScript 时相比于单包仓库要复杂的多，会遇到一系列问题，这里记录一下这些问题的解决方案。
---

> _最后更新于 2024-10-23 01:12:00_

在 Monorepo 中使用 TypeScript 时相比于单包仓库要复杂的多，会遇到一系列问题，这里记录一下这些问题的解决方案。

<!-- truncate -->

## 共享项目配置

为了降低维护成本，通常的做法是在项目根目录创建一个 **tsconfig.base.json** 配置文件作为公共的基础配置，同时在每个子包中再创建一个单独的配置文件并引用基础配置：

```ts
// tsconfig.base.json
{
  "compilerOptions": {
    "target": "ESNext",
  },
  "include": ["src/**/*"]
}

// packages/foo/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist",
  },
}

// packages/bar/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist",
  },
}
```

很明显，这里没有把 `rootDir` 和 `outDir` 配置放到公共的基础配置中去，这是因为**路径相关的配置（相对路径）在解析时行为不可预测，很容易出错**，为了确保正确，必须将其放到各自的子包配置中去。显然，这样维护起来很麻烦。

:::tip

终于，TypeScript 官方在 [5.5 版本发布时支持了 `${configDir}` 模板变量](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-5.html#the-configdir-template-variable-for-configuration-files)，这使得路径相关配置更加明确，维护起来也更方便。

:::

```ts {5-6,8}
// tsconfig.base.json
{
  "compilerOptions": {
    "target": "ESNext",
    "rootDir": "${configDir}/src",
    "outDir": "${configDir}/dist",
  },
  "include": ["${configDir}/src/**/*"]
}
```

## 源代码跳转

**Monorepo 中的包依赖关系通常较为复杂，在维护过程中阅读源代码时会频繁遇到其它依赖包的代码调用**，直接点击跳转会跳到对应的类型定义文件，这对于我们想直接查看依赖包的源代码来说极为不便。不过，我们可以结合 VSCode 和 TypeScript 编译配置来实现点击直接跳转到依赖包源代码的目的。

首先，需要配置一下 VSCode 中 JavaSCript/TypeScript 的 `Prefer Go To Source Definition` 配置项。

接下来，再配置一下 TypeScript 的编译配置 [`declarationMap`](https://www.typescriptlang.org/tsconfig/#declarationMap) 即可：

```ts {4}
{
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true,
    "declarationDir": "${configDir}/types",
  }
}
```

## Vite 与实时生成类型定义

现在，我们喜欢在开发模式下使用 Vite 这种 Bundless 模式的构建工具来加速我们的开发工作流，尤其是在 Monorepo 中编写库的使用示例时极为便利。

然而，当我们同时使用 TypeScript 时，**实时构建类型定义文件也很重要，这有助于我们频繁的在多个子包之间修改代码而不会出错**。当子包数量很多时，我们不可能为每个子包目录都启动一个执行 `tsc --watch` 的进程，这会由于进程太多产生严重的性能问题。

相反，我们可以考虑按需的方式，在 Vite 检测到文件热更新时来实时构建该子包新的类型定义文件，这可以通过一个简单的插件来实现。

```ts {21}
import path from 'node:path';
import { exec } from 'node:child_process';

function buildTypesPlugin() {
  return {
    name: 'build-types-plugin',
    /**
     * @see https://vite.dev/guide/api-plugin.html#handlehotupdate
     */
    handleHotUpdate({ file }) {
      const relativePath = path.relative(__dirname, file);
      const packagePath = relativePath.startsWith('packages/')
        ? relativePath.split('/').slice(0, 2).join('/')
        : null;

      if (!packagePath) {
        return;
      }

      exec(
        `cd ${packagePath} && npm run build:types`,
        (error, stdout, stderr) => {
          const date = new Date();
          const hours = date.getHours().toString().padStart(2, '0');
          const minutes = date.getMinutes().toString().padStart(2, '0');
          const seconds = date.getSeconds().toString().padStart(2, '0');

          if (error) {
            console.error(
              `\x1b[90m${hours}:${minutes}:${seconds} [build:types]: ${error}`,
              '\x1b[0m',
            );
            return;
          }

          console.log(
            `\x1b[90m${hours}:${minutes}:${seconds} [build:types] success`,
            '\x1b[0m',
          );
        },
      );
    },
  };
}
```

## 相关资料

- <https://en.wikipedia.org/wiki/Monorepo>
- <https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-5.html#the-configdir-template-variable-for-configuration-files>
- <https://github.com/microsoft/TypeScript/issues/57485>
- <https://www.typescriptlang.org/tsconfig/#declarationMap>
