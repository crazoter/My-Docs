const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: 'Matt\'s Docs',
  tagline: 'My notes for everything related to Computer Science',
  url: 'https://crazoter.github.io',
  baseUrl: '/My-Docs/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'crazoter', // Usually your GitHub org/user name.
  projectName: 'My-Docs', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'Matt\'s Docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ibuki.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/crazoter/My-Docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/matthew-lee-6a8a8a70/',
            },
            {
              label: 'Portfolio',
              href: 'https://crazoter.github.io',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Matt's Docs, crazoter. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        hideableSidebar: true,
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/crazoter/My-Docs/edit/master/website/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/crazoter/My-Docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          hideableSidebar: true,
        },
      },
    ],
  ],
  // themes: ['@docusaurus/theme-classic'],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X',
      crossorigin: 'anonymous',
    },
  ],
};
