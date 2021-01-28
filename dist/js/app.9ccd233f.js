(function(t){function e(e){for(var r,c,o=e[0],i=e[1],u=e[2],d=0,p=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&p.push(n[c][0]),n[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=a[0]))}return t}var r={},n={app:0},s=[];function c(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=r,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(a,r,function(e){return t[e]}.bind(null,r));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=i;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"3f56":function(t,e,a){"use strict";var r=a("d331"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("4de4"),a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("Header"),a("router-view")],1)},s=[],c=(a("96cf"),a("1da1")),o=a("5530"),i=a("2f62"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-md navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("CMS ShoppingCart")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarsExampleDefault"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[t._l(t.pages,(function(e,r){return a("li",{key:r,staticClass:"nav-item active"},["home"!=e.slug?a("router-link",{staticClass:"nav-link",attrs:{to:"/"+e.slug}},[t._v(" "+t._s(e.name)+" ")]):t._e()],1)})),a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/admin"}},[t._v("Admin")])],1)],2)]),a("CartSummary")],1)},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarsExampleDefault","aria-controls":"navbarsExampleDefault","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"float-right text-white"},[t.itemCount>0?a("span",[t._v(" "+t._s(t.itemCount)+" item(s) "+t._s(t._f("currency")(t.totalPrice))+" ")]):a("span",[t._v(" Your cart is empty. ")]),t.itemCount>0?a("router-link",{staticClass:"btn btn-sm btn-dark text-white",attrs:{to:"/cart"}},[a("i",{staticClass:"fa fa-shopping-cart"})]):t._e()],1)},p=[],m={computed:Object(o["a"])({},Object(i["c"])({itemCount:"cart/itemCount",totalPrice:"cart/totalPrice"}))},g=m,v=a("2877"),f=Object(v["a"])(g,d,p,!1,null,null,null),b=f.exports,h={components:{CartSummary:b},computed:Object(o["a"])({},Object(i["e"])(["pages"]))},C=h,_=Object(v["a"])(C,u,l,!1,null,null,null),y=_.exports,P={components:{Header:y},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["setPagesAction","setCategoriesAction"])),Object(i["b"])({initializeCart:"cart/initializeCart"})),created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.setPagesAction(),t.setCategoriesAction(),t.initializeCart(t.$store);case 3:case"end":return e.stop()}}),e)})))()}},O=P,x=Object(v["a"])(O,n,s,!1,null,null,null),j=x.exports,w=(a("ab8b"),a("1f54"),a("99af"),a("7db0"),a("a9e3"),a("bc3a")),$=a.n(w),k=(a("c740"),a("13d5"),a("a434"),{namespaced:!0,state:{cart:[]},getters:{itemCount:function(t){return t.cart.reduce((function(t,e){return t+e.quantity}),0)},totalPrice:function(t){return t.cart.reduce((function(t,e){return t+e.quantity*e.product.price}),0)}},mutations:{addProduct:function(t,e){var a=t.cart.find((function(t){return t.product.id==e.id}));null!=a?a.quantity++:t.cart.push({product:e,quantity:1})},subtractProduct:function(t,e){var a=t.cart.find((function(t){return t.product.id==e}));if(1==a.quantity){var r=t.cart.findIndex((function(t){return t.product.id==e}));-1!=r&&t.cart.splice(r,1)}else a.quantity--},removeProduct:function(t,e){var a=t.cart.findIndex((function(t){return t.product.id==e}));-1!=a&&t.cart.splice(a,1)},setCartData:function(t,e){t.cart=e}},actions:{loadCartData:function(t){var e=localStorage.getItem("cart");null!=e&&t.commit("setCartData",JSON.parse(e))},storeCartData:function(t){localStorage.setItem("cart",JSON.stringify(t.state.cart))},initializeCart:function(t,e){t.dispatch("loadCartData"),e.watch((function(t){return t.cart.cart}),(function(){return t.dispatch("storeCartData")}),{deep:!0})},clearCartData:function(t){t.commit("setCartData",[])}}}),A="http://192.168.2.109:44304/api/orders",E={namespaced:!0,state:{orders:[]},mutations:{setOrders:function(t,e){t.orders=e}},actions:{storeOrderAction:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.a.post(A,e);case 2:return t.abrupt("return",t.sent.data.id);case 3:case"end":return t.stop()}}),t)})))()},setOrdersAction:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,$.a.get(A);case 3:e.t1=e.sent.data,e.t0.commit.call(e.t0,"setOrders",e.t1);case 5:case"end":return e.stop()}}),e)})))()}}},R="http://192.168.2.109:44304/api/auth",q={namespaced:!0,state:{authenticated:!1},mutations:{setAuthenticated:function(t){t.authenticated=!0}},actions:{authenticate:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,$.a.post(R,e);case 2:r=a.sent,1==r.data.success&&t.commit("setAuthenticated");case 4:case"end":return a.stop()}}),a)})))()}}};r["a"].use(i["a"]);var S="http://192.168.2.109:44304/api",D="".concat(S,"/pages"),I="".concat(S,"/categories"),N="".concat(S,"/products"),M="http://192.168.2.109:44304/media/products/",B=new i["a"].Store({strict:!0,modules:{cart:k,orders:E,auth:q},state:{pages:[],categories:[],products:[],productImages:M,currentPage:1,pageCount:0,pageSize:4,currentCategory:"all"},getters:{productById:function(t){return function(e){return t.products.find((function(t){return t.id==e}))}},pageById:function(t){return function(e){return t.pages.find((function(t){return t.id==e}))}}},mutations:{setPages:function(t,e){t.pages=e},setCategories:function(t,e){t.categories=e},setProducts:function(t,e){t.products=e},setPageCount:function(t,e){t.pageCount=Math.ceil(Number(e)/t.pageSize)},setCurrentCategory:function(t,e){t.currentCategory=e},setCurrentPage:function(t,e){t.currentPage=e}},actions:{setPagesAction:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,$.a.get(D);case 3:e.t1=e.sent.data,e.t0.commit.call(e.t0,"setPages",e.t1);case 5:case"end":return e.stop()}}),e)})))()},setCategoriesAction:function(t){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,$.a.get(I);case 3:e.t1=e.sent.data,e.t0.commit.call(e.t0,"setCategories",e.t1);case 5:case"end":return e.stop()}}),e)})))()},setProductsByCategoryAction:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function a(){var r,n,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return"all"!=e?(r="".concat(N,"/").concat(e,"?p=").concat(t.state.currentPage),n="".concat(N,"/count/").concat(e)):(r="".concat(N),n="".concat(N,"/count/all")),a.next=3,$.a.get(n);case 3:return s=a.sent.data,t.commit("setPageCount",s),a.t0=t,a.next=8,$.a.get(r);case 8:a.t1=a.sent.data,a.t0.commit.call(a.t0,"setProducts",a.t1);case 10:case"end":return a.stop()}}),a)})))()},setProductsByCategoryPaginationAction:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r="all"!==t.state.currentCategory?"".concat(N,"/").concat(t.state.currentCategory,"?p=").concat(e):"".concat(N,"?p=").concat(e),a.t0=t,a.next=4,$.a.get(r);case 4:a.t1=a.sent.data,a.t0.commit.call(a.t0,"setProducts",a.t1);case 6:case"end":return a.stop()}}),a)})))()},addProduct:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.a.post(N,e);case 2:case"end":return t.stop()}}),t)})))()},editProduct:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,$.a.put(N,e);case 2:case"end":return t.stop()}}),t)})))()},deleteProduct:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,$.a.delete("".concat(N,"/").concat(e.id));case 2:return r="".concat(N,"?p=").concat(t.state.currentPage),a.t0=t,a.next=6,$.a.get(r);case 6:a.t1=a.sent.data,a.t0.commit.call(a.t0,"setProducts",a.t1);case 8:case"end":return a.stop()}}),a)})))()},addPage:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,$.a.post(D,e);case 2:return a.t0=t,a.next=5,$.a.get(D);case 5:a.t1=a.sent.data,a.t0.commit.call(a.t0,"setPages",a.t1);case 7:case"end":return a.stop()}}),a)})))()},editPage:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,$.a.put("".concat(D,"/").concat(e.id),e);case 2:return a.t0=t,a.next=5,$.a.get(D);case 5:a.t1=a.sent.data,a.t0.commit.call(a.t0,"setPages",a.t1);case 7:case"end":return a.stop()}}),a)})))()},deletePage:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,$.a.delete("".concat(D,"/").concat(e.id));case 2:return a.t0=t,a.next=5,$.a.get(D);case 5:a.t1=a.sent.data,a.t0.commit.call(a.t0,"setPages",a.t1);case 7:case"end":return a.stop()}}),a)})))()}}}),F=a("8c4f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-3"},[a("CategoryList"),a("div",{staticClass:"col-9"},[a("div",{domProps:{innerHTML:t._s(t.pageContent)}})])],1)},J=[],L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-3"},[a("h3",[t._v("Categories")]),a("ul",{staticClass:"nav flex-column mt-3"},[a("li",{staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/categories/all"}},[t._v(" All ")])],1),t._l(t.categories,(function(e,r){return a("li",{key:r,staticClass:"nav-item"},[a("router-link",{staticClass:"nav-link",attrs:{to:"/categories/"+e.slug}},[t._v(" "+t._s(e.name)+" ")])],1)}))],2)])},z=[],V={computed:Object(o["a"])({},Object(i["e"])(["categories"]))},U=V,H=(a("3f56"),Object(v["a"])(U,L,z,!1,null,"01b6940b",null)),Y=H.exports,Q={components:{CategoryList:Y},computed:Object(o["a"])(Object(o["a"])({},Object(i["e"])(["pages"])),{},{pageContent:function(){var t=this.$route.params.slug?this.$route.params.slug:"home",e=this.pages.find((function(e){return e.slug==t}));return e?e.content:""}})},G=Q,K=Object(v["a"])(G,T,J,!1,null,null,null),W=K.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-3"},[a("CategoryList"),a("div",{staticClass:"col-9"},[a("div",{staticClass:"row"},t._l(t.products,(function(e,r){return a("div",{key:r,staticClass:"col-4 mt-3"},[a("p",[a("img",{staticClass:"img-fluid",attrs:{src:t.productImages+e.image}})]),a("h3",[t._v(" "+t._s(e.name)+" ")]),a("p",[t._v(" "+t._s(e.description)+" ")]),a("p",[t._v(" "+t._s(t._f("currency")(e.price))+" ")]),a("p",[a("button",{staticClass:"btn btn-primary",on:{click:function(a){return t.handleAddProduct(e)}}},[t._v(" Add to cart ")])])])})),0),a("ProductPagination")],1)],1)},Z=[],tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"mt-5"},[a("ul",{staticClass:"pagination"},[1!=t.currentPage?a("li",{staticClass:"page-item",on:{click:function(e){return t.getProducts(t.currentPage-1)}}},[a("button",{staticClass:"btn btn-secondary mx-1"},[t._v("Previous")])]):t._e(),t._l(t.pageCount,(function(e,r){return a("li",{key:r,staticClass:"page-item",on:{click:function(a){return t.getProducts(e)}}},[a("button",{staticClass:"btn mx-1",class:[r+1==t.currentPage?"btn-primary":"btn-secondary"]},[t._v(" "+t._s(e)+" ")])])})),t.currentPage!=t.pageCount?a("li",{staticClass:"page-item",on:{click:function(e){return t.getProducts(t.currentPage+1)}}},[a("button",{staticClass:"btn btn-secondary mx-1"},[t._v("Next")])]):t._e()],2)])},et=[],at={computed:Object(o["a"])({},Object(i["e"])(["pageCount","currentPage"])),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["d"])(["setCurrentPage"])),Object(i["b"])(["setProductsByCategoryPaginationAction"])),{},{getProducts:function(t){this.setCurrentPage(t),this.setProductsByCategoryPaginationAction(t)}})},rt=at,nt=Object(v["a"])(rt,tt,et,!1,null,null,null),st=nt.exports,ct={components:{CategoryList:Y,ProductPagination:st},computed:Object(o["a"])({},Object(i["e"])(["products","productImages"])),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["d"])(["setCurrentCategory","setCurrentPage"])),Object(i["d"])({addProduct:"cart/addProduct"})),Object(i["b"])(["setProductsByCategoryAction"])),{},{handleAddProduct:function(t){this.addProduct(t)}}),created:function(){this.setCurrentPage(1);var t=this.$route.params.category;this.setProductsByCategoryAction(t),this.setCurrentCategory(t)},beforeRouteUpdate:function(t,e,a){this.setCurrentPage(1);var r=t.params.category;this.setProductsByCategoryAction(r),this.setCurrentCategory(r),a()}},ot=ct,it=Object(v["a"])(ot,X,Z,!1,null,null,null),ut=it.exports,lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row mt-3"},[a("CategoryList"),a("div",{staticClass:"col-9"},[a("h2",{staticClass:"display-4"},[t._v("Your cart")]),a("table",{staticClass:"table table-bordered"},[t._m(0),a("tbody",[0==t.itemCount?a("tr",[a("td",{staticClass:"text-center",attrs:{colspan:"5"}},[t._v(" Your cart is empty. ")])]):t._l(t.cart,(function(e,r){return a("tr",{key:r},[a("td",[t._v(t._s(e.product.name))]),a("td",[t._v(t._s(e.quantity))]),a("td",[a("button",{staticClass:"btn small btn-primary mx-1",on:{click:function(a){return t.handleAddProduct(e.product)}}},[t._v(" + ")]),a("button",{staticClass:"btn small btn-warning mx-1",on:{click:function(a){return t.handleSubtractProduct(e.product.id)}}},[t._v(" - ")]),a("button",{staticClass:"btn small btn-danger mx-1",on:{click:function(a){return t.handleRemoveProduct(e.product.id)}}},[t._v(" remove ")])]),a("td",[t._v(t._s(t._f("currency")(e.product.price)))]),a("td",[t._v(t._s(t._f("currency")(e.product.price*e.quantity)))])])}))],2),t.itemCount>0?a("tfoot",[a("tr",[a("td",{staticClass:"text-right",attrs:{colspan:"5"}},[a("h4",[t._v("Total: "+t._s(t._f("currency")(t.totalPrice)))])])]),a("tr",[a("td",{attrs:{colspan:"5"}},[a("button",{staticClass:"btn btn-danger float-left",on:{click:t.handleClearCart}},[t._v(" Clear Cart ")]),a("router-link",{staticClass:"btn btn-primary float-right",attrs:{to:"/checkout"}},[t._v("Checkout")])],1)])]):t._e()])])],1)},dt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Product")]),a("th",[t._v("Quantity")]),a("th",[t._v("Actions")]),a("th",[t._v("Price")]),a("th",[t._v("Subtotal")])])])}],pt={components:{CategoryList:Y},computed:Object(o["a"])(Object(o["a"])({},Object(i["e"])({cart:function(t){return t.cart.cart}})),Object(i["c"])({itemCount:"cart/itemCount",totalPrice:"cart/totalPrice"})),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["d"])({addProduct:"cart/addProduct",subtractProduct:"cart/subtractProduct",removeProduct:"cart/removeProduct"})),Object(i["b"])({clearCartData:"cart/clearCartData"})),{},{handleAddProduct:function(t){this.addProduct(t)},handleSubtractProduct:function(t){this.subtractProduct(t)},handleRemoveProduct:function(t){this.removeProduct(t)},handleClearCart:function(){this.clearCartData()}})},mt=pt,gt=Object(v["a"])(mt,lt,dt,!1,null,null,null),vt=gt.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"m-2"},[a("div",{staticClass:"form-group m-2"},[a("label",{attrs:{for:""}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.order.name.$model,expression:"$v.order.name.$model"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.$v.order.name.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.order.name,"$model",e.target.value)}}}),a("validation-error",{attrs:{validation:t.$v.order.name}})],1),a("div",{staticClass:"form-group m-2"},[a("label",{attrs:{for:""}},[t._v("E-mail")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.order.email.$model,expression:"$v.order.email.$model"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.$v.order.email.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.order.email,"$model",e.target.value)}}}),a("validation-error",{attrs:{validation:t.$v.order.email}})],1),a("div",{staticClass:"form-group m-2"},[a("label",{attrs:{for:""}},[t._v("Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.$v.order.address.$model,expression:"$v.order.address.$model"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.$v.order.address.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.order.address,"$model",e.target.value)}}}),a("validation-error",{attrs:{validation:t.$v.order.address}})],1)])]),a("div",{staticClass:"col-12 text-center"},[a("router-link",{staticClass:"btn btn-secondary m-1",attrs:{to:"/cart"}},[t._v("Back")]),a("button",{staticClass:"btn btn-primary m-1",on:{click:t.submitOrder}},[t._v("Place Order")])],1)])},bt=[],ht=(a("b0c0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("div",{staticClass:"text-danger"},t._l(t.messages,(function(e,r){return a("div",{key:r},[t._v(" "+t._s(e)+" ")])})),0):t._e()}),Ct=[],_t={props:["validation"],computed:{show:function(){return this.validation.$dirty&&this.validation.$invalid},messages:function(){var t=[];return this.validation.$dirty&&(this.hasValidationError("required")?t.push("Please enter a value."):this.hasValidationError("email")&&t.push("Please enter a valid email.")),t}},methods:{hasValidationError:function(t){return Object.prototype.hasOwnProperty.call(this.validation.$params,t)&&!this.validation[t]}}},yt=_t,Pt=Object(v["a"])(yt,ht,Ct,!1,null,null,null),Ot=Pt.exports,xt=a("b5ae"),jt={components:{ValidationError:Ot},data:function(){return{order:{name:"John",email:"john@gmail.com",address:"John Street"}}},computed:Object(o["a"])(Object(o["a"])({},Object(i["e"])({cart:function(t){return t.cart.cart}})),Object(i["c"])({total:"cart/totalPrice"})),validations:{order:{name:{required:xt["required"]},email:{required:xt["required"],email:xt["email"]},address:{required:xt["required"]}}},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])({storeOrder:"orders/storeOrderAction",clearCartData:"cart/clearCartData"})),{},{submitOrder:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$v.$touch(),t.$v.$invalid){e.next=12;break}return a=new FormData,a.append("Name",t.order.name),a.append("Email",t.order.email),a.append("Address",t.order.address),a.append("Cart",JSON.stringify(t.cart)),a.append("Total",t.total),e.next=10,t.storeOrder(a);case 10:t.clearCartData(),t.$router.push("/thanks");case 12:case"end":return e.stop()}}),e)})))()}})},wt=jt,$t=Object(v["a"])(wt,ft,bt,!1,null,null,null),kt=$t.exports,At=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center m-2"},[a("h2",{staticClass:"display-4"},[t._v("Thank you for your order!")])])}],Rt={},qt=Object(v["a"])(Rt,At,Et,!1,null,null,null),St=qt.exports,Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row p-3"},[a("div",{staticClass:"col-3 bg-secondary p-2"},[a("router-link",{staticClass:"btn btn-block btn-primary",attrs:{to:"/admin/products"}},[t._v("Products")]),a("router-link",{staticClass:"btn btn-block btn-primary",attrs:{to:"/admin/pages"}},[t._v("Pages")]),a("router-link",{staticClass:"btn btn-block btn-primary",attrs:{to:"/admin/orders"}},[t._v("Orders")])],1),a("div",{staticClass:"col"},[a("router-view")],1)])},It=[],Nt={},Mt=Object(v["a"])(Nt,Dt,It,!1,null,null,null),Bt=Mt.exports,Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Products")]),a("router-link",{staticClass:"btn btn-primary mb-4",attrs:{to:"/admin/products/add"}},[t._v("Add Product")]),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.products,(function(e,r){return a("tr",{key:r},[a("td",{staticClass:"align-middle"},[t._v(t._s(e.name))]),a("td",{staticClass:"align-middle"},[a("img",{attrs:{src:t.productImages+e.image,width:"100"}})]),a("td",{staticClass:"align-middle"},[t._v(t._s(t._f("currency")(e.price)))]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.category.name))]),a("td",{staticClass:"align-middle"},[a("button",{staticClass:"btn btn-sm btn-secondary mx-2",on:{click:function(a){return t.handleEdit(e)}}},[t._v(" Edit ")]),a("button",{staticClass:"btn btn-sm btn-danger mx-2",on:{click:function(a){return t.deleteProduct(e)}}},[t._v(" Delete ")])])])})),0)]),a("ProductPagination")],1)},Tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Name")]),a("th",[t._v("Image")]),a("th",[t._v("Price")]),a("th",[t._v("Category")]),a("th",[t._v("Actions")])])])}],Jt={components:{ProductPagination:st},computed:Object(o["a"])({},Object(i["e"])(["products","productImages"])),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["d"])(["setCurrentCategory"])),Object(i["b"])(["setProductsByCategoryAction","deleteProduct"])),{},{handleEdit:function(t){this.$router.push("/admin/products/edit/".concat(t.id))}}),created:function(){this.setCurrentCategory("all"),this.setProductsByCategoryAction("all")}},Lt=Jt,zt=Object(v["a"])(Lt,Ft,Tt,!1,null,null,null),Vt=zt.exports,Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"text-center p-2"},[t._v(" "+t._s(t.editMode?"Edit Product":"Add Product")+" ")]),t.$v.$invalid&&t.$v.$dirty?a("h4",{staticClass:"bg-danger text-white text-center p-2"},[t._v(" Values Required for All Fields! ")]):t._e(),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.name,expression:"product.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.product.name},on:{input:function(e){e.target.composing||t.$set(t.product,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Description")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.product.description,expression:"product.description"}],staticClass:"form-control",domProps:{value:t.product.description},on:{input:function(e){e.target.composing||t.$set(t.product,"description",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Price")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.product.price,expression:"product.price"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.product.price},on:{input:function(e){e.target.composing||t.$set(t.product,"price",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Image")]),a("input",{staticClass:"form-control",attrs:{type:"file"},on:{change:t.onFileSelected}}),t.editMode?a("p",{staticClass:"mt-3"},[t._v(" Current Image: "),a("img",{attrs:{src:t.productImages+t.product.image,width:"100"}})]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Category")]),a("select",{staticClass:"form-control",on:{change:t.onChange}},[a("option",{domProps:{value:null}},[t._v("Choose a category")]),t._l(t.categories,(function(e,r){return a("option",{key:r,domProps:{value:e.id,selected:e.id==t.product.categoryId}},[t._v(" "+t._s(e.name)+" ")])}))],2)]),a("div",{staticClass:"text-center"},[a("router-link",{staticClass:"btn btn-secondary m-1",attrs:{to:"/admin/products"}},[t._v("Cancel")]),a("button",{staticClass:"btn btn-primary m-1",on:{click:t.handleProduct}},[t._v(" "+t._s(t.editMode?"Edit":"Add")+" ")])],1)])},Ht=[],Yt=(a("a4d3"),a("e01a"),{data:function(){return{product:{name:null,description:null,price:null,image:null,category:null}}},validations:{product:{name:{required:xt["required"]},description:{required:xt["required"]},price:{required:xt["required"]},category:{required:xt["required"]}}},computed:Object(o["a"])(Object(o["a"])({},Object(i["e"])(["categories","productImages"])),{},{editMode:function(){return"edit"==this.$route.params["op"]}}),methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["d"])(["setCurrentPage"])),Object(i["b"])(["addProduct","editProduct"])),{},{onFileSelected:function(t){this.product.image=t.target.files[0]},onChange:function(t){this.product.category=t.target.value},handleProduct:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$v.$touch(),t.$v.$invalid){e.next=19;break}if(a=new FormData,a.append("Name",t.product.name),a.append("Description",t.product.description),a.append("Price",t.product.price),a.append("ImageUpload",t.product.image),a.append("CategoryId",t.product.category.id||t.product.category),!t.editMode){e.next=15;break}return a.append("Id",t.product.id),a.append("Image",t.product.image.name),e.next=13,t.editProduct(a);case 13:e.next=17;break;case 15:return e.next=17,t.addProduct(a);case 17:t.setCurrentPage(1),t.$router.push("/admin/products");case 19:case"end":return e.stop()}}),e)})))()}}),created:function(){this.editMode&&Object.assign(this.product,this.$store.getters.productById(this.$route.params["id"]))}}),Qt=Yt,Gt=Object(v["a"])(Qt,Ut,Ht,!1,null,null,null),Kt=Gt.exports,Wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Pages")]),a("router-link",{staticClass:"btn btn-primary mb-4",attrs:{to:"/admin/pages/add"}},[t._v("Add Page")]),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.pages,(function(e,r){return a("tr",{key:r},[a("td",{staticClass:"align-middle"},[t._v(t._s(e.name))]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.slug))]),a("td",{staticClass:"align-middle"},[a("button",{staticClass:"btn btn-sm btn-secondary mx-2",on:{click:function(a){return t.handleEdit(e)}}},[t._v(" Edit ")]),a("button",{staticClass:"btn btn-sm btn-danger mx-2",on:{click:function(a){return t.deletePage(e)}}},[t._v(" Delete ")])])])})),0)])],1)},Xt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Name")]),a("th",[t._v("Slug")]),a("th",[t._v("Actions")])])])}],Zt={computed:Object(o["a"])({},Object(i["e"])(["pages"])),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["deletePage"])),{},{handleEdit:function(t){this.$router.push("/admin/pages/edit/".concat(t.id))}})},te=Zt,ee=Object(v["a"])(te,Wt,Xt,!1,null,null,null),ae=ee.exports,re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"text-center p-2"},[t._v(" "+t._s(t.editMode?"Edit Page":"Add Page")+" ")]),t.$v.$invalid&&t.$v.$dirty?a("h4",{staticClass:"bg-danger text-white text-center p-2"},[t._v(" Values Required for All Fields! ")]):t._e(),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.page.name,expression:"page.name"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.page.name},on:{input:function(e){e.target.composing||t.$set(t.page,"name",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Slug")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.page.slug,expression:"page.slug"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.page.slug},on:{input:function(e){e.target.composing||t.$set(t.page,"slug",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Content")]),a("vue-editor",{model:{value:t.page.content,callback:function(e){t.$set(t.page,"content",e)},expression:"page.content"}})],1),a("div",{staticClass:"text-center"},[a("router-link",{staticClass:"btn btn-secondary m-1",attrs:{to:"/admin/pages"}},[t._v("Cancel")]),a("button",{staticClass:"btn btn-primary m-1",on:{click:t.handlePage}},[t._v(" "+t._s(t.editMode?"Edit":"Add")+" ")])],1)])},ne=[],se={data:function(){return{page:{name:null,slug:null,content:null}}},validations:{page:{name:{required:xt["required"]},slug:{required:xt["required"]},content:{required:xt["required"]}}},computed:{editMode:function(){return"edit"==this.$route.params["op"]}},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["addPage","editPage"])),{},{handlePage:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$v.$touch(),t.$v.$invalid){e.next=10;break}if(!t.editMode){e.next=7;break}return e.next=5,t.editPage(t.page);case 5:e.next=9;break;case 7:return e.next=9,t.addPage(t.page);case 9:t.$router.push("/admin/pages");case 10:case"end":return e.stop()}}),e)})))()}}),created:function(){this.editMode&&Object.assign(this.page,this.$store.getters.pageById(this.$route.params["id"]))}},ce=se,oe=Object(v["a"])(ce,re,ne,!1,null,null,null),ie=oe.exports,ue=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("Orders")]),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.orders,(function(e,r){return a("tr",{key:r},[a("td",{staticClass:"align-middle"},[t._v(t._s(e.id))]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.name))]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.email))]),a("td",{staticClass:"align-middle"},[t._v(t._s(e.address))]),a("td",{staticClass:"align-middle"},[a("ul",{staticClass:"list-group"},t._l(JSON.parse(e.cart),(function(e,r){return a("li",{key:r,staticClass:"list-group-item"},[t._v(" "+t._s(e.product.name)+" "+t._s(t._f("currency")(e.product.price))+" "+t._s("x "+e.quantity)+" ")])})),0)]),a("td",{staticClass:"align-middle"},[t._v(" "+t._s(t._f("currency")(e.total))+" ")])])})),0)])])},le=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("ID")]),a("th",[t._v("Name")]),a("th",[t._v("E-mail")]),a("th",[t._v("Address")]),a("th",[t._v("Order Content")]),a("th",[t._v("Total")])])])}],de={computed:Object(o["a"])({},Object(i["e"])({orders:function(t){return t.orders.orders}})),methods:Object(o["a"])({},Object(i["b"])({setOrdersAction:"orders/setOrdersAction"})),created:function(){this.setOrdersAction()}},pe=de,me=Object(v["a"])(pe,ue,le,!1,null,null,null),ge=me.exports,ve=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mt-5"},[t.showFailureMessage?a("h4",{staticClass:"bg-danger text-white text-center p-2"},[t._v(" Authentication failed, please try again. ")]):t._e(),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Username")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:""}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("div",{staticClass:"text-center"},[a("button",{staticClass:"btn btn-primary m-1",on:{click:t.handleAuth}},[t._v(" Log in ")])])])},fe=[],be={data:function(){return{username:null,password:null,showFailureMessage:!1}},computed:Object(o["a"])({},Object(i["e"])({authenticated:function(t){return t.auth.authenticated}})),methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])({authenticate:"auth/authenticate"})),{},{handleAuth:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.authenticate({username:t.username,password:t.password});case 2:t.authenticated?t.$router.push("/admin"):t.showFailureMessage=!0;case 3:case"end":return e.stop()}}),e)})))()}})},he=be,Ce=Object(v["a"])(he,ve,fe,!1,null,null,null),_e=Ce.exports;r["a"].use(F["a"]);var ye=new F["a"]({mode:"history",routes:[{path:"/categories/:category",component:ut},{path:"/cart",component:vt},{path:"/checkout",component:kt},{path:"/thanks",component:St},{path:"/login",component:_e},{path:"/admin",component:Bt,beforeEnter:function(t,e,a){B.state.auth.authenticated?a():a("/login")},children:[{path:"products",component:Vt},{path:"products/:op(add|edit)/:id(\\d+)?",component:Kt},{path:"pages",component:ae},{path:"pages/:op(add|edit)/:id(\\d+)?",component:ie},{path:"orders",component:ge},{path:"*",redirect:"/admin/products"}]},{path:"/:slug?",component:W},{path:"*",redirect:"/"}]}),Pe=a("1dce"),Oe=a.n(Pe),xe=a("5873");r["a"].config.productionTip=!1,r["a"].use(Oe.a),r["a"].use(xe["a"]),r["a"].filter("currency",(function(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)})),new r["a"]({render:function(t){return t(j)},store:B,router:ye}).$mount("#app")},d331:function(t,e,a){}});
//# sourceMappingURL=app.9ccd233f.js.map