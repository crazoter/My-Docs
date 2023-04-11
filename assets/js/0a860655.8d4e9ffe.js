"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[9558],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return N}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,N=c["".concat(o,".").concat(k)]||c[k]||u[k]||i;return a?n.createElement(N,l(l({ref:t},m),{},{components:a})):n.createElement(N,l({ref:t},m))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2516:function(e,t,a){a.r(t),a.d(t,{assets:function(){return m},contentTitle:function(){return o},default:function(){return N},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],s={title:"Formal Verification"},o=void 0,p={unversionedId:"markdown/formal_verification",id:"markdown/formal_verification",title:"Formal Verification",description:"DARWIN approach",source:"@site/docs/markdown/formal_verification.md",sourceDirName:"markdown",slug:"/markdown/formal_verification",permalink:"/My-Docs/docs/markdown/formal_verification",draft:!1,editUrl:"https://github.com/crazoter/My-Docs/edit/main/docs/markdown/formal_verification.md",tags:[],version:"current",frontMatter:{title:"Formal Verification"},sidebar:"someSidebar",previous:{title:"Tips & Tricks",permalink:"/My-Docs/docs/markdown/algorithms"},next:{title:"Problems",permalink:"/My-Docs/docs/markdown/problem_summaries"}},m={},c=[{value:"DARWIN approach",id:"darwin-approach",level:2},{value:"Cause Clue Clauses",id:"cause-clue-clauses",level:2},{value:"Error Invariants",id:"error-invariants",level:2},{value:"Programs",id:"programs",level:2},{value:"Test-driven repair",id:"test-driven-repair",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Overview",id:"overview",level:3},{value:"Notes for term paper",id:"notes-for-term-paper",level:2}],u={toc:c},k="wrapper";function N(e){var t=e.components,s=(0,r.Z)(e,l);return(0,i.kt)(k,(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"darwin-approach"},"DARWIN approach"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For regression testing",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Given an old test input t that used to succeed but now fails")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Set of inputs that once fulfilled the same path condition is now split"),(0,i.kt)("li",{parentName:"ol"},"Compute the first path condition f")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'Path condition refers to all the "ANDs" in the conditions the path takes')),(0,i.kt)("ol",{parentName:"li",start:3},(0,i.kt)("li",{parentName:"ol"},"Compute the 2nd path condition f'"),(0,i.kt)("li",{parentName:"ol"},"Solve for ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"f"),(0,i.kt)("mo",{parentName:"mrow"},"\u2227"),(0,i.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xac"),(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mi",{parentName:"msup"},"f"),(0,i.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f \\wedge \\neg f'")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\u2227"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.946332em",verticalAlign:"-0.19444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"\xac"),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032")))))))))))))," (followed by old program but not followed by new program)",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"If I say \"not of this path\" or neg f' then I can consider all the paths that deviate from f' (take another path at at any branch)"),(0,i.kt)("li",{parentName:"ol"},"e.g. highlighting potential problem paths",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"f = con1"),(0,i.kt)("li",{parentName:"ol"},"f' = con1 n con4 n con5"),(0,i.kt)("li",{parentName:"ol"},"f n -f' = iterate through all possibilities",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"con1 n -con1 (not satisfiable)"),(0,i.kt)("li",{parentName:"ol"},"con1 n -con4 (satisfiable, check this branch)"),(0,i.kt)("li",{parentName:"ol"},"...etc"))))))),(0,i.kt)("li",{parentName:"ol"},"Create a new input that fulfils the path condition for ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"f"),(0,i.kt)("mo",{parentName:"mrow"},"\u2227"),(0,i.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\xac"),(0,i.kt)("msup",{parentName:"mrow"},(0,i.kt)("mi",{parentName:"msup"},"f"),(0,i.kt)("mo",{parentName:"msup",mathvariant:"normal",lspace:"0em",rspace:"0em"},"\u2032"))),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"f \\wedge \\neg f'")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8888799999999999em",verticalAlign:"-0.19444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}}),(0,i.kt)("span",{parentName:"span",className:"mbin"},"\u2227"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222222222222222em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.946332em",verticalAlign:"-0.19444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"\xac"),(0,i.kt)("span",{parentName:"span",className:"mord"},(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.10764em"}},"f"),(0,i.kt)("span",{parentName:"span",className:"msupsub"},(0,i.kt)("span",{parentName:"span",className:"vlist-t"},(0,i.kt)("span",{parentName:"span",className:"vlist-r"},(0,i.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.751892em"}},(0,i.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,i.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,i.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},(0,i.kt)("span",{parentName:"span",className:"mord mtight"},"\u2032")))))))))))))),(0,i.kt)("li",{parentName:"ol"},"Compare the path followed at step 5 and the path taken by the buggy program to get diagnostics")))),(0,i.kt)("h2",{id:"cause-clue-clauses"},"Cause Clue Clauses"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Convert entire failing test trace into a SAT problem",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Since it's failing, it's unsatisfiable"),(0,i.kt)("li",{parentName:"ul"},"Use MAXSAT solver to find the smallest set of constraints that can be removed to make it satisfiable",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Also specify some hard constraints: constraints that cannot be removed "),(0,i.kt)("li",{parentName:"ul"},"In doing so, find the error causing the SAT to fail")))))),(0,i.kt)("h2",{id:"error-invariants"},"Error Invariants"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"What must always be unsatisified (i.e. never clause)")),(0,i.kt)("h2",{id:"programs"},"Programs"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"I am interested in seeing how formal verification can be applied to practical use. Of course I can write my own model in promela, then specify my rules and then model check based on that. But I am curious: is there a way to automatically generate a model from my code?")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Are there tools in place that will automatically perform the tasks described in class?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"What are the tools I can use to formally verify a model?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Promela:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nimble-code/Spin"},"SPIN, obviously")))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Given a program in a given language:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"What are the tools I can use to automatically generate a model (of my program)?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Text",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://fsmgenerator.sourceforge.net/"},"FSMGenerator"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Last Updated: 2008"))),(0,i.kt)("li",{parentName:"ul"}))))),(0,i.kt)("li",{parentName:"ul"},"What are the tools I can use to automatically generate test cases for it?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.cs.ru.nl/~lf/publications/BFS05.pdf"},"http://www.cs.ru.nl/~lf/publications/BFS05.pdf")),(0,i.kt)("li",{parentName:"ul"},"C",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.cprover.org/cbmc/"},"CBMC"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Properties verified using assertions. See ",(0,i.kt)("a",{parentName:"li",href:"http://www.cprover.org/cprover-manual/properties/"},"here")),(0,i.kt)("li",{parentName:"ul"},"CMBC can also be used to convert a C program into a SAT formula. See ",(0,i.kt)("a",{parentName:"li",href:"https://cs.stackexchange.com/questions/99685/is-there-a-way-to-convert-a-program-into-a-boolean-formula"},"https://cs.stackexchange.com/questions/99685/is-there-a-way-to-convert-a-program-into-a-boolean-formula")))))),(0,i.kt)("li",{parentName:"ul"},"Java",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.cprover.org/jbmc/"},"JBMC"),", ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/diffblue/cbmc"},"GitHub"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Properties verified using assertions. See ",(0,i.kt)("a",{parentName:"li",href:"http://www.cprover.org/cprover-manual/properties/"},"here")))))),(0,i.kt)("li",{parentName:"ul"},"Given a FSM model, generate test cases",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.scielo.br/scielo.php?script=sci_arttext&pid=S2175-91462014000400447"},"JPlavisFSM")))))),(0,i.kt)("li",{parentName:"ul"},"What are the tools I can use to convert it (or portions of it) into a SAT formula (which can then be solved by a SAT solver if necessary)?"),(0,i.kt)("li",{parentName:"ul"},"What are the tools I can use to automatically find errors in my program?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"LLVM",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/staticafi/symbiotic"},"Symbiotic (Dynamic Program Slicing)")," "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/liuml07/giri"},"Giri (Dynamic Program Slicing)"),", last updated 2018?"))),(0,i.kt)("li",{parentName:"ul"},"Java",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/backes/javaslicer"},"JavaSlicer (limited dynamic program slicing)")))),(0,i.kt)("li",{parentName:"ul"},"C",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://people.eecs.berkeley.edu/~daw/mops/"},"MOPS"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Java executable for C programs"),(0,i.kt)("li",{parentName:"ul"},"Last Updated: 2002"),(0,i.kt)("li",{parentName:"ul"},"Descript: MOPS is a tool for finding security bugs in C programs and for verifying conformance to rules of defensive programming."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://people.eecs.berkeley.edu/~daw/papers/mops-ccs02.pdf"},"Paper"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"See also: ",(0,i.kt)("a",{parentName:"li",href:"https://people.eecs.berkeley.edu/~daw/papers/mops-ndss04.ps"},"https://people.eecs.berkeley.edu/~daw/papers/mops-ndss04.ps")))),(0,i.kt)("li",{parentName:"ul"},'Usage: User defines a Finite State Automaton (FSA), or a product of multiple FSAs which they call "meta-FSA", in text file(s).'))))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Other tools: ",(0,i.kt)("a",{parentName:"p",href:"https://spinroot.com/static/"},"https://spinroot.com/static/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis#Python"},"https://en.wikipedia.org/wiki/List_of_tools_for_static_code_analysis#Python")))),(0,i.kt)("p",null,"defect detection\nstatistical fault localizer e.g. Tarantula\nDynamic Slicing JSlice (not used so often anymore)\nNCDC coverage\nTrace comparison & delta debugging"),(0,i.kt)("h2",{id:"test-driven-repair"},"Test-driven repair"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"as long as I do my job you don't care",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Given a test suite T and buggy program P",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Find P' s.t.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Passes T"),(0,i.kt)("li",{parentName:"ul"},"Is syntactically closest to P"))))))),(0,i.kt)("li",{parentName:"ul"},"One way: genetic programming",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"SAP fix by facebook"),(0,i.kt)("li",{parentName:"ul"},"Look for mutations of the program",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Look for the mutations that are effective"))))),(0,i.kt)("li",{parentName:"ul"},"Search-based repair"),(0,i.kt)("li",{parentName:"ul"},"Semantic program repair",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use synthesizers"),(0,i.kt)("li",{parentName:"ul"},"infer conditions from test suite")))),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Don't need to model stuff that is unrelated to the system"),(0,i.kt)("li",{parentName:"ul"},"Convert text into requirements and do basic checking with requirements are not inconsistent with each other",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Usually are rules of Precondition and Post-Condition",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Convert it into Live Sequence Charts",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Extension of UML Sequence diagram")),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Message Sequence Chart")," (MSC)")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Describes a possible sequence"),(0,i.kt)("li",{parentName:"ul"},"Arrow: Message"),(0,i.kt)("li",{parentName:"ul"},"Start and end point of arrow: event"),(0,i.kt)("li",{parentName:"ul"},"Syntax: event_1 < event_2 means event_1 happened before event_2 ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"(this is based on their position on the sequence diagram)"),(0,i.kt)("li",{parentName:"ul"},"so long as it's below, it's after"),(0,i.kt)("li",{parentName:"ul"},"That said, receive_event_1 and send_event_2: diagram doesn't say which one comes first"),(0,i.kt)("li",{parentName:"ul"},"each muessage must be received if it is sent"))),(0,i.kt)("li",{parentName:"ul"},'Default syntax: if arrows are in order, the next thing "may" happen',(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'To say it "must" happen (e.g. after one interaction), then wrap with a dotted dotted hexagon across the diagram between the two lines'))),(0,i.kt)("li",{parentName:"ul"},"Purpose:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Specifying components"),(0,i.kt)("li",{parentName:"ul"},"Interaction among components")))),(0,i.kt)("ol",{parentName:"li",start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Message Sequence Graph"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hierarchical tree like structure; HMSC"),(0,i.kt)("li",{parentName:"ul"},"Each node is a MSC"),(0,i.kt)("li",{parentName:"ul"},"Synchronous Concatenation: All messages in one node must be completed before it can transit to the next node"),(0,i.kt)("li",{parentName:"ul"},"Async concatenation: So long as M2 has been started, M3 can begin (only requirement is M2 will end before M3 ends)"),(0,i.kt)("li",{parentName:"ul"},"If 1 node can go to multiple other nodes, then all processes (actors in the MSC) can agree to transit to a chosen node (sync/async). However, this decision has to be consistent (the name of the next nodoe can be specified in the MSC itself). Syntax: (Node1 o (Node2 + Node3)) means Node1 can then transit to either Node2 or Node3."),(0,i.kt)("li",{parentName:"ul"},"Combine MSCs to model behavior or concurrent system",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"e.g. root: send request"),(0,i.kt)("li",{parentName:"ul"},"e.g. leaves: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"success: handshake"),(0,i.kt)("li",{parentName:"ul"},"failure: reject"))))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Live Sequence Charts")," (LSC)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:a(4185).Z,width:"597",height:"352"})),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Existential"),": no condition, it may be executed"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Universal"),": that thing with the funny dotted hex, that's basically the pre-condition for the chart. If it is completed, then the chart below must be executed in that order",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Visual representation of temporal logic",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"AG(prechart -> AF bodychart)"))),(0,i.kt)("li",{parentName:"ul"},"Precondition not guaranteed to happen"),(0,i.kt)("li",{parentName:"ul"},"Precondition is constantly monitored; can be triggered by other body charts"),(0,i.kt)("li",{parentName:"ul"},"Doesn't need to immediately follow"),(0,i.kt)("li",{parentName:"ul"},"Other messages are not constrained"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:a(5893).Z,width:"575",height:"408"}),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'in this case the messages "green" and "ok" are constrained'),(0,i.kt)("li",{parentName:"ul"},'i.e. this is valid, but if sequence "ok" "green" happens then it\'s invalid'),(0,i.kt)("li",{parentName:"ul"},"red can even be put in the middle and it'll be valid"))),(0,i.kt)("li",{parentName:"ul"},"All messages assumed to be async"),(0,i.kt)("li",{parentName:"ul"},"You can also set and assert variables as such",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("img",{src:a(7836).Z,width:"748",height:"322"})))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Verification"),": Use the universal charts to see if they are consistent with each other",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"See what paths will lead to violations "),(0,i.kt)("li",{parentName:"ul"},"Pre-active: The pre-chart is entered"),(0,i.kt)("li",{parentName:"ul"},"Pre-chart violated: Exit"),(0,i.kt)("li",{parentName:"ul"},"Active: Pre-chart completed"),(0,i.kt)("li",{parentName:"ul"},"Exit: Body-chart completed"),(0,i.kt)("li",{parentName:"ul"},"Abort: Body-chart violated when pre-chart was completed"),(0,i.kt)("li",{parentName:"ul"},"These charts are rules"),(0,i.kt)("li",{parentName:"ul"},"If it cannot be completed then there is some inherent inconsistency"))))))))),(0,i.kt)("li",{parentName:"ul"},"Hot and Cold requirements:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hot: if pre-chart completed, body-chart must hold in all system executions"),(0,i.kt)("li",{parentName:"ul"},"Cold: existential chart may hold in some system execution")))))),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(8224).Z,width:"977",height:"712"})),(0,i.kt)("h2",{id:"notes-for-term-paper"},"Notes for term paper"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Paper A: Bug Assist / Cause Clue Clauses / MAX-SAT"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Use MAX-SAT to find largest set of instructions that will satisfy the failing test cases"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Paper B: Error Invariants"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Goal: "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Automate fault localization"),(0,i.kt)("li",{parentName:"ul"},"Automatic generation of concise error explanations"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Input: "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Error trace of the program (from failing testcases / counterexamples from static analysis tools): ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sequence of program statements whose execution produced an error"),(0,i.kt)("li",{parentName:"ul"},"Formulas describing initial states of trace "),(0,i.kt)("li",{parentName:"ul"},"Expected output states (i.e., the violated assertion)"),(0,i.kt)("li",{parentName:"ul"}))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"An error invariant for a position in an error trace is a formula over program variables that over-approximates the reachable states at the given position while only capturing states that will still produce the error, if execution of the trace is continued from that position."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Hence, an error invariant provides an explanation for the failure of the trace at the given position."),(0,i.kt)("li",{parentName:"ul"},'Inductive error invariant: "That is, if an error invariant holds for an interval of consecutive positions, no relevant changes have occurred to error relevant variables in that interval"'),(0,i.kt)("li",{parentName:"ul"},"we build on the idea of extended trace formulas ","[14]"," to obtain an unsatisfiable formula from an error trace."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Error invariants can be used for slicing error traces and for obtaining concise error explanations. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Limitations:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A common limitation of our approach and Bug-Assist is that control-relevant variables might not be considered relevant. This, however, depends on the way error traces are encoded as formulas.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dependent on high quality error traces")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Diff from DARWIN:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'"The major difference of these approaches to ours is that they require passing executions that are similar to the failing execution as an additional input. Hence, these approaches are limited to cases where it is possible to find adequate passing runs that cover large portions of the original error trace."'))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Paper C: Angelic Debugging")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Paper D: DARWIN"))),(0,i.kt)("p",null,"Simple 1 step Strategy\nestimate expected speed of next lane\nspeed <= 1.5: \tfavour going fast\nelse: \t\tfavour going slow and wait for cars to pass"))}N.isMDXComponent=!0},8224:function(e,t,a){t.Z=a.p+"assets/images/formalmodel-171959e66b01368569c01d943927acb7.jpg"},4185:function(e,t,a){t.Z=a.p+"assets/images/liveseqchart-dc64d3698b4ad0f87bff35b9d7ec697c.jpg"},5893:function(e,t,a){t.Z=a.p+"assets/images/liveseqchart2-ba658ed19d4bbb66cef03371aad8f12e.jpg"},7836:function(e,t,a){t.Z=a.p+"assets/images/liveseqchart3-dc892edf005581bfab1ea35de2103367.jpg"}}]);