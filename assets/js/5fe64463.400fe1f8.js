"use strict";(self.webpackChunk_halo_dev_docs=self.webpackChunk_halo_dev_docs||[]).push([[46613],{9148:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>p,metadata:()=>l,toc:()=>s});var t=a(96600),i=(a(59496),a(49613));a(26401);const p={title:"\u81ea\u5b9a\u4e49\u6a21\u578b",description:"\u4e86\u89e3\u4ec0\u4e48\u662f\u81ea\u5b9a\u4e49\u6a21\u578b\u53ca\u5982\u4f55\u521b\u5efa"},r=void 0,l={unversionedId:"developer-guide/plugin/api-reference/extension",id:"version-2.3/developer-guide/plugin/api-reference/extension",title:"\u81ea\u5b9a\u4e49\u6a21\u578b",description:"\u4e86\u89e3\u4ec0\u4e48\u662f\u81ea\u5b9a\u4e49\u6a21\u578b\u53ca\u5982\u4f55\u521b\u5efa",source:"@site/versioned_docs/version-2.3/developer-guide/plugin/api-reference/extension.md",sourceDirName:"developer-guide/plugin/api-reference",slug:"/developer-guide/plugin/api-reference/extension",permalink:"/2.3/developer-guide/plugin/api-reference/extension",draft:!1,editUrl:"https://github.com/halo-dev/docs/edit/main/versioned_docs/version-2.3/developer-guide/plugin/api-reference/extension.md",tags:[],version:"2.3",lastUpdatedBy:"nineya",lastUpdatedAt:1685441714,formattedLastUpdatedAt:"2023\u5e745\u670830\u65e5",frontMatter:{title:"\u81ea\u5b9a\u4e49\u6a21\u578b",description:"\u4e86\u89e3\u4ec0\u4e48\u662f\u81ea\u5b9a\u4e49\u6a21\u578b\u53ca\u5982\u4f55\u521b\u5efa"},sidebar:"tutorialSidebar",previous:{title:"Todo List",permalink:"/2.3/developer-guide/plugin/examples/todolist"},next:{title:"\u81ea\u5b9a\u4e49\u6a21\u578b",permalink:"/2.3/developer-guide/plugin/api-reference/extension"}},o={},s=[{value:"\u81ea\u5b9a\u4e49\u6a21\u578b API",id:"\u81ea\u5b9a\u4e49\u6a21\u578b-api",level:3},{value:"\u81ea\u5b9a\u4e49 API",id:"\u81ea\u5b9a\u4e49-api",level:3}],u={toc:s};function d(e){let{components:n,...a}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Halo \u81ea\u5b9a\u4e49\u6a21\u578b\u4e3b\u8981\u53c2\u8003\u81ea ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/"},"Kubernetes CRD")," \u3002\u81ea\u5b9a\u4e49\u6a21\u578b\u9075\u5faa ",(0,i.kt)("a",{parentName:"p",href:"https://spec.openapis.org/oas/v3.1.0"},"OpenAPI v3"),"\u3002\u8bbe\u8ba1\u76ee\u7684\u5728\u4e8e\u4e3a\u63d2\u4ef6\u63d0\u4f9b\u81ea\u5b9a\u4e49\u6570\u636e\u652f\u6301\u3002\u6bd4\u5982\u67d0\u63d2\u4ef6\u9700\u8981\u5b58\u50a8\u81ea\u5b9a\u4e49\u6570\u636e\uff0c\u540c\u65f6\u4e5f\u60f3\u8bfb\u53d6\u548c\u64cd\u4f5c\u81ea\u5b9a\u4e49\u6570\u636e\u3002"),(0,i.kt)("p",null,"\u4e00\u4e2a\u5178\u578b\u7684\u81ea\u5b9a\u4e49\u6a21\u578b ",(0,i.kt)("inlineCode",{parentName:"p"},"Java")," \u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import lombok.Data;\nimport lombok.EqualsAndHashCode;\nimport lombok.ToString;\nimport run.halo.app.extension.AbstractExtension;\nimport run.halo.app.extension.GVK;\nimport run.halo.app.extension.GroupKind;\n\n@Data\n@EqualsAndHashCode(callSuper = true)\n@ToString(callSuper = true)\n@GVK(group = "my-plugin.halo.run",\n        version = "v1alpha1",\n        kind = "Person",\n        plural = "persons",\n        singular = "person")\npublic class Person extends AbstractExtension {\n\n    @Schema(description = "The description on name field", maxLength = 100)\n    private String name;\n\n    @Schema(description = "The description on age field", maximum = "150", minimum = "0")\n    private Integer age;\n\n    @Schema(description = "The description on gender field")\n    private Gender gender;\n\n    private Person otherPerson;\n\n    public enum Gender {\n        MALE, FEMALE,\n    }\n}\n')),(0,i.kt)("p",null,"\u8981\u521b\u5efa\u4e00\u4e2a\u81ea\u5b9a\u4e49\u6a21\u578b\u9700\u8981\u4e09\u6b65\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u7c7b\u7ee7\u627f ",(0,i.kt)("inlineCode",{parentName:"li"},"AbstractExtension"),"\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"GVK")," \u6ce8\u89e3\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u5728\u63d2\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"li"},"start()")," \u751f\u547d\u5468\u671f\u65b9\u6cd5\u4e2d\u6ce8\u518c\u81ea\u5b9a\u4e49\u6a21\u578b\uff1a")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Autowired\nprivate SchemeManager schemeManager;\n\n@Override\npublic void start() {\n  schemeManager.register(Person.class);\n}\n")),(0,i.kt)("p",null,"\u6709\u4e86\u81ea\u5b9a\u4e49\u6a21\u578b\u540e\u53ef\u4ee5\u901a\u8fc7\u5728\u63d2\u4ef6\u9879\u76ee\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/main/resources/extensions")," \u76ee\u5f55\u4e0b\u58f0\u660e ",(0,i.kt)("inlineCode",{parentName:"p"},"yaml")," \u6587\u4ef6\u6765\u521b\u5efa\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u6b64\u76ee\u5f55\u4e0b\u7684\u6240\u6709\u81ea\u5b9a\u4e49\u6a21\u578b ",(0,i.kt)("inlineCode",{parentName:"p"},"yaml")," \u90fd\u4f1a\u5728\u63d2\u4ef6\u542f\u52a8\u65f6\u88ab\u521b\u5efa\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"groupVersion: my-plugin.halo.run/v1alpha1\nkind: Person\nmetadata:\n  name: fake-person\nname: halo\nage: 18\ngender: male\n")),(0,i.kt)("admonition",{title:"\u91ca\u4e49",type:"tip"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"@GVK\uff1a\u6b64\u6ce8\u89e3\u6807\u8bc6\u8be5\u7c7b\u4e3a\u4e00\u4e2a\u81ea\u5b9a\u4e49\u6a21\u578b\uff0c\u540c\u65f6\u5fc5\u987b\u7ee7\u627f ",(0,i.kt)("inlineCode",{parentName:"li"},"AbstractExtension"),"\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"kind\uff1a\u8868\u793a\u81ea\u5b9a\u4e49\u6a21\u578b\u6240\u8868\u793a\u7684 REST \u8d44\u6e90\u3002"),(0,i.kt)("li",{parentName:"ul"},"group\uff1a\u8868\u793a\u4e00\u7ec4\u516c\u5f00\u7684\u8d44\u6e90\uff0c\u901a\u5e38\u91c7\u7528\u57df\u540d\u5f62\u5f0f\uff0cHalo \u9879\u76ee\u4fdd\u7559\u4f7f\u7528\u7a7a\u7ec4\u548c\u4efb\u4f55\u4ee5\u201c*.halo.run\u201d\u7ed3\u5c3e\u7684\u7ec4\u540d\u4f9b\u5176\u5355\u72ec\u4f7f\u7528\u3002\n\u9009\u62e9\u7fa4\u7ec4\u540d\u79f0\u65f6\uff0c\u6211\u4eec\u5efa\u8bae\u9009\u62e9\u4f60\u7684\u7fa4\u7ec4\u6216\u7ec4\u7ec7\u62e5\u6709\u7684\u5b50\u57df\uff0c\u4f8b\u5982\u201cwidget.mycompany.com\u201d\u3002"),(0,i.kt)("li",{parentName:"ul"},"version\uff1aAPI \u7684\u7248\u672c\uff0c\u5b83\u4e0e group \u7ec4\u5408\u4f7f\u7528\u4e3a apiVersion=\u201cGROUP/VERSION\u201d\uff0c\u4f8b\u5982\u201capi.halo.run/v1alpha1\u201d\u3002"),(0,i.kt)("li",{parentName:"ul"},"singular: \u8d44\u6e90\u7684\u5355\u6570\u540d\u79f0\uff0c\u8fd9\u5141\u8bb8\u5ba2\u6237\u7aef\u4e0d\u900f\u660e\u5730\u5904\u7406\u590d\u6570\u548c\u5355\u6570\uff0c\u5fc5\u987b\u5168\u90e8\u5c0f\u5199\u3002\u901a\u5e38\u4e3a\u5c0f\u5199\u7684\u201ckind\u201d\u3002"),(0,i.kt)("li",{parentName:"ul"},"plural\uff1a \u8d44\u6e90\u7684\u590d\u6570\u540d\u79f0\uff0c\u81ea\u5b9a\u4e49\u8d44\u6e90\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"/apis/<group>/<version>/.../<plural>")," \u4e0b\u63d0\u4f9b\uff0c\u5fc5\u987b\u4e3a\u5168\u90e8\u5c0f\u5199\u3002"))),(0,i.kt)("li",{parentName:"ul"},"@Schema\uff1a\u5c5e\u6027\u6821\u9a8c\u6ce8\u89e3\uff0c\u4f1a\u5728\u521b\u5efa/\u4fee\u6539\u8d44\u6e90\u524d\u5bf9\u8d44\u6e90\u6821\u9a8c\uff0c\u53c2\u8003 ",(0,i.kt)("a",{parentName:"li",href:"https://www.openapi4j.org/schema-validator.html"},"schema-validator"),"\u3002"))),(0,i.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u6a21\u578b-api"},"\u81ea\u5b9a\u4e49\u6a21\u578b API"),(0,i.kt)("p",null,"\u5b9a\u4e49\u597d\u81ea\u5b9a\u4e49\u6a21\u578b\u5e76\u6ce8\u518c\u540e\uff0c\u4f1a\u6839\u636e ",(0,i.kt)("inlineCode",{parentName:"p"},"GVK")," \u6ce8\u89e3\u81ea\u52a8\u751f\u6210\u4e00\u7ec4 ",(0,i.kt)("inlineCode",{parentName:"p"},"CRUD")," API\uff0c\u89c4\u5219\u4e3a\uff1a\n",(0,i.kt)("inlineCode",{parentName:"p"},"/apis/<group>/<version>/<extension>/{extensionname}/<subextension>")),(0,i.kt)("p",null,"\u5bf9\u4e8e\u4e0a\u8ff0 Person \u81ea\u5b9a\u4e49\u6a21\u578b\u5c06\u6709\u4ee5\u4e0b APIs\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"GET /apis/my-plugin.halo.run/v1alpha1/persons\nPUT /apis/my-plugin.halo.run/v1alpha1/persons/{name}\nPOST /apis/my-plugin.halo.run/v1alpha1/persons\nDELETE /apis/my-plugin.halo.run/v1alpha1/persons/{name}\n")),(0,i.kt)("h3",{id:"\u81ea\u5b9a\u4e49-api"},"\u81ea\u5b9a\u4e49 API"),(0,i.kt)("p",null,"\u5728\u4e00\u4e9b\u573a\u666f\u4e0b\uff0c\u53ea\u6709\u81ea\u52a8\u751f\u6210\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"CRUD")," API \u5f80\u5f80\u662f\u4e0d\u591f\u7528\u7684\uff0c\u6b64\u65f6\u53ef\u4ee5\u901a\u8fc7\u81ea\u5b9a\u4e49\u4e00\u4e9b API \u6765\u6ee1\u8db3\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"SpringBoot")," \u7684\u63a7\u5236\u5668\u5199\u6cd5\u6765\u66b4\u9732 API\uff0c\u4e0d\u540c\u7684\u662f\u9700\u8981\u6dfb\u52a0 ",(0,i.kt)("inlineCode",{parentName:"p"},"@ApiVersion")," \u6ce8\u89e3\uff0c\u6ca1\u6709\u6b64\u6ce8\u89e3\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"Controller")," \u5c06\u88ab\u5ffd\u7565\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@ApiVersion("v1alpha1")\n@RequestMapping("/apples")\n@RestController\npublic class AppleController {\n\n    @PostMapping("/starting")\n    public void starting() {\n    }\n}\n')),(0,i.kt)("p",null,"\u5f53\u63d2\u4ef6\u88ab\u542f\u52a8\u65f6\uff0cHalo \u5c06\u4f1a\u4e3a\u6b64 AppleController \u751f\u6210\u7edf\u4e00\u8def\u5f84\u7684 API\u3002API \u524d\u7f00\u7ec4\u6210\u89c4\u5219\u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"/apis/plugin.api.halo.run/{version}/plugins/{plugin-name}/**\n")),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"/apis/plugin.api.halo.run/v1alpha1/plugins/my-plugin/apples/starting\n")))}d.isMDXComponent=!0}}]);