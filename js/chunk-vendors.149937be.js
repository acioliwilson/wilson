"use strict";(self["webpackChunkwdev"]=self["webpackChunkwdev"]||[]).push([[998],{294:function(t,e,n){n.d(e,{ET:function(){return Ol},hJ:function(){return sl},ad:function(){return cl}});var r,s=n(816),i=n(463),o=n(333),a=n(444),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},l={},u=u||{},h=c||self;function f(){}function d(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++y)}var m="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,b.apply(null,arguments)}function E(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return e.prototype[n].apply(t,s)}}function T(){this.s=this.s,this.o=this.o}var C=0,S={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=C)){var t=g(this);delete S[t]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},A=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,s="string"===typeof t?t.split(""):t;for(let i=0;i<r;i++)i in s&&e.call(n,s[i],i,t)};function k(t){t:{var e=Kn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let s=0;s<n;s++)if(s in r&&e.call(void 0,r[s],s,t)){e=s;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function D(t){return Array.prototype.concat.apply([],arguments)}function N(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function R(t){return/^[\s\xa0]*$/.test(t)}var O,x=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function L(t,e){return-1!=t.indexOf(e)}function M(t,e){return t<e?-1:t>e?1:0}t:{var P=h.navigator;if(P){var F=P.userAgent;if(F){O=F;break t}}O=""}function V(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function U(t){const e={};for(const n in t)e[n]=t[n];return e}var B="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(t,e){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)t[n]=r[n];for(let e=0;e<B.length;e++)n=B[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $(t){return $[" "](t),t}function H(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}$[" "]=f;var q,G=L(O,"Opera"),K=L(O,"Trident")||L(O,"MSIE"),z=L(O,"Edge"),W=z||K,X=L(O,"Gecko")&&!(L(O.toLowerCase(),"webkit")&&!L(O,"Edge"))&&!(L(O,"Trident")||L(O,"MSIE"))&&!L(O,"Edge"),J=L(O.toLowerCase(),"webkit")&&!L(O,"Edge");function Q(){var t=h.document;return t?t.documentMode:void 0}t:{var Y="",Z=function(){var t=O;return X?/rv:([^\);]+)(\)|;)/.exec(t):z?/Edge\/([\d\.]+)/.exec(t):K?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):J?/WebKit\/(\S+)/.exec(t):G?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Z&&(Y=Z?Z[1]:""),K){var tt=Q();if(null!=tt&&tt>parseFloat(Y)){q=String(tt);break t}}q=Y}var et,nt={};function rt(){return H((function(){let t=0;const e=x(String(q)).split("."),n=x("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var s=e[o]||"",i=n[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],0==s[0].length&&0==i[0].length)break;t=M(0==s[1].length?0:parseInt(s[1],10),0==i[1].length?0:parseInt(i[1],10))||M(0==s[2].length,0==i[2].length)||M(s[2],i[2]),s=s[3],i=i[3]}while(0==t)}return 0<=t}))}if(h.document&&K){var st=Q();et=st||(parseInt(q,10)||void 0)}else et=void 0;var it=et,ot=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",f,e),h.removeEventListener("test",f,e)}catch(n){}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ct(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(X){t:{try{$(e.nodeName);var s=!0;break t}catch(i){}s=!1}s||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:lt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ct.Z.h.call(this)}}at.prototype.h=function(){this.defaultPrevented=!0},_(ct,at);var lt={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),ht=0;function ft(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=s,this.key=++ht,this.ca=this.fa=!1}function dt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function pt(t){this.src=t,this.g={},this.h=0}function gt(t,e){var n=e.type;if(n in t.g){var r,s=t.g[n],i=I(s,e);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(dt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function mt(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.ca&&i.listener==e&&i.capture==!!n&&i.ia==r)return s}return-1}pt.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=mt(t,e,r,s);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ft(e,this.src,i,!!r,s),e.fa=n,t.push(e)),e};var yt="closure_lm_"+(1e6*Math.random()|0),vt={};function wt(t,e,n,r,s){if(r&&r.once)return _t(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)wt(t,e[i],n,r,s);return null}return n=Dt(n),t&&t[ut]?t.N(e,n,p(r)?!!r.capture:!!r,s):bt(t,e,n,!1,r,s)}function bt(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=p(s)?!!s.capture:!!s,a=At(t);if(a||(t[yt]=a=new pt(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=Et(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ot||(s=o),void 0===s&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(St(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Et(){function t(n){return e.call(t.src,t.listener,n)}var e=It;return t}function _t(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)_t(t,e[i],n,r,s);return null}return n=Dt(n),t&&t[ut]?t.O(e,n,p(r)?!!r.capture:!!r,s):bt(t,e,n,!0,r,s)}function Tt(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Tt(t,e[i],n,r,s);else r=p(r)?!!r.capture:!!r,n=Dt(n),t&&t[ut]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=mt(i,n,r,s),-1<n&&(dt(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete t.g[e],t.h--)))):t&&(t=At(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mt(e,n,r,s)),(n=-1<t?e[t]:null)&&Ct(n))}function Ct(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ut])gt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(St(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=At(e))?(gt(n,t),0==n.h&&(n.src=null,e[yt]=null)):dt(t)}}}function St(t){return t in vt?vt[t]:vt[t]="on"+t}function It(t,e){if(t.ca)t=!0;else{e=new ct(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Ct(t),t=n.call(r,e)}return t}function At(t){return t=t[yt],t instanceof pt?t:null}var kt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dt(t){return"function"===typeof t?t:(t[kt]||(t[kt]=function(e){return t.handleEvent(e)}),t[kt])}function Nt(){T.call(this),this.i=new pt(this),this.P=this,this.I=null}function Rt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var s=e;e=new at(r,t),j(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ot(o,r,!0,e)&&s}if(o=e.g=t,s=Ot(o,r,!0,e)&&s,s=Ot(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ot(o,r,!1,e)&&s}function Ot(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&gt(t.i,o),s=!1!==a.call(c,r)&&s}}return s&&!r.defaultPrevented}_(Nt,T),Nt.prototype[ut]=!0,Nt.prototype.removeEventListener=function(t,e,n,r){Tt(this,t,e,n,r)},Nt.prototype.M=function(){if(Nt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)dt(n[r]);delete e.g[t],e.h--}}this.I=null},Nt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Nt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var xt=h.JSON.stringify;function Lt(){var t=Ht;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Mt{constructor(){this.h=this.g=null}add(t,e){const n=Ft.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Pt,Ft=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Vt),(t=>t.reset()));class Vt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Ut(t){h.setTimeout((()=>{throw t}),0)}function Bt(t,e){Pt||jt(),$t||(Pt(),$t=!0),Ht.add(t,e)}function jt(){var t=h.Promise.resolve(void 0);Pt=function(){t.then(qt)}}var $t=!1,Ht=new Mt;function qt(){for(var t;t=Lt();){try{t.h.call(t.g)}catch(n){Ut(n)}var e=Ft;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$t=!1}function Gt(t,e){Nt.call(this),this.h=t||1,this.g=e||h,this.j=b(this.kb,this),this.l=Date.now()}function Kt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function zt(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Wt(t){t.g=zt((()=>{t.g=null,t.i&&(t.i=!1,Wt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}_(Gt,Nt),r=Gt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Rt(this,"tick"),this.da&&(Kt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Gt.Z.M.call(this),Kt(this),delete this.g};class Xt extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Wt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jt(t){T.call(this),this.h=t,this.g={}}_(Jt,T);var Qt=[];function Yt(t,e,n,r){Array.isArray(n)||(n&&(Qt[0]=n.toString()),n=Qt);for(var s=0;s<n.length;s++){var i=wt(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Zt(t){V(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Ct(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,r,s,i){t.info((function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+"\n"+n+"\n"+o}))}function ne(t,e,n,r,s,i,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+"\n"+n+"\n"+i+" "+o}))}function re(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ie(t,n)+(r?" "+r:"")}))}function se(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ie(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return xt(n)}catch(a){return e}}Jt.prototype.M=function(){Jt.Z.M.call(this),Zt(this)},Jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var oe={},ae=null;function ce(){return ae=ae||new Nt}function le(t){at.call(this,oe.Ma,t)}function ue(t){const e=ce();Rt(e,new le(e,t))}function he(t,e){at.call(this,oe.STAT_EVENT,t),this.stat=e}function fe(t){const e=ce();Rt(e,new he(e,t))}function de(t,e){at.call(this,oe.Na,t),this.size=e}function pe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",_(le,at),oe.STAT_EVENT="statevent",_(he,at),oe.Na="timingevent",_(de,at);var ge={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},me={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ye(){}function ve(t){return t.h||(t.h=t.i())}function we(){}ye.prototype.h=null;var be,Ee={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function _e(){at.call(this,"d")}function Te(){at.call(this,"c")}function Ce(){}function Se(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Jt(this),this.P=Ae,t=W?125:void 0,this.W=new Gt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ie}function Ie(){this.i=null,this.g="",this.h=!1}_(_e,at),_(Te,at),_(Ce,ye),Ce.prototype.g=function(){return new XMLHttpRequest},Ce.prototype.i=function(){return{}},be=new Ce;var Ae=45e3,ke={},De={};function Ne(t,e,n){t.K=1,t.v=en(Xe(e)),t.s=n,t.U=!0,Re(t,null)}function Re(t,e){t.F=Date.now(),Me(t),t.A=Xe(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),yn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ie,t.g=Tr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Xt(b(t.Ia,t,t.g),t.O)),Yt(t.V,t.g,"readystatechange",t.gb),e=t.H?U(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ue(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function Oe(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function xe(t,e,n){let r,s=!0;for(;!t.I&&t.C<n.length;){if(r=Le(t,n),r==De){4==e&&(t.o=4,fe(14),s=!1),re(t.j,t.m,null,"[Incomplete Response]");break}if(r==ke){t.o=4,fe(15),re(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}re(t.j,t.m,r,null),Be(t,r)}Oe(t)&&r!=De&&r!=ke&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,fe(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gr(e),e.L=!0,fe(11))):(re(t.j,t.m,n,"[Invalid Chunked Response]"),Ue(t),Ve(t))}function Le(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?De:(n=Number(e.substring(n,r)),isNaN(n)?ke:(r+=1,r+n>e.length?De:(e=e.substr(r,n),t.C=r+n,e)))}function Me(t){t.Y=Date.now()+t.P,Pe(t,t.P)}function Pe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=pe(b(t.eb,t),e)}function Fe(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Ve(t){0==t.l.G||t.I||vr(t.l,t)}function Ue(t){Fe(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Kt(t.W),Zt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Be(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Sn(n.i,t)))if(n.I=t.N,!t.J&&Sn(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;yr(n),ir(n)}pr(n),fe(18)}}else n.ta=s[1],0<n.ta-n.U&&37500>s[2]&&n.N&&0==n.A&&!n.v&&(n.v=pe(b(n.ab,n),6e3));if(1>=Cn(n.i)&&n.ka){try{n.ka()}catch(l){}n.ka=void 0}}else br(n,11)}else if((t.J||n.g==t)&&yr(n),!R(e))for(s=n.Ca.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const e=l[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const s=l[4];null!=s&&(n.za=s,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var i=r.i;!i.g&&(L(t,"spdy")||L(t,"quic")||L(t,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(In(i,i.h),i.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,tn(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=_r(r,r.H?r.la:null,r.W),o.J){An(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Fe(a),Me(a)),r.g=o}else dr(r);0<n.l.length&&cr(n)}else"stop"!=l[0]&&"close"!=l[0]||br(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?br(n,7):sr(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}ue(4)}catch(l){}}function je(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function $e(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"===typeof t)A(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(d(t)||"string"===typeof t){n=[];for(var r=t.length,s=0;s<r;s++)n.push(s)}else for(s in n=[],r=0,t)n[r++]=s;r=je(t),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}}function He(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof He)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function qe(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Ge(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var s={};for(n=e=0;e<t.g.length;)r=t.g[e],Ge(s,r)||(t.g[n++]=r,s[r]=1),e++;t.g.length=n}}function Ge(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=Se.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Yn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const u=Yn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>u)&&(3!=u||W||this.g&&(this.h.h||this.g.ga()||Zn(this.g)))){this.I||4!=u||7==e||ue(8==e||0>=f?3:2),Fe(this);var n=this.g.ba();this.N=n;e:if(Oe(this)){var r=Zn(this.g);t="";var s=r.length,i=4==Yn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ue(this),Ve(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,fe(12),Ue(this),Ve(this);break t}re(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Be(this,n)}this.U?(xe(this,u,o),W&&this.i&&3==u&&(Yt(this.V,this.W,"tick",this.fb),this.W.start())):(re(this.j,this.m,o,null),Be(this,o)),4==u&&Ue(this),this.i&&!this.I&&(4==u?vr(this.l,this):(this.i=!1,Me(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,fe(12)):(this.o=0,fe(13)),Ue(this),Ve(this)}}}catch(u){}},r.fb=function(){if(this.g){var t=Yn(this.g),e=this.g.ga();this.C<e.length&&(Fe(this),xe(this,t,e),this.i&&4!=t&&Me(this))}},r.cancel=function(){this.I=!0,Ue(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(se(this.j,this.A),2!=this.K&&(ue(3),fe(17)),Ue(this),this.o=2,Ve(this)):Pe(this,this.Y-t)},r=He.prototype,r.R=function(){qe(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return qe(this),this.g.concat()},r.get=function(t,e){return Ge(this.h,t)?this.h[t]:e},r.set=function(t,e){Ge(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var s=n[r],i=this.get(s);t.call(e,i,s,this)}};var Ke=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ze(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function We(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof We){this.g=void 0!==e?e:t.g,Je(this,t.j),this.s=t.s,Qe(this,t.i),Ye(this,t.m),this.l=t.l,e=t.h;var n=new dn;n.i=e.i,e.g&&(n.g=new He(e.g),n.h=e.h),Ze(this,n),this.o=t.o}else t&&(n=String(t).match(Ke))?(this.g=!!e,Je(this,n[1]||"",!0),this.s=sn(n[2]||""),Qe(this,n[3]||"",!0),Ye(this,n[4]),this.l=sn(n[5]||"",!0),Ze(this,n[6]||"",!0),this.o=sn(n[7]||"")):(this.g=!!e,this.h=new dn(null,this.g))}function Xe(t){return new We(t)}function Je(t,e,n){t.j=n?sn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qe(t,e,n){t.i=n?sn(e,!0):e}function Ye(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ze(t,e,n){e instanceof dn?(t.h=e,wn(t.h,t.g)):(n||(e=on(e,hn)),t.h=new dn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof We?Xe(t):new We(t,void 0)}function rn(t,e,n,r){var s=new We(null,void 0);return t&&Je(s,t),e&&Qe(s,e),n&&Ye(s,n),r&&(s.l=r),s}function sn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}We.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,cn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,cn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?un:ln,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,fn)),t.join("")};var cn=/[#\/\?@]/g,ln=/[#\?:]/g,un=/[#\?]/g,hn=/[#\?@]/g,fn=/#/g;function dn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pn(t){t.g||(t.g=new He,t.h=0,t.i&&ze(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function gn(t,e){pn(t),e=vn(t,e),Ge(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ge(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&qe(t)))}function mn(t,e){return pn(t),e=vn(t,e),Ge(t.g.h,e)}function yn(t,e,n){gn(t,e),0<n.length&&(t.i=null,t.g.set(vn(t,e),N(n)),t.h+=n.length)}function vn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wn(t,e){e&&!t.j&&(pn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(gn(this,e),yn(this,n,t))}),t)),t.j=e}r=dn.prototype,r.add=function(t,e){pn(this),this.i=null,t=vn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){pn(this),this.g.forEach((function(n,r){A(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){pn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var s=t[r],i=0;i<s.length;i++)n.push(e[r]);return n},r.R=function(t){pn(this);var e=[];if("string"===typeof t)mn(this,t)&&(e=D(e,this.g.get(vn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=D(e,t[n])}return e},r.set=function(t,e){return pn(this),this.i=null,t=vn(this,t),mn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;""!==r[i]&&(o+="="+encodeURIComponent(String(r[i]))),t.push(o)}}return this.i=t.join("&")};var bn=class{constructor(t,e){this.h=t,this.g=e}};function En(t){this.l=t||_n,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _n=10;function Tn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Cn(t){return t.h?1:t.g?t.g.size:0}function Sn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function In(t,e){t.g?t.g.add(e):t.h=e}function An(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function kn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return N(t.i)}function Dn(){}function Nn(){this.g=new Dn}function Rn(t,e,n){const r=n||"";try{$e(t,(function(t,n){let s=t;p(t)&&(s=xt(t)),e.push(r+n+"="+encodeURIComponent(s))}))}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function On(t,e){const n=new te;if(h.Image){const r=new Image;r.onload=E(xn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=E(xn,n,r,"TestLoadImage: error",!1,e),r.onabort=E(xn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=E(xn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function xn(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch(i){}}function Ln(t){this.l=t.$b||null,this.j=t.ib||!1}function Mn(t,e){Nt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Pn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}En.prototype.cancel=function(){if(this.i=kn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Dn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},Dn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},_(Ln,ye),Ln.prototype.g=function(){return new Mn(this.l,this.j)},Ln.prototype.i=function(t){return function(){return t}}({}),_(Mn,Nt);var Pn=0;function Fn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Vn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Un(t)}function Un(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Mn.prototype,r.open=function(t,e){if(this.readyState!=Pn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Un(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Vn(this)),this.readyState=Pn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Fn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Vn(this):Un(this),3==this.readyState&&Fn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Vn(this))},r.Ta=function(t){this.g&&(this.response=t,Vn(this))},r.ha=function(){this.g&&Vn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Mn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Bn=h.JSON.parse;function jn(t){Nt.call(this),this.headers=new He,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$n,this.K=this.L=!1}_(jn,Nt);var $n="",Hn=/^https?$/i,qn=["POST","PUT"];function Gn(t){return K&&rt()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Kn(t){return"content-type"==t.toLowerCase()}function zn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wn(t),Jn(t)}function Wn(t){t.D||(t.D=!0,Rt(t,"complete"),Rt(t,"error"))}function Xn(t){if(t.h&&"undefined"!=typeof u&&(!t.C[1]||4!=Yn(t)||2!=t.ba()))if(t.v&&4==Yn(t))zt(t.Fa,0,t);else if(Rt(t,"readystatechange"),4==Yn(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var s=String(t.H).match(Ke)[1]||null;if(!s&&h.self&&h.self.location){var i=h.self.location.protocol;s=i.substr(0,i.length-1)}r=!Hn.test(s?s.toLowerCase():"")}n=r}if(n)Rt(t,"complete"),Rt(t,"success");else{t.m=6;try{var o=2<Yn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Wn(t)}}finally{Jn(t)}}}function Jn(t,e){if(t.g){Qn(t);const r=t.g,s=t.C[0]?f:null;t.g=null,t.C=null,e||Rt(t,"ready");try{r.onreadystatechange=s}catch(n){}}}function Qn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Yn(t){return t.g?t.g.readyState:0}function Zn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case $n:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tr(t){let e="";return V(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function er(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=tr(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function nr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rr(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=nr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=nr("baseRetryDelayMs",5e3,t),this.$a=nr("retryDelaySeedMs",1e4,t),this.Ya=nr("forwardChannelMaxRetries",2,t),this.ra=nr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new En(t&&t.concurrentRequestLimit),this.Ca=new Nn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function sr(t){if(or(t),3==t.G){var e=t.V++,n=Xe(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),hr(t,n),e=new Se(t,t.h,e,void 0),e.K=2,e.v=en(Xe(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=Tr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Me(e)}Er(t)}function ir(t){t.g&&(gr(t),t.g.cancel(),t.g=null)}function or(t){ir(t),t.u&&(h.clearTimeout(t.u),t.u=null),yr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function ar(t,e){t.l.push(new bn(t.Za++,e)),3==t.G&&cr(t)}function cr(t){Tn(t.i)||t.m||(t.m=!0,Bt(t.Ha,t),t.C=0)}function lr(t,e){return!(Cn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=pe(b(t.Ha,t,e),wr(t,t.C)),t.C++,!0))}function ur(t,e){var n;n=e?e.m:t.V++;const r=Xe(t.F);tn(r,"SID",t.J),tn(r,"RID",n),tn(r,"AID",t.U),hr(t,r),t.o&&t.s&&er(r,t.o,t.s),n=new Se(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=fr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),In(t.i,n),Ne(n,r,e)}function hr(t,e){t.j&&$e({},(function(t,n){tn(e,n,t)}))}function fr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?b(t.j.Oa,t.j,t):null;t:{var s=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=s[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let i=!0;for(let o=0;o<n;o++){let n=s[o].h;const a=s[o].g;if(n-=e,0>n)e=Math.max(0,s[o].h-100),i=!1;else try{Rn(a,t,"req"+n+"_")}catch(Qr){r&&r(a)}}if(i){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function dr(t){t.g||t.u||(t.Y=1,Bt(t.Ga,t),t.A=0)}function pr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=pe(b(t.Ga,t),wr(t,t.A)),t.A++,!0)}function gr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function mr(t){t.g=new Se(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Xe(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),hr(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&er(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Xe(e)),n.s=null,n.U=!0,Re(n,t)}function yr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function vr(t,e){var n=null;if(t.g==e){yr(t),gr(t),t.g=null;var r=2}else{if(!Sn(t.i,e))return;n=e.D,An(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var s=t.C;r=ce(),Rt(r,new de(r,n,e,s)),cr(t)}else dr(t);else if(s=e.o,3==s||0==s&&0<t.I||!(1==r&&lr(t,e)||2==r&&pr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:br(t,5);break;case 4:br(t,10);break;case 3:br(t,6);break;default:br(t,2)}}function wr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function br(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=b(t.jb,t);n||(n=new We("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Je(n,"https"),en(n)),On(n.toString(),r)}else fe(2);t.G=0,t.j&&t.j.va(e),Er(t),or(t)}function Er(t){t.G=0,t.I=-1,t.j&&(0==kn(t.i).length&&0==t.l.length||(t.i.i.length=0,N(t.l),t.l.length=0),t.j.ua())}function _r(t,e,n){let r=nn(n);if(""!=r.i)e&&Qe(r,e+"."+r.i),Ye(r,r.m);else{const t=h.location;r=rn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&V(t.aa,(function(t,e){tn(r,e,t)})),e=t.D,n=t.sa,e&&n&&tn(r,e,n),tn(r,"VER",t.ma),hr(t,r),r}function Tr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new jn(new Ln({ib:!0})):new jn(t.qa),e.L=t.H,e}function Cr(){}function Sr(){if(K&&!(10<=Number(it)))throw Error("Environmental error: no available transport.")}function Ir(t,e){Nt.call(this),this.g=new rr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!R(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!R(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Dr(this)}function Ar(t){_e.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function kr(){Te.call(this),this.status=1}function Dr(t){this.g=t}r=jn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():be.g(),this.C=this.u?ve(this.u):ve(be),this.g.onreadystatechange=b(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(i){return void zn(this,i)}t=n||"";const s=new He(this.headers);r&&$e(r,(function(t,e){s.set(e,t)})),r=k(s.T()),n=h.FormData&&t instanceof h.FormData,!(0<=I(qn,e))||r||n||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qn(this),0<this.B&&((this.K=Gn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.pa,this)):this.A=zt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){zn(this,i)}},r.pa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Rt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Rt(this,"complete"),Rt(this,"abort"),Jn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jn(this,!0)),jn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Xn(this):this.cb())},r.cb=function(){Xn(this)},r.ba=function(){try{return 2<Yn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Bn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=rr.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const s=new Se(this,this.h,t,void 0);let i=this.s;if(this.P&&(i?(i=U(i),j(i,this.P)):i=this.P),null===this.o&&(s.H=i),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=fr(this,s,e),n=Xe(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),hr(this,n),this.o&&i&&er(n,this.o,i),In(this.i,s),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),s.$=!0,Ne(s,n,null)):Ne(s,n,e),this.G=2}}else 3==this.G&&(t?ur(this,t):0==this.l.length||Tn(this.i)||ur(this))},r.Ga=function(){if(this.u=null,mr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=pe(b(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,fe(10),ir(this),mr(this))},r.ab=function(){null!=this.v&&(this.v=null,ir(this),pr(this),fe(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),fe(2)):(this.h.info("Failed to ping google.com"),fe(1))},r=Cr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Sr.prototype.g=function(t,e){return new Ir(t,e)},_(Ir,Nt),Ir.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Bt(b(t.hb,t,e))),fe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=_r(t,null,t.W),cr(t)},Ir.prototype.close=function(){sr(this.g)},Ir.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ar(this.g,e)}else this.v?(e={},e.__data__=xt(t),ar(this.g,e)):ar(this.g,t)},Ir.prototype.M=function(){this.g.j=null,delete this.j,sr(this.g),delete this.g,Ir.Z.M.call(this)},_(Ar,_e),_(kr,Te),_(Dr,Cr),Dr.prototype.xa=function(){Rt(this.g,"a")},Dr.prototype.wa=function(t){Rt(this.g,new Ar(t))},Dr.prototype.va=function(t){Rt(this.g,new kr(t))},Dr.prototype.ua=function(){Rt(this.g,"b")},Sr.prototype.createWebChannel=Sr.prototype.g,Ir.prototype.send=Ir.prototype.u,Ir.prototype.open=Ir.prototype.m,Ir.prototype.close=Ir.prototype.close,ge.NO_ERROR=0,ge.TIMEOUT=8,ge.HTTP_ERROR=6,me.COMPLETE="complete",we.EventType=Ee,Ee.OPEN="a",Ee.CLOSE="b",Ee.ERROR="c",Ee.MESSAGE="d",Nt.prototype.listen=Nt.prototype.N,jn.prototype.listenOnce=jn.prototype.O,jn.prototype.getLastError=jn.prototype.La,jn.prototype.getLastErrorCode=jn.prototype.Da,jn.prototype.getStatus=jn.prototype.ba,jn.prototype.getResponseJson=jn.prototype.Qa,jn.prototype.getResponseText=jn.prototype.ga,jn.prototype.send=jn.prototype.ea;var Nr=l.createWebChannelTransport=function(){return new Sr},Rr=l.getStatEventTarget=function(){return ce()},Or=l.ErrorCode=ge,xr=l.EventType=me,Lr=l.Event=oe,Mr=l.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Pr=l.FetchXmlHttpFactory=Ln,Fr=l.WebChannel=we,Vr=l.XhrIo=jn;const Ur="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Br.UNAUTHENTICATED=new Br(null),Br.GOOGLE_CREDENTIALS=new Br("google-credentials-uid"),Br.FIRST_PARTY=new Br("first-party-uid"),Br.MOCK_USER=new Br("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let jr="9.9.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new o.Yd("@firebase/firestore");function Hr(){return $r.logLevel}function qr(t,...e){if($r.logLevel<=o["in"].DEBUG){const n=e.map(zr);$r.debug(`Firestore (${jr}): ${t}`,...n)}}function Gr(t,...e){if($r.logLevel<=o["in"].ERROR){const n=e.map(zr);$r.error(`Firestore (${jr}): ${t}`,...n)}}function Kr(t,...e){if($r.logLevel<=o["in"].WARN){const n=e.map(zr);$r.warn(`Firestore (${jr}): ${t}`,...n)}}function zr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t="Unexpected state"){const e=`FIRESTORE (${jr}) INTERNAL ASSERTION FAILED: `+t;throw Gr(e),new Error(e)}function Xr(t,e){t||Wr()}function Jr(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Yr extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class es{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Br.UNAUTHENTICATED)))}shutdown(){}}class ns{constructor(t){this.t=t,this.currentUser=Br.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let s=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Zr,t.enqueueRetryable((()=>r(this.currentUser)))};const i=()=>{const e=s;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{qr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),i()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(qr("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Zr)}}),0),i()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(qr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Xr("string"==typeof e.accessToken),new ts(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Xr(null===t||"string"==typeof t),new Br(t)}}class rs{constructor(t,e,n){this.type="FirstParty",this.user=Br.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ss{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new rs(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(Br.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class is{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class os{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&qr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,qr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{qr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):qr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Xr("string"==typeof t.token),this.p=t.token,new is(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function as(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=as(40);for(let s=0;s<r.length;++s)n.length<20&&r[s]<e&&(n+=t.charAt(r[s]%t.length))}return n}}function ls(t,e){return t<e?-1:t>e?1:0}function us(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hs{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Yr(Qr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Yr(Qr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Yr(Qr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Yr(Qr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return hs.fromMillis(Date.now())}static fromDate(t){return hs.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new hs(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?ls(this.nanoseconds,t.nanoseconds):ls(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(t){this.timestamp=t}static fromTimestamp(t){return new fs(t)}static min(){return new fs(new hs(0,0))}static max(){return new fs(new hs(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,e,n){void 0===e?e=0:e>t.length&&Wr(),void 0===n?n=t.length-e:n>t.length-e&&Wr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===ds.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof ds?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),s=e.get(r);if(n<s)return-1;if(n>s)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ps extends ds{construct(t,e,n){return new ps(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Yr(Qr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new ps(e)}static emptyPath(){return new ps([])}}const gs=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ms extends ds{construct(t,e,n){return new ms(t,e,n)}static isValidIdentifier(t){return gs.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ms.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ms(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const s=()=>{if(0===n.length)throw new Yr(Qr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let i=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Yr(Qr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Yr(Qr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(i=!i,r++):"."!==e||i?(n+=e,r++):(s(),r++)}if(s(),i)throw new Yr(Qr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ms(e)}static emptyPath(){return new ms([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(t){this.path=t}static fromPath(t){return new ys(ps.fromString(t))}static fromName(t){return new ys(ps.fromString(t).popFirst(5))}static empty(){return new ys(ps.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===ps.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return ps.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ys(new ps(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}vs.UNKNOWN_ID=-1;function ws(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=fs.fromTimestamp(1e9===r?new hs(n+1,0):new hs(n,r));return new Es(s,ys.empty(),e)}function bs(t){return new Es(t.readTime,t.key,-1)}class Es{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Es(fs.min(),ys.empty(),-1)}static max(){return new Es(fs.max(),ys.empty(),-1)}}function _s(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ys.comparator(t.documentKey,e.documentKey),0!==n?n:ls(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ts="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cs{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ss(t){if(t.code!==Qr.FAILED_PRECONDITION||t.message!==Ts)throw t;qr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Wr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Is(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Is?e:Is.resolve(e)}catch(t){return Is.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Is.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Is.reject(e)}static resolve(t){return new Is(((e,n)=>{e(t)}))}static reject(t){return new Is(((e,n)=>{n(t)}))}static waitFor(t){return new Is(((e,n)=>{let r=0,s=0,i=!1;t.forEach((t=>{++r,t.next((()=>{++s,i&&s===r&&e()}),(t=>n(t)))})),i=!0,s===r&&e()}))}static or(t){let e=Is.resolve(!1);for(const n of t)e=e.next((t=>t?Is.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Is(((n,r)=>{const s=t.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const c=a;e(t[c]).next((t=>{i[c]=t,++o,o===s&&n(i)}),(t=>r(t)))}}))}static doWhile(t,e){return new Is(((n,r)=>{const s=()=>{!0===t()?e().next((()=>{s()}),r):n()};s()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ks{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ns(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Rs(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ks.ot=-1;class Os{constructor(t,e){this.comparator=t,this.root=e||Ls.EMPTY}insert(t,e){return new Os(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ls.BLACK,null,null))}remove(t){return new Os(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ls.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xs(this.root,t,this.comparator,!1)}getReverseIterator(){return new xs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xs(this.root,t,this.comparator,!0)}}class xs{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?n(t.key,e):1,e&&r&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(0===s){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ls{constructor(t,e,n,r,s){this.key=t,this.value=e,this.color=null!=n?n:Ls.RED,this.left=null!=r?r:Ls.EMPTY,this.right=null!=s?s:Ls.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,s){return new Ls(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const s=n(t,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===s?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ls.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ls.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ls.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ls.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Wr();if(this.right.isRed())throw Wr();const t=this.left.check();if(t!==this.right.check())throw Wr();return t+(this.isRed()?0:1)}}Ls.EMPTY=null,Ls.RED=!0,Ls.BLACK=!1,Ls.EMPTY=new class{constructor(){this.size=0}get key(){throw Wr()}get value(){throw Wr()}get color(){throw Wr()}get left(){throw Wr()}get right(){throw Wr()}copy(t,e,n,r,s){return this}insert(t,e,n){return new Ls(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ms{constructor(t){this.comparator=t,this.data=new Os(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Ps(this.data.getIterator())}getIteratorFrom(t){return new Ps(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Ms))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Ms(this.comparator);return e.data=t,e}}class Ps{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fs{constructor(t){this.fields=t,t.sort(ms.comparator)}static empty(){return new Fs([])}unionWith(t){let e=new Ms(ms.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Fs(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return us(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vs{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Vs(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Vs(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return ls(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Vs.EMPTY_BYTE_STRING=new Vs("");const Us=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bs(t){if(Xr(!!t),"string"==typeof t){let e=0;const n=Us.exec(t);if(Xr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:js(t.seconds),nanos:js(t.nanos)}}function js(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function $s(t){return"string"==typeof t?Vs.fromBase64String(t):Vs.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function qs(t){const e=Bs(t.mapValue.fields.__local_write_time__.timestampValue);return new hs(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{constructor(t,e,n,r,s,i,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ks{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ks("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ks&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){return null==t}function Ws(t){return 0===t&&1/t==-1/0}function Xs(t){return"number"==typeof t&&Number.isInteger(t)&&!Ws(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hs(t)?4:ci(t)?9007199254740991:10:Wr()}function Ys(t,e){if(t===e)return!0;const n=Qs(t);if(n!==Qs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qs(t).isEqual(qs(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=Bs(t.timestampValue),r=Bs(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return $s(t.bytesValue).isEqual($s(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return js(t.geoPointValue.latitude)===js(e.geoPointValue.latitude)&&js(t.geoPointValue.longitude)===js(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return js(t.integerValue)===js(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=js(t.doubleValue),r=js(e.doubleValue);return n===r?Ws(n)===Ws(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return us(t.arrayValue.values||[],e.arrayValue.values||[],Ys);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Ds(n)!==Ds(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!Ys(n[s],r[s])))return!1;return!0}(t,e);default:return Wr()}}function Zs(t,e){return void 0!==(t.values||[]).find((t=>Ys(t,e)))}function ti(t,e){if(t===e)return 0;const n=Qs(t),r=Qs(e);if(n!==r)return ls(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ls(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=js(t.integerValue||t.doubleValue),r=js(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ei(t.timestampValue,e.timestampValue);case 4:return ei(qs(t),qs(e));case 5:return ls(t.stringValue,e.stringValue);case 6:return function(t,e){const n=$s(t),r=$s(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let s=0;s<n.length&&s<r.length;s++){const t=ls(n[s],r[s]);if(0!==t)return t}return ls(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=ls(js(t.latitude),js(e.latitude));return 0!==n?n:ls(js(t.longitude),js(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const t=ti(n[s],r[s]);if(t)return t}return ls(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Js.mapValue&&e===Js.mapValue)return 0;if(t===Js.mapValue)return 1;if(e===Js.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),s=e.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const t=ls(r[o],i[o]);if(0!==t)return t;const e=ti(n[r[o]],s[i[o]]);if(0!==e)return e}return ls(r.length,i.length)}(t.mapValue,e.mapValue);default:throw Wr()}}function ei(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return ls(t,e);const n=Bs(t),r=Bs(e),s=ls(n.seconds,r.seconds);return 0!==s?s:ls(n.nanos,r.nanos)}function ni(t){return ri(t)}function ri(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=Bs(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?$s(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,ys.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=ri(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const s of e)r?r=!1:n+=",",n+=`${s}:${ri(t.fields[s])}`;return n+"}"}(t.mapValue):Wr();var e,n}function si(t){return!!t&&"integerValue"in t}function ii(t){return!!t&&"arrayValue"in t}function oi(t){return!!t&&"mapValue"in t}function ai(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ns(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=ai(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ai(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ci(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class li{constructor(t){this.value=t}static empty(){return new li({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!oi(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ai(e)}setAll(t){let e=ms.emptyPath(),n={},r=[];t.forEach(((t,s)=>{if(!e.isImmediateParentOf(s)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=s.popLast()}t?n[s.lastSegment()]=ai(t):r.push(s.lastSegment())}));const s=this.getFieldsMap(e);this.applyChanges(s,n,r)}delete(t){const e=this.field(t.popLast());oi(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Ys(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];oi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Ns(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new li(ai(this.value))}}function ui(t){const e=[];return Ns(t.fields,((t,n)=>{const r=new ms([t]);if(oi(n)){const t=ui(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Fs(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class hi{constructor(t,e,n,r,s,i){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=s,this.documentState=i}static newInvalidDocument(t){return new hi(t,0,fs.min(),fs.min(),li.empty(),0)}static newFoundDocument(t,e,n){return new hi(t,1,e,fs.min(),n,0)}static newNoDocument(t,e){return new hi(t,2,e,fs.min(),li.empty(),0)}static newUnknownDocument(t,e){return new hi(t,3,e,fs.min(),li.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=li.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=li.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fs.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof hi&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new hi(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t,e=null,n=[],r=[],s=null,i=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.ut=null}}function di(t,e=null,n=[],r=[],s=null,i=null,o=null){return new fi(t,e,n,r,s,i,o)}function pi(t){const e=Jr(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+ni(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),zs(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ni(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ni(t))).join(",")),e.ut=t}return e.ut}function gi(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ni(e.value)}`;var e})).join(", ")}]`),zs(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ni(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ni(t))).join(",")),`Target(${e})`}function mi(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<t.orderBy.length;s++)if(!ki(t.orderBy[s],e.orderBy[s]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let s=0;s<t.filters.length;s++)if(n=t.filters[s],r=e.filters[s],n.op!==r.op||!n.field.isEqual(r.field)||!Ys(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ni(t.startAt,e.startAt)&&Ni(t.endAt,e.endAt)}class yi extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new vi(t,e,n):"array-contains"===e?new _i(t,n):"in"===e?new Ti(t,n):"not-in"===e?new Ci(t,n):"array-contains-any"===e?new Si(t,n):new yi(t,e,n)}static ct(t,e,n){return"in"===e?new wi(t,n):new bi(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(ti(e,this.value)):null!==e&&Qs(this.value)===Qs(e)&&this.at(ti(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Wr()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class vi extends yi{constructor(t,e,n){super(t,e,n),this.key=ys.fromName(n.referenceValue)}matches(t){const e=ys.comparator(t.key,this.key);return this.at(e)}}class wi extends yi{constructor(t,e){super(t,"in",e),this.keys=Ei("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class bi extends yi{constructor(t,e){super(t,"not-in",e),this.keys=Ei("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ei(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ys.fromName(t.referenceValue)))}class _i extends yi{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ii(e)&&Zs(e.arrayValue,this.value)}}class Ti extends yi{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Zs(this.value.arrayValue,e)}}class Ci extends yi{constructor(t,e){super(t,"not-in",e)}matches(t){if(Zs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Zs(this.value.arrayValue,e)}}class Si extends yi{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ii(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Zs(this.value.arrayValue,t)))}}class Ii{constructor(t,e){this.position=t,this.inclusive=e}}class Ai{constructor(t,e="asc"){this.field=t,this.dir=e}}function ki(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Di(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(r=i.field.isKeyField()?ys.comparator(ys.fromName(o.referenceValue),n.key):ti(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Ni(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ys(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,e=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Oi(t,e,n,r,s,i,o,a){return new Ri(t,e,n,r,s,i,o,a)}function xi(t){return new Ri(t)}function Li(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Mi(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Pi(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Fi(t){return null!==t.collectionGroup}function Vi(t){const e=Jr(t);if(null===e.lt){e.lt=[];const t=Pi(e),n=Mi(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new Ai(t)),e.lt.push(new Ai(ms.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Ai(ms.keyField(),t))}}}return e.lt}function Ui(t){const e=Jr(t);if(!e.ft)if("F"===e.limitType)e.ft=di(e.path,e.collectionGroup,Vi(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const s of Vi(e)){const e="desc"===s.dir?"asc":"desc";t.push(new Ai(s.field,e))}const n=e.endAt?new Ii(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ii(e.startAt.position,e.startAt.inclusive):null;e.ft=di(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.ft}function Bi(t,e,n){return new Ri(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ji(t,e){return mi(Ui(t),Ui(e))&&t.limitType===e.limitType}function $i(t){return`${pi(Ui(t))}|lt:${t.limitType}`}function Hi(t){return`Query(target=${gi(Ui(t))}; limitType=${t.limitType})`}function qi(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ys.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Di(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Vi(t),e))&&!(t.endAt&&!function(t,e,n){const r=Di(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Vi(t),e))}(t,e)}function Gi(t){return(e,n)=>{let r=!1;for(const s of Vi(t)){const t=Ki(s,e,n);if(0!==t)return t;r=r||s.field.isKeyField()}return 0}}function Ki(t,e,n){const r=t.field.isKeyField()?ys.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),s=n.data.field(t);return null!==r&&null!==s?ti(r,s):Wr()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Wr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ws(e)?"-0":e}}function Wi(t){return{integerValue:""+t}}function Xi(t,e){return Xs(e)?Wi(e):zi(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this._=void 0}}function Qi(t,e,n){return t instanceof to?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof eo?no(t,e):t instanceof ro?so(t,e):function(t,e){const n=Zi(t,e),r=oo(n)+oo(t._t);return si(n)&&si(t._t)?Wi(r):zi(t.wt,r)}(t,e)}function Yi(t,e,n){return t instanceof eo?no(t,e):t instanceof ro?so(t,e):n}function Zi(t,e){return t instanceof io?si(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class to extends Ji{}class eo extends Ji{constructor(t){super(),this.elements=t}}function no(t,e){const n=ao(e);for(const r of t.elements)n.some((t=>Ys(t,r)))||n.push(r);return{arrayValue:{values:n}}}class ro extends Ji{constructor(t){super(),this.elements=t}}function so(t,e){let n=ao(e);for(const r of t.elements)n=n.filter((t=>!Ys(t,r)));return{arrayValue:{values:n}}}class io extends Ji{constructor(t,e){super(),this.wt=t,this._t=e}}function oo(t){return js(t.integerValue||t.doubleValue)}function ao(t){return ii(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof eo&&e instanceof eo||t instanceof ro&&e instanceof ro?us(t.elements,e.elements,Ys):t instanceof io&&e instanceof io?Ys(t._t,e._t):t instanceof to&&e instanceof to}(t.transform,e.transform)}class lo{constructor(t,e){this.version=t,this.transformResults=e}}class uo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new uo}static exists(t){return new uo(void 0,t)}static updateTime(t){return new uo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ho(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class fo{}function po(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Co(t.key,uo.none()):new wo(t.key,t.data,uo.none());{const n=t.data,r=li.empty();let s=new Ms(ms.comparator);for(let t of e.fields)if(!s.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),s=s.add(t)}return new bo(t.key,r,new Fs(s.toArray()),uo.none())}}function go(t,e,n){t instanceof wo?function(t,e,n){const r=t.value.clone(),s=_o(t.fieldTransforms,e,n.transformResults);r.setAll(s),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof bo?function(t,e,n){if(!ho(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=_o(t.fieldTransforms,e,n.transformResults),s=e.data;s.setAll(Eo(t)),s.setAll(r),e.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function mo(t,e,n,r){return t instanceof wo?function(t,e,n,r){if(!ho(t.precondition,e))return n;const s=t.value.clone(),i=To(t.fieldTransforms,r,e);return s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null}(t,e,n,r):t instanceof bo?function(t,e,n,r){if(!ho(t.precondition,e))return n;const s=To(t.fieldTransforms,r,e),i=e.data;return i.setAll(Eo(t)),i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return ho(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function yo(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),s=Zi(r.transform,t||null);null!=s&&(null===n&&(n=li.empty()),n.set(r.field,s))}return n||null}function vo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&us(t,e,((t,e)=>co(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wo extends fo{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class bo extends fo{constructor(t,e,n,r,s=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Eo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function _o(t,e,n){const r=new Map;Xr(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Yi(o,a,n[s]))}return r}function To(t,e,n){const r=new Map;for(const s of t){const t=s.transform,i=n.data.field(s.field);r.set(s.field,Qi(t,i,e))}return r}class Co extends fo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class So extends fo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Io,Ao;function ko(t){switch(t){default:return Wr();case Qr.CANCELLED:case Qr.UNKNOWN:case Qr.DEADLINE_EXCEEDED:case Qr.RESOURCE_EXHAUSTED:case Qr.INTERNAL:case Qr.UNAVAILABLE:case Qr.UNAUTHENTICATED:return!1;case Qr.INVALID_ARGUMENT:case Qr.NOT_FOUND:case Qr.ALREADY_EXISTS:case Qr.PERMISSION_DENIED:case Qr.FAILED_PRECONDITION:case Qr.ABORTED:case Qr.OUT_OF_RANGE:case Qr.UNIMPLEMENTED:case Qr.DATA_LOSS:return!0}}function Do(t){if(void 0===t)return Gr("GRPC error has no .code"),Qr.UNKNOWN;switch(t){case Io.OK:return Qr.OK;case Io.CANCELLED:return Qr.CANCELLED;case Io.UNKNOWN:return Qr.UNKNOWN;case Io.DEADLINE_EXCEEDED:return Qr.DEADLINE_EXCEEDED;case Io.RESOURCE_EXHAUSTED:return Qr.RESOURCE_EXHAUSTED;case Io.INTERNAL:return Qr.INTERNAL;case Io.UNAVAILABLE:return Qr.UNAVAILABLE;case Io.UNAUTHENTICATED:return Qr.UNAUTHENTICATED;case Io.INVALID_ARGUMENT:return Qr.INVALID_ARGUMENT;case Io.NOT_FOUND:return Qr.NOT_FOUND;case Io.ALREADY_EXISTS:return Qr.ALREADY_EXISTS;case Io.PERMISSION_DENIED:return Qr.PERMISSION_DENIED;case Io.FAILED_PRECONDITION:return Qr.FAILED_PRECONDITION;case Io.ABORTED:return Qr.ABORTED;case Io.OUT_OF_RANGE:return Qr.OUT_OF_RANGE;case Io.UNIMPLEMENTED:return Qr.UNIMPLEMENTED;case Io.DATA_LOSS:return Qr.DATA_LOSS;default:return Wr()}}(Ao=Io||(Io={}))[Ao.OK=0]="OK",Ao[Ao.CANCELLED=1]="CANCELLED",Ao[Ao.UNKNOWN=2]="UNKNOWN",Ao[Ao.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ao[Ao.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ao[Ao.NOT_FOUND=5]="NOT_FOUND",Ao[Ao.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ao[Ao.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ao[Ao.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ao[Ao.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ao[Ao.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ao[Ao.ABORTED=10]="ABORTED",Ao[Ao.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ao[Ao.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ao[Ao.INTERNAL=13]="INTERNAL",Ao[Ao.UNAVAILABLE=14]="UNAVAILABLE",Ao[Ao.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class No{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,t))return s}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return void(r[s]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ns(this.inner,((e,n)=>{for(const[r,s]of n)t(r,s)}))}isEmpty(){return Rs(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new Os(ys.comparator);function Oo(){return Ro}const xo=new Os(ys.comparator);function Lo(...t){let e=xo;for(const n of t)e=e.insert(n.key,n);return e}function Mo(t){let e=xo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Po(){return Vo()}function Fo(){return Vo()}function Vo(){return new No((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Uo=new Os(ys.comparator),Bo=new Ms(ys.comparator);function jo(...t){let e=Bo;for(const n of t)e=e.add(n);return e}const $o=new Ms(ls);function Ho(){return $o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})();class qo{constructor(t,e){this.databaseId=t,this.dt=e}}function Go(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ko(t,e){return t.dt?e.toBase64():e.toUint8Array()}function zo(t,e){return Go(t,e.toTimestamp())}function Wo(t){return Xr(!!t),fs.fromTimestamp(function(t){const e=Bs(t);return new hs(e.seconds,e.nanos)}(t))}function Xo(t,e){return function(t){return new ps(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Jo(t){const e=ps.fromString(t);return Xr(ua(e)),e}function Qo(t,e){return Xo(t.databaseId,e.path)}function Yo(t){const e=Jo(t);return 4===e.length?ps.emptyPath():ta(e)}function Zo(t){return new ps(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ta(t){return Xr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ea(t,e,n){return{name:Qo(t,e),fields:n.value.mapValue.fields}}function na(t,e){let n;if(e instanceof wo)n={update:ea(t,e.key,e.value)};else if(e instanceof Co)n={delete:Qo(t,e.key)};else if(e instanceof bo)n={update:ea(t,e.key,e.data),updateMask:la(e.fieldMask)};else{if(!(e instanceof So))return Wr();n={verify:Qo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof to)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof eo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ro)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof io)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Wr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:zo(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Wr()}(t,e.precondition)),n}function ra(t,e){return t&&t.length>0?(Xr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Wo(t.updateTime):Wo(e);return n.isEqual(fs.min())&&(n=Wo(e)),new lo(n,t.transformResults||[])}(t,e)))):[]}function sa(t){let e=Yo(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Xr(1===r);const t=n.from[0];t.allDescendants?s=t.collectionId:e=e.child(t.collectionId)}let i=[];n.where&&(i=ia(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Ai(oa(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,zs(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new Ii(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new Ii(n,e)}(n.endAt)),Oi(e,s,o,i,a,"F",c,l)}function ia(t){return t?void 0!==t.unaryFilter?[ca(t)]:void 0!==t.fieldFilter?[aa(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>ia(t))).reduce(((t,e)=>t.concat(e))):Wr():[]}function oa(t){return ms.fromServerFormat(t.fieldPath)}function aa(t){return yi.create(oa(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Wr()}}(t.fieldFilter.op),t.fieldFilter.value)}function ca(t){switch(t.unaryFilter.op){case"IS_NAN":const e=oa(t.unaryFilter.field);return yi.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=oa(t.unaryFilter.field);return yi.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=oa(t.unaryFilter.field);return yi.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=oa(t.unaryFilter.field);return yi.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Wr()}}function la(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ua(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ha=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],fa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],da=fa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pa{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&go(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=mo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=mo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Fo();return this.mutations.forEach((r=>{const s=t.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=e.has(r.key)?null:o;const a=po(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(fs.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),jo())}isEqual(t){return this.batchId===t.batchId&&us(this.mutations,t.mutations,((t,e)=>vo(t,e)))&&us(this.baseMutations,t.baseMutations,((t,e)=>vo(t,e)))}}class ga{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Xr(t.mutations.length===n.length);let r=Uo;const s=t.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new ga(t,e,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ya{constructor(t){this.ne=t}}function va(t){const e=sa({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?Bi(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wa{constructor(){}re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(js(t.integerValue));else if("doubleValue"in t){const n=js(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),Ws(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de($s(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?ci(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):Wr()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const r of Object.keys(n))this.le(r,e),this.oe(n[r],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const r of n)this.oe(r,e)}_e(t,e){this.ce(e,37),ys.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}}wa.ye=new wa;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ba{constructor(){this.ze=new Ea}addToCollectionParentIndex(t,e){return this.ze.add(e),Is.resolve()}getCollectionParents(t,e){return Is.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return Is.resolve()}deleteFieldIndex(t,e){return Is.resolve()}getDocumentsMatchingTarget(t,e){return Is.resolve(null)}getIndexType(t,e){return Is.resolve(0)}getFieldIndexes(t,e){return Is.resolve([])}getNextCollectionGroupToUpdate(t){return Is.resolve(null)}getMinOffset(t,e){return Is.resolve(Es.min())}getMinOffsetFromCollectionGroup(t,e){return Is.resolve(Es.min())}updateCollectionGroup(t,e,n){return Is.resolve()}updateIndexEntries(t,e){return Is.resolve()}}class Ea{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Ms(ps.comparator),s=!r.has(n);return this.index[e]=r.add(n),s}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Ms(ps.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class _a{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new _a(t,_a.DEFAULT_COLLECTION_PERCENTILE,_a.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_a.DEFAULT_COLLECTION_PERCENTILE=10,_a.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_a.DEFAULT=new _a(41943040,_a.DEFAULT_COLLECTION_PERCENTILE,_a.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_a.DISABLED=new _a(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ta{constructor(t){this.En=t}next(){return this.En+=2,this.En}static An(){return new Ta(0)}static Rn(){return new Ta(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ca{constructor(){this.changes=new No((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,hi.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Is.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sa{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&mo(n.mutation,t,Fs.empty(),hs.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,jo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=jo()){const r=Po();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Lo();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Po();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,jo())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let s=Oo();const i=Vo(),o=Vo();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof bo)?s=s.insert(e.key,e):void 0!==o&&(i.set(e.key,o.mutation.getFieldMask()),mo(o.mutation,e,o.mutation.getFieldMask(),hs.now()))})),this.recalculateAndSaveOverlays(t,s).next((t=>(t.forEach(((t,e)=>i.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Sa(e,null!==(n=i.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Vo();let r=new Os(((t,e)=>t-e)),s=jo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const s of t)s.keys().forEach((t=>{const i=e.get(t);if(null===i)return;let o=n.get(t)||Fs.empty();o=s.applyToLocalView(i,o),n.set(t,o);const a=(r.get(s.batchId)||jo()).add(t);r=r.insert(s.batchId,a)}))})).next((()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,l=Fo();c.forEach((t=>{if(!s.has(t)){const r=po(e.get(t),n.get(t));null!==r&&l.set(t,r),s=s.add(t)}})),i.push(this.documentOverlayCache.saveOverlays(t,a,l))}return Is.waitFor(i)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return ys.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Fi(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-s.size):Is.resolve(Po());let o=-1,a=s;return i.next((e=>Is.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(e)?Is.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,s))).next((()=>this.computeViews(t,a,e,jo()))).next((t=>({batchId:o,changes:Mo(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ys(e)).next((t=>{let e=Lo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let s=Lo();return this.indexManager.getCollectionParents(t,r).next((i=>Is.forEach(i,(i=>{const o=function(t,e){return new Ri(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,i.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{s=s.insert(t,e)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((s=>(r=s,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,hi.newInvalidDocument(n)))}));let n=Lo();return r.forEach(((r,s)=>{const i=t.get(r);void 0!==i&&mo(i.mutation,s,Fs.empty(),hs.now()),qi(e,s)&&(n=n.insert(r,s))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Is.resolve(hi.newInvalidDocument(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return Is.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:Wo(n.createTime)}),Is.resolve()}getNamedQuery(t,e){return Is.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:va(t.bundledQuery),readTime:Wo(t.readTime)}}(e)),Is.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(){this.overlays=new Os(ys.comparator),this.Xn=new Map}getOverlay(t,e){return Is.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Po();return Is.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ie(t,e,r)})),Is.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),Is.resolve()}getOverlaysForCollection(t,e,n){const r=Po(),s=e.length+1,i=new ys(e.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const t=o.getNext().value,i=t.getKey();if(!e.isPrefixOf(i.path))break;i.path.length===s&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Is.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let s=new Os(((t,e)=>t-e));const i=this.overlays.getIterator();for(;i.hasNext();){const t=i.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=s.get(t.largestBatchId);null===e&&(e=Po(),s=s.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Po(),a=s.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Is.resolve(o)}ie(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ma(e,n));let s=this.Xn.get(e);void 0===s&&(s=jo(),this.Xn.set(e,s)),this.Xn.set(e,s.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(){this.Zn=new Ms(Na.ts),this.es=new Ms(Na.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Na(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new Na(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new ys(new ps([])),n=new Na(e,t),r=new Na(e,t+1),s=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),s.push(t.key)})),s}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new ys(new ps([])),n=new Na(e,t),r=new Na(e,t+1);let s=jo();return this.es.forEachInRange([n,r],(t=>{s=s.add(t.key)})),s}containsKey(t){const e=new Na(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Na{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return ys.comparator(t.key,e.key)||ls(t.ls,e.ls)}static ns(t,e){return ls(t.ls,e.ls)||ys.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new Ms(Na.ts)}checkEmpty(t){return Is.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const s=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new pa(s,e,n,r);this.mutationQueue.push(i);for(const o of r)this.ds=this.ds.add(new Na(o.key,s)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Is.resolve(i)}lookupMutationBatch(t,e){return Is.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ws(n),s=r<0?0:r;return Is.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Is.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return Is.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Na(e,0),r=new Na(e,Number.POSITIVE_INFINITY),s=[];return this.ds.forEachInRange([n,r],(t=>{const e=this._s(t.ls);s.push(e)})),Is.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Ms(ls);return e.forEach((t=>{const e=new Na(t,0),r=new Na(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),Is.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let s=n;ys.isDocumentKey(s)||(s=s.child(""));const i=new Na(new ys(s),0);let o=new Ms(ls);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),i),Is.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Xr(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Is.forEach(e.mutations,(r=>{const s=new Na(r.key,e.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new Na(e,0),r=this.ds.firstAfterOrEqual(n);return Is.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Is.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(t){this.ps=t,this.docs=new Os(ys.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),s=r?r.size:0,i=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Is.resolve(n?n.document.mutableCopy():hi.newInvalidDocument(e))}getEntries(t,e){let n=Oo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():hi.newInvalidDocument(t))})),Is.resolve(n)}getAllFromCollection(t,e,n){let r=Oo();const s=new ys(e.child("")),i=this.docs.getIteratorFrom(s);for(;i.hasNext();){const{key:t,value:{document:s}}=i.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||_s(bs(s),n)<=0||(r=r.insert(s.key,s.mutableCopy()))}return Is.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Wr()}Is(t,e){return Is.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new xa(this)}getSize(t){return Is.resolve(this.size)}}class xa extends Ca{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.zn.addEntry(t,r)):this.zn.removeEntry(n)})),Is.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(t){this.persistence=t,this.Ts=new No((t=>pi(t)),mi),this.lastRemoteSnapshotVersion=fs.min(),this.highestTargetId=0,this.Es=0,this.As=new Da,this.targetCount=0,this.Rs=Ta.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),Is.resolve()}getLastRemoteSnapshotVersion(t){return Is.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Is.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Is.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),Is.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Ta(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,Is.resolve()}updateTargetData(t,e){return this.vn(e),Is.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,Is.resolve()}removeTargets(t,e,n){let r=0;const s=[];return this.Ts.forEach(((i,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(i),s.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Is.waitFor(s).next((()=>r))}getTargetCount(t){return Is.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Is.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Is.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,s=[];return r&&e.forEach((e=>{s.push(r.markPotentiallyOrphaned(t,e))})),Is.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),Is.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Is.resolve(n)}containsKey(t,e){return Is.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(t,e){this.bs={},this.overlays={},this.Ps=new ks(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new La(this),this.indexManager=new ba,this.remoteDocumentCache=function(t){return new Oa(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new ya(e),this.Ds=new Aa(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ka,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new Ra(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){qr("MemoryPersistence","Starting transaction:",t);const r=new Pa(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((t=>this.referenceDelegate.xs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ns(t,e){return Is.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class Pa extends Cs{constructor(t){super(),this.currentSequenceNumber=t}}class Fa{constructor(t){this.persistence=t,this.ks=new Da,this.Os=null}static Ms(t){return new Fa(t)}get Fs(){if(this.Os)return this.Os;throw Wr()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),Is.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),Is.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),Is.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Is.forEach(this.Fs,(n=>{const r=ys.fromPath(n);return this.$s(t,r).next((t=>{t||e.removeEntry(r,fs.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return Is.or([()=>Is.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Va{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=r}static Vi(t,e){let n=jo(),r=jo();for(const s of e.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Va(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ci(t,e).next((s=>s||this.xi(t,e,r,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return Is.resolve(null)}xi(t,e,n,r){return Li(e)||r.isEqual(fs.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((s=>{const i=this.ki(e,s);return this.Oi(e,i,n,r)?this.Ni(t,e):(Hr()<=o["in"].DEBUG&&qr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Hi(e)),this.Mi(t,i,e,ws(r,-1)))}))}ki(t,e){let n=new Ms(Gi(t));return e.forEach(((e,r)=>{qi(t,r)&&(n=n.add(r))})),n}Oi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const s="F"===t.limitType?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ni(t,e){return Hr()<=o["in"].DEBUG&&qr("QueryEngine","Using full collection scan to execute query:",Hi(e)),this.Di.getDocumentsMatchingQuery(t,e,Es.min())}Mi(t,e,n,r){return this.Di.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(t,e,n,r){this.persistence=t,this.Fi=e,this.wt=r,this.$i=new Os(ls),this.Bi=new No((t=>pi(t)),mi),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Ia(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}function ja(t,e,n,r){return new Ba(t,e,n,r)}async function $a(t,e){const n=Jr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((s=>(r=s,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const s=[],i=[];let o=jo();for(const t of r){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:s,addedBatchIds:i})))}))}))}function Ha(t,e){const n=Jr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),s=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const s=n.batch,i=s.keys();let o=Is.resolve();return i.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const i=n.docVersions.get(t);Xr(null!==i),e.version.compareTo(i)<0&&(s.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,s)))}(n,t,e,s).next((()=>s.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=jo();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function qa(t){const e=Jr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function Ga(t,e){const n=Jr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class Ka{constructor(){this.activeTargetIds=Ho()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class za{constructor(){this.Fr=new Ka,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Ka,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){qr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){qr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(t){this.jr=t.jr,this.Wr=t.Wr}zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,r,s){const i=this.oo(t,e);qr("RestConnection","Sending: ",i,n);const o={};return this.uo(o,r,s),this.co(t,i,o,n).then((t=>(qr("RestConnection","Received: ",t),t)),(e=>{throw Kr("RestConnection",`${t} failed with error: `,e,"url: ",i,"request:",n),e}))}ao(t,e,n,r,s,i){return this.ro(t,e,n,r,s)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+jr,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Ja[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,r){return new Promise(((s,i)=>{const o=new Vr;o.listenOnce(xr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Or.NO_ERROR:const e=o.getResponseJson();qr("Connection","XHR received:",JSON.stringify(e)),s(e);break;case Or.TIMEOUT:qr("Connection",'RPC "'+t+'" timed out'),i(new Yr(Qr.DEADLINE_EXCEEDED,"Request time out"));break;case Or.HTTP_ERROR:const n=o.getStatus();if(qr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Qr).indexOf(e)>=0?e:Qr.UNKNOWN}(t.status);i(new Yr(e,t.message))}else i(new Yr(Qr.UNKNOWN,"Server responded with status "+o.getStatus()))}else i(new Yr(Qr.UNAVAILABLE,"Connection failed."));break;default:Wr()}}finally{qr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Nr(),i=Rr(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Pr({})),this.uo(o.initMessageHeaders,e,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");qr("Connection","Creating WebChannel: "+c,o);const l=s.createWebChannel(c,o);let u=!1,h=!1;const f=new Qa({jr:t=>{h?qr("Connection","Not sending because WebChannel is closed:",t):(u||(qr("Connection","Opening WebChannel transport."),l.open(),u=!0),qr("Connection","WebChannel sending:",t),l.send(t))},Wr:()=>l.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(l,Fr.EventType.OPEN,(()=>{h||qr("Connection","WebChannel transport opened.")})),d(l,Fr.EventType.CLOSE,(()=>{h||(h=!0,qr("Connection","WebChannel transport closed"),f.eo())})),d(l,Fr.EventType.ERROR,(t=>{h||(h=!0,Kr("Connection","WebChannel transport errored:",t),f.eo(new Yr(Qr.UNAVAILABLE,"The operation could not be completed")))})),d(l,Fr.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Xr(!!n);const r=n,s=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(s){qr("Connection","WebChannel received error:",s);const t=s.status;let e=function(t){const e=Io[t];if(void 0!==e)return Do(e)}(t),n=s.message;void 0===e&&(e=Qr.INTERNAL,n="Unknown error status: "+t+" with message "+s.message),h=!0,f.eo(new Yr(e,n)),l.close()}else qr("Connection","WebChannel received:",n),f.no(n)}})),d(i,Lr.STAT_EVENT,(t=>{t.stat===Mr.PROXY?qr("Connection","Detected buffering proxy"):t.stat===Mr.NOPROXY&&qr("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.Zr()}),0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t){return new qo(t,!0)}class ec{constructor(t,e,n=1e3,r=1.5,s=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=r,this._o=s,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,e-n);r>0&&qr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,e,n,r,s,i,o,a){this.js=t,this.Ao=n,this.Ro=r,this.bo=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new ec(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Qr.RESOURCE_EXHAUSTED?(Gr(e.toString()),Gr("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Qr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Yr(Qr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return qr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(qr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class rc extends nc{constructor(t,e,n,r,s,i){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,i),this.wt=s,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Xr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=ra(t.writeResults,t.commitTime),n=Wo(t.commitTime);return this.listener.Jo(n,e)}return Xr(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Zo(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>na(this.wt,t)))};this.Mo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new Yr(Qr.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.bo.ro(t,e,n,r,s))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Yr(Qr.UNKNOWN,t.toString())}))}ao(t,e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,i])=>this.bo.ao(t,e,n,s,i,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Yr(Qr.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class ic{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Gr(e),this.su=!1):qr("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(t,e,n,r,s){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=s,this.du.Br((t=>{n.enqueueAndForget((async()=>{lc(this)&&(qr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Jr(t);e.lu.add(4),await cc(e),e._u.set("Unknown"),e.lu.delete(4),await ac(e)}(this))}))})),this._u=new ic(n,r)}}async function ac(t){if(lc(t))for(const e of t.fu)await e(!0)}async function cc(t){for(const e of t.fu)await e(!1)}function lc(t){return 0===Jr(t).lu.size}async function uc(t,e,n){if(!As(e))throw e;t.lu.add(1),await cc(t),t._u.set("Offline"),n||(n=()=>qa(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{qr("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await ac(t)}))}function hc(t,e){return e().catch((n=>uc(t,n,e)))}async function fc(t){const e=Jr(t),n=Tc(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;dc(e);)try{const t=await Ga(e.localStore,r);if(null===t){0===e.au.length&&n.ko();break}r=t.batchId,pc(e,t)}catch(t){await uc(e,t)}gc(e)&&mc(e)}function dc(t){return lc(t)&&t.au.length<10}function pc(t,e){t.au.push(e);const n=Tc(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function gc(t){return lc(t)&&!Tc(t).Do()&&t.au.length>0}function mc(t){Tc(t).start()}async function yc(t){Tc(t).Xo()}async function vc(t){const e=Tc(t);for(const n of t.au)e.Ho(n.mutations)}async function wc(t,e,n){const r=t.au.shift(),s=ga.from(r,e,n);await hc(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await fc(t)}async function bc(t,e){e&&Tc(t).zo&&await async function(t,e){if(n=e.code,ko(n)&&n!==Qr.ABORTED){const n=t.au.shift();Tc(t).No(),await hc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await fc(t)}var n}(t,e),gc(t)&&mc(t)}async function Ec(t,e){const n=Jr(t);n.asyncQueue.verifyOperationInProgress(),qr("RemoteStore","RemoteStore received new credentials");const r=lc(n);n.lu.add(3),await cc(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await ac(n)}async function _c(t,e){const n=Jr(t);e?(n.lu.delete(2),await ac(n)):e||(n.lu.add(2),await cc(n),n._u.set("Unknown"))}function Tc(t){return t.gu||(t.gu=function(t,e,n){const r=Jr(t);return r.tu(),new rc(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:yc.bind(null,t),Jr:bc.bind(null,t),Yo:vc.bind(null,t),Jo:wc.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await fc(t)):(await t.gu.stop(),t.au.length>0&&(qr("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Cc{constructor(t,e,n,r,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,s){const i=Date.now()+n,o=new Cc(t,e,i,r,s);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Yr(Qr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sc(t,e){if(Gr("AsyncQueue",`${e}: ${t}`),As(t))return new Yr(Qr.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ic{constructor(){this.queries=new No((t=>$i(t)),ji),this.onlineState="Unknown",this.Tu=new Set}}function Ac(t){t.Tu.forEach((t=>{t.next()}))}class kc{constructor(t,e,n,r,s,i){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.Zu={},this.tc=new No((t=>$i(t)),ji),this.ec=new Map,this.nc=new Set,this.sc=new Os(ys.comparator),this.ic=new Map,this.rc=new Da,this.oc={},this.uc=new Map,this.cc=Ta.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function Dc(t,e,n){const r=Fc(t);try{const t=await function(t,e){const n=Jr(t),r=hs.now(),s=e.reduce(((t,e)=>t.add(e.key)),jo());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Oo(),c=jo();return n.Ui.getEntries(t,s).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((s=>{i=s;const o=[];for(const t of e){const e=yo(t,i.get(t.key).overlayedDocument);null!=e&&o.push(new bo(t.key,e,ui(e.value.mapValue),uo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(i,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Mo(i)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.oc[t.currentUser.toKey()];r||(r=new Os(ls)),r=r.insert(e,n),t.oc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Mc(r,t.changes),await fc(r.remoteStore)}catch(t){const e=Sc(t,"Failed to persist write");n.reject(e)}}function Nc(t,e,n){const r=Jr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.tc.forEach(((n,r)=>{const s=r.view.Eu(e);s.snapshot&&t.push(s.snapshot)})),function(t,e){const n=Jr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const s of n.listeners)s.Eu(e)&&(r=!0)})),r&&Ac(n)}(r.eventManager,e),t.length&&r.Zu.Go(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Rc(t,e){const n=Jr(t),r=e.batch.batchId;try{const t=await Ha(n.localStore,e);Lc(n,r,null),xc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Mc(n,t)}catch(t){await Ss(t)}}async function Oc(t,e,n){const r=Jr(t);try{const t=await function(t,e){const n=Jr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Xr(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Lc(r,e,n),xc(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Mc(r,t)}catch(n){await Ss(n)}}function xc(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function Lc(t,e,n){const r=Jr(t);let s=r.oc[r.currentUser.toKey()];if(s){const t=s.get(e);t&&(n?t.reject(n):t.resolve(),s=s.remove(e)),r.oc[r.currentUser.toKey()]=s}}async function Mc(t,e,n){const r=Jr(t),s=[],i=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((t,a)=>{o.push(r.hc(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),s.push(t);const e=Va.Vi(a.targetId,t);i.push(e)}})))})),await Promise.all(o),r.Zu.Go(s),await async function(t,e){const n=Jr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Is.forEach(e,(e=>Is.forEach(e.Pi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Is.forEach(e.vi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!As(t))throw t;qr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.$i.get(t),r=e.snapshotVersion,s=e.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(t,s)}}}(r.localStore,i))}async function Pc(t,e){const n=Jr(t);if(!n.currentUser.isEqual(e)){qr("SyncEngine","User change. New user:",e.toKey());const t=await $a(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new Yr(Qr.CANCELLED,e))}))})),t.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Mc(n,t.Ki)}}function Fc(t){const e=Jr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Rc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Oc.bind(null,e),e}class Vc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=tc(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return ja(this.persistence,new Ua,t.initialUser,this.wt)}_c(t){return new Ma(Fa.Ms,this.wt)}dc(t){return new za}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Uc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Nc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Pc.bind(null,this.syncEngine),await _c(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ic}createDatastore(t){const e=tc(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Ya(r));var r;return function(t,e,n,r){return new sc(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,s=t=>Nc(this.syncEngine,t,0),i=Xa.V()?new Xa:new Wa,new oc(e,n,r,s,i);var e,n,r,s,i}createSyncEngine(t,e){return function(t,e,n,r,s,i,o){const a=new kc(t,e,n,r,s,i);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Jr(t);qr("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await cc(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bc{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Br.UNAUTHENTICATED,this.clientId=cs.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{qr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(qr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Yr(Qr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Sc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function jc(t,e){t.asyncQueue.verifyOperationInProgress(),qr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await $a(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function $c(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Hc(t);qr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>Ec(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Ec(e.remoteStore,n))),t.onlineComponents=e}async function Hc(t){return t.offlineComponents||(qr("FirestoreClient","Using default OfflineComponentProvider"),await jc(t,new Vc)),t.offlineComponents}async function qc(t){return t.onlineComponents||(qr("FirestoreClient","Using default OnlineComponentProvider"),await $c(t,new Uc)),t.onlineComponents}function Gc(t){return qc(t).then((t=>t.syncEngine))}const Kc=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t,e,n){if(!n)throw new Yr(Qr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Wc(t,e,n,r){if(!0===e&&!0===r)throw new Yr(Qr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xc(t){if(!ys.isDocumentKey(t))throw new Yr(Qr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jc(t){if(ys.isDocumentKey(t))throw new Yr(Qr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qc(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Wr()}function Yc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Yr(Qr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qc(t);throw new Yr(Qr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zc{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new Yr(Qr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new Yr(Qr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Wc("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zc({}),this._settingsFrozen=!1,t instanceof Ks?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Yr(Qr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ks(t.options.projectId)}(t))}get app(){if(!this._app)throw new Yr(Qr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Yr(Qr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zc(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new es;switch(t.type){case"gapi":const e=t.client;return Xr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new ss(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Yr(Qr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Kc.get(t);e&&(qr("ComponentProvider","Removing Datastore"),Kc.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class el{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new el(this.firestore,t,this._key)}}class nl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new nl(this.firestore,t,this._query)}}class rl extends nl{constructor(t,e,n){super(t,e,xi(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new el(this.firestore,null,new ys(t))}withConverter(t){return new rl(this.firestore,t,this._path)}}function sl(t,e,...n){if(t=(0,a.m9)(t),zc("collection","path",e),t instanceof tl){const r=ps.fromString(e,...n);return Jc(r),new rl(t,null,r)}{if(!(t instanceof el||t instanceof rl))throw new Yr(Qr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ps.fromString(e,...n));return Jc(r),new rl(t.firestore,null,r)}}function il(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=cs.I()),zc("doc","path",e),t instanceof tl){const r=ps.fromString(e,...n);return Xc(r),new el(t,null,new ys(r))}{if(!(t instanceof el||t instanceof rl))throw new Yr(Qr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ps.fromString(e,...n));return Xc(r),new el(t.firestore,t instanceof rl?t.converter:null,new ys(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ol{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new ec(this,"async_queue_retry"),this.Kc=()=>{const t=Za();t&&qr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Za();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Za();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Zr;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(_){if(!As(_))throw _;qr("AsyncQueue","Operation failed with retryable error: "+_)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw Gr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const r=Cc.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(r),r}Gc(){this.Bc&&Wr()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class al extends tl{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new ol,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ul(this),this._firestoreClient.terminate()}}function cl(t=(0,s.Mq)()){return(0,s.qX)(t,"firestore").getImmediate()}function ll(t){return t._firestoreClient||ul(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ul(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Gs(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new Bc(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Yr(Qr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ms(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new fl(Vs.fromBase64String(t))}catch(t){throw new Yr(Qr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new fl(Vs.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Yr(Qr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Yr(Qr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return ls(this._lat,t._lat)||ls(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl=/^__.*__$/;class ml{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new bo(t,this.data,this.fieldMask,e,this.fieldTransforms):new wo(t,this.data,e,this.fieldTransforms)}}function yl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Wr()}}class vl{constructor(t,e,n,r,s,i){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Xc(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new vl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.sa(t),r}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return Dl(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(yl(this.Zc)&&gl.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class wl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||tc(t)}aa(t,e,n,r=!1){return new vl({Zc:t,methodName:e,ca:n,path:ms.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function bl(t){const e=t._freezeSettings(),n=tc(t._databaseId);return new wl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function El(t,e,n,r,s,i={}){const o=t.aa(i.merge||i.mergeFields?2:0,e,n,s);Sl("Data must be an object, but it was:",o,r);const a=Tl(r,o);let c,l;if(i.merge)c=new Fs(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const t=[];for(const r of i.mergeFields){const s=Il(e,r,n);if(!o.contains(s))throw new Yr(Qr.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);Nl(t,s)||t.push(s)}c=new Fs(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new ml(new li(a),c,l)}function _l(t,e){if(Cl(t=(0,a.m9)(t)))return Sl("Unsupported field value:",e,t),Tl(t,e);if(t instanceof dl)return function(t,e){if(!yl(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const s of t){let t=_l(s,e.ra(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Xi(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=hs.fromDate(t);return{timestampValue:Go(e.wt,n)}}if(t instanceof hs){const n=new hs(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Go(e.wt,n)}}if(t instanceof pl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof fl)return{bytesValue:Ko(e.wt,t._byteString)};if(t instanceof el){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Xo(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${Qc(t)}`)}(t,e)}function Tl(t,e){const n={};return Rs(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ns(t,((t,r)=>{const s=_l(r,e.ea(t));null!=s&&(n[t]=s)})),{mapValue:{fields:n}}}function Cl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof hs||t instanceof pl||t instanceof fl||t instanceof el||t instanceof dl)}function Sl(t,e,n){if(!Cl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Qc(n);throw"an object"===r?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function Il(t,e,n){if((e=(0,a.m9)(e))instanceof hl)return e._internalPath;if("string"==typeof e)return kl(t,e);throw Dl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Al=new RegExp("[~\\*/\\[\\]]");function kl(t,e,n){if(e.search(Al)>=0)throw Dl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hl(...e.split("."))._internalPath}catch(r){throw Dl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new Yr(Qr.INVALID_ARGUMENT,a+t+c)}function Nl(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Rl(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function Ol(t,e){const n=Yc(t.firestore,al),r=il(t),s=Rl(t.converter,e);return xl(n,[El(bl(t.firestore),"addDoc",r._key,s,null!==t.converter,{}).toMutation(r._key,uo.exists(!1))]).then((()=>r))}function xl(t,e){return function(t,e){const n=new Zr;return t.asyncQueue.enqueueAndForget((async()=>Dc(await Gc(t),e,n))),n.promise}(ll(t),e)}!function(t,e=!0){!function(t){jr=t}(s.Jn),(0,s.Xd)(new i.wA("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=new al(r,new ns(t.getProvider("auth-internal")),new os(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),s._setSettings(n),s}),"PUBLIC")),(0,s.KN)(Ur,"3.4.13",t),(0,s.KN)(Ur,"3.4.13","esm2017")}()},444:function(t,e,n){n.d(e,{BH:function(){return c},L:function(){return a},LL:function(){return b},Mn:function(){return g},ZR:function(){return w},b$:function(){return f},d:function(){return d},eu:function(){return y},hl:function(){return m},m9:function(){return S},ru:function(){return h},uI:function(){return u},vZ:function(){return T},w1:function(){return p}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=63&s|128):55296===(64512&s)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(s=65536+((1023&s)<<10)+(1023&t.charCodeAt(++r)),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=63&s|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=63&s|128)}return e},s=function(t){const e=[];let n=0,r=0;while(n<t.length){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((31&s)<<6|63&i)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((7&s)<<18|(63&i)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&s)<<12|(63&i)<<6|63&o)}}return e.join("")},i={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const e=t[s],i=s+1<t.length,o=i?t[s+1]:0,a=s+2<t.length,c=a?t[s+2]:0,l=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,i||(h=64)),r.push(n[l],n[u],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const e=n[t.charAt(s++)],i=s<t.length,o=i?n[t.charAt(s)]:0;++s;const a=s<t.length,c=a?n[t.charAt(s)]:64;++s;const l=s<t.length,u=l?n[t.charAt(s)]:64;if(++s,null==e||null==o||null==c||null==u)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==u){const t=c<<6&192|u;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return i.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function u(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function h(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function d(){return l().indexOf("Electron/")>=0}function p(){const t=l();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return l().indexOf("MSAppHost/")>=0}function m(){return"object"===typeof indexedDB}function y(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var t;e((null===(t=s.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v="FirebaseError";class w extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=v,Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,s=this.errors[t],i=s?E(s,n):"Error",o=`${this.serviceName}: ${i} (${r}).`,a=new w(r,o,n);return a}}function E(t,e){return t.replace(_,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const _=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const n=t[s],i=e[s];if(C(n)&&C(i)){if(!T(n,i))return!1}else if(n!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function C(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function S(t){return t&&t._delegate?t._delegate:t}},262:function(t,e,n){n.d(e,{Bj:function(){return i},Fl:function(){return Ht},IU:function(){return kt},Jd:function(){return T},PG:function(){return Ct},SU:function(){return Ut},Um:function(){return Et},WL:function(){return jt},X$:function(){return A},X3:function(){return At},XI:function(){return Pt},Xl:function(){return Dt},dq:function(){return Lt},iH:function(){return Mt},j:function(){return S},lk:function(){return C},qj:function(){return bt},qq:function(){return w},yT:function(){return It}});var r=n(577);let s;class i{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&s&&(this.parent=s,this.index=(s.scopes||(s.scopes=[])).push(this)-1)}run(t){if(this.active){const e=s;try{return s=this,t()}finally{s=e}}else 0}on(){s=this}off(){s=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function o(t,e=s){e&&e.active&&e.effects.push(t)}const a=t=>{const e=new Set(t);return e.w=0,e.n=0,e},c=t=>(t.w&p)>0,l=t=>(t.n&p)>0,u=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=p},h=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];c(s)&&!l(s)?s.delete(t):e[n++]=s,s.w&=~p,s.n&=~p}e.length=n}},f=new WeakMap;let d=0,p=1;const g=30;let m;const y=Symbol(""),v=Symbol("");class w{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let t=m,e=E;while(t){if(t===this)return;t=t.parent}try{return this.parent=m,m=this,E=!0,p=1<<++d,d<=g?u(this):b(this),this.fn()}finally{d<=g&&h(this),p=1<<--d,m=this.parent,E=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){m===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let E=!0;const _=[];function T(){_.push(E),E=!1}function C(){const t=_.pop();E=void 0===t||t}function S(t,e,n){if(E&&m){let e=f.get(t);e||f.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=a());const s=void 0;I(r,s)}}function I(t,e){let n=!1;d<=g?l(t)||(t.n|=p,n=!c(t)):n=!t.has(m),n&&(t.add(m),m.deps.push(t))}function A(t,e,n,s,i,o){const c=f.get(t);if(!c)return;let l=[];if("clear"===e)l=[...c.values()];else if("length"===n&&(0,r.kJ)(t))c.forEach(((t,e)=>{("length"===e||e>=s)&&l.push(t)}));else switch(void 0!==n&&l.push(c.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&l.push(c.get("length")):(l.push(c.get(y)),(0,r._N)(t)&&l.push(c.get(v)));break;case"delete":(0,r.kJ)(t)||(l.push(c.get(y)),(0,r._N)(t)&&l.push(c.get(v)));break;case"set":(0,r._N)(t)&&l.push(c.get(y));break}if(1===l.length)l[0]&&k(l[0]);else{const t=[];for(const e of l)e&&t.push(...e);k(a(t))}}function k(t,e){const n=(0,r.kJ)(t)?t:[...t];for(const r of n)r.computed&&D(r,e);for(const r of n)r.computed||D(r,e)}function D(t,e){(t!==m||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),R=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk)),O=F(),x=F(!1,!0),L=F(!0),M=P();function P(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=kt(this);for(let e=0,s=this.length;e<s;e++)S(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(kt)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){T();const n=kt(this)[e].apply(this,t);return C(),n}})),t}function F(t=!1,e=!1){return function(n,s,i){if("__v_isReactive"===s)return!t;if("__v_isReadonly"===s)return t;if("__v_isShallow"===s)return e;if("__v_raw"===s&&i===(t?e?yt:mt:e?gt:pt).get(n))return n;const o=(0,r.kJ)(n);if(!t&&o&&(0,r.RI)(M,s))return Reflect.get(M,s,i);const a=Reflect.get(n,s,i);return((0,r.yk)(s)?R.has(s):N(s))?a:(t||S(n,"get",s),e?a:Lt(a)?o&&(0,r.S0)(s)?a:a.value:(0,r.Kn)(a)?t?_t(a):bt(a):a)}}const V=B(),U=B(!0);function B(t=!1){return function(e,n,s,i){let o=e[n];if(St(o)&&Lt(o)&&!Lt(s))return!1;if(!t&&!St(s)&&(It(s)||(s=kt(s),o=kt(o)),!(0,r.kJ)(e)&&Lt(o)&&!Lt(s)))return o.value=s,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),c=Reflect.set(e,n,s,i);return e===kt(i)&&(a?(0,r.aU)(s,o)&&A(e,"set",n,s,o):A(e,"add",n,s)),c}}function j(t,e){const n=(0,r.RI)(t,e),s=t[e],i=Reflect.deleteProperty(t,e);return i&&n&&A(t,"delete",e,void 0,s),i}function $(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&R.has(e)||S(t,"has",e),n}function H(t){return S(t,"iterate",(0,r.kJ)(t)?"length":y),Reflect.ownKeys(t)}const q={get:O,set:V,deleteProperty:j,has:$,ownKeys:H},G={get:L,set(t,e){return!0},deleteProperty(t,e){return!0}},K=(0,r.l7)({},q,{get:x,set:U}),z=t=>t,W=t=>Reflect.getPrototypeOf(t);function X(t,e,n=!1,r=!1){t=t["__v_raw"];const s=kt(t),i=kt(e);n||(e!==i&&S(s,"get",e),S(s,"get",i));const{has:o}=W(s),a=r?z:n?Rt:Nt;return o.call(s,e)?a(t.get(e)):o.call(s,i)?a(t.get(i)):void(t!==s&&t.get(e))}function J(t,e=!1){const n=this["__v_raw"],r=kt(n),s=kt(t);return e||(t!==s&&S(r,"has",t),S(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Q(t,e=!1){return t=t["__v_raw"],!e&&S(kt(t),"iterate",y),Reflect.get(t,"size",t)}function Y(t){t=kt(t);const e=kt(this),n=W(e),r=n.has.call(e,t);return r||(e.add(t),A(e,"add",t,t)),this}function Z(t,e){e=kt(e);const n=kt(this),{has:s,get:i}=W(n);let o=s.call(n,t);o||(t=kt(t),o=s.call(n,t));const a=i.call(n,t);return n.set(t,e),o?(0,r.aU)(e,a)&&A(n,"set",t,e,a):A(n,"add",t,e),this}function tt(t){const e=kt(this),{has:n,get:r}=W(e);let s=n.call(e,t);s||(t=kt(t),s=n.call(e,t));const i=r?r.call(e,t):void 0,o=e.delete(t);return s&&A(e,"delete",t,void 0,i),o}function et(){const t=kt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&A(t,"clear",void 0,void 0,n),r}function nt(t,e){return function(n,r){const s=this,i=s["__v_raw"],o=kt(i),a=e?z:t?Rt:Nt;return!t&&S(o,"iterate",y),i.forEach(((t,e)=>n.call(r,a(t),a(e),s)))}}function rt(t,e,n){return function(...s){const i=this["__v_raw"],o=kt(i),a=(0,r._N)(o),c="entries"===t||t===Symbol.iterator&&a,l="keys"===t&&a,u=i[t](...s),h=n?z:e?Rt:Nt;return!e&&S(o,"iterate",l?v:y),{next(){const{value:t,done:e}=u.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function st(t){return function(...e){return"delete"!==t&&this}}function it(){const t={get(t){return X(this,t)},get size(){return Q(this)},has:J,add:Y,set:Z,delete:tt,clear:et,forEach:nt(!1,!1)},e={get(t){return X(this,t,!1,!0)},get size(){return Q(this)},has:J,add:Y,set:Z,delete:tt,clear:et,forEach:nt(!1,!0)},n={get(t){return X(this,t,!0)},get size(){return Q(this,!0)},has(t){return J.call(this,t,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:nt(!0,!1)},r={get(t){return X(this,t,!0,!0)},get size(){return Q(this,!0)},has(t){return J.call(this,t,!0)},add:st("add"),set:st("set"),delete:st("delete"),clear:st("clear"),forEach:nt(!0,!0)},s=["keys","values","entries",Symbol.iterator];return s.forEach((s=>{t[s]=rt(s,!1,!1),n[s]=rt(s,!0,!1),e[s]=rt(s,!1,!0),r[s]=rt(s,!0,!0)})),[t,n,e,r]}const[ot,at,ct,lt]=it();function ut(t,e){const n=e?t?lt:ct:t?at:ot;return(e,s,i)=>"__v_isReactive"===s?!t:"__v_isReadonly"===s?t:"__v_raw"===s?e:Reflect.get((0,r.RI)(n,s)&&s in e?n:e,s,i)}const ht={get:ut(!1,!1)},ft={get:ut(!1,!0)},dt={get:ut(!0,!1)};const pt=new WeakMap,gt=new WeakMap,mt=new WeakMap,yt=new WeakMap;function vt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:vt((0,r.W7)(t))}function bt(t){return St(t)?t:Tt(t,!1,q,ht,pt)}function Et(t){return Tt(t,!1,K,ft,gt)}function _t(t){return Tt(t,!0,G,dt,mt)}function Tt(t,e,n,s,i){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=i.get(t);if(o)return o;const a=wt(t);if(0===a)return t;const c=new Proxy(t,2===a?s:n);return i.set(t,c),c}function Ct(t){return St(t)?Ct(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function St(t){return!(!t||!t["__v_isReadonly"])}function It(t){return!(!t||!t["__v_isShallow"])}function At(t){return Ct(t)||St(t)}function kt(t){const e=t&&t["__v_raw"];return e?kt(e):t}function Dt(t){return(0,r.Nj)(t,"__v_skip",!0),t}const Nt=t=>(0,r.Kn)(t)?bt(t):t,Rt=t=>(0,r.Kn)(t)?_t(t):t;function Ot(t){E&&m&&(t=kt(t),I(t.dep||(t.dep=a())))}function xt(t,e){t=kt(t),t.dep&&k(t.dep)}function Lt(t){return!(!t||!0!==t.__v_isRef)}function Mt(t){return Ft(t,!1)}function Pt(t){return Ft(t,!0)}function Ft(t,e){return Lt(t)?t:new Vt(t,e)}class Vt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:kt(t),this._value=e?t:Nt(t)}get value(){return Ot(this),this._value}set value(t){t=this.__v_isShallow?t:kt(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Nt(t),xt(this,t))}}function Ut(t){return Lt(t)?t.value:t}const Bt={get:(t,e,n)=>Ut(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Lt(s)&&!Lt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function jt(t){return Ct(t)?t:new Proxy(t,Bt)}class $t{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new w(t,(()=>{this._dirty||(this._dirty=!0,xt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=kt(this);return Ot(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Ht(t,e,n=!1){let s,i;const o=(0,r.mf)(t);o?(s=t,i=r.dG):(s=t.get,i=t.set);const a=new $t(s,i,o||!i,n);return a}},252:function(t,e,n){n.d(e,{$d:function(){return o},Cn:function(){return j},FN:function(){return gn},Fl:function(){return Rn},HY:function(){return Me},JJ:function(){return Q},P$:function(){return ct},Q6:function(){return pt},U2:function(){return ut},Uk:function(){return rn},Us:function(){return De},Wm:function(){return Ze},Y3:function(){return _},Y8:function(){return it},YP:function(){return tt},_:function(){return Ye},aZ:function(){return gt},dD:function(){return B},f3:function(){return Y},h:function(){return On},iD:function(){return Ke},ic:function(){return Nt},nK:function(){return dt},uE:function(){return sn},up:function(){return Bt},w5:function(){return $},wg:function(){return je},wy:function(){return Ft}});var r=n(262),s=n(577);function i(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){a(i,e,n)}return s}function o(t,e,n,r){if((0,s.mf)(t)){const o=i(t,e,n,r);return o&&(0,s.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let s=0;s<t.length;s++)c.push(o(t[s],e,n,r));return c}function a(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const s=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,s,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void i(a,null,10,[t,s,o])}c(t,n,s,r)}function c(t,e,n,r=!0){console.error(t)}let l=!1,u=!1;const h=[];let f=0;const d=[];let p=null,g=0;const m=[];let y=null,v=0;const w=Promise.resolve();let b=null,E=null;function _(t){const e=b||w;return t?e.then(this?t.bind(this):t):e}function T(t){let e=f+1,n=h.length;while(e<n){const r=e+n>>>1,s=O(h[r]);s<t?e=r+1:n=r}return e}function C(t){h.length&&h.includes(t,l&&t.allowRecurse?f+1:f)||t===E||(null==t.id?h.push(t):h.splice(T(t.id),0,t),S())}function S(){l||u||(u=!0,b=w.then(x))}function I(t){const e=h.indexOf(t);e>f&&h.splice(e,1)}function A(t,e,n,r){(0,s.kJ)(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?r+1:r)||n.push(t),S()}function k(t){A(t,p,d,g)}function D(t){A(t,y,m,v)}function N(t,e=null){if(d.length){for(E=e,p=[...new Set(d)],d.length=0,g=0;g<p.length;g++)p[g]();p=null,g=0,E=null,N(t,e)}}function R(t){if(N(),m.length){const t=[...new Set(m)];if(m.length=0,y)return void y.push(...t);for(y=t,y.sort(((t,e)=>O(t)-O(e))),v=0;v<y.length;v++)y[v]();y=null,v=0}}const O=t=>null==t.id?1/0:t.id;function x(t){u=!1,l=!0,N(t),h.sort(((t,e)=>O(t)-O(e)));s.dG;try{for(f=0;f<h.length;f++){const t=h[f];t&&!1!==t.active&&i(t,null,14)}}finally{f=0,h.length=0,R(t),l=!1,b=null,(h.length||d.length||m.length)&&x(t)}}new Set;new Map;function L(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||s.kT;let i=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||s.kT;o&&(i=n.map((t=>t.trim()))),e&&(i=n.map(s.He))}let l;let u=r[l=(0,s.hR)(e)]||r[l=(0,s.hR)((0,s._A)(e))];!u&&a&&(u=r[l=(0,s.hR)((0,s.rs)(e))]),u&&o(u,t,6,i);const h=r[l+"Once"];if(h){if(t.emitted){if(t.emitted[l])return}else t.emitted={};t.emitted[l]=!0,o(h,t,6,i)}}function M(t,e,n=!1){const r=e.emitsCache,i=r.get(t);if(void 0!==i)return i;const o=t.emits;let a={},c=!1;if(!(0,s.mf)(t)){const r=t=>{const n=M(t,e,!0);n&&(c=!0,(0,s.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,s.kJ)(o)?o.forEach((t=>a[t]=null)):(0,s.l7)(a,o),r.set(t,a),a):(r.set(t,null),null)}function P(t,e){return!(!t||!(0,s.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,s.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,s.RI)(t,(0,s.rs)(e))||(0,s.RI)(t,e))}let F=null,V=null;function U(t){const e=F;return F=t,V=t&&t.type.__scopeId||null,e}function B(t){V=t}function j(){V=null}function $(t,e=F,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&qe(-1);const s=U(e),i=t(...n);return U(s),r._d&&qe(1),i};return r._n=!0,r._c=!0,r._d=!0,r}function H(t){const{type:e,vnode:n,proxy:r,withProxy:i,props:o,propsOptions:[c],slots:l,attrs:u,emit:h,render:f,renderCache:d,data:p,setupState:g,ctx:m,inheritAttrs:y}=t;let v,w;const b=U(t);try{if(4&n.shapeFlag){const t=i||r;v=on(f.call(t,t,d,o,g,p,m)),w=u}else{const t=e;0,v=on(t.length>1?t(o,{attrs:u,slots:l,emit:h}):t(o,null)),w=e.props?u:q(u)}}catch(_){Ue.length=0,a(_,t,1),v=Ze(Fe)}let E=v;if(w&&!1!==y){const t=Object.keys(w),{shapeFlag:e}=E;t.length&&7&e&&(c&&t.some(s.tR)&&(w=G(w,c)),E=nn(E,w))}return n.dirs&&(E=nn(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),v=E,U(b),v}const q=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,s.F7)(n))&&((e||(e={}))[n]=t[n]);return e},G=(t,e)=>{const n={};for(const r in t)(0,s.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function K(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!s&&!a||a&&a.$stable)||r!==o&&(r?!o||z(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?z(r,o,l):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!P(l,n))return!0}}return!1}function z(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!P(n,i))return!0}return!1}function W({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const X=t=>t.__isSuspense;function J(t,e){e&&e.pendingBranch?(0,s.kJ)(t)?e.effects.push(...t):e.effects.push(t):D(t)}function Q(t,e){if(pn){let n=pn.provides;const r=pn.parent&&pn.parent.provides;r===n&&(n=pn.provides=Object.create(r)),n[t]=e}else 0}function Y(t,e,n=!1){const r=pn||F;if(r){const i=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&(0,s.mf)(e)?e.call(r.proxy):e}else 0}const Z={};function tt(t,e,n){return et(t,e,n)}function et(t,e,{immediate:n,deep:a,flush:c,onTrack:l,onTrigger:u}=s.kT){const h=pn;let f,d,p=!1,g=!1;if((0,r.dq)(t)?(f=()=>t.value,p=(0,r.yT)(t)):(0,r.PG)(t)?(f=()=>t,a=!0):(0,s.kJ)(t)?(g=!0,p=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),f=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?st(t):(0,s.mf)(t)?i(t,h,2):void 0))):f=(0,s.mf)(t)?e?()=>i(t,h,2):()=>{if(!h||!h.isUnmounted)return d&&d(),o(t,h,3,[m])}:s.dG,e&&a){const t=f;f=()=>st(t())}let m=t=>{d=b.onStop=()=>{i(t,h,4)}};if(En)return m=s.dG,e?n&&o(e,h,3,[f(),g?[]:void 0,m]):f(),s.dG;let y=g?[]:Z;const v=()=>{if(b.active)if(e){const t=b.run();(a||p||(g?t.some(((t,e)=>(0,s.aU)(t,y[e]))):(0,s.aU)(t,y)))&&(d&&d(),o(e,h,3,[t,y===Z?void 0:y,m]),y=t)}else b.run()};let w;v.allowRecurse=!!e,w="sync"===c?v:"post"===c?()=>ke(v,h&&h.suspense):()=>k(v);const b=new r.qq(f,w);return e?n?v():y=b.run():"post"===c?ke(b.run.bind(b),h&&h.suspense):b.run(),()=>{b.stop(),h&&h.scope&&(0,s.Od)(h.scope.effects,b)}}function nt(t,e,n){const r=this.proxy,i=(0,s.HD)(t)?t.includes(".")?rt(r,t):()=>r[t]:t.bind(r,r);let o;(0,s.mf)(e)?o=e:(o=e.handler,n=e);const a=pn;mn(this);const c=et(i,o.bind(r),n);return a?mn(a):yn(),c}function rt(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function st(t,e){if(!(0,s.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))st(t.value,e);else if((0,s.kJ)(t))for(let n=0;n<t.length;n++)st(t[n],e);else if((0,s.DM)(t)||(0,s._N)(t))t.forEach((t=>{st(t,e)}));else if((0,s.PO)(t))for(const n in t)st(t[n],e);return t}function it(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kt((()=>{t.isMounted=!0})),Rt((()=>{t.isUnmounting=!0})),t}const ot=[Function,Array],at={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ot,onEnter:ot,onAfterEnter:ot,onEnterCancelled:ot,onBeforeLeave:ot,onLeave:ot,onAfterLeave:ot,onLeaveCancelled:ot,onBeforeAppear:ot,onAppear:ot,onAfterAppear:ot,onAppearCancelled:ot},setup(t,{slots:e}){const n=gn(),s=it();let i;return()=>{const o=e.default&&pt(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==Fe){0,a=e,t=!0;break}}const c=(0,r.IU)(t),{mode:l}=c;if(s.isLeaving)return ht(a);const u=ft(a);if(!u)return ht(a);const h=ut(u,c,s,n);dt(u,h);const f=n.subTree,d=f&&ft(f);let p=!1;const{getTransitionKey:g}=u.type;if(g){const t=g();void 0===i?i=t:t!==i&&(i=t,p=!0)}if(d&&d.type!==Fe&&(!We(u,d)||p)){const t=ut(d,c,s,n);if(dt(d,t),"out-in"===l)return s.isLeaving=!0,t.afterLeave=()=>{s.isLeaving=!1,n.update()},ht(a);"in-out"===l&&u.type!==Fe&&(t.delayLeave=(t,e,n)=>{const r=lt(s,d);r[String(d.key)]=d,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ct=at;function lt(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ut(t,e,n,r){const{appear:i,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:b}=e,E=String(t.key),_=lt(n,t),T=(t,e)=>{t&&o(t,r,9,e)},C=(t,e)=>{const n=e[1];T(t,e),(0,s.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(e){let r=l;if(!n.isMounted){if(!i)return;r=y||l}e._leaveCb&&e._leaveCb(!0);const s=_[E];s&&We(t,s)&&s.el._leaveCb&&s.el._leaveCb(),T(r,[e])},enter(t){let e=u,r=h,s=f;if(!n.isMounted){if(!i)return;e=v||u,r=w||h,s=b||f}let o=!1;const a=t._enterCb=e=>{o||(o=!0,T(e?s:r,[t]),S.delayedLeave&&S.delayedLeave(),t._enterCb=void 0)};e?C(e,[t,a]):a()},leave(e,r){const s=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();T(d,[e]);let i=!1;const o=e._leaveCb=n=>{i||(i=!0,r(),T(n?m:g,[e]),e._leaveCb=void 0,_[s]===t&&delete _[s])};_[s]=t,p?C(p,[e,o]):o()},clone(t){return ut(t,e,n,r)}};return S}function ht(t){if(yt(t))return t=nn(t),t.children=null,t}function ft(t){return yt(t)?t.children?t.children[0]:void 0:t}function dt(t,e){6&t.shapeFlag&&t.component?dt(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pt(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:i);o.type===Me?(128&o.patchFlag&&s++,r=r.concat(pt(o.children,e,a))):(e||o.type!==Fe)&&r.push(null!=a?nn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function gt(t){return(0,s.mf)(t)?{setup:t,name:t.name}:t}const mt=t=>!!t.type.__asyncLoader;const yt=t=>t.type.__isKeepAlive;RegExp,RegExp;function vt(t,e){return(0,s.kJ)(t)?t.some((t=>vt(t,e))):(0,s.HD)(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function wt(t,e){Et(t,"a",e)}function bt(t,e){Et(t,"da",e)}function Et(t,e,n=pn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(St(e,r,n),n){let t=n.parent;while(t&&t.parent)yt(t.parent.vnode)&&_t(r,e,n,t),t=t.parent}}function _t(t,e,n,r){const i=St(e,t,r,!0);Ot((()=>{(0,s.Od)(r[e],i)}),n)}function Tt(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function Ct(t){return 128&t.shapeFlag?t.ssContent:t}function St(t,e,n=pn,s=!1){if(n){const i=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...s)=>{if(n.isUnmounted)return;(0,r.Jd)(),mn(n);const i=o(e,n,t,s);return yn(),(0,r.lk)(),i});return s?i.unshift(a):i.push(a),a}}const It=t=>(e,n=pn)=>(!En||"sp"===t)&&St(t,e,n),At=It("bm"),kt=It("m"),Dt=It("bu"),Nt=It("u"),Rt=It("bum"),Ot=It("um"),xt=It("sp"),Lt=It("rtg"),Mt=It("rtc");function Pt(t,e=pn){St("ec",t,e)}function Ft(t,e){const n=F;if(null===n)return t;const r=kn(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=s.kT]=e[o];(0,s.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&st(n),i.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function Vt(t,e,n,s){const i=t.dirs,a=e&&e.dirs;for(let c=0;c<i.length;c++){const l=i[c];a&&(l.oldValue=a[c].value);let u=l.dir[s];u&&((0,r.Jd)(),o(u,n,8,[t.el,l,t,e]),(0,r.lk)())}}const Ut="components";function Bt(t,e){return $t(Ut,t,!0,e)||t}const jt=Symbol();function $t(t,e,n=!0,r=!1){const i=F||pn;if(i){const n=i.type;if(t===Ut){const t=Dn(n,!1);if(t&&(t===e||t===(0,s._A)(e)||t===(0,s.kC)((0,s._A)(e))))return n}const o=Ht(i[t]||n[t],e)||Ht(i.appContext[t],e);return!o&&r?n:o}}function Ht(t,e){return t&&(t[e]||t[(0,s._A)(e)]||t[(0,s.kC)((0,s._A)(e))])}const qt=t=>t?vn(t)?kn(t)||t.proxy:qt(t.parent):null,Gt=(0,s.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qt(t.parent),$root:t=>qt(t.root),$emit:t=>t.emit,$options:t=>Yt(t),$forceUpdate:t=>t.f||(t.f=()=>C(t.update)),$nextTick:t=>t.n||(t.n=_.bind(t.proxy)),$watch:t=>nt.bind(t)}),Kt={get({_:t},e){const{ctx:n,setupState:i,data:o,props:a,accessCache:c,type:l,appContext:u}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return i[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(i!==s.kT&&(0,s.RI)(i,e))return c[e]=1,i[e];if(o!==s.kT&&(0,s.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,s.RI)(h,e))return c[e]=3,a[e];if(n!==s.kT&&(0,s.RI)(n,e))return c[e]=4,n[e];zt&&(c[e]=0)}}const f=Gt[e];let d,p;return f?("$attrs"===e&&(0,r.j)(t,"get",e),f(t)):(d=l.__cssModules)&&(d=d[e])?d:n!==s.kT&&(0,s.RI)(n,e)?(c[e]=4,n[e]):(p=u.config.globalProperties,(0,s.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:i,ctx:o}=t;return i!==s.kT&&(0,s.RI)(i,e)?(i[e]=n,!0):r!==s.kT&&(0,s.RI)(r,e)?(r[e]=n,!0):!(0,s.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:i,propsOptions:o}},a){let c;return!!n[a]||t!==s.kT&&(0,s.RI)(t,a)||e!==s.kT&&(0,s.RI)(e,a)||(c=o[0])&&(0,s.RI)(c,a)||(0,s.RI)(r,a)||(0,s.RI)(Gt,a)||(0,s.RI)(i.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,s.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let zt=!0;function Wt(t){const e=Yt(t),n=t.proxy,i=t.ctx;zt=!1,e.beforeCreate&&Jt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:E,unmounted:_,render:T,renderTracked:C,renderTriggered:S,errorCaptured:I,serverPrefetch:A,expose:k,inheritAttrs:D,components:N,directives:R,filters:O}=e,x=null;if(h&&Xt(h,i,x,t.appContext.config.unwrapInjectedRef),c)for(const r in c){const t=c[r];(0,s.mf)(t)&&(i[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,s.Kn)(e)&&(t.data=(0,r.qj)(e))}if(zt=!0,a)for(const r in a){const t=a[r],e=(0,s.mf)(t)?t.bind(n,n):(0,s.mf)(t.get)?t.get.bind(n,n):s.dG;0;const o=!(0,s.mf)(t)&&(0,s.mf)(t.set)?t.set.bind(n):s.dG,c=Rn({get:e,set:o});Object.defineProperty(i,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(l)for(const r in l)Qt(l[r],i,n,r);if(u){const t=(0,s.mf)(u)?u.call(n):u;Reflect.ownKeys(t).forEach((e=>{Q(e,t[e])}))}function L(t,e){(0,s.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&Jt(f,t,"c"),L(At,d),L(kt,p),L(Dt,g),L(Nt,m),L(wt,y),L(bt,v),L(Pt,I),L(Mt,C),L(Lt,S),L(Rt,b),L(Ot,_),L(xt,A),(0,s.kJ)(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===s.dG&&(t.render=T),null!=D&&(t.inheritAttrs=D),N&&(t.components=N),R&&(t.directives=R)}function Xt(t,e,n=s.dG,i=!1){(0,s.kJ)(t)&&(t=re(t));for(const o in t){const n=t[o];let a;a=(0,s.Kn)(n)?"default"in n?Y(n.from||o,n.default,!0):Y(n.from||o):Y(n),(0,r.dq)(a)&&i?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function Jt(t,e,n){o((0,s.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Qt(t,e,n,r){const i=r.includes(".")?rt(n,r):()=>n[r];if((0,s.HD)(t)){const n=e[t];(0,s.mf)(n)&&tt(i,n)}else if((0,s.mf)(t))tt(i,t.bind(n));else if((0,s.Kn)(t))if((0,s.kJ)(t))t.forEach((t=>Qt(t,e,n,r)));else{const r=(0,s.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,s.mf)(r)&&tt(i,r,t)}else 0}function Yt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:s.length||n||r?(c={},s.length&&s.forEach((t=>Zt(c,t,o,!0))),Zt(c,e,o)):c=e,i.set(e,c),c}function Zt(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Zt(t,i,n,!0),s&&s.forEach((e=>Zt(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=te[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const te={data:ee,props:ie,emits:ie,methods:ie,computed:ie,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:ie,directives:ie,watch:oe,provide:ee,inject:ne};function ee(t,e){return e?t?function(){return(0,s.l7)((0,s.mf)(t)?t.call(this,this):t,(0,s.mf)(e)?e.call(this,this):e)}:e:t}function ne(t,e){return ie(re(t),re(e))}function re(t){if((0,s.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function se(t,e){return t?[...new Set([].concat(t,e))]:e}function ie(t,e){return t?(0,s.l7)((0,s.l7)(Object.create(null),t),e):e}function oe(t,e){if(!t)return e;if(!e)return t;const n=(0,s.l7)(Object.create(null),t);for(const r in e)n[r]=se(t[r],e[r]);return n}function ae(t,e,n,i=!1){const o={},a={};(0,s.Nj)(a,Xe,1),t.propsDefaults=Object.create(null),le(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=i?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function ce(t,e,n,i){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,l=(0,r.IU)(o),[u]=t.propsOptions;let h=!1;if(!(i||c>0)||16&c){let r;le(t,e,o,a)&&(h=!0);for(const i in l)e&&((0,s.RI)(e,i)||(r=(0,s.rs)(i))!==i&&(0,s.RI)(e,r))||(u?!n||void 0===n[i]&&void 0===n[r]||(o[i]=ue(u,l,i,void 0,t,!0)):delete o[i]);if(a!==l)for(const t in a)e&&(0,s.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let i=n[r];if(P(t.emitsOptions,i))continue;const c=e[i];if(u)if((0,s.RI)(a,i))c!==a[i]&&(a[i]=c,h=!0);else{const e=(0,s._A)(i);o[e]=ue(u,l,e,c,t,!1)}else c!==a[i]&&(a[i]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function le(t,e,n,i){const[o,a]=t.propsOptions;let c,l=!1;if(e)for(let r in e){if((0,s.Gg)(r))continue;const u=e[r];let h;o&&(0,s.RI)(o,h=(0,s._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:P(t.emitsOptions,r)||r in i&&u===i[r]||(i[r]=u,l=!0)}if(a){const e=(0,r.IU)(n),i=c||s.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=ue(o,e,c,i[c],t,!(0,s.RI)(i,c))}}return l}function ue(t,e,n,r,i,o){const a=t[n];if(null!=a){const t=(0,s.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&(0,s.mf)(t)){const{propsDefaults:s}=i;n in s?r=s[n]:(mn(i),r=s[n]=t.call(null,e),yn())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,s.rs)(n)||(r=!0))}return r}function he(t,e,n=!1){const r=e.propsCache,i=r.get(t);if(i)return i;const o=t.props,a={},c=[];let l=!1;if(!(0,s.mf)(t)){const r=t=>{l=!0;const[n,r]=he(t,e,!0);(0,s.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!l)return r.set(t,s.Z6),s.Z6;if((0,s.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,s._A)(o[h]);fe(t)&&(a[t]=s.kT)}else if(o){0;for(const t in o){const e=(0,s._A)(t);if(fe(e)){const n=o[t],r=a[e]=(0,s.kJ)(n)||(0,s.mf)(n)?{type:n}:n;if(r){const t=ge(Boolean,r.type),n=ge(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,s.RI)(r,"default"))&&c.push(e)}}}}const u=[a,c];return r.set(t,u),u}function fe(t){return"$"!==t[0]}function de(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function pe(t,e){return de(t)===de(e)}function ge(t,e){return(0,s.kJ)(e)?e.findIndex((e=>pe(e,t))):(0,s.mf)(e)&&pe(e,t)?0:-1}const me=t=>"_"===t[0]||"$stable"===t,ye=t=>(0,s.kJ)(t)?t.map(on):[on(t)],ve=(t,e,n)=>{if(e._n)return e;const r=$(((...t)=>ye(e(...t))),n);return r._c=!1,r},we=(t,e,n)=>{const r=t._ctx;for(const i in t){if(me(i))continue;const n=t[i];if((0,s.mf)(n))e[i]=ve(i,n,r);else if(null!=n){0;const t=ye(n);e[i]=()=>t}}},be=(t,e)=>{const n=ye(e);t.slots.default=()=>n},Ee=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,s.Nj)(e,"_",n)):we(e,t.slots={})}else t.slots={},e&&be(t,e);(0,s.Nj)(t.slots,Xe,1)},_e=(t,e,n)=>{const{vnode:r,slots:i}=t;let o=!0,a=s.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,s.l7)(i,e),n||1!==t||delete i._):(o=!e.$stable,we(e,i)),a=e}else e&&(be(t,e),a={default:1});if(o)for(const s in i)me(s)||s in a||delete i[s]};function Te(){return{app:null,config:{isNativeTag:s.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ce=0;function Se(t,e){return function(n,r=null){(0,s.mf)(n)||(n=Object.assign({},n)),null==r||(0,s.Kn)(r)||(r=null);const i=Te(),o=new Set;let a=!1;const c=i.app={_uid:Ce++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:xn,get config(){return i.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,s.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,s.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return i.mixins.includes(t)||i.mixins.push(t),c},component(t,e){return e?(i.components[t]=e,c):i.components[t]},directive(t,e){return e?(i.directives[t]=e,c):i.directives[t]},mount(s,o,l){if(!a){0;const u=Ze(n,r);return u.appContext=i,o&&e?e(u,s):t(u,s,l),a=!0,c._container=s,s.__vue_app__=c,kn(u.component)||u.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return i.provides[t]=e,c}};return c}}function Ie(t,e,n,o,a=!1){if((0,s.kJ)(t))return void t.forEach(((t,r)=>Ie(t,e&&((0,s.kJ)(e)?e[r]:e),n,o,a)));if(mt(o)&&!a)return;const c=4&o.shapeFlag?kn(o.component)||o.component.proxy:o.el,l=a?null:c,{i:u,r:h}=t;const f=e&&e.r,d=u.refs===s.kT?u.refs={}:u.refs,p=u.setupState;if(null!=f&&f!==h&&((0,s.HD)(f)?(d[f]=null,(0,s.RI)(p,f)&&(p[f]=null)):(0,r.dq)(f)&&(f.value=null)),(0,s.mf)(h))i(h,u,12,[l,d]);else{const e=(0,s.HD)(h),i=(0,r.dq)(h);if(e||i){const r=()=>{if(t.f){const n=e?d[h]:h.value;a?(0,s.kJ)(n)&&(0,s.Od)(n,c):(0,s.kJ)(n)?n.includes(c)||n.push(c):e?(d[h]=[c],(0,s.RI)(p,h)&&(p[h]=d[h])):(h.value=[c],t.k&&(d[t.k]=h.value))}else e?(d[h]=l,(0,s.RI)(p,h)&&(p[h]=l)):i&&(h.value=l,t.k&&(d[t.k]=l))};l?(r.id=-1,ke(r,n)):r()}else 0}}function Ae(){}const ke=J;function De(t){return Ne(t)}function Ne(t,e){Ae();const n=(0,s.E9)();n.__VUE__=!0;const{insert:i,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=s.dG,cloneNode:m,insertStaticContent:y}=t,v=(t,e,n,r=null,s=null,i=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!We(t,e)&&(r=Z(t),z(t,s,i,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=e;switch(l){case Pe:w(t,e,n,r);break;case Fe:b(t,e,n,r);break;case Ve:null==t&&E(e,n,r,o);break;case Me:M(t,e,n,r,s,i,o,a,c);break;default:1&h?S(t,e,n,r,s,i,o,a,c):6&h?P(t,e,n,r,s,i,o,a,c):(64&h||128&h)&&l.process(t,e,n,r,s,i,o,a,c,et)}null!=u&&s&&Ie(u,t&&t.ref,i,e||t,!e)},w=(t,e,n,r)=>{if(null==t)i(e.el=l(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?i(e.el=u(e.children||""),n,r):e.el=t.el},E=(t,e,n,r)=>{[t.el,t.anchor]=y(t.children,e,n,r,t.el,t.anchor)},_=({el:t,anchor:e},n,r)=>{let s;while(t&&t!==e)s=p(t),i(t,n,r),t=s;i(e,n,r)},T=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},S=(t,e,n,r,s,i,o,a,c)=>{o=o||"svg"===e.type,null==t?A(e,n,r,s,i,o,a,c):O(t,e,s,i,o,a,c)},A=(t,e,n,r,o,l,u,h)=>{let d,p;const{type:g,props:y,shapeFlag:v,transition:w,patchFlag:b,dirs:E}=t;if(t.el&&void 0!==m&&-1===b)d=t.el=m(t.el);else{if(d=t.el=c(t.type,l,y&&y.is,y),8&v?f(d,t.children):16&v&&D(t.children,d,null,r,o,l&&"foreignObject"!==g,u,h),E&&Vt(t,null,r,"created"),y){for(const e in y)"value"===e||(0,s.Gg)(e)||a(d,e,null,y[e],l,t.children,r,o,Y);"value"in y&&a(d,"value",null,y.value),(p=y.onVnodeBeforeMount)&&un(p,r,t)}k(d,t,t.scopeId,u,r)}E&&Vt(t,null,r,"beforeMount");const _=(!o||o&&!o.pendingBranch)&&w&&!w.persisted;_&&w.beforeEnter(d),i(d,e,n),((p=y&&y.onVnodeMounted)||_||E)&&ke((()=>{p&&un(p,r,t),_&&w.enter(d),E&&Vt(t,null,r,"mounted")}),o)},k=(t,e,n,r,s)=>{if(n&&g(t,n),r)for(let i=0;i<r.length;i++)g(t,r[i]);if(s){let n=s.subTree;if(e===n){const e=s.vnode;k(t,e,e.scopeId,e.slotScopeIds,s.parent)}}},D=(t,e,n,r,s,i,o,a,c=0)=>{for(let l=c;l<t.length;l++){const c=t[l]=a?an(t[l]):on(t[l]);v(null,c,e,n,r,s,i,o,a)}},O=(t,e,n,r,i,o,c)=>{const l=e.el=t.el;let{patchFlag:u,dynamicChildren:h,dirs:d}=e;u|=16&t.patchFlag;const p=t.props||s.kT,g=e.props||s.kT;let m;n&&Re(n,!1),(m=g.onVnodeBeforeUpdate)&&un(m,n,e,t),d&&Vt(e,t,n,"beforeUpdate"),n&&Re(n,!0);const y=i&&"foreignObject"!==e.type;if(h?x(t.dynamicChildren,h,l,n,r,y,o):c||j(t,e,l,null,n,r,y,o,!1),u>0){if(16&u)L(l,e,p,g,n,r,i);else if(2&u&&p.class!==g.class&&a(l,"class",null,g.class,i),4&u&&a(l,"style",p.style,g.style,i),8&u){const s=e.dynamicProps;for(let e=0;e<s.length;e++){const o=s[e],c=p[o],u=g[o];u===c&&"value"!==o||a(l,o,c,u,i,t.children,n,r,Y)}}1&u&&t.children!==e.children&&f(l,e.children)}else c||null!=h||L(l,e,p,g,n,r,i);((m=g.onVnodeUpdated)||d)&&ke((()=>{m&&un(m,n,e,t),d&&Vt(e,t,n,"updated")}),r)},x=(t,e,n,r,s,i,o)=>{for(let a=0;a<e.length;a++){const c=t[a],l=e[a],u=c.el&&(c.type===Me||!We(c,l)||70&c.shapeFlag)?d(c.el):n;v(c,l,u,null,r,s,i,o,!0)}},L=(t,e,n,r,i,o,c)=>{if(n!==r){for(const l in r){if((0,s.Gg)(l))continue;const u=r[l],h=n[l];u!==h&&"value"!==l&&a(t,l,h,u,c,e.children,i,o,Y)}if(n!==s.kT)for(const l in n)(0,s.Gg)(l)||l in r||a(t,l,n[l],null,c,e.children,i,o,Y);"value"in r&&a(t,"value",n.value,r.value)}},M=(t,e,n,r,s,o,a,c,u)=>{const h=e.el=t?t.el:l(""),f=e.anchor=t?t.anchor:l("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(i(h,n,r),i(f,n,r),D(e.children,n,f,s,o,a,c,u)):d>0&&64&d&&p&&t.dynamicChildren?(x(t.dynamicChildren,p,n,s,o,a,c),(null!=e.key||s&&e===s.subTree)&&Oe(t,e,!0)):j(t,e,n,f,s,o,a,c,u)},P=(t,e,n,r,s,i,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?s.ctx.activate(e,n,r,o,c):F(e,n,r,s,i,o,c):V(t,e,c)},F=(t,e,n,r,s,i,o)=>{const a=t.component=dn(t,r,s);if(yt(t)&&(a.ctx.renderer=et),_n(a),a.asyncDep){if(s&&s.registerDep(a,U),!t.el){const t=a.subTree=Ze(Fe);b(null,t,e,n)}}else U(a,t,e,n,s,i,o)},V=(t,e,n)=>{const r=e.component=t.component;if(K(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void B(r,e,n);r.next=e,I(r.update),r.update()}else e.el=t.el,r.vnode=e},U=(t,e,n,i,o,a,c)=>{const l=()=>{if(t.isMounted){let e,{next:n,bu:r,u:i,parent:l,vnode:u}=t,h=n;0,Re(t,!1),n?(n.el=u.el,B(t,n,c)):n=u,r&&(0,s.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&un(e,l,n,u),Re(t,!0);const f=H(t);0;const p=t.subTree;t.subTree=f,v(p,f,d(p.el),Z(p),t,o,a),n.el=f.el,null===h&&W(t,f.el),i&&ke(i,o),(e=n.props&&n.props.onVnodeUpdated)&&ke((()=>un(e,l,n,u)),o)}else{let r;const{el:c,props:l}=e,{bm:u,m:h,parent:f}=t,d=mt(e);if(Re(t,!1),u&&(0,s.ir)(u),!d&&(r=l&&l.onVnodeBeforeMount)&&un(r,f,e),Re(t,!0),c&&rt){const n=()=>{t.subTree=H(t),rt(c,t.subTree,t,o,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=H(t);0,v(null,r,n,i,t,o,a),e.el=r.el}if(h&&ke(h,o),!d&&(r=l&&l.onVnodeMounted)){const t=e;ke((()=>un(r,f,t)),o)}(256&e.shapeFlag||f&&mt(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&ke(t.a,o),t.isMounted=!0,e=n=i=null}},u=t.effect=new r.qq(l,(()=>C(h)),t.scope),h=t.update=()=>u.run();h.id=t.uid,Re(t,!0),h()},B=(t,e,n)=>{e.component=t;const s=t.vnode.props;t.vnode=e,t.next=null,ce(t,e.props,s,n),_e(t,e.children,n),(0,r.Jd)(),N(void 0,t.update),(0,r.lk)()},j=(t,e,n,r,s,i,o,a,c=!1)=>{const l=t&&t.children,u=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void q(l,h,n,r,s,i,o,a,c);if(256&d)return void $(l,h,n,r,s,i,o,a,c)}8&p?(16&u&&Y(l,s,i),h!==l&&f(n,h)):16&u?16&p?q(l,h,n,r,s,i,o,a,c):Y(l,s,i,!0):(8&u&&f(n,""),16&p&&D(h,n,r,s,i,o,a,c))},$=(t,e,n,r,i,o,a,c,l)=>{t=t||s.Z6,e=e||s.Z6;const u=t.length,h=e.length,f=Math.min(u,h);let d;for(d=0;d<f;d++){const r=e[d]=l?an(e[d]):on(e[d]);v(t[d],r,n,null,i,o,a,c,l)}u>h?Y(t,i,o,!0,!1,f):D(e,n,r,i,o,a,c,l,f)},q=(t,e,n,r,i,o,a,c,l)=>{let u=0;const h=e.length;let f=t.length-1,d=h-1;while(u<=f&&u<=d){const r=t[u],s=e[u]=l?an(e[u]):on(e[u]);if(!We(r,s))break;v(r,s,n,null,i,o,a,c,l),u++}while(u<=f&&u<=d){const r=t[f],s=e[d]=l?an(e[d]):on(e[d]);if(!We(r,s))break;v(r,s,n,null,i,o,a,c,l),f--,d--}if(u>f){if(u<=d){const t=d+1,s=t<h?e[t].el:r;while(u<=d)v(null,e[u]=l?an(e[u]):on(e[u]),n,s,i,o,a,c,l),u++}}else if(u>d)while(u<=f)z(t[u],i,o,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=d;u++){const t=e[u]=l?an(e[u]):on(e[u]);null!=t.key&&m.set(t.key,u)}let y,w=0;const b=d-g+1;let E=!1,_=0;const T=new Array(b);for(u=0;u<b;u++)T[u]=0;for(u=p;u<=f;u++){const r=t[u];if(w>=b){z(r,i,o,!0);continue}let s;if(null!=r.key)s=m.get(r.key);else for(y=g;y<=d;y++)if(0===T[y-g]&&We(r,e[y])){s=y;break}void 0===s?z(r,i,o,!0):(T[s-g]=u+1,s>=_?_=s:E=!0,v(r,e[s],n,null,i,o,a,c,l),w++)}const C=E?xe(T):s.Z6;for(y=C.length-1,u=b-1;u>=0;u--){const t=g+u,s=e[t],f=t+1<h?e[t+1].el:r;0===T[u]?v(null,s,n,f,i,o,a,c,l):E&&(y<0||u!==C[y]?G(s,n,f,2):y--)}}},G=(t,e,n,r,s=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=t;if(6&u)return void G(t.component.subTree,e,n,r);if(128&u)return void t.suspense.move(e,n,r);if(64&u)return void a.move(t,e,n,et);if(a===Me){i(o,e,n);for(let t=0;t<l.length;t++)G(l[t],e,n,r);return void i(t.anchor,e,n)}if(a===Ve)return void _(t,e,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(o),i(o,e,n),ke((()=>c.enter(o)),s);else{const{leave:t,delayLeave:r,afterLeave:s}=c,a=()=>i(o,e,n),l=()=>{t(o,(()=>{a(),s&&s()}))};r?r(o,a,l):l()}else i(o,e,n)},z=(t,e,n,r=!1,s=!1)=>{const{type:i,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:f}=t;if(null!=a&&Ie(a,null,n,t,!0),256&u)return void e.ctx.deactivate(t);const d=1&u&&f,p=!mt(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&un(g,e,t),6&u)Q(t.component,n,r);else{if(128&u)return void t.suspense.unmount(n,r);d&&Vt(t,null,e,"beforeUnmount"),64&u?t.type.remove(t,e,n,s,et,r):l&&(i!==Me||h>0&&64&h)?Y(l,e,n,!1,!0):(i===Me&&384&h||!s&&16&u)&&Y(c,e,n),r&&X(t)}(p&&(g=o&&o.onVnodeUnmounted)||d)&&ke((()=>{g&&un(g,e,t),d&&Vt(t,null,e,"unmounted")}),n)},X=t=>{const{type:e,el:n,anchor:r,transition:s}=t;if(e===Me)return void J(n,r);if(e===Ve)return void T(t);const i=()=>{o(n),s&&!s.persisted&&s.afterLeave&&s.afterLeave()};if(1&t.shapeFlag&&s&&!s.persisted){const{leave:e,delayLeave:r}=s,o=()=>e(n,i);r?r(t.el,i,o):o()}else i()},J=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Q=(t,e,n)=>{const{bum:r,scope:i,update:o,subTree:a,um:c}=t;r&&(0,s.ir)(r),i.stop(),o&&(o.active=!1,z(a,t,e,n)),c&&ke(c,e),ke((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Y=(t,e,n,r=!1,s=!1,i=0)=>{for(let o=i;o<t.length;o++)z(t[o],e,n,r,s)},Z=t=>6&t.shapeFlag?Z(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),tt=(t,e,n)=>{null==t?e._vnode&&z(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),R(),e._vnode=t},et={p:v,um:z,m:G,r:X,mt:F,mc:D,pc:j,pbc:x,n:Z,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:Se(tt,nt)}}function Re({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Oe(t,e,n=!1){const r=t.children,i=e.children;if((0,s.kJ)(r)&&(0,s.kJ)(i))for(let s=0;s<r.length;s++){const t=r[s];let e=i[s];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=i[s]=an(i[s]),e.el=t.el),n||Oe(t,e))}}function xe(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}i=0,o=n.length-1;while(i<o)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}i=n.length,o=n[i-1];while(i-- >0)n[i]=o,o=e[o];return n}const Le=t=>t.__isTeleport;const Me=Symbol(void 0),Pe=Symbol(void 0),Fe=Symbol(void 0),Ve=Symbol(void 0),Ue=[];let Be=null;function je(t=!1){Ue.push(Be=t?null:[])}function $e(){Ue.pop(),Be=Ue[Ue.length-1]||null}let He=1;function qe(t){He+=t}function Ge(t){return t.dynamicChildren=He>0?Be||s.Z6:null,$e(),He>0&&Be&&Be.push(t),t}function Ke(t,e,n,r,s,i){return Ge(Ye(t,e,n,r,s,i,!0))}function ze(t){return!!t&&!0===t.__v_isVNode}function We(t,e){return t.type===e.type&&t.key===e.key}const Xe="__vInternal",Je=({key:t})=>null!=t?t:null,Qe=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,s.HD)(t)||(0,r.dq)(t)||(0,s.mf)(t)?{i:F,r:t,k:e,f:!!n}:t:null;function Ye(t,e=null,n=null,r=0,i=null,o=(t===Me?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Je(e),ref:e&&Qe(e),scopeId:V,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null};return c?(cn(l,n),128&o&&t.normalize(l)):n&&(l.shapeFlag|=(0,s.HD)(n)?8:16),He>0&&!a&&Be&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&Be.push(l),l}const Ze=tn;function tn(t,e=null,n=null,i=0,o=null,a=!1){if(t&&t!==jt||(t=Fe),ze(t)){const r=nn(t,e,!0);return n&&cn(r,n),He>0&&!a&&Be&&(6&r.shapeFlag?Be[Be.indexOf(t)]=r:Be.push(r)),r.patchFlag|=-2,r}if(Nn(t)&&(t=t.__vccOpts),e){e=en(e);let{class:t,style:n}=e;t&&!(0,s.HD)(t)&&(e.class=(0,s.C_)(t)),(0,s.Kn)(n)&&((0,r.X3)(n)&&!(0,s.kJ)(n)&&(n=(0,s.l7)({},n)),e.style=(0,s.j5)(n))}const c=(0,s.HD)(t)?1:X(t)?128:Le(t)?64:(0,s.Kn)(t)?4:(0,s.mf)(t)?2:0;return Ye(t,e,n,i,o,c,a,!0)}function en(t){return t?(0,r.X3)(t)||Xe in t?(0,s.l7)({},t):t:null}function nn(t,e,n=!1){const{props:r,ref:i,patchFlag:o,children:a}=t,c=e?ln(r||{},e):r,l={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Je(c),ref:e&&e.ref?n&&i?(0,s.kJ)(i)?i.concat(Qe(e)):[i,Qe(e)]:Qe(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Me?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&nn(t.ssContent),ssFallback:t.ssFallback&&nn(t.ssFallback),el:t.el,anchor:t.anchor};return l}function rn(t=" ",e=0){return Ze(Pe,null,t,e)}function sn(t,e){const n=Ze(Ve,null,t);return n.staticCount=e,n}function on(t){return null==t||"boolean"===typeof t?Ze(Fe):(0,s.kJ)(t)?Ze(Me,null,t.slice()):"object"===typeof t?an(t):Ze(Pe,null,String(t))}function an(t){return null===t.el||t.memo?t:nn(t)}function cn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,s.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),cn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Xe in e?3===r&&F&&(1===F.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=F}}else(0,s.mf)(e)?(e={default:e,_ctx:F},n=32):(e=String(e),64&r?(n=16,e=[rn(e)]):n=8);t.children=e,t.shapeFlag|=n}function ln(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,s.C_)([e.class,r.class]));else if("style"===t)e.style=(0,s.j5)([e.style,r.style]);else if((0,s.F7)(t)){const n=e[t],i=r[t];!i||n===i||(0,s.kJ)(n)&&n.includes(i)||(e[t]=n?[].concat(n,i):i)}else""!==t&&(e[t]=r[t])}return e}function un(t,e,n,r=null){o(t,e,7,[n,r])}const hn=Te();let fn=0;function dn(t,e,n){const i=t.type,o=(e?e.appContext:t.appContext)||hn,a={uid:fn++,vnode:t,type:i,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:he(i,o),emitsOptions:M(i,o),emit:null,emitted:null,propsDefaults:s.kT,inheritAttrs:i.inheritAttrs,ctx:s.kT,data:s.kT,props:s.kT,attrs:s.kT,slots:s.kT,refs:s.kT,setupState:s.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=L.bind(null,a),t.ce&&t.ce(a),a}let pn=null;const gn=()=>pn||F,mn=t=>{pn=t,t.scope.on()},yn=()=>{pn&&pn.scope.off(),pn=null};function vn(t){return 4&t.vnode.shapeFlag}let wn,bn,En=!1;function _n(t,e=!1){En=e;const{props:n,children:r}=t.vnode,s=vn(t);ae(t,n,s,e),Ee(t,r);const i=s?Tn(t,e):void 0;return En=!1,i}function Tn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,Kt));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?An(t):null;mn(t),(0,r.Jd)();const c=i(o,t,0,[t.props,n]);if((0,r.lk)(),yn(),(0,s.tI)(c)){if(c.then(yn,yn),e)return c.then((n=>{Cn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else Cn(t,c,e)}else Sn(t,e)}function Cn(t,e,n){(0,s.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,s.Kn)(e)&&(t.setupState=(0,r.WL)(e)),Sn(t,n)}function Sn(t,e,n){const i=t.type;if(!t.render){if(!e&&wn&&!i.render){const e=i.template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=i,c=(0,s.l7)((0,s.l7)({isCustomElement:n,delimiters:o},r),a);i.render=wn(e,c)}}t.render=i.render||s.dG,bn&&bn(t)}mn(t),(0,r.Jd)(),Wt(t),(0,r.lk)(),yn()}function In(t){return new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}})}function An(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=In(t))},slots:t.slots,emit:t.emit,expose:e}}function kn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in Gt?Gt[n](t):void 0}}))}function Dn(t,e=!0){return(0,s.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function Nn(t){return(0,s.mf)(t)&&"__vccOpts"in t}const Rn=(t,e)=>(0,r.Fl)(t,e,En);function On(t,e,n){const r=arguments.length;return 2===r?(0,s.Kn)(e)&&!(0,s.kJ)(e)?ze(e)?Ze(t,null,[e]):Ze(t,e):Ze(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&ze(n)&&(n=[n]),Ze(t,e,n))}Symbol("");const xn="3.2.37"},963:function(t,e,n){n.d(e,{F8:function(){return ot},iM:function(){return it},nr:function(){return nt},ri:function(){return ht},uT:function(){return F}});var r=n(577),s=n(252);n(262);const i="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?o.createElementNS(i,t):o.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&s.setAttribute("multiple",r.multiple),s},createText:t=>o.createTextNode(t),createComment:t=>o.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>o.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling)){while(1)if(e.insertBefore(s.cloneNode(!0),n),s===i||!(s=s.nextSibling))break}else{a.innerHTML=r?`<svg>${t}</svg>`:t;const s=a.content;if(r){const t=s.firstChild;while(t.firstChild)s.appendChild(t.firstChild);s.removeChild(t)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function l(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function u(t,e,n){const s=t.style,i=(0,r.HD)(n);if(n&&!i){for(const t in n)f(s,t,n[t]);if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&f(s,t,"")}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const h=/\s*!important$/;function f(t,e,n){if((0,r.kJ)(n))n.forEach((n=>f(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=g(t,e);h.test(n)?t.setProperty((0,r.rs)(s),n.replace(h,""),"important"):t[s]=n}}const d=["Webkit","Moz","ms"],p={};function g(t,e){const n=p[e];if(n)return n;let s=(0,r._A)(e);if("filter"!==s&&s in t)return p[e]=s;s=(0,r.kC)(s);for(let r=0;r<d.length;r++){const n=d[r]+s;if(n in t)return p[e]=n}return e}const m="http://www.w3.org/1999/xlink";function y(t,e,n,s,i){if(s&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(m,e.slice(6,e.length)):t.setAttributeNS(m,e,n);else{const s=(0,r.Pq)(e);null==n||s&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function v(t,e,n,s,i,o,a){if("innerHTML"===e||"textContent"===e)return s&&a(s,i,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const s=typeof t[e];"boolean"===s?n=(0,r.yA)(n):null==n&&"string"===s?(n="",c=!0):"number"===s&&(n=0,c=!0)}try{t[e]=n}catch(l){0}c&&t.removeAttribute(e)}const[w,b]=(()=>{let t=Date.now,e=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let E=0;const _=Promise.resolve(),T=()=>{E=0},C=()=>E||(_.then(T),E=w());function S(t,e,n,r){t.addEventListener(e,n,r)}function I(t,e,n,r){t.removeEventListener(e,n,r)}function A(t,e,n,r,s=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[n,a]=D(e);if(r){const o=i[e]=N(r,s);S(t,n,o,a)}else o&&(I(t,n,o,a),i[e]=void 0)}}const k=/(?:Once|Passive|Capture)$/;function D(t){let e;if(k.test(t)){let n;e={};while(n=t.match(k))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[(0,r.rs)(t.slice(2)),e]}function N(t,e){const n=t=>{const r=t.timeStamp||w();(b||r>=n.attached-1)&&(0,s.$d)(R(t,n.value),e,5,[t])};return n.value=t,n.attached=C(),n}function R(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const O=/^on[a-z]/,x=(t,e,n,s,i=!1,o,a,c,h)=>{"class"===e?l(t,s,i):"style"===e?u(t,n,s):(0,r.F7)(e)?(0,r.tR)(e)||A(t,e,n,s,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):L(t,e,s,i))?v(t,e,s,o,a,c,h):("true-value"===e?t._trueValue=s:"false-value"===e&&(t._falseValue=s),y(t,e,s,i))};function L(t,e,n,s){return s?"innerHTML"===e||"textContent"===e||!!(e in t&&O.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!O.test(e)||!(0,r.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const M="transition",P="animation",F=(t,{slots:e})=>(0,s.h)(s.P$,j(t),e);F.displayName="Transition";const V={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},U=(F.props=(0,r.l7)({},s.P$.props,V),(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)}),B=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function j(t){const e={};for(const r in t)r in V||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:s,duration:i,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=$(i),m=g&&g[0],y=g&&g[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:E,onLeaveCancelled:_,onBeforeAppear:T=v,onAppear:C=w,onAppearCancelled:S=b}=e,I=(t,e,n)=>{G(t,e?h:c),G(t,e?u:a),n&&n()},A=(t,e)=>{t._isLeaving=!1,G(t,f),G(t,p),G(t,d),e&&e()},k=t=>(e,n)=>{const r=t?C:w,i=()=>I(e,t,n);U(r,[e,i]),K((()=>{G(e,t?l:o),q(e,t?h:c),B(r)||W(e,s,m,i)}))};return(0,r.l7)(e,{onBeforeEnter(t){U(v,[t]),q(t,o),q(t,a)},onBeforeAppear(t){U(T,[t]),q(t,l),q(t,u)},onEnter:k(!1),onAppear:k(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>A(t,e);q(t,f),Y(),q(t,d),K((()=>{t._isLeaving&&(G(t,f),q(t,p),B(E)||W(t,s,y,n))})),U(E,[t,n])},onEnterCancelled(t){I(t,!1),U(b,[t])},onAppearCancelled(t){I(t,!0),U(S,[t])},onLeaveCancelled(t){A(t),U(_,[t])}})}function $(t){if(null==t)return null;if((0,r.Kn)(t))return[H(t.enter),H(t.leave)];{const e=H(t);return[e,e]}}function H(t){const e=(0,r.He)(t);return e}function q(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function G(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function K(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let z=0;function W(t,e,n,r){const s=t._endId=++z,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=X(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),i()},f=e=>{e.target===t&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),t.addEventListener(l,f)}function X(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),s=r(M+"Delay"),i=r(M+"Duration"),o=J(s,i),a=r(P+"Delay"),c=r(P+"Duration"),l=J(a,c);let u=null,h=0,f=0;e===M?o>0&&(u=M,h=o,f=i.length):e===P?l>0&&(u=P,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?M:P:null,f=u?u===M?i.length:c.length:0);const d=u===M&&/\b(transform|all)(,|$)/.test(n[M+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:d}}function J(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>Q(e)+Q(t[n]))))}function Q(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Y(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};function tt(t){t.target.composing=!0}function et(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nt={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=Z(i);const o=s||i.props&&"number"===i.props.type;S(t,e?"change":"input",(e=>{if(e.target.composing)return;let s=t.value;n&&(s=s.trim()),o&&(s=(0,r.He)(s)),t._assign(s)})),n&&S(t,"change",(()=>{t.value=t.value.trim()})),e||(S(t,"compositionstart",tt),S(t,"compositionend",et),S(t,"change",et))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},o){if(t._assign=Z(o),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(s&&t.value.trim()===e)return;if((i||"number"===t.type)&&(0,r.He)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const rt=["ctrl","shift","alt","meta"],st={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>rt.some((n=>t[`${n}Key`]&&!e.includes(n)))},it=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=st[e[t]];if(r&&r(n,e))return}return t(n,...r)},ot={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):at(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),at(t,!0),r.enter(t)):r.leave(t,(()=>{at(t,!1)})):at(t,e))},beforeUnmount(t,{value:e}){at(t,e)}};function at(t,e){t.style.display=e?t._vod:"none"}const ct=(0,r.l7)({patchProp:x},c);let lt;function ut(){return lt||(lt=(0,s.Us)(ct))}const ht=(...t)=>{const e=ut().createApp(...t);const{mount:n}=e;return e.mount=t=>{const s=ft(t);if(!s)return;const i=e._component;(0,r.mf)(i)||i.render||i.template||(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function ft(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}},577:function(t,e,n){function r(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{C_:function(){return d},DM:function(){return O},E9:function(){return rt},F7:function(){return C},Gg:function(){return q},HD:function(){return M},He:function(){return et},Kn:function(){return F},NO:function(){return _},Nj:function(){return tt},Od:function(){return A},PO:function(){return $},Pq:function(){return a},RI:function(){return D},S0:function(){return H},W7:function(){return j},WV:function(){return g},Z6:function(){return b},_A:function(){return z},_N:function(){return R},aU:function(){return Y},dG:function(){return E},e1:function(){return i},fY:function(){return r},hR:function(){return Q},hq:function(){return m},ir:function(){return Z},j5:function(){return l},kC:function(){return J},kJ:function(){return N},kT:function(){return w},l7:function(){return I},mf:function(){return L},rs:function(){return X},tI:function(){return V},tR:function(){return S},yA:function(){return c},yk:function(){return P},zw:function(){return y}});const s="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",i=r(s);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function l(t){if(N(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=M(r)?f(r):l(r);if(s)for(const t in s)e[t]=s[t]}return e}return M(t)||F(t)?t:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function f(t){const e={};return t.split(u).forEach((t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function d(t){let e="";if(M(t))e=t;else if(N(t))for(let n=0;n<t.length;n++){const r=d(t[n]);r&&(e+=r+" ")}else if(F(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=g(t[r],e[r]);return n}function g(t,e){if(t===e)return!0;let n=x(t),r=x(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=P(t),r=P(e),n||r)return t===e;if(n=N(t),r=N(e),n||r)return!(!n||!r)&&p(t,e);if(n=F(t),r=F(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const n in t){const r=t.hasOwnProperty(n),s=e.hasOwnProperty(n);if(r&&!s||!r&&s||!g(t[n],e[n]))return!1}}return String(t)===String(e)}function m(t,e){return t.findIndex((t=>g(t,e)))}const y=t=>M(t)?t:null==t?"":N(t)||F(t)&&(t.toString===U||!L(t.toString))?JSON.stringify(t,v,2):String(t),v=(t,e)=>e&&e.__v_isRef?v(t,e.value):R(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:O(e)?{[`Set(${e.size})`]:[...e.values()]}:!F(e)||N(e)||$(e)?e:String(e),w={},b=[],E=()=>{},_=()=>!1,T=/^on[^a-z]/,C=t=>T.test(t),S=t=>t.startsWith("onUpdate:"),I=Object.assign,A=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},k=Object.prototype.hasOwnProperty,D=(t,e)=>k.call(t,e),N=Array.isArray,R=t=>"[object Map]"===B(t),O=t=>"[object Set]"===B(t),x=t=>"[object Date]"===B(t),L=t=>"function"===typeof t,M=t=>"string"===typeof t,P=t=>"symbol"===typeof t,F=t=>null!==t&&"object"===typeof t,V=t=>F(t)&&L(t.then)&&L(t.catch),U=Object.prototype.toString,B=t=>U.call(t),j=t=>B(t).slice(8,-1),$=t=>"[object Object]"===B(t),H=t=>M(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,q=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),G=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},K=/-(\w)/g,z=G((t=>t.replace(K,((t,e)=>e?e.toUpperCase():"")))),W=/\B([A-Z])/g,X=G((t=>t.replace(W,"-$1").toLowerCase())),J=G((t=>t.charAt(0).toUpperCase()+t.slice(1))),Q=G((t=>t?`on${J(t)}`:"")),Y=(t,e)=>!Object.is(t,e),Z=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},et=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nt;const rt=()=>nt||(nt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},503:function(t,e,n){n.d(e,{ZF:function(){return r.ZF}});var r=n(816),s="firebase",i="9.9.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(s,i,"app")},257:function(t,e,n){n.d(e,{ad:function(){return r.ad},hJ:function(){return r.hJ}});var r=n(294)},744:function(t,e){e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n}},816:function(t,e,n){n.d(e,{Jn:function(){return gt},qX:function(){return ht},Xd:function(){return ut},Mq:function(){return yt},ZF:function(){return mt},KN:function(){return vt}});var r=n(463),s=n(333),i=n(444);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",i)},s=()=>{e(_(t.result)),r()},i=()=>{n(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",i)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",i),t.removeEventListener("abort",i)},s=()=>{e(),r()},i=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",i),t.addEventListener("abort",i)}));f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(t)?function(...e){return t.apply(T(this),e),_(h.get(this))}:function(...e){return _(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),_(r)}}function E(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,l())?new Proxy(t,v):t)}function _(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=E(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function C(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=_(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(_(o.result),t.oldVersion,t.newVersion,_(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{i&&t.addEventListener("close",(()=>i())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],I=["put","add","delete","clear"],A=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(A.get(e))return A.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!s&&!S.includes(n))return;const i=async function(t,...e){const i=this.transaction(t,s?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),s&&i.done]))[0]};return A.set(e,i),i}w((t=>({...t,get:(e,n,r)=>k(e,n)||t.get(e,n,r),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(N(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function N(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const R="@firebase/app",O="0.7.29",x=new s.Yd("@firebase/app"),L="@firebase/app-compat",M="@firebase/analytics-compat",P="@firebase/analytics",F="@firebase/app-check-compat",V="@firebase/app-check",U="@firebase/auth",B="@firebase/auth-compat",j="@firebase/database",$="@firebase/database-compat",H="@firebase/functions",q="@firebase/functions-compat",G="@firebase/installations",K="@firebase/installations-compat",z="@firebase/messaging",W="@firebase/messaging-compat",X="@firebase/performance",J="@firebase/performance-compat",Q="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",st="9.9.1",it="[DEFAULT]",ot={[R]:"fire-core",[L]:"fire-core-compat",[P]:"fire-analytics",[M]:"fire-analytics-compat",[V]:"fire-app-check",[F]:"fire-app-check-compat",[U]:"fire-auth",[B]:"fire-auth-compat",[j]:"fire-rtdb",[$]:"fire-rtdb-compat",[H]:"fire-fn",[q]:"fire-fn-compat",[G]:"fire-iid",[K]:"fire-iid-compat",[z]:"fire-fcm",[W]:"fire-fcm-compat",[X]:"fire-perf",[J]:"fire-perf-compat",[Q]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function lt(t,e){try{t.container.addComponent(e)}catch(n){x.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if(ct.has(e))return x.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())lt(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},dt=new i.LL("app","Firebase",ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt=st;function mt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:it,automaticDataCollectionEnabled:!1},e),s=n.name;if("string"!==typeof s||!s)throw dt.create("bad-app-name",{appName:String(s)});const o=at.get(s);if(o){if((0,i.vZ)(t,o.options)&&(0,i.vZ)(n,o.config))return o;throw dt.create("duplicate-app",{appName:s})}const a=new r.H0(s);for(const r of ct.values())a.addComponent(r);const c=new pt(t,n,a);return at.set(s,c),c}function yt(t=it){const e=at.get(t);if(!e)throw dt.create("no-app",{appName:t});return e}function vt(t,e,n){var s;let i=null!==(s=ot[t])&&void 0!==s?s:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${i}" with version "${e}":`];return o&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void x.warn(t.join(" "))}ut(new r.wA(`${i}-version`,(()=>({library:i,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const wt="firebase-heartbeat-database",bt=1,Et="firebase-heartbeat-store";let _t=null;function Tt(){return _t||(_t=C(wt,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Et)}}}).catch((t=>{throw dt.create("storage-open",{originalErrorMessage:t.message})}))),_t}async function Ct(t){var e;try{const e=await Tt();return e.transaction(Et).objectStore(Et).get(It(t))}catch(n){throw dt.create("storage-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message})}}async function St(t,e){var n;try{const n=await Tt(),r=n.transaction(Et,"readwrite"),s=r.objectStore(Et);return await s.put(e,It(t)),r.done}catch(r){throw dt.create("storage-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message})}}function It(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At=1024,kt=2592e6;class Dt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Ot(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Nt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=kt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Nt(),{heartbeatsToSend:e,unsentEntries:n}=Rt(this._heartbeatsCache.heartbeats),r=(0,i.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Nt(){const t=new Date;return t.toISOString().substring(0,10)}function Rt(t,e=At){const n=[];let r=t.slice();for(const s of t){const t=n.find((t=>t.agent===s.agent));if(t){if(t.dates.push(s.date),xt(n)>e){t.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),xt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ot{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,i.hl)()&&(0,i.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Ct(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function xt(t){return(0,i.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(t){ut(new r.wA("platform-logger",(t=>new D(t)),"PRIVATE")),ut(new r.wA("heartbeat",(t=>new Dt(t)),"PRIVATE")),vt(R,O,t),vt(R,O,"esm2017"),vt("fire-js","")}Lt("")},463:function(t,e,n){n.d(e,{H0:function(){return l},wA:function(){return s}});var r=n(444);class s{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:i})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=i){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=i){return this.instances.has(t)}getOptions(t=i){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[s,i]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(s);n===t&&i.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),s=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;s.add(t),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&t(i,r),()=>{s.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const s of n)try{s(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=i){return this.component?this.component.multipleInstances?t:i:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===i?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},333:function(t,e,n){n.d(e,{Yd:function(){return l},in:function(){return s}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var s;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(s||(s={}));const i={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},o=s.INFO,a={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),s=a[e];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[s](`[${r}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in s))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?i[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...t),this._logHandler(this,s.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...t),this._logHandler(this,s.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,s.INFO,...t),this._logHandler(this,s.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,s.WARN,...t),this._logHandler(this,s.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...t),this._logHandler(this,s.ERROR,...t)}}},201:function(t,e,n){n.d(e,{PO:function(){return U},p7:function(){return ee}});var r=n(252),s=n(262);
/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const i="undefined"!==typeof window;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function c(t,e){const n={};for(const r in e){const s=e[r];n[r]=u(s)?s.map(t):t(s)}return n}const l=()=>{},u=Array.isArray;const h=/\/$/,f=t=>t.replace(h,"");function d(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=E(null!=r?r:e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function g(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function m(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&y(e.matched[r],n.matched[s])&&v(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function y(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function v(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!w(t[n],e[n]))return!1;return!0}function w(t,e){return u(t)?b(t,e):u(e)?b(e,t):t===e}function b(t,e){return u(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function E(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s,i,o=n.length-1;for(s=0;s<r.length;s++)if(i=r[s],"."!==i){if(".."!==i)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var _,T;(function(t){t["pop"]="pop",t["push"]="push"})(_||(_={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(T||(T={}));function C(t){if(!t)if(i){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),f(t)}const S=/^[^#]+#/;function I(t,e){return t.replace(S,"#")+e}function A(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const k=()=>({left:window.pageXOffset,top:window.pageYOffset});function D(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const s="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=A(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function N(t,e){const n=history.state?history.state.position-e:-1;return n+t}const R=new Map;function O(t,e){R.set(t,e)}function x(t){const e=R.get(t);return R.delete(t),e}let L=()=>location.protocol+"//"+location.host;function M(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let e=s.includes(t.slice(i))?t.slice(i).length:1,n=s.slice(e);return"/"!==n[0]&&(n="/"+n),g(n,"")}const o=g(n,t);return o+r+s}function P(t,e,n,r){let s=[],i=[],o=null;const c=({state:i})=>{const a=M(t,location),c=n.value,l=e.value;let u=0;if(i){if(n.value=a,e.value=i,o&&o===c)return void(o=null);u=l?i.position-l.position:0}else r(a);s.forEach((t=>{t(n.value,c,{delta:u,type:_.pop,direction:u?u>0?T.forward:T.back:T.unknown})}))};function l(){o=n.value}function u(t){s.push(t);const e=()=>{const e=s.indexOf(t);e>-1&&s.splice(e,1)};return i.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:k()}),"")}function f(){for(const t of i)t();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:l,listen:u,destroy:f}}function F(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?k():null}}function V(t){const{history:e,location:n}=window,r={value:M(t,n)},s={value:e.state};function i(r,i,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:L()+t+r;try{e[o?"replaceState":"pushState"](i,"",c),s.value=i}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(t,n){const o=a({},e.state,F(s.value.back,t,s.value.forward,!0),n,{position:s.value.position});i(t,o,!0),r.value=t}function c(t,n){const o=a({},s.value,e.state,{forward:t,scroll:k()});i(o.current,o,!0);const c=a({},F(r.value,t,null),{position:o.position+1},n);i(t,c,!1),r.value=t}return s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:s,push:c,replace:o}}function U(t){t=C(t);const e=V(t),n=P(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const s=a({location:"",base:t,go:r,createHref:I.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function B(t){return"string"===typeof t||t&&"object"===typeof t}function j(t){return"string"===typeof t||"symbol"===typeof t}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},H=Symbol("");var q;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(q||(q={}));function G(t,e){return a(new Error,{type:t,[H]:!0},e)}function K(t,e){return t instanceof Error&&H in t&&(null==e||!!(t.type&e))}const z="[^/]+?",W={sensitive:!1,strict:!1,start:!0,end:!0},X=/[.+*?^${}()[\]/\\]/g;function J(t,e){const n=a({},W,e),r=[];let s=n.start?"^":"";const i=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(s+="/");for(let e=0;e<a.length;e++){const r=a[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(s+="/"),s+=r.value.replace(X,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:c,regexp:l}=r;i.push({name:t,repeatable:n,optional:c});const u=l||z;if(u!==z){o+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${u}): `+h.message)}}let f=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;e||(f=c&&a.length<2?`(?:/${f})`:"/"+f),c&&(f+="?"),s+=f,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===u&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",s=i[r-1];n[s.name]=t&&s.repeatable?t.split("/"):t}return n}function l(e){let n="",r=!1;for(const s of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of s)if(0===t.type)n+=t.value;else if(1===t.type){const{value:i,repeatable:o,optional:a}=t,c=i in e?e[i]:"";if(u(c)&&!o)throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${i}"`);s.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function Q(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function Y(t,e){let n=0;const r=t.score,s=e.score;while(n<r.length&&n<s.length){const t=Q(r[n],s[n]);if(t)return t;n++}if(1===Math.abs(s.length-r.length)){if(Z(r))return 1;if(Z(s))return-1}return s.length-r.length}function Z(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tt={type:0,value:""},et=/[a-zA-Z0-9_]/;function nt(t){if(!t)return[[]];if("/"===t)return[[tt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${l}": ${t}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a,c=0,l="",u="";function h(){l&&(0===n?i.push({type:0,value:l}):1===n||2===n||3===n?(i.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),l="")}function f(){l+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:et.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function rt(t,e,n){const r=J(nt(t.path),n);const s=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf===!e.record.aliasOf&&e.children.push(s),s}function st(t,e){const n=[],r=new Map;function s(t){return r.get(t)}function i(t,n,r){const s=!r,c=ot(t);c.aliasOf=r&&r.record;const h=ut(e,t),f=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)f.push(a({},c,{components:r?r.record.components:c.components,path:t,aliasOf:r?r.record:c}))}let d,p;for(const e of f){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(d=rt(e,n,h),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),s&&t.name&&!ct(d)&&o(t.name)),c.children){const t=c.children;for(let e=0;e<t.length;e++)i(t[e],d,r&&r.children[e])}r=r||d,u(d)}return p?()=>{o(p)}:l}function o(t){if(j(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function c(){return n}function u(t){let e=0;while(e<n.length&&Y(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ht(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ct(t)&&r.set(t.record.name,t)}function h(t,e){let s,i,o,c={};if("name"in t&&t.name){if(s=r.get(t.name),!s)throw G(1,{location:t});o=s.record.name,c=a(it(e.params,s.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params),i=s.stringify(c)}else if("path"in t)i=t.path,s=n.find((t=>t.re.test(i))),s&&(c=s.parse(i),o=s.record.name);else{if(s=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!s)throw G(1,{location:t,currentLocation:e});o=s.record.name,c=a({},e.params,t.params),i=s.stringify(c)}const l=[];let u=s;while(u)l.unshift(u.record),u=u.parent;return{name:o,path:i,params:c,matched:l,meta:lt(l)}}return e=ut({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>i(t))),{addRoute:i,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function it(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ot(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:at(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function at(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ct(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lt(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function ut(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ht(t,e){return e.children.some((e=>e===t||ht(t,e)))}const ft=/#/g,dt=/&/g,pt=/\//g,gt=/=/g,mt=/\?/g,yt=/\+/g,vt=/%5B/g,wt=/%5D/g,bt=/%5E/g,Et=/%60/g,_t=/%7B/g,Tt=/%7C/g,Ct=/%7D/g,St=/%20/g;function It(t){return encodeURI(""+t).replace(Tt,"|").replace(vt,"[").replace(wt,"]")}function At(t){return It(t).replace(_t,"{").replace(Ct,"}").replace(bt,"^")}function kt(t){return It(t).replace(yt,"%2B").replace(St,"+").replace(ft,"%23").replace(dt,"%26").replace(Et,"`").replace(_t,"{").replace(Ct,"}").replace(bt,"^")}function Dt(t){return kt(t).replace(gt,"%3D")}function Nt(t){return It(t).replace(ft,"%23").replace(mt,"%3F")}function Rt(t){return null==t?"":Nt(t).replace(pt,"%2F")}function Ot(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function xt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const t=r[s].replace(yt," "),n=t.indexOf("="),i=Ot(n<0?t:t.slice(0,n)),o=n<0?null:Ot(t.slice(n+1));if(i in e){let t=e[i];u(t)||(t=e[i]=[t]),t.push(o)}else e[i]=o}return e}function Lt(t){let e="";for(let n in t){const r=t[n];if(n=Dt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const s=u(r)?r.map((t=>t&&kt(t))):[r&&kt(r)];s.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Mt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=u(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Pt=Symbol(""),Ft=Symbol(""),Vt=Symbol(""),Ut=Symbol(""),Bt=Symbol("");function jt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function $t(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise(((o,a)=>{const c=t=>{!1===t?a(G(4,{from:n,to:e})):t instanceof Error?a(t):B(t)?a(G(2,{from:e,to:t})):(i&&r.enterCallbacks[s]===i&&"function"===typeof t&&i.push(t),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch((t=>a(t)))}))}function Ht(t,e,n,r){const s=[];for(const i of t){0;for(const t in i.components){let a=i.components[t];if("beforeRouteEnter"===e||i.instances[t])if(qt(a)){const o=a.__vccOpts||a,c=o[e];c&&s.push($t(c,n,r,i,t))}else{let c=a();0,s.push((()=>c.then((s=>{if(!s)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${i.path}"`));const a=o(s)?s.default:s;i.components[t]=a;const c=a.__vccOpts||a,l=c[e];return l&&$t(l,n,r,i,t)()}))))}}}return s}function qt(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Gt(t){const e=(0,r.f3)(Vt),n=(0,r.f3)(Ut),i=(0,r.Fl)((()=>e.resolve((0,s.SU)(t.to)))),o=(0,r.Fl)((()=>{const{matched:t}=i.value,{length:e}=t,r=t[e-1],s=n.matched;if(!r||!s.length)return-1;const o=s.findIndex(y.bind(null,r));if(o>-1)return o;const a=Jt(t[e-2]);return e>1&&Jt(r)===a&&s[s.length-1].path!==a?s.findIndex(y.bind(null,t[e-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Xt(n.params,i.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,i.value.params)));function u(n={}){return Wt(n)?e[(0,s.SU)(t.replace)?"replace":"push"]((0,s.SU)(t.to)).catch(l):Promise.resolve()}return{route:i,href:(0,r.Fl)((()=>i.value.href)),isActive:a,isExactActive:c,navigate:u}}const Kt=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gt,setup(t,{slots:e}){const n=(0,s.qj)(Gt(t)),{options:i}=(0,r.f3)(Vt),o=(0,r.Fl)((()=>({[Qt(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Qt(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const s=e.default&&e.default(n);return t.custom?s:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},s)}}}),zt=Kt;function Wt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Xt(t,e){for(const n in e){const r=e[n],s=t[n];if("string"===typeof r){if(r!==s)return!1}else if(!u(s)||s.length!==r.length||r.some(((t,e)=>t!==s[e])))return!1}return!0}function Jt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qt=(t,e,n)=>null!=t?t:null!=e?e:n,Yt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=(0,r.f3)(Bt),o=(0,r.Fl)((()=>t.route||i.value)),c=(0,r.f3)(Ft,0),l=(0,r.Fl)((()=>{let t=(0,s.SU)(c);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),u=(0,r.Fl)((()=>o.value.matched[l.value]));(0,r.JJ)(Ft,(0,r.Fl)((()=>l.value+1))),(0,r.JJ)(Pt,u),(0,r.JJ)(Bt,o);const h=(0,s.iH)();return(0,r.YP)((()=>[h.value,u.value,t.name]),(([t,e,n],[r,s,i])=>{e&&(e.instances[n]=t,s&&s!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=s.leaveGuards),e.updateGuards.size||(e.updateGuards=s.updateGuards))),!t||!e||s&&y(e,s)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const s=o.value,i=t.name,c=u.value,l=c&&c.components[i];if(!l)return Zt(n.default,{Component:l,route:s});const f=c.props[i],d=f?!0===f?s.params:"function"===typeof f?f(s):f:null,p=t=>{t.component.isUnmounted&&(c.instances[i]=null)},g=(0,r.h)(l,a({},d,e,{onVnodeUnmounted:p,ref:h}));return Zt(n.default,{Component:g,route:s})||g}}});function Zt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const te=Yt;function ee(t){const e=st(t.routes,t),n=t.parseQuery||xt,o=t.stringifyQuery||Lt,h=t.history;const f=jt(),g=jt(),y=jt(),v=(0,s.XI)($);let w=$;i&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=c.bind(null,(t=>""+t)),E=c.bind(null,Rt),T=c.bind(null,Ot);function C(t,n){let r,s;return j(t)?(r=e.getRecordMatcher(t),s=n):s=t,e.addRoute(s,r)}function S(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function I(){return e.getRoutes().map((t=>t.record))}function A(t){return!!e.getRecordMatcher(t)}function R(t,r){if(r=a({},r||v.value),"string"===typeof t){const s=d(n,t,r.path),i=e.resolve({path:s.path},r),o=h.createHref(s.fullPath);return a(s,i,{params:T(i.params),hash:Ot(s.hash),redirectedFrom:void 0,href:o})}let s;if("path"in t)s=a({},t,{path:d(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];s=a({},t,{params:E(t.params)}),r.params=E(r.params)}const i=e.resolve(s,r),c=t.hash||"";i.params=b(T(i.params));const l=p(o,a({},t,{hash:At(c),path:i.path})),u=h.createHref(l);return a({fullPath:l,hash:c,query:o===Lt?Mt(t.query):t.query||{}},i,{redirectedFrom:void 0,href:u})}function L(t){return"string"===typeof t?d(n,t,v.value.path):a({},t)}function M(t,e){if(w!==t)return G(8,{from:e,to:t})}function P(t){return U(t)}function F(t){return P(a(L(t),{replace:!0}))}function V(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=L(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function U(t,e){const n=w=R(t),r=v.value,s=t.state,i=t.force,c=!0===t.replace,l=V(n);if(l)return U(a(L(l),{state:s,force:i,replace:c}),e||n);const u=n;let h;return u.redirectedFrom=e,!i&&m(o,r,n)&&(h=G(16,{to:u,from:r}),nt(r,r,!0,!1)),(h?Promise.resolve(h):H(u,r)).catch((t=>K(t)?K(t,2)?t:et(t):Z(t,u,r))).then((t=>{if(t){if(K(t,2))return U(a({replace:c},L(t.to),{state:s,force:i}),e||u)}else t=z(u,r,!0,c,s);return q(u,r,t),t}))}function B(t,e){const n=M(t,e);return n?Promise.reject(n):Promise.resolve()}function H(t,e){let n;const[r,s,i]=re(t,e);n=Ht(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push($t(r,t,e))}));const o=B.bind(null,t,e);return n.push(o),ne(n).then((()=>{n=[];for(const r of f.list())n.push($t(r,t,e));return n.push(o),ne(n)})).then((()=>{n=Ht(s,"beforeRouteUpdate",t,e);for(const r of s)r.updateGuards.forEach((r=>{n.push($t(r,t,e))}));return n.push(o),ne(n)})).then((()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(u(r.beforeEnter))for(const s of r.beforeEnter)n.push($t(s,t,e));else n.push($t(r.beforeEnter,t,e));return n.push(o),ne(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=Ht(i,"beforeRouteEnter",t,e),n.push(o),ne(n)))).then((()=>{n=[];for(const r of g.list())n.push($t(r,t,e));return n.push(o),ne(n)})).catch((t=>K(t,8)?t:Promise.reject(t)))}function q(t,e,n){for(const r of y.list())r(t,e,n)}function z(t,e,n,r,s){const o=M(t,e);if(o)return o;const c=e===$,l=i?history.state:{};n&&(r||c?h.replace(t.fullPath,a({scroll:c&&l&&l.scroll},s)):h.push(t.fullPath,s)),v.value=t,nt(t,e,n,c),et()}let W;function X(){W||(W=h.listen(((t,e,n)=>{if(!at.listening)return;const r=R(t),s=V(r);if(s)return void U(a(s,{replace:!0}),r).catch(l);w=r;const o=v.value;i&&O(N(o.fullPath,n.delta),k()),H(r,o).catch((t=>K(t,12)?t:K(t,2)?(U(t.to,r).then((t=>{K(t,20)&&!n.delta&&n.type===_.pop&&h.go(-1,!1)})).catch(l),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(t,r,o)))).then((t=>{t=t||z(r,o,!1),t&&(n.delta&&!K(t,8)?h.go(-n.delta,!1):n.type===_.pop&&K(t,20)&&h.go(-1,!1)),q(r,o,t)})).catch(l)})))}let J,Q=jt(),Y=jt();function Z(t,e,n){et(t);const r=Y.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function tt(){return J&&v.value!==$?Promise.resolve():new Promise(((t,e)=>{Q.add([t,e])}))}function et(t){return J||(J=!t,X(),Q.list().forEach((([e,n])=>t?n(t):e())),Q.reset()),t}function nt(e,n,s,o){const{scrollBehavior:a}=t;if(!i||!a)return Promise.resolve();const c=!s&&x(N(e.fullPath,0))||(o||!s)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(e,n,c))).then((t=>t&&D(t))).catch((t=>Z(t,e,n)))}const rt=t=>h.go(t);let it;const ot=new Set,at={currentRoute:v,listening:!0,addRoute:C,removeRoute:S,hasRoute:A,getRoutes:I,resolve:R,options:t,push:P,replace:F,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:f.add,beforeResolve:g.add,afterEach:y.add,onError:Y.add,isReady:tt,install(t){const e=this;t.component("RouterLink",zt),t.component("RouterView",te),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,s.SU)(v)}),i&&!it&&v.value===$&&(it=!0,P(h.location).catch((t=>{0})));const n={};for(const s in $)n[s]=(0,r.Fl)((()=>v.value[s]));t.provide(Vt,e),t.provide(Ut,(0,s.qj)(n)),t.provide(Bt,v);const o=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(w=$,W&&W(),W=null,v.value=$,it=!1,J=!1),o()}}};return at}function ne(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function re(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const i=e.matched[o];i&&(t.matched.find((t=>y(t,i)))?r.push(i):n.push(i));const a=t.matched[o];a&&(e.matched.find((t=>y(t,a)))||s.push(a))}return[n,r,s]}}}]);
//# sourceMappingURL=chunk-vendors.149937be.js.map