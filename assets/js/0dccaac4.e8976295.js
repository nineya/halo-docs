"use strict";(self.webpackChunk_nineya_halo_docs=self.webpackChunk_nineya_halo_docs||[]).push([[8244],{4969:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=l(6600),n=(l(9496),l(9613));l(6401);const i={title:"\u5199\u5728\u524d\u9762",description:"\u5728\u5f00\u59cb\u524d\uff0c\u60a8\u9700\u8981\u4e86\u89e3\u7684\u4e8b\u9879"},r=void 0,o={unversionedId:"getting-started/prepare",id:"getting-started/prepare",title:"\u5199\u5728\u524d\u9762",description:"\u5728\u5f00\u59cb\u524d\uff0c\u60a8\u9700\u8981\u4e86\u89e3\u7684\u4e8b\u9879",source:"@site/docs/getting-started/prepare.md",sourceDirName:"getting-started",slug:"/getting-started/prepare",permalink:"/1.1-SNAPSHOT/getting-started/prepare",draft:!1,editUrl:"https://github.com/nineya/halo-docs/edit/master/docs/getting-started/prepare.md",tags:[],version:"current",lastUpdatedBy:"nineya",lastUpdatedAt:1696760486,formattedLastUpdatedAt:"2023\u5e7410\u67088\u65e5",frontMatter:{title:"\u5199\u5728\u524d\u9762",description:"\u5728\u5f00\u59cb\u524d\uff0c\u60a8\u9700\u8981\u4e86\u89e3\u7684\u4e8b\u9879"},sidebar:"tutorialSidebar",previous:{title:"\u5165\u95e8",permalink:"/1.1-SNAPSHOT/category/\u5165\u95e8"},next:{title:"\u5b89\u88c5\u6307\u5357",permalink:"/1.1-SNAPSHOT/category/\u5b89\u88c5\u6307\u5357"}},p={},d=[{value:"\u73af\u5883\u8981\u6c42",id:"\u73af\u5883\u8981\u6c42",level:2},{value:"\u786c\u4ef6\u914d\u7f6e",id:"\u786c\u4ef6\u914d\u7f6e",level:3},{value:"CPU",id:"cpu",level:4},{value:"\u5185\u5b58",id:"\u5185\u5b58",level:4},{value:"\u78c1\u76d8",id:"\u78c1\u76d8",level:4},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:4},{value:"\u8f6f\u4ef6\u73af\u5883",id:"\u8f6f\u4ef6\u73af\u5883",level:3},{value:"JRE\uff08Java Runtime Environment\uff09",id:"jrejava-runtime-environment",level:4},{value:"MySQL\uff08\u53ef\u9009\uff09",id:"mysql\u53ef\u9009",level:4},{value:"Web \u670d\u52a1\u5668\uff08\u53ef\u9009\uff09",id:"web-\u670d\u52a1\u5668\u53ef\u9009",level:4},{value:"Wget\uff08\u53ef\u9009\uff09",id:"wget\u53ef\u9009",level:4},{value:"VIM\uff08\u53ef\u9009\uff09",id:"vim\u53ef\u9009",level:4},{value:"\u6d4f\u89c8\u5668\u652f\u6301",id:"\u6d4f\u89c8\u5668\u652f\u6301",level:2},{value:"\u540d\u8bcd\u89e3\u91ca",id:"\u540d\u8bcd\u89e3\u91ca",level:2},{value:"~\uff08\u7b26\u53f7\uff09",id:"\u7b26\u53f7",level:3},{value:"\u8fd0\u884c\u5305",id:"\u8fd0\u884c\u5305",level:3},{value:"\u5de5\u4f5c\u76ee\u5f55",id:"\u5de5\u4f5c\u76ee\u5f55",level:3}],u={toc:d};function s(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u73af\u5883\u8981\u6c42"},"\u73af\u5883\u8981\u6c42"),(0,n.kt)("p",null,"\u8fd9\u91cc\u5c06\u8bb2\u8ff0\u8fd0\u884c Halo-Plus \u6240\u8981\u6c42\u7684\u4e00\u4e9b\u8f6f\u786c\u4ef6\u7684\u914d\u7f6e\uff0c\u6211\u4eec\u5efa\u8bae\u60a8\u5728\u8fd0\u884c\u6216\u8005\u90e8\u7f72\u4e4b\u524d\u5148\u6d4f\u89c8\u4e00\u904d\u6b64\u9875\u9762\u3002"),(0,n.kt)("h3",{id:"\u786c\u4ef6\u914d\u7f6e"},"\u786c\u4ef6\u914d\u7f6e"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u60a8\u8981\u4f7f\u7528\u670d\u52a1\u5668\u8fdb\u884c\u90e8\u7f72 Halo-Plus\uff0c\u60a8\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0cHalo-Plus \u76ee\u524d\u4e0d\u652f\u6301\u5e02\u9762\u4e0a\u7684\u4e91\u865a\u62df\u4e3b\u673a\uff0c\u8bf7\u4f7f\u7528\u4e91\u670d\u52a1\u5668\u6216\u8005 VPS\u3002")),(0,n.kt)("h4",{id:"cpu"},"CPU"),(0,n.kt)("p",null,"\u65e0\u7279\u522b\u8981\u6c42\u3002\u76ee\u524d\u6211\u4eec\u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/nineya/halo-plus"},"Docker \u955c\u50cf")," \u4e5f\u5df2\u7ecf\u652f\u6301\u591a\u5e73\u53f0\u3002"),(0,n.kt)("h4",{id:"\u5185\u5b58"},"\u5185\u5b58"),(0,n.kt)("p",null,"\u4e3a\u4e86\u83b7\u5f97\u66f4\u597d\u7684\u4f53\u9a8c\uff0c\u6211\u4eec\u5efa\u8bae\u81f3\u5c11\u914d\u7f6e 1G \u7684 RAM\u3002"),(0,n.kt)("h4",{id:"\u78c1\u76d8"},"\u78c1\u76d8"),(0,n.kt)("p",null,"\u65e0\u7279\u522b\u8981\u6c42\uff0c\u7406\u8bba\u4e0a\u5982\u679c\u4e0d\u5927\u91cf\u5728\u670d\u52a1\u5668\u4e0a\u4f20\u9644\u4ef6\uff0cHalo-Plus \u5bf9\u78c1\u76d8\u7684\u5bb9\u91cf\u8981\u6c42\u5e76\u4e0d\u662f\u5f88\u9ad8\u3002\u4f46\u6211\u4eec\u63a8\u8350\u6700\u597d\u4f7f\u7528 SSD \u786c\u76d8\u7684\u670d\u52a1\u5668\uff0c\u80fd\u66f4\u5feb\u7684\u8fd0\u884c Halo-Plus\u3002"),(0,n.kt)("h4",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,n.kt)("p",null,"Halo-Plus \u76ee\u524d\u5fc5\u987b\u5728\u5916\u7f51\u7545\u901a\u7684\u60c5\u51b5\u4e0b\u4f7f\u7528\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u9875\u9762\u5f02\u5e38\u3002"),(0,n.kt)("h3",{id:"\u8f6f\u4ef6\u73af\u5883"},"\u8f6f\u4ef6\u73af\u5883"),(0,n.kt)("p",null,"Halo-Plus \u7406\u8bba\u4e0a\u53ef\u4ee5\u8fd0\u884c\u5728\u4efb\u4f55\u652f\u6301 Java \u7684\u5e73\u53f0\u3002"),(0,n.kt)("h4",{id:"jrejava-runtime-environment"},"JRE\uff08Java Runtime Environment\uff09"),(0,n.kt)("p",null,"\u5fc5\u987b\u5728\u8fd0\u884c\u73af\u5883\u5b89\u88c5\u597d JRE\uff0c\u8fd9\u662f\u8fd0\u884c Halo-Plus \u6240\u8981\u6c42\u7684\u7684\u6700\u4f4e\u8f6f\u4ef6\u73af\u5883\u8981\u6c42\u3002\u5982\u679c\u60a8\u4f7f\u7528 Docker \u8fd0\u884c Halo-Plus\uff0c\u53ef\u5ffd\u7565\u6b64\u8981\u6c42\u3002"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Halo-Plus \u9700\u8981\u4e3a JDK 11 \u4ee5\u4e0a\u7684\u7248\u672c\u3002")),(0,n.kt)("h4",{id:"mysql\u53ef\u9009"},"MySQL\uff08\u53ef\u9009\uff09"),(0,n.kt)("p",null,"\u8fd9\u5e76\u4e0d\u662f Halo-Plus \u5fc5\u987b\u4f9d\u8d56\u7684\uff0cHalo-Plus \u9ed8\u8ba4\u4f7f\u7528\u81ea\u5e26\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"H2 Database"),"\uff0c\u65e0\u9700\u5355\u72ec\u5b89\u88c5\u3002\u5982\u679c ",(0,n.kt)("inlineCode",{parentName:"p"},"H2 Database")," \u4e0d\u80fd\u6ee1\u8db3\u4f60\u7684\u8981\u6c42\uff0c\u60a8\u9700\u8981\u5728\u7cfb\u7edf\u5185\u5b89\u88c5\u5e76\u8fd0\u884c\u597d MySQL\u3002"),(0,n.kt)("p",null,"\u5177\u4f53\u8981\u6c42\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u7248\u672c\uff1a5.7 +"),(0,n.kt)("li",{parentName:"ol"},"\u5b57\u7b26\u96c6\uff08Character Set\uff09\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"utf8mb4")),(0,n.kt)("li",{parentName:"ol"},"\u6392\u5e8f\u89c4\u5219\uff08Collate\uff09\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"utf8mb4_bin")),(0,n.kt)("li",{parentName:"ol"},"\u5b58\u50a8\u5f15\u64ce\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"InnoDB"))),(0,n.kt)("p",null,"\u7efc\u4e0a\uff0c\u5efa\u8bae\u521b\u5efa\u6570\u636e\u5e93\u91c7\u7528\u4e0b\u9762\u7684\u547d\u4ee4\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"create database halodb character set utf8mb4 collate utf8mb4_bin;\n")),(0,n.kt)("h4",{id:"web-\u670d\u52a1\u5668\u53ef\u9009"},"Web \u670d\u52a1\u5668\uff08\u53ef\u9009\uff09"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u90e8\u7f72\u5728\u751f\u4ea7\u73af\u5883\uff0c\u90a3\u4e48\u4f60\u5f88\u53ef\u80fd\u9700\u8981\u8fdb\u884c\u57df\u540d\u7ed1\u5b9a\uff0c\u8fd9\u65f6\u5019\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u8bf8\u5982 ",(0,n.kt)("a",{parentName:"p",href:"http://nginx.org/"},"Nginx"),"\u3001",(0,n.kt)("a",{parentName:"p",href:"https://caddyserver.com/"},"Caddy")," \u4e4b\u7c7b\u7684 Web \u670d\u52a1\u5668\u8fdb\u884c\u53cd\u5411\u4ee3\u7406\u3002\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u76ee\u524d Halo-Plus \u4e0d\u652f\u6301\u4ee3\u7406\u5230\u5b50\u76ee\u5f55\uff08\u5982\uff1ahalo.run/blog\uff09\u3002"),(0,n.kt)("h4",{id:"wget\u53ef\u9009"},"Wget\uff08\u53ef\u9009\uff09"),(0,n.kt)("p",null,"\u540e\u7eed\u7684\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u4f1a\u4f7f\u7528 wget \u4e3a\u4f8b\uff0c\u7528\u4e8e\u4e0b\u8f7d\u6240\u9700\u8981\u7684\u6587\u4ef6\uff0c\u6240\u4ee5\u8bf7\u786e\u4fdd\u670d\u52a1\u5668\u5df2\u7ecf\u5b89\u88c5\u597d\u4e86\u8fd9\u4e2a\u8f6f\u4ef6\u5305\u3002\u5f53\u7136\uff0c\u4e0b\u8f7d\u6587\u4ef6\u4e0d\u9650\u5236\u5de5\u5177\uff0c\u5982\u679c\u4f60\u5bf9\u5176\u4ed6\u5de5\u5177\u719f\u6089\uff0c\u53ef\u4ee5\u5ffd\u7565\u3002"),(0,n.kt)("h4",{id:"vim\u53ef\u9009"},"VIM\uff08\u53ef\u9009\uff09"),(0,n.kt)("p",null,"\u540e\u7eed\u7684\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u4f1a\u4f7f\u7528 vim \u4e3a\u4f8b\uff0c\u7528\u4e8e\u4fee\u6539\u4e00\u4e9b\u5fc5\u8981\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u6240\u4ee5\u540c\u6837\u8bf7\u786e\u4fdd\u670d\u52a1\u5668\u5df2\u7ecf\u5b89\u88c5\u4e86\u8fd9\u4e2a\u8f6f\u4ef6\u5305\u3002\u5f53\u524d\uff0c\u4fee\u6539\u6587\u6863\u4e5f\u4e0d\u9650\u5236\u5de5\u5177\uff0c\u5982\u679c\u4f60\u5bf9\u5176\u4ed6\u7f16\u8f91\u8f6f\u4ef6\u719f\u6089\uff0c\u4e5f\u53ef\u4ee5\u5ffd\u7565\u3002"),(0,n.kt)("h2",{id:"\u6d4f\u89c8\u5668\u652f\u6301"},"\u6d4f\u89c8\u5668\u652f\u6301"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u7528\u6237\u524d\u53f0\uff1a\u89c6\u4e3b\u9898\u6240\u652f\u6301\u7684\u60c5\u51b5\u800c\u5b9a\uff0c\u7531\u4e8e\u76ee\u524d\u7684\u8bc4\u8bba\u6a21\u5757\u4f7f\u7528\u4e86 ",(0,n.kt)("a",{parentName:"li",href:"https://cn.vuejs.org/v2/guide/installation.html#%E5%85%BC%E5%AE%B9%E6%80%A7"},"Vuejs")," \u5f00\u53d1\uff0c\u6240\u4ee5\u5728 ",(0,n.kt)("a",{parentName:"li",href:"https://cn.vuejs.org/v2/guide/installation.html#%E5%85%BC%E5%AE%B9%E6%80%A7"},"Vuejs")," \u4e0d\u652f\u6301\u7684\u67d0\u4e9b\u6d4f\u89c8\u5668\u4e2d\u65e0\u6cd5\u6b63\u5e38\u663e\u793a\u8bc4\u8bba\u533a\u57df\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u7ba1\u7406\u540e\u53f0\uff1a\u652f\u6301\u76ee\u524d\u5e38\u89c1\u7684\u73b0\u4ee3\u6d4f\u89c8\u5668\uff0c\u5177\u4f53\u89c6 ",(0,n.kt)("a",{parentName:"li",href:"https://cn.vuejs.org/v2/guide/installation.html#%E5%85%BC%E5%AE%B9%E6%80%A7"},"Vuejs")," \u6846\u67b6\u7684\u652f\u6301\u60c5\u51b5\u800c\u5b9a\u3002")),(0,n.kt)("h2",{id:"\u540d\u8bcd\u89e3\u91ca"},"\u540d\u8bcd\u89e3\u91ca"),(0,n.kt)("p",null,"\u8fd9\u91cc\u5c06\u5217\u51fa\u540e\u7eed\u6587\u6863\u4e2d\u4e00\u4e9b\u548c Halo-Plus \u76f8\u5173\u7684\u540d\u8bcd\u542b\u4e49\u3002"),(0,n.kt)("h3",{id:"\u7b26\u53f7"},"~\uff08\u7b26\u53f7\uff09"),(0,n.kt)("p",null,"\u4ee3\u8868\u5f53\u524d\u7cfb\u7edf\u4e0b\u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://zh.wikipedia.org/wiki/%E5%AE%B6%E7%9B%AE%E5%BD%95"},"\u7528\u6237\u76ee\u5f55"),"\u3002"),(0,n.kt)("h3",{id:"\u8fd0\u884c\u5305"},"\u8fd0\u884c\u5305"),(0,n.kt)("p",null,"\u6307 Halo-Plus \u6784\u5efa\u6240\u4ea7\u751f\u7684 Jar \u5305\uff0c\u540e\u7f00\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},".jar"),"\u3002\u53ef\u80fd\u4e0e\u5176\u4ed6\u7f51\u7ad9\u5e94\u7528\u6709\u6240\u533a\u522b\u7684\u662f\uff0cHalo-Plus \u4ec5\u4ec5\u53ea\u6709\u8fd9\u4e00\u4e2a\u6587\u4ef6\u3002\u800c\u4e14\u6240\u6709\u6570\u636e\u7edf\u4e00\u4fdd\u5b58\u5728\u4e0b\u9762\u6240\u8bf4\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"\u5de5\u4f5c\u76ee\u5f55"),"\u3002"),(0,n.kt)("h3",{id:"\u5de5\u4f5c\u76ee\u5f55"},"\u5de5\u4f5c\u76ee\u5f55"),(0,n.kt)("p",null,"\u6307 Halo-Plus \u6240\u4f9d\u8d56\u7684\u5de5\u4f5c\u76ee\u5f55\uff0c\u5728 Halo-Plus \u8fd0\u884c\u7684\u65f6\u5019\u4f1a\u5728\u7cfb\u7edf\u5f53\u524d\u7528\u6237\u76ee\u5f55\u4e0b\u4ea7\u751f\u4e00\u4e2a ",(0,n.kt)("inlineCode",{parentName:"p"},".halo-plus")," \u7684\u6587\u4ef6\u5939\uff0c\u7edd\u5bf9\u8def\u5f84\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.halo-plus"),"\u3002\u7531\u4e8e\u8fd9\u4e2a\u5de5\u4f5c\u76ee\u5f55\u662f\u56fa\u5b9a\u7684\uff0c\u6240\u4ee5\u4e0a\u9762\u6240\u8bf4\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"\u8fd0\u884c\u5305"),"\u4e0d\u9650\u5236\u6240\u5b58\u653e\u7684\u4f4d\u7f6e\uff0c\u91cc\u9762\u901a\u5e38\u5305\u542b\u4e0b\u5217\u76ee\u5f55\u6216\u6587\u4ef6\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"db"),"\uff1a\u5b58\u653e H2 Database \u7684\u7269\u7406\u6587\u4ef6\uff0c\u5982\u679c\u60a8\u4f7f\u7528 MySQL \u6570\u636e\u5e93\uff0c\u90a3\u4e48\u4e0d\u4f1a\u5b58\u5728\u8fd9\u4e2a\u76ee\u5f55\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"templates/themes"),"\uff1a\u91cc\u9762\u5305\u542b\u7528\u6237\u6240\u4e0b\u8f7d\u7684\u4e3b\u9898\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"static"),"\uff1a\u76f8\u5f53\u4e8e\u7f51\u7ad9\u7684\u6839\u76ee\u5f55\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"logs"),"\uff1a\u8fd0\u884c\u65e5\u5fd7\u76ee\u5f55\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"upload"),"\uff1a\u9644\u4ef6\u76ee\u5f55\u3002"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"application.yaml"),"\uff1a\u914d\u7f6e\u6587\u4ef6\u3002")))}s.isMDXComponent=!0}}]);