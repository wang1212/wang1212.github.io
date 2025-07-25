// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  future: {
    v4: true,
    experimental_faster: true,
  },

  title: '不如怀念',
  tagline: '记录 分享 交流 思考',
  url: 'https://wang1212.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wang1212', // Usually your GitHub org/user name.
  projectName: 'wang1212.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    // defaultLocale: 'en',
    // locales: ['en'],
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  // https://docusaurus.io/docs/markdown-features/diagrams
  markdown: {
    format: 'detect',
    mermaid: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        docs: false,
        blog: {
          routeBasePath: '/', // Serve the blog at the site's root
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wang1212/wang1212.github.io/tree/master/',
          // blogSidebarCount: 'ALL',
          // blogSidebarTitle: '所有文章',
          blogSidebarCount: 10,
          blogSidebarTitle: '近期文章',
          // postsPerPage: 10,
          onUntruncatedBlogPosts: 'throw',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        language: ['en', 'zh'],
        hashed: true,
        indexDocs: false,
        blogRouteBasePath: '/',
      },
    ],
    '@docusaurus/theme-mermaid',
  ],

  plugins: ['plugin-image-zoom'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '不如怀念',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          { to: '/archive', label: '归档', position: 'left' },
          // { to: '/tags', label: '标签', position: 'left' },
          // { to: '/record', label: '记录', position: 'left' },
          { to: '/timeline', label: '历程', position: 'left' },
          {
            href: 'https://wang1212.github.io/awesome-favorites-list',
            label: '精选资源',
            position: 'right',
          },
          // { to: '/resource', label: '资源', position: 'left' },
          // {
          //   href: 'https://github.com/wang1212/wang1212.github.io',
          //   label: 'Source',
          //   position: 'right',
          // },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '关于我',
            items: [
              {
                label: 'Email',
                href: 'mailto:mrwang1212@126.com',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/wang1212',
              },
              {
                label: 'Gitee',
                href: 'https://gitee.com/i_wang1212',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Awesome Favorites List',
                href: 'https://wang1212.github.io/awesome-favorites-list',
              },
              {
                label: 'The Book Of Ruby (ZH)',
                href: 'https://wang1212.github.io/the-book-of-ruby',
              },
              {
                label: 'Apache ECharts APIs Guide',
                href: 'https://wang1212.github.io/echarts-api-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Blog. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      mermaid: {
        theme: { light: 'default', dark: 'dark' },
      },
      imageZoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'
        selector: '.markdown img',
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          margin: 24,
          background: 'rgba(0,0,0,.75)',
          scrollOffset: 0,
          // container: '#zoom-container',
          // template: '#zoom-template',
        },
      },
    }),

  //
};

export default config;
