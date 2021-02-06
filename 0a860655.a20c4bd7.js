(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{110:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return N}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),o=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=o(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=o(a),u=n,N=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return a?r.a.createElement(N,s(s({ref:t},b),{},{components:a})):r.a.createElement(N,s({ref:t},b))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var b=2;b<i;b++)l[b]=a[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},158:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/liveseqchart-dc64d3698b4ad0f87bff35b9d7ec697c.jpg"},159:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/liveseqchart2-ba658ed19d4bbb66cef03371aad8f12e.jpg"},160:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/liveseqchart3-dc892edf005581bfab1ea35de2103367.jpg"},161:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/formalmodel-171959e66b01368569c01d943927acb7.jpg"},62:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a(2),r=a(6),i=(a(0),a(110)),l={title:"Formal Verification"},s={unversionedId:"markdown/formal_verification",id:"markdown/formal_verification",isDocsHomePage:!1,title:"Formal Verification",description:"DARWIN approach",source:"@site/docs/markdown/formal_verification.md",slug:"/markdown/formal_verification",permalink:"/My-Docs/docs/markdown/formal_verification",editUrl:"https://github.com/crazoter/My-Docs/edit/main/docs/markdown/formal_verification.md",version:"current",sidebar:"someSidebar",previous:{title:"Tips & Tricks",permalink:"/My-Docs/docs/markdown/algorithms"},next:{title:"Problems",permalink:"/My-Docs/docs/markdown/problem_summaries"}},c=[{value:"DARWIN approach",id:"darwin-approach",children:[]},{value:"Cause Clue Clauses",id:"cause-clue-clauses",children:[]},{value:"Error Invariants",id:"error-invariants",children:[]},{value:"Programs",id:"programs",children:[]},{value:"Test-driven repair",id:"test-driven-repair",children:[]},{value:"Requirements",id:"requirements",children:[{value:"Overview",id:"overview",children:[]}]},{value:"Notes for term paper",id:"notes-for-term-paper",children:[]}],b={rightToc:c};function o(e){var t=e.components,l=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"darwin-approach"},"DARWIN approach"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"For regression testing",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Given an old test input t that used to succeed but now fails")),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Set of inputs that once fulfilled the same path condition is now split"),Object(i.b)("li",{parentName:"ol"},"Compute the first path condition f")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'Path condition refers to all the "ANDs" in the conditions the path takes')),Object(i.b)("ol",{parentName:"li",start:3},Object(i.b)("li",{parentName:"ol"},"Compute the 2nd path condition f'"),Object(i.b)("li",{parentName:"ol"},"Solve for ",Object(i.b)("span",{parentName:"li",className:"math math-inline"},Object(i.b)("span",{parentName:"span",className:"katex"},Object(i.b)("span",{parentName:"span",className:"katex-mathml"},Object(i.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mi",{parentName:"mrow"},"f"),Object(i.b)("mo",{parentName:"mrow"},"\u2227"),Object(i.b)("mi",{parentName:"mrow",mathvariant:"normal"},"\xac"),Object(i.b)("msup",{parentName:"mrow"},Object(i.b)("mi",{parentName:"msup"},"f"),Object(i.b)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032"))),Object(i.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f \\wedge \\neg f'")))),Object(i.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),Object(i.b)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),Object(i.b)("span",{parentName:"span",className:"mbin"},"\u2227"),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.946332em",verticalAlign:"-0.19444em"}}),Object(i.b)("span",{parentName:"span",className:"mord"},"\xac"),Object(i.b)("span",{parentName:"span",className:"mord"},Object(i.b)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),Object(i.b)("span",{parentName:"span",className:"msupsub"},Object(i.b)("span",{parentName:"span",className:"vlist-t"},Object(i.b)("span",{parentName:"span",className:"vlist-r"},Object(i.b)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},Object(i.b)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},Object(i.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(i.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(i.b)("span",{parentName:"span",className:"mord mtight"},Object(i.b)("span",{parentName:"span",className:"mord mtight"},"\u2032")))))))))))))," (followed by old program but not followed by new program)",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"If I say \"not of this path\" or neg f' then I can consider all the paths that deviate from f' (take another path at at any branch)"),Object(i.b)("li",{parentName:"ol"},"e.g. highlighting potential problem paths",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"f = con1"),Object(i.b)("li",{parentName:"ol"},"f' = con1 n con4 n con5"),Object(i.b)("li",{parentName:"ol"},"f n -f' = iterate through all possibilities",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"con1 n -con1 (not satisfiable)"),Object(i.b)("li",{parentName:"ol"},"con1 n -con4 (satisfiable, check this branch)"),Object(i.b)("li",{parentName:"ol"},"...etc"))))))),Object(i.b)("li",{parentName:"ol"},"Create a new input that fulfils the path condition for ",Object(i.b)("span",{parentName:"li",className:"math math-inline"},Object(i.b)("span",{parentName:"span",className:"katex"},Object(i.b)("span",{parentName:"span",className:"katex-mathml"},Object(i.b)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},Object(i.b)("semantics",{parentName:"math"},Object(i.b)("mrow",{parentName:"semantics"},Object(i.b)("mi",{parentName:"mrow"},"f"),Object(i.b)("mo",{parentName:"mrow"},"\u2227"),Object(i.b)("mi",{parentName:"mrow",mathvariant:"normal"},"\xac"),Object(i.b)("msup",{parentName:"mrow"},Object(i.b)("mi",{parentName:"msup"},"f"),Object(i.b)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032"))),Object(i.b)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f \\wedge \\neg f'")))),Object(i.b)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),Object(i.b)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),Object(i.b)("span",{parentName:"span",className:"mbin"},"\u2227"),Object(i.b)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),Object(i.b)("span",{parentName:"span",className:"base"},Object(i.b)("span",{parentName:"span",className:"strut",style:{height:"0.946332em",verticalAlign:"-0.19444em"}}),Object(i.b)("span",{parentName:"span",className:"mord"},"\xac"),Object(i.b)("span",{parentName:"span",className:"mord"},Object(i.b)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),Object(i.b)("span",{parentName:"span",className:"msupsub"},Object(i.b)("span",{parentName:"span",className:"vlist-t"},Object(i.b)("span",{parentName:"span",className:"vlist-r"},Object(i.b)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},Object(i.b)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},Object(i.b)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),Object(i.b)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},Object(i.b)("span",{parentName:"span",className:"mord mtight"},Object(i.b)("span",{parentName:"span",className:"mord mtight"},"\u2032")))))))))))))),Object(i.b)("li",{parentName:"ol"},"Compare the path followed at step 5 and the path taken by the buggy program to get diagnostics")))),Object(i.b)("h2",{id:"cause-clue-clauses"},"Cause Clue Clauses"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Convert entire failing test trace into a SAT problem",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Since it's failing, it's unsatisfiable"),Object(i.b)("li",{parentName:"ul"},"Use MAXSAT solver to find the smallest set of constraints that can be removed to make it satisfiable",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Also specify some hard constraints: constraints that cannot be removed "),Object(i.b)("li",{parentName:"ul"},"In doing so, find the error causing the SAT to fail")))))),Object(i.b)("h2",{id:"error-invariants"},"Error Invariants"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"What must always be unsatisified (i.e. never clause)")),Object(i.b)("h2",{id:"programs"},"Programs"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"I am interested in seeing how formal verification can be applied to practical use. Of course I can write my own model in promela, then specify my rules and then model check based on that. But I am curious: is there a way to automatically generate a model from my code?")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Are there tools in place that will automatically perform the tasks described in class?")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"What are the tools I can use to formally verify a model?"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Promela:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/nimble-code/Spin"},"SPIN, obviously")))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Given a program in a given language:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"What are the tools I can use to automatically generate a model (of my program)?",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Text",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://fsmgenerator.sourceforge.net/"},"FSMGenerator"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Last Updated: 2008"))),Object(i.b)("li",{parentName:"ul"}))))),Object(i.b)("li",{parentName:"ul"},"What are the tools I can use to automatically generate test cases for it?",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.cs.ru.nl/~lf/publications/BFS05.pdf"},"http://www.cs.ru.nl/~lf/publications/BFS05.pdf")),Object(i.b)("li",{parentName:"ul"},"C",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.cprover.org/cbmc/"},"CBMC"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Properties verified using assertions. See ",Object(i.b)("a",{parentName:"li",href:"http://www.cprover.org/cprover-manual/properties/"},"here")),Object(i.b)("li",{parentName:"ul"},"CMBC can also be used to convert a C program into a SAT formula. See ",Object(i.b)("a",{parentName:"li",href:"https://cs.stackexchange.com/questions/99685/is-there-a-way-to-convert-a-program-into-a-boolean-formula"},"https://cs.stackexchange.com/questions/99685/is-there-a-way-to-convert-a-program-into-a-boolean-formula")))))),Object(i.b)("li",{parentName:"ul"},"Java",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://www.cprover.org/jbmc/"},"JBMC"),", ",Object(i.b)("a",{parentName:"li",href:"https://github.com/diffblue/cbmc"},"GitHub"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Properties verified using assertions. See ",Object(i.b)("a",{parentName:"li",href:"http://www.cprover.org/cprover-manual/properties/"},"here")))))),Object(i.b)("li",{parentName:"ul"},"Given a FSM model, generate test cases",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.scielo.br/scielo.php?script=sci_arttext&pid=S2175-91462014000400447"},"JPlavisFSM")))))),Object(i.b)("li",{parentName:"ul"},"What are the tools I can use to convert it (or portions of it) into a SAT formula (which can then be solved by a SAT solver if necessary)?"),Object(i.b)("li",{parentName:"ul"},"What are the tools I can use to automatically find errors in my program?",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"LLVM",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/staticafi/symbiotic"},"Symbiotic (Dynamic Program Slicing)")," "),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/liuml07/giri"},"Giri (Dynamic Program Slicing)"),", last updated 2018?"))),Object(i.b)("li",{parentName:"ul"},"Java",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://github.com/backes/javaslicer"},"JavaSlicer (limited dynamic program slicing)")))),Object(i.b)("li",{parentName:"ul"},"C",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://people.eecs.berkeley.edu/~daw/mops/"},"MOPS"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Java executable for C programs"),Object(i.b)("li",{parentName:"ul"},"Last Updated: 2002"),Object(i.b)("li",{parentName:"ul"},"Descript: MOPS is a tool for finding security bugs in C programs and for verifying conformance to rules of defensive programming."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"http://people.eecs.berkeley.edu/~daw/papers/mops-ccs02.pdf"},"Paper"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"See also: ",Object(i.b)("a",{parentName:"li",href:"https://people.eecs.berkeley.edu/~daw/papers/mops-ndss04.ps"},"https://people.eecs.berkeley.edu/~daw/papers/mops-ndss04.ps")))),Object(i.b)("li",{parentName:"ul"},'Usage: User defines a Finite State Automaton (FSA), or a product of multiple FSAs which they call "meta-FSA", in text file(s).'))))))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Other tools: ",Object(i.b)("a",{parentName:"p",href:"https://spinroot.com/static/"},"https://spinroot.com/static/"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis#Python"},"https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis#Python")))),Object(i.b)("p",null,"defect detection\nstatistical fault localizer e.g. Tarantula\nDynamic Slicing JSlice (not used so often anymore)\nNCDC coverage\nTrace comparison & delta debugging"),Object(i.b)("h2",{id:"test-driven-repair"},"Test-driven repair"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"as long as I do my job you don't care",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Given a test suite T and buggy program P",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Find P' s.t.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Passes T"),Object(i.b)("li",{parentName:"ul"},"Is syntactically closest to P"))))))),Object(i.b)("li",{parentName:"ul"},"One way: genetic programming",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"SAP fix by facebook"),Object(i.b)("li",{parentName:"ul"},"Look for mutations of the program",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Look for the mutations that are effective"))))),Object(i.b)("li",{parentName:"ul"},"Search-based repair"),Object(i.b)("li",{parentName:"ul"},"Semantic program repair",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Use synthesizers"),Object(i.b)("li",{parentName:"ul"},"infer conditions from test suite")))),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Don't need to model stuff that is unrelated to the system"),Object(i.b)("li",{parentName:"ul"},"Convert text into requirements and do basic checking with requirements are not inconsistent with each other",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Usually are rules of Precondition and Post-Condition",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Convert it into Live Sequence Charts",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Extension of UML Sequence diagram")),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Message Sequence Chart")," (MSC)")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Describes a possible sequence"),Object(i.b)("li",{parentName:"ul"},"Arrow: Message"),Object(i.b)("li",{parentName:"ul"},"Start and end point of arrow: event"),Object(i.b)("li",{parentName:"ul"},"Syntax: event_1 < event_2 means event_1 happened before event_2 ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"(this is based on their position on the sequence diagram)"),Object(i.b)("li",{parentName:"ul"},"so long as it's below, it's after"),Object(i.b)("li",{parentName:"ul"},"That said, receive_event_1 and send_event_2: diagram doesn't say which one comes first"),Object(i.b)("li",{parentName:"ul"},"each muessage must be received if it is sent"))),Object(i.b)("li",{parentName:"ul"},'Default syntax: if arrows are in order, the next thing "may" happen',Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'To say it "must" happen (e.g. after one interaction), then wrap with a dotted dotted hexagon across the diagram between the two lines'))),Object(i.b)("li",{parentName:"ul"},"Purpose:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Specifying components"),Object(i.b)("li",{parentName:"ul"},"Interaction among components")))),Object(i.b)("ol",{parentName:"li",start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Message Sequence Graph"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Hierarchical tree like structure; HMSC"),Object(i.b)("li",{parentName:"ul"},"Each node is a MSC"),Object(i.b)("li",{parentName:"ul"},"Synchronous Concatenation: All messages in one node must be completed before it can transit to the next node"),Object(i.b)("li",{parentName:"ul"},"Async concatenation: So long as M2 has been started, M3 can begin (only requirement is M2 will end before M3 ends)"),Object(i.b)("li",{parentName:"ul"},"If 1 node can go to multiple other nodes, then all processes (actors in the MSC) can agree to transit to a chosen node (sync/async). However, this decision has to be consistent (the name of the next nodoe can be specified in the MSC itself). Syntax: (Node1 o (Node2 + Node3)) means Node1 can then transit to either Node2 or Node3."),Object(i.b)("li",{parentName:"ul"},"Combine MSCs to model behavior or concurrent system",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"e.g. root: send request"),Object(i.b)("li",{parentName:"ul"},"e.g. leaves: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"success: handshake"),Object(i.b)("li",{parentName:"ul"},"failure: reject"))))))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Live Sequence Charts")," (LSC)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("img",{src:a(158).default})),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Existential"),": no condition, it may be executed"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Universal"),": that thing with the funny dotted hex, that's basically the pre-condition for the chart. If it is completed, then the chart below must be executed in that order",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Visual representation of temporal logic",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"AG(prechart -> AF bodychart)"))),Object(i.b)("li",{parentName:"ul"},"Precondition not guaranteed to happen"),Object(i.b)("li",{parentName:"ul"},"Precondition is constantly monitored; can be triggered by other body charts"),Object(i.b)("li",{parentName:"ul"},"Doesn't need to immediately follow"),Object(i.b)("li",{parentName:"ul"},"Other messages are not constrained"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("img",{src:a(159).default}),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'in this case the messages "green" and "ok" are constrained'),Object(i.b)("li",{parentName:"ul"},'i.e. this is valid, but if sequence "ok" "green" happens then it\'s invalid'),Object(i.b)("li",{parentName:"ul"},"red can even be put in the middle and it'll be valid"))),Object(i.b)("li",{parentName:"ul"},"All messages assumed to be async"),Object(i.b)("li",{parentName:"ul"},"You can also set and assert variables as such",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("img",{src:a(160).default})))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Verification"),": Use the universal charts to see if they are consistent with each other",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"See what paths will lead to violations "),Object(i.b)("li",{parentName:"ul"},"Pre-active: The pre-chart is entered"),Object(i.b)("li",{parentName:"ul"},"Pre-chart violated: Exit"),Object(i.b)("li",{parentName:"ul"},"Active: Pre-chart completed"),Object(i.b)("li",{parentName:"ul"},"Exit: Body-chart completed"),Object(i.b)("li",{parentName:"ul"},"Abort: Body-chart violated when pre-chart was completed"),Object(i.b)("li",{parentName:"ul"},"These charts are rules"),Object(i.b)("li",{parentName:"ul"},"If it cannot be completed then there is some inherent inconsistency"))))))))),Object(i.b)("li",{parentName:"ul"},"Hot and Cold requirements:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Hot: if pre-chart completed, body-chart must hold in all system executions"),Object(i.b)("li",{parentName:"ul"},"Cold: existential chart may hold in some system execution")))))),Object(i.b)("h3",{id:"overview"},"Overview"),Object(i.b)("p",null,Object(i.b)("img",{src:a(161).default})),Object(i.b)("h2",{id:"notes-for-term-paper"},"Notes for term paper"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Paper A: Bug Assist / Cause Clue Clauses / MAX-SAT"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Use MAX-SAT to find largest set of instructions that will satisfy the failing test cases"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Paper B: Error Invariants"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Goal: "),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Automate fault localization"),Object(i.b)("li",{parentName:"ul"},"Automatic generation of concise error explanations"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Input: "),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Error trace of the program (from failing testcases / counterexamples from static analysis tools): ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Sequence of program statements whose execution produced an error"),Object(i.b)("li",{parentName:"ul"},"Formulas describing initial states of trace "),Object(i.b)("li",{parentName:"ul"},"Expected output states (i.e., the violated assertion)"),Object(i.b)("li",{parentName:"ul"}))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"An error invariant for a position in an error trace is a formula over program variables that over-approximates the reachable states at the given position while only capturing states that will still produce the error, if execution of the trace is continued from that position."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Hence, an error invariant provides an explanation for the failure of the trace at the given position."),Object(i.b)("li",{parentName:"ul"},'Inductive error invariant: "That is, if an error invariant holds for an interval of consecutive positions, no relevant changes have occurred to error relevant variables in that interval"'),Object(i.b)("li",{parentName:"ul"},"we build on the idea of extended trace formulas ","[14]"," to obtain an unsatisfiable formula from an error trace."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Error invariants can be used for slicing error traces and for obtaining concise error explanations. ")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Limitations:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"A common limitation of our approach and Bug-Assist is that control-relevant variables might not be considered relevant. This, however, depends on the way error traces are encoded as formulas.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Dependent on high quality error traces")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Diff from DARWIN:"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'"The major difference of these approaches to ours is that they require passing executions that are similar to the failing execution as an additional input. Hence, these approaches are limited to cases where it is possible to find adequate passing runs that cover large portions of the original error trace."'))))))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Paper C: Angelic Debugging")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Paper D: DARWIN"))),Object(i.b)("p",null,"Simple 1 step Strategy\nestimate expected speed of next lane\nspeed <= 1.5: \tfavour going fast\nelse: \t\tfavour going slow and wait for cars to pass"))}o.isMDXComponent=!0}}]);