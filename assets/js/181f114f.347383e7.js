"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[92559,47858,15154],{92138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var n=a(96600),r=(a(59496),a(49613)),l=(a(26401),a(85148)),i=a(59358);const o={title:"\u6587\u7ae0\u5206\u7c7b",description:"\u6587\u7ae0\u5206\u7c7b - CategoryFinder"},s=void 0,d={unversionedId:"developer-guide/theme/finder-apis/category",id:"version-2.2/developer-guide/theme/finder-apis/category",title:"\u6587\u7ae0\u5206\u7c7b",description:"\u6587\u7ae0\u5206\u7c7b - CategoryFinder",source:"@site/versioned_docs/version-2.2/developer-guide/theme/finder-apis/category.md",sourceDirName:"developer-guide/theme/finder-apis",slug:"/developer-guide/theme/finder-apis/category",permalink:"/2.2/developer-guide/theme/finder-apis/category",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.2/developer-guide/theme/finder-apis/category.md",tags:[],version:"2.2",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{title:"\u6587\u7ae0\u5206\u7c7b",description:"\u6587\u7ae0\u5206\u7c7b - CategoryFinder"},sidebar:"tutorialSidebar",previous:{title:"Finder API",permalink:"/2.2/developer-guide/theme/finder-apis"},next:{title:"\u6587\u7ae0\u6807\u7b7e",permalink:"/2.2/developer-guide/theme/finder-apis/tag"}},g={},p=[{value:"getByName(name)",id:"getbynamename",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"getByNames(names)",id:"getbynamesnames",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-1",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-1",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:3},{value:"list(page,size)",id:"listpagesize",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-2",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-2",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:3},{value:"listAll()",id:"listall",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-3",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-3",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-3",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-3",level:3},{value:"listAsTree()",id:"listastree",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-4",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-4",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-4",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-4",level:3},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",level:2},{value:"CategoryVo",id:"categoryvo",level:3},{value:"ListResult&lt;CategoryVo&gt;",id:"listresultcategoryvo",level:3},{value:"CategoryTreeVo",id:"categorytreevo",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"getbynamename"},"getByName(name)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"categoryFinder.getByName(name)\n")),(0,r.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"\u6839\u636e ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.name")," \u83b7\u53d6\u6587\u7ae0\u5206\u7c7b\u3002"),(0,r.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"name:string")," - \u5206\u7c7b\u7684\u552f\u4e00\u6807\u8bc6 ",(0,r.kt)("inlineCode",{parentName:"li"},"metadata.name"),"\u3002")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#categoryvo"},"#CategoryVo")),(0,r.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div th:with="category = ${categoryFinder.getByName(\'category-foo\')}">\n  <a th:href="@{${category.status.permalink}}" th:text="${category.spec.displayName}"></a>\n</div>\n')),(0,r.kt)("h2",{id:"getbynamesnames"},"getByNames(names)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"categoryFinder.getByNames(names)\n")),(0,r.kt)("h3",{id:"\u63cf\u8ff0-1"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"\u6839\u636e\u4e00\u7ec4 ",(0,r.kt)("inlineCode",{parentName:"p"},"metadata.name")," \u83b7\u53d6\u6587\u7ae0\u5206\u7c7b\u3002"),(0,r.kt)("h3",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"names:List<string>")," - \u5206\u7c7b\u7684\u552f\u4e00\u6807\u8bc6 ",(0,r.kt)("inlineCode",{parentName:"li"},"metadata.name")," \u7684\u96c6\u5408\u3002")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,r.kt)("p",null,"List<",(0,r.kt)("a",{parentName:"p",href:"#categoryvo"},"#CategoryVo"),">"),(0,r.kt)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div th:with="categories = ${categoryFinder.getByNames([\'category-foo\', \'category-bar\'])}">\n  <a th:each="category : ${categories}" th:href="@{${category.status.permalink}}" th:text="${category.spec.displayName}"></a>\n</div>\n')),(0,r.kt)("h2",{id:"listpagesize"},"list(page,size)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"categoryFinder.list(page,size)\n")),(0,r.kt)("h3",{id:"\u63cf\u8ff0-2"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"\u6839\u636e\u5206\u9875\u53c2\u6570\u83b7\u53d6\u5206\u7c7b\u5217\u8868\u3002"),(0,r.kt)("h3",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"page:int")," - \u5206\u9875\u9875\u7801\uff0c\u4ece 1 \u5f00\u59cb"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"size:int")," - \u5206\u9875\u6761\u6570")),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"#listresultcategoryvo"},"#ListResult<CategoryVo",">")),(0,r.kt)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ul th:with="categories = ${categoryFinder.list(1,10)}">\n  <li th:each="category : ${categories.items}">\n    <a th:href="@{${category.status.permalink}}" th:text="${category.spec.displayName}"></a>\n  </li>\n</ul>\n')),(0,r.kt)("h2",{id:"listall"},"listAll()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"categoryFinder.listAll()\n")),(0,r.kt)("h3",{id:"\u63cf\u8ff0-3"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"\u83b7\u53d6\u6240\u6709\u6587\u7ae0\u5206\u7c7b\u3002"),(0,r.kt)("h3",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c"),(0,r.kt)("p",null,"List<",(0,r.kt)("a",{parentName:"p",href:"#categoryvo"},"#CategoryVo"),">"),(0,r.kt)("h3",{id:"\u793a\u4f8b-3"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<ul th:with="categories = ${categoryFinder.listAll()}">\n  <li th:each="category : ${categories}">\n    <a th:href="@{${category.status.permalink}}" th:text="${category.spec.displayName}"></a>\n  </li>\n</ul>\n')),(0,r.kt)("h2",{id:"listastree"},"listAsTree()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"categoryFinder.listAsTree()\n")),(0,r.kt)("h3",{id:"\u63cf\u8ff0-4"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"\u83b7\u53d6\u6240\u6709\u6587\u7ae0\u5206\u7c7b\u7684\u591a\u5c42\u7ea7\u7ed3\u6784\u3002"),(0,r.kt)("h3",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,r.kt)("p",null,"\u65e0"),(0,r.kt)("h3",{id:"\u8fd4\u56de\u503c-4"},"\u8fd4\u56de\u503c"),(0,r.kt)("p",null,"List<",(0,r.kt)("a",{parentName:"p",href:"#categorytreevo"},"#CategoryTreeVo"),">"),(0,r.kt)("h3",{id:"\u793a\u4f8b-4"},"\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<div th:with="categories = ${categoryFinder.listAsTree()}">\n  <ul>\n    <li th:replace="~{modules/category-tree :: single(categories=${categories})}" />\n  </ul>\n</div>\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="/templates/category-tree.html"',title:'"/templates/category-tree.html"'},'<ul th:fragment="next (categories)">\n  <li th:fragment="single (categories)" th:each="category : ${categories}">\n    <a th:href="@{${category.status.permalink}}">\n      <span th:text="${category.spec.displayName}"> </span>\n    </a>\n    <th:block th:if="${not #lists.isEmpty(category.children)}">\n      <th:block th:replace="~{modules/category-tree :: next (categories=${category.children})}"></th:block>\n    </th:block>\n  </li>\n</ul>\n')),(0,r.kt)("h2",{id:"\u7c7b\u578b\u5b9a\u4e49"},"\u7c7b\u578b\u5b9a\u4e49"),(0,r.kt)("h3",{id:"categoryvo"},"CategoryVo"),(0,r.kt)(l.default,{mdxType:"CategoryVo"}),(0,r.kt)("h3",{id:"listresultcategoryvo"},"ListResult<CategoryVo",">"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="ListResult<CategoryVo>"',title:'"ListResult<CategoryVo>"'},'{\n  "page": 0,                                   // \u5f53\u524d\u9875\u7801\n  "size": 0,                                   // \u6bcf\u9875\u6761\u6570\n  "total": 0,                                  // \u603b\u6761\u6570\n  "items": "List<#CategoryVo>",                // \u5206\u7c7b\u5217\u8868\u6570\u636e\n  "first": true,                               // \u662f\u5426\u4e3a\u7b2c\u4e00\u9875\n  "last": true,                                // \u662f\u5426\u4e3a\u6700\u540e\u4e00\u9875\n  "hasNext": true,                             // \u662f\u5426\u6709\u4e0b\u4e00\u9875\n  "hasPrevious": true,                         // \u662f\u5426\u6709\u4e0a\u4e00\u9875\n  "totalPages": 0                              // \u603b\u9875\u6570\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#categoryvo"},"#CategoryVo"))),(0,r.kt)("h3",{id:"categorytreevo"},"CategoryTreeVo"),(0,r.kt)(i.default,{mdxType:"CategoryTreeVo"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#categorytreevo"},"#CategoryTreeVo"))))}u.isMDXComponent=!0},59358:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(96600),r=(a(59496),a(49613));a(26401);const l={},i=void 0,o={unversionedId:"developer-guide/theme/vo/CategoryTreeVo",id:"version-2.2/developer-guide/theme/vo/CategoryTreeVo",title:"CategoryTreeVo",description:"",source:"@site/versioned_docs/version-2.2/developer-guide/theme/vo/CategoryTreeVo.md",sourceDirName:"developer-guide/theme/vo",slug:"/developer-guide/theme/vo/CategoryTreeVo",permalink:"/2.2/developer-guide/theme/vo/CategoryTreeVo",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.2/developer-guide/theme/vo/CategoryTreeVo.md",tags:[],version:"2.2",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{}},s={},d=[],g={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="CategoryTreeVo"',title:'"CategoryTreeVo"'},'{\n  "metadata": {\n    "name": "string",                                   // \u552f\u4e00\u6807\u8bc6\n    "labels": {\n      "additionalProp1": "string"\n    },\n    "annotations": {\n      "additionalProp1": "string"\n    },\n    "creationTimestamp": "2022-11-20T14:18:49.230Z",    // \u521b\u5efa\u65f6\u95f4\n  },\n  "spec": {\n    "displayName": "string",                            // \u663e\u793a\u540d\u79f0\n    "slug": "string",                                   // \u522b\u540d\uff0c\u901a\u5e38\u7528\u4e8e\u751f\u6210 status.permalink\n    "description": "string",                            // \u63cf\u8ff0\n    "cover": "string",                                  // \u5c01\u9762\u56fe\n    "template": "string",                               // \u81ea\u5b9a\u4e49\u6e32\u67d3\u6a21\u677f\u540d\u79f0\n    "priority": 0,                                      // \u6392\u5e8f\u5b57\u6bb5\n    "children": [                                       // \u4e0b\u7ea7\u5206\u7c7b\uff0c\u5206\u7c7b\u7684 metadata.name \u96c6\u5408\n      "string"\n    ]\n  },\n  "status": {\n    "permalink": "string",                              // \u56fa\u5b9a\u94fe\u63a5\n    "postCount": 0,                                     // \u6587\u7ae0\u6570\n    "visiblePostCount": 0                               // \u5df2\u53d1\u5e03\u6587\u7ae0\u6570\n  },\n  "children": "List<#CategoryTreeVo>",                  // \u4e0b\u7ea7\u5206\u7c7b\uff0cCategoryTreeVo \u7684\u96c6\u5408\n  "parentName": "string",\n  "postCount": 0\n}\n')))}p.isMDXComponent=!0},85148:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(96600),r=(a(59496),a(49613));a(26401);const l={},i=void 0,o={unversionedId:"developer-guide/theme/vo/CategoryVo",id:"version-2.2/developer-guide/theme/vo/CategoryVo",title:"CategoryVo",description:"",source:"@site/versioned_docs/version-2.2/developer-guide/theme/vo/CategoryVo.md",sourceDirName:"developer-guide/theme/vo",slug:"/developer-guide/theme/vo/CategoryVo",permalink:"/2.2/developer-guide/theme/vo/CategoryVo",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.2/developer-guide/theme/vo/CategoryVo.md",tags:[],version:"2.2",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{}},s={},d=[],g={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="CategoryVo"',title:'"CategoryVo"'},'{\n  "metadata": {\n    "name": "string",                                   // \u552f\u4e00\u6807\u8bc6\n    "labels": {\n      "additionalProp1": "string"\n    },\n    "annotations": {\n      "additionalProp1": "string"\n    },\n    "creationTimestamp": "2022-11-20T13:06:38.512Z",    // \u521b\u5efa\u65f6\u95f4\n  },\n  "spec": {\n    "displayName": "string",                            // \u663e\u793a\u540d\u79f0\n    "slug": "string",                                   // \u522b\u540d\uff0c\u901a\u5e38\u7528\u4e8e\u751f\u6210 status.permalink\n    "description": "string",                            // \u63cf\u8ff0\n    "cover": "string",                                  // \u5c01\u9762\u56fe\n    "template": "string",                               // \u81ea\u5b9a\u4e49\u6e32\u67d3\u6a21\u677f\u540d\u79f0\n    "priority": 0,                                      // \u6392\u5e8f\u5b57\u6bb5\n    "children": [                                       // \u4e0b\u7ea7\u5206\u7c7b\uff0c\u5206\u7c7b\u7684 metadata.name \u96c6\u5408\n      "string"\n    ]\n  },\n  "status": {\n    "permalink": "string",                              // \u56fa\u5b9a\u94fe\u63a5\n    "postCount": 0,                                     // \u6587\u7ae0\u6570\n    "visiblePostCount": 0                               // \u5df2\u53d1\u5e03\u6587\u7ae0\u6570\n  },\n  "postCount": 0\n}\n')))}p.isMDXComponent=!0}}]);