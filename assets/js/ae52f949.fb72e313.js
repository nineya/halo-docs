"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[29954,50511],{47884:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var l=a(96600),i=(a(59496),a(49613)),n=(a(26401),a(23139));const s={title:"\u6587\u7ae0\u6807\u7b7e",description:"\u6587\u7ae0\u6807\u7b7e - TagFinder"},d=void 0,r={unversionedId:"developer-guide/theme/finder-apis/tag",id:"version-2.5/developer-guide/theme/finder-apis/tag",title:"\u6587\u7ae0\u6807\u7b7e",description:"\u6587\u7ae0\u6807\u7b7e - TagFinder",source:"@site/versioned_docs/version-2.5/developer-guide/theme/finder-apis/tag.md",sourceDirName:"developer-guide/theme/finder-apis",slug:"/developer-guide/theme/finder-apis/tag",permalink:"/developer-guide/theme/finder-apis/tag",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.5/developer-guide/theme/finder-apis/tag.md",tags:[],version:"2.5",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{title:"\u6587\u7ae0\u6807\u7b7e",description:"\u6587\u7ae0\u6807\u7b7e - TagFinder"},sidebar:"tutorialSidebar",previous:{title:"\u6587\u7ae0\u5206\u7c7b",permalink:"/developer-guide/theme/finder-apis/category"},next:{title:"\u6587\u7ae0",permalink:"/developer-guide/theme/finder-apis/post"}},o={},p=[{value:"getByName(name)",id:"getbynamename",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:3},{value:"getByNames(names)",id:"getbynamesnames",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-1",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-1",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:3},{value:"list(page,size)",id:"listpagesize",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-2",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-2",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:3},{value:"listAll()",id:"listall",level:2},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-3",level:3},{value:"\u53c2\u6570",id:"\u53c2\u6570-3",level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c-3",level:3},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-3",level:3},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",level:2},{value:"TagVo",id:"tagvo",level:3},{value:"ListResult&lt;TagVo&gt;",id:"listresulttagvo",level:3}],g={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,l.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getbynamename"},"getByName(name)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"tagFinder.getByName(name)\n")),(0,i.kt)("h3",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"\u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.name")," \u83b7\u53d6\u6807\u7b7e\u3002"),(0,i.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"name:string")," - \u6807\u7b7e\u7684\u552f\u4e00\u6807\u8bc6 ",(0,i.kt)("inlineCode",{parentName:"li"},"metadata.name"),"\u3002")),(0,i.kt)("h3",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#tagvo"},"#TagVo")),(0,i.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div th:with="tag = ${tagFinder.getByName(\'tag-foo\')}">\n  <a th:href="@{${tag.status.permalink}}" th:text="${tag.spec.displayName}"></a>\n</div>\n')),(0,i.kt)("h2",{id:"getbynamesnames"},"getByNames(names)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"tagFinder.getByNames(names)\n")),(0,i.kt)("h3",{id:"\u63cf\u8ff0-1"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"\u6839\u636e\u4e00\u7ec4 ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata.name")," \u83b7\u53d6\u6807\u7b7e\u3002"),(0,i.kt)("h3",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"names:List<string>")," - \u6807\u7b7e\u7684\u552f\u4e00\u6807\u8bc6 ",(0,i.kt)("inlineCode",{parentName:"li"},"metadata.name")," \u7684\u96c6\u5408\u3002")),(0,i.kt)("h3",{id:"\u8fd4\u56de\u503c-1"},"\u8fd4\u56de\u503c"),(0,i.kt)("p",null,"List<",(0,i.kt)("a",{parentName:"p",href:"#tagvo"},"#TagVo"),">"),(0,i.kt)("h3",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<div th:with="tags = ${tagFinder.getByNames([\'tag-foo\', \'tag-bar\'])}">\n  <a th:each="tag : ${tags}" th:href="@{${tag.status.permalink}}" th:text="${tag.spec.displayName}"></a>\n</div>\n')),(0,i.kt)("h2",{id:"listpagesize"},"list(page,size)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"tagFinder.list(page,size)\n")),(0,i.kt)("h3",{id:"\u63cf\u8ff0-2"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"\u6839\u636e\u5206\u9875\u53c2\u6570\u83b7\u53d6\u6807\u7b7e\u5217\u8868\u3002"),(0,i.kt)("h3",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"page:int")," - \u5206\u9875\u9875\u7801\uff0c\u4ece 1 \u5f00\u59cb"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"size:int")," - \u5206\u9875\u6761\u6570")),(0,i.kt)("h3",{id:"\u8fd4\u56de\u503c-2"},"\u8fd4\u56de\u503c"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"#listresulttagvo"},"#ListResult<TagVo",">")),(0,i.kt)("h3",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ul th:with="tags = ${tagFinder.list(1,10)}">\n  <li th:each="tag : ${tags.items}">\n    <a th:href="@{${tag.status.permalink}}" th:text="${tag.spec.displayName}"></a>\n  </li>\n</ul>\n')),(0,i.kt)("h2",{id:"listall"},"listAll()"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"tagFinder.listAll()\n")),(0,i.kt)("h3",{id:"\u63cf\u8ff0-3"},"\u63cf\u8ff0"),(0,i.kt)("p",null,"\u83b7\u53d6\u6240\u6709\u6587\u7ae0\u6807\u7b7e\u3002"),(0,i.kt)("h3",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,i.kt)("p",null,"\u65e0"),(0,i.kt)("h3",{id:"\u8fd4\u56de\u503c-3"},"\u8fd4\u56de\u503c"),(0,i.kt)("p",null,"List<",(0,i.kt)("a",{parentName:"p",href:"#tagvo"},"#TagVo"),">"),(0,i.kt)("h3",{id:"\u793a\u4f8b-3"},"\u793a\u4f8b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ul th:with="tags = ${tagFinder.listAll()}">\n  <li th:each="tag : ${tags}">\n    <a th:href="@{${tag.status.permalink}}" th:text="${tag.spec.displayName}"></a>\n  </li>\n</ul>\n')),(0,i.kt)("h2",{id:"\u7c7b\u578b\u5b9a\u4e49"},"\u7c7b\u578b\u5b9a\u4e49"),(0,i.kt)("h3",{id:"tagvo"},"TagVo"),(0,i.kt)(n.default,{mdxType:"TagVo"}),(0,i.kt)("h3",{id:"listresulttagvo"},"ListResult<TagVo",">"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="ListResult<TagVo>"',title:'"ListResult<TagVo>"'},'{\n  "page": 0,                                   // \u5f53\u524d\u9875\u7801\n  "size": 0,                                   // \u6bcf\u9875\u6761\u6570\n  "total": 0,                                  // \u603b\u6761\u6570\n  "items": "List<#TagVo>",                     // \u6807\u7b7e\u5217\u8868\u6570\u636e\n  "first": true,                               // \u662f\u5426\u4e3a\u7b2c\u4e00\u9875\n  "last": true,                                // \u662f\u5426\u4e3a\u6700\u540e\u4e00\u9875\n  "hasNext": true,                             // \u662f\u5426\u6709\u4e0b\u4e00\u9875\n  "hasPrevious": true,                         // \u662f\u5426\u6709\u4e0a\u4e00\u9875\n  "totalPages": 0                              // \u603b\u9875\u6570\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tagvo"},"#TagVo"))))}m.isMDXComponent=!0},23139:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>g,frontMatter:()=>n,metadata:()=>d,toc:()=>o});var l=a(96600),i=(a(59496),a(49613));a(26401);const n={},s=void 0,d={unversionedId:"developer-guide/theme/vo/TagVo",id:"version-2.5/developer-guide/theme/vo/TagVo",title:"TagVo",description:"",source:"@site/versioned_docs/version-2.5/developer-guide/theme/vo/TagVo.md",sourceDirName:"developer-guide/theme/vo",slug:"/developer-guide/theme/vo/TagVo",permalink:"/developer-guide/theme/vo/TagVo",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.5/developer-guide/theme/vo/TagVo.md",tags:[],version:"2.5",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{}},r={},o=[],p={toc:o};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="TagVo"',title:'"TagVo"'},'{\n  "metadata": {\n    "name": "string",                                   // \u552f\u4e00\u6807\u8bc6\n    "labels": {\n      "additionalProp1": "string"\n    },\n    "annotations": {\n      "additionalProp1": "string"\n    },\n    "creationTimestamp": "2022-11-20T13:06:38.512Z",    // \u521b\u5efa\u65f6\u95f4\n  },\n  "spec": {\n    "displayName": "string",                            // \u663e\u793a\u540d\u79f0\n    "slug": "string",                                   // \u522b\u540d\uff0c\u901a\u5e38\u7528\u4e8e\u751f\u6210 status.permalink\n    "color": "#F9fEB1",                                 // \u80cc\u666f\u989c\u8272\n    "cover": "string"                                   // \u5c01\u9762\u56fe\n  },\n  "status": {\n    "permalink": "string",                              // \u56fa\u5b9a\u94fe\u63a5\n    "visiblePostCount": 0,                              // \u5df2\u53d1\u5e03\u6587\u7ae0\u6570\n    "postCount": 0                                      // \u6587\u7ae0\u6570\n  },\n  "postCount": 0\n}\n')))}g.isMDXComponent=!0}}]);