"use strict";(self.webpackChunk_nineya_halo_docs=self.webpackChunk_nineya_halo_docs||[]).push([[5290],{2892:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(6600),l=(t(9496),t(9613));t(6401);const o={title:"\u4e0e OneinStack \u914d\u5408\u4f7f\u7528",description:"\u4f7f\u7528 OneinStack \u7684 vhost \u811a\u672c\u521b\u5efa Halo-Plus \u7ad9\u70b9\u7684 Nginx \u914d\u7f6e\u6587\u4ef6"},s=void 0,i={unversionedId:"getting-started/install/other/oneinstack",id:"version-1.0.0/getting-started/install/other/oneinstack",title:"\u4e0e OneinStack \u914d\u5408\u4f7f\u7528",description:"\u4f7f\u7528 OneinStack \u7684 vhost \u811a\u672c\u521b\u5efa Halo-Plus \u7ad9\u70b9\u7684 Nginx \u914d\u7f6e\u6587\u4ef6",source:"@site/versioned_docs/version-1.0.0/getting-started/install/other/oneinstack.md",sourceDirName:"getting-started/install/other",slug:"/getting-started/install/other/oneinstack",permalink:"/getting-started/install/other/oneinstack",draft:!1,editUrl:"https://github.com/nineya/halo-docs/edit/master/versioned_docs/version-1.0.0/getting-started/install/other/oneinstack.md",tags:[],version:"1.0.0",lastUpdatedBy:"nineya",lastUpdatedAt:1688001676,formattedLastUpdatedAt:"2023\u5e746\u670829\u65e5",frontMatter:{title:"\u4e0e OneinStack \u914d\u5408\u4f7f\u7528",description:"\u4f7f\u7528 OneinStack \u7684 vhost \u811a\u672c\u521b\u5efa Halo-Plus \u7ad9\u70b9\u7684 Nginx \u914d\u7f6e\u6587\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"\u4e0e\u5b9d\u5854\u9762\u677f\u914d\u5408\u4f7f\u7528",permalink:"/getting-started/install/other/bt-panel"},next:{title:"\u817e\u8baf\u4e91 CloudBase",permalink:"/getting-started/install/other/tencent-cloudbase"}},r={},p=[{value:"Halo-Plus \u90e8\u7f72",id:"halo-plus-\u90e8\u7f72",level:2},{value:"\u901a\u8fc7 OneinStack \u5b89\u88c5 Nginx",id:"\u901a\u8fc7-oneinstack-\u5b89\u88c5-nginx",level:2},{value:"\u521b\u5efa vhost",id:"\u521b\u5efa-vhost",level:2},{value:"\u4fee\u6539 Nginx \u914d\u7f6e\u6587\u4ef6",id:"\u4fee\u6539-nginx-\u914d\u7f6e\u6587\u4ef6",level:2},{value:"\u91cd\u8f7d Nginx \u4f7f\u914d\u7f6e\u751f\u6548",id:"\u91cd\u8f7d-nginx-\u4f7f\u914d\u7f6e\u751f\u6548",level:2}],c={toc:p};function d(n){let{components:e,...t}=n;return(0,l.kt)("wrapper",(0,a.Z)({},c,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"halo-plus-\u90e8\u7f72"},"Halo-Plus \u90e8\u7f72"),(0,l.kt)("p",null,"\u53c2\u89c1 ",(0,l.kt)("a",{parentName:"p",href:"/getting-started/install/linux"},"\u5728 Linux \u73af\u5883\u90e8\u7f72")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"\u300c\u53cd\u5411\u4ee3\u7406\u300d")," \u90e8\u5206\u4e0d\u8fdb\u884c\u64cd\u4f5c\uff0c\u4fdd\u8bc1 Halo-Plus \u670d\u52a1\u8fd0\u884c\u65e0\u8bef\u5373\u53ef\u3002")),(0,l.kt)("h2",{id:"\u901a\u8fc7-oneinstack-\u5b89\u88c5-nginx"},"\u901a\u8fc7 OneinStack \u5b89\u88c5 Nginx"),(0,l.kt)("p",null,"\u70b9\u51fb\u4e0b\u65b9\u94fe\u63a5\u8fdb\u5165 OneinStack \u5b98\u7f51\uff0c\u4ec5\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"p"},"\u5b89\u88c5 Nginx"),"\uff0c\u5176\u4ed6\u7684\u90fd\u53ef\u4ee5\u53d6\u6d88\u9009\u62e9\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://oneinstack.com/auto"},"https://oneinstack.com/auto")),(0,l.kt)("p",null,"\u6700\u540e\u70b9\u51fb ",(0,l.kt)("inlineCode",{parentName:"p"},"\u590d\u5236\u5b89\u88c5\u547d\u4ee4")," \u5230\u670d\u52a1\u5668\u6267\u884c\u5373\u53ef\u3002\u5982\u679c\u4f60\u4ec5\u5b89\u88c5 Nginx\uff0c\u4f60\u7684\u94fe\u63a5\u5e94\u8be5\u662f\u8fd9\u6837\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget -c http://mirrors.linuxeye.com/oneinstack-full.tar.gz && tar xzf oneinstack-full.tar.gz && ./oneinstack/install.sh --nginx_option 1\n")),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u8fd9\u4e00\u6b65\u4f1a\u7ecf\u8fc7\u7f16\u8bd1\u5b89\u88c5\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u5b89\u88c5\u65f6\u95f4\u5f88\u6f2b\u957f\uff0c\u8fd9\u4e3b\u8981\u53d6\u51b3\u4e8e\u4f60\u670d\u52a1\u5668\u7684\u6027\u80fd\u3002")),(0,l.kt)("p",null,"\u51fa\u73b0\u4e0b\u9762\u7684\u4fe1\u606f\u5373\u4ee3\u8868\u5b89\u88c5\u6210\u529f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Nginx installed successfully!\nCreated symlink from /etc/systemd/system/multi-user.target.wants/nginx.service to /usr/lib/systemd/system/nginx.service.\nRedirecting to /bin/systemctl start nginx.service\n####################Congratulations########################\nTotal OneinStack Install Time: 5 minutes\n\nNginx install dir:              /usr/local/nginx\n")),(0,l.kt)("h2",{id:"\u521b\u5efa-vhost"},"\u521b\u5efa vhost"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5373\u521b\u5efa\u4e00\u4e2a\u7ad9\u70b9\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd9\u6837\u7684\u65b9\u5f0f\u5728\u4f60\u7684\u670d\u52a1\u5668\u521b\u5efa\u65e0\u9650\u4e2a\u7ad9\u70b9\u3002\u63a5\u4e0b\u6765\u7684\u76ee\u7684\u5c31\u662f\u521b\u5efa\u4e00\u4e2a\u7ad9\u70b9\uff0c\u5e76\u53cd\u5411\u4ee3\u7406\u5230 Halo-Plus\u3002\u8fd9\u4e00\u6b65\u5728\u6b64\u6559\u7a0b\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"demo.halo-plus.nineya.com")," \u8fd9\u4e2a\u57df\u540d\u505a\u6f14\u793a\uff0c\u5b9e\u9645\u60c5\u51b5\u8bf7\u4fee\u6539\u6b64\u57df\u540d\u3002")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165\u5230 oneinstack \u76ee\u5f55\uff0c\u6267\u884c vhost \u521b\u5efa\u547d\u4ee4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd oneinstack\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sh vhost.sh\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u6309\u7167\u63d0\u793a\u9009\u62e9\u6216\u8f93\u5165\u76f8\u5173\u4fe1\u606f")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"What Are You Doing?\n    1. Use HTTP Only\n    2. Use your own SSL Certificate and Key\n    3. Use Let's Encrypt to Create SSL Certificate and Key\n    q. Exit\nPlease input the correct option:\n")),(0,l.kt)("p",null,"\u8fd9\u4e00\u6b65\u662f\u9009\u62e9\u8bc1\u4e66\u914d\u7f6e\u65b9\u5f0f\uff0c\u5982\u679c\u4f60\u6709\u81ea\u5df1\u7684\u8bc1\u4e66\uff0c\u8f93\u5165 ",(0,l.kt)("kbd",null,"2")," \u5373\u53ef\u3002\u5982\u679c\u9700\u8981\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Let's Encrypt")," \u7533\u8bf7\u8bc1\u4e66\uff0c\u9009\u62e9 ",(0,l.kt)("kbd",null,"3")," \u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Please input domain(example: www.example.com):\n")),(0,l.kt)("p",null,"\u8f93\u5165\u81ea\u5df1\u7684\u57df\u540d\u5373\u53ef\uff0c\u524d\u63d0\u662f\u5df2\u7ecf\u63d0\u524d\u89e3\u6790\u597d\u4e86\u57df\u540d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Please input the directory for the domain:demo.halo-plus.nineya.com :\n(Default directory: /data/wwwroot/demo.halo-plus.nineya.com):\n")),(0,l.kt)("p",null,"\u63d0\u793a\u8f93\u5165\u7ad9\u70b9\u6839\u76ee\u5f55\uff0c\u56e0\u4e3a\u6211\u4eec\u662f\u4f7f\u7528 Nginx \u7684\u53cd\u5411\u4ee3\u7406\uff0c\u6240\u4ee5\u8fd9\u4e2a\u76ee\u5f55\u662f\u6ca1\u6709\u5fc5\u8981\u914d\u7f6e\u7684\uff0c\u6211\u4eec\u76f4\u63a5\u4f7f\u7528\u9ed8\u8ba4\u7684\u5373\u53ef\uff08\u76f4\u63a5\u56de\u8f66\uff09\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Do you want to add more domain name? [y/n]:\n")),(0,l.kt)("p",null,"\u662f\u5426\u9700\u8981\u6dfb\u52a0\u5176\u4ed6\u57df\u540d\uff0c\u6309\u7167\u9700\u8981\u9009\u62e9\u5373\u53ef\uff0c\u5982\u679c\u4e0d\u9700\u8981\uff0c\u8f93\u5165 ",(0,l.kt)("kbd",null,"n")," \u5e76\u56de\u8f66\u786e\u8ba4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Do you want to add hotlink protection? [y/n]:\n")),(0,l.kt)("p",null,"\u662f\u5426\u9700\u8981\u505a\u9632\u76d7\u94fe\u5904\u7406\uff0c\u6309\u7167\u9700\u8981\u9009\u62e9\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Allow Rewrite rule? [y/n]:\n")),(0,l.kt)("p",null,"\u8def\u5f84\u91cd\u5199\u914d\u7f6e\uff0c\u6211\u4eec\u4e0d\u9700\u8981\uff0c\u9009\u62e9 ",(0,l.kt)("kbd",null,"n")," \u56de\u8f66\u786e\u5b9a\u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Allow Nginx/Tengine/OpenResty access_log? [y/n]:\n")),(0,l.kt)("p",null,"Nginx \u7684\u8bf7\u6c42\u65e5\u5fd7\uff0c\u5efa\u8bae\u9009\u62e9 ",(0,l.kt)("kbd",null,"y"),"\u3002"),(0,l.kt)("p",null,"\u8fd9\u6837\u5c31\u5b8c\u6210\u4e86 vhost \u7ad9\u70b9\u7684\u521b\u5efa\uff0c\u6700\u7ec8\u4f1a\u8f93\u51fa\u7ad9\u70b9\u7684\u76f8\u5173\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Your domain:                  demo.halo-plus.nineya.com\nVirtualhost conf:             /usr/local/nginx/conf/vhost/demo.halo-plus.nineya.com.conf\nDirectory of:                 /data/wwwroot/demo.halo-plus.nineya.com\n")),(0,l.kt)("p",null,"Nginx \u7684\u914d\u7f6e\u6587\u4ef6\u5373 ",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/local/nginx/conf/vhost/demo.halo-plus.nineya.com.conf"),"\u3002"),(0,l.kt)("h2",{id:"\u4fee\u6539-nginx-\u914d\u7f6e\u6587\u4ef6"},"\u4fee\u6539 Nginx \u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("p",null,"\u4e0a\u65b9\u521b\u5efa vhost \u7684\u8fc7\u7a0b\u5e76\u6ca1\u6709\u521b\u5efa\u53cd\u5411\u4ee3\u7406\u7684\u914d\u7f6e\uff0c\u6240\u4ee5\u9700\u8981\u6211\u4eec\u81ea\u5df1\u4fee\u6539\u4e00\u4e0b\u914d\u7f6e\u6587\u4ef6\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4f60\u719f\u6089\u7684\u5de5\u5177\u6253\u5f00\u914d\u7f6e\u6587\u4ef6\uff0c\u6b64\u6559\u7a0b\u4f7f\u7528 vim\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim /usr/local/nginx/conf/vhost/demo.halo-plus.nineya.com.conf\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},"\u5220\u9664\u4e00\u4e9b\u4e0d\u5fc5\u8981\u7684\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},"location ~ [^/]\\.php(/|$) {\n  #fastcgi_pass remote_php_ip:9000;\n  fastcgi_pass unix:/dev/shm/php-cgi.sock;\n  fastcgi_index index.php;\n  include fastcgi.conf;\n}\n")),(0,l.kt)("p",null,"\u6b64\u6bb5\u914d\u7f6e\u662f\u9488\u5bf9 php \u5e94\u7528\u7684\uff0c\u6240\u4ee5\u53ef\u4ee5\u5220\u6389\u3002"),(0,l.kt)("ol",{start:3},(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"li"},"upstream")," \u914d\u7f6e")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"server")," \u7684\u540c\u7ea7\u8282\u70b9\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},"upstream halo {\n  server 127.0.0.1:8090;\n}\n")),(0,l.kt)("ol",{start:4},(0,l.kt)("li",{parentName:"ol"},"\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"server")," \u8282\u70b9\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},"location / {\n  proxy_set_header HOST $host;\n  proxy_set_header X-Forwarded-Proto $scheme;\n  proxy_set_header X-Real-IP $remote_addr;\n  proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n  proxy_pass http://halo;\n}\n")),(0,l.kt)("ol",{start:5},(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"li"},"location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf|flv|mp4|ico)$")," \u8282\u70b9")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},"location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf|flv|mp4|ico)$ {\n  proxy_pass http://halo;\n  expires 30d;\n  access_log off;\n}\n")),(0,l.kt)("ol",{start:6},(0,l.kt)("li",{parentName:"ol"},"\u4fee\u6539 ",(0,l.kt)("inlineCode",{parentName:"li"},"location ~ .*\\.(js|css)?$")," \u8282\u70b9")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},"location ~ .*\\.(js|css)?$ {\n  proxy_pass http://halo;\n  expires 7d;\n  access_log off;\n}\n")),(0,l.kt)("p",null,"\u5982\u679c\u4e0d\u6309\u7167\u7b2c 5\uff0c6 \u6b65\u64cd\u4f5c\uff0c\u8bf7\u6c42\u4e00\u4e9b\u56fe\u7247\u6216\u8005\u6837\u5f0f\u6587\u4ef6\u4e0d\u4f1a\u7ecf\u8fc7 Halo-Plus\uff0c\u6240\u4ee5\u8bf7\u4e0d\u8981\u5ffd\u7565\u6b64\u914d\u7f6e\u3002"),(0,l.kt)("ol",{start:7},(0,l.kt)("li",{parentName:"ol"},"\u6dfb\u52a0 acme.sh \u7eed\u7b7e\u9a8c\u8bc1\u8def\u7531")),(0,l.kt)("p",null,"OneinStack \u4f7f\u7528\u7684 acme.sh \u7ba1\u7406\u8bc1\u4e66\uff0c\u5982\u679c\u4f60\u5728\u521b\u5efa vhost \u7684\u65f6\u5019\u9009\u62e9\u4e86\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Let's Encrypt")," \u7533\u8bf7\u8bc1\u4e66\uff0c\u90a3\u4e48 OneinStack \u4f1a\u5728\u7cfb\u7edf\u5185\u6dfb\u52a0\u4e00\u4e2a\u5b9a\u65f6\u4efb\u52a1\u53bb\u81ea\u52a8\u7eed\u7b7e\u8bc1\u4e66\uff0cacme.sh \u9ed8\u8ba4\u9a8c\u8bc1\u7ad9\u70b9\u6240\u6709\u6743\u7684\u65b9\u5f0f\u4e3a\u5728\u7ad9\u70b9\u6839\u76ee\u5f55\u751f\u6210\u4e00\u4e2a\u6587\u4ef6\uff08.well-known\uff09\u6765\u505a\u9a8c\u8bc1\uff0c\u7531\u4e8e\u914d\u7f6e\u4e86\u53cd\u5411\u4ee3\u7406\uff0c\u6240\u4ee5\u5728\u9a8c\u8bc1\u7684\u65f6\u5019\u662f\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee\u5230\u7ad9\u70b9\u76ee\u5f55\u4e0b\u7684 .well-known \u6587\u4ef6\u5939\u4e0b\u7684\u9a8c\u8bc1\u6587\u4ef6\u7684\u3002\u9700\u8981\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},'location ^~ /.well-known/acme-challenge/ {\n  default_type "text/plain";\n  allow all;\n  root /data/wwwroot/demo.halo-plus.nineya.com/;\n}\n')),(0,l.kt)("p",null,"\u81f3\u6b64\uff0c\u914d\u7f6e\u4fee\u6539\u5b8c\u6bd5\uff0c\u4fdd\u5b58\u5373\u53ef\u3002\u6700\u7ec8\u4f60\u7684\u914d\u7f6e\u6587\u4ef6\u53ef\u80fd\u5982\u4e0b\u9762\u914d\u7f6e\u4e00\u6837\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-nginx"},'upstream halo {\n  server 127.0.0.1:8090;\n}\nserver {\n  listen 80;\n  listen [::]:80;\n  listen 443 ssl http2;\n  listen [::]:443 ssl http2;\n  ssl_certificate /usr/local/nginx/conf/ssl/demo.halo-plus.nineya.com.crt;\n  ssl_certificate_key /usr/local/nginx/conf/ssl/demo.halo-plus.nineya.com.key;\n  ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;\n  ssl_ciphers TLS13-AES-256-GCM-SHA384:TLS13-CHACHA20-POLY1305-SHA256:TLS13-AES-128-GCM-SHA256:TLS13-AES-128-CCM-8-SHA256:TLS13-AES-128-CCM-SHA256:EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;\n  ssl_prefer_server_ciphers on;\n  ssl_session_timeout 10m;\n  ssl_session_cache builtin:1000 shared:SSL:10m;\n  ssl_buffer_size 1400;\n  add_header Strict-Transport-Security max-age=15768000;\n  ssl_stapling on;\n  ssl_stapling_verify on;\n  server_name demo.halo-plus.nineya.com;\n  access_log /data/wwwlogs/demo.halo-plus.nineya.com_nginx.log combined;\n  index index.html index.htm index.php;\n  root /data/wwwroot/demo.halo-plus.nineya.com;\n  if ($ssl_protocol = "") { return 301 https://$host$request_uri; }\n  include /usr/local/nginx/conf/rewrite/none.conf;\n  #error_page 404 /404.html;\n  #error_page 502 /502.html;\n  location ~ .*\\.(gif|jpg|jpeg|png|bmp|swf|flv|mp4|ico)$ {\n    proxy_pass http://halo;\n    expires 30d;\n    access_log off;\n  }\n  location ~ .*\\.(js|css)?$ {\n    proxy_pass http://halo;\n    expires 7d;\n    access_log off;\n  }\n  location ~ /(\\.user\\.ini|\\.ht|\\.git|\\.svn|\\.project|LICENSE|README\\.md) {\n    deny all;\n  }\n  location / {\n    proxy_set_header HOST $host;\n    proxy_set_header X-Forwarded-Proto $scheme;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_pass http://halo;\n  }\n  location ^~ /.well-known/acme-challenge/ {\n    default_type "text/plain";\n    allow all;\n    root /data/wwwroot/demo.halo-plus.nineya.com/;\n  }\n}\n')),(0,l.kt)("h2",{id:"\u91cd\u8f7d-nginx-\u4f7f\u914d\u7f6e\u751f\u6548"},"\u91cd\u8f7d Nginx \u4f7f\u914d\u7f6e\u751f\u6548"),(0,l.kt)("p",null,"\u9a8c\u8bc1 nginx \u914d\u7f6e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nginx -t\n")),(0,l.kt)("p",null,"\u5982\u679c\u8f93\u51fa\u5982\u4e0b\u63d0\u793a\u5219\u4ee3\u8868\u914d\u7f6e\u6709\u6548\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nginx: the configuration file /usr/local/nginx/conf/nginx.conf syntax is ok\nnginx: configuration file /usr/local/nginx/conf/nginx.conf test is successful\n")),(0,l.kt)("p",null,"\u91cd\u8f7d Nginx \u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"nginx -s reload\n")),(0,l.kt)("p",null,"\u81f3\u6b64\uff0c\u6574\u4e2a\u6559\u7a0b\u5b8c\u6bd5\uff0c\u73b0\u5728\u4f60\u53ef\u4ee5\u8bbf\u95ee\u57df\u540d\u68c0\u67e5\u662f\u5426\u5df2\u7ecf\u914d\u7f6e\u6210\u529f\u3002"))}d.isMDXComponent=!0}}]);