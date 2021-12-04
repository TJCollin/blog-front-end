(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5fb3810c"],{8493:function(t,e,a){},c76a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"list-box"},[a("div",{staticClass:"search"},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"搜索文章标题",clearable:""},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getArticleListByPage},slot:"append"})],1)],1),a("el-table",{staticStyle:{width:"100%",height:"100%"},attrs:{data:t.articleList,"min-height":"250"}},[a("el-table-column",{attrs:{prop:"title",label:"标题"}}),a("el-table-column",{attrs:{prop:"updatedAt",sortable:"true",label:"日期"}}),a("el-table-column",{attrs:{prop:"tags",label:"标签",filters:[{text:"Javascript",value:"Javascript"},{text:"Java",value:"java"}],"filter-method":t.filterTag,"filter-placement":"bottom-end"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.tagArr,(function(e){return a("el-tag",{key:e._id,attrs:{"disable-transitions":"",type:"success"}},[t._v(" "+t._s(e.tagName)+" ")])}))}}])},[t._v(" > ")]),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),t.updateArticle(e.row._id)}}},[t._v(" 修改 ")]),a("el-button",{attrs:{type:"text",size:"small"},nativeOn:{click:function(a){return a.preventDefault(),t.deleteRow(e.row._id)}}},[t._v(" 移除 ")])]}}])})],1),a("div",{staticClass:"table-pagination"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)],1)},l=[],i=a("dbfd"),r=a("5c96"),c={name:"ArticleList",data:function(){return{total:1,currentPage:1,articleList:[],keywords:""}},components:{"el-button":r["Button"],"el-input":r["Input"],"el-tag":r["Tag"],"el-table":r["Table"],"el-table-column":r["TableColumn"],"el-pagination":r["Pagination"]},created:function(){this.getArticleListByPage(),this.$watch("keywords",Object(i["a"])(this.getArticleListByPage,300))},methods:{searchArticleList:function(){},getArticleListByPage:function(){var t=this;t.$axios._get("article/list",{page:this.currentPage,keywords:this.keywords}).then((function(e){e.data.code?t.$message.error(e.data.message):(t.articleList=e.data.data.res_limit,t.total=e.data.data.total)})).catch((function(t){console.log(t)}))},updateArticle:function(t){this.$router.push({name:"ArticleInfo",params:{articleId:t}})},deleteRow:function(t){var e=this;e.$axios._delete("article/article",{articleId:t}).then((function(t){t.data.code?e.getArticleListByPage(e.currentPage):e.$message.error(t.data.message)})).catch((function(t){console.log(t)}))},handleSizeChange:function(t){console.log("每页 ".concat(t," 条"))},handleCurrentChange:function(t){console.log("当前页: ".concat(t))},filterTag:function(t,e){return e.tag===t}}},s=c,o=(a("d405"),a("2877")),u=Object(o["a"])(s,n,l,!1,null,"b7f10e24",null);e["default"]=u.exports},d405:function(t,e,a){"use strict";a("8493")},dbfd:function(t,e,a){"use strict";function n(t,e){var a;return function(){for(var n=this,l=arguments.length,i=new Array(l),r=0;r<l;r++)i[r]=arguments[r];a&&clearTimeout(a),a=setTimeout((function(){t.apply(n,i)}),e)}}a.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=chunk-5fb3810c.b2291f13.js.map