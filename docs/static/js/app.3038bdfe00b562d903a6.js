webpackJsonp([0],{"9klv":function(t,i){},INg0:function(t,i){},NHnr:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=e("7+uW"),r=e("NYxO"),a={render:function(){var t=this.$createElement;return(this._self._c||t)("router-view")},staticRenderFns:[]};var s=e("VU/8")({name:"App"},a,!1,function(t){e("R9ta")},null,null).exports,o=e("/ocq"),d={name:"Editor",props:["drawingIdx"],data:function(){return{pixels:this.$store.state.drawings[this.drawingIdx].pixels,isDrawing:!1,isFilling:!1}},methods:{trackStart:function(t){var i=t.target.dataset.pixelIdx;void 0!==i&&(this.isDrawing=!0,this.isFilling=!this.pixels[i],this.$store.commit("startAction",{drawingIdx:this.drawingIdx}),this.toggleFill(i))},toggleFill:function(t){this.pixels[t]!=this.isFilling&&this.$store.commit("updateDrawing",{drawingIdx:this.drawingIdx,pixelIdx:t,value:this.isFilling})},trackMove:function(t){if(this.isDrawing){var i=this.getTarget(t);this.toggleFill(i.dataset.pixelIdx)}},getTarget:function(t){if("touchmove"===t.type){var i=t.changedTouches[0];return document.elementFromPoint(i.clientX,i.clientY)}return t.target},trackEnd:function(){this.isDrawing=!1}},created:function(){window.addEventListener("mouseup",this.trackEnd),window.addEventListener("touchcancel",this.trackEnd),window.addEventListener("touchend",this.trackEnd)},destroyed:function(){window.removeEventListener("mouseup",this.trackEnd),window.removeEventListener("touchcancel",this.trackEnd),window.removeEventListener("touchend",this.trackEnd)}},c={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"editor",on:{mousedown:function(i){return i.preventDefault(),t.trackStart(i)},touchstart:function(i){return i.preventDefault(),t.trackStart(i)},mouseover:function(i){return i.preventDefault(),t.trackMove(i)},touchmove:function(i){return i.preventDefault(),t.trackMove(i)}}},t._l(1024,function(i){return e("div",{staticClass:"pixel",class:{filled:t.pixels[i-1]},attrs:{"data-pixel-idx":i-1}})}))},staticRenderFns:[]};var u=e("VU/8")(d,c,!1,function(t){e("U3/j")},"data-v-6bd223e9",null).exports,l={name:"Preview",props:["drawingIdx","propResolution","propScale"],data:function(){return{canvas:"",resolution:this.propResolution||32,scale:this.propScale||10,pixels:this.$store.state.drawings[this.drawingIdx].pixels}},computed:{canvasSize:function(){return this.resolution*this.scale},imgSrc:function(){return this.updateImg,this.canvas.toDataURL("image/png")},updateImg:function(){var t=this.canvas.getContext("2d");for(var i in this.pixels){t.fillStyle=this.pixels[i]?"black":"white";var e=i%this.resolution,n=Math.floor(i/this.resolution);t.fillRect(e*this.scale,n*this.scale,this.scale,this.scale)}}},methods:{initCanvas:function(){var t=document.createElement("canvas");t.height=this.canvasSize,t.width=this.canvasSize;var i=t.getContext("2d");i.fillStyle="white",i.fillRect(0,0,this.canvasSize,this.canvasSize),i.fillStyle="black",this.canvas=t}},created:function(){this.initCanvas()},destroyed:function(){this.canvas.remove()}},h={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"preview"},[i("img",{attrs:{src:this.imgSrc}})])},staticRenderFns:[]};var v=e("VU/8")(l,h,!1,function(t){e("aO4y")},"data-v-096cfade",null).exports,g={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"site-header"},[i("div",{staticClass:"header-inner"},[i("button",[this._v("KARE.pkg")]),this._v(" "),this._t("default")],2)])},staticRenderFns:[]};var f=e("VU/8")({name:"SiteHeader"},g,!1,function(t){e("X/37")},"data-v-599de9ec",null).exports,p={name:"DrawingBoard",components:{Editor:u,Preview:v,SiteHeader:f},props:["drawingIdx"],computed:{isNotClearable:function(){var t=this.$store.state.drawings[this.drawingIdx].pixels;for(var i in t)if(t[i])return!1;return!0},isNotUndoable:function(){return this.$store.state.drawings[this.drawingIdx].history.currIdx<0},isNotRedoable:function(){var t=this.$store.state.drawings[this.drawingIdx].history;return t.currIdx>=t.actions.length-1}},methods:{clearDrawing:function(t){t.target.blur(),this.$store.commit("clearDrawing",{drawingIdx:this.drawingIdx})},undo:function(t){t.target.blur(),this.$store.commit("undo",{drawingIdx:this.drawingIdx})},redo:function(t){t.target.blur(),this.$store.commit("redo",{drawingIdx:this.drawingIdx})}}},w={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"drawingBoard"},[e("site-header",[e("div",[e("button",{attrs:{disabled:t.isNotUndoable},on:{click:t.undo}},[t._v("\n        undo\n      ")]),t._v(" "),e("button",{attrs:{disabled:t.isNotRedoable},on:{click:t.redo}},[t._v("\n        redo\n      ")]),t._v(" "),e("button",{attrs:{disabled:t.isNotClearable},on:{click:t.clearDrawing}},[t._v("\n        clear\n      ")])])]),t._v(" "),e("main",[e("preview",{attrs:{drawingIdx:t.drawingIdx}}),t._v(" "),e("editor",{attrs:{drawingIdx:t.drawingIdx}})],1)],1)},staticRenderFns:[]};var x={name:"Home",components:{DrawingBoard:e("VU/8")(p,w,!1,function(t){e("INg0")},"data-v-5619a16d",null).exports,Preview:v,SiteHeader:f},data:function(){return{drawings:this.$store.state.drawings}}},m={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"home"},[i("drawing-board",{attrs:{drawingIdx:0}})],1)},staticRenderFns:[]};var I=e("VU/8")(x,m,!1,function(t){e("9klv")},"data-v-5684716e",null).exports;n.a.use(o.a);var _=new o.a({routes:[{path:"/",name:"Home",component:I}]});n.a.use(r.a);var E=new r.a.Store({state:{drawings:[{pixels:{205:!0,206:!0,207:!0,208:!0,209:!0,210:!0,237:!0,238:!0,239:!0,240:!0,241:!0,242:!0,269:!0,270:!0,271:!0,272:!0,273:!0,274:!0,301:!0,302:!0,303:!0,304:!0,305:!0,306:!0,589:!0,590:!0,591:!0,592:!0,593:!0,594:!0,621:!0,622:!0,623:!0,624:!0,625:!0,626:!0,653:!0,654:!0,655:!0,656:!0,657:!0,658:!0,685:!0,686:!0,687:!0,688:!0,689:!0,690:!0,332:!0,363:!0,395:!0,427:!0,459:!0,491:!0,523:!0,556:!0,339:!0,372:!0,404:!0,436:!0,468:!0,500:!0,532:!0,563:!0,437:!0,469:!0,462:!0,463:!0,464:!0,368:!0,400:!0,432:!0},history:{currIdx:-1,actions:[]}},{pixels:{332:!0,363:!0,395:!0,427:!0,459:!0,491:!0,523:!0,556:!0,339:!0,372:!0,404:!0,436:!0,468:!0,500:!0,532:!0,563:!0,437:!0,469:!0,462:!0,463:!0,464:!0,368:!0,400:!0,432:!0},history:{currIdx:-1,actions:[]}},{pixels:{205:!0,206:!0,207:!0,208:!0,209:!0,210:!0,237:!0,238:!0,239:!0,240:!0,241:!0,242:!0,269:!0,270:!0,271:!0,272:!0,273:!0,274:!0,301:!0,302:!0,303:!0,304:!0,305:!0,306:!0,589:!0,590:!0,591:!0,592:!0,593:!0,594:!0,621:!0,622:!0,623:!0,624:!0,625:!0,626:!0,653:!0,654:!0,655:!0,656:!0,657:!0,658:!0,685:!0,686:!0,687:!0,688:!0,689:!0,690:!0,332:!0,363:!0,395:!0,427:!0,459:!0,491:!0,523:!0,556:!0,339:!0,372:!0,404:!0,436:!0,468:!0,500:!0,532:!0,563:!0,437:!0,469:!0},history:{currIdx:-1,actions:[]}}]},mutations:{startAction:function(t,i){b(t,i.drawingIdx)},updateDrawing:function(t,i){k(t,i.drawingIdx,i.pixelIdx,i.value)},undo:function(t,i){var e=i.drawingIdx,n=t.drawings[e].history;n.currIdx<0||(y(t,e),n.currIdx--)},redo:function(t,i){var e=i.drawingIdx,n=t.drawings[e].history;n.currIdx>=n.actions.length-1||(n.currIdx++,y(t,e))},clearDrawing:function(t,i){var e=i.drawingIdx;b(t,e);var n=t.drawings[e].pixels;for(var r in n)n[r]&&k(t,e,r,!1)}}});function b(t,i){var e=t.drawings[i].history,n=e.actions.length-(e.currIdx+1);e.actions.splice(e.currIdx,n),e.actions.push([]),e.currIdx++}function k(t,i,e,r){var a=t.drawings[i];n.a.set(a.pixels,e,r),a.history.actions[a.history.currIdx].push(e)}function y(t,i){var e=t.drawings[i],r=e.history.actions[e.history.currIdx],a=e.pixels[r[0]];r.forEach(function(t){n.a.set(e.pixels,t,!a)})}e("uMhA");n.a.config.productionTip=!1,n.a.use(r.a),new n.a({el:"#app",components:{App:s},template:"<App/>",router:_,store:E})},R9ta:function(t,i){},"U3/j":function(t,i){},"X/37":function(t,i){},aO4y:function(t,i){},uMhA:function(t,i){}},["NHnr"]);
//# sourceMappingURL=app.3038bdfe00b562d903a6.js.map