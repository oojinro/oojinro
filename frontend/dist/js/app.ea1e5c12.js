(function(e){function n(n){for(var t,c,a=n[0],i=n[1],s=n[2],l=0,d=[];l<a.length;l++)c=a[l],r[c]&&d.push(r[c][0]),r[c]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);f&&f(n);while(d.length)d.shift()();return u.push.apply(u,s||[]),o()}function o(){for(var e,n=0;n<u.length;n++){for(var o=u[n],t=!0,c=1;c<o.length;c++){var i=o[c];0!==r[i]&&(t=!1)}t&&(u.splice(n--,1),e=a(a.s=o[0]))}return e}var t={},r={app:0},u=[];function c(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c4813":"e57089a8","chunk-2d0e95df":"7bcabf72","chunk-2d217357":"2ea12503","chunk-2d2214d0":"484ba129","chunk-2d22d746":"c4b8f970"}[e]+".js"}function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(e){var n=[],o=r[e];if(0!==o)if(o)n.push(o[2]);else{var t=new Promise(function(n,t){o=r[e]=[n,t]});n.push(o[2]=t);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,a.nc&&i.setAttribute("nonce",a.nc),i.src=c(e),u=function(n){i.onerror=i.onload=null,clearTimeout(s);var o=r[e];if(0!==o){if(o){var t=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src,c=new Error("Loading chunk "+e+" failed.\n("+t+": "+u+")");c.type=t,c.request=u,o[1](c)}r[e]=void 0}};var s=setTimeout(function(){u({type:"timeout",target:i})},12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(n)},a.m=e,a.c=t,a.d=function(e,n,o){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)a.d(o,t,function(n){return e[n]}.bind(null,t));return o},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/",a.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var f=s;u.push([0,"chunk-vendors"]),o()})({0:function(e,n,o){e.exports=o("56d7")},1:function(e,n){},"56d7":function(e,n,o){"use strict";o.r(n);o("cadf"),o("551c"),o("f751"),o("097d");var t=o("2b0e"),r=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},u=[],c={created:function(){var e=this;console.log("Loaded!"),e.$store.dispatch("user/loginOrSignup").then(function(){console.log("Done Login or Signup"),e.$store.commit("socket/connect")})}},a=c,i=o("2877"),s=Object(i["a"])(a,r,u,!1,null,null,null),l=s.exports,f=o("2f62"),d=o("0e44"),p=o("8055"),g=o.n(p),m={namespaced:!0,state:{socket:null},getters:{socket:function(e){return e.socket}},mutations:{connect:function(e){e.socket=g.a.connect("/"),console.log("connected")}}},h=(o("7f7f"),o("bc3a")),v=o.n(h),b={slug:null,users:[]},k={namespaced:!0,state:b,getters:{slug:function(e){return e.name},users:function(e){return e.users}},mutations:{slug:function(e,n){e.slug=n},users:function(e,n){e.users=n}},actions:{create:function(e){return console.log("Create Room"),console.log("Doing Create Room"),v.a.post("/api/v1/room/create").then(function(e){console.log("Done Create Room"),console.log(e)}).catch(function(e){console.log("Failed Create Room")})}}},S={name:"",slug:""},y={namespaced:!0,state:S,getters:{name:function(e){return e.name},slug:function(e){return e.slug}},mutations:{name:function(e,n){e.name=n},slug:function(e,n){e.slug=n}},actions:{loginOrSignup:function(e){console.log("Login or Signup");var n=e.state.slug;return""!==n?(console.log("Doing Log in"),v.a.post("/api/v1/login",{userSlug:n}).then(function(n){console.log("Done Log in"),console.log(n.data),e.commit("slug",n.data.userSlug),e.commit("name",n.data.userName)}).catch(function(n){return console.log("Failed Log in"),console.log("Doing Sign up"),v.a.post("/api/v1/signup").then(function(n){console.log("Done Sign Up"),console.log(n.data),e.commit("slug",n.data.userSlug),e.commit("name",n.data.userName)}).catch(function(e){console.log("Failed Sign Up")})})):(console.log("Doing Sign up"),v.a.post("/api/v1/signup").then(function(n){console.log("Done Sign Up"),console.log(n.data),e.commit("slug",n.data.userSlug),e.commit("name",n.data.userName)}).catch(function(e){console.log("Failed Sign Up")}))},update:function(e,n){console.log("Update User");var o=e.state.slug,t=n.name;return v.a.post("/api/v1/profile",{userSlug:o,userName:t}).then(function(n){console.log("Done Update User"),console.log(n.data),e.commit("slug",n.data.userSlug),e.commit("name",n.data.userName)}).catch(function(e){console.log("Failed Update User")})}}};t["a"].use(f["a"]);var w=new f["a"].Store({modules:{socket:m,room:k,user:y},plugins:[Object(d["a"])({key:"oojinro",paths:["room","user"]})]}),j=o("8c4f"),O=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"home"},[o("h1",[e._v("一夜人狼")]),o("div",[o("input",{attrs:{type:"button",value:"部屋を作る"},on:{click:function(n){return e.createRoom()}}})]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.roomSlug,expression:"roomSlug"}],attrs:{type:"text"},domProps:{value:e.roomSlug},on:{input:function(n){n.target.composing||(e.roomSlug=n.target.value)}}}),o("input",{attrs:{type:"button",value:"部屋に入る"},on:{click:function(n){return e.findRoom()}}})])])},_=[],x={data:function(){return{roomSlug:""}},methods:{createRoom:function(){this.$store.dispatch("room/create")},findRoom:function(){}}},D=x,U=Object(i["a"])(D,O,_,!1,null,null,null),N=U.exports;t["a"].use(j["a"]);var P=new j["a"]({mode:"history",base:"/",routes:[{path:"/",component:N},{path:"/about",component:function(){return o.e("chunk-2d22d746").then(o.bind(null,"f820"))}},{path:"/sample",component:function(){return o.e("chunk-2d2214d0").then(o.bind(null,"ca84"))}},{path:"/profile",component:function(){return o.e("chunk-2d217357").then(o.bind(null,"c66d"))}},{path:"/room/:name",component:function(){return o.e("chunk-2d0c4813").then(o.bind(null,"3ab1"))}},{path:"*",component:function(){return o.e("chunk-2d0e95df").then(o.bind(null,"8cdb"))}}]}),R=o("9483");Object(R["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),t["a"].config.productionTip=!1,new t["a"]({router:P,store:w,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.ea1e5c12.js.map