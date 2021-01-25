(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{103:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return b})),t.d(a,"rightToc",(function(){return i})),t.d(a,"default",(function(){return m}));var n=t(2),r=t(6),s=(t(0),t(110)),c={title:"CS3244 Machine Learning"},b={unversionedId:"markdown/CS3244",id:"markdown/CS3244",isDocsHomePage:!1,title:"CS3244 Machine Learning",description:"* Collaborative & AutoML",source:"@site/docs/markdown/CS3244.md",slug:"/markdown/CS3244",permalink:"/My-Docs/docs/markdown/CS3244",editUrl:"https://github.com/crazoter/My-Docs/edit/main/docs/markdown/CS3244.md",version:"current",sidebar:"someSidebar",previous:{title:"Machine Learning",permalink:"/My-Docs/docs/markdown/machine_learning"},next:{title:'CS4238 Computer Security Practice "Cheatsheet"',permalink:"/My-Docs/docs/markdown/CS4238"}},i=[],p={rightToc:i};function m(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},Object(s.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.comp.nus.edu.sg/~lowkh/research.html"}),"Collaborative & AutoML")),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Trusted data sharing, tweaking params"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Learning Element"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Which components are to be learnt"),Object(s.b)("li",{parentName:"ul"},"How to represent the data & the components"),Object(s.b)("li",{parentName:"ul"},"What feedback is available"),Object(s.b)("li",{parentName:"ul"},"Main goal of the model"),Object(s.b)("li",{parentName:"ul"},"Supervised learning: answer is provided",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Learning an unknown function (focus of the module) that best fits answer  "))),Object(s.b)("li",{parentName:"ul"},"Unsupervised learning: no answer provided"),Object(s.b)("li",{parentName:"ul"},"Reinforcement learning: rewards provided"))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Concept Learning (Simplified ML)"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Concept: boolean-value f(x) we want to learn"),Object(s.b)("li",{parentName:"ul"},"Infer unknown boolean value function"),Object(s.b)("li",{parentName:"ul"},"Training sample: row",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Input Instance (X): comprises of Input Attributes (Features)",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Input Attributes: Categorical variables"))),Object(s.b)("li",{parentName:"ul"},"Boolean Output Attribute (Target): Y/N, 1/0, +ve/-ve"))),Object(s.b)("li",{parentName:"ul"},"Hypothesis: Conjunction of constraints on input attr",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Think of this as a firewall filter"),Object(s.b)("li",{parentName:"ul"},"For every Input attr: X = specified_categorical_val, X=? (don't care), X=null"),Object(s.b)("li",{parentName:"ul"},"Input Instance satisfies (all constraints of) hypothesis if h(x) = 1"),Object(s.b)("li",{parentName:"ul"},"Expressive power (scope) vs hypothesis space (search space)",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"e.g. y = mx + c vs y = ax^2 + mx + c"),Object(s.b)("li",{parentName:"ul"},"More expressive model: more time & data to train"))),Object(s.b)("li",{parentName:"ul"},"Hypothesis Space: Set of hypothesis "))),Object(s.b)("li",{parentName:"ul"},"Goal: Find hypothesis that is consistent with noise-free training sample. ",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("span",Object(n.a)({parentName:"li"},{className:"math math-inline"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(s.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(s.b)("semantics",{parentName:"math"},Object(s.b)("mrow",{parentName:"semantics"},Object(s.b)("mi",Object(n.a)({parentName:"mrow"},{mathvariant:"normal"}),"\u2200")),Object(s.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\forall")))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.69444em",verticalAlign:"0em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord"}),"\u2200")))))," training instances, h(x) = 1 iff +ve instance, h(x) = 0 iff -ve instance"),Object(s.b)("li",{parentName:"ul"},"Syntactically distinct (exact # of permutations)"),Object(s.b)("li",{parentName:"ul"},"Semantically distinct: don't cover the same subset of input instances (i.e. if none of the instances have a null value, then you can group any hypothesis with null filter as 1)"),Object(s.b)("li",{parentName:"ul"},"Exploit Structure: (h1(x)=1)->(h2(x)=1)",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"More general or equal: ",Object(s.b)("span",Object(n.a)({parentName:"li"},{className:"math math-inline"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(s.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(s.b)("semantics",{parentName:"math"},Object(s.b)("mrow",{parentName:"semantics"},Object(s.b)("msub",{parentName:"mrow"},Object(s.b)("mo",{parentName:"msub"},"\u2265"),Object(s.b)("mi",{parentName:"msub"},"g"))),Object(s.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\geq_g")))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.922078em",verticalAlign:"-0.286108em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),"\u2265"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15139200000000003em"}}),Object(s.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}}),"g")))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.286108em"}}),Object(s.b)("span",{parentName:"span"})))))))))),", ",Object(s.b)("span",Object(n.a)({parentName:"li"},{className:"math math-inline"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-mathml"}),Object(s.b)("math",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/1998/Math/MathML"}),Object(s.b)("semantics",{parentName:"math"},Object(s.b)("mrow",{parentName:"semantics"},Object(s.b)("msub",{parentName:"mrow"},Object(s.b)("mo",{parentName:"msub"},">"),Object(s.b)("mi",{parentName:"msub"},"g"))),Object(s.b)("annotation",Object(n.a)({parentName:"semantics"},{encoding:"application/x-tex"}),"\\gt_g")))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"katex-html","aria-hidden":"true"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"base"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"strut",style:{height:"0.8252079999999999em",verticalAlign:"-0.286108em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mrel"}),">"),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"msupsub"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-t vlist-t2"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.15139200000000003em"}}),Object(s.b)("span",Object(n.a)({parentName:"span"},{style:{top:"-2.5500000000000003em",marginLeft:"0em",marginRight:"0.05em"}}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"pstrut",style:{height:"2.7em"}})),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"sizing reset-size6 size3 mtight"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"}}),"g")))),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-s"}),"\u200b")),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"vlist-r"}),Object(s.b)("span",Object(n.a)({parentName:"span"},{className:"vlist",style:{height:"0.286108em"}}),Object(s.b)("span",{parentName:"span"}))))))))))),Object(s.b)("li",{parentName:"ul"},"Partial order: reflexive, antisymmetric, transitive"),Object(s.b)("li",{parentName:"ul"},"Find-s algorithm:",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Start with most specific hypothesis"),Object(s.b)("li",{parentName:"ul"},"When it wrongly classifies 1 as 0, minimally generalize it to satisfy input instance"),Object(s.b)("li",{parentName:"ul"}))))))))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Inductive bias assumpion"),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Hypothesis found from sufficiently large training set also applies to unobserved data"),Object(s.b)("li",{parentName:"ul"})))))}m.isMDXComponent=!0},110:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return j}));var n=t(0),r=t.n(n);function s(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),m=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):b(b({},a),e)),t},l=function(e){var a=m(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},o={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},O=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=m(t),O=n,j=l["".concat(c,".").concat(O)]||l[O]||o[O]||s;return t?r.a.createElement(j,b(b({ref:a},p),{},{components:t})):r.a.createElement(j,b({ref:a},p))}));function j(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var s=t.length,c=new Array(s);c[0]=O;var b={};for(var i in a)hasOwnProperty.call(a,i)&&(b[i]=a[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var p=2;p<s;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"}}]);