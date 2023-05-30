"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[28056],{43327:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>n,toc:()=>o});var s=i(96600),a=(i(59496),i(49613));i(26401);const d={title:"\u7ad9\u70b9\u7edf\u8ba1",description:"\u7ad9\u70b9\u7edf\u8ba1 - SiteStatsFinder"},l=void 0,n={unversionedId:"developer-guide/theme/finder-apis/site-stats",id:"version-2.4/developer-guide/theme/finder-apis/site-stats",title:"\u7ad9\u70b9\u7edf\u8ba1",description:"\u7ad9\u70b9\u7edf\u8ba1 - SiteStatsFinder",source:"@site/versioned_docs/version-2.4/developer-guide/theme/finder-apis/site-stats.md",sourceDirName:"developer-guide/theme/finder-apis",slug:"/developer-guide/theme/finder-apis/site-stats",permalink:"/2.4/developer-guide/theme/finder-apis/site-stats",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.4/developer-guide/theme/finder-apis/site-stats.md",tags:[],version:"2.4",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{title:"\u7ad9\u70b9\u7edf\u8ba1",description:"\u7ad9\u70b9\u7edf\u8ba1 - SiteStatsFinder"},sidebar:"tutorialSidebar",previous:{title:"\u5bfc\u822a\u83dc\u5355",permalink:"/2.4/developer-guide/theme/finder-apis/menu"},next:{title:"\u4e3b\u9898",permalink:"/2.4/developer-guide/theme/finder-apis/theme"}},r={},o=[{value:"getStats()",id:"getstats",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",level:2},{value:"SiteStatsVo",id:"sitestatsvo",level:3}],p={toc:o};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,s.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"getstats"},"getStats()"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"siteStatsFinder.getStats()\n")),(0,a.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,"\u83b7\u53d6\u7ad9\u70b9\u7684\u7edf\u8ba1\u4fe1\u606f\u3002"),(0,a.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h3",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#sitestatsvo"},"#SiteStatsVo")),(0,a.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ul th:with="stats = ${siteStatsFinder.getStats()}">\n  <li th:text="${stats.visit}"></li>\n  <li th:text="${stats.post}"></li>\n</ul>\n')),(0,a.kt)("h2",{id:"\u7c7b\u578b\u5b9a\u4e49"},"\u7c7b\u578b\u5b9a\u4e49"),(0,a.kt)("h3",{id:"sitestatsvo"},"SiteStatsVo"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="SiteStatsVo"',title:'"SiteStatsVo"'},'{\n  "visit": 0,                                   // \u8bbf\u95ee\u6570\u91cf\n  "upvote": 0,                                  // \u70b9\u8d5e\u6570\u91cf\n  "comment": 0,                                 // \u8bc4\u8bba\u6570\u91cf\n  "post": 0,                                    // \u6587\u7ae0\u6570\u91cf\n  "category": 0                                 // \u5206\u7c7b\u6570\u91cf\n}\n')))}u.isMDXComponent=!0}}]);