"use strict";(self.webpackChunk_nineya_docs=self.webpackChunk_nineya_docs||[]).push([[69],{9855:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(6600),l=(a(9496),a(9613));a(6401);const i={title:"\u76f8\u5173\u8bf4\u660e",description:"\u5f00\u53d1\u73af\u5883\u7684\u4e00\u4e9b\u8bf4\u660e"},r=void 0,o={unversionedId:"developer-guide/core/prepare",id:"developer-guide/core/prepare",title:"\u76f8\u5173\u8bf4\u660e",description:"\u5f00\u53d1\u73af\u5883\u7684\u4e00\u4e9b\u8bf4\u660e",source:"@site/docs/developer-guide/core/prepare.md",sourceDirName:"developer-guide/core",slug:"/developer-guide/core/prepare",permalink:"/1.1.0-SNAPSHOT/developer-guide/core/prepare",draft:!1,editUrl:"https://github.com/nineya/halo-docs/edit/main/docs/developer-guide/core/prepare.md",tags:[],version:"current",lastUpdatedBy:"nineya",lastUpdatedAt:1685668451,formattedLastUpdatedAt:"2023\u5e746\u67082\u65e5",frontMatter:{title:"\u76f8\u5173\u8bf4\u660e",description:"\u5f00\u53d1\u73af\u5883\u7684\u4e00\u4e9b\u8bf4\u660e"},sidebar:"tutorialSidebar",previous:{title:"\u7cfb\u7edf\u7ed3\u6784",permalink:"/1.1.0-SNAPSHOT/developer-guide/core/structure"},next:{title:"\u4ee3\u7801\u98ce\u683c",permalink:"/1.1.0-SNAPSHOT/developer-guide/core/code-style"}},p={},d=[{value:"\u6240\u9700\u8981\u7684\u73af\u5883",id:"\u6240\u9700\u8981\u7684\u73af\u5883",level:2},{value:"\u514b\u9686\u9879\u76ee\uff08Optional\uff09",id:"\u514b\u9686\u9879\u76eeoptional",level:2},{value:"\u5bfc\u5165\u9879\u76ee",id:"\u5bfc\u5165\u9879\u76ee",level:2},{value:"\u8fd0\u884c\u65b9\u5f0f",id:"\u8fd0\u884c\u65b9\u5f0f",level:2},{value:"\u76f4\u63a5\u8fd0\u884c <code>Application</code> \u4e3b\u7c7b\uff08\u914d\u5408 IDE \u8fd0\u884c\uff09",id:"\u76f4\u63a5\u8fd0\u884c-application-\u4e3b\u7c7b\u914d\u5408-ide-\u8fd0\u884c",level:3},{value:"\u91c7\u7528 <code>gradle bootRun task</code> \u8fd0\u884c\uff08\u4e0d\u9700\u8981 IDE\uff09",id:"\u91c7\u7528-gradle-bootrun-task-\u8fd0\u884c\u4e0d\u9700\u8981-ide",level:3},{value:"\u9ad8\u7ea7\u914d\u7f6e",id:"\u9ad8\u7ea7\u914d\u7f6e",level:2},{value:"\u8c03\u6574\u542f\u52a8\u53c2\u6570\uff08VMoptions\uff09",id:"\u8c03\u6574\u542f\u52a8\u53c2\u6570vmoptions",level:3},{value:"\u8c03\u6574\u542f\u52a8\u53c2\u6570\uff08args\uff09",id:"\u8c03\u6574\u542f\u52a8\u53c2\u6570args",level:3},{value:"\u542f\u7528\u81ea\u52a8\u6784\u5efa\uff08Build project automatically\uff09",id:"\u542f\u7528\u81ea\u52a8\u6784\u5efabuild-project-automatically",level:3}],s={toc:d};function k(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u6240\u9700\u8981\u7684\u73af\u5883"},"\u6240\u9700\u8981\u7684\u73af\u5883"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"IDE\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/idea/download/"},"IntelliJ IDEA")," \u6216\u8005 ",(0,l.kt)("a",{parentName:"li",href:"https://spring.io/tools"},"STS"),"\uff08Spring Tools Suite\uff09"),(0,l.kt)("li",{parentName:"ol"},"\u5de5\u5177\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://gradle.org/"},"Gradle"),"\uff0c",(0,l.kt)("a",{parentName:"li",href:"https://projectlombok.org/"},"Lombok")," \u63d2\u4ef6"),(0,l.kt)("li",{parentName:"ol"},"JDK\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"11+"))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u63a8\u8350 IntelliJ IDEA \u793e\u533a\u7248\uff08\u5f00\u6e90\u514d\u8d39\uff09",(0,l.kt)("a",{parentName:"p",href:"https://github.com/JetBrains/intellij-community"},"https://github.com/JetBrains/intellij-community"))),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Halo-Plus")," \u9879\u76ee\u4f7f\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"Lombok"),"\uff0c\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"Halo-Plus")," \u4e4b\u524d\u8bf7\u68c0\u67e5 ",(0,l.kt)("inlineCode",{parentName:"p"},"IDE")," \u662f\u5426\u5df2\u7ecf\u5b89\u88c5\u597d\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"Lombok")," \u63d2\u4ef6\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"IDE")," \u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"IntelliJ IDEA"),"\uff0c\u8bf7\u5728\u8bbe\u7f6e\u4e2d\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"Build, Execution, Deployment/Annotation Processors")," \u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Enable annotation processing"),"\u3002"),(0,l.kt)("p",null,"\u5982\u679c\u4ecd\u7136\u56e0\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Lombok")," \u62a5\u9519\uff0c\u8bf7\u66f4\u65b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"IntelliJ IDEA")," \u81f3\u6700\u65b0\u7248\u3002"),(0,l.kt)("h2",{id:"\u514b\u9686\u9879\u76eeoptional"},"\u514b\u9686\u9879\u76ee\uff08Optional\uff09"),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf ",(0,l.kt)("inlineCode",{parentName:"p"},"fork")," \u4e86 ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/halo-dev/halo"},(0,l.kt)("inlineCode",{parentName:"a"},"Halo-Plus")),"\uff0c\u8bf7\u5c06\u4ee5\u4e0b\u547d\u4ee4\u4e2d\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"halo-dev")," \u66ff\u6362\u4e3a\u4f60\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"GitHub \u7528\u6237\u540d"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --recursive https://github.com/halo-dev/halo\n\n// \u5982\u679c\u4f60\u5728 GitHub \u4e0a\u5df2\u7ecf\u6dfb\u52a0\u4e86\u4f60\u7684 ssh key\uff0c\u8bf7\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c clone\uff1a\ngit clone --recursive git@github.com:halo-dev/halo.git\n")),(0,l.kt)("p",null,"\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u8fdb\u884c\u514b\u9686\uff0c\u8fd9\u6837\u6bcf\u6b21\u63d0\u4ea4\u4ee3\u7801\u7684\u65f6\u5019\uff0c\u5c31\u4e0d\u4f1a\u63d0\u793a\u767b\u5f55 ",(0,l.kt)("inlineCode",{parentName:"p"},"GitHub")," \u4e86\u3002"),(0,l.kt)("h2",{id:"\u5bfc\u5165\u9879\u76ee"},"\u5bfc\u5165\u9879\u76ee"),(0,l.kt)("p",null,"\u5bfc\u5165\u9879\u76ee\u7684\u65f6\u5019\u8bf7\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"p"},"Gradle \u9879\u76ee"),"\u8fdb\u884c\u5bfc\u5165\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"IntelliJ IDEA")," \u5728\u5bfc\u5165\u9879\u76ee\u7684\u65f6\u5019\u8bf7\u52fe\u9009 ",(0,l.kt)("inlineCode",{parentName:"p"},"auto import"),"\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"gradle wrapper"),"\u3002")),(0,l.kt)("h2",{id:"\u8fd0\u884c\u65b9\u5f0f"},"\u8fd0\u884c\u65b9\u5f0f"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Halo-Plus")," \u8fd0\u884c\u65b9\u5f0f\u603b\u4f53\u6765\u8bb2\u6709\u4ee5\u4e0b\u4e24\u79cd\uff1a"),(0,l.kt)("h3",{id:"\u76f4\u63a5\u8fd0\u884c-application-\u4e3b\u7c7b\u914d\u5408-ide-\u8fd0\u884c"},"\u76f4\u63a5\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"h3"},"Application")," \u4e3b\u7c7b\uff08\u914d\u5408 IDE \u8fd0\u884c\uff09"),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u6307\u5b9a\u914d\u7f6e\uff0c\u8bf7\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"Run/Debug Configuration")," \u5185\u8fdb\u884c\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"VM options"),"\uff08\u8fd9\u91cc\u63a8\u8350\u91c7\u7528\u4e0a\u6587\u7684",(0,l.kt)("a",{parentName:"p",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%85%8D%E7%BD%AE"},"\u81ea\u5b9a\u4e49\u914d\u7f6e"),"\uff09\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"-Dspring.profiles.active=dev\n-Dhalo.auth-enabled=false\n-Dhalo.production-env=false\n")),(0,l.kt)("h3",{id:"\u91c7\u7528-gradle-bootrun-task-\u8fd0\u884c\u4e0d\u9700\u8981-ide"},"\u91c7\u7528 ",(0,l.kt)("inlineCode",{parentName:"h3"},"gradle bootRun task")," \u8fd0\u884c\uff08\u4e0d\u9700\u8981 IDE\uff09"),(0,l.kt)("p",null,"\u5728\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# \u7c7b Unix \u7528\u6237\n./gradlew bootRun\n\n# Windows \u7528\u6237\n./gradlew.bat bootRun\n")),(0,l.kt)("p",null,"\u5982\u679c\u9700\u8981\u624b\u52a8\u6307\u5b9a\u914d\u7f6e\uff0c\u53ef\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"--args")," \u53c2\u6570\uff08\u8fd9\u91cc\u63a8\u8350\u91c7\u7528\u4e0a\u6587\u7684",(0,l.kt)("a",{parentName:"p",href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E9%85%8D%E7%BD%AE"},"\u81ea\u5b9a\u4e49\u914d\u7f6e"),"\uff09\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'# \u7c7b Unix \u7528\u6237\n./gradlew bootRun --args="--spring.profiles.active=dev --server.port=2333"\n\n# Windows \u7528\u6237\n./gradlew.bat bootRun --args="--spring.profiles.active=dev --server.port=2333"\n')),(0,l.kt)("p",null,"\u5982\u679c\u4e00\u5207\u6b63\u5e38\u4e14\u6ca1\u6709\u989d\u5916\u6307\u5b9a\u914d\u7f6e\uff0c\u5219\u53ef\u6839\u636e\u63a7\u5236\u53f0\u7684\u8f93\u51fa\u94fe\u63a5\u8fdb\u884c\u8bbf\u95ee ",(0,l.kt)("inlineCode",{parentName:"p"},"Halo-Plus"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},"2019-06-06 16:20:52.285  INFO 1330 --- [  restartedMain] run.halo.app.listener.StartedListener    : Halo started at         http://127.0.0.1:8090\n2019-06-06 16:20:52.285  INFO 1330 --- [  restartedMain] run.halo.app.listener.StartedListener    : Halo admin started at   http://127.0.0.1:8090/admin\n2019-06-06 16:20:52.285 DEBUG 1330 --- [  restartedMain] run.halo.app.listener.StartedListener    : Halo doc was enable at  http://127.0.0.1:8090/swagger-ui.html # \u4ec5\u5728\u5f00\u53d1\u73af\u5883\u624d\u4f1a\u8f93\u51fa\n")),(0,l.kt)("p",null,"\u9996\u6b21\u8fd0\u884c\u7684\u65f6\u5019\uff0c\u4f1a\u8df3\u8f6c\u5230\u535a\u5ba2\u5b89\u88c5\u9875\u9762\uff0c\u8bf7\u5927\u5bb6\u8010\u5fc3\u586b\u5199\u5b8c\u6bd5\uff0c\u6700\u540e\u6b63\u5f0f\u8fdb\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"\u5f00\u53d1\u4e4b\u65c5"),"\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u63a8\u8350\u4e00\u4e2a\u914d\u7f6e\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"key"),(0,l.kt)("th",{parentName:"tr",align:"left"},"value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7528\u6237\u540d"),(0,l.kt)("td",{parentName:"tr",align:"left"},"test")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u6635\u79f0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"test")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u90ae\u7bb1"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"mailto:test@test.com"},"test@test.com"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5bc6\u7801"),(0,l.kt)("td",{parentName:"tr",align:"left"},"opentest")))),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"\u9ad8\u7ea7\u914d\u7f6e"},"\u9ad8\u7ea7\u914d\u7f6e"),(0,l.kt)("h3",{id:"\u8c03\u6574\u542f\u52a8\u53c2\u6570vmoptions"},"\u8c03\u6574\u542f\u52a8\u53c2\u6570\uff08VMoptions\uff09"),(0,l.kt)("p",null,"\u8fd0\u884c\u547d\u4ee4\u4e2d\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"VM options"),"\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"-Dspring.profiles.active=dev\n")),(0,l.kt)("h3",{id:"\u8c03\u6574\u542f\u52a8\u53c2\u6570args"},"\u8c03\u6574\u542f\u52a8\u53c2\u6570\uff08args\uff09"),(0,l.kt)("p",null,"\u8fd0\u884c\u547d\u4ee4\u4e2d\u6dfb\u52a0\u53c2\u6570\uff0c\u4f8b\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ini"},"--spring.profiles.active=dev\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"IDE")," \u4e00\u822c\u90fd\u4f1a\u63d0\u4f9b\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"Run/Debug \u914d\u7f6e"),"\uff0c\u53ef\u4ee5\u6dfb\u52a0 ",(0,l.kt)("inlineCode",{parentName:"p"},"VM options")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"\u53c2\u6570"),"\u3002\u4ee5\u4e0a\u793a\u4f8b\u53ef\u4ee5\u76f4\u63a5\u5e94\u7528\u5728\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"\u547d\u4ee4\u8fd0\u884c"),"\u65b9\u5f0f\u4e0a\u3002"),(0,l.kt)("h3",{id:"\u542f\u7528\u81ea\u52a8\u6784\u5efabuild-project-automatically"},"\u542f\u7528\u81ea\u52a8\u6784\u5efa\uff08Build project automatically\uff09"),(0,l.kt)("p",null,"\u5728\u5f00\u53d1\u73af\u5883\u4e0b\uff0c\u4fee\u6539\u4ee3\u7801\u4e4b\u540e\uff0c\u6bcf\u6b21\u90fd\u9700\u8981\u91cd\u542f\u5e94\u7528\uff0c\u662f\u4e00\u4e2a\u975e\u5e38\u8017\u65f6\u7684\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u6709\u4e00\u4e2a\u4e13\u95e8\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u7684\u5de5\u5177\uff0c\u90a3\u5c31\u662f ",(0,l.kt)("a",{parentName:"p",href:"https://jrebel.com/"},"JRebel"),"\uff0c\u4f46\u662f\u5b83\u7684\u8d39\u7528\u5b9e\u5728\u662f\u592a\u6602\u8d35\uff0c\u4f5c\u4e3a\u666e\u901a\u7684\u5f00\u53d1\u8005\u5f88\u96be\u627f\u53d7\u8fd9\u7b14\u8d39\u7528\uff08\u4f46",(0,l.kt)("strong",{parentName:"p"},"\u4e0d\u63a8\u8350"),"\u4f7f\u7528\u7834\u89e3\u7248\uff09\u3002"),(0,l.kt)("p",null,"\u4e8e\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Halo-Plus")," \u6700\u540e\u91c7\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"Spring Boot")," \u5b98\u65b9\u63a8\u8350\u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/using-boot-devtools.html"},"Developer Tools"),"\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u4ee5 ",(0,l.kt)("inlineCode",{parentName:"p"},"IntelliJ IDEA")," \u4e3a\u4f8b\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165 ",(0,l.kt)("inlineCode",{parentName:"li"},"Settings")," (Preferences on macOS)\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6253\u5f00 ",(0,l.kt)("inlineCode",{parentName:"li"},"Build, Execution, Deployment > Compiler"),". \u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"Build project automatically"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,l.kt)("inlineCode",{parentName:"li"},"\u5e94\u7528"),"\u3002"),(0,l.kt)("li",{parentName:"ol"},"\u6309 ",(0,l.kt)("inlineCode",{parentName:"li"},"Ctrl+Shift+A")," (Cmd+Shift+A on macOS)\u5feb\u6377\u952e\uff0c\u7136\u540e\u641c\u7d22 ",(0,l.kt)("inlineCode",{parentName:"li"},"Registry"),"\u3002\u6253\u5f00\u4e4b\u540e\u627e\u5230 ",(0,l.kt)("inlineCode",{parentName:"li"},"compiler.automake.allow.when.app.running"),"\uff0c\u5e76\u542f\u7528\u5b83 (IntelliJ IDEA 15 and newer)\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6765\u6e90\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://zeroturnaround.com/software/jrebel/quickstart/intellij/enable-automatic-compilation-in-intellij-idea/"},"https://zeroturnaround.com/software/jrebel/quickstart/intellij/enable-automatic-compilation-in-intellij-idea/"))),(0,l.kt)("p",null,"Developer Tools \u539f\u7406"),(0,l.kt)("p",null,"\u5728\u4fdd\u5b58\u4ee3\u7801\u7684\u65f6\u5019\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"IDE")," \u4f1a\u81ea\u52a8\u4e3a\u6211\u4eec\u7f16\u8bd1\u4ee3\u7801\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Developer Tools")," \u68c0\u6d4b\u5230\u4ee3\u7801\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"class \u6587\u4ef6"),"\uff08\u53ea\u80fd\u68c0\u6d4b ",(0,l.kt)("inlineCode",{parentName:"p"},"classpath")," \u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"class \u6587\u4ef6"),"\uff09\u7684\u53d8\u66f4\uff0c\u4f1a\u81ea\u52a8\u91cd\u542f\u9879\u76ee\u3002\u6ce8\u610f\uff0c\u8fd9\u91cc\u7684\u91cd\u542f\u901f\u5ea6\u4f1a\u6709\u8d28\u7684\u63d0\u5347\uff0c\u5177\u4f53\u539f\u56e0\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Spring Boot")," \u63d0\u4f9b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"restart \u6280\u672f"),"\u63d0\u4f9b\u4e86\u4e24\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"classloaders"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"base classloader")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"restart classloader"),"\u3002\u5f53\u9879\u76ee\u91cd\u542f\u7684\u65f6\u5019 ",(0,l.kt)("inlineCode",{parentName:"p"},"restart classloader")," \u5c06\u4f1a\u88ab\u629b\u5f03\uff0c\u5e76\u91cd\u542f\u521b\u5efa\u4e00\u4e2a\uff0c\u8fd9\u6bd4 ",(0,l.kt)("inlineCode",{parentName:"p"},"code starts"),"\uff08\u51b7\u542f\u52a8\uff09\u5feb\u5f88\u591a\u3002\u5f53\u7136\uff0c\u80af\u5b9a\u662f\u6bd4\u4e0d\u4e0a ",(0,l.kt)("inlineCode",{parentName:"p"},"JRebel")," \u91c7\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"Reload \u6280\u672f"),"\u3002"),(0,l.kt)("p",null,"\u66f4\u591a\u7ec6\u8282\u8bf7\u67e5\u9605: ",(0,l.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/using-boot-devtools.html#using-boot-devtools-restart"},"Automatic Restart")))}k.isMDXComponent=!0}}]);