"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=r,d=p["".concat(o,".").concat(g)]||p[g]||k[g]||l;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=g;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8336:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:6},i="\u4e8b\u4ef6\u57cb\u70b9",s={unversionedId:"tkg-integration/sdk-basic/sdk-func-event",id:"version-3.0.x/tkg-integration/sdk-basic/sdk-func-event",title:"\u4e8b\u4ef6\u57cb\u70b9",description:"\u5173\u5361\u8fdb\u5ea6\u4e8b\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0.x/tkg-integration/sdk-basic/sdk-func-event.md",sourceDirName:"tkg-integration/sdk-basic",slug:"/tkg-integration/sdk-basic/sdk-func-event",permalink:"/tkg-sdk-doc/zh/3.0.x/tkg-integration/sdk-basic/sdk-func-event",tags:[],version:"3.0.x",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u5e7f\u544a\u63a5\u5165",permalink:"/tkg-sdk-doc/zh/3.0.x/tkg-integration/sdk-basic/sdk-func-ads"},next:{title:"\u5185\u8d2d",permalink:"/tkg-sdk-doc/zh/3.0.x/tkg-integration/sdk-basic/sdk-func-iap"}},o={},u=[{value:"\u5173\u5361\u8fdb\u5ea6\u4e8b\u4ef6",id:"\u5173\u5361\u8fdb\u5ea6\u4e8b\u4ef6",level:2},{value:"\u5173\u5361\u5f00\u59cb\u4e8b\u4ef6",id:"\u5173\u5361\u5f00\u59cb\u4e8b\u4ef6",level:3},{value:"\u5173\u5361\u7ed3\u675f\u4e8b\u4ef6",id:"\u5173\u5361\u7ed3\u675f\u4e8b\u4ef6",level:3},{value:"\u81ea\u5b9a\u4e49\u4e8b\u4ef6",id:"\u81ea\u5b9a\u4e49\u4e8b\u4ef6",level:2}],c={toc:u},p="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4e8b\u4ef6\u57cb\u70b9"},"\u4e8b\u4ef6\u57cb\u70b9"),(0,r.kt)("h2",{id:"\u5173\u5361\u8fdb\u5ea6\u4e8b\u4ef6"},"\u5173\u5361\u8fdb\u5ea6\u4e8b\u4ef6"),(0,r.kt)("p",null,"\u5173\u5361\u8fdb\u5ea6\u4e8b\u4ef6\u7528\u4e8e\u5206\u6790\u7528\u6237\u5728\u6e38\u620f\u4e2d\u7684\u5173\u5361\u884c\u4e3a\uff0c\u5176\u4e2d\u5305\u62ec\u5173\u5361\u5f00\u59cb\uff0c\u5173\u5361\u7ed3\u675f\u7b49\u4e8b\u4ef6\u3002       "),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("b",null,(0,r.kt)("font",{color:"ff0000"},"\u5173\u5361\u7c7b\u6e38\u620f\u5fc5\u987b\u8c03\u7528\u5173\u5361\u8fdb\u5ea6\u4e8b\u4ef6\u3002")),"      ",(0,r.kt)("p",{parentName:"div"},"1\u3001\u6e38\u620f\u6bcf\u5c40\u5f00\u59cb\u65f6\u8c03\u7528\u300c\u5173\u5361\u5f00\u59cb\u4e8b\u4ef6\u300d: ",(0,r.kt)("strong",{parentName:"p"}," LevelStart "),(0,r.kt)("br",{parentName:"p"}),"\n","2\u3001\u6e38\u620f\u6bcf\u5c40\u7ed3\u675f\u65f6\u8c03\u7528\u300c\u5173\u5361\u7ed3\u675f\u4e8b\u4ef6 \u300d: ",(0,r.kt)("strong",{parentName:"p"}," LevelEnd ")),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"\u5f53\u5c40\u6e38\u620f\u6210\u529f: ",(0,r.kt)("strong",{parentName:"li"}," StageSucc ")),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u5c40\u6e38\u620f\u5931\u8d25: ",(0,r.kt)("strong",{parentName:"li"}," StageFail ")),(0,r.kt)("li",{parentName:"ul"},"\u5728\u672a\u7ed3\u7b97\u524d\uff0c\u7528\u6237\u9009\u62e9\u9a6c\u4e0a\u7ed3\u675f\u5f53\u5c40\u6e38\u620f\u5e76\u91cd\u65b0\u5f00\u59cb\u3002\u5982\u5728\u5f53\u5c40\u6e38\u620f\u5185\u70b9\u51fb\u91cd\u8bd5: ",(0,r.kt)("strong",{parentName:"li"}," StageRetry ")),(0,r.kt)("li",{parentName:"ul"},"\u5728\u672a\u7ed3\u7b97\u524d\uff0c\u7528\u6237\u9009\u62e9\u9a6c\u4e0a\u9000\u51fa\u6e38\u620f\u5e76\u8fd4\u56de\u6e38\u620f\u5217\u8868\u754c\u9762\u6216\u4e3b\u754c\u9762\u3002\u5982\u5728\u5f53\u5c40\u6e38\u620f\u5185\u70b9\u51fb\u8fd4\u56de\u6216\u9000\u51fa\u6309\u94ae: ",(0,r.kt)("strong",{parentName:"li"}," StageBack "))))),(0,r.kt)("h3",{id:"\u5173\u5361\u5f00\u59cb\u4e8b\u4ef6"},"\u5173\u5361\u5f00\u59cb\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LevelStart(level); \n   \nTKGSDKManager.Instance.LevelStart(1);\n\nTKGSDKManager.Instance.LevelStart("S_1");\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," \u8c03\u7528\u65f6\u673a\uff1a")," \u6e38\u620f\u6bcf\u5c40\u5f00\u59cb\u65f6\u8c03\u7528\u3002  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," API:  "),(0,r.kt)("br",{parentName:"p"}),"\n","void LevelStart(int level);",(0,r.kt)("br",{parentName:"p"}),"\n","void LevelStart(string level);"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Name"),(0,r.kt)("td",null,"isRequired"),(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"level"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"int/string"),(0,r.kt)("td",null,"level\u4e3a\u6b63\u5728\u8fdb\u884c\u7684\u5173\u5361\u5e8f\u53f7\u503c\u3002      ",(0,r.kt)("br",null),'\u5177\u4f53\u503c\u8bf7\u53c2\u770b\u4ea7\u54c1\u9700\u6c42\u6587\u6863\u4e2d"\u5173\u5361\u8fdb\u5ea6\u4e8b\u4ef6\u63a5\u5165"'))),(0,r.kt)("h3",{id:"\u5173\u5361\u7ed3\u675f\u4e8b\u4ef6"},"\u5173\u5361\u7ed3\u675f\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LevelEnd(level, StageResult.StageSucc); \n\nTKGSDKManager.Instance.LevelEnd(1, StageResult.StageSucc);\n\nTKGSDKManager.Instance.LevelEnd("S_1", StageResult.StageFail);\n\nTKGSDKManager.Instance.LevelEnd(3, StageResult.StageRetry);\n\nTKGSDKManager.Instance.LevelEnd("S_2", StageResult.StageBack);\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," \u8c03\u7528\u65f6\u673a\uff1a")," \u6e38\u620f\u6bcf\u5c40\u7ed3\u675f\u65f6\u8c03\u7528\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," API: "),(0,r.kt)("br",{parentName:"p"}),"\n","bool LevelEnd(int _level, StageResult _stageResult);",(0,r.kt)("br",{parentName:"p"}),"\n","bool LevelEnd(string _level, StageResult _stageResult);"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Name"),(0,r.kt)("td",null,"isRequired"),(0,r.kt)("td",null,"Type"),(0,r.kt)("td",null,"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"level"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"int/string"),(0,r.kt)("td",null,"level\u4e3a\u6b63\u5728\u8fdb\u884c\u7684\u5173\u5361\u5e8f\u53f7\u503c\u3002          ",(0,r.kt)("br",null),'\u5177\u4f53\u503c\u8bf7\u53c2\u770b\u4ea7\u54c1\u9700\u6c42\u6587\u6863\u4e2d"\u5173\u5361\u8fdb\u5ea6\u4e8b\u4ef6\u63a5\u5165"')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"stageResult"),(0,r.kt)("td",null,"Y"),(0,r.kt)("td",null,"StageResult"),(0,r.kt)("td",null,"StageSucc: \u5f53\u5c40\u6e38\u620f\u6210\u529f  ",(0,r.kt)("br",null),(0,r.kt)("br",null),"StageFail: \u5f53\u5c40\u6e38\u620f\u5931\u8d25  ",(0,r.kt)("br",null),(0,r.kt)("br",null),"StageRetry: \u5728\u672a\u7ed3\u7b97\u524d\uff0c\u7528\u6237\u9009\u62e9\u9a6c\u4e0a\u7ed3\u675f\u5f53\u5c40\u6e38\u620f\u5e76\u91cd\u65b0\u5f00\u59cb\u3002\u5982\u5728\u5f53\u5c40\u6e38\u620f\u5185\u70b9\u51fb\u91cd\u8bd5\u3002  ",(0,r.kt)("br",null),(0,r.kt)("br",null),"StageBack: \u5728\u672a\u7ed3\u7b97\u524d\uff0c\u7528\u6237\u9009\u62e9\u9a6c\u4e0a\u9000\u51fa\u6e38\u620f\u5e76\u8fd4\u56de\u6e38\u620f\u5217\u8868\u754c\u9762\u6216\u4e3b\u754c\u9762\u3002\u5982\u5728\u5f53\u5c40\u6e38\u620f\u5185\u70b9\u51fb\u8fd4\u56de\u6216\u9000\u51fa\u6309\u94ae\u3002  ",(0,r.kt)("br",null)))),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u4e8b\u4ef6"},"\u81ea\u5b9a\u4e49\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.LogEvent("click_Skin");\n\nTKGSDKManager.Instance.LogEvent("get_gift", "stage_level", "1");\n\nTKGSDKManager.Instance.LogEvent("stage_end", "stage_level", "1", "stage_status", "success");\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"}," API:  ")),(0,r.kt)("p",null,"void LogEvent(string _eventSort)",(0,r.kt)("br",{parentName:"p"}),"\n","void LogEvent(string _eventSort, string _key, string _value)",(0,r.kt)("br",{parentName:"p"}),"\n","void LogEvent(string _eventSort, string _key01, string _value01, string _key02, string _value02)",(0,r.kt)("br",{parentName:"p"}),"\n","void LogEvent(string _eventSort, Dictionary<string, string> _eventDic = null)"))}k.isMDXComponent=!0}}]);