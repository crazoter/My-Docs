(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,m=d["".concat(c,".").concat(p)]||d[p]||b[p]||o;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),o=(n(0),n(110)),c=["components"],i={id:"usage",title:"Usage",sidebar_label:"Usage"},u={unversionedId:"docusaurus/usage",id:"docusaurus/usage",isDocsHomePage:!1,title:"Usage",description:"Setting up Docusaurus",source:"@site/docs/docusaurus/usage.md",slug:"/docusaurus/usage",permalink:"/My-Docs/docs/docusaurus/usage",editUrl:"https://github.com/crazoter/My-Docs/edit/main/docs/docusaurus/usage.md",version:"current",sidebar_label:"Usage",sidebar:"someSidebar",next:{title:"Style Guide",permalink:"/My-Docs/docs/docusaurus/doc1"}},s=[{value:"Setting up Docusaurus",id:"setting-up-docusaurus",children:[]},{value:"Adding content to Docusaurus",id:"adding-content-to-docusaurus",children:[]}],l={rightToc:s};function d(e){var t=e.components,n=Object(a.a)(e,c);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"setting-up-docusaurus"},"Setting up Docusaurus"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Follow the ",Object(o.b)("a",{parentName:"li",href:"https://v2.docusaurus.io/docs/installation"},"official documentation"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Note: you may have to refactor ",Object(o.b)("inlineCode",{parentName:"li"},"master")," branch in ",Object(o.b)("inlineCode",{parentName:"li"},".travis.yml")," to ",Object(o.b)("inlineCode",{parentName:"li"},"main"),", or whatever CI you use"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://docs.theochu.com/docusaurus/latex/"},"Add LaTeX"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"As of 10/31/2020, see Troubleshooting section and ensure ",Object(o.b)("inlineCode",{parentName:"li"},'"remark-math": "^3.0.1"')," in package.json. Re-install etc"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",{parentName:"li",href:"https://v2.docusaurus.io/docs/search"},"Setup search component"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Only after sufficient content")))),Object(o.b)("h2",{id:"adding-content-to-docusaurus"},"Adding content to Docusaurus"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Run the local server with ",Object(o.b)("inlineCode",{parentName:"li"},"npm run start")," or ",Object(o.b)("inlineCode",{parentName:"li"},"yarn run start")," to see the changes live."),Object(o.b)("li",{parentName:"ol"},"Add the markdown file into ",Object(o.b)("inlineCode",{parentName:"li"},"docs/")),Object(o.b)("li",{parentName:"ol"},"Update the sidebars.js",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Add category if needed"),Object(o.b)("li",{parentName:"ul"},"Order docs / categories if needed")))))}d.isMDXComponent=!0}}]);