(window.webpackJsonp=window.webpackJsonp||[]).push([[51,52],{109:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(110),c=n(114),l=n(21),i=n(119),s=n(2),u=n(6),p=n(111),m=n(113),d=n(141),y=n(115),f=n(138),h=n(139),b=n(140),g=n(137),v=n(112),k=n(124),j=n(67),O=n.n(j),E=["item","onItemClick","collapsible","activePath"],N=["item","onItemClick","activePath","collapsible"];var w=function e(t,n){return"link"===t.type?Object(d.a)(t.href,n):"category"===t.type&&t.items.some((function(t){return e(t,n)}))};function x(e){var t,n,o,c=e.item,l=e.onItemClick,i=e.collapsible,m=e.activePath,d=Object(u.a)(e,E),y=c.items,f=c.label,h=w(c,m),b=(n=h,o=Object(a.useRef)(n),Object(a.useEffect)((function(){o.current=n}),[n]),o.current),g=Object(a.useState)((function(){return!!i&&(!h&&c.collapsed)})),v=g[0],k=g[1];Object(a.useEffect)((function(){h&&!b&&v&&k(!1)}),[h,b,v]);var j=Object(a.useCallback)((function(e){e.preventDefault(),k((function(e){return!e}))}),[k]);return 0===y.length?null:r.a.createElement("li",{className:Object(p.a)("menu__list-item",{"menu__list-item--collapsed":v}),key:f},r.a.createElement("a",Object(s.a)({className:Object(p.a)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&h},t[O.a.menuLinkText]=!i,t)),onClick:i?j:void 0,href:i?"#!":void 0},d),f),r.a.createElement("ul",{className:"menu__list"},y.map((function(e){return r.a.createElement(P,{tabIndex:v?"-1":"0",key:e.label,item:e,onItemClick:l,collapsible:i,activePath:m})}))))}function C(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=(e.collapsible,Object(u.a)(e,N)),c=t.href,l=t.label,i=w(t,a);return r.a.createElement("li",{className:"menu__list-item",key:l},r.a.createElement(v.a,Object(s.a)({className:Object(p.a)("menu__link",{"menu__link--active":i}),to:c},Object(k.a)(c)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),l))}function P(e){switch(e.item.type){case"category":return r.a.createElement(x,e);case"link":default:return r.a.createElement(C,e)}}var _=function(e){var t,n,o=e.path,l=e.sidebar,i=e.sidebarCollapsible,u=void 0===i||i,d=Object(a.useState)(!1),k=d[0],j=d[1],E=Object(m.a)().navbar,N=E.title,w=E.hideOnScroll,x=Object(c.a)().isClient,C=Object(b.a)(),_=C.logoLink,T=C.logoLinkProps,S=C.logoImageUrl,I=C.logoAlt,D=Object(y.a)().isAnnouncementBarClosed,L=Object(g.a)().scrollY;Object(f.a)(k);var M=Object(h.a)();return Object(a.useEffect)((function(){M===h.b.desktop&&j(!1)}),[M]),r.a.createElement("div",{className:Object(p.a)(O.a.sidebar,(t={},t[O.a.sidebarWithHideableNavbar]=w,t))},w&&r.a.createElement(v.a,Object(s.a)({tabIndex:-1,className:O.a.sidebarLogo,to:_},T),null!=S&&r.a.createElement("img",{key:x,src:S,alt:I}),null!=N&&r.a.createElement("strong",null,N)),r.a.createElement("div",{className:Object(p.a)("menu","menu--responsive",O.a.menu,(n={"menu--show":k},n[O.a.menuWithAnnouncementBar]=!D&&0===L,n))},r.a.createElement("button",{"aria-label":k?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:function(){j(!k)}},k?r.a.createElement("span",{className:Object(p.a)(O.a.sidebarMenuIcon,O.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:O.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},l.map((function(e){return r.a.createElement(P,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),j(!1)},collapsible:u,activePath:o})})))))},T=n(133),S=n(135),I=n(122),D=n(68),L=n.n(D),M=n(142);function B(e){var t,n,a=e.currentDocRoute,l=e.versionMetadata,s=e.children,u=Object(c.a)(),p=u.siteConfig,m=u.isClient,d=l.pluginId,y=l.permalinkToSidebar,f=l.docsSidebars,h=l.version,b=y[a.path],g=f[b];return r.a.createElement(i.a,{key:m,searchMetadatas:{version:h,tag:Object(M.b)(d,h)}},r.a.createElement("div",{className:L.a.docPage},g&&r.a.createElement("div",{className:L.a.docSidebarContainer,role:"complementary"},r.a.createElement(_,{key:b,sidebar:g,path:a.path,sidebarCollapsible:null===(t=null===(n=p.themeConfig)||void 0===n?void 0:n.sidebarCollapsible)||void 0===t||t})),r.a.createElement("main",{className:L.a.docMainContainer},r.a.createElement(o.a,{components:T.a},s))))}t.default=function(e){var t=e.route.routes,n=e.versionMetadata,a=e.location,o=t.find((function(e){return Object(I.matchPath)(a.pathname,e)}));return o?r.a.createElement(B,{currentDocRoute:o,versionMetadata:n},Object(l.a)(t)):r.a.createElement(S.default,e)}},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return y}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(y,l(l({ref:t},s),{},{components:n})):r.a.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},129:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch(l){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),c};e.exports=a,e.exports.default=a},130:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var n=t[1],a=t[2],r=t[3];if(n&&r){var o=[],c=(n=parseInt(n))<(r=parseInt(r))?1:-1;"-"!=a&&".."!=a&&"\u2025"!=a||(r+=c);for(var l=n;l!=r;l+=c)o.push(l);return o}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}},133:function(e,t,n){"use strict";var a=n(2),r=n(0),o=n.n(r),c=n(112),l=n(111),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},s={Prism:n(19).a,theme:i};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,d=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},f=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=p({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=p({},n,{backgroundColor:null}),r};function h(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var b=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?f(e.theme,e.language):void 0;return t.themeDict=n})),u(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=p({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(o.style=c.plain),void 0!==r&&(o.style=void 0!==o.style?p({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),u(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var c=a?{display:"inline-block"}:{},l=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[c].concat(l))}})),u(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,c=p({},h(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?p({},c.style,r):r),void 0!==n&&(c.key=n),a&&(c.className+=" "+a),c})),u(this,"tokenize",(function(e,t,n,a){var r={code:t,grammar:n,language:a,tokens:[]};e.hooks.run("before-tokenize",r);var o=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,c=0,l=[],i=[l];c>-1;){for(;(o=a[c]++)<r[c];){var s=void 0,u=t[c],p=n[c][o];if("string"==typeof p?(u=c>0?u:["plain"],s=p):(u=y(u,p.type),p.alias&&(u=y(u,p.alias)),s=p.content),"string"==typeof s){var f=s.split(m),h=f.length;l.push({types:u,content:f[0]});for(var b=1;b<h;b++)d(l),i.push(l=[]),l.push({types:u,content:f[b]})}else c++,t.push(u),n.push(s),a.push(0),r.push(s.length)}c--,t.pop(),n.pop(),a.pop(),r.pop()}return d(l),i}(void 0!==c?this.tokenize(t,a,c,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),g=n(129),v=n.n(g),k=n(130),j=n.n(k),O={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},E=n(125),N=n(113),w=function(){var e=Object(N.a)().prism,t=Object(E.a)().isDarkTheme,n=e.theme||O,a=e.darkTheme||n;return t?a:n},x=n(50),C=n.n(x),P=/{([\d,-]+)}/,_=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},n=["highlight-next-line","highlight-start","highlight-end"].join("|"),a=e.map((function(e){return"(?:"+t[e].start+"\\s*("+n+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+a+")\\s*$")},T=/title=".*"/,S=function(e){var t=e.children,n=e.className,c=e.metastring,i=Object(N.a)().prism,u=Object(r.useState)(!1),p=u[0],m=u[1],d=Object(r.useState)(!1),y=d[0],f=d[1];Object(r.useEffect)((function(){f(!0)}),[]);var h=Object(r.useRef)(null),g=[],k="",O=w();if(c&&P.test(c)){var E=c.match(P)[1];g=j.a.parse(E).filter((function(e){return e>0}))}c&&T.test(c)&&(k=c.match(T)[0].split("title=")[1].replace(/"+/g,""));var x=n&&n.replace(/language-/,"");!x&&i.defaultLanguage&&(x=i.defaultLanguage);var S=t.replace(/\n$/,"");if(0===g.length&&void 0!==x){for(var I,D="",L=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return _(["js","jsBlock"]);case"jsx":case"tsx":return _(["js","jsBlock","jsx"]);case"html":return _(["js","jsBlock","html"]);case"python":case"py":return _(["python"]);default:return _()}}(x),M=t.replace(/\n$/,"").split("\n"),B=0;B<M.length;){var A=B+1,R=M[B].match(L);if(null!==R){switch(R.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":D+=A+",";break;case"highlight-start":I=A;break;case"highlight-end":D+=I+"-"+(A-1)+","}M.splice(B,1)}else B+=1}g=j.a.parse(D),S=M.join("\n")}var F=function(){v()(S),m(!0),setTimeout((function(){return m(!1)}),2e3)};return o.a.createElement(b,Object(a.a)({},s,{key:String(y),theme:O,code:S,language:x}),(function(e){var t,n,r=e.className,c=e.style,i=e.tokens,s=e.getLineProps,u=e.getTokenProps;return o.a.createElement(o.a.Fragment,null,k&&o.a.createElement("div",{style:c,className:C.a.codeBlockTitle},k),o.a.createElement("div",{className:C.a.codeBlockContent},o.a.createElement("button",{tabIndex:0,ref:h,type:"button","aria-label":"Copy code to clipboard",className:Object(l.a)(C.a.copyButton,(t={},t[C.a.copyButtonWithTitle]=k,t)),onClick:F},p?"Copied":"Copy"),o.a.createElement("div",{className:Object(l.a)(r,C.a.codeBlock,(n={},n[C.a.codeBlockWithTitle]=k,n))},o.a.createElement("div",{className:C.a.codeBlockLines,style:c},i.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=s({line:e,key:t});return g.includes(t+1)&&(n.className=n.className+" docusaurus-highlight-code-line"),o.a.createElement("div",Object(a.a)({key:t},n),e.map((function(e,t){return o.a.createElement("span",Object(a.a)({key:t},u({token:e,key:t})))})))}))))))}))},I=n(6),D=(n(51),n(52)),L=n.n(D),M=["id"],B=function(e){return function(t){var n,a=t.id,r=Object(I.a)(t,M),c=Object(N.a)().navbar.hideOnScroll;return a?o.a.createElement(e,r,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(l.a)("anchor",(n={},n[L.a.enhancedAnchor]=!c,n)),id:a}),r.children,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#")):o.a.createElement(e,r)}},A=n(53),R=n.n(A),F={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?o.a.createElement(S,e):o.a.createElement("code",e):t},a:function(e){return o.a.createElement(c.a,e)},pre:function(e){return o.a.createElement("div",Object(a.a)({className:R.a.mdxCodeBlock},e))},h1:B("h1"),h2:B("h2"),h3:B("h3"),h4:B("h4"),h5:B("h5"),h6:B("h6")};t.a=F},135:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(119);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);