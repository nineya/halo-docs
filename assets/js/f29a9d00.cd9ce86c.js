"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[91702],{61632:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=n(96600),l=(n(59496),n(49613));n(26401);const i={title:"\u5143\u6570\u636e\u8868\u5355\u5b9a\u4e49"},o=void 0,r={unversionedId:"developer-guide/annotations-form",id:"version-2.2/developer-guide/annotations-form",title:"\u5143\u6570\u636e\u8868\u5355\u5b9a\u4e49",description:"\u5728 Halo 2.0\uff0c\u6240\u6709\u7684\u6a21\u578b\u90fd\u5305\u542b\u4e86 metadata.annotations \u5b57\u6bb5\uff0c\u7528\u4e8e\u5b58\u50a8\u5143\u6570\u636e\u4fe1\u606f\u3002\u5143\u6570\u636e\u4fe1\u606f\u53ef\u4ee5\u7528\u4e8e\u5b58\u50a8\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u4fe1\u606f\uff0c\u53ef\u4ee5\u7b49\u540c\u4e8e\u6269\u5c55\u5b57\u6bb5\u3002\u6b64\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Halo \u4e2d\u4e3a\u5177\u4f53\u7684\u6a21\u578b\u5b9a\u4e49\u5143\u6570\u636e\u7f16\u8f91\u8868\u5355\uff0c\u81f3\u4e8e\u5982\u4f55\u5728\u63d2\u4ef6\u6216\u8005\u4e3b\u9898\u6a21\u677f\u4e2d\u4f7f\u7528\uff0c\u8bf7\u770b\u63d2\u4ef6\u6216\u8005\u4e3b\u9898\u7684\u6587\u6863\u3002",source:"@site/versioned_docs/version-2.2/developer-guide/annotations-form.md",sourceDirName:"developer-guide",slug:"/developer-guide/annotations-form",permalink:"/2.2/developer-guide/annotations-form",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.2/developer-guide/annotations-form.md",tags:[],version:"2.2",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{title:"\u5143\u6570\u636e\u8868\u5355\u5b9a\u4e49"},sidebar:"tutorialSidebar",previous:{title:"\u8868\u5355\u5b9a\u4e49",permalink:"/2.2/developer-guide/form-schema"},next:{title:"\u53c2\u4e0e\u8d21\u732e",permalink:"/2.2/category/\u53c2\u4e0e\u8d21\u732e"}},m={},d=[{value:"AnnotationSetting \u8d44\u6e90\u5b9a\u4e49\u65b9\u5f0f",id:"annotationsetting-\u8d44\u6e90\u5b9a\u4e49\u65b9\u5f0f",level:2},{value:"\u4e3a\u591a\u4e2a\u6a21\u578b\u5b9a\u4e49\u8868\u5355",id:"\u4e3a\u591a\u4e2a\u6a21\u578b\u5b9a\u4e49\u8868\u5355",level:2}],p={toc:d};function k(t){let{components:e,...i}=t;return(0,l.kt)("wrapper",(0,a.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5728 Halo 2.0\uff0c\u6240\u6709\u7684\u6a21\u578b\u90fd\u5305\u542b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata.annotations")," \u5b57\u6bb5\uff0c\u7528\u4e8e\u5b58\u50a8\u5143\u6570\u636e\u4fe1\u606f\u3002\u5143\u6570\u636e\u4fe1\u606f\u53ef\u4ee5\u7528\u4e8e\u5b58\u50a8\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u4fe1\u606f\uff0c\u53ef\u4ee5\u7b49\u540c\u4e8e\u6269\u5c55\u5b57\u6bb5\u3002\u6b64\u6587\u6863\u4e3b\u8981\u4ecb\u7ecd\u5982\u4f55\u5728 Halo \u4e2d\u4e3a\u5177\u4f53\u7684\u6a21\u578b\u5b9a\u4e49\u5143\u6570\u636e\u7f16\u8f91\u8868\u5355\uff0c\u81f3\u4e8e\u5982\u4f55\u5728\u63d2\u4ef6\u6216\u8005\u4e3b\u9898\u6a21\u677f\u4e2d\u4f7f\u7528\uff0c\u8bf7\u770b\u63d2\u4ef6\u6216\u8005\u4e3b\u9898\u7684\u6587\u6863\u3002"),(0,l.kt)("p",null,"\u5b9a\u4e49\u5143\u6570\u636e\u7f16\u8f91\u8868\u5355\u540c\u6837\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"FormKit Schema"),"\uff0c\u4f46\u548c\u4e3b\u9898\u6216\u63d2\u4ef6\u7684\u5b9a\u4e49\u65b9\u5f0f\u7a0d\u6709\u4e0d\u540c\uff0c\u5176\u4e2d\u8f93\u5165\u7ec4\u4ef6\u7c7b\u578b\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"/2.2/developer-guide/form-schema"},"\u8868\u5355\u5b9a\u4e49"),"\u3002"),(0,l.kt)("admonition",{title:"\u63d0\u793a",type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u56e0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"metadata.annotations")," \u662f\u4e00\u4e2a\u952e\u503c\u90fd\u4e3a\u5b57\u7b26\u4e32\u7c7b\u578b\u7684\u5bf9\u8c61\uff0c\u6240\u4ee5\u8868\u5355\u9879\u7684\u503c\u5fc5\u987b\u4e3a\u5b57\u7b26\u4e32\u7c7b\u578b\u3002\u8fd9\u5c31\u610f\u5473\u7740\uff0cFormKit \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"number"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"group"),"\u3001",(0,l.kt)("inlineCode",{parentName:"p"},"repeater")," \u7b49\u7c7b\u578b\u7684\u8f93\u5165\u7ec4\u4ef6\u90fd\u4e0d\u80fd\u4f7f\u7528\u3002")),(0,l.kt)("h2",{id:"annotationsetting-\u8d44\u6e90\u5b9a\u4e49\u65b9\u5f0f"},"AnnotationSetting \u8d44\u6e90\u5b9a\u4e49\u65b9\u5f0f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="annotation-setting.yaml"',title:'"annotation-setting.yaml"'},'apiVersion: v1alpha1\nkind: AnnotationSetting\nmetadata:\n  generateName: annotation-setting-\nspec:\n  targetRef:\n    group: content.halo.run\n    kind: Post\n  formSchema:\n    - $formkit: "text"\n      name: "download"\n      label: "\u4e0b\u8f7d\u5730\u5740"\n    - $formkit: "text"\n      name: "version"\n      label: "\u7248\u672c"\n')),(0,l.kt)("p",null,"\u4ee5\u4e0a\u5b9a\u4e49\u4e3a\u6587\u7ae0\u6a21\u578b\u6dfb\u52a0\u4e86\u4e24\u4e2a\u5143\u6570\u636e\u5b57\u6bb5\uff0c\u5206\u522b\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"download")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"version"),"\uff0c\u5206\u522b\u5bf9\u5e94\u4e86\u4e0b\u8f7d\u5730\u5740\u548c\u7248\u672c\u53f7\uff0c\u6700\u7ec8\u6548\u679c\uff1a"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Annotation Setting Preview",src:n(66337).Z,width:"2300",height:"1271"})),(0,l.kt)("p",null,"\u5b57\u6bb5\u8bf4\u660e\uff1a"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"metadata.generateName"),"\uff1a\u53ef\u4ee5\u4e0d\u505a\u4fee\u6539\uff0c\u6700\u7ec8\u4f1a\u4ee5\u8fd9\u4e2a\u503c\u5f53\u505a\u524d\u7f00\u751f\u6210\u4e00\u4e2a\u552f\u4e00\u7684\u540d\u79f0\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"spec.targetRef"),"\uff1a\u6a21\u578b\u7684\u5173\u8054\uff0c\u5373\u4e3a\u54ea\u4e2a\u6a21\u578b\u6dfb\u52a0\u5143\u6570\u636e\u8868\u5355\uff0c\u76ee\u524d\u652f\u6301\u7684\u6a21\u578b\u53ef\u67e5\u770b\u4e0b\u65b9\u7684\u5217\u8868\u3002"),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"spec.formSchema"),"\uff1a\u8868\u5355\u7684\u5b9a\u4e49\uff0c\u4f7f\u7528 FormKit Schema \u6765\u5b9a\u4e49\u3002\u867d\u7136\u6211\u4eec\u4f7f\u7528\u7684 YAML\uff0c\u4f46\u4e0e FormKit Schema \u5b8c\u5168\u4e00\u81f4\u3002")),(0,l.kt)("p",null,"targetRef \u652f\u6301\u5217\u8868\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5bf9\u5e94\u6a21\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"group"),(0,l.kt)("th",{parentName:"tr",align:null},"kind"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6587\u7ae0"),(0,l.kt)("td",{parentName:"tr",align:null},"content.halo.run"),(0,l.kt)("td",{parentName:"tr",align:null},"Post")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u9875\u9762"),(0,l.kt)("td",{parentName:"tr",align:null},"content.halo.run"),(0,l.kt)("td",{parentName:"tr",align:null},"SinglePage")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6587\u7ae0\u5206\u7c7b"),(0,l.kt)("td",{parentName:"tr",align:null},"content.halo.run"),(0,l.kt)("td",{parentName:"tr",align:null},"Category")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u6587\u7ae0\u6807\u7b7e"),(0,l.kt)("td",{parentName:"tr",align:null},"content.halo.run"),(0,l.kt)("td",{parentName:"tr",align:null},"Tag")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u83dc\u5355\u9879"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'""')),(0,l.kt)("td",{parentName:"tr",align:null},"MenuItem")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6237"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},'""')),(0,l.kt)("td",{parentName:"tr",align:null},"User")))),(0,l.kt)("h2",{id:"\u4e3a\u591a\u4e2a\u6a21\u578b\u5b9a\u4e49\u8868\u5355"},"\u4e3a\u591a\u4e2a\u6a21\u578b\u5b9a\u4e49\u8868\u5355"),(0,l.kt)("p",null,"\u8003\u8651\u5230\u67d0\u4e9b\u60c5\u51b5\u53ef\u80fd\u4f1a\u540c\u65f6\u4e3a\u591a\u4e2a\u6a21\u578b\u6dfb\u52a0\u5143\u6570\u636e\u8868\u5355\uff0c\u63a8\u8350\u5728\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"yaml")," \u6587\u4ef6\u4e2d\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"---")," \u6765\u5206\u5272\u591a\u4e2a\u8d44\u6e90\u5b9a\u4e49\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="annotation-setting.yaml"',title:'"annotation-setting.yaml"'},'apiVersion: v1alpha1\nkind: AnnotationSetting\nmetadata:\n  generateName: annotation-setting-\nspec:\n  targetRef:\n    group: content.halo.run\n    kind: Post\n  formSchema:\n    - $formkit: "text"\n      name: "download"\n      label: "\u4e0b\u8f7d\u5730\u5740"\n    - $formkit: "text"\n      name: "version"\n      label: "\u7248\u672c"\n\n---\n\napiVersion: v1alpha1\nkind: AnnotationSetting\nmetadata:\n  generateName: annotation-setting-\nspec:\n  targetRef:\n    group: ""\n    kind: MenuItem\n  formSchema:\n    - $formkit: "text"\n      name: "icon"\n      label: "\u56fe\u6807"\n')))}k.isMDXComponent=!0},66337:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/annotation-setting-preview-bf4dda9cfbb2f509211fe978c3a13cf5.png"}}]);