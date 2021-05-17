var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(Object.prototype.hasOwnProperty.call(r,t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function l(e){try{s(n.next(e))}catch(r){i(r)}}function o(e){try{s(n["throw"](e))}catch(r){i(r)}}function s(e){e.done?t(e.value):a(e.value).then(l,o)}s((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,l;return l={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function o(e){return function(r){return s([e,r])}}function s(l){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=l[0]&2?a["return"]:l[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,l[1])).done)return i;if(a=0,i)l=[l[0]&2,i.value];switch(l[0]){case 0:case 1:i=l;break;case 4:t.label++;return{value:l[1],done:false};case 5:t.label++;a=l[1];l=[0];continue;case 7:l=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){t.label=l[1];break}if(l[0]===6&&t.label<i[1]){t.label=i[1];i=l;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(l);break}if(i[2])t.ops.pop();t.trys.pop();continue}l=r.call(e,t)}catch(o){l=[6,o];a=0}finally{n=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],l=0,o=i.length;l<o;l++,a++)n[a]=i[l];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n=e("N","pro");var a;var i;var l=false;var o=false;var s=false;var f=false;var $=false;var u=e("w",typeof window!=="undefined"?window:{});var c=e("C",u.CSS);var v=e("d",u.document||{head:{}});var d=e("H",u.HTMLElement||function(){function e(){}return e}());var h=e("p",{$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)},ce:function(e,r){return new CustomEvent(e,r)}});var p=e("a",(function(e){return Promise.resolve(e)}));var m=function(){try{new CSSStyleSheet;return typeof(new CSSStyleSheet).replace==="function"}catch(e){}return false}();var g="{visibility:hidden}.hydrated{visibility:inherit}";var y="http://www.w3.org/1999/xlink";var b=function(e,r){if(r===void 0){r=""}{return function(){return}}};var N=function(e,r){{return function(){return}}};var _=new WeakMap;var w=function(e,r,t){var n=Be.get(e);if(m&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}Be.set(e,n)};var S=function(e,r,t,n){var a=k(r);var i=Be.get(a);e=e.nodeType===11?e:v;if(i){if(typeof i==="string"){e=e.head||e;var l=_.get(e);var o=void 0;if(!l){_.set(e,l=new Set)}if(!l.has(a)){{if(h.$cssShim$){o=h.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var s=o["s-sc"];if(s){a=s;l=null}}else{o=v.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(l){l.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var R=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=b("attachStyles",r.$tagName$);var a=S(t.getRootNode(),r,e.$modeName$,t);n()};var k=function(e,r){return"sc-"+e.$tagName$};var x={};var C=function(e){e=typeof e;return e==="object"||e==="function"};var T=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var l=null;var o=false;var s=false;var f=[];var $=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){$(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!C(a)){a=String(a)}if(o&&s){f[f.length-1].$text$+=a}else{f.push(o?E(null,a):a)}s=o}}};$(t);if(r){if(r.key){i=r.key}if(r.name){l=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(r===null?{}:r,f,M)}var c=E(e,null);c.$attrs$=r;if(f.length>0){c.$children$=f}{c.$key$=i}{c.$name$=l}return c}));var E=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$key$=null}{t.$name$=null}return t};var j=e("c",{});var A=function(e){return e&&e.$tag$===j};var M={forEach:function(e,r){return e.map(P).forEach(r)},map:function(e,r){return e.map(P).map(r).map(O)}};var P=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var O=function(e){if(typeof e.vtag==="function"){var r=Object.assign({},e.vattrs);if(e.vkey){r.key=e.vkey}if(e.vname){r.name=e.vname}return T.apply(void 0,__spreadArrays([e.vtag,r],e.vchildren||[]))}var t=E(e.vtag,e.vtext);t.$attrs$=e.vattrs;t.$children$=e.vchildren;t.$key$=e.vkey;t.$name$=e.vname;return t};var B=function(e,r,t,n,a,i){if(t!==n){var l=Ae(e,r);var o=r.toLowerCase();if(r==="class"){var s=e.classList;var f=H(t);var $=H(n);s.remove.apply(s,f.filter((function(e){return e&&!$.includes(e)})));s.add.apply(s,$.filter((function(e){return e&&!f.includes(e)})))}else if(r==="style"){{for(var c in t){if(!n||n[c]==null){if(c.includes("-")){e.style.removeProperty(c)}else{e.style[c]=""}}}}for(var c in n){if(!t||n[c]!==t[c]){if(c.includes("-")){e.style.setProperty(c,n[c])}else{e.style[c]=n[c]}}}}else if(r==="key");else if(r==="ref"){if(n){n(e)}}else if(!l&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(Ae(u,o)){r=o.slice(2)}else{r=o[2]+r.slice(3)}if(t){h.rel(e,r,t,false)}if(n){h.ael(e,r,n,false)}}else{var v=C(n);if((l||v&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var d=n==null?"":n;if(r==="list"){l=false}else if(t==null||e[r]!=d){e[r]=d}}else{e[r]=n}}catch(m){}}var p=false;{if(o!==(o=o.replace(/^xlink\:?/,""))){r=o;p=true}}if(n==null||n===false){if(n!==false||e.getAttribute(r)===""){if(p){e.removeAttributeNS(y,r)}else{e.removeAttribute(r)}}}else if((!l||i&4||a)&&!v){n=n===true?"":n;if(p){e.setAttributeNS(y,r,n)}else{e.setAttribute(r,n)}}}}};var L=/\s/;var H=function(e){return!e?[]:e.split(L)};var I=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||x;var l=r.$attrs$||x;{for(n in i){if(!(n in l)){B(a,n,i[n],undefined,t,r.$flags$)}}}for(n in l){B(a,n,i[n],l[n],t,r.$flags$)}};var U=function(e,r,t,n){var o=r.$children$[t];var $=0;var u;var c;var d;if(!l){s=true;if(o.$tag$==="slot"){o.$flags$|=o.$children$?2:1}}if(o.$text$!==null){u=o.$elm$=v.createTextNode(o.$text$)}else if(o.$flags$&1){u=o.$elm$=v.createTextNode("")}else{u=o.$elm$=v.createElement(o.$flags$&2?"slot-fb":o.$tag$);{I(null,o,f)}if(o.$children$){for($=0;$<o.$children$.length;++$){c=U(e,o,$);if(c){u.appendChild(c)}}}}{u["s-hn"]=i;if(o.$flags$&(2|1)){u["s-sr"]=true;u["s-cr"]=a;u["s-sn"]=o.$name$||"";d=e&&e.$children$&&e.$children$[t];if(d&&d.$tag$===o.$tag$&&e.$elm$){z(e.$elm$,false)}}}return u};var z=function(e,r){h.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==i&&a["s-ol"]){W(a).insertBefore(a,G(a));a["s-ol"].remove();a["s-ol"]=undefined;s=true}if(r){z(a,r)}}h.$flags$&=~1};var V=function(e,r,t,n,a,i){var l=e["s-cr"]&&e["s-cr"].parentNode||e;var o;for(;a<=i;++a){if(n[a]){o=U(null,t,a);if(o){n[a].$elm$=o;l.insertBefore(o,G(r))}}}};var q=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;Z(n);{o=true;if(a["s-ol"]){a["s-ol"].remove()}else{z(a,true)}}a.remove()}}};var D=function(e,r,t,n){var a=0;var i=0;var l=0;var o=0;var s=r.length-1;var f=r[0];var $=r[s];var u=n.length-1;var c=n[0];var v=n[u];var d;var h;while(a<=s&&i<=u){if(f==null){f=r[++a]}else if($==null){$=r[--s]}else if(c==null){c=n[++i]}else if(v==null){v=n[--u]}else if(F(f,c)){J(f,c);f=r[++a];c=n[++i]}else if(F($,v)){J($,v);$=r[--s];v=n[--u]}else if(F(f,v)){if(f.$tag$==="slot"||v.$tag$==="slot"){z(f.$elm$.parentNode,false)}J(f,v);e.insertBefore(f.$elm$,$.$elm$.nextSibling);f=r[++a];v=n[--u]}else if(F($,c)){if(f.$tag$==="slot"||v.$tag$==="slot"){z($.$elm$.parentNode,false)}J($,c);e.insertBefore($.$elm$,f.$elm$);$=r[--s];c=n[++i]}else{l=-1;{for(o=a;o<=s;++o){if(r[o]&&r[o].$key$!==null&&r[o].$key$===c.$key$){l=o;break}}}if(l>=0){h=r[l];if(h.$tag$!==c.$tag$){d=U(r&&r[i],t,l)}else{J(h,c);r[l]=undefined;d=h.$elm$}c=n[++i]}else{d=U(r&&r[i],t,i);c=n[++i]}if(d){{W(f.$elm$).insertBefore(d,G(f.$elm$))}}}}if(a>s){V(e,n[u+1]==null?null:n[u+1].$elm$,t,n,i,u)}else if(i>u){q(r,a,s)}};var F=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}{return e.$key$===r.$key$}}return false};var G=function(e){return e&&e["s-ol"]||e};var W=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var J=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var l=r.$text$;var o;if(l===null){{if(i==="slot");else{I(e,r,f)}}if(n!==null&&a!==null){D(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}V(t,null,r,a,0,a.length-1)}else if(n!==null){q(n,0,n.length-1)}}else if(o=t["s-cr"]){o.parentNode.textContent=l}else if(e.$text$!==l){t.data=l}};var K=function(e){var r=e.childNodes;var t;var n;var a;var i;var l;var o;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){l=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){o=r[i].nodeType;if(r[i]["s-hn"]!==t["s-hn"]||l!==""){if(o===1&&l===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}K(t)}}};var Q=[];var X=function(e){var r;var t;var n;var a;var i;var l;var s=0;var f=e.childNodes;var $=f.length;for(;s<$;s++){r=f[s];if(r["s-sr"]&&(t=r["s-cr"])&&t.parentNode){n=t.parentNode.childNodes;a=r["s-sn"];for(l=n.length-1;l>=0;l--){t=n[l];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(Y(t,a)){i=Q.find((function(e){return e.$nodeToRelocate$===t}));o=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{Q.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){Q.map((function(e){if(Y(e.$nodeToRelocate$,t["s-sn"])){i=Q.find((function(e){return e.$nodeToRelocate$===t}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!Q.some((function(e){return e.$nodeToRelocate$===t}))){Q.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){X(r)}}};var Y=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var Z=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.map(Z)}};var ee=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var f=e.$vnode$||E(null,null);var $=A(r)?r:T(null,null,r);i=t.tagName;if(n.$attrsToReflect$){$.$attrs$=$.$attrs$||{};n.$attrsToReflect$.map((function(e){var r=e[0],n=e[1];return $.$attrs$[n]=t[r]}))}$.$tag$=null;$.$flags$|=4;e.$vnode$=$;$.$elm$=f.$elm$=t;{a=t["s-cr"];l=(n.$flags$&1)!==0;o=false}J(f,$);{h.$flags$|=1;if(s){X($.$elm$);var u=void 0;var c=void 0;var d=void 0;var p=void 0;var m=void 0;var g=void 0;var y=0;for(;y<Q.length;y++){u=Q[y];c=u.$nodeToRelocate$;if(!c["s-ol"]){d=v.createTextNode("");d["s-nr"]=c;c.parentNode.insertBefore(c["s-ol"]=d,c)}}for(y=0;y<Q.length;y++){u=Q[y];c=u.$nodeToRelocate$;if(u.$slotRefNode$){p=u.$slotRefNode$.parentNode;m=u.$slotRefNode$.nextSibling;d=c["s-ol"];while(d=d.previousSibling){g=d["s-nr"];if(g&&g["s-sn"]===c["s-sn"]&&p===g.parentNode){g=g.nextSibling;if(!g||!g["s-nr"]){m=g;break}}}if(!m&&p!==c.parentNode||c.nextSibling!==m){if(c!==m){if(!c["s-hn"]&&c["s-ol"]){c["s-hn"]=c["s-ol"].parentNode.nodeName}p.insertBefore(c,m)}}}else{if(c.nodeType===1){c.hidden=true}}}}if(o){K($.$elm$)}h.$flags$&=~1;Q.length=0}};var re=e("g",(function(e){return Te(e).$hostElement$}));var te=function(e,r,t){var n=h.ce(r,t);e.dispatchEvent(n);return n};var ne=function(e,r){if(r&&!e.$onRenderResolve$&&r["s-p"]){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var ae=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}ne(e,e.$ancestorComponent$);var t=function(){return ie(e,r)};return qe(t)};var ie=function(e,r){var t=b("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$lazyInstance$;var a;t();return ue(a,(function(){return le(e,n,r)}))};var le=function(e,r,n){return __awaiter(t,void 0,void 0,(function(){var t,a,i,l,o,s;return __generator(this,(function(f){t=e.$hostElement$;a=b("update",e.$cmpMeta$.$tagName$);i=t["s-rc"];if(n){R(e)}l=b("render",e.$cmpMeta$.$tagName$);{oe(e,r)}if(h.$cssShim$){h.$cssShim$.updateHost(t)}if(i){i.map((function(e){return e()}));t["s-rc"]=undefined}l();a();{o=t["s-p"];s=function(){return se(e)};if(o.length===0){s()}else{Promise.all(o).then(s);e.$flags$|=4;o.length=0}}return[2]}))}))};var oe=function(e,r,t){try{r=r.render&&r.render();{e.$flags$&=~16}{e.$flags$|=2}{{{ee(e,r)}}}}catch(n){Me(n,e.$hostElement$)}return null};var se=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=b("postUpdate",r);var a=e.$lazyInstance$;var i=e.$ancestorComponent$;{$e(a,"componentDidRender")}if(!(e.$flags$&64)){e.$flags$|=64;{ce(t)}{$e(a,"componentDidLoad")}n();{e.$onReadyResolve$(t);if(!i){fe()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Ve((function(){return ae(e,false)}))}e.$flags$&=~(4|512)}};var fe=function(e){{ce(v.documentElement)}Ve((function(){return te(u,"appload",{detail:{namespace:n}})}))};var $e=function(e,r,t){if(e&&e[r]){try{return e[r](t)}catch(n){Me(n)}}return undefined};var ue=function(e,r){return e&&e.then?e.then(r):r()};var ce=function(e){return e.classList.add("hydrated")};var ve=function(e,r){if(e!=null&&!C(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&2){return parseFloat(e)}if(r&1){return String(e)}return e}return e};var de=function(e,r){return Te(e).$instanceValues$.get(r)};var he=function(e,r,t,n){var a=Te(e);var i=a.$instanceValues$.get(r);var l=a.$flags$;var o=a.$lazyInstance$;t=ve(t,n.$members$[r][0]);if((!(l&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(o){if((l&(2|16))===2){ae(a,false)}}}};var pe=function(e,r,t){if(r.$members$){var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return de(this,n)},set:function(e){he(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;h.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var t=e[0],n=e[1];var a=n[1]||t;i.set(a,t);if(n[0]&512){r.$attrsToReflect$.push([t,a])}return a}))}}return e};var me=function(e,r,n,a,i){return __awaiter(t,void 0,void 0,(function(){var e,t,a,l,o,s,f;return __generator(this,(function($){switch($.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=Oe(n);if(!i.then)return[3,2];e=N();return[4,i];case 1:i=$.sent();e();$.label=2;case 2:if(!i.isProxied){pe(i,n,2);i.isProxied=true}t=b("createInstance",n.$tagName$);{r.$flags$|=8}try{new i(r)}catch(u){Me(u)}{r.$flags$&=~8}t();if(i.style){a=i.style;l=k(n);if(!Be.has(l)){o=b("registerStyles",n.$tagName$);w(l,a,!!(n.$flags$&1));o()}}$.label=3;case 3:s=r.$ancestorComponent$;f=function(){return ae(r,true)};if(s&&s["s-rc"]){s["s-rc"].push(f)}else{f()}return[2]}}))}))};var ge=function(e){if((h.$flags$&1)===0){var r=Te(e);var t=r.$cmpMeta$;var n=b("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(t.$flags$&(4|8)){ye(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ne(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{Ve((function(){return me(e,r,t)}))}}n()}};var ye=function(e){var r=e["s-cr"]=v.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var be=function(e){if((h.$flags$&1)===0){var r=Te(e);if(h.$cssShim$){h.$cssShim$.removeHost(e)}}};var Ne=function(e){var r=e.cloneNode;e.cloneNode=function(e){var t=this;var n=r.call(t,false);if(e){var a=0;var i=void 0,l=void 0;var o=["s-id","s-cr","s-lr","s-rc","s-sc","s-p","s-cn","s-sr","s-sn","s-hn","s-ol","s-nr","s-si"];for(;a<t.childNodes.length;a++){i=t.childNodes[a]["s-nr"];l=o.every((function(e){return!t.childNodes[a][e]}));if(i){if(n.__appendChild){n.__appendChild(i.cloneNode(true))}else{n.appendChild(i.cloneNode(true))}}if(l){n.appendChild(t.childNodes[a].cloneNode(true))}}}return n}};var _e=function(e){e.__appendChild=e.appendChild;e.appendChild=function(e){var r=e["s-sn"]=Se(e);var t=Re(this.childNodes,r);if(t){var n=ke(t,r);var a=n[n.length-1];return a.parentNode.insertBefore(e,a.nextSibling)}return this.__appendChild(e)}};var we=function(e,r){var t=function(e){__extends(r,e);function r(){return e!==null&&e.apply(this,arguments)||this}r.prototype.item=function(e){return this[e]};return r}(Array);if(r.$flags$&8){var n=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get:function(){return this.childNodes.map((function(e){return e.nodeType===1}))}});Object.defineProperty(e,"childElementCount",{get:function(){return e.children.length}});Object.defineProperty(e,"childNodes",{get:function(){var e=n.call(this);if((h.$flags$&1)===0&&Te(this).$flags$&2){var r=new t;for(var a=0;a<e.length;a++){var i=e[a]["s-nr"];if(i){r.push(i)}}return r}return t.from(e)}})}};var Se=function(e){return e["s-sn"]||e.nodeType===1&&e.getAttribute("slot")||""};var Re=function(e,r){var t=0;var n;for(;t<e.length;t++){n=e[t];if(n["s-sr"]&&n["s-sn"]===r){return n}n=Re(n.childNodes,r);if(n){return n}}return null};var ke=function(e,r){var t=[e];while((e=e.nextSibling)&&e["s-sn"]===r){t.push(e)}return t};var xe=e("b",(function(e,r){if(r===void 0){r={}}var t=b();var n=[];var a=r.exclude||[];var i=u.customElements;var l=v.head;var o=l.querySelector("meta[charset]");var s=v.createElement("style");var f=[];var $;var c=true;Object.assign(h,r);h.$resourcesUrl$=new URL(r.resourcesUrl||"./",v.baseURI).href;e.map((function(e){return e[1].map((function(t){var l={$flags$:t[0],$tagName$:t[1],$members$:t[2],$listeners$:t[3]};{l.$members$=t[2]}{l.$attrsToReflect$=[]}var o=r.transformTagName?r.transformTagName(l.$tagName$):l.$tagName$;var s=function(e){__extends(r,e);function r(r){var t=e.call(this,r)||this;r=t;je(r,l);{we(r,l)}return t}r.prototype.connectedCallback=function(){var e=this;if($){clearTimeout($);$=null}if(c){f.push(this)}else{h.jmp((function(){return ge(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return be(e)}))};r.prototype.componentOnReady=function(){return Te(this).$onReadyPromise$};return r}(HTMLElement);{Ne(s.prototype)}{_e(s.prototype)}l.$lazyBundleId$=e[0];if(!a.includes(o)&&!i.get(o)){n.push(o);i.define(o,pe(s,l,1))}}))}));{s.innerHTML=n+g;s.setAttribute("data-styles","");l.insertBefore(s,o?o.nextSibling:l.firstChild)}c=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{h.jmp((function(){return $=setTimeout(fe,30)}))}}t()}));var Ce=new WeakMap;var Te=function(e){return Ce.get(e)};var Ee=e("r",(function(e,r){return Ce.set(r.$lazyInstance$=e,r)}));var je=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return Ce.set(e,t)};var Ae=function(e,r){return r in e};var Me=function(e,r){return(0,console.error)(e,r)};var Pe=new Map;var Oe=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleId$;var l=Pe.get(i);if(l){return l[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{Pe.set(i,e)}return e[a]}),Me)};var Be=new Map;var Le=[];var He=[];var Ie=function(e,r){return function(t){e.push(t);if(!$){$=true;if(r&&h.$flags$&4){Ve(ze)}else{h.raf(ze)}}}};var Ue=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){Me(t)}}e.length=0};var ze=function(){Ue(Le);{Ue(He);if($=Le.length>0){h.raf(ze)}}};var Ve=function(e){return p().then(e)};var qe=Ie(He,true)}}}));