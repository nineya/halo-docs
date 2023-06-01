"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[2325],{3372:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>s});var l=a(6600),n=(a(9496),a(9613));a(6401);const r={title:"\u7248\u672c\u5347\u7ea7",description:"\u7248\u672c\u5347\u7ea7\u6307\u5357"},o=void 0,p={unversionedId:"getting-started/upgrade",id:"version-1.0.0/getting-started/upgrade",title:"\u7248\u672c\u5347\u7ea7",description:"\u7248\u672c\u5347\u7ea7\u6307\u5357",source:"@site/versioned_docs/version-1.0.0/getting-started/upgrade.md",sourceDirName:"getting-started",slug:"/getting-started/upgrade",permalink:"/getting-started/upgrade",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-1.0.0/getting-started/upgrade.md",tags:[],version:"1.0.0",lastUpdatedBy:"nineya",lastUpdatedAt:1685582665,formattedLastUpdatedAt:"2023\u5e746\u67081\u65e5",frontMatter:{title:"\u7248\u672c\u5347\u7ea7",description:"\u7248\u672c\u5347\u7ea7\u6307\u5357"},sidebar:"tutorialSidebar",previous:{title:"\u914d\u7f6e\u53c2\u8003",permalink:"/getting-started/config"},next:{title:"\u8d44\u6e90\u4e0b\u8f7d",permalink:"/getting-started/downloads"}},i={},s=[{value:"Linux",id:"linux",level:2},{value:"Docker",id:"docker",level:2}],k={toc:s};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u5f53\u524d\u6700\u65b0\u7248\u672c\u4e3a\uff1a1.6.0\u3002\u5728\u66f4\u65b0\u4e4b\u524d\u5efa\u8bae\u5148\u67e5\u9605\u53d8\u66f4\u65e5\u5fd7\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://github.com/halo-dev/halo/releases/tag/v1.6.0"},"https://github.com/halo-dev/halo/releases/tag/v1.6.0")),(0,n.kt)("h2",{id:"linux"},"Linux"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u5047\u8bbe\u4f60\u5b58\u653e\u8fd0\u884c\u5305\u7684\u8def\u5f84\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"~/app"),"\uff0c\u8fd0\u884c\u5305\u7684\u6587\u4ef6\u540d\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"halo.jar"),"\uff0c\u4e14\u4f7f\u7528\u4e86 systemd \u8fdb\u884c\u8fdb\u7a0b\u7ba1\u7406\uff0c\u5982\u6709\u4e0d\u540c\uff0c\u4e0b\u5217\u547d\u4ee4\u8bf7\u6309\u9700\u4fee\u6539\u3002")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u505c\u6b62\u6b63\u5728\u8fd0\u884c\u7684\u670d\u52a1")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"service halo stop\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u5907\u4efd\u6570\u636e\u4ee5\u53ca\u65e7\u7684\u8fd0\u884c\u5305\uff08",(0,n.kt)("strong",{parentName:"li"},"\u91cd\u8981"),"\uff09")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cp -r ~/.halo ~/.halo.archive\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mv ~/app/halo.jar ~/app/halo.jar.archive\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},".halo.archive")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"halo.jar.archive")," \u6587\u4ef6\u540d\u4e0d\u4e00\u5b9a\u8981\u6839\u636e\u6b64\u6587\u6863\u547d\u540d\uff0c\u8fd9\u91cc\u4ec5\u4ec5\u662f\u4e2a\u793a\u4f8b\u3002")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u6e05\u7a7a ",(0,n.kt)("a",{parentName:"li",href:"/getting-started/config#%E7%BC%93%E5%AD%98"},"leveldb")," \u7f13\u5b58\uff08\u5982\u679c\u6709\u4f7f\u7528 leveldb \u4f5c\u4e3a\u7f13\u5b58\u7b56\u7565\uff09")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf ~/.halo/.leveldb\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u6700\u65b0\u7248\u672c\u7684\u8fd0\u884c\u5305")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/app && wget https://dl.halo.run/release/halo-1.6.0.jar -O halo.jar\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4e0b\u8f7d\u901f\u5ea6\u4e0d\u7406\u60f3\uff0c\u53ef\u4ee5",(0,n.kt)("a",{parentName:"p",href:"/getting-started/downloads"},"\u5728\u8fd9\u91cc"),"\u9009\u62e9\u5176\u4ed6\u4e0b\u8f7d\u5730\u5740\u3002")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"\u542f\u52a8\u6d4b\u8bd5")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"java -jar halo.jar\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u6d4b\u8bd5\u542f\u52a8\u6b63\u5e38\uff0c\u8bf7\u7ee7\u7eed\u4e0b\u4e00\u6b65\u3002\u4f7f\u7528 ",(0,n.kt)("kbd",null,"CTRL"),"+",(0,n.kt)("kbd",null,"C")," \u505c\u6b62\u8fd0\u884c\u6d4b\u8bd5\u8fdb\u7a0b\u3002")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"\u91cd\u542f\u670d\u52a1")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"service halo start\n")),(0,n.kt)("h2",{id:"docker"},"Docker"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u5047\u8bbe\u60a8\u7684\u5bb9\u5668\u662f\u6309\u7167 ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/install/docker"},"\u4f7f\u7528 Docker \u90e8\u7f72 Halo")," \u4e2d\u7684\u547d\u4ee4\u6784\u5efa\u7684\u3002\u5982\u6709\u4e0d\u540c\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u4fee\u6539\u3002")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u505c\u6b62\u5e76\u5220\u9664\u5f53\u524d\u8fd0\u884c\u4e2d\u7684\u5bb9\u5668")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker stop halo\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker rm -f halo\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u4f60\u7684\u5bb9\u5668\u540d\u79f0\u4e0d\u4e00\u5b9a\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"halo"),"\uff0c\u5728\u6267\u884c\u524d\u53ef\u4ee5\u5148\u6267\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"docker ps -a")," \u67e5\u770b\u4e00\u4e0b\u3002")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u5907\u4efd\u6570\u636e\uff08\u91cd\u8981\uff09")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cp -r ~/.halo ~/.halo.archive\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,n.kt)("inlineCode",{parentName:"p"},".halo.archive")," \u6587\u4ef6\u540d\u4e0d\u4e00\u5b9a\u8981\u6839\u636e\u6b64\u6587\u6863\u547d\u540d\uff0c\u8fd9\u91cc\u4ec5\u4ec5\u662f\u4e2a\u793a\u4f8b\u3002")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u6e05\u7a7a ",(0,n.kt)("a",{parentName:"li",href:"/getting-started/config#%E7%BC%93%E5%AD%98"},"leveldb")," \u7f13\u5b58\uff08\u5982\u679c\u6709\u4f7f\u7528 leveldb \u4f5c\u4e3a\u7f13\u5b58\u7b56\u7565\uff09")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf ~/.halo/.leveldb\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u62c9\u53d6\u6700\u65b0\u7684 Halo \u955c\u50cf")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull halohub/halo:1.6.0\n")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u67e5\u770b\u6700\u65b0\u7248\u672c\u955c\u50cf\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/halohub/halo"},"https://hub.docker.com/r/halohub/halo")," \uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u5177\u4f53\u7248\u672c\u53f7\u7684\u955c\u50cf\uff0c\u4f46\u4e5f\u63d0\u4f9b\u4e86 ",(0,n.kt)("inlineCode",{parentName:"p"},"latest")," \u6807\u7b7e\u7684\u955c\u50cf\uff0c\u5b83\u59cb\u7ec8\u662f\u6700\u65b0\u7684\u3002")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa\u5bb9\u5668")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it -d --name halo -p 8090:8090 -v ~/.halo:/root/.halo --restart=unless-stopped halohub/halo:1.6.0\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"-it\uff1a")," \u5f00\u542f\u8f93\u5165\u529f\u80fd\u5e76\u8fde\u63a5\u4f2a\u7ec8\u7aef"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"-d\uff1a")," \u540e\u53f0\u8fd0\u884c\u5bb9\u5668"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"--name\uff1a")," \u4e3a\u5bb9\u5668\u6307\u5b9a\u4e00\u4e2a\u540d\u79f0"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"-p\uff1a")," \u7aef\u53e3\u6620\u5c04\uff0c\u683c\u5f0f\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"\u4e3b\u673a(\u5bbf\u4e3b)\u7aef\u53e3:\u5bb9\u5668\u7aef\u53e3")," \uff0c\u53ef\u5728 ",(0,n.kt)("inlineCode",{parentName:"li"},"application.yaml")," \u914d\u7f6e\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"-v\uff1a")," \u5de5\u4f5c\u76ee\u5f55\u6620\u5c04\u3002\u5f62\u5f0f\u4e3a\uff1a-v \u5bbf\u4e3b\u673a\u8def\u5f84:/root/.halo\uff0c\u540e\u8005\u4e0d\u80fd\u4fee\u6539\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"--restart\uff1a")," \u5efa\u8bae\u8bbe\u7f6e\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"unless-stopped"),"\uff0c\u5728 Docker \u542f\u52a8\u7684\u65f6\u5019\u81ea\u52a8\u542f\u52a8 Halo \u5bb9\u5668\u3002")))}d.isMDXComponent=!0}}]);