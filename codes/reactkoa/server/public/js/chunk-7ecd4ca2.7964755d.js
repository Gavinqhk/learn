(window["webpackJsonpdocs"]=window["webpackJsonpdocs"]||[]).push([["chunk-7ecd4ca2"],{"00b6":function(t,n,e){},"5c2c":function(t,n,e){"use strict";e("00b6")},"6f32":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("a-card",{attrs:{bordered:!1}},[e("table-search",{attrs:{fields:t.fields},on:{submit:t.handleSubmit}},[e("a-button",{staticStyle:{float:"right","margin-right":"24px","margin-top":"6px"},on:{click:t.toEditor}},[t._v("添加案例 ")])],1),e("a-table",{attrs:{size:"default",rowKey:function(t,n){return n},columns:t.columns,dataSource:t.tableData,loading:t.loading,pagination:t.pagination},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"action",fn:function(n,a){return[e("a-button",{attrs:{type:"link"},on:{click:function(n){return t.toppingRecoder(a)}}},[t._v(" "+t._s(1===a.topStatus?"取消置顶":"置顶")+" ")]),e("a-button",{attrs:{type:"link"},on:{click:function(n){return t.modifyRecoder(a)}}},[t._v(" 编辑 ")]),e("a-button",{attrs:{type:"link"},on:{click:function(n){return t.actionRecoder(a)}}},[t._v(" "+t._s(1===a.publicStatus?"下线":"发布")+" ")]),e("a-button",{staticClass:"danger",attrs:{type:"link"},on:{click:function(n){return t.deleteRecoder(a)}}},[t._v(" 删除 ")])]}},{key:"publicStatus",fn:function(n){return[0==n?e("span",{staticClass:"is-end"},[t._v("未发布")]):1==n?e("span",{staticClass:"is-info"},[t._v("已发布")]):e("span",{staticClass:"is-no"},[t._v("已更新")])]}}])})],1)},i=[],c=e("5530"),o=(e("8a79"),e("d3b7"),e("c32d")),r=e.n(o),u=e("1d61"),l=e("750b"),s=e("dae3"),d=e("4e72"),f=[{title:"客户名称",dataIndex:"clientName",width:"110px"},{title:"案例标题",dataIndex:"title"},{title:"创建日期",dataIndex:"createTime",customRender:function(t){return r()(t).format("YYYY-MM-DD HH:mm:ss")}},{title:"创建者",dataIndex:"creator",width:"120px"},{title:"状态",dataIndex:"publicStatus",width:"100px",scopedSlots:{customRender:"publicStatus"}},{title:"操作",dataIndex:"action",align:"center",maxWidth:"300px",scopedSlots:{customRender:"action"}}],p={components:{TableSearch:u["l"]},name:"tips-list-content",setup:function(t,n){var e=n.root,a=Object(l["e"])({lang:"zh",fields:[{label:"查询条件",type:"input",field:"keyWords",value:"",placeholder:"请输入案例标题"}],tableData:[],columns:f,loading:!0,pagination:{total:0,current:1,pageSize:20,pageSizeOptions:["5","10","20","50","100"],showQuickJumper:!1,showSizeChanger:!0}});function i(){var t={};return t.currentPage=a.pagination.current,t.pageSize=a.pagination.pageSize,t.keyWords=a.fields[0].value,t.languageType="zh"===a.lang?"CHINESE":"ENGLISH",t}function o(){var t=i();a.loading=!0,Object(s["c"])(t).then((function(t){t.list&&(a.tableData=t.list,a.pagination.total=t.total)})).finally((function(){a.loading=!1}))}function r(){a.pagination.current=1,o()}function u(t){a.pagination=t,o()}function p(t){e.$router.push({name:"docs-case-edit",params:{id:t.id,lang:a.lang}})}function b(){e.$router.push({name:"docs-case-create",params:{lang:a.lang}})}function g(t){var n=0===t.publicStatus?1:0;d["Modal"].confirm({title:"提示",content:"确认".concat(1===n?"发布":"下线","该案例吗?"),onOk:function(){return Object(s["g"])({id:t.id,publicStatus:n}).then((function(){d["message"].success("".concat(1===n?"发布":"下线","成功")),o()}))}})}function h(t){var n=0===t.topStatus?1:0;d["Modal"].confirm({title:"提示",content:"确认".concat(1===n?"置顶":"取消置顶","该案例吗?"),onOk:function(){return Object(s["f"])({id:t.id,topStatus:n}).then((function(){d["message"].success("".concat(1===n?"置顶":"取消置顶","成功")),o()}))}})}function m(t){d["Modal"].confirm({title:"确认要删除这条信息吗？",content:"您确认要删除这条信息吗，删除后不可恢复",onOk:function(){return Object(s["a"])(t.id).then((function(){d["message"].success("删除成功"),o()}))}})}return Object(l["h"])((function(){return e.$route.path}),(function(t){a.lang=t.endsWith("/zh")?"zh":"en",a.pagination.current=1,o()})),Object(l["d"])((function(){o()})),Object(c["a"])(Object(c["a"])({},Object(l["g"])(a)),{},{handleSubmit:r,handleTableChange:u,modifyRecoder:p,actionRecoder:g,deleteRecoder:m,toppingRecoder:h,toEditor:b})}},b=p,g=(e("5c2c"),e("2877")),h=Object(g["a"])(b,a,i,!1,null,"6b85388b",null);n["default"]=h.exports},dae3:function(t,n,e){"use strict";e.d(n,"c",(function(){return i})),e.d(n,"g",(function(){return c})),e.d(n,"d",(function(){return o})),e.d(n,"e",(function(){return r})),e.d(n,"f",(function(){return u})),e.d(n,"b",(function(){return l})),e.d(n,"a",(function(){return s}));var a=e("b775");function i(t){return Object(a["a"])({url:"official/iportal/client/case/get",params:t,method:"GET"})}function c(t){return Object(a["a"])({url:"official/iportal/client/case/change",data:t,method:"POST"})}function o(t){return Object(a["a"])({url:"official/iportal/client/case/preview/"+t,method:"GET"})}function r(t){return Object(a["a"])({url:"official/iportal/client/case/save",data:t,method:"POST"})}function u(t){return Object(a["a"])({url:"official/iportal/client/case/top",data:t,method:"POST"})}function l(t){return Object(a["a"])({url:"official/iportal/client/case/"+t,method:"GET"})}function s(t){return Object(a["a"])({url:"official/iportal/client/case/"+t,method:"DELETE"})}}}]);
//# sourceMappingURL=chunk-7ecd4ca2.7964755d.js.map