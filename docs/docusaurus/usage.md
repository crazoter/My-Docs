---
id: usage
title: Usage
sidebar_label: Usage
---

## Setting up Docusaurus
1. Follow the [official documentation](https://v2.docusaurus.io/docs/installation)
    * Note: you may have to refactor `master` branch in `.travis.yml` to `main`, or whatever CI you use
2. [Add LaTeX](https://docs.theochu.com/docusaurus/latex/)
    * As of 10/31/2020, see Troubleshooting section and ensure `"remark-math": "^3.0.1"` in package.json. Re-install etc
3. [Setup search component](https://v2.docusaurus.io/docs/search)
    * Only after sufficient content

## Adding content to Docusaurus
1. Run the local server with `npm run start` or `yarn run start` to see the changes live.
2. Add the markdown file into `docs/`
3. Update the sidebars.js
      * Add category if needed
      * Order docs / categories if needed