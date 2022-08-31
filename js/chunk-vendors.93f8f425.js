(self["webpackChunkwdev"]=self["webpackChunkwdev"]||[]).push([[998],{1294:function(t,e,n){"use strict";n.d(e,{ET:function(){return Rl},hJ:function(){return il},ad:function(){return cl}});var r,i=n(5816),s=n(8463),o=n(3333),a=n(4444),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},l={},u=u||{},h=c||self;function f(){}function d(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function g(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++y)}var m="closure_uid_"+(1e9*Math.random()>>>0),y=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function w(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function b(t,e,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:w,b.apply(null,arguments)}function E(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function _(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function T(){this.s=this.s,this.o=this.o}var C=0,S={};T.prototype.s=!1,T.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=C)){var t=g(this);delete S[t]}},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const A=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},I=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function k(t){t:{var e=Kn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function D(t){return Array.prototype.concat.apply([],arguments)}function N(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function O(t){return/^[\s\xa0]*$/.test(t)}var R,x=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function L(t,e){return-1!=t.indexOf(e)}function P(t,e){return t<e?-1:t>e?1:0}t:{var F=h.navigator;if(F){var M=F.userAgent;if(M){R=M;break t}}R=""}function U(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function V(t){const e={};for(const n in t)e[n]=t[n];return e}var j="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function B(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<j.length;e++)n=j[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function $(t){return $[" "](t),t}function q(t){var e=nt;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}$[" "]=f;var H,G=L(R,"Opera"),K=L(R,"Trident")||L(R,"MSIE"),z=L(R,"Edge"),W=z||K,J=L(R,"Gecko")&&!(L(R.toLowerCase(),"webkit")&&!L(R,"Edge"))&&!(L(R,"Trident")||L(R,"MSIE"))&&!L(R,"Edge"),X=L(R.toLowerCase(),"webkit")&&!L(R,"Edge");function Q(){var t=h.document;return t?t.documentMode:void 0}t:{var Y="",Z=function(){var t=R;return J?/rv:([^\);]+)(\)|;)/.exec(t):z?/Edge\/([\d\.]+)/.exec(t):K?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):X?/WebKit\/(\S+)/.exec(t):G?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Z&&(Y=Z?Z[1]:""),K){var tt=Q();if(null!=tt&&tt>parseFloat(Y)){H=String(tt);break t}}H=Y}var et,nt={};function rt(){return q((function(){let t=0;const e=x(String(H)).split("."),n=x("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=P(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||P(0==i[2].length,0==s[2].length)||P(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(h.document&&K){var it=Q();et=it||(parseInt(H,10)||void 0)}else et=void 0;var st=et,ot=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",f,e),h.removeEventListener("test",f,e)}catch(n){}return t}();function at(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function ct(t,e){if(at.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(J){t:{try{$(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:lt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&ct.Z.h.call(this)}}at.prototype.h=function(){this.defaultPrevented=!0},_(ct,at);var lt={2:"touch",3:"pen",4:"mouse"};ct.prototype.h=function(){ct.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ut="closure_listenable_"+(1e6*Math.random()|0),ht=0;function ft(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++ht,this.ca=this.fa=!1}function dt(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function pt(t){this.src=t,this.g={},this.h=0}function gt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=A(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(dt(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function mt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}pt.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=mt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ft(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var yt="closure_lm_"+(1e6*Math.random()|0),vt={};function wt(t,e,n,r,i){if(r&&r.once)return _t(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)wt(t,e[s],n,r,i);return null}return n=Dt(n),t&&t[ut]?t.N(e,n,p(r)?!!r.capture:!!r,i):bt(t,e,n,!1,r,i)}function bt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=It(t);if(a||(t[yt]=a=new pt(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Et(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ot||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(St(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function Et(){function t(n){return e.call(t.src,t.listener,n)}var e=At;return t}function _t(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)_t(t,e[s],n,r,i);return null}return n=Dt(n),t&&t[ut]?t.O(e,n,p(r)?!!r.capture:!!r,i):bt(t,e,n,!0,r,i)}function Tt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Tt(t,e[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=Dt(n),t&&t[ut]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=mt(s,n,r,i),-1<n&&(dt(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=It(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mt(e,n,r,i)),(n=-1<t?e[t]:null)&&Ct(n))}function Ct(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ut])gt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(St(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=It(e))?(gt(n,t),0==n.h&&(n.src=null,e[yt]=null)):dt(t)}}}function St(t){return t in vt?vt[t]:vt[t]="on"+t}function At(t,e){if(t.ca)t=!0;else{e=new ct(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&Ct(t),t=n.call(r,e)}return t}function It(t){return t=t[yt],t instanceof pt?t:null}var kt="__closure_events_fn_"+(1e9*Math.random()>>>0);function Dt(t){return"function"===typeof t?t:(t[kt]||(t[kt]=function(e){return t.handleEvent(e)}),t[kt])}function Nt(){T.call(this),this.i=new pt(this),this.P=this,this.I=null}function Ot(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new at(e,t);else if(e instanceof at)e.target=e.target||t;else{var i=e;e=new at(r,t),B(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Rt(o,r,!0,e)&&i}if(o=e.g=t,i=Rt(o,r,!0,e)&&i,i=Rt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Rt(o,r,!1,e)&&i}function Rt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&gt(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}_(Nt,T),Nt.prototype[ut]=!0,Nt.prototype.removeEventListener=function(t,e,n,r){Tt(this,t,e,n,r)},Nt.prototype.M=function(){if(Nt.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)dt(n[r]);delete e.g[t],e.h--}}this.I=null},Nt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Nt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var xt=h.JSON.stringify;function Lt(){var t=qt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Pt{constructor(){this.h=this.g=null}add(t,e){const n=Mt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Ft,Mt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}((()=>new Ut),(t=>t.reset()));class Ut{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Vt(t){h.setTimeout((()=>{throw t}),0)}function jt(t,e){Ft||Bt(),$t||(Ft(),$t=!0),qt.add(t,e)}function Bt(){var t=h.Promise.resolve(void 0);Ft=function(){t.then(Ht)}}var $t=!1,qt=new Pt;function Ht(){for(var t;t=Lt();){try{t.h.call(t.g)}catch(n){Vt(n)}var e=Mt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}$t=!1}function Gt(t,e){Nt.call(this),this.h=t||1,this.g=e||h,this.j=b(this.kb,this),this.l=Date.now()}function Kt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function zt(t,e,n){if("function"===typeof t)n&&(t=b(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=b(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Wt(t){t.g=zt((()=>{t.g=null,t.i&&(t.i=!1,Wt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}_(Gt,Nt),r=Gt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Ot(this,"tick"),this.da&&(Kt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){Gt.Z.M.call(this),Kt(this),delete this.g};class Jt extends T{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Wt(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xt(t){T.call(this),this.h=t,this.g={}}_(Xt,T);var Qt=[];function Yt(t,e,n,r){Array.isArray(n)||(n&&(Qt[0]=n.toString()),n=Qt);for(var i=0;i<n.length;i++){var s=wt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Zt(t){U(t.g,(function(t,e){this.g.hasOwnProperty(e)&&Ct(t)}),t),t.g={}}function te(){this.g=!0}function ee(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function ne(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function re(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+se(t,n)+(r?" "+r:"")}))}function ie(t,e){t.info((function(){return"TIMEOUT: "+e}))}function se(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return xt(n)}catch(a){return e}}Xt.prototype.M=function(){Xt.Z.M.call(this),Zt(this)},Xt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},te.prototype.Aa=function(){this.g=!1},te.prototype.info=function(){};var oe={},ae=null;function ce(){return ae=ae||new Nt}function le(t){at.call(this,oe.Ma,t)}function ue(t){const e=ce();Ot(e,new le(e,t))}function he(t,e){at.call(this,oe.STAT_EVENT,t),this.stat=e}function fe(t){const e=ce();Ot(e,new he(e,t))}function de(t,e){at.call(this,oe.Na,t),this.size=e}function pe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}oe.Ma="serverreachability",_(le,at),oe.STAT_EVENT="statevent",_(he,at),oe.Na="timingevent",_(de,at);var ge={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},me={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ye(){}function ve(t){return t.h||(t.h=t.i())}function we(){}ye.prototype.h=null;var be,Ee={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function _e(){at.call(this,"d")}function Te(){at.call(this,"c")}function Ce(){}function Se(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Xt(this),this.P=Ie,t=W?125:void 0,this.W=new Gt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ae}function Ae(){this.i=null,this.g="",this.h=!1}_(_e,at),_(Te,at),_(Ce,ye),Ce.prototype.g=function(){return new XMLHttpRequest},Ce.prototype.i=function(){return{}},be=new Ce;var Ie=45e3,ke={},De={};function Ne(t,e,n){t.K=1,t.v=en(Je(e)),t.s=n,t.U=!0,Oe(t,null)}function Oe(t,e){t.F=Date.now(),Pe(t),t.A=Je(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),yn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ae,t.g=Tr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Jt(b(t.Ia,t,t.g),t.O)),Yt(t.V,t.g,"readystatechange",t.gb),e=t.H?V(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),ue(1),ee(t.j,t.u,t.A,t.m,t.X,t.s)}function Re(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function xe(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Le(t,n),r==De){4==e&&(t.o=4,fe(14),i=!1),re(t.j,t.m,null,"[Incomplete Response]");break}if(r==ke){t.o=4,fe(15),re(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}re(t.j,t.m,r,null),je(t,r)}Re(t)&&r!=De&&r!=ke&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,fe(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gr(e),e.L=!0,fe(11))):(re(t.j,t.m,n,"[Invalid Chunked Response]"),Ve(t),Ue(t))}function Le(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?De:(n=Number(e.substring(n,r)),isNaN(n)?ke:(r+=1,r+n>e.length?De:(e=e.substr(r,n),t.C=r+n,e)))}function Pe(t){t.Y=Date.now()+t.P,Fe(t,t.P)}function Fe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=pe(b(t.eb,t),e)}function Me(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Ue(t){0==t.l.G||t.I||vr(t.l,t)}function Ve(t){Me(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Kt(t.W),Zt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function je(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||Sn(n.i,t)))if(n.I=t.N,!t.J&&Sn(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;yr(n),sr(n)}pr(n),fe(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=pe(b(n.ab,n),6e3));if(1>=Cn(n.i)&&n.ka){try{n.ka()}catch(l){}n.ka=void 0}}else br(n,11)}else if((t.J||n.g==t)&&yr(n),!O(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],2==n.G)if("c"==l[0]){n.J=l[1],n.la=l[2];const e=l[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=l[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(L(t,"spdy")||L(t,"quic")||L(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(An(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,tn(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=_r(r,r.H?r.la:null,r.W),o.J){In(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Me(a),Pe(a)),r.g=o}else dr(r);0<n.l.length&&cr(n)}else"stop"!=l[0]&&"close"!=l[0]||br(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?br(n,7):ir(n):"noop"!=l[0]&&n.j&&n.j.wa(l),n.A=0)}ue(4)}catch(l){}}function Be(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(d(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function $e(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(d(t)||"string"===typeof t)I(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(d(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Be(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function qe(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof qe)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function He(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Ge(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Ge(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function Ge(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=Se.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Yn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const u=Yn(this.g);var e=this.g.Da();const f=this.g.ba();if(!(3>u)&&(3!=u||W||this.g&&(this.h.h||this.g.ga()||Zn(this.g)))){this.I||4!=u||7==e||ue(8==e||0>=f?3:2),Me(this);var n=this.g.ba();this.N=n;e:if(Re(this)){var r=Zn(this.g);t="";var i=r.length,s=4==Yn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ve(this),Ue(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,ne(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,fe(12),Ve(this),Ue(this);break t}re(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,je(this,n)}this.U?(xe(this,u,o),W&&this.i&&3==u&&(Yt(this.V,this.W,"tick",this.fb),this.W.start())):(re(this.j,this.m,o,null),je(this,o)),4==u&&Ve(this),this.i&&!this.I&&(4==u?vr(this.l,this):(this.i=!1,Pe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,fe(12)):(this.o=0,fe(13)),Ve(this),Ue(this)}}}catch(u){}},r.fb=function(){if(this.g){var t=Yn(this.g),e=this.g.ga();this.C<e.length&&(Me(this),xe(this,t,e),this.i&&4!=t&&Pe(this))}},r.cancel=function(){this.I=!0,Ve(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(ie(this.j,this.A),2!=this.K&&(ue(3),fe(17)),Ve(this),this.o=2,Ue(this)):Fe(this,this.Y-t)},r=qe.prototype,r.R=function(){He(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return He(this),this.g.concat()},r.get=function(t,e){return Ge(this.h,t)?this.h[t]:e},r.set=function(t,e){Ge(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var Ke=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function ze(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function We(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof We){this.g=void 0!==e?e:t.g,Xe(this,t.j),this.s=t.s,Qe(this,t.i),Ye(this,t.m),this.l=t.l,e=t.h;var n=new dn;n.i=e.i,e.g&&(n.g=new qe(e.g),n.h=e.h),Ze(this,n),this.o=t.o}else t&&(n=String(t).match(Ke))?(this.g=!!e,Xe(this,n[1]||"",!0),this.s=sn(n[2]||""),Qe(this,n[3]||"",!0),Ye(this,n[4]),this.l=sn(n[5]||"",!0),Ze(this,n[6]||"",!0),this.o=sn(n[7]||"")):(this.g=!!e,this.h=new dn(null,this.g))}function Je(t){return new We(t)}function Xe(t,e,n){t.j=n?sn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Qe(t,e,n){t.i=n?sn(e,!0):e}function Ye(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Ze(t,e,n){e instanceof dn?(t.h=e,wn(t.h,t.g)):(n||(e=on(e,hn)),t.h=new dn(e,t.g))}function tn(t,e,n){t.h.set(e,n)}function en(t){return tn(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function nn(t){return t instanceof We?Je(t):new We(t,void 0)}function rn(t,e,n,r){var i=new We(null,void 0);return t&&Xe(i,t),e&&Qe(i,e),n&&Ye(i,n),r&&(i.l=r),i}function sn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function on(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,an),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function an(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}We.prototype.toString=function(){var t=[],e=this.j;e&&t.push(on(e,cn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(on(e,cn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(on(n,"/"==n.charAt(0)?un:ln,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",on(n,fn)),t.join("")};var cn=/[#\/\?@]/g,ln=/[#\?:]/g,un=/[#\?]/g,hn=/[#\?@]/g,fn=/#/g;function dn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function pn(t){t.g||(t.g=new qe,t.h=0,t.i&&ze(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function gn(t,e){pn(t),e=vn(t,e),Ge(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ge(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&He(t)))}function mn(t,e){return pn(t),e=vn(t,e),Ge(t.g.h,e)}function yn(t,e,n){gn(t,e),0<n.length&&(t.i=null,t.g.set(vn(t,e),N(n)),t.h+=n.length)}function vn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function wn(t,e){e&&!t.j&&(pn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(gn(this,e),yn(this,n,t))}),t)),t.j=e}r=dn.prototype,r.add=function(t,e){pn(this),this.i=null,t=vn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){pn(this),this.g.forEach((function(n,r){I(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){pn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},r.R=function(t){pn(this);var e=[];if("string"===typeof t)mn(this,t)&&(e=D(e,this.g.get(vn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=D(e,t[n])}return e},r.set=function(t,e){return pn(this),this.i=null,t=vn(this,t),mn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var bn=class{constructor(t,e){this.h=t,this.g=e}};function En(t){this.l=t||_n,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _n=10;function Tn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function Cn(t){return t.h?1:t.g?t.g.size:0}function Sn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function An(t,e){t.g?t.g.add(e):t.h=e}function In(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function kn(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return N(t.i)}function Dn(){}function Nn(){this.g=new Dn}function On(t,e,n){const r=n||"";try{$e(t,(function(t,n){let i=t;p(t)&&(i=xt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Rn(t,e){const n=new te;if(h.Image){const r=new Image;r.onload=E(xn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=E(xn,n,r,"TestLoadImage: error",!1,e),r.onabort=E(xn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=E(xn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function xn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function Ln(t){this.l=t.$b||null,this.j=t.ib||!1}function Pn(t,e){Nt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Fn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}En.prototype.cancel=function(){if(this.i=kn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Dn.prototype.stringify=function(t){return h.JSON.stringify(t,void 0)},Dn.prototype.parse=function(t){return h.JSON.parse(t,void 0)},_(Ln,ye),Ln.prototype.g=function(){return new Pn(this.l,this.j)},Ln.prototype.i=function(t){return function(){return t}}({}),_(Pn,Nt);var Fn=0;function Mn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Un(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Vn(t)}function Vn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=Pn.prototype,r.open=function(t,e){if(this.readyState!=Fn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Vn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||h).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Un(this)),this.readyState=Fn},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Mn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Un(this):Vn(this),3==this.readyState&&Mn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Un(this))},r.Ta=function(t){this.g&&(this.response=t,Un(this))},r.ha=function(){this.g&&Un(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Pn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var jn=h.JSON.parse;function Bn(t){Nt.call(this),this.headers=new qe,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=$n,this.K=this.L=!1}_(Bn,Nt);var $n="",qn=/^https?$/i,Hn=["POST","PUT"];function Gn(t){return K&&rt()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Kn(t){return"content-type"==t.toLowerCase()}function zn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wn(t),Xn(t)}function Wn(t){t.D||(t.D=!0,Ot(t,"complete"),Ot(t,"error"))}function Jn(t){if(t.h&&"undefined"!=typeof u&&(!t.C[1]||4!=Yn(t)||2!=t.ba()))if(t.v&&4==Yn(t))zt(t.Fa,0,t);else if(Ot(t,"readystatechange"),4==Yn(t)){t.h=!1;try{const c=t.ba();t:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===c){var i=String(t.H).match(Ke)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!qn.test(i?i.toLowerCase():"")}n=r}if(n)Ot(t,"complete"),Ot(t,"success");else{t.m=6;try{var o=2<Yn(t)?t.g.statusText:""}catch(a){o=""}t.j=o+" ["+t.ba()+"]",Wn(t)}}finally{Xn(t)}}}function Xn(t,e){if(t.g){Qn(t);const r=t.g,i=t.C[0]?f:null;t.g=null,t.C=null,e||Ot(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Qn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Yn(t){return t.g?t.g.readyState:0}function Zn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case $n:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function tr(t){let e="";return U(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function er(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=tr(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):tn(t,e,n))}function nr(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function rr(t){this.za=0,this.l=[],this.h=new te,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=nr("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=nr("baseRetryDelayMs",5e3,t),this.$a=nr("retryDelaySeedMs",1e4,t),this.Ya=nr("forwardChannelMaxRetries",2,t),this.ra=nr("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new En(t&&t.concurrentRequestLimit),this.Ca=new Nn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function ir(t){if(or(t),3==t.G){var e=t.V++,n=Je(t.F);tn(n,"SID",t.J),tn(n,"RID",e),tn(n,"TYPE","terminate"),hr(t,n),e=new Se(t,t.h,e,void 0),e.K=2,e.v=en(Je(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(e.v.toString(),"")),!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=Tr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Pe(e)}Er(t)}function sr(t){t.g&&(gr(t),t.g.cancel(),t.g=null)}function or(t){sr(t),t.u&&(h.clearTimeout(t.u),t.u=null),yr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function ar(t,e){t.l.push(new bn(t.Za++,e)),3==t.G&&cr(t)}function cr(t){Tn(t.i)||t.m||(t.m=!0,jt(t.Ha,t),t.C=0)}function lr(t,e){return!(Cn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=pe(b(t.Ha,t,e),wr(t,t.C)),t.C++,!0))}function ur(t,e){var n;n=e?e.m:t.V++;const r=Je(t.F);tn(r,"SID",t.J),tn(r,"RID",n),tn(r,"AID",t.U),hr(t,r),t.o&&t.s&&er(r,t.o,t.s),n=new Se(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=fr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),An(t.i,n),Ne(n,r,e)}function hr(t,e){t.j&&$e({},(function(t,n){tn(e,n,t)}))}function fr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?b(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{On(a,t,"req"+n+"_")}catch(Qr){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function dr(t){t.g||t.u||(t.Y=1,jt(t.Ga,t),t.A=0)}function pr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=pe(b(t.Ga,t),wr(t,t.A)),t.A++,!0)}function gr(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function mr(t){t.g=new Se(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Je(t.oa);tn(e,"RID","rpc"),tn(e,"SID",t.J),tn(e,"CI",t.N?"0":"1"),tn(e,"AID",t.U),hr(t,e),tn(e,"TYPE","xmlhttp"),t.o&&t.s&&er(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=en(Je(e)),n.s=null,n.U=!0,Oe(n,t)}function yr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function vr(t,e){var n=null;if(t.g==e){yr(t),gr(t),t.g=null;var r=2}else{if(!Sn(t.i,e))return;n=e.D,In(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ce(),Ot(r,new de(r,n,e,i)),cr(t)}else dr(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&lr(t,e)||2==r&&pr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:br(t,5);break;case 4:br(t,10);break;case 3:br(t,6);break;default:br(t,2)}}function wr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function br(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=b(t.jb,t);n||(n=new We("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Xe(n,"https"),en(n)),Rn(n.toString(),r)}else fe(2);t.G=0,t.j&&t.j.va(e),Er(t),or(t)}function Er(t){t.G=0,t.I=-1,t.j&&(0==kn(t.i).length&&0==t.l.length||(t.i.i.length=0,N(t.l),t.l.length=0),t.j.ua())}function _r(t,e,n){let r=nn(n);if(""!=r.i)e&&Qe(r,e+"."+r.i),Ye(r,r.m);else{const t=h.location;r=rn(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&U(t.aa,(function(t,e){tn(r,e,t)})),e=t.D,n=t.sa,e&&n&&tn(r,e,n),tn(r,"VER",t.ma),hr(t,r),r}function Tr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Bn(new Ln({ib:!0})):new Bn(t.qa),e.L=t.H,e}function Cr(){}function Sr(){if(K&&!(10<=Number(st)))throw Error("Environmental error: no available transport.")}function Ar(t,e){Nt.call(this),this.g=new rr(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!O(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!O(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Dr(this)}function Ir(t){_e.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function kr(){Te.call(this),this.status=1}function Dr(t){this.g=t}r=Bn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():be.g(),this.C=this.u?ve(this.u):ve(be),this.g.onreadystatechange=b(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void zn(this,s)}t=n||"";const i=new qe(this.headers);r&&$e(r,(function(t,e){i.set(e,t)})),r=k(i.T()),n=h.FormData&&t instanceof h.FormData,!(0<=A(Hn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qn(this),0<this.B&&((this.K=Gn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.pa,this)):this.A=zt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){zn(this,s)}},r.pa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ot(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ot(this,"complete"),Ot(this,"abort"),Xn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xn(this,!0)),Bn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Jn(this):this.cb())},r.cb=function(){Jn(this)},r.ba=function(){try{return 2<Yn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),jn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=rr.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Se(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=V(s),B(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=fr(this,i,e),n=Je(this.F),tn(n,"RID",t),tn(n,"CVER",22),this.D&&tn(n,"X-HTTP-Session-Id",this.D),hr(this,n),this.o&&s&&er(n,this.o,s),An(this.i,i),this.Ra&&tn(n,"TYPE","init"),this.ja?(tn(n,"$req",e),tn(n,"SID","null"),i.$=!0,Ne(i,n,null)):Ne(i,n,e),this.G=2}}else 3==this.G&&(t?ur(this,t):0==this.l.length||Tn(this.i)||ur(this))},r.Ga=function(){if(this.u=null,mr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=pe(b(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,fe(10),sr(this),mr(this))},r.ab=function(){null!=this.v&&(this.v=null,sr(this),pr(this),fe(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),fe(2)):(this.h.info("Failed to ping google.com"),fe(1))},r=Cr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Sr.prototype.g=function(t,e){return new Ar(t,e)},_(Ar,Nt),Ar.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),jt(b(t.hb,t,e))),fe(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=_r(t,null,t.W),cr(t)},Ar.prototype.close=function(){ir(this.g)},Ar.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,ar(this.g,e)}else this.v?(e={},e.__data__=xt(t),ar(this.g,e)):ar(this.g,t)},Ar.prototype.M=function(){this.g.j=null,delete this.j,ir(this.g),delete this.g,Ar.Z.M.call(this)},_(Ir,_e),_(kr,Te),_(Dr,Cr),Dr.prototype.xa=function(){Ot(this.g,"a")},Dr.prototype.wa=function(t){Ot(this.g,new Ir(t))},Dr.prototype.va=function(t){Ot(this.g,new kr(t))},Dr.prototype.ua=function(){Ot(this.g,"b")},Sr.prototype.createWebChannel=Sr.prototype.g,Ar.prototype.send=Ar.prototype.u,Ar.prototype.open=Ar.prototype.m,Ar.prototype.close=Ar.prototype.close,ge.NO_ERROR=0,ge.TIMEOUT=8,ge.HTTP_ERROR=6,me.COMPLETE="complete",we.EventType=Ee,Ee.OPEN="a",Ee.CLOSE="b",Ee.ERROR="c",Ee.MESSAGE="d",Nt.prototype.listen=Nt.prototype.N,Bn.prototype.listenOnce=Bn.prototype.O,Bn.prototype.getLastError=Bn.prototype.La,Bn.prototype.getLastErrorCode=Bn.prototype.Da,Bn.prototype.getStatus=Bn.prototype.ba,Bn.prototype.getResponseJson=Bn.prototype.Qa,Bn.prototype.getResponseText=Bn.prototype.ga,Bn.prototype.send=Bn.prototype.ea;var Nr=l.createWebChannelTransport=function(){return new Sr},Or=l.getStatEventTarget=function(){return ce()},Rr=l.ErrorCode=ge,xr=l.EventType=me,Lr=l.Event=oe,Pr=l.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Fr=l.FetchXmlHttpFactory=Ln,Mr=l.WebChannel=we,Ur=l.XhrIo=Bn;const Vr="@firebase/firestore";
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
 */class jr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}jr.UNAUTHENTICATED=new jr(null),jr.GOOGLE_CREDENTIALS=new jr("google-credentials-uid"),jr.FIRST_PARTY=new jr("first-party-uid"),jr.MOCK_USER=new jr("mock-user");
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
let Br="9.9.1";
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
 */const $r=new o.Yd("@firebase/firestore");function qr(){return $r.logLevel}function Hr(t,...e){if($r.logLevel<=o["in"].DEBUG){const n=e.map(zr);$r.debug(`Firestore (${Br}): ${t}`,...n)}}function Gr(t,...e){if($r.logLevel<=o["in"].ERROR){const n=e.map(zr);$r.error(`Firestore (${Br}): ${t}`,...n)}}function Kr(t,...e){if($r.logLevel<=o["in"].WARN){const n=e.map(zr);$r.warn(`Firestore (${Br}): ${t}`,...n)}}function zr(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
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
 */function Wr(t="Unexpected state"){const e=`FIRESTORE (${Br}) INTERNAL ASSERTION FAILED: `+t;throw Gr(e),new Error(e)}function Jr(t,e){t||Wr()}function Xr(t,e){return t}
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
 */class ti{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class ei{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(jr.UNAUTHENTICATED)))}shutdown(){}}class ni{constructor(t){this.t=t,this.currentUser=jr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new Zr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Zr,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Hr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Hr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Zr)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Hr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(Jr("string"==typeof e.accessToken),new ti(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Jr(null===t||"string"==typeof t),new jr(t)}}class ri{constructor(t,e,n){this.type="FirstParty",this.user=jr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ii{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new ri(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(jr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class si{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oi{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,e){const n=t=>{null!=t.error&&Hr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,Hr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Hr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):Hr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(Jr("string"==typeof t.token),this.p=t.token,new si(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
function ai(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class ci{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=ai(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function li(t,e){return t<e?-1:t>e?1:0}function ui(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
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
class hi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new Yr(Qr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new Yr(Qr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new Yr(Qr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new Yr(Qr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return hi.fromMillis(Date.now())}static fromDate(t){return hi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new hi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?li(this.nanoseconds,t.nanoseconds):li(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class fi{constructor(t){this.timestamp=t}static fromTimestamp(t){return new fi(t)}static min(){return new fi(new hi(0,0))}static max(){return new fi(new hi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */class di{constructor(t,e,n){void 0===e?e=0:e>t.length&&Wr(),void 0===n?n=t.length-e:n>t.length-e&&Wr(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===di.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof di?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class pi extends di{construct(t,e,n){return new pi(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new Yr(Qr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new pi(e)}static emptyPath(){return new pi([])}}const gi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mi extends di{construct(t,e,n){return new mi(t,e,n)}static isValidIdentifier(t){return gi.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mi.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new mi(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Yr(Qr.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new Yr(Qr.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new Yr(Qr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new Yr(Qr.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new mi(e)}static emptyPath(){return new mi([])}}
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
 */class yi{constructor(t){this.path=t}static fromPath(t){return new yi(pi.fromString(t))}static fromName(t){return new yi(pi.fromString(t).popFirst(5))}static empty(){return new yi(pi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===pi.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return pi.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new yi(new pi(t.slice()))}}
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
 */class vi{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}vi.UNKNOWN_ID=-1;function wi(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=fi.fromTimestamp(1e9===r?new hi(n+1,0):new hi(n,r));return new Ei(i,yi.empty(),e)}function bi(t){return new Ei(t.readTime,t.key,-1)}class Ei{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ei(fi.min(),yi.empty(),-1)}static max(){return new Ei(fi.max(),yi.empty(),-1)}}function _i(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=yi.comparator(t.documentKey,e.documentKey),0!==n?n:li(t.largestBatchId,e.largestBatchId))}
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
 */const Ti="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ci{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
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
 */async function Si(t){if(t.code!==Qr.FAILED_PRECONDITION||t.message!==Ti)throw t;Hr("LocalStore","Unexpectedly lost primary lease")}
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
 */class Ai{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&Wr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Ai(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Ai?e:Ai.resolve(e)}catch(t){return Ai.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Ai.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Ai.reject(e)}static resolve(t){return new Ai(((e,n)=>{e(t)}))}static reject(t){return new Ai(((e,n)=>{n(t)}))}static waitFor(t){return new Ai(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Ai.resolve(!1);for(const n of t)e=e.next((t=>t?Ai.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Ai(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Ai(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
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
 */function Ii(t){return"IndexedDbTransactionError"===t.name}
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
class ki{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}}
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
 */function Di(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Oi(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
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
 */ki.ot=-1;class Ri{constructor(t,e){this.comparator=t,this.root=e||Li.EMPTY}insert(t,e){return new Ri(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Li.BLACK,null,null))}remove(t){return new Ri(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Li.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new xi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new xi(this.root,t,this.comparator,!1)}getReverseIterator(){return new xi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new xi(this.root,t,this.comparator,!0)}}class xi{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Li{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Li.RED,this.left=null!=r?r:Li.EMPTY,this.right=null!=i?i:Li.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Li(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Li.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Li.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Li.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Li.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Wr();if(this.right.isRed())throw Wr();const t=this.left.check();if(t!==this.right.check())throw Wr();return t+(this.isRed()?0:1)}}Li.EMPTY=null,Li.RED=!0,Li.BLACK=!1,Li.EMPTY=new class{constructor(){this.size=0}get key(){throw Wr()}get value(){throw Wr()}get color(){throw Wr()}get left(){throw Wr()}get right(){throw Wr()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Li(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class Pi{constructor(t){this.comparator=t,this.data=new Ri(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Fi(this.data.getIterator())}getIteratorFrom(t){return new Fi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Pi))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Pi(this.comparator);return e.data=t,e}}class Fi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
class Mi{constructor(t){this.fields=t,t.sort(mi.comparator)}static empty(){return new Mi([])}unionWith(t){let e=new Pi(mi.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Mi(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return ui(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
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
class Ui{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Ui(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Ui(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return li(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ui.EMPTY_BYTE_STRING=new Ui("");const Vi=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ji(t){if(Jr(!!t),"string"==typeof t){let e=0;const n=Vi.exec(t);if(Jr(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Bi(t.seconds),nanos:Bi(t.nanos)}}function Bi(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function $i(t){return"string"==typeof t?Ui.fromBase64String(t):Ui.fromUint8Array(t)}
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
 */function qi(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Hi(t){const e=ji(t.mapValue.fields.__local_write_time__.timestampValue);return new hi(e.seconds,e.nanos)}
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
 */class Gi{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ki{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ki("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ki&&t.projectId===this.projectId&&t.database===this.database}}
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
 */function zi(t){return null==t}function Wi(t){return 0===t&&1/t==-1/0}function Ji(t){return"number"==typeof t&&Number.isInteger(t)&&!Wi(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
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
 */const Xi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Qi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?qi(t)?4:cs(t)?9007199254740991:10:Wr()}function Yi(t,e){if(t===e)return!0;const n=Qi(t);if(n!==Qi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Hi(t).isEqual(Hi(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ji(t.timestampValue),r=ji(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return $i(t.bytesValue).isEqual($i(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Bi(t.geoPointValue.latitude)===Bi(e.geoPointValue.latitude)&&Bi(t.geoPointValue.longitude)===Bi(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Bi(t.integerValue)===Bi(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Bi(t.doubleValue),r=Bi(e.doubleValue);return n===r?Wi(n)===Wi(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return ui(t.arrayValue.values||[],e.arrayValue.values||[],Yi);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Di(n)!==Di(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Yi(n[i],r[i])))return!1;return!0}(t,e);default:return Wr()}}function Zi(t,e){return void 0!==(t.values||[]).find((t=>Yi(t,e)))}function ts(t,e){if(t===e)return 0;const n=Qi(t),r=Qi(e);if(n!==r)return li(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return li(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Bi(t.integerValue||t.doubleValue),r=Bi(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return es(t.timestampValue,e.timestampValue);case 4:return es(Hi(t),Hi(e));case 5:return li(t.stringValue,e.stringValue);case 6:return function(t,e){const n=$i(t),r=$i(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=li(n[i],r[i]);if(0!==t)return t}return li(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=li(Bi(t.latitude),Bi(e.latitude));return 0!==n?n:li(Bi(t.longitude),Bi(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=ts(n[i],r[i]);if(t)return t}return li(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===Xi.mapValue&&e===Xi.mapValue)return 0;if(t===Xi.mapValue)return 1;if(e===Xi.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=li(r[o],s[o]);if(0!==t)return t;const e=ts(n[r[o]],i[s[o]]);if(0!==e)return e}return li(r.length,s.length)}(t.mapValue,e.mapValue);default:throw Wr()}}function es(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return li(t,e);const n=ji(t),r=ji(e),i=li(n.seconds,r.seconds);return 0!==i?i:li(n.nanos,r.nanos)}function ns(t){return rs(t)}function rs(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ji(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?$i(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,yi.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=rs(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${rs(t.fields[i])}`;return n+"}"}(t.mapValue):Wr();var e,n}function is(t){return!!t&&"integerValue"in t}function ss(t){return!!t&&"arrayValue"in t}function os(t){return!!t&&"mapValue"in t}function as(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ni(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=as(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=as(t.arrayValue.values[n]);return e}return Object.assign({},t)}function cs(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
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
class ls{constructor(t){this.value=t}static empty(){return new ls({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!os(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=as(e)}setAll(t){let e=mi.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=as(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());os(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Yi(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];os(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Ni(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new ls(as(this.value))}}function us(t){const e=[];return Ni(t.fields,((t,n)=>{const r=new mi([t]);if(os(n)){const t=us(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new Mi(e)
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
 */}class hs{constructor(t,e,n,r,i,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(t){return new hs(t,0,fi.min(),fi.min(),ls.empty(),0)}static newFoundDocument(t,e,n){return new hs(t,1,e,fi.min(),n,0)}static newNoDocument(t,e){return new hs(t,2,e,fi.min(),ls.empty(),0)}static newUnknownDocument(t,e){return new hs(t,3,e,fi.min(),ls.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ls.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ls.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=fi.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof hs&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new hs(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class fs{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ut=null}}function ds(t,e=null,n=[],r=[],i=null,s=null,o=null){return new fs(t,e,n,r,i,s,o)}function ps(t){const e=Xr(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{return(e=t).field.canonicalString()+e.op.toString()+ns(e.value);var e})).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),zi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>ns(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>ns(t))).join(",")),e.ut=t}return e.ut}function gs(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ns(e.value)}`;var e})).join(", ")}]`),zi(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>ns(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>ns(t))).join(",")),`Target(${e})`}function ms(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!ks(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Yi(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ns(t.startAt,e.startAt)&&Ns(t.endAt,e.endAt)}class ys extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new vs(t,e,n):"array-contains"===e?new _s(t,n):"in"===e?new Ts(t,n):"not-in"===e?new Cs(t,n):"array-contains-any"===e?new Ss(t,n):new ys(t,e,n)}static ct(t,e,n){return"in"===e?new ws(t,n):new bs(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(ts(e,this.value)):null!==e&&Qi(this.value)===Qi(e)&&this.at(ts(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return Wr()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class vs extends ys{constructor(t,e,n){super(t,e,n),this.key=yi.fromName(n.referenceValue)}matches(t){const e=yi.comparator(t.key,this.key);return this.at(e)}}class ws extends ys{constructor(t,e){super(t,"in",e),this.keys=Es("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class bs extends ys{constructor(t,e){super(t,"not-in",e),this.keys=Es("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Es(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>yi.fromName(t.referenceValue)))}class _s extends ys{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ss(e)&&Zi(e.arrayValue,this.value)}}class Ts extends ys{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&Zi(this.value.arrayValue,e)}}class Cs extends ys{constructor(t,e){super(t,"not-in",e)}matches(t){if(Zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!Zi(this.value.arrayValue,e)}}class Ss extends ys{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ss(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>Zi(this.value.arrayValue,t)))}}class As{constructor(t,e){this.position=t,this.inclusive=e}}class Is{constructor(t,e="asc"){this.field=t,this.dir=e}}function ks(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Ds(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?yi.comparator(yi.fromName(o.referenceValue),n.key):ts(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ns(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Yi(t.position[n],e.position[n]))return!1;return!0}
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
 */class Os{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Rs(t,e,n,r,i,s,o,a){return new Os(t,e,n,r,i,s,o,a)}function xs(t){return new Os(t)}function Ls(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function Ps(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Fs(t){for(const e of t.filters)if(e.ht())return e.field;return null}function Ms(t){return null!==t.collectionGroup}function Us(t){const e=Xr(t);if(null===e.lt){e.lt=[];const t=Fs(e),n=Ps(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new Is(t)),e.lt.push(new Is(mi.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new Is(mi.keyField(),t))}}}return e.lt}function Vs(t){const e=Xr(t);if(!e.ft)if("F"===e.limitType)e.ft=ds(e.path,e.collectionGroup,Us(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of Us(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Is(i.field,e))}const n=e.endAt?new As(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new As(e.startAt.position,e.startAt.inclusive):null;e.ft=ds(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.ft}function js(t,e,n){return new Os(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Bs(t,e){return ms(Vs(t),Vs(e))&&t.limitType===e.limitType}function $s(t){return`${ps(Vs(t))}|lt:${t.limitType}`}function qs(t){return`Query(target=${gs(Vs(t))}; limitType=${t.limitType})`}function Hs(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):yi.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=Ds(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,Us(t),e))&&!(t.endAt&&!function(t,e,n){const r=Ds(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,Us(t),e))}(t,e)}function Gs(t){return(e,n)=>{let r=!1;for(const i of Us(t)){const t=Ks(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Ks(t,e,n){const r=t.field.isKeyField()?yi.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?ts(r,i):Wr()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Wr()}}
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
 */function zs(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wi(e)?"-0":e}}function Ws(t){return{integerValue:""+t}}function Js(t,e){return Ji(e)?Ws(e):zs(t,e)}
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
 */class Xs{constructor(){this._=void 0}}function Qs(t,e,n){return t instanceof to?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof eo?no(t,e):t instanceof ro?io(t,e):function(t,e){const n=Zs(t,e),r=oo(n)+oo(t._t);return is(n)&&is(t._t)?Ws(r):zs(t.wt,r)}(t,e)}function Ys(t,e,n){return t instanceof eo?no(t,e):t instanceof ro?io(t,e):n}function Zs(t,e){return t instanceof so?is(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class to extends Xs{}class eo extends Xs{constructor(t){super(),this.elements=t}}function no(t,e){const n=ao(e);for(const r of t.elements)n.some((t=>Yi(t,r)))||n.push(r);return{arrayValue:{values:n}}}class ro extends Xs{constructor(t){super(),this.elements=t}}function io(t,e){let n=ao(e);for(const r of t.elements)n=n.filter((t=>!Yi(t,r)));return{arrayValue:{values:n}}}class so extends Xs{constructor(t,e){super(),this.wt=t,this._t=e}}function oo(t){return Bi(t.integerValue||t.doubleValue)}function ao(t){return ss(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
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
 */function co(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof eo&&e instanceof eo||t instanceof ro&&e instanceof ro?ui(t.elements,e.elements,Yi):t instanceof so&&e instanceof so?Yi(t._t,e._t):t instanceof to&&e instanceof to}(t.transform,e.transform)}class lo{constructor(t,e){this.version=t,this.transformResults=e}}class uo{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new uo}static exists(t){return new uo(void 0,t)}static updateTime(t){return new uo(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ho(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class fo{}function po(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Co(t.key,uo.none()):new wo(t.key,t.data,uo.none());{const n=t.data,r=ls.empty();let i=new Pi(mi.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new bo(t.key,r,new Mi(i.toArray()),uo.none())}}function go(t,e,n){t instanceof wo?function(t,e,n){const r=t.value.clone(),i=_o(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof bo?function(t,e,n){if(!ho(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=_o(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Eo(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function mo(t,e,n,r){return t instanceof wo?function(t,e,n,r){if(!ho(t.precondition,e))return n;const i=t.value.clone(),s=To(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof bo?function(t,e,n,r){if(!ho(t.precondition,e))return n;const i=To(t.fieldTransforms,r,e),s=e.data;return s.setAll(Eo(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return ho(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function yo(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Zs(r.transform,t||null);null!=i&&(null===n&&(n=ls.empty()),n.set(r.field,i))}return n||null}function vo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&ui(t,e,((t,e)=>co(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wo extends fo{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class bo extends fo{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Eo(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function _o(t,e,n){const r=new Map;Jr(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Ys(o,a,n[i]))}return r}function To(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Qs(t,s,e))}return r}class Co extends fo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class So extends fo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
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
var Ao,Io;function ko(t){switch(t){default:return Wr();case Qr.CANCELLED:case Qr.UNKNOWN:case Qr.DEADLINE_EXCEEDED:case Qr.RESOURCE_EXHAUSTED:case Qr.INTERNAL:case Qr.UNAVAILABLE:case Qr.UNAUTHENTICATED:return!1;case Qr.INVALID_ARGUMENT:case Qr.NOT_FOUND:case Qr.ALREADY_EXISTS:case Qr.PERMISSION_DENIED:case Qr.FAILED_PRECONDITION:case Qr.ABORTED:case Qr.OUT_OF_RANGE:case Qr.UNIMPLEMENTED:case Qr.DATA_LOSS:return!0}}function Do(t){if(void 0===t)return Gr("GRPC error has no .code"),Qr.UNKNOWN;switch(t){case Ao.OK:return Qr.OK;case Ao.CANCELLED:return Qr.CANCELLED;case Ao.UNKNOWN:return Qr.UNKNOWN;case Ao.DEADLINE_EXCEEDED:return Qr.DEADLINE_EXCEEDED;case Ao.RESOURCE_EXHAUSTED:return Qr.RESOURCE_EXHAUSTED;case Ao.INTERNAL:return Qr.INTERNAL;case Ao.UNAVAILABLE:return Qr.UNAVAILABLE;case Ao.UNAUTHENTICATED:return Qr.UNAUTHENTICATED;case Ao.INVALID_ARGUMENT:return Qr.INVALID_ARGUMENT;case Ao.NOT_FOUND:return Qr.NOT_FOUND;case Ao.ALREADY_EXISTS:return Qr.ALREADY_EXISTS;case Ao.PERMISSION_DENIED:return Qr.PERMISSION_DENIED;case Ao.FAILED_PRECONDITION:return Qr.FAILED_PRECONDITION;case Ao.ABORTED:return Qr.ABORTED;case Ao.OUT_OF_RANGE:return Qr.OUT_OF_RANGE;case Ao.UNIMPLEMENTED:return Qr.UNIMPLEMENTED;case Ao.DATA_LOSS:return Qr.DATA_LOSS;default:return Wr()}}(Io=Ao||(Ao={}))[Io.OK=0]="OK",Io[Io.CANCELLED=1]="CANCELLED",Io[Io.UNKNOWN=2]="UNKNOWN",Io[Io.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Io[Io.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Io[Io.NOT_FOUND=5]="NOT_FOUND",Io[Io.ALREADY_EXISTS=6]="ALREADY_EXISTS",Io[Io.PERMISSION_DENIED=7]="PERMISSION_DENIED",Io[Io.UNAUTHENTICATED=16]="UNAUTHENTICATED",Io[Io.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Io[Io.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Io[Io.ABORTED=10]="ABORTED",Io[Io.OUT_OF_RANGE=11]="OUT_OF_RANGE",Io[Io.UNIMPLEMENTED=12]="UNIMPLEMENTED",Io[Io.INTERNAL=13]="INTERNAL",Io[Io.UNAVAILABLE=14]="UNAVAILABLE",Io[Io.DATA_LOSS=15]="DATA_LOSS";
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
class No{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Ni(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Oi(this.inner)}size(){return this.innerSize}}
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
 */const Oo=new Ri(yi.comparator);function Ro(){return Oo}const xo=new Ri(yi.comparator);function Lo(...t){let e=xo;for(const n of t)e=e.insert(n.key,n);return e}function Po(t){let e=xo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Fo(){return Uo()}function Mo(){return Uo()}function Uo(){return new No((t=>t.toString()),((t,e)=>t.isEqual(e)))}const Vo=new Ri(yi.comparator),jo=new Pi(yi.comparator);function Bo(...t){let e=jo;for(const n of t)e=e.add(n);return e}const $o=new Pi(li);function qo(){return $o}
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
(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})();class Ho{constructor(t,e){this.databaseId=t,this.dt=e}}function Go(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ko(t,e){return t.dt?e.toBase64():e.toUint8Array()}function zo(t,e){return Go(t,e.toTimestamp())}function Wo(t){return Jr(!!t),fi.fromTimestamp(function(t){const e=ji(t);return new hi(e.seconds,e.nanos)}(t))}function Jo(t,e){return function(t){return new pi(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Xo(t){const e=pi.fromString(t);return Jr(ua(e)),e}function Qo(t,e){return Jo(t.databaseId,e.path)}function Yo(t){const e=Xo(t);return 4===e.length?pi.emptyPath():ta(e)}function Zo(t){return new pi(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ta(t){return Jr(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function ea(t,e,n){return{name:Qo(t,e),fields:n.value.mapValue.fields}}function na(t,e){let n;if(e instanceof wo)n={update:ea(t,e.key,e.value)};else if(e instanceof Co)n={delete:Qo(t,e.key)};else if(e instanceof bo)n={update:ea(t,e.key,e.data),updateMask:la(e.fieldMask)};else{if(!(e instanceof So))return Wr();n={verify:Qo(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof to)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof eo)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ro)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof so)return{fieldPath:e.field.canonicalString(),increment:n._t};throw Wr()}(0,t)))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:zo(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:Wr()}(t,e.precondition)),n}function ra(t,e){return t&&t.length>0?(Jr(void 0!==e),t.map((t=>function(t,e){let n=t.updateTime?Wo(t.updateTime):Wo(e);return n.isEqual(fi.min())&&(n=Wo(e)),new lo(n,t.transformResults||[])}(t,e)))):[]}function ia(t){let e=Yo(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Jr(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=sa(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>function(t){return new Is(oa(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t))));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,zi(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new As(n,e)}(n.startAt));let l=null;return n.endAt&&(l=function(t){const e=!t.before,n=t.values||[];return new As(n,e)}(n.endAt)),Rs(e,i,o,s,a,"F",c,l)}function sa(t){return t?void 0!==t.unaryFilter?[ca(t)]:void 0!==t.fieldFilter?[aa(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>sa(t))).reduce(((t,e)=>t.concat(e))):Wr():[]}function oa(t){return mi.fromServerFormat(t.fieldPath)}function aa(t){return ys.create(oa(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Wr()}}(t.fieldFilter.op),t.fieldFilter.value)}function ca(t){switch(t.unaryFilter.op){case"IS_NAN":const e=oa(t.unaryFilter.field);return ys.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=oa(t.unaryFilter.field);return ys.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=oa(t.unaryFilter.field);return ys.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=oa(t.unaryFilter.field);return ys.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Wr()}}function la(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function ua(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
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
class pa{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&go(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=mo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=mo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=Mo();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=po(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(fi.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Bo())}isEqual(t){return this.batchId===t.batchId&&ui(this.mutations,t.mutations,((t,e)=>vo(t,e)))&&ui(this.baseMutations,t.baseMutations,((t,e)=>vo(t,e)))}}class ga{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){Jr(t.mutations.length===n.length);let r=Vo;const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new ga(t,e,n,r)}}
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
 */class ya{constructor(t){this.ne=t}}function va(t){const e=ia({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?js(e,e.limit,"L"):e}
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
class wa{constructor(){}re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(Bi(t.integerValue));else if("doubleValue"in t){const n=Bi(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),Wi(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de($i(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?cs(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):Wr()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const r of Object.keys(n))this.le(r,e),this.oe(n[r],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const r of n)this.oe(r,e)}_e(t,e){this.ce(e,37),yi.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}}wa.ye=new wa;
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
class ba{constructor(){this.ze=new Ea}addToCollectionParentIndex(t,e){return this.ze.add(e),Ai.resolve()}getCollectionParents(t,e){return Ai.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return Ai.resolve()}deleteFieldIndex(t,e){return Ai.resolve()}getDocumentsMatchingTarget(t,e){return Ai.resolve(null)}getIndexType(t,e){return Ai.resolve(0)}getFieldIndexes(t,e){return Ai.resolve([])}getNextCollectionGroupToUpdate(t){return Ai.resolve(null)}getMinOffset(t,e){return Ai.resolve(Ei.min())}getMinOffsetFromCollectionGroup(t,e){return Ai.resolve(Ei.min())}updateCollectionGroup(t,e,n){return Ai.resolve()}updateIndexEntries(t,e){return Ai.resolve()}}class Ea{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Pi(pi.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Pi(pi.comparator)).toArray()}}
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
class Ca{constructor(){this.changes=new No((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,hs.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Ai.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
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
 */class Aa{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&mo(n.mutation,t,Mi.empty(),hi.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Bo()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Bo()){const r=Fo();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Lo();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Fo();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Bo())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=Ro();const s=Uo(),o=Uo();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof bo)?i=i.insert(e.key,e):void 0!==o&&(s.set(e.key,o.mutation.getFieldMask()),mo(o.mutation,e,o.mutation.getFieldMask(),hi.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new Sa(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Uo();let r=new Ri(((t,e)=>t-e)),i=Bo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Mi.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Bo()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,l=Mo();c.forEach((t=>{if(!i.has(t)){const r=po(e.get(t),n.get(t));null!==r&&l.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,l))}return Ai.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return yi.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):Ms(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Ai.resolve(Fo());let o=-1,a=i;return s.next((e=>Ai.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Ai.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Bo()))).next((t=>({batchId:o,changes:Po(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new yi(e)).next((t=>{let e=Lo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=Lo();return this.indexManager.getCollectionParents(t,r).next((s=>Ai.forEach(s,(s=>{const o=function(t,e){return new Os(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,hs.newInvalidDocument(n)))}));let n=Lo();return r.forEach(((r,i)=>{const s=t.get(r);void 0!==s&&mo(s.mutation,i,Mi.empty(),hi.now()),Hs(e,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Ai.resolve(hs.newInvalidDocument(e))}}
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
 */class Ia{constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(t,e){return Ai.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:Wo(n.createTime)}),Ai.resolve()}getNamedQuery(t,e){return Ai.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,function(t){return{name:t.name,query:va(t.bundledQuery),readTime:Wo(t.readTime)}}(e)),Ai.resolve()}}
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
 */class ka{constructor(){this.overlays=new Ri(yi.comparator),this.Xn=new Map}getOverlay(t,e){return Ai.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Fo();return Ai.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ie(t,e,r)})),Ai.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),Ai.resolve()}getOverlaysForCollection(t,e,n){const r=Fo(),i=e.length+1,s=new yi(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Ai.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Ri(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Fo(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Fo(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Ai.resolve(o)}ie(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new ma(e,n));let i=this.Xn.get(e);void 0===i&&(i=Bo(),this.Xn.set(e,i)),this.Xn.set(e,i.add(n.key))}}
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
 */class Da{constructor(){this.Zn=new Pi(Na.ts),this.es=new Pi(Na.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Na(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new Na(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new yi(new pi([])),n=new Na(e,t),r=new Na(e,t+1),i=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),i.push(t.key)})),i}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new yi(new pi([])),n=new Na(e,t),r=new Na(e,t+1);let i=Bo();return this.es.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Na(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Na{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return yi.comparator(t.key,e.key)||li(t.ls,e.ls)}static ns(t,e){return li(t.ls,e.ls)||yi.comparator(t.key,e.key)}}
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
 */class Oa{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new Pi(Na.ts)}checkEmpty(t){return Ai.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new pa(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.ds=this.ds.add(new Na(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Ai.resolve(s)}lookupMutationBatch(t,e){return Ai.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ws(n),i=r<0?0:r;return Ai.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ai.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return Ai.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Na(e,0),r=new Na(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(t=>{const e=this._s(t.ls);i.push(e)})),Ai.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Pi(li);return e.forEach((t=>{const e=new Na(t,0),r=new Na(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),Ai.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;yi.isDocumentKey(i)||(i=i.child(""));const s=new Na(new yi(i),0);let o=new Pi(li);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),s),Ai.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){Jr(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Ai.forEach(e.mutations,(r=>{const i=new Na(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new Na(e,0),r=this.ds.firstAfterOrEqual(n);return Ai.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Ai.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
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
 */class Ra{constructor(t){this.ps=t,this.docs=new Ri(yi.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Ai.resolve(n?n.document.mutableCopy():hs.newInvalidDocument(e))}getEntries(t,e){let n=Ro();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():hs.newInvalidDocument(t))})),Ai.resolve(n)}getAllFromCollection(t,e,n){let r=Ro();const i=new yi(e.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||_i(bi(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Ai.resolve(r)}getAllFromCollectionGroup(t,e,n,r){Wr()}Is(t,e){return Ai.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new xa(this)}getSize(t){return Ai.resolve(this.size)}}class xa extends Ca{constructor(t){super(),this.zn=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.zn.addEntry(t,r)):this.zn.removeEntry(n)})),Ai.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}}
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
 */class La{constructor(t){this.persistence=t,this.Ts=new No((t=>ps(t)),ms),this.lastRemoteSnapshotVersion=fi.min(),this.highestTargetId=0,this.Es=0,this.As=new Da,this.targetCount=0,this.Rs=Ta.An()}forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),Ai.resolve()}getLastRemoteSnapshotVersion(t){return Ai.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Ai.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Ai.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),Ai.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new Ta(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,Ai.resolve()}updateTargetData(t,e){return this.vn(e),Ai.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,Ai.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Ai.waitFor(i).next((()=>r))}getTargetCount(t){return Ai.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Ai.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Ai.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Ai.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),Ai.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Ai.resolve(n)}containsKey(t,e){return Ai.resolve(this.As.containsKey(e))}}
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
 */class Pa{constructor(t,e){this.bs={},this.overlays={},this.Ps=new ki(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new La(this),this.indexManager=new ba,this.remoteDocumentCache=function(t){return new Ra(t)}((t=>this.referenceDelegate.Ss(t))),this.wt=new ya(e),this.Ds=new Ia(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ka,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new Oa(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){Hr("MemoryPersistence","Starting transaction:",t);const r=new Fa(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((t=>this.referenceDelegate.xs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ns(t,e){return Ai.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}}class Fa extends Ci{constructor(t){super(),this.currentSequenceNumber=t}}class Ma{constructor(t){this.persistence=t,this.ks=new Da,this.Os=null}static Ms(t){return new Ma(t)}get Fs(){if(this.Os)return this.Os;throw Wr()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),Ai.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),Ai.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),Ai.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ai.forEach(this.Fs,(n=>{const r=yi.fromPath(n);return this.$s(t,r).next((t=>{t||e.removeEntry(r,fi.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return Ai.or([()=>Ai.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}}
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
class Ua{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=r}static Vi(t,e){let n=Bo(),r=Bo();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ua(t,e.fromCache,n,r)}}
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
 */class Va{constructor(){this.Si=!1}initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ci(t,e).next((i=>i||this.xi(t,e,r,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return Ai.resolve(null)}xi(t,e,n,r){return Ls(e)||r.isEqual(fi.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((i=>{const s=this.ki(e,i);return this.Oi(e,s,n,r)?this.Ni(t,e):(qr()<=o["in"].DEBUG&&Hr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),qs(e)),this.Mi(t,s,e,wi(r,-1)))}))}ki(t,e){let n=new Pi(Gs(t));return e.forEach(((e,r)=>{Hs(t,r)&&(n=n.add(r))})),n}Oi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(t,e){return qr()<=o["in"].DEBUG&&Hr("QueryEngine","Using full collection scan to execute query:",qs(e)),this.Di.getDocumentsMatchingQuery(t,e,Ei.min())}Mi(t,e,n,r){return this.Di.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
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
 */class ja{constructor(t,e,n,r){this.persistence=t,this.Fi=e,this.wt=r,this.$i=new Ri(li),this.Bi=new No((t=>ps(t)),ms),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Aa(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}}function Ba(t,e,n,r){return new ja(t,e,n,r)}async function $a(t,e){const n=Xr(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Bo();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function qa(t,e){const n=Xr(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Ai.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);Jr(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=Bo();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}function Ha(t){const e=Xr(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function Ga(t,e){const n=Xr(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}class Ka{constructor(){this.activeTargetIds=qo()}Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class za{constructor(){this.Fr=new Ka,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Ka,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
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
 */class Ja{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){Hr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){Hr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const Xa={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class Ya extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(t,e,n,r,i){const s=this.oo(t,e);Hr("RestConnection","Sending: ",s,n);const o={};return this.uo(o,r,i),this.co(t,s,o,n).then((t=>(Hr("RestConnection","Received: ",t),t)),(e=>{throw Kr("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}ao(t,e,n,r,i,s){return this.ro(t,e,n,r,i)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+Br,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Xa[t];return`${this.so}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,e,n,r){return new Promise(((i,s)=>{const o=new Ur;o.listenOnce(xr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Rr.NO_ERROR:const e=o.getResponseJson();Hr("Connection","XHR received:",JSON.stringify(e)),i(e);break;case Rr.TIMEOUT:Hr("Connection",'RPC "'+t+'" timed out'),s(new Yr(Qr.DEADLINE_EXCEEDED,"Request time out"));break;case Rr.HTTP_ERROR:const n=o.getStatus();if(Hr("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(Qr).indexOf(e)>=0?e:Qr.UNKNOWN}(t.status);s(new Yr(e,t.message))}else s(new Yr(Qr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Yr(Qr.UNAVAILABLE,"Connection failed."));break;default:Wr()}}finally{Hr("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Nr(),s=Or(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Fr({})),this.uo(o.initMessageHeaders,e,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const c=r.join("");Hr("Connection","Creating WebChannel: "+c,o);const l=i.createWebChannel(c,o);let u=!1,h=!1;const f=new Qa({jr:t=>{h?Hr("Connection","Not sending because WebChannel is closed:",t):(u||(Hr("Connection","Opening WebChannel transport."),l.open(),u=!0),Hr("Connection","WebChannel sending:",t),l.send(t))},Wr:()=>l.close()}),d=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return d(l,Mr.EventType.OPEN,(()=>{h||Hr("Connection","WebChannel transport opened.")})),d(l,Mr.EventType.CLOSE,(()=>{h||(h=!0,Hr("Connection","WebChannel transport closed"),f.eo())})),d(l,Mr.EventType.ERROR,(t=>{h||(h=!0,Kr("Connection","WebChannel transport errored:",t),f.eo(new Yr(Qr.UNAVAILABLE,"The operation could not be completed")))})),d(l,Mr.EventType.MESSAGE,(t=>{var e;if(!h){const n=t.data[0];Jr(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){Hr("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Ao[t];if(void 0!==e)return Do(e)}(t),n=i.message;void 0===e&&(e=Qr.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,f.eo(new Yr(e,n)),l.close()}else Hr("Connection","WebChannel received:",n),f.no(n)}})),d(s,Lr.STAT_EVENT,(t=>{t.stat===Pr.PROXY?Hr("Connection","Detected buffering proxy"):t.stat===Pr.NOPROXY&&Hr("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.Zr()}),0),f}}
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
 */function tc(t){return new Ho(t,!0)}class ec{constructor(t,e,n=1e3,r=1.5,i=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,e-n);r>0&&Hr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
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
 */class nc{constructor(t,e,n,r,i,s,o,a){this.js=t,this.Ao=n,this.Ro=r,this.bo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new ec(t,e)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===Qr.RESOURCE_EXHAUSTED?(Gr(e.toString()),Gr("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===Qr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new Yr(Qr.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return Hr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(Hr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class rc extends nc{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(Jr(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const e=ra(t.writeResults,t.commitTime),n=Wo(t.commitTime);return this.listener.Jo(n,e)}return Jr(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Zo(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>na(this.wt,t)))};this.Mo(e)}}
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
 */class ic extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new Yr(Qr.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ro(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Yr(Qr.UNKNOWN,t.toString())}))}ao(t,e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ao(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===Qr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new Yr(Qr.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}}class sc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Gr(e),this.su=!1):Hr("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
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
 */class oc{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br((t=>{n.enqueueAndForget((async()=>{lc(this)&&(Hr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=Xr(t);e.lu.add(4),await cc(e),e._u.set("Unknown"),e.lu.delete(4),await ac(e)}(this))}))})),this._u=new sc(n,r)}}async function ac(t){if(lc(t))for(const e of t.fu)await e(!0)}async function cc(t){for(const e of t.fu)await e(!1)}function lc(t){return 0===Xr(t).lu.size}async function uc(t,e,n){if(!Ii(e))throw e;t.lu.add(1),await cc(t),t._u.set("Offline"),n||(n=()=>Ha(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Hr("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await ac(t)}))}function hc(t,e){return e().catch((n=>uc(t,n,e)))}async function fc(t){const e=Xr(t),n=Tc(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;dc(e);)try{const t=await Ga(e.localStore,r);if(null===t){0===e.au.length&&n.ko();break}r=t.batchId,pc(e,t)}catch(t){await uc(e,t)}gc(e)&&mc(e)}function dc(t){return lc(t)&&t.au.length<10}function pc(t,e){t.au.push(e);const n=Tc(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function gc(t){return lc(t)&&!Tc(t).Do()&&t.au.length>0}function mc(t){Tc(t).start()}async function yc(t){Tc(t).Xo()}async function vc(t){const e=Tc(t);for(const n of t.au)e.Ho(n.mutations)}async function wc(t,e,n){const r=t.au.shift(),i=ga.from(r,e,n);await hc(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await fc(t)}async function bc(t,e){e&&Tc(t).zo&&await async function(t,e){if(n=e.code,ko(n)&&n!==Qr.ABORTED){const n=t.au.shift();Tc(t).No(),await hc(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await fc(t)}var n}(t,e),gc(t)&&mc(t)}async function Ec(t,e){const n=Xr(t);n.asyncQueue.verifyOperationInProgress(),Hr("RemoteStore","RemoteStore received new credentials");const r=lc(n);n.lu.add(3),await cc(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await ac(n)}async function _c(t,e){const n=Xr(t);e?(n.lu.delete(2),await ac(n)):e||(n.lu.add(2),await cc(n),n._u.set("Unknown"))}function Tc(t){return t.gu||(t.gu=function(t,e,n){const r=Xr(t);return r.tu(),new rc(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:yc.bind(null,t),Jr:bc.bind(null,t),Yo:vc.bind(null,t),Jo:wc.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await fc(t)):(await t.gu.stop(),t.au.length>0&&(Hr("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
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
 */}class Cc{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Cc(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Yr(Qr.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Sc(t,e){if(Gr("AsyncQueue",`${e}: ${t}`),Ii(t))return new Yr(Qr.UNAVAILABLE,`${e}: ${t}`);throw t}
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
 */class Ac{constructor(){this.queries=new No((t=>$s(t)),Bs),this.onlineState="Unknown",this.Tu=new Set}}function Ic(t){t.Tu.forEach((t=>{t.next()}))}class kc{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Zu={},this.tc=new No((t=>$s(t)),Bs),this.ec=new Map,this.nc=new Set,this.sc=new Ri(yi.comparator),this.ic=new Map,this.rc=new Da,this.oc={},this.uc=new Map,this.cc=Ta.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function Dc(t,e,n){const r=Mc(t);try{const t=await function(t,e){const n=Xr(t),r=hi.now(),i=e.reduce(((t,e)=>t.add(e.key)),Bo());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=Ro(),c=Bo();return n.Ui.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=yo(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new bo(t.key,e,us(e.value.mapValue),uo.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Po(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.oc[t.currentUser.toKey()];r||(r=new Ri(li)),r=r.insert(e,n),t.oc[t.currentUser.toKey()]=r}(r,t.batchId,n),await Pc(r,t.changes),await fc(r.remoteStore)}catch(t){const e=Sc(t,"Failed to persist write");n.reject(e)}}function Nc(t,e,n){const r=Xr(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.tc.forEach(((n,r)=>{const i=r.view.Eu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=Xr(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.Eu(e)&&(r=!0)})),r&&Ic(n)}(r.eventManager,e),t.length&&r.Zu.Go(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Oc(t,e){const n=Xr(t),r=e.batch.batchId;try{const t=await qa(n.localStore,e);Lc(n,r,null),xc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pc(n,t)}catch(t){await Si(t)}}async function Rc(t,e,n){const r=Xr(t);try{const t=await function(t,e){const n=Xr(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(Jr(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);Lc(r,e,n),xc(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pc(r,t)}catch(n){await Si(n)}}function xc(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function Lc(t,e,n){const r=Xr(t);let i=r.oc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}async function Pc(t,e,n){const r=Xr(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((t,a)=>{o.push(r.hc(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=Ua.Vi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Zu.Go(i),await async function(t,e){const n=Xr(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Ai.forEach(e,(e=>Ai.forEach(e.Pi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Ai.forEach(e.vi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Ii(t))throw t;Hr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.$i.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(t,i)}}}(r.localStore,s))}async function Fc(t,e){const n=Xr(t);if(!n.currentUser.isEqual(e)){Hr("SyncEngine","User change. New user:",e.toKey());const t=await $a(n.localStore,e);n.currentUser=e,function(t,e){t.uc.forEach((t=>{t.forEach((t=>{t.reject(new Yr(Qr.CANCELLED,e))}))})),t.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Pc(n,t.Ki)}}function Mc(t){const e=Xr(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Oc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Rc.bind(null,e),e}class Uc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.wt=tc(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return Ba(this.persistence,new Va,t.initialUser,this.wt)}_c(t){return new Pa(Ma.Ms,this.wt)}dc(t){return new za}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Vc{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Nc(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Fc.bind(null,this.syncEngine),await _c(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ac}createDatastore(t){const e=tc(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Ya(r));var r;return function(t,e,n,r){return new ic(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Nc(this.syncEngine,t,0),s=Ja.V()?new Ja:new Wa,new oc(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new kc(t,e,n,r,i,s);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=Xr(t);Hr("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await cc(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
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
class jc{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=jr.UNAUTHENTICATED,this.clientId=ci.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Hr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Hr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Yr(Qr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Sc(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function Bc(t,e){t.asyncQueue.verifyOperationInProgress(),Hr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await $a(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function $c(t,e){t.asyncQueue.verifyOperationInProgress();const n=await qc(t);Hr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>Ec(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Ec(e.remoteStore,n))),t.onlineComponents=e}async function qc(t){return t.offlineComponents||(Hr("FirestoreClient","Using default OfflineComponentProvider"),await Bc(t,new Uc)),t.offlineComponents}async function Hc(t){return t.onlineComponents||(Hr("FirestoreClient","Using default OnlineComponentProvider"),await $c(t,new Vc)),t.onlineComponents}function Gc(t){return Hc(t).then((t=>t.syncEngine))}const Kc=new Map;
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
 */function zc(t,e,n){if(!n)throw new Yr(Qr.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Wc(t,e,n,r){if(!0===e&&!0===r)throw new Yr(Qr.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Jc(t){if(!yi.isDocumentKey(t))throw new Yr(Qr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Xc(t){if(yi.isDocumentKey(t))throw new Yr(Qr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Qc(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":Wr()}function Yc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Yr(Qr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Qc(t);throw new Yr(Qr.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
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
 */class tl{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Zc({}),this._settingsFrozen=!1,t instanceof Ki?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new Yr(Qr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ki(t.options.projectId)}(t))}get app(){if(!this._app)throw new Yr(Qr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new Yr(Qr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Zc(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new ei;switch(t.type){case"gapi":const e=t.client;return Jr(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new ii(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new Yr(Qr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Kc.get(t);e&&(Hr("ComponentProvider","Removing Datastore"),Kc.delete(t),e.terminate())}(this),Promise.resolve()}}
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
class el{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new rl(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new el(this.firestore,t,this._key)}}class nl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new nl(this.firestore,t,this._query)}}class rl extends nl{constructor(t,e,n){super(t,e,xs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new el(this.firestore,null,new yi(t))}withConverter(t){return new rl(this.firestore,t,this._path)}}function il(t,e,...n){if(t=(0,a.m9)(t),zc("collection","path",e),t instanceof tl){const r=pi.fromString(e,...n);return Xc(r),new rl(t,null,r)}{if(!(t instanceof el||t instanceof rl))throw new Yr(Qr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pi.fromString(e,...n));return Xc(r),new rl(t.firestore,null,r)}}function sl(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=ci.I()),zc("doc","path",e),t instanceof tl){const r=pi.fromString(e,...n);return Jc(r),new el(t,null,new yi(r))}{if(!(t instanceof el||t instanceof rl))throw new Yr(Qr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(pi.fromString(e,...n));return Jc(r),new el(t.firestore,t instanceof rl?t.converter:null,new yi(r))}}
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
class ol{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new ec(this,"async_queue_retry"),this.Kc=()=>{const t=Za();t&&Hr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=Za();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=Za();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new Zr;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(_){if(!Ii(_))throw _;Hr("AsyncQueue","Operation failed with retryable error: "+_)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
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
 */(t);throw Gr("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const r=Cc.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(r),r}Gc(){this.Bc&&Wr()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}}class al extends tl{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new ol,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ul(this),this._firestoreClient.terminate()}}function cl(t=(0,i.Mq)()){return(0,i.qX)(t,"firestore").getImmediate()}function ll(t){return t._firestoreClient||ul(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ul(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new Gi(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new jc(t._authCredentials,t._appCheckCredentials,t._queue,r)}
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
class hl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new Yr(Qr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mi(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
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
class fl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new fl(Ui.fromBase64String(t))}catch(t){throw new Yr(Qr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new fl(Ui.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
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
 */class pl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new Yr(Qr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new Yr(Qr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return li(this._lat,t._lat)||li(this._long,t._long)}}
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
 */const gl=/^__.*__$/;class ml{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new bo(t,this.data,this.fieldMask,e,this.fieldTransforms):new wo(t,this.data,e,this.fieldTransforms)}}function yl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Wr()}}class vl{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new vl(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.sa(t),r}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return Dl(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(yl(this.Zc)&&gl.test(t))throw this.oa('Document fields cannot begin and end with "__"')}}class wl{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||tc(t)}aa(t,e,n,r=!1){return new vl({Zc:t,methodName:e,ca:n,path:mi.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function bl(t){const e=t._freezeSettings(),n=tc(t._databaseId);return new wl(t._databaseId,!!e.ignoreUndefinedProperties,n)}function El(t,e,n,r,i,s={}){const o=t.aa(s.merge||s.mergeFields?2:0,e,n,i);Sl("Data must be an object, but it was:",o,r);const a=Tl(r,o);let c,l;if(s.merge)c=new Mi(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Al(e,r,n);if(!o.contains(i))throw new Yr(Qr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Nl(t,i)||t.push(i)}c=new Mi(t),l=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,l=o.fieldTransforms;return new ml(new ls(a),c,l)}function _l(t,e){if(Cl(t=(0,a.m9)(t)))return Sl("Unsupported field value:",e,t),Tl(t,e);if(t instanceof dl)return function(t,e){if(!yl(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=_l(i,e.ra(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.m9)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Js(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=hi.fromDate(t);return{timestampValue:Go(e.wt,n)}}if(t instanceof hi){const n=new hi(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Go(e.wt,n)}}if(t instanceof pl)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof fl)return{bytesValue:Ko(e.wt,t._byteString)};if(t instanceof el){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Jo(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${Qc(t)}`)}(t,e)}function Tl(t,e){const n={};return Oi(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ni(t,((t,r)=>{const i=_l(r,e.ea(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Cl(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof hi||t instanceof pl||t instanceof fl||t instanceof el||t instanceof dl)}function Sl(t,e,n){if(!Cl(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Qc(n);throw"an object"===r?e.oa(t+" a custom object"):e.oa(t+" "+r)}}function Al(t,e,n){if((e=(0,a.m9)(e))instanceof hl)return e._internalPath;if("string"==typeof e)return kl(t,e);throw Dl("Field path arguments must be of type string or ",t,!1,void 0,n)}const Il=new RegExp("[~\\*/\\[\\]]");function kl(t,e,n){if(e.search(Il)>=0)throw Dl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new hl(...e.split("."))._internalPath}catch(r){throw Dl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Dl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new Yr(Qr.INVALID_ARGUMENT,a+t+c)}function Nl(t,e){return t.some((t=>t.isEqual(e)))}
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
function Ol(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function Rl(t,e){const n=Yc(t.firestore,al),r=sl(t),i=Ol(t.converter,e);return xl(n,[El(bl(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,uo.exists(!1))]).then((()=>r))}function xl(t,e){return function(t,e){const n=new Zr;return t.asyncQueue.enqueueAndForget((async()=>Dc(await Gc(t),e,n))),n.promise}(ll(t),e)}!function(t,e=!0){!function(t){Br=t}(i.Jn),(0,i.Xd)(new s.wA("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new al(r,new ni(t.getProvider("auth-internal")),new oi(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),(0,i.KN)(Vr,"3.4.13",t),(0,i.KN)(Vr,"3.4.13","esm2017")}()},4444:function(t,e,n){"use strict";n.d(e,{BH:function(){return c},L:function(){return a},LL:function(){return b},Mn:function(){return g},ZR:function(){return w},b$:function(){return f},d:function(){return d},eu:function(){return y},hl:function(){return m},m9:function(){return S},ru:function(){return h},uI:function(){return u},vZ:function(){return T},w1:function(){return p}});
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
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,l=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[l],n[u],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const l=i<t.length,u=l?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==u)throw Error();const h=e<<2|o>>4;if(r.push(h),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==u){const t=c<<6&192|u;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")};
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
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function u(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function h(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function d(){return l().indexOf("Electron/")>=0}function p(){const t=l();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g(){return l().indexOf("MSAppHost/")>=0}function m(){return"object"===typeof indexedDB}function y(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
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
const v="FirebaseError";class w extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=v,Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?E(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new w(r,o,n);return a}}function E(t,e){return t.replace(_,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const _=/\{\$([^}]+)}/g;
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
 */function T(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(C(n)&&C(s)){if(!T(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function C(t){return null!==t&&"object"===typeof t}
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
function S(t){return t&&t._delegate?t._delegate:t}},2262:function(t,e,n){"use strict";n.d(e,{Bj:function(){return s},Fl:function(){return qt},IU:function(){return kt},Jd:function(){return T},PG:function(){return Ct},SU:function(){return Vt},Um:function(){return Et},WL:function(){return Bt},X$:function(){return I},X3:function(){return It},XI:function(){return Ft},Xl:function(){return Dt},dq:function(){return Lt},iH:function(){return Pt},j:function(){return S},lk:function(){return C},qj:function(){return bt},qq:function(){return w},yT:function(){return At}});var r=n(3577);let i;class s{constructor(t=!1){this.active=!0,this.effects=[],this.cleanups=[],!t&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(t){if(this.active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this.active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.active=!1}}}function o(t,e=i){e&&e.active&&e.effects.push(t)}const a=t=>{const e=new Set(t);return e.w=0,e.n=0,e},c=t=>(t.w&p)>0,l=t=>(t.n&p)>0,u=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=p},h=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];c(i)&&!l(i)?i.delete(t):e[n++]=i,i.w&=~p,i.n&=~p}e.length=n}},f=new WeakMap;let d=0,p=1;const g=30;let m;const y=Symbol(""),v=Symbol("");class w{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let t=m,e=E;while(t){if(t===this)return;t=t.parent}try{return this.parent=m,m=this,E=!0,p=1<<++d,d<=g?u(this):b(this),this.fn()}finally{d<=g&&h(this),p=1<<--d,m=this.parent,E=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){m===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let E=!0;const _=[];function T(){_.push(E),E=!1}function C(){const t=_.pop();E=void 0===t||t}function S(t,e,n){if(E&&m){let e=f.get(t);e||f.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=a());const i=void 0;A(r,i)}}function A(t,e){let n=!1;d<=g?l(t)||(t.n|=p,n=!c(t)):n=!t.has(m),n&&(t.add(m),m.deps.push(t))}function I(t,e,n,i,s,o){const c=f.get(t);if(!c)return;let l=[];if("clear"===e)l=[...c.values()];else if("length"===n&&(0,r.kJ)(t))c.forEach(((t,e)=>{("length"===e||e>=i)&&l.push(t)}));else switch(void 0!==n&&l.push(c.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&l.push(c.get("length")):(l.push(c.get(y)),(0,r._N)(t)&&l.push(c.get(v)));break;case"delete":(0,r.kJ)(t)||(l.push(c.get(y)),(0,r._N)(t)&&l.push(c.get(v)));break;case"set":(0,r._N)(t)&&l.push(c.get(y));break}if(1===l.length)l[0]&&k(l[0]);else{const t=[];for(const e of l)e&&t.push(...e);k(a(t))}}function k(t,e){const n=(0,r.kJ)(t)?t:[...t];for(const r of n)r.computed&&D(r,e);for(const r of n)r.computed||D(r,e)}function D(t,e){(t!==m||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),O=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk)),R=M(),x=M(!1,!0),L=M(!0),P=F();function F(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=kt(this);for(let e=0,i=this.length;e<i;e++)S(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(kt)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){T();const n=kt(this)[e].apply(this,t);return C(),n}})),t}function M(t=!1,e=!1){return function(n,i,s){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_isShallow"===i)return e;if("__v_raw"===i&&s===(t?e?yt:mt:e?gt:pt).get(n))return n;const o=(0,r.kJ)(n);if(!t&&o&&(0,r.RI)(P,i))return Reflect.get(P,i,s);const a=Reflect.get(n,i,s);return((0,r.yk)(i)?O.has(i):N(i))?a:(t||S(n,"get",i),e?a:Lt(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?t?_t(a):bt(a):a)}}const U=j(),V=j(!0);function j(t=!1){return function(e,n,i,s){let o=e[n];if(St(o)&&Lt(o)&&!Lt(i))return!1;if(!t&&!St(i)&&(At(i)||(i=kt(i),o=kt(o)),!(0,r.kJ)(e)&&Lt(o)&&!Lt(i)))return o.value=i,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),c=Reflect.set(e,n,i,s);return e===kt(s)&&(a?(0,r.aU)(i,o)&&I(e,"set",n,i,o):I(e,"add",n,i)),c}}function B(t,e){const n=(0,r.RI)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&I(t,"delete",e,void 0,i),s}function $(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&O.has(e)||S(t,"has",e),n}function q(t){return S(t,"iterate",(0,r.kJ)(t)?"length":y),Reflect.ownKeys(t)}const H={get:R,set:U,deleteProperty:B,has:$,ownKeys:q},G={get:L,set(t,e){return!0},deleteProperty(t,e){return!0}},K=(0,r.l7)({},H,{get:x,set:V}),z=t=>t,W=t=>Reflect.getPrototypeOf(t);function J(t,e,n=!1,r=!1){t=t["__v_raw"];const i=kt(t),s=kt(e);n||(e!==s&&S(i,"get",e),S(i,"get",s));const{has:o}=W(i),a=r?z:n?Ot:Nt;return o.call(i,e)?a(t.get(e)):o.call(i,s)?a(t.get(s)):void(t!==i&&t.get(e))}function X(t,e=!1){const n=this["__v_raw"],r=kt(n),i=kt(t);return e||(t!==i&&S(r,"has",t),S(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Q(t,e=!1){return t=t["__v_raw"],!e&&S(kt(t),"iterate",y),Reflect.get(t,"size",t)}function Y(t){t=kt(t);const e=kt(this),n=W(e),r=n.has.call(e,t);return r||(e.add(t),I(e,"add",t,t)),this}function Z(t,e){e=kt(e);const n=kt(this),{has:i,get:s}=W(n);let o=i.call(n,t);o||(t=kt(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?(0,r.aU)(e,a)&&I(n,"set",t,e,a):I(n,"add",t,e),this}function tt(t){const e=kt(this),{has:n,get:r}=W(e);let i=n.call(e,t);i||(t=kt(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&I(e,"delete",t,void 0,s),o}function et(){const t=kt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&I(t,"clear",void 0,void 0,n),r}function nt(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=kt(s),a=e?z:t?Ot:Nt;return!t&&S(o,"iterate",y),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function rt(t,e,n){return function(...i){const s=this["__v_raw"],o=kt(s),a=(0,r._N)(o),c="entries"===t||t===Symbol.iterator&&a,l="keys"===t&&a,u=s[t](...i),h=n?z:e?Ot:Nt;return!e&&S(o,"iterate",l?v:y),{next(){const{value:t,done:e}=u.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function it(t){return function(...e){return"delete"!==t&&this}}function st(){const t={get(t){return J(this,t)},get size(){return Q(this)},has:X,add:Y,set:Z,delete:tt,clear:et,forEach:nt(!1,!1)},e={get(t){return J(this,t,!1,!0)},get size(){return Q(this)},has:X,add:Y,set:Z,delete:tt,clear:et,forEach:nt(!1,!0)},n={get(t){return J(this,t,!0)},get size(){return Q(this,!0)},has(t){return X.call(this,t,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:nt(!0,!1)},r={get(t){return J(this,t,!0,!0)},get size(){return Q(this,!0)},has(t){return X.call(this,t,!0)},add:it("add"),set:it("set"),delete:it("delete"),clear:it("clear"),forEach:nt(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=rt(i,!1,!1),n[i]=rt(i,!0,!1),e[i]=rt(i,!1,!0),r[i]=rt(i,!0,!0)})),[t,n,e,r]}const[ot,at,ct,lt]=st();function ut(t,e){const n=e?t?lt:ct:t?at:ot;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.RI)(n,i)&&i in e?n:e,i,s)}const ht={get:ut(!1,!1)},ft={get:ut(!1,!0)},dt={get:ut(!0,!1)};const pt=new WeakMap,gt=new WeakMap,mt=new WeakMap,yt=new WeakMap;function vt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:vt((0,r.W7)(t))}function bt(t){return St(t)?t:Tt(t,!1,H,ht,pt)}function Et(t){return Tt(t,!1,K,ft,gt)}function _t(t){return Tt(t,!0,G,dt,mt)}function Tt(t,e,n,i,s){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=wt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function Ct(t){return St(t)?Ct(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function St(t){return!(!t||!t["__v_isReadonly"])}function At(t){return!(!t||!t["__v_isShallow"])}function It(t){return Ct(t)||St(t)}function kt(t){const e=t&&t["__v_raw"];return e?kt(e):t}function Dt(t){return(0,r.Nj)(t,"__v_skip",!0),t}const Nt=t=>(0,r.Kn)(t)?bt(t):t,Ot=t=>(0,r.Kn)(t)?_t(t):t;function Rt(t){E&&m&&(t=kt(t),A(t.dep||(t.dep=a())))}function xt(t,e){t=kt(t),t.dep&&k(t.dep)}function Lt(t){return!(!t||!0!==t.__v_isRef)}function Pt(t){return Mt(t,!1)}function Ft(t){return Mt(t,!0)}function Mt(t,e){return Lt(t)?t:new Ut(t,e)}class Ut{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:kt(t),this._value=e?t:Nt(t)}get value(){return Rt(this),this._value}set value(t){t=this.__v_isShallow?t:kt(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=this.__v_isShallow?t:Nt(t),xt(this,t))}}function Vt(t){return Lt(t)?t.value:t}const jt={get:(t,e,n)=>Vt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Lt(i)&&!Lt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function Bt(t){return Ct(t)?t:new Proxy(t,jt)}class $t{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new w(t,(()=>{this._dirty||(this._dirty=!0,xt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=kt(this);return Rt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function qt(t,e,n=!1){let i,s;const o=(0,r.mf)(t);o?(i=t,s=r.dG):(i=t.get,s=t.set);const a=new $t(i,s,o||!s,n);return a}},6252:function(t,e,n){"use strict";n.d(e,{$d:function(){return o},Cn:function(){return B},FN:function(){return mn},Fl:function(){return Rn},HY:function(){return Fe},JJ:function(){return Q},Ko:function(){return Ht},P$:function(){return ct},Q6:function(){return pt},U2:function(){return ut},Uk:function(){return sn},Us:function(){return Ne},Wm:function(){return tn},Y3:function(){return _},Y8:function(){return st},YP:function(){return tt},_:function(){return Ze},aZ:function(){return gt},dD:function(){return j},f3:function(){return Y},h:function(){return xn},iD:function(){return ze},ic:function(){return Nt},nK:function(){return dt},uE:function(){return on},up:function(){return jt},w5:function(){return $},wg:function(){return $e},wy:function(){return Mt}});var r=n(2262),i=n(3577);function s(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){a(s,e,n)}return i}function o(t,e,n,r){if((0,i.mf)(t)){const o=s(t,e,n,r);return o&&(0,i.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let i=0;i<t.length;i++)c.push(o(t[i],e,n,r));return c}function a(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void s(a,null,10,[t,i,o])}c(t,n,i,r)}function c(t,e,n,r=!0){console.error(t)}let l=!1,u=!1;const h=[];let f=0;const d=[];let p=null,g=0;const m=[];let y=null,v=0;const w=Promise.resolve();let b=null,E=null;function _(t){const e=b||w;return t?e.then(this?t.bind(this):t):e}function T(t){let e=f+1,n=h.length;while(e<n){const r=e+n>>>1,i=R(h[r]);i<t?e=r+1:n=r}return e}function C(t){h.length&&h.includes(t,l&&t.allowRecurse?f+1:f)||t===E||(null==t.id?h.push(t):h.splice(T(t.id),0,t),S())}function S(){l||u||(u=!0,b=w.then(x))}function A(t){const e=h.indexOf(t);e>f&&h.splice(e,1)}function I(t,e,n,r){(0,i.kJ)(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?r+1:r)||n.push(t),S()}function k(t){I(t,p,d,g)}function D(t){I(t,y,m,v)}function N(t,e=null){if(d.length){for(E=e,p=[...new Set(d)],d.length=0,g=0;g<p.length;g++)p[g]();p=null,g=0,E=null,N(t,e)}}function O(t){if(N(),m.length){const t=[...new Set(m)];if(m.length=0,y)return void y.push(...t);for(y=t,y.sort(((t,e)=>R(t)-R(e))),v=0;v<y.length;v++)y[v]();y=null,v=0}}const R=t=>null==t.id?1/0:t.id;function x(t){u=!1,l=!0,N(t),h.sort(((t,e)=>R(t)-R(e)));i.dG;try{for(f=0;f<h.length;f++){const t=h[f];t&&!1!==t.active&&s(t,null,14)}}finally{f=0,h.length=0,O(t),l=!1,b=null,(h.length||d.length||m.length)&&x(t)}}new Set;new Map;function L(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.kT;let s=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||i.kT;o&&(s=n.map((t=>t.trim()))),e&&(s=n.map(i.He))}let l;let u=r[l=(0,i.hR)(e)]||r[l=(0,i.hR)((0,i._A)(e))];!u&&a&&(u=r[l=(0,i.hR)((0,i.rs)(e))]),u&&o(u,t,6,s);const h=r[l+"Once"];if(h){if(t.emitted){if(t.emitted[l])return}else t.emitted={};t.emitted[l]=!0,o(h,t,6,s)}}function P(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.mf)(t)){const r=t=>{const n=P(t,e,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((t=>a[t]=null)):(0,i.l7)(a,o),r.set(t,a),a):(r.set(t,null),null)}function F(t,e){return!(!t||!(0,i.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,i.RI)(t,(0,i.rs)(e))||(0,i.RI)(t,e))}let M=null,U=null;function V(t){const e=M;return M=t,U=t&&t.type.__scopeId||null,e}function j(t){U=t}function B(){U=null}function $(t,e=M,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Ge(-1);const i=V(e),s=t(...n);return V(i),r._d&&Ge(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function q(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:l,attrs:u,emit:h,render:f,renderCache:d,data:p,setupState:g,ctx:m,inheritAttrs:y}=t;let v,w;const b=V(t);try{if(4&n.shapeFlag){const t=s||r;v=an(f.call(t,t,d,o,g,p,m)),w=u}else{const t=e;0,v=an(t.length>1?t(o,{attrs:u,slots:l,emit:h}):t(o,null)),w=e.props?u:H(u)}}catch(_){je.length=0,a(_,t,1),v=tn(Ue)}let E=v;if(w&&!1!==y){const t=Object.keys(w),{shapeFlag:e}=E;t.length&&7&e&&(c&&t.some(i.tR)&&(w=G(w,c)),E=rn(E,w))}return n.dirs&&(E=rn(E),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),v=E,V(b),v}const H=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.F7)(n))&&((e||(e={}))[n]=t[n]);return e},G=(t,e)=>{const n={};for(const r in t)(0,i.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function K(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||z(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?z(r,o,l):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!F(l,n))return!0}}return!1}function z(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!F(n,s))return!0}return!1}function W({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const J=t=>t.__isSuspense;function X(t,e){e&&e.pendingBranch?(0,i.kJ)(t)?e.effects.push(...t):e.effects.push(t):D(t)}function Q(t,e){if(gn){let n=gn.provides;const r=gn.parent&&gn.parent.provides;r===n&&(n=gn.provides=Object.create(r)),n[t]=e}else 0}function Y(t,e,n=!1){const r=gn||M;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.mf)(e)?e.call(r.proxy):e}else 0}const Z={};function tt(t,e,n){return et(t,e,n)}function et(t,e,{immediate:n,deep:a,flush:c,onTrack:l,onTrigger:u}=i.kT){const h=gn;let f,d,p=!1,g=!1;if((0,r.dq)(t)?(f=()=>t.value,p=(0,r.yT)(t)):(0,r.PG)(t)?(f=()=>t,a=!0):(0,i.kJ)(t)?(g=!0,p=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),f=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?it(t):(0,i.mf)(t)?s(t,h,2):void 0))):f=(0,i.mf)(t)?e?()=>s(t,h,2):()=>{if(!h||!h.isUnmounted)return d&&d(),o(t,h,3,[m])}:i.dG,e&&a){const t=f;f=()=>it(t())}let m=t=>{d=b.onStop=()=>{s(t,h,4)}};if(_n)return m=i.dG,e?n&&o(e,h,3,[f(),g?[]:void 0,m]):f(),i.dG;let y=g?[]:Z;const v=()=>{if(b.active)if(e){const t=b.run();(a||p||(g?t.some(((t,e)=>(0,i.aU)(t,y[e]))):(0,i.aU)(t,y)))&&(d&&d(),o(e,h,3,[t,y===Z?void 0:y,m]),y=t)}else b.run()};let w;v.allowRecurse=!!e,w="sync"===c?v:"post"===c?()=>De(v,h&&h.suspense):()=>k(v);const b=new r.qq(f,w);return e?n?v():y=b.run():"post"===c?De(b.run.bind(b),h&&h.suspense):b.run(),()=>{b.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,b)}}function nt(t,e,n){const r=this.proxy,s=(0,i.HD)(t)?t.includes(".")?rt(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.mf)(e)?o=e:(o=e.handler,n=e);const a=gn;yn(this);const c=et(s,o.bind(r),n);return a?yn(a):vn(),c}function rt(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function it(t,e){if(!(0,i.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))it(t.value,e);else if((0,i.kJ)(t))for(let n=0;n<t.length;n++)it(t[n],e);else if((0,i.DM)(t)||(0,i._N)(t))t.forEach((t=>{it(t,e)}));else if((0,i.PO)(t))for(const n in t)it(t[n],e);return t}function st(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kt((()=>{t.isMounted=!0})),Ot((()=>{t.isUnmounting=!0})),t}const ot=[Function,Array],at={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ot,onEnter:ot,onAfterEnter:ot,onEnterCancelled:ot,onBeforeLeave:ot,onLeave:ot,onAfterLeave:ot,onLeaveCancelled:ot,onBeforeAppear:ot,onAppear:ot,onAfterAppear:ot,onAppearCancelled:ot},setup(t,{slots:e}){const n=mn(),i=st();let s;return()=>{const o=e.default&&pt(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==Ue){0,a=e,t=!0;break}}const c=(0,r.IU)(t),{mode:l}=c;if(i.isLeaving)return ht(a);const u=ft(a);if(!u)return ht(a);const h=ut(u,c,i,n);dt(u,h);const f=n.subTree,d=f&&ft(f);let p=!1;const{getTransitionKey:g}=u.type;if(g){const t=g();void 0===s?s=t:t!==s&&(s=t,p=!0)}if(d&&d.type!==Ue&&(!Je(u,d)||p)){const t=ut(d,c,i,n);if(dt(d,t),"out-in"===l)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,n.update()},ht(a);"in-out"===l&&u.type!==Ue&&(t.delayLeave=(t,e,n)=>{const r=lt(i,d);r[String(d.key)]=d,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},ct=at;function lt(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ut(t,e,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:y,onAppear:v,onAfterAppear:w,onAppearCancelled:b}=e,E=String(t.key),_=lt(n,t),T=(t,e)=>{t&&o(t,r,9,e)},C=(t,e)=>{const n=e[1];T(t,e),(0,i.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(e){let r=l;if(!n.isMounted){if(!s)return;r=y||l}e._leaveCb&&e._leaveCb(!0);const i=_[E];i&&Je(t,i)&&i.el._leaveCb&&i.el._leaveCb(),T(r,[e])},enter(t){let e=u,r=h,i=f;if(!n.isMounted){if(!s)return;e=v||u,r=w||h,i=b||f}let o=!1;const a=t._enterCb=e=>{o||(o=!0,T(e?i:r,[t]),S.delayedLeave&&S.delayedLeave(),t._enterCb=void 0)};e?C(e,[t,a]):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();T(d,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,r(),T(n?m:g,[e]),e._leaveCb=void 0,_[i]===t&&delete _[i])};_[i]=t,p?C(p,[e,o]):o()},clone(t){return ut(t,e,n,r)}};return S}function ht(t){if(yt(t))return t=rn(t),t.children=null,t}function ft(t){return yt(t)?t.children?t.children[0]:void 0:t}function dt(t,e){6&t.shapeFlag&&t.component?dt(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function pt(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Fe?(128&o.patchFlag&&i++,r=r.concat(pt(o.children,e,a))):(e||o.type!==Ue)&&r.push(null!=a?rn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function gt(t){return(0,i.mf)(t)?{setup:t,name:t.name}:t}const mt=t=>!!t.type.__asyncLoader;const yt=t=>t.type.__isKeepAlive;RegExp,RegExp;function vt(t,e){return(0,i.kJ)(t)?t.some((t=>vt(t,e))):(0,i.HD)(t)?t.split(",").includes(e):!!t.test&&t.test(e)}function wt(t,e){Et(t,"a",e)}function bt(t,e){Et(t,"da",e)}function Et(t,e,n=gn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(St(e,r,n),n){let t=n.parent;while(t&&t.parent)yt(t.parent.vnode)&&_t(r,e,n,t),t=t.parent}}function _t(t,e,n,r){const s=St(e,t,r,!0);Rt((()=>{(0,i.Od)(r[e],s)}),n)}function Tt(t){let e=t.shapeFlag;256&e&&(e-=256),512&e&&(e-=512),t.shapeFlag=e}function Ct(t){return 128&t.shapeFlag?t.ssContent:t}function St(t,e,n=gn,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),yn(n);const s=o(e,n,t,i);return vn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const At=t=>(e,n=gn)=>(!_n||"sp"===t)&&St(t,e,n),It=At("bm"),kt=At("m"),Dt=At("bu"),Nt=At("u"),Ot=At("bum"),Rt=At("um"),xt=At("sp"),Lt=At("rtg"),Pt=At("rtc");function Ft(t,e=gn){St("ec",t,e)}function Mt(t,e){const n=M;if(null===n)return t;const r=Dn(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=i.kT]=e[o];(0,i.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&it(n),s.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c})}return t}function Ut(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const l=s[c];a&&(l.oldValue=a[c].value);let u=l.dir[i];u&&((0,r.Jd)(),o(u,n,8,[t.el,l,t,e]),(0,r.lk)())}}const Vt="components";function jt(t,e){return $t(Vt,t,!0,e)||t}const Bt=Symbol();function $t(t,e,n=!0,r=!1){const s=M||gn;if(s){const n=s.type;if(t===Vt){const t=Nn(n,!1);if(t&&(t===e||t===(0,i._A)(e)||t===(0,i.kC)((0,i._A)(e))))return n}const o=qt(s[t]||n[t],e)||qt(s.appContext[t],e);return!o&&r?n:o}}function qt(t,e){return t&&(t[e]||t[(0,i._A)(e)]||t[(0,i.kC)((0,i._A)(e))])}function Ht(t,e,n,r){let s;const o=n&&n[r];if((0,i.kJ)(t)||(0,i.HD)(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const Gt=t=>t?wn(t)?Dn(t)||t.proxy:Gt(t.parent):null,Kt=(0,i.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Gt(t.parent),$root:t=>Gt(t.root),$emit:t=>t.emit,$options:t=>Zt(t),$forceUpdate:t=>t.f||(t.f=()=>C(t.update)),$nextTick:t=>t.n||(t.n=_.bind(t.proxy)),$watch:t=>nt.bind(t)}),zt={get({_:t},e){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:l,appContext:u}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(s!==i.kT&&(0,i.RI)(s,e))return c[e]=1,s[e];if(o!==i.kT&&(0,i.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.RI)(h,e))return c[e]=3,a[e];if(n!==i.kT&&(0,i.RI)(n,e))return c[e]=4,n[e];Wt&&(c[e]=0)}}const f=Kt[e];let d,p;return f?("$attrs"===e&&(0,r.j)(t,"get",e),f(t)):(d=l.__cssModules)&&(d=d[e])?d:n!==i.kT&&(0,i.RI)(n,e)?(c[e]=4,n[e]):(p=u.config.globalProperties,(0,i.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return s!==i.kT&&(0,i.RI)(s,e)?(s[e]=n,!0):r!==i.kT&&(0,i.RI)(r,e)?(r[e]=n,!0):!(0,i.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==i.kT&&(0,i.RI)(t,a)||e!==i.kT&&(0,i.RI)(e,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(Kt,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Wt=!0;function Jt(t){const e=Zt(t),n=t.proxy,s=t.ctx;Wt=!1,e.beforeCreate&&Qt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:w,beforeUnmount:b,destroyed:E,unmounted:_,render:T,renderTracked:C,renderTriggered:S,errorCaptured:A,serverPrefetch:I,expose:k,inheritAttrs:D,components:N,directives:O,filters:R}=e,x=null;if(h&&Xt(h,s,x,t.appContext.config.unwrapInjectedRef),c)for(const r in c){const t=c[r];(0,i.mf)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Kn)(e)&&(t.data=(0,r.qj)(e))}if(Wt=!0,a)for(const r in a){const t=a[r],e=(0,i.mf)(t)?t.bind(n,n):(0,i.mf)(t.get)?t.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(t)&&(0,i.mf)(t.set)?t.set.bind(n):i.dG,c=Rn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(l)for(const r in l)Yt(l[r],s,n,r);if(u){const t=(0,i.mf)(u)?u.call(n):u;Reflect.ownKeys(t).forEach((e=>{Q(e,t[e])}))}function L(t,e){(0,i.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&Qt(f,t,"c"),L(It,d),L(kt,p),L(Dt,g),L(Nt,m),L(wt,y),L(bt,v),L(Ft,A),L(Pt,C),L(Lt,S),L(Ot,b),L(Rt,_),L(xt,I),(0,i.kJ)(k))if(k.length){const e=t.exposed||(t.exposed={});k.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===i.dG&&(t.render=T),null!=D&&(t.inheritAttrs=D),N&&(t.components=N),O&&(t.directives=O)}function Xt(t,e,n=i.dG,s=!1){(0,i.kJ)(t)&&(t=ie(t));for(const o in t){const n=t[o];let a;a=(0,i.Kn)(n)?"default"in n?Y(n.from||o,n.default,!0):Y(n.from||o):Y(n),(0,r.dq)(a)&&s?Object.defineProperty(e,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:t=>a.value=t}):e[o]=a}}function Qt(t,e,n){o((0,i.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Yt(t,e,n,r){const s=r.includes(".")?rt(n,r):()=>n[r];if((0,i.HD)(t)){const n=e[t];(0,i.mf)(n)&&tt(s,n)}else if((0,i.mf)(t))tt(s,t.bind(n));else if((0,i.Kn)(t))if((0,i.kJ)(t))t.forEach((t=>Yt(t,e,n,r)));else{const r=(0,i.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.mf)(r)&&tt(s,r,t)}else 0}function Zt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach((t=>te(c,t,o,!0))),te(c,e,o)):c=e,s.set(e,c),c}function te(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&te(t,s,n,!0),i&&i.forEach((e=>te(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=ee[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const ee={data:ne,props:oe,emits:oe,methods:oe,computed:oe,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:oe,directives:oe,watch:ae,provide:ne,inject:re};function ne(t,e){return e?t?function(){return(0,i.l7)((0,i.mf)(t)?t.call(this,this):t,(0,i.mf)(e)?e.call(this,this):e)}:e:t}function re(t,e){return oe(ie(t),ie(e))}function ie(t){if((0,i.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function se(t,e){return t?[...new Set([].concat(t,e))]:e}function oe(t,e){return t?(0,i.l7)((0,i.l7)(Object.create(null),t),e):e}function ae(t,e){if(!t)return e;if(!e)return t;const n=(0,i.l7)(Object.create(null),t);for(const r in e)n[r]=se(t[r],e[r]);return n}function ce(t,e,n,s=!1){const o={},a={};(0,i.Nj)(a,Xe,1),t.propsDefaults=Object.create(null),ue(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=s?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function le(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,l=(0,r.IU)(o),[u]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;ue(t,e,o,a)&&(h=!0);for(const s in l)e&&((0,i.RI)(e,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(e,r))||(u?!n||void 0===n[s]&&void 0===n[r]||(o[s]=he(u,l,s,void 0,t,!0)):delete o[s]);if(a!==l)for(const t in a)e&&(0,i.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(F(t.emitsOptions,s))continue;const c=e[s];if(u)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i._A)(s);o[e]=he(u,l,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function ue(t,e,n,s){const[o,a]=t.propsOptions;let c,l=!1;if(e)for(let r in e){if((0,i.Gg)(r))continue;const u=e[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:F(t.emitsOptions,r)||r in s&&u===s[r]||(s[r]=u,l=!0)}if(a){const e=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=he(o,e,c,s[c],t,!(0,i.RI)(s,c))}}return l}function he(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&(0,i.mf)(t)){const{propsDefaults:i}=s;n in i?r=i[n]:(yn(s),r=i[n]=t.call(null,e),vn())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function fe(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let l=!1;if(!(0,i.mf)(t)){const r=t=>{l=!0;const[n,r]=fe(t,e,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!l)return r.set(t,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,i._A)(o[h]);de(t)&&(a[t]=i.kT)}else if(o){0;for(const t in o){const e=(0,i._A)(t);if(de(e)){const n=o[t],r=a[e]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const t=me(Boolean,r.type),n=me(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.RI)(r,"default"))&&c.push(e)}}}}const u=[a,c];return r.set(t,u),u}function de(t){return"$"!==t[0]}function pe(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:null===t?"null":""}function ge(t,e){return pe(t)===pe(e)}function me(t,e){return(0,i.kJ)(e)?e.findIndex((e=>ge(e,t))):(0,i.mf)(e)&&ge(e,t)?0:-1}const ye=t=>"_"===t[0]||"$stable"===t,ve=t=>(0,i.kJ)(t)?t.map(an):[an(t)],we=(t,e,n)=>{if(e._n)return e;const r=$(((...t)=>ve(e(...t))),n);return r._c=!1,r},be=(t,e,n)=>{const r=t._ctx;for(const s in t){if(ye(s))continue;const n=t[s];if((0,i.mf)(n))e[s]=we(s,n,r);else if(null!=n){0;const t=ve(n);e[s]=()=>t}}},Ee=(t,e)=>{const n=ve(e);t.slots.default=()=>n},_e=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,i.Nj)(e,"_",n)):be(e,t.slots={})}else t.slots={},e&&Ee(t,e);(0,i.Nj)(t.slots,Xe,1)},Te=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,i.l7)(s,e),n||1!==t||delete s._):(o=!e.$stable,be(e,s)),a=e}else e&&(Ee(t,e),a={default:1});if(o)for(const i in s)ye(i)||i in a||delete s[i]};function Ce(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Se=0;function Ae(t,e){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=Ce(),o=new Set;let a=!1;const c=s.app={_uid:Se++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Ln,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,i.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,i.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(i,o,l){if(!a){0;const u=tn(n,r);return u.appContext=s,o&&e?e(u,i):t(u,i,l),a=!0,c._container=i,i.__vue_app__=c,Dn(u.component)||u.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c}};return c}}function Ie(t,e,n,o,a=!1){if((0,i.kJ)(t))return void t.forEach(((t,r)=>Ie(t,e&&((0,i.kJ)(e)?e[r]:e),n,o,a)));if(mt(o)&&!a)return;const c=4&o.shapeFlag?Dn(o.component)||o.component.proxy:o.el,l=a?null:c,{i:u,r:h}=t;const f=e&&e.r,d=u.refs===i.kT?u.refs={}:u.refs,p=u.setupState;if(null!=f&&f!==h&&((0,i.HD)(f)?(d[f]=null,(0,i.RI)(p,f)&&(p[f]=null)):(0,r.dq)(f)&&(f.value=null)),(0,i.mf)(h))s(h,u,12,[l,d]);else{const e=(0,i.HD)(h),s=(0,r.dq)(h);if(e||s){const r=()=>{if(t.f){const n=e?d[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):e?(d[h]=[c],(0,i.RI)(p,h)&&(p[h]=d[h])):(h.value=[c],t.k&&(d[t.k]=h.value))}else e?(d[h]=l,(0,i.RI)(p,h)&&(p[h]=l)):s&&(h.value=l,t.k&&(d[t.k]=l))};l?(r.id=-1,De(r,n)):r()}else 0}}function ke(){}const De=X;function Ne(t){return Oe(t)}function Oe(t,e){ke();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.dG,cloneNode:m,insertStaticContent:y}=t,v=(t,e,n,r=null,i=null,s=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Je(t,e)&&(r=Z(t),z(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=e;switch(l){case Me:w(t,e,n,r);break;case Ue:b(t,e,n,r);break;case Ve:null==t&&E(e,n,r,o);break;case Fe:P(t,e,n,r,i,s,o,a,c);break;default:1&h?S(t,e,n,r,i,s,o,a,c):6&h?F(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(t,e,n,r,i,s,o,a,c,et)}null!=u&&i&&Ie(u,t&&t.ref,s,e||t,!e)},w=(t,e,n,r)=>{if(null==t)s(e.el=l(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?s(e.el=u(e.children||""),n,r):e.el=t.el},E=(t,e,n,r)=>{[t.el,t.anchor]=y(t.children,e,n,r,t.el,t.anchor)},_=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},T=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},S=(t,e,n,r,i,s,o,a,c)=>{o=o||"svg"===e.type,null==t?I(e,n,r,i,s,o,a,c):R(t,e,i,s,o,a,c)},I=(t,e,n,r,o,l,u,h)=>{let d,p;const{type:g,props:y,shapeFlag:v,transition:w,patchFlag:b,dirs:E}=t;if(t.el&&void 0!==m&&-1===b)d=t.el=m(t.el);else{if(d=t.el=c(t.type,l,y&&y.is,y),8&v?f(d,t.children):16&v&&D(t.children,d,null,r,o,l&&"foreignObject"!==g,u,h),E&&Ut(t,null,r,"created"),y){for(const e in y)"value"===e||(0,i.Gg)(e)||a(d,e,null,y[e],l,t.children,r,o,Y);"value"in y&&a(d,"value",null,y.value),(p=y.onVnodeBeforeMount)&&hn(p,r,t)}k(d,t,t.scopeId,u,r)}E&&Ut(t,null,r,"beforeMount");const _=(!o||o&&!o.pendingBranch)&&w&&!w.persisted;_&&w.beforeEnter(d),s(d,e,n),((p=y&&y.onVnodeMounted)||_||E)&&De((()=>{p&&hn(p,r,t),_&&w.enter(d),E&&Ut(t,null,r,"mounted")}),o)},k=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;k(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},D=(t,e,n,r,i,s,o,a,c=0)=>{for(let l=c;l<t.length;l++){const c=t[l]=a?cn(t[l]):an(t[l]);v(null,c,e,n,r,i,s,o,a)}},R=(t,e,n,r,s,o,c)=>{const l=e.el=t.el;let{patchFlag:u,dynamicChildren:h,dirs:d}=e;u|=16&t.patchFlag;const p=t.props||i.kT,g=e.props||i.kT;let m;n&&Re(n,!1),(m=g.onVnodeBeforeUpdate)&&hn(m,n,e,t),d&&Ut(e,t,n,"beforeUpdate"),n&&Re(n,!0);const y=s&&"foreignObject"!==e.type;if(h?x(t.dynamicChildren,h,l,n,r,y,o):c||B(t,e,l,null,n,r,y,o,!1),u>0){if(16&u)L(l,e,p,g,n,r,s);else if(2&u&&p.class!==g.class&&a(l,"class",null,g.class,s),4&u&&a(l,"style",p.style,g.style,s),8&u){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const o=i[e],c=p[o],u=g[o];u===c&&"value"!==o||a(l,o,c,u,s,t.children,n,r,Y)}}1&u&&t.children!==e.children&&f(l,e.children)}else c||null!=h||L(l,e,p,g,n,r,s);((m=g.onVnodeUpdated)||d)&&De((()=>{m&&hn(m,n,e,t),d&&Ut(e,t,n,"updated")}),r)},x=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],l=e[a],u=c.el&&(c.type===Fe||!Je(c,l)||70&c.shapeFlag)?d(c.el):n;v(c,l,u,null,r,i,s,o,!0)}},L=(t,e,n,r,s,o,c)=>{if(n!==r){for(const l in r){if((0,i.Gg)(l))continue;const u=r[l],h=n[l];u!==h&&"value"!==l&&a(t,l,h,u,c,e.children,s,o,Y)}if(n!==i.kT)for(const l in n)(0,i.Gg)(l)||l in r||a(t,l,n[l],null,c,e.children,s,o,Y);"value"in r&&a(t,"value",n.value,r.value)}},P=(t,e,n,r,i,o,a,c,u)=>{const h=e.el=t?t.el:l(""),f=e.anchor=t?t.anchor:l("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(s(h,n,r),s(f,n,r),D(e.children,n,f,i,o,a,c,u)):d>0&&64&d&&p&&t.dynamicChildren?(x(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&xe(t,e,!0)):B(t,e,n,f,i,o,a,c,u)},F=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):M(e,n,r,i,s,o,c):U(t,e,c)},M=(t,e,n,r,i,s,o)=>{const a=t.component=pn(t,r,i);if(yt(t)&&(a.ctx.renderer=et),Tn(a),a.asyncDep){if(i&&i.registerDep(a,V),!t.el){const t=a.subTree=tn(Ue);b(null,t,e,n)}}else V(a,t,e,n,i,s,o)},U=(t,e,n)=>{const r=e.component=t.component;if(K(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,e,n);r.next=e,A(r.update),r.update()}else e.el=t.el,r.vnode=e},V=(t,e,n,s,o,a,c)=>{const l=()=>{if(t.isMounted){let e,{next:n,bu:r,u:s,parent:l,vnode:u}=t,h=n;0,Re(t,!1),n?(n.el=u.el,j(t,n,c)):n=u,r&&(0,i.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&hn(e,l,n,u),Re(t,!0);const f=q(t);0;const p=t.subTree;t.subTree=f,v(p,f,d(p.el),Z(p),t,o,a),n.el=f.el,null===h&&W(t,f.el),s&&De(s,o),(e=n.props&&n.props.onVnodeUpdated)&&De((()=>hn(e,l,n,u)),o)}else{let r;const{el:c,props:l}=e,{bm:u,m:h,parent:f}=t,d=mt(e);if(Re(t,!1),u&&(0,i.ir)(u),!d&&(r=l&&l.onVnodeBeforeMount)&&hn(r,f,e),Re(t,!0),c&&rt){const n=()=>{t.subTree=q(t),rt(c,t.subTree,t,o,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=q(t);0,v(null,r,n,s,t,o,a),e.el=r.el}if(h&&De(h,o),!d&&(r=l&&l.onVnodeMounted)){const t=e;De((()=>hn(r,f,t)),o)}(256&e.shapeFlag||f&&mt(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&De(t.a,o),t.isMounted=!0,e=n=s=null}},u=t.effect=new r.qq(l,(()=>C(h)),t.scope),h=t.update=()=>u.run();h.id=t.uid,Re(t,!0),h()},j=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,le(t,e.props,i,n),Te(t,e.children,n),(0,r.Jd)(),N(void 0,t.update),(0,r.lk)()},B=(t,e,n,r,i,s,o,a,c=!1)=>{const l=t&&t.children,u=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void H(l,h,n,r,i,s,o,a,c);if(256&d)return void $(l,h,n,r,i,s,o,a,c)}8&p?(16&u&&Y(l,i,s),h!==l&&f(n,h)):16&u?16&p?H(l,h,n,r,i,s,o,a,c):Y(l,i,s,!0):(8&u&&f(n,""),16&p&&D(h,n,r,i,s,o,a,c))},$=(t,e,n,r,s,o,a,c,l)=>{t=t||i.Z6,e=e||i.Z6;const u=t.length,h=e.length,f=Math.min(u,h);let d;for(d=0;d<f;d++){const r=e[d]=l?cn(e[d]):an(e[d]);v(t[d],r,n,null,s,o,a,c,l)}u>h?Y(t,s,o,!0,!1,f):D(e,n,r,s,o,a,c,l,f)},H=(t,e,n,r,s,o,a,c,l)=>{let u=0;const h=e.length;let f=t.length-1,d=h-1;while(u<=f&&u<=d){const r=t[u],i=e[u]=l?cn(e[u]):an(e[u]);if(!Je(r,i))break;v(r,i,n,null,s,o,a,c,l),u++}while(u<=f&&u<=d){const r=t[f],i=e[d]=l?cn(e[d]):an(e[d]);if(!Je(r,i))break;v(r,i,n,null,s,o,a,c,l),f--,d--}if(u>f){if(u<=d){const t=d+1,i=t<h?e[t].el:r;while(u<=d)v(null,e[u]=l?cn(e[u]):an(e[u]),n,i,s,o,a,c,l),u++}}else if(u>d)while(u<=f)z(t[u],s,o,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=d;u++){const t=e[u]=l?cn(e[u]):an(e[u]);null!=t.key&&m.set(t.key,u)}let y,w=0;const b=d-g+1;let E=!1,_=0;const T=new Array(b);for(u=0;u<b;u++)T[u]=0;for(u=p;u<=f;u++){const r=t[u];if(w>=b){z(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(y=g;y<=d;y++)if(0===T[y-g]&&Je(r,e[y])){i=y;break}void 0===i?z(r,s,o,!0):(T[i-g]=u+1,i>=_?_=i:E=!0,v(r,e[i],n,null,s,o,a,c,l),w++)}const C=E?Le(T):i.Z6;for(y=C.length-1,u=b-1;u>=0;u--){const t=g+u,i=e[t],f=t+1<h?e[t+1].el:r;0===T[u]?v(null,i,n,f,s,o,a,c,l):E&&(y<0||u!==C[y]?G(i,n,f,2):y--)}}},G=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=t;if(6&u)return void G(t.component.subTree,e,n,r);if(128&u)return void t.suspense.move(e,n,r);if(64&u)return void a.move(t,e,n,et);if(a===Fe){s(o,e,n);for(let t=0;t<l.length;t++)G(l[t],e,n,r);return void s(t.anchor,e,n)}if(a===Ve)return void _(t,e,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(o),s(o,e,n),De((()=>c.enter(o)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>s(o,e,n),l=()=>{t(o,(()=>{a(),i&&i()}))};r?r(o,a,l):l()}else s(o,e,n)},z=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:f}=t;if(null!=a&&Ie(a,null,n,t,!0),256&u)return void e.ctx.deactivate(t);const d=1&u&&f,p=!mt(t);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&hn(g,e,t),6&u)Q(t.component,n,r);else{if(128&u)return void t.suspense.unmount(n,r);d&&Ut(t,null,e,"beforeUnmount"),64&u?t.type.remove(t,e,n,i,et,r):l&&(s!==Fe||h>0&&64&h)?Y(l,e,n,!1,!0):(s===Fe&&384&h||!i&&16&u)&&Y(c,e,n),r&&J(t)}(p&&(g=o&&o.onVnodeUnmounted)||d)&&De((()=>{g&&hn(g,e,t),d&&Ut(t,null,e,"unmounted")}),n)},J=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Fe)return void X(n,r);if(e===Ve)return void T(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},X=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Q=(t,e,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=t;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,z(a,t,e,n)),c&&De(c,e),De((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Y=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)z(t[o],e,n,r,i)},Z=t=>6&t.shapeFlag?Z(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),tt=(t,e,n)=>{null==t?e._vnode&&z(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),O(),e._vnode=t},et={p:v,um:z,m:G,r:J,mt:M,mc:D,pc:B,pbc:x,n:Z,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:Ae(tt,nt)}}function Re({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function xe(t,e,n=!1){const r=t.children,s=e.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=cn(s[i]),e.el=t.el),n||xe(t,e))}}function Le(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const Pe=t=>t.__isTeleport;const Fe=Symbol(void 0),Me=Symbol(void 0),Ue=Symbol(void 0),Ve=Symbol(void 0),je=[];let Be=null;function $e(t=!1){je.push(Be=t?null:[])}function qe(){je.pop(),Be=je[je.length-1]||null}let He=1;function Ge(t){He+=t}function Ke(t){return t.dynamicChildren=He>0?Be||i.Z6:null,qe(),He>0&&Be&&Be.push(t),t}function ze(t,e,n,r,i,s){return Ke(Ze(t,e,n,r,i,s,!0))}function We(t){return!!t&&!0===t.__v_isVNode}function Je(t,e){return t.type===e.type&&t.key===e.key}const Xe="__vInternal",Qe=({key:t})=>null!=t?t:null,Ye=({ref:t,ref_key:e,ref_for:n})=>null!=t?(0,i.HD)(t)||(0,r.dq)(t)||(0,i.mf)(t)?{i:M,r:t,k:e,f:!!n}:t:null;function Ze(t,e=null,n=null,r=0,s=null,o=(t===Fe?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Qe(e),ref:e&&Ye(e),scopeId:U,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return c?(ln(l,n),128&o&&t.normalize(l)):n&&(l.shapeFlag|=(0,i.HD)(n)?8:16),He>0&&!a&&Be&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&Be.push(l),l}const tn=en;function en(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==Bt||(t=Ue),We(t)){const r=rn(t,e,!0);return n&&ln(r,n),He>0&&!a&&Be&&(6&r.shapeFlag?Be[Be.indexOf(t)]=r:Be.push(r)),r.patchFlag|=-2,r}if(On(t)&&(t=t.__vccOpts),e){e=nn(e);let{class:t,style:n}=e;t&&!(0,i.HD)(t)&&(e.class=(0,i.C_)(t)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),e.style=(0,i.j5)(n))}const c=(0,i.HD)(t)?1:J(t)?128:Pe(t)?64:(0,i.Kn)(t)?4:(0,i.mf)(t)?2:0;return Ze(t,e,n,s,o,c,a,!0)}function nn(t){return t?(0,r.X3)(t)||Xe in t?(0,i.l7)({},t):t:null}function rn(t,e,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=t,c=e?un(r||{},e):r,l={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Qe(c),ref:e&&e.ref?n&&s?(0,i.kJ)(s)?s.concat(Ye(e)):[s,Ye(e)]:Ye(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Fe?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rn(t.ssContent),ssFallback:t.ssFallback&&rn(t.ssFallback),el:t.el,anchor:t.anchor};return l}function sn(t=" ",e=0){return tn(Me,null,t,e)}function on(t,e){const n=tn(Ve,null,t);return n.staticCount=e,n}function an(t){return null==t||"boolean"===typeof t?tn(Ue):(0,i.kJ)(t)?tn(Fe,null,t.slice()):"object"===typeof t?cn(t):tn(Me,null,String(t))}function cn(t){return null===t.el||t.memo?t:rn(t)}function ln(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),ln(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Xe in e?3===r&&M&&(1===M.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=M}}else(0,i.mf)(e)?(e={default:e,_ctx:M},n=32):(e=String(e),64&r?(n=16,e=[sn(e)]):n=8);t.children=e,t.shapeFlag|=n}function un(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C_)([e.class,r.class]));else if("style"===t)e.style=(0,i.j5)([e.style,r.style]);else if((0,i.F7)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function hn(t,e,n,r=null){o(t,e,7,[n,r])}const fn=Ce();let dn=0;function pn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||fn,a={uid:dn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:fe(s,o),emitsOptions:P(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=L.bind(null,a),t.ce&&t.ce(a),a}let gn=null;const mn=()=>gn||M,yn=t=>{gn=t,t.scope.on()},vn=()=>{gn&&gn.scope.off(),gn=null};function wn(t){return 4&t.vnode.shapeFlag}let bn,En,_n=!1;function Tn(t,e=!1){_n=e;const{props:n,children:r}=t.vnode,i=wn(t);ce(t,n,i,e),_e(t,r);const s=i?Cn(t,e):void 0;return _n=!1,s}function Cn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,zt));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?kn(t):null;yn(t),(0,r.Jd)();const c=s(o,t,0,[t.props,n]);if((0,r.lk)(),vn(),(0,i.tI)(c)){if(c.then(vn,vn),e)return c.then((n=>{Sn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else Sn(t,c,e)}else An(t,e)}function Sn(t,e,n){(0,i.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Kn)(e)&&(t.setupState=(0,r.WL)(e)),An(t,n)}function An(t,e,n){const s=t.type;if(!t.render){if(!e&&bn&&!s.render){const e=s.template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=bn(e,c)}}t.render=s.render||i.dG,En&&En(t)}yn(t),(0,r.Jd)(),Jt(t),(0,r.lk)(),vn()}function In(t){return new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}})}function kn(t){const e=e=>{t.exposed=e||{}};let n;return{get attrs(){return n||(n=In(t))},slots:t.slots,emit:t.emit,expose:e}}function Dn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in Kt?Kt[n](t):void 0}}))}function Nn(t,e=!0){return(0,i.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function On(t){return(0,i.mf)(t)&&"__vccOpts"in t}const Rn=(t,e)=>(0,r.Fl)(t,e,_n);function xn(t,e,n){const r=arguments.length;return 2===r?(0,i.Kn)(e)&&!(0,i.kJ)(e)?We(e)?tn(t,null,[e]):tn(t,e):tn(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&We(n)&&(n=[n]),tn(t,e,n))}Symbol("");const Ln="3.2.37"},9963:function(t,e,n){"use strict";n.d(e,{F8:function(){return ot},iM:function(){return st},nr:function(){return nt},ri:function(){return ht}});var r=n(3577),i=n(6252);n(2262);const s="http://www.w3.org/2000/svg",o="undefined"!==typeof document?document:null,a=o&&o.createElement("template"),c={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?o.createElementNS(s,t):o.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>o.createTextNode(t),createComment:t=>o.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>o.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{a.innerHTML=r?`<svg>${t}</svg>`:t;const i=a.content;if(r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function l(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function u(t,e,n){const i=t.style,s=(0,r.HD)(n);if(n&&!s){for(const t in n)f(i,t,n[t]);if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&f(i,t,"")}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const h=/\s*!important$/;function f(t,e,n){if((0,r.kJ)(n))n.forEach((n=>f(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=g(t,e);h.test(n)?t.setProperty((0,r.rs)(i),n.replace(h,""),"important"):t[i]=n}}const d=["Webkit","Moz","ms"],p={};function g(t,e){const n=p[e];if(n)return n;let i=(0,r._A)(e);if("filter"!==i&&i in t)return p[e]=i;i=(0,r.kC)(i);for(let r=0;r<d.length;r++){const n=d[r]+i;if(n in t)return p[e]=n}return e}const m="http://www.w3.org/1999/xlink";function y(t,e,n,i,s){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(m,e.slice(6,e.length)):t.setAttributeNS(m,e,n);else{const i=(0,r.Pq)(e);null==n||i&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function v(t,e,n,i,s,o,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,s,o),void(t[e]=null==n?"":n);if("value"===e&&"PROGRESS"!==t.tagName&&!t.tagName.includes("-")){t._value=n;const r=null==n?"":n;return t.value===r&&"OPTION"!==t.tagName||(t.value=r),void(null==n&&t.removeAttribute(e))}let c=!1;if(""===n||null==n){const i=typeof t[e];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",c=!0):"number"===i&&(n=0,c=!0)}try{t[e]=n}catch(l){0}c&&t.removeAttribute(e)}const[w,b]=(()=>{let t=Date.now,e=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let E=0;const _=Promise.resolve(),T=()=>{E=0},C=()=>E||(_.then(T),E=w());function S(t,e,n,r){t.addEventListener(e,n,r)}function A(t,e,n,r){t.removeEventListener(e,n,r)}function I(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=D(e);if(r){const o=s[e]=N(r,i);S(t,n,o,a)}else o&&(A(t,n,o,a),s[e]=void 0)}}const k=/(?:Once|Passive|Capture)$/;function D(t){let e;if(k.test(t)){let n;e={};while(n=t.match(k))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[(0,r.rs)(t.slice(2)),e]}function N(t,e){const n=t=>{const r=t.timeStamp||w();(b||r>=n.attached-1)&&(0,i.$d)(O(t,n.value),e,5,[t])};return n.value=t,n.attached=C(),n}function O(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const R=/^on[a-z]/,x=(t,e,n,i,s=!1,o,a,c,h)=>{"class"===e?l(t,i,s):"style"===e?u(t,n,i):(0,r.F7)(e)?(0,r.tR)(e)||I(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):L(t,e,i,s))?v(t,e,i,o,a,c,h):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),y(t,e,i,s))};function L(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&R.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!R.test(e)||!(0,r.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const P="transition",F="animation",M=(t,{slots:e})=>(0,i.h)(i.P$,B(t),e);M.displayName="Transition";const U={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},V=(M.props=(0,r.l7)({},i.P$.props,U),(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)}),j=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function B(t){const e={};for(const r in t)r in U||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=$(s),m=g&&g[0],y=g&&g[1],{onBeforeEnter:v,onEnter:w,onEnterCancelled:b,onLeave:E,onLeaveCancelled:_,onBeforeAppear:T=v,onAppear:C=w,onAppearCancelled:S=b}=e,A=(t,e,n)=>{G(t,e?h:c),G(t,e?u:a),n&&n()},I=(t,e)=>{t._isLeaving=!1,G(t,f),G(t,p),G(t,d),e&&e()},k=t=>(e,n)=>{const r=t?C:w,s=()=>A(e,t,n);V(r,[e,s]),K((()=>{G(e,t?l:o),H(e,t?h:c),j(r)||W(e,i,m,s)}))};return(0,r.l7)(e,{onBeforeEnter(t){V(v,[t]),H(t,o),H(t,a)},onBeforeAppear(t){V(T,[t]),H(t,l),H(t,u)},onEnter:k(!1),onAppear:k(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>I(t,e);H(t,f),Y(),H(t,d),K((()=>{t._isLeaving&&(G(t,f),H(t,p),j(E)||W(t,i,y,n))})),V(E,[t,n])},onEnterCancelled(t){A(t,!1),V(b,[t])},onAppearCancelled(t){A(t,!0),V(S,[t])},onLeaveCancelled(t){I(t),V(_,[t])}})}function $(t){if(null==t)return null;if((0,r.Kn)(t))return[q(t.enter),q(t.leave)];{const e=q(t);return[e,e]}}function q(t){const e=(0,r.He)(t);return e}function H(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function G(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function K(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let z=0;function W(t,e,n,r){const i=t._endId=++z,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=J(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),s()},f=e=>{e.target===t&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),t.addEventListener(l,f)}function J(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(P+"Delay"),s=r(P+"Duration"),o=X(i,s),a=r(F+"Delay"),c=r(F+"Duration"),l=X(a,c);let u=null,h=0,f=0;e===P?o>0&&(u=P,h=o,f=s.length):e===F?l>0&&(u=F,h=l,f=c.length):(h=Math.max(o,l),u=h>0?o>l?P:F:null,f=u?u===P?s.length:c.length:0);const d=u===P&&/\b(transform|all)(,|$)/.test(n[P+"Property"]);return{type:u,timeout:h,propCount:f,hasTransform:d}}function X(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>Q(e)+Q(t[n]))))}function Q(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function Y(){return document.body.offsetHeight}new WeakMap,new WeakMap;const Z=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};function tt(t){t.target.composing=!0}function et(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nt={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=Z(s);const o=i||s.props&&"number"===s.props.type;S(t,e?"change":"input",(e=>{if(e.target.composing)return;let i=t.value;n&&(i=i.trim()),o&&(i=(0,r.He)(i)),t._assign(i)})),n&&S(t,"change",(()=>{t.value=t.value.trim()})),e||(S(t,"compositionstart",tt),S(t,"compositionend",et),S(t,"change",et))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},o){if(t._assign=Z(o),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(i&&t.value.trim()===e)return;if((s||"number"===t.type)&&(0,r.He)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const rt=["ctrl","shift","alt","meta"],it={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>rt.some((n=>t[`${n}Key`]&&!e.includes(n)))},st=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=it[e[t]];if(r&&r(n,e))return}return t(n,...r)},ot={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):at(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),at(t,!0),r.enter(t)):r.leave(t,(()=>{at(t,!1)})):at(t,e))},beforeUnmount(t,{value:e}){at(t,e)}};function at(t,e){t.style.display=e?t._vod:"none"}const ct=(0,r.l7)({patchProp:x},c);let lt;function ut(){return lt||(lt=(0,i.Us)(ct))}const ht=(...t)=>{const e=ut().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=ft(t);if(!i)return;const s=e._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function ft(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}},3577:function(t,e,n){"use strict";function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}n.d(e,{C_:function(){return d},DM:function(){return R},E9:function(){return rt},F7:function(){return C},Gg:function(){return H},HD:function(){return P},He:function(){return et},Kn:function(){return M},NO:function(){return _},Nj:function(){return tt},Od:function(){return I},PO:function(){return $},Pq:function(){return a},RI:function(){return D},S0:function(){return q},W7:function(){return B},WV:function(){return g},Z6:function(){return b},_A:function(){return z},_N:function(){return O},aU:function(){return Y},dG:function(){return E},e1:function(){return s},fY:function(){return r},hR:function(){return Q},hq:function(){return m},ir:function(){return Z},j5:function(){return l},kC:function(){return X},kJ:function(){return N},kT:function(){return w},l7:function(){return A},mf:function(){return L},rs:function(){return J},tI:function(){return U},tR:function(){return S},yA:function(){return c},yk:function(){return F},zw:function(){return y}});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function c(t){return!!t||""===t}function l(t){if(N(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=P(r)?f(r):l(r);if(i)for(const t in i)e[t]=i[t]}return e}return P(t)||M(t)?t:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function f(t){const e={};return t.split(u).forEach((t=>{if(t){const n=t.split(h);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function d(t){let e="";if(P(t))e=t;else if(N(t))for(let n=0;n<t.length;n++){const r=d(t[n]);r&&(e+=r+" ")}else if(M(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=g(t[r],e[r]);return n}function g(t,e){if(t===e)return!0;let n=x(t),r=x(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=F(t),r=F(e),n||r)return t===e;if(n=N(t),r=N(e),n||r)return!(!n||!r)&&p(t,e);if(n=M(t),r=M(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!g(t[n],e[n]))return!1}}return String(t)===String(e)}function m(t,e){return t.findIndex((t=>g(t,e)))}const y=t=>P(t)?t:null==t?"":N(t)||M(t)&&(t.toString===V||!L(t.toString))?JSON.stringify(t,v,2):String(t),v=(t,e)=>e&&e.__v_isRef?v(t,e.value):O(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:R(e)?{[`Set(${e.size})`]:[...e.values()]}:!M(e)||N(e)||$(e)?e:String(e),w={},b=[],E=()=>{},_=()=>!1,T=/^on[^a-z]/,C=t=>T.test(t),S=t=>t.startsWith("onUpdate:"),A=Object.assign,I=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},k=Object.prototype.hasOwnProperty,D=(t,e)=>k.call(t,e),N=Array.isArray,O=t=>"[object Map]"===j(t),R=t=>"[object Set]"===j(t),x=t=>"[object Date]"===j(t),L=t=>"function"===typeof t,P=t=>"string"===typeof t,F=t=>"symbol"===typeof t,M=t=>null!==t&&"object"===typeof t,U=t=>M(t)&&L(t.then)&&L(t.catch),V=Object.prototype.toString,j=t=>V.call(t),B=t=>j(t).slice(8,-1),$=t=>"[object Object]"===j(t),q=t=>P(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,H=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),G=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},K=/-(\w)/g,z=G((t=>t.replace(K,((t,e)=>e?e.toUpperCase():"")))),W=/\B([A-Z])/g,J=G((t=>t.replace(W,"-$1").toLowerCase())),X=G((t=>t.charAt(0).toUpperCase()+t.slice(1))),Q=G((t=>t?`on${X(t)}`:"")),Y=(t,e)=>!Object.is(t,e),Z=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},tt=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},et=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let nt;const rt=()=>nt||(nt="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},9669:function(t,e,n){t.exports=n(1609)},5448:function(t,e,n){"use strict";var r=n(4867),i=n(6026),s=n(4372),o=n(5327),a=n(4097),c=n(4109),l=n(7985),u=n(7874),h=n(2648),f=n(644),d=n(205);t.exports=function(t){return new Promise((function(e,n){var p,g=t.data,m=t.headers,y=t.responseType;function v(){t.cancelToken&&t.cancelToken.unsubscribe(p),t.signal&&t.signal.removeEventListener("abort",p)}r.isFormData(g)&&r.isStandardBrowserEnv()&&delete m["Content-Type"];var w=new XMLHttpRequest;if(t.auth){var b=t.auth.username||"",E=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";m.Authorization="Basic "+btoa(b+":"+E)}var _=a(t.baseURL,t.url);function T(){if(w){var r="getAllResponseHeaders"in w?c(w.getAllResponseHeaders()):null,s=y&&"text"!==y&&"json"!==y?w.response:w.responseText,o={data:s,status:w.status,statusText:w.statusText,headers:r,config:t,request:w};i((function(t){e(t),v()}),(function(t){n(t),v()}),o),w=null}}if(w.open(t.method.toUpperCase(),o(_,t.params,t.paramsSerializer),!0),w.timeout=t.timeout,"onloadend"in w?w.onloadend=T:w.onreadystatechange=function(){w&&4===w.readyState&&(0!==w.status||w.responseURL&&0===w.responseURL.indexOf("file:"))&&setTimeout(T)},w.onabort=function(){w&&(n(new h("Request aborted",h.ECONNABORTED,t,w)),w=null)},w.onerror=function(){n(new h("Network Error",h.ERR_NETWORK,t,w,w)),w=null},w.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",r=t.transitional||u;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new h(e,r.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,t,w)),w=null},r.isStandardBrowserEnv()){var C=(t.withCredentials||l(_))&&t.xsrfCookieName?s.read(t.xsrfCookieName):void 0;C&&(m[t.xsrfHeaderName]=C)}"setRequestHeader"in w&&r.forEach(m,(function(t,e){"undefined"===typeof g&&"content-type"===e.toLowerCase()?delete m[e]:w.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(w.withCredentials=!!t.withCredentials),y&&"json"!==y&&(w.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&w.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&w.upload&&w.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(p=function(t){w&&(n(!t||t&&t.type?new f:t),w.abort(),w=null)},t.cancelToken&&t.cancelToken.subscribe(p),t.signal&&(t.signal.aborted?p():t.signal.addEventListener("abort",p))),g||(g=null);var S=d(_);S&&-1===["http","https","file"].indexOf(S)?n(new h("Unsupported protocol "+S+":",h.ERR_BAD_REQUEST,t)):w.send(g)}))}},1609:function(t,e,n){"use strict";var r=n(4867),i=n(1849),s=n(321),o=n(7185),a=n(5546);function c(t){var e=new s(t),n=i(s.prototype.request,e);return r.extend(n,s.prototype,e),r.extend(n,e),n.create=function(e){return c(o(t,e))},n}var l=c(a);l.Axios=s,l.CanceledError=n(644),l.CancelToken=n(4972),l.isCancel=n(6502),l.VERSION=n(7288).version,l.toFormData=n(7675),l.AxiosError=n(2648),l.Cancel=l.CanceledError,l.all=function(t){return Promise.all(t)},l.spread=n(8713),l.isAxiosError=n(6268),t.exports=l,t.exports["default"]=l},4972:function(t,e,n){"use strict";var r=n(644);function i(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;this.promise.then((function(t){if(n._listeners){var e,r=n._listeners.length;for(e=0;e<r;e++)n._listeners[e](t);n._listeners=null}})),this.promise.then=function(t){var e,r=new Promise((function(t){n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}i.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},i.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},i.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},i.source=function(){var t,e=new i((function(e){t=e}));return{token:e,cancel:t}},t.exports=i},644:function(t,e,n){"use strict";var r=n(2648),i=n(4867);function s(t){r.call(this,null==t?"canceled":t,r.ERR_CANCELED),this.name="CanceledError"}i.inherits(s,r,{__CANCEL__:!0}),t.exports=s},6502:function(t){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},321:function(t,e,n){"use strict";var r=n(4867),i=n(5327),s=n(782),o=n(3572),a=n(7185),c=n(4097),l=n(4875),u=l.validators;function h(t){this.defaults=t,this.interceptors={request:new s,response:new s}}h.prototype.request=function(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=a(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=e.transitional;void 0!==n&&l.assertOptions(n,{silentJSONParsing:u.transitional(u.boolean),forcedJSONParsing:u.transitional(u.boolean),clarifyTimeoutError:u.transitional(u.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(i=i&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var s,c=[];if(this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)})),!i){var h=[o,void 0];Array.prototype.unshift.apply(h,r),h=h.concat(c),s=Promise.resolve(e);while(h.length)s=s.then(h.shift(),h.shift());return s}var f=e;while(r.length){var d=r.shift(),p=r.shift();try{f=d(f)}catch(g){p(g);break}}try{s=o(f)}catch(g){return Promise.reject(g)}while(c.length)s=s.then(c.shift(),c.shift());return s},h.prototype.getUri=function(t){t=a(this.defaults,t);var e=c(t.baseURL,t.url);return i(e,t.params,t.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(t){h.prototype[t]=function(e,n){return this.request(a(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request(a(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}h.prototype[t]=e(),h.prototype[t+"Form"]=e(!0)})),t.exports=h},2648:function(t,e,n){"use strict";var r=n(4867);function i(t,e,n,r,i){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}r.inherits(i,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var s=i.prototype,o={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(t){o[t]={value:t}})),Object.defineProperties(i,o),Object.defineProperty(s,"isAxiosError",{value:!0}),i.from=function(t,e,n,o,a,c){var l=Object.create(s);return r.toFlatObject(t,l,(function(t){return t!==Error.prototype})),i.call(l,t.message,e,n,o,a),l.name=t.name,c&&Object.assign(l,c),l},t.exports=i},782:function(t,e,n){"use strict";var r=n(4867);function i(){this.handlers=[]}i.prototype.use=function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},i.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},i.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=i},4097:function(t,e,n){"use strict";var r=n(1793),i=n(7303);t.exports=function(t,e){return t&&!r(e)?i(t,e):e}},3572:function(t,e,n){"use strict";var r=n(4867),i=n(8527),s=n(6502),o=n(5546),a=n(644);function c(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new a}t.exports=function(t){c(t),t.headers=t.headers||{},t.data=i.call(t,t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||o.adapter;return e(t).then((function(e){return c(t),e.data=i.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return s(e)||(c(t),e&&e.response&&(e.response.data=i.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},7185:function(t,e,n){"use strict";var r=n(4867);t.exports=function(t,e){e=e||{};var n={};function i(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function s(n){return r.isUndefined(e[n])?r.isUndefined(t[n])?void 0:i(void 0,t[n]):i(t[n],e[n])}function o(t){if(!r.isUndefined(e[t]))return i(void 0,e[t])}function a(n){return r.isUndefined(e[n])?r.isUndefined(t[n])?void 0:i(void 0,t[n]):i(void 0,e[n])}function c(n){return n in e?i(t[n],e[n]):n in t?i(void 0,t[n]):void 0}var l={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return r.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=l[t]||s,i=e(t);r.isUndefined(i)&&e!==c||(n[t]=i)})),n}},6026:function(t,e,n){"use strict";var r=n(2648);t.exports=function(t,e,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?e(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}},8527:function(t,e,n){"use strict";var r=n(4867),i=n(5546);t.exports=function(t,e,n){var s=this||i;return r.forEach(n,(function(n){t=n.call(s,t,e)})),t}},5546:function(t,e,n){"use strict";var r=n(4867),i=n(6016),s=n(2648),o=n(7874),a=n(7675),c={"Content-Type":"application/x-www-form-urlencoded"};function l(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function u(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(t=n(5448)),t}function h(t,e,n){if(r.isString(t))try{return(e||JSON.parse)(t),r.trim(t)}catch(i){if("SyntaxError"!==i.name)throw i}return(n||JSON.stringify)(t)}var f={transitional:o,adapter:u(),transformRequest:[function(t,e){if(i(e,"Accept"),i(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t))return t;if(r.isArrayBufferView(t))return t.buffer;if(r.isURLSearchParams(t))return l(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var n,s=r.isObject(t),o=e&&e["Content-Type"];if((n=r.isFileList(t))||s&&"multipart/form-data"===o){var c=this.env&&this.env.FormData;return a(n?{"files[]":t}:t,c&&new c)}return s||"application/json"===o?(l(e,"application/json"),h(t)):t}],transformResponse:[function(t){var e=this.transitional||f.transitional,n=e&&e.silentJSONParsing,i=e&&e.forcedJSONParsing,o=!n&&"json"===this.responseType;if(o||i&&r.isString(t)&&t.length)try{return JSON.parse(t)}catch(a){if(o){if("SyntaxError"===a.name)throw s.from(a,s.ERR_BAD_RESPONSE,this,null,this.response);throw a}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:n(1623)},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){f.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){f.headers[t]=r.merge(c)})),t.exports=f},7874:function(t){"use strict";t.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},7288:function(t){t.exports={version:"0.27.2"}},1849:function(t){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},5327:function(t,e,n){"use strict";var r=n(4867);function i(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var s;if(n)s=n(e);else if(r.isURLSearchParams(e))s=e.toString();else{var o=[];r.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),o.push(i(e)+"="+i(t))})))})),s=o.join("&")}if(s){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}},7303:function(t){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},4372:function(t,e,n){"use strict";var r=n(4867);t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,i,s,o){var a=[];a.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),r.isString(i)&&a.push("path="+i),r.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},1793:function(t){"use strict";t.exports=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}},6268:function(t,e,n){"use strict";var r=n(4867);t.exports=function(t){return r.isObject(t)&&!0===t.isAxiosError}},7985:function(t,e,n){"use strict";var r=n(4867);t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=i(window.location.href),function(e){var n=r.isString(e)?i(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},6016:function(t,e,n){"use strict";var r=n(4867);t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},1623:function(t){t.exports=null},4109:function(t,e,n){"use strict";var r=n(4867),i=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,s,o={};return t?(r.forEach(t.split("\n"),(function(t){if(s=t.indexOf(":"),e=r.trim(t.substr(0,s)).toLowerCase(),n=r.trim(t.substr(s+1)),e){if(o[e]&&i.indexOf(e)>=0)return;o[e]="set-cookie"===e?(o[e]?o[e]:[]).concat([n]):o[e]?o[e]+", "+n:n}})),o):o}},205:function(t){"use strict";t.exports=function(t){var e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}},8713:function(t){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},7675:function(t,e,n){"use strict";var r=n(4867);function i(t,e){e=e||new FormData;var n=[];function i(t){return null===t?"":r.isDate(t)?t.toISOString():r.isArrayBuffer(t)||r.isTypedArray(t)?"function"===typeof Blob?new Blob([t]):Buffer.from(t):t}function s(t,o){if(r.isPlainObject(t)||r.isArray(t)){if(-1!==n.indexOf(t))throw Error("Circular reference detected in "+o);n.push(t),r.forEach(t,(function(t,n){if(!r.isUndefined(t)){var a,c=o?o+"."+n:n;if(t&&!o&&"object"===typeof t)if(r.endsWith(n,"{}"))t=JSON.stringify(t);else if(r.endsWith(n,"[]")&&(a=r.toArray(t)))return void a.forEach((function(t){!r.isUndefined(t)&&e.append(c,i(t))}));s(t,c)}})),n.pop()}else e.append(o,i(t))}return s(t),e}t.exports=i},4875:function(t,e,n){"use strict";var r=n(7288).version,i=n(2648),s={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){s[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));var o={};function a(t,e,n){if("object"!==typeof t)throw new i("options must be an object",i.ERR_BAD_OPTION_VALUE);var r=Object.keys(t),s=r.length;while(s-- >0){var o=r[s],a=e[o];if(a){var c=t[o],l=void 0===c||a(c,o,t);if(!0!==l)throw new i("option "+o+" must be "+l,i.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new i("Unknown option "+o,i.ERR_BAD_OPTION)}}s.transitional=function(t,e,n){function s(t,e){return"[Axios v"+r+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return function(n,r,a){if(!1===t)throw new i(s(r," has been removed"+(e?" in "+e:"")),i.ERR_DEPRECATED);return e&&!o[r]&&(o[r]=!0,console.warn(s(r," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,r,a)}},t.exports={assertOptions:a,validators:s}},4867:function(t,e,n){"use strict";var r=n(1849),i=Object.prototype.toString,s=function(t){return function(e){var n=i.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())}}(Object.create(null));function o(t){return t=t.toLowerCase(),function(e){return s(e)===t}}function a(t){return Array.isArray(t)}function c(t){return"undefined"===typeof t}function l(t){return null!==t&&!c(t)&&null!==t.constructor&&!c(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}var u=o("ArrayBuffer");function h(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&u(t.buffer),e}function f(t){return"string"===typeof t}function d(t){return"number"===typeof t}function p(t){return null!==t&&"object"===typeof t}function g(t){if("object"!==s(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}var m=o("Date"),y=o("File"),v=o("Blob"),w=o("FileList");function b(t){return"[object Function]"===i.call(t)}function E(t){return p(t)&&b(t.pipe)}function _(t){var e="[object FormData]";return t&&("function"===typeof FormData&&t instanceof FormData||i.call(t)===e||b(t.toString)&&t.toString()===e)}var T=o("URLSearchParams");function C(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function S(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function A(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),a(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function I(){var t={};function e(e,n){g(t[n])&&g(e)?t[n]=I(t[n],e):g(e)?t[n]=I({},e):a(e)?t[n]=e.slice():t[n]=e}for(var n=0,r=arguments.length;n<r;n++)A(arguments[n],e);return t}function k(t,e,n){return A(e,(function(e,i){t[i]=n&&"function"===typeof e?r(e,n):e})),t}function D(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}function N(t,e,n,r){t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,n&&Object.assign(t.prototype,n)}function O(t,e,n){var r,i,s,o={};e=e||{};do{r=Object.getOwnPropertyNames(t),i=r.length;while(i-- >0)s=r[i],o[s]||(e[s]=t[s],o[s]=!0);t=Object.getPrototypeOf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e}function R(t,e,n){t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;var r=t.indexOf(e,n);return-1!==r&&r===n}function x(t){if(!t)return null;var e=t.length;if(c(e))return null;var n=new Array(e);while(e-- >0)n[e]=t[e];return n}var L=function(t){return function(e){return t&&e instanceof t}}("undefined"!==typeof Uint8Array&&Object.getPrototypeOf(Uint8Array));t.exports={isArray:a,isArrayBuffer:u,isBuffer:l,isFormData:_,isArrayBufferView:h,isString:f,isNumber:d,isObject:p,isPlainObject:g,isUndefined:c,isDate:m,isFile:y,isBlob:v,isFunction:b,isStream:E,isURLSearchParams:T,isStandardBrowserEnv:S,forEach:A,merge:I,extend:k,trim:C,stripBOM:D,inherits:N,toFlatObject:O,kindOf:s,kindOfTest:o,endsWith:R,toArray:x,isTypedArray:L,isFileList:w}},5503:function(t,e,n){"use strict";n.d(e,{ZF:function(){return r.ZF}});var r=n(5816),i="firebase",s="9.9.1";
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
(0,r.KN)(i,s,"app")},6257:function(t,e,n){"use strict";n.d(e,{ad:function(){return r.ad},hJ:function(){return r.hJ}});var r=n(1294)},3744:function(t,e){"use strict";e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},5816:function(t,e,n){"use strict";n.d(e,{Jn:function(){return gt},qX:function(){return ht},Xd:function(){return ut},Mq:function(){return yt},ZF:function(){return mt},KN:function(){return vt}});var r=n(8463),i=n(3333),s=n(4444);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function l(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function u(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,g=new WeakMap;function m(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(_(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),g.set(e,t),e}function y(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));f.set(t,e)}let v={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function w(t){v=t(v)}function b(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?u().includes(t)?function(...e){return t.apply(T(this),e),_(h.get(this))}:function(...e){return _(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),_(r)}}function E(t){return"function"===typeof t?b(t):(t instanceof IDBTransaction&&y(t),o(t,l())?new Proxy(t,v):t)}function _(t){if(t instanceof IDBRequest)return m(t);if(p.has(t))return p.get(t);const e=E(t);return e!==t&&(p.set(t,e),g.set(e,t)),e}const T=t=>g.get(t);function C(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=_(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(_(o.result),t.oldVersion,t.newVersion,_(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],A=["put","add","delete","clear"],I=new Map;function k(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(I.get(e))return I.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=A.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return I.set(e,s),s}w((t=>({...t,get:(e,n,r)=>k(e,n)||t.get(e,n,r),has:(e,n)=>!!k(e,n)||t.has(e,n)})));
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
class D{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(N(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function N(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const O="@firebase/app",R="0.7.29",x=new i.Yd("@firebase/app"),L="@firebase/app-compat",P="@firebase/analytics-compat",F="@firebase/analytics",M="@firebase/app-check-compat",U="@firebase/app-check",V="@firebase/auth",j="@firebase/auth-compat",B="@firebase/database",$="@firebase/database-compat",q="@firebase/functions",H="@firebase/functions-compat",G="@firebase/installations",K="@firebase/installations-compat",z="@firebase/messaging",W="@firebase/messaging-compat",J="@firebase/performance",X="@firebase/performance-compat",Q="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="9.9.1",st="[DEFAULT]",ot={[O]:"fire-core",[L]:"fire-core-compat",[F]:"fire-analytics",[P]:"fire-analytics-compat",[U]:"fire-app-check",[M]:"fire-app-check-compat",[V]:"fire-auth",[j]:"fire-auth-compat",[B]:"fire-rtdb",[$]:"fire-rtdb-compat",[q]:"fire-fn",[H]:"fire-fn-compat",[G]:"fire-iid",[K]:"fire-iid-compat",[z]:"fire-fcm",[W]:"fire-fcm-compat",[J]:"fire-perf",[X]:"fire-perf-compat",[Q]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function lt(t,e){try{t.container.addComponent(e)}catch(n){x.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ut(t){const e=t.name;if(ct.has(e))return x.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())lt(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
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
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},dt=new s.LL("app","Firebase",ft);
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
 */const gt=it;function mt(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw dt.create("bad-app-name",{appName:String(i)});const o=at.get(i);if(o){if((0,s.vZ)(t,o.options)&&(0,s.vZ)(n,o.config))return o;throw dt.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of ct.values())a.addComponent(r);const c=new pt(t,n,a);return at.set(i,c),c}function yt(t=st){const e=at.get(t);if(!e)throw dt.create("no-app",{appName:t});return e}function vt(t,e,n){var i;let s=null!==(i=ot[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void x.warn(t.join(" "))}ut(new r.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
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
const wt="firebase-heartbeat-database",bt=1,Et="firebase-heartbeat-store";let _t=null;function Tt(){return _t||(_t=C(wt,bt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Et)}}}).catch((t=>{throw dt.create("storage-open",{originalErrorMessage:t.message})}))),_t}async function Ct(t){var e;try{const e=await Tt();return e.transaction(Et).objectStore(Et).get(At(t))}catch(n){throw dt.create("storage-get",{originalErrorMessage:null===(e=n)||void 0===e?void 0:e.message})}}async function St(t,e){var n;try{const n=await Tt(),r=n.transaction(Et,"readwrite"),i=r.objectStore(Et);return await i.put(e,At(t)),r.done}catch(r){throw dt.create("storage-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message})}}function At(t){return`${t.name}!${t.options.appId}`}
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
 */const It=1024,kt=2592e6;class Dt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Rt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Nt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=kt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Nt(),{heartbeatsToSend:e,unsentEntries:n}=Ot(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Nt(){const t=new Date;return t.toISOString().substring(0,10)}function Ot(t,e=It){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),xt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),xt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await Ct(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function xt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
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
 */function Lt(t){ut(new r.wA("platform-logger",(t=>new D(t)),"PRIVATE")),ut(new r.wA("heartbeat",(t=>new Dt(t)),"PRIVATE")),vt(O,R,t),vt(O,R,"esm2017"),vt("fire-js","")}Lt("")},8463:function(t,e,n){"use strict";n.d(e,{H0:function(){return l},wA:function(){return i}});var r=n(4444);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
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
 */const s="[DEFAULT]";
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
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
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
 */class l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},3333:function(t,e,n){"use strict";n.d(e,{Yd:function(){return l},in:function(){return i}});
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
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},2201:function(t,e,n){"use strict";n.d(e,{PO:function(){return V},p7:function(){return ee}});var r=n(6252),i=n(2262);
/*!
  * vue-router v4.1.3
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function c(t,e){const n={};for(const r in e){const i=e[r];n[r]=u(i)?i.map(t):t(i)}return n}const l=()=>{},u=Array.isArray;const h=/\/$/,f=t=>t.replace(h,"");function d(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=E(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function g(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function m(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&y(e.matched[r],n.matched[i])&&v(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function y(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function v(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!w(t[n],e[n]))return!1;return!0}function w(t,e){return u(t)?b(t,e):u(e)?b(e,t):t===e}function b(t,e){return u(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function E(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var _,T;(function(t){t["pop"]="pop",t["push"]="push"})(_||(_={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(T||(T={}));function C(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),f(t)}const S=/^[^#]+#/;function A(t,e){return t.replace(S,"#")+e}function I(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const k=()=>({left:window.pageXOffset,top:window.pageYOffset});function D(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=I(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function N(t,e){const n=history.state?history.state.position-e:-1;return n+t}const O=new Map;function R(t,e){O.set(t,e)}function x(t){const e=O.get(t);return O.delete(t),e}let L=()=>location.protocol+"//"+location.host;function P(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),g(n,"")}const o=g(n,t);return o+r+i}function F(t,e,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=P(t,location),c=n.value,l=e.value;let u=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);u=l?s.position-l.position:0}else r(a);i.forEach((t=>{t(n.value,c,{delta:u,type:_.pop,direction:u?u>0?T.forward:T.back:T.unknown})}))};function l(){o=n.value}function u(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:k()}),"")}function f(){for(const t of s)t();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h),{pauseListeners:l,listen:u,destroy:f}}function M(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?k():null}}function U(t){const{history:e,location:n}=window,r={value:P(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:L()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(l){console.error(l),n[o?"replace":"assign"](c)}}function o(t,n){const o=a({},e.state,M(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function c(t,n){const o=a({},i.value,e.state,{forward:t,scroll:k()});s(o.current,o,!0);const c=a({},M(r.value,t,null),{position:o.position+1},n);s(t,c,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function V(t){t=C(t);const e=U(t),n=F(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=a({location:"",base:t,go:r,createHref:A.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function j(t){return"string"===typeof t||t&&"object"===typeof t}function B(t){return"string"===typeof t||"symbol"===typeof t}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},q=Symbol("");var H;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(H||(H={}));function G(t,e){return a(new Error,{type:t,[q]:!0},e)}function K(t,e){return t instanceof Error&&q in t&&(null==e||!!(t.type&e))}const z="[^/]+?",W={sensitive:!1,strict:!1,start:!0,end:!0},J=/[.+*?^${}()[\]/\\]/g;function X(t,e){const n=a({},W,e),r=[];let i=n.start?"^":"";const s=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let e=0;e<a.length;e++){const r=a[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(J,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:c,regexp:l}=r;s.push({name:t,repeatable:n,optional:c});const u=l||z;if(u!==z){o+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${u}): `+h.message)}}let f=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;e||(f=c&&a.length<2?`(?:/${f})`:"/"+f),c&&(f+="?"),i+=f,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===u&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function l(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(u(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const l=u(c)?c.join("/"):c;if(!l){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=l}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:l}}function Q(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function Y(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=Q(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(Z(r))return 1;if(Z(i))return-1}return i.length-r.length}function Z(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const tt={type:0,value:""},et=/[a-zA-Z0-9_]/;function nt(t){if(!t)return[[]];if("/"===t)return[[tt]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${l}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,l="",u="";function h(){l&&(0===n?s.push({type:0,value:l}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),l="")}function f(){l+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(l&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:et.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,u="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),i}function rt(t,e,n){const r=X(nt(t.path),n);const i=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function it(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,c=ot(t);c.aliasOf=r&&r.record;const h=ut(e,t),f=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)f.push(a({},c,{components:r?r.record.components:c.components,path:t,aliasOf:r?r.record:c}))}let d,p;for(const e of f){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(d=rt(e,n,h),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),i&&t.name&&!ct(d)&&o(t.name)),c.children){const t=c.children;for(let e=0;e<t.length;e++)s(t[e],d,r&&r.children[e])}r=r||d,u(d)}return p?()=>{o(p)}:l}function o(t){if(B(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function c(){return n}function u(t){let e=0;while(e<n.length&&Y(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ht(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ct(t)&&r.set(t.record.name,t)}function h(t,e){let i,s,o,c={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw G(1,{location:t});o=i.record.name,c=a(st(e.params,i.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params),s=i.stringify(c)}else if("path"in t)s=t.path,i=n.find((t=>t.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw G(1,{location:t,currentLocation:e});o=i.record.name,c=a({},e.params,t.params),s=i.stringify(c)}const l=[];let u=i;while(u)l.unshift(u.record),u=u.parent;return{name:o,path:s,params:c,matched:l,meta:lt(l)}}return e=ut({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function st(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ot(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:at(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function at(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="boolean"===typeof n?n:n[r];return e}function ct(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lt(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function ut(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ht(t,e){return e.children.some((e=>e===t||ht(t,e)))}const ft=/#/g,dt=/&/g,pt=/\//g,gt=/=/g,mt=/\?/g,yt=/\+/g,vt=/%5B/g,wt=/%5D/g,bt=/%5E/g,Et=/%60/g,_t=/%7B/g,Tt=/%7C/g,Ct=/%7D/g,St=/%20/g;function At(t){return encodeURI(""+t).replace(Tt,"|").replace(vt,"[").replace(wt,"]")}function It(t){return At(t).replace(_t,"{").replace(Ct,"}").replace(bt,"^")}function kt(t){return At(t).replace(yt,"%2B").replace(St,"+").replace(ft,"%23").replace(dt,"%26").replace(Et,"`").replace(_t,"{").replace(Ct,"}").replace(bt,"^")}function Dt(t){return kt(t).replace(gt,"%3D")}function Nt(t){return At(t).replace(ft,"%23").replace(mt,"%3F")}function Ot(t){return null==t?"":Nt(t).replace(pt,"%2F")}function Rt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function xt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(yt," "),n=t.indexOf("="),s=Rt(n<0?t:t.slice(0,n)),o=n<0?null:Rt(t.slice(n+1));if(s in e){let t=e[s];u(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Lt(t){let e="";for(let n in t){const r=t[n];if(n=Dt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=u(r)?r.map((t=>t&&kt(t))):[r&&kt(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Pt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=u(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Ft=Symbol(""),Mt=Symbol(""),Ut=Symbol(""),Vt=Symbol(""),jt=Symbol("");function Bt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function $t(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=t=>{!1===t?a(G(4,{from:n,to:e})):t instanceof Error?a(t):j(t)?a(G(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},l=t.call(r&&r.instances[i],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch((t=>a(t)))}))}function qt(t,e,n,r){const i=[];for(const s of t){0;for(const t in s.components){let a=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(Ht(a)){const o=a.__vccOpts||a,c=o[e];c&&i.push($t(c,n,r,s,t))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[t]=a;const c=a.__vccOpts||a,l=c[e];return l&&$t(l,n,r,s,t)()}))))}}}return i}function Ht(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Gt(t){const e=(0,r.f3)(Ut),n=(0,r.f3)(Vt),s=(0,r.Fl)((()=>e.resolve((0,i.SU)(t.to)))),o=(0,r.Fl)((()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(y.bind(null,r));if(o>-1)return o;const a=Xt(t[e-2]);return e>1&&Xt(r)===a&&i[i.length-1].path!==a?i.findIndex(y.bind(null,t[e-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Jt(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&v(n.params,s.value.params)));function u(n={}){return Wt(n)?e[(0,i.SU)(t.replace)?"replace":"push"]((0,i.SU)(t.to)).catch(l):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:u}}const Kt=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Gt,setup(t,{slots:e}){const n=(0,i.qj)(Gt(t)),{options:s}=(0,r.f3)(Ut),o=(0,r.Fl)((()=>({[Qt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Qt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),zt=Kt;function Wt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Jt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!u(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Xt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qt=(t,e,n)=>null!=t?t:null!=e?e:n,Yt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,r.f3)(jt),o=(0,r.Fl)((()=>t.route||s.value)),c=(0,r.f3)(Mt,0),l=(0,r.Fl)((()=>{let t=(0,i.SU)(c);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),u=(0,r.Fl)((()=>o.value.matched[l.value]));(0,r.JJ)(Mt,(0,r.Fl)((()=>l.value+1))),(0,r.JJ)(Ft,u),(0,r.JJ)(jt,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,u.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&y(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=o.value,s=t.name,c=u.value,l=c&&c.components[s];if(!l)return Zt(n.default,{Component:l,route:i});const f=c.props[s],d=f?!0===f?i.params:"function"===typeof f?f(i):f:null,p=t=>{t.component.isUnmounted&&(c.instances[s]=null)},g=(0,r.h)(l,a({},d,e,{onVnodeUnmounted:p,ref:h}));return Zt(n.default,{Component:g,route:i})||g}}});function Zt(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const te=Yt;function ee(t){const e=it(t.routes,t),n=t.parseQuery||xt,o=t.stringifyQuery||Lt,h=t.history;const f=Bt(),g=Bt(),y=Bt(),v=(0,i.XI)($);let w=$;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=c.bind(null,(t=>""+t)),E=c.bind(null,Ot),T=c.bind(null,Rt);function C(t,n){let r,i;return B(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function S(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function A(){return e.getRoutes().map((t=>t.record))}function I(t){return!!e.getRecordMatcher(t)}function O(t,r){if(r=a({},r||v.value),"string"===typeof t){const i=d(n,t,r.path),s=e.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:T(s.params),hash:Rt(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in t)i=a({},t,{path:d(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];i=a({},t,{params:E(t.params)}),r.params=E(r.params)}const s=e.resolve(i,r),c=t.hash||"";s.params=b(T(s.params));const l=p(o,a({},t,{hash:It(c),path:s.path})),u=h.createHref(l);return a({fullPath:l,hash:c,query:o===Lt?Pt(t.query):t.query||{}},s,{redirectedFrom:void 0,href:u})}function L(t){return"string"===typeof t?d(n,t,v.value.path):a({},t)}function P(t,e){if(w!==t)return G(8,{from:e,to:t})}function F(t){return V(t)}function M(t){return F(a(L(t),{replace:!0}))}function U(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=L(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function V(t,e){const n=w=O(t),r=v.value,i=t.state,s=t.force,c=!0===t.replace,l=U(n);if(l)return V(a(L(l),{state:i,force:s,replace:c}),e||n);const u=n;let h;return u.redirectedFrom=e,!s&&m(o,r,n)&&(h=G(16,{to:u,from:r}),nt(r,r,!0,!1)),(h?Promise.resolve(h):q(u,r)).catch((t=>K(t)?K(t,2)?t:et(t):Z(t,u,r))).then((t=>{if(t){if(K(t,2))return V(a({replace:c},L(t.to),{state:i,force:s}),e||u)}else t=z(u,r,!0,c,i);return H(u,r,t),t}))}function j(t,e){const n=P(t,e);return n?Promise.reject(n):Promise.resolve()}function q(t,e){let n;const[r,i,s]=re(t,e);n=qt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push($t(r,t,e))}));const o=j.bind(null,t,e);return n.push(o),ne(n).then((()=>{n=[];for(const r of f.list())n.push($t(r,t,e));return n.push(o),ne(n)})).then((()=>{n=qt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push($t(r,t,e))}));return n.push(o),ne(n)})).then((()=>{n=[];for(const r of t.matched)if(r.beforeEnter&&!e.matched.includes(r))if(u(r.beforeEnter))for(const i of r.beforeEnter)n.push($t(i,t,e));else n.push($t(r.beforeEnter,t,e));return n.push(o),ne(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=qt(s,"beforeRouteEnter",t,e),n.push(o),ne(n)))).then((()=>{n=[];for(const r of g.list())n.push($t(r,t,e));return n.push(o),ne(n)})).catch((t=>K(t,8)?t:Promise.reject(t)))}function H(t,e,n){for(const r of y.list())r(t,e,n)}function z(t,e,n,r,i){const o=P(t,e);if(o)return o;const c=e===$,l=s?history.state:{};n&&(r||c?h.replace(t.fullPath,a({scroll:c&&l&&l.scroll},i)):h.push(t.fullPath,i)),v.value=t,nt(t,e,n,c),et()}let W;function J(){W||(W=h.listen(((t,e,n)=>{if(!at.listening)return;const r=O(t),i=U(r);if(i)return void V(a(i,{replace:!0}),r).catch(l);w=r;const o=v.value;s&&R(N(o.fullPath,n.delta),k()),q(r,o).catch((t=>K(t,12)?t:K(t,2)?(V(t.to,r).then((t=>{K(t,20)&&!n.delta&&n.type===_.pop&&h.go(-1,!1)})).catch(l),Promise.reject()):(n.delta&&h.go(-n.delta,!1),Z(t,r,o)))).then((t=>{t=t||z(r,o,!1),t&&(n.delta&&!K(t,8)?h.go(-n.delta,!1):n.type===_.pop&&K(t,20)&&h.go(-1,!1)),H(r,o,t)})).catch(l)})))}let X,Q=Bt(),Y=Bt();function Z(t,e,n){et(t);const r=Y.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function tt(){return X&&v.value!==$?Promise.resolve():new Promise(((t,e)=>{Q.add([t,e])}))}function et(t){return X||(X=!t,J(),Q.list().forEach((([e,n])=>t?n(t):e())),Q.reset()),t}function nt(e,n,i,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const c=!i&&x(N(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(e,n,c))).then((t=>t&&D(t))).catch((t=>Z(t,e,n)))}const rt=t=>h.go(t);let st;const ot=new Set,at={currentRoute:v,listening:!0,addRoute:C,removeRoute:S,hasRoute:I,getRoutes:A,resolve:O,options:t,push:F,replace:M,go:rt,back:()=>rt(-1),forward:()=>rt(1),beforeEach:f.add,beforeResolve:g.add,afterEach:y.add,onError:Y.add,isReady:tt,install(t){const e=this;t.component("RouterLink",zt),t.component("RouterView",te),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),s&&!st&&v.value===$&&(st=!0,F(h.location).catch((t=>{0})));const n={};for(const i in $)n[i]=(0,r.Fl)((()=>v.value[i]));t.provide(Ut,e),t.provide(Vt,(0,i.qj)(n)),t.provide(jt,v);const o=t.unmount;ot.add(t),t.unmount=function(){ot.delete(t),ot.size<1&&(w=$,W&&W(),W=null,v.value=$,st=!1,X=!1),o()}}};return at}function ne(t){return t.reduce(((t,e)=>t.then((()=>e()))),Promise.resolve())}function re(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>y(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>y(t,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.93f8f425.js.map