"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[2866],{1825:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(6600),i=(n(9496),n(9613));n(6401);const l={title:"\u63d2\u4ef6\u4e2d\u7684\u5bf9\u8c61\u7ba1\u7406",description:"\u4e86\u89e3\u5982\u4f55\u5728\u521b\u5efa\u4e2d\u521b\u5efa\u5bf9\u8c61\u548c\u7ba1\u7406\u5bf9\u8c61\u4f9d\u8d56"},r=void 0,p={unversionedId:"developer-guide/plugin/object-management",id:"developer-guide/plugin/object-management",title:"\u63d2\u4ef6\u4e2d\u7684\u5bf9\u8c61\u7ba1\u7406",description:"\u4e86\u89e3\u5982\u4f55\u5728\u521b\u5efa\u4e2d\u521b\u5efa\u5bf9\u8c61\u548c\u7ba1\u7406\u5bf9\u8c61\u4f9d\u8d56",source:"@site/docs/developer-guide/plugin/object-management.md",sourceDirName:"developer-guide/plugin",slug:"/developer-guide/plugin/object-management",permalink:"/1.1.0-SNAPSHOT/developer-guide/plugin/object-management",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/docs/developer-guide/plugin/object-management.md",tags:[],version:"current",lastUpdatedBy:"nineya",lastUpdatedAt:1685582665,formattedLastUpdatedAt:"2023\u5e746\u67081\u65e5",frontMatter:{title:"\u63d2\u4ef6\u4e2d\u7684\u5bf9\u8c61\u7ba1\u7406",description:"\u4e86\u89e3\u5982\u4f55\u5728\u521b\u5efa\u4e2d\u521b\u5efa\u5bf9\u8c61\u548c\u7ba1\u7406\u5bf9\u8c61\u4f9d\u8d56"},sidebar:"tutorialSidebar",previous:{title:"\u63d2\u4ef6\u8d44\u6e90\u6587\u4ef6",permalink:"/1.1.0-SNAPSHOT/developer-guide/plugin/manifest"},next:{title:"Todo List",permalink:"/1.1.0-SNAPSHOT/developer-guide/plugin/examples/todolist"}},o={},u=[{value:"\u4f9d\u8d56\u6ce8\u5165 Halo \u63d0\u4f9b\u7684 Bean",id:"\u4f9d\u8d56\u6ce8\u5165-halo-\u63d0\u4f9b\u7684-bean",level:3}],d={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5728\u63d2\u4ef6\u4e2d\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://spring.io"},"Spring")," \u63d0\u4f9b\u7684\u5e38\u7528 Bean \u6ce8\u89e3\u6765\u6807\u6ce8\u4e00\u4e2a\u7c7b\uff0c\u7136\u540e\u5c31\u80fd\u4f7f\u7528\u4f9d\u8d56\u6ce8\u5165\u529f\u80fd\u6ce8\u5165\u5176\u4ed6\u7c7b\u7684\u5bf9\u8c61\u3002\u8fd9\u7701\u53bb\u4e86\u4f7f\u7528\u5de5\u5382\u521b\u5efa\u7c7b\u548c\u7ef4\u62a4\u7684\u8fc7\u7a0b\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7\u6a21\u677f\u63d2\u4ef6\u521b\u5efa\u7684\u9879\u76ee\u4e2d\u4f60\u90fd\u53ef\u4ee5\u770b\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"StarterPlugin")," \u6807\u6ce8\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"@Component")," \u6ce8\u89e3\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Component\npublic class StarterPlugin extends BasePlugin {\n}\n")),(0,i.kt)("p",null,"\u5047\u8bbe\u9879\u76ee\u4e2d\u6709\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"FruitService"),"\uff0c\u5e76\u5c06\u5176\u58f0\u660e\u4e86\u4e3a\u4e86 Bean\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Service\npublic class FruitService {\n\n}\n")),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u4efb\u4f55\u540c\u6837\u58f0\u660e\u4e3a Bean \u7684\u7c7b\u4e2d\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-dependencies"},"\u4f9d\u8d56\u6ce8\u5165"),"\u6765\u4f7f\u7528\u5b83\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Component\npublic class Demo {\n  private final FruitService fruitService;\n\n  public Demo(FruitService fruitService) {\n    this.fruitService = fruitService;\n  }\n  // use it...\n}\n")),(0,i.kt)("h3",{id:"\u4f9d\u8d56\u6ce8\u5165-halo-\u63d0\u4f9b\u7684-bean"},"\u4f9d\u8d56\u6ce8\u5165 Halo \u63d0\u4f9b\u7684 Bean"),(0,i.kt)("p",null,"\u76ee\u524d Halo \u53ea\u63d0\u4f9b\u4e86\u5c11\u6570\u51e0\u4e2a Bean \u53ef\u4ee5\u4f9b\u63d2\u4ef6\u4f9d\u8d56\u6ce8\u5165\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ReactiveExtensionClient"),(0,i.kt)("li",{parentName:"ul"},"ExtensionClient"),(0,i.kt)("li",{parentName:"ul"},"SchemeManager"),(0,i.kt)("li",{parentName:"ul"},"ExternalUrlSupplier")),(0,i.kt)("p",null,"\u5373\u5176\u4ed6\u4e0d\u5728\u4e0a\u8ff0\u5217\u8868\u4e2d\u7684\u7c7b\u7684\u5bf9\u8c61\u90fd\u662f\u4e0d\u53ef\u4f9d\u8d56\u6ce8\u5165\u7684\u3002"))}s.isMDXComponent=!0}}]);