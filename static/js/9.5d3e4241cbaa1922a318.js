(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"I+V/":function(t,e,i){"use strict";e.a={methods:{footer:function(t){t<(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight)?this.$store.commit("SET_FOOTER_FIXED",{footerFixed:!0}):this.$store.commit("SET_FOOTER_FIXED",{footerFixed:!1})}}}},JkFA:function(t,e,i){"use strict";i.r(e);var s=i("blUz"),o={name:"project",mixins:[i("I+V/").a],data:function(){return{projectList:[],scrollReveal:Object(s.a)()}},created:function(){this.getProjectList()},mounted:function(){this.footer(this.$refs.project.offsetHeight),this.scrollReveal.reveal(".reveal-rotate",{duration:500,delay:200,origin:"left",reset:!1,mobile:!1,distance:"20px",opacity:.001,easing:"linear"})},methods:{getProjectList:function(){var e=this;this.$axios._get("project").then(function(t){t.data.code?e.$message.error(t.data.message):e.projectList=t.data.data.res_limit})}}},c=(i("vRLx"),i("KHd+")),a=Object(c.a)(o,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{ref:"project",staticClass:"project-wrapper"},[i("ul",{staticClass:"reveal-rotate"},e._l(e.projectList,function(t){return i("li",{key:t._id},[i("div",{staticClass:"project-box"},[i("div",{staticClass:"project-icon"},[i("i",{staticClass:"iconfont",class:t.projectIcon})]),e._v(" "),i("p",{staticClass:"project-title"},[e._v(e._s(t.projectName))]),e._v(" "),i("p",{staticClass:"project-desc"},[e._v(e._s(t.projectDesc))]),e._v(" "),i("div",{staticClass:"project-links"},[i("div",{staticClass:"link view-link"},[i("a",{attrs:{href:t.projectUrl}},[i("i",{staticClass:"iconfont icon-eye"}),e._v("view")])]),e._v(" "),i("div",{staticClass:"link source-code"},[i("a",{attrs:{href:t.projectCode}},[i("i",{staticClass:"iconfont icon-code"}),e._v("github")])])])])])}))])},[],!1,null,"2580990c",null);a.options.__file="Project.vue",e.default=a.exports},Q9zu:function(t,e,i){},vRLx:function(t,e,i){"use strict";var s=i("Q9zu");i.n(s).a}}]);