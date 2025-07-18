---
title: 2018 年工作记录
date: 2018-08-29 00:14:00
update: 2019-02-20 22:27:00
authors: wang1212
tags: &ref_0
  - 生活
  - 工作
  - 记录
keywords: *ref_0
description: 从去年毕业到现在，时间过得飞快，今年的毕业生这个时间也已经走上工作岗位了，而我这一年工作上经历的事情要丰富的多了。
---


从去年毕业到现在，时间过得飞快，今年的毕业生这个时间也已经走上工作岗位了，而我这一年工作上经历的事情要丰富的多了。

<!-- truncate -->

## 2018 年

今年，我已经不是个应届毕业生了，对我来说，已经度过了步入社会走上工作岗位短暂的过渡期。同时，今年毕业的同学们应该也已经走上工作岗位了，那么我也算是有一定工作经验的人了。

在这一年里，熟悉了工作流程的我，尽可能的抓住一切机会，让自己快速的成长，经历更多的事情。

## 思考

进入公司也有半年了，已经熟悉了工作流程的我，现在要思考的问题不再是怎样快速熟悉工作流程以及胜任基本的工作任务了，因此我决定把新的目标放在针对自己的领域如何提高自己的工作效率上。

作为 Web 前端开发新手，我还在手动编码，手动处理代码压缩，图片压缩，CSS 兼容等等这些工作，而且与服务器端的合作开发流程也不太顺畅。由于公司没有可借鉴的经验，所以就自己动手研究，首先将问题分解成了两个：

1. **建立一套前端工作流，进行工程化实践**
2. **寻找更好的前后端合作开发模式**

### 建立前端工作流

首先，则是自己所在领域的开发工作流程问题。Web 前端不像安卓、服务器端开发，它们都有专门的 IDE，提供一整套的开发工具包，而前端开发就相对于零散化了。

第一，刚开始用的编辑器是 Sublime-Text 3，后来在网上发现了 VS Code，感觉用起来要方便得多，就直接转战 VS Code 了，它确实是前端开发的利器。

第二，建立一套前端工作流，节省时间，把一些非核心业务编码的工作自动化处理。主流的方案有 Gulp 和 Grunt，在试用并且衡量优劣之后，选择了 Gulp，主要原因是因为配置比较简单，利于上手。

在使用了 Gulp 两个月左右之后，发现由于 JavaScript 没有类和模块的概念（ES5 没有，ES6/7/8 新特性浏览器不一定支持），代码量变大之后，JS 代码和模块难以手动维护。于是，准备采用主流的 Webpack 模块化方案。然而，网上的大多数教程还停留在 2、3 版本，这时候官网的 Webpack 版本已经到 4.5 了，最重要的是 4 之后的版本调整的特别大，与之前的 2、3 不兼容。所以，花了两周左右的时间，研究了下官方的 Webpack 英文文档和 GitHub 的版本更新文档以及 Demo，基本上配合 Gulp 搭建了一套完整的前端工作流。

利用 Gulp 工作流来处理 Sass 文件合并、压缩和图片压缩等工作，最后将 Webpack 插入到 Gulp 工作流中来完成 JavaScript 代码模块化管理工作，前端的开发流程简化了，工作效率也大大提升了。

后来，也在开发过程中不断的调整优化 Gulp 和 Webpack 的配置，尽可能的将能自动化完成的工作都交给它们来负责，减轻自己的手动工作量。

### 前后端分离开发/部署

其次，则是前后端合作开发的模式。在实际工作中，前后端都有不同的开发人员负责，初期进行并行开发。到后期，前端需要随时与服务器端进行接口数据对接，并进行调试。

传统的模式中，一个 Web 项目中前后端代码都在一块，要么服务器端开发人员拿着前端代码去调试，要么前端开发人员拿着服务器端代码去调试，由于对彼此的领域不熟悉，这个过程中会出现很多麻烦的事情，而且效率低下。

于是，参考现在主流的模式，进行前后端开发/部署完全分离的尝试，这个工作由我来做，过程还算顺利。主流的解决方案就是利用 nginx 来做一个反向代理，将前端静态资源均放在 nginx 前端服务器上，而服务器端代码则放在 tomcat 容器中。nginx 使用起来门槛也比较低，大多数东西都在配置文件中，不过这个过程中还是费了一些心思的。

因此，后期进行 Web 项目开发的时候，前端开发人员只需在自己的电脑上开一个 nginx 服务器，随时根据需求更改配置文件中的代理 IP 地址，这样前后端开发人员配合调试起来也方便、高效。

同时，将 Web 项目进行前后端分离部署，使用 nginx 也为后期做负载均衡提供了解决方案。

## 项目总结

因为基本技术能力尚可与公司项目多的双重因素，手上负责了两个项目，第一次经历整个项目的所有过程，困难多，收获也多。

### 保护区巡护系统

