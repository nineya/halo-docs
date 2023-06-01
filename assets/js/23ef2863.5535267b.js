"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[1165],{9987:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>k});var l=t(6600),n=(t(9496),t(9613));t(6401);const o={title:"\u4f7f\u7528 Docker \u90e8\u7f72 Halo-Plus \u548c MySQL",description:"Halo-Plus \u4e0e MySQL \u5728 Docker \u4e2d\u7684\u90e8\u7f72\u65b9\u6848"},r=void 0,i={unversionedId:"getting-started/install/other/docker-mysql",id:"version-1.0.0/getting-started/install/other/docker-mysql",title:"\u4f7f\u7528 Docker \u90e8\u7f72 Halo-Plus \u548c MySQL",description:"Halo-Plus \u4e0e MySQL \u5728 Docker \u4e2d\u7684\u90e8\u7f72\u65b9\u6848",source:"@site/versioned_docs/version-1.0.0/getting-started/install/other/docker-mysql.md",sourceDirName:"getting-started/install/other",slug:"/getting-started/install/other/docker-mysql",permalink:"/getting-started/install/other/docker-mysql",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-1.0.0/getting-started/install/other/docker-mysql.md",tags:[],version:"1.0.0",lastUpdatedBy:"nineya",lastUpdatedAt:1685600276,formattedLastUpdatedAt:"2023\u5e746\u67081\u65e5",frontMatter:{title:"\u4f7f\u7528 Docker \u90e8\u7f72 Halo-Plus \u548c MySQL",description:"Halo-Plus \u4e0e MySQL \u5728 Docker \u4e2d\u7684\u90e8\u7f72\u65b9\u6848"},sidebar:"tutorialSidebar",previous:{title:"\u817e\u8baf\u4e91 CloudBase",permalink:"/getting-started/install/other/tencent-cloudbase"},next:{title:"\u4f7f\u7528 Docker Compose \u90e8\u7f72 Halo",permalink:"/getting-started/install/other/docker-compose"}},p={},k=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:3},{value:"\u7edf\u4e00\u4f7f\u7528 Docker \u5b89\u88c5",id:"\u7edf\u4e00\u4f7f\u7528-docker-\u5b89\u88c5",level:3},{value:"MySQL \u90e8\u7f72\u5728 Docker \u5982\u4f55\u4f7f\u7528 Docker \u5b89\u88c5 Halo",id:"mysql-\u90e8\u7f72\u5728-docker-\u5982\u4f55\u4f7f\u7528-docker-\u5b89\u88c5-halo",level:3},{value:"MySQL \u5728\u5bbf\u4e3b\u673a\u5982\u4f55\u901a\u8fc7 Docker \u5b89\u88c5 Halo",id:"mysql-\u5728\u5bbf\u4e3b\u673a\u5982\u4f55\u901a\u8fc7-docker-\u5b89\u88c5-halo",level:3}],s={toc:k};function m(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,l.Z)({},s,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,n.kt)("p",null,"\u8be5\u7ae0\u8282\u6211\u4eec\u5c06\u5206\u4e09\u79cd\u60c5\u51b5\u4e3a\u60a8\u8bf4\u660e\u8be5\u5982\u4f55\u540c\u65f6\u4f7f\u7528 Docker + MySQL \u6765\u90e8\u7f72 Halo-Plus"),(0,n.kt)("p",null,"\u524d\u63d0\u6761\u4ef6\uff1a \u6211\u4eec\u9ed8\u8ba4\u60a8\u7684\u673a\u5668\u4e0a\u5df2\u7ecf\u5b89\u88c5\u597d ",(0,n.kt)("inlineCode",{parentName:"p"},"Docker")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u60f3\u5b8c\u5168\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"li"},"Docker")," \u8fd0\u884c ",(0,n.kt)("inlineCode",{parentName:"li"},"MySQL")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"Halo-Plus")," \u8bf7\u53c2\u8003\u5c0f\u8282\u300a\u7edf\u4e00\u4f7f\u7528 Docker \u5b89\u88c5\u300b"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5df2\u7ecf\u6709 ",(0,n.kt)("inlineCode",{parentName:"li"},"Docker"),"\u90e8\u7f72\u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},"MySQL"),"\uff0c\u60f3\u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"li"},"Halo-Plus")," \u8bf7\u53c2\u8003\u5c0f\u8282\u300aMySQL \u90e8\u7f72\u5728 Docker \u5982\u4f55\u4f7f\u7528 Docker \u5b89\u88c5 Halo-Plus\u300b"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5df2\u6709 ",(0,n.kt)("inlineCode",{parentName:"li"},"MySQL")," \u4f46\u90e8\u7f72\u5728\u5bbf\u4e3b\u673a\uff0c\u60f3\u901a\u8fc7 ",(0,n.kt)("inlineCode",{parentName:"li"},"Docker")," \u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"li"},"Halo-Plus")," \u8bf7\u53c2\u8003\u5c0f\u8282\u300aMySQL \u5728\u5bbf\u4e3b\u673a\u5982\u4f55\u901a\u8fc7 Docker \u5b89\u88c5 Halo-Plus\u300b")),(0,n.kt)("h3",{id:"\u7edf\u4e00\u4f7f\u7528-docker-\u5b89\u88c5"},"\u7edf\u4e00\u4f7f\u7528 Docker \u5b89\u88c5"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u7684\u673a\u5668\u4e0a\u6ca1\u6709\u73b0\u6210\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"MySQL")," \u53ef\u4f9b\u4f7f\u7528\uff0c\u90a3\u4e48\u60a8\u53ef\u4ee5\u9009\u62e9\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"Docker")," \u6765\u8fd0\u884c ",(0,n.kt)("inlineCode",{parentName:"p"},"MySQL")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"Halo")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa Docker \u81ea\u5b9a\u4e49\u6865\u63a5\u7f51\u7edc")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker network create halo-net\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u4e4b\u524d\u6709 Docker \u4f7f\u7528\u7ecf\u9a8c\uff0c\u4f60\u53ef\u80fd\u5df2\u7ecf\u4e60\u60ef\u4e86\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"--link")," \u53c2\u6570\u6765\u4f7f\u5bb9\u5668\u4e92\u8054\u3002"),(0,n.kt)("p",{parentName:"admonition"},"\u4f46\u968f\u7740 Docker \u7f51\u7edc\u7684\u5b8c\u5584\uff0c\u5f3a\u70c8\u5efa\u8bae\u5927\u5bb6\u5c06\u5bb9\u5668\u52a0\u5165\u81ea\u5b9a\u4e49\u7684 Docker \u7f51\u7edc\u6765\u8fde\u63a5\u591a\u4e2a\u5bb9\u5668\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 --link \u53c2\u6570\u3002\nDocker \u5b98\u65b9\u6587\u6863\u4e2d\u79f0\uff1a\u8be5--link \u6807\u5fd7\u662f Docker \u7684\u9057\u7559\u529f\u80fd\u3002\u5b83\u53ef\u80fd\u6700\u7ec8\u4f1a\u88ab\u5220\u9664\u3002\u9664\u975e\u60a8\u786e\u5b9a\u9700\u8981\u7ee7\u7eed\u4f7f\u7528\u5b83\uff0c\u5426\u5219\u6211\u4eec\u5efa\u8bae\u60a8\u4f7f\u7528\u7528\u6237\u5b9a\u4e49\u7684\u7f51\u7edc\u6765\u4fc3\u8fdb\u4e24\u4e2a\u5bb9\u5668\u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u800c\u4e0d\u662f\u4f7f\u7528 --link\u3002")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u62c9\u53d6 ",(0,n.kt)("inlineCode",{parentName:"li"},"MySQL")," \u955c\u50cf")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker pull mysql:8.0.27\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa ",(0,n.kt)("inlineCode",{parentName:"li"},"MySQL")," \u6570\u636e\u76ee\u5f55")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir -p ~/.halo/mysql\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u542f\u52a8 ",(0,n.kt)("inlineCode",{parentName:"li"},"MySQL")," \u5b9e\u4f8b")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --name some-mysql -v ~/.halo/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw --net halo-net --restart=unless-stopped -d mysql:8.0.27\n")),(0,n.kt)("p",null,"\u6ce8\u610f: \u8bf7\u5c06 ",(0,n.kt)("inlineCode",{parentName:"p"},"my-secret-pw")," \u4fee\u6539\u4e3a\u81ea\u5df1\u9700\u8981\u7684\u5bc6\u7801\u540e\u518d\u6267\u884c\uff0c\u5bc6\u7801\u5c3d\u91cf\u5305\u542b\u5c0f\u5199\u5b57\u6bcd\u3001\u5927\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u548c\u7279\u6b8a\u5b57\u7b26\u4e14\u957f\u5ea6\u8d85\u8fc7 8 \u4f4d\u3002"),(0,n.kt)("admonition",{title:"\u91ca\u610f",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"-e MYSQL_ROOT_PASSWORD=my-secret-pw"),": \u6307\u5b9a",(0,n.kt)("inlineCode",{parentName:"p"},"MySQL"),"\u7684\u767b\u5f55\u5bc6\u7801\u4e3a ",(0,n.kt)("inlineCode",{parentName:"p"},"my-secret-pw")),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"-v ~/.halo/mysql:/var/lib/mysql")," \u547d\u4ee4: \u5c06\u5bbf\u4e3b\u673a\u7684\u76ee\u5f55 ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.halo/mysql")," \u6302\u8f7d\u5230\u5bb9\u5668\u5185\u90e8\u7684\u76ee\u5f55 ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/mysql"),"\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b MySQL \u5c06\u5411 ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.halo/mysql")," \u5199\u5165\u5176\u6570\u636e\u6587\u4ef6\u3002"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"--net halo-net"),": \u5c06\u8be5\u5bb9\u5668\u52a0\u5165\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"halo-net")," \u7f51\u7edc,\u8fde\u63a5\u5230 ",(0,n.kt)("inlineCode",{parentName:"p"},"halo-net")," \u7f51\u7edc\u7684\u4efb\u4f55\u5176\u4ed6\u5bb9\u5668\u90fd\u53ef\u4ee5\u8bbf\u95ee ",(0,n.kt)("inlineCode",{parentName:"p"},"some-mysql"),"\u5bb9\u5668\u4e0a\u7684\u6240\u6709\u7aef\u53e3\u3002")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u8fdb\u5165 MySQL \u5bb9\u5668\u4e2d\u767b\u5f55 MySQL \u5e76\u521b\u5efa Halo \u9700\u8981\u7684\u6570\u636e\u5e93")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"(1) some-mysql \u4e3a MySQL \u5b9e\u4f8b\u7684\u5bb9\u5668\u540d\u79f0"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec -it some-mysql /bin/bash\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"(2) \u767b\u5f55 MySQL"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mysql -u root -p\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"(3) \u8f93\u5165 MySQL \u6570\u636e\u5e93\u5bc6\u7801")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"(4) \u521b\u5efa\u6570\u636e\u5e93"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"create database halodb character set utf8mb4 collate utf8mb4_bin;\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"(5) \u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"exit"),"\u9000\u51fa",(0,n.kt)("inlineCode",{parentName:"p"},"MySQL")," \u5e76\u9000\u51fa\u5bb9\u5668"))),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa ",(0,n.kt)("inlineCode",{parentName:"li"},"Halo")," \u5de5\u4f5c\u76ee\u5f55")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/.halo && cd ~/.halo\n")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\u5230",(0,n.kt)("a",{parentName:"li",href:"https://docs.halo.run/getting-started/prepare#%E5%B7%A5%E4%BD%9C%E7%9B%AE%E5%BD%95"},"\u5de5\u4f5c\u76ee\u5f55"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://dl.halo.run/config/application-template.yaml -O ./application.yaml\n")),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},"\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6\uff0c\u914d\u7f6e\u6570\u636e\u5e93\uff0c\u5176\u4ed6\u914d\u7f6e\u8bf7\u53c2\u8003",(0,n.kt)("a",{parentName:"li",href:"https://docs.halo.run/getting-started/config"},"\u53c2\u8003\u914d\u7f6e"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"vim application.yaml\n")),(0,n.kt)("p",null,"\u4f60\u9700\u8981\u505a\u5982\u4e0b\u51e0\u4e2a\u6b65\u9aa4\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u91ca H2 database configuration.\u90e8\u5206"),(0,n.kt)("li",{parentName:"ul"},"\u542f\u7528 MySQL database configuration.\u90e8\u5206"),(0,n.kt)("li",{parentName:"ul"},"\u4fee\u6539 datasource \u4e0b\u7684 url \u4e2d\u7684 ip \u5730\u5740\u90e8\u5206\u4e3a\u5bb9\u5668\u540d\u79f0\u5e76\u4fee\u6539\u5bc6\u7801\u4e3a\u60a8\u8bbe\u5b9a\u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},"MySQL")," \u5bc6\u7801")),(0,n.kt)("p",null,"\u4fee\u6539\u540e\u7684\u5185\u5bb9\u5982\u4e0b:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  datasource:\n    driver-class-name: com.mysql.cj.jdbc.Driver\n    url: jdbc:mysql://some-mysql:3306/halodb?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true\n    username: root\n    password: my-secret-pw\n")),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa Halo \u5bb9\u5668\u5b9e\u4f8b")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it -d --name halo -p 8090:8090 -v ~/.halo:/root/.halo --net halo-net --restart=unless-stopped halohub/halo:1.6.0\n")),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},"\u6253\u5f00 ",(0,n.kt)("inlineCode",{parentName:"li"},"http://ip:\u7aef\u53e3\u53f7")," \u5373\u53ef\u770b\u5230\u5b89\u88c5\u5f15\u5bfc\u754c\u9762\u3002")),(0,n.kt)("h3",{id:"mysql-\u90e8\u7f72\u5728-docker-\u5982\u4f55\u4f7f\u7528-docker-\u5b89\u88c5-halo"},"MySQL \u90e8\u7f72\u5728 Docker \u5982\u4f55\u4f7f\u7528 Docker \u5b89\u88c5 Halo"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u5df2\u6709 ",(0,n.kt)("inlineCode",{parentName:"p"},"Docker")," \u90e8\u7f72\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"MySQL")," \u5b9e\u4f8b\uff0c\u90a3\u4e48\u4e3a\u4e86\u4fdd\u8bc1 ",(0,n.kt)("inlineCode",{parentName:"p"},"Halo")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"MySQL")," \u4e24\u4e2a\u5bb9\u5668\u7684\u7f51\u7edc\u53ef\u4ee5\u4e92\u901a\uff0c\u548c\u4e0a\u6587\u540c\u6837\u7684\u601d\u8def\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a\u7f51\u7edc\u8ba9 ",(0,n.kt)("inlineCode",{parentName:"p"},"MySQL")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"Halo")," \u90fd\u52a0\u5165\u8fdb\u6765\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"docker ps")," \u6765\u67e5\u770b\u7684\u4f60 ",(0,n.kt)("inlineCode",{parentName:"li"},"MySQL")," \u5bb9\u5668\u5b9e\u4f8b\u7684\u540d\u79f0\u6216 ",(0,n.kt)("inlineCode",{parentName:"li"},"container id"),"\uff0c \u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},"some-mysql")),(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u6865\u63a5\u7f51\u7edc\uff0c\u8ba9 ",(0,n.kt)("inlineCode",{parentName:"li"},"MySQL")," \u52a0\u5165\uff0c\u9996\u5148\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"docker network ls")," \u6765\u67e5\u770b\u4e00\u4e0b\u90fd\u6709\u54ea\u4e9b\u7f51\u7edc\u540d\u79f0\uff0c\u8d77\u4e00\u4e2a\u4e0d\u4f1a\u51b2\u7a81\u7684\u7f51\u7edc\u540d\u79f0\uff0c\u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},"halo-net"),"\uff0c\u5176\u6b21\u8ba9\u5df2\u7ecf\u5b58\u5728\u7684 MySQL \u5bb9\u5668\u5b9e\u4f8b\u52a0\u5165\u5230\u8be5\u7f51\u7edc\u4e2d")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker network connect halo-net some-mysql\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u540c\u4e4b\u524d\u4e00\u6837\u521b\u5efa ",(0,n.kt)("inlineCode",{parentName:"li"},"Halo")," \u5de5\u4f5c\u76ee\u5f55")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/.halo && cd ~/.halo\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d\u793a\u4f8b\u914d\u7f6e\u6587\u4ef6\u5230",(0,n.kt)("a",{parentName:"li",href:"https://docs.halo.run/getting-started/prepare#%E5%B7%A5%E4%BD%9C%E7%9B%AE%E5%BD%95"},"\u5de5\u4f5c\u76ee\u5f55"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://dl.halo.run/config/application-template.yaml -O ./application.yaml\n")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"\u7f16\u8f91\u914d\u7f6e\u6587\u4ef6\uff0c\u4fee\u6539 ",(0,n.kt)("inlineCode",{parentName:"li"},"MySQL")," \u7684\u6570\u636e\u5e93\u8fde\u63a5\u548c\u5bc6\u7801")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"vim application.yaml\n")),(0,n.kt)("p",null,"\u4f60\u9700\u8981\u505a\u5982\u4e0b\u51e0\u4e2a\u6b65\u9aa4\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u91ca H2 database configuration.\u90e8\u5206"),(0,n.kt)("li",{parentName:"ul"},"\u542f\u7528 MySQL database configuration.\u90e8\u5206"),(0,n.kt)("li",{parentName:"ul"},"\u4fee\u6539 datasource \u4e0b\u7684 url \u4e2d\u7684 ip \u5730\u5740\u90e8\u5206\u4e3a\u5bb9\u5668\u540d\u79f0\u5e76\u4fee\u6539\u5bc6\u7801\u4e3a\u60a8\u8bbe\u5b9a\u7684 ",(0,n.kt)("inlineCode",{parentName:"li"},"MySQL")," \u5bc6\u7801")),(0,n.kt)("p",null,"\u4fee\u6539\u540e\u7684\u5185\u5bb9\u5982\u4e0b:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  datasource:\n    driver-class-name: com.mysql.cj.jdbc.Driver\n    url: jdbc:mysql://some-mysql:3306/halodb?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true\n    username: root\n    password: my-secret-pw\n")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa ",(0,n.kt)("inlineCode",{parentName:"li"},"Halo")," \u5bb9\u5668\u5b9e\u4f8b,\u5e76\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"--net")," \u6307\u5b9a\u7f51\u7edc\u4e3a\u521a\u624d\u521b\u5efa\u7684",(0,n.kt)("inlineCode",{parentName:"li"},"halo-net"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it -d --name halo -p 8090:8090 -v ~/.halo:/root/.halo --net halo-net --restart=unless-stopped halohub/halo:1.6.0\n")),(0,n.kt)("h3",{id:"mysql-\u5728\u5bbf\u4e3b\u673a\u5982\u4f55\u901a\u8fc7-docker-\u5b89\u88c5-halo"},"MySQL \u5728\u5bbf\u4e3b\u673a\u5982\u4f55\u901a\u8fc7 Docker \u5b89\u88c5 Halo"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u6709 ",(0,n.kt)("inlineCode",{parentName:"p"},"MySQL")," \u4f46\u5b89\u88c5\u5728\u5bbf\u4e3b\u673a\uff0c\u4f60\u60f3\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"Docker")," \u5b89\u88c5 ",(0,n.kt)("inlineCode",{parentName:"p"},"Halo")," \u90a3\u4e48\u6b64\u65f6\u4e3a\u4e86\u4fdd\u8bc1 ",(0,n.kt)("inlineCode",{parentName:"p"},"MySQL")," \u548c ",(0,n.kt)("inlineCode",{parentName:"p"},"Halo")," \u80fd\u7f51\u7edc\u4e92\u901a\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"host")," \u7f51\u7edc\u6a21\u5f0f\u5373 ",(0,n.kt)("inlineCode",{parentName:"p"},"--net host"),"\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa ",(0,n.kt)("inlineCode",{parentName:"li"},"Halo")," \u7684\u5de5\u4f5c\u76ee\u5f55")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"mkdir ~/.halo && cd ~/.halo\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u62c9\u53d6\u914d\u7f6e")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://dl.halo.run/config/application-template.yaml -O ./application.yaml\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"Docker")," \u542f\u52a8 ",(0,n.kt)("inlineCode",{parentName:"li"},"Halo")," \u5b9e\u4f8b\u5e76\u6307\u5b9a\u7f51\u7edc\u6a21\u5f0f\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"host"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -it -d --name halo -p 8090:8090 -v ~/.halo:/root/.halo --net host --restart=unless-stopped halohub/halo:1.6.0\n")))}m.isMDXComponent=!0}}]);