(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{110:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var o=a(0),n=a.n(o);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),h=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=h(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=h(a),d=o,m=u["".concat(r,".").concat(d)]||u[d]||b[d]||i;return a?n.a.createElement(m,s(s({ref:t},c),{},{components:a})):n.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},111:function(e,t,a){"use strict";function o(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=o(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=o(e))&&(n&&(n+=" "),n+=t);return n}},115:function(e,t,a){"use strict";var o=a(0),n=a(116);t.a=function(){var e=Object(o.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},116:function(e,t,a){"use strict";var o=a(0),n=Object(o.createContext)(void 0);t.a=n},120:function(e,t,a){"use strict";var o=a(0),n=a.n(o),i=a(115),r=a(111),s=a(47),l=a.n(s),c=37,h=39;t.a=function(e){var t=e.block,a=e.children,s=e.defaultValue,u=e.values,b=e.groupId,d=e.className,m=Object(i.a)(),p=m.tabGroupChoices,f=m.setTabGroupChoices,w=Object(o.useState)(s),y=w[0],g=w[1],v=Object(o.useState)(!1),O=v[0],j=v[1];if(null!=b){var k=p[b];null!=k&&k!==y&&u.some((function(e){return e.value===k}))&&g(k)}var N=function(e){g(e),null!=b&&f(b,e)},x=[],I=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},P=function(){j(!1)};return Object(o.useEffect)((function(){return window.addEventListener("keydown",I),window.addEventListener("mousedown",P),function(){window.removeEventListener("keydown",I),window.removeEventListener("mousedown",P)}}),[]),n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},d)},u.map((function(e){var t=e.value,a=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":y===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":y===t}),style:O?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case h:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),I(e)},onFocus:function(){return N(t)},onClick:function(){N(t),j(!1)},onPointerDown:function(){return j(!1)}},a)}))),n.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(a).filter((function(e){return e.props.value===y}))[0]))}},121:function(e,t,a){"use strict";var o=a(0),n=a.n(o);t.a=function(e){return n.a.createElement("div",null,e.children)}},73:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return h}));var o=a(2),n=a(6),i=(a(0),a(110)),r=(a(120),a(121),{title:"Book Contemplations"}),s={unversionedId:"book_contemplations",id:"book_contemplations",isDocsHomePage:!1,title:"Book Contemplations",description:"Sometimes, I read something that evokes thought, something that invites me to agree with its author, or something that makes me ponder why I hold an opinion.",source:"@site/docs/book_contemplations.md",slug:"/book_contemplations",permalink:"/My-Docs/docs/book_contemplations",editUrl:"https://github.com/crazoter/My-Docs/edit/main/docs/book_contemplations.md",version:"current",sidebar:"someSidebar",previous:{title:"Book Summaries",permalink:"/My-Docs/docs/book_summaries"}},l=[{value:"When Breath Becomes Air",id:"when-breath-becomes-air",children:[]},{value:"30-Second Philosophies",id:"30-second-philosophies",children:[]}],c={rightToc:l};function h(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sometimes, I read something that evokes thought, something that invites me to agree with its author, or something that makes me ponder why I hold an opinion."),Object(i.b)("h2",{id:"when-breath-becomes-air"},"When Breath Becomes Air"),Object(i.b)("p",null,"A book written much like an autobiography; its author is a nuerosurgeon with an interest in English literature; to be specific, his mother inculcated his interest in literature through books (p26), and in wishing to learn more about human meaning, he turned to neuroscience (p30). He wanted a direct life and death experience (p43) to pursue a serious biological philosophy, and thus decided to practice medicine. "),Object(i.b)("p",null,"He describes his experience with cadavers as he learns his practice, and how he grows increasingly accustomed to the idea of objectifying them (to some personal discomfort) (p46)."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'Here I find myself at a dichotomy. I find myself at ease with becoming a cadaver when I die (in part due to the fact that I am largely ignorant of what happens to these bodies), because ultimately, students will need a real (dead) body to work on in order to learn about the human anatomy. A dead body no longer has any purpose but to rot and decompose. Sure, a dead body cut up with a hacksaw by a student in their 20s may sound gruesome, but surely it is no less gruesome to a melting, decomposing body in a coffin; the only "pleasant" outcome would be to have one\'s ashes incinerated and stored in a vase. Regardless, more can be saved by the students who will become doctors if one were to make such a sacrifice, and it was an outcome I was satisfied with.')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'Yet, if I were to imagine that it was not me on the operating table but a person that I love, my first reaction towards it was "No.", and perhaps only a begrudging "Okay" if it was their will to be turned into a cadaver.')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'There is also the question of "if the soul leaves the body when it is dead, then why do we treat the now empty vessel with such respect, when they have already left this world for the next?". The answer to this is dependent on the assumptions of the afterlife. '),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"If there is no afterlife, and souls do not exist, then the body is literally all that is left of the person. While loved ones would prefer it to be treated with sufficient respect, there is ultimately no negative outcome (aside from the wrath of loved ones) with using the dead body for fertilizer. After all, the desecration of the corpse does not affect its life in the next, since in this case it has effectively ceased to exist."),Object(i.b)("li",{parentName:"ul"},"There is no point in having an afterlife if souls do not exist; the afterlife would be a very empty place if souls do not exist."),Object(i.b)("li",{parentName:"ul"},"Hence, while it may be morally wrong to desecrate a dead body, there will only be consequences iff: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"The soul retains some form of connection to the body even upon its death"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("ol",{parentName:"li",start:2},Object(i.b)("li",{parentName:"ol"},'The soul continues to exist in the mortal world after its death, and is able to observe what happens to its body, is able to understand what is happening to its body and is also able to (or is somehow "programmed" to) react to such occurrences.'))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("ol",{parentName:"li",start:3},Object(i.b)("li",{parentName:"ol"},"The soul is no longer aware of what happens to their body; however, there is an omnipotent being (i.e. God or god(s)) with the authority to judge and enforce justice on your actions, and they judge said action immoral"))))),Object(i.b)("li",{parentName:"ul"},"Of course, desecrating a corpse is a social taboo (as is the topic of death), and woe betide the person who desecrates the body of one who is still loved. Still, if we are to consider only what the consequences of desecrating a body are to a person who is already dead, I think there are only a few possibilities in which that is the case; the lines grow even blurrer when motivations come into play."))),Object(i.b)("p",null,"Paul then goes on to describe the start of his career (from an intern to a resident) in vivid detail, each page filled with his experience of others facing death; before they were born, right after they were born, after an accident. He describes how many have to consider trading their quality of life for their lives (e.g. losing their hand to remove a tumor), and he describes the many stressful moments in his career in a way so vivid, his emotions seep from the text. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'"One evening in my third year, I ran into Jeff, my friend in general surgery, a similarly intense and demanding profession. We each noted the other\u2019s despondency. \u201cYou go first,\u201d he said. And I described the death of a child, shot\nin the head for wearing the wrong color shoes, but he had been so close to making it\u2026Amid a recent spate of fatal, inoperable brain tumors, my hopes had been pinned on this kid pulling through, and he hadn\u2019t. Jeff paused, and I\nawaited his story. Instead, he laughed, punched me in the arm, and said, \u201cWell, I guess I learned one thing: if I\u2019m ever feeling down about my work, I can always talk to a neurosurgeon to cheer myself up.\u201d'),Object(i.b)("li",{parentName:"ul"},'"Before operating on a patient\u2019s brain, I realized, I must first understand his mind: his identity, his values, what makes his life worth living, and what devastation makes it reasonable to let that life end. The cost of my dedication\nto succeed was high, and the ineluctable failures brought me nearly unbearable guilt. Those burdens are what make medicine holy and wholly impossible: in taking up another\u2019s cross, one must sometimes get crushed by the weight."')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Yet by reading this book and reading his experiences, no matter how vivid they were described, one cannot stop but think that it is simply an abstraction of what he had experienced; to see your patient die due to complications not of your fault, but still cannot help but blame oneself for the failure. To understand the inner workings of the hospital so well, that when someone dies from a car accident, you can imagine with vivid detail what their post-mortem would've looked like.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"His stressful ordeals highlight a weakness on his part and perhaps informs us on a cause of his cancer: stress. Every page describes the job of a man overworked to the bone, and he never truly became desensitized to the common occurence of death.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Reading this book makes me think: how can technology help? Is it possible to create something that can allow a person to detach himself from the suffering? If there was technology that could replace the neurologist at the operating table, would it be better if people blamed the technology rather than themselves? But in doing so, will people still trust the technology enough to use it? ")),Object(i.b)("p",null,'Paul then drops a bomb of wisdom (to be fair, he does this quite frequently): "Technical excellence was not enough. As a resident, my highest ideal was not saving lives\u2014everyone dies eventually\u2014but guiding a patient or family to an understanding of death or illness." He believed his role was equal parts doctor and pastor, and I guess there is some truth to that. "it is important to be accurate, but you must always leave some room for hope."'),Object(i.b)("p",null,'"A patient in a psychogenic coma retains just enough volition to avoid hitting himself. The\ntreatment consists in speaking reassuringly, until your words connect and the patient awakens."'),Object(i.b)("p",null,'"Cancer of the brain comes in two varieties: primary cancers, which are born in the brain, and metastases, which emigrate from somewhere else in the body, most commonly from the lungs. Surgery does not cure the disease, but it does prolong life; for most people, cancer in the brain suggests death within a year, maybe two."'),Object(i.b)("p",null,"The weight of his actions is apparent as he describes how a millimeter of damage can cause irreparable damage to the mind of a person."),Object(i.b)("p",null,"Paul eventually contracts cancer himself at an early age. He recovers from his first bout with cancer and returns back to his work as a neurosurgeon. He eventually writes this book, and dies before he could finish it (although he covers most of his experience); the book is finished by his wife."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Paul reminds us of the curse of illness: it eats at your body, weakening you, and at its worst it renders you immobile and takes away your freedom to pursue what you want to achieve; a fate perhaps worse than death.")),Object(i.b)("p",null,"Paul finds closure; he has a child with his wife and is surrounded by close ones during his death (albeit a painful one). "),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"The book highlights the ease of medical negligence; there was an instance early on in the book where a neurosurgeon colleague / intern under Paul simply refuses to admit his mistake and even during Paul's time as a patient there was medicine missing from his prescription and even then the doctor refused to admit his mistake. Paul was lucky as he (and his wife) had the medical background to spot mistakes and ensure the best for themselves; but what about others who don't have such a luxury? ")),Object(i.b)("p",null,"The book doesn't have a moral, and definitely doesn't claim to even contain a lesson; it is simply an autobiography written by a neurosurgeon who sought the \"Truth\", in the hopes that the reader who experiences Paul's experiences through the book, may get a different perspective of life; it was his belief that each man can only see a part of the Truth, given their own perspectives, and yet so limited in time and resources to experience and understand the perspectives of others."),Object(i.b)("p",null,"Paul does discuss metaphysics on p168-171; more specifically, he talks about how science cannot be used to prove / disprove God's existence, and how it is unable to explain much of life's mysteries. He claims: \"No system of thought can contain the fullness of human experience\"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"I would agree with that claim, but I am prone to believe that science is still the best way of ascertaining what reality is. Without being too philosophical, we can only know of this world from our observations, and attempt to confirm the likelihood of whether our theories explain reality through observations and the scientific method. ")),Object(i.b)("h2",{id:"30-second-philosophies"},"30-Second Philosophies"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Language & Logic",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=T-7ZukUZiaw"},"Frege's puzzle"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Honestly I find this one lame lol"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=83X1YWDXdDA"},"Russell's Paradox"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Basically, if you're going to define an axiom for a set, define it more clearly"))),Object(i.b)("li",{parentName:"ul"},'Epimenides\' Liar Paradox: "This sentence is false"'),Object(i.b)("li",{parentName:"ul"},"Eubulides' Heap: When does a sand mound become a heap or a small pile"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://blog.plover.com/math/Gdl-Smullyan.html"},"Godel's Incompleteness Theorem"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"If you have a set of axioms and they:")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"don't contradict each other"),Object(i.b)("li",{parentName:"ul"},'can be "listable" (i.e. they are finite, or is infinite but can be generated)'),Object(i.b)("li",{parentName:"ul"},"then there are some statements that are true, but unproven by these axioms (without adding more axioms)"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("ol",{parentName:"li",start:2},Object(i.b)("li",{parentName:"ol"},"A system of axioms cannot demonstrate its own consistency")),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"i.e. A set of axioms cannot show that it itself is consistent"),Object(i.b)("li",{parentName:"ul"},"i.e. A system cannot be used to prove everything about itself"))),Object(i.b)("li",{parentName:"ul"},"Relevancy to the halting problem",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'Axioms reducable to "programming instructions" which can be arranged ("listable")'))))))),Object(i.b)("li",{parentName:"ul"},"Science & Epistomology",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'Renes Descartes\' "I think therefore I am"'),Object(i.b)("li",{parentName:"ul"},"Gettier's Counter Example",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"How to tell, in any given case, that correlation = causation?"))),Object(i.b)("li",{parentName:"ul"},"Karl Popper: Falsification",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'You can\'t prove something is true, only that it is false; scientific knowledge grows from "conjecture and refutation"'))),Object(i.b)("li",{parentName:"ul"},"Brain in a vat: how do we know if were are not in VR"),Object(i.b)("li",{parentName:"ul"},"Hume's problem of induction: how do we know the future will be like the past",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},'Goodman\'s gruesome riddle: claim to change the rule of induction, s.t. it only applies to "projectible predicates"'))),Object(i.b)("li",{parentName:"ul"},"Kuhn's scientific revolutions: when paradigms (rules & standards for scientific practice in any discipline) get replaced with new ones",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"implies relativism of the truth"))))),Object(i.b)("li",{parentName:"ul"},"Metaphysics",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"})))))}h.isMDXComponent=!0}}]);