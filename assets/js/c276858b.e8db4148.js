"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[69],{9855:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>d});var r=a(6600),l=(a(9496),a(9613));a(6401);const i={title:"\u51c6\u5907\u5de5\u4f5c",description:"\u5f00\u53d1\u73af\u5883\u7684\u51c6\u5907\u5de5\u4f5c"},o=void 0,n={unversionedId:"developer-guide/core/prepare",id:"developer-guide/core/prepare",title:"\u51c6\u5907\u5de5\u4f5c",description:"\u5f00\u53d1\u73af\u5883\u7684\u51c6\u5907\u5de5\u4f5c",source:"@site/docs/developer-guide/core/prepare.md",sourceDirName:"developer-guide/core",slug:"/developer-guide/core/prepare",permalink:"/1.1.0-SNAPSHOT/developer-guide/core/prepare",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/docs/developer-guide/core/prepare.md",tags:[],version:"current",lastUpdatedBy:"nineya",lastUpdatedAt:1685600276,formattedLastUpdatedAt:"2023\u5e746\u67081\u65e5",frontMatter:{title:"\u51c6\u5907\u5de5\u4f5c",description:"\u5f00\u53d1\u73af\u5883\u7684\u51c6\u5907\u5de5\u4f5c"},sidebar:"tutorialSidebar",previous:{title:"\u7cfb\u7edf\u5f00\u53d1",permalink:"/1.1.0-SNAPSHOT/category/\u7cfb\u7edf\u5f00\u53d1"},next:{title:"\u5f00\u53d1\u73af\u5883\u8fd0\u884c",permalink:"/1.1.0-SNAPSHOT/developer-guide/core/run"}},p={},d=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"\u5de5\u4f5c\u76ee\u5f55",id:"\u5de5\u4f5c\u76ee\u5f55",level:3}],s={toc:d};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/openjdk/jdk"},"OpenJDK 17 LTS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org"},"Node.js 18 LTS")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://pnpm.io/"},"pnpm 7")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/idea/"},"IntelliJ IDEA")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"Docker"),"\uff08\u53ef\u9009\uff09")),(0,l.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,l.kt)("h3",{id:"\u5de5\u4f5c\u76ee\u5f55"},"\u5de5\u4f5c\u76ee\u5f55"),(0,l.kt)("p",null,"\u6307 Halo \u6240\u4f9d\u8d56\u7684\u5de5\u4f5c\u76ee\u5f55\uff0c\u5728 Halo \u8fd0\u884c\u7684\u65f6\u5019\u4f1a\u5728\u7cfb\u7edf\u5f53\u524d\u7528\u6237\u76ee\u5f55\u4e0b\u4ea7\u751f\u4e00\u4e2a halo-next \u7684\u6587\u4ef6\u5939\uff0c\u7edd\u5bf9\u8def\u5f84\u4e3a ~/halo-next\u3002\u91cc\u9762\u901a\u5e38\u5305\u542b\u4e0b\u5217\u76ee\u5f55\u6216\u6587\u4ef6\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"db"),"\uff1a\u5b58\u653e H2 Database \u7684\u7269\u7406\u6587\u4ef6\uff0c\u5982\u679c\u4f60\u4f7f\u7528\u5176\u4ed6\u6570\u636e\u5e93\uff0c\u90a3\u4e48\u4e0d\u4f1a\u5b58\u5728\u8fd9\u4e2a\u76ee\u5f55\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"themes"),"\uff1a\u91cc\u9762\u5305\u542b\u7528\u6237\u6240\u5b89\u88c5\u7684\u4e3b\u9898\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"plugins"),"\uff1a\u91cc\u9762\u5305\u542b\u7528\u6237\u6240\u5b89\u88c5\u7684\u63d2\u4ef6\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"attachments"),"\uff1a\u9644\u4ef6\u76ee\u5f55\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"logs"),"\uff1a\u8fd0\u884c\u65e5\u5fd7\u76ee\u5f55\u3002")))}m.isMDXComponent=!0}}]);