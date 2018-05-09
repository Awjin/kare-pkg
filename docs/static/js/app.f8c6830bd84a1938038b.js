webpackJsonp([0],{"6Bi5":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a=i("NYxO"),r={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var s=i("VU/8")({name:"App"},r,!1,function(t){i("R9ta")},null,null).exports,o=i("/ocq"),c={name:"Editor",props:["drawingIdx"],data:function(){return{pixels:this.$store.state.drawings[this.drawingIdx].pixels,isDrawing:!1,isFilling:!1}},methods:{trackStart:function(t){var e=t.target.dataset.pixelIdx;void 0!==e&&(this.isDrawing=!0,this.isFilling=!this.pixels[e],this.toggleFill(e))},toggleFill:function(t){this.$store.dispatch("updateDrawing",{drawingIdx:this.drawingIdx,pixelIdx:t,value:this.isFilling})},trackMove:function(t){if(this.isDrawing){var e=this.getTarget(t);this.toggleFill(e.dataset.pixelIdx)}},getTarget:function(t){if("touchmove"===t.type){var e=t.changedTouches[0];return document.elementFromPoint(e.clientX,e.clientY)}return t.target},trackEnd:function(){this.isDrawing=!1}},created:function(){window.addEventListener("mouseup",this.trackEnd),window.addEventListener("touchcancel",this.trackEnd),window.addEventListener("touchend",this.trackEnd)},destroyed:function(){window.removeEventListener("mouseup",this.trackEnd),window.removeEventListener("touchcancel",this.trackEnd),window.removeEventListener("touchend",this.trackEnd)}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"editor",on:{mousedown:function(e){return e.preventDefault(),t.trackStart(e)},touchstart:function(e){return e.preventDefault(),t.trackStart(e)},mouseover:function(e){return e.preventDefault(),t.trackMove(e)},touchmove:function(e){return e.preventDefault(),t.trackMove(e)}}},t._l(1024,function(e){return i("div",{staticClass:"pixel",class:{filled:t.pixels[e-1]},attrs:{"data-pixel-idx":e-1}})}))},staticRenderFns:[]};var l=i("VU/8")(c,d,!1,function(t){i("lhz6")},"data-v-33e4e8ca",null).exports,u={name:"Preview",props:["drawingIdx","propResolution","propScale"],data:function(){return{canvas:"",resolution:this.propResolution||32,scale:this.propScale||10,pixels:this.$store.state.drawings[this.drawingIdx].pixels}},computed:{canvasSize:function(){return this.resolution*this.scale},imgSrc:function(){return this.updateImg,this.canvas.toDataURL("image/png")},updateImg:function(){var t=this.canvas.getContext("2d");for(var e in this.pixels){t.fillStyle=this.pixels[e]?"black":"white";var i=e%this.resolution,n=Math.floor(e/this.resolution);t.fillRect(i*this.scale,n*this.scale,this.scale,this.scale)}}},methods:{initCanvas:function(){var t=document.createElement("canvas");t.height=this.canvasSize,t.width=this.canvasSize;var e=t.getContext("2d");e.fillStyle="white",e.fillRect(0,0,this.canvasSize,this.canvasSize),e.fillStyle="black",this.canvas=t}},created:function(){this.initCanvas()},destroyed:function(){this.canvas.remove()}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"preview"},[e("img",{attrs:{src:this.imgSrc}})])},staticRenderFns:[]};var v=i("VU/8")(u,h,!1,function(t){i("aO4y")},"data-v-096cfade",null).exports,p={name:"DrawingBoard",components:{Editor:l,Preview:v},props:["drawingIdx"],methods:{clearDrawing:function(t){t.target.blur(),this.$store.dispatch("clearDrawing",{drawingIdx:this.drawingIdx})}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"drawingBoard"},[e("preview",{attrs:{drawingIdx:this.drawingIdx}}),this._v(" "),e("div",[e("editor",{attrs:{drawingIdx:this.drawingIdx}}),this._v(" "),e("div",{staticClass:"controls"},[e("button",{on:{click:this.clearDrawing}},[this._v("clear")])])],1)],1)},staticRenderFns:[]};var g={name:"Home",components:{DrawingBoard:i("VU/8")(p,f,!1,function(t){i("UoD0")},"data-v-7627da99",null).exports,Preview:v},data:function(){return{drawings:this.$store.state.drawings}}},w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"home"},[this._m(0),this._v(" "),e("drawing-board",{attrs:{drawingIdx:0}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("header",[e("div",{staticClass:"header-inner"},[this._v("\n      kare.pkg\n    ")])])}]};var x=i("VU/8")(g,w,!1,function(t){i("6Bi5")},"data-v-4947c0af",null).exports;n.a.use(o.a);var m=new o.a({routes:[{path:"/",name:"Home",component:x}]}),I=i("2aIq"),E=i.n(I);n.a.use(a.a);var _=new a.a.Store({state:{drawings:[{pixels:{205:!0,206:!0,207:!0,208:!0,209:!0,210:!0,237:!0,238:!0,239:!0,240:!0,241:!0,242:!0,269:!0,270:!0,271:!0,272:!0,273:!0,274:!0,301:!0,302:!0,303:!0,304:!0,305:!0,306:!0,589:!0,590:!0,591:!0,592:!0,593:!0,594:!0,621:!0,622:!0,623:!0,624:!0,625:!0,626:!0,653:!0,654:!0,655:!0,656:!0,657:!0,658:!0,685:!0,686:!0,687:!0,688:!0,689:!0,690:!0,332:!0,363:!0,395:!0,427:!0,459:!0,491:!0,523:!0,556:!0,339:!0,372:!0,404:!0,436:!0,468:!0,500:!0,532:!0,563:!0,437:!0,469:!0,462:!0,463:!0,464:!0,368:!0,400:!0,432:!0},history:{idx:0,actions:[]}},{pixels:{332:!0,363:!0,395:!0,427:!0,459:!0,491:!0,523:!0,556:!0,339:!0,372:!0,404:!0,436:!0,468:!0,500:!0,532:!0,563:!0,437:!0,469:!0,462:!0,463:!0,464:!0,368:!0,400:!0,432:!0},history:{idx:0,actions:[]}},{pixels:{205:!0,206:!0,207:!0,208:!0,209:!0,210:!0,237:!0,238:!0,239:!0,240:!0,241:!0,242:!0,269:!0,270:!0,271:!0,272:!0,273:!0,274:!0,301:!0,302:!0,303:!0,304:!0,305:!0,306:!0,589:!0,590:!0,591:!0,592:!0,593:!0,594:!0,621:!0,622:!0,623:!0,624:!0,625:!0,626:!0,653:!0,654:!0,655:!0,656:!0,657:!0,658:!0,685:!0,686:!0,687:!0,688:!0,689:!0,690:!0,332:!0,363:!0,395:!0,427:!0,459:!0,491:!0,523:!0,556:!0,339:!0,372:!0,404:!0,436:!0,468:!0,500:!0,532:!0,563:!0,437:!0,469:!0},history:{idx:0,actions:[]}}]},actions:{clearDrawing:function(t,e){var i=e.drawingIdx,n=t.state.drawings[i].pixels;for(var a in n)t.commit("setPixel",{drawingIdx:i,pixelIdx:a,value:!1})},updateDrawing:function(t,e){t.commit("setPixel",e),t.commit("addHistory",e)}},mutations:{setPixel:function(t,e){var i=e.drawingIdx,a=e.pixelIdx,r=e.value,s=t.drawings[i].pixels;n.a.set(s,a,r)},addHistory:function(t,e){E()(e)}}});i("uMhA");n.a.config.productionTip=!1,n.a.use(a.a),new n.a({el:"#app",components:{App:s},template:"<App/>",router:m,store:_})},R9ta:function(t,e){},UoD0:function(t,e){},aO4y:function(t,e){},lhz6:function(t,e){},uMhA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f8c6830bd84a1938038b.js.map