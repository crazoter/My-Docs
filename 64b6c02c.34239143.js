(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{110:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=r.a.createContext({}),l=function(e){var t=r.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return r.a.createElement(m.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(a),u=n,d=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return a?r.a.createElement(d,s(s({ref:t},m),{},{components:a})):r.a.createElement(d,s({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var m=2;m<o;m++)i[m]=a[m];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(110)),i=["components"],s={title:"Problems"},c={unversionedId:"markdown/problem_summaries",id:"markdown/problem_summaries",isDocsHomePage:!1,title:"Problems",description:"A quick reference to known problems and their solutions, ordered by the type of problem.",source:"@site/docs/markdown/problem_summaries.md",slug:"/markdown/problem_summaries",permalink:"/My-Docs/docs/markdown/problem_summaries",editUrl:"https://github.com/crazoter/My-Docs/edit/main/docs/markdown/problem_summaries.md",version:"current",sidebar:"someSidebar",previous:{title:"Formal Verification",permalink:"/My-Docs/docs/markdown/formal_verification"},next:{title:"CS2102 Databases (Closed book, 1pg cheatsheet)",permalink:"/My-Docs/docs/markdown/CS2102"}},m=[],l={rightToc:m};function p(e){var t=e.components,a=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A quick reference to known problems and their solutions, ordered by the type of problem."),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://leetcode.com/explore/featured/card/january-leetcoding-challenge-2021/579/week-1-january-1st-january-7th/3589/"},"Verify if list of items can be represented by blocks of items")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Inputs"),": ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"A: List of ",Object(o.b)("strong",{parentName:"li"},"unique")," integers"),Object(o.b)("li",{parentName:"ul"},"B: List of integer sequences (e.g. ",Object(o.b)("inlineCode",{parentName:"li"},"[1,3]"),") comprising of ",Object(o.b)("strong",{parentName:"li"},"unique")," integers"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Task"),":",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Verify A can be created by only concatenating the sequences in B"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Solution"),": Amortized Time & Space O(n)",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Assume uniqueness of items and correctness of input (e.g. A and B's contents are of the same length, all items unique)"),Object(o.b)("li",{parentName:"ol"},"Create an index lookup for A using a hashtable."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("span",{parentName:"li",className:"math math-inline"},Object(o.b)("span",{parentName:"span",className:"katex"},Object(o.b)("span",{parentName:"span",className:"katex-mathml"},Object(o.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(o.b)("semantics",{parentName:"math"},Object(o.b)("mrow",{parentName:"semantics"},Object(o.b)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2200")),Object(o.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\forall")))),Object(o.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(o.b)("span",{parentName:"span",className:"base"},Object(o.b)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),Object(o.b)("span",{parentName:"span",className:"mord"},"\u2200")))))," blocks in B, verify that ",Object(o.b)("span",{parentName:"li",className:"math math-inline"},Object(o.b)("span",{parentName:"span",className:"katex"},Object(o.b)("span",{parentName:"span",className:"katex-mathml"},Object(o.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(o.b)("semantics",{parentName:"math"},Object(o.b)("mrow",{parentName:"semantics"},Object(o.b)("mi",{parentName:"mrow",mathvariant:"normal"},"\u2200")),Object(o.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\forall")))),Object(o.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(o.b)("span",{parentName:"span",className:"base"},Object(o.b)("span",{parentName:"span",className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}}),Object(o.b)("span",{parentName:"span",className:"mord"},"\u2200")))))," items, ",Object(o.b)("inlineCode",{parentName:"li"},"index > -1")," and items have consecutive indexes (i.e. ",Object(o.b)("inlineCode",{parentName:"li"},"index == prevIndex + 1")," except the first index)")))))}p.isMDXComponent=!0}}]);