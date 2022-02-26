(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ca8b22d6"],{6135:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container py-5"},[r("AdminNav"),r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.users,(function(e){return r("tr",{key:e.id},[r("th",{attrs:{scope:"row"}},[t._v(" "+t._s(e.id)+" ")]),r("td",[t._v(t._s(e.email))]),e.isAdmin?r("td",[t._v("admin")]):r("td",[t._v("user")]),r("td",[e.isAdmin?r("button",{directives:[{name:"show",rawName:"v-show",value:e.id!==t.currentUser.id,expression:"user.id !== currentUser.id"}],staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.toggleRole(e.id,!1)}}},[t._v(" set as user ")]):r("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(r){return r.stopPropagation(),r.preventDefault(),t.toggleRole(e.id,!0)}}},[t._v(" set as admin ")])])])})),0)])],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"thead-dark"},[r("tr",[r("th",{attrs:{scope:"col"}},[t._v(" # ")]),r("th",{attrs:{scope:"col"}},[t._v(" Email ")]),r("th",{attrs:{scope:"col"}},[t._v(" Role ")]),r("th",{attrs:{scope:"col",width:"140"}},[t._v(" Action ")])])])}],s=r("5530"),o=r("1da1"),c=(r("e9c4"),r("d3b7"),r("25f0"),r("d81d"),r("96cf"),r("e04c")),i=r("2f62"),u=r("be6c"),d=r("2fa3"),l={data:function(){return{users:[]}},created:function(){this.fetchUsers()},methods:{fetchUsers:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u["a"].users.get();case 3:r=e.sent,n=r.data,t.users=n.users,e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),d["a"].fire({icon:"error",title:"無法取得使用者資料，請稍後再試"}),console.log("error",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},toggleRole:function(t,e){var r=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var a,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,a=JSON.stringify({isAdmin:e.toString()}),n.next=4,u["a"].users.toggleRole({userId:t,payLoad:a});case 4:if(o=n.sent,c=o.data,console.log(c),"success"===c.status){n.next=9;break}throw new Error(c.message);case 9:r.users=r.users.map((function(e){return e.id===t?Object(s["a"])(Object(s["a"])({},e),{},{isAdmin:!e.isAdmin}):e})),d["a"].fire({icon:"success",title:"使用者權限修改成功"}),n.next=17;break;case 13:n.prev=13,n.t0=n["catch"](0),d["a"].fire({icon:"error",title:"無法修改使用者權限，請稍後再試"}),console.log("error",n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,13]])})))()}},components:{AdminNav:c["a"]},computed:Object(s["a"])({},Object(i["b"])(["currentUser"]))},f=l,p=r("2877"),v=Object(p["a"])(f,n,a,!1,null,null,null);e["default"]=v.exports},be6c:function(t,e,r){"use strict";var n=r("2fa3");e["a"]={categories:{get:function(){return n["b"].get("/admin/categories")},create:function(t){var e=t.newCategoryData;return n["b"].post("/admin/categories",e,{headers:{"Content-Type":"application/json;charset=UTF-8"}})},delete:function(t){var e=t.categoryId;return n["b"].delete("/admin/categories/".concat(e))},update:function(t){var e=t.updatedCategoryData,r=t.categoryId;return n["b"].put("/admin/categories/".concat(r),e,{headers:{"Content-Type":"application/json;charset=UTF-8"}})}},restaurants:{create:function(t){var e=t.formData;return n["b"].post("/admin/restaurants",e)},get:function(){return n["b"].get("/admin/restaurants")},delete:function(t){var e=t.restaurantId;return n["b"].delete("/admin/restaurants/".concat(e))},getDetail:function(t){var e=t.restaurantId;return n["b"].get("/admin/restaurants/".concat(e))},update:function(t){var e=t.restaurantId,r=t.formData;return n["b"].put("/admin/restaurants/".concat(e),r)}},users:{get:function(){return n["b"].get("/admin/users")},toggleRole:function(t){var e=t.userId,r=t.payLoad;return n["b"].put("/admin/users/".concat(e),r,{headers:{"Content-Type":"application/json;charset=UTF-8"}})}}}},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,s=r("1dde"),o=s("map");n({target:"Array",proto:!0,forced:!o},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},e04c:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mb-3"},[r("h1",[t._v("餐廳後台")]),r("router-link",{attrs:{to:"/admin/restaurants"}},[t._v("Restaurants")]),t._v(" | "),r("router-link",{attrs:{to:"/admin/categories"}},[t._v("Categories")]),t._v(" | "),r("router-link",{attrs:{to:"/admin/users"}},[t._v("Users")])],1)},a=[],s=r("2877"),o={},c=Object(s["a"])(o,n,a,!1,null,null,null);e["a"]=c.exports},e9c4:function(t,e,r){var n=r("23e7"),a=r("da84"),s=r("d066"),o=r("2ba4"),c=r("e330"),i=r("d039"),u=a.Array,d=s("JSON","stringify"),l=c(/./.exec),f=c("".charAt),p=c("".charCodeAt),v=c("".replace),g=c(1..toString),m=/[\uD800-\uDFFF]/g,b=/^[\uD800-\uDBFF]$/,h=/^[\uDC00-\uDFFF]$/,_=function(t,e,r){var n=f(r,e-1),a=f(r,e+1);return l(b,t)&&!l(h,a)||l(h,t)&&!l(b,n)?"\\u"+g(p(t,0),16):t},w=i((function(){return'"\\udf06\\ud834"'!==d("\udf06\ud834")||'"\\udead"'!==d("\udead")}));d&&n({target:"JSON",stat:!0,forced:w},{stringify:function(t,e,r){for(var n=0,a=arguments.length,s=u(a);n<a;n++)s[n]=arguments[n];var c=o(d,null,s);return"string"==typeof c?v(c,m,_):c}})}}]);
//# sourceMappingURL=chunk-ca8b22d6.a17818a4.js.map