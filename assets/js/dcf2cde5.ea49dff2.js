"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[2615],{1528:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>m,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var l=t(6600),n=(t(9496),t(9613));t(6401);const i={title:"\u8868\u5355\u5b9a\u4e49"},m=void 0,o={unversionedId:"developer-guide/form-schema",id:"developer-guide/form-schema",title:"\u8868\u5355\u5b9a\u4e49",description:"\u5728 Halo 2.0\uff0c\u5728 Console \u7aef\u7684\u6240\u6709\u8868\u5355\u6211\u4eec\u90fd\u4f7f\u7528\u4e86 FormKit \u7684\u65b9\u6848\u3002FormKit \u4e0d\u4ec5\u652f\u6301\u4f7f\u7528 Vue \u7ec4\u4ef6\u7684\u5f62\u5f0f\u6765\u6784\u5efa\u8868\u5355\uff0c\u540c\u65f6\u652f\u6301\u4f7f\u7528 Schema \u7684\u5f62\u5f0f\u6765\u6784\u5efa\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u7684 Setting \u8d44\u6e90\u4e2d\u7684\u8868\u5355\u5b9a\u4e49\uff0c\u90fd\u662f\u4f7f\u7528 FormKit Schema \u6765\u5b9a\u4e49\u7684\uff0c\u6700\u5e38\u7528\u7684\u573a\u666f\u5373\u4e3b\u9898\u548c\u63d2\u4ef6\u7684\u8bbe\u7f6e\u8868\u5355\u5b9a\u4e49\u3002\u5f53\u7136\uff0c\u5982\u679c\u8981\u5728 Halo 2.0 \u7684\u63d2\u4ef6\u4e2d\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u53c2\u8003 FormKit \u7684\u6587\u6863\u4f7f\u7528 Vue \u7ec4\u4ef6\u7684\u5f62\u5f0f\u4f7f\u7528\uff0c\u4f46\u4e0d\u9700\u8981\u5728\u63d2\u4ef6\u4e2d\u5f15\u5165 FormKit\u3002",source:"@site/docs/developer-guide/form-schema.md",sourceDirName:"developer-guide",slug:"/developer-guide/form-schema",permalink:"/1.1.0-SNAPSHOT/developer-guide/form-schema",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/docs/developer-guide/form-schema.md",tags:[],version:"current",lastUpdatedBy:"nineya",lastUpdatedAt:1685582665,formattedLastUpdatedAt:"2023\u5e746\u67081\u65e5",frontMatter:{title:"\u8868\u5355\u5b9a\u4e49"},sidebar:"tutorialSidebar",previous:{title:"\u5e38\u7528\u4ee3\u7801\u7247\u6bb5",permalink:"/1.1.0-SNAPSHOT/developer-guide/theme/code-snippets"},next:{title:"\u5143\u6570\u636e\u8868\u5355\u5b9a\u4e49",permalink:"/1.1.0-SNAPSHOT/developer-guide/annotations-form"}},r={},d=[{value:"Setting \u8d44\u6e90\u5b9a\u4e49\u65b9\u5f0f",id:"setting-\u8d44\u6e90\u5b9a\u4e49\u65b9\u5f0f",level:2},{value:"\u7ec4\u4ef6\u7c7b\u578b",id:"\u7ec4\u4ef6\u7c7b\u578b",level:2},{value:"Repeater",id:"repeater",level:3},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:4},{value:"Attachment",id:"attachment",level:3},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-1",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-1",level:4},{value:"Code",id:"code",level:3},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-2",level:4},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-2",level:4},{value:"menuCheckbox",id:"menucheckbox",level:3},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-3",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-3",level:4},{value:"menuRadio",id:"menuradio",level:3},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-4",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-4",level:4},{value:"postSelect",id:"postselect",level:3},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-5",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-5",level:4},{value:"singlePageSelect",id:"singlepageselect",level:3},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-6",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-6",level:4},{value:"categorySelect",id:"categoryselect",level:3},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-7",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-7",level:4},{value:"categoryCheckbox",id:"categorycheckbox",level:3},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-8",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-8",level:4},{value:"tagSelect",id:"tagselect",level:3},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-9",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-9",level:4},{value:"tagCheckbox",id:"tagcheckbox",level:3},{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0-10",level:4},{value:"\u793a\u4f8b",id:"\u793a\u4f8b-10",level:4}],p={toc:d};function k(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5728 Halo 2.0\uff0c\u5728 Console \u7aef\u7684\u6240\u6709\u8868\u5355\u6211\u4eec\u90fd\u4f7f\u7528\u4e86 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/formkit/formkit"},"FormKit")," \u7684\u65b9\u6848\u3002FormKit \u4e0d\u4ec5\u652f\u6301\u4f7f\u7528 Vue \u7ec4\u4ef6\u7684\u5f62\u5f0f\u6765\u6784\u5efa\u8868\u5355\uff0c\u540c\u65f6\u652f\u6301\u4f7f\u7528 Schema \u7684\u5f62\u5f0f\u6765\u6784\u5efa\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/halo-dev/halo/blob/87ccd61ae5cd35a38324c30502d4e9c0ced41c6a/src/main/java/run/halo/app/core/extension/Setting.java#L20"},"Setting")," \u8d44\u6e90\u4e2d\u7684\u8868\u5355\u5b9a\u4e49\uff0c\u90fd\u662f\u4f7f\u7528 FormKit Schema \u6765\u5b9a\u4e49\u7684\uff0c\u6700\u5e38\u7528\u7684\u573a\u666f\u5373\u4e3b\u9898\u548c\u63d2\u4ef6\u7684\u8bbe\u7f6e\u8868\u5355\u5b9a\u4e49\u3002\u5f53\u7136\uff0c\u5982\u679c\u8981\u5728 Halo 2.0 \u7684\u63d2\u4ef6\u4e2d\u4f7f\u7528\uff0c\u4e5f\u53ef\u4ee5\u53c2\u8003 FormKit \u7684\u6587\u6863\u4f7f\u7528 Vue \u7ec4\u4ef6\u7684\u5f62\u5f0f\u4f7f\u7528\uff0c\u4f46\u4e0d\u9700\u8981\u5728\u63d2\u4ef6\u4e2d\u5f15\u5165 FormKit\u3002"),(0,n.kt)("p",null,"\u6b64\u6587\u6863\u5c06\u4e0d\u4f1a\u4ecb\u7ecd FormKit \u7684\u5177\u4f53\u4f7f\u7528\u6559\u7a0b\uff0c\u56e0\u4e3a\u6211\u4eec\u5df2\u7ecf\u5f88\u597d\u7684\u96c6\u6210\u4e86 FormKit\uff0c\u5e76\u4e14\u4f7f\u7528\u65b9\u5f0f\u57fa\u672c\u65e0\u5f02\u3002\u6b64\u6587\u7ae0\u5c06\u4ecb\u7ecd Halo 2.0 \u4e2d\u8868\u5355\u5b9a\u4e49\u7684\u4e00\u4e9b\u89c4\u8303\uff0c\u4ee5\u53ca\u989d\u5916\u7684\u4e00\u4e9b\u8f93\u5165\u7ec4\u4ef6\u3002"),(0,n.kt)("p",null,"FormKit \u76f8\u5173\u6587\u6863\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Form Schema:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://formkit.com/essentials/generation"},"https://formkit.com/essentials/generation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://formkit.com/advanced/schema"},"https://formkit.com/advanced/schema")))),(0,n.kt)("li",{parentName:"ul"},"FormKit Inputs: ",(0,n.kt)("a",{parentName:"li",href:"https://formkit.com/inputs"},"https://formkit.com/inputs"))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u76ee\u524d\u4e0d\u652f\u6301 FormKit Pro \u4e2d\u7684\u8f93\u5165\u7ec4\u4ef6\uff0c\u4f46 Halo \u989d\u5916\u63d0\u4f9b\u4e86\u90e8\u5206\u8f93\u5165\u7ec4\u4ef6\uff0c\u5c06\u5728\u4e0b\u9762\u6587\u6863\u5217\u51fa\u3002")),(0,n.kt)("h2",{id:"setting-\u8d44\u6e90\u5b9a\u4e49\u65b9\u5f0f"},"Setting \u8d44\u6e90\u5b9a\u4e49\u65b9\u5f0f"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="settings.yaml"',title:'"settings.yaml"'},'apiVersion: v1alpha1\nkind: Setting\nmetadata:\n  name: foo-setting\nspec:\n  forms:\n    - group: group_1\n      label: \u5206\u7ec4 1\n      formSchema:\n        - $formkit: radio\n          name: color_scheme\n          label: \u9ed8\u8ba4\u914d\u8272\n          value: system\n          options:\n            - label: \u8ddf\u968f\u7cfb\u7edf\n              value: system\n            - label: \u6df1\u8272\n              value: dark\n            - label: \u6d45\u8272\n              value: light\n\n    - group: group_2\n      label: \u5206\u7ec4 2\n      formSchema:\n        - $formkit: text\n          name: username\n          label: \u7528\u6237\u540d\n          value: ""\n        - $formkit: password\n          name: password\n          label: \u5bc6\u7801\n          value: ""\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cFormKit Schema \u672c\u8eab\u5e94\u8be5\u662f JSON \u683c\u5f0f\u7684\uff0c\u4f46\u76ee\u524d\u6211\u4eec\u5b9a\u4e49\u4e00\u4e2a\u8868\u5355\u6240\u4f7f\u7528\u7684\u662f YAML\uff0c\u53ef\u80fd\u5728\u53c2\u8003 FormKit \u5199\u6cd5\u65f6\u9700\u8981\u624b\u52a8\u8f6c\u6362\u4e00\u4e0b\u3002")),(0,n.kt)("p",null,"\u5b57\u6bb5\u8bf4\u660e\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"metadata.name"),"\uff1a\u8bbe\u7f6e\u8d44\u6e90\u7684\u540d\u79f0\uff0c\u5efa\u8bae\u4ee5 ",(0,n.kt)("inlineCode",{parentName:"li"},"-setting")," \u7ed3\u5c3e\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"spec.forms"),"\uff1a\u8868\u5355\u5b9a\u4e49\uff0c\u53ef\u4ee5\u5b9a\u4e49\u591a\u4e2a\u8868\u5355\uff0c\u6bcf\u4e2a\u8868\u5355\u90fd\u6709\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"li"},"group")," \u5b57\u6bb5\uff0c\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u7684\u8868\u5355\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"spec.forms[].label"),"\uff1a\u8868\u5355\u7684\u6807\u9898\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"spec.forms[].formSchema"),"\uff1a\u8868\u5355\u7684\u5b9a\u4e49\uff0c\u4f7f\u7528 FormKit Schema \u6765\u5b9a\u4e49\u3002\u867d\u7136\u6211\u4eec\u4f7f\u7528\u7684 YAML\uff0c\u4f46\u4e0e FormKit Schema \u5b8c\u5168\u4e00\u81f4\u3002")),(0,n.kt)("h2",{id:"\u7ec4\u4ef6\u7c7b\u578b"},"\u7ec4\u4ef6\u7c7b\u578b"),(0,n.kt)("p",null,"\u9664\u4e86 FormKit \u5b98\u65b9\u63d0\u4f9b\u7684\u5e38\u7528\u8f93\u5165\u7ec4\u4ef6\u4e4b\u5916\uff0cHalo \u8fd8\u989d\u5916\u63d0\u4f9b\u4e86\u4e00\u4e9b\u8f93\u5165\u7ec4\u4ef6\uff0c\u8fd9\u4e9b\u8f93\u5165\u7ec4\u4ef6\u53ef\u4ee5\u5728 Form Schema \u4e2d\u4f7f\u7528\u3002"),(0,n.kt)("h3",{id:"repeater"},"Repeater"),(0,n.kt)("h4",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,n.kt)("p",null,"\u4e00\u7ec4\u91cd\u590d\u7684\u8f93\u5165\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u7528\u4e8e\u5b9a\u4e49\u4e00\u7ec4\u6570\u636e\uff0c\u6700\u7ec8\u5f97\u5230\u7684\u6570\u636e\u4e3a\u4e00\u4e2a\u5bf9\u8c61\u7684\u6570\u7ec4\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u8ba9\u4f7f\u7528\u8005\u5bf9\u5176\u8fdb\u884c\u589e\u52a0\u3001\u79fb\u9664\u3001\u6392\u5e8f\u7b49\u64cd\u4f5c\u3002"),(0,n.kt)("h4",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'- $formkit: repeater\n  name: socials\n  label: \u793e\u4ea4\u8d26\u53f7\n  value: []\n  children:\n    - $formkit: text\n      name: name\n      label: \u540d\u79f0\n      value: ""\n    - $formkit: text\n      name: url\n      label: \u5730\u5740\n      value: ""\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"repeater")," \u7c7b\u578b\u65f6\uff0c\u4e00\u5b9a\u8981\u8bbe\u7f6e\u9ed8\u8ba4\u503c\uff0c\u5982\u679c\u4e0d\u9700\u8981\u9ed8\u8ba4\u6709\u4efb\u4f55\u5143\u7d20\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"[]"),"\u3002")),(0,n.kt)("p",null,"\u5176\u4e2d ",(0,n.kt)("inlineCode",{parentName:"p"},"name")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"url")," \u5373\u6570\u7ec4\u5bf9\u8c61\u7684\u5c5e\u6027\uff0c\u6700\u7ec8\u4fdd\u5b58\u8868\u5355\u4e4b\u540e\u5f97\u5230\u7684\u503c\u4e3a\u4ee5\u4e0b\u5f62\u5f0f\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "socials": [\n    {\n      "name": "GitHub",\n      "url": "https://github.com/halo-dev"\n    }\n  ]\n}\n')),(0,n.kt)("p",null,"UI \u6548\u679c\uff1a"),(0,n.kt)("img",{src:"/img/formkit/formkit-repeater.png",width:"50%"}),(0,n.kt)("h3",{id:"attachment"},"Attachment"),(0,n.kt)("h4",{id:"\u63cf\u8ff0-1"},"\u63cf\u8ff0"),(0,n.kt)("p",null,"\u9644\u4ef6\u7c7b\u578b\u7684\u8f93\u5165\u6846\uff0c\u652f\u6301\u76f4\u63a5\u8c03\u7528\u9644\u4ef6\u5e93\u5f39\u6846\u9009\u62e9\u9644\u4ef6\u3002"),(0,n.kt)("h4",{id:"\u793a\u4f8b-1"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'- $formkit: attachment\n  name: logo\n  label: Logo\n  value: ""\n')),(0,n.kt)("h3",{id:"code"},"Code"),(0,n.kt)("h4",{id:"\u63cf\u8ff0-2"},"\u63cf\u8ff0"),(0,n.kt)("p",null,"\u4ee3\u7801\u7f16\u8f91\u5668\u7684\u8f93\u5165\u7ec4\u4ef6\uff0c\u96c6\u6210\u4e86 ",(0,n.kt)("a",{parentName:"p",href:"https://codemirror.net/"},"Codemirror"),"\u3002"),(0,n.kt)("h4",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"language"),"\uff1a\u4ee3\u7801\u8bed\u8a00\uff0c\u76ee\u524d\u652f\u6301 ",(0,n.kt)("inlineCode",{parentName:"li"},"yaml")," ",(0,n.kt)("inlineCode",{parentName:"li"},"html")," ",(0,n.kt)("inlineCode",{parentName:"li"},"javascript")," ",(0,n.kt)("inlineCode",{parentName:"li"},"css")," ",(0,n.kt)("inlineCode",{parentName:"li"},"json"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"height"),"\uff1a\u4ee3\u7801\u7f16\u8f91\u5668\u7684\u9ad8\u5ea6\u3002")),(0,n.kt)("h4",{id:"\u793a\u4f8b-2"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'- $formkit: code\n  name: footer_code\n  label: \u9875\u811a\u4ee3\u7801\u6ce8\u5165\n  value: ""\n  language: yaml\n')),(0,n.kt)("h3",{id:"menucheckbox"},"menuCheckbox"),(0,n.kt)("h4",{id:"\u63cf\u8ff0-3"},"\u63cf\u8ff0"),(0,n.kt)("p",null,"\u83dc\u5355\u590d\u9009\u6846\uff0c\u7528\u4e8e\u9009\u62e9\u7cfb\u7edf\u5185\u7684\u5bfc\u822a\u83dc\u5355\u3002\u5176\u4e2d\u9009\u62e9\u7684\u503c\u4e3a\u83dc\u5355\u8d44\u6e90 ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.name")," \u7684\u96c6\u5408\u3002"),(0,n.kt)("h4",{id:"\u793a\u4f8b-3"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"- $formkit: menuCheckbox\n  name: menus\n  label: \u83dc\u5355\n  value: []\n")),(0,n.kt)("h3",{id:"menuradio"},"menuRadio"),(0,n.kt)("h4",{id:"\u63cf\u8ff0-4"},"\u63cf\u8ff0"),(0,n.kt)("p",null,"\u83dc\u5355\u5355\u9009\u6846\uff0c\u7528\u4e8e\u9009\u62e9\u7cfb\u7edf\u5185\u7684\u5bfc\u822a\u83dc\u5355\u3002\u5176\u4e2d\u9009\u62e9\u7684\u503c\u4e3a\u83dc\u5355\u8d44\u6e90 ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.name"),"\u3002"),(0,n.kt)("h4",{id:"\u793a\u4f8b-4"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'- $formkit: menuRadio\n  name: menu\n  label: \u83dc\u5355\n  value: ""\n')),(0,n.kt)("h3",{id:"postselect"},"postSelect"),(0,n.kt)("h4",{id:"\u63cf\u8ff0-5"},"\u63cf\u8ff0"),(0,n.kt)("p",null,"\u6587\u7ae0\u9009\u62e9\u5668\uff0c\u7528\u4e8e\u9009\u62e9\u7cfb\u7edf\u5185\u7684\u6587\u7ae0\u3002\u5176\u4e2d\u9009\u62e9\u7684\u503c\u4e3a\u6587\u7ae0\u8d44\u6e90 ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.name"),"\u3002"),(0,n.kt)("h4",{id:"\u793a\u4f8b-5"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'- $formkit: postSelect\n  name: post\n  label: \u6587\u7ae0\n  value: ""\n')),(0,n.kt)("h3",{id:"singlepageselect"},"singlePageSelect"),(0,n.kt)("h4",{id:"\u63cf\u8ff0-6"},"\u63cf\u8ff0"),(0,n.kt)("p",null,"\u5355\u9875\u9009\u62e9\u5668\uff0c\u7528\u4e8e\u9009\u62e9\u7cfb\u7edf\u5185\u7684\u72ec\u7acb\u9875\u9762\u3002\u5176\u4e2d\u9009\u62e9\u7684\u503c\u4e3a\u72ec\u7acb\u9875\u9762\u8d44\u6e90 ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.name"),"\u3002"),(0,n.kt)("h4",{id:"\u793a\u4f8b-6"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'- $formkit: singlePageSelect\n  name: singlePage\n  label: \u5355\u9875\n  value: ""\n')),(0,n.kt)("h3",{id:"categoryselect"},"categorySelect"),(0,n.kt)("h4",{id:"\u63cf\u8ff0-7"},"\u63cf\u8ff0"),(0,n.kt)("p",null,"\u6587\u7ae0\u5206\u7c7b\u9009\u62e9\u5668\uff0c\u7528\u4e8e\u9009\u62e9\u7cfb\u7edf\u5185\u7684\u6587\u7ae0\u5206\u7c7b\u3002\u5176\u4e2d\u9009\u62e9\u7684\u503c\u4e3a\u6587\u7ae0\u5206\u7c7b\u8d44\u6e90 ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.name"),"\u3002"),(0,n.kt)("h4",{id:"\u793a\u4f8b-7"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'- $formkit: categorySelect\n  name: category\n  label: \u5206\u7c7b\n  value: ""\n')),(0,n.kt)("h3",{id:"categorycheckbox"},"categoryCheckbox"),(0,n.kt)("h4",{id:"\u63cf\u8ff0-8"},"\u63cf\u8ff0"),(0,n.kt)("p",null,"\u6587\u7ae0\u5206\u7c7b\u590d\u9009\u6846\uff0c\u7528\u4e8e\u9009\u62e9\u7cfb\u7edf\u5185\u7684\u6587\u7ae0\u5206\u7c7b\u3002\u5176\u4e2d\u9009\u62e9\u7684\u503c\u4e3a\u6587\u7ae0\u5206\u7c7b\u8d44\u6e90 ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.name")," \u7684\u96c6\u5408\u3002"),(0,n.kt)("h4",{id:"\u793a\u4f8b-8"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"- $formkit: categoryCheckbox\n  name: categories\n  label: \u5206\u7c7b\n  value: []\n")),(0,n.kt)("h3",{id:"tagselect"},"tagSelect"),(0,n.kt)("h4",{id:"\u63cf\u8ff0-9"},"\u63cf\u8ff0"),(0,n.kt)("p",null,"\u6587\u7ae0\u6807\u7b7e\u9009\u62e9\u5668\uff0c\u7528\u4e8e\u9009\u62e9\u7cfb\u7edf\u5185\u7684\u6587\u7ae0\u6807\u7b7e\u3002\u5176\u4e2d\u9009\u62e9\u7684\u503c\u4e3a\u6587\u7ae0\u6807\u7b7e\u8d44\u6e90 ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.name"),"\u3002"),(0,n.kt)("h4",{id:"\u793a\u4f8b-9"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'- $formkit: tagSelect\n  name: tag\n  label: \u6807\u7b7e\n  value: ""\n')),(0,n.kt)("h3",{id:"tagcheckbox"},"tagCheckbox"),(0,n.kt)("h4",{id:"\u63cf\u8ff0-10"},"\u63cf\u8ff0"),(0,n.kt)("p",null,"\u6587\u7ae0\u6807\u7b7e\u590d\u9009\u6846\uff0c\u7528\u4e8e\u9009\u62e9\u7cfb\u7edf\u5185\u7684\u6587\u7ae0\u6807\u7b7e\u3002\u5176\u4e2d\u9009\u62e9\u7684\u503c\u4e3a\u6587\u7ae0\u6807\u7b7e\u8d44\u6e90 ",(0,n.kt)("inlineCode",{parentName:"p"},"metadata.name")," \u7684\u96c6\u5408\u3002"),(0,n.kt)("h4",{id:"\u793a\u4f8b-10"},"\u793a\u4f8b"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"- $formkit: tagCheckbox\n  name: tags\n  label: \u6807\u7b7e\n  value: []\n")))}k.isMDXComponent=!0}}]);