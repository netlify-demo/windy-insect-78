/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: '{{COMPANY}} Dev Docs',
  tagline: 'A brand new Docusaurus site, deployed to Netlify',
  url: 'https://your-docusaurus-test-site.com', // TODO
  baseUrl: '/',

  projectName: 'netlify-dev-docs',
  organizationName: 'netlify',

  headerLinks: [
    {href: '/', label: 'Home'},
    {doc: 'intro', label: 'Docs'},
    {href: 'https://netlify.com/enterprise', label: 'Contact', external: true},
  ],


  /* path to images for header/footer */
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#506E7C',
    secondaryColor: '#506E7C',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Acme, Inc.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',

  cleanUrl: true,

  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',

};

module.exports = siteConfig;
