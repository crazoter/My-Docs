(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"default",(function(){return u}));var r=a(2),n=a(6),l=(a(0),a(98)),i={title:"Network"},b={unversionedId:"markdown/network",id:"markdown/network",isDocsHomePage:!1,title:"Network",description:"Inter-domain Routing",source:"@site/docs/markdown/network.md",slug:"/markdown/network",permalink:"/My-Docs/docs/markdown/network",editUrl:"https://github.com/crazoter/My-Docs/edit/master/website/docs/markdown/network.md",version:"current",sidebar:"someSidebar",previous:{title:"Math",permalink:"/My-Docs/docs/markdown/math"},next:{title:"Formal Verification",permalink:"/My-Docs/docs/markdown/formal_verification"}},o=[{value:"BGP router / speaker",id:"bgp-router--speaker",children:[{value:"BGP Prefix Hijacking",id:"bgp-prefix-hijacking",children:[]},{value:"BGP Subprefix Hijacking",id:"bgp-subprefix-hijacking",children:[]},{value:"BGP in practice",id:"bgp-in-practice",children:[]},{value:"Peer 2 Peer",id:"peer-2-peer",children:[]}]}],c={rightToc:o};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("details",null,Object(l.b)("summary",null,"Inter-domain Routing"),Object(l.b)("p",null,"* Wk9-05-BGP * 2 types of routing algos",Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Comparison"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Link State algo"),Object(l.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Distance Vector algo"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Router knowledge"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"All know full network topology & link cost info"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Only know connected neighbors & link costs")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Algo type"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Global / Centralized e.g. Djikstra"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Decentralized, iteratively by exchanging info with neighbours")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Algo impl"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Open Shortest Path First (OSPF)"),Object(l.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Routing Info Prtcl (RIP)")))),Object(l.b)("p",null,"Limitations : Link State Routing"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"High bandwidth: ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Topology info is flooded (to other routers)"))),Object(l.b)("li",{parentName:"ul"},"Sensitive info released by nodes"),Object(l.b)("li",{parentName:"ul"},"High processing overhead: Everything computed locally by node"),Object(l.b)("li",{parentName:"ul"},"Unit representing distance is not the same for all nodes")),Object(l.b)("p",null,"Distance Vector:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Send distance metric per destination "),Object(l.b)("li",{parentName:"ul"},"Adv",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Hide details of topology"),Object(l.b)("li",{parentName:"ul"},"Only next hop determined per node"))),Object(l.b)("li",{parentName:"ul"},"Disadv",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Inconsistent units representing distance"),Object(l.b)("li",{parentName:"ul"},"Slow convergence due to counting-to-infinity",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Counting to infinity: (14:00) A - B - C, if link BC is cut, B will still think A can reach C and increment path cost, A will still think B can reach and increment path cost etc")))))),Object(l.b)("p",null,"Path Vector"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Extension of distance vector",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Send entire path for each destination d "),Object(l.b)("li",{parentName:"ul"},"Adv:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Avoid count-to-infinity problem"),Object(l.b)("li",{parentName:"ul"},"Avoid loops"))),Object(l.b)("li",{parentName:"ul"},"In terms of ASes, only 3 hops needed (flattening of the internet as they seek to shorten the path for customers)")))),Object(l.b)("p",null,"Border Gateway Protocol (BGP)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Main goals:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Fulfil agreements with other ISPs",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Define who provide transit for what (based on relationship)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Customer-provider",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Customer pays provider for internet routing",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"multi-homing: if multiple providers to same customer"))),Object(l.b)("li",{parentName:"ul"},"Provider provides transit service to customer"),Object(l.b)("li",{parentName:"ul"},"Customers:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Nontransit AS: Provider never flows traffic through customer",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"May not even need BGP if they don't intend to help route traffic; just need to know provider's static IP"))),Object(l.b)("li",{parentName:"ul"},"Selective Transit: Allows some AS to flow traffic through, others deny"))))),Object(l.b)("li",{parentName:"ul"},"Peer to peer (P2P)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"2 ASes agree to transit between their customers"),Object(l.b)("li",{parentName:"ul"},"Usually don't pay each other"),Object(l.b)("li",{parentName:"ul"},"Agreement only between the 2 ASes; relationship is not transitive"),Object(l.b)("li",{parentName:"ul"},"Usually confidential"),Object(l.b)("li",{parentName:"ul"},"Usually between 2 big ASes"),Object(l.b)("li",{parentName:"ul"},"Traffic Exchange Ratio should be roughly balanced"),Object(l.b)("li",{parentName:"ul"},"Pros:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Reduce costs"),Object(l.b)("li",{parentName:"ul"},"Improve end-to-end performance"),Object(l.b)("li",{parentName:"ul"},"May be the only way"))),Object(l.b)("li",{parentName:"ul"},"Cons:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"No profit"),Object(l.b)("li",{parentName:"ul"},"Peers are competition"),Object(l.b)("li",{parentName:"ul"},"Peering requires periodic renegotiation"))))),Object(l.b)("li",{parentName:"ul"},"Sibling to sibling",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"ASs belong to same company"),Object(l.b)("li",{parentName:"ul"},"Share everything"))))))),Object(l.b)("li",{parentName:"ul"},"Minimize costs"),Object(l.b)("li",{parentName:"ul"},"Ensure good performance for customers"))),Object(l.b)("li",{parentName:"ul"},"Tiers:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Tier 1 AS / ISP",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Top of the customer-provider hierarchy, only have peers (no upstream)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Don't have to pay anyone"))),Object(l.b)("li",{parentName:"ul"},"P2P with each other to form a full-mesh",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Around 10-12 ASes (AT&T etc)"))),Object(l.b)("li",{parentName:"ul"},"Lower layer",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"National / regional scope"))),Object(l.b)("li",{parentName:"ul"},"Stub ASes",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"usually customers"))),Object(l.b)("li",{parentName:"ul"},"List at CAIDA AS RANK"))))),Object(l.b)("li",{parentName:"ul"},"2 BGP routers (between ASes) exchange messages",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"advertise paths to different destination network prefixes"))),Object(l.b)("li",{parentName:"ul"},"Application layer, TCP port 179",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"exchange all active routes in their routing tables"),Object(l.b)("li",{parentName:"ul"},"exchange incremental updates"))),Object(l.b)("li",{parentName:"ul"},"BGP/IGP model used by ISPs (S15)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"eBGP: Between ASes: exchange reachability info",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Border routers are directly connected by TCP (no IGP)"),Object(l.b)("li",{parentName:"ul"},"ASes advertise their network prefix"),Object(l.b)("li",{parentName:"ul"},"No expiration timer for routes"),Object(l.b)("li",{parentName:"ul"},"All routes through peer become invalid if it goes down"),Object(l.b)("li",{parentName:"ul"},"Message Info:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Types: OPEN (TCP to peer), UPDATE (advertise/withdraw new/old paths), KEEPALIVE (Keep TCP open), NOTIFICATION (correct errors or FIN) (S18-19)"),Object(l.b)("li",{parentName:"ul"},"Attributes",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Well-Known mandatory:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"AS-PATH: All ASes in the path (e.g. AS1 AS24)"),Object(l.b)("li",{parentName:"ul"},'NEXT-HOP: IP addr of the first router in the next very next AS "next-hop-AS"'))))),Object(l.b)("li",{parentName:"ul"},"Prefix (IP prefix (network mask e.g. 138.16.64/22) of the AS)"),Object(l.b)("li",{parentName:"ul"},"Route: Contains Prefix + attribute"))),Object(l.b)("li",{parentName:"ul"},"BGP Routing & Updating the routing table (hot potato routing)",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"Init: Router learns of prefix from BGP route adverts from iBGPs"),Object(l.b)("li",{parentName:"ol"},"eBGP level: Use shortest AS-PATH"),Object(l.b)("li",{parentName:"ol"},"iBGP level: Find shortest path using OSPF to NEXT-HOP based on chosen AS-PATH"),Object(l.b)("li",{parentName:"ol"},"Updating the forwarding table: Identify port along OSPF shortest path, Add prefix-port entry to forwarding table (e.g. 138.16.64/22, port 4)"))))),Object(l.b)("li",{parentName:"ul"},"iBGP: BGP inside the AS: ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"propagrate reachability info so that other border routers will know (and can exchange)"),Object(l.b)("li",{parentName:"ul"},"Don't have to be directly connected (can use IGP)"),Object(l.b)("li",{parentName:"ul"},"But they must be (logically) fully meshed",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Each pass on prefixes they learn from outside AS"),Object(l.b)("li",{parentName:"ul"},"Do not pass on prefixes learnt from other iBGP speakers",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Info not repeated, reduce overhead, scalable"))))))),Object(l.b)("li",{parentName:"ul"},"Interior Gateway Protocol (IGP): The normal network routing")))))),Object(l.b)("h2",{id:"bgp-router--speaker"},"BGP router / speaker"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"BGP is policy-based",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Import policy: Filter unwanted routes from neighbour",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Rank customer routes over peer routes"),Object(l.b)("li",{parentName:"ul"},"manipulate attributes to influence path selection for neighbors"))),Object(l.b)("li",{parentName:"ul"},"Export policy: Filter routes you don't want to tell your neighbor",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Dual-homed: attached to 2 networks"),Object(l.b)("li",{parentName:"ul"},"e.g. don't want your neighbours to know and use the route"),Object(l.b)("li",{parentName:"ul"},"e.g. Customer-Provider relationship:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Customer wouldn't want to announce route to its peers (it don't want anything routing traffic through it)"),Object(l.b)("li",{parentName:"ul"},"Providers advertises with everyone"))),Object(l.b)("li",{parentName:"ul"},"e.g. P2P:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Don't want peers to route stuff through them to another peer:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"AS exports only customer routes to a peer"),Object(l.b)("li",{parentName:"ul"},"AS exports a peer's routes only to its customers"))))))))),Object(l.b)("li",{parentName:"ul"},"A routing entry:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Route = prefix + attr + NLRI + (Path attr)"))),Object(l.b)("li",{parentName:"ul"},"What to do with all the inbound UPDATE messages?"),Object(l.b)("li",{parentName:"ul"},"Build a db: Routing Information Base (RIBs)",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"RIBs = Adj-RIBs-In + Loc-RIB + Adj-RIBs-Out"),Object(l.b)("li",{parentName:"ul"},"Adj-RIBs-In: incoming routing info (inbound UPDATE)"),Object(l.b)("li",{parentName:"ul"},"Loc-RIB: selected local routes by router"),Object(l.b)("li",{parentName:"ul"},"Adj-RIBs-Out: selected for advertisement to peers")))),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"Apply ",Object(l.b)("strong",{parentName:"li"},"Import Policies")," on Inbound UPDATE"),Object(l.b)("li",{parentName:"ol"},"Select best route from Adj-RIBs-In and pass to Loc-RIB",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"You can choose any policy but this is the recommended process:")),Object(l.b)("ol",Object(r.a)({parentName:"li"},{start:2}),Object(l.b)("li",{parentName:"ol"},"Highest degree of LOCAL_PREF (or the only route to the destination), then tie break:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"LOCAL_PREF: 4-byte unit (default 100) for BGP to indicate route preference. ",Object(l.b)("em",{parentName:"li"},"This is not forwarded."),". Larger better")),Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"Smallest ","#"," of ASs in the AS_PATH"),Object(l.b)("li",{parentName:"ol"},"Lowest origin ","#"," in ORIGIN"),Object(l.b)("li",{parentName:"ol"},"Most preferred MULTI_EXIT_DISC (smaller better)"),Object(l.b)("li",{parentName:"ol"},"Routes from eBGP are preferred over iBGP"),Object(l.b)("li",{parentName:"ol"},"Lower interior cost based on NEXT_HOP"),Object(l.b)("li",{parentName:"ol"},"COMMUNITY: for influencing neighbor's neighbors"))))),Object(l.b)("li",{parentName:"ol"},"Install best route as forwarding entries in IP Forwarding Table"),Object(l.b)("li",{parentName:"ol"},"Apply export policies to Adj-RIB-Out",Object(l.b)("ol",{parentName:"li"},Object(l.b)("li",{parentName:"ol"},"Propagate Inbound UPDATE as Outbound UPDATE to other BGP routers")))),Object(l.b)("h3",{id:"bgp-prefix-hijacking"},"BGP Prefix Hijacking"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"2 shae the same prefix"),Object(l.b)("li",{parentName:"ul"},"Blackhole: data traffic discarded"),Object(l.b)("li",{parentName:"ul"},"Spoofing: Data traffic inspected and redirected",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Impersonation")))),Object(l.b)("h3",{id:"bgp-subprefix-hijacking"},"BGP Subprefix Hijacking"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"12.3.158.0/24 and 12.34.0.0/16",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Longer prefix matching will result in all traffic routed to 12.3.158.0/24"),Object(l.b)("li",{parentName:"ul"},"Can visualize with BGPlay"),Object(l.b)("li",{parentName:"ul"},"Can prevent with anomaly detection")))),Object(l.b)("h3",{id:"bgp-in-practice"},"BGP in practice"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Preference (attr)"),Object(l.b)("li",{parentName:"ul"},"Filtering (inbound/outbound filter)"),Object(l.b)("li",{parentName:"ul"},"Tagging (COMMUNITY attr)"),Object(l.b)("li",{parentName:"ul"},"Applications",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"relations",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"influence process"),Object(l.b)("li",{parentName:"ul"},"control route export"))),Object(l.b)("li",{parentName:"ul"},"traffic engineering",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"inbound"),Object(l.b)("li",{parentName:"ul"},"outbound"),Object(l.b)("li",{parentName:"ul"},"remote control ")))))),Object(l.b)("h3",{id:"peer-2-peer"},"Peer 2 Peer"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Client/server = assymetric",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Extension: iteratively/recursively delegate other servers to do task ",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"e.g. like DNS, a tree structure"))))),Object(l.b)("li",{parentName:"ul"},"Pure P2P",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"No central entity"),Object(l.b)("li",{parentName:"ul"},"All entities directly communicate"),Object(l.b)("li",{parentName:"ul"},"No structure; flat architecture"),Object(l.b)("li",{parentName:"ul"},"Unreliable; how to stay connected or lookup?",Object(l.b)("details",null,Object(l.b)("summary",null,"Template"),Object(l.b)("p",null)))))))}u.isMDXComponent=!0},98:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),u=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(a),s=r,O=p["".concat(i,".").concat(s)]||p[s]||m[s]||l;return a?n.a.createElement(O,b(b({ref:t},c),{},{components:a})):n.a.createElement(O,b({ref:t},c))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var c=2;c<l;c++)i[c]=a[c];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"}}]);