---

    {
        "title": "技术栈",
        "keywords": ["Technology stack"],
        "summary": "作为一名开发者，定期对自己的技术栈，常用开发工具、框架、库做一个分析总结，适时更新自己的技术储备。",
        "ctime": "2018-12-02 15:43:00",
        "mtime": "2019-03-19 10:08:00"
    }

---

## 开发工具

　　首先，是一些自己平时进行开发工作常用的工具。

- **IDE/编辑器**

> **Sublime Text：** http://www.sublimetext.com/ <br>
> **Visual Studio Code：** https://code.visualstudio.com/

　　作为一名前端开发者，Electron 在国内还不是很流行的时候，当然用的是 Sublime Text 了，一个用 Python 写的轻量级开源编辑器，简直颠覆了我对编辑器的认知。但是，前端的开发工作还是比较复杂的，单纯的编辑器还不能提供更多的自动化辅助开发方案。随着 Electron 类似技术的成熟，出现了一批基于 Web 技术开发的桌面端跨平台 IDE（或者说处于编辑器和 IDE 之间的一个开发工具平台），例如 Atom、VS Code，当然 Visual Studio Code 作为微软向开源转型过程中打造出的一款轻量级开源 IDE，在这几年发展过程中也逐渐建立起了插件生态，受到了很多开发者的青睐，可以说是前端开发者的工作利器。

> **Eclipse：** https://www.eclipse.org/

　　Eclipse 应该是 Java 开发者使用的最常见的 IDE 了，而 Java Web 可以说是目前 Web 技术体系中最成熟、最可靠的方案，所以偶尔也看看 Java、Sevlet、Tomcat 等等这方面的东西，以了解 Web 开发过程中整个前端到服务器端的技术理论体系。

- **源代码版本控制工具**

> **Tortoise SVN：** https://tortoisesvn.net/ <br>
> **Git：** https://git-scm.com/

　　项目的源代码一般会由一个团队中多个成员来共同开发维护、迭代升级，为了更好的追踪每个人对源代码所做的任何修改，最终可以方便的合并多个人的修改，以及存储每个版本的源代码快照记录，提供恢复、备份等操作，会用到版本控制工具。目前，主要有 SVN 和 Git 两种最常用的工具。SVN 是一款比较古老的基于中心化管理，使用起来较为简单的版本控制工具，Tortoise SVN 提供了图形界面，可以更方便的使用 SVN；Git 则是新一代的基于分布式管理，使用起来略微复杂的版本控制工具，开源代码托管平台 GitHub 就是基于 Git 建立的，建议直接在 Bash 终端中通过命令使用 Git 更方便。

- **包管理器**

> **npm：** https://www.npmjs.com/ <br>
> **yarn：** https://yarnpkg.com/

　　npm 是一个 Node 模块包管理工具，一般都随 Node.js 一起安装，应该是前端开发者最先接触到的包管理器了。后来由于一些 npm 的缺陷问题，yarn 出现了，它使用了并行下载安装、缓存、离线模式等特性显著提高了依赖的安装速度和准确性，值得一试。

> **pip：** https://pypi.org/project/pip/

　　pip 是一个现代化的，通用的 Python 包管理工具，通过该工具安装下载的 Python 包模块均来自于 Python 官方维护的第三方包存储库 PyPI（Python Package Index ）。

> **RubyGems：** https://rubygems.org/

　　RubyGems 是 Ruby 的包管理工具，与 npm、pip 那些功能类似。

## Web 前端

　　这里主要是一些 Web 前端相关的，自己已经掌握或者曾经使用过的框架、库等东西。

- **项目构建工具**

> **Webpack：** https://webpack.js.org/ <br>
> **Gulp：** https://gulpjs.com/

　　项目构建工具主要是自动化完成一些代码、图片优化、压缩的工作，提供 js 模块的打包和依赖构建功能，之前是 gulp 和 webpack 混合着用，现在基本上只用 webpack 了。

> **Sass：** http://sass-lang.com/ <br>
> **PostCss：** https://gulpjs.com/

　　这些工具都是与 CSS 相关的，主要是提供一些像写代码的方式去写 CSS ，例如提高复用、可维护性，顺带着处理一下浏览器的兼容性问题。刚开始的时候 CSS 预处理器其实有 Less 和 Sass 两个选择，但 Sass 似乎未来的发展更好一些，所以一直用的都是 Sass。后来，又出现了 CSS 后处理器 PostCss，新技术引领着趋势，尝试了下感觉还挺好用。

> **Babel：** https://babeljs.io/

