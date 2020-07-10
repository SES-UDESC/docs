(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(9),o=(n(0),n(159)),c=n(167),i=n(168),s={id:"docker",slug:"docker",title:"Docker"},u={id:"Instalacao/Docker/docker",isDocsHomePage:!1,title:"Docker",description:"O projeto tem sua infraestrutura construida baseado no docker.",source:"@site/docs/Instalacao/Docker/Docker.mdx",permalink:"/docs/Instalacao/Docker/docker",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/Instalacao/Docker/Docker.mdx",sidebar:"sidebar",previous:{title:"Introdu\xe7\xe3o",permalink:"/docs/"},next:{title:"Docker Compose",permalink:"/docs/Instalacao/Docker/docker-compose"}},l=[],p={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"O projeto tem sua infraestrutura construida baseado no docker.\nAssim, todos os componentes como o servidor e a interface s\xe3o disponibilizados atrav\xe9s de containers."),Object(o.b)(c.a,{groupId:"os",defaultValue:"deb",values:[{label:"Linux (Deb Based)",value:"deb"},{label:"Windows",value:"win"}],mdxType:"Tabs"},Object(o.b)(i.a,{value:"deb",mdxType:"TabItem"},Object(o.b)("p",null,"Pode-se instalar o docker utilizando o apt e privil\xe9gios sudo."),Object(o.b)("p",null,"Remover instala\xe7\xf5es antigas, se existirem"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get update\n\nsudo apt-get remove docker docker-engine docker.io containerd runc\n")),Object(o.b)("p",null,"Instalar pacotes de apoio"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get install \\\n    apt-transport-https \\\n    ca-certificates \\\n    curl \\\n    gnupg-agent \\\n    software-properties-common\n")),Object(o.b)("p",null,"Adicionar o reposit\xf3rio do docker ao apt"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -\n\nsudo add-apt-repository \\\n   "deb [arch=amd64] https://download.docker.com/linux/debian \\\n   $(lsb_release -cs) \\\n   stable"\n\nsudo apt-get update\n')),Object(o.b)("p",null,"Instalar o docker"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo apt-get install docker-ce docker-ce-cli containerd.io\n")),Object(o.b)("p",null,"A partir desde ponto, o docker deve estar instalado na m\xe1quina  "),Object(o.b)("p",null,"Para confirir a instala\xe7\xe3o, pode-se executar o comando:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"docker run hello-world\n")),Object(o.b)("p",null,"Um output positivo deve aparecer no terminal")),Object(o.b)(i.a,{value:"win",mdxType:"TabItem"},Object(o.b)("p",null,"Para windows, a instala\xe7\xe3o do docker se d\xe1 atrav\xe9s do Docker Desktop."),Object(o.b)("p",null,"O Docker Desktop deve ser baixado atrav\xe9s do link ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://hub.docker.com/editions/community/docker-ce-desktop-windows"}),"Docker Desktop")),Object(o.b)("p",null,"O Docker Desktop tem a particularidade de instalar o docker-compose junto ao docker, assim, n\xe3o ser\xe1 preciso instala-lo a parte."))))}d.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,i(i({ref:t},u),{},{components:n})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},161:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},162:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=a},163:function(e,t,n){"use strict";var r=n(0),a=n(162);t.a=function(){return Object(r.useContext)(a.a)}},167:function(e,t,n){"use strict";n(26),n(19),n(20);var r=n(0),a=n.n(r),o=n(163),c=n(161),i=n(129),s=n.n(i),u=37,l=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,p=e.values,d=e.groupId,b=Object(o.a)(),f=b.tabGroupChoices,m=b.setTabGroupChoices,O=Object(r.useState)(i),j=O[0],v=O[1];if(null!=d){var k=f[d];null!=k&&k!==j&&p.some((function(e){return e.value===k}))&&v(k)}var g=function(e){v(e),null!=d&&m(d,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":j===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":j===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case l:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(y,e.target,e)},onFocus:function(){return g(t)},onClick:function(){return g(t)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},168:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);