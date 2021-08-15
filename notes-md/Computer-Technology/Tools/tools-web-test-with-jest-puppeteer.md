---
    {
        "title": "使用 Jest 和 Puppeteer 构建 Web 自动化测试平台",
        "tags": ["Computer Technology", "Tools", "Test", "Web"],
        "keywords": ["Computer Technology", "Tools", "Test", "Web", "Jest", "Puppeteer"],
        "summary": "谷歌发布的 Puppeteer 工具和脸书发布的 Jest 测试工具为 Web 端到端测试提供了极大的便利，这里记录了如何使用它们构建一个 Web 自动化测试平台。",
        "ctime": "2021-08-15 14:54:00",
        "mtime": "2021-08-15 14:54:00"
    }
---

　　测试为软件的稳定和完善提供了必要的支持，Web 前端开发领域相比于做单元测试，端到端测试更有意义和价值。谷歌发布的 Puppeteer 工具和脸书发布的 Jest 测试工具为 Web 端到端测试提供了极大的便利，这里记录了如何使用它们构建一个 Web 自动化测试平台。

## 技术预研

　　在本地跑通测试流程是首要解决的问题，在日常项目的脚手架中已经做了很多这方面的工作，而且从头开始来做也没有太大难度，基本上按官方文档步骤来做即可。直接使用 Jest 和 Puppeteer 做测试也是可以的，不过要繁琐很多，借助 `jest-puppeteer` 这个 npm 包可以简化很多流程，测试代码也要简略的多。

### 需求分析

　　Web 端到端自动化测试平台要求用户可以通过 Web UI 上传测试脚本代码到服务器，而服务器可以定时运行上传的测试脚本获取结果日志并存档，通过对整个流程分析可以确定有以下几个技术难点：

- Jest 和 Puppeteer 的服务端测试运行环境构建（版本管理）
- 用户测试脚本不可信，需要沙箱机制
- 数据传输涉及到 `Buffer`，用 HTTP 还是 WebSocket
- 脚本定时运行的任务调度

　　搞清楚需求和相应的技术难点后，可以先看看业内有没有解决方案可以参考。

<div style="text-align: center;">
	<img style="width: 40vw;height: 45vh;" src="https://github.com/wang1212/static-resources/blob/main/images/web-test-with-jest-puppeteer_2021-08-15_16-42-05.png?raw=true" />
    <p>Web 端到端自动化测试平台功能需求</p>
</div>


### 市场调研

　　根据调研的情况来看，在好几年前已经有很多人在做类似的方案，但是很少有成熟的方案，仅限于本地测试（玩具项目），分析一方面原因是当时各个技术都不太成熟，另一方面当时端到端测试愿意开源的也不多。但在调研过程中收获还是不少的，有很多方面也印证了我对技术架构的构想。下面来简单的介绍一下业内可供参考的方案，有些是完整的方案，有些则仅涉及某些环节。

