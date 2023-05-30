"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[17425,206],{53503:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>g,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=a(96600),o=(a(59496),a(49613)),i=(a(26401),a(76799));const l={title:"\u6587\u7ae0\u5206\u7c7b\u96c6\u5408",description:"categories.html - /categories"},n=void 0,s={unversionedId:"developer-guide/theme/template-variables/categories",id:"version-2.5/developer-guide/theme/template-variables/categories",title:"\u6587\u7ae0\u5206\u7c7b\u96c6\u5408",description:"categories.html - /categories",source:"@site/versioned_docs/version-2.5/developer-guide/theme/template-variables/categories.md",sourceDirName:"developer-guide/theme/template-variables",slug:"/developer-guide/theme/template-variables/categories",permalink:"/developer-guide/theme/template-variables/categories",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.5/developer-guide/theme/template-variables/categories.md",tags:[],version:"2.5",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{title:"\u6587\u7ae0\u5206\u7c7b\u96c6\u5408",description:"categories.html - /categories"},sidebar:"tutorialSidebar",previous:{title:"\u6807\u7b7e\u5f52\u6863",permalink:"/developer-guide/theme/template-variables/tag"},next:{title:"\u5206\u7c7b\u5f52\u6863",permalink:"/developer-guide/theme/template-variables/category"}},d={},p=[{value:"\u8def\u7531\u4fe1\u606f",id:"\u8def\u7531\u4fe1\u606f",level:2},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:2},{value:"categories",id:"categories",level:3},{value:"\u53d8\u91cf\u7c7b\u578b",id:"\u53d8\u91cf\u7c7b\u578b",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"_templateId",id:"_templateid",level:3},{value:"\u53d8\u91cf\u503c",id:"\u53d8\u91cf\u503c",level:4},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",level:2},{value:"CategoryTreeVo",id:"categorytreevo",level:3}],m={toc:p};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u8def\u7531\u4fe1\u606f"},"\u8def\u7531\u4fe1\u606f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6a21\u677f\u8def\u5f84\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"/templates/categories.html")),(0,o.kt)("li",{parentName:"ul"},"\u8bbf\u95ee\u8def\u5f84\uff1a",(0,o.kt)("inlineCode",{parentName:"li"},"/categories"))),(0,o.kt)("h2",{id:"\u53d8\u91cf"},"\u53d8\u91cf"),(0,o.kt)("h3",{id:"categories"},"categories"),(0,o.kt)("h4",{id:"\u53d8\u91cf\u7c7b\u578b"},"\u53d8\u91cf\u7c7b\u578b"),(0,o.kt)("p",null,"List<",(0,o.kt)("a",{parentName:"p",href:"#categorytreevo"},"#CategoryTreeVo"),">"),(0,o.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="/templates/categories.html"',title:'"/templates/categories.html"'},'<ul>\n  <li th:replace="~{modules/category-tree :: single(categories=${categories})}" />\n</ul>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="/templates/category-tree.html"',title:'"/templates/category-tree.html"'},'<ul th:fragment="next (categories)">\n  <li th:fragment="single (categories)" th:each="category : ${categories}">\n    <a th:href="@{${category.status.permalink}}">\n      <span th:text="${category.spec.displayName}"> </span>\n    </a>\n    <th:block th:if="${not #lists.isEmpty(category.children)}">\n      <th:block th:replace="~{modules/category-tree :: next (categories=${category.children})}"></th:block>\n    </th:block>\n  </li>\n</ul>\n')),(0,o.kt)("h3",{id:"_templateid"},"_templateId"),(0,o.kt)("h4",{id:"\u53d8\u91cf\u503c"},"\u53d8\u91cf\u503c"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"categories")),(0,o.kt)("h2",{id:"\u7c7b\u578b\u5b9a\u4e49"},"\u7c7b\u578b\u5b9a\u4e49"),(0,o.kt)("h3",{id:"categorytreevo"},"CategoryTreeVo"),(0,o.kt)(i.default,{mdxType:"CategoryTreeVo"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#categorytreevo"},"#CategoryTreeVo"))))}g.isMDXComponent=!0},76799:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>n,toc:()=>d});var r=a(96600),o=(a(59496),a(49613));a(26401);const i={},l=void 0,n={unversionedId:"developer-guide/theme/vo/CategoryTreeVo",id:"version-2.5/developer-guide/theme/vo/CategoryTreeVo",title:"CategoryTreeVo",description:"",source:"@site/versioned_docs/version-2.5/developer-guide/theme/vo/CategoryTreeVo.md",sourceDirName:"developer-guide/theme/vo",slug:"/developer-guide/theme/vo/CategoryTreeVo",permalink:"/developer-guide/theme/vo/CategoryTreeVo",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.5/developer-guide/theme/vo/CategoryTreeVo.md",tags:[],version:"2.5",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{}},s={},d=[],p={toc:d};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="CategoryTreeVo"',title:'"CategoryTreeVo"'},'{\n  "metadata": {\n    "name": "string",                                   // \u552f\u4e00\u6807\u8bc6\n    "labels": {\n      "additionalProp1": "string"\n    },\n    "annotations": {\n      "additionalProp1": "string"\n    },\n    "creationTimestamp": "2022-11-20T14:18:49.230Z",    // \u521b\u5efa\u65f6\u95f4\n  },\n  "spec": {\n    "displayName": "string",                            // \u663e\u793a\u540d\u79f0\n    "slug": "string",                                   // \u522b\u540d\uff0c\u901a\u5e38\u7528\u4e8e\u751f\u6210 status.permalink\n    "description": "string",                            // \u63cf\u8ff0\n    "cover": "string",                                  // \u5c01\u9762\u56fe\n    "template": "string",                               // \u81ea\u5b9a\u4e49\u6e32\u67d3\u6a21\u677f\u540d\u79f0\n    "priority": 0,                                      // \u6392\u5e8f\u5b57\u6bb5\n    "children": [                                       // \u4e0b\u7ea7\u5206\u7c7b\uff0c\u5206\u7c7b\u7684 metadata.name \u96c6\u5408\n      "string"\n    ]\n  },\n  "status": {\n    "permalink": "string",                              // \u56fa\u5b9a\u94fe\u63a5\n    "postCount": 0,                                     // \u6587\u7ae0\u6570\n    "visiblePostCount": 0                               // \u5df2\u53d1\u5e03\u6587\u7ae0\u6570\n  },\n  "children": "List<#CategoryTreeVo>",                  // \u4e0b\u7ea7\u5206\u7c7b\uff0cCategoryTreeVo \u7684\u96c6\u5408\n  "parentName": "string",\n  "postCount": 0\n}\n')))}m.isMDXComponent=!0}}]);