其实，这个项目的 1.0 版是公司刚成立时，一个负责服务器端开发的同事做的。两年过去了，公司现在准备做个 2.0 版，界面与功能都需要更完善一些，依然是由当初那个开发 1.0 版的同事来做，我刚来公司参与的其实就是他做的 2.0 版的项目。由于那个同事比较忙，时间仓促，以及公司现在服务器端、安卓、前端开发都有专门的人来负责工作了，于是又准备将 2.0 版作为一个正式项目按流程来做一遍，做的更好一些。

- 任务

  项目开发负责人，主要工作包括需求分析、系统设计、前端开发工作、开发工作进度把控、人员协调、与客户进行商谈等等。

- 过程

  这个项目历时 4 个月左右（3 月初至 7 月初）。3 月初接到了项目负责人的任务，花了 2 - 3 周的时间去做需求分析、系统设计，做完这些基本就是开发计划了，大概 2 个月的开发编码时间，留了 2 周的测试时间。最终，在七月初，项目基本所有流程都完成了，还算顺利。

  除过项目负责人的角色，前端开发的工作也是我做的，当然这也是我的本职工作。这是个新项目，所以我抓住机会使用了 React.js 框架，这个过程中最后也应用了 redux 方案解决应用的状态管理问题。

- 收获

  第一次参与一个项目的所有流程的工作，并且由自己来做，收获很多；同时，也首次应用了 React.js 来做项目，自己的专业技术上也收获颇丰。

  - 了解到一个软件项目的所有流程和工作内容
  - 学会更好的写文档，规范做事流程
  - 学会应用 React.js 框架，并应用 Redux 方案解决状态管理问题

事实上，这个项目可供参考的东西有很多，难度相对较低，也刚好适合我这种工作经验较少的人。

刚开始做需求分析、系统设计这些工作时，我主要是参考 1.0 版的系统以及已做了部分工作的 2.0 版系统，我从网上查了也一部分的资料来了解目标客户及其他们的需求痛点。当然这些工作的成果则是撰写的需求分析文档、概要设计文档、详细设计文档，当初在写这些文档的时候，其实我觉得大部分东西都很啰嗦，但后来再看的时候随便啰嗦，但能规范我们的工作和流程。这些文档里面涉及的东西非常多，很多东西和概念都是第一次接触，了解到原来一个简单的项目不仅仅是设计好、开发完成就好，这里面涉及到甲方、乙方、销售、开发等等多方利益和人员工作的协调问题。

作为一名开发人员，最熟悉而且最乐意的当然还是编码了。利用我半年多的工作经验和结合自身与项目组成员的技术能力，定的开发周期是 2 个多月，给测试预留了 2 周的时间。我负责了前端的开发工作，当然我还多了一份工作，就是接口文档的撰写。根据业务需求将前后端的数据格式和接口文档提前定好，这样开发工作才能开始，后期也会少一些麻烦。因为时间比较紧张，我采取的是先写简单、核心且容易实现的业务的文档，这样边写文档边开发，不需要等到整个系统的接口文档都写完才开始开发工作，项目能顺利进行也节省了时间。

这个项目整体上分为 Web 端、安卓端、服务器端三大部分，主要的业务集中在 Web 端和服务器端。最终，测试过程中还是出了不少 BUG 的，其中有一部分是系统设计上的逻辑漏洞，这些都是很珍贵的经验。

其次，作为一名前端开发，掌握一个主流的框架其实是非常必要的，在 Vue.js 和 React.js 中，我选择了后者。由于之前了解的东西比较多，而且对 React 的实现原理有部分了解，学习起来难度倒也不大，应用起来也感觉得心应手，比之前任何东西手动编码要轻松、效率高得多。我相信任何一个应用 React 的开发者都会遇到一个棘手的问题，那就是应用的状态管理，由于 React 数据单向流动的机制，在实现某些业务时，组件多层级嵌套会让人很头疼。于是，我接触到了 Redux，并在项目中应用了该方案，确实解决了一个大问题。

然而，最让我感到惊叹的是后来为了解决异步更新状态的问题，我应用了 redux-thunk 的方案，而它的源码只有 10 行左右，但它确实解决了一个大问题。这个过程中，我又了解到了**中间件**的概念，并从 redux 的官方文档 Demo 中仔细了解了中间件这个东西。所以，我觉得思想比我们会写代码要重要得多。

总之，第一次负责一个项目，能按预期顺利完成还是挺高兴的，这离不开团队的努力。

### 预算系统

这个项目属于公司的一个战略性项目，与公司之前的业务不同，是一次新的尝试，也由我来负责。

- 任务

  项目开发负责人，主要工作包括需求分析、系统设计、前端开发工作、开发工作进度把控、人员协调、与客户进行商谈等等。

- 过程

  这个项目由于客户提供的资料不全，一直是断断续续的在做，不是很顺利。项目本身的业务不多，但是由于业务的特殊性、专业性，客户提供的资料总是不全面，公司第一次尝试这种类型项目等等多重因素，导致项目处于断断续续的开发状态中，战线拉的比较长。

  但是，作为前端开发这部分的工作倒是因为需求频繁变动带来的思考收获却是很多的。

