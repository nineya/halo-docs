"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[44546],{52418:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=l(96600),a=(l(59496),l(49613));l(26401);const o={title:"\u53d1\u5e03\u63d2\u4ef6",description:"\u4e86\u89e3\u5982\u4f55\u4e0e\u6211\u4eec\u7684\u793e\u533a\u5206\u4eab\u4f60\u7684\u63d2\u4ef6"},n=void 0,s={unversionedId:"developer-guide/plugin/publish",id:"version-2.4/developer-guide/plugin/publish",title:"\u53d1\u5e03\u63d2\u4ef6",description:"\u4e86\u89e3\u5982\u4f55\u4e0e\u6211\u4eec\u7684\u793e\u533a\u5206\u4eab\u4f60\u7684\u63d2\u4ef6",source:"@site/versioned_docs/version-2.4/developer-guide/plugin/publish.md",sourceDirName:"developer-guide/plugin",slug:"/developer-guide/plugin/publish",permalink:"/2.4/developer-guide/plugin/publish",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.4/developer-guide/plugin/publish.md",tags:[],version:"2.4",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{title:"\u53d1\u5e03\u63d2\u4ef6",description:"\u4e86\u89e3\u5982\u4f55\u4e0e\u6211\u4eec\u7684\u793e\u533a\u5206\u4eab\u4f60\u7684\u63d2\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"\u5165\u95e8",permalink:"/2.4/developer-guide/plugin/hello-world"},next:{title:"\u9879\u76ee\u7ed3\u6784",permalink:"/2.4/developer-guide/plugin/structure"}},p={},d=[{value:"\u521b\u5efa\u4f60\u7684 Release",id:"\u521b\u5efa\u4f60\u7684-release",level:2},{value:"\u5206\u4eab\u4f60\u7684\u63d2\u4ef6",id:"\u5206\u4eab\u4f60\u7684\u63d2\u4ef6",level:2},{value:"\u7b49\u5f85\u5ba1\u6838",id:"\u7b49\u5f85\u5ba1\u6838",level:2}],r={toc:d};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},r,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4e86\u89e3\u5982\u4f55\u4e0e\u6211\u4eec\u7684\u793e\u533a\u5206\u4eab\u60a8\u7684\u6269\u5c55\u3002")),(0,a.kt)("h2",{id:"\u521b\u5efa\u4f60\u7684-release"},"\u521b\u5efa\u4f60\u7684 Release"),(0,a.kt)("p",null,"\u5f53\u4f60\u5b8c\u6210\u4e86\u4f60\u7684\u63d2\u4ef6\u5e76\u8fdb\u884c\u5145\u5206\u6d4b\u8bd5\u540e\uff0c\u5207\u6362\u5230\u63d2\u4ef6\u76ee\u5f55 Build \u4e00\u6b21\uff0c\u5f53\u6ca1\u6709\u53d1\u751f\u4efb\u4f55\u9519\u8bef\u4f60\u5c31\u53ef\u4ee5\u63a8\u9001\u5230 Github \u5e76 ",(0,a.kt)("inlineCode",{parentName:"p"},"Create a new release"),"\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u586b\u5199 ",(0,a.kt)("inlineCode",{parentName:"p"},"Release Tag")," \u548c\u63cf\u8ff0\u70b9\u51fb\u521b\u5efa\uff0c\u9879\u76ee\u76ee\u5f55\u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},".github/workflows/workflow.yaml")," \u6587\u4ef6\u4f1a\u88ab ",(0,a.kt)("inlineCode",{parentName:"p"},"Github Action")," \u89e6\u53d1\u5e76\u6267\u884c\uff0c\u811a\u672c\u4f1a\u81ea\u52a8\u6839\u636e\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Release Tag")," \u4fee\u6539\u63d2\u4ef6\u7248\u672c\u53f7\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Release")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Asserts")," \u4e2d\u5305\u542b\u6253\u5305\u4ea7\u7269--\u63d2\u4ef6\u7684 JAR \u6587\u4ef6\u3002"),(0,a.kt)("h2",{id:"\u5206\u4eab\u4f60\u7684\u63d2\u4ef6"},"\u5206\u4eab\u4f60\u7684\u63d2\u4ef6"),(0,a.kt)("p",null,"\u7528\u6237\u53ef\u4ee5\u5728\u4f60\u7684\u4ed3\u5e93 Release \u4e0b\u8f7d\u4f7f\u7528\uff0c\u4f46\u4e3a\u4e86\u65b9\u4fbf\u8ba9\u793e\u533a\u7528\u6237\u770b\u5230\uff0c\u4f60\u53ef\u4ee5\u5728\u6211\u4eec\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/halo-sigs/awesome-halo"},"awesome-halo")," \u4ed3\u5e93\u53d1\u8d77\u4e00\u4e2a Pull Request\uff0c\u4e3a\u6b64\u4f60\u9700\u8981\u5148 Fork ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/halo-sigs/awesome-halo"},"awesome-halo")," \u5e76\u6309\u7167\u6b64\u4ed3\u5e93\u7684\u8981\u6c42\u6dfb\u52a0\u4e00\u884c\u8bb0\u5f55\u662f\u5173\u4e8e\u4f60\u7684\u63d2\u4ef6\u4ed3\u5e93\u5730\u5740\u548c\u529f\u80fd\u63cf\u8ff0\u7684\uff0c\u7136\u540e\u63a8\u9001\u4f60\u7684\u66f4\u6539\u5e76\u901a\u8fc7 Github \u5411 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/halo-sigs/awesome-halo"},"awesome-halo")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," \u5206\u652f\u53d1\u8d77 Pull Request\u3002"),(0,a.kt)("h2",{id:"\u7b49\u5f85\u5ba1\u6838"},"\u7b49\u5f85\u5ba1\u6838"),(0,a.kt)("p",null,"\u5728\u4f60\u53d1\u8d77 Pull Request \u540e\uff0c\u6211\u4eec\u5c06\u5ba1\u67e5\u7684\u4f60\u7684\u63d2\u4ef6\u5e76\u5728\u9700\u8981\u65f6\u8bf7\u6c42\u66f4\u6539\u3002\u4e00\u65e6\u88ab\u63a5\u53d7\uff0cPull Request \u5c06\u88ab\u5408\u5e76\u3002"))}u.isMDXComponent=!0}}]);