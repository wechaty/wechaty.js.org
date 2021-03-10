(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{194:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(8),o=(n(0),n(220)),c={title:"Getting Started"},l={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"With just a few lines of code, your application can send and receive messages with WeChat using the Wechaty Puppets for WeChat.",source:"@site/docs/getting-started.md",slug:"/getting-started",permalink:"/docs/getting-started",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/getting-started.md",version:"current",lastUpdatedBy:"\u9a91\u9a6c\u5c0f\u732b",lastUpdatedAt:1615385781,formattedLastUpdatedAt:"3/10/2021",sidebar:"docs",previous:{title:"Alternatives",permalink:"/docs/introduction/alternatives"},next:{title:"Wechaty Tutorials",permalink:"/docs/tutorials/"}},i=[{value:"REQUIREMENTS",id:"requirements",children:[]},{value:"RUN",id:"run",children:[{value:"0. Install Node.js (&gt;=10)",id:"0-install-nodejs-10",children:[]},{value:"1. Clone wechaty-getting-started Repository",id:"1-clone-wechaty-getting-started-repository",children:[]},{value:"2. Install Dependencies",id:"2-install-dependencies",children:[]},{value:"3. Run the Bot",id:"3-run-the-bot",children:[]}]},{value:"DEMO",id:"demo",children:[]}],s={toc:i};function u(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"With just a few lines of code, your application can send and receive messages with WeChat using the Wechaty Puppets for WeChat."),Object(o.b)("p",null,"This Quickstart will teach you how to do this using the Wechaty SDK for WeChat, wechaty-puppet-mock, TypeScript.\nIn this Quickstart, you will learn how to:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Install Node.js"),Object(o.b)("li",{parentName:"ol"},"Install Wechaty"),Object(o.b)("li",{parentName:"ol"},"Start running your first chatbot")),Object(o.b)("h2",{id:"requirements"},"REQUIREMENTS"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Node.js v10 or above"),Object(o.b)("li",{parentName:"ol"},"Build Tools for your Platform")),Object(o.b)("h2",{id:"run"},"RUN"),Object(o.b)("h3",{id:"0-install-nodejs-10"},"0. Install Node.js ","(",">","=10",")"),Object(o.b)("p",null,"If you have not installed Node.js","(","or version is below 10",")",",You need to install the latest version of Node.js first by following the links below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#windows"},"Windows")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions"},"Linux","(","Debian/Ubuntu",")")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://nodejs.org/en/download/package-manager/#macos"},"macOS"))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Instal Node.js for other platforms can be found at ",Object(o.b)("a",{parentName:"p",href:"https://nodejs.org/en/download/package-manager/"},"https://nodejs.org/en/download/package-manager/"))),Object(o.b)("h3",{id:"1-clone-wechaty-getting-started-repository"},"1. Clone wechaty-getting-started Repository"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/wechaty/wechaty-getting-started\ncd wechaty-getting-started\n")),Object(o.b)("h3",{id:"2-install-dependencies"},"2. Install Dependencies"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),Object(o.b)("h3",{id:"3-run-the-bot"},"3. Run the Bot"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Notice: Wechaty requires Node.js version ",">","= 10"))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-text"},"npm start\n\n# Or use node to run bot directly\nnode examples/starter-bot.js\n")),Object(o.b)("p",null,"You are all set!"),Object(o.b)("p",null,"You can see the following result after running:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"demo",src:n(320).default})),Object(o.b)("p",null,"This demo will show all message on the bot."),Object(o.b)("h2",{id:"demo"},"DEMO"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Wechaty Developers&#39; Home",src:n(247).default})),Object(o.b)("p",null,"Scan the following QR Code in WeChat with secret code ",Object(o.b)("em",{parentName:"p"},"wechaty"),", join our ",Object(o.b)("strong",{parentName:"p"},"Wechaty Developers' Home"),". This group is only for developers."))}u.isMDXComponent=!0},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,g=d["".concat(c,".").concat(p)]||d[p]||b[p]||o;return n?a.a.createElement(g,l(l({ref:t},s),{},{components:n})):a.a.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},247:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/friday-qrcode-5cc2eb406423df2d76ccc0b3543f94b7.svg"},320:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/getting-started-qrcode-c178853175d38f44e44b0a6f9b36532d.png"}}]);