　　Babel 主要是将我们编写的 ES6/7/8 代码编译成可以在现代化浏览器中运行的 ES5+ 代码。有了 Babel 之后，使用新的 JavaScript 语言特性编写代码要更高效、方便，显著缩短开发时间。

- **PWA（Progressive Web App）**

　　PWA（Progressive Web App，渐进式 Web 应用）是一种理念，使用多种技术来增强 Web App 的功能，可以让网站的体验变得更好，能够模拟一些原生功能，比如通知推送。

> **WorkBox：** https://developers.google.com/web/tools/workbox/

　　谷歌（Google）作为 PWA 的先行者，Web 标准的推动者，一直引领着 Web 前沿开发技术，WorkBox 就是专门为构建 PWA 应用提供的一套开发工具，支持多个平台，并提供了方便的 Webpack 插件。

- **图标库**

> **Font Awesome：** https://fontawesome.com/ <br>
> **Material Icons（google）：** https://material.io/tools/icons/ <br>
> **Material Design Icons：** http://materialdesignicons.com/ <br>
> **Flat Icon：** https://www.flaticon.com/ <br>
> **Icons8：** https://icons8.com/ <br>
> **Iconfont：** http://www.iconfont.cn/

　　界面上多用一些图标会增加用户体验效果，Font Awesome 是之前 Bootstrap 3.X 版本官方采用的矢量图标库，目前来说还是很好用的。

- **CSS 库/框架**

> **Normalize：** http://necolas.github.io/normalize.css/

　　Normalize 将所有不同浏览器的元素默认样式进行了统一，是一个类似于 Reset CSS 的工具库。

> **Bootstrap：** https://getbootstrap.com/ <br>
> **Materialize：** https://materializecss.com/ <br>
> **Material Design Lite：** https://getmdl.io <br>
> **Material Components Web：** https://material.io/develop/ <br>
> **UIkit：** https://getuikit.com/ <br>
> **Pure：** https://purecss.io/

　　CSS 库/框架对于开发者来说，提供了一种快速实现用户界面（UI）的工具。前端的发展分支很多，注重了 js 模块化和交互逻辑，必然对 CSS（UI）花费的时间就要少了，Bootstrap 恰好是一个成熟并且便捷的可以快速实现用户界面的 CSS 库/框架。而 Materialize 则是一个可以媲美 Bootstrap 的基于 Material Design 的前端 CSS 框架。

　　Material Design Lite 是谷歌官方提供的一套轻量级 CSS 库/框架，遵循了谷歌自己提出来的 Material Design 风格，还是挺不错的；而 Material Components Web（MDC-Web）则是前者的后续产品。

- **JS 库/框架**

> **jQuery：** https://jquery.com/

　　jQuery 相信是每个前端开发者入门学习使用的 js 库，为我们提供了很多便捷的操作 DOM 的方法，同时也处理了诸多 js 兼容性问题。至今，各大网站 jQuery 的身影依然到处可见。

> **Lodash：** https://lodash.com/

　　Lodash 是一个 JavaScript 的工具函数库，提供了很多针对字符串、数组、对象等类型数据的处理方法，内部也结合了惰性计算对性能做了优化，是一个不错的工具。

> **axios：** https://www.npmjs.com/package/axios

　　axios 是一个支持现代化浏览器的基于 Promise 的 HTTP 客户端工具。

### 数据可视化

　　作为 Web 前端开发者来说，数据可视化是个很常见，并且非常重要的需求。

> **Chart.js：** https://www.chartjs.org/ <br>
> **Echarts：** http://echarts.baidu.com/ <br>
> **D3：** https://d3js.org/

　　如何将数据有效、直观的呈现给用户是非常重要的，数据可视化的解决方案很多，但通用且功能齐全的不多，国内的 Echarts 还算不错，只是文档太烂（源码有 java 的味道），Chart.js 则是一个开源、轻量级的图表库，很好用。D3.js 是一个可定制化并且功能强大的数据可视化图形库，学习曲线略高。

### React

> **React：** https://reactjs.org/

　　事实上，我觉得还是有必要将 React 独立出来的，因为 React 代表了前端开发的一种实现方式和技术生态圈，是一整套的解决方案。刚开始，其实面临着两种选择，React 和 Vue，后者属于前者的模仿和追赶超越者，当然它们都有各自的特色，我出于喜欢 jsx 语法和 React 有 facebook 这种大型项目成功案例等原因，选择了 React。

> **Redux：** https://redux.js.org/ <br>
> **Redux-Thunk：** https://github.com/reduxjs/redux-thunk <br>
> **Redux-Logger：** https://github.com/LogRocket/redux-logger

