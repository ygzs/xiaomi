(function(t){function a(a){for(var n,s,c=a[0],o=a[1],l=a[2],m=0,f=[];m<c.length;m++)s=c[m],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(a);while(f.length)f.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],n=!0,c=1;c<e.length;c++){var o=e[c];0!==i[o]&&(n=!1)}n&&(r.splice(a--,1),t=s(s.s=e[0]))}return t}var n={},i={app:0},r=[];function s(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=n,s.d=function(t,a,e){s.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,a){if(1&a&&(t=s(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)s.d(e,n,function(a){return t[a]}.bind(null,n));return e},s.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(a,"a",a),a},s.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var u=o;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"1f68":function(t,a,e){},"428a":function(t,a,e){},4516:function(t,a,e){},"4a24":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view",{attrs:{name:"bar1"}}),e("router-view",{attrs:{name:"bar2"}}),e("router-view",{attrs:{name:"main"}}),e("router-view",{attrs:{name:"mainproduct"}}),e("router-view",{attrs:{name:"about"}})],1)},r=[],s={},c=s,o=e("2877"),l=Object(o["a"])(c,i,r,!1,null,null,null),u=l.exports,m=e("8c4f"),f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"SiteTopNavBar"},[t._m(0),t._m(1),e("div",{staticClass:"cart"},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-icon8"}})]),e("a",{attrs:{href:"#"}},[t._v("购物车("+t._s(t.count)+")")])])])])},d=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"TopNavBar"},[e("ol",[e("li",[e("a",{attrs:{href:"#"}},[t._v("小米商城")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("MIUI")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("loT")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("云服务")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("金融")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("有品")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("小爱开放平台")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("企业团购")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("资质证照")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("协议规则")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("下载app")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("Select Location")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"user"},[e("ol",[e("li",[e("a",{attrs:{href:"#"}},[t._v("登录")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("注册")])]),e("li",[e("a",{attrs:{href:"#"}},[t._v("消息通知")])])])])}],p=(e("d899"),{computed:{count:function(){return this.$store.state.cart}}}),h=p,v=Object(o["a"])(h,f,d,!1,null,null,null),b=v.exports,g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"SecondNav clearfix"},[e("div",{ref:"logo",staticClass:"logo",staticStyle:{float:"left"},on:{mouseover:t.mouseover,mouseleave:t.mouseleave}},[e("img",{attrs:{src:"https://s02.mifile.cn/assets/static/image/mi-logo.png"}}),t._m(0)]),e("div",{staticClass:"product"},[e("ol",{staticClass:"clearfix"},t._l(t.products,(function(a,n){return e("li",{key:n,on:{click:function(e){return t.jumpTo(a)}}},[t._v(t._s(a))])})),0)])])},_=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{attrs:{href:"http://192.168.0.105:8080"}},[e("img",{attrs:{src:"https://s02.mifile.cn/assets/static/image/mi-home.png"}})])}],w=(e("428a"),{data:function(){return{products:["小米手机","Redmi红米","电视","笔记本","家电","路由器","智能硬件","服务","社区"]}},methods:{mouseover:function(){this.$refs.logo.children[0].style.transform="translateX(55px)",this.$refs.logo.children[1].style.transform="translateX(55px)"},mouseleave:function(){this.$refs.logo.children[0].style.transform="translateX(0px)",this.$refs.logo.children[1].style.transform="translateX(0px)"},jumpTo:function(t){this.$router.push({name:"About",params:{id:t}})}}}),j=w,y=Object(o["a"])(j,g,_,!1,null,null,null),x=y.exports,C=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main"},[e("div",{staticClass:"picturewindows"},[e("div",{ref:"picture",staticClass:"picture",style:t.containerStyle},[e("img",{attrs:{src:t.source[4],alt:""}}),t._l(t.source,(function(t,a){return e("img",{key:a,attrs:{src:t}})})),e("img",{attrs:{src:t.source[0],alt:""}})],2),e("div",{staticClass:"allbuttons"},[e("button",{staticClass:"previous",on:{click:function(a){return t.move(1)}}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-arrow-left"}})])]),e("button",{staticClass:"next",on:{click:function(a){return t.move(-1)}}},[e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-arrow-right"}})])])])]),e("div",{staticClass:"group"},[e("ol",{staticClass:"clearfix"},t._l(t.group,(function(a,n){return e("li",{key:n},[e("span",[t._v(t._s(a.name))]),e("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-jiantou"}})])])})),0)])])},$=[],O=(e("4a24"),{data:function(){return{current:1,distance:-1225,transitionEnd:!0,speed:25,source:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb9b9aab043acd0735afafb88d112b19.jpg?w=2452&h=920","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/de7f93ef8e5d76b8e250d6a4f6f9caff.jpg?thumb=1&w=1226&h=460&f=webp&q=90","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e25025f1ebb643fcf7f35aae636aa630.jpg?thumb=1&w=1226&h=460&f=webp&q=90","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c409123c70dc6fa2250916cb1cf2a4b.jpg?thumb=1&w=1226&h=460&f=webp&q=90","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/755aca9487082e7698e16f17cfb70839.jpg?thumb=1&w=1226&h=460&f=webp&q=90"],group:[{name:"手机 电话卡"},{name:"电视 盒子"},{name:"笔记本 显示器 平板"},{name:"出行 穿戴"},{name:"电源 配件"},{name:"健康 儿童"},{name:"耳机 音响"},{name:"生活 箱包"}]}},computed:{containerStyle:function(){return{transform:"translate3d(".concat(this.distance,"px, 0, 0)")}}},mounted:function(){this.init()},methods:{init:function(){this.play(),window.onblur=function(){this.stop()}.bind(this),window.onfocus=function(){this.play()}.bind(this)},move:function(t){if(this.transitionEnd){this.transitionEnd=!1;var a=this.distance+1225*t;this.animate(a,t)}},animate:function(t,a){var e=this;this.temp&&(window.clearInterval(this.temp),this.temp=null),this.temp=setInterval((function(){-1===a&&t<e.distance||1===a&&t>e.distance?e.distance+=e.speed*a:(e.transitionEnd=!0,window.clearInterval(e.temp),e.distance=t,t<-6125&&(e.distance=-1225),t>-1225&&(e.distance=-6125))}),50)},play:function(){var t=this;this.timer&&(window.clearInterval(this.timer),this.timer=null),this.timer=window.setInterval((function(){t.move(-1)}),4e3)},stop:function(){window.clearInterval(this.timer),this.timer=null}}}),k=O,E=Object(o["a"])(k,C,$,!1,null,null,null),S=E.exports,T=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"show"},[e("div",{staticClass:"first"},[e("ul",t._l(t.first,(function(a,n){return e("li",{key:n},[e("a",{attrs:{href:"#"}},[e("img",{attrs:{src:a.img}}),e("span",[t._v(t._s(a.name))])])])})),0)]),t._l(t.second,(function(t,a){return e("div",{key:a},[e("img",{staticStyle:{width:"316px",height:"170px"},attrs:{src:t}})])}))],2)},I=[],P=(e("4516"),{data:function(){return{first:[{name:"小米秒杀",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48"},{name:"企业团购",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48"},{name:"F码通道",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48"},{name:"米粉卡",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48"},{name:"以旧换新",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48"},{name:"话费充值",img:"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48"}],second:["https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/35a2239e10e392af73b6b7a737a039d6.jpg?w=632&h=340","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/50beb6e77e316ff0637d79ad1869572e.jpg?w=632&h=340","https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340"]}}}),M=P,q=Object(o["a"])(M,T,I,!1,null,null,null),X=q.exports,N=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"about"},[e("h1",[t._v("This is an test page")]),e("div",{staticClass:"introduction"},[e("img",{attrs:{src:t.src}}),e("div",{staticClass:"option"},[e("h1",[t._v(t._s(t.data))]),e("button",{on:{click:t.addcart}},[t._v("添加到购物车")])])])])},A=[],B=(e("9c47"),{data:function(){return{src:["https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493329.10251213.jpg"],data:""}},mounted:function(){this.data=this.$route.params.id},methods:{addcart:function(){this.$store.commit("addcart")}}}),J=B,F=Object(o["a"])(J,N,A,!1,null,null,null),H=F.exports;n["a"].use(m["a"]);var L=[{path:"/",name:"Home",components:{bar1:b,bar2:x,main:S,mainproduct:X}},{path:"/about",name:"About",components:{bar1:b,bar2:x,about:H},params:{id:name}}],R=new m["a"]({mode:"history",base:"/",routes:L}),U=R,z=e("2f62");n["a"].use(z["a"]);var D=new z["a"].Store({state:{cart:0},mutations:{addcart:function(t){this.state.cart++}},actions:{},modules:{}});e("1f68");n["a"].config.productionTip=!1,new n["a"]({router:U,store:D,render:function(t){return t(u)}}).$mount("#app")},"9c47":function(t,a,e){},d899:function(t,a,e){}});
//# sourceMappingURL=app.2b05d48a.js.map