　　首先，解决如何构建 Jest 和 Puppeteer 的服务端测试运行环境（我称之为 Test Runner Server）。服务器的环境大多都是 Linux 系统，Puppeteer 官方文档也提供了如何在 Linux 中安装和使用，事实是要比在本地的 Windows 环境中麻烦得多，当然这个麻烦也源于另一个事实：[Puppeteer 版本和 Chromium 的版本严格相关](https://github.com/puppeteer/puppeteer/#q-why-doesnt-puppeteer-vxxx-work-with-chromium-vyyy)。那么问题又变得复杂了起来，如何构建支持多个 Puppeteer 版本的测试运行环境？隔离多个版本测试运行环境之间的影响可以利用虚拟机，在如今云的时代，Docker 则成了最佳选择，官方文档也有提及，谷歌官方也用 Docker 构建了 Puppeteer 的测试运行环境作为 CI/CD 的流程。在社区也找到了有人维护的 Puppeteer 的 Docker 镜像：

> https://github.com/buildkite/docker-puppeteer

　　由于我们用的是 **node:lts-alpine** 基础镜像，所以根据 [Puppeteer 官方文档](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-on-alpine)安装了相应依赖，但依赖包在国外所以更换了镜像源，这里要注意的是刚开始换的是 HTTP 源，发现安装总是失败，最终换了 HTTPS 源后，安装几秒完成：

```bash
# https://mirrors.ustc.edu.cn/help/alpine.html
RUN sed -i 's/http:\/\/dl-cdn.alpinelinux.org/https:\/\/mirrors.ustc.edu.cn/g' /etc/apk/repositories
```

　　安装好环境后，运行测试又出现了问题，参考[官方文档](https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-on-alpine)在启动参数中添加了 `--no-sandbox` 参数后在 **root** 用户下测试可以运行成功，但因为安全原因，很少会在 docker 中使用 root 用户运行程序，换成非 root 用户运行测试也是成功的。但是，官方文档提到在 root 用户环境下 必须使用`--no-sandbox` 禁用沙箱，而且是有安全风险的，想着在非 root 用户环境下去掉该启动参数应该就行了，发现测试会运行失败，根据官方文档的解决方案和调研，发现很多人都遇到该问题，而且最终没有很好的解决方案，暂时就把这个问题搁置了。

　　接下来，第二个技术难点在于运行用户提交的测试脚本是有风险的，所以在运行测试脚本代码时必须有沙箱机制保证一定的安全。刚开始发现社区有人使用了 `vm2` 这个 npm 包来解决运行不可信任代码的安全问题，而且恰好也有人用该模块来尝试结合 Docker 在云端运行 puppeteer 测试：

> https://github.com/ebidel/try-puppeteer

　　但最终发现这并非最佳的解决方案，而且在编码上略显复杂，服务端代码与测试运行环境在同一个系统环境下，有安全风险，也耦合严重。所以，为了实现可以将多个版本的测试运行环境隔离，同时降低安全风险，采取将测试运行环境与后端服务拆分，采用 Node Server + Test Runner Server 的技术架构。这样的好处是，如果测试任务较多，可以很方便的横向扩展 Test Runner Server 节点，不同的节点也可以部署不同版本的 Puppeteer，方便后期维护迭代过程中不断升级测试运行环境又不影响已有的测试任务运行。

　　这个过程中也了解了 Jest 运行测试的底层原理，实际上 Jest 运行测试时为了隔离上下文环境也利用了 Node.js 的核心模块 `vm`。

> https://cpojer.net/posts/building-a-javascript-testing-framework

　　接下来就是数据传输通信的协议选择，通常我们会用 HTTP(S) 的常规方案，但是经过分析，测试代码用户可能以文件的形式提交，后端服务需要将测试代码保存成文件，后续又需要把测试代码文件发送到 Test Runner Server 运行测试，最终又需要把运行日志发送到后端服务保存成文件，涉及到 `Buffer` 数据的传输，还有可能需要传输实时的日志到客户端（Web UI），看起来选用 WebSocket 是再合适不过了。

　　最后就是定时运行测试脚本的任务调度了，经过调研发现成熟的方案也有很多，包括持久化，最终决定采用类 `Cron` 的方案。

　　在调研过程中，还发现一篇文章介绍了利用 `puppeteer-cluster` 这个 npm 包来搭建测试集群完成性能任务，对于我来说也很有参考价值。

> https://stackchat.com/blog/puppeteer-cluster-performance-testing

### 技术架构

　　在经过详细的市场调研后，最终确定了一个比较理想和完整的系统技术架构。

<div style="text-align: center;">
	<img style="width: 40vw;height: 45vh;" src="https://github.com/wang1212/static-resources/blob/main/images/web-test-with-jest-puppeteer-architecture_2021-08-15_18-20-03.png?raw=true" />
    <p>Web 端到端自动化测试平台系统技术架构</p>
</div>

## 系统实现

　　完成技术预研后，就需要进行实际的编码实现了，在本地开发过程中为了方便和不污染本地环境，也是直接将 Puppeteer 安装在 Docker 内运行一个 Runner Server 来进行开发。目前，仅仅是完成了一个测试 Demo，具备用户在 Web UI 可以编辑代码进行提交直接运行和查看运行结果日志，以及提交测试代码创建任务，Node Server 服务负责任务调度定时运行测试脚本，并管理测试日志，Web UI 浏览任务列表和历史测试日志的基本功能。Web UI 与 Node Serve 的 WebSocket 通信使用了 `socket.io` npm 包，因为其继承了 `Event` 模块，可以很方便的管理不同类型的事件，比起在 `message` 事件的传输数据中维护额外通信类型要方便的多，而且也提供了开箱即用的鉴权功能；Node Server 与 Test Runner Server 的 WebSocket 通信使用了 `ws` npm 包，因为其通信较为简单，而该模块也足够简单轻量；任务调度则使用的 `node-schedule` npm 包，其提供了类似 `Cron` 的定时任务机制，但是其无法持久化，目前也是仅作为测试 Demo 的方案。

　　以下是 Test Runner Server 的 **Dockerfile**：

```dockerfile
# see docs: https://docs.docker.com/engine/reference/builder/

FROM node:lts-alpine

# https://mirrors.ustc.edu.cn/help/alpine.html
RUN sed -i 's/http:\/\/dl-cdn.alpinelinux.org/https:\/\/mirrors.ustc.edu.cn/g' /etc/apk/repositories

# install dependencies
RUN apk update \
    && apk add --no-cache --virtual .build-deps curl \
    && curl -sf https://gobinaries.com/tj/node-prune | sh \
    && apk del .build-deps

# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#handling-kernel-signals
# https://github.com/krallin/tini#using-tini
# Add Tini
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]

# puppeteer start --------------------------------

# https://github.com/puppeteer/puppeteer/blob/main/docs/troubleshooting.md#running-on-alpine
# https://github.com/puppeteer/puppeteer#q-which-chromium-version-does-puppeteer-use
RUN apk add --no-cache \
      chromium \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# # Puppeteer v6.0.0 works with Chromium 89.
# RUN yarn add puppeteer@6.0.0

# # Add user so we don't need --no-sandbox.
# RUN addgroup -S pptruser && adduser -S -g pptruser pptruser \
#     && mkdir -p /home/pptruser/Downloads /app \
#     && chown -R pptruser:pptruser /home/pptruser \
#     && chown -R pptruser:pptruser /app

# # Run everything after as non-privileged user.
# USER pptruser

# puppeteer end --------------------------------

ENV NODE_ENV=production
ENV WS_RUNNER_PORT=8081
EXPOSE 8081

WORKDIR /home/node/app

COPY package.json package-lock.json ./
RUN npm ci --production --registry=https://registry.npm.taobao.org/ && npm cache clean --force

RUN node-prune

COPY . .

RUN chown -R node:node /home/node/app/

# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#non-root-user
USER node

# https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md#cmd
CMD [ "node", "index.js" ]
```

　　此外，在 Node 项目中我们采用了 `ECMAScript modules` 编写整个项目代码，而 `jest-puppeteer` npm 包不支持 ES Module，最终发现可以配置环境变量指定配置文件来解决：

```bash
JEST_PUPPETEER_CONFIG=jest-puppeteer.config.cjs
```

　　而且，目前 Jest 默认也是以 CommonJS 方式运行的，需要额外指定 Node 参数（flag）才行，这个官方文档也有提及：

```bash
node --experimental-vm-modules node_modules/.bin/jest
```

　　其次为了日志管理和处理的方便，生成结构化数据才是比较理想的，可以通过 Jest 的 `--json` 命令行选项将其输出的日志由纯文本更改为 JSON 格式；加上 `--passWithNoTests` 选项可以保证没有测试可运行时不报错。

## 其它参考资源

- https://jestjs.io/
- https://developers.google.com/web/tools/puppeteer/
- https://github.com/smooth-code/jest-puppeteer
- https://en.wikipedia.org/wiki/Cron