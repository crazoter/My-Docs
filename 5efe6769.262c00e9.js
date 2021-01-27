(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{110:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,d=m["".concat(l,".").concat(u)]||m[u]||s[u]||r;return n?i.a.createElement(d,o(o({ref:t},c),{},{components:n})):i.a.createElement(d,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),r=(n(0),n(110)),l={title:'CS4238 Computer Security Practice "Cheatsheet"'},o={unversionedId:"markdown/CS4238",id:"markdown/CS4238",isDocsHomePage:!1,title:'CS4238 Computer Security Practice "Cheatsheet"',description:"Week 1",source:"@site/docs/markdown/CS4238.md",slug:"/markdown/CS4238",permalink:"/My-Docs/docs/markdown/CS4238",editUrl:"https://github.com/crazoter/My-Docs/edit/main/docs/markdown/CS4238.md",version:"current",sidebar:"someSidebar",previous:{title:"CS3244 Machine Learning",permalink:"/My-Docs/docs/markdown/CS3244"},next:{title:"CS4268 Quantum Computing",permalink:"/My-Docs/docs/markdown/CS4268"}},b=[{value:"Week 1",id:"week-1",children:[]},{value:"Week 2",id:"week-2",children:[]}],c={rightToc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"week-1"},"Week 1"),Object(r.b)("h4",{id:"unix"},Object(r.b)("a",Object(a.a)({parentName:"h4"},{href:"http://linuxcommand.org"}),"Unix")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"/var/"),': "variable" files, usually contain logs e.g. ',Object(r.b)("inlineCode",{parentName:"p"},"/var/log"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Analysing processes"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ps")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"lsof")," (list of files (incl. devices & net sockets))",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-p [pid]")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-i"),": idk, prof just rambled"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"+d"),": for a particular dir"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"+D"),": for a dir, recursive"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Databases"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"User: ",Object(r.b)("inlineCode",{parentName:"li"},"/etc/passwd"),", ",Object(r.b)("inlineCode",{parentName:"li"},"/etc/shadow"),", Group: ",Object(r.b)("inlineCode",{parentName:"li"},"/etc/group")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.filepermissions.com/file-permissions-index"}),"File permissions")),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"  Displayed syntax:\n        owner's   owner's\n        usr       grp       all  \n  [-|d] rw[x|s|S] rw[x|s|S] rwx[t|T]\n        0-7       0-7       0-7\n\n  [-|d]:      [file | dir]\n  [x|s|S]:    [exe | SUID set | SUID set, but user triad cannot exe]\n  [x|s|S]:    [exe | SGID set | SGID set, but group triad cannot exe]\n  [t|T]:      [Sticky bit set | Sticky Bit set, but other triads cannot exe]\n\n  * SUID / SGID\n  SUID or SGID can be set to elevate permissions for execution. \n  A SETUID or SETGID binary is executed respectively whilst the command is executed on the document in question.\n  Usually an SUID or SGID is required where users need elevated privileges and do not have admin or root access.\n\n  * Sticky Bit ensures only the owner/root can edit & delete the file/dir.\n\n  * Chmod octal (4 groups of 3 bits):\n  [SUID 4][SGID 2][Sticky 1] rws rws rws\n")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"setuid"),": change process' user ID to file owner"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"setgid"),": change process' user ID to group owner"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"find / -uid [uid] -perm [prefix][perm] -ls")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"/"),": root dir"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://askubuntu.com/questions/532952/what-does-perm-4000-o-perm-2000"}),"[prefix]"),": ",Object(r.b)("inlineCode",{parentName:"li"},"None"),": Exact perms. ",Object(r.b)("inlineCode",{parentName:"li"},"-"),": All specified perms are set. ",Object(r.b)("inlineCode",{parentName:"li"},"/")," Any specified perms are set."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[perm]"),": See File permissions above."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"-ls"),": list files found"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"man [section] cmd"),": but nowadays just google"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[section]"),": ",Object(r.b)("inlineCode",{parentName:"li"},"1"),": shell cmds ",Object(r.b)("inlineCode",{parentName:"li"},"2"),": syscalls ",Object(r.b)("inlineCode",{parentName:"li"},"3"),": lib calls ",Object(r.b)("inlineCode",{parentName:"li"},"4"),": special files ",Object(r.b)("inlineCode",{parentName:"li"},"5"),": file formats")))),Object(r.b)("h3",{id:"week-2"},"Week 2"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Highlights for TCP:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Src port, Dst port, Seq #, ACK, RST, SYN, FIN"),Object(r.b)("li",{parentName:"ul"},"ISN: Initial Sequence Num"),Object(r.b)("li",{parentName:"ul"},"Example by prof has nth to do with TCP layer lmao he talks about IP spoofing and overtaking the connection after DOSing Alice"))),Object(r.b)("li",{parentName:"ul"},"Highlights of IP:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Identification, Fragment Offset, TTL, Protocol, Src IP Addr (spoof), Don't Fragment bit, More Fragment bit (more fragments incoming if set)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"ID: Identifies the packet"),Object(r.b)("li",{parentName:"ul"},"Fragment Offset: Fragment position during reassembly"))),Object(r.b)("li",{parentName:"ul"},"Local: 127.0.0.1, Private: 10.0.0.0/8, 172.16.0.0/12 (16.0.0-31.255.255), 192.168.0.0/16, Auto-IP: 169.254.1.0 - 169.254.254.255 (when DHCP unavailable)"))),Object(r.b)("li",{parentName:"ul"},"ICMP: TCP/UDP layer",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Type, Code"))),Object(r.b)("li",{parentName:"ul"},"NAT: Map Private to public IP"),Object(r.b)("li",{parentName:"ul"},"Firewalls: Network/IP Layer (Traditional packet filters, stateful packet filters, proxy-based firewalls). Filters check headers only",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Usually block ICMP"))),Object(r.b)("li",{parentName:"ul"},"Network-based IDS: real-time detection, also check if packet payload matches application"),Object(r.b)("li",{parentName:"ul"},"traceroute (Unix UDP), tracert (Win ICMP), tcptraceroute, tctrace"),Object(r.b)("li",{parentName:"ul"},"Common Network Services: FTP (21), SSH (22), Telnet (23), HTTP (80), rlogin (513), rsh (rm shell 514), rcp, dns (53), nfs (2049), x windows (6000)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"SSH: ",Object(r.b)("inlineCode",{parentName:"li"},"systemctl {start | enable | reload} ssh")),Object(r.b)("li",{parentName:"ul"},"Apache: ",Object(r.b)("inlineCode",{parentName:"li"},"systemctl start apache"),", a2enmod, a2dismod"))),Object(r.b)("li",{parentName:"ul"},"Manual network config:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ifdown <network-device>"),", Set network via ",Object(r.b)("inlineCode",{parentName:"li"},"/etc/network/interfaces"),", then ",Object(r.b)("inlineCode",{parentName:"li"},"ifup <network-device>")),Object(r.b)("li",{parentName:"ul"},"Setup with DHCP: ",Object(r.b)("inlineCode",{parentName:"li"},"auto lo \\n iface lo inet loopback \\n auto eth0 \\n iface eth0 inet dhcp")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ifconfig"),": check, start, stop network interfaces",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"List: ",Object(r.b)("inlineCode",{parentName:"li"},"ifconfig")," (up only) ",Object(r.b)("inlineCode",{parentName:"li"},"ifconfig -a / ip addr show")," (all), ",Object(r.b)("inlineCode",{parentName:"li"},"ifconfig eth0 / ip addr show eth0")," (a specific interface), ",Object(r.b)("inlineCode",{parentName:"li"},"ip -4|-6 addr show")," (IPv4/IPv6 only)"),Object(r.b)("li",{parentName:"ul"},"Start/Stop: ",Object(r.b)("inlineCode",{parentName:"li"},"ifconfig eth0 {down | up}")," or ",Object(r.b)("inlineCode",{parentName:"li"},"ip link set eth0 {down | up}")))),Object(r.b)("li",{parentName:"ul"},"Troubleshoot: Verify gateway, DNS server can be ",Object(r.b)("inlineCode",{parentName:"li"},"ping"),"ed, check domain name resolved with ",Object(r.b)("inlineCode",{parentName:"li"},"nslookup")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"route -n")," = ",Object(r.b)("inlineCode",{parentName:"li"},"ip route show")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"route add default gw <ip-addr>")," = ",Object(r.b)("inlineCode",{parentName:"li"},"ip route add default via <ip-addr>")),Object(r.b)("li",{parentName:"ul"},"DNS: ",Object(r.b)("inlineCode",{parentName:"li"},"nslookup"),", ",Object(r.b)("inlineCode",{parentName:"li"},"dig"),", ",Object(r.b)("inlineCode",{parentName:"li"},"host"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"DNS records "),Object(r.b)("li",{parentName:"ul"},"Zone transfer (usually disabled) ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"w/ nslookup: ",Object(r.b)("inlineCode",{parentName:"li"},"nslookup ; server [target-name-server] ; set type=any ; ls -d [target-domain]")),Object(r.b)("li",{parentName:"ul"},"w/ dig: ",Object(r.b)("inlineCode",{parentName:"li"},"dig @[target-name-server] [target-domain] -t AXFR")))),Object(r.b)("li",{parentName:"ul"},"Web-based DNS recon: ViewDNS.info, Central Ops, G Suite Toolbox's Dig"),Object(r.b)("li",{parentName:"ul"},"Countermeasure: Allow zone transfer only between pri & sec name servers"),Object(r.b)("li",{parentName:"ul"},"Develop split-horizon/split-view/split-brain DNS"))),Object(r.b)("li",{parentName:"ul"},"Kali Linux tools",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"theHarvester (email addrs), Maltego, Netcraft, Centralops, Shodan (IoT), Kali NetHunter"))))),Object(r.b)("li",{parentName:"ul"},"VirtualBox",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.virtualbox.org/manual/ch06.html"}),"Networking Modes"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"VMs don't need to talk to each other: NAT"),Object(r.b)("li",{parentName:"ul"},"Else, VMs part of host network: Bridged"),Object(r.b)("li",{parentName:"ul"},"Else, VMs cannot talk to host: Internal"),Object(r.b)("li",{parentName:"ul"},"Else: If VMs can access internet (NAT Network) or cannot (Host-only)"))))),Object(r.b)("li",{parentName:"ul"},"Compliance frameworks",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Kill chain: Recon, Weapon, Delivery, Exploit, Install, Control, Actions"),Object(r.b)("li",{parentName:"ul"},"MITRE, PTES, OSSTM, OWASP, PCI DSS"))),Object(r.b)("li",{parentName:"ul"},"Recon: profile target",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Low-Tech: Dumpster diving, Social engineering, Spoofing, Spam, Phishing, Physical break-in"),Object(r.b)("li",{parentName:"ul"},"Google Hacking",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Exact: ",Object(r.b)("inlineCode",{parentName:"li"},'"exact search"'),", Number ranges: ",Object(r.b)("inlineCode",{parentName:"li"},"1..10"),", info: ",Object(r.b)("inlineCode",{parentName:"li"},"info:url"),", ",Object(r.b)("inlineCode",{parentName:"li"},"site:[domain]"),", ",Object(r.b)("inlineCode",{parentName:"li"},"link:[page]"),", word in title: ",Object(r.b)("inlineCode",{parentName:"li"},"intitle[terms]")," (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},'site:xxx intitle="index of"'),"), ",Object(r.b)("inlineCode",{parentName:"li"},"related:[site]"),", ",Object(r.b)("inlineCode",{parentName:"li"},"cache[site]"),", ",Object(r.b)("inlineCode",{parentName:"li"},"filetype:suffix"),", not (-), plus (+), ",Object(r.b)("inlineCode",{parentName:"li"},"inurl:wp-login.php")," "),Object(r.b)("li",{parentName:"ul"},"inurl examples: ",Object(r.b)("inlineCode",{parentName:"li"},"inurl:<domain-suffix>/[administrator|admin][password|user|login]"),", ",Object(r.b)("inlineCode",{parentName:"li"},"inurl:view/index.[shtml|html]")," (cam), ",Object(r.b)("inlineCode",{parentName:"li"},"inurl:viewer_index/index.[shtml|html]")," (cam)"),Object(r.b)("li",{parentName:"ul"},'Google Hacking Database GHDB, Johnny Long\'s books "Google Hacking for Pen Testers"'),Object(r.b)("li",{parentName:"ul"},"Google cache, archive wayback machine"),Object(r.b)("li",{parentName:"ul"},"Metagoofil (metadata for public docs)"),Object(r.b)("li",{parentName:"ul"},"whois: 23% correct name and physical addr, 29% fake info",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"validation obligation on reigstras"))),Object(r.b)("li",{parentName:"ul"},"OSINT (open source intelligence; info from freely-accessible sources)"))),Object(r.b)("li",{parentName:"ul"},"Attackers' knowledge:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Phone #, Domain names, IP Addr, servers, tech contact info, people info")))))))}p.isMDXComponent=!0}}]);