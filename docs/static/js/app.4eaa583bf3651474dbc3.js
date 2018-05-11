webpackJsonp([0],{"+KC4":function(t,e){},"7NtY":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),r=i("NYxO"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"fade",mode:"out-in"}},[e("router-view",{key:Math.random()})],1)},staticRenderFns:[]};var s=i("VU/8")({name:"App"},a,!1,function(t){i("+KC4")},null,null).exports,o=i("/ocq"),d={name:"Editor",props:["drawingIdx"],data:function(){return{pixels:this.$store.state.drawings[this.drawingIdx].pixels,isDrawing:!1,isFilling:!1}},methods:{trackStart:function(t){var e=t.target.dataset.pixelIdx;void 0!==e&&(this.isDrawing=!0,this.isFilling=!this.pixels[e],this.$store.commit("startAction",{drawingIdx:this.drawingIdx}),this.toggleFill(e))},toggleFill:function(t){this.pixels[t]!=this.isFilling&&this.$store.commit("updateDrawing",{drawingIdx:this.drawingIdx,pixelIdx:t,value:this.isFilling})},trackMove:function(t){if(this.isDrawing){var e=this.getTarget(t);this.toggleFill(e.dataset.pixelIdx)}},getTarget:function(t){if("touchmove"===t.type){var e=t.changedTouches[0];return document.elementFromPoint(e.clientX,e.clientY)}return t.target},trackEnd:function(){this.isDrawing=!1}},created:function(){window.addEventListener("mouseup",this.trackEnd),window.addEventListener("touchcancel",this.trackEnd),window.addEventListener("touchend",this.trackEnd)},destroyed:function(){window.removeEventListener("mouseup",this.trackEnd),window.removeEventListener("touchcancel",this.trackEnd),window.removeEventListener("touchend",this.trackEnd)}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"editor",on:{mousedown:function(e){return e.preventDefault(),t.trackStart(e)},touchstart:function(e){return e.preventDefault(),t.trackStart(e)},mouseover:function(e){return e.preventDefault(),t.trackMove(e)},touchmove:function(e){return e.preventDefault(),t.trackMove(e)}}},t._l(1024,function(e){return i("div",{staticClass:"pixel",class:{filled:t.pixels[e-1]},attrs:{"data-pixel-idx":e-1}})}))},staticRenderFns:[]};var u=i("VU/8")(d,c,!1,function(t){i("h1Pr")},"data-v-02f14b96",null).exports,l={name:"Preview",props:["drawingIdx","propResolution","propScale"],data:function(){return{canvas:null,resolution:this.propResolution||32,scale:this.propScale||20,pixels:this.$store.state.drawings[this.drawingIdx].pixels}},computed:{canvasSize:function(){return this.resolution*this.scale},imgSrc:function(){return this.drawPixelsToCanvas(),this.updateImgSrc(),this.$store.state.drawings[this.drawingIdx].imgSrc}},methods:{initCanvas:function(){var t=document.createElement("canvas");t.height=this.canvasSize,t.width=this.canvasSize;var e=t.getContext("2d");e.fillStyle="white",e.fillRect(0,0,this.canvasSize,this.canvasSize),e.fillStyle="black",this.canvas=t},drawPixelsToCanvas:function(){var t=this.canvas.getContext("2d");for(var e in this.pixels){t.fillStyle=this.pixels[e]?"black":"white";var i=e%this.resolution,n=Math.floor(e/this.resolution);t.fillRect(i*this.scale,n*this.scale,this.scale,this.scale)}},updateImgSrc:function(){this.$store.commit("updateImgSrc",{drawingIdx:this.drawingIdx,imgSrc:this.canvas.toDataURL("image/png")})}},created:function(){this.initCanvas()},destroyed:function(){this.canvas.remove()}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"preview"},[e("img",{attrs:{src:this.imgSrc}})])},staticRenderFns:[]};var g=i("VU/8")(l,h,!1,function(t){i("nE3P")},"data-v-4e454e70",null).exports,w={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"site-header"},[e("router-link",{attrs:{to:"/",id:"home",title:"Home (cmd + /)"}},[e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}}),this._v(" "),e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]),this._v("\n    kare.pkg\n  ")]),this._v(" "),e("div",{staticClass:"slotted"},[this._t("default")],2)],1)},staticRenderFns:[]};var v=i("VU/8")({name:"SiteHeader"},w,!1,function(t){i("7NtY")},"data-v-187435f6",null).exports,f={name:"DrawingBoard",components:{Editor:u,Preview:g,SiteHeader:v},props:["drawingIdx"],computed:{isNotUndoable:function(){return this.$store.state.drawings[this.drawingIdx].history.currIdx<0},isNotRedoable:function(){var t=this.$store.state.drawings[this.drawingIdx].history;return t.currIdx>=t.actions.length-1},isNotClearable:function(){var t=this.$store.state.drawings[this.drawingIdx].pixels;for(var e in t)if(t[e])return!1;return!0},imgSrc:function(){return this.$store.state.drawings[this.drawingIdx].imgSrc}},methods:{clearDrawing:function(t){t.target.blur(),this.isNotClearable||this.$store.commit("clearDrawing",{drawingIdx:this.drawingIdx})},undoDrawing:function(t){t.target.blur(),this.$store.commit("undoDrawing",{drawingIdx:this.drawingIdx})},redoDrawing:function(t){t.target.blur(),this.$store.commit("redoDrawing",{drawingIdx:this.drawingIdx})},saveDrawing:function(t){t.target.blur()},deleteDrawing:function(t){t.target.blur(),window.confirm("Are you sure? This can't be undone!")&&(this.$store.commit("deleteDrawing",{drawingIdx:this.drawingIdx}),this.$router.push("/"))},keyboardShortcut:function(){var t=this;return function(e){if(e.ctrlKey||e.metaKey)if(e.shiftKey)90===e.keyCode&&(e.preventDefault(),t.redoDrawing(e));else switch(e.keyCode){case 82:break;case 191:e.preventDefault(),t.$router.push("/");break;case 90:e.preventDefault(),t.undoDrawing(e);break;case 88:e.preventDefault(),t.clearDrawing(e);break;case 83:e.preventDefault(),t.saveDrawing(e);break;case 8:e.preventDefault(),t.deleteDrawing(e)}}}},created:function(){window.addEventListener("keydown",this.keyboardShortcut())},destroyed:function(){window.removeEventListener("keydown",this.keyboardShortcut())}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"drawingBoard"},[i("site-header",[i("div",[i("a",{attrs:{disabled:t.isNotUndoable,title:"Undo stroke (cmd + z)"},on:{click:t.undoDrawing}},[t._v("\n        undo\n      ")]),t._v(" "),i("a",{attrs:{disabled:t.isNotRedoable,title:"Redo stroke (cmd + shift + z)"},on:{click:t.redoDrawing}},[t._v("\n        redo\n      ")]),t._v(" "),i("a",{attrs:{title:"Clear pixels (cmd + x)"},on:{click:t.clearDrawing}},[t._v("\n        clear\n      ")]),t._v(" "),i("a",{attrs:{title:"Download png (cmd + s)",href:t.imgSrc,download:"kare-pkg-"+Date.now()+".png"},on:{click:t.saveDrawing}},[t._v("\n        save\n      ")]),t._v(" "),i("a",{attrs:{title:"Delete drawing (cmd + delete)"},on:{click:t.deleteDrawing}},[t._v("\n        delete\n      ")])])]),t._v(" "),i("main",[i("preview",{attrs:{drawingIdx:t.drawingIdx}}),t._v(" "),i("editor",{attrs:{drawingIdx:t.drawingIdx}})],1)],1)},staticRenderFns:[]};var m=i("VU/8")(f,p,!1,function(t){i("kVJ7")},"data-v-58a9866c",null).exports,x={name:"Home",components:{DrawingBoard:m,Preview:g,SiteHeader:v},data:function(){return{drawings:this.$store.state.drawings}},methods:{getRoute:function(t){return"/edit/"+t},newDrawing:function(t){t.target.blur(),this.$store.commit("newDrawing"),this.$router.push("/edit/0")}}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("site-header",[i("div")]),t._v(" "),i("div",{staticClass:"gallery"},[i("button",{staticClass:"thumbnail",attrs:{id:"newDrawing"},on:{click:function(e){return e.preventDefault(),t.newDrawing(e)}}},[t._v("\n      +\n    ")]),t._v(" "),t._l(t.drawings,function(e,n){return i("router-link",{key:Math.random(),staticClass:"thumbnail",attrs:{to:t.getRoute(n)}},[i("div",{staticClass:"control-shade"}),t._v(" "),i("preview",{key:Math.random(),attrs:{drawingIdx:n}})],1)})],2)],1)},staticRenderFns:[]};var D=i("VU/8")(x,I,!1,function(t){i("k6Xx")},"data-v-5bdcbe6a",null).exports;n.a.use(o.a);var k=new o.a({routes:[{path:"/",name:"Home",component:D},{path:"/edit/:drawingIdx",name:"Edit",component:m,props:!0},{path:"*",component:D}]});n.a.use(r.a);var S=new r.a.Store({state:{drawings:[{pixels:{205:!0,206:!0,207:!0,208:!0,209:!0,210:!0,237:!0,238:!0,239:!0,240:!0,241:!0,242:!0,269:!0,270:!0,271:!0,272:!0,273:!0,274:!0,301:!0,302:!0,303:!0,304:!0,305:!0,306:!0,589:!0,590:!0,591:!0,592:!0,593:!0,594:!0,621:!0,622:!0,623:!0,624:!0,625:!0,626:!0,653:!0,654:!0,655:!0,656:!0,657:!0,658:!0,685:!0,686:!0,687:!0,688:!0,689:!0,690:!0,332:!0,363:!0,395:!0,427:!0,459:!0,491:!0,523:!0,556:!0,339:!0,372:!0,404:!0,436:!0,468:!0,500:!0,532:!0,563:!0,437:!0,469:!0,462:!0,463:!0,464:!0,368:!0,400:!0,432:!0},imgSrc:"",history:{currIdx:-1,actions:[]}}]},mutations:{newDrawing:function(t){t.drawings.unshift({pixels:{},imgSrc:"",history:{currIdx:-1,actions:[]}})},startAction:function(t,e){_(t,e.drawingIdx)},updateDrawing:function(t,e){b(t,e.drawingIdx,e.pixelIdx,e.value)},undoDrawing:function(t,e){var i=e.drawingIdx,n=t.drawings[i].history;n.currIdx<0||(y(t,i),n.currIdx--)},redoDrawing:function(t,e){var i=e.drawingIdx,n=t.drawings[i].history;n.currIdx>=n.actions.length-1||(n.currIdx++,y(t,i))},clearDrawing:function(t,e){var i=e.drawingIdx;_(t,i);var n=t.drawings[i].pixels;for(var r in n)n[r]&&b(t,i,r,!1)},deleteDrawing:function(t,e){var i=e.drawingIdx;this.state.drawings.splice(i,1)},updateImgSrc:function(t,e){var i=e.drawingIdx,n=e.imgSrc;t.drawings[i].imgSrc=n},readLocalStorage:function(t){},updateLocalStorage:function(t){}}});function _(t,e){var i=t.drawings[e].history,n=i.actions.length-(i.currIdx+1);i.actions.splice(i.currIdx,n),i.actions.push([]),i.currIdx++}function b(t,e,i,r){var a=t.drawings[e];n.a.set(a.pixels,i,r),a.history.actions[a.history.currIdx].push(i)}function y(t,e){var i=t.drawings[e],r=i.history.actions[i.history.currIdx],a=i.pixels[r[0]];r.forEach(function(t){n.a.set(i.pixels,t,!a)})}i("uMhA");n.a.config.productionTip=!1,n.a.use(r.a),k.beforeEach(function(t,e,i){if("Edit"===t.name){var n=t.params.drawingIdx;if(!S.state.drawings[n])return void i(e.path)}i()}),new n.a({el:"#app",components:{App:s},template:"<App/>",router:k,store:S})},h1Pr:function(t,e){},k6Xx:function(t,e){},kVJ7:function(t,e){},nE3P:function(t,e){},uMhA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4eaa583bf3651474dbc3.js.map