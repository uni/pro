System.register(["./p-393084f3.system.js","./p-a821f331.system.js"],(function(t){"use strict";var e,i;return{setters:[function(t){e=t.r},function(t){i=t.u}],execute:function(){var o=t("U",function(){function t(t){e(this,t);this.activate=false;this.inactive=false;this.behavior="auto"}t.prototype.componentDidRender=function(){var t=this;var e=this.behavior;if(!this.inactive||this.activate){setTimeout((function(){var i=document.querySelector(t.selector);if(t.offsetY){var o=(i===null||i===void 0?void 0:i.getBoundingClientRect().top)+window.scrollY+t.offsetY;window.scrollTo({top:o,behavior:e})}else{i.scrollIntoView({behavior:e})}}),100);setTimeout((function(){return t.activate=false}))}};t.prototype.componentDidLoad=function(){i("uni-selection","apply")};return t}())}}}));