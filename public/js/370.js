"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[370],{8370:(e,t,o)=>{o.r(t),o.d(t,{default:()=>m});var s=o(6486),n=o.n(s),a=o(9680),r=o(4839),i=o(8825),l=o(3195);const c={name:"AdminCrmFormIndex",components:{ConfirmationModal:r.Z,InputGroup:i.Z,SelectGroup:l.Z},layout:"admin-layout",props:{searchOptions:{required:!0,type:Object|Array},forms:{required:!0,type:Object}},data:function(){return{editableSearchOptions:{per_page:15,form_name:"",form_slug:""},isInitialised:!1,isLoadingDelete:!1,showDeleteModal:!1,formToDelete:null}},computed:{deleteModalText:function(){try{return"Do you really want to delete '"+this.formToDelete.name+"'?"}catch(e){return"Do you really want to delete this form?"}},showPagination:function(){try{return this.forms.pagination.last_page>1}catch(e){return!1}},showFormActions:function(){return this.userCan("crm_forms.edit")||this.userCan("crm_forms.delete")},formsData:function(){return!(!this.forms||!this.forms.data||this.forms.data.length<1)&&this.forms.data}},mounted:function(){this.setSearchOptions(this.searchOptions)},methods:{cancelDelete:function(){this.isLoadingDelete||(this.showDeleteModal=!1,this.formToDelete=null)},checkDelete:function(e){this.showDeleteModal=!0,this.formToDelete=e},confirmDelete:function(){if(this.isLoadingDelete)return this.$errorToast("It's only possible to delete one form at a time.");this.$inertia.delete(this.$route("admin.crm.forms.destroy",this.formToDelete.id),{only:["flash","forms"]}),this.formToDelete=null,this.showDeleteModal=!1},onSearchOptionsUpdate:n().debounce((function(){!this.isInitialised&&(this.isInitialised=!0,this.formsData)||a.Inertia.get(this.$route("admin.crm.forms.index"),this.editableSearchOptions,{only:["forms"],preserveState:!0})}),500),setSearchOptions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={per_page:15,form_name:"",form_slug:""};try{n().forEach(e,(function(e,o){t[o]=e}))}catch(e){console.log(e)}this.editableSearchOptions=n().cloneDeep(t)}},watch:{editableSearchOptions:{deep:!0,handler:"onSearchOptionsUpdate"}}};const m=(0,o(1900).Z)(c,(function(){var e=this,t=e._self._c;return t("section",[t("div",{staticClass:"flex flex-row items-center mb-6"},[t("h1",{staticClass:"font-medium mr-auto text-lg"},[e._v("\n            Forms\n        ")]),e._v(" "),e.userCan("crm_forms.create")?t("inertia-link",{staticClass:"button button-default-responsive button-primary flex flex-row items-center",attrs:{href:e.$route("admin.crm.forms.create")}},[t("icon-plus",{staticClass:"w-5 md:mr-2"}),e._v(" "),t("span",{staticClass:"hidden md:inline"},[e._v("\n                Create Form\n            ")])],1):e._e()],1),e._v(" "),t("div",{staticClass:"bg-white py-6 shadow-subtle rounded-lg"},[t("h1",{staticClass:"font-semibold px-6 text-gray-850"},[e._v("\n            Search\n            "),t("button",{staticClass:"text-sm text-theme-base-subtle-contrast focus:outline-none focus:text-theme-primary hover:text-theme-primary",on:{click:e.setSearchOptions}},[e._v("\n                (Clear)\n            ")])]),e._v(" "),t("div",{staticClass:"flex flex-col items-center mt-4 px-6 space-y-4 md:flex-row md:space-y-0 md:space-x-8"},[t("div",{staticClass:"w-full md:w-1/2"},[t("input-group",{attrs:{"input-autocomplete":"form_name_search","input-class":"form-control form-control-short","input-id":"form_name","input-name":"form_name","input-placeholder":"Form Name","input-type":"text","label-hidden":!0,"label-text":"Form Name"},model:{value:e.editableSearchOptions.form_name,callback:function(t){e.$set(e.editableSearchOptions,"form_name",t)},expression:"editableSearchOptions.form_name"}})],1),e._v(" "),t("div",{staticClass:"w-full md:w-1/2"},[t("input-group",{attrs:{"input-autocomplete":"form_slug_search","input-class":"form-control form-control-short","input-id":"form_slug","input-name":"form_slug","input-placeholder":"Form Slug","input-type":"text","label-hidden":!0,"label-text":"Form Slug"},model:{value:e.editableSearchOptions.form_slug,callback:function(t){e.$set(e.editableSearchOptions,"form_slug",t)},expression:"editableSearchOptions.form_slug"}})],1)]),e._v(" "),e.formsData?[t("div",{staticClass:"block mt-8 overflow-x-auto w-full"},[t("table",{staticClass:"table table-hover table-striped w-full"},[t("thead",[t("tr",[t("th",[e._v("Name")]),e._v(" "),t("th",[e._v("Slug")]),e._v(" "),e.showFormActions?t("th"):e._e()])]),e._v(" "),t("tbody",e._l(e.formsData,(function(o){return t("tr",{key:"template-".concat(o.id)},[t("td",[e._v("\n                            "+e._s(o.name)+"\n                        ")]),e._v(" "),t("td",[e._v("\n                            "+e._s(o.slug)+"\n                        ")]),e._v(" "),e.showFormActions?t("td",[t("div",{staticClass:"flex flex-row items-center justify-end -mx-1"},[e.userCan("crm_forms.edit")?t("inertia-link",{staticClass:"flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-info hover:text-theme-info-contrast",attrs:{href:e.$route("admin.crm.forms.edit",o.id),title:"Edit Form"}},[t("icon-edit",{staticClass:"w-4"})],1):e._e(),e._v(" "),e.userCan("crm_forms.delete")?t("button",{staticClass:"flex flex-row items-center inline-flex mx-1 px-2 py-1 rounded text-theme-base-subtle-contrast text-sm tracking-wide focus:outline-none focus:ring hover:bg-theme-danger hover:text-theme-danger-contrast",attrs:{title:"Delete Template"},on:{click:function(t){return e.checkDelete(o)}}},[t("icon-trash",{staticClass:"w-4"})],1):e._e()],1)]):e._e()])})),0)])]),e._v(" "),e.showPagination?t("div",{staticClass:"flex flex-row justify-center mt-12 px-6"},[t("pagination",{attrs:{pagination:e.forms.pagination}})],1):e._e()]:t("p",{staticClass:"bg-theme-base-subtle mt-8 mx-6 px-6 py-4 rounded text-center text-theme-base-subtle-contrast"},[e._v("\n            No forms\n        ")]),e._v(" "),t("confirmation-modal",{attrs:{"confirm-text":"Delete","confirm-type":"danger","show-modal":e.showDeleteModal,"message-text":e.deleteModalText},on:{cancelAction:e.cancelDelete,closeModal:e.cancelDelete,confirmAction:e.confirmDelete}})],2)])}),[],!1,null,null,null).exports}}]);