(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),i=(n(0),n(74));const a={id:"get-started",title:"Get Started",sidebar_label:"Get Started",slug:"/"},l={unversionedId:"get-started",id:"version-1.x/get-started",isDocsHomePage:!1,title:"Get Started",description:"Install Swiper via npm or yarn:",source:"@site/versioned_docs/version-1.x/get-started.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/joe223/tiny-swiper/edit/master/website/versioned_docs/version-1.x/get-started.md",version:"1.x",sidebar_label:"Get Started",sidebar:"version-1.x/someSidebar",next:{title:"APIs",permalink:"/docs/api"}},c=[],o={rightToc:c};function p({components:e,...t}){return Object(i.b)("wrapper",Object(r.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Install Swiper via npm or yarn:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ npm install tiny-swiper --save\n$ yarn add tiny-swiper\n")),Object(i.b)("p",null,"If you prefer CDN, just make sure constructor ",Object(i.b)("inlineCode",{parentName:"p"},"Swiper")," is defined in browser global environment."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<script src="https://unpkg.com/tiny-swiper@latest"><\/script>\n')),Object(i.b)("p",null,"Html code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'\x3c!-- Slider main container --\x3e\n<div class="swiper-container">\n    \x3c!-- Additional required wrapper --\x3e\n    <div class="swiper-wrapper">\n        \x3c!-- Slides --\x3e\n        <div class="swiper-slide">Slide 1</div>\n        <div class="swiper-slide">Slide 2</div>\n        <div class="swiper-slide">Slide 3</div>\n        ...\n    </div>\n    \x3c!-- If we need pagination --\x3e\n    <div class="swiper-pagination"></div>\n</div>\n')),Object(i.b)("p",null,"JavaScript/TypeScript code:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import Swiper, {\n    SwiperPluginLazyload,\n    SwiperPluginPagination\n} from 'tiny-swiper'\n\nSwiper.use([ SwiperPluginLazyload, SwiperPluginPagination ])\n\nconst swiper = new Swiper(swiperContainer: HTMLElement | string, parameters?: TinySwiperParameters)\n")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"new Swiper()")," - initialize swiper with options."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Swiper.use()")," - Register plugin."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"swiperContainer")," - HTMLElement or string (with CSS Selector) of swiper container HTML element. Required."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"parameters")," - object with Swiper parameters. Optional.")),Object(i.b)("p",null,"You also can load full-featured Tiny-Swiper:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import Swiper from 'tiny-swiper/lib/index.full.js'\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<script src="https://unpkg.com/tiny-swiper@latest/lib/index.full.js"><\/script>\n')))}p.isMDXComponent=!0},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||b[d]||a;return n?i.a.createElement(m,c(c({ref:t},p),{},{components:n})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);