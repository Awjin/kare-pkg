webpackJsonp([0],{AKKm:function(t,e){},IjLm:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),r={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var a=n("VU/8")({name:"App"},r,!1,function(t){n("IjLm")},null,null).exports,s=n("/ocq"),o={name:"Editor",props:["pixels"],data:function(){return{isDrawing:!1,isFilling:!1}},methods:{trackStart:function(t){var e=t.target.dataset.pixelIdx;void 0!==e&&(this.isDrawing=!0,this.isFilling=!this.pixels[e],this.toggleFill(e))},toggleFill:function(t){this.$set(this.pixels,t,this.isFilling)},trackMove:function(t){if(this.isDrawing){var e=void 0;if("mouseover"===t.type)e=t.target;else if("touchmove"===t.type){var n=t.changedTouches[0];e=document.elementFromPoint(n.clientX,n.clientY)}var i=e.dataset.pixelIdx;this.toggleFill(i)}},trackEnd:function(){this.isDrawing=!1}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"editor",on:{mousedown:function(e){return e.preventDefault(),t.trackStart(e)},touchstart:function(e){return e.preventDefault(),t.trackStart(e)},mouseover:function(e){return e.preventDefault(),t.trackMove(e)},touchmove:function(e){return e.preventDefault(),t.trackMove(e)},mouseleave:t.trackEnd,mouseup:t.trackEnd,touchcancel:t.trackEnd,touchend:t.trackEnd}},t._l(1024,function(e){return n("div",{staticClass:"pixel",class:{filled:t.pixels[e]},attrs:{"data-pixel-idx":e}})}))},staticRenderFns:[]};var u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"preview"},t._l(1024,function(e){return n("div",{staticClass:"pixel",class:{filled:t.pixels[e]},attrs:{"data-pixel-idx":e}})}))},staticRenderFns:[]};var l={name:"DrawingBoard",components:{Editor:n("VU/8")(o,c,!1,function(t){n("AKKm")},"data-v-e1337f02",null).exports,Preview:n("VU/8")({name:"Preview",props:["pixels"]},u,!1,function(t){n("bqHi")},"data-v-c3997cb8",null).exports},props:["drawing"],data:function(){return{}}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"drawingBoard"},[e("preview",{attrs:{pixels:this.drawing}}),this._v(" "),e("editor",{attrs:{pixels:this.drawing}})],1)},staticRenderFns:[]};var p={name:"Home",components:{DrawingBoard:n("VU/8")(l,d,!1,function(t){n("a+5n")},"data-v-23ca0f69",null).exports},data:function(){return{drawings:this.$store.state.drawings}},computed:{},methods:{}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[this._m(0),this._v(" "),this._l(this.drawings,function(t,n){return e("drawing-board",{key:n,attrs:{drawing:t}})})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("div",{staticClass:"header-inner"},[this._v("\n      kare.pkg\n    ")])])}]};var v=n("VU/8")(p,f,!1,function(t){n("e4Zj")},"data-v-40935f04",null).exports;i.a.use(s.a);var h=new s.a({routes:[{path:"/",name:"Home",component:v}]}),m=n("NYxO");i.a.use(m.a);var g=new m.a.Store({state:{drawings:[{205:!0,206:!0,207:!0,208:!0,209:!0,210:!0,237:!0,238:!0,239:!0,240:!0,241:!0,242:!0,269:!0,270:!0,271:!0,272:!0,273:!0,274:!0,301:!0,302:!0,303:!0,304:!0,305:!0,306:!0,589:!0,590:!0,591:!0,592:!0,593:!0,594:!0,621:!0,622:!0,623:!0,624:!0,625:!0,626:!0,653:!0,654:!0,655:!0,656:!0,657:!0,658:!0,685:!0,686:!0,687:!0,688:!0,689:!0,690:!0,332:!0,339:!0,556:!0,563:!0,363:!0,395:!0,427:!0,459:!0,491:!0,523:!0,372:!0,404:!0,436:!0,468:!0,500:!0,532:!0,462:!0,463:!0,464:!0,368:!0,400:!0,432:!0,437:!0,469:!0}]},mutations:{}});n("uMhA");i.a.config.productionTip=!1,new i.a({el:"#app",components:{App:a},template:"<App/>",router:h,store:g})},"a+5n":function(t,e){},bqHi:function(t,e){},e4Zj:function(t,e){},uMhA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e6fbd1bd719684296f7d.js.map