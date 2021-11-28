---
{
        "title": "利用 SourceMap 调试线上问题",
        "tags": ["计算机技术", "工具", "Web", "Front End"],
        "keywords": ["计算机技术", "工具", "Web", "Front End", "Debug"],
        "summary": "Web 项目在生产环境发布的代码是经过混淆和压缩的，那么如何根据在生产环境收集的错误栈信息快速分析出问题的代码具体位置呢？",
        "ctime": "2021-11-28 22:31:00",
        "mtime": "2021-11-28 22:31:00"
    }

---

　　Web 项目出于加载性能优化和安全考虑，在生产环境部署的构建好的代码是经过混淆和压缩的，这对根据线上收集的错误日志中的栈信息进行本地调试提出了挑战。

　　几个月前，新上线的项目接入 SkyWalking 日志后，出了一些兼容性问题，大部分问题根据客户反馈的交互流程基本可以猜到出问题的代码位置，尤其是可以使用测试机进行复现，在本地调试直接可以获知具体的错误栈信息。但其中有几个问题，由于客户的机型太小众，而且系统版本太旧，没有类似的测试机环境可以复现，只能根据线上收集到的错误日志和其中的栈信息定位错误。这看似是个很简单的问题，但实际上不好解决，因为线上日志的错误栈信息中对应的行列号是压缩和混淆后的代码，基本定位不到具体的源码位置。于是，一直在本地模拟用户的交互和测试数据，苦于无法复现，最终回过头来还是决定思考一下怎么根据栈信息定位错误。

　　当然，一个很明显的场景就是，本地使用 Webpack 这类构建工具进行开发时，代码本身在本地调试的过程中就已经进行了编译转换和合并，为了能在 Web 开发工具中定位到错误发生的源码位置，会生成 **sourcemap** 文件来解决这一问题。想到这里，调试线上问题的思路也基本明确了，那就是利用构建发布代码时生成的 **sourcemap** 文件配合获取的线上日志栈信息中行列号解析出源码的对应位置（文件，行列号）。此时，又出现了两个问题，第一个问题是原来的构建发布代码过程中出于安全考虑是不产生 **sourcemap** 文件的，当然回过头来想一下，只要目前的项目源码和当前线上发布时的是一致的，重新生成 sourcemap 文件也能解决问题；第二个问题就比较难办了，以前只是配置 Webpack，至于自己如何手动解析 sourcemap 倒还没尝试过，先是查了下资料，发现这个文件格式标准是 Google 提出来的，但没有找到官方提供的解析工具，不过后续却找到了一个 *Mozilla* 的开源项目 `source-map` 解决了该问题。

## 工具脚本

　　有了 **sourcemap** 文件和解析工具其实就很好解决问题了，这里贴一下自己使用的工具脚本源码：

```js
/**
 * 调试压缩代码（要保留 dist 文件夹）
 * ! 上线前请注意不要把 sourcemap 文件一同发布
 */
import process from 'process';
import path from 'path';
import fs from 'fs';
import sourceMap from 'source-map';

// * 第一步：更改要调试的压缩代码文件对应 sourcemap 文件名称
let sourcemap = fs.readFileSync(path.join(process.cwd(), './dist/js/index.314d075b.js.map'));
sourcemap = JSON.parse(sourcemap);

async function parse() {
  const s = await new sourceMap.SourceMapConsumer(sourcemap);

  // * 第二步：将 `line` 和 `column` 更改为线上错误日志堆栈信息中的行列号
  console.debug(
    s.originalPositionFor({
      line: 15,
      column: 69,
    })
  );

  s.destroy();
}

// * 最后运行脚本：`node scripts/debug-min-code.mjs`
// 查看打印出的实际文件和位置信息
parse();
```

## 参考

- [Source Map Revision 3 Proposal](https://sourcemaps.info/spec.html)

- [source-map](https://github.com/mozilla/source-map)
