(function(e){function n(n){for(var o,i,c=n[0],a=n[1],s=n[2],l=0,f=[];l<c.length;l++)i=c[l],r[i]&&f.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);d&&d(n);while(f.length)f.shift()();return u.push.apply(u,s||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],o=!0,i=1;i<t.length;i++){var a=t[i];0!==r[a]&&(o=!1)}o&&(u.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},u=[];function i(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c4813":"5d2ed51c","chunk-2d0e95df":"a0c76af6","chunk-2d217357":"a1077c05","chunk-2d2214d0":"2f87036c","chunk-2d22d746":"b6ebaae3"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise(function(n,o){t=r[e]=[n,o]});n.push(t[2]=o);var u,a=document.createElement("script");a.charset="utf-8",a.timeout=120,c.nc&&a.setAttribute("nonce",c.nc),a.src=i(e),u=function(n){a.onerror=a.onload=null,clearTimeout(s);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+u+")");i.type=o,i.request=u,t[1](i)}r[e]=void 0}};var s=setTimeout(function(){u({type:"timeout",target:a})},12e4);a.onerror=a.onload=u,document.head.appendChild(a)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=n,a=a.slice();for(var l=0;l<a.length;l++)n(a[l]);var d=s;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1:function(e,n){},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},u=[],i={mounted:function(){this.$store.commit("socket/connect"),this.$store.commit("user/uuid")}},c=i,a=t("2877"),s=Object(a["a"])(c,r,u,!1,null,null,null),l=s.exports,d=t("2f62"),f=t("0e44"),p=t("8055"),m=t.n(p),h={namespaced:!0,state:{socket:null},getters:{socket:function(e){return e.socket}},mutations:{connect:function(e){e.socket=m.a.connect("/"),console.log("connected")}}},g=(t("7f7f"),{name:""}),v={namespaced:!0,state:g,getters:{name:function(e){return e.name}},mutations:{name:function(e,n){e.name=n}}},b=(t("6b54"),{name:"",uuid:""}),k={namespaced:!0,state:b,getters:{name:function(e){return e.name},uuid:function(e){return e.uuid}},mutations:{name:function(e,n){e.name=n},uuid:function(e){""===e.uuid&&(console.log("uuid generated"),e.uuid=(new Date).getTime().toString(16)+Math.floor(1e4*Math.random()).toString(16))}}};o["a"].use(d["a"]);var y=new d["a"].Store({modules:{socket:h,room:v,user:k},plugins:[Object(f["a"])({key:"oojinro",paths:["room","user"]})]}),w=t("8c4f"),j=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"home"},[t("h1",[e._v("一夜人狼")]),t("div",[t("input",{attrs:{type:"button",value:"部屋を作る"},on:{click:function(n){return e.createRoom()}}})]),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.roomName,expression:"roomName"}],attrs:{type:"text"},domProps:{value:e.roomName},on:{input:function(n){n.target.composing||(e.roomName=n.target.value)}}}),t("input",{attrs:{type:"button",value:"部屋に入る"},on:{click:function(n){return e.findRoom()}}})])])},O=[],N={data:function(){return{roomName:""}},methods:{createRoom:function(){var e=this;console.log("creating room "+this.$store.getters["user/uuid"]);var n=this.$store.getters["socket/socket"];n.emit("requestCreateRoom",this.$store.getters["user/uuid"]),n.once("responseCreateRoom",function(n){null!==n?(console.log("created room:"+n),e.$router.push({path:"/room/"+n})):alert("部屋が作れませんでした！")})},findRoom:function(){console.log("finding room: "+this.roomName),this.$router.push({path:"/room/"+this.roomName})}}},_=N,x=Object(a["a"])(_,j,O,!1,null,null,null),$=x.exports;o["a"].use(w["a"]);var P=new w["a"]({mode:"history",base:"/",routes:[{path:"/",component:$},{path:"/about",component:function(){return t.e("chunk-2d22d746").then(t.bind(null,"f820"))}},{path:"/sample",component:function(){return t.e("chunk-2d2214d0").then(t.bind(null,"ca84"))}},{path:"/profile",component:function(){return t.e("chunk-2d217357").then(t.bind(null,"c66d"))}},{path:"/room/:name",component:function(){return t.e("chunk-2d0c4813").then(t.bind(null,"3ab1"))}},{path:"*",component:function(){return t.e("chunk-2d0e95df").then(t.bind(null,"8cdb"))}}]}),S=t("9483");Object(S["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),o["a"].config.productionTip=!1,new o["a"]({router:P,store:y,render:function(e){return e(l)}}).$mount("#app")}});
//# sourceMappingURL=app.7895fea8.js.map