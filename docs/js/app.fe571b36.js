(function(t){function e(e){for(var n,a,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var t,e=0;e<o.length;e++){for(var r=o[e],n=!0,s=1;s<r.length;s++){var c=r[s];0!==i[c]&&(n=!1)}n&&(o.splice(e--,1),t=a(a.s=r[0]))}return t}var n={},i={app:0},o=[];function a(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=t,a.c=n,a.d=function(t,e,r){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(r,n,function(e){return t[e]}.bind(null,n));return r},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/kare-pkg/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=c;o.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("cd49")},"411d":function(t,e,r){},5840:function(t,e,r){"use strict";var n=r("411d"),i=r.n(n);i.a},"5c0b":function(t,e,r){"use strict";var n=r("9c0c"),i=r.n(n);i.a},"66f7":function(t,e,r){"use strict";var n=r("b336"),i=r.n(n);i.a},"7e5f":function(t,e,r){"use strict";var n=r("ccfc"),i=r.n(n);i.a},8230:function(t,e,r){"use strict";var n=r("bd9d"),i=r.n(n);i.a},"9c0c":function(t,e,r){},a7cc:function(t,e,r){},b336:function(t,e,r){},ba96:function(t,e,r){"use strict";var n=r("a7cc"),i=r.n(n);i.a},bd9d:function(t,e,r){},c2c9:function(t,e,r){"use strict";var n=r("f14d"),i=r.n(n);i.a},ccfc:function(t,e,r){},cd49:function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:"fade",mode:"out-in"}},[r("router-view")],1)},o=[],a=(r("5c0b"),r("2877")),s={},c=Object(a["a"])(s,i,o,!1,null,null,null),u=c.exports,d=r("8c4f"),l=r("2f62"),p=r("9ab4"),f=32,h=20,v=function(){function t(){}return t}(),w=function(){function t(t,e,r){void 0===t&&(t={}),void 0===e&&(e=[]),void 0===r&&(r=-1),this.pixelMap=t,this.strokes=e,this.currStroke=r,this.preview="";var n=f*h;for(var i in this.canvas=document.createElement("canvas"),this.canvas.height=n,this.canvas.width=n,this.context=this.canvas.getContext("2d"),this.context.fillStyle="white",this.context.fillRect(0,0,n,n),t)t[i]&&this.updateCanvas(i);this.generatePreview()}return Object.defineProperty(t.prototype,"canUndo",{get:function(){return this.currStroke>=0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"canRedo",{get:function(){return this.currStroke<this.strokes.length-1},enumerable:!0,configurable:!0}),t.prototype.flip=function(t,e){this.updatePixelMap(t),this.updateHistory(t,e),this.updateCanvas(t),this.generatePreview()},t.prototype.clear=function(){var t=new v;for(var e in this.pixelMap)this.pixelMap[e]&&(this.updatePixelMap(e),this.updateHistory(e,t),this.updateCanvas(e));this.generatePreview()},t.prototype.undo=function(){var t,e;if(this.canUndo){try{for(var r=Object(p["c"])(this.strokes[this.currStroke]),n=r.next();!n.done;n=r.next()){var i=n.value;this.updatePixelMap(i),this.updateCanvas(i)}}catch(o){t={error:o}}finally{try{n&&!n.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}this.currStroke--,this.generatePreview()}},t.prototype.redo=function(){var t,e;if(this.canRedo){this.currStroke++;try{for(var r=Object(p["c"])(this.strokes[this.currStroke]),n=r.next();!n.done;n=r.next()){var i=n.value;this.updatePixelMap(i),this.updateCanvas(i)}}catch(o){t={error:o}}finally{try{n&&!n.done&&(e=r.return)&&e.call(r)}finally{if(t)throw t.error}}this.generatePreview()}},t.prototype.updatePixelMap=function(t){this.pixelMap[t]=!this.pixelMap[t]},t.prototype.updateHistory=function(t,e){e===this.strokeStart?this.strokes[this.currStroke].push(t):(this.currStroke++,this.strokeStart=e,this.strokes[this.currStroke]=[t]),this.currStroke<this.strokes.length-1&&(this.strokes=this.strokes.slice(0,this.currStroke+1))},t.prototype.updateCanvas=function(t){var e=parseInt(t),r=e%f,n=Math.floor(e/f);this.context.fillStyle=this.pixelMap[t]?"black":"white",this.context.fillRect(r*h,n*h,h,h)},t.prototype.generatePreview=function(){this.preview=this.canvas.toDataURL("image/png")},t}(),g={205:!0,206:!0,207:!0,208:!0,209:!0,210:!0,237:!0,238:!0,239:!0,240:!0,241:!0,242:!0,269:!0,270:!0,271:!0,272:!0,273:!0,274:!0,301:!0,302:!0,303:!0,304:!0,305:!0,306:!0,589:!0,590:!0,591:!0,592:!0,593:!0,594:!0,621:!0,622:!0,623:!0,624:!0,625:!0,626:!0,653:!0,654:!0,655:!0,656:!0,657:!0,658:!0,685:!0,686:!0,687:!0,688:!0,689:!0,690:!0,332:!0,363:!0,395:!0,427:!0,459:!0,491:!0,523:!0,556:!0,339:!0,372:!0,404:!0,436:!0,468:!0,500:!0,532:!0,563:!0,437:!0,469:!0,462:!0,463:!0,464:!0,368:!0,400:!0,432:!0};function m(t){localStorage.setItem("kare-pkg",JSON.stringify(t))}n["a"].use(l["a"]);var b=new l["a"].Store({state:{drawings:[new w(g)]},getters:{exportUrl:function(t){return function(){return"data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t.drawings))}}},mutations:{flip:function(t,e){var r=e.drawingIdx,n=e.pixelIdx,i=e.event;t.drawings[r].flip(n,i),m(t)},undo:function(t,e){var r=e.drawingIdx;t.drawings[r].undo(),m(t)},redo:function(t,e){var r=e.drawingIdx;t.drawings[r].redo(),m(t)},clear:function(t,e){var r=e.drawingIdx;t.drawings[r].clear(),m(t)},copy:function(t,e){var r=e.drawingIdx,n=t.drawings[r],i=new w(Object.assign({},n.pixelMap),n.strokes.slice(0,n.strokes.length),n.currStroke);t.drawings.unshift(i),m(t)},new:function(t){t.drawings.unshift(new w),m(t)},remove:function(t,e){var r=e.drawingIdx;t.drawings.splice(r,1),m(t)},load:function(t){if(localStorage["kare-pkg"]){var e=JSON.parse(localStorage["kare-pkg"]).drawings;t.drawings=e.map((function(t){return new w(t.pixelMap,t.strokes,t.currStroke)}))}},import:function(t,e){for(var r=e.drawings,n=r.length-1;n>=0;n--)try{var i=new w(r[n].pixelMap,r[n].strokes,r[n].currStroke);t.drawings.unshift(i)}catch(o){}m(t)},removeAll:function(t){t.drawings.splice(0,t.drawings.length),m(t)}}}),y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("home-header"),r("main",[r("button",{staticClass:"thumbnail thumbnail--new",on:{click:function(e){return e.preventDefault(),t.newDrawing(e)}}},[t._v("+")]),t._l(t.drawings,(function(e,n){return r("router-link",{key:n,staticClass:"thumbnail",attrs:{to:t.getRoute(n)}},[r("preview",{attrs:{drawingIdx:n}})],1)}))],2)],1)},x=[],k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("site-header",[r("a",{attrs:{href:t.exportFile,disabled:!t.isExportable,download:"kare-pkg-export-"+Date.now()+".json"}},[t._v("export")]),r("form",[r("label",{attrs:{for:"file"}},[r("a",[t._v("import")])]),r("input",{attrs:{accept:".json",hidden:"",id:"file",multiple:"false",type:"file"},on:{change:t.importFile}})]),r("a",{on:{click:t.removeAll}},[t._v("delete-all")])])},O=[],S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("router-link",{attrs:{to:"/",id:"home",title:"home"}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}}),r("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})]),t._v(" kare.pkg ")]),r("div",{staticClass:"slotted"},[t._t("default")],2)],1)},j=[],I=r("60a3"),_=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(p["b"])(e,t),e=Object(p["a"])([Object(I["a"])({name:"SiteHeader"})],e),e}(I["c"]),P=_,E=P,$=(r("c2c9"),Object(a["a"])(E,S,j,!1,null,"12f680ed",null)),M=$.exports,C=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(p["b"])(e,t),Object.defineProperty(e.prototype,"isExportable",{get:function(){return this.$store.state.drawings.length>0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"exportFile",{get:function(){return this.$store.getters.exportUrl()},enumerable:!0,configurable:!0}),e.prototype.importFile=function(t){var e=this,r=t.target;if(r&&r.files&&0!==r.files.length){var n=new FileReader;n.onload=function(t){var r=t.target.result;r&&e.$store.commit("import",{drawings:JSON.parse(r.toString())})},n.readAsText(r.files[0]),r.parentElement.reset()}},e.prototype.removeAll=function(){window.confirm("This cannot be undone. Are you sure?")&&this.$store.commit("removeAll")},e=Object(p["a"])([Object(I["a"])({name:"HomeHeader",components:{SiteHeader:M}})],e),e}(I["c"]),H=C,R=H,D=(r("5840"),Object(a["a"])(R,k,O,!1,null,"de5c5974",null)),L=D.exports,U=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("img",{staticClass:"preview",attrs:{src:t.preview}})},T=[],A=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(p["b"])(e,t),Object.defineProperty(e.prototype,"preview",{get:function(){return this.$store.state.drawings[this.drawingIdx].preview},enumerable:!0,configurable:!0}),Object(p["a"])([Object(I["b"])()],e.prototype,"drawingIdx",void 0),e=Object(p["a"])([Object(I["a"])({name:"Preview"})],e),e}(I["c"]),F=A,J=F,z=(r("66f7"),Object(a["a"])(J,U,T,!1,null,"8a0935ce",null)),N=z.exports,K=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.drawings=e.$store.state.drawings,e}return Object(p["b"])(e,t),e.prototype.getRoute=function(t){return"/edit/"+t},e.prototype.newDrawing=function(){this.$store.commit("new"),this.$router.push("/edit/0")},e=Object(p["a"])([Object(I["a"])({name:"Home",components:{HomeHeader:L,Preview:N}})],e),e}(I["c"]),B=K,X=B,Y=(r("ba96"),Object(a["a"])(X,y,x,!1,null,"785ec043",null)),q=Y.exports,G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("EditorHeader",{attrs:{drawingIdx:t.drawingIdx}}),r("main",[r("preview",{staticClass:"edit__preview",attrs:{drawingIdx:t.drawingIdx}}),r("editor",{staticClass:"edit__editor",attrs:{drawingIdx:t.drawingIdx}})],1)],1)},Q=[],V=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("site-header",[r("a",{attrs:{disabled:!t.isUndoable,title:"Undo stroke (cmd + z)"},on:{click:t.undo}},[t._v("undo")]),r("a",{attrs:{disabled:!t.isRedoable,title:"Redo stroke (cmd + shift + z)"},on:{click:t.redo}},[t._v("redo")]),r("a",{on:{click:t.clear}},[t._v("clear")]),r("a",{on:{click:t.copy}},[t._v("copy")]),r("a",{attrs:{href:t.preview,download:"kare-pkg-"+Date.now()+".png"}},[t._v("save")]),r("a",{on:{click:t.remove}},[t._v("delete")])])},W=[],Z=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.drawing=e.$store.state.drawings[e.drawingIdx],e}return Object(p["b"])(e,t),Object.defineProperty(e.prototype,"isUndoable",{get:function(){return this.drawing.canUndo},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isRedoable",{get:function(){return this.drawing.canRedo},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"preview",{get:function(){return this.drawing.preview},enumerable:!0,configurable:!0}),e.prototype.created=function(){var t=this;window.addEventListener("keydown",(function(e){return t.keyboardShortcut(e)}))},e.prototype.destroyed=function(){var t=this;window.removeEventListener("keydown",(function(e){return t.keyboardShortcut(e)}))},e.prototype.undo=function(){this.$store.commit("undo",{drawingIdx:this.drawingIdx})},e.prototype.redo=function(){this.$store.commit("redo",{drawingIdx:this.drawingIdx})},e.prototype.clear=function(){this.$store.commit("clear",{drawingIdx:this.drawingIdx})},e.prototype.copy=function(){var t=this;this.$store.commit("copy",{drawingIdx:this.drawingIdx}),this.$router.push("/"),setTimeout((function(){return t.$router.push("/edit/0")}))},e.prototype.remove=function(){window.confirm("This cannot be undone. Are you sure?")&&(this.$store.commit("remove",{drawingIdx:this.drawingIdx}),this.$router.push("/"))},e.prototype.keyboardShortcut=function(t){(t.ctrlKey||t.metaKey)&&90===t.keyCode&&(t.preventDefault(),t.shiftKey?this.redo():this.undo())},Object(p["a"])([Object(I["b"])()],e.prototype,"drawingIdx",void 0),e=Object(p["a"])([Object(I["a"])({name:"EditorHeader",components:{SiteHeader:M}})],e),e}(I["c"]),tt=Z,et=tt,rt=Object(a["a"])(et,V,W,!1,null,null,null),nt=rt.exports,it=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"editor-wrapper",on:{mousedown:function(e){return e.preventDefault(),t.startStroke(e)},touchstart:function(e){return e.preventDefault(),t.startStroke(e)},mouseover:function(e){return e.preventDefault(),t.continueStroke(e)},touchmove:function(e){return e.preventDefault(),t.continueStroke(e)}}},[r("div",{staticClass:"edit-layer"},t._l(1024,(function(t){return r("div",{key:t,staticClass:"pixel",attrs:{"data-pixel-idx":t-1}})})),0),r("preview",{staticClass:"preview-layer",attrs:{drawingIdx:t.drawingIdx}})],1)},ot=[],at=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.pixelMap=e.$store.state.drawings[e.drawingIdx].pixelMap,e.isStroking=!1,e.fill=!1,e}return Object(p["b"])(e,t),e.prototype.created=function(){window.addEventListener("mouseup",this.endStroke),window.addEventListener("touchcancel",this.endStroke),window.addEventListener("touchend",this.endStroke)},e.prototype.destroyed=function(){window.removeEventListener("mouseup",this.endStroke),window.removeEventListener("touchcancel",this.endStroke),window.removeEventListener("touchend",this.endStroke)},e.prototype.startStroke=function(t){var e=this.getPixelIdx(t);e&&(this.isStroking=!0,this.stroke=t,this.fill=!this.pixelMap[e],this.flip(e))},e.prototype.continueStroke=function(t){if(this.isStroking){var e=this.getPixelIdx(t);e&&this.fill!==!!this.pixelMap[e]&&this.flip(e)}},e.prototype.endStroke=function(){this.isStroking=!1},e.prototype.getPixelIdx=function(t){var e=t.target;if("touchmove"===t.type){var r=t.changedTouches[0];e=document.elementFromPoint(r.clientX,r.clientY)}return e.dataset.pixelIdx},e.prototype.flip=function(t){this.$store.commit("flip",{drawingIdx:this.drawingIdx,pixelIdx:t,event:this.stroke})},Object(p["a"])([Object(I["b"])()],e.prototype,"drawingIdx",void 0),e=Object(p["a"])([Object(I["a"])({name:"Editor",components:{Preview:N}})],e),e}(I["c"]),st=at,ct=st,ut=(r("8230"),Object(a["a"])(ct,it,ot,!1,null,"380ccfee",null)),dt=ut.exports,lt={name:"Edit",props:["drawingIdx"],components:{EditorHeader:nt,Preview:N,Editor:dt}},pt=lt,ft=(r("7e5f"),Object(a["a"])(pt,G,Q,!1,null,"343ed0a5",null)),ht=ft.exports;n["a"].use(d["a"]);var vt=[{path:"/",name:"Home",component:q},{path:"/edit/:drawingIdx",name:"Edit",component:ht,props:!0},{path:"*",component:q}],wt=new d["a"]({base:"/kare-pkg/",routes:vt});wt.beforeEach((function(t,e,r){if("Edit"!==t.name)return r();var n=parseInt(t.params.drawingIdx);return b.state.drawings[n]?r():r(e.path)}));var gt=wt;r("f5df");n["a"].config.productionTip=!1,b.commit("load"),new n["a"]({router:gt,store:b,render:function(t){return t(u)}}).$mount("#app")},f14d:function(t,e,r){}});
//# sourceMappingURL=app.fe571b36.js.map