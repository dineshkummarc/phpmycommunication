(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"3HR4":function(t,e,r){"use strict";var i=r("o0o1"),n=r.n(i),o=r("L2JU"),a=r("8BOd");r("i8R7");function s(t,e,r,i,n,o,a){try{var s=t[o](a),f=s.value}catch(t){return void r(t)}s.done?e(f):Promise.resolve(f).then(i,n)}function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.a={components:{},data:function(){return{formData:{},formErrors:{},initialFormData:null,initianLength:0,emptyFormData:null,entity:null,preRequisite:{},isLoading:!0,useUserPreference:!1,dataType:null,configType:""}},computed:c(c({},Object(o.c)("config",{configsWithPreference:"configs",configs:"configsOriginal",vars:"vars"})),{},{formHasErrors:function(){var t=!1;return this.formErrors.objForEach((function(e){t=""!==e||t})),t}}),methods:c(c(c(c(c({},Object(o.b)("config",["GetConfig"])),Object(o.b)("user",["GetUser"])),Object(o.b)("navigation",["Generate"])),Object(o.b)("common",["Custom"])),{},{findActualValue:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"uuid";return e.find((function(e){return e[r]===t}))||null},submit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(formUtil.isUnchanged(this.initialFormData,this.formData))return this.$toasted.info(this.$t("general.nothing_changed"),this.$toastConfig.info),!1;this.isLoading=!0,this.formData.hasOwnProperty("type")&&(this.formData.type=this.formData.type.snakeCase());var r=!0===e||this.useUserPreference?a.e:"module"===this.configType?a.d:a.c;"function"==typeof this.beforeSubmit&&this.beforeSubmit(),r(this.formData).then((function(r){(!0===e||t.useUserPreference?t.GetUser:t.GetConfig)().then((function(){t.$toasted.success(r.message,t.$toastConfig),t.initialFormData=_.cloneDeep(t.formData),t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)})),"function"==typeof t.afterSubmit&&t.afterSubmit(),"function"==typeof t.afterSubmitSuccess&&t.afterSubmitSuccess()})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e),"function"==typeof t.afterSubmit&&t.afterSubmit(),"function"==typeof t.afterSubmitError&&t.afterSubmitError()}))},reset:function(){var t=this;formUtil.confirmAction().then((function(e){e.value&&(t.formData=Object.assign({},t.formData,_.cloneDeep(t.initialFormData)))}))},unsavedCheck:function(t){formUtil.unsavedCheckAlert(this.initialFormData,this.formData,t)},fillPreRequisite:function(t){var e=this;this.preRequisite.objForEach((function(r,i){e.preRequisite[i]=t.hasOwnProperty(i)?t[i]:r})),this.isLoading=!1},fillFormData:function(){var t=this;this.isLoading=!0;var e=this.useUserPreference?this.configsWithPreference:this.configs;this.formData.type&&e[this.formData.type]&&(this.formData=formUtil.assignValues(this.formData,e[this.formData.type])),this.formData.types&&Array.isArray(this.formData.types)&&this.formData.types.forEach((function(r){t.formData=formUtil.assignValues(t.formData,e[r])})),this.formData.override&&this.formData.objForEach((function(r,i){r&&_.isObject(r)?t.formData[i]=formUtil.assignValues(t.formData[i],e[i]):t.formData[i]=e[i]?e[i]:r})),"function"==typeof this.addNewRow&&"function"==typeof this.addNewRowIfNone&&this.addNewRowIfNone(),this.isLoading=!1},getInitialData:function(t){var e,r=this;return(e=n.a.mark((function e(){var i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.isLoading=!0,e.prev=1,e.next=4,a.b(Object.keys(r.preRequisite).join(","));case 4:return i=e.sent,r.fillPreRequisite(i),t&&r.$nextTick((function(){t()})),e.abrupt("return",i);case 10:throw e.prev=10,e.t0=e.catch(1),r.isLoading=!1,r.formErrors=formUtil.handleErrors(e.t0),e.t0;case 15:case"end":return e.stop()}}),e,null,[[1,10]])})),function(){var t=this,r=arguments;return new Promise((function(i,n){var o=e.apply(t,r);function a(t){s(o,i,n,a,f,"next",t)}function f(t){s(o,i,n,a,f,"throw",t)}a(void 0)}))})()}}),mounted:function(){this.fillFormData(),this.initialFormData=_.cloneDeep(this.formData)},beforeDestroy:function(){delete this.formData,delete this.formErrors,delete this.preRequisite},beforeRouteLeave:function(t,e,r){this.unsavedCheck(r)}}},"58Cj":function(t,e,r){"use strict";r.r(e);var i={extends:r("3HR4").a,data:function(){return{formData:{url:"",type:"signal"}}}},n=r("KHd+"),o=Object(n.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("base-container",{attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 mb-4"},[r("base-input",{attrs:{label:t.$t("config.signal.url"),type:"text",error:t.formErrors.url},on:{"update:error":function(e){return t.$set(t.formErrors,"url",e)}},model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}})],1)]),t._v(" "),r("div",{staticClass:"text-right mt-5"},[r("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),t._v(" "),r("base-button",{attrs:{type:"submit",design:"primary"}},[t._v(t._s(t.$t("general.save")))])],1)])])}),[],!1,null,null,null);e.default=o.exports}}]);
//# sourceMappingURL=index.js.map?id=4f2446074f3c166e202b