　　由于 React 的数据是单向流动的，因此父子组件要实现交互其实挺麻烦的，需要依靠 props 和回调来实现。这个时候 Redux 就充当了应用状态管理角色，来统一管理应用的全部状态，并在应用中随处可访问。Redux-Thunk 则解决了 Redux 默认的同步更新状态的问题，现代化 Web 应用大多都依赖于 ajax、fetch 异步获取数据，Redux-Thunk 则提供了异步更新状态的解决方案。Redux-Logger 则是一个工具，提供了 Redux 中状态更新日志记录的功能，主要是为了方便开发者调试。

　　当然，Redux 的替代方案目前有很多，听说 Mbox 也不错，后面会尝试一下。

> **React-Router：** https://reacttraining.com/react-router/

　　目前，前端开发已经承担了过去很多未曾想过的工作，之前页面的路由跳转都是由服务器端来控制，现在在前后端分离的趋势下服务器端只负责数据的业务逻辑计算，其它的工作（例如路由控制）均交由前端来完成。这样做的好处也是显而易见的，前端拥有了更多的自主权，SPA 应用的用户体验也更好了。React-Router 就是一个 React 应用中的前端路由解决方案。

> **React-Loadable：** https://github.com/jamiebuilds/react-loadable

　　SPA 应用通常打包之后文件都很大，客户端的网络状况也需要考虑，所以就需要分模块实现懒加载。我们自己可以利用 js 语言本身的一些特性（例如 import 动态导入）实现懒加载，但是 React-Loadable 提供了一种将模块组件实现懒加载的优化方案，帮我们处理了很多细节性问题。

> **reactstrap：** https://reactstrap.github.io/ <br>
> **Material-UI：** https://material-ui.com/

　　在 React 应用中，一切皆组件，并遵循相应的状态管理规则。为了快速实现用户界面（UI），单纯的使用 Bootstrap 还需要自行编写额外的代码，其官方也没有实现 Bootstrap 的 React 组件，不过部分民间开发者做了这些工作，我从中挑选了一个觉得实现的比较好的，也就是 reactstrap。

　　Material-UI 则是遵循谷歌 Material Design 的基于 React 的 CSS 组件库。

### Web GIS

　　GIS 是当前一个热门领域，未来前景也相当好，随着 Web 技术的发展， Web GIS 也成了 GIS 行业的技术发展趋势。

> **Leaflet：** https://leafletjs.com/ <br>
> **Esri Leaflet：** https://github.com/Esri/esri-leaflet

　　Leaflet 是一个轻量级、移动端优先的 Web GIS 库，伴随着移动应用成为主流，Leaflet 的发展前景相当好。Leaflet 的扩展是通过插件机制实现的，Esri Leaflet 则是 ESRI 官方基于 Leaflet 针对 ArcServer 的 JavaScript API 的实现，以插件形式提供。

> **Openlayers：** https://openlayers.org/

　　Openlayers 是一个高性能的 Web GIS 库，提供的功能非常全面，但相比于 Leaflet，它在移动端体验稍逊，而且没有 Leaflet 使用起来简单，但它仍是一个值得学习的 Web GIS 库。

> **Cesium：** https://cesiumjs.org/

　　Cesium 是一个开源的，可构建全球 3D 场景的 Web GIS 库，目前在三维地图领域应该算是最好的开源方案了，值得学习。

> **Mapbox GL：** https://docs.mapbox.com/mapbox-gl-js/overview/

　　Mapbox 作为近年来在全球发展前景越来越好的开源地图服务公司，产出了相当多的开源 GIS 工具套件，覆盖了 Web 端、移动端、桌面端。Mapbox GL JS 就是一款支持 2 维、3 维地图渲染，支持加载矢量瓦片的开源 Web 地图引擎，效果与性能也都非常好。

## 服务器端

　　这里主要是一些服务器端相关的工具，开发框架等。

> **Nginx：** http://nginx.org/

　　Nginx 目前主要是作为一个反向代理服务器来使用，还有就是在分布式系统中作为前端服务器配置负载均衡器，也可以单纯的作为一个静态资源服务器。

> **Tomcat：** http://tomcat.apache.org/

　　因为 Java Web 是相对来说很成熟、很可靠的 Web 开发技术解决方案，Tomcat 作为一个动态容器也是 Java Web 技术体系中核心部分之一，作为前端开发者去了解下服务器端的知识还是很有必要的。

> **Express：** http://expressjs.com/

　　Express 是目前最成熟的 Node web 服务器，大多数时候可以作为前端开发的一个辅助工具，当然也可以利用 Express 做一些服务器端渲染的性能优化方案。