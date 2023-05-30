"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[34567,2676,98125,50511,65822],{63198:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>c,frontMatter:()=>d,metadata:()=>m,toc:()=>g});var n=o(96600),a=(o(59496),o(49613)),i=(o(26401),o(76940)),s=o(23139),r=o(343),l=o(60403);const d={title:"\u6807\u7b7e\u5f52\u6863",description:"tag.html - /tags/:slug"},p=void 0,m={unversionedId:"developer-guide/theme/template-variables/tag",id:"version-2.5/developer-guide/theme/template-variables/tag",title:"\u6807\u7b7e\u5f52\u6863",description:"tag.html - /tags/:slug",source:"@site/versioned_docs/version-2.5/developer-guide/theme/template-variables/tag.md",sourceDirName:"developer-guide/theme/template-variables",slug:"/developer-guide/theme/template-variables/tag",permalink:"/developer-guide/theme/template-variables/tag",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.5/developer-guide/theme/template-variables/tag.md",tags:[],version:"2.5",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{title:"\u6807\u7b7e\u5f52\u6863",description:"tag.html - /tags/:slug"},sidebar:"tutorialSidebar",previous:{title:"\u6587\u7ae0\u6807\u7b7e\u96c6\u5408",permalink:"/developer-guide/theme/template-variables/tags"},next:{title:"\u6587\u7ae0\u5206\u7c7b\u96c6\u5408",permalink:"/developer-guide/theme/template-variables/categories"}},u={},g=[{value:"\u8def\u7531\u4fe1\u606f",id:"\u8def\u7531\u4fe1\u606f",level:2},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:2},{value:"tag",id:"tag",level:3},{value:"\u53d8\u91cf\u7c7b\u578b",id:"\u53d8\u91cf\u7c7b\u578b",level:4},{value:"posts",id:"posts",level:3},{value:"\u53d8\u91cf\u7c7b\u578b",id:"\u53d8\u91cf\u7c7b\u578b-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"_templateId",id:"_templateid",level:3},{value:"\u53d8\u91cf\u503c",id:"\u53d8\u91cf\u503c",level:4},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",level:2},{value:"CategoryVo",id:"categoryvo",level:3},{value:"TagVo",id:"tagvo",level:3},{value:"ContributorVo",id:"contributorvo",level:3},{value:"ListedPostVo",id:"listedpostvo",level:3},{value:"UrlContextListResult&lt;ListedPostVo&gt;",id:"urlcontextlistresultlistedpostvo",level:3}],v={toc:g};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},v,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8def\u7531\u4fe1\u606f"},"\u8def\u7531\u4fe1\u606f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6a21\u677f\u8def\u5f84\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"/templates/tag.html")),(0,a.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u8def\u5f84\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},"/tags/:slug"))),(0,a.kt)("h2",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,a.kt)("h3",{id:"tag"},"tag"),(0,a.kt)("h4",{id:"\u53d8\u91cf\u7c7b\u578b"},"\u53d8\u91cf\u7c7b\u578b"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#tagvo"},"#TagVo")),(0,a.kt)("h3",{id:"posts"},"posts"),(0,a.kt)("h4",{id:"\u53d8\u91cf\u7c7b\u578b-1"},"\u53d8\u91cf\u7c7b\u578b"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"#urlcontextlistresultlistedpostvo"},"#UrlContextListResult<ListedPostVo",">")),(0,a.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="/templates/tag.html"',title:'"/templates/tag.html"'},'<div>\n  <h1 th:text="${tag.spec.displayName}"></h1>\n  <ul>\n    <li th:each="post : ${posts.items}">\n      <a\n        th:text="${post.spec.title}"\n        th:href="${post.status.permalink}"\n      ></a>\n    </li>\n  </ul>\n  <div th:if="${posts.hasPrevious() || posts.hasNext()}">\n    <a\n      th:href="@{${posts.prevUrl}}"\n    >\n      <span>\u4e0a\u4e00\u9875</span>\n    </a>\n    <span th:text="${posts.page} +\' / \'+ ${posts.total}"></span>\n    <a\n      th:href="@{${posts.nextUrl}}"\n    >\n      <span>\u4e0b\u4e00\u9875</span>\n    </a>\n  </div>\n</div>\n')),(0,a.kt)("h3",{id:"_templateid"},"_templateId"),(0,a.kt)("h4",{id:"\u53d8\u91cf\u503c"},"\u53d8\u91cf\u503c"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tag")),(0,a.kt)("h2",{id:"\u7c7b\u578b\u5b9a\u4e49"},"\u7c7b\u578b\u5b9a\u4e49"),(0,a.kt)("h3",{id:"categoryvo"},"CategoryVo"),(0,a.kt)(i.default,{mdxType:"CategoryVo"}),(0,a.kt)("h3",{id:"tagvo"},"TagVo"),(0,a.kt)(s.default,{mdxType:"TagVo"}),(0,a.kt)("h3",{id:"contributorvo"},"ContributorVo"),(0,a.kt)(r.default,{mdxType:"ContributorVo"}),(0,a.kt)("h3",{id:"listedpostvo"},"ListedPostVo"),(0,a.kt)(l.default,{mdxType:"ListedPostVo"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#categoryvo"},"#CategoryVo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#tagvo"},"#TagVo")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#contributorvo"},"#ContributorVo"))),(0,a.kt)("h3",{id:"urlcontextlistresultlistedpostvo"},"UrlContextListResult<ListedPostVo",">"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="UrlContextListResult<ListedPostVo>"',title:'"UrlContextListResult<ListedPostVo>"'},'{\n  "page": 0,                                   // \u5f53\u524d\u9875\u7801\n  "size": 0,                                   // \u6bcf\u9875\u6761\u6570\n  "total": 0,                                  // \u603b\u6761\u6570\n  "items": "List<#ListedPostVo>",              // \u6587\u7ae0\u5217\u8868\u6570\u636e\n  "first": true,                               // \u662f\u5426\u4e3a\u7b2c\u4e00\u9875\n  "last": true,                                // \u662f\u5426\u4e3a\u6700\u540e\u4e00\u9875\n  "hasNext": true,                             // \u662f\u5426\u6709\u4e0b\u4e00\u9875\n  "hasPrevious": true,                         // \u662f\u5426\u6709\u4e0a\u4e00\u9875\n  "totalPages": 0,                             // \u603b\u9875\u6570\n  "nextUrl": "string",                         // \u4e0b\u4e00\u9875\u94fe\u63a5\n  "prevUrl": "string"                          // \u4e0a\u4e00\u9875\u94fe\u63a5\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#listedpostvo"},"#ListedPostVo"))))}c.isMDXComponent=!0},76940:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=o(96600),a=(o(59496),o(49613));o(26401);const i={},s=void 0,r={unversionedId:"developer-guide/theme/vo/CategoryVo",id:"version-2.5/developer-guide/theme/vo/CategoryVo",title:"CategoryVo",description:"",source:"@site/versioned_docs/version-2.5/developer-guide/theme/vo/CategoryVo.md",sourceDirName:"developer-guide/theme/vo",slug:"/developer-guide/theme/vo/CategoryVo",permalink:"/developer-guide/theme/vo/CategoryVo",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.5/developer-guide/theme/vo/CategoryVo.md",tags:[],version:"2.5",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{}},l={},d=[],p={toc:d};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="CategoryVo"',title:'"CategoryVo"'},'{\n  "metadata": {\n    "name": "string",                                   // \u552f\u4e00\u6807\u8bc6\n    "labels": {\n      "additionalProp1": "string"\n    },\n    "annotations": {\n      "additionalProp1": "string"\n    },\n    "creationTimestamp": "2022-11-20T13:06:38.512Z",    // \u521b\u5efa\u65f6\u95f4\n  },\n  "spec": {\n    "displayName": "string",                            // \u663e\u793a\u540d\u79f0\n    "slug": "string",                                   // \u522b\u540d\uff0c\u901a\u5e38\u7528\u4e8e\u751f\u6210 status.permalink\n    "description": "string",                            // \u63cf\u8ff0\n    "cover": "string",                                  // \u5c01\u9762\u56fe\n    "template": "string",                               // \u81ea\u5b9a\u4e49\u6e32\u67d3\u6a21\u677f\u540d\u79f0\n    "priority": 0,                                      // \u6392\u5e8f\u5b57\u6bb5\n    "children": [                                       // \u4e0b\u7ea7\u5206\u7c7b\uff0c\u5206\u7c7b\u7684 metadata.name \u96c6\u5408\n      "string"\n    ]\n  },\n  "status": {\n    "permalink": "string",                              // \u56fa\u5b9a\u94fe\u63a5\n    "postCount": 0,                                     // \u6587\u7ae0\u6570\n    "visiblePostCount": 0                               // \u5df2\u53d1\u5e03\u6587\u7ae0\u6570\n  },\n  "postCount": 0\n}\n')))}m.isMDXComponent=!0},343:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=o(96600),a=(o(59496),o(49613));o(26401);const i={},s=void 0,r={unversionedId:"developer-guide/theme/vo/ContributorVo",id:"version-2.5/developer-guide/theme/vo/ContributorVo",title:"ContributorVo",description:"",source:"@site/versioned_docs/version-2.5/developer-guide/theme/vo/ContributorVo.md",sourceDirName:"developer-guide/theme/vo",slug:"/developer-guide/theme/vo/ContributorVo",permalink:"/developer-guide/theme/vo/ContributorVo",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.5/developer-guide/theme/vo/ContributorVo.md",tags:[],version:"2.5",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{}},l={},d=[],p={toc:d};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="ContributorVo"',title:'"ContributorVo"'},'{\n  "name": "string",                                   // \u7528\u6237\u540d\n  "displayName": "string",                            // \u663e\u793a\u540d\u79f0\n  "avatar": "string",                                 // \u5934\u50cf\n  "bio": "string",                                    // \u63cf\u8ff0\n  "permalink": "string"                               // \u4f5c\u8005\u7684\u6587\u7ae0\u5f52\u6863\u9875\u9762\u94fe\u63a5\n}\n')))}m.isMDXComponent=!0},60403:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=o(96600),a=(o(59496),o(49613));o(26401);const i={},s=void 0,r={unversionedId:"developer-guide/theme/vo/ListedPostVo",id:"version-2.5/developer-guide/theme/vo/ListedPostVo",title:"ListedPostVo",description:"",source:"@site/versioned_docs/version-2.5/developer-guide/theme/vo/ListedPostVo.md",sourceDirName:"developer-guide/theme/vo",slug:"/developer-guide/theme/vo/ListedPostVo",permalink:"/developer-guide/theme/vo/ListedPostVo",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.5/developer-guide/theme/vo/ListedPostVo.md",tags:[],version:"2.5",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{}},l={},d=[],p={toc:d};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="ListedPostVo"',title:'"ListedPostVo"'},'{\n  "metadata": {\n    "name": "string",                                   // \u552f\u4e00\u6807\u8bc6\n    "labels": {\n      "additionalProp1": "string"\n    },\n    "annotations": {\n      "additionalProp1": "string"\n    },\n    "creationTimestamp": "2022-11-20T13:06:38.505Z",    // \u521b\u5efa\u65f6\u95f4\n  },\n  "spec": {\n    "title": "string",                                  // \u6807\u9898\n    "slug": "string",                                   // \u522b\u540d\uff0c\u901a\u5e38\u7528\u4e8e\u751f\u6210 status.permalink\n    "releaseSnapshot": "string",\n    "headSnapshot": "string",\n    "baseSnapshot": "string",\n    "owner": "string",                                  // \u521b\u5efa\u8005\u540d\u79f0\uff0c\u5373 ContributorVo \u7684 metadata.name\uff0c\u975e\u663e\u793a\u540d\u79f0\n    "template": "string",                               // \u81ea\u5b9a\u4e49\u6e32\u67d3\u6a21\u677f\n    "cover": "string",                                  // \u5c01\u9762\u56fe\n    "deleted": false,\n    "publish": false,\n    "publishTime": "2022-11-20T13:06:38.505Z",          // \u53d1\u5e03\u65f6\u95f4\n    "pinned": false,                                    // \u662f\u5426\u7f6e\u9876\n    "allowComment": true,                               // \u662f\u5426\u5141\u8bb8\u8bc4\u8bba\n    "visible": "PUBLIC",\n    "priority": 0,\n    "excerpt": {\n      "autoGenerate": true,                             // \u662f\u5426\u81ea\u52a8\u751f\u6210\u6458\u8981\n      "raw": "string"                                   // \u6458\u8981\u5185\u5bb9\n    },\n    "categories": [                                     // \u5206\u7c7b\u7684\u540d\u79f0\u96c6\u5408\uff0c\u5373 Category \u7684 metadata.name \u7684\u96c6\u5408\n      "string"\n    ],\n    "tags": [                                           // \u6807\u7b7e\u7684\u540d\u79f0\u96c6\u5408\uff0c\u5373 Tag \u7684 metadata.name \u7684\u96c6\u5408\n      "string"\n    ],\n    "htmlMetas": [\n      {\n        "additionalProp1": "string"\n      }\n    ]\n  },\n  "status": {\n    "permalink": "string",                              // \u56fa\u5b9a\u94fe\u63a5\n    "excerpt": "string",                                // \u6700\u7ec8\u751f\u6210\u7684\u6458\u8981\n    "inProgress": true,\n    "lastModifyTime": "2022-11-20T13:06:38.505Z",       // \u6700\u540e\u4fee\u6539\u65f6\u95f4\n    "commentsCount": 0,                                 // \u8bc4\u8bba\u6570\n    "contributors": [                                   // \u8d21\u732e\u8005\u540d\u79f0\uff0cContributor \u7684 metadata.name \u7684\u96c6\u5408\n      "string"\n    ]\n  },\n  "categories": "List<#CategoryVo>",                    // \u5206\u7c7b\u7684\u96c6\u5408\n  "tags": "List<#TagVo>",                               // \u6807\u7b7e\u7684\u96c6\u5408\n  "contributors": "List<#ContributorVo>",               // \u8d21\u732e\u8005\u7684\u96c6\u5408\n  "owner": "#ContributorVo",                            // \u521b\u5efa\u8005\n  "stats": {\n    "visit": 0,                                         // \u8bbf\u95ee\u6570\u91cf\n    "upvote": 0,                                        // \u70b9\u8d5e\u6570\u91cf\n    "comment": 0                                        // \u8bc4\u8bba\u6570\u91cf\n  }\n}\n')))}m.isMDXComponent=!0},23139:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var n=o(96600),a=(o(59496),o(49613));o(26401);const i={},s=void 0,r={unversionedId:"developer-guide/theme/vo/TagVo",id:"version-2.5/developer-guide/theme/vo/TagVo",title:"TagVo",description:"",source:"@site/versioned_docs/version-2.5/developer-guide/theme/vo/TagVo.md",sourceDirName:"developer-guide/theme/vo",slug:"/developer-guide/theme/vo/TagVo",permalink:"/developer-guide/theme/vo/TagVo",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.5/developer-guide/theme/vo/TagVo.md",tags:[],version:"2.5",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{}},l={},d=[],p={toc:d};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="TagVo"',title:'"TagVo"'},'{\n  "metadata": {\n    "name": "string",                                   // \u552f\u4e00\u6807\u8bc6\n    "labels": {\n      "additionalProp1": "string"\n    },\n    "annotations": {\n      "additionalProp1": "string"\n    },\n    "creationTimestamp": "2022-11-20T13:06:38.512Z",    // \u521b\u5efa\u65f6\u95f4\n  },\n  "spec": {\n    "displayName": "string",                            // \u663e\u793a\u540d\u79f0\n    "slug": "string",                                   // \u522b\u540d\uff0c\u901a\u5e38\u7528\u4e8e\u751f\u6210 status.permalink\n    "color": "#F9fEB1",                                 // \u80cc\u666f\u989c\u8272\n    "cover": "string"                                   // \u5c01\u9762\u56fe\n  },\n  "status": {\n    "permalink": "string",                              // \u56fa\u5b9a\u94fe\u63a5\n    "visiblePostCount": 0,                              // \u5df2\u53d1\u5e03\u6587\u7ae0\u6570\n    "postCount": 0                                      // \u6587\u7ae0\u6570\n  },\n  "postCount": 0\n}\n')))}m.isMDXComponent=!0}}]);