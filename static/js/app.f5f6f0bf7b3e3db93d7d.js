webpackJsonp([1],{"1/oy":function(e,t){},"1YeQ":function(e,t){},"1wr4":function(e,t){},GfHa:function(e,t){},Id91:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});a("wg8Y"),a("oFcf"),a("vH9D");var n=a("7+uW"),s=a("e6fC"),l=a("XyMi");var o=function(e){a("NY3r")},r=Object(l.a)({name:"app"},function(){var e=this.$createElement;return(this._self._c||e)("router-view")},[],!1,o,null,null).exports,i=a("/ocq"),m={items:[{title:!0,name:"Admin",class:"",wrapper:{element:"",attributes:{}}},{name:"Templates",url:"/templates",icon:"icon-note"},{name:"Briefcase",url:"/briefcase",icon:"icon-briefcase"},{name:"Create Post",url:"/create-post",icon:"icon-envelope"},{title:!0,name:"Updates",class:"",wrapper:{element:"",attributes:{}}},{name:"Food Menu",url:"/food",icon:"icon-list"},{name:"Cab Schedule",url:"/cabs",icon:"icon-speedometer",badge:{variant:"primary",text:"NEW"}}]},c=a("TQur"),u={name:"full",components:{AsideToggler:c.b,AppHeader:c.e,AppSidebar:c.f,AppAside:c.a,TheFooter:c.d,Breadcrumb:c.c,SidebarForm:c.h,SidebarFooter:c.g,SidebarToggler:c.l,SidebarHeader:c.i,SidebarNav:c.k,SidebarMinimizer:c.j},data:function(){return{nav:m.items}},computed:{name:function(){return this.$route.name},list:function(){return this.$route.matched}}},v=Object(l.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app"},[a("AppHeader",{attrs:{fixed:""}},[a("SidebarToggler",{staticClass:"d-lg-none",attrs:{display:"md",mobile:""}}),e._v(" "),a("b-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("img",{staticClass:"navbar-brand-full",attrs:{src:"static/img/CES-Logo.png",width:"64",alt:"CES IT"}}),e._v(" "),a("img",{staticClass:"navbar-brand-minimized",attrs:{src:"static/img/CES-Logo.png",width:"30",alt:"CES IT"}})]),e._v(" "),a("SidebarToggler",{staticClass:"d-md-down-none position-absolute left-180-p",attrs:{display:"lg"}})],1),e._v(" "),a("div",{staticClass:"app-body"},[a("AppSidebar",{attrs:{fixed:""}},[a("SidebarHeader"),e._v(" "),a("SidebarForm"),e._v(" "),a("SidebarNav",{attrs:{navItems:e.nav}}),e._v(" "),a("SidebarFooter"),e._v(" "),a("SidebarMinimizer")],1),e._v(" "),a("main",{staticClass:"main"},[a("breadcrumb",{attrs:{list:e.list}}),e._v(" "),a("div",{staticClass:"container-fluid"},[a("router-view")],1)],1)],1)],1)},[],!1,null,null,null).exports,p=a("NYxO");n.a.use(p.a);var d=new p.a.Store({state:{selectedTemplateName:""},mutations:{selectTemplate:function(e,t){e.selectedTemplateName=t},clearSelected:function(e){e.selectedTemplateName=""}}}),b=firebase.database().ref("templates"),f={name:"manageTemplates",data:function(){return{templates:[]}},props:["cardTitle"],created:function(){var e=this;b.on("child_added",function(t){e.templates.push(t.val())})},methods:{selectTemplate:function(e){d.commit("selectTemplate",e)}}};var h=function(e){a("kd0g")},C=Object(l.a)(f,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("strong",[e._v(e._s(e.cardTitle))])]),e._v(" "),a("b-row",e._l(e.templates,function(t,n){return a("b-col",{key:n,attrs:{sm:"6",lg:"3"}},[a("b-card",{on:{click:function(a){e.selectTemplate(t.name)}}},[a("div",{staticClass:"h4 m-0"},[e._v(e._s(t.name))]),e._v(" "),a("b-progress",{staticClass:"progress-xs my-3",attrs:{height:"{}",variant:"warning",value:100*t.columns.length/6}})],1)],1)}))],1)},[],!1,h,null,null).exports,_=firebase.database().ref("templates"),T={name:"createTemplate",components:{cSwitch:c.m},data:function(){return{vmEnableSave:!1,vmTmplName:"",vmIsDataTemplate:!1,vmColumnControls:[""],vmColumnsTable:[]}},methods:{clkSaveTemplate:function(){var e=this.vmIsDataTemplate?"data":"post";_.push({name:this.vmTmplName,columns:this.vmColumnsTable,postType:e}),this.vmTmplName="",this.vmColumnControls=[""],this.vmColumnsTable=[],this.vmEnableSave=!1},clkResetTemplate:function(){this.vmTmplName="",this.vmColumnControls=[""],this.vmColumnsTable=[],this.vmEnableSave=!1},checkColumns:function(){var e=!0;if(this.vmColumnControls.length>6)return!1;for(var t=0;t<this.vmColumnControls.length;t++)""===this.vmColumnControls[t]&&(e=!1);return e},clkRemoveColumn:function(e){this.vmColumnControls.splice(e,1),this.vmColumnsTable.splice(e,1)},clkUpdateColumn:function(e){this.vmColumnsTable[e]=this.vmColumnControls[e]},clkAddColumn:function(){var e=this.vmColumnControls.length-1;this.vmColumnControls.push(""),this.vmColumnsTable.push(this.vmColumnControls[e])}}};var w=function(e){a("1wr4")},g={name:"templates",components:{ManageTemplates:C,CreateTemplate:Object(l.a)(T,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("strong",[e._v("Create New Template")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.vmColumnsTable.length>0,expression:"vmColumnsTable.length > 0"}],staticClass:"animated fadeIn"},[a("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.clkSaveTemplate}},[e._v("Save Template")]),e._v(" "),a("b-button",{attrs:{type:"button",variant:"secondary"},on:{click:e.clkResetTemplate}},[e._v("Reset")])],1)]),e._v(" "),a("b-row",[a("b-col",{attrs:{sm:"6"}},[a("b-row",[a("b-col",{attrs:{sm:"8"}},[e._v("\n          Is Data template? "),a("c-switch",{staticClass:"mx-1",attrs:{color:"danger",variant:"pill"},model:{value:e.vmIsDataTemplate,callback:function(t){e.vmIsDataTemplate=t},expression:"vmIsDataTemplate"}})],1)],1),e._v(" "),a("b-row",[a("b-col",{attrs:{sm:"8"}},[a("b-form-group",[a("b-input-group",[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"fa fa-envelope-o"})])],1),e._v(" "),a("b-form-input",{attrs:{type:"text",placeholder:"Template Name",title:"eg: FoodTemplate1"},model:{value:e.vmTmplName,callback:function(t){e.vmTmplName=t},expression:"vmTmplName"}})],1)],1)],1)],1),e._v(" "),a("b-row",[a("b-col",{attrs:{sm:"8"}},[a("b-form-group",[a("label",{attrs:{for:""}},[a("strong",[e._v("Columns")])]),e._v(" "),e._l(e.vmColumnControls,function(t,n){return a("span",{key:n},[a("div",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.vmColumnsTable[n],expression:"vmColumnsTable[colIndex] !== undefined"}],staticClass:"cursor-pointer",on:{click:function(t){e.clkRemoveColumn(n)}}},[e._v("- Remove")]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:void 0!==e.vmColumnsTable[n],expression:"vmColumnsTable[colIndex] !== undefined"}],staticClass:"cursor-pointer",on:{click:function(t){e.clkUpdateColumn(n)}}},[e._v("= Update")]),e._v(" "),a("b-form-input",{directives:[{name:"show",rawName:"v-show",value:n<6,expression:"colIndex < 6"}],attrs:{type:"text",placeholder:"eg: Full Name"},model:{value:e.vmColumnControls[n],callback:function(t){e.$set(e.vmColumnControls,n,t)},expression:"vmColumnControls[colIndex]"}})],1)}),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:e.checkColumns(),expression:"checkColumns()"}],staticClass:"cursor-pointer",on:{click:e.clkAddColumn}},[e._v("+ Add column")])],2)],1)],1)],1),e._v(" "),a("b-col",{attrs:{sm:"6"}},[e.vmColumnsTable.length>0&&""!==e.vmTmplName?a("div",[a("strong",[e._v(e._s(e.vmTmplName))]),e._v(" ( sample )\n\n        "),a("b-table",{attrs:{hover:!0,striped:!0,bordered:!0,small:!0,fixed:!0,responsive:"sm",fields:e.vmColumnsTable}})],1):e._e()])],1)],1)},[],!1,w,null,null).exports}};var S=function(e){a("yDK8")},k=Object(l.a)(g,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"animated fadeIn"},[t("create-template"),this._v(" "),t("manage-templates",{attrs:{"card-title":"Edit Template"}})],1)},[],!1,S,null,null).exports,y=a("fZjL"),N=a.n(y),x=a("BO1k"),O=a.n(x),E=a("mvHQ"),j=a.n(E),R=firebase.database().ref("templates"),A={name:"newRecord",data:function(){return{selectedTemplate:{},selectedKey:0,dataObj:[],vmPostType:"",newRowObj:{}}},computed:{selectedName:function(){return d.state.selectedTemplateName}},methods:{initiateControls:function(){this.dataObj=[],this.newRowObj={};for(var e=0;e<this.selectedTemplate.columns.length;e++)this.newRowObj[this.selectedTemplate.columns[e]]="";this.dataObj.push(this.newRowObj)},resetTemplate:function(){d.commit("clearSelected")},addNewRow:function(){this.newRowObj={};for(var e=0;e<this.selectedTemplate.columns.length;e++)this.newRowObj[this.selectedTemplate.columns[e]]="";this.dataObj.push(this.newRowObj)},clkSaveChanges:function(){var e={},t=void 0;"data"===this.vmPostType?(t=firebase.database().ref("data"),e[this.selectedName]=JSON.parse(j()(this.dataObj)),t.push(e,this.fbCallback)):t=firebase.database().ref("posts")},fbCallback:function(e){e?console.log("WRITE FAILED"):(this.initiateControls(),console.log("DATA SAVED SUCCESSFULLY"))}},created:function(){var e=this;R.on("value",function(t){var a=!0,n=!1,s=void 0;try{for(var l,o=O()(N()(t.val()));!(a=(l=o.next()).done);a=!0){var r=l.value;if(t.val()[r].name===e.selectedName){e.selectedTemplate=t.val()[r],e.selectedKey=r,e.initiateControls(),e.vmPostType=e.selectedTemplate.postType;break}}}catch(e){n=!0,s=e}finally{try{!a&&o.return&&o.return()}finally{if(n)throw s}}})}};var I=function(e){a("sCty")},D={name:"createPost",components:{ManageTemplates:C,NewRecord:Object(l.a)(A,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"animated fadeIn disable-select"},[a("b-card",[a("div",{attrs:{slot:"header"},slot:"header"},[a("strong",[e._v(" "+e._s(e.selectedName)+" ")]),e._v(" "),a("span",{on:{click:function(t){e.resetTemplate()}}},[e._v("\n        Cancel and go back to choose template\n      ")])]),e._v(" "),"data"!==e.vmPostType?a("b-row",[a("b-col",{attrs:{sm:"6",lg:"4"}},[e._v("CATEGORY")]),e._v(" "),a("b-col",{attrs:{sm:"6",lg:"4"}},[e._v("DATE RANGE")]),e._v(" "),a("b-col",{attrs:{sm:"6",lg:"4"}},[e._v("Checkbox: Dated post")])],1):e._e(),e._v(" "),a("table",[a("thead",[a("tr",e._l(e.selectedTemplate.columns,function(t,n){return a("th",{key:n},[e._v("\n            "+e._s(t)+"\n          ")])}))]),e._v(" "),a("tbody",e._l(e.dataObj,function(t,n){return a("tr",{key:n},e._l(e.selectedTemplate.columns,function(t,n){return a("td",{key:n},[a("b-form-input",{attrs:{type:"text",placeholder:""},model:{value:e.newRowObj[t],callback:function(a){e.$set(e.newRowObj,t,a)},expression:"newRowObj[eachColumn]"}})],1)}))}))]),e._v(" "),a("b-row",[a("b-col",{attrs:{sm:"4",lg:"4"},on:{click:e.addNewRow}},[e._v("Add New Row")]),e._v(" "),a("b-col",{attrs:{sm:"4",lg:"4"}},[a("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:e.clkSaveChanges}},["data"!==e.vmPostType?a("span",[e._v("Save & Publish")]):e._e(),e._v(" "),"data"===e.vmPostType?a("span",[e._v("Save Data")]):e._e()])],1)],1)],1)],1)},[],!1,I,null,null).exports},computed:{templateSelected:function(){return d.state.selectedTemplateName}}};var $=function(e){a("OSM3")},F=Object(l.a)(D,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"animated fadeIn"},[""===this.templateSelected?t("manage-templates",{attrs:{"card-title":"Choose a Template"}}):this._e(),this._v(" "),""!==this.templateSelected?t("new-record"):this._e()],1)},[],!1,$,null,null).exports;var P=function(e){a("zEv0")},H=Object(l.a)({name:"food"},function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  Food Menu\n")])},[],!1,P,null,null).exports;var M=function(e){a("XRqE")},Y=Object(l.a)({name:"cabs"},function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  Cab Schedule\n")])},[],!1,M,null,null).exports;var z=function(e){a("1YeQ")},B=Object(l.a)({name:"briefcase"},function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  Briefcase\n")])},[],!1,z,null,null).exports;n.a.use(i.a);var L=new i.a({mode:"history",linkActiveClass:"open active",scrollBehavior:function(){return{y:0}},routes:[{path:"/",name:"Home",component:v,children:[{path:"templates",name:"Templates",component:k},{path:"create-post",name:"Create Post",beforeEnter:function(e,t,a){d.commit("clearSelected"),a()},component:F},{path:"briefcase",name:"Briefcase",component:B},{path:"food",name:"Food",component:H},{path:"cabs",name:"Cabs",component:Y}]}]});n.a.use(s.a),new n.a({el:"#app",router:L,store:d,template:"<App/>",components:{App:r}})},NY3r:function(e,t){},OSM3:function(e,t){},XRqE:function(e,t){},kd0g:function(e,t){},sCty:function(e,t){},yDK8:function(e,t){},zEv0:function(e,t){},zj2Q:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f5f6f0bf7b3e3db93d7d.js.map