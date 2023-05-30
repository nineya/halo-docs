"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[33296],{64450:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>o});var i=s(96600),a=(s(59496),s(49613));s(26401);const n={title:"\u9759\u6001\u8d44\u6e90",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u4e3b\u9898\u7684\u9759\u6001\u8d44\u6e90\u7684\u5f15\u7528\u65b9\u6cd5\u3002"},r=void 0,l={unversionedId:"developer-guide/theme/static-resources",id:"version-2.2/developer-guide/theme/static-resources",title:"\u9759\u6001\u8d44\u6e90",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u4e3b\u9898\u7684\u9759\u6001\u8d44\u6e90\u7684\u5f15\u7528\u65b9\u6cd5\u3002",source:"@site/versioned_docs/version-2.2/developer-guide/theme/static-resources.md",sourceDirName:"developer-guide/theme",slug:"/developer-guide/theme/static-resources",permalink:"/2.2/developer-guide/theme/static-resources",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.2/developer-guide/theme/static-resources.md",tags:[],version:"2.2",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{title:"\u9759\u6001\u8d44\u6e90",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u4e3b\u9898\u7684\u9759\u6001\u8d44\u6e90\u7684\u5f15\u7528\u65b9\u6cd5\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u677f\u8def\u7531",permalink:"/2.2/developer-guide/theme/template-route-mapping"},next:{title:"\u8bbe\u7f6e\u9009\u9879",permalink:"/2.2/developer-guide/theme/settings"}},p={},o=[{value:"\u6a21\u677f\u6807\u7b7e\u5f15\u7528",id:"\u6a21\u677f\u6807\u7b7e\u5f15\u7528",level:2},{value:"API \u5f15\u7528",id:"api-\u5f15\u7528",level:2}],d={toc:o};function m(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"/2.2/developer-guide/theme/structure"},"\u76ee\u5f55\u7ed3\u6784")," \u7684\u8bb2\u89e3\u6211\u4eec\u53ef\u4ee5\u77e5\u9053\uff0c\u76ee\u524d\u4e3b\u9898\u7684\u9759\u6001\u8d44\u6e90\u7edf\u4e00\u6258\u7ba1\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/templates/assets/")," \u76ee\u5f55\u4e0b\uff0c\u4e0b\u9762\u8bb2\u89e3\u4e00\u4e0b\u5982\u4f55\u5728\u6a21\u677f\u4e2d\u4f7f\u7528\uff0c\u5927\u81f4\u4f1a\u5206\u4e3a\u4e24\u79cd\u5f15\u5165\u65b9\u5f0f\u3002"),(0,a.kt)("h2",{id:"\u6a21\u677f\u6807\u7b7e\u5f15\u7528"},"\u6a21\u677f\u6807\u7b7e\u5f15\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" th:href="@{/assets/dist/style.css}" />\n<script th:src="@{/assets/dist/main.iife.js}"><\/script>\n\n<img th:src="@{/assets/images/logo.png}" />\n')),(0,a.kt)("p",null,"\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"@{/assets/dist/style.css}")," \u8868\u793a\u5f15\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"/templates/assets/dist/style.css")," \u6587\u4ef6\u3002\u6700\u7ec8\u4f1a\u88ab\u6e32\u67d3\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<link rel="stylesheet" href="/themes/my-theme/assets/dist/style.css" />\n')),(0,a.kt)("h2",{id:"api-\u5f15\u7528"},"API \u5f15\u7528"),(0,a.kt)("p",null,"\u4ee5\u4e0a\u65b9\u5f0f\u4ec5\u652f\u6301\u5728 HTML \u6807\u7b7e\u4e2d\u4f7f\u7528\uff0c\u4e14\u5fc5\u987b\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@{}")," \u5305\u88f9\u624d\u80fd\u6e32\u67d3\u4e3a\u6b63\u786e\u7684\u8def\u5f84\u3002\u5982\u679c\u9700\u8981\u5728\u975e HTML \u6807\u7b7e\u4e2d\u5f97\u5230\u6b63\u786e\u7684\u8def\u5f84\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"#theme.assets()")," API\u3002"),(0,a.kt)("admonition",{title:"\u6ce8\u610f",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"#theme.assets()")," \u7684\u65f6\u5019\uff0c\u8d44\u6e90\u5730\u5740\u4e0d\u9700\u8981\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"/assets/"),"\u3002")),(0,a.kt)("p",null,"\u6bd4\u5982\u6211\u4eec\u9700\u8981\u5728 JavaScript \u4e2d\u5f02\u6b65\u83b7\u53d6\u4e00\u4e9b\u8d44\u6e90\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:"{3}","{3}":!0},"<script th:inline=\"javascript\">\n\nloadScript('[(${#theme.assets(\"/dist/main.iife.js\")})]');\n\n// loadScript('/themes/my-theme/assets/dist/main.iife.js');\n\nfunction loadScript(url) {\n    return new Promise(function (resolve, reject) {\n        var script = document.createElement('script');\n        script.type = 'text/javascript';\n        script.src = url;\n        script.onload = resolve;\n        script.onerror = reject;\n        document.head.appendChild(script);\n    });\n}\n<\/script>\n")),(0,a.kt)("admonition",{title:"\u63d0\u793a",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u5173\u4e8e\u5728 JavaScript \u4e2d\u4f7f\u7528 Thymeleaf \u8bed\u6cd5\u53ef\u4ee5\u53c2\u8003 Thymeleaf \u5b98\u65b9\u6587\u6863\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.thymeleaf.org/doc/tutorials/3.1/usingthymeleaf.html#javascript-inlining"},"JavaScript inlining"))))}m.isMDXComponent=!0}}]);