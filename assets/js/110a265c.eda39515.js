"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[18053,44674],{30386:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=o(96600),i=(o(59496),o(49613)),n=(o(26401),o(24581));const a={title:"\u4f5c\u8005",description:"\u4f5c\u8005 - ContributorFinder"},d=void 0,l={unversionedId:"developer-guide/theme/finder-apis/contributor",id:"version-2.2/developer-guide/theme/finder-apis/contributor",title:"\u4f5c\u8005",description:"\u4f5c\u8005 - ContributorFinder",source:"@site/versioned_docs/version-2.2/developer-guide/theme/finder-apis/contributor.md",sourceDirName:"developer-guide/theme/finder-apis",slug:"/developer-guide/theme/finder-apis/contributor",permalink:"/2.2/developer-guide/theme/finder-apis/contributor",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.2/developer-guide/theme/finder-apis/contributor.md",tags:[],version:"2.2",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{title:"\u4f5c\u8005",description:"\u4f5c\u8005 - ContributorFinder"},sidebar:"tutorialSidebar",previous:{title:"\u8bc4\u8bba",permalink:"/2.2/developer-guide/theme/finder-apis/comment"},next:{title:"\u5bfc\u822a\u83dc\u5355",permalink:"/2.2/developer-guide/theme/finder-apis/menu"}},u={},s=[{value:"getContributor(name)",id:"getcontributorname",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"getContributors(names)",id:"getcontributorsnames",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-1",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-1",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:3},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",level:2},{value:"ContributorVo",id:"contributorvo",level:3}],p={toc:s};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getcontributorname"},"getContributor(name)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"contributorFinder.getContributor(name)\n")),(0,i.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"\u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.name")," \u83b7\u53d6\u4f5c\u8005\u3002"),(0,i.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"name:string")," - \u4f5c\u8005\u7684\u552f\u4e00\u6807\u8bc6 ",(0,i.kt)("inlineCode",{parentName:"li"},"metadata.name"),"\u3002")),(0,i.kt)("h3",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#contributorvo"},"#ContributorVo")),(0,i.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div th:with="contributor = ${contributorFinder.getContributor(\'contributor-foo\')}">\n  <h1 th:text="${contributor.displayName}"></h1>\n</div>\n')),(0,i.kt)("h2",{id:"getcontributorsnames"},"getContributors(names)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"contributorFinder.getContributors(names)\n")),(0,i.kt)("h3",{id:"\u63cf\u8ff0-1"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"\u6839\u636e\u4e00\u7ec4 ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.name")," \u83b7\u53d6\u4f5c\u8005\u3002"),(0,i.kt)("h3",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"names:List<string>")," - \u4f5c\u8005\u7684\u552f\u4e00\u6807\u8bc6 ",(0,i.kt)("inlineCode",{parentName:"li"},"metadata.name")," \u7684\u96c6\u5408\u3002")),(0,i.kt)("h3",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,i.kt)("p",null,"List<",(0,i.kt)("a",{parentName:"p",href:"#contributorvo"},"#ContributorVo"),">"),(0,i.kt)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div th:with="contributors = ${contributorFinder.getContributors([\'contributor-foo, \'contributor-bar\'])}">\n  <span th:each="contributor : ${contributors}" th:text="${contributor.displayName}"></span>\n</div>\n')),(0,i.kt)("h2",{id:"\u7c7b\u578b\u5b9a\u4e49"},"\u7c7b\u578b\u5b9a\u4e49"),(0,i.kt)("h3",{id:"contributorvo"},"ContributorVo"),(0,i.kt)(n.default,{mdxType:"ContributorVo"}))}m.isMDXComponent=!0},24581:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>d,toc:()=>u});var r=o(96600),i=(o(59496),o(49613));o(26401);const n={},a=void 0,d={unversionedId:"developer-guide/theme/vo/ContributorVo",id:"version-2.2/developer-guide/theme/vo/ContributorVo",title:"ContributorVo",description:"",source:"@site/versioned_docs/version-2.2/developer-guide/theme/vo/ContributorVo.md",sourceDirName:"developer-guide/theme/vo",slug:"/developer-guide/theme/vo/ContributorVo",permalink:"/2.2/developer-guide/theme/vo/ContributorVo",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.2/developer-guide/theme/vo/ContributorVo.md",tags:[],version:"2.2",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{}},l={},u=[],s={toc:u};function p(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="ContributorVo"',title:'"ContributorVo"'},'{\n  "name": "string",                                   // \u7528\u6237\u540d\n  "displayName": "string",                            // \u663e\u793a\u540d\u79f0\n  "avatar": "string",                                 // \u5934\u50cf\n  "bio": "string",                                    // \u63cf\u8ff0\n  "permalink": "string"                               // \u4f5c\u8005\u7684\u6587\u7ae0\u5f52\u6863\u9875\u9762\u94fe\u63a5\n}\n')))}p.isMDXComponent=!0}}]);