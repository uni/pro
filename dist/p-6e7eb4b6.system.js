System.register(["./p-edf4707e.system.js","./p-3e4da347.system.js","./p-3034003f.system.js"],(function(t){"use strict";var e,n,i,r,o;return{setters:[function(t){e=t.r;n=t.h;i=t.g},function(t){r=t.u},function(t){o=t.U}],execute:function(){var s=t("U",function(){function t(t){e(this,t);this.inactive=false;this.activate=false}t.prototype.render=function(){return o(n("slot",null))};t.prototype.componentDidRender=function(){var t=this;if(!this.inactive||this.activate){document.head.querySelector("title").innerText=this.value||this.el.textContent;setTimeout((function(){return t.activate=false}))}};t.prototype.componentDidLoad=function(){r("pro")};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});return t}())}}}));