---
title: 如何更好的维护开源项目
tags:
  - 计算机技术
  - 工具
keywords: 
  - 计算机技术
  - 工具
  - 项目管理
summary: 一直以来开源精神被开发者所推崇，维护开源项目需要注意什么，有哪些工具可以帮助我们解决通用的复杂问题，值得学习了解。
ctime: '2022-04-22 22:53:00'
mtime: '2022-04-22 22:53:00'
---

　　一直以来，开源精神被开发者所推崇，开源项目为开发者提供了不用付出除时间以外任何成本就可以学习前沿技术的最佳途径，另一方面，我们应该思考开源为何会成功，在全球开发者参与协作的情况下代码仓库为何能保持整洁、不出现大规模冲突而奔溃，上下游依赖如何管理，这背后有既定的规范进行强约束，也有一系列社区工具来完成复杂而有价值的工作。所以，从参与或者维护开源项目的角度来看，这些**社区公认的最佳实践**值得我们了解，学习这些东西也能在一定程度上提高我们管理项目的能力。
  
　　以下内容属于经验积累，持续更新，仅供参考。
  
## 许可证（License）

　　代码本质上是开发者的创作成果，具有**专利权**，所以开发者应该意识到自己所享有的权利，同时在使用其他人所提供的代码时避免侵权。作为开源项目，有必要在开源之前选择一个合适的**许可证**，提前**声明权利和义务**（一般作为单独的 *LICENSE* 文本文件保存），避免在后期陷入麻烦之中，GitHub 官方为我们提供了一个简单的工具站点：
  
  > [Choose an open source license](https://choosealicense.com/)

　　另外，在如今很多人喜欢自由创作并分享的氛围下，创作者应该了解一个比较有用的许可证类型：
  
  > [Creative Commons licenses](https://creativecommons.org/)
  
## 贡献者许可协议（CLA）

　　对于一些大型开源项目，尤其是有商业公司背景的项目，个人开发者想参与贡献首先面临的是要签署相应的**贡献者许可协议（Contributor License Agreement, CLA）**，该协议本质上是要求开发者授予他们所贡献代码段的永久专利权，目前来看这是商业公司规避法律风险的一种通用做法。
  
　　作为示例，以下是 Facebook(Meta) 公司的贡献者许可协议：
  
  > [Contributing to Meta Open Source Projects](https://code.facebook.com/cla)
  
## 文档
  
　　我们知道，在全球开发者参与协作的背景下，口头沟通是不现实的（即便有条件，长期来看我认为依赖口头沟通是一件非常低效的事情），所以文档也就成了最关键的东西，无论对于使用开源项目的开发者还是维护开源项目的开发者，文档都成了达成共识的关键，各种类型的文档也成为了默认的规范。
  
### Markdown

　　首先，文档的载体是比较重要的，因为其必须满足易于使用、富有表现力的特点。Markdown 已是开发者群体使用最为广泛的文档格式了，目前许多创作者也用该格式来写博客文章，其最终可以被转换为 HTML 文件从而以更好的视觉效果发布在网络。
  
 　　Markdown 格式没有统一的规范，由于平台差异和实现差异，在一些细节处有略微不同或者增强，但通过了解 **CommonMark Spec** 来学习使用 Markdown 应该是一个好的开始：
   
   > https://commonmark.org/
  
　　这里有一个专门学习 Markdown 的网站，可以了解一些 Markdown 的扩展语法和相关的工具：
  
  > [Markdown Guide](https://www.markdownguide.org/)
  
　　除此之外，为了使用 Markdown 编写文档更方便，有一种将 [JSX](https://reactjs.org/docs/introducing-jsx.html) 和 Markdown 相结合的增强格式：
  
  > [MDX](https://mdxjs.com/)
  
### 自述文档

　　优秀的开源项目不仅仅只提供源代码，更附带了一系列非常有价值的文档，其中最基本且不可或缺的应该是**自述文档（READMEs）** 了（通常命名为 *README.md*），项目维护者应该通过这个文档向人们传递一些项目的基本信息，例如项目名称、作者的动机、建立项目的原因、解决了什么问题、简单的使用方法、注意事项、问题反馈途径、许可证、其它相关文档的引用链接等。
  
　　关于该文档的一些详细信息，可以看看 GitHub 官方对其的描述：
  
  > [About READMEs](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes)
  
　　也许，这里有一个更好的站点可以学习了解：
  
  > [Make a README](https://www.makeareadme.com/)
  
　　当然，对于一些刚开始的简单项目，可以借助一些社区提供的工具来自动生成自述文档，例如：
  
  > [readme-md-generator](https://github.com/kefranabg/readme-md-generator)
  
### 架构概述文档

　　对于一个大型复杂的项目来说，开发者参与贡献有一定的困难，这个困难体现在开发者无法了解庞大项目背后的整体架构设计理念和原则，难以评估局部代码改动对整体项目的影响，所以项目中如果拥有一个**架构概述文档（Architecture Overview）** 那么这种状况就会得到改善。
  
　　最简单的方式就是在项目中提供一个 *ARCHITECTURE.md*，通过下面这篇文章也可以进一步了解：
  
  > [ARCHITECTURE.md](https://matklad.github.io/2021/02/06/ARCHITECTURE.md.html)
  
　　作为示例，这是 Google 的一个项目的架构概述文档：
  
  > [crosvm Architecture](https://github.com/google/crosvm/blob/main/ARCHITECTURE.md)
  
　　事实上，架构概述文档不止是解决了贡献者参与困难的问题，也是一种非常有价值的学习资料，作为一种行业的通用方案，向社区公开其背后的架构设计理念，可以促进技术改进和变革。这里，以 React Native 的文档为例：
  
  > [React Native Architecture Overview](https://reactnative.dev/architecture/overview)

### 行为准则声明

　　开源社区之所以发展到如今的规模，是因为参与其中的人们遵守共同的价值观、具备契约精神，所以声明你的态度以及表明你的价值观会消除人们的不信任感，鼓励人们积极参与进来。
  
　　**开源社区的行为准则（A Code of Conduct for Open Source Communities）** 声明通常以 *CODE_OF_CONDUCT.md* 文档的形式存在于项目中，通过以下站点了解更多信息：
  
  > [Contributor Covenant](https://www.contributor-covenant.org/)

### 贡献指南文档

　　开源项目参与协作的开发者来自全球各个国家，他们有不同的习惯和文化，如何保证项目代码的整洁、风格统一、项目的管理不会由此崩溃，需要指导贡献者按照既定的规则完成整个过程的工作，社区通用的做法是在项目中提供一份**贡献指南（Contributing guidelines）** 文档，一般被命名为 *CONTRIBUTING.md*。
  
　　具体内容参考以下 Mozilla Science Lab 的文档：
  
  > [How to Build a CONTRIBUTING.md](https://mozillascience.github.io/working-open-workshop/contributing/)
  
　　作为示例，Atom 项目的贡献指南非常具有参考意义：
  
  > [Contributing to Atom](https://github.com/atom/atom/blob/master/CONTRIBUTING.md)

### RFC 文档

　　 **RFC (Request for Comments) 文档**在互联网世界是一个重要的存在，早期是网络技术标准工作组用来在互联网上针对即将推出的技术标准征求意见进行记录的，最著名的组织是 Internet Engineering Task Force (IETF)。
   
　　事实上，这种模式已在各行各业被采纳，作为开源项目来说，项目的主导方一般在大版本更新中预期引入的重大变化或者新的功能等也会采用 RFC 文档的形式向所有的贡献者和使用者等群体征求意见并记录，这也是项目维护团队针对项目进一步的发展方向达成共识的关键所在。
  
　　作为示例，以下是 React.js 官方的 RFC 文档仓库：
  
  > https://github.com/reactjs/rfcs
  
### 国际化与本地化

　　开源社区是全球开发者都可以参与其中的，所以文档方面应当考虑到[**国际化与本地化（i18n & L10n）**](https://en.wikipedia.org/wiki/Internationalization_and_localization)的有限支持，这里为什么说有限支持呢？因为文档的翻译事实上是比较耗费时间成本的一件事情，而且要有高质量的文档翻译则需要了解相应国家文化的人来完成这项工作，所以折衷方案是视项目情况而定，一般来说至少提供一份用国际通用语言英语编写的文档，再提供一份用项目核心开发者群体所在国家的主流语言编写的文档。
  
　　文档的命名应该相同，不同的是本地化的文档用相应的[语言标签](https://www.w3.org/International/articles/language-tags/)（参考[微软文档](https://docs.microsoft.com/en-us/cpp/c-runtime-library/language-strings)）进行标识，例如：

```
README.md
README.zh-CN.md
```
  
## 源代码管理

　　源代码管理通常借助 SVN 和 Git 等类似版本控制软件进行，现今主流的方案多是采用 Git，所以下面的内容可能更多的倾向于 Git 相关。
  
### Git 工作流

　　Git 非常适合多人协作的项目源代码管理，而协作的模式要视具体项目情况而定，一般来说社区推荐的有以下几种 **Git 工作流（Workflow）**，可以进行学习了解，根据情况采用或改进：
  
  - [Git Flow - A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)
  - [GitLab Flow](https://docs.gitlab.com/ee/topics/gitlab_flow.html)
  - [GitHub Flow](http://githubflow.github.io/)
  
### 提交信息格式

　　Git 的提交日志信息可能是除通过看源代码以外最快速最直观的了解某次提交做了哪些变动、对项目产生了哪些影响的最佳途径，所以项目拥有一个达成共识的**提交信息格式（Commit Message Format）** 的约束规则是保证项目质量的一大举措。
  
　　社区有一个推荐的提交信息格式的规范：
  
  > [Conventional Commits](https://www.conventionalcommits.org/)
  
　　作为示例，Google 的 Angular 项目的提交信息格式规范非常具有参考意义：
  
  > [Angular Commit Message Format](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format)
  
### 代码审查

　　开源项目的代码贡献是受严格控制的，一般来说参与者分为维护者（Maintainer）和贡献者（Contributor），贡献者对项目代码所做的更改需要提交 PR（Pull Request，GitLab 为 Merge Request）经过维护者的**代码审查（Code Review）** 后才能成功合并到项目中。
  
　　对于代码审查的意义，不仅在于控制项目的代码质量，还有益于项目成员之间进行相互学习。社区有非常多的代码审查指南可以进行参考，这里推荐谷歌的工程实践进行学习：
  
  > [Google Engineering Practices Documentation](https://google.github.io/eng-practices/)
  
## 软件发布的生命周期

　　无论是使用软件还是维护软件项目的开发者，都应该了解**软件发布的生命周期**，尽管现今的 Web 应用弱化了软件版本的概念。遵循行业惯例的好处是可以大大降低人们的理解成本，也能更好的融入社区，以下是关于软件发布的生命周期的详细信息，可以作为很好的参考进行学习：
  
  > [Software release life cycle](https://en.wikipedia.org/wiki/Software_release_life_cycle)
  
### 语义化版本控制
  
　　互联网软件会随着时间变化不断的迭代更新以提供新的功能和更好的用户体验，前面所说的软件发布的生命周期是一个概念性的东西，真正运用在软件发布过程中的则是一种推荐性规范**语义化版本控制（Semantic Versioning）**：
  
  > https://semver.org/
  
　　为了便于管理软件发布和版本控制，不同语言的生态中都有基于该规范所开发的一些自动化发布管理工具，借助这些工具则可以在遵守规范的同时省心省力，也不会因为手动管理导致出错。
  
### 变更日志

　　随着软件版本的迭代发布，应该维护一个**变更日志（Changelog）**，因为软件的版本号变动可传递的信息是有限的，尤其是对于大版本更新、重要问题修复以及破坏性更新等需要更多更详细的信息，这样便于依赖方、使用方对于是否同步更新版本进行决策，也对旧版本用户迁移到新版本有一个比较明确的向导信息。
  
　　开源项目的代码仓库中，比较常见的变更日志文件通常为 *CHANGELOG.md*，这也是一个社区公认的最佳实践，更多信息可以从以下站点进行了解：
  
  > [keep a changelog](https://keepachangelog.com/)

## DevOps

　　开源项目不同于商业公司的内部项目，缺少非常多的资源来保证项目的质量和管理，例如自动化测试、自动发布、自动漏洞监测修复等等，或者我们可以称之为 [**DevOps**](https://en.wikipedia.org/wiki/DevOps) 工具链。不过，好在现今有非常多的工具免费提供给开源项目使用，借助这些工具，我们可以让开源项目和商业公司的项目一样拥有规范的开发、测试、交付流程，从而保证项目质量，也能节省更多的时间专注于编码，而不是花费更多时间去做管理项目这种有价值但复杂又通用的事情。

　　下面推荐一些可以加入 CI/CD 工具链中的工具帮助开发者自动化完成开源项目的诸多管理工作。

### CI/CD 平台

- [CircleCI](https://circleci.com/)
- [GitHub Actions](https://github.com/features/actions)

### 代码审查与质量评估

- [Codacy](https://app.codacy.com/)
- [CodeFactor](https://www.codefactor.io/)

### 依赖更新

- [Renovate](https://docs.renovatebot.com/)

### 漏洞监测和修复

- [Snyk](https://snyk.io/)

### 版本控制和发布

- [semantic-release](https://semantic-release.gitbook.io/semantic-release/)

## 其它

### 财务管理

　　很多时候，开源是免费且无偿的，但开源的本质是源代码自由而不是技术免费，开源社区发展到至今繁荣的程度与参与者遵守共同的价值观有很大的关系，开源社区为改变世界的技术变革付出了很多。另一方面，正是在这种强包容性和开放性的社区环境氛围中，开源事业才发展的越来越好，现今有很多人可以因为自己的开源项目给别人带来商业价值而获得财务收益，对于更懂代码的开发者来说，如何进行项目的财务收益管理和分配成了个一个棘手的问题，而社区也给出了相应的方案来帮助项目维护者改善这个局面。
  
- [Open Source Collective](https://opencollective.com/opensource)
- [GitHub Sponsors](https://github.com/sponsors)

## 参考资料

- [The Turing Way](https://the-turing-way.netlify.app/)
- [Open Source Guides](https://opensource.guide/)