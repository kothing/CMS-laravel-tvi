(self.webpackChunk=self.webpackChunk||[]).push([[531],{2531:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});const s={name:"AuthLogin",components:{InputGroup:r(3764).Z},layout:"auth-layout",data:function(){return{form:{email:"",password:"",remember:null}}},methods:{submit:function(){this.$inertia.post(this.$route("login"),this.form)}}};const a=(0,r(1900).Z)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-card-container"},[r("div",{staticClass:"auth-card"},[r("h1",{staticClass:"auth-header"},[e._v("\n            Welcome back\n        ")]),e._v(" "),r("form",{staticClass:"px-6",on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("email"),"input-autocomplete":"email","input-autofocus":!0,"input-class":"auth-input","input-id":"email","input-name":"email","input-required":!0,"input-type":"email","label-text":"Email"},on:{errorHidden:function(t){return e.clearPageErrorMessage("email")}},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}}),e._v(" "),r("input-group",{staticClass:"mt-4",attrs:{"error-message":e.getPageErrorMessage("password"),"input-autocomplete":"current-password","input-class":"auth-input","input-id":"password","input-name":"password","input-required":!0,"input-type":"password","label-text":"Password"},on:{errorHidden:function(t){return e.clearPageErrorMessage("password")}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),r("div",{staticClass:"mt-6"},[r("label",{staticClass:"cursor-pointer flex font-medium inline-block items-center text-theme-base-contrast"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.remember,expression:"form.remember"}],staticClass:"\n                            leading-tight mr-2 rounded\n                            focus:outline-none focus:ring focus:ring-primary\n                        ",attrs:{id:"remember",name:"remember",type:"checkbox"},domProps:{checked:Array.isArray(e.form.remember)?e._i(e.form.remember,null)>-1:e.form.remember},on:{change:function(t){var r=e.form.remember,s=t.target,a=!!s.checked;if(Array.isArray(r)){var n=e._i(r,null);s.checked?n<0&&e.$set(e.form,"remember",r.concat([null])):n>-1&&e.$set(e.form,"remember",r.slice(0,n).concat(r.slice(n+1)))}else e.$set(e.form,"remember",a)}}}),e._v(" "),r("span",{staticClass:"select-none text-sm"},[e._v("\n                        Remember Me\n                      ")])])]),e._v(" "),r("div",{staticClass:"flex flex-row items-center justify-between mt-4 py-6"},[r("button",{staticClass:"\n                        bg-theme-primary px-4 py-2 rounded shadow text-theme-primary-contrast\n                        focus:outline-none focus:ring focus:ring-primary\n                        hover:bg-theme-primary-hover hover:shadow-lg\n                        transition-all ease-in-out duration-300\n                    ",attrs:{type:"submit"}},[e._v("\n                    Sign In\n                ")]),e._v(" "),r("inertia-link",{staticClass:"\n                        text-gray-900\n                        hover:text-theme-primary\n                        transition-all ease-in-out duration-300\n                    ",attrs:{href:e.$route("password.request")}},[e._v("\n                    Forgot Password?\n                ")])],1)],1)]),e._v(" "),r("div",{staticClass:"flex justify-end mt-4"},[e.$routeCheck("register")?r("inertia-link",{staticClass:"\n                text-gray-300 text-sm tracking-wide\n                hover:text-theme-base-subtle-contrast\n            ",attrs:{href:e.$route("register")}},[e._v("\n            Create a new account\n        ")]):e._e()],1)])}),[],!1,null,null,null).exports}}]);