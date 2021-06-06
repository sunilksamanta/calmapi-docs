/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CalmAPI Docs',
  tagline: 'Keep Calm and REST',
  url: 'https://docs.calmapi.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'sunilksamanta', // Usually your GitHub org/user name.
  projectName: 'calmapi', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'CalmAPI Docs',
      logo: {
        alt: 'CalmAPI',
        src: 'img/api.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Guide',
        },
        {href: 'https://calmapi.dev', label: 'Web', position: 'left'},
        {
          href: 'https://github.com/sunilksamanta/calmapi',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sunilksamanta',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/sunilksamanta',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Web',
              href: 'https://calmapi.dev',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CalmAPI.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/sunilksamanta/calmapi-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://calmapi.dev',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
