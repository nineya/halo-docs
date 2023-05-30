"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[3946],{77443:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=i(96600),t=(i(59496),i(49613));i(26401);const a={title:"\u9759\u6001\u8d44\u6e90\u4ee3\u7406",description:"\u4e86\u89e3\u5982\u679c\u4f7f\u7528\u9759\u6001\u8d44\u6e90\u4ee3\u7406\u6765\u8bbf\u95ee\u63d2\u4ef6\u4e2d\u7684\u9759\u6001\u8d44\u6e90"},l=void 0,p={unversionedId:"developer-guide/plugin/api-reference/reverseproxy",id:"version-2.3/developer-guide/plugin/api-reference/reverseproxy",title:"\u9759\u6001\u8d44\u6e90\u4ee3\u7406",description:"\u4e86\u89e3\u5982\u679c\u4f7f\u7528\u9759\u6001\u8d44\u6e90\u4ee3\u7406\u6765\u8bbf\u95ee\u63d2\u4ef6\u4e2d\u7684\u9759\u6001\u8d44\u6e90",source:"@site/versioned_docs/version-2.3/developer-guide/plugin/api-reference/reverseproxy.md",sourceDirName:"developer-guide/plugin/api-reference",slug:"/developer-guide/plugin/api-reference/reverseproxy",permalink:"/2.3/developer-guide/plugin/api-reference/reverseproxy",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.3/developer-guide/plugin/api-reference/reverseproxy.md",tags:[],version:"2.3",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{title:"\u9759\u6001\u8d44\u6e90\u4ee3\u7406",description:"\u4e86\u89e3\u5982\u679c\u4f7f\u7528\u9759\u6001\u8d44\u6e90\u4ee3\u7406\u6765\u8bbf\u95ee\u63d2\u4ef6\u4e2d\u7684\u9759\u6001\u8d44\u6e90"},sidebar:"tutorialSidebar",previous:{title:"\u4e0e\u81ea\u5b9a\u4e49\u6a21\u578b\u4ea4\u4e92",permalink:"/2.3/developer-guide/plugin/api-reference/extension-client"},next:{title:"\u4e3b\u9898\u5f00\u53d1",permalink:"/2.3/category/\u4e3b\u9898\u5f00\u53d1"}},o={},s=[],d={toc:s};function u(e){let{components:n,...i}=e;return(0,t.kt)("wrapper",(0,r.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"\u63d2\u4ef6\u4e2d\u7684\u9759\u6001\u8d44\u6e90\u5982\u56fe\u7247\u7b49\u5982\u679c\u60f3\u88ab\u5916\u90e8\u8bbf\u95ee\u5230\uff0c\u9700\u8981\u653e\u5230 ",(0,t.kt)("inlineCode",{parentName:"p"},"src/main/resources")," \u76ee\u5f55\u4e0b\uff0c\u5e76\u901a\u8fc7\u521b\u5efa ReverseProxy \u81ea\u5b9a\u4e49\u6a21\u578b\u6765\u8fdb\u884c\u9759\u6001\u8d44\u6e90\u4ee3\u7406\u8bbf\u95ee\u3002"),(0,t.kt)("p",null,"\u4f8b\u5982 ",(0,t.kt)("inlineCode",{parentName:"p"},"src/main/resources")," \u4e0b\u7684 ",(0,t.kt)("inlineCode",{parentName:"p"},"static")," \u76ee\u5f55\u4e0b\u6709\u4e00\u5f20 ",(0,t.kt)("inlineCode",{parentName:"p"},"halo.jpg"),":"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"\u9996\u5148\u9700\u8981\u5728 ",(0,t.kt)("inlineCode",{parentName:"li"},"src/main/resources/extensions")," \u4e0b\u521b\u5efa\u4e00\u4e2a ",(0,t.kt)("inlineCode",{parentName:"li"},"yaml"),"\uff0c\u6587\u4ef6\u540d\u53ef\u4ee5\u4efb\u610f\u3002"),(0,t.kt)("li",{parentName:"ol"},"\u793a\u4f8b\u914d\u7f6e\u5982\u4e0b\u3002")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: plugin.halo.run/v1alpha1\nkind: ReverseProxy\nmetadata:\n  # name \u4e3a\u6b64\u8d44\u6e90\u7684\u552f\u4e00\u6807\u8bc6\u540d\u79f0\uff0c\u4e0d\u5141\u8bb8\u91cd\u590d\uff0c\u4e3a\u4e86\u907f\u514d\u4e0e\u5176\u4ed6\u63d2\u4ef6\u51b2\u7a81\uff0c\u63a8\u8350\u5e26\u4e0a\u63d2\u4ef6\u540d\u79f0\u524d\u7f00\n  name: my-plugin-fake-reverse-proxy\nrules:\n  - path: /res/**\n    file:\n      directory: static\n      # \u5982\u679c\u60f3\u4ee3\u7406 static \u4e0b\u6240\u6709\u9759\u6001\u8d44\u6e90\u5219\u7701\u7565 filename \u914d\u7f6e\n      filename: halo.jpg\n")),(0,t.kt)("p",null,"\u63d2\u4ef6\u542f\u52a8\u540e\u4f1a\u6839\u636e ",(0,t.kt)("inlineCode",{parentName:"p"},"/plugins/{plugin-name}/assets/**")," \u89c4\u5219\u751f\u6210 API\u3002\n\u56e0\u6b64\u8be5 ",(0,t.kt)("inlineCode",{parentName:"p"},"ReverseProxy")," \u7684\u8bbf\u95ee\u8def\u5f84\u4e3a: ",(0,t.kt)("inlineCode",{parentName:"p"},"/plugins/my-plugin/assets/res/halo.jpg"),"\u3002"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"rules")," \u4e0b\u53ef\u4ee5\u6dfb\u52a0\u591a\u7ec4\u89c4\u5219\u3002"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"path")," \u4e3a\u8def\u5f84\u524d\u7f00\u3002"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"file")," \u8868\u793a\u8bbf\u95ee\u6587\u4ef6\u7cfb\u7edf\uff0c\u76ee\u524d\u6682\u65f6\u4ec5\u652f\u6301\u8fd9\u4e00\u79cd\u3002"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"directory")," \u8868\u793a\u8981\u4ee3\u7406\u7684\u76ee\u6807\u6587\u4ef6\u76ee\u5f55\uff0c\u5b83\u76f8\u5bf9\u4e8e ",(0,t.kt)("inlineCode",{parentName:"li"},"src/main/resources/")," \u76ee\u5f55\u3002"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"filename")," \u8868\u793a\u8981\u4ee3\u7406\u7684\u76ee\u6807\u6587\u4ef6\u540d\u3002")),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"directory")," \u548c ",(0,t.kt)("inlineCode",{parentName:"p"},"filename")," \u90fd\u662f\u53ef\u9009\u7684\uff0c\u4f46\u5fc5\u987b\u81f3\u5c11\u6709\u4e00\u4e2a\u88ab\u914d\u7f6e\u3002"))}u.isMDXComponent=!0}}]);