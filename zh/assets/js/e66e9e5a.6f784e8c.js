"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8505],{3905:(t,n,e)=>{e.d(n,{Zo:()=>s,kt:()=>g});var l=e(7294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,l)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function u(t,n){if(null==t)return{};var e,l,a=function(t,n){if(null==t)return{};var e,l,a={},r=Object.keys(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(l=0;l<r.length;l++)e=r[l],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var o=l.createContext({}),k=function(t){var n=l.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},s=function(t){var n=k(t.components);return l.createElement(o.Provider,{value:n},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var n=t.children;return l.createElement(l.Fragment,{},n)}},p=l.forwardRef((function(t,n){var e=t.components,a=t.mdxType,r=t.originalType,o=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),c=k(e),p=a,g=c["".concat(o,".").concat(p)]||c[p]||d[p]||r;return e?l.createElement(g,i(i({ref:n},s),{},{components:e})):l.createElement(g,i({ref:n},s))}));function g(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var r=e.length,i=new Array(r);i[0]=p;var u={};for(var o in n)hasOwnProperty.call(n,o)&&(u[o]=n[o]);u.originalType=t,u[c]="string"==typeof t?t:a,i[1]=u;for(var k=2;k<r;k++)i[k]=e[k];return l.createElement.apply(null,i)}return l.createElement.apply(null,e)}p.displayName="MDXCreateElement"},2696:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>u,toc:()=>k});var l=e(7462),a=(e(7294),e(3905));const r={sidebar_position:98},i=void 0,u={unversionedId:"api/advance-api",id:"version-3.0.x/api/advance-api",title:"advance-api",description:"1 \u6e38\u620f\u5931\u53bb/\u83b7\u5f97\u7126\u70b9",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-3.0.x/api/advance-api.md",sourceDirName:"api",slug:"/api/advance-api",permalink:"/tkg-sdk-doc/zh/3.0.x/api/advance-api",tags:[],version:"3.0.x",sidebarPosition:98,frontMatter:{sidebar_position:98},sidebar:"apiSidebar",previous:{title:"common-api",permalink:"/tkg-sdk-doc/zh/3.0.x/api/common-api"}},o={},k=[{value:"1 \u6e38\u620f\u5931\u53bb/\u83b7\u5f97\u7126\u70b9",id:"1-\u6e38\u620f\u5931\u53bb\u83b7\u5f97\u7126\u70b9",level:2},{value:"1.1 \u793a\u4f8b\u4ee3\u7801",id:"11-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"2 \u8bc4\u4ef7",id:"2-\u8bc4\u4ef7",level:2},{value:"2.1 \u793a\u4f8b\u4ee3\u7801",id:"21-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"3 \u66f4\u591a\u6e38\u620f",id:"3-\u66f4\u591a\u6e38\u620f",level:2},{value:"3.1 \u793a\u4f8b\u4ee3\u7801",id:"31-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"4 \u83b7\u53d6\u5f53\u524d\u6e20\u9053\u540d\u79f0",id:"4-\u83b7\u53d6\u5f53\u524d\u6e20\u9053\u540d\u79f0",level:2},{value:"4.1 \u793a\u4f8b\u4ee3\u7801",id:"41-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"5 \u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90",id:"5-\u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90",level:2},{value:"5.1 \u793a\u4f8b\u4ee3\u7801",id:"51-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"6 SDK\u901a\u7528\u56de\u8c03\u63a5\u53e3",id:"6-sdk\u901a\u7528\u56de\u8c03\u63a5\u53e3",level:2},{value:"6.1 \u793a\u4f8b\u4ee3\u7801",id:"61-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"7 \u81ea\u5b9a\u4e49\u5728\u7ebf\u53c2\u6570",id:"7-\u81ea\u5b9a\u4e49\u5728\u7ebf\u53c2\u6570",level:2},{value:"7.1 \u793a\u4f8b\u4ee3\u7801",id:"71-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"8 \u6fc0\u52b1\u89c6\u9891\u56de\u8c03",id:"8-\u6fc0\u52b1\u89c6\u9891\u56de\u8c03",level:2},{value:"8.1 \u793a\u4f8b\u4ee3\u7801",id:"81-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"9 \u6d77\u5916\u7248\u672c\u4f7f\u7528\u5f00\u5c4f\u5e7f\u544a",id:"9-\u6d77\u5916\u7248\u672c\u4f7f\u7528\u5f00\u5c4f\u5e7f\u544a",level:2},{value:"10 \u9707\u52a8",id:"10-\u9707\u52a8",level:2},{value:"10.1 \u793a\u4f8b\u4ee3\u7801",id:"101-\u793a\u4f8b\u4ee3\u7801",level:4},{value:"11 \u63a8\u9001",id:"11-\u63a8\u9001",level:2},{value:"11.1 \u793a\u4f8b\u4ee3\u7801",id:"111-\u793a\u4f8b\u4ee3\u7801",level:4},{value:'12 \u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90 <font color="#ff0000">(v2.2.6\u65b0\u589e)</font>',id:"12-\u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90-v226\u65b0\u589e",level:2},{value:"12.1 \u793a\u4f8b\u4ee3\u7801",id:"121-\u793a\u4f8b\u4ee3\u7801",level:4},{value:'13 \u6765\u6e90\u63a7\u5236 <font color="#ff0000">(v2.2.9\u65b0\u589e)</font>',id:"13-\u6765\u6e90\u63a7\u5236-v229\u65b0\u589e",level:2},{value:"13.1 \u793a\u4f8b\u4ee3\u7801",id:"131-\u793a\u4f8b\u4ee3\u7801",level:4},{value:'14 \u8eab\u4efd\u4fe1\u606f\u67e5\u8be2\u63a5\u53e3(iOS Only)<font color="#ff0000">(v3.0.5\u65b0\u589e)</font>',id:"14-\u8eab\u4efd\u4fe1\u606f\u67e5\u8be2\u63a5\u53e3ios-onlyv305\u65b0\u589e",level:2},{value:"15.1 \u793a\u4f8b\u4ee3\u7801",id:"151-\u793a\u4f8b\u4ee3\u7801",level:4}],s={toc:k},c="wrapper";function d(t){let{components:n,...r}=t;return(0,a.kt)(c,(0,l.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1-\u6e38\u620f\u5931\u53bb\u83b7\u5f97\u7126\u70b9"},"1 \u6e38\u620f\u5931\u53bb/\u83b7\u5f97\u7126\u70b9"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"SetGameFocusListener"),(0,a.kt)("td",null,"(Action<bool> _gameFocusAction)"),(0,a.kt)("td",null,"\u8bbe\u7f6e\u6e38\u620f\u5931\u53bb\u7126\u70b9\u56de\u8c03",(0,a.kt)("br",null),"true:\u83b7\u5f97\u7126\u70b9",(0,a.kt)("br",null),"false:\u5931\u53bb\u7126\u70b9",(0,a.kt)("br",null)," ",(0,a.kt)("br",null),"\u6bcf\u6b21\u5f00\u59cb\u64ad\u5e7f\u544a\u7b49\u60c5\u51b5\u4f1a\u88ab\u89e6\u53d1\uff0c\u53ef\u7edf\u4e00\u5904\u7406\u6682\u505c\u6e38\u620f\u58f0\u97f3\u7b49\u3002"))),(0,a.kt)("h4",{id:"11-\u793a\u4f8b\u4ee3\u7801"},"1.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetGameFocusListener((_isFocus) => {\n    if (_isFocus)\n    {\n        Debug.Log("set game focus");\n    }\n    else\n    {\n        Debug.Log("lose game focus");\n    }\n});\n')),(0,a.kt)("h2",{id:"2-\u8bc4\u4ef7"},"2 \u8bc4\u4ef7"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Review"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"\u4ec5iOS\u751f\u6548\u3002\u5c55\u793aiOS\u7cfb\u7edf\u8bc4\u4ef7\u5f39\u6846"))),(0,a.kt)("h4",{id:"21-\u793a\u4f8b\u4ee3\u7801"},"2.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.Review();\n")),(0,a.kt)("h2",{id:"3-\u66f4\u591a\u6e38\u620f"},"3 \u66f4\u591a\u6e38\u620f"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"OpenMoreGame"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"\u6253\u5f00\u5546\u5e97\u81ea\u5bb6\u6e38\u620f\u5217\u8868\u9875\u9762\u3002"))),(0,a.kt)("h4",{id:"31-\u793a\u4f8b\u4ee3\u7801"},"3.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.OpenMoreGame();\n")),(0,a.kt)("h2",{id:"4-\u83b7\u53d6\u5f53\u524d\u6e20\u9053\u540d\u79f0"},"4 \u83b7\u53d6\u5f53\u524d\u6e20\u9053\u540d\u79f0"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Return"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"GetChannel"),(0,a.kt)("td",null,"AppChannel"),(0,a.kt)("td",null,"\u83b7\u53d6\u5f53\u524d\u6e20\u9053\u540d\u79f0\uff0c\u8fd4\u56de\u7c7b\u578bAppChannel ",(0,a.kt)("br",null),"AppStore_GB/AppStore_CN/GooglePlay/GW002\u7b49"))),(0,a.kt)("h4",{id:"41-\u793a\u4f8b\u4ee3\u7801"},"4.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"AppChannel _channel = TKGSDKManager.Instance.GetChannel();\n")),(0,a.kt)("h2",{id:"5-\u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90"},"5 \u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"SetUserSourceListener"),(0,a.kt)("td",null,"(Action\xa0<bool, string> _userSourceAction)"),(0,a.kt)("td",null,"\u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u6765\u6e90\u56de\u8c03\u76d1\u542c   ",(0,a.kt)("br",null),"_isOrigin: true \u81ea\u7136\u7528\u6237 false \u975e\u81ea\u7136\u7528\u6237 ",(0,a.kt)("br",null),"\u8be5\u63a5\u53e3\u4e3a\u5f02\u6b65\u8fd4\u56de\u3002\u5982\u4e00\u6b21\u6e38\u620f\u5185\u591a\u6b21\u8c03\u7528\u8be5\u63a5\u53e3\u60c5\u51b5\uff0c\u53ea\u9996\u6b21\u6709\u8fd4\u56de\u503c\u3002"))),(0,a.kt)("h4",{id:"51-\u793a\u4f8b\u4ee3\u7801"},"5.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetUserSourceListener((_isOrigin, _source) =>\n{\n    if (_isOrigin)\n    {\n        Debug.Log("is origin user");\n    }\n    else\n    {\n        Debug.Log("is not origin user");\n    }\n});\n')),(0,a.kt)("h2",{id:"6-sdk\u901a\u7528\u56de\u8c03\u63a5\u53e3"},"6 SDK\u901a\u7528\u56de\u8c03\u63a5\u53e3"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"SetTKGCommonCallback"),(0,a.kt)("td",null,"(Action<CommonCallbackCode, string> _commonCallback)"),(0,a.kt)("td",null,"   ",(0,a.kt)("br",null),"SDK\u7edf\u4e00\u4e8b\u4ef6\u56de\u8c03\u63a5\u53e3\u3002 ",(0,a.kt)("br",null),"\u7528CommonCallbackCode\u6765\u8fdb\u884c\u533a\u5206\u4e8b\u4ef6\u540d\u79f0\u3002 FirebaseOnlineParamGet_Succ: firebase\u5728\u7ebf\u53c2\u6570\u83b7\u53d6\u6210\u529f\u3002 FirebaseOnlineParamGet_Failed: firebase\u5728\u7ebf\u53c2\u6570\u83b7\u53d6\u5931\u8d25\u3002   ",(0,a.kt)("br",null),"    ",(0,a.kt)("br",null),"string: \u6d88\u606f\u643a\u5e26\u53c2\u6570\u3002"))),(0,a.kt)("h4",{id:"61-\u793a\u4f8b\u4ee3\u7801"},"6.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'TKGSDKManager.Instance.SetTKGCommonCallback((code, msg) => {\n    Debug.Log("common callback, code : " + code + " , msg : " + msg);\n});\n')),(0,a.kt)("h2",{id:"7-\u81ea\u5b9a\u4e49\u5728\u7ebf\u53c2\u6570"},"7 \u81ea\u5b9a\u4e49\u5728\u7ebf\u53c2\u6570"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"GetConfigStr"),(0,a.kt)("td",null,"(TKGParamKey _key)"),(0,a.kt)("td",null,"\u83b7\u53d6string\u7c7b\u578b\u7684\u5728\u7ebf\u53c2\u6570\u3002 ",(0,a.kt)("br",null),"\u9700\u4e8b\u5148\u5728TKGParams\u4e2d\u5b9a\u4e49\u5728\u7ebf\u53c2\u6570key\u53ca\u9ed8\u8ba4\u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"GetConfigInt"),(0,a.kt)("td",null,"(TKGParamKey _key)"),(0,a.kt)("td",null,"\u83b7\u53d6int\u7c7b\u578b\u7684\u5728\u7ebf\u53c2\u6570\u3002 ",(0,a.kt)("br",null),"\u9700\u4e8b\u5148\u5728TKGParams\u4e2d\u5b9a\u4e49\u5728\u7ebf\u53c2\u6570key\u53ca\u9ed8\u8ba4\u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"GetConfigBool"),(0,a.kt)("td",null,"(TKGParamKey _key)"),(0,a.kt)("td",null,"\u83b7\u53d6bool\u7c7b\u578b\u7684\u5728\u7ebf\u53c2\u6570\u3002 ",(0,a.kt)("br",null),"\u9700\u4e8b\u5148\u5728TKGParams\u4e2d\u5b9a\u4e49\u5728\u7ebf\u53c2\u6570key\u53ca\u9ed8\u8ba4\u503c",(0,a.kt)("br",null),"true: \u9ed8\u8ba4\u503c\u914d1; false: \u9ed8\u8ba4\u503c\u914d0"))),(0,a.kt)("h4",{id:"71-\u793a\u4f8b\u4ee3\u7801"},"7.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="Asset/TKGSDK/Config/Scripts/TKGParams.cs"',title:'"Asset/TKGSDK/Config/Scripts/TKGParams.cs"'},'// set key\npublic enum TKGParamKey\n{\n    RemoveAdsShowCount,\n    LevelList,\n    HasBlock,\n    .\n    .\n}\n\n// add key & default value\npublic static class TKGParams\n{\n    public static readonly Dictionary<string, object> OnlineParamDic = new Dictionary<string, object>()\n    {\n        // key - default value\n        { TKGParamKey.RemoveAdsShowCount.ToString(), 4 },    // int value    // \n        { TKGParamKey.LevelList.ToString(), "1,78,72,70,64,65,4,66" }, // string value\n        { TKGParamKey.HasBlock.ToString(), 0 },     // bool value // 1:true 0:false\n    };\n}\n\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// get online param value\nint onlineIntValue = TKGSDKManager.Instance.GetConfigInt(TKGParamKey.RemoveAdsShowCount);\nstring onlineStrValue = TKGSDKManager.Instance.GetConfigStr(TKGParamKey.LevelList);\nbool onlineBoolValue = TKGSDKManager.Instance.GetConfigBool(TKGParamKey.HasBlock);\n")),(0,a.kt)("h2",{id:"8-\u6fc0\u52b1\u89c6\u9891\u56de\u8c03"},"8 \u6fc0\u52b1\u89c6\u9891\u56de\u8c03"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"SetRewardClickListener"),(0,a.kt)("td",null,"(Action<bool> _rewardClickAction)"),(0,a.kt)("td",null,"\u6fc0\u52b1\u89c6\u9891\u70b9\u51fb\u56de\u8c03",(0,a.kt)("br",null),"\u5728\u521d\u59cb\u5316SDK\u524d\u8bbe\u7f6e\u597d\u6fc0\u52b1\u89c6\u9891\u70b9\u51fb\u56de\u8c03"))),(0,a.kt)("h4",{id:"81-\u793a\u4f8b\u4ee3\u7801"},"8.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'private void InitSDK()\n{\n    \n    TKGSDKManager.Instance.SetRewardClickListener(ClickRewardCallback);\n\n    TKGSDKManager.Instance.InitSDK(initCallback);\n}\n\nprivate void ClickRewardCallback()\n{\n    Debug.Log("[ToukaSDKDemo] click reward callback");\n}\n')),(0,a.kt)("h2",{id:"9-\u6d77\u5916\u7248\u672c\u4f7f\u7528\u5f00\u5c4f\u5e7f\u544a"},"9 \u6d77\u5916\u7248\u672c\u4f7f\u7528\u5f00\u5c4f\u5e7f\u544a"),(0,a.kt)("p",null,"\u5728unity\u4e2d\u6dfb\u52a0\u5b8f\u5b9a\u4e49\uff1a",(0,a.kt)("strong",{parentName:"p"}," USE_SPLASH ",(0,a.kt)("font",{color:"#ff0000"},"(v2.2.6\u7248\u672c\u540e\u65e0\u9700\u6dfb\u52a0\u6b64\u5b8f\u5b9a\u4e49)"))," ",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("img",{src:e(5386).Z,width:"636",height:"236"}),(0,a.kt)("br",null)),(0,a.kt)("h2",{id:"10-\u9707\u52a8"},"10 \u9707\u52a8"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"Shake"),(0,a.kt)("td",null,"(int _shakeType, float _intensity = 1)"),(0,a.kt)("td",null,"\u89e6\u53d1\u624b\u673a\u9707\u52a8",(0,a.kt)("br",null),"  ",(0,a.kt)("br",null),"_shakeType \u9707\u52a8\u5f3a\u5f31:",(0,a.kt)("br",null),"0:\u8f7b\u5fae",(0,a.kt)("br",null),"1:\u4e2d\u5ea6",(0,a.kt)("br",null),"2:\u91cd\u5ea6",(0,a.kt)("br",null),(0,a.kt)("br",null),"_intensity \u9707\u52a8\u6301\u7eed\u65f6\u95f4: ",(0,a.kt)("br",null),"0 ~ 1"))),(0,a.kt)("h4",{id:"101-\u793a\u4f8b\u4ee3\u7801"},"10.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"TKGSDKManager.Instance.Shake(1,0.5f);\n")),(0,a.kt)("h2",{id:"11-\u63a8\u9001"},"11 \u63a8\u9001"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"RegistAPNS"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"\u8c03\u7528\u540e\u5f39\u51fa\u7cfb\u7edf\u63a8\u9001\u6388\u6743\u5f39\u6846")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"RegistNotification"),(0,a.kt)("td",null,'(string notiId, string body, string fireDate, int badge = 1, string title = "", string subTitle = "")'),(0,a.kt)("td",null,"\u6ce8\u518c\u63a8\u9001",(0,a.kt)("br",null),"  ",(0,a.kt)("br",null),"notiId: \u6ce8\u518c\u63a8\u9001\u7684ID\uff0c\u5177\u6709\u552f\u4e00\u6027",(0,a.kt)("br",null),(0,a.kt)("br",null),"body: \u63a8\u9001\u5185\u5bb9\uff0c\u975e\u7a7a\uff0c\u5426\u5219\u6ce8\u518c\u4e0d\u6210\u529f",(0,a.kt)("br",null),(0,a.kt)("br",null),"fireDate: \u63a8\u9001\u5185\u5bb9\u89e6\u53d1\u65f6\u95f4\uff0cformat \u4e3a \uff1ayyyy-MM-dd HH:mm:ss\uff1b\u9700\u5927\u4e8e\u5f53\u524d\u65f6\u95f4\uff0c\u5426\u5219\u6ce8\u518c\u4e0d\u6210\u529f",(0,a.kt)("br",null),(0,a.kt)("br",null),"title: \u63a8\u9001\u6807\u9898",(0,a.kt)("br",null),(0,a.kt)("br",null),"subTitle: \u63a8\u9001\u526f\u6807\u9898",(0,a.kt)("br",null),(0,a.kt)("br",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"RemoveNotification"),(0,a.kt)("td",null,"(string notiId)"),(0,a.kt)("td",null,"\u6839\u636e\u63a8\u9001ID\u79fb\u9664\u8be5\u6761\u63a8\u9001  ",(0,a.kt)("br",null))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"RemoveNotification"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"\u79fb\u9664\u5168\u90e8\u63a8\u9001"))),(0,a.kt)("h4",{id:"111-\u793a\u4f8b\u4ee3\u7801"},"11.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'private void Awake()\n{\n    TKGSDKManager.Instance.RegistAPNS();\n}\n\nprivate void OnApplicationFocus(bool isFocus)\n{\n    TKGSDKManager.Instance.RemoveAllNotifications();\n\n    if (!isFocus)\n    {\n        TKGSDKManager.Instance.RegistNotification("notificationID","hello world", now.AddDays(1).ToString("yyyy-MM-dd HH:mm:ss"),1,"Title","SubTitle");\n    }\n}\n')),(0,a.kt)("h2",{id:"12-\u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90-v226\u65b0\u589e"},"12 \u83b7\u53d6\u5f53\u524d\u7528\u6237\u6765\u6e90 ",(0,a.kt)("font",{color:"#ff0000"},"(v2.2.6\u65b0\u589e)")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"SetUserSourceListener(Action<bool, string, string> _userSourceActionWithCampaignName)"),(0,a.kt)("td",null,"(Action\xa0<bool, string,string> _userSourceActionWithCampaignName)"),(0,a.kt)("td",null,"\u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u6765\u6e90\u56de\u8c03\u76d1\u542c   ",(0,a.kt)("br",null),"_isOrigin: true \u81ea\u7136\u7528\u6237 false \u975e\u81ea\u7136\u7528\u6237 ",(0,a.kt)("br",null),"\u8be5\u63a5\u53e3\u4e3a\u5f02\u6b65\u8fd4\u56de\u3002\u5982\u4e00\u6b21\u6e38\u620f\u5185\u591a\u6b21\u8c03\u7528\u8be5\u63a5\u53e3\u60c5\u51b5\uff0c\u53ea\u9996\u6b21\u6709\u8fd4\u56de\u503c\u3002"))),(0,a.kt)("h4",{id:"121-\u793a\u4f8b\u4ee3\u7801"},"12.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'\n/**\n_isOrigin : \u662f\u5426\u662f\u81ea\u7136\u7528\u6237\n_source : \u6765\u6e90\u5e73\u53f0\n_campaignName : \u6765\u6e90\u8ba1\u5212\n*/\nTKGSDKManager.Instance.SetUserSourceListener((_isOrigin, _source,_campaignName) =>\n{\n    if (_isOrigin)\n    {\n        Debug.Log("is origin user");\n    }\n    else\n    {\n        Debug.Log("is not origin user");\n    }\n});\n')),(0,a.kt)("h2",{id:"13-\u6765\u6e90\u63a7\u5236-v229\u65b0\u589e"},"13 \u6765\u6e90\u63a7\u5236 ",(0,a.kt)("font",{color:"#ff0000"},"(v2.2.9\u65b0\u589e)")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"SetFunctionSwitchListener(List<FunctionType> _functionKeys, Action<FunctionType, bool> _functionSwitchCallback)"),(0,a.kt)("td",null,"List<FunctionType> _functionKeys, Action<FunctionType, bool> _functionSwitchCallback)"),(0,a.kt)("td",null,"\u8bbe\u7f6e\u5404\u529f\u80fd\u56de\u8c03\u76d1\u542c   ",(0,a.kt)("br",null),"_functionKeys: \u529f\u80fd\u540d\u79f0\u96c6\u5408 ",(0,a.kt)("br",null),"_functionSwitchCallback: \u529f\u80fd\u96c6\u5408\u56de\u8c03",(0,a.kt)("br",null)))),(0,a.kt)("h4",{id:"131-\u793a\u4f8b\u4ee3\u7801"},"13.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'\nvoid Start() \n{\n    TKGSDKManager.Instance.SetFunctionSwitchListener(new List<FunctionType>() \n    { \n        FunctionType.Function_wangz, \n        FunctionType.Function_bing \n    \n    }, OnFunsSwitchCallback);\n\n}\n\n\n/**\n    _type : \u529f\u80fd\u540d\u79f0\n    _result : \u662f\u5426\u5f00\u542f\u5f53\u524d\u529f\u80fd,true:\u5f00\u542f\uff0cfalse:\u4e0d\u5f00\u542f\n*/\nprivate void OnFunsSwitchCallback(FunctionType _type, bool _result)\n{\n    Debug.Log("[ToukaSDKDemo]\uff1aFunctionType:" + _type +"result:"+ _result);\n}\n')),(0,a.kt)("p",null," ",(0,a.kt)("strong",{parentName:"p"}," ",(0,a.kt)("font",{color:"#ff0000"},"\u8bf4\u660e\uff1a",(0,a.kt)("br",null),"1. \u8be5\u63a5\u53e3\u4e3a\u5f02\u6b65\u8fd4\u56de\u3002List\u7684\u957f\u5ea6\u51b3\u5b9a\u56de\u8c03\u65b9\u6cd5\u6267\u884c\u7684\u6b21\u6570\uff1b\u5982list\u7684\u957f\u5ea6\u4e3a2\uff0c\u5219\u4f1a\u6267\u884c\u4e24\u6b21\u56de\u8c03\u65b9\u6cd5\u3002",(0,a.kt)("br",null),"2. \u6b64\u65b9\u6cd5\u9700\u8981\u5728\u521d\u59cb\u5316SDK\u540e\u8c03\u7528\u3002")," ")),(0,a.kt)("h2",{id:"14-\u8eab\u4efd\u4fe1\u606f\u67e5\u8be2\u63a5\u53e3ios-onlyv305\u65b0\u589e"},"14 \u8eab\u4efd\u4fe1\u606f\u67e5\u8be2\u63a5\u53e3(iOS Only)",(0,a.kt)("font",{color:"#ff0000"},"(v3.0.5\u65b0\u589e)")),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"API"),(0,a.kt)("td",null,"Parameter"),(0,a.kt)("td",null,"Description")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"GetUserNameAndUserIDCard"),(0,a.kt)("td",null," -"),(0,a.kt)("td",null,'\u8fd4\u56de\u5b9e\u540d\u8ba4\u8bc1\u901a\u8fc7\u540e\u7528\u6237\u59d3\u540d\u53ca\u8eab\u4efd\u8bc1\u4fe1\u606f\uff0c\u4f8b\uff1a "Jack_654121199212099999"'))),(0,a.kt)("h4",{id:"151-\u793a\u4f8b\u4ee3\u7801"},"15.1 \u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"// \u67e5\u8be2\u7528\u6237\u59d3\u540d\u548c\u8eab\u4efd\u8bc1\u4fe1\u606f\nstring userInfo = TKGSDKManager.Instance.GetUserNameAndUserIDCard();\n")))}d.isMDXComponent=!0},5386:(t,n,e)=>{e.d(n,{Z:()=>l});const l=e.p+"assets/images/usesplash-6dc5db23f2e9dbe754557fb05eb6e556.jpg"}}]);