(function(o){function n(n){for(var t,c,i=n[0],a=n[1],s=n[2],l=0,f=[];l<i.length;l++)c=i[l],r[c]&&f.push(r[c][0]),r[c]=0;for(t in a)Object.prototype.hasOwnProperty.call(a,t)&&(o[t]=a[t]);g&&g(n);while(f.length)f.shift()();return u.push.apply(u,s||[]),e()}function e(){for(var o,n=0;n<u.length;n++){for(var e=u[n],t=!0,c=1;c<e.length;c++){var a=e[c];0!==r[a]&&(t=!1)}t&&(u.splice(n--,1),o=i(i.s=e[0]))}return o}var t={},r={app:0},u=[];function c(o){return i.p+"js/"+({}[o]||o)+"."+{"chunk-2d0c4813":"14c95f14","chunk-2d0e95df":"7bcabf72","chunk-2d217357":"df0e43bf","chunk-2d2214d0":"484ba129","chunk-2d22d746":"c4b8f970"}[o]+".js"}function i(n){if(t[n])return t[n].exports;var e=t[n]={i:n,l:!1,exports:{}};return o[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.e=function(o){var n=[],e=r[o];if(0!==e)if(e)n.push(e[2]);else{var t=new Promise(function(n,t){e=r[o]=[n,t]});n.push(e[2]=t);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=c(o),u=function(n){a.onerror=a.onload=null,clearTimeout(s);var e=r[o];if(0!==e){if(e){var t=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src,c=new Error("Loading chunk "+o+" failed.\n("+t+": "+u+")");c.type=t,c.request=u,e[1](c)}r[o]=void 0}};var s=setTimeout(function(){u({type:"timeout",target:a})},12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(n)},i.m=o,i.c=t,i.d=function(o,n,e){i.o(o,n)||Object.defineProperty(o,n,{enumerable:!0,get:e})},i.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},i.t=function(o,n){if(1&n&&(o=i(o)),8&n)return o;if(4&n&&"object"===typeof o&&o&&o.__esModule)return o;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:o}),2&n&&"string"!=typeof o)for(var t in o)i.d(e,t,function(n){return o[n]}.bind(null,t));return e},i.n=function(o){var n=o&&o.__esModule?function(){return o["default"]}:function(){return o};return i.d(n,"a",n),n},i.o=function(o,n){return Object.prototype.hasOwnProperty.call(o,n)},i.p="/",i.oe=function(o){throw console.error(o),o};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var g=s;u.push([0,"chunk-vendors"]),e()})({0:function(o,n,e){o.exports=e("56d7")},1:function(o,n){},"56d7":function(o,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var t=e("2b0e"),r=function(){var o=this,n=o.$createElement,e=o._self._c||n;return o.isLoading?e("div",[o._v("\n  初期化中...\n")]):e("div",{attrs:{id:"app"}},[e("router-view")],1)},u=[],c={data:function(){return{isLoading:!0}},created:function(){var o=this;console.log("Loaded!"),o.$store.dispatch("user/loginOrSignup").then(function(){console.log("Done Login or Signup"),o.$store.dispatch("socket/connect").then(function(){console.log("socketSlugの作成完了"),o.isLoading=!1})})}},i=c,a=e("2877"),s=Object(a["a"])(i,r,u,!1,null,null,null),l=s.exports,g=e("2f62"),f=e("0e44"),d=e("8055"),p=e.n(d),m=e("bc3a"),h=e.n(m),v={namespaced:!0,state:{socket:null},getters:{socket:function(o){return o.socket}},mutations:{socket:function(o,n){o.socket=n}},actions:{connect:function(o){var n=this,e=p.a.connect("/");return o.commit("socket",e),e.on("/ws/v1/room/entered",function(n){o.commit("room/slug",n.roomSlug,{root:!0}),o.commit("room/users",n.users,{root:!0})}),new Promise(function(o,t){e.on("connect",function(){console.log("接続",e.id,n.getters["user/slug"]),h.a.post("/api/v1/socket/connected",{socketSlug:e.id,userSlug:n.getters["user/slug"]}).then(function(n){o(n)}).catch(function(o){t(o)})})})}}},b=(e("7f7f"),{slug:null,users:[]}),S={namespaced:!0,state:b,getters:{slug:function(o){return o.name},users:function(o){return o.users}},mutations:{slug:function(o,n){o.slug=n},users:function(o,n){o.users=n}},actions:{create:function(o){return console.log("Create Room"),console.log("Doing Create Room"),new Promise(function(o,n){h.a.post("/api/v1/room/create").then(function(n){console.log("Done Create Room"),console.log(n.data),o(n.data)}).catch(function(o){console.log("Failed Create Room"),n()})})},enter:function(o,n){console.log("Enter Room"),console.log("Doing Enter Room");var e=n.roomSlug,t=o.rootGetters["user/slug"];return console.log(e,t),new Promise(function(n,r){h.a.post("/api/v1/room/enter",{roomSlug:e,userSlug:t}).then(function(e){console.log("Done Enter Room"),console.log(e.data),o.commit("slug",e.data.roomSlug),o.commit("users",e.data.users),n(e.data)}).catch(function(o){console.log("Failed Enter Room"),r(o)})})}}},k={name:"",slug:""},w={namespaced:!0,state:k,getters:{name:function(o){return o.name},slug:function(o){return o.slug}},mutations:{name:function(o,n){o.name=n},slug:function(o,n){o.slug=n}},actions:{loginOrSignup:function(o){console.log("Login or Signup");var n=o.state.slug;return""!==n?(console.log("Doing Log in"),h.a.post("/api/v1/login",{userSlug:n}).then(function(n){console.log("Done Log in"),console.log(n.data),o.commit("slug",n.data.userSlug),o.commit("name",n.data.userName)}).catch(function(n){return console.log("Failed Log in"),console.log("Doing Sign up"),h.a.post("/api/v1/signup").then(function(n){console.log("Done Sign Up"),console.log(n.data),o.commit("slug",n.data.userSlug),o.commit("name",n.data.userName)}).catch(function(o){console.log("Failed Sign Up")})})):(console.log("Doing Sign up"),h.a.post("/api/v1/signup").then(function(n){console.log("Done Sign Up"),console.log(n.data),o.commit("slug",n.data.userSlug),o.commit("name",n.data.userName)}).catch(function(o){console.log("Failed Sign Up")}))},update:function(o,n){console.log("Update User");var e=o.state.slug,t=n.name;return new Promise(function(n,r){h.a.post("/api/v1/profile",{userSlug:e,userName:t}).then(function(e){console.log("Done Update User"),console.log(e.data),o.commit("slug",e.data.userSlug),o.commit("name",e.data.userName),n()}).catch(function(o){console.log("Failed Update User"),r()})})}}};t["a"].use(g["a"]);var y=new g["a"].Store({modules:{socket:v,room:S,user:w},plugins:[Object(f["a"])({key:"oojinro",paths:["room","user"]})]}),j=e("8c4f"),O=function(){var o=this,n=o.$createElement,e=o._self._c||n;return e("div",{staticClass:"home"},[e("h1",[o._v("一夜人狼")]),e("div",[e("input",{attrs:{type:"button",value:"部屋を作る"},on:{click:function(n){return o.createRoom()}}})]),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:o.roomSlugTemp,expression:"roomSlugTemp"}],attrs:{type:"text"},domProps:{value:o.roomSlugTemp},on:{input:function(n){n.target.composing||(o.roomSlugTemp=n.target.value)}}}),e("input",{attrs:{type:"button",value:"部屋に入る"},on:{click:function(n){return o.findRoom()}}})])])},P=[],D={data:function(){return{roomSlugTemp:""}},methods:{createRoom:function(){var o=this;this.$store.dispatch("room/create").then(function(n){o.$router.push({path:"/room/"+n.roomSlug})}).catch(function(o){alert("部屋が作れませんでした")})},findRoom:function(){this.$router.push({path:"/room/"+this.roomSlugTemp})}}},R=D,_=Object(a["a"])(R,O,P,!1,null,null,null),T=_.exports;t["a"].use(j["a"]);var x=new j["a"]({mode:"history",base:"/",routes:[{path:"/",component:T},{path:"/about",component:function(){return e.e("chunk-2d22d746").then(e.bind(null,"f820"))}},{path:"/sample",component:function(){return e.e("chunk-2d2214d0").then(e.bind(null,"ca84"))}},{path:"/profile",component:function(){return e.e("chunk-2d217357").then(e.bind(null,"c66d"))}},{path:"/room/:roomSlug",component:function(){return e.e("chunk-2d0c4813").then(e.bind(null,"3ab1"))}},{path:"*",component:function(){return e.e("chunk-2d0e95df").then(e.bind(null,"8cdb"))}}]}),L=e("9483");Object(L["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(o){console.error("Error during service worker registration:",o)}}),t["a"].config.productionTip=!1,new t["a"]({router:x,store:y,render:function(o){return o(l)}}).$mount("#app")}});
//# sourceMappingURL=app.53f76adc.js.map