(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),h=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=h(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=h(n),b=o,m=u["".concat(r,".").concat(b)]||u[b]||d[b]||i;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},102:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},106:function(e,t,n){"use strict";var o=n(0),a=n(107);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},107:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)(void 0);t.a=a},111:function(e,t,n){"use strict";var o=n(0),a=n.n(o),i=n(106),r=n(102),s=n(47),l=n.n(s),c=37,h=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,u=e.values,d=e.groupId,b=e.className,m=Object(i.a)(),f=m.tabGroupChoices,p=m.setTabGroupChoices,y=Object(o.useState)(s),w=y[0],g=y[1],v=Object(o.useState)(!1),O=v[0],k=v[1];if(null!=d){var j=f[d];null!=j&&j!==w&&u.some((function(e){return e.value===j}))&&g(j)}var I=function(e){g(e),null!=d&&p(d,e)},x=[],N=function(e){e.metaKey||e.altKey||e.ctrlKey||k(!0)},E=function(){k(!1)};return Object(o.useEffect)((function(){return window.addEventListener("keydown",N),window.addEventListener("mousedown",E),function(){window.removeEventListener("keydown",N),window.removeEventListener("mousedown",E)}}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},b)},u.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":w===t,className:Object(r.a)("tabs__item",l.a.tabItem,{"tabs__item--active":w===t}),style:O?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case h:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),N(e)},onFocus:function(){return I(t)},onClick:function(){I(t),k(!1)},onPointerDown:function(){return k(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===w}))[0]))}},112:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return h}));var o=n(2),a=n(6),i=(n(0),n(101)),r=(n(111),n(112),{title:"Book Contemplations"}),s={unversionedId:"book_contemplations",id:"book_contemplations",isDocsHomePage:!1,title:"Book Contemplations",description:"Sometimes, I read something that evokes thought, something that invites me to agree with its author, or something that makes me ponder why I hold an opinion.",source:"@site/docs/book_contemplations.md",slug:"/book_contemplations",permalink:"/My-Docs/docs/book_contemplations",editUrl:"https://github.com/crazoter/My-Docs/edit/master/website/docs/book_contemplations.md",version:"current",sidebar:"someSidebar",previous:{title:"Book Summaries",permalink:"/My-Docs/docs/book_summaries"}},l=[{value:"When Breath Becomes Air",id:"when-breath-becomes-air",children:[]}],c={rightToc:l};function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Sometimes, I read something that evokes thought, something that invites me to agree with its author, or something that makes me ponder why I hold an opinion."),Object(i.b)("h2",{id:"when-breath-becomes-air"},"When Breath Becomes Air"),Object(i.b)("p",null,"A book written much like an autobiography; its author is a nuerosurgeon with an interest in English literature; to be specific, his mother inculcated his interest in literature through books (p26), and in wishing to learn more about human meaning, he turned to neuroscience (p30). He wanted a direct life and death experience (p43) to pursue a serious biological philosophy, and thus decided to practice medicine. "),Object(i.b)("p",null,"He describes his experience with cadavers as he learns his practice, and how he grows increasingly accustomed to the idea of objectifying them (to some personal discomfort) (p46)."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'Here I find myself at a dichotomy. I find myself at ease with becoming a cadaver when I die (in part due to the fact that I am largely ignorant of what happens to these bodies), because ultimately, students will need a real (dead) body to work on in order to learn about the human anatomy. A dead body no longer has any purpose but to rot and decompose. Sure, a dead body cut up with a hacksaw by a student in their 20s may sound gruesome, but surely it is no less gruesome to a melting, decomposing body in a coffin; the only "pleasant" outcome would be to have one\'s ashes incinerated and stored in a vase. Regardless, more can be saved by the students who will become doctors if one were to make such a sacrifice, and it was an outcome I was satisfied with.')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'Yet, if I were to imagine that it was not me on the operating table but a person that I love, my first reaction towards it was "No.", and perhaps only a begrudging "Okay" if it was their will to be turned into a cadaver.')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},'There is also the question of "if the soul leaves the body when it is dead, then why do we treat the now empty vessel with such respect, when they have already left this world for the next?". The answer to this is dependent on the assumptions of the afterlife. '),Object(i.b)("ul",{parentName:"blockquote"},Object(i.b)("li",{parentName:"ul"},"If there is no afterlife, and souls do not exist, then the body is literally all that is left of the person. While loved ones would prefer it to be treated with sufficient respect, there is ultimately no negative outcome (aside from the wrath of loved ones) with using the dead body for fertilizer. After all, the desecration of the corpse does not affect its life in the next, since in this case it has effectively ceased to exist."),Object(i.b)("li",{parentName:"ul"},"There is no point in having an afterlife if souls do not exist; the afterlife would be a very empty place if souls do not exist."),Object(i.b)("li",{parentName:"ul"},"Likewise, the soul must either: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Retain some form of connection to the body even upon its death"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("ol",Object(o.a)({parentName:"li"},{start:2}),Object(i.b)("li",{parentName:"ol"},'Continue existing in the mortal world after its death, and is able to observe what happens to its body, is able to understand what is happening to its body and is also able to (or is somehow "programmed" to) react to such occurrences.'))))),Object(i.b)("li",{parentName:"ul"},"Of course, desecrating a corpse is a social taboo (as is death), and woe betide the person who desecrates the body of one who is still loved. Still, if we are to consider only what the consequences of desecrating a body are to a person who is already dead, I think there are only a few possibilities in which that is the case."))),Object(i.b)("p",null,"Paul then goes on to describe the start of his career (from an intern to a resident) in vivid detail, each page filled with his experience of others facing death; before they were born, right after they were born, after an accident. He describes how many have to consider trading their quality of life for their lives (e.g. losing their hand to remove a tumor), and he describes the many stressful moments in his career in a way so vivid, his emotions seep from the text. "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},'"One evening in my third year, I ran into Jeff, my friend in general surgery, a similarly intense and demanding profession. We each noted the other\u2019s despondency. \u201cYou go first,\u201d he said. And I described the death of a child, shot\nin the head for wearing the wrong color shoes, but he had been so close to making it\u2026Amid a recent spate of fatal, inoperable brain tumors, my hopes had been pinned on this kid pulling through, and he hadn\u2019t. Jeff paused, and I\nawaited his story. Instead, he laughed, punched me in the arm, and said, \u201cWell, I guess I learned one thing: if I\u2019m ever feeling down about my work, I can always talk to a neurosurgeon to cheer myself up.\u201d'),Object(i.b)("li",{parentName:"ul"},'"Before operating on a patient\u2019s brain, I realized, I must first understand his mind: his identity, his values, what makes his life worth living, and what devastation makes it reasonable to let that life end. The cost of my dedication\nto succeed was high, and the ineluctable failures brought me nearly unbearable guilt. Those burdens are what make medicine holy and wholly impossible: in taking up another\u2019s cross, one must sometimes get crushed by the weight."')),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Yet by reading this book and reading his experiences, no matter how vivid they were described, one cannot stop but think that it is simply an abstraction of what he had experienced; to see your patient die due to complications not of your fault, but still cannot help but blame oneself for the failure. To understand the inner workings of the hospital so well, that when someone dies from a car accident, you can imagine with vivid detail what their post-mortem would've looked like.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"His stressful ordeals highlight a weakness on his part and perhaps informs us on a cause of his cancer: stress. Every page describes the job of a man overworked to the bone, and he never truly became desensitized to the common occurence of death.")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Reading this book makes me think: how can technology help? Is it possible to create something that can allow a person to detach himself from the suffering? If there was technology that could replace the neurologist at the operating table, would it be better if people blamed the technology rather than themselves? But in doing so, will people still trust the technology enough to use it? ")),Object(i.b)("p",null,'Paul then drops a bomb of wisdom (to be fair, he does this quite frequently): "Technical excellence was not enough. As a resident, my highest ideal was not saving lives\u2014everyone dies eventually\u2014but guiding a patient or family to an understanding of death or illness." He believed his role was equal parts doctor and pastor, and I guess there is some truth to that. "it is important to be accurate, but you must always leave some room for hope."'),Object(i.b)("p",null,'"A patient in a psychogenic coma retains just enough volition to avoid hitting himself. The\ntreatment consists in speaking reassuringly, until your words connect and the patient awakens."'),Object(i.b)("p",null,'"Cancer of the brain comes in two varieties: primary cancers, which are born in the brain, and metastases, which emigrate from somewhere else in the body, most commonly from the lungs. Surgery does not cure the disease, but it does prolong life; for most people, cancer in the brain suggests death within a year, maybe two."'),Object(i.b)("p",null,"The weight of his actions is apparent as he describes how a millimeter of damage can cause irreparable damage to the mind of a person."),Object(i.b)("p",null,"Paul eventually contracts cancer himself at an early age."))}h.isMDXComponent=!0}}]);