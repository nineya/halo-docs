"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[12138],{88624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>k});var a=r(96600),n=(r(59496),r(49613));r(26401);const i={title:"\u4e0e Traefik \u914d\u5408\u4f7f\u7528",description:"\u4f7f\u7528 Traefik \u7ba1\u7406 Halo \u670d\u52a1\u7684\u53cd\u5411\u4ee3\u7406"},o=void 0,l={unversionedId:"getting-started/install/other/traefik",id:"getting-started/install/other/traefik",title:"\u4e0e Traefik \u914d\u5408\u4f7f\u7528",description:"\u4f7f\u7528 Traefik \u7ba1\u7406 Halo \u670d\u52a1\u7684\u53cd\u5411\u4ee3\u7406",source:"@site/docs/getting-started/install/other/traefik.md",sourceDirName:"getting-started/install/other",slug:"/getting-started/install/other/traefik",permalink:"/2.6.0-SNAPSHOT/getting-started/install/other/traefik",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/docs/getting-started/install/other/traefik.md",tags:[],version:"current",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{title:"\u4e0e Traefik \u914d\u5408\u4f7f\u7528",description:"\u4f7f\u7528 Traefik \u7ba1\u7406 Halo \u670d\u52a1\u7684\u53cd\u5411\u4ee3\u7406"},sidebar:"tutorialSidebar",previous:{title:"\u4e0e Nginx Proxy Manager \u914d\u5408\u4f7f\u7528",permalink:"/2.6.0-SNAPSHOT/getting-started/install/other/nginxproxymanager"},next:{title:"\u4ece Halo 1.x \u8fc1\u79fb",permalink:"/2.6.0-SNAPSHOT/getting-started/migrate-from-1.x"}},s={},k=[{value:"Halo \u90e8\u7f72",id:"halo-\u90e8\u7f72",level:2},{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u521b\u5efa Traefik",id:"\u521b\u5efa-traefik",level:2},{value:"\u914d\u7f6e Halo \u7684\u53cd\u5411\u4ee3\u7406",id:"\u914d\u7f6e-halo-\u7684\u53cd\u5411\u4ee3\u7406",level:2}],d={toc:k};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"halo-\u90e8\u7f72"},"Halo \u90e8\u7f72"),(0,n.kt)("p",null,"\u53c2\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"/2.6.0-SNAPSHOT/getting-started/install/docker-compose"},"\u4f7f\u7528 Docker Compose \u90e8\u7f72")),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"\u300c\u53cd\u5411\u4ee3\u7406\u300d")," \u90e8\u5206\u4e0d\u8fdb\u884c\u64cd\u4f5c\uff0c\u4fdd\u8bc1 Halo \u670d\u52a1\u8fd0\u884c\u65e0\u8bef\u5373\u53ef\u3002")),(0,n.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://traefik.io/traefik/"},"Traefik")," \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u53cd\u5411\u4ee3\u7406\u4e0e\u8d1f\u8f7d\u5747\u8861\u5de5\u5177\uff0c\u5b83\u76d1\u542c\u540e\u7aef\u7684\u53d8\u5316\u5e76\u81ea\u52a8\u66f4\u65b0\u670d\u52a1\u914d\u7f6e\u3002"),(0,n.kt)("p",null,"\u5b83\u4e0e\u4f20\u7edf\u53cd\u5411\u4ee3\u7406\u6700\u5927\u7684\u533a\u522b\uff0c\u662f\u652f\u6301\u58f0\u660e\u5f0f\u7684\u52a8\u6001\u8def\u7531\u89c4\u5219\uff0c\u5927\u5927\u7b80\u5316\u7f51\u5173\u89c4\u5219\u7684\u914d\u7f6e\u3002\u800c\u4e14\u8fd8\u6709\u8bf8\u591a\u5b9e\u7528\u7279\u6027\uff0c\u4f8b\u5982\uff1a\u5065\u5eb7\u68c0\u67e5\u3001\u591a\u5b9e\u4f8b\u8d1f\u8f7d\u5747\u8861\u3001\u80fd\u591f\u5b9e\u73b0 Let's Encrypt \u8bc1\u4e66\u7684\u81ea\u52a8\u7b7e\u53d1\u3001\u9a8c\u8bc1\u4e0e\u7eed\u671f\u7b49\u7b49\u3002"),(0,n.kt)("h2",{id:"\u521b\u5efa-traefik"},"\u521b\u5efa Traefik"),(0,n.kt)("p",null,"\u4e0b\u9762\u7684\u914d\u7f6e\u4e2d\uff0c\u521b\u5efa\u4e86 Traefik \u5b9e\u4f8b\u3002\u5e76\u4e14\u505a\u4e86\u57fa\u7840\u7684\u51e0\u9879\u914d\u7f6e\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u76d1\u542c\u4e86\u5bbf\u4e3b\u673a\u7684 80\u3001443 \u7aef\u53e3\uff0c\u5e76\u81ea\u52a8\u5c06 80 \u7aef\u53e3\u7684\u8bf7\u6c42\u91cd\u5b9a\u5411\u5230 443 \u7aef\u53e3\u3002",(0,n.kt)("a",{parentName:"li",href:"https://doc.traefik.io/traefik/routing/entrypoints/"},"\u6587\u6863")),(0,n.kt)("li",{parentName:"ol"},"\u5f00\u542f Docker \u670d\u52a1\u53d1\u73b0\uff0c\u76d1\u542c\u68c0\u6d4b Docker \u5bb9\u5668\u58f0\u660e\u7684\u670d\u52a1\u5173\u7cfb\u3002",(0,n.kt)("a",{parentName:"li",href:"https://doc.traefik.io/traefik/providers/docker/#provider-configuration"},"\u6587\u6863")),(0,n.kt)("li",{parentName:"ol"},"\u5f00\u542f Traefik Dashboard\uff0c\u5efa\u8bae\u4f7f\u7528\u4e8c\u7ea7\u57df\u540d\u7684\u5f62\u5f0f\uff08\u793a\u4f8b\uff1a",(0,n.kt)("inlineCode",{parentName:"li"},"traefik.yourdomain.com"),"\uff09\u3002",(0,n.kt)("a",{parentName:"li",href:"https://doc.traefik.io/traefik/operations/dashboard/#dashboard-router-rule"},"\u6587\u6863")),(0,n.kt)("li",{parentName:"ol"},"\u5f00\u542f\u8bc1\u4e66\u81ea\u52a8\u751f\u6210\uff0c\u901a\u8fc7 ACME \u81ea\u52a8\u7ba1\u7406 TLS \u8bc1\u4e66\u7684\u7533\u8bf7\u3001\u6821\u9a8c\u4e0e\u7eed\u671f\u3002",(0,n.kt)("a",{parentName:"li",href:"https://doc.traefik.io/traefik/https/acme/"},"\u6587\u6863"))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"ACME \u8bc1\u4e66 (",(0,n.kt)("inlineCode",{parentName:"p"},"/acme.json"),") \u4e00\u5b9a\u8981 ",(0,n.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/https/acme/#storage"},"\u6301\u4e45\u5316"),"\uff0c\u5426\u5219\u6bcf\u6b21\u91cd\u542f Traefik \u670d\u52a1\uff0c\u90fd\u4f1a\u53bb\u7533\u8bf7\u7b7e\u53d1\u8bc1\u4e66\u3002\u53ef\u80fd\u4f1a\u89e6\u53d1 Let's\nEncrypt \u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://letsencrypt.org/zh-cn/docs/rate-limits/"},"\u901f\u7387\u9650\u5236"),"\uff0c\u5bfc\u81f4\u7b7e\u540d\u7684\u57df\u540d\u4e00\u6bb5\u65f6\u95f4\u5185\u65e0\u6cd5\u7b7e\u53d1\u65b0\u7684\u8bc1\u4e66\u3002")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{19,31,35,41} showLineNumbers","{19,31,35,41}":!0,showLineNumbers:!0},'version: "3.8"\n\nnetworks:\n  traefik:\n    name: traefik\n    attachable: true\n\nservices:\n  traefik:\n    image: traefik:v2.9\n    container_name: traefik\n    networks:\n      - traefik\n    ports:\n      - "80:80"\n      - "443:443"\n    volumes:\n      - /var/run/docker.sock:/var/run/docker.sock\n      - ./acme.json:/acme.json\n    command: >\n      --api.dashboard=true\n      --entrypoints.web.address=:80\n      --entrypoints.websecure.address=:443\n      --entrypoints.web.http.redirections.entrypoint.to=websecure\n      --entrypoints.web.http.redirections.entrypoint.scheme=https\n      --providers.docker=true\n      --providers.docker.endpoint=unix:///var/run/docker.sock\n      --providers.docker.watch=true\n      --providers.docker.exposedByDefault=false\n      --certificatesResolvers.myresolver.acme.httpChallenge.entryPoint=web\n      --certificatesresolvers.myresolver.acme.email=your-mail@mail.com\n    labels:\n      traefik.enable: "true"\n      traefik.docker.network: traefik\n      traefik.http.routers.dashboard.rule: Host(`traefik.yourdomain.com`)\n      traefik.http.routers.dashboard.tls: "true"\n      traefik.http.routers.dashboard.tls.certresolver: myresolver\n      traefik.http.routers.dashboard.service: "api@internal"\n      traefik.http.routers.dashboard.middlewares: auth\n      # \u8d26\u53f7\u5bc6\u7801 admin/P@88w0rd \u751f\u6210 echo $(htpasswd -nb user password) | sed -e s/\\\\$/\\\\$\\\\$/g\n      traefik.http.middlewares.auth.basicauth.users: "admin:$$apr1$$q8q0qpzT$$lvzMP7VYd9EUcG/wkIsAN."\n')),(0,n.kt)("h2",{id:"\u914d\u7f6e-halo-\u7684\u53cd\u5411\u4ee3\u7406"},"\u914d\u7f6e Halo \u7684\u53cd\u5411\u4ee3\u7406"),(0,n.kt)("p",null,"\u8fd9\u91cc\u4ee5\u6700\u7b80\u914d\u7f6e\uff08h2 \u6570\u636e\u5e93\uff09Halo \u670d\u52a1\u7684 Docker \u914d\u7f6e\u4e3e\u4f8b\u3002\u53ea\u9700\u505a\u4ee5\u4e0b\u8c03\u6574\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u9876\u5c42 ",(0,n.kt)("inlineCode",{parentName:"li"},"networks")," \u4e2d\u6dfb\u52a0\u4e86\u5916\u90e8\u7f51\u7edc ",(0,n.kt)("inlineCode",{parentName:"li"},"traefik")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"services.halo.networks")," \u4e2d\u6dfb\u52a0\u4e86 ",(0,n.kt)("inlineCode",{parentName:"li"},"traefik")," \u7f51\u7edc"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"services.halo.labels")," \u4e2d\u58f0\u660e\u4e86 Traefik \u914d\u7f6e",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"\u8def\u7531\u89c4\u5219\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"yourdomain.com")),(0,n.kt)("li",{parentName:"ol"},"\u5f00\u542f TLS"),(0,n.kt)("li",{parentName:"ol"},"\u6307\u5b9a\u4e86\u670d\u52a1\u7aef\u53e3\u4e3a 8090")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{4-5,16,20,25-31} showLineNumbers","{4-5,16,20,25-31}":!0,showLineNumbers:!0},'version: "3.8"\n\nnetworks:\n  traefik:\n    external: true\n  halo:\n\nservices:\n  halo:\n    image: halohub/halo:2.5\n    container_name: halo\n    restart: on-failure:3\n    volumes:\n      - ./:/root/.halo2\n    networks:\n      - traefik\n      - halo\n    command:\n      # \u5916\u90e8\u8bbf\u95ee\u5730\u5740\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u9700\u8981\u4fee\u6539\n      - --halo.external-url=https://yourdomain.com\n      # \u521d\u59cb\u5316\u7684\u8d85\u7ea7\u7ba1\u7406\u5458\u7528\u6237\u540d\n      - --halo.security.initializer.superadminusername=admin\n      # \u521d\u59cb\u5316\u7684\u8d85\u7ea7\u7ba1\u7406\u5458\u5bc6\u7801\n      - --halo.security.initializer.superadminpassword=P@88w0rd\n    labels:\n      traefik.enable: "true"\n      traefik.docker.network: traefik\n      traefik.http.routers.halo.rule: Host(`yourdomain.com`)\n      traefik.http.routers.halo.tls: "true"\n      traefik.http.routers.halo.tls.certresolver: myresolver\n      traefik.http.services.halo.loadbalancer.server.port: 8090\n')))}p.isMDXComponent=!0}}]);