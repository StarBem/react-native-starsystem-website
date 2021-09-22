/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "React Native Star System" /* title for your website */,
  tagline: "Cross Platform React Native UI Toolkit by Starbem",
  url: "https://starsystem.starbem.app" /* your website url */,
  baseUrl: "/" /* base url for your project */,
  projectName: "starsystem",
  organizationName: "Starbem",
  clientModules: [require.resolve("./snackPlayerInitializer.js")],
  /* path to images for header/footer */
  favicon: "/img/website/logo.png",
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  scripts: ["https://buttons.github.io/buttons.js"],
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
          homePageId: "getting_started",
          path: "docs",
          sidebarPath: require.resolve("./sidebars.json"),
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
        { to: "docs/", label: "Docs", position: "right" },
        { to: "docs/overview", label: "Components", position: "right" },
        {
          href: "https://github.com/StarBem/react-native-starsystem",
          label: "GitHub",
          position: "right",
        },
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
    // googleAnalytics: {
    //   trackingID: "",
    // },
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
              label: "Starbem",
              to: "https://starbem.app",
            },
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
