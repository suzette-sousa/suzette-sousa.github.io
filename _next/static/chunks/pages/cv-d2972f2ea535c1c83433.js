_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"20a2":function(t,e,n){t.exports=n("nOHt")},"4huZ":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cv",function(){return n("X/E+")}])},"8oxB":function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"===typeof clearTimeout?clearTimeout:l}catch(t){r=l}}();var s,c=[],u=!1,f=-1;function h(){u&&s&&(u=!1,s.length?c=s.concat(c):f=-1,c.length&&p())}function p(){if(!u){var t=a(h);u=!0;for(var e=c.length;e;){for(s=c,c=[];++f<e;)s&&s[f].run();f=-1,e=c.length}s=null,u=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===l||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function m(t,e){this.fun=t,this.array=e}function d(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new m(t,e)),1!==c.length||u||a(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},PlhS:function(t,e){t.exports={attributes:{title:"Projets r\xe9alis\xe9s",date:"2021-01-13T19:31:20.591Z",projets:[{name:"Boaterfly",description:null,thumbnail:"boaterfly.png",altimg:"Boaterfly",link:"/portfolio/boaterfly/index.html"},{name:"A la carte Paris",description:null,thumbnail:"alacarteparis.png",altimg:"A la carte Paris",link:"/portfolio/alacarteparis/index.html"},{name:"Exclusive Martinique",description:null,thumbnail:"exclusivemartinique.png",altimg:"Exclusive Martinique",link:"/portfolio/exclusivemartinique/index.html"},{name:"Kbis",description:null,thumbnail:"kbis.png",altimg:"Kbis",link:"/portfolio/kbis-extrait/index.html"},{name:"Little Travels",description:null,thumbnail:"littletravels.png",altimg:"Little Travels",link:"/portfolio/littletravels/index.html"},{name:"Mon H\xe9bergement Insolite",description:null,thumbnail:"mhi.png",altimg:"Mon H\xe9bergement Insolite",link:"/portfolio/mhi/index.html"},{name:"Natura-dis",description:null,thumbnail:"naturadis.png",altimg:"Natura-dis",link:"https://www.natura-dis.com/"},{name:"Line Architecture",description:null,thumbnail:"line-architecture.png",altimg:"Line Architecture",link:"http://www.bethgnies.com/"}]},html:"<p>Welcome to my portfolio.</p>\n<p>This page is built with NextJS, and content is managed in Netlify CMS</p>\n"}},S88f:function(t,e,n){"use strict";var r=n("nKUr"),i=n("PlhS"),o=n("YNhk");n("tpqs");e.a=function(){var t=i.attributes.title,e=i.attributes.projets;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("article",{children:[Object(r.jsx)("h1",{className:"mb-6 text-4xl uppercase tracking-wider font-extralight text-center",children:t}),Object(r.jsx)("ul",{className:"grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:e.map((function(t,e){return Object(r.jsx)("li",{className:"overflow-hidden bg-white rounded-lg shadow-xl",children:Object(r.jsx)(o.a,{href:"".concat(t.link),children:Object(r.jsxs)("a",{children:[t.thumbnail&&Object(r.jsx)("img",{src:"/img/".concat(t.thumbnail),alt:"".concat(t.altimg),className:"w-full"}),Object(r.jsx)("h3",{className:"p-4 text-lg font-bold bg-gray-900 text-white",children:t.name}),t.description&&Object(r.jsx)("p",{className:"p-4",children:t.description})]})})},e)}))})]})})}},"X/E+":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var r=n("nKUr"),i=n("g4pe"),o=n.n(i);n("S88f");function l(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(o.a,{children:[Object(r.jsx)("title",{children:"Portfolio - Suzette Sousa"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(r.jsx)("meta",{name:"description",content:"Portfolio - R\xe9alisations, projets"})]}),Object(r.jsx)("embed",{src:"/pdf/cv.pdf",width:"100%",height:"800px",type:"application/pdf"})]})}},YNhk:function(t,e,n){"use strict";var r=n("nKUr"),i=n("q1tI"),o=n.n(i),l=n("YFqc"),a=n.n(l),s=n("20a2"),c=function(t){var e=t.href,n=t.activeClassName,i=t.children,l=Object(s.useRouter)(),c=o.a.Children.only(i),u=c.props.className||"";return l.pathname===e&&n&&(u="".concat(u," ").concat(n).trim()),Object(r.jsx)(a.a,{href:e,children:o.a.cloneElement(c,{className:u})})};c.defaultProps={href:"",activeClassName:"link--active"},e.a=c},tpqs:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var l=o>=0?arguments[o]:t.cwd();if("string"!==typeof l)throw new TypeError("Arguments to path.resolve must be strings");l&&(e=l+"/"+e,i="/"===l.charAt(0))}return(i?"/":"")+(e=n(r(e.split("/"),(function(t){return!!t})),!i).join("/"))||"."},e.normalize=function(t){var o=e.isAbsolute(t),l="/"===i(t,-1);return(t=n(r(t.split("/"),(function(t){return!!t})),!o).join("/"))||o||(t="."),t&&l&&(t+="/"),(o?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(r(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),l=Math.min(i.length,o.length),a=l,s=0;s<l;s++)if(i[s]!==o[s]){a=s;break}var c=[];for(s=a;s<i.length;s++)c.push("..");return(c=c.concat(o.slice(a))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,o=t.length-1;o>=1;--o)if(47===(e=t.charCodeAt(o))){if(!i){r=o;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=function(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,o=0,l=t.length-1;l>=0;--l){var a=t.charCodeAt(l);if(47!==a)-1===r&&(i=!1,r=l+1),46===a?-1===e?e=l:1!==o&&(o=1):-1!==e&&(o=-1);else if(!i){n=l+1;break}}return-1===e||-1===r||0===o||1===o&&e===r-1&&e===n+1?"":t.slice(e,r)};var i="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("8oxB"))}},[["4huZ",0,2,1,3]]]);