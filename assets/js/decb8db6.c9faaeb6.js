"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[1356],{3849:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>s,frontMatter:()=>d,metadata:()=>p,toc:()=>o});var l=i(6600),n=(i(9496),i(9613));i(6401);const d={title:"\u751f\u547d\u5468\u671f",description:"\u4e86\u89e3\u63d2\u4ef6\u4ece\u542f\u52a8\u5230\u5378\u8f7d\u7684\u8fc7\u7a0b"},r=void 0,p={unversionedId:"developer-guide/plugin/lifecycle",id:"developer-guide/plugin/lifecycle",title:"\u751f\u547d\u5468\u671f",description:"\u4e86\u89e3\u63d2\u4ef6\u4ece\u542f\u52a8\u5230\u5378\u8f7d\u7684\u8fc7\u7a0b",source:"@site/docs/developer-guide/plugin/lifecycle.md",sourceDirName:"developer-guide/plugin",slug:"/developer-guide/plugin/lifecycle",permalink:"/1.1.0-SNAPSHOT/developer-guide/plugin/lifecycle",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/docs/developer-guide/plugin/lifecycle.md",tags:[],version:"current",lastUpdatedBy:"nineya",lastUpdatedAt:1685582665,formattedLastUpdatedAt:"2023\u5e746\u67081\u65e5",frontMatter:{title:"\u751f\u547d\u5468\u671f",description:"\u4e86\u89e3\u63d2\u4ef6\u4ece\u542f\u52a8\u5230\u5378\u8f7d\u7684\u8fc7\u7a0b"},sidebar:"tutorialSidebar",previous:{title:"\u63d2\u4ef6\u8fd0\u884c\u6a21\u5f0f",permalink:"/1.1.0-SNAPSHOT/developer-guide/plugin/runtime-mode"},next:{title:"\u63d2\u4ef6\u8d44\u6e90\u6587\u4ef6",permalink:"/1.1.0-SNAPSHOT/developer-guide/plugin/manifest"}},a={},o=[{value:"\u63d2\u4ef6\u542f\u52a8",id:"\u63d2\u4ef6\u542f\u52a8",level:3},{value:"\u63d2\u4ef6\u505c\u6b62",id:"\u63d2\u4ef6\u505c\u6b62",level:3},{value:"\u63d2\u4ef6\u5220\u9664",id:"\u63d2\u4ef6\u5220\u9664",level:3}],u={toc:o};function s(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u6839\u636e",(0,n.kt)("a",{parentName:"p",href:"/1.1.0-SNAPSHOT/developer-guide/plugin/structure"},"\u63d2\u4ef6\u9879\u76ee\u6587\u4ef6\u7ed3\u6784"),"\u6240\u5c55\u793a\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"StarterPlugin.java")," \u4e2d\uff0c\u5177\u6709\u5982\u4e0b\u65b9\u6cd5\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public void start() {\n        System.out.println("\u63d2\u4ef6\u542f\u52a8\u6210\u529f\uff01");\n    }\n\n    @Override\n    public void stop() {\n        System.out.println("\u63d2\u4ef6\u505c\u6b62\uff01");\n    }\n\n    @Override\n    public void delete() {\n        System.out.println("\u63d2\u4ef6\u88ab\u5220\u9664\uff01");\n    }\n')),(0,n.kt)("h3",{id:"\u63d2\u4ef6\u542f\u52a8"},"\u63d2\u4ef6\u542f\u52a8"),(0,n.kt)("p",null,"\u63d2\u4ef6\u88ab\u5b89\u88c5\u540e\uff0c\u53ea\u52a0\u8f7d\u4e86\u63d2\u4ef6\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"plugin.yaml"),"\uff0c\u7c7b\u53ca\u5176\u4ed6\u8d44\u6e90\u6587\u4ef6\u7684\u52a0\u8f7d\u5747\u5728\u542f\u52a8\u65f6\u8fdb\u884c\u3002\n\u5f53\u63d2\u4ef6\u52a0\u8f7d\u5b8c\u7c7b\u6587\u4ef6\u5e76\u51c6\u5907\u597d\u542f\u52a8\u63d2\u4ef6\u540e\u5c31\u4f1a\u8c03\u7528\u63d2\u4ef6\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"start()")," \u65b9\u6cd5\uff0c\u8fd9\u6709\u52a9\u4e8e\u63d2\u4ef6\u5728\u542f\u52a8\u65f6\u505a\u4e00\u4e9b\u4e8b\u60c5\uff0c\u4f8b\u5982\u521d\u59cb\u5316\u3002"),(0,n.kt)("h3",{id:"\u63d2\u4ef6\u505c\u6b62"},"\u63d2\u4ef6\u505c\u6b62"),(0,n.kt)("p",null,"\u63d2\u4ef6\u505c\u6b62\u65f6\uff0c\u4f1a\u5220\u9664\u5728\u542f\u52a8\u65f6\u521b\u5efa\u7684\u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u4f8b\u5982\u63d2\u4ef6\u8bbe\u7f6e\u7b49\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"p"},"yaml")," \u521b\u5efa\u7684\u81ea\u5b9a\u4e49\u6a21\u578b\u8d44\u6e90\u3002\n\u63d2\u4ef6\u5b9a\u4e49\u7684\u81ea\u5b9a\u4e49\u6a21\u578b\u4e5f\u9700\u8981\u5728\u6b64\u65f6\u6e05\u7406\u6389\u3002"),(0,n.kt)("h3",{id:"\u63d2\u4ef6\u5220\u9664"},"\u63d2\u4ef6\u5220\u9664"),(0,n.kt)("p",null,"\u63d2\u4ef6\u88ab\u5378\u8f7d\u65f6\u88ab\u8c03\u7528\u3002"))}s.isMDXComponent=!0}}]);