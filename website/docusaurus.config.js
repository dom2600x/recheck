// @ts-check

const math = require("remark-math");
const katex = require("rehype-katex");
const { themes } = require("prism-react-renderer");

const { github: lightCodeTheme, dracula: darkCodeTheme } = themes;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "recheck",
  tagline: "The trustworthy ReDoS checker",
  url: "https://makenowjust-labs.github.io",
  baseUrl: "/recheck/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "makenowjust-labs",
  projectName: "recheck",
  trailingSlash: true,

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/makenowjust-labs/recheck/tree/main/website",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          path: "blog",
          editUrl:
            "https://github.com/makenowjust-labs/recheck/tree/main/website/blog",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-GY3CQZBPM2",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: ["@docusaurus/plugin-ideal-image"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "recheck",
        logo: {
          alt: "recheck logo",
          src: "img/logo-light.svg",
          srcDark: "img/logo-dark.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Docs",
          },
          {
            to: "playground",
            position: "left",
            label: "Playground",
          },
          {
            to: "blog",
            position: "left",
            label: "Blog",
          },
          {
            href: "https://github.com/makenowjust-labs/recheck",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/docs/intro",
              },
              {
                label: "Usage",
                to: "/docs/category/usage",
              },
              {
                label: "Internals",
                to: "/docs/category/internals",
              },
            ],
          },
          {
            title: "Try",
            items: [
              {
                label: "Playground",
                to: "/playground",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Repository",
                href: "https://github.com/makenowjust-labs/recheck",
              },
              {
                label: "Labs",
                href: "https://github.com/makenowjust-labs",
              },
            ],
          },
        ],
        copyright: `Copyright © 2020-2025 TSUYUSATO "MakeNowJust" Kitsune. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["java", "scala"],
      },
      image: "img/social.png",
      algolia: {
        appId: "G4MPILTIZG",
        apiKey: "5cd3ac1c5965dcb57033451f3bd12ed8",
        indexName: "recheck",
        contextualSearch: false,
      },
    }),

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",
      integrity:
        "sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV",
      crossorigin: "anonymous",
    },
  ],

  customFields: {
    version: process.env["RECHECK_VERSION"] ?? "0.0.0-dev",
  },
};

module.exports = config;
