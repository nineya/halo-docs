"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[95333],{86949:(e,l,t)=>{t.r(l),t.d(l,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=t(96600),a=(t(59496),t(49613));t(26401);const i={title:"\u5165\u95e8",description:"\u4e86\u89e3\u5982\u4f55\u6784\u5efa\u4f60\u7684\u7b2c\u4e00\u4e2a\u63d2\u4ef6\u5e76\u5728 Halo \u4e2d\u4f7f\u7528\u5b83\u3002"},o=void 0,r={unversionedId:"developer-guide/plugin/hello-world",id:"version-2.5/developer-guide/plugin/hello-world",title:"\u5165\u95e8",description:"\u4e86\u89e3\u5982\u4f55\u6784\u5efa\u4f60\u7684\u7b2c\u4e00\u4e2a\u63d2\u4ef6\u5e76\u5728 Halo \u4e2d\u4f7f\u7528\u5b83\u3002",source:"@site/versioned_docs/version-2.5/developer-guide/plugin/hello-world.md",sourceDirName:"developer-guide/plugin",slug:"/developer-guide/plugin/hello-world",permalink:"/developer-guide/plugin/hello-world",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.5/developer-guide/plugin/hello-world.md",tags:[],version:"2.5",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{title:"\u5165\u95e8",description:"\u4e86\u89e3\u5982\u4f55\u6784\u5efa\u4f60\u7684\u7b2c\u4e00\u4e2a\u63d2\u4ef6\u5e76\u5728 Halo \u4e2d\u4f7f\u7528\u5b83\u3002"},sidebar:"tutorialSidebar",previous:{title:"\u51c6\u5907\u5de5\u4f5c",permalink:"/developer-guide/plugin/prepare"},next:{title:"\u53d1\u5e03\u63d2\u4ef6",permalink:"/developer-guide/plugin/publish"}},p={},d=[{value:"\u8fd0\u884c\u63d2\u4ef6",id:"\u8fd0\u884c\u63d2\u4ef6",level:2}],s={toc:d};function u(e){let{components:l,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,i,{components:l,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Halo \u63d0\u4f9b\u4e86\u4e00\u4e2a\u6a21\u677f\u4ed3\u5e93\u7528\u4e8e\u521b\u5efa\u63d2\u4ef6\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6253\u5f00 ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/halo-dev/plugin-starter"},"plugin-starter"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"Use this template")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Create a new repository"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u56fe\u6240\u793a\u586b\u5199\u4ed3\u5e93\u540d\u540e\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"Create repository from template"),"\u3002\n",(0,a.kt)("img",{alt:"create-repository-for-hello-world-plugin",src:t(46050).Z,width:"1596",height:"1188"}))),(0,a.kt)("p",null,"\u4f60\u73b0\u5728\u5df2\u7ecf\u57fa\u4e8e Halo \u63d2\u4ef6\u6a21\u677f\u521b\u5efa\u4e86\u81ea\u5df1\u7684\u5b58\u50a8\u5e93\u3002\u63a5\u4e0b\u6765\uff0c\u4f60\u9700\u8981\u5c06\u5b83 ",(0,a.kt)("inlineCode",{parentName:"p"},"git clone")," \u5230\u4f60\u7684\u8ba1\u7b97\u673a\u4e0a\u5e76\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"IntelliJ IDEA")," \u6253\u5f00\u5b83\u3002"),(0,a.kt)("h2",{id:"\u8fd0\u884c\u63d2\u4ef6"},"\u8fd0\u884c\u63d2\u4ef6"),(0,a.kt)("p",null,"\u73b0\u5728\u6709\u4e86\u4e00\u4e2a\u7a7a\u9879\u76ee\uff0c\u6211\u4eec\u9700\u8981\u8ba9\u63d2\u4ef6\u80fd\u6700\u6700\u5c0f\u5316\u7684\u8fd0\u884c\u8d77\u6765\u3002"),(0,a.kt)("p",null,"\u8fd9\u5f88\u7b80\u5355\uff0c\u9996\u5148\u4f60\u9700\u8981\u6784\u5efa\u63d2\u4ef6\uff1a\u53ea\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"halo-plugin-hello-world")," \u9879\u76ee\u76ee\u5f55\u4e0b\u6267\u884c Gradle \u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"./gradlew build \n")),(0,a.kt)("p",null,"\u6216\u8005\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"IntelliJ IDEA")," \u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Gradle build")," \u5373\u53ef\u5b8c\u6210\u63d2\u4ef6\u9879\u76ee\u7684\u6784\u5efa\u3002"),(0,a.kt)("p",null,"\u7b2c\u4e8c\u6b65\u5c31\u662f\u4f7f\u7528\u5b83\u3002"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"IntelliJ IDEA")," \u6253\u5f00 Halo\uff0c\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/developer-guide/core/run"},"Halo \u5f00\u53d1\u73af\u5883\u8fd0\u884c"),"\u3002\n\u7136\u540e\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/resources")," \u4e0b\u521b\u5efa\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"application-local.yaml")," \u6587\u4ef6\u5e76\u505a\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"halo:\n  plugin:\n    runtime-mode: development\n    fixed-plugin-path:\n      # \u914d\u7f6e\u4e3a\u63d2\u4ef6\u7edd\u5bf9\u8def\u5f84\n      - /Users/guqing/halo-plugin-hello-world\n")),(0,a.kt)("p",null,"\u4f7f\u7528\u6b64 local profile \u542f\u52a8 Halo\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# macOS / Linux\n./gradlew bootRun --args="--spring.profiles.active=dev,local"\n\n# Windows\ngradlew.bat bootRun --args="--spring.profiles.active=dev,win,local"\n')),(0,a.kt)("p",null,"\u7136\u540e\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:8090/console")),(0,a.kt)("p",null,"\u5728\u63d2\u4ef6\u5217\u8868\u5c06\u80fd\u770b\u5230\u63d2\u4ef6\u5df2\u7ecf\u88ab\u6b63\u786e\u542f\u52a8\uff0c\u5e76\u4e14\u5728\u5de6\u4fa7\u83dc\u5355\u6dfb\u52a0\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"\u793a\u4f8b\u5206\u7ec4"),"\uff0c\u5176\u4e0b\u6709\u4e00\u4e2a\u540d ",(0,a.kt)("inlineCode",{parentName:"p"},"\u793a\u4f8b\u9875\u9762")," \u7684\u83dc\u5355\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"hello-world-in-plugin-list",src:t(49641).Z,width:"2300",height:"1158"})))}u.isMDXComponent=!0},46050:(e,l,t)=>{t.d(l,{Z:()=>n});const n=t.p+"assets/images/create-repository-for-hello-world-plugin-51b74348495d51864c88c9692a33823b.png"},49641:(e,l,t)=>{t.d(l,{Z:()=>n});const n=t.p+"assets/images/plugin-hello-world-329c137a9cdee96d3456f5a88541d8aa.png"}}]);