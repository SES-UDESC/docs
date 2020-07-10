(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(9),a=(n(0),n(159)),c=n(167),i=n(168),u={id:"postinstall",slug:"post-install",title:"Post Install"},s={id:"Instalacao/Docker/postinstall",isDocsHomePage:!1,title:"Post Install",description:"O projeto tem sua infraestrutura construida baseado no docker.",source:"@site/docs/Instalacao/Docker/PostInstall.mdx",permalink:"/docs/Instalacao/Docker/post-install",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Instalacao/Docker/PostInstall.mdx",sidebar:"sidebar",previous:{title:"Docker Compose",permalink:"/docs/Instalacao/Docker/docker-compose"},next:{title:"Build",permalink:"/docs/Instalacao/building"}},l=[],f={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"O projeto tem sua infraestrutura construida baseado no docker.\nAssim, todos os componentes como o servidor e a interface s\xe3o disponibilizados atrav\xe9s de containers."),Object(a.b)(c.a,{groupId:"os",defaultValue:"deb",values:[{label:"Linux (Deb Based)",value:"deb"},{label:"Windows",value:"win"}],mdxType:"Tabs"},Object(a.b)(i.a,{value:"deb",mdxType:"TabItem"},"# without sudo")))}p.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},f=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,b=f["".concat(c,".").concat(d)]||f[d]||p[d]||a;return n?o.a.createElement(b,i(i({ref:t},s),{},{components:n})):o.a.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},161:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},162:function(e,t,n){"use strict";var r=n(0),o=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=o},163:function(e,t,n){"use strict";var r=n(0),o=n(162);t.a=function(){return Object(r.useContext)(o.a)}},167:function(e,t,n){"use strict";n(26),n(19),n(20);var r=n(0),o=n.n(r),a=n(163),c=n(161),i=n(129),u=n.n(i),s=37,l=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,f=e.values,p=e.groupId,d=Object(a.a)(),b=d.tabGroupChoices,m=d.setTabGroupChoices,v=Object(r.useState)(i),y=v[0],O=v[1];if(null!=p){var g=b[p];null!=g&&g!==y&&f.some((function(e){return e.value===g}))&&O(g)}var j=function(e){O(e),null!=p&&m(p,e)},h=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},f.map((function(e){var t=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":y===t,className:Object(c.a)("tabs__item",u.a.tabItem,{"tabs__item--active":y===t}),key:t,ref:function(e){return h.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(h,e.target,e)},onFocus:function(){return j(t)},onClick:function(){return j(t)}},n)}))),o.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===y}))[0]))}},168:function(e,t,n){"use strict";var r=n(0),o=n.n(r);t.a=function(e){return o.a.createElement("div",null,e.children)}}}]);