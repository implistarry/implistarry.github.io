"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1717],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),p=s(n),k=a,g=p["".concat(c,".").concat(k)]||p[k]||d[k]||i;return n?r.createElement(g,l(l({ref:e},u),{},{components:n})):r.createElement(g,l({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[p]="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},4646:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:3},l="\u521d\u59cb\u5316",o={unversionedId:"tkg-integration/sdk-basic/sdk-func-init",id:"version-2.1.0/tkg-integration/sdk-basic/sdk-func-init",title:"\u521d\u59cb\u5316",description:"- SDK\u7684\u63a5\u53e3\u4e3b\u8981\u5728TKGSDKManager\u8fd9\u4e2a\u7c7b\u91cc\uff0c\u9700\u8981\u901a\u8fc7 TKGSDKManager.Instance \u83b7\u53d6\u5355\u4f8b\u8c03\u7528\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.1.0/tkg-integration/sdk-basic/sdk-func-init.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-init",permalink:"/tkg-sdk-doc/zh/2.1.0/tkg-integration/sdk-basic/sdk-func-init",tags:[],version:"2.1.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"SDK\u53c2\u6570\u914d\u7f6e",permalink:"/tkg-sdk-doc/zh/2.1.0/tkg-integration/sdk-basic/sdk-config"},next:{title:"\u5408\u89c4\u63a5\u53e3",permalink:"/tkg-sdk-doc/zh/2.1.0/tkg-integration/sdk-basic/sdk-func-privacy"}},c={},s=[{value:"InitSDK",id:"initsdk",level:2},{value:"SDK Debug Log",id:"sdk-debug-log",level:2}],u={toc:s},p="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("ul",{parentName:"div"},(0,a.kt)("li",{parentName:"ul"},"SDK\u7684\u63a5\u53e3\u4e3b\u8981\u5728TKGSDKManager\u8fd9\u4e2a\u7c7b\u91cc\uff0c\u9700\u8981\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"TKGSDKManager.Instance")," \u83b7\u53d6\u5355\u4f8b\u8c03\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e9b\u8f85\u52a9\u6027\u7684\u63a5\u53e3\u5728TKGUtils\u8fd9\u4e2a\u7c7b\u91cc\uff0c\u90fd\u662f\u9759\u6001\u63a5\u53e3\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u5185\u5bb9\u90fd\u65e0\u9700\u5173\u5fc3\u53ca\u8c03\u7528\u3002")))),(0,a.kt)("h2",{id:"initsdk"},"InitSDK"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.InitSDK();\n")),(0,a.kt)("p",null,"\u4f60\u9700\u8981\u5728\u7a0b\u5e8f\u7684\u5165\u53e3\u65b9\u6cd5\u4e2d\u624b\u52a8\u8c03\u7528ToukaSDK\u7684\u521d\u59cb\u5316\u65b9\u6cd5\u4e14",(0,a.kt)("font",{color:"ff0000"},"\u521d\u59cb\u5316\u65b9\u6cd5\u53ea\u80fd\u8c03\u7528\u4e00\u6b21"),"\u3002"),(0,a.kt)("p",null,"\u521d\u59cb\u5316\u65b9\u6cd5\u4f1a\u81ea\u52a8\u521d\u59cb\u5316\u4ee5\u4e0b\u90e8\u5206\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7528\u6237\u534f\u8bae"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u540d\u8ba4\u8bc1&\u9632\u6c89\u8ff7"),(0,a.kt)("li",{parentName:"ul"},"\u7edf\u8ba1"),(0,a.kt)("li",{parentName:"ul"},"\u5e7f\u544a")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"API:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"void InitSDK(Action _initCallback = null) \n")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"\u53c2\u6570"),(0,a.kt)("td",null,"\u662f\u5426\u5fc5\u987b"),(0,a.kt)("td",null,"\u7c7b\u578b"),(0,a.kt)("td",null,"\u63cf\u8ff0")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"_initCallback"),(0,a.kt)("td",null,"N"),(0,a.kt)("td",null,"Action"),(0,a.kt)("td",null,"\u521d\u59cb\u5316\u7ed3\u675f\u540e\u56de\u8c03\u3002"))),(0,a.kt)("h2",{id:"sdk-debug-log"},"SDK Debug Log"),(0,a.kt)("p",null,"SDK\u5185\u90e8\u65e5\u5fd7\u5f00\u5173\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"TKGSDKManager.Instance.SetLogEnable(true);\n")))}d.isMDXComponent=!0}}]);