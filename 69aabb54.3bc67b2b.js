(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),h=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=h(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=h(n),m=a,p=b["".concat(i,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(p,s(s({ref:t},c),{},{components:n})):r.a.createElement(p,s({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},111:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},115:function(e,t,n){"use strict";var a=n(0),r=n(116);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},116:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},120:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(115),i=n(111),s=n(47),l=n.n(s),c=37,h=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,b=e.values,u=e.groupId,m=e.className,p=Object(o.a)(),d=p.tabGroupChoices,f=p.setTabGroupChoices,g=Object(a.useState)(s),O=g[0],y=g[1],j=Object(a.useState)(!1),w=j[0],N=j[1];if(null!=u){var v=d[u];null!=v&&v!==O&&b.some((function(e){return e.value===v}))&&y(v)}var k=function(e){y(e),null!=u&&f(u,e)},P=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||N(!0)},C=function(){N(!1)};return Object(a.useEffect)((function(){return window.addEventListener("keydown",x),window.addEventListener("mousedown",C),function(){window.removeEventListener("keydown",x),window.removeEventListener("mousedown",C)}}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t},m)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),style:w?{}:{outline:"none"},key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case h:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e),x(e)},onFocus:function(){return k(t)},onClick:function(){k(t),N(!1)},onPointerDown:function(){return N(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}},121:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},84:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(110)),i=(n(120),n(121),["components"]),s={title:"Book Summaries"},l={unversionedId:"book_summaries",id:"book_summaries",isDocsHomePage:!1,title:"Book Summaries",description:"This page contains summaries, as well as quotations of books that I read that I believe contain wisdom worth remembering. I offer no guarantees that the content on this page correctly reflects that of the original source, nor do I guarantee that even the most important points were extracted.",source:"@site/docs/book_summaries.md",slug:"/book_summaries",permalink:"/My-Docs/docs/book_summaries",editUrl:"https://github.com/crazoter/My-Docs/edit/main/docs/book_summaries.md",version:"current",sidebar:"someSidebar",previous:{title:"Manga Reviews",permalink:"/My-Docs/docs/manga_reviews"},next:{title:"Book Contemplations",permalink:"/My-Docs/docs/book_contemplations"}},c=[{value:"The Prince by Nicolo Machiavelli",id:"the-prince-by-nicolo-machiavelli",children:[]},{value:"Crash Course Philosophy",id:"crash-course-philosophy",children:[]}],h={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This page contains summaries, as well as quotations of books that I read that I believe contain wisdom worth remembering. I offer no guarantees that the content on this page correctly reflects that of the original source, nor do I guarantee that even the most important points were extracted. "),Object(o.b)("h3",{id:"the-prince-by-nicolo-machiavelli"},"The Prince by Nicolo Machiavelli"),Object(o.b)("p",null,"Quotations from the ebook: ",Object(o.b)("a",{parentName:"p",href:"http://www.gutenberg.org/files/1232/1232-h/1232-h.htm"},"http://www.gutenberg.org/files/1232/1232-h/1232-h.htm")," which was translated by W. K. Marriott."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"On the topic of ",Object(o.b)("strong",{parentName:"p"},"vengeance"),":"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'"On the death of Pius III, in 1503, Machiavelli was sent to Rome to watch the election of his successor, and there he saw Cesare Borgia cheated into allowing the choice of the College to fall on Giuliano delle Rovere (Julius II), who was one of the cardinals that had most reason to fear the duke. Machiavelli, when commenting on this election, says that ',Object(o.b)("strong",{parentName:"li"},"he who thinks new favours will cause great personages to forget old injuries deceives himself."),' Julius did not rest until he had ruined Cesare."'),Object(o.b)("li",{parentName:"ul"},'"...',Object(o.b)("strong",{parentName:"li"},"men ought either to be well treated or crushed, because they can avenge themselves of lighter injuries, of more serious ones they cannot"),"; therefore the ",Object(o.b)("strong",{parentName:"li"},"injury that is to be done to a man ought to be of such a kind that one does not stand in fear of revenge"),'."'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"On the topic of ",Object(o.b)("strong",{parentName:"p"},"leadership"),":"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'"The Emperor Maximilian was one of the most interesting men of the age, and his character has been drawn by many hands; but Machiavelli, who was an envoy at his court in 1507-8, reveals ',Object(o.b)("strong",{parentName:"li"},"the secret of his many failures when he describes him as a secretive man, without force of character\u2014ignoring the human agencies necessary to carry his schemes into effect, and never insisting on the fulfilment of his wishes."),'"'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"On the topic of ",Object(o.b)("strong",{parentName:"p"},"maintaining power"),":"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'"...the prince who holds a country differing in the above respects ought to ',Object(o.b)("strong",{parentName:"li"},"make himself the head and defender of his less powerful neighbours, and to weaken the more powerful amongst them, taking care that no foreigner as powerful as himself shall, by any accident, get a footing there"),'; for it will always happen that such a one will be introduced by those who are discontented..."',Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"This was later elaborated upon in the second half of chapter III with the example of King Louis, the Venetians and the Church."),Object(o.b)("li",{parentName:"ul"},'"... Louis made these five (plus 1) errors: ',Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"he destroyed the minor powers")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"he increased the strength of one of the greater powers in Italy")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"he brought in a foreign power,")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"he did not settle in the country,")," "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"he did not send colonies..."),'"'),Object(o.b)("li",{parentName:"ul"},"He assisted a rival in becoming stronger and in doing so, weakened his annd his allies' position.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'"',Object(o.b)("strong",{parentName:"li"},"he who is the cause of another becoming powerful is ruined; because that predominancy has been brought about either by astuteness or else by force, and both are distrusted by him who has been raised to power."),'"'),Object(o.b)("li",{parentName:"ul"},'"he did the contrary by ',Object(o.b)("strong",{parentName:"li"},"assisting Pope Alexander to occupy the Romagna"),". It never occurred to him that by this action ",Object(o.b)("strong",{parentName:"li"},"he was weakening himself, depriving himself of friends and of those who had thrown themselves into his lap"),", whilst ",Object(o.b)("strong",{parentName:"li"},"he aggrandized the Church")," by adding much temporal power to the spiritual, thus ",Object(o.b)("strong",{parentName:"li"},"giving it greater authority."),'"'))))))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"On the topic of ",Object(o.b)("strong",{parentName:"p"},"maintaining inherited power"),":"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'"...',Object(o.b)("strong",{parentName:"li"},"there are fewer difficulties in holding hereditary states ... for it is sufficient only not to transgress the customs of his ancestors, and to deal prudently with circumstances as they arise"),'..."'),Object(o.b)("li",{parentName:"ul"},'"',Object(o.b)("strong",{parentName:"li"},"...the hereditary prince has less cause and less necessity to offend; hence it happens that he will be more loved...")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"On the topic of ",Object(o.b)("strong",{parentName:"p"},"uprisings"),":"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'"...',Object(o.b)("strong",{parentName:"li"},"men change their rulers willingly, hoping to better themselves, and this hope induces them to take up arms against him who rules"),'..."'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"On the topic of ",Object(o.b)("strong",{parentName:"p"},"governing new principalities"),":"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'"In this way ',Object(o.b)("strong",{parentName:"li"},"you have enemies in all those whom you have injured")," in seizing that principality, and ",Object(o.b)("strong",{parentName:"li"},"you are not able to keep those friends who put you there because of your not being able to satisfy them in the way they expected"),", and you cannot take strong measures against them, feeling bound to them. For, ",Object(o.b)("strong",{parentName:"li"},"although one may be very strong in armed forces, yet in entering a province one has always need of the goodwill of the natives."),'"'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},'(if acquiring a principality of the same "language, customs, or laws")'),': "He who has annexed them ... has only to ',Object(o.b)("strong",{parentName:"li"},"bear in mind two considerations: the one, that the family of their former lord is extinguished;")," the other, ",Object(o.b)("strong",{parentName:"li"},"that neither their laws nor their taxes are altered"),', so that in a very short time they will become entirely one body with the old principality."'),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},'(if acquiring a principality of differing "language, customs, or laws")'),": ",Object(o.b)("strong",{parentName:"li"},"Great luck and effort is needed; always be nearby to resolve any issues."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("em",{parentName:"li"},'"good fortune and great energy are needed to hold them, and one of the greatest and most real helps would be that he who has acquired them should go and reside there."')))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Being nearby allows you to resolve problems before they grow too large, and subjects will dare not be unruly in your presence.")," ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'"',Object(o.b)("em",{parentName:"li"},"Because, if one is on the spot, disorders are seen as they spring up, and one can quickly remedy them; but if one is not at hand, they are heard of only when they are great, and then one can no longer remedy them. Besides this, the country is not pillaged by your officials; the subjects are satisfied by prompt recourse to the prince; thus, wishing to be good, they have more cause to love him, and wishing to be otherwise, to fear him. He who would attack that state from the outside must have the utmost caution; as long as the prince resides there it can only be wrested from him with the greatest difficulty."),'"'))))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"On the topic of ",Object(o.b)("strong",{parentName:"p"},"colonies")," (as opposed to garrisons):"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'"A prince does not spend much on colonies, ',Object(o.b)("strong",{parentName:"li"},"for with little or no expense he can send them out and keep them there"),", and ",Object(o.b)("strong",{parentName:"li"},"he offends a minority only of the citizens from whom he takes lands and houses to give them to the new inhabitants; and those whom he offends, remaining poor and scattered, are never able to injure him; whilst the rest being uninjured are easily kept quiet, and at the same time are anxious not to err for fear it should happen to them"),' as it has to those who have been despoiled. In conclusion, I say that these colonies are not costly, they are more faithful, they injure less, and the injured, as has been said, being poor and scattered, cannot hurt. Upon this, one has to remark that men ought either to be well treated or crushed, because they can avenge themselves of lighter injuries, of more serious ones they cannot; therefore the injury that is to be done to a man ought to be of such a kind that one does not stand in fear of revenge."'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"On the topic of ",Object(o.b)("strong",{parentName:"p"},"foresight and planning"),":"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},'"...',Object(o.b)("strong",{parentName:"li"},"prudent princes ought to do, who have to regard not only present troubles, but also future ones, for which they must prepare with every energy, because, when foreseen, it is easy to remedy them"),'; but if you wait until they approach, the medicine is no longer in time because the malady has become incurable; ..."'),Object(o.b)("li",{parentName:"ul"},'"...',Object(o.b)("strong",{parentName:"li"},"when the evils that arise have been foreseen")," (which it is only given to a wise man to see), ",Object(o.b)("strong",{parentName:"li"},"they can be quickly redressed, but when, through not having been foreseen, they have been permitted to grow in a way that every one can see them, there is no longer a remedy"),'. Therefore, the Romans, foreseeing troubles, dealt with them at once, and, even to avoid a war, would not let them come to a head, for they knew that war is not to be avoided, but is only to be put off to the advantage of others; ..."'))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"To be continued"))),Object(o.b)("h3",{id:"crash-course-philosophy"},"Crash Course Philosophy"),Object(o.b)("p",null,"src: ",Object(o.b)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=1A_CAkYt3GY"},"CrashCourse on Youtube")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Episode 1:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Philosophy = Thinking about questions",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Questioning the nature of reality; asking about things that cannot be explained by science"),Object(o.b)("li",{parentName:"ul"},"Metaphysics: Fundamental questions on the world"),Object(o.b)("li",{parentName:"ul"},"Epistemology: Studying how we know what we know",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"How we know what is what we see it is"))),Object(o.b)("li",{parentName:"ul"},"Value Theory split in 2:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Ethics: How humans should live, evaluate human conduct"),Object(o.b)("li",{parentName:"ul"},"Aesthetics: Study of the concept of beauty and art"))),Object(o.b)("li",{parentName:"ul"},"Definitions: Philos (Science) Mythos (Storytelling)"))))),Object(o.b)("li",{parentName:"ul"},"Episode 2:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Rationality:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"People can be persuaded by arguments"))),Object(o.b)("li",{parentName:"ul"},"Plato's belief on the tripartite (3 parts) soul:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Rational (Logical)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Facts & arguments"))),Object(o.b)("li",{parentName:"ul"},"Spirited (Emotional)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"How feelings fuel your actions"))),Object(o.b)("li",{parentName:"ul"},"Appetitive (Physical desires)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Basic human needs (eat etc)"))),Object(o.b)("li",{parentName:"ul"},"Plato believed the best people were ruled by rationality rather than their spirited or appetitive parts soul",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Most agree that reasoning should be the driver, but do not agree that not being rational necessarily makes a human lesser than others"))))),Object(o.b)("li",{parentName:"ul"},"Arguments:",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Premises -> Conclusion",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Deductive: conclusion is valid (reasonable) given premises (which are not necessarily true)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"Deductive soundness: all premises are true and conclusion is valid"))),Object(o.b)("li",{parentName:"ul"},"Entailment: Premise implies premise / conclusion")))))))))}b.isMDXComponent=!0}}]);