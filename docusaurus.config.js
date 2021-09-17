/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "React Native Star System" /* title for your website */,
  tagline: "Cross Platform React Native UI Toolkit by Starbem",
  url: "https://starsystem.starbem.app/react-native" /* your website url */,
  baseUrl: "/" /* base url for your project */,
  projectName: "starsystem",
  organizationName: "Starbem",
  clientModules: [require.resolve("./snackPlayerInitializer.js")],
  /* path to images for header/footer */
  favicon: "/img/website/logo.png",
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  scripts: [
    "https://buttons.github.io/buttons.js",
    { src: "https://snack.expo.io/embed.js", defer: true },
  ],
  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        fromExtensions: ["html"],
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          homePageId: "getting_started",
          sidebarPath: require.resolve("./sidebars.json"),
          remarkPlugins: [require("./plugins/remark-snackplayer")],
          editUrl:
            "https://github.com/react-native-elements/react-native-elements/edit/next/website/",
          sidebarCollapsible: false,
        },
        theme: {
          customCss: require.resolve("./static/css/custom.css"),
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
    },
    navbar: {
      title: "React Native Star System",
      logo: {
        alt: "StarSystem React Native Logo",
        src: "/img/website/logo.png",
      },
      hideOnScroll: true,
      items: [
        { to: "docs/", label: "Documentation", position: "right" },
        {
          href: "https://github.com/StarBem/react-native-starsystem",
          label: "GitHub",
          position: "right",
        },
        // { to: "help", label: "Help", position: "right" },
        // { to: "blog", label: "Blog", position: "right" },
        {
          type: "docsVersionDropdown",

          position: "left",
          dropdownItemsAfter: [{ to: "versions", label: "All versions" }],
          // Do not add the link active class when browsing docs.
          dropdownActiveClassDisabled: true,
          docsPluginId: "default",
        },
      ],
    },
    googleAnalytics: {
      trackingID: "",
    },
    footer: {
      style: "dark",
      logo: {
        src: "img/logo.png",
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            },
            {
              label: "Components",
              to: "docs/overview",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Submit a bug or feature",
              to: "https://github.com/StarBem/react-native-starsystem/issues/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              to: "https://github.com/StarBem/react-native-starsystem",
            },
          ],
        },
      ],
    },
  },
};
