_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"20a2":function(e,t,n){e.exports=n("nOHt")},"56N4":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projets",function(){return n("LFvt")}])},LFvt:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var r=n("nKUr"),i=n("g4pe"),a=n.n(i),o=n("S88f");function c(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(a.a,{children:[Object(r.jsx)("title",{children:"Portfolio - Suzette Sousa"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"}),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),Object(r.jsx)("meta",{name:"description",content:"Portfolio - R\xe9alisations, projets"})]}),Object(r.jsx)(o.a,{})]})}},PlhS:function(e,t){e.exports={attributes:{title:"Projets r\xe9alis\xe9s",date:"2021-01-13T19:31:20.591Z",projets:[{name:"Boaterfly",description:"",thumbnail:"img/boaterfly.png",altimg:"Boaterfly",link:"/portfolio/boaterfly/index.html",categories:["Int\xe9gration","Bootstrap"],date:"February 1, 2017 5:41 PM"},{name:"A la carte Paris",description:null,thumbnail:"img/alacarteparis.png",altimg:"A la carte Paris",link:"/portfolio/alacarteparis/index.html",categories:["Bootstrap","Int\xe9gration"],date:"2021-01-17T16:41:19.987Z"},{name:"Exclusive Martinique",description:null,thumbnail:"img/exclusivemartinique.png",altimg:"Exclusive Martinique",link:"/portfolio/exclusivemartinique/index.html",categories:["Int\xe9gration","Bootstrap"],date:"2021-01-17T16:41:20.189Z"},{name:"Kbis",description:null,thumbnail:"img/kbis.png",altimg:"Kbis",link:"/portfolio/kbis-extrait/index.html",categories:["Int\xe9gration"],date:"2021-01-17T16:41:20.335Z"},{name:"Little Travels",description:null,thumbnail:"img/littletravels.png",altimg:"Little Travels",link:"/portfolio/littletravels/index.html",categories:["Int\xe9gration"],date:"2021-01-17T16:41:20.428Z"},{name:"Mon H\xe9bergement Insolite",description:null,thumbnail:"img/mhi.png",altimg:"Mon H\xe9bergement Insolite",link:"/portfolio/mhi/index.html",categories:["Int\xe9gration"],date:"2021-01-17T16:41:20.519Z"},{name:"Natura-dis",description:null,thumbnail:"img/naturadis.png",altimg:"Natura-dis",link:"https://www.natura-dis.com/",categories:["Int\xe9gration","Wordpress"],date:"2021-01-17T16:41:20.589Z"},{name:"Line Architecture",description:null,thumbnail:"img/line-architecture.png",altimg:"Line Architecture",link:"http://www.bethgnies.com/",categories:["Int\xe9gration","Wordpress"],date:"2021-01-17T16:41:20.657Z"},{name:"Calculatrice",categories:["React"],thumbnail:"img/calculatrice.png",link:"https://suzette-sousa.github.io/calculator-app/",date:"09/12/2020"},{date:"12/12/2020",name:"Pr\xe9visualisateur Markdown",thumbnail:"img/markdown.png",link:"https://suzette-sousa.github.io/markdown-previewer/",categories:["React"]}]},html:"<p>Welcome to my portfolio.</p>\n<p>This page is built with NextJS, and content is managed in Netlify CMS</p>\n"}},S88f:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var a=n("nKUr"),o=n("PlhS"),c=n("q1tI"),l=n("YNhk");n("tpqs"),t.a=function(){var e=o.attributes.title,t=o.attributes.projets,n=[],r=(t.map((function(e){e.categories.map((function(e){n.push(e)}))})),i(new Set(n))),s=Array.from(r).sort(),u="Afficher tout";s.unshift(u);var f=Object(c.useState)("Afficher tout"),d=f[0],p=f[1],m=Object(c.useState)(0),h=m[0],g=m[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("article",{children:[Object(a.jsx)("h1",{className:"mb-6 text-4xl uppercase tracking-wider font-extralight text-center",children:e}),Object(a.jsx)("div",{className:"mb-6",children:s.map((function(e,t){return Object(a.jsx)("button",{onClick:function(){p(e),g(t)},className:"".concat(t===h?"bg-gray-600 text-white":"text-gray-600"," uppercase mr-2 mb-2 px-8 py-2 rounded border border-gray-600 max-w-max shadow-sm hover:shadow-lg"),children:e},t)}))}),Object(a.jsx)("ul",{className:"grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",children:t.sort((function(e,t){return e.date>t.date?1:-1})).filter((function(e){return d!==u?e.categories.includes(d):e})).map((function(e,t){return Object(a.jsx)("li",{className:"overflow-hidden bg-white rounded-lg shadow-xl",children:Object(a.jsx)(l.a,{href:"".concat(e.link),children:Object(a.jsxs)("a",{children:[e.thumbnail&&Object(a.jsx)("img",{src:"/".concat(e.thumbnail),alt:"".concat(e.altimg),className:"w-full"}),Object(a.jsx)("h3",{className:"p-4 text-lg font-bold bg-gray-900 text-white",children:e.name}),e.description&&Object(a.jsx)("p",{className:"p-4",children:e.description})]})})},t)}))})]})})}},YFqc:function(e,t,n){e.exports=n("cTJO")},YNhk:function(e,t,n){"use strict";var r=n("nKUr"),i=n("q1tI"),a=n.n(i),o=n("YFqc"),c=n.n(o),l=n("20a2"),s=function(e){var t=e.href,n=e.activeClassName,i=e.children,o=Object(l.useRouter)(),s=a.a.Children.only(i),u=s.props.className||"";return o.pathname===t&&n&&(u="".concat(u," ").concat(n).trim()),Object(r.jsx)(c.a,{href:t,children:a.a.cloneElement(s,{className:u})})};s.defaultProps={href:"",activeClassName:"link--active"},t.a=s},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),i=n("284h");t.__esModule=!0,t.default=void 0;var a=i(n("q1tI")),o=n("elyg"),c=n("nOHt"),l=n("vNVm"),s={};function u(e,t,n,r){if((0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[t+"%"+n+(i?"%"+i:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),i=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,o.resolveHref)(i,e.href,!0),n=r(t,2),a=n[0],c=n[1];return{href:a,as:e.as?(0,o.resolveHref)(i,e.as):c||a}}),[i,e.href,e.as]),d=f.href,p=f.as,m=e.children,h=e.replace,g=e.shallow,b=e.scroll,v=e.locale;"string"===typeof m&&(m=a.default.createElement("a",null,m));var j=a.Children.only(m),x=j&&"object"===typeof j&&j.ref,y=(0,l.useIntersection)({rootMargin:"200px"}),w=r(y,2),O=w[0],k=w[1],N=a.default.useCallback((function(e){O(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,O]);(0,a.useEffect)((function(){var e=k&&t&&(0,o.isLocalURL)(d),r="undefined"!==typeof v?v:n&&n.locale,i=s[d+"%"+p+(r?"%"+r:"")];e&&!i&&u(n,d,p,{locale:r})}),[p,d,k,v,t,n]);var I={ref:N,onClick:function(e){j.props&&"function"===typeof j.props.onClick&&j.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,a,c,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:a,locale:l}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,d,p,h,g,b,v)},onMouseEnter:function(e){(0,o.isLocalURL)(d)&&(j.props&&"function"===typeof j.props.onMouseEnter&&j.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};return(e.passHref||"a"===j.type&&!("href"in j.props))&&(I.href=(0,o.addBasePath)((0,o.addLocale)(p,"undefined"!==typeof v?v:n&&n.locale,n&&n.defaultLocale))),a.default.cloneElement(j,I)};t.default=f},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),i=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,i=(0,a.useRef)(),s=(0,a.useState)(!1),u=r(s,2),f=u[0],d=u[1],p=(0,a.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),n||f||e&&e.tagName&&(i.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:i,elements:r}),n}(n),i=r.id,a=r.observer,o=r.elements;return o.set(e,t),a.observe(e),function(){a.unobserve(e),0===o.size&&(a.disconnect(),l.delete(i))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){c||f||(0,o.default)((function(){return d(!0)}))}),[f]),[p,f]};var a=n("q1tI"),o=i(n("0G5g")),c="undefined"!==typeof IntersectionObserver;var l=new Map}},[["56N4",0,1,2,3]]]);