- 收获

  项目进展不顺利，第一次感到受挫，需求频繁变动导致的工作量激增，这些都成了宝贵的教训经验。

  - 理解需求分析的重要性
  - 明白及时可客户沟通的重要性
  - 开发上面对需求频繁变动的应对措施

首先，这是一个林业系统的预算项目，与公司之前所做的 GIS 业务相差甚远。其次，刚开始时间比较仓促，需求分析没有做到位，导致后期客户的需求频繁变动，加大了工作量。

由于业务的特性性，前端开发的工作量很大。前端需要在页面上做一些类似 Excel 表格的操作，包括展示表格数据、联表计算、增加表格行列、调整列宽行高等等，尤其是因为表格的表头都是合并单元格组成的，难度才大大增加。业内没有特别好的解决方案，在线 Office 解决方案又功能太强，而且费用高昂，只能自己尝试解决。

刚开始表格的单元格数据都是自己手动来写的，光这部分的工作量就特别大；在页面上单元格的位置则采用绝对定位来做，发现加了动画之后，单元格在上百个数量级时渲染效率变低了，取消了动画后渲染效率明显提高。而且，刚开始做的更新和计算操作都是基于 DOM 元素的，因而渲染效率低是可想而知的。

后来，需求发生了几次变动，每次需求变动，表格单元格数据又得重新手动编辑，于是优化了数据格式，并抽象了方法来自动填充空白单元格，这之后的这部分工作量明显大幅下降。最重要的是，这一次引入 React.js 框架来渲染 Excel 表格，所有的更新数据操作都是在内存中完成，然后由 React 一次渲染到 DOM 中，加上 React 的虚拟 DOM 技术渲染效率大幅提升。

还有一个收获就是，第一次使用 React 的时候，应用状态管理采用了 Redux 方案，当时的 Action、Reducer 采用了官方 Demo 中典型的分离结构，发现项目代码量变大之后，这种分离的结构需要频繁的切换文件来编码，严重影响开发效率。所以，这一次参考了更多的资料，优化了 Action、Reducer 的结构，将其放在同一个文件中，更易查找。当然，还有更优的方案，后面在做项目过程中会不断的优化，来提高开发效率。

### 淮安市智能路灯管理平台

在接近年终的时候，10 月份左右接手了这个项目，我只负责前端的开发任务和部分技术文档的撰写。

- 任务

  前端开发人员，负责前端开发任务的完成，以及撰写部分技术文档。

- 过程

  在这个项目上，从开发开始到结束，我都尽可能尝试了新的东西，包括数据可视化库，CSS 框架和新的 React 组件库。同时，也遇到了之前 GIS 业务上没有遇到过的问题，地图属性查询、空间查询、编辑等操作，为了解决这些问题，还是耗费了一些精力。

- 收获

  从这个项目开始，我都尽可能的去尝试了新东西，前端新技术的迭代很快，能在业务中实践新的技术，对比分析优势和缺点，是非常难得的机会。

事实上，和这个项目放在一块的还有其它好几个小项目，就拿这个比较典型的总结一下。这些小项目为我提供了很多试错的机会，而且在下半年的工作计划当中，我的重心切换到了更新和扩宽自己的技术栈，恰好接手了这些小项目，而且做下来感觉不错，收获确实也很大。

第一个首先是尝试了新的设计风格的 CSS 框架，集中尝试了谷歌 Material Design 风格的框架，最后筛选了比较优秀的而且维护更新比较频繁的 Materialize.css，以及谷歌官方的 Material Design Lite。其次，也将之前使用的基于 Bootstrap 的 React 组件库 Reactstrap 替换成了遵循 Material Design 风格的 Material UI，这个过程中也学习了 CSS-In-JSS 相关的东西。最后呢，主要是更新了前端的工作流工具，将 Webpack 相关的工具都更新到最新，而且剔除了 Gulp 相关工具，由之前的 Gulp + Webpack 演进到现在的只用 Webpack 完成所有工作。

## 遗憾

回头去看 2018 年的工作情况，上半年还算充实，负责了一个项目，学习了解了项目管理上的很多东西，同时在建立前端自动化工作流和工程化实践方面做了很多工作；下半年基本上把精力都耗费在了继续完善前端工作流和工程化实践上面，在最后的阶段也尝试了很多新的工具和技术框架。

但是，现在细细想来，虽然收获挺多，但是遗憾也比较多。首先，没有机会尝试移动端的 Web 开发，自从年中就一直想在这方面进行尝试，但到目前为止没有实际项目机会去做，而且也在这方面花的时间和精力比较少；其次，一直想在 React 服务器端渲染（SSR）和 Node 这方面进行学习，扩展自己的服务器端技术栈，但苦于时间精力有限，而且也没有合适的业务场景供自己去试错。

## 总结

这一年是我自毕业工作以来，第一个完整的工作年，经历了很多事情，很多困难，目前为止也都逐一解决了，感到自己成长的也很快，很感谢公司给了这样的平台和机会，也很庆幸自己能抓住这些机会。生活还在继续，工作也进入了新的阶段，新的一年要更好的利用闲余时间，不断的提升自己的技术能力和分析问题的能力。
