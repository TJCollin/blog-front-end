(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c3874b8e"],{"031e":function(e,t,o){"use strict";o("4d45")},"4d45":function(e,t,o){},"945d":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"list-box"},[o("div",{staticClass:"search"},[o("el-button",{on:{click:e.addProject}},[e._v("新增项目")])],1),o("el-table",{staticStyle:{width:"100%",height:"100%"},attrs:{data:e.projectList,"min-height":"250"}},[o("el-table-column",{attrs:{prop:"projectName",label:"项目名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("router-link",{attrs:{to:""}},[e._v(" "+e._s(t.row.projectName)+" ")])]}}])}),o("el-table-column",{attrs:{prop:"projectIcon",label:"项目图标"},scopedSlots:e._u([{key:"default",fn:function(e){return[o("i",{class:e.row.projectIcon?"iconfont "+e.row.projectIcon:"",staticStyle:{display:"block","padding-left":"20px"}})]}}])}),o("el-table-column",{attrs:{prop:"projectUrl",label:"预览地址"}}),o("el-table-column",{attrs:{prop:"projectCode",label:"源码地址"}}),o("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(o){return o.preventDefault(),e.updateProject(t.row)}}},[e._v(" 修改 ")]),o("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(o){return o.preventDefault(),e.deleteRow(t.row._id)}}},[e._v(" 移除 ")])]}}])})],1),o("div",{staticClass:"table-pagination"},[o("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"total, sizes, prev, pager, next, jumper",total:e.totalProjects},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),o("el-dialog",{attrs:{title:"新增项目",visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[o("el-form",{ref:"projectForm",attrs:{model:e.form,rules:e.rules,"label-width":"120px"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submitForm.apply(null,arguments)}}},[o("el-form-item",{attrs:{label:"项目名称",prop:"projectName"}},[o("el-input",{ref:"projectName",attrs:{autocomplete:"off"},model:{value:e.form.projectName,callback:function(t){e.$set(e.form,"projectName",t)},expression:"form.projectName"}})],1),o("el-form-item",{attrs:{label:"标签描述"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.projectDesc,callback:function(t){e.$set(e.form,"projectDesc",t)},expression:"form.projectDesc"}})],1),o("el-form-item",{attrs:{label:"预览地址"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.projectUrl,callback:function(t){e.$set(e.form,"projectUrl",t)},expression:"form.projectUrl"}})],1),o("el-form-item",{attrs:{label:"源码地址",prop:"projectCode"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.projectCode,callback:function(t){e.$set(e.form,"projectCode",t)},expression:"form.projectCode"}})],1),o("el-form-item",{attrs:{label:"项目图标"}},[o("ul",[o("li",[o("el-button",{class:"icon-vue"===e.form.projectIcon?"focused-button":"",on:{click:function(t){return e.changeIcon("icon-vue")}}},[o("i",{staticClass:"iconfont icon-vue"})])],1),o("li",[o("el-button",{class:"icon-node"===e.form.projectIcon?"focused-button":"",on:{click:function(t){return e.changeIcon("icon-node")}}},[o("i",{staticClass:"iconfont icon-node"})])],1),o("li",[o("el-button",{class:"icon-react"===e.form.projectIcon?"focused-button":"",on:{click:function(t){return e.changeIcon("icon-react")}}},[o("i",{staticClass:"iconfont icon-react"})])],1),o("li",[o("el-button",{class:"icon-angular"===e.form.projectIcon?"focused-button":"",on:{click:function(t){return e.changeIcon("icon-angular")}}},[o("i",{staticClass:"iconfont icon-angular"})])],1)])])],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")])],1)],1)],1)},n=[],c=o("5c96"),a={name:"ProjectList",data:function(){return{dialogFormVisible:!1,form:{projectName:"",projectUrl:"",projectCode:"",projectIcon:"",projectDesc:""},rules:{projectName:{required:!0,message:"项目名称不能为空哟！",trigger:"blur"},projectCode:{required:!0,message:"源码地址不能为空哟！",trigger:"blur"}},currentPage:1,totalProjects:1,projectList:[]}},components:{"el-form":c["Form"],"el-form-item":c["FormItem"],"el-button":c["Button"],"el-input":c["Input"],"el-table":c["Table"],"el-table-column":c["TableColumn"],"el-dialog":c["Dialog"],"el-pagination":c["Pagination"]},created:function(){this.getProjectListByPage(1)},methods:{addProject:function(){var e=this;this.dialogFormVisible=!0,this.$nextTick((function(){e.$refs.projectForm.resetFields(),e.$refs.projectName.focus()}))},submitForm:function(){var e=this;e.$refs.projectForm.validate((function(t){if(!t)return e.message.error("必要信息未填写完整哟~"),!1;e.$refs.projectForm.validate((function(t){if(!t)return e.$message.error("必要信息未填写完整！"),!1;e.$axios._post("project",e.form).then((function(t){t.data.code?(e.$message.error(t.data.message),console.log(t.data.err)):(e.$message.success(t.data.message),e.$refs.projectForm.resetFields(),e.dialogFormVisible=!1,e.getProjectListByPage(e.currentPage))})).catch((function(e){console.log(e)}))}))}))},getProjectListByPage:function(e){var t=this;t.$axios._get("project",{page:e}).then((function(e){e.data.code?t.$message.error(e.data.message):(t.projectList=e.data.data.res_limit,t.totalProjects=e.data.data.total)})).catch((function(e){console.log(e)}))},changeIcon:function(e){this.form.projectIcon=e},deleteRow:function(e){var t=this;t.$axios._delete("project/project",{projectId:e}).then((function(e){e.data.code?t.getProjectListByPage(t.currentPage):t.$message.error(e.data.message)})).catch((function(e){console.log(e)}))},updateProject:function(e){this.form=e,this.dialogFormVisible=!0},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){this.getProjectListByPage(e)},filterProject:function(e,t){return t.project===e}}},l=a,i=(o("031e"),o("2877")),s=Object(i["a"])(l,r,n,!1,null,"f4e1ad56",null);t["default"]=s.exports}}]);