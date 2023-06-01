"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[9297],{5868:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var l=n(6600),a=(n(9496),n(9613));n(6401);const i={title:"\u914d\u7f6e\u6587\u4ef6",description:"\u4e3b\u9898\u914d\u7f6e\u6587\u4ef6\u7684\u8bf4\u660e"},o=void 0,s={unversionedId:"developer-guide/theme/config-files",id:"developer-guide/theme/config-files",title:"\u914d\u7f6e\u6587\u4ef6",description:"\u4e3b\u9898\u914d\u7f6e\u6587\u4ef6\u7684\u8bf4\u660e",source:"@site/docs/developer-guide/theme/config-files.md",sourceDirName:"developer-guide/theme",slug:"/developer-guide/theme/config-files",permalink:"/1.1.0-SNAPSHOT/developer-guide/theme/config-files",draft:!1,editUrl:"https://github.com/nineya/halo-docs/edit/main/docs/developer-guide/theme/config-files.md",tags:[],version:"current",lastUpdatedBy:"nineya",lastUpdatedAt:1685607853,formattedLastUpdatedAt:"2023\u5e746\u67081\u65e5",frontMatter:{title:"\u914d\u7f6e\u6587\u4ef6",description:"\u4e3b\u9898\u914d\u7f6e\u6587\u4ef6\u7684\u8bf4\u660e"},sidebar:"tutorialSidebar",previous:{title:"\u51c6\u5907\u5de5\u4f5c",permalink:"/1.1.0-SNAPSHOT/developer-guide/theme/prepare"},next:{title:"\u5168\u5c40\u53d8\u91cf",permalink:"/1.1.0-SNAPSHOT/developer-guide/theme/global-variable"}},r={},m=[{value:"theme.yaml",id:"themeyaml",level:2},{value:"\u81ea\u5b9a\u4e49 meta",id:"\u81ea\u5b9a\u4e49-meta",level:3},{value:"settings.yaml",id:"settingsyaml",level:2},{value:"settings.yaml#items",id:"settingsyamlitems",level:2},{value:"\u4e00\u4e2a\u4f8b\u5b50",id:"\u4e00\u4e2a\u4f8b\u5b50",level:3}],d={toc:m};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Halo-Plus \u7684\u4e3b\u9898\u6a21\u5757\u4f7f\u7528 yaml \u6765\u5bf9\u4e3b\u9898\u8fdb\u884c\u914d\u7f6e\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"theme.yaml")," \u91cc\u9762\u4e3b\u8981\u63cf\u8ff0\u4e3b\u9898\u7684\u540d\u79f0\uff0c\u5f00\u53d1\u8005\u7684\u4fe1\u606f\uff0c\u5f00\u6e90\u5730\u5740\u7b49\u7b49\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"settings.yaml")," \u5305\u542b\u4e86\u4e3b\u9898\u6240\u6709\u7684\u914d\u7f6e\u9009\u9879\uff0c\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u4e9b\u9009\u9879\u4ec5\u4ec5\u662f\u7528\u4e8e\u6784\u5efa\u914d\u7f6e\u8868\u5355\uff0c\u5e76\u4e0d\u8d77\u5230\u5bf9\u4e3b\u9898\u7684\u914d\u7f6e\u4f5c\u7528\u3002")),(0,a.kt)("h2",{id:"themeyaml"},"theme.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"id: \u4e3b\u9898id\uff0c\u552f\u4e00\uff0c\u4e0d\u80fd\u4e0e\u5176\u4ed6\u4e3b\u9898\u4e00\u6837\u3002\u6211\u4eec\u5efa\u8bae\u8bbe\u7f6e\u4e3a `\u4f5c\u8005\u540d_\u4e3b\u9898\u540d\u79f0`\nname: \u4e3b\u9898\u540d\u79f0\nauthor:\n  name: \u4f5c\u8005\u540d\u79f0\n  website: \u4f5c\u8005\u7f51\u5740\ndescription: \u4e3b\u9898\u63cf\u8ff0\nlogo: \u4e3b\u9898 Logo \u5730\u5740\nwebsite: \u4e3b\u9898\u5730\u5740\uff0c\u53ef\u586b\u5199\u4e3a git \u4ed3\u5e93\u5730\u5740\nrepo: \u4e3b\u9898 git \u4ed3\u5e93\u5730\u5740\uff0c\u5982\u6709\u586b\u5199\uff0c\u540e\u53f0\u53ef\u5728\u7ebf\u66f4\u65b0\nversion: \u7248\u672c\u53f7\nrequire: \u6700\u4f4e\u652f\u6301\u7684 Halo-Plus \u7248\u672c\uff0c\u5982\uff1a1.3.0\uff0c\u90a3\u4e48\u5982\u679c\u7528\u6237\u7684\u7248\u672c\u4e3a 1.3.0 \u4ee5\u4e0b\uff0c\u5219\u65e0\u6cd5\u5b89\u88c5\n\npostMetaField:              \u6587\u7ae0\u81ea\u5b9a\u4e49 meta \u53d8\u91cf\n  - meta_key  \n\nsheetMetaField:\n  - meta_key                \u9875\u9762\u81ea\u5b9a\u4e49 meta \u53d8\u91cf\n")),(0,a.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"id: caicai_anatole\nname: Anatole\nauthor:\n  name: Caicai\n  website: https://www.caicai.me\ndescription: A other Halo-Plus theme\nlogo: https://avatars1.githubusercontent.com/u/1811819?s=460&v=4\nwebsite: https://github.com/halo-dev/halo-theme-anatole\nrepo: https://github.com/halo-dev/halo-theme-anatole\nversion: 1.0.0\nrequire: 1.3.0\npostMetaField:\n  - music_url               # \u5047\u8bbe\u5728\u6587\u7ae0\u9875\u9762\u9700\u8981\u64ad\u653e\u80cc\u666f\u97f3\u4e50\uff0c\u7528\u6237\u53ef\u4ee5\u81ea\u5df1\u586b\u5199\u97f3\u4e50\u5730\u5740\u3002\n  - download_url            # \u5047\u8bbe\u5728\u6587\u7ae0\u9875\u6709\u4e00\u4e2a\u4e0b\u8f7d\u6309\u94ae\uff0c\u90a3\u4e48\u7528\u6237\u4e5f\u53ef\u4ee5\u81ea\u5df1\u586b\u5199\u52a0\u8f7d\u5730\u5740\u3002\n\nsheetMetaField:\n  - music_url \n  - download_url\n")),(0,a.kt)("h3",{id:"\u81ea\u5b9a\u4e49-meta"},"\u81ea\u5b9a\u4e49 meta"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u4e3a 1.2.0 \u5f15\u5165\u7684\u529f\u80fd\uff0c\u7528\u6237\u53ef\u4ee5\u5728\u6587\u7ae0\u8bbe\u7f6e\u4e2d\u8bbe\u7f6e\u81ea\u5b9a\u4e49 meta\uff0c\u6211\u4eec\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"theme.yaml")," \u4e2d\u586b\u5199\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"postMetaField")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"sheetMetaField")," \u4e3a\u9884\u8bbe\u9879\uff0c\u5f53\u7528\u6237\u6fc0\u6d3b\u5f53\u524d\u4e3b\u9898\u4e4b\u540e\uff0c\u5728\u6587\u7ae0\u8bbe\u7f6e\u4e2d\u5373\u53ef\u770b\u5230\u9884\u5148\u8bbe\u7f6e\u597d\u7684\u9879\uff0c\u7136\u540e\u586b\u5199\u5bf9\u5e94\u7684\u503c\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u5173\u4e8e\u8fd9\u4e2a meta \u53d8\u91cf\u5982\u4f55\u8c03\u7528\u7684\u95ee\u9898\uff0c\u4f1a\u5728\u540e\u9762\u7684\u6a21\u677f\u53d8\u91cf\u4e2d\u9610\u8ff0\u3002"),(0,a.kt)("h2",{id:"settingsyaml"},"settings.yaml"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# Tab \u8282\u70b9\ngroup1:\n  label: \u7b2c\u4e00\u4e2a Tab \u540d\u79f0\n  # \u8868\u5355\u9879\n  items:\n    # \u7701\u7565\ngroup2:\n  label: \u7b2c\u4e8c\u4e2a Tab \u540d\u79f0\n  # \u8868\u5355\u9879\n  items:\n    # \u7701\u7565\n")),(0,a.kt)("h2",{id:"settingsyamlitems"},"settings.yaml#items"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"settings.yaml \u7684 items \u4e0b\u5373\u4e3a\u6240\u6709\u8868\u5355\u5143\u7d20\uff0c\u6240\u652f\u6301\u7684\u8868\u5355\u5143\u7d20\u5982\u4e0b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"items:\n\n    # \u666e\u901a\u6587\u672c\u6846\n    item1:\n      name: item1               // \u8bbe\u7f6e\u9879\u7684 name \u503c\uff0c\u5728\u9875\u9762\u53ef\u901a\u8fc7 ${settings.item1!} \u83b7\u53d6\u503c\u3002\n      label: item1              // \u8868\u5355\u9879\u7684 label\n      type: text                // \u8868\u5355\u9879\u7c7b\u578b\uff1a\u666e\u901a\u6587\u672c\u6846\n      placeholder: ''           // \u8868\u5355\u9879\u7684 placeholder\uff0c\u4e00\u822c\u7ed9\u7528\u6237\u63d0\u793a\n      default: ''               // \u8868\u5355\u9879\u7684\u9ed8\u8ba4\u503c\n      description: ''           // \u63cf\u8ff0\uff0c\u4e00\u822c\u7528\u4e8e\u8bf4\u660e\u8be5\u8bbe\u7f6e\u7684\u5177\u4f53\u7528\u9014\n      \n    # \u989c\u8272\u9009\u62e9\u6846\n    item1:\n      name: item1               // \u8bbe\u7f6e\u9879\u7684 name \u503c\uff0c\u5728\u9875\u9762\u53ef\u901a\u8fc7 ${settings.item1!} \u83b7\u53d6\u503c\u3002\n      label: item1              // \u8868\u5355\u9879\u7684 label\n      type: color               // \u8868\u5355\u9879\u7c7b\u578b\uff1a\u989c\u8272\u9009\u62e9\u6846\n      placeholder: ''           // \u8868\u5355\u9879\u7684 placeholder\uff0c\u4e00\u822c\u7ed9\u7528\u6237\u63d0\u793a\n      default: ''               // \u8868\u5355\u9879\u7684\u9ed8\u8ba4\u503c\n      description: ''           // \u63cf\u8ff0\uff0c\u4e00\u822c\u7528\u4e8e\u8bf4\u660e\u8be5\u8bbe\u7f6e\u7684\u5177\u4f53\u7528\u9014\n    \n    # \u9644\u4ef6\u9009\u62e9\u6846\n    item1:\n      name: item1               // \u8bbe\u7f6e\u9879\u7684 name \u503c\uff0c\u5728\u9875\u9762\u53ef\u901a\u8fc7 ${settings.item1!} \u83b7\u53d6\u503c\u3002\n      label: item1              // \u8868\u5355\u9879\u7684 label\n      type: attachment               // \u8868\u5355\u9879\u7c7b\u578b\uff1a\u989c\u8272\u9009\u62e9\u6846\n      placeholder: ''           // \u8868\u5355\u9879\u7684 placeholder\uff0c\u4e00\u822c\u7ed9\u7528\u6237\u63d0\u793a\n      default: ''               // \u8868\u5355\u9879\u7684\u9ed8\u8ba4\u503c\n      description: ''           // \u63cf\u8ff0\uff0c\u4e00\u822c\u7528\u4e8e\u8bf4\u660e\u8be5\u8bbe\u7f6e\u7684\u5177\u4f53\u7528\u9014\n      \n    # \u591a\u884c\u6587\u672c\u6846\n    item2:                      // \u8bbe\u7f6e\u9879\u7684 name \u503c\uff0c\u5728\u9875\u9762\u53ef\u901a\u8fc7 ${settings.item2!} \u83b7\u53d6\u503c\u3002\n      name: item2\n      label: item2              // \u540c\u4e0a\n      type: textarea            // \u8868\u5355\u9879\u7c7b\u578b\uff1a\u591a\u884c\u6587\u672c\u6846\n      placeholder: ''           // \u540c\u4e0a\n      default: ''               // \u540c\u4e0a\n      description: ''           // \u63cf\u8ff0\uff0c\u4e00\u822c\u7528\u4e8e\u8bf4\u660e\u8be5\u8bbe\u7f6e\u7684\u5177\u4f53\u7528\u9014\n\n    # \u5355\u9009\u6846\n    item3:\n      name: item3               // \u540c\u4e0a\n      label: item3_label        // \u540c\u4e0a\n      type: radio               // \u8868\u5355\u9879\u7c7b\u578b\uff1a\u5355\u9009\u6846\n      data-type: bool           // \u6570\u636e\u7c7b\u578b\uff1abool\uff0cstring\uff0clong\uff0cdouble\n      default: value1           // \u540c\u4e0a\n      description: ''           // \u63cf\u8ff0\uff0c\u4e00\u822c\u7528\u4e8e\u8bf4\u660e\u8be5\u8bbe\u7f6e\u7684\u5177\u4f53\u7528\u9014\n      options:                  // \u9009\u9879\n        - value: value1         // \u503c\n          label: label1         // \u8bf4\u660e\n        - value: value2\n          label: label2\n\n    # \u4e0b\u62c9\u6846\n    item4:\n      name: item4               // \u540c\u4e0a\n      label: item4              // \u540c\u4e0a\n      type: select              // \u8868\u5355\u9879\u7c7b\u578b\uff1a\u4e0b\u62c9\u6846\n      data-type: bool           // \u6570\u636e\u7c7b\u578b\uff1abool\uff0cstring\uff0clong\uff0cdouble\n      default: value1           // \u540c\u4e0a\n      description: ''           // \u63cf\u8ff0\uff0c\u4e00\u822c\u7528\u4e8e\u8bf4\u660e\u8be5\u8bbe\u7f6e\u7684\u5177\u4f53\u7528\u9014\n      options:                  // \u9009\u9879\n        - value: value1         // \u503c\n          label: label1         // \u8bf4\u660e\n        - value: value2\n          label: label2\n")),(0,a.kt)("h3",{id:"\u4e00\u4e2a\u4f8b\u5b50"},"\u4e00\u4e2a\u4f8b\u5b50"),(0,a.kt)("p",null,"\u5047\u8bbe\u6211\u4eec\u7684\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"general:\n  label: \u57fa\u7840\u8bbe\u7f6e\n  items:\n    index_title:\n      name: index_title           \n      label: \u9996\u9875\u6807\u9898\n      type: text \n      description: '\u6ce8\u610f\uff1a\u5c06\u8986\u76d6\u535a\u5ba2\u6807\u9898'\n    background_cover:\n      name: background_cover\n      label: \u9996\u9875\u80cc\u666f\u56fe\n      type: attachment\n      default: '/casper/assets/images/blog-cover.jpg'\n      description: '\u8bbe\u7f6e\u9996\u9875\u7684\u80cc\u666f\u56fe\uff0c\u4f60\u53ef\u4ee5\u70b9\u51fb\u53f3\u8fb9\u7684\u9009\u62e9\u6309\u94ae\u9009\u62e9\u56fe\u7247\u3002'\n    background_color:\n      name: background_color\n      label: \u9996\u9875\u80cc\u666f\u989c\u8272\n      type: color\n      default: '#fff'\n    music_enabled:\n      name: music_enabled\n      label: \u80cc\u666f\u97f3\u4e50\n      type: radio\n      data-type: bool\n      default: false\n      description: '\u662f\u5426\u5f00\u542f\u80cc\u666f\u97f3\u4e50\uff0c\u9ed8\u8ba4\u4e3a false'\n      options:\n        - value: true\n          label: \u5f00\u542f\n        - value: false\n          label: \u5173\u95ed\n    code_pretty:\n      name: code_pretty\n      label: \u6587\u7ae0\u4ee3\u7801\u9ad8\u4eae\u4e3b\u9898\n      type: select\n      default: Default\n      options:\n        - value: Default\n          label: Default\n        - value: Coy\n          label: Coy\n        - value: Dark\n          label: Dark\n        - value: Okaidia\n          label: Okaidia\n        - value: Solarized Light\n          label: Solarized Light\n        - value: Tomorrow Night\n          label: Tomorrow Night\n        - value: Twilight\n          label: Twilight\n")),(0,a.kt)("p",null,"\u9875\u9762\u53d6\u503c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"// \u83b7\u53d6\u9996\u9875\u6807\u9898\n\n<#if settings.index_title?? && settings.index_title != ''>\n    <h1>${settings.index_title!}</h1>\n</#if>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"// \u83b7\u53d6\u80cc\u666f\u56fe\u7247\n\n<#if settings.background_cover?? && settings.background_cover != ''>\n    <img src=\"${settings.background_cover!}\">\n</#if>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"// \u83b7\u53d6\u80cc\u666f\u989c\u8272\n\n<style>\n    body{\n        <#if settings.background_color?? && settings.background_color != ''>\n            background-color: ${settings.background_color!}\n        <#else>\n            background-color: #fff\n        </#if>\n    }\n</style>\n\n\u6216\u8005\n\n<style>\n    body{\n        background-color: ${settings.background_color!'#fff'}\n    }\n</style>\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"// \u5224\u65ad\u662f\u5426\u5f00\u542f\u80cc\u666f\u97f3\u4e50\n\n<#if settings.music_enabled!false>\n    do something...\n</#if>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'// \u83b7\u53d6\u4ee3\u7801\u9ad8\u4eae\u4e3b\u9898\n\n<link rel="stylesheet" type="text/css" href="${theme_base!}/assets/prism/css/prism-${settings.code_pretty!\'Default\'}.css" />\n<script type="text/javascript" src="${theme_base!}/assets/prism/js/prism.js"><\/script>\n')),(0,a.kt)("p",null,"\u66f4\u591a\u5b9e\u4f8b\u53ef\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/halo-dev/halo-theme-material/blob/master/settings.yaml"},"https://github.com/halo-dev/halo-theme-material/blob/master/settings.yaml"),"\u3002"))}p.isMDXComponent=!0}}]);