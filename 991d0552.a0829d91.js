(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{77:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),l=a(6),r=(a(0),a(88)),i={title:"Python Cheatsheet"},b={unversionedId:"markdown/python",id:"markdown/python",isDocsHomePage:!1,title:"Python Cheatsheet",description:"Legend:",source:"@site/docs/markdown/python.md",slug:"/markdown/python",permalink:"/My-Docs/docs/markdown/python",editUrl:"https://github.com/crazoter/My-Docs/edit/master/website/docs/markdown/python.md",version:"current",sidebar:"someSidebar",previous:{title:"Machine Learning",permalink:"/My-Docs/docs/markdown/machine_learning"},next:{title:"Math",permalink:"/My-Docs/docs/markdown/math"}},c=[{value:"Pure Python",id:"pure-python",children:[]},{value:"Libraries / Modules",id:"libraries--modules",children:[{value:"Recordlinkage",id:"recordlinkage",children:[]}]},{value:"Pandas",id:"pandas",children:[]}],m={rightToc:c};function p(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Legend:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"#: Number, used for differentiating variables"),Object(r.b)("li",{parentName:"ul"},"L#: List."),Object(r.b)("li",{parentName:"ul"},"D#: Dictionary. "),Object(r.b)("li",{parentName:"ul"},"itr#: Iterable."),Object(r.b)("li",{parentName:"ul"},"DF#: Dataframe"),Object(r.b)("li",{parentName:"ul"},"mltIdx#: MultiIndex"),Object(r.b)("li",{parentName:"ul"},"idx: Index"),Object(r.b)("li",{parentName:"ul"},"int#: Integer variable")),Object(r.b)("h2",{id:"pure-python"},"Pure Python"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Iterables",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Loop with Index"),": for idx, val in enumerate(itr)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Generators (lazy loading iteration)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Creation: ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"gen = iter(L / D / *range(i)*)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"gen = (x for x in list)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"gen = def fx(param): ... for x in param: yield x ...")))),Object(r.b)("li",{parentName:"ul"},"Use:    val = next(itr)"))))),Object(r.b)("li",{parentName:"ul"},"Lists",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Init with List Comprehension"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Format: ",Object(r.b)("inlineCode",{parentName:"li"},"[ (value) for (var_name) in (iterable) if (predicate) ]"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"e.g. [L","[0]"," for elem in list]"))))),Object(r.b)("li",{parentName:"ul"},"List of tuples:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Convert L to L of indexed tuples:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"enumerate(itr, start=int1) = [(int1,itr[0]), (int1+1,itr[0])...]")))),Object(r.b)("li",{parentName:"ul"},"Merge two lists into a list of tuples:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"zip(*L1*,*L2*)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"returns zipObject: [ (L1","[0]",",L2","[0]","),  (L1","[1]",",L2","[1]",")... ]"),Object(r.b)("li",{parentName:"ul"},"Access zipObject contents: (*zipObj)"))),Object(r.b)("li",{parentName:"ul"},"Unzip: ",Object(r.b)("inlineCode",{parentName:"li"},"zip(*zipObj)")))))))),Object(r.b)("li",{parentName:"ul"},"Dictionaries",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Init with Dictionary Comprehension"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Format: ",Object(r.b)("inlineCode",{parentName:"li"},"{ (key : value) for (var_name) in (iterable) if (predicate) }"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"e.g. {x : len(x) for x in list}"))))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Init from list of tuples"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dict(zip(L1,L2))")))))),Object(r.b)("li",{parentName:"ul"},"Functions:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Default params: x=default"),Object(r.b)("li",{parentName:"ul"},"Flexible list param: ",Object(r.b)("inlineCode",{parentName:"li"},"f(*args)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Usage: f(v1,v2,v3...)"))),Object(r.b)("li",{parentName:"ul"},"Flexible dict param: ",Object(r.b)("inlineCode",{parentName:"li"},"f(**kwargs)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Usage: f(k1=v1,k2=v2,k3=v3...)"))),Object(r.b)("li",{parentName:"ul"},"Multiple output: ",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"def fx(): return (x, y)"),Object(r.b)("li",{parentName:"ul"},"Multiple assignment:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"x,y = fx()"))))),Object(r.b)("li",{parentName:"ul"},"Global variables: ",Object(r.b)("inlineCode",{parentName:"li"},"global varname")),Object(r.b)("li",{parentName:"ul"},"Nested functions:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Variables & params of external f() is accessible"),Object(r.b)("li",{parentName:"ul"},"The function itself can be returned"),Object(r.b)("li",{parentName:"ul"},"Modify variables from nested f(): ",Object(r.b)("inlineCode",{parentName:"li"},"nonlocal varname")))))),Object(r.b)("li",{parentName:"ul"},"Functional Programming",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"map((lambda a: (transformation)), L)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"filter((lambda a: (predicate)), L)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"reduce((lambda a,b: ...), L) = result"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Import: ",Object(r.b)("inlineCode",{parentName:"li"},"from functools import reduce")))),Object(r.b)("li",{parentName:"ul"},"The lambda can be replaced with a concrete function"))),Object(r.b)("li",{parentName:"ul"},"Lambdas",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"(lambda (params): (body))")),Object(r.b)("li",{parentName:"ul"},"e.g. (lambda a: a+1) \u2261 def f(a): return a+1"),Object(r.b)("li",{parentName:"ul"},'No "return"'),Object(r.b)("li",{parentName:"ul"},"No multi-line"))),Object(r.b)("li",{parentName:"ul"},"Exception Handling",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"try: ... "),Object(r.b)("li",{parentName:"ul"},"except: ... "),Object(r.b)("li",{parentName:"ul"},"raise ",Object(r.b)("em",{parentName:"li"},"Error"),"(",Object(r.b)("em",{parentName:"li"},"msg"),")",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Error = {ValueError, TypeError, YourOwnErrClass}"))))),Object(r.b)("li",{parentName:"ul"},"I/O",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Open file:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"with open('filepath') as file_var"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"file_var.readline()"),": returns None if empty"))))),Object(r.b)("li",{parentName:"ul"},"Get script directory:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dir_path = os.path.dirname(os.path.realpath(__file__))")))),Object(r.b)("li",{parentName:"ul"},"Get path to file relative to script directory:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"local_file = os.path.join(dir_path, 'path', 'to', 'local_file')")))))),Object(r.b)("li",{parentName:"ul"},"Datetime",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Req: ",Object(r.b)("inlineCode",{parentName:"li"},"import datetime as dt")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dt.date.today()"))))),Object(r.b)("h2",{id:"libraries--modules"},"Libraries / Modules"),Object(r.b)("h3",{id:"recordlinkage"},"Recordlinkage"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"import recordlinkage")),Object(r.b)("li",{parentName:"ul"},"Purpose: ",Object(r.b)("strong",{parentName:"li"},"Join different datasets when they don't share a unique identifier.")," See ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://recordlinkage.readthedocs.io/en/latest/ref-index.html"}),"Documentation"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Init an indexer"))),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"idxr = recordlinkage.Index()"))),Object(r.b)("ol",Object(n.a)({parentName:"li"},{start:2}),Object(r.b)("li",{parentName:"ol"},"Blocking: only ",Object(r.b)("strong",{parentName:"li"},"choose pairs of entries that have the same value under specified column"),' (e.g. "cuisine_type")')),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},'idxr.block("col_name")'))),Object(r.b)("ol",Object(n.a)({parentName:"li"},{start:3}),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Generate said pairs of indexes")," which agree on the equal columns")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mltIdx_pairs = idxr.index(df1, df2)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Example pair: MultiIndex(","[(0,0),(0,1),(0,7),(1,0),(1,4)...]",")")))),Object(r.b)("ol",Object(n.a)({parentName:"li"},{start:4}),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Specify the columns to compare")," with a Compare object")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"comp = recordlinkage.Compare()"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Then, specify the columns to compare by:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"comp.exact('col_nm_in_df1', 'col_nm_in_df2', label='new_lbl_in_new_df')"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Entries must ",Object(r.b)("strong",{parentName:"li"},"exact match")," in the columns"),Object(r.b)("li",{parentName:"ul"},"e.g. comp.exact('city', 'city', label='city')"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"comp.string('col_nm_in_df1', 'col_nm_in_df2', label='new_lbl_in_new_df', threshold = dbl_frm_0-1)")," (threshold usually 0.8)"),Object(r.b)("li",{parentName:"ul"},"Entries must be ",Object(r.b)("strong",{parentName:"li"},"similar")," (in terms of string) in the columns")))))),Object(r.b)("ol",Object(n.a)({parentName:"li"},{start:5}),Object(r.b)("li",{parentName:"ol"},"Apply the Compare object to ",Object(r.b)("strong",{parentName:"li"},"get a dataframe highlighting potential matches"))),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"df_pttl_mtchs = comp.compute(mltIdx_pairs, df1, df2)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Structure of df_pttl_mtchs:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Index / Col 0: mltIdx_pairs"),Object(r.b)("li",{parentName:"ul"},"Columns: columns used for comparison",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"exact: 1 if equal else 0"),Object(r.b)("li",{parentName:"ul"},"string: 1 if threshold met, else 0")))))))),Object(r.b)("ol",Object(n.a)({parentName:"li"},{start:6}),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Filter matches")," from potential matches")),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"df_mtchs = df_pttl_mtchs[df_pttl_mtchs.sum(axis=1) >= 3]"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"If the val == 1 then there's a match on that column. This counts the number of matched columns, and filters by that."),Object(r.b)("li",{parentName:"ul"},"In this case there were 3 columns so 3 was chosen")))),Object(r.b)("ol",Object(n.a)({parentName:"li"},{start:7}),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Select matched indexes")," for one of the DFs (in this case df2)",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"idx_df2_mtched = df_mtchs.index.get_level_values(1)"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"df_pttl_mtchs & df_mtchs use a MultiIndex. "),Object(r.b)("li",{parentName:"ul"},"df_mtchs.index.get_level_values(0) = df1's indexes, (1) = df2's indexes"))))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"From df2, remove entries that match df1's entries"))),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"df2_notInDf1 = df2[~df2.index.isin(idx_df2_mtched)]"))),Object(r.b)("ol",Object(n.a)({parentName:"li"},{start:9}),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Join df1 and the new df2 entries"))),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"df1.append(df2_notInDf1)"))))),Object(r.b)("h2",{id:"pandas"},"Pandas"),Object(r.b)("details",null,Object(r.b)("summary",null,"Click to expand!"),"## Heading 1. A numbered 2. list * With some * Sub bullets"))}p.isMDXComponent=!0},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return j}));var n=a(0),l=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=l.a.createContext({}),p=function(e){var t=l.a.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},o=function(e){var t=p(e.components);return l.a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},O=l.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),o=p(a),O=n,j=o["".concat(i,".").concat(O)]||o[O]||u[O]||r;return a?l.a.createElement(j,b(b({ref:t},m),{},{components:a})):l.a.createElement(j,b({ref:t},m))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=O;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:n,i[1]=b;for(var m=2;m<r;m++)i[m]=a[m];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);