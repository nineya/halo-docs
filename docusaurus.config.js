const darkCodeTheme = require("prism-react-renderer/themes/palenight");
const math = require("remark-math");
const katex = require("rehype-katex");
const mermaid = require("mdx-mermaid");
const VersionsArchived = require("./versionsArchived.json");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Halo Plus Documents",
  tagline: "Halo Plus 博客系统的文档站点",
  url: "https://docs.halo-plus.nineya.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon-96x96.png",
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },
  organizationName: "nineya", // Usually your GitHub org/user name.
  projectName: "halo", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/nineya/halo-docs/edit/master/",
          routeBasePath: "/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          remarkPlugins: [math, mermaid],
          rehypePlugins: [katex],
          lastVersion: "1.0.0",
          versions: {
            current: {
              label: "1.1.0-SNAPSHOT",
              path: "1.1.0-SNAPSHOT",
            },
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
        googleAnalytics: {
          trackingID: "UA-110780416-7",
        },
        gtag: {
          trackingID: "UA-110780416-7",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "Halo Plus",
        logo: {
          alt: "Halo Plus Logo",
          src: "https://halo.run/upload/2021/03/Adaptive256-463ca9b92e2d40268431018c07735842.png",
        },
        items: [
          {
            href: "https://www.nineya.com",
            label: "官网",
          },
          {
            href: "https://github.com/nineya/halo-theme-dream",
            label: "Dream 主题",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              ...Object.entries(VersionsArchived).map(
                ([versionName, versionUrl]) => ({
                  label: versionName,
                  href: versionUrl,
                })
              ),
              {
                to: "/versions",
                label: "All versions",
              },
            ],
          },
          {
            href: "https://github.com/nineya",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © 2023 <a target="_blank" href="https://www.nineya.com/">玖涯</a>. Built with Docusaurus.`,
        links: [
          {
            title: "关于",
            items: [
              {
                label: "Halo 官网",
                href: "https://halo.run",
              },
              {
                label: "主题仓库",
                href: "https://halo.run/themes.html",
              },
              {
                label: "GitHub 组织",
                href: "https://github.com/nineya",
              },
            ],
          },
          {
            title: "社区",
            items: [
              {
                label: "玖涯博客",
                href: "https://blog.nineya.com",
              },
              {
                label: "微信公众号",
                href: "https://blog.nineya.com/upload/2023/05/%E6%9C%AA%E6%A0%87%E9%A2%98-2.png",
              },
              {
                label: "QQ 群申请",
                href: "https://qm.qq.com/cgi-bin/qm/qr?k=X7p7Bs21cgtkQ0dRfzmBsuWqNNQc10hn&jump_from=webapi",
              },
              {
                label: "GitHub Issues",
                href: "https://github.com/nineya/halo-theme-dream/issues",
              },
            ],
          },
        ],
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        apiKey: "467851b5fe10660c39725b16cd038571",
        indexName: "halo-plus-nineya",
        contextualSearch: true,
        appId: "JZ0757H3PF",
      },
    }),
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          {
            to: "/getting-started/install/linux",
            from: [
              "/zh/install",
              "/install",
              "/zh/install/index",
              "/install/index",
              "/zh/install/linux",
              "/install/linux",
            ],
          },
          {
            to: "/getting-started/install/docker",
            from: ["/zh/install/docker", "/install/docker"],
          },
          {
            to: "/getting-started/install/other/bt-panel",
            from: ["/zh/install/bt-panel", "/install/bt-panel"],
          },
          {
            to: "/getting-started/install/other/oneinstack",
            from: ["/zh/install/oneinstack", "/install/oneinstack"],
          },
          {
            to: "/getting-started/install/other/tencent-cloudbase",
            from: [
              "/zh/install/tencent-cloudbase",
              "/install/tencent-cloudbase",
            ],
          },
          {
            to: "/getting-started/prepare",
            from: ["/zh/install/prepare", "/install/prepare"],
          },
          {
            to: "/getting-started/config",
            from: ["/zh/install/config", "/install/config"],
          },
          {
            to: "/getting-started/upgrade",
            from: ["/zh/install/upgrade", "/install/upgrade"],
          },
          {
            to: "/getting-started/downloads",
            from: ["/zh/install/downloads", "/install/downloads"],
          },
          {
            to: "/user-guide/backup-migration",
            from: ["/zh/user-guide/backup-migration"],
          },
          {
            to: "/user-guide/markdown",
            from: ["/zh/user-guide/markdown"],
          },
          {
            to: "/developer-guide/core/structure",
            from: ["/zh/developer-guide/core", "/developer-guide/core"],
          },
          {
            to: "/developer-guide/theme/prepare",
            from: ["/zh/developer-guide/theme", "/developer-guide/theme"],
          },
          {
            to: "/contribution/issue",
            from: ["/zh/contribution/issue"],
          },
          {
            to: "/contribution/pr",
            from: ["/zh/contribution/pr"],
          },
        ],
        createRedirects(existingPath) {
          // if (existingPath.startsWith("/1.5/")) {
          //   return [
          //     existingPath.replace("/1.5/", "/1.5.4/"),
          //     existingPath.replace("/1.5/", "/1.5.0/"),
          //   ];
          // }
          return undefined;
        },
      },
    ],
  ],
  scripts: [
    {
      src: "https://analytics.halo.run/umami.js",
      async: true,
      defer: true,
      "data-website-id": "7e8d48ad-973d-4b44-b36d-ea1f1df25baa",
    },
  ],
  stylesheets: [
    {
      href: "https://unpkg.com/katex@0.12.0/dist/katex.min.css",
      type: "text/css",
    },
  ],
};

module.exports = config;
