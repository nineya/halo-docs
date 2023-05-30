"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[56563],{10282:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>d,toc:()=>r});var i=n(96600),l=(n(59496),n(49613));n(26401);const p={title:"\u63d2\u4ef6\u8fd0\u884c\u6a21\u5f0f",description:"\u4e86\u89e3\u63d2\u4ef6\u7684\u8fd0\u884c\u65b9\u5f0f"},o=void 0,d={unversionedId:"developer-guide/plugin/runtime-mode",id:"version-2.4/developer-guide/plugin/runtime-mode",title:"\u63d2\u4ef6\u8fd0\u884c\u6a21\u5f0f",description:"\u4e86\u89e3\u63d2\u4ef6\u7684\u8fd0\u884c\u65b9\u5f0f",source:"@site/versioned_docs/version-2.4/developer-guide/plugin/runtime-mode.md",sourceDirName:"developer-guide/plugin",slug:"/developer-guide/plugin/runtime-mode",permalink:"/2.4/developer-guide/plugin/runtime-mode",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.4/developer-guide/plugin/runtime-mode.md",tags:[],version:"2.4",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{title:"\u63d2\u4ef6\u8fd0\u884c\u6a21\u5f0f",description:"\u4e86\u89e3\u63d2\u4ef6\u7684\u8fd0\u884c\u65b9\u5f0f"},sidebar:"tutorialSidebar",previous:{title:"\u9879\u76ee\u7ed3\u6784",permalink:"/2.4/developer-guide/plugin/structure"},next:{title:"\u751f\u547d\u5468\u671f",permalink:"/2.4/developer-guide/plugin/lifecycle"}},a={},r=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3}],u={toc:r};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Halo \u7684\u63d2\u4ef6\u53ef\u4ee5\u5728\u4e24\u79cd\u6a21\u5f0f\u4e0b\u8fd0\u884c\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"DEVELOPMENT")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"DEPLOYMENT"),"\u3002\n",(0,l.kt)("inlineCode",{parentName:"p"},"DEPLOYMENT"),"\uff08\u9ed8\u8ba4\uff09\u6a21\u5f0f\u662f\u63d2\u4ef6\u521b\u5efa\u7684\u6807\u51c6\u5de5\u4f5c\u6d41\u7a0b\uff1a\u4e3a\u6bcf\u4e2a\u63d2\u4ef6\u521b\u5efa\u4e00\u4e2a\u65b0\u7684 Gradle \u9879\u76ee\uff0c\u7f16\u7801\u63d2\u4ef6\uff08\u58f0\u660e\u65b0\u7684\u6269\u5c55\u70b9\u548c/\u6216\u6dfb\u52a0\u65b0\u7684\u6269\u5c55\uff09\uff0c\u5c06\u63d2\u4ef6\u6253\u5305\u6210\u4e00\u4e2a JAR \u6587\u4ef6\uff0c\u90e8\u7f72 JAR \u6587\u4ef6\u5230 Halo\u3002\n\u8fd9\u4e9b\u64cd\u4f5c\u975e\u5e38\u8017\u65f6\uff0c\u56e0\u6b64\u5f15\u5165\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"DEVELOPMENT")," \u8fd0\u884c\u65f6\u6a21\u5f0f\u3002"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u63d2\u4ef6\u5f00\u53d1\u4eba\u5458\u6765\u8bf4\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"DEVELOPMENT")," \u8fd0\u884c\u65f6\u6a21\u5f0f\u7684\u4e3b\u8981\u4f18\u70b9\u662f\u4e0d\u5fc5\u6253\u5305\u548c\u90e8\u7f72\u63d2\u4ef6\u3002\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b\uff0c\u60a8\u53ef\u4ee5\u4ee5\u7b80\u5355\u5feb\u901f\u7684\u6a21\u5f0f\u5f00\u53d1\u63d2\u4ef6\u3002"),(0,l.kt)("h3",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"DEPLOYMENT")," \u8fd0\u884c\u63d2\u4ef6\u5219\u505a\u5982\u4e0b\u914d\u7f6e:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"halo:\n  plugin:\n    runtime-mode: deployment\n")),(0,l.kt)("p",null,"\u63d2\u4ef6\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"deployment")," \u6a21\u5f0f\u53ea\u5141\u8bb8\u901a\u8fc7\u5b89\u88c5 JAR \u6587\u4ef6\u7684\u65b9\u5f0f\u8fd0\u884c\u63d2\u4ef6\u3002"),(0,l.kt)("p",null,"\u800c\u5982\u679c\u4f60\u60f3\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"DEVELOPMENT")," \u8fd0\u884c\u63d2\u4ef6\u6216\u5f00\u53d1\u63d2\u4ef6\u5219\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"runtime-mode")," \u4fee\u6539\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"development"),"\uff0c\u540c\u65f6\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"fixed-plugin-path")," \u4e3a\u63d2\u4ef6\u9879\u76ee\u8def\u5f84\uff0c\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"halo:\n  plugin:\n    runtime-mode: deployment\n    fixed-plugin-path:\n      - /path/to/your/plugin/plugin-starter\n")),(0,l.kt)("admonition",{title:"Note",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u63d2\u4ef6\u4ee5\u5f00\u53d1\u6a21\u5f0f\u8fd0\u884c\u65f6\u7531\u4e8e\u63d2\u4ef6\u7684\u52a0\u8f7d\u65b9\u5f0f\u4e0e\u90e8\u7f72\u6a21\u5f0f\u4e0d\u540c\uff0c\u5982\u679c\u4f60\u6b64\u65f6\u5728 Console \u5b89\u88c5\u63d2\u4ef6\uff08JAR\uff09\u5219\u4f1a\u63d0\u793a\u63d2\u4ef6\u6587\u4ef6\u627e\u4e0d\u5230\u800c\u65e0\u6cd5\u542f\u52a8\u3002")))}m.isMDXComponent=!0}}]);