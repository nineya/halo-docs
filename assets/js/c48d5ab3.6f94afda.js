"use strict";(self.webpackChunk_nineya_halo_docs=self.webpackChunk_nineya_halo_docs||[]).push([[3535],{4662:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var t=n(6600),o=(n(9496),n(9613));n(6401);const l={title:"\u4f7f\u7528 Docker Compose \u90e8\u7f72 Halo",description:"\u4f7f\u7528 Docker Compose \u90e8\u7f72 Halo"},r=void 0,i={unversionedId:"getting-started/install/other/docker-compose",id:"getting-started/install/other/docker-compose",title:"\u4f7f\u7528 Docker Compose \u90e8\u7f72 Halo",description:"\u4f7f\u7528 Docker Compose \u90e8\u7f72 Halo",source:"@site/docs/getting-started/install/other/docker-compose.md",sourceDirName:"getting-started/install/other",slug:"/getting-started/install/other/docker-compose",permalink:"/1.1-SNAPSHOT/getting-started/install/other/docker-compose",draft:!1,editUrl:"https://github.com/nineya/halo-docs/edit/master/docs/getting-started/install/other/docker-compose.md",tags:[],version:"current",lastUpdatedBy:"nineya",lastUpdatedAt:1696760486,formattedLastUpdatedAt:"2023\u5e7410\u67088\u65e5",frontMatter:{title:"\u4f7f\u7528 Docker Compose \u90e8\u7f72 Halo",description:"\u4f7f\u7528 Docker Compose \u90e8\u7f72 Halo"},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 Docker \u90e8\u7f72 Halo-Plus \u548c MySQL",permalink:"/1.1-SNAPSHOT/getting-started/install/other/docker-mysql"},next:{title:"\u4e09\u65b9\u6307\u5357",permalink:"/1.1-SNAPSHOT/getting-started/install/third-party"}},p={},s=[{value:"\u521b\u5efa\u5bb9\u5668\u7ec4",id:"\u521b\u5efa\u5bb9\u5668\u7ec4",level:2},{value:"\u53cd\u5411\u4ee3\u7406",id:"\u53cd\u5411\u4ee3\u7406",level:2},{value:"Nginx",id:"nginx",level:3},{value:"Caddy 1.x",id:"caddy-1x",level:3},{value:"Caddy 2.x",id:"caddy-2x",level:3},{value:"\u66f4\u65b0\u5bb9\u5668\u7ec4",id:"\u66f4\u65b0\u5bb9\u5668\u7ec4",level:2}],m={toc:s};function d(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u5728\u7ee7\u7eed\u64cd\u4f5c\u4e4b\u524d\uff0c\u6211\u4eec\u63a8\u8350\u60a8\u5148\u9605\u8bfb",(0,o.kt)("a",{parentName:"p",href:"../../prepare"},"\u300a\u5199\u5728\u524d\u9762\u300b"),"\uff0c\u8fd9\u53ef\u4ee5\u5feb\u901f\u5e2e\u52a9\u4f60\u4e86\u89e3 Halo-Plus\u3002")),(0,o.kt)("h2",{id:"\u521b\u5efa\u5bb9\u5668\u7ec4"},"\u521b\u5efa\u5bb9\u5668\u7ec4"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5728\u7cfb\u7edf\u4efb\u610f\u4f4d\u7f6e\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\u5939\uff0c\u6b64\u6587\u6863\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"~/halo-plus-app")," \u4e3a\u4f8b\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir ~/halo-plus-app && cd ~/halo-plus-app\n")),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff1a\u540e\u7eed\u64cd\u4f5c\u4e2d\uff0cHalo-Plus \u7684\u6240\u6709\u76f8\u5173\u6570\u636e\u90fd\u4f1a\u4fdd\u5b58\u5728\u8fd9\u4e2a\u76ee\u5f55\uff0c\u8bf7\u59a5\u5584\u4fdd\u5b58\u3002"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efa ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")),(0,o.kt)("p",{parentName:"li"},"\u6b64\u6587\u6863\u63d0\u4f9b\u4e09\u79cd\u573a\u666f\u7684 Docker Compose \u914d\u7f6e\u6587\u4ef6\uff0c\u8bf7\u6839\u636e\u4f60\u7684\u9700\u8981\u9009\u62e9\u4e00\u79cd\u3002"),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u6b64\u6587\u6863\u4e3a\u4e86\u66f4\u52a0\u65b9\u4fbf\u7684\u7ba1\u7406\u914d\u7f6e\uff0c\u6240\u6709\u4e0e Halo-Plus \u76f8\u5173\u7684\u914d\u7f6e\u90fd\u4f7f\u7528 Docker \u73af\u5883\u53d8\u91cf\u4ee3\u66ff\uff0c\u6240\u4ee5\u65e0\u9700\u521b\u5efa application.yaml \u6587\u4ef6\u3002")),(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u4ec5\u521b\u5efa Halo-Plus \u5b9e\u4f8b\uff08\u4f7f\u7528\u9ed8\u8ba4\u7684 H2 \u6570\u636e\u5e93\uff09\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{18-19}","{18-19}":!0},'version: "3"\n\nservices:\n  halo-plus:\n    image: nineya/halo-plus:latest\n    container_name: halo-plus\n    restart: on-failure:3\n    volumes:\n      - ./:/root/.halo-plus\n      - /etc/timezone:/etc/timezone:ro\n      - /etc/localtime:/etc/localtime:ro\n    ports:\n      - "8090:8090"\n    environment:\n      - SERVER_PORT=8090\n      - SPRING_DATASOURCE_DRIVER_CLASS_NAME=org.h2.Driver\n      - SPRING_DATASOURCE_URL=jdbc:h2:file:~/.halo-plus/db/halo-plus\n      - SPRING_DATASOURCE_USERNAME=admin\n      - SPRING_DATASOURCE_PASSWORD=o#DwN&JSa56\n      - HALO_ADMIN_PATH=admin\n      - HALO_CACHE=memory\n')),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u60a8\u53ef\u4ee5\u524d\u5f80 ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/nineya/halo-plus"},"https://hub.docker.com/r/nineya/halo-plus")," \u67e5\u770b\u6700\u65b0\u7248\u672c\u955c\u50cf\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u5177\u4f53\u7248\u672c\u53f7\u7684\u955c\u50cf\uff0c\u4f46\u4e5f\u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," \u6807\u7b7e\u7684\u955c\u50cf\uff0c\u5b83\u59cb\u7ec8\u662f\u6700\u65b0\u7684\u3002"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efa Halo-Plus + MySQL \u7684\u5b9e\u4f8b\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{22-23,45}","{22-23,45}":!0},'version: "3"\n\nservices:\n  halo-plus-server:\n    image: nineya/halo-plus:latest\n    container_name: halo-plus-server\n    restart: on-failure:3\n    depends_on:\n      - halo-mysql\n    networks:\n      halo_network:\n    volumes:\n      - ./:/root/.halo-plus\n      - /etc/timezone:/etc/timezone:ro\n      - /etc/localtime:/etc/localtime:ro\n    ports:\n      - "8090:8090"\n    environment:\n      - SERVER_PORT=8090\n      - SPRING_DATASOURCE_DRIVER_CLASS_NAME=com.mysql.cj.jdbc.Driver\n      - SPRING_DATASOURCE_URL=jdbc:mysql://halo_mysql:3306/halodb?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true\n      - SPRING_DATASOURCE_USERNAME=root\n      - SPRING_DATASOURCE_PASSWORD=o#DwN&JSa56\n      - HALO_ADMIN_PATH=admin\n      - HALO_CACHE=memory\n\n  halo-mysql:\n    image: mysql:8.0.27\n    container_name: halo-mysql\n    restart: on-failure:3\n    networks:\n      halo_network:\n    command: --default-authentication-plugin=mysql_native_password\n      --character-set-server=utf8mb4\n      --collation-server=utf8mb4_general_ci\n      --explicit_defaults_for_timestamp=true\n    volumes:\n      - /etc/localtime:/etc/localtime:ro\n      - ./mysql:/var/lib/mysql\n      - ./mysqlBackup:/data/mysqlBackup\n    ports:\n      - "3306:3306"\n    environment:\n      # \u8bf7\u4fee\u6539\u6b64\u5bc6\u7801\uff0c\u5e76\u5bf9\u5e94\u4fee\u6539\u4e0a\u65b9 Halo-Plus \u670d\u52a1\u7684 SPRING_DATASOURCE_PASSWORD \u53d8\u91cf\u503c\n      - MYSQL_ROOT_PASSWORD=o#DwN&JSa56\n      - MYSQL_DATABASE=halodb\n\nnetworks:\n  halo_network:\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u521b\u5efa Halo-Plus + MySQL + Redis \u7684\u5b9e\u4f8b\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{22-23,29,49,62}","{22-23,29,49,62}":!0},'version: "3"\n\nservices:\n  halo-plus-server:\n    image: nineya/halo-plus:latest\n    container_name: halo-plus-server\n    restart: on-failure:3\n    depends_on:\n      - halo-mysql\n      - halo-redis\n    networks:\n      halo_network:\n    volumes:\n      - ./:/root/.halo-plus\n      - /etc/timezone:/etc/timezone:ro\n      - /etc/localtime:/etc/localtime:ro\n    ports:\n      - "8090:8090"\n    environment:\n      - SERVER_PORT=8090\n      - SPRING_DATASOURCE_DRIVER_CLASS_NAME=com.mysql.cj.jdbc.Driver\n      - SPRING_DATASOURCE_URL=jdbc:mysql://halo_mysql:3306/halodb?characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true\n      - SPRING_DATASOURCE_USERNAME=root\n      - SPRING_DATASOURCE_PASSWORD=o#DwN&JSa56\n      - HALO_ADMIN_PATH=admin\n      - HALO_CACHE=redis\n      - SPRING_REDIS_PORT=6379\n      - SPRING_REDIS_DATABASE=0\n      - SPRING_REDIS_HOST=halo_redis\n      - SPRING_REDIS_PASSWORD=dm5fD%rvPtq\n\n  halo-mysql:\n    image: mysql:8.0.27\n    container_name: halo-mysql\n    restart: on-failure:3\n    networks:\n      halo_network:\n    command: --default-authentication-plugin=mysql_native_password\n      --character-set-server=utf8mb4\n      --collation-server=utf8mb4_general_ci\n      --explicit_defaults_for_timestamp=true\n    volumes:\n      - /etc/localtime:/etc/localtime:ro\n      - ./mysql:/var/lib/mysql\n      - ./mysqlBackup:/data/mysqlBackup\n    ports:\n      - "3306:3306"\n    environment:\n      # \u8bf7\u4fee\u6539\u6b64\u5bc6\u7801\uff0c\u5e76\u5bf9\u5e94\u4fee\u6539\u4e0a\u65b9 Halo-Plus \u670d\u52a1\u7684 SPRING_DATASOURCE_PASSWORD \u53d8\u91cf\u503c\n      - MYSQL_ROOT_PASSWORD=o#DwN&JSa56\n      - MYSQL_DATABASE=halodb\n\n  halo-redis:\n    image: redis\n    container_name: halo-redis\n    restart: on-failure:3\n    networks:\n      halo_network:\n    volumes:\n      - ./redis/data:/data\n      - ./redis/logs:/logs\n    # \u8bf7\u4fee\u6539\u6b64\u5bc6\u7801\uff0c\u5e76\u5bf9\u5e94\u4fee\u6539\u4e0a\u65b9 Halo-Plus \u670d\u52a1\u7684 SPRING_REDIS_PASSWORD \u53d8\u91cf\u503c\n    command: redis-server --requirepass dm5fD%rvPtq\n    ports:\n      - "6379:6379"\nnetworks:\n  halo_network:\n'))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u542f\u52a8 Halo-Plus \u670d\u52a1"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6253\u5f00 ",(0,o.kt)("inlineCode",{parentName:"p"},"http://ip:\u7aef\u53e3\u53f7")," \u5373\u53ef\u770b\u5230\u5b89\u88c5\u5f15\u5bfc\u754c\u9762\u3002"),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u9700\u8981\u914d\u7f6e\u57df\u540d\u8bbf\u95ee\uff0c\u5efa\u8bae\u5148\u914d\u7f6e\u597d\u53cd\u5411\u4ee3\u7406\u4ee5\u53ca\u57df\u540d\u89e3\u6790\u518d\u8fdb\u884c\u521d\u59cb\u5316\u3002\u5982\u679c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"http://ip:\u7aef\u53e3\u53f7")," \u7684\u5f62\u5f0f\u65e0\u6cd5\u8bbf\u95ee\uff0c\u8bf7\u5230\u670d\u52a1\u5668\u5382\u5546\u540e\u53f0\u5c06\u8fd0\u884c\u7684\u7aef\u53e3\u53f7\u6dfb\u52a0\u5230\u5b89\u5168\u7ec4\uff0c\u5982\u679c\u670d\u52a1\u5668\u4f7f\u7528\u4e86 Linux \u9762\u677f\uff0c\u8bf7\u68c0\u67e5\u6b64 Linux \u9762\u677f\u662f\u5426\u6709\u8fd8\u6709\u5b89\u5168\u7ec4\u914d\u7f6e\uff0c\u9700\u8981\u540c\u6837\u5c06\u7aef\u53e3\u53f7\u6dfb\u52a0\u5230\u5b89\u5168\u7ec4\u3002")))),(0,o.kt)("h2",{id:"\u53cd\u5411\u4ee3\u7406"},"\u53cd\u5411\u4ee3\u7406"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4e0b\u9762\u7684\u53cd\u5411\u4ee3\u7406\u8f6f\u4ef6\u4e2d\u4efb\u9009\u4e00\u9879\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u5df2\u7ecf\u5b89\u88c5\u597d\u4e86\u5176\u4e2d\u4e00\u9879\uff0c\u5e76\u5bf9\u5176\u7684\u57fa\u672c\u64cd\u4f5c\u6709\u4e00\u5b9a\u4e86\u89e3\u3002\u5982\u679c\u4f60\u5bf9 Nginx \u4e0d\u719f\u6089\uff0c\u6211\u4eec\u63a8\u8350\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"./oneinstack"},"OneinStack")," \u6765\u7ba1\u7406 Nginx\u3002"),(0,o.kt)("h3",{id:"nginx"},"Nginx"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-nginx"},"upstream halo-plus {\n  server 127.0.0.1:8090;\n}\nserver {\n  listen 80;\n  listen [::]:80;\n  server_name www.yourdomain.com;\n  client_max_body_size 1024m;\n  location / {\n    proxy_pass http://halo-plus;\n    proxy_set_header HOST $host;\n    proxy_set_header X-Forwarded-Proto $scheme;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n  }\n}\n")),(0,o.kt)("h3",{id:"caddy-1x"},"Caddy 1.x"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"https://www.yourdomain.com {\n gzip\n tls your@email.com\n proxy / localhost:8090 {\n  transparent\n }\n}\n")),(0,o.kt)("h3",{id:"caddy-2x"},"Caddy 2.x"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"www.yourdomain.com\n\nencode gzip\n\nreverse_proxy 127.0.0.1:8090\n")),(0,o.kt)("p",null,"\u4ee5\u4e0a\u914d\u7f6e\u90fd\u53ef\u4ee5\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com//halo-dev/halo-common"},"https://github.com//halo-dev/halo-common")," \u627e\u5230\u3002"),(0,o.kt)("h2",{id:"\u66f4\u65b0\u5bb9\u5668\u7ec4"},"\u66f4\u65b0\u5bb9\u5668\u7ec4"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u5047\u8bbe\u60a8\u7684 Halo-Plus \u670d\u52a1\u5bb9\u5668\u662f\u6309\u7167 ",(0,o.kt)("a",{parentName:"p",href:"/1.1-SNAPSHOT/getting-started/install/other/docker-compose"},"\u4f7f\u7528 Docker Compose \u90e8\u7f72 Halo")," \u4e2d\u7684\u65b9\u5f0f\u542f\u52a8\u7684\u3002\u5982\u6709\u4e0d\u540c\uff0c\u8bf7\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u4fee\u6539\u3002")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u505c\u6b62\u8fd0\u884c\u4e2d\u7684\u5bb9\u5668\u7ec4"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/halo-app && docker-compose stop\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5907\u4efd\u6570\u636e\uff08\u91cd\u8981\uff09"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp -r ~/halo-app ~/halo-app.archive\n")),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"halo-app.archive")," \u6587\u4ef6\u540d\u4e0d\u4e00\u5b9a\u8981\u6839\u636e\u6b64\u6587\u6863\u547d\u540d\uff0c\u8fd9\u91cc\u4ec5\u4ec5\u662f\u4e2a\u793a\u4f8b\u3002"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u6e05\u7a7a ",(0,o.kt)("a",{parentName:"p",href:"/1.1-SNAPSHOT/getting-started/config#%E7%BC%93%E5%AD%98"},"leveldb \u6216 Redis")," \u7f13\u5b58\uff08\u5982\u679c\u6709\u4f7f\u7528 leveldb \u6216 Redis \u4f5c\u4e3a\u7f13\u5b58\u7b56\u7565\uff09"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rm -rf ~/halo-plus-app/.leveldb\n\nrm -rf ~/halo-plus-app/redis\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u66f4\u65b0 Halo-Plus \u670d\u52a1"),(0,o.kt)("p",{parentName:"li"},"\u9488\u5bf9\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," \u6807\u7b7e\u955c\u50cf\u7684\u66f4\u65b0\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose pull && docker-compose up -d\n")),(0,o.kt)("admonition",{parentName:"li",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6ce8\u610f\uff0c\u5f53\u60a8\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Docker")," \u955c\u50cf\u6e90\u975e\u5b98\u65b9\u6e90\u65f6\uff0c\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose pull")," \u547d\u4ee4\u65f6\u53ef\u80fd\u65e0\u6cd5\u83b7\u53d6\u5230\u6700\u65b0\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"latest")," \u6807\u7b7e\u7684\u955c\u50cf\u3002")),(0,o.kt)("p",{parentName:"li"},"\u9488\u5bf9\u4f7f\u7528\u5177\u4f53\u7248\u672c\u6807\u7b7e\u955c\u50cf\u7684\u66f4\u65b0\uff1a"),(0,o.kt)("p",{parentName:"li"},"\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml")," \u4e2d\u914d\u7f6e\u7684\u955c\u50cf\u7248\u672c\u3002"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"{3}","{3}":!0},"services:\n  halo-plus-server:\n    image: nineya/halo-plus:latest\n    container_name: halo-plus-server\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u542f\u52a8\u5bb9\u5668\u7ec4\uff1a"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up -d\n")))))}d.isMDXComponent=!0}}]);