(function(t){function a(a){for(var i,r,o=a[0],c=a[1],l=a[2],p=0,u=[];p<o.length;p++)r=o[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(a);while(u.length)u.shift()();return n.push.apply(n,l||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],i=!0,o=1;o<e.length;o++){var c=e[o];0!==s[c]&&(i=!1)}i&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var i={},s={app:0},n=[];function r(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)r.d(e,i,function(a){return t[a]}.bind(null,i));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/portfolio/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=a,o=o.slice();for(var l=0;l<o.length;l++)a(o[l]);var d=c;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"152e":function(t,a,e){},"1bc2":function(t,a,e){"use strict";var i=e("6f24"),s=e.n(i);s.a},2395:function(t,a,e){},"2f96":function(t,a,e){t.exports=e.p+"img/mountain.88aad0f2.svg"},"389c":function(t,a,e){},"3f73":function(t,a,e){t.exports=e.p+"img/sun.7555f6da.svg"},"3f8b":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},n=[],r=(e("7c55"),e("2877")),o={},c=Object(r["a"])(o,s,n,!1,null,null,null),l=c.exports,d=e("8c4f"),p=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"Home"}},[e("Navigation"),e("Header"),e("Projects"),e("Skills"),e("About"),e("Contact")],1)},u=[],v=e("5530"),m=e("2f62"),f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{class:{fixed:!t.onTop},attrs:{id:"navigation"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"logo"},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#header",expression:"'#header'"}],attrs:{href:"#"}},[e("span",[t._v("Grzegorz Zygmański")]),t._v(" - Portfolio")])]),e("div",{staticClass:"links"},[e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#projects",expression:"'#projects'"}],attrs:{href:"#"}},[t._v("Projekty")]),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#skills",expression:"'#skills'"}],attrs:{href:"#"}},[t._v("Umiejętności")]),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],attrs:{href:"#"}},[t._v("O Mnie")]),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],attrs:{href:"#"}},[t._v("Kontakt")])]),e("div",{staticClass:"menu",on:{click:function(a){return t.toggleSideBar()}}},[e("span",[e("font-awesome-icon",{attrs:{icon:"bars"}})],1)])]),e("transition",{attrs:{name:"fade"}},[t.sideBar?e("div",{staticClass:"overlay",on:{click:function(a){return t.toggleSideBar()}}}):t._e()]),e("transition",{attrs:{name:"slide"}},[t.sideBar?e("div",{staticClass:"sidebar"},[e("div",{staticClass:"menubar"},[e("h2",[t._v("Menu")]),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#projects",expression:"'#projects'"}],attrs:{href:"#"}},[t._v("Projekty")]),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#skills",expression:"'#skills'"}],attrs:{href:"#"}},[t._v("Umiejętności")]),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#about",expression:"'#about'"}],attrs:{href:"#"}},[t._v("O Mnie")]),e("a",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#contact",expression:"'#contact'"}],attrs:{href:"#"}},[t._v("Kontakt")]),e("button",{on:{click:function(a){return t.toggleSideBar()}}},[e("font-awesome-icon",{attrs:{icon:"window-close"}}),e("span",[t._v("Zamknij")])],1)])]):t._e()])],1)},h=[],g={name:"Navigation",data:function(){return{onTop:!0,sideBar:!1}},methods:{toggleSideBar:function(){this.sideBar=!this.sideBar}},created:function(){var t=this;window.addEventListener("scroll",(function(){0===window.scrollY?t.onTop=!0:t.onTop=!1})),window.addEventListener("keydown",(function(a){"Escape"===a.key&&(t.sideBar=!1)}))}},y=g,w=(e("eb98"),Object(r["a"])(y,f,h,!1,null,"1d898ae2",null)),_=w.exports,b=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{style:{"min-height":t.headerHeight+"px"},attrs:{id:"header"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"box landing-content"},[e("h1",[t._v("Grzegorz Zygmański")]),e("h2",[t._v("Junior Front-end Developer")]),e("p",[t._v("Zajmuję się projektowaniem i tworzeniem responsywnych stron internetowych. Okazyjnie piszę aplikację i skrypty w Pythonie oraz Bash'u. Sprawdź niektóre z moich projektów.")]),e("p"),e("button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#projects",expression:"'#projects'"}]},[t._v("Dowiedz się więcej")])])])])},z=[],k={name:"Header",computed:Object(v["a"])({},Object(m["c"])(["headerHeight"]))},j=k,C=(e("a0e0"),Object(r["a"])(j,b,z,!1,null,"7e4d773e",null)),x=C.exports,P=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{style:{"min-height":t.contentHeight+"px"},attrs:{id:"projects"}},[e("div",{staticClass:"container"},[e("h2",[t._v("Projekty")]),e("div",{staticClass:"row"},[e("div",{staticClass:"card-container",attrs:{id:"snr"}},[e("div",{staticClass:"project-card"},[e("div",{staticClass:"project-info"},[e("h3",[t._v("Simple Novel Reader")]),e("div",{staticClass:"links"},[e("a",{attrs:{href:"https://github.com/gzygmanski/simple-novel-reader",target:"_blank"}},[e("span",[t._v("github")]),e("font-awesome-icon",{attrs:{icon:"external-link-alt"}})],1),e("a",{attrs:{href:"https://pypi.org/project/simple-novel-reader",target:"_blank"}},[e("span",[t._v("pypi")]),e("font-awesome-icon",{attrs:{icon:"external-link-alt"}})],1)]),e("p",[t._v("Prosty czytnik książek w formacie EPUB z wykorzystaniem biblioteki Curses.")]),t._m(0)])])]),e("div",{staticClass:"card-container",attrs:{id:"pg-kancelaria"}},[e("div",{staticClass:"project-card"},[e("div",{staticClass:"project-info"},[e("h3",[t._v("PG Kancelaria")]),e("div",{staticClass:"links"},[e("a",{attrs:{href:"http://pgkancelaria.pl/",target:"_blank"}},[e("span",[t._v("strona")]),e("font-awesome-icon",{attrs:{icon:"external-link-alt"}})],1)]),e("p",[t._v("Strona domowa kanclelarii adwokackiej.")]),t._m(1)])])])]),e("div",{staticClass:"row"},[e("div",{staticClass:"card-container",attrs:{id:"cb-universal"}},[e("div",{staticClass:"project-card"},[e("div",{staticClass:"project-info"},[e("h3",[t._v("CB Universal")]),e("div",{staticClass:"links"},[e("a",{attrs:{href:"http://cbuniversal.us/",target:"_blank"}},[e("span",[t._v("strona")]),e("font-awesome-icon",{attrs:{icon:"external-link-alt"}})],1)]),e("p",[t._v("Strona domowa firmy CB Universal.")]),t._m(2)])])]),e("div",{staticClass:"card-container",attrs:{id:"startpage"}},[e("div",{staticClass:"project-card"},[e("div",{staticClass:"project-info"},[e("h3",[t._v("Startpage 2")]),e("div",{staticClass:"links"},[e("a",{attrs:{href:"https://github.com/gzygmanski/startpage2",target:"_blank"}},[e("span",[t._v("github")]),e("font-awesome-icon",{attrs:{icon:"external-link-alt"}})],1)]),e("p",[t._v("Projekt strony startowej z zakładkami i interfejsem MPD")]),t._m(3)])])])])])])},H=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"links"},[e("span",{staticClass:"badge primary"},[t._v("Python")]),e("span",{staticClass:"badge tertiary"},[t._v("Curses")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"links"},[e("span",{staticClass:"badge primary"},[t._v("PHP")]),e("span",{staticClass:"badge primary"},[t._v("HTML")]),e("span",{staticClass:"badge tertiary"},[t._v("Sass")]),e("span",{staticClass:"badge tertiary"},[t._v("Bootstrap")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"links"},[e("span",{staticClass:"badge secondary"},[t._v("Node.js")]),e("span",{staticClass:"badge primary"},[t._v("JavaScript")]),e("span",{staticClass:"badge primary"},[t._v("HTML")]),e("span",{staticClass:"badge tertiary"},[t._v("Less")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"links"},[e("span",{staticClass:"badge secondary"},[t._v("Vue")]),e("span",{staticClass:"badge secondary"},[t._v("Flask")]),e("span",{staticClass:"badge primary"},[t._v("Python")]),e("span",{staticClass:"badge primary"},[t._v("JavaScript")]),e("span",{staticClass:"badge tertiary"},[t._v("CSS")])])}],O={name:"Projects",computed:Object(v["a"])({},Object(m["c"])(["contentHeight"]))},S=O,E=(e("7f8a"),Object(r["a"])(S,P,H,!1,null,"6dc79f26",null)),B=E.exports,N=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("section",{style:{"min-height":t.contentHeight+"px"},attrs:{id:"skills"}},[i("div",{staticClass:"container"},[i("div",{staticClass:"image-container",style:{"min-height":t.contentHeight+"px"}},[i("img",{attrs:{src:e("fcb9"),alt:""}})]),i("div",{staticClass:"box content"},[i("h2",[t._v("Umiejętności")]),i("p",[t._v("Posiadam wiedzę i umiejętności z zakresu programowania, projektowania i tworzenia stron internetowych.")]),i("p",[t._v("Najchętniej pracuje z:")]),t._m(0),i("p",{staticClass:"small"},[t._v("Więcej informacji znajdziesz w moim CV:")]),i("a",{staticClass:"btn",attrs:{href:"./cv.pdf",download:""}},[i("font-awesome-icon",{attrs:{icon:"file-pdf"}}),i("span",[t._v("Pobierz CV (2.72MB)")])],1)])])])},$=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",[e("li",[t._v("HTML 5")]),e("li",[t._v("CSS 3")]),e("li",[t._v("Sass")]),e("li",[t._v("Python")]),e("li",[t._v("Vue")]),e("li",[t._v("JavaScript ...")])])}],T={name:"Skills",computed:Object(v["a"])({},Object(m["c"])(["contentHeight"]))},W=T,M=(e("e2fd"),Object(r["a"])(W,N,$,!1,null,"cda3b28a",null)),L=M.exports,J=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("section",{attrs:{id:"about"}},[t._m(0),i("carousel",{staticClass:"container carousel",attrs:{autoplay:t.autoplay,autoplayTimeout:t.autoplayTimeout,autoplayHoverPause:t.autoplayHoverPause,perPage:t.perPage,paginationEnabled:t.paginationEnabled,loop:t.loop,resistanceCoef:t.resistanceCoef}},[i("slide",{staticClass:"stretch secondary"},[i("div",{staticClass:"box story-card secondary"},[i("h2",[t._v("Początek")]),i("h3",[t._v("2014")]),i("div",{staticClass:"story-image"},[i("img",{attrs:{src:e("3f73"),alt:""}})]),i("p",[t._v("Swoją przygodę zacząłem w techników, gdzie nauczyłem się programować w C++ oraz rozpocząłem naukę języka Python. Wiedzę zgromadzoną w tym czasie zabrałem ze sobą na studia, gdzie napisałem moje pierwsze projekty...")])])]),i("slide",{staticClass:"stretch primary"},[i("div",{staticClass:"box story-card primary"},[i("h2",[t._v("Pierwsze projekty")]),i("h3",[t._v("2017")]),i("div",{staticClass:"story-image"},[i("img",{attrs:{src:e("2f96"),alt:""}})]),i("p",[t._v("W czasie studiów uczestniczyłem w kilku projektach. Były to proste strony w czystym HTML z nutą Bootstrap'a niemniej jednak były one cennym doświadczeniem. Wziąłem także udział w dwóch edycjach warsztatów prowadzonych przez firmę STX Next o nazwie PyPiła, w których poznałem Django i Flask.")])])]),i("slide",{staticClass:"stretch tertiary"},[i("div",{staticClass:"box story-card tertiary"},[i("h2",[t._v("Rewitalizacja")]),i("h3",[t._v("2020")]),i("div",{staticClass:"story-image"},[i("img",{attrs:{src:e("bb03"),alt:""}})]),i("p",[t._v("W ostatnim roku studiów nie miałem wiele czasu aby poświęcić na programowanie, gdyż byłem pochłonienty pisaniem pracy magisterskiej. Od 2020 jednak powróciłem z nowymi siłami. Zacząłem na nowo poznawać języki i środowiska programistyczne.")])])])],1)],1)},Z=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container static"},[i("div",{staticClass:"stretch secondary"},[i("div",{staticClass:"box story-card secondary"},[i("h2",[t._v("Początek")]),i("h3",[t._v("2014")]),i("div",{staticClass:"story-image"},[i("img",{attrs:{src:e("3f73"),alt:""}})]),i("p",[t._v("Swoją przygodę zacząłem w techników, gdzie nauczyłem się programować w C++ oraz rozpocząłem naukę języka Python. Wiedzę zgromadzoną w tym czasie zabrałem ze sobą na studia, gdzie napisałem moje pierwsze projekty...")])])]),i("div",{staticClass:"stretch primary"},[i("div",{staticClass:"box story-card primary"},[i("h2",[t._v("Pierwsze projekty")]),i("h3",[t._v("2017")]),i("div",{staticClass:"story-image"},[i("img",{attrs:{src:e("2f96"),alt:""}})]),i("p",[t._v("W czasie studiów uczestniczyłem w kilku projektach. Były to proste strony w czystym HTML z nutą Bootstrap'a niemniej jednak były one cennym doświadczeniem. Wziąłem także udział w dwóch edycjach warsztatów prowadzonych przez firmę STX Next o nazwie PyPiła, w których poznałem Django i Flask.")])])]),i("div",{staticClass:"stretch tertiary"},[i("div",{staticClass:"box story-card tertiary"},[i("h2",[t._v("Rewitalizacja")]),i("h3",[t._v("2020")]),i("div",{staticClass:"story-image"},[i("img",{attrs:{src:e("bb03"),alt:""}})]),i("p",[t._v("W ostatnim roku studiów nie miałem wiele czasu aby poświęcić na programowanie, gdyż byłem pochłonienty pisaniem pracy magisterskiej. Od 2020 jednak powróciłem z nowymi siłami. Zacząłem na nowo poznawać języki i środowiska programistyczne.")])])])])}],D=e("0a63"),F=e.n(D),R={name:"About",components:{Carousel:D["Carousel"],Slide:D["Slide"]},data:function(){return{autoplay:!0,autoplayTimeout:3e3,autoplayHoverPause:!0,perPage:1,paginationEnabled:!1,loop:!0,resistanceCoef:0}}},U=R,V=(e("fad7"),Object(r["a"])(U,J,Z,!1,null,"33d63c3a",null)),A=V.exports,G=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{attrs:{id:"contact"}},[e("div",{staticClass:"container"},[e("h2",[t._v("Zostańmy w kontakcie!")]),e("div",{staticClass:"row"},[t._m(0),e("div",{staticClass:"contact-list"},[e("ul",[e("li",[e("a",{attrs:{href:"mailto:gzygmanski@hotmail.com"}},[e("font-awesome-icon",{attrs:{icon:"envelope"}}),e("span",[t._v("gzygmanski@hotmail.com")])],1)]),e("li",[e("a",{attrs:{href:"tel:+48579633775"}},[e("font-awesome-icon",{attrs:{icon:"phone-alt"}}),e("span",[t._v("+48 579 633 775")])],1)]),e("li",[e("a",{attrs:{href:"https://github.com/gzygmanski",target:"_blank"}},[e("font-awesome-icon",{attrs:{icon:["fab","github-alt"]}}),e("span",[t._v("github.com/gzygmanski")])],1)]),e("li",[e("a",{attrs:{href:"./cv.pdf",download:""}},[e("font-awesome-icon",{attrs:{icon:"file-pdf"}}),e("span",[t._v("CV")])],1)])])])])])])},K=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"box call"},[e("p",[t._v("Jestem otwarty na propozycje współpracy. Podejrzyj moje CV i napisz lub zadzwoń")])])}],X={name:"Contact"},Y=X,q=(e("1bc2"),Object(r["a"])(Y,G,K,!1,null,"4e83fbe9",null)),I=q.exports,Q={name:"Home",components:{Navigation:_,Header:x,Projects:B,Skills:L,About:A,Contact:I},data:function(){return{winHeight:0}},methods:Object(v["a"])(Object(v["a"])({},Object(m["b"])(["changeWinHeight"])),{},{getRealHeight:function(){return window.innerHeight-66}}),created:function(){var t=this;this.winHeight=this.getRealHeight(),this.changeWinHeight(this.winHeight),window.addEventListener("resize",(function(){t.changeWinHeight(t.getRealHeight())}))}},tt=Q,at=Object(r["a"])(tt,p,u,!1,null,null,null),et=at.exports,it=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},st=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("p",[t._v("404 - Not Found")])])}],nt={name:"NotFound"},rt=nt,ot=Object(r["a"])(rt,it,st,!1,null,null,null),ct=ot.exports;i["a"].use(d["a"]);var lt=[{path:"/",component:et},{path:"*",component:ct}],dt=new d["a"]({mode:"history",base:"/portfolio/",routes:lt});i["a"].use(m["a"]);var pt=new m["a"].Store({state:{contentHeight:null},getters:{contentHeight:function(t){return t.contentHeight},headerHeight:function(t){return t.contentHeight+66}},mutations:{getWinHeight:function(t,a){return t.contentHeight=a}},actions:{changeWinHeight:function(t,a){var e=t.commit;e("getWinHeight",a)}},modules:{}}),ut=e("f13c"),vt=e.n(ut),mt=e("ecee"),ft=e("c074"),ht=e("f2d1"),gt=e("ad3d");mt["c"].add(ft["a"],ft["f"],ft["c"],ft["b"],ft["e"],ht["a"],ft["d"]),i["a"].component("font-awesome-icon",gt["a"]),i["a"].config.productionTip=!1,i["a"].use(vt.a,{container:"body",duration:500,easing:"ease",offset:-66,force:!0,cancelable:!0,onStart:!1,onDone:!1,onCancel:!1,x:!1,y:!0}),i["a"].use(F.a),new i["a"]({router:dt,store:pt,render:function(t){return t(l)}}).$mount("#app")},5701:function(t,a,e){},"6f24":function(t,a,e){},"7c55":function(t,a,e){"use strict";var i=e("2395"),s=e.n(i);s.a},"7f8a":function(t,a,e){"use strict";var i=e("389c"),s=e.n(i);s.a},a0e0:function(t,a,e){"use strict";var i=e("ffc8"),s=e.n(i);s.a},bb03:function(t,a,e){t.exports=e.p+"img/forest.0bead8ce.svg"},e2fd:function(t,a,e){"use strict";var i=e("152e"),s=e.n(i);s.a},eb98:function(t,a,e){"use strict";var i=e("3f8b"),s=e.n(i);s.a},fad7:function(t,a,e){"use strict";var i=e("5701"),s=e.n(i);s.a},fcb9:function(t,a,e){t.exports=e.p+"img/skills.5eea416f.svg"},ffc8:function(t,a,e){}});
//# sourceMappingURL=app.d8d696fb.js.map