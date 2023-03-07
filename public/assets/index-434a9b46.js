function sp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function up(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var To={},cp={get exports(){return To},set exports(e){To=e}},fa={},C={},dp={get exports(){return C},set exports(e){C=e}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Br=Symbol.for("react.element"),fp=Symbol.for("react.portal"),pp=Symbol.for("react.fragment"),mp=Symbol.for("react.strict_mode"),gp=Symbol.for("react.profiler"),hp=Symbol.for("react.provider"),vp=Symbol.for("react.context"),yp=Symbol.for("react.forward_ref"),wp=Symbol.for("react.suspense"),xp=Symbol.for("react.memo"),Sp=Symbol.for("react.lazy"),Gs=Symbol.iterator;function kp(e){return e===null||typeof e!="object"?null:(e=Gs&&e[Gs]||e["@@iterator"],typeof e=="function"?e:null)}var Lc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pc=Object.assign,_c={};function Yn(e,t,n){this.props=e,this.context=t,this.refs=_c,this.updater=n||Lc}Yn.prototype.isReactComponent={};Yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Nc(){}Nc.prototype=Yn.prototype;function $l(e,t,n){this.props=e,this.context=t,this.refs=_c,this.updater=n||Lc}var Ml=$l.prototype=new Nc;Ml.constructor=$l;Pc(Ml,Yn.prototype);Ml.isPureReactComponent=!0;var Vs=Array.isArray,zc=Object.prototype.hasOwnProperty,jl={current:null},bc={key:!0,ref:!0,__self:!0,__source:!0};function qc(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)zc.call(t,r)&&!bc.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Br,type:e,key:a,ref:i,props:o,_owner:jl.current}}function Cp(e,t){return{$$typeof:Br,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Fl(e){return typeof e=="object"&&e!==null&&e.$$typeof===Br}function Ep(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Hs=/\/+/g;function Za(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Ep(""+e.key):t.toString(36)}function ko(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Br:case fp:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Za(i,0):r,Vs(o)?(n="",e!=null&&(n=e.replace(Hs,"$&/")+"/"),ko(o,t,n,"",function(u){return u})):o!=null&&(Fl(o)&&(o=Cp(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Hs,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Vs(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+Za(a,l);i+=ko(a,t,n,s,o)}else if(s=kp(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+Za(a,l++),i+=ko(a,t,n,s,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Jr(e,t,n){if(e==null)return e;var r=[],o=0;return ko(e,r,"","",function(a){return t.call(n,a,o++)}),r}function Lp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var $e={current:null},Co={transition:null},Pp={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:Co,ReactCurrentOwner:jl};U.Children={map:Jr,forEach:function(e,t,n){Jr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Jr(e,function(){t++}),t},toArray:function(e){return Jr(e,function(t){return t})||[]},only:function(e){if(!Fl(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=Yn;U.Fragment=pp;U.Profiler=gp;U.PureComponent=$l;U.StrictMode=mp;U.Suspense=wp;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pp;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Pc({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=jl.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)zc.call(t,s)&&!bc.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Br,type:e.type,key:o,ref:a,props:r,_owner:i}};U.createContext=function(e){return e={$$typeof:vp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hp,_context:e},e.Consumer=e};U.createElement=qc;U.createFactory=function(e){var t=qc.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:yp,render:e}};U.isValidElement=Fl;U.lazy=function(e){return{$$typeof:Sp,_payload:{_status:-1,_result:e},_init:Lp}};U.memo=function(e,t){return{$$typeof:xp,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Co.transition;Co.transition={};try{e()}finally{Co.transition=t}};U.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};U.useCallback=function(e,t){return $e.current.useCallback(e,t)};U.useContext=function(e){return $e.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return $e.current.useDeferredValue(e)};U.useEffect=function(e,t){return $e.current.useEffect(e,t)};U.useId=function(){return $e.current.useId()};U.useImperativeHandle=function(e,t,n){return $e.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return $e.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return $e.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return $e.current.useMemo(e,t)};U.useReducer=function(e,t,n){return $e.current.useReducer(e,t,n)};U.useRef=function(e){return $e.current.useRef(e)};U.useState=function(e){return $e.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return $e.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return $e.current.useTransition()};U.version="18.2.0";(function(e){e.exports=U})(dp);const gn=up(C),qi=sp({__proto__:null,default:gn},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p=C,Np=Symbol.for("react.element"),zp=Symbol.for("react.fragment"),bp=Object.prototype.hasOwnProperty,qp=_p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dp={key:!0,ref:!0,__self:!0,__source:!0};function Dc(e,t,n){var r,o={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)bp.call(t,r)&&!Dp.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Np,type:e,key:a,ref:i,props:o,_owner:qp.current}}fa.Fragment=zp;fa.jsx=Dc;fa.jsxs=Dc;(function(e){e.exports=fa})(cp);const x=To.jsx,T=To.jsxs;var Di={},Ii={},Ip={get exports(){return Ii},set exports(e){Ii=e}},Ke={},Ri={},Rp={get exports(){return Ri},set exports(e){Ri=e}},Ic={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,A){var $=P.length;P.push(A);e:for(;0<$;){var ee=$-1>>>1,N=P[ee];if(0<o(N,A))P[ee]=A,P[$]=N,$=ee;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var A=P[0],$=P.pop();if($!==A){P[0]=$;e:for(var ee=0,N=P.length,z=N>>>1;ee<z;){var D=2*(ee+1)-1,M=P[D],h=D+1,Q=P[h];if(0>o(M,$))h<N&&0>o(Q,M)?(P[ee]=Q,P[h]=$,ee=h):(P[ee]=M,P[D]=$,ee=D);else if(h<N&&0>o(Q,$))P[ee]=Q,P[h]=$,ee=h;else break e}}return A}function o(P,A){var $=P.sortIndex-A.sortIndex;return $!==0?$:P.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var s=[],u=[],p=1,m=null,g=3,S=!1,v=!1,y=!1,L=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(P){for(var A=n(u);A!==null;){if(A.callback===null)r(u);else if(A.startTime<=P)r(u),A.sortIndex=A.expirationTime,t(s,A);else break;A=n(u)}}function w(P){if(y=!1,f(P),!v)if(n(s)!==null)v=!0,xt(E);else{var A=n(u);A!==null&&Re(w,A.startTime-P)}}function E(P,A){v=!1,y&&(y=!1,d(q),q=-1),S=!0;var $=g;try{for(f(A),m=n(s);m!==null&&(!(m.expirationTime>A)||P&&!he());){var ee=m.callback;if(typeof ee=="function"){m.callback=null,g=m.priorityLevel;var N=ee(m.expirationTime<=A);A=e.unstable_now(),typeof N=="function"?m.callback=N:m===n(s)&&r(s),f(A)}else r(s);m=n(s)}if(m!==null)var z=!0;else{var D=n(u);D!==null&&Re(w,D.startTime-A),z=!1}return z}finally{m=null,g=$,S=!1}}var b=!1,R=null,q=-1,G=5,j=-1;function he(){return!(e.unstable_now()-j<G)}function pe(){if(R!==null){var P=e.unstable_now();j=P;var A=!0;try{A=R(!0,P)}finally{A?Se():(b=!1,R=null)}}else b=!1}var Se;if(typeof c=="function")Se=function(){c(pe)};else if(typeof MessageChannel<"u"){var We=new MessageChannel,Ne=We.port2;We.port1.onmessage=pe,Se=function(){Ne.postMessage(null)}}else Se=function(){L(pe,0)};function xt(P){R=P,b||(b=!0,Se())}function Re(P,A){q=L(function(){P(e.unstable_now())},A)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){v||S||(v=!0,xt(E))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(g){case 1:case 2:case 3:var A=3;break;default:A=g}var $=g;g=A;try{return P()}finally{g=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,A){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var $=g;g=P;try{return A()}finally{g=$}},e.unstable_scheduleCallback=function(P,A,$){var ee=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ee+$:ee):$=ee,P){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=$+N,P={id:p++,callback:A,priorityLevel:P,startTime:$,expirationTime:N,sortIndex:-1},$>ee?(P.sortIndex=$,t(u,P),n(s)===null&&P===n(u)&&(y?(d(q),q=-1):y=!0,Re(w,$-ee))):(P.sortIndex=N,t(s,P),v||S||(v=!0,xt(E))),P},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(P){var A=g;return function(){var $=g;g=A;try{return P.apply(this,arguments)}finally{g=$}}}})(Ic);(function(e){e.exports=Ic})(Rp);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rc=C,Ye=Ri;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tc=new Set,Cr={};function hn(e,t){On(e,t),On(e+"Capture",t)}function On(e,t){for(Cr[e]=t,e=0;e<t.length;e++)Tc.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ti=Object.prototype.hasOwnProperty,Tp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ys={},Ks={};function Ap(e){return Ti.call(Ks,e)?!0:Ti.call(Ys,e)?!1:Tp.test(e)?Ks[e]=!0:(Ys[e]=!0,!1)}function $p(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mp(e,t,n,r){if(t===null||typeof t>"u"||$p(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Me(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new Me(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new Me(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new Me(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new Me(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new Me(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new Me(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new Me(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new Me(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new Me(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ol=/[\-:]([a-z])/g;function Ul(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ol,Ul);_e[t]=new Me(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ol,Ul);_e[t]=new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ol,Ul);_e[t]=new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new Me(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new Me(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bl(e,t,n,r){var o=_e.hasOwnProperty(t)?_e[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mp(t,n,o,r)&&(n=null),r||o===null?Ap(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var bt=Rc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,eo=Symbol.for("react.element"),kn=Symbol.for("react.portal"),Cn=Symbol.for("react.fragment"),Ql=Symbol.for("react.strict_mode"),Ai=Symbol.for("react.profiler"),Ac=Symbol.for("react.provider"),$c=Symbol.for("react.context"),Wl=Symbol.for("react.forward_ref"),$i=Symbol.for("react.suspense"),Mi=Symbol.for("react.suspense_list"),Gl=Symbol.for("react.memo"),It=Symbol.for("react.lazy"),Mc=Symbol.for("react.offscreen"),Xs=Symbol.iterator;function tr(e){return e===null||typeof e!="object"?null:(e=Xs&&e[Xs]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,Ja;function ur(e){if(Ja===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ja=t&&t[1]||""}return`
`+Ja+e}var ei=!1;function ti(e,t){if(!e||ei)return"";ei=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(i!==1||l!==1)do if(i--,l--,0>l||o[i]!==a[l]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=l);break}}}finally{ei=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ur(e):""}function jp(e){switch(e.tag){case 5:return ur(e.type);case 16:return ur("Lazy");case 13:return ur("Suspense");case 19:return ur("SuspenseList");case 0:case 2:case 15:return e=ti(e.type,!1),e;case 11:return e=ti(e.type.render,!1),e;case 1:return e=ti(e.type,!0),e;default:return""}}function ji(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cn:return"Fragment";case kn:return"Portal";case Ai:return"Profiler";case Ql:return"StrictMode";case $i:return"Suspense";case Mi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $c:return(e.displayName||"Context")+".Consumer";case Ac:return(e._context.displayName||"Context")+".Provider";case Wl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gl:return t=e.displayName||null,t!==null?t:ji(e.type)||"Memo";case It:t=e._payload,e=e._init;try{return ji(e(t))}catch{}}return null}function Fp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ji(t);case 8:return t===Ql?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Yt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function jc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Op(e){var t=jc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function to(e){e._valueTracker||(e._valueTracker=Op(e))}function Fc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=jc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ao(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Fi(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Zs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Yt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Oc(e,t){t=t.checked,t!=null&&Bl(e,"checked",t,!1)}function Oi(e,t){Oc(e,t);var n=Yt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ui(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ui(e,t.type,Yt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Js(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ui(e,t,n){(t!=="number"||Ao(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var cr=Array.isArray;function Tn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Yt(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Bi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function eu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(cr(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Yt(n)}}function Uc(e,t){var n=Yt(t.value),r=Yt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function tu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Bc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Bc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var no,Qc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(no=no||document.createElement("div"),no.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=no.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Er(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Up=["Webkit","ms","Moz","O"];Object.keys(pr).forEach(function(e){Up.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pr[t]=pr[e]})});function Wc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||pr.hasOwnProperty(e)&&pr[e]?(""+t).trim():t+"px"}function Gc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Wc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Bp=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wi(e,t){if(t){if(Bp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Gi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vi=null;function Vl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hi=null,An=null,$n=null;function nu(e){if(e=Gr(e)){if(typeof Hi!="function")throw Error(k(280));var t=e.stateNode;t&&(t=va(t),Hi(e.stateNode,e.type,t))}}function Vc(e){An?$n?$n.push(e):$n=[e]:An=e}function Hc(){if(An){var e=An,t=$n;if($n=An=null,nu(e),t)for(e=0;e<t.length;e++)nu(t[e])}}function Yc(e,t){return e(t)}function Kc(){}var ni=!1;function Xc(e,t,n){if(ni)return e(t,n);ni=!0;try{return Yc(e,t,n)}finally{ni=!1,(An!==null||$n!==null)&&(Kc(),Hc())}}function Lr(e,t){var n=e.stateNode;if(n===null)return null;var r=va(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var Yi=!1;if(Pt)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Yi=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Yi=!1}function Qp(e,t,n,r,o,a,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var mr=!1,$o=null,Mo=!1,Ki=null,Wp={onError:function(e){mr=!0,$o=e}};function Gp(e,t,n,r,o,a,i,l,s){mr=!1,$o=null,Qp.apply(Wp,arguments)}function Vp(e,t,n,r,o,a,i,l,s){if(Gp.apply(this,arguments),mr){if(mr){var u=$o;mr=!1,$o=null}else throw Error(k(198));Mo||(Mo=!0,Ki=u)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ru(e){if(vn(e)!==e)throw Error(k(188))}function Hp(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return ru(o),e;if(a===r)return ru(o),t;a=a.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,l=o.child;l;){if(l===n){i=!0,n=o,r=a;break}if(l===r){i=!0,r=o,n=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===n){i=!0,n=a,r=o;break}if(l===r){i=!0,r=a,n=o;break}l=l.sibling}if(!i)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Jc(e){return e=Hp(e),e!==null?ed(e):null}function ed(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ed(e);if(t!==null)return t;e=e.sibling}return null}var td=Ye.unstable_scheduleCallback,ou=Ye.unstable_cancelCallback,Yp=Ye.unstable_shouldYield,Kp=Ye.unstable_requestPaint,de=Ye.unstable_now,Xp=Ye.unstable_getCurrentPriorityLevel,Hl=Ye.unstable_ImmediatePriority,nd=Ye.unstable_UserBlockingPriority,jo=Ye.unstable_NormalPriority,Zp=Ye.unstable_LowPriority,rd=Ye.unstable_IdlePriority,pa=null,yt=null;function Jp(e){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(pa,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:nm,em=Math.log,tm=Math.LN2;function nm(e){return e>>>=0,e===0?32:31-(em(e)/tm|0)|0}var ro=64,oo=4194304;function dr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Fo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~o;l!==0?r=dr(l):(a&=i,a!==0&&(r=dr(a)))}else i=n&~o,i!==0?r=dr(i):a!==0&&(r=dr(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),o=1<<n,r|=e[n],t&=~o;return r}function rm(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function om(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-dt(a),l=1<<i,s=o[i];s===-1?(!(l&n)||l&r)&&(o[i]=rm(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Xi(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function od(){var e=ro;return ro<<=1,!(ro&4194240)&&(ro=64),e}function ri(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Qr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function am(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-dt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function Yl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var X=0;function ad(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var id,Kl,ld,sd,ud,Zi=!1,ao=[],Ft=null,Ot=null,Ut=null,Pr=new Map,_r=new Map,Tt=[],im="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function au(e,t){switch(e){case"focusin":case"focusout":Ft=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":Pr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":_r.delete(t.pointerId)}}function rr(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=Gr(t),t!==null&&Kl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function lm(e,t,n,r,o){switch(t){case"focusin":return Ft=rr(Ft,e,t,n,r,o),!0;case"dragenter":return Ot=rr(Ot,e,t,n,r,o),!0;case"mouseover":return Ut=rr(Ut,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Pr.set(a,rr(Pr.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,_r.set(a,rr(_r.get(a)||null,e,t,n,r,o)),!0}return!1}function cd(e){var t=nn(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=Zc(n),t!==null){e.blockedOn=t,ud(e.priority,function(){ld(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Eo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ji(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vi=r,n.target.dispatchEvent(r),Vi=null}else return t=Gr(n),t!==null&&Kl(t),e.blockedOn=n,!1;t.shift()}return!0}function iu(e,t,n){Eo(e)&&n.delete(t)}function sm(){Zi=!1,Ft!==null&&Eo(Ft)&&(Ft=null),Ot!==null&&Eo(Ot)&&(Ot=null),Ut!==null&&Eo(Ut)&&(Ut=null),Pr.forEach(iu),_r.forEach(iu)}function or(e,t){e.blockedOn===t&&(e.blockedOn=null,Zi||(Zi=!0,Ye.unstable_scheduleCallback(Ye.unstable_NormalPriority,sm)))}function Nr(e){function t(o){return or(o,e)}if(0<ao.length){or(ao[0],e);for(var n=1;n<ao.length;n++){var r=ao[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ft!==null&&or(Ft,e),Ot!==null&&or(Ot,e),Ut!==null&&or(Ut,e),Pr.forEach(t),_r.forEach(t),n=0;n<Tt.length;n++)r=Tt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Tt.length&&(n=Tt[0],n.blockedOn===null);)cd(n),n.blockedOn===null&&Tt.shift()}var Mn=bt.ReactCurrentBatchConfig,Oo=!0;function um(e,t,n,r){var o=X,a=Mn.transition;Mn.transition=null;try{X=1,Xl(e,t,n,r)}finally{X=o,Mn.transition=a}}function cm(e,t,n,r){var o=X,a=Mn.transition;Mn.transition=null;try{X=4,Xl(e,t,n,r)}finally{X=o,Mn.transition=a}}function Xl(e,t,n,r){if(Oo){var o=Ji(e,t,n,r);if(o===null)pi(e,t,r,Uo,n),au(e,r);else if(lm(o,e,t,n,r))r.stopPropagation();else if(au(e,r),t&4&&-1<im.indexOf(e)){for(;o!==null;){var a=Gr(o);if(a!==null&&id(a),a=Ji(e,t,n,r),a===null&&pi(e,t,r,Uo,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else pi(e,t,r,null,n)}}var Uo=null;function Ji(e,t,n,r){if(Uo=null,e=Vl(r),e=nn(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Uo=e,null}function dd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xp()){case Hl:return 1;case nd:return 4;case jo:case Zp:return 16;case rd:return 536870912;default:return 16}default:return 16}}var $t=null,Zl=null,Lo=null;function fd(){if(Lo)return Lo;var e,t=Zl,n=t.length,r,o="value"in $t?$t.value:$t.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return Lo=o.slice(e,1<r?1-r:void 0)}function Po(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function io(){return!0}function lu(){return!1}function Xe(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?io:lu,this.isPropagationStopped=lu,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),t}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jl=Xe(Kn),Wr=le({},Kn,{view:0,detail:0}),dm=Xe(Wr),oi,ai,ar,ma=le({},Wr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:es,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&e.type==="mousemove"?(oi=e.screenX-ar.screenX,ai=e.screenY-ar.screenY):ai=oi=0,ar=e),oi)},movementY:function(e){return"movementY"in e?e.movementY:ai}}),su=Xe(ma),fm=le({},ma,{dataTransfer:0}),pm=Xe(fm),mm=le({},Wr,{relatedTarget:0}),ii=Xe(mm),gm=le({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),hm=Xe(gm),vm=le({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ym=Xe(vm),wm=le({},Kn,{data:0}),uu=Xe(wm),xm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},km={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=km[e])?!!t[e]:!1}function es(){return Cm}var Em=le({},Wr,{key:function(e){if(e.key){var t=xm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Po(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Sm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:es,charCode:function(e){return e.type==="keypress"?Po(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Po(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lm=Xe(Em),Pm=le({},ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cu=Xe(Pm),_m=le({},Wr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:es}),Nm=Xe(_m),zm=le({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),bm=Xe(zm),qm=le({},ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dm=Xe(qm),Im=[9,13,27,32],ts=Pt&&"CompositionEvent"in window,gr=null;Pt&&"documentMode"in document&&(gr=document.documentMode);var Rm=Pt&&"TextEvent"in window&&!gr,pd=Pt&&(!ts||gr&&8<gr&&11>=gr),du=String.fromCharCode(32),fu=!1;function md(e,t){switch(e){case"keyup":return Im.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function gd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var En=!1;function Tm(e,t){switch(e){case"compositionend":return gd(t);case"keypress":return t.which!==32?null:(fu=!0,du);case"textInput":return e=t.data,e===du&&fu?null:e;default:return null}}function Am(e,t){if(En)return e==="compositionend"||!ts&&md(e,t)?(e=fd(),Lo=Zl=$t=null,En=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return pd&&t.locale!=="ko"?null:t.data;default:return null}}var $m={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$m[e.type]:t==="textarea"}function hd(e,t,n,r){Vc(r),t=Bo(t,"onChange"),0<t.length&&(n=new Jl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var hr=null,zr=null;function Mm(e){_d(e,0)}function ga(e){var t=_n(e);if(Fc(t))return e}function jm(e,t){if(e==="change")return t}var vd=!1;if(Pt){var li;if(Pt){var si="oninput"in document;if(!si){var mu=document.createElement("div");mu.setAttribute("oninput","return;"),si=typeof mu.oninput=="function"}li=si}else li=!1;vd=li&&(!document.documentMode||9<document.documentMode)}function gu(){hr&&(hr.detachEvent("onpropertychange",yd),zr=hr=null)}function yd(e){if(e.propertyName==="value"&&ga(zr)){var t=[];hd(t,zr,e,Vl(e)),Xc(Mm,t)}}function Fm(e,t,n){e==="focusin"?(gu(),hr=t,zr=n,hr.attachEvent("onpropertychange",yd)):e==="focusout"&&gu()}function Om(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ga(zr)}function Um(e,t){if(e==="click")return ga(t)}function Bm(e,t){if(e==="input"||e==="change")return ga(t)}function Qm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Qm;function br(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Ti.call(t,o)||!pt(e[o],t[o]))return!1}return!0}function hu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function vu(e,t){var n=hu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hu(n)}}function wd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function xd(){for(var e=window,t=Ao();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ao(e.document)}return t}function ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wm(e){var t=xd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&wd(n.ownerDocument.documentElement,n)){if(r!==null&&ns(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=vu(n,a);var i=vu(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gm=Pt&&"documentMode"in document&&11>=document.documentMode,Ln=null,el=null,vr=null,tl=!1;function yu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;tl||Ln==null||Ln!==Ao(r)||(r=Ln,"selectionStart"in r&&ns(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&br(vr,r)||(vr=r,r=Bo(el,"onSelect"),0<r.length&&(t=new Jl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ln)))}function lo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Pn={animationend:lo("Animation","AnimationEnd"),animationiteration:lo("Animation","AnimationIteration"),animationstart:lo("Animation","AnimationStart"),transitionend:lo("Transition","TransitionEnd")},ui={},Sd={};Pt&&(Sd=document.createElement("div").style,"AnimationEvent"in window||(delete Pn.animationend.animation,delete Pn.animationiteration.animation,delete Pn.animationstart.animation),"TransitionEvent"in window||delete Pn.transitionend.transition);function ha(e){if(ui[e])return ui[e];if(!Pn[e])return e;var t=Pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sd)return ui[e]=t[n];return e}var kd=ha("animationend"),Cd=ha("animationiteration"),Ed=ha("animationstart"),Ld=ha("transitionend"),Pd=new Map,wu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xt(e,t){Pd.set(e,t),hn(t,[e])}for(var ci=0;ci<wu.length;ci++){var di=wu[ci],Vm=di.toLowerCase(),Hm=di[0].toUpperCase()+di.slice(1);Xt(Vm,"on"+Hm)}Xt(kd,"onAnimationEnd");Xt(Cd,"onAnimationIteration");Xt(Ed,"onAnimationStart");Xt("dblclick","onDoubleClick");Xt("focusin","onFocus");Xt("focusout","onBlur");Xt(Ld,"onTransitionEnd");On("onMouseEnter",["mouseout","mouseover"]);On("onMouseLeave",["mouseout","mouseover"]);On("onPointerEnter",["pointerout","pointerover"]);On("onPointerLeave",["pointerout","pointerover"]);hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hn("onBeforeInput",["compositionend","keypress","textInput","paste"]);hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ym=new Set("cancel close invalid load scroll toggle".split(" ").concat(fr));function xu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vp(r,t,void 0,e),e.currentTarget=null}function _d(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;xu(o,l,u),a=s}else for(i=0;i<r.length;i++){if(l=r[i],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;xu(o,l,u),a=s}}}if(Mo)throw e=Ki,Mo=!1,Ki=null,e}function ne(e,t){var n=t[il];n===void 0&&(n=t[il]=new Set);var r=e+"__bubble";n.has(r)||(Nd(t,e,2,!1),n.add(r))}function fi(e,t,n){var r=0;t&&(r|=4),Nd(n,e,r,t)}var so="_reactListening"+Math.random().toString(36).slice(2);function qr(e){if(!e[so]){e[so]=!0,Tc.forEach(function(n){n!=="selectionchange"&&(Ym.has(n)||fi(n,!1,e),fi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[so]||(t[so]=!0,fi("selectionchange",!1,t))}}function Nd(e,t,n,r){switch(dd(t)){case 1:var o=um;break;case 4:o=cm;break;default:o=Xl}n=o.bind(null,t,n,e),o=void 0,!Yi||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function pi(e,t,n,r,o){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;l!==null;){if(i=nn(l),i===null)return;if(s=i.tag,s===5||s===6){r=a=i;continue e}l=l.parentNode}}r=r.return}Xc(function(){var u=a,p=Vl(n),m=[];e:{var g=Pd.get(e);if(g!==void 0){var S=Jl,v=e;switch(e){case"keypress":if(Po(n)===0)break e;case"keydown":case"keyup":S=Lm;break;case"focusin":v="focus",S=ii;break;case"focusout":v="blur",S=ii;break;case"beforeblur":case"afterblur":S=ii;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=su;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=pm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=Nm;break;case kd:case Cd:case Ed:S=hm;break;case Ld:S=bm;break;case"scroll":S=dm;break;case"wheel":S=Dm;break;case"copy":case"cut":case"paste":S=ym;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=cu}var y=(t&4)!==0,L=!y&&e==="scroll",d=y?g!==null?g+"Capture":null:g;y=[];for(var c=u,f;c!==null;){f=c;var w=f.stateNode;if(f.tag===5&&w!==null&&(f=w,d!==null&&(w=Lr(c,d),w!=null&&y.push(Dr(c,w,f)))),L)break;c=c.return}0<y.length&&(g=new S(g,v,null,n,p),m.push({event:g,listeners:y}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",S=e==="mouseout"||e==="pointerout",g&&n!==Vi&&(v=n.relatedTarget||n.fromElement)&&(nn(v)||v[_t]))break e;if((S||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,S?(v=n.relatedTarget||n.toElement,S=u,v=v?nn(v):null,v!==null&&(L=vn(v),v!==L||v.tag!==5&&v.tag!==6)&&(v=null)):(S=null,v=u),S!==v)){if(y=su,w="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(y=cu,w="onPointerLeave",d="onPointerEnter",c="pointer"),L=S==null?g:_n(S),f=v==null?g:_n(v),g=new y(w,c+"leave",S,n,p),g.target=L,g.relatedTarget=f,w=null,nn(p)===u&&(y=new y(d,c+"enter",v,n,p),y.target=f,y.relatedTarget=L,w=y),L=w,S&&v)t:{for(y=S,d=v,c=0,f=y;f;f=wn(f))c++;for(f=0,w=d;w;w=wn(w))f++;for(;0<c-f;)y=wn(y),c--;for(;0<f-c;)d=wn(d),f--;for(;c--;){if(y===d||d!==null&&y===d.alternate)break t;y=wn(y),d=wn(d)}y=null}else y=null;S!==null&&Su(m,g,S,y,!1),v!==null&&L!==null&&Su(m,L,v,y,!0)}}e:{if(g=u?_n(u):window,S=g.nodeName&&g.nodeName.toLowerCase(),S==="select"||S==="input"&&g.type==="file")var E=jm;else if(pu(g))if(vd)E=Bm;else{E=Om;var b=Fm}else(S=g.nodeName)&&S.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=Um);if(E&&(E=E(e,u))){hd(m,E,n,p);break e}b&&b(e,g,u),e==="focusout"&&(b=g._wrapperState)&&b.controlled&&g.type==="number"&&Ui(g,"number",g.value)}switch(b=u?_n(u):window,e){case"focusin":(pu(b)||b.contentEditable==="true")&&(Ln=b,el=u,vr=null);break;case"focusout":vr=el=Ln=null;break;case"mousedown":tl=!0;break;case"contextmenu":case"mouseup":case"dragend":tl=!1,yu(m,n,p);break;case"selectionchange":if(Gm)break;case"keydown":case"keyup":yu(m,n,p)}var R;if(ts)e:{switch(e){case"compositionstart":var q="onCompositionStart";break e;case"compositionend":q="onCompositionEnd";break e;case"compositionupdate":q="onCompositionUpdate";break e}q=void 0}else En?md(e,n)&&(q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(q="onCompositionStart");q&&(pd&&n.locale!=="ko"&&(En||q!=="onCompositionStart"?q==="onCompositionEnd"&&En&&(R=fd()):($t=p,Zl="value"in $t?$t.value:$t.textContent,En=!0)),b=Bo(u,q),0<b.length&&(q=new uu(q,e,null,n,p),m.push({event:q,listeners:b}),R?q.data=R:(R=gd(n),R!==null&&(q.data=R)))),(R=Rm?Tm(e,n):Am(e,n))&&(u=Bo(u,"onBeforeInput"),0<u.length&&(p=new uu("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:u}),p.data=R))}_d(m,t)})}function Dr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Bo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Lr(e,n),a!=null&&r.unshift(Dr(e,a,o)),a=Lr(e,t),a!=null&&r.push(Dr(e,a,o))),e=e.return}return r}function wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Su(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=Lr(n,a),s!=null&&i.unshift(Dr(n,s,l))):o||(s=Lr(n,a),s!=null&&i.push(Dr(n,s,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var Km=/\r\n?/g,Xm=/\u0000|\uFFFD/g;function ku(e){return(typeof e=="string"?e:""+e).replace(Km,`
`).replace(Xm,"")}function uo(e,t,n){if(t=ku(t),ku(e)!==t&&n)throw Error(k(425))}function Qo(){}var nl=null,rl=null;function ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var al=typeof setTimeout=="function"?setTimeout:void 0,Zm=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,Jm=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu<"u"?function(e){return Cu.resolve(null).then(e).catch(eg)}:al;function eg(e){setTimeout(function(){throw e})}function mi(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Nr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Nr(t)}function Bt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Eu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Xn=Math.random().toString(36).slice(2),ht="__reactFiber$"+Xn,Ir="__reactProps$"+Xn,_t="__reactContainer$"+Xn,il="__reactEvents$"+Xn,tg="__reactListeners$"+Xn,ng="__reactHandles$"+Xn;function nn(e){var t=e[ht];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ht]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Eu(e);e!==null;){if(n=e[ht])return n;e=Eu(e)}return t}e=n,n=e.parentNode}return null}function Gr(e){return e=e[ht]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function _n(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function va(e){return e[Ir]||null}var ll=[],Nn=-1;function Zt(e){return{current:e}}function re(e){0>Nn||(e.current=ll[Nn],ll[Nn]=null,Nn--)}function te(e,t){Nn++,ll[Nn]=e.current,e.current=t}var Kt={},Ie=Zt(Kt),Ue=Zt(!1),un=Kt;function Un(e,t){var n=e.type.contextTypes;if(!n)return Kt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Be(e){return e=e.childContextTypes,e!=null}function Wo(){re(Ue),re(Ie)}function Lu(e,t,n){if(Ie.current!==Kt)throw Error(k(168));te(Ie,t),te(Ue,n)}function zd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,Fp(e)||"Unknown",o));return le({},n,r)}function Go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Kt,un=Ie.current,te(Ie,e),te(Ue,Ue.current),!0}function Pu(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=zd(e,t,un),r.__reactInternalMemoizedMergedChildContext=e,re(Ue),re(Ie),te(Ie,e)):re(Ue),te(Ue,n)}var kt=null,ya=!1,gi=!1;function bd(e){kt===null?kt=[e]:kt.push(e)}function rg(e){ya=!0,bd(e)}function Jt(){if(!gi&&kt!==null){gi=!0;var e=0,t=X;try{var n=kt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}kt=null,ya=!1}catch(o){throw kt!==null&&(kt=kt.slice(e+1)),td(Hl,Jt),o}finally{X=t,gi=!1}}return null}var zn=[],bn=0,Vo=null,Ho=0,Je=[],et=0,cn=null,Ct=1,Et="";function en(e,t){zn[bn++]=Ho,zn[bn++]=Vo,Vo=e,Ho=t}function qd(e,t,n){Je[et++]=Ct,Je[et++]=Et,Je[et++]=cn,cn=e;var r=Ct;e=Et;var o=32-dt(r)-1;r&=~(1<<o),n+=1;var a=32-dt(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Ct=1<<32-dt(t)+o|n<<o|r,Et=a+e}else Ct=1<<a|n<<o|r,Et=e}function rs(e){e.return!==null&&(en(e,1),qd(e,1,0))}function os(e){for(;e===Vo;)Vo=zn[--bn],zn[bn]=null,Ho=zn[--bn],zn[bn]=null;for(;e===cn;)cn=Je[--et],Je[et]=null,Et=Je[--et],Je[et]=null,Ct=Je[--et],Je[et]=null}var He=null,Ve=null,oe=!1,ct=null;function Dd(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function _u(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,He=e,Ve=Bt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,He=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=cn!==null?{id:Ct,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,He=e,Ve=null,!0):!1;default:return!1}}function sl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ul(e){if(oe){var t=Ve;if(t){var n=t;if(!_u(e,t)){if(sl(e))throw Error(k(418));t=Bt(n.nextSibling);var r=He;t&&_u(e,t)?Dd(r,n):(e.flags=e.flags&-4097|2,oe=!1,He=e)}}else{if(sl(e))throw Error(k(418));e.flags=e.flags&-4097|2,oe=!1,He=e}}}function Nu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;He=e}function co(e){if(e!==He)return!1;if(!oe)return Nu(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ol(e.type,e.memoizedProps)),t&&(t=Ve)){if(sl(e))throw Id(),Error(k(418));for(;t;)Dd(e,t),t=Bt(t.nextSibling)}if(Nu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=Bt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=He?Bt(e.stateNode.nextSibling):null;return!0}function Id(){for(var e=Ve;e;)e=Bt(e.nextSibling)}function Bn(){Ve=He=null,oe=!1}function as(e){ct===null?ct=[e]:ct.push(e)}var og=bt.ReactCurrentBatchConfig;function st(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Yo=Zt(null),Ko=null,qn=null,is=null;function ls(){is=qn=Ko=null}function ss(e){var t=Yo.current;re(Yo),e._currentValue=t}function cl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jn(e,t){Ko=e,is=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Oe=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(is!==e)if(e={context:e,memoizedValue:t,next:null},qn===null){if(Ko===null)throw Error(k(308));qn=e,Ko.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return t}var rn=null;function us(e){rn===null?rn=[e]:rn.push(e)}function Rd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,us(t)):(n.next=o.next,o.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function cs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Td(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Lt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Nt(e,n)}return o=r.interleaved,o===null?(t.next=t,us(r)):(t.next=o.next,o.next=t),r.interleaved=t,Nt(e,n)}function _o(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yl(e,n)}}function zu(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xo(e,t,n,r){var o=e.updateQueue;Rt=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,i===null?a=u:i.next=u,i=s;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==i&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=s))}if(a!==null){var m=o.baseState;i=0,p=u=s=null,l=a;do{var g=l.lane,S=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:S,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var v=e,y=l;switch(g=t,S=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){m=v.call(S,m,g);break e}m=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,g=typeof v=="function"?v.call(S,m,g):v,g==null)break e;m=le({},m,g);break e;case 2:Rt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[l]:g.push(l))}else S={eventTime:S,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=S,s=m):p=p.next=S,i|=g;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;g=l,l=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(p===null&&(s=m),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=p,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);fn|=i,e.lanes=i,e.memoizedState=m}}function bu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var Ad=new Rc.Component().refs;function dl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var wa={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=Gt(e),a=Lt(r,o);a.payload=t,n!=null&&(a.callback=n),t=Qt(e,a,o),t!==null&&(ft(t,e,o,r),_o(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ae(),o=Gt(e),a=Lt(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Qt(e,a,o),t!==null&&(ft(t,e,o,r),_o(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ae(),r=Gt(e),o=Lt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Qt(e,o,r),t!==null&&(ft(t,e,r,n),_o(t,e,r))}};function qu(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!br(n,r)||!br(o,a):!0}function $d(e,t,n){var r=!1,o=Kt,a=t.contextType;return typeof a=="object"&&a!==null?a=rt(a):(o=Be(t)?un:Ie.current,r=t.contextTypes,a=(r=r!=null)?Un(e,o):Kt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=wa,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function Du(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&wa.enqueueReplaceState(t,t.state,null)}function fl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=Ad,cs(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=rt(a):(a=Be(t)?un:Ie.current,o.context=Un(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(dl(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&wa.enqueueReplaceState(o,o.state,null),Xo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var l=o.refs;l===Ad&&(l=o.refs={}),i===null?delete l[a]:l[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function fo(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Iu(e){var t=e._init;return t(e._payload)}function Md(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=Vt(d,c),d.index=0,d.sibling=null,d}function a(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=2,c):f):(d.flags|=2,c)):(d.flags|=1048576,c)}function i(d){return e&&d.alternate===null&&(d.flags|=2),d}function l(d,c,f,w){return c===null||c.tag!==6?(c=ki(f,d.mode,w),c.return=d,c):(c=o(c,f),c.return=d,c)}function s(d,c,f,w){var E=f.type;return E===Cn?p(d,c,f.props.children,w,f.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===It&&Iu(E)===c.type)?(w=o(c,f.props),w.ref=ir(d,c,f),w.return=d,w):(w=Io(f.type,f.key,f.props,null,d.mode,w),w.ref=ir(d,c,f),w.return=d,w)}function u(d,c,f,w){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Ci(f,d.mode,w),c.return=d,c):(c=o(c,f.children||[]),c.return=d,c)}function p(d,c,f,w,E){return c===null||c.tag!==7?(c=ln(f,d.mode,w,E),c.return=d,c):(c=o(c,f),c.return=d,c)}function m(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number")return c=ki(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case eo:return f=Io(c.type,c.key,c.props,null,d.mode,f),f.ref=ir(d,null,c),f.return=d,f;case kn:return c=Ci(c,d.mode,f),c.return=d,c;case It:var w=c._init;return m(d,w(c._payload),f)}if(cr(c)||tr(c))return c=ln(c,d.mode,f,null),c.return=d,c;fo(d,c)}return null}function g(d,c,f,w){var E=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return E!==null?null:l(d,c,""+f,w);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case eo:return f.key===E?s(d,c,f,w):null;case kn:return f.key===E?u(d,c,f,w):null;case It:return E=f._init,g(d,c,E(f._payload),w)}if(cr(f)||tr(f))return E!==null?null:p(d,c,f,w,null);fo(d,f)}return null}function S(d,c,f,w,E){if(typeof w=="string"&&w!==""||typeof w=="number")return d=d.get(f)||null,l(c,d,""+w,E);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case eo:return d=d.get(w.key===null?f:w.key)||null,s(c,d,w,E);case kn:return d=d.get(w.key===null?f:w.key)||null,u(c,d,w,E);case It:var b=w._init;return S(d,c,f,b(w._payload),E)}if(cr(w)||tr(w))return d=d.get(f)||null,p(c,d,w,E,null);fo(c,w)}return null}function v(d,c,f,w){for(var E=null,b=null,R=c,q=c=0,G=null;R!==null&&q<f.length;q++){R.index>q?(G=R,R=null):G=R.sibling;var j=g(d,R,f[q],w);if(j===null){R===null&&(R=G);break}e&&R&&j.alternate===null&&t(d,R),c=a(j,c,q),b===null?E=j:b.sibling=j,b=j,R=G}if(q===f.length)return n(d,R),oe&&en(d,q),E;if(R===null){for(;q<f.length;q++)R=m(d,f[q],w),R!==null&&(c=a(R,c,q),b===null?E=R:b.sibling=R,b=R);return oe&&en(d,q),E}for(R=r(d,R);q<f.length;q++)G=S(R,d,q,f[q],w),G!==null&&(e&&G.alternate!==null&&R.delete(G.key===null?q:G.key),c=a(G,c,q),b===null?E=G:b.sibling=G,b=G);return e&&R.forEach(function(he){return t(d,he)}),oe&&en(d,q),E}function y(d,c,f,w){var E=tr(f);if(typeof E!="function")throw Error(k(150));if(f=E.call(f),f==null)throw Error(k(151));for(var b=E=null,R=c,q=c=0,G=null,j=f.next();R!==null&&!j.done;q++,j=f.next()){R.index>q?(G=R,R=null):G=R.sibling;var he=g(d,R,j.value,w);if(he===null){R===null&&(R=G);break}e&&R&&he.alternate===null&&t(d,R),c=a(he,c,q),b===null?E=he:b.sibling=he,b=he,R=G}if(j.done)return n(d,R),oe&&en(d,q),E;if(R===null){for(;!j.done;q++,j=f.next())j=m(d,j.value,w),j!==null&&(c=a(j,c,q),b===null?E=j:b.sibling=j,b=j);return oe&&en(d,q),E}for(R=r(d,R);!j.done;q++,j=f.next())j=S(R,d,q,j.value,w),j!==null&&(e&&j.alternate!==null&&R.delete(j.key===null?q:j.key),c=a(j,c,q),b===null?E=j:b.sibling=j,b=j);return e&&R.forEach(function(pe){return t(d,pe)}),oe&&en(d,q),E}function L(d,c,f,w){if(typeof f=="object"&&f!==null&&f.type===Cn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case eo:e:{for(var E=f.key,b=c;b!==null;){if(b.key===E){if(E=f.type,E===Cn){if(b.tag===7){n(d,b.sibling),c=o(b,f.props.children),c.return=d,d=c;break e}}else if(b.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===It&&Iu(E)===b.type){n(d,b.sibling),c=o(b,f.props),c.ref=ir(d,b,f),c.return=d,d=c;break e}n(d,b);break}else t(d,b);b=b.sibling}f.type===Cn?(c=ln(f.props.children,d.mode,w,f.key),c.return=d,d=c):(w=Io(f.type,f.key,f.props,null,d.mode,w),w.ref=ir(d,c,f),w.return=d,d=w)}return i(d);case kn:e:{for(b=f.key;c!==null;){if(c.key===b)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){n(d,c.sibling),c=o(c,f.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Ci(f,d.mode,w),c.return=d,d=c}return i(d);case It:return b=f._init,L(d,c,b(f._payload),w)}if(cr(f))return v(d,c,f,w);if(tr(f))return y(d,c,f,w);fo(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,f),c.return=d,d=c):(n(d,c),c=ki(f,d.mode,w),c.return=d,d=c),i(d)):n(d,c)}return L}var Qn=Md(!0),jd=Md(!1),Vr={},wt=Zt(Vr),Rr=Zt(Vr),Tr=Zt(Vr);function on(e){if(e===Vr)throw Error(k(174));return e}function ds(e,t){switch(te(Tr,t),te(Rr,e),te(wt,Vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qi(t,e)}re(wt),te(wt,t)}function Wn(){re(wt),re(Rr),re(Tr)}function Fd(e){on(Tr.current);var t=on(wt.current),n=Qi(t,e.type);t!==n&&(te(Rr,e),te(wt,n))}function fs(e){Rr.current===e&&(re(wt),re(Rr))}var ae=Zt(0);function Zo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var hi=[];function ps(){for(var e=0;e<hi.length;e++)hi[e]._workInProgressVersionPrimary=null;hi.length=0}var No=bt.ReactCurrentDispatcher,vi=bt.ReactCurrentBatchConfig,dn=0,ie=null,me=null,ve=null,Jo=!1,yr=!1,Ar=0,ag=0;function be(){throw Error(k(321))}function ms(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function gs(e,t,n,r,o,a){if(dn=a,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,No.current=e===null||e.memoizedState===null?ug:cg,e=n(r,o),yr){a=0;do{if(yr=!1,Ar=0,25<=a)throw Error(k(301));a+=1,ve=me=null,t.updateQueue=null,No.current=dg,e=n(r,o)}while(yr)}if(No.current=ea,t=me!==null&&me.next!==null,dn=0,ve=me=ie=null,Jo=!1,t)throw Error(k(300));return e}function hs(){var e=Ar!==0;return Ar=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ie.memoizedState=ve=e:ve=ve.next=e,ve}function ot(){if(me===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=ve===null?ie.memoizedState:ve.next;if(t!==null)ve=t,me=e;else{if(e===null)throw Error(k(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},ve===null?ie.memoizedState=ve=e:ve=ve.next=e}return ve}function $r(e,t){return typeof t=="function"?t(e):t}function yi(e){var t=ot(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=me,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var l=i=null,s=null,u=a;do{var p=u.lane;if((dn&p)===p)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var m={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=m,i=r):s=s.next=m,ie.lanes|=p,fn|=p}u=u.next}while(u!==null&&u!==a);s===null?i=r:s.next=l,pt(r,t.memoizedState)||(Oe=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,ie.lanes|=a,fn|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wi(e){var t=ot(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);pt(a,t.memoizedState)||(Oe=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Od(){}function Ud(e,t){var n=ie,r=ot(),o=t(),a=!pt(r.memoizedState,o);if(a&&(r.memoizedState=o,Oe=!0),r=r.queue,vs(Wd.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,Mr(9,Qd.bind(null,n,r,o,t),void 0,null),ye===null)throw Error(k(349));dn&30||Bd(n,t,o)}return o}function Bd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Qd(e,t,n,r){t.value=n,t.getSnapshot=r,Gd(t)&&Vd(e)}function Wd(e,t,n){return n(function(){Gd(t)&&Vd(e)})}function Gd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function Vd(e){var t=Nt(e,1);t!==null&&ft(t,e,1,-1)}function Ru(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=sg.bind(null,ie,e),[t.memoizedState,e]}function Mr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Hd(){return ot().memoizedState}function zo(e,t,n,r){var o=gt();ie.flags|=e,o.memoizedState=Mr(1|t,n,void 0,r===void 0?null:r)}function xa(e,t,n,r){var o=ot();r=r===void 0?null:r;var a=void 0;if(me!==null){var i=me.memoizedState;if(a=i.destroy,r!==null&&ms(r,i.deps)){o.memoizedState=Mr(t,n,a,r);return}}ie.flags|=e,o.memoizedState=Mr(1|t,n,a,r)}function Tu(e,t){return zo(8390656,8,e,t)}function vs(e,t){return xa(2048,8,e,t)}function Yd(e,t){return xa(4,2,e,t)}function Kd(e,t){return xa(4,4,e,t)}function Xd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Zd(e,t,n){return n=n!=null?n.concat([e]):null,xa(4,4,Xd.bind(null,t,e),n)}function ys(){}function Jd(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ms(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ef(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ms(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function tf(e,t,n){return dn&21?(pt(n,t)||(n=od(),ie.lanes|=n,fn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Oe=!0),e.memoizedState=n)}function ig(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=vi.transition;vi.transition={};try{e(!1),t()}finally{X=n,vi.transition=r}}function nf(){return ot().memoizedState}function lg(e,t,n){var r=Gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},rf(e))of(t,n);else if(n=Rd(e,t,n,r),n!==null){var o=Ae();ft(n,e,r,o),af(n,t,r)}}function sg(e,t,n){var r=Gt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(rf(e))of(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,pt(l,i)){var s=t.interleaved;s===null?(o.next=o,us(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Rd(e,t,o,r),n!==null&&(o=Ae(),ft(n,e,r,o),af(n,t,r))}}function rf(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function of(e,t){yr=Jo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function af(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yl(e,n)}}var ea={readContext:rt,useCallback:be,useContext:be,useEffect:be,useImperativeHandle:be,useInsertionEffect:be,useLayoutEffect:be,useMemo:be,useReducer:be,useRef:be,useState:be,useDebugValue:be,useDeferredValue:be,useTransition:be,useMutableSource:be,useSyncExternalStore:be,useId:be,unstable_isNewReconciler:!1},ug={readContext:rt,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Tu,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,zo(4194308,4,Xd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return zo(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lg.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:Ru,useDebugValue:ys,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=Ru(!1),t=e[0];return e=ig.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,o=gt();if(oe){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ye===null)throw Error(k(349));dn&30||Bd(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,Tu(Wd.bind(null,r,a,e),[e]),r.flags|=2048,Mr(9,Qd.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=gt(),t=ye.identifierPrefix;if(oe){var n=Et,r=Ct;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ar++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ag++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},cg={readContext:rt,useCallback:Jd,useContext:rt,useEffect:vs,useImperativeHandle:Zd,useInsertionEffect:Yd,useLayoutEffect:Kd,useMemo:ef,useReducer:yi,useRef:Hd,useState:function(){return yi($r)},useDebugValue:ys,useDeferredValue:function(e){var t=ot();return tf(t,me.memoizedState,e)},useTransition:function(){var e=yi($r)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Od,useSyncExternalStore:Ud,useId:nf,unstable_isNewReconciler:!1},dg={readContext:rt,useCallback:Jd,useContext:rt,useEffect:vs,useImperativeHandle:Zd,useInsertionEffect:Yd,useLayoutEffect:Kd,useMemo:ef,useReducer:wi,useRef:Hd,useState:function(){return wi($r)},useDebugValue:ys,useDeferredValue:function(e){var t=ot();return me===null?t.memoizedState=e:tf(t,me.memoizedState,e)},useTransition:function(){var e=wi($r)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Od,useSyncExternalStore:Ud,useId:nf,unstable_isNewReconciler:!1};function Gn(e,t){try{var n="",r=t;do n+=jp(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function xi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function pl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fg=typeof WeakMap=="function"?WeakMap:Map;function lf(e,t,n){n=Lt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){na||(na=!0,Cl=r),pl(e,t)},n}function sf(e,t,n){n=Lt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){pl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){pl(e,t),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function Au(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new fg;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Pg.bind(null,e,t,n),t.then(e,e))}function $u(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Mu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Lt(-1,1),t.tag=2,Qt(n,t,1))),n.lanes|=1),e)}var pg=bt.ReactCurrentOwner,Oe=!1;function Te(e,t,n,r){t.child=e===null?jd(t,null,n,r):Qn(t,e.child,n,r)}function ju(e,t,n,r,o){n=n.render;var a=t.ref;return jn(t,o),r=gs(e,t,n,r,a,o),n=hs(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,zt(e,t,o)):(oe&&n&&rs(t),t.flags|=1,Te(e,t,r,o),t.child)}function Fu(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!Ps(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,uf(e,t,a,r,o)):(e=Io(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:br,n(i,r)&&e.ref===t.ref)return zt(e,t,o)}return t.flags|=1,e=Vt(a,r),e.ref=t.ref,e.return=t,t.child=e}function uf(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(br(a,r)&&e.ref===t.ref)if(Oe=!1,t.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(Oe=!0);else return t.lanes=e.lanes,zt(e,t,o)}return ml(e,t,n,r,o)}function cf(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(In,Ge),Ge|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(In,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,te(In,Ge),Ge|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,te(In,Ge),Ge|=r;return Te(e,t,o,n),t.child}function df(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ml(e,t,n,r,o){var a=Be(n)?un:Ie.current;return a=Un(t,a),jn(t,o),n=gs(e,t,n,r,a,o),r=hs(),e!==null&&!Oe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,zt(e,t,o)):(oe&&r&&rs(t),t.flags|=1,Te(e,t,n,o),t.child)}function Ou(e,t,n,r,o){if(Be(n)){var a=!0;Go(t)}else a=!1;if(jn(t,o),t.stateNode===null)bo(e,t),$d(t,n,r),fl(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=rt(u):(u=Be(n)?un:Ie.current,u=Un(t,u));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function";m||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||s!==u)&&Du(t,i,r,u),Rt=!1;var g=t.memoizedState;i.state=g,Xo(t,r,i,o),s=t.memoizedState,l!==r||g!==s||Ue.current||Rt?(typeof p=="function"&&(dl(t,n,p,r),s=t.memoizedState),(l=Rt||qu(t,n,l,r,g,s,u))?(m||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Td(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:st(t.type,l),i.props=u,m=t.pendingProps,g=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=rt(s):(s=Be(n)?un:Ie.current,s=Un(t,s));var S=n.getDerivedStateFromProps;(p=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==m||g!==s)&&Du(t,i,r,s),Rt=!1,g=t.memoizedState,i.state=g,Xo(t,r,i,o);var v=t.memoizedState;l!==m||g!==v||Ue.current||Rt?(typeof S=="function"&&(dl(t,n,S,r),v=t.memoizedState),(u=Rt||qu(t,n,u,r,g,v,s)||!1)?(p||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,v,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,v,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),i.props=r,i.state=v,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return gl(e,t,n,r,a,o)}function gl(e,t,n,r,o,a){df(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Pu(t,n,!1),zt(e,t,a);r=t.stateNode,pg.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Qn(t,e.child,null,a),t.child=Qn(t,null,l,a)):Te(e,t,l,a),t.memoizedState=r.state,o&&Pu(t,n,!0),t.child}function ff(e){var t=e.stateNode;t.pendingContext?Lu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Lu(e,t.context,!1),ds(e,t.containerInfo)}function Uu(e,t,n,r,o){return Bn(),as(o),t.flags|=256,Te(e,t,n,r),t.child}var hl={dehydrated:null,treeContext:null,retryLane:0};function vl(e){return{baseLanes:e,cachePool:null,transitions:null}}function pf(e,t,n){var r=t.pendingProps,o=ae.current,a=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),te(ae,o&1),e===null)return ul(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Ca(i,r,0,null),e=ln(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=vl(n),t.memoizedState=hl,e):ws(t,i));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return mg(e,t,i,r,l,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=Vt(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=Vt(l,a):(a=ln(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?vl(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=hl,r}return a=e.child,e=a.sibling,r=Vt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ws(e,t){return t=Ca({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function po(e,t,n,r){return r!==null&&as(r),Qn(t,e.child,null,n),e=ws(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function mg(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=xi(Error(k(422))),po(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Ca({mode:"visible",children:r.children},o,0,null),a=ln(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Qn(t,e.child,null,i),t.child.memoizedState=vl(i),t.memoizedState=hl,a);if(!(t.mode&1))return po(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(k(419)),r=xi(a,r,void 0),po(e,t,i,r)}if(l=(i&e.childLanes)!==0,Oe||l){if(r=ye,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Nt(e,o),ft(r,e,o,-1))}return Ls(),r=xi(Error(k(421))),po(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=_g.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,Ve=Bt(o.nextSibling),He=t,oe=!0,ct=null,e!==null&&(Je[et++]=Ct,Je[et++]=Et,Je[et++]=cn,Ct=e.id,Et=e.overflow,cn=t),t=ws(t,r.children),t.flags|=4096,t)}function Bu(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),cl(e.return,t,n)}function Si(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function mf(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(Te(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Bu(e,n,t);else if(e.tag===19)Bu(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(ae,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Zo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Si(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Zo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Si(t,!0,n,null,a);break;case"together":Si(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function zt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),fn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gg(e,t,n){switch(t.tag){case 3:ff(t),Bn();break;case 5:Fd(t);break;case 1:Be(t.type)&&Go(t);break;case 4:ds(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;te(Yo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?pf(e,t,n):(te(ae,ae.current&1),e=zt(e,t,n),e!==null?e.sibling:null);te(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return mf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),te(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,cf(e,t,n)}return zt(e,t,n)}var gf,yl,hf,vf;gf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yl=function(){};hf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,on(wt.current);var a=null;switch(n){case"input":o=Fi(e,o),r=Fi(e,r),a=[];break;case"select":o=le({},o,{value:void 0}),r=le({},r,{value:void 0}),a=[];break;case"textarea":o=Bi(e,o),r=Bi(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qo)}Wi(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Cr.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Cr.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ne("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};vf=function(e,t,n,r){n!==r&&(t.flags|=4)};function lr(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hg(e,t,n){var r=t.pendingProps;switch(os(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return Be(t.type)&&Wo(),qe(t),null;case 3:return r=t.stateNode,Wn(),re(Ue),re(Ie),ps(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(co(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(Pl(ct),ct=null))),yl(e,t),qe(t),null;case 5:fs(t);var o=on(Tr.current);if(n=t.type,e!==null&&t.stateNode!=null)hf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return qe(t),null}if(e=on(wt.current),co(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[ht]=t,r[Ir]=a,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(o=0;o<fr.length;o++)ne(fr[o],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Zs(r,a),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ne("invalid",r);break;case"textarea":eu(r,a),ne("invalid",r)}Wi(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&uo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&uo(r.textContent,l,e),o=["children",""+l]):Cr.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&ne("scroll",r)}switch(n){case"input":to(r),Js(r,a,!0);break;case"textarea":to(r),tu(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Qo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Bc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[ht]=t,e[Ir]=r,gf(e,t,!1,!1),t.stateNode=e;e:{switch(i=Gi(n,r),n){case"dialog":ne("cancel",e),ne("close",e),o=r;break;case"iframe":case"object":case"embed":ne("load",e),o=r;break;case"video":case"audio":for(o=0;o<fr.length;o++)ne(fr[o],e);o=r;break;case"source":ne("error",e),o=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),o=r;break;case"details":ne("toggle",e),o=r;break;case"input":Zs(e,r),o=Fi(e,r),ne("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=le({},r,{value:void 0}),ne("invalid",e);break;case"textarea":eu(e,r),o=Bi(e,r),ne("invalid",e);break;default:o=r}Wi(n,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?Gc(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Qc(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Er(e,s):typeof s=="number"&&Er(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Cr.hasOwnProperty(a)?s!=null&&a==="onScroll"&&ne("scroll",e):s!=null&&Bl(e,a,s,i))}switch(n){case"input":to(e),Js(e,r,!1);break;case"textarea":to(e),tu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Yt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?Tn(e,!!r.multiple,a,!1):r.defaultValue!=null&&Tn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)vf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=on(Tr.current),on(wt.current),co(t)){if(r=t.stateNode,n=t.memoizedProps,r[ht]=t,(a=r.nodeValue!==n)&&(e=He,e!==null))switch(e.tag){case 3:uo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&uo(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ht]=t,t.stateNode=r}return qe(t),null;case 13:if(re(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&Ve!==null&&t.mode&1&&!(t.flags&128))Id(),Bn(),t.flags|=98560,a=!1;else if(a=co(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(k(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(k(317));a[ht]=t}else Bn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;qe(t),a=!1}else ct!==null&&(Pl(ct),ct=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?ge===0&&(ge=3):Ls())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return Wn(),yl(e,t),e===null&&qr(t.stateNode.containerInfo),qe(t),null;case 10:return ss(t.type._context),qe(t),null;case 17:return Be(t.type)&&Wo(),qe(t),null;case 19:if(re(ae),a=t.memoizedState,a===null)return qe(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)lr(a,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Zo(e),i!==null){for(t.flags|=128,lr(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(ae,ae.current&1|2),t.child}e=e.sibling}a.tail!==null&&de()>Vn&&(t.flags|=128,r=!0,lr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Zo(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),lr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!oe)return qe(t),null}else 2*de()-a.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,lr(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=de(),t.sibling=null,n=ae.current,te(ae,r?n&1|2:n&1),t):(qe(t),null);case 22:case 23:return Es(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ge&1073741824&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function vg(e,t){switch(os(t),t.tag){case 1:return Be(t.type)&&Wo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Wn(),re(Ue),re(Ie),ps(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return fs(t),null;case 13:if(re(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Bn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(ae),null;case 4:return Wn(),null;case 10:return ss(t.type._context),null;case 22:case 23:return Es(),null;case 24:return null;default:return null}}var mo=!1,De=!1,yg=typeof WeakSet=="function"?WeakSet:Set,I=null;function Dn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(e,t,r)}else n.current=null}function wl(e,t,n){try{n()}catch(r){ue(e,t,r)}}var Qu=!1;function wg(e,t){if(nl=Oo,e=xd(),ns(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,l=-1,s=-1,u=0,p=0,m=e,g=null;t:for(;;){for(var S;m!==n||o!==0&&m.nodeType!==3||(l=i+o),m!==a||r!==0&&m.nodeType!==3||(s=i+r),m.nodeType===3&&(i+=m.nodeValue.length),(S=m.firstChild)!==null;)g=m,m=S;for(;;){if(m===e)break t;if(g===n&&++u===o&&(l=i),g===a&&++p===r&&(s=i),(S=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=S}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(rl={focusedElem:e,selectionRange:n},Oo=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,L=v.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?y:st(t.type,y),L);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){ue(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return v=Qu,Qu=!1,v}function wr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&wl(t,n,a)}o=o.next}while(o!==r)}}function Sa(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function xl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yf(e){var t=e.alternate;t!==null&&(e.alternate=null,yf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ht],delete t[Ir],delete t[il],delete t[tg],delete t[ng])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function wf(e){return e.tag===5||e.tag===3||e.tag===4}function Wu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||wf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qo));else if(r!==4&&(e=e.child,e!==null))for(Sl(e,t,n),e=e.sibling;e!==null;)Sl(e,t,n),e=e.sibling}function kl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(kl(e,t,n),e=e.sibling;e!==null;)kl(e,t,n),e=e.sibling}var Le=null,ut=!1;function Dt(e,t,n){for(n=n.child;n!==null;)xf(e,t,n),n=n.sibling}function xf(e,t,n){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(pa,n)}catch{}switch(n.tag){case 5:De||Dn(n,t);case 6:var r=Le,o=ut;Le=null,Dt(e,t,n),Le=r,ut=o,Le!==null&&(ut?(e=Le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Le.removeChild(n.stateNode));break;case 18:Le!==null&&(ut?(e=Le,n=n.stateNode,e.nodeType===8?mi(e.parentNode,n):e.nodeType===1&&mi(e,n),Nr(e)):mi(Le,n.stateNode));break;case 4:r=Le,o=ut,Le=n.stateNode.containerInfo,ut=!0,Dt(e,t,n),Le=r,ut=o;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&wl(n,t,i),o=o.next}while(o!==r)}Dt(e,t,n);break;case 1:if(!De&&(Dn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ue(n,t,l)}Dt(e,t,n);break;case 21:Dt(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,Dt(e,t,n),De=r):Dt(e,t,n);break;default:Dt(e,t,n)}}function Gu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new yg),t.forEach(function(r){var o=Ng.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function lt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:Le=l.stateNode,ut=!1;break e;case 3:Le=l.stateNode.containerInfo,ut=!0;break e;case 4:Le=l.stateNode.containerInfo,ut=!0;break e}l=l.return}if(Le===null)throw Error(k(160));xf(a,i,o),Le=null,ut=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ue(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Sf(t,e),t=t.sibling}function Sf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(lt(t,e),mt(e),r&4){try{wr(3,e,e.return),Sa(3,e)}catch(y){ue(e,e.return,y)}try{wr(5,e,e.return)}catch(y){ue(e,e.return,y)}}break;case 1:lt(t,e),mt(e),r&512&&n!==null&&Dn(n,n.return);break;case 5:if(lt(t,e),mt(e),r&512&&n!==null&&Dn(n,n.return),e.flags&32){var o=e.stateNode;try{Er(o,"")}catch(y){ue(e,e.return,y)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Oc(o,a),Gi(l,i);var u=Gi(l,a);for(i=0;i<s.length;i+=2){var p=s[i],m=s[i+1];p==="style"?Gc(o,m):p==="dangerouslySetInnerHTML"?Qc(o,m):p==="children"?Er(o,m):Bl(o,p,m,u)}switch(l){case"input":Oi(o,a);break;case"textarea":Uc(o,a);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var S=a.value;S!=null?Tn(o,!!a.multiple,S,!1):g!==!!a.multiple&&(a.defaultValue!=null?Tn(o,!!a.multiple,a.defaultValue,!0):Tn(o,!!a.multiple,a.multiple?[]:"",!1))}o[Ir]=a}catch(y){ue(e,e.return,y)}}break;case 6:if(lt(t,e),mt(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(y){ue(e,e.return,y)}}break;case 3:if(lt(t,e),mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Nr(t.containerInfo)}catch(y){ue(e,e.return,y)}break;case 4:lt(t,e),mt(e);break;case 13:lt(t,e),mt(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(ks=de())),r&4&&Gu(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(De=(u=De)||p,lt(t,e),De=u):lt(t,e),mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(I=e,p=e.child;p!==null;){for(m=I=p;I!==null;){switch(g=I,S=g.child,g.tag){case 0:case 11:case 14:case 15:wr(4,g,g.return);break;case 1:Dn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(y){ue(r,n,y)}}break;case 5:Dn(g,g.return);break;case 22:if(g.memoizedState!==null){Hu(m);continue}}S!==null?(S.return=g,I=S):Hu(m)}p=p.sibling}e:for(p=null,m=e;;){if(m.tag===5){if(p===null){p=m;try{o=m.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=m.stateNode,s=m.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Wc("display",i))}catch(y){ue(e,e.return,y)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(y){ue(e,e.return,y)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===e)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===e)break e;for(;m.sibling===null;){if(m.return===null||m.return===e)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:lt(t,e),mt(e),r&4&&Gu(e);break;case 21:break;default:lt(t,e),mt(e)}}function mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(wf(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Er(o,""),r.flags&=-33);var a=Wu(e);kl(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,l=Wu(e);Sl(e,l,i);break;default:throw Error(k(161))}}catch(s){ue(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xg(e,t,n){I=e,kf(e)}function kf(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var o=I,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||mo;if(!i){var l=o.alternate,s=l!==null&&l.memoizedState!==null||De;l=mo;var u=De;if(mo=i,(De=s)&&!u)for(I=o;I!==null;)i=I,s=i.child,i.tag===22&&i.memoizedState!==null?Yu(o):s!==null?(s.return=i,I=s):Yu(o);for(;a!==null;)I=a,kf(a),a=a.sibling;I=o,mo=l,De=u}Vu(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,I=a):Vu(e)}}function Vu(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||Sa(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&bu(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bu(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&Nr(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}De||t.flags&512&&xl(t)}catch(g){ue(t,t.return,g)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Hu(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Yu(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sa(4,t)}catch(s){ue(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ue(t,o,s)}}var a=t.return;try{xl(t)}catch(s){ue(t,a,s)}break;case 5:var i=t.return;try{xl(t)}catch(s){ue(t,i,s)}}}catch(s){ue(t,t.return,s)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var Sg=Math.ceil,ta=bt.ReactCurrentDispatcher,xs=bt.ReactCurrentOwner,nt=bt.ReactCurrentBatchConfig,W=0,ye=null,fe=null,Pe=0,Ge=0,In=Zt(0),ge=0,jr=null,fn=0,ka=0,Ss=0,xr=null,Fe=null,ks=0,Vn=1/0,St=null,na=!1,Cl=null,Wt=null,go=!1,Mt=null,ra=0,Sr=0,El=null,qo=-1,Do=0;function Ae(){return W&6?de():qo!==-1?qo:qo=de()}function Gt(e){return e.mode&1?W&2&&Pe!==0?Pe&-Pe:og.transition!==null?(Do===0&&(Do=od()),Do):(e=X,e!==0||(e=window.event,e=e===void 0?16:dd(e.type)),e):1}function ft(e,t,n,r){if(50<Sr)throw Sr=0,El=null,Error(k(185));Qr(e,n,r),(!(W&2)||e!==ye)&&(e===ye&&(!(W&2)&&(ka|=n),ge===4&&At(e,Pe)),Qe(e,r),n===1&&W===0&&!(t.mode&1)&&(Vn=de()+500,ya&&Jt()))}function Qe(e,t){var n=e.callbackNode;om(e,t);var r=Fo(e,e===ye?Pe:0);if(r===0)n!==null&&ou(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ou(n),t===1)e.tag===0?rg(Ku.bind(null,e)):bd(Ku.bind(null,e)),Jm(function(){!(W&6)&&Jt()}),n=null;else{switch(ad(r)){case 1:n=Hl;break;case 4:n=nd;break;case 16:n=jo;break;case 536870912:n=rd;break;default:n=jo}n=bf(n,Cf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cf(e,t){if(qo=-1,Do=0,W&6)throw Error(k(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=Fo(e,e===ye?Pe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=oa(e,r);else{t=r;var o=W;W|=2;var a=Lf();(ye!==e||Pe!==t)&&(St=null,Vn=de()+500,an(e,t));do try{Eg();break}catch(l){Ef(e,l)}while(1);ls(),ta.current=a,W=o,fe!==null?t=0:(ye=null,Pe=0,t=ge)}if(t!==0){if(t===2&&(o=Xi(e),o!==0&&(r=o,t=Ll(e,o))),t===1)throw n=jr,an(e,0),At(e,r),Qe(e,de()),n;if(t===6)At(e,r);else{if(o=e.current.alternate,!(r&30)&&!kg(o)&&(t=oa(e,r),t===2&&(a=Xi(e),a!==0&&(r=a,t=Ll(e,a))),t===1))throw n=jr,an(e,0),At(e,r),Qe(e,de()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:tn(e,Fe,St);break;case 3:if(At(e,r),(r&130023424)===r&&(t=ks+500-de(),10<t)){if(Fo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ae(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=al(tn.bind(null,e,Fe,St),t);break}tn(e,Fe,St);break;case 4:if(At(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-dt(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Sg(r/1960))-r,10<r){e.timeoutHandle=al(tn.bind(null,e,Fe,St),r);break}tn(e,Fe,St);break;case 5:tn(e,Fe,St);break;default:throw Error(k(329))}}}return Qe(e,de()),e.callbackNode===n?Cf.bind(null,e):null}function Ll(e,t){var n=xr;return e.current.memoizedState.isDehydrated&&(an(e,t).flags|=256),e=oa(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&Pl(t)),e}function Pl(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function kg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!pt(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function At(e,t){for(t&=~Ss,t&=~ka,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function Ku(e){if(W&6)throw Error(k(327));Fn();var t=Fo(e,0);if(!(t&1))return Qe(e,de()),null;var n=oa(e,t);if(e.tag!==0&&n===2){var r=Xi(e);r!==0&&(t=r,n=Ll(e,r))}if(n===1)throw n=jr,an(e,0),At(e,t),Qe(e,de()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,tn(e,Fe,St),Qe(e,de()),null}function Cs(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(Vn=de()+500,ya&&Jt())}}function pn(e){Mt!==null&&Mt.tag===0&&!(W&6)&&Fn();var t=W;W|=1;var n=nt.transition,r=X;try{if(nt.transition=null,X=1,e)return e()}finally{X=r,nt.transition=n,W=t,!(W&6)&&Jt()}}function Es(){Ge=In.current,re(In)}function an(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zm(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(os(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Wo();break;case 3:Wn(),re(Ue),re(Ie),ps();break;case 5:fs(r);break;case 4:Wn();break;case 13:re(ae);break;case 19:re(ae);break;case 10:ss(r.type._context);break;case 22:case 23:Es()}n=n.return}if(ye=e,fe=e=Vt(e.current,null),Pe=Ge=t,ge=0,jr=null,Ss=ka=fn=0,Fe=xr=null,rn!==null){for(t=0;t<rn.length;t++)if(n=rn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}rn=null}return e}function Ef(e,t){do{var n=fe;try{if(ls(),No.current=ea,Jo){for(var r=ie.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Jo=!1}if(dn=0,ve=me=ie=null,yr=!1,Ar=0,xs.current=null,n===null||n.return===null){ge=1,jr=t,fe=null;break}e:{var a=e,i=n.return,l=n,s=t;if(t=Pe,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var S=$u(i);if(S!==null){S.flags&=-257,Mu(S,i,l,a,t),S.mode&1&&Au(a,u,t),t=S,s=u;var v=t.updateQueue;if(v===null){var y=new Set;y.add(s),t.updateQueue=y}else v.add(s);break e}else{if(!(t&1)){Au(a,u,t),Ls();break e}s=Error(k(426))}}else if(oe&&l.mode&1){var L=$u(i);if(L!==null){!(L.flags&65536)&&(L.flags|=256),Mu(L,i,l,a,t),as(Gn(s,l));break e}}a=s=Gn(s,l),ge!==4&&(ge=2),xr===null?xr=[a]:xr.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var d=lf(a,s,t);zu(a,d);break e;case 1:l=s;var c=a.type,f=a.stateNode;if(!(a.flags&128)&&(typeof c.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Wt===null||!Wt.has(f)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=sf(a,l,t);zu(a,w);break e}}a=a.return}while(a!==null)}_f(n)}catch(E){t=E,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function Lf(){var e=ta.current;return ta.current=ea,e===null?ea:e}function Ls(){(ge===0||ge===3||ge===2)&&(ge=4),ye===null||!(fn&268435455)&&!(ka&268435455)||At(ye,Pe)}function oa(e,t){var n=W;W|=2;var r=Lf();(ye!==e||Pe!==t)&&(St=null,an(e,t));do try{Cg();break}catch(o){Ef(e,o)}while(1);if(ls(),W=n,ta.current=r,fe!==null)throw Error(k(261));return ye=null,Pe=0,ge}function Cg(){for(;fe!==null;)Pf(fe)}function Eg(){for(;fe!==null&&!Yp();)Pf(fe)}function Pf(e){var t=zf(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?_f(e):fe=t,xs.current=null}function _f(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=vg(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,fe=null;return}}else if(n=hg(n,t,Ge),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);ge===0&&(ge=5)}function tn(e,t,n){var r=X,o=nt.transition;try{nt.transition=null,X=1,Lg(e,t,n,r)}finally{nt.transition=o,X=r}return null}function Lg(e,t,n,r){do Fn();while(Mt!==null);if(W&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(am(e,a),e===ye&&(fe=ye=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||go||(go=!0,bf(jo,function(){return Fn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=nt.transition,nt.transition=null;var i=X;X=1;var l=W;W|=4,xs.current=null,wg(e,n),Sf(n,e),Wm(rl),Oo=!!nl,rl=nl=null,e.current=n,xg(n),Kp(),W=l,X=i,nt.transition=a}else e.current=n;if(go&&(go=!1,Mt=e,ra=o),a=e.pendingLanes,a===0&&(Wt=null),Jp(n.stateNode),Qe(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(na)throw na=!1,e=Cl,Cl=null,e;return ra&1&&e.tag!==0&&Fn(),a=e.pendingLanes,a&1?e===El?Sr++:(Sr=0,El=e):Sr=0,Jt(),null}function Fn(){if(Mt!==null){var e=ad(ra),t=nt.transition,n=X;try{if(nt.transition=null,X=16>e?16:e,Mt===null)var r=!1;else{if(e=Mt,Mt=null,ra=0,W&6)throw Error(k(331));var o=W;for(W|=4,I=e.current;I!==null;){var a=I,i=a.child;if(I.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(I=u;I!==null;){var p=I;switch(p.tag){case 0:case 11:case 15:wr(8,p,a)}var m=p.child;if(m!==null)m.return=p,I=m;else for(;I!==null;){p=I;var g=p.sibling,S=p.return;if(yf(p),p===u){I=null;break}if(g!==null){g.return=S,I=g;break}I=S}}}var v=a.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var L=y.sibling;y.sibling=null,y=L}while(y!==null)}}I=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,I=i;else e:for(;I!==null;){if(a=I,a.flags&2048)switch(a.tag){case 0:case 11:case 15:wr(9,a,a.return)}var d=a.sibling;if(d!==null){d.return=a.return,I=d;break e}I=a.return}}var c=e.current;for(I=c;I!==null;){i=I;var f=i.child;if(i.subtreeFlags&2064&&f!==null)f.return=i,I=f;else e:for(i=c;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Sa(9,l)}}catch(E){ue(l,l.return,E)}if(l===i){I=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,I=w;break e}I=l.return}}if(W=o,Jt(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(pa,e)}catch{}r=!0}return r}finally{X=n,nt.transition=t}}return!1}function Xu(e,t,n){t=Gn(n,t),t=lf(e,t,1),e=Qt(e,t,1),t=Ae(),e!==null&&(Qr(e,1,t),Qe(e,t))}function ue(e,t,n){if(e.tag===3)Xu(e,e,n);else for(;t!==null;){if(t.tag===3){Xu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){e=Gn(n,e),e=sf(t,e,1),t=Qt(t,e,1),e=Ae(),t!==null&&(Qr(t,1,e),Qe(t,e));break}}t=t.return}}function Pg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(Pe&n)===n&&(ge===4||ge===3&&(Pe&130023424)===Pe&&500>de()-ks?an(e,0):Ss|=n),Qe(e,t)}function Nf(e,t){t===0&&(e.mode&1?(t=oo,oo<<=1,!(oo&130023424)&&(oo=4194304)):t=1);var n=Ae();e=Nt(e,t),e!==null&&(Qr(e,t,n),Qe(e,n))}function _g(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nf(e,n)}function Ng(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Nf(e,n)}var zf;zf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ue.current)Oe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Oe=!1,gg(e,t,n);Oe=!!(e.flags&131072)}else Oe=!1,oe&&t.flags&1048576&&qd(t,Ho,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bo(e,t),e=t.pendingProps;var o=Un(t,Ie.current);jn(t,n),o=gs(null,t,r,e,o,n);var a=hs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Be(r)?(a=!0,Go(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,cs(t),o.updater=wa,t.stateNode=o,o._reactInternals=t,fl(t,r,e,n),t=gl(null,t,r,!0,a,n)):(t.tag=0,oe&&a&&rs(t),Te(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=bg(r),e=st(r,e),o){case 0:t=ml(null,t,r,e,n);break e;case 1:t=Ou(null,t,r,e,n);break e;case 11:t=ju(null,t,r,e,n);break e;case 14:t=Fu(null,t,r,st(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),ml(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Ou(e,t,r,o,n);case 3:e:{if(ff(t),e===null)throw Error(k(387));r=t.pendingProps,a=t.memoizedState,o=a.element,Td(e,t),Xo(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Gn(Error(k(423)),t),t=Uu(e,t,r,n,o);break e}else if(r!==o){o=Gn(Error(k(424)),t),t=Uu(e,t,r,n,o);break e}else for(Ve=Bt(t.stateNode.containerInfo.firstChild),He=t,oe=!0,ct=null,n=jd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bn(),r===o){t=zt(e,t,n);break e}Te(e,t,r,n)}t=t.child}return t;case 5:return Fd(t),e===null&&ul(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,ol(r,o)?i=null:a!==null&&ol(r,a)&&(t.flags|=32),df(e,t),Te(e,t,i,n),t.child;case 6:return e===null&&ul(t),null;case 13:return pf(e,t,n);case 4:return ds(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Qn(t,null,r,n):Te(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),ju(e,t,r,o,n);case 7:return Te(e,t,t.pendingProps,n),t.child;case 8:return Te(e,t,t.pendingProps.children,n),t.child;case 12:return Te(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,te(Yo,r._currentValue),r._currentValue=i,a!==null)if(pt(a.value,i)){if(a.children===o.children&&!Ue.current){t=zt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){i=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=Lt(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?s.next=s:(s.next=p.next,p.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),cl(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(k(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),cl(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}Te(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,jn(t,n),o=rt(o),r=r(o),t.flags|=1,Te(e,t,r,n),t.child;case 14:return r=t.type,o=st(r,t.pendingProps),o=st(r.type,o),Fu(e,t,r,o,n);case 15:return uf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),bo(e,t),t.tag=1,Be(r)?(e=!0,Go(t)):e=!1,jn(t,n),$d(t,r,o),fl(t,r,o,n),gl(null,t,r,!0,e,n);case 19:return mf(e,t,n);case 22:return cf(e,t,n)}throw Error(k(156,t.tag))};function bf(e,t){return td(e,t)}function zg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new zg(e,t,n,r)}function Ps(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bg(e){if(typeof e=="function")return Ps(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wl)return 11;if(e===Gl)return 14}return 2}function Vt(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Io(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")Ps(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case Cn:return ln(n.children,o,a,t);case Ql:i=8,o|=8;break;case Ai:return e=tt(12,n,t,o|2),e.elementType=Ai,e.lanes=a,e;case $i:return e=tt(13,n,t,o),e.elementType=$i,e.lanes=a,e;case Mi:return e=tt(19,n,t,o),e.elementType=Mi,e.lanes=a,e;case Mc:return Ca(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ac:i=10;break e;case $c:i=9;break e;case Wl:i=11;break e;case Gl:i=14;break e;case It:i=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=tt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function ln(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function Ca(e,t,n,r){return e=tt(22,e,r,t),e.elementType=Mc,e.lanes=n,e.stateNode={isHidden:!1},e}function ki(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function Ci(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function qg(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ri(0),this.expirationTimes=ri(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ri(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function _s(e,t,n,r,o,a,i,l,s){return e=new qg(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=tt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},cs(a),e}function Dg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:kn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qf(e){if(!e)return Kt;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Be(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(Be(n))return zd(e,n,t)}return t}function Df(e,t,n,r,o,a,i,l,s){return e=_s(n,r,!0,e,o,a,i,l,s),e.context=qf(null),n=e.current,r=Ae(),o=Gt(n),a=Lt(r,o),a.callback=t??null,Qt(n,a,o),e.current.lanes=o,Qr(e,o,r),Qe(e,r),e}function Ea(e,t,n,r){var o=t.current,a=Ae(),i=Gt(o);return n=qf(n),t.context===null?t.context=n:t.pendingContext=n,t=Lt(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Qt(o,t,i),e!==null&&(ft(e,o,i,a),_o(e,o,i)),i}function aa(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ns(e,t){Zu(e,t),(e=e.alternate)&&Zu(e,t)}function Ig(){return null}var If=typeof reportError=="function"?reportError:function(e){console.error(e)};function zs(e){this._internalRoot=e}La.prototype.render=zs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));Ea(e,t,null,null)};La.prototype.unmount=zs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;pn(function(){Ea(null,e,null,null)}),t[_t]=null}};function La(e){this._internalRoot=e}La.prototype.unstable_scheduleHydration=function(e){if(e){var t=sd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Tt.length&&t!==0&&t<Tt[n].priority;n++);Tt.splice(n,0,e),n===0&&cd(e)}};function bs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ju(){}function Rg(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=aa(i);a.call(u)}}var i=Df(t,r,e,0,null,!1,!1,"",Ju);return e._reactRootContainer=i,e[_t]=i.current,qr(e.nodeType===8?e.parentNode:e),pn(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=aa(s);l.call(u)}}var s=_s(e,0,!1,null,null,!1,!1,"",Ju);return e._reactRootContainer=s,e[_t]=s.current,qr(e.nodeType===8?e.parentNode:e),pn(function(){Ea(t,s,n,r)}),s}function _a(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var l=o;o=function(){var s=aa(i);l.call(s)}}Ea(t,i,e,o)}else i=Rg(n,t,e,o,r);return aa(i)}id=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dr(t.pendingLanes);n!==0&&(Yl(t,n|1),Qe(t,de()),!(W&6)&&(Vn=de()+500,Jt()))}break;case 13:pn(function(){var r=Nt(e,1);if(r!==null){var o=Ae();ft(r,e,1,o)}}),Ns(e,1)}};Kl=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Ae();ft(t,e,134217728,n)}Ns(e,134217728)}};ld=function(e){if(e.tag===13){var t=Gt(e),n=Nt(e,t);if(n!==null){var r=Ae();ft(n,e,t,r)}Ns(e,t)}};sd=function(){return X};ud=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};Hi=function(e,t,n){switch(t){case"input":if(Oi(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=va(r);if(!o)throw Error(k(90));Fc(r),Oi(r,o)}}}break;case"textarea":Uc(e,n);break;case"select":t=n.value,t!=null&&Tn(e,!!n.multiple,t,!1)}};Yc=Cs;Kc=pn;var Tg={usingClientEntryPoint:!1,Events:[Gr,_n,va,Vc,Hc,Cs]},sr={findFiberByHostInstance:nn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ag={bundleType:sr.bundleType,version:sr.version,rendererPackageName:sr.rendererPackageName,rendererConfig:sr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jc(e),e===null?null:e.stateNode},findFiberByHostInstance:sr.findFiberByHostInstance||Ig,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{pa=ho.inject(Ag),yt=ho}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tg;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bs(t))throw Error(k(200));return Dg(e,t,null,n)};Ke.createRoot=function(e,t){if(!bs(e))throw Error(k(299));var n=!1,r="",o=If;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=_s(e,1,!1,null,null,n,!1,r,o),e[_t]=t.current,qr(e.nodeType===8?e.parentNode:e),new zs(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Jc(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return pn(e)};Ke.hydrate=function(e,t,n){if(!Pa(t))throw Error(k(200));return _a(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!bs(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=If;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=Df(t,null,e,1,n??null,o,!1,a,i),e[_t]=t.current,qr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new La(t)};Ke.render=function(e,t,n){if(!Pa(t))throw Error(k(200));return _a(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!Pa(e))throw Error(k(40));return e._reactRootContainer?(pn(function(){_a(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};Ke.unstable_batchedUpdates=Cs;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pa(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return _a(e,t,n,!1,r)};Ke.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ke})(Ip);var ec=Ii;Di.createRoot=ec.createRoot,Di.hydrateRoot=ec.hydrateRoot;/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fr(){return Fr=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fr.apply(this,arguments)}var jt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(jt||(jt={}));const tc="popstate";function $g(e){e===void 0&&(e={});function t(r,o){let{pathname:a,search:i,hash:l}=r.location;return _l("",{pathname:a,search:i,hash:l},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:Rf(o)}return jg(t,n,null,e)}function we(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Mg(){return Math.random().toString(36).substr(2,8)}function nc(e,t){return{usr:e.state,key:e.key,idx:t}}function _l(e,t,n,r){return n===void 0&&(n=null),Fr({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Zn(t):t,{state:n,key:t&&t.key||r||Mg()})}function Rf(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Zn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function jg(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,i=o.history,l=jt.Pop,s=null,u=p();u==null&&(u=0,i.replaceState(Fr({},i.state,{idx:u}),""));function p(){return(i.state||{idx:null}).idx}function m(){l=jt.Pop;let L=p(),d=L==null?null:L-u;u=L,s&&s({action:l,location:y.location,delta:d})}function g(L,d){l=jt.Push;let c=_l(y.location,L,d);n&&n(c,L),u=p()+1;let f=nc(c,u),w=y.createHref(c);try{i.pushState(f,"",w)}catch{o.location.assign(w)}a&&s&&s({action:l,location:y.location,delta:1})}function S(L,d){l=jt.Replace;let c=_l(y.location,L,d);n&&n(c,L),u=p();let f=nc(c,u),w=y.createHref(c);i.replaceState(f,"",w),a&&s&&s({action:l,location:y.location,delta:0})}function v(L){let d=o.location.origin!=="null"?o.location.origin:o.location.href,c=typeof L=="string"?L:Rf(L);return we(d,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,d)}let y={get action(){return l},get location(){return e(o,i)},listen(L){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(tc,m),s=L,()=>{o.removeEventListener(tc,m),s=null}},createHref(L){return t(o,L)},createURL:v,encodeLocation(L){let d=v(L);return{pathname:d.pathname,search:d.search,hash:d.hash}},push:g,replace:S,go(L){return i.go(L)}};return y}var rc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(rc||(rc={}));function Fg(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Zn(t):t,o=$f(r.pathname||"/",n);if(o==null)return null;let a=Tf(e);Og(a);let i=null;for(let l=0;i==null&&l<a.length;++l)i=Kg(a[l],Jg(o));return i}function Tf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(a,i,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:i,route:a};s.relativePath.startsWith("/")&&(we(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=sn([r,s.relativePath]),p=n.concat(s);a.children&&a.children.length>0&&(we(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Tf(a.children,t,p,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Hg(u,a.index),routesMeta:p})};return e.forEach((a,i)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))o(a,i);else for(let s of Af(a.path))o(a,i,s)}),t}function Af(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let i=Af(r.join("/")),l=[];return l.push(...i.map(s=>s===""?a:[a,s].join("/"))),o&&l.push(...i),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Og(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Yg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Ug=/^:\w+$/,Bg=3,Qg=2,Wg=1,Gg=10,Vg=-2,oc=e=>e==="*";function Hg(e,t){let n=e.split("/"),r=n.length;return n.some(oc)&&(r+=Vg),t&&(r+=Qg),n.filter(o=>!oc(o)).reduce((o,a)=>o+(Ug.test(a)?Bg:a===""?Wg:Gg),r)}function Yg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Kg(e,t){let{routesMeta:n}=e,r={},o="/",a=[];for(let i=0;i<n.length;++i){let l=n[i],s=i===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",p=Xg({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!p)return null;Object.assign(r,p.params);let m=l.route;a.push({params:r,pathname:sn([o,p.pathname]),pathnameBase:ah(sn([o,p.pathnameBase])),route:m}),p.pathnameBase!=="/"&&(o=sn([o,p.pathnameBase]))}return a}function Xg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Zg(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,p,m)=>{if(p==="*"){let g=l[m]||"";i=a.slice(0,a.length-g.length).replace(/(.)\/+$/,"$1")}return u[p]=eh(l[m]||"",p),u},{}),pathname:a,pathnameBase:i,pattern:e}}function Zg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),qs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(i,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Jg(e){try{return decodeURI(e)}catch(t){return qs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function eh(e,t){try{return decodeURIComponent(e)}catch(n){return qs(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function $f(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function qs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function th(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Zn(e):e;return{pathname:n?n.startsWith("/")?n:nh(n,t):t,search:ih(r),hash:lh(o)}}function nh(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Ei(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function rh(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function oh(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Zn(e):(o=Fr({},e),we(!o.pathname||!o.pathname.includes("?"),Ei("?","pathname","search",o)),we(!o.pathname||!o.pathname.includes("#"),Ei("#","pathname","hash",o)),we(!o.search||!o.search.includes("#"),Ei("#","search","hash",o)));let a=e===""||o.pathname==="",i=a?"/":o.pathname,l;if(r||i==null)l=n;else{let m=t.length-1;if(i.startsWith("..")){let g=i.split("/");for(;g[0]==="..";)g.shift(),m-=1;o.pathname=g.join("/")}l=m>=0?t[m]:"/"}let s=th(o,l),u=i&&i!=="/"&&i.endsWith("/"),p=(a||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||p)&&(s.pathname+="/"),s}const sn=e=>e.join("/").replace(/\/\/+/g,"/"),ah=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ih=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,lh=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function sh(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const uh=["post","put","patch","delete"];[...uh];/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nl(){return Nl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Nl.apply(this,arguments)}function ch(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const dh=typeof Object.is=="function"?Object.is:ch,{useState:fh,useEffect:ph,useLayoutEffect:mh,useDebugValue:gh}=qi;function hh(e,t,n){const r=t(),[{inst:o},a]=fh({inst:{value:r,getSnapshot:t}});return mh(()=>{o.value=r,o.getSnapshot=t,Li(o)&&a({inst:o})},[e,r,t]),ph(()=>(Li(o)&&a({inst:o}),e(()=>{Li(o)&&a({inst:o})})),[e]),gh(r),r}function Li(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!dh(n,r)}catch{return!0}}function vh(e,t,n){return t()}const yh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wh=!yh,xh=wh?vh:hh;"useSyncExternalStore"in qi&&(e=>e.useSyncExternalStore)(qi);const Mf=C.createContext(null),jf=C.createContext(null),Ds=C.createContext(null),Na=C.createContext(null),Hr=C.createContext({outlet:null,matches:[]}),Ff=C.createContext(null);function za(){return C.useContext(Na)!=null}function Of(){return za()||we(!1),C.useContext(Na).location}function Yr(){za()||we(!1);let{basename:e,navigator:t}=C.useContext(Ds),{matches:n}=C.useContext(Hr),{pathname:r}=Of(),o=JSON.stringify(rh(n).map(l=>l.pathnameBase)),a=C.useRef(!1);return C.useEffect(()=>{a.current=!0}),C.useCallback(function(l,s){if(s===void 0&&(s={}),!a.current)return;if(typeof l=="number"){t.go(l);return}let u=oh(l,JSON.parse(o),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:sn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state,s)},[e,t,o,r])}function Sh(e,t){za()||we(!1);let{navigator:n}=C.useContext(Ds),r=C.useContext(jf),{matches:o}=C.useContext(Hr),a=o[o.length-1],i=a?a.params:{};a&&a.pathname;let l=a?a.pathnameBase:"/";a&&a.route;let s=Of(),u;if(t){var p;let y=typeof t=="string"?Zn(t):t;l==="/"||(p=y.pathname)!=null&&p.startsWith(l)||we(!1),u=y}else u=s;let m=u.pathname||"/",g=l==="/"?m:m.slice(l.length)||"/",S=Fg(e,{pathname:g}),v=Lh(S&&S.map(y=>Object.assign({},y,{params:Object.assign({},i,y.params),pathname:sn([l,n.encodeLocation?n.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?l:sn([l,n.encodeLocation?n.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),o,r||void 0);return t&&v?C.createElement(Na.Provider,{value:{location:Nl({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:jt.Pop}},v):v}function kh(){let e=zh(),t=sh(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:o},n):null,a)}class Ch extends C.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(Hr.Provider,{value:this.props.routeContext},C.createElement(Ff.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Eh(e){let{routeContext:t,match:n,children:r}=e,o=C.useContext(Mf);return o&&o.static&&o.staticContext&&n.route.errorElement&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Hr.Provider,{value:t},r)}function Lh(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,o=n==null?void 0:n.errors;if(o!=null){let a=r.findIndex(i=>i.route.id&&(o==null?void 0:o[i.route.id]));a>=0||we(!1),r=r.slice(0,Math.min(r.length,a+1))}return r.reduceRight((a,i,l)=>{let s=i.route.id?o==null?void 0:o[i.route.id]:null,u=n?i.route.errorElement||C.createElement(kh,null):null,p=t.concat(r.slice(0,l+1)),m=()=>C.createElement(Eh,{match:i,routeContext:{outlet:a,matches:p}},s?u:i.route.element!==void 0?i.route.element:a);return n&&(i.route.errorElement||l===0)?C.createElement(Ch,{location:n.location,component:u,error:s,children:m(),routeContext:{outlet:null,matches:p}}):m()},null)}var ac;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(ac||(ac={}));var ia;(function(e){e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(ia||(ia={}));function Ph(e){let t=C.useContext(jf);return t||we(!1),t}function _h(e){let t=C.useContext(Hr);return t||we(!1),t}function Nh(e){let t=_h(),n=t.matches[t.matches.length-1];return n.route.id||we(!1),n.route.id}function zh(){var e;let t=C.useContext(Ff),n=Ph(ia.UseRouteError),r=Nh(ia.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Sn(e){we(!1)}function bh(e){let{basename:t="/",children:n=null,location:r,navigationType:o=jt.Pop,navigator:a,static:i=!1}=e;za()&&we(!1);let l=t.replace(/^\/*/,"/"),s=C.useMemo(()=>({basename:l,navigator:a,static:i}),[l,a,i]);typeof r=="string"&&(r=Zn(r));let{pathname:u="/",search:p="",hash:m="",state:g=null,key:S="default"}=r,v=C.useMemo(()=>{let y=$f(u,l);return y==null?null:{pathname:y,search:p,hash:m,state:g,key:S}},[l,u,p,m,g,S]);return v==null?null:C.createElement(Ds.Provider,{value:s},C.createElement(Na.Provider,{children:n,value:{location:v,navigationType:o}}))}function qh(e){let{children:t,location:n}=e,r=C.useContext(Mf),o=r&&!t?r.router.routes:zl(t);return Sh(o,n)}var ic;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})(ic||(ic={}));new Promise(()=>{});function zl(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,o)=>{if(!C.isValidElement(r))return;if(r.type===C.Fragment){n.push.apply(n,zl(r.props.children,t));return}r.type!==Sn&&we(!1),!r.props.index||!r.props.children||we(!1);let a=[...t,o],i={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(i.children=zl(r.props.children,a)),n.push(i)}),n}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Dh(e){let{basename:t,children:n,window:r}=e,o=C.useRef();o.current==null&&(o.current=$g({window:r,v5Compat:!0}));let a=o.current,[i,l]=C.useState({action:a.action,location:a.location});return C.useLayoutEffect(()=>a.listen(l),[a]),C.createElement(bh,{basename:t,children:n,location:i.location,navigationType:i.action,navigator:a})}var lc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(lc||(lc={}));var sc;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(sc||(sc={}));var la={},Ih={get exports(){return la},set exports(e){la=e}},Z={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Is=Symbol.for("react.element"),Rs=Symbol.for("react.portal"),ba=Symbol.for("react.fragment"),qa=Symbol.for("react.strict_mode"),Da=Symbol.for("react.profiler"),Ia=Symbol.for("react.provider"),Ra=Symbol.for("react.context"),Rh=Symbol.for("react.server_context"),Ta=Symbol.for("react.forward_ref"),Aa=Symbol.for("react.suspense"),$a=Symbol.for("react.suspense_list"),Ma=Symbol.for("react.memo"),ja=Symbol.for("react.lazy"),Th=Symbol.for("react.offscreen"),Uf;Uf=Symbol.for("react.module.reference");function at(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Is:switch(e=e.type,e){case ba:case Da:case qa:case Aa:case $a:return e;default:switch(e=e&&e.$$typeof,e){case Rh:case Ra:case Ta:case ja:case Ma:case Ia:return e;default:return t}}case Rs:return t}}}Z.ContextConsumer=Ra;Z.ContextProvider=Ia;Z.Element=Is;Z.ForwardRef=Ta;Z.Fragment=ba;Z.Lazy=ja;Z.Memo=Ma;Z.Portal=Rs;Z.Profiler=Da;Z.StrictMode=qa;Z.Suspense=Aa;Z.SuspenseList=$a;Z.isAsyncMode=function(){return!1};Z.isConcurrentMode=function(){return!1};Z.isContextConsumer=function(e){return at(e)===Ra};Z.isContextProvider=function(e){return at(e)===Ia};Z.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Is};Z.isForwardRef=function(e){return at(e)===Ta};Z.isFragment=function(e){return at(e)===ba};Z.isLazy=function(e){return at(e)===ja};Z.isMemo=function(e){return at(e)===Ma};Z.isPortal=function(e){return at(e)===Rs};Z.isProfiler=function(e){return at(e)===Da};Z.isStrictMode=function(e){return at(e)===qa};Z.isSuspense=function(e){return at(e)===Aa};Z.isSuspenseList=function(e){return at(e)===$a};Z.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ba||e===Da||e===qa||e===Aa||e===$a||e===Th||typeof e=="object"&&e!==null&&(e.$$typeof===ja||e.$$typeof===Ma||e.$$typeof===Ia||e.$$typeof===Ra||e.$$typeof===Ta||e.$$typeof===Uf||e.getModuleId!==void 0)};Z.typeOf=at;(function(e){e.exports=Z})(Ih);function Ah(e){function t(N,z,D,M,h){for(var Q=0,_=0,se=0,H=0,K,O,ke=0,je=0,V,ze=V=K=0,Y=0,Ce=0,Jn=0,Ee=0,Zr=D.length,er=Zr-1,it,F="",ce="",Ka="",Xa="",qt;Y<Zr;){if(O=D.charCodeAt(Y),Y===er&&_+H+se+Q!==0&&(_!==0&&(O=_===47?10:47),H=se=Q=0,Zr++,er++),_+H+se+Q===0){if(Y===er&&(0<Ce&&(F=F.replace(g,"")),0<F.trim().length)){switch(O){case 32:case 9:case 59:case 13:case 10:break;default:F+=D.charAt(Y)}O=59}switch(O){case 123:for(F=F.trim(),K=F.charCodeAt(0),V=1,Ee=++Y;Y<Zr;){switch(O=D.charCodeAt(Y)){case 123:V++;break;case 125:V--;break;case 47:switch(O=D.charCodeAt(Y+1)){case 42:case 47:e:{for(ze=Y+1;ze<er;++ze)switch(D.charCodeAt(ze)){case 47:if(O===42&&D.charCodeAt(ze-1)===42&&Y+2!==ze){Y=ze+1;break e}break;case 10:if(O===47){Y=ze+1;break e}}Y=ze}}break;case 91:O++;case 40:O++;case 34:case 39:for(;Y++<er&&D.charCodeAt(Y)!==O;);}if(V===0)break;Y++}switch(V=D.substring(Ee,Y),K===0&&(K=(F=F.replace(m,"").trim()).charCodeAt(0)),K){case 64:switch(0<Ce&&(F=F.replace(g,"")),O=F.charCodeAt(1),O){case 100:case 109:case 115:case 45:Ce=z;break;default:Ce=xt}if(V=t(z,Ce,V,O,h+1),Ee=V.length,0<P&&(Ce=n(xt,F,Jn),qt=l(3,V,Ce,z,Se,pe,Ee,O,h,M),F=Ce.join(""),qt!==void 0&&(Ee=(V=qt.trim()).length)===0&&(O=0,V="")),0<Ee)switch(O){case 115:F=F.replace(b,i);case 100:case 109:case 45:V=F+"{"+V+"}";break;case 107:F=F.replace(c,"$1 $2"),V=F+"{"+V+"}",V=Ne===1||Ne===2&&a("@"+V,3)?"@-webkit-"+V+"@"+V:"@"+V;break;default:V=F+V,M===112&&(V=(ce+=V,""))}else V="";break;default:V=t(z,n(z,F,Jn),V,M,h+1)}Ka+=V,V=Jn=Ce=ze=K=0,F="",O=D.charCodeAt(++Y);break;case 125:case 59:if(F=(0<Ce?F.replace(g,""):F).trim(),1<(Ee=F.length))switch(ze===0&&(K=F.charCodeAt(0),K===45||96<K&&123>K)&&(Ee=(F=F.replace(" ",":")).length),0<P&&(qt=l(1,F,z,N,Se,pe,ce.length,M,h,M))!==void 0&&(Ee=(F=qt.trim()).length)===0&&(F="\0\0"),K=F.charCodeAt(0),O=F.charCodeAt(1),K){case 0:break;case 64:if(O===105||O===99){Xa+=F+D.charAt(Y);break}default:F.charCodeAt(Ee-1)!==58&&(ce+=o(F,K,O,F.charCodeAt(2)))}Jn=Ce=ze=K=0,F="",O=D.charCodeAt(++Y)}}switch(O){case 13:case 10:_===47?_=0:1+K===0&&M!==107&&0<F.length&&(Ce=1,F+="\0"),0<P*$&&l(0,F,z,N,Se,pe,ce.length,M,h,M),pe=1,Se++;break;case 59:case 125:if(_+H+se+Q===0){pe++;break}default:switch(pe++,it=D.charAt(Y),O){case 9:case 32:if(H+Q+_===0)switch(ke){case 44:case 58:case 9:case 32:it="";break;default:O!==32&&(it=" ")}break;case 0:it="\\0";break;case 12:it="\\f";break;case 11:it="\\v";break;case 38:H+_+Q===0&&(Ce=Jn=1,it="\f"+it);break;case 108:if(H+_+Q+We===0&&0<ze)switch(Y-ze){case 2:ke===112&&D.charCodeAt(Y-3)===58&&(We=ke);case 8:je===111&&(We=je)}break;case 58:H+_+Q===0&&(ze=Y);break;case 44:_+se+H+Q===0&&(Ce=1,it+="\r");break;case 34:case 39:_===0&&(H=H===O?0:H===0?O:H);break;case 91:H+_+se===0&&Q++;break;case 93:H+_+se===0&&Q--;break;case 41:H+_+Q===0&&se--;break;case 40:if(H+_+Q===0){if(K===0)switch(2*ke+3*je){case 533:break;default:K=1}se++}break;case 64:_+se+H+Q+ze+V===0&&(V=1);break;case 42:case 47:if(!(0<H+Q+se))switch(_){case 0:switch(2*O+3*D.charCodeAt(Y+1)){case 235:_=47;break;case 220:Ee=Y,_=42}break;case 42:O===47&&ke===42&&Ee+2!==Y&&(D.charCodeAt(Ee+2)===33&&(ce+=D.substring(Ee,Y+1)),it="",_=0)}}_===0&&(F+=it)}je=ke,ke=O,Y++}if(Ee=ce.length,0<Ee){if(Ce=z,0<P&&(qt=l(2,ce,Ce,N,Se,pe,Ee,M,h,M),qt!==void 0&&(ce=qt).length===0))return Xa+ce+Ka;if(ce=Ce.join(",")+"{"+ce+"}",Ne*We!==0){switch(Ne!==2||a(ce,2)||(We=0),We){case 111:ce=ce.replace(w,":-moz-$1")+ce;break;case 112:ce=ce.replace(f,"::-webkit-input-$1")+ce.replace(f,"::-moz-$1")+ce.replace(f,":-ms-input-$1")+ce}We=0}}return Xa+ce+Ka}function n(N,z,D){var M=z.trim().split(L);z=M;var h=M.length,Q=N.length;switch(Q){case 0:case 1:var _=0;for(N=Q===0?"":N[0]+" ";_<h;++_)z[_]=r(N,z[_],D).trim();break;default:var se=_=0;for(z=[];_<h;++_)for(var H=0;H<Q;++H)z[se++]=r(N[H]+" ",M[_],D).trim()}return z}function r(N,z,D){var M=z.charCodeAt(0);switch(33>M&&(M=(z=z.trim()).charCodeAt(0)),M){case 38:return z.replace(d,"$1"+N.trim());case 58:return N.trim()+z.replace(d,"$1"+N.trim());default:if(0<1*D&&0<z.indexOf("\f"))return z.replace(d,(N.charCodeAt(0)===58?"":"$1")+N.trim())}return N+z}function o(N,z,D,M){var h=N+";",Q=2*z+3*D+4*M;if(Q===944){N=h.indexOf(":",9)+1;var _=h.substring(N,h.length-1).trim();return _=h.substring(0,N).trim()+_+";",Ne===1||Ne===2&&a(_,1)?"-webkit-"+_+_:_}if(Ne===0||Ne===2&&!a(h,1))return h;switch(Q){case 1015:return h.charCodeAt(10)===97?"-webkit-"+h+h:h;case 951:return h.charCodeAt(3)===116?"-webkit-"+h+h:h;case 963:return h.charCodeAt(5)===110?"-webkit-"+h+h:h;case 1009:if(h.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+h+h;case 978:return"-webkit-"+h+"-moz-"+h+h;case 1019:case 983:return"-webkit-"+h+"-moz-"+h+"-ms-"+h+h;case 883:if(h.charCodeAt(8)===45)return"-webkit-"+h+h;if(0<h.indexOf("image-set(",11))return h.replace(he,"$1-webkit-$2")+h;break;case 932:if(h.charCodeAt(4)===45)switch(h.charCodeAt(5)){case 103:return"-webkit-box-"+h.replace("-grow","")+"-webkit-"+h+"-ms-"+h.replace("grow","positive")+h;case 115:return"-webkit-"+h+"-ms-"+h.replace("shrink","negative")+h;case 98:return"-webkit-"+h+"-ms-"+h.replace("basis","preferred-size")+h}return"-webkit-"+h+"-ms-"+h+h;case 964:return"-webkit-"+h+"-ms-flex-"+h+h;case 1023:if(h.charCodeAt(8)!==99)break;return _=h.substring(h.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+_+"-webkit-"+h+"-ms-flex-pack"+_+h;case 1005:return v.test(h)?h.replace(S,":-webkit-")+h.replace(S,":-moz-")+h:h;case 1e3:switch(_=h.substring(13).trim(),z=_.indexOf("-")+1,_.charCodeAt(0)+_.charCodeAt(z)){case 226:_=h.replace(E,"tb");break;case 232:_=h.replace(E,"tb-rl");break;case 220:_=h.replace(E,"lr");break;default:return h}return"-webkit-"+h+"-ms-"+_+h;case 1017:if(h.indexOf("sticky",9)===-1)break;case 975:switch(z=(h=N).length-10,_=(h.charCodeAt(z)===33?h.substring(0,z):h).substring(N.indexOf(":",7)+1).trim(),Q=_.charCodeAt(0)+(_.charCodeAt(7)|0)){case 203:if(111>_.charCodeAt(8))break;case 115:h=h.replace(_,"-webkit-"+_)+";"+h;break;case 207:case 102:h=h.replace(_,"-webkit-"+(102<Q?"inline-":"")+"box")+";"+h.replace(_,"-webkit-"+_)+";"+h.replace(_,"-ms-"+_+"box")+";"+h}return h+";";case 938:if(h.charCodeAt(5)===45)switch(h.charCodeAt(6)){case 105:return _=h.replace("-items",""),"-webkit-"+h+"-webkit-box-"+_+"-ms-flex-"+_+h;case 115:return"-webkit-"+h+"-ms-flex-item-"+h.replace(q,"")+h;default:return"-webkit-"+h+"-ms-flex-line-pack"+h.replace("align-content","").replace(q,"")+h}break;case 973:case 989:if(h.charCodeAt(3)!==45||h.charCodeAt(4)===122)break;case 931:case 953:if(j.test(N)===!0)return(_=N.substring(N.indexOf(":")+1)).charCodeAt(0)===115?o(N.replace("stretch","fill-available"),z,D,M).replace(":fill-available",":stretch"):h.replace(_,"-webkit-"+_)+h.replace(_,"-moz-"+_.replace("fill-",""))+h;break;case 962:if(h="-webkit-"+h+(h.charCodeAt(5)===102?"-ms-"+h:"")+h,D+M===211&&h.charCodeAt(13)===105&&0<h.indexOf("transform",10))return h.substring(0,h.indexOf(";",27)+1).replace(y,"$1-webkit-$2")+h}return h}function a(N,z){var D=N.indexOf(z===1?":":"{"),M=N.substring(0,z!==3?D:10);return D=N.substring(D+1,N.length-1),A(z!==2?M:M.replace(G,"$1"),D,z)}function i(N,z){var D=o(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return D!==z+";"?D.replace(R," or ($1)").substring(4):"("+z+")"}function l(N,z,D,M,h,Q,_,se,H,K){for(var O=0,ke=z,je;O<P;++O)switch(je=Re[O].call(p,N,ke,D,M,h,Q,_,se,H,K)){case void 0:case!1:case!0:case null:break;default:ke=je}if(ke!==z)return ke}function s(N){switch(N){case void 0:case null:P=Re.length=0;break;default:if(typeof N=="function")Re[P++]=N;else if(typeof N=="object")for(var z=0,D=N.length;z<D;++z)s(N[z]);else $=!!N|0}return s}function u(N){return N=N.prefix,N!==void 0&&(A=null,N?typeof N!="function"?Ne=1:(Ne=2,A=N):Ne=0),u}function p(N,z){var D=N;if(33>D.charCodeAt(0)&&(D=D.trim()),ee=D,D=[ee],0<P){var M=l(-1,z,D,D,Se,pe,0,0,0,0);M!==void 0&&typeof M=="string"&&(z=M)}var h=t(xt,D,z,0,0);return 0<P&&(M=l(-2,h,D,D,Se,pe,h.length,0,0,0),M!==void 0&&(h=M)),ee="",We=0,pe=Se=1,h}var m=/^\0+/g,g=/[\0\r\f]/g,S=/: */g,v=/zoo|gra/,y=/([,: ])(transform)/g,L=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,f=/::(place)/g,w=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,b=/\(\s*(.*)\s*\)/g,R=/([\s\S]*?);/g,q=/-self|flex-/g,G=/[^]*?(:[rp][el]a[\w-]+)[^]*/,j=/stretch|:\s*\w+\-(?:conte|avail)/,he=/([^-])(image-set\()/,pe=1,Se=1,We=0,Ne=1,xt=[],Re=[],P=0,A=null,$=0,ee="";return p.use=s,p.set=u,e!==void 0&&u(e),p}var $h={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Mh(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var jh=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,uc=Mh(function(e){return jh.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),bl={},Fh={get exports(){return bl},set exports(e){bl=e}},J={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=typeof Symbol=="function"&&Symbol.for,Ts=xe?Symbol.for("react.element"):60103,As=xe?Symbol.for("react.portal"):60106,Fa=xe?Symbol.for("react.fragment"):60107,Oa=xe?Symbol.for("react.strict_mode"):60108,Ua=xe?Symbol.for("react.profiler"):60114,Ba=xe?Symbol.for("react.provider"):60109,Qa=xe?Symbol.for("react.context"):60110,$s=xe?Symbol.for("react.async_mode"):60111,Wa=xe?Symbol.for("react.concurrent_mode"):60111,Ga=xe?Symbol.for("react.forward_ref"):60112,Va=xe?Symbol.for("react.suspense"):60113,Oh=xe?Symbol.for("react.suspense_list"):60120,Ha=xe?Symbol.for("react.memo"):60115,Ya=xe?Symbol.for("react.lazy"):60116,Uh=xe?Symbol.for("react.block"):60121,Bh=xe?Symbol.for("react.fundamental"):60117,Qh=xe?Symbol.for("react.responder"):60118,Wh=xe?Symbol.for("react.scope"):60119;function Ze(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ts:switch(e=e.type,e){case $s:case Wa:case Fa:case Ua:case Oa:case Va:return e;default:switch(e=e&&e.$$typeof,e){case Qa:case Ga:case Ya:case Ha:case Ba:return e;default:return t}}case As:return t}}}function Bf(e){return Ze(e)===Wa}J.AsyncMode=$s;J.ConcurrentMode=Wa;J.ContextConsumer=Qa;J.ContextProvider=Ba;J.Element=Ts;J.ForwardRef=Ga;J.Fragment=Fa;J.Lazy=Ya;J.Memo=Ha;J.Portal=As;J.Profiler=Ua;J.StrictMode=Oa;J.Suspense=Va;J.isAsyncMode=function(e){return Bf(e)||Ze(e)===$s};J.isConcurrentMode=Bf;J.isContextConsumer=function(e){return Ze(e)===Qa};J.isContextProvider=function(e){return Ze(e)===Ba};J.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ts};J.isForwardRef=function(e){return Ze(e)===Ga};J.isFragment=function(e){return Ze(e)===Fa};J.isLazy=function(e){return Ze(e)===Ya};J.isMemo=function(e){return Ze(e)===Ha};J.isPortal=function(e){return Ze(e)===As};J.isProfiler=function(e){return Ze(e)===Ua};J.isStrictMode=function(e){return Ze(e)===Oa};J.isSuspense=function(e){return Ze(e)===Va};J.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Fa||e===Wa||e===Ua||e===Oa||e===Va||e===Oh||typeof e=="object"&&e!==null&&(e.$$typeof===Ya||e.$$typeof===Ha||e.$$typeof===Ba||e.$$typeof===Qa||e.$$typeof===Ga||e.$$typeof===Bh||e.$$typeof===Qh||e.$$typeof===Wh||e.$$typeof===Uh)};J.typeOf=Ze;(function(e){e.exports=J})(Fh);var Ms=bl,Gh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Vh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Hh={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Qf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},js={};js[Ms.ForwardRef]=Hh;js[Ms.Memo]=Qf;function cc(e){return Ms.isMemo(e)?Qf:js[e.$$typeof]||Gh}var Yh=Object.defineProperty,Kh=Object.getOwnPropertyNames,dc=Object.getOwnPropertySymbols,Xh=Object.getOwnPropertyDescriptor,Zh=Object.getPrototypeOf,fc=Object.prototype;function Wf(e,t,n){if(typeof t!="string"){if(fc){var r=Zh(t);r&&r!==fc&&Wf(e,r,n)}var o=Kh(t);dc&&(o=o.concat(dc(t)));for(var a=cc(e),i=cc(t),l=0;l<o.length;++l){var s=o[l];if(!Vh[s]&&!(n&&n[s])&&!(i&&i[s])&&!(a&&a[s])){var u=Xh(t,s);try{Yh(e,s,u)}catch{}}}}return e}var Jh=Wf;function vt(){return(vt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var pc=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},ql=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!la.typeOf(e)},sa=Object.freeze([]),Ht=Object.freeze({});function Or(e){return typeof e=="function"}function mc(e){return e.displayName||e.name||"Component"}function Fs(e){return e&&typeof e.styledComponentId=="string"}var Hn=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Os=typeof window<"u"&&"HTMLElement"in window,ev=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1)),tv={};function Kr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var nv=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,a=o.length,i=a;n>=i;)(i<<=1)<0&&Kr(16,""+n);this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var l=a;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,p=r.length;u<p;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),a=o+r;this.groupSizes[n]=0;for(var i=o;i<a;i++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],a=this.indexOfGroup(n),i=a+o,l=a;l<i;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Ro=new Map,ua=new Map,kr=1,vo=function(e){if(Ro.has(e))return Ro.get(e);for(;ua.has(kr);)kr++;var t=kr++;return Ro.set(e,t),ua.set(t,e),t},rv=function(e){return ua.get(e)},ov=function(e,t){t>=kr&&(kr=t+1),Ro.set(e,t),ua.set(t,e)},av="style["+Hn+'][data-styled-version="5.3.8"]',iv=new RegExp("^"+Hn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),lv=function(e,t,n){for(var r,o=n.split(","),a=0,i=o.length;a<i;a++)(r=o[a])&&e.registerName(t,r)},sv=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,a=n.length;o<a;o++){var i=n[o].trim();if(i){var l=i.match(iv);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(ov(u,s),lv(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(i)}}},uv=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Gf=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var p=s[u];if(p&&p.nodeType===1&&p.hasAttribute(Hn))return p}}(n),a=o!==void 0?o.nextSibling:null;r.setAttribute(Hn,"active"),r.setAttribute("data-styled-version","5.3.8");var i=uv();return i&&r.setAttribute("nonce",i),n.insertBefore(r,a),r},cv=function(){function e(n){var r=this.element=Gf(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var a=document.styleSheets,i=0,l=a.length;i<l;i++){var s=a[i];if(s.ownerNode===o)return s}Kr(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),dv=function(){function e(n){var r=this.element=Gf(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),a=this.nodes[n];return this.element.insertBefore(o,a||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),fv=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),gc=Os,pv={isServer:!Os,useCSSOMInjection:!ev},ca=function(){function e(n,r,o){n===void 0&&(n=Ht),r===void 0&&(r={}),this.options=vt({},pv,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&Os&&gc&&(gc=!1,function(a){for(var i=document.querySelectorAll(av),l=0,s=i.length;l<s;l++){var u=i[l];u&&u.getAttribute(Hn)!=="active"&&(sv(a,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return vo(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(vt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,a=r.useCSSOMInjection,i=r.target,n=o?new fv(i):a?new cv(i):new dv(i),new nv(n)));var n,r,o,a,i},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(vo(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules(vo(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(vo(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,a="",i=0;i<o;i++){var l=rv(i);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(i);if(s&&u&&s.size){var p=Hn+".g"+i+'[id="'+l+'"]',m="";s!==void 0&&s.forEach(function(g){g.length>0&&(m+=g+",")}),a+=""+u+p+'{content:"'+m+`"}/*!sc*/
`}}}return a}(this)},e}(),mv=/(a)(d)/gi,hc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Dl(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=hc(t%52)+n;return(hc(t%52)+n).replace(mv,"$1-$2")}var Rn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Vf=function(e){return Rn(5381,e)};function Hf(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Or(n)&&!Fs(n))return!1}return!0}var gv=Vf("5.3.8"),hv=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Hf(t),this.componentId=n,this.baseHash=Rn(gv,n),this.baseStyle=r,ca.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))a.push(this.staticRulesId);else{var i=mn(this.rules,t,n,r).join(""),l=Dl(Rn(this.baseHash,i)>>>0);if(!n.hasNameForId(o,l)){var s=r(i,"."+l,void 0,o);n.insertRules(o,l,s)}a.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,p=Rn(this.baseHash,r.hash),m="",g=0;g<u;g++){var S=this.rules[g];if(typeof S=="string")m+=S;else if(S){var v=mn(S,t,n,r),y=Array.isArray(v)?v.join(""):v;p=Rn(p,y+g),m+=y}}if(m){var L=Dl(p>>>0);if(!n.hasNameForId(o,L)){var d=r(m,"."+L,void 0,o);n.insertRules(o,L,d)}a.push(L)}}return a.join(" ")},e}(),vv=/^\s*\/\/.*$/gm,yv=[":","[",".","#"];function wv(e){var t,n,r,o,a=e===void 0?Ht:e,i=a.options,l=i===void 0?Ht:i,s=a.plugins,u=s===void 0?sa:s,p=new Ah(l),m=[],g=function(y){function L(d){if(d)try{y(d+"}")}catch{}}return function(d,c,f,w,E,b,R,q,G,j){switch(d){case 1:if(G===0&&c.charCodeAt(0)===64)return y(c+";"),"";break;case 2:if(q===0)return c+"/*|*/";break;case 3:switch(q){case 102:case 112:return y(f[0]+c),"";default:return c+(j===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(L)}}}(function(y){m.push(y)}),S=function(y,L,d){return L===0&&yv.indexOf(d[n.length])!==-1||d.match(o)?y:"."+t};function v(y,L,d,c){c===void 0&&(c="&");var f=y.replace(vv,""),w=L&&d?d+" "+L+" { "+f+" }":f;return t=c,n=L,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),p(d||!L?"":L,w)}return p.use([].concat(u,[function(y,L,d){y===2&&d.length&&d[0].lastIndexOf(n)>0&&(d[0]=d[0].replace(r,S))},g,function(y){if(y===-2){var L=m;return m=[],L}}])),v.hash=u.length?u.reduce(function(y,L){return L.name||Kr(15),Rn(y,L.name)},5381).toString():"",v}var Yf=gn.createContext();Yf.Consumer;var Kf=gn.createContext(),xv=(Kf.Consumer,new ca),Il=wv();function Xf(){return C.useContext(Yf)||xv}function Zf(){return C.useContext(Kf)||Il}var Jf=function(){function e(t,n){var r=this;this.inject=function(o,a){a===void 0&&(a=Il);var i=r.name+a.hash;o.hasNameForId(r.id,i)||o.insertRules(r.id,i,a(r.rules,i,"@keyframes"))},this.toString=function(){return Kr(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Il),this.name+t.hash},e}(),Sv=/([A-Z])/,kv=/([A-Z])/g,Cv=/^ms-/,Ev=function(e){return"-"+e.toLowerCase()};function vc(e){return Sv.test(e)?e.replace(kv,Ev).replace(Cv,"-ms-"):e}var yc=function(e){return e==null||e===!1||e===""};function mn(e,t,n,r){if(Array.isArray(e)){for(var o,a=[],i=0,l=e.length;i<l;i+=1)(o=mn(e[i],t,n,r))!==""&&(Array.isArray(o)?a.push.apply(a,o):a.push(o));return a}if(yc(e))return"";if(Fs(e))return"."+e.styledComponentId;if(Or(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return mn(s,t,n,r)}var u;return e instanceof Jf?n?(e.inject(n,r),e.getName(r)):e:ql(e)?function p(m,g){var S,v,y=[];for(var L in m)m.hasOwnProperty(L)&&!yc(m[L])&&(Array.isArray(m[L])&&m[L].isCss||Or(m[L])?y.push(vc(L)+":",m[L],";"):ql(m[L])?y.push.apply(y,p(m[L],L)):y.push(vc(L)+": "+(S=L,(v=m[L])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||S in $h?String(v).trim():v+"px")+";"));return g?[g+" {"].concat(y,["}"]):y}(e):e.toString()}var wc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Us(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Or(e)||ql(e)?wc(mn(pc(sa,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:wc(mn(pc(e,n)))}var ep=function(e,t,n){return n===void 0&&(n=Ht),e.theme!==n.theme&&e.theme||t||n.theme},Lv=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Pv=/(^-|-$)/g;function Pi(e){return e.replace(Lv,"-").replace(Pv,"")}var Bs=function(e){return Dl(Vf(e)>>>0)};function yo(e){return typeof e=="string"&&!0}var Rl=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},_v=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Nv(e,t,n){var r=e[n];Rl(t)&&Rl(r)?tp(r,t):e[n]=t}function tp(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,a=n;o<a.length;o++){var i=a[o];if(Rl(i))for(var l in i)_v(l)&&Nv(e,i[l],l)}return e}var Qs=gn.createContext();Qs.Consumer;var _i={};function np(e,t,n){var r=Fs(e),o=!yo(e),a=t.attrs,i=a===void 0?sa:a,l=t.componentId,s=l===void 0?function(c,f){var w=typeof c!="string"?"sc":Pi(c);_i[w]=(_i[w]||0)+1;var E=w+"-"+Bs("5.3.8"+w+_i[w]);return f?f+"-"+E:E}(t.displayName,t.parentComponentId):l,u=t.displayName,p=u===void 0?function(c){return yo(c)?"styled."+c:"Styled("+mc(c)+")"}(e):u,m=t.displayName&&t.componentId?Pi(t.displayName)+"-"+t.componentId:t.componentId||s,g=r&&e.attrs?Array.prototype.concat(e.attrs,i).filter(Boolean):i,S=t.shouldForwardProp;r&&e.shouldForwardProp&&(S=t.shouldForwardProp?function(c,f,w){return e.shouldForwardProp(c,f,w)&&t.shouldForwardProp(c,f,w)}:e.shouldForwardProp);var v,y=new hv(n,m,r?e.componentStyle:void 0),L=y.isStatic&&i.length===0,d=function(c,f){return function(w,E,b,R){var q=w.attrs,G=w.componentStyle,j=w.defaultProps,he=w.foldedComponentIds,pe=w.shouldForwardProp,Se=w.styledComponentId,We=w.target,Ne=function(M,h,Q){M===void 0&&(M=Ht);var _=vt({},h,{theme:M}),se={};return Q.forEach(function(H){var K,O,ke,je=H;for(K in Or(je)&&(je=je(_)),je)_[K]=se[K]=K==="className"?(O=se[K],ke=je[K],O&&ke?O+" "+ke:O||ke):je[K]}),[_,se]}(ep(E,C.useContext(Qs),j)||Ht,E,q),xt=Ne[0],Re=Ne[1],P=function(M,h,Q,_){var se=Xf(),H=Zf(),K=h?M.generateAndInjectStyles(Ht,se,H):M.generateAndInjectStyles(Q,se,H);return K}(G,R,xt),A=b,$=Re.$as||E.$as||Re.as||E.as||We,ee=yo($),N=Re!==E?vt({},E,{},Re):E,z={};for(var D in N)D[0]!=="$"&&D!=="as"&&(D==="forwardedAs"?z.as=N[D]:(pe?pe(D,uc,$):!ee||uc(D))&&(z[D]=N[D]));return E.style&&Re.style!==E.style&&(z.style=vt({},E.style,{},Re.style)),z.className=Array.prototype.concat(he,Se,P!==Se?P:null,E.className,Re.className).filter(Boolean).join(" "),z.ref=A,C.createElement($,z)}(v,c,f,L)};return d.displayName=p,(v=gn.forwardRef(d)).attrs=g,v.componentStyle=y,v.displayName=p,v.shouldForwardProp=S,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):sa,v.styledComponentId=m,v.target=r?e.target:e,v.withComponent=function(c){var f=t.componentId,w=function(b,R){if(b==null)return{};var q,G,j={},he=Object.keys(b);for(G=0;G<he.length;G++)q=he[G],R.indexOf(q)>=0||(j[q]=b[q]);return j}(t,["componentId"]),E=f&&f+"-"+(yo(c)?c:Pi(mc(c)));return np(c,vt({},w,{attrs:g,componentId:E}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?tp({},e.defaultProps,c):c}}),v.toString=function(){return"."+v.styledComponentId},o&&Jh(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var Tl=function(e){return function t(n,r,o){if(o===void 0&&(o=Ht),!la.isValidElementType(r))return Kr(1,String(r));var a=function(){return n(r,o,Us.apply(void 0,arguments))};return a.withConfig=function(i){return t(n,r,vt({},o,{},i))},a.attrs=function(i){return t(n,r,vt({},o,{attrs:Array.prototype.concat(o.attrs,i).filter(Boolean)}))},a}(np,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Tl[e]=Tl(e)});var zv=function(){function e(n,r){this.rules=n,this.componentId=r,this.isStatic=Hf(n),ca.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(n,r,o,a){var i=a(mn(this.rules,r,o,a).join(""),""),l=this.componentId+n;o.insertRules(l,l,i)},t.removeStyles=function(n,r){r.clearRules(this.componentId+n)},t.renderStyles=function(n,r,o,a){n>2&&ca.registerId(this.componentId+n),this.removeStyles(n,o),this.createStyles(n,r,o,a)},e}();function bv(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Us.apply(void 0,[e].concat(n)),a="sc-global-"+Bs(JSON.stringify(o)),i=new zv(o,a);function l(u){var p=Xf(),m=Zf(),g=C.useContext(Qs),S=C.useRef(p.allocateGSInstance(a)).current;return p.server&&s(S,u,p,g,m),C.useLayoutEffect(function(){if(!p.server)return s(S,u,p,g,m),function(){return i.removeStyles(S,p)}},[S,u,p,g,m]),null}function s(u,p,m,g,S){if(i.isStatic)i.renderStyles(u,tv,m,S);else{var v=vt({},p,{theme:ep(p,g,l.defaultProps)});i.renderStyles(u,v,m,S)}}return gn.memo(l)}function yn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=Us.apply(void 0,[e].concat(n)).join(""),a=Bs(o);return new Jf(a,o)}const B=Tl,qv=bv`
    /* 
        ///////////////////
            CSS RESET
        ///////////////////
    */
    *:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {
            all: unset;
            display: revert;
        }

        /* Preferred box-sizing value */
        *,
        *::before,
        *::after {
            box-sizing: border-box;
        }

        /* Reapply the pointer cursor for anchor tags */
        a, button {
            cursor: revert;
        }

        /* Remove list styles (bullets/numbers) */
        ol, ul, menu {
            list-style: none;
        }

        /* For images to not be able to exceed their container */
        img {
            max-inline-size: 100%;
            max-block-size: 100%;
        }

        /* removes spacing between cells in tables */
        table {
            border-collapse: collapse;
        }

        /* Safari - solving issue when using user-select:none on the <body> text input doesn't working */
        input, textarea {
            -webkit-user-select: auto;
        }

        /* revert the 'white-space' property for textarea elements on Safari */
        textarea {
            white-space: revert;
        }

        /* minimum style to allow to style meter element */
        meter {
            -webkit-appearance: revert;
            appearance: revert;
        }

        /* preformatted text - use only for this feature */
        pre {
            all: revert;
        }

        /* reset default text opacity of input placeholder */
        ::placeholder {
            color: unset;
        }

        /* remove default dot (•) sign */
        ::marker {
            content: "";
        }

        /* fix the feature of 'hidden' attribute.
        display:revert; revert to element instead of attribute */
        :where([hidden]) {
            display: none;
        }

        /* revert for bug in Chromium browsers
        - fix for the content editable attribute will work properly.
        - webkit-user-select: auto; added for Safari in case of using user-select:none on wrapper element*/
        :where([contenteditable]:not([contenteditable="false"])) {
            -moz-user-modify: read-write;
            -webkit-user-modify: read-write;
            overflow-wrap: break-word;
            -webkit-line-break: after-white-space;
            -webkit-user-select: auto;
        }

        /* apply back the draggable feature - exist only in Chromium and Safari */
        :where([draggable="true"]) {
            -webkit-user-drag: element;
        }

        /* Revert Modal native behavior */
        :where(dialog:modal) {
            all: revert;
        }

        *, body{
            padding: 0;
            margin: 0;
            box-sizing: border-box;
            outline: none;
        }

    :root {
        --primary-color: #1E96FC;
        --primary-disabled: rgba(50, 50, 50, 0.05);
        --yellow-color: #FFFA69;
        --yellow-dark-color: #FFF71B;
        --red-color: #FF5E67;
        --red-dark-color: #FE4B56;
        --green-color: #37F589;
        --orange-color: #FF9B26;
        --light-blue-color: #65C8FF;
        --dark-color: #323232;
        --light-color: #FFFFFF;
        --transparent-white-color: rgba(255, 255, 255, 0.45);
        --font-texts: 'Open Sans', sans-serif;
        --font-titles: 'Montserrat Alternates', sans-serif;
        --backdrop-color: rgba(29, 29, 29, 0.76);
    }
    *, html, body{
            font-family: var(--font-texts);
    }
`,Dv=yn`
    0%{
        transform: rotate(115deg);
    }
    60%{
        background: var(--primary-disabled);
        transform: rotate(115deg);
    }
    100%{     
        background: var(--primary-color);
        transform: translate(-2vh, 2vw) rotate(130deg);
    }
`,Iv=yn`
        0%{
        transform: rotate(140deg);
    }
    60%{
        background: var(--primary-disabled);

        transform: rotate(140deg);
    }
    90%{
        background: var(--primary-color);
    }
    100%{
        background: var(--primary-color);
        transform: translate(-2vh, 0vw) rotate(155deg);
    }
`,Rv=yn`
        0%{
        transform: rotate(70deg);
    }
    60%{
        background: var(--primary-disabled);
        transform: rotate(70deg);
    }
    90%{
        background: var(--primary-color);
    }
    100%{
        background: var(--primary-color);
        transform: translate(2vh, 5vw) rotate(85deg);
    }
`,Tv=yn`
        0%{
        transform: rotate(55deg);
    }
    60%{
        background: var(--primary-disabled);

        transform: rotate(55deg);
    }
    90%{
        background: var(--primary-color);
    }
    100%{
        background: var(--primary-color);
        transform: translate(2vh, 2vw) rotate(70deg);
    }
`,Av=yn`

    0%{
        transform: translateX(-38%);
    }
    60%{
        transform: translateX(-38%);
    }
    100%{
        transform: translateX(0%);
    }
`,$v=yn`
        0%{
            transform: translateX(75%);
        }
        60%{
        transform: translateX(75%);
        }
        70%{
        opacity: 1;
        }
        100%{
        opacity: 1;
            transform: translateX(0%);
        }
`,Mv=yn`
    0%{
        transform: translateY(0%);
    }
    80%{
        transform: translateY(0%);
    }
    98%{
        transform: translateY(-100%);
    }
    100%{
        transform: translateY(-100%);
    }
`,jv=B.main`
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .splash__animation {
    background: var(--light-color);
    z-index: 2;
    height: 100vh;
    animation: ${Mv} 2.4s ease-in-out forwards;
    .splash-1 {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      .square {
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 15%;
        background: var(--primary-disabled);
        transition: all 0.3s ease-in-out;
        @media screen and (min-width: 768px) {
          width: 15rem;
          height: 15rem;
        }
        &.type-1 {
          transform: rotate(115deg);
          left: initial;
          top: -1vh;
          bottom: initial;
          right: -12vw;
          animation: ${Dv} 1.2s ease-in-out forwards;
        }
        &.type-2 {
          transform: rotate(140deg);
          left: -12vw;
          top: 28vh;
          bottom: initial;
          right: initial;
          animation: ${Iv} 1.2s ease-in-out forwards;
        }
        &.type-3 {
          transform: rotate(99deg);
          left: initial;
          top: 55vh;
          bottom: initial;
          right: -12vw;
          animation: ${Rv} 1.2s ease-in-out forwards;
        }
        &.type-4 {
          transform: rotate(55deg);
          left: -12vw;
          top: 82vh;
          bottom: initial;
          right: initial;
          animation: ${Tv} 1.2s ease-in-out forwards;
        }
        @media screen and (min-width: 768px) {
          &.type-1 {
            left: initial;
            top: -10vh;
            bottom: initial;
            right: -8vw;
          }
          &.type-2 {
            left: -12vw;
            top: 1vh;
            bottom: initial;
            right: initial;
          }
          &.type-3 {
            left: initial;
            top: 70vh;
            bottom: initial;
            right: -12vw;
          }
          &.type-4 {
            left: -12vw;
            top: 80vh;
            bottom: initial;
            right: initial;
          }
        }
      }
      .logo__wrapper {
        height: 100px;
        position: relative;
        overflow: hidden;
        transform: translateX(-38%);
        animation: ${Av} 1.2s ease-in-out forwards;
      }
      .splash__logo-2 {
        height: 100px;
        opacity: 0;
        transform: translateX(75%);
        animation: ${$v} 1.2s ease-in-out forwards;
      }
    }
  }
  .name__input-form {
    transform: translateY(-100vh);
    height: 100vh;
    width: 100%;

    .square {
      position: absolute;
      width: 100px;
      height: 100px;
      border-radius: 15%;
      background: ${e=>e.active?"var(--primary-color)":"var(--primary-disabled)"};
      @media screen and (min-width: 768px) {
        width: 15rem;
        height: 15rem;
      }

      &.type-1 {
        transform: rotate(115deg);
        left: initial;
        top: -10vh;
        bottom: initial;
        right: 8vw;
      }
      &.type-2 {
        transform: rotate(140deg);
        left: -18vw;
        top: 15vh;
        bottom: initial;
        right: initial;
      }
      &.type-3 {
        transform: rotate(70deg);
        left: initial;
        top: 70vh;
        bottom: initial;
        right: -18vw;
      }
      &.type-4 {
        transform: rotate(55deg);
        left: -12vw;
        top: 95vh;
        bottom: initial;
        right: initial;
      }
      @media screen and (min-width: 768px) {
        &.type-1 {
          left: initial;
          top: -10vh;
          bottom: initial;
          right: -8vw;
        }
        &.type-2 {
          left: -12vw;
          top: 1vh;
          bottom: initial;
          right: initial;
        }
        &.type-3 {
          left: initial;
          top: 70vh;
          bottom: initial;
          right: -12vw;
        }
        &.type-4 {
          left: -12vw;
          top: 80vh;
          bottom: initial;
          right: initial;
        }
      }
    }
    .name__input-container {
      height: 100vh;
      width: 100%;
      padding: 6rem 0;
      display: grid;
      place-items: center;
      gap: 1rem;
      .name__input-logo {
        max-width: 100px;
      }
      .name__input {
        padding: 0.5rem;
        border-bottom: 2px solid var(--dark-color);
        font-size: 1.4rem;
        width: 80%;
        max-width: 320px;
        max-height: 80px;
      }
      .emote__happy,
      .emote__normal {
        width: 180px;
        margin: 2.5rem 0;
      }
      button {
        z-index: 2;
        margin-top: 1rem;
        width: 80%;
        max-width: 320px;
        max-height: 80px;
        cursor: ${e=>e.active&&"pointer"};
      }
    }
  }
`,Al="/assets/logo-full-84015e61.svg",Fv="/assets/arrow-icon-c51a1b7e.svg",rp="/assets/face-smile-6bc61b64.svg",Ov="/assets/face-serious-2bae1067.svg",da=B.button`
  transition: all 0.3s ease-in-out;
  padding: 1rem 2.8rem;
  background: ${e=>e.bg?e.bg:"var(--dark-color)"};
  color: ${e=>e.color?e.color:"var(--light-color)"};
  outline: ${e=>e.border&&`2px solid ${e.border}`};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  gap: 0.5rem;
  width: fit-content;
  border-radius: 10px;
  font-family: var(--font-texts);
  font-weight: 600;
`,Ur=C.createContext(),Uv=({children:e})=>{const[t,n]=C.useState({userName:""});return x(Ur.Provider,{value:{userData:t,setUserData:n},children:e})},Bv=()=>{const[e,t]=C.useState({name:"",active:!1}),n=Yr(),{userData:r,setUserData:o}=C.useContext(Ur),a=l=>{t({name:l.target.value,active:l.target.value.length>=3})},i=async()=>{try{o({userName:e.name}),localStorage.setItem("userName",e.name)}catch(l){console.log(l)}finally{n("/home")}};return T(jv,{active:e.active,children:[x("section",{className:"splash__animation",children:T("section",{className:"splash-1",children:[x("div",{className:"square type-1"}),x("div",{className:"square type-2"}),x("div",{className:"square type-3"}),x("div",{className:"square type-4"}),x("div",{className:"logo__wrapper",children:x("img",{className:"splash__logo-2",src:Al,alt:"Logo do learniFy"})})]})}),T("section",{className:"name__input-form",children:[x("div",{className:"square type-1"}),x("div",{className:"square type-2"}),x("div",{className:"square type-3"}),x("div",{className:"square type-4"}),T("section",{className:"name__input-container",children:[x("img",{className:"name__input-logo",src:Al,alt:"Logo do learniFy"}),e.active?x("img",{className:"emote__happy",src:rp,alt:"Emote feliz"}):x("img",{className:"emote__normal",src:Ov,alt:"Emote sério"}),x("input",{type:"text",className:"name__input",value:e.name,onChange:a,placeholder:"Insira seu nome aqui"}),T(da,{onClick:i,bg:!e.active&&"#959595",children:["Continuar",x("img",{src:Fv})]})]})]})]})},Xr=C.createContext(),Qv=({children:e})=>{const[t,n]=C.useState({});return x(Xr.Provider,{value:{categorySelected:t,setCategorySelected:n},children:e})},Wv=B.main`
width: 100%;
height: 100vh;
background-color: var(--yellow-color);
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;

`,Gv=B.img`
width: 105.48px;
height: 88px;
background-repeat: no-repeat;
background-size: cover;
margin-top: 50px;

`,Vv=B.section`
width: 100%;
height: 70%;
background-color: var(--light-color);
border-radius: 180px 180px 0px 0px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (max-width: 813px) {
border-radius: 40px 40px 0px 0px;
    padding:40px 40px 0px 40px;
    justify-content: flex-start;
}
`,Hv=B.article`
width: 100%;
height: 30%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
@media (max-width: 813px) {
align-items: flex-start;

}
`,Yv=B.h4`
width: 410px;
font-family:var(--font-titles);
font-style: normal;
font-weight: 700;
font-size: 1.7rem;
color:var(--dark-color);
@media (max-width: 813px) {
width: 290px;

}
`,Kv=B.p`
height: 52px;
width: 30%;
font-family: var(--font-texts);
font-style: normal;
font-weight: 500;
font-size: 0.9rem;
@media (max-width: 813px) {
width: 100%;
font-size:1rem ;
}
color: #000000;

`,Xv=B.article`
height: 100%;
display: flex;
justify-content: center;
gap: 30px;
`,Zv=B.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
gap: 190px;
@media (max-width: 813px) {
    justify-content: flex-start;
    padding-top: 38px;
    padding-bottom: 70px;
}
`,Jv=B.div`
width: 2px;
height: 88.43px;
background: #D9D9D9;
margin: 0%;
margin-top: 6px;
    display: flex;
    align-items: center;
    flex-direction: column;
gap: 30px;
`,Ni=B.div`
width: 10px;
height: 16px;
background: #D9D9D9;
border-radius: 50%;
`,zi=B.p`
font-family: var(--font-titles);
width: 100px;
font-style: normal;
font-weight: 800;
font-size: 14px;
color: #000000;


`,e0=B.div`
height: 94.43px;

    display: flex;
    align-items: flex-start;
    flex-direction: column;
gap: 24px;

`,t0=B.figure`
justify-content: center;
align-items: center;
@media (max-width: 813px) {
   
}
`,n0=B.img`
width: 98px;
height: 83px;
@media (max-width: 813px) {
    width: 88px;
height: 73px;
position: absolute;
top: 33vh;
right: 8vw;
}
`,r0=B.article`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 20%;
flex-direction: row;
gap: 28px;
padding-top: 60px;
@media (max-width: 813px) {
    display: flex;
    flex-direction: column-reverse;
    height: 0%;
    margin-top: 20px;
    padding-top: 3%;
}
`,o0=B.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 238px;
height: 71px;
font-family: var(--font-titles);
font-weight: 700;
font-size: 18px;
`,xc=B.img`
width: 28px;
height: 28px;
background-repeat: no-repeat;
background-size: cover;
@media (max-width: 813px) {
display: ${e=>e.topButton&&"none"};
}
`,a0=B.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
width: 180px;
height: 50px;
background: #323232;
border-radius: 10px;
font-family: var(--font-titles);
font-weight: 700;
font-size: 15px;

color: #FFFFFF;
@media (max-width: 813px) {
width: 280px;
height: 60px;
font-size: 18px;
padding: 8%;
}

`,i0="/assets/FaceDesktop-4-94f217fb.svg",l0="/assets/language-learning-06bb6c64.svg",s0="/assets/arrow-left-d36c4a0c.svg",u0="/assets/arrow-right-1564719e.svg",op="/assets/math-illustration-681014fb.svg",ap="/assets/law-illustration-5c65fbf9.svg",ip="/assets/prog-illustration-df191fad.svg",lp="/assets/all-illustration-c78726b6.svg",c0=()=>{const{categorySelected:e}=C.useContext(Xr),[t,n]=C.useState();C.useEffect(()=>{n({Matemática:op,Linguagens:l0,Direito:ap,Programação:ip}[e[0].category]||lp)},[]);const r=Yr();return T(Wv,{children:[x(Gv,{src:i0}),T(Vv,{children:[T(Hv,{children:[x(Yv,{children:e[0].category}),x(Kv,{children:e[0].sobre})]}),T(Zv,{children:[T(Xv,{children:[T(Jv,{children:[x(Ni,{}),x(Ni,{}),x(Ni,{})]}),T(e0,{children:[x(zi,{children:e[0].fieldStudy[0]}),x(zi,{children:e[0].fieldStudy[1]}),x(zi,{children:e[0].fieldStudy[2]})]})]}),x(t0,{children:x(n0,{src:t})})]}),T(r0,{children:[T(o0,{onClick:()=>r("/home"),children:[x(xc,{src:s0}),"Voltar"]}),T(a0,{onClick:()=>r("/questions"),children:["Iniciar teste",x(xc,{src:u0,topButton:"true"})]})]})]})]})},d0=B.main`
	display: grid;
	align-items: center;
	justify-items: center;
	grid-template-rows: 30% 70%;

	overflow: hidden;
	position: relative;

	width: 100%;
	height: 100%;
	min-height: 100vh;

	color: var(--dark-color);
	text-align: center;

	background-color: ${({color:e})=>`var(--${e}-color)`};

	.container {
		z-index: 20;
		position: relative;

		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 1.4rem;

		width: 100%;
		height: 100%;
		padding: 40px 25px;

		background-color: #fff;
		border-radius: 44px 44px 0px 0px;
	}

	.points img {
		width: 24px;
		margin-bottom: 5px;
	}
	.points h2 {
		font-size: 24px;
		font-weight: 700;
		font-family: var(--font-titles);
	}

	.content {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.content .link > p,
	.message h1 {
		font-weight: 700;
		font-family: var(--font-titles);
	}
	.message h1 {
		font-size: 24px;
		margin-bottom: 5px;
	}
	.message p {
		font-family: var(--font-texts);
	}
	.content .link {
		display: flex;
		justify-content: center;
		gap: 5px;

		cursor: pointer;
	}
	.content .link p {
		font-size: 20px;
		text-decoration: underline;
	}
	.content .link img {
		width: 24px;
	}

	.container .buttons {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 10px;
		margin-top: 10px;
		width: 100%;
	}
	.container .buttons button {
		width: 100%;
		font-size: 16px;
		font-weight: 700;
		padding-left: 1rem;
		padding-right: 1rem;
		cursor: pointer;
	}

	.results-overlay {
		z-index: 30;
		position: absolute;

		width: 100%;
		height: 100%;
		min-height: 100vh;

		background-color: var(--backdrop-color);
	}
	.results-overlay .container-overlay {
		overflow-y: scroll;
		position: relative;

		display: flex;
		flex-direction: column;
		gap: 32px;

		width: 92%;
		max-width: 800px;
		max-height: 100vh;

		margin: 40px auto 0;
		padding: 110px 16px 0;

		text-align: left;
		background-color: #fff;
	}
	.container-overlay::-webkit-scrollbar {
		width: 5px;
		border-radius: 10px;
		background-color: #ccc;
	}
	.container-overlay::-webkit-scrollbar-thumb {
		border-radius: 5px;
		background-color: #646464;
	}
	.container-overlay .title,
	.container-overlay .questions {
		margin: 0 auto;
		max-width: 500px;
	}

	.container-overlay > img {
		top: 20px;
		right: 12px;
		position: absolute;
		cursor: pointer;
	}
	.container-overlay .title h1 {
		margin-bottom: 10px;

		font-size: 28px;
		font-weight: 700;
		font-family: var(--font-titles);
	}
	.container-overlay .title p {
		font-size: 14px;
		font-weight: 300;
		font-family: var(--font-texts);
	}

	.question {
		padding: 50px 0;

		border-top: 1px solid #c7c7c7;
		border-bottom: 1px solid #c7c7c7;
	}

	.question .ask {
		display: grid;
		grid-template-columns: 45px 1fr;
		align-items: center;
		gap: 15px;

		margin-bottom: 20px;
	}
	.question .ask .number,
	.question .ask p {
		font-size: 18px;
		font-weight: 700;
		font-family: var(--font-titles);
	}
	.question .ask .number {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 45px;
		height: 45px;

		background-color: var(--yellow-color);
	}

	.question .answers {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.answers .answer {
		display: grid;
		grid-template-columns: 30px 1fr 20px;
		align-items: center;
		gap: 10px;

		width: 100%;
		padding: 18px;

		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
	}
	.answer.wrong {
		border-bottom: 4px solid var(--red-dark-color);
	}
	.answer.success {
		border-bottom: 4px solid var(--green-color);
	}
	.answer .option {
		font-size: 24px;
		font-weight: 700;
		font-family: var(--font-titles);
	}
	.answer p {
		font-size: 14px;
		font-family: var(--font-texts);
	}

	.background-elements {
		z-index: 10;
		position: absolute;

		width: 100%;
		min-height: 100%;
	}
	.background-elements .square.type-3,
	.background-elements .circle {
		display: none;
	}
	.background-elements .square {
		width: 130px;
		height: 130px;
		position: absolute;
		border-radius: 30px;
		border: 70px solid var(--transparent-white-color);
	}
	.background-elements .square.type-1 {
		top: 20vh;
		left: -20vw;
		transform: rotate(52deg);
	}
	.background-elements .square.type-2 {
		top: 20vh;
		left: 80vw;
		transform: rotate(52deg);
	}
	.background-elements .circle {
		width: 120px;
		height: 120px;
		position: absolute;
		border-radius: 50%;
		border: 20px solid var(--transparent-white-color);
	}

	@media screen and (min-width: 768px) {
		.container {
			gap: 3rem;
			border-radius: 204px 204px 0px 0px;
		}

		.content {
			gap: 20px;
		}

		.container .buttons {
			gap: 20px;
		}

		.container .buttons button {
			width: 600px;
			font-size: 20px;
		}

		.container-overlay::-webkit-scrollbar {
			width: 8px;
		}

		.background-elements .square {
			border-width: 20px;
		}
		.background-elements .square.type-1 {
			top: 25vh;
			left: 20vw;
		}
		.background-elements .square.type-2 {
			top: 20vh;
			left: 80vw;
			transform: rotate(-29deg);
		}
		.background-elements .square.type-3 {
			top: -12vh;
			left: 30vw;
			display: block;
			transform: rotate(-29deg);
		}
	}

	@media screen and (min-width: 769px) {
		.background-elements .square {
			border-width: 20px;
		}
		.background-elements .square.type-1 {
			top: 22vh;
			left: 20vw;
		}
		.background-elements .square.type-2 {
			top: 15vh;
			left: 94vw;
		}
		.background-elements .square.type-3 {
			top: -10vh;
			left: 35vw;
		}

		.background-elements .circle {
			display: block;
		}
		.background-elements .circle.type-1 {
			top: -5vh;
			left: 70vw;
		}
		.background-elements .circle.type-2 {
			top: 18vh;
			left: 75vw;
		}
		.background-elements .circle.type-3 {
			top: 10vh;
			left: -3vw;

			width: 140px;
			height: 140px;
			border-width: 30px;
		}
	}
`,Ws=C.createContext(),f0=({children:e})=>{const[t,n]=C.useState([]),r=C.useMemo(()=>{let a=0;return t.forEach(i=>{i.correctAnswer==i.userAnswer&&(a+=1)}),a},[t.length]),o=({questionId:a,answer:i,correctAnswer:l})=>{const s=[...t];s.push({id:a,correctAnswer:l,userAnswer:i}),n(s)};return x(Ws.Provider,{value:{questions:t,validateAnswer:o,userPoints:r},children:e})},p0="/assets/flag-19e2903d.svg",m0="/assets/x-circle-b10eb212.svg",g0="/assets/face-sad-b98b9fc1.svg",h0="/assets/file-text-18b57892.svg",v0="/assets/refresh-ccw-19293449.svg",Sc="/assets/check-answer-defc6f1b.svg",y0="/assets/x-circle-answer-cd5401eb.svg",w0=()=>{const e=Yr(),{userData:t}=C.useContext(Ur),{categorySelected:n}=C.useContext(Xr),{questions:r,userPoints:o}=C.useContext(Ws),[a,i]=C.useState(!1),l=["A","B","C","D"],s={color:"green",src:rp,className:"happy",message:"Ótima pontuação. Veja a correção do seu teste e pontos que você pode melhorar."};return o<6&&(s.color="red",s.src=g0,s.className="sad",s.message="Você pode melhorar a sua pontuação! Veja a correção e tente refazer o seu teste."),T(d0,{color:s.color,children:[x("img",{src:s.src,alt:"",className:`face ${s.className}`}),T("section",{className:"container",children:[T("section",{className:"points",children:[x("img",{src:p0,alt:"flag icon"}),T("h2",{children:[o,"/",r.length]})]}),T("section",{className:"content",children:[T("div",{className:"message",children:[T("h1",{children:["Parabéns, ",t.userName,"!"]}),x("p",{children:s.message})]}),T("div",{className:"link",onClick:()=>i(!0),children:[x("p",{children:"Ver detalhes do teste"}),x("img",{src:h0,alt:""})]})]}),T("section",{className:"buttons",children:[T(da,{bg:"transparent",color:"#000",border:"var(--dark-color)",onClick:()=>e("/select-knowledge"),children:["Refazer teste ",x("img",{src:v0,alt:""})]}),x(da,{onClick:()=>e("/home"),children:"Voltar para a tela inicial"})]})]}),T("div",{className:"background-elements",children:[x("div",{className:"square type-1"}),x("div",{className:"square type-2"}),x("div",{className:"square type-3"}),x("div",{className:"circle type-1"}),x("div",{className:"circle type-2"}),x("div",{className:"circle type-3"})]}),a&&x("div",{className:"results-overlay",children:T("section",{className:"container-overlay",children:[x("img",{src:m0,alt:"Close icon",onClick:()=>i(!1)}),T("section",{className:"title",children:[x("h1",{children:"Resultado"}),x("p",{children:"Veja a correção do seu teste e pontos que você pode melhorar."})]}),x("ul",{className:"questions",children:r.map(({id:u,userAnswer:p,correctAnswer:m},g)=>{const S=n.find(({id:v})=>v===u);return T("li",{className:"question",children:[T("section",{className:"ask",children:[x("div",{className:"number",children:(g+1).toString().padStart(2,"0")}),x("p",{children:S.question})]}),x("ul",{className:"answers",children:S.options.map((v,y)=>p===m?T("li",{className:`answer ${m===v?"success":""}`,children:[x("h3",{className:"option",children:l[y]}),x("p",{children:v}),m===v&&x("img",{src:Sc,alt:"Success icon"})]},y):T("li",{className:`answer ${p===v?"wrong":""} ${m===v?"success":""}`,children:[x("h3",{className:"option",children:l[y]}),x("p",{children:v}),p===v&&x("img",{src:y0,alt:"Wrong icon"}),m===v&&x("img",{src:Sc,alt:"Success icon"})]},y))})]},g)})})]})})]})},x0=B.section`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .home__container {
    position: relative;
    width: 95%;
    margin: 0 auto;
    height: 80vh;
    display: grid;

    place-items: center;
    grid-row-gap: 1rem;
    margin-top: 1rem;
    .square {
      position: absolute;
      width: 100px;
      height: 100px;
      border-radius: 15%;
      background: ${e=>e.active?"var(--primary-color)":"var(--primary-disabled)"};
      @media screen and (min-width: 768px) {
        width: 15rem;
        height: 15rem;
      }
      &.type-1 {
        transform: rotate(115deg);
        left: initial;
        top: -10vh;
        bottom: initial;
        right: 8vw;
      }
      &.type-2 {
        transform: rotate(140deg);
        left: -18vw;
        top: 15vh;
        bottom: initial;
        right: initial;
      }
      &.type-3 {
        transform: rotate(70deg);
        left: initial;
        top: 70vh;
        bottom: initial;
        right: -18vw;
      }
      &.type-4 {
        transform: rotate(55deg);
        left: -12vw;
        top: 95vh;
        bottom: initial;
        right: initial;
      }
      @media screen and (min-width: 768px) {
        &.type-1 {
          left: initial;
          top: -10vh;
          bottom: initial;
          right: -8vw;
        }
        &.type-2 {
          left: -12vw;
          top: 1vh;
          bottom: initial;
          right: initial;
        }
        &.type-3 {
          left: initial;
          top: 70vh;
          bottom: initial;
          right: -12vw;
        }
        &.type-4 {
          left: -12vw;
          top: 80vh;
          bottom: initial;
          right: initial;
        }
      }
    }
    .heading {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      justify-content: center;
      align-items: center;
      align-self: flex-end;
      .home__title {
        font-size: 2rem;
        font-weight: 700;
        font-family: var(--font-titles);
        max-width: 80%;
      }
      .home__subtitle {
        font-size: 1.2rem;
        font-weight: 300;
        font-family: var(--font-texts);
      }
      .heading__logo {
        width: 100px;
      }
    }
    .categories__grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(2, 1fr);
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
      align-self: flex-start;
      width: 100%;
      height: 100%;
      max-width: 768px;
      max-height: 340px;
      div {
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        font-size: 1.4rem;
        position: relative;

        span {
          z-index: 2;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-weight: 600;
          gap: 0.5rem;
          padding: 1rem;
          img {
            width: 0.8rem;
          }
        }
        .illustration {
          height: 100px;
          position: absolute;
          bottom: -1rem;
          right: -1rem;
        }
      }
      .cat1 {
        color: var(--dark-color);
        background: var(--yellow-color);
        grid-area: 1 / 1 / 2 / 2;
        transition: all 0.3s ease-in-out;
        &:hover {
          cursor: pointer;
          filter: brightness(0.95);
        }
      }
      .cat2 {
        color: var(--light-color);
        grid-area: 1 / 2 / 2 / 3;
        background: var(--red-color);
        transition: all 0.3s ease-in-out;
        &:hover {
          cursor: pointer;
          filter: brightness(0.95);
        }
      }
      .cat3 {
        color: var(--light-color);
        background: var(--orange-color);
        grid-area: 2 / 1 / 3 / 2;
        transition: all 0.3s ease-in-out;
        &:hover {
          cursor: pointer;
          filter: brightness(0.95);
        }
      }
      .cat4 {
        color: var(--dark-color);
        background: var(--light-blue-color);
        grid-area: 2 / 2 / 3 / 3;
        transition: all 0.3s ease-in-out;
        &:hover {
          cursor: pointer;
          filter: brightness(0.95);
        }
      }
      .cat5 {
        display: flex;
        gap: 0;
        justify-content: flex-start;
        align-items: flex-start;
        color: var(--light-color);
        background: var(--primary-color);
        grid-area: 1 / 3 / 3 / 4;
        transition: all 0.3s ease-in-out;
        &:hover {
          cursor: pointer;
          filter: brightness(0.95);
        }
        .title {
          font-size: 1.1rem;
          padding: 0 1rem;
        }
        .subtitle {
          padding: 0 1rem;
          font-size: 0.9rem;
          font-weight: 300;
        }
        .general {
          width: 100%;
          display: flex;
          justify-content: center;
          img {
            height: 150px;
          }
        }
        button {
          margin: 2rem 0;
          border-radius: 50px;
          padding: 1rem;
          margin: auto;
          width: 80%;
          height: 50px;
          font-size: 1.2rem;
          background: var(--light-color);
          color: var(--primary-color);
        }
      }
    }
    @media (max-width: 768px) {
      .categories__grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 40% 30% 30%;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        height: 100vh;

        .cat1 {
          grid-area: 2 / 1 / 3 / 2;
        }
        .cat2 {
          grid-area: 2 / 2 / 3 / 3;
        }
        .cat3 {
          grid-area: 3 / 1 / 4 / 2;
        }
        .cat4 {
          grid-area: 3 / 2 / 4 / 3;
        }
        .cat5 {
          padding: 1rem 0.5rem;
          grid-column: 1 / span 2;
          grid-row: 1;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(1, 1fr);
          grid-row-gap: 0.5rem;
          color: var(--light-color);
          background: var(--primary-color);
          transition: all 0.3s ease-in-out;
          &:hover {
            cursor: pointer;
            filter: brightness(0.95);
          }
          .title {
            grid-area: 1 / 1 / 2 / 3;
            font-size: 1.2rem;
            padding: 0 1rem;
          }
          .subtitle {
            grid-area: 2 / 1 / 3 / 3;
            padding: 0 1rem;
            font-size: 0.9rem;
            font-weight: 300;
          }
          .general {
            grid-area: 1 / 3 / 3 / 4;
            width: 100%;
            display: flex;
            justify-content: center;
            img {
              height: 100px;
            }
          }
          button {
            grid-area: 3 / 1 / 4 / 4;
            margin: 2rem 0;
            border-radius: 50px;
            margin: 0 1rem;
            padding: 1rem;
            width: 90%;
            max-width: 300px;
            height: 50px;
            font-size: 1.2rem;
            background: var(--light-color);
            color: var(--primary-color);
          }
        }
      }
    }
    @media (max-width: 520px) {
      .heading{
        gap: .5rem;
        .home__title{
          font-size: 1.2rem;
          width: 100%;
          text-align: start;
          align-self: flex-start;
        }
        .home__subtitle{
          font-size: 1.1rem;
            width: 100%;
          text-align: start;
        }
      }
      .categories__grid {
        .illustration {
          height: 60px !important;
          position: absolute;
          bottom: -1rem;
          right: -1rem;
        }
        .cat5 {
          button {
            max-width: 200px;
            padding: 5px;
            height: 30px;
          }
        }
      }
    }
    @media (max-width: 400px) {
      .categories__grid {
        .title {
          font-size: 1rem;
        }
        div {
          span {
            font-size: 1rem;
            img {
              display: none;
            }
          }
          .illustration {
            height: 40px;
            position: absolute;
            bottom: -1rem;
            right: -1rem;
          }
        }
      }
    }
    @media (max-width: 375px) {
      width: 95%;
      grid-row-gap: 1rem;
      .heading {
        .heading__logo {
          width: 60px;
        }
      }
      .home__subtitle {
        text-align: center;
      }
      .categories__grid {
        .title {
          font-size: 1rem;
        }
        div {
          span {
            font-size: 1rem;
            img {
              display: none;
            }
          }

          .illustration {
            height: 40px;
            position: absolute;
            bottom: -1rem;
            right: -1rem;
          }
        }

        .cat5 {
          button {
            margin: auto;
          }
          position: relative;
          .general {
            position: absolute;
            height: 60px;
            width: 60px;
            top: 0;
            left: 0;
            img {
              height: 60px;
              width: 60px;
              transform: translate(-50px, -50px);
            }
          }
        }
      }
    }
  }
`,S0=[{id:1,category:"Linguagens",sobre:"Nesta categoria você encontrará questões de Inglês, Português e Espanhol, descubra seu conhecimento em linguagens e o quão poliglota você é!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"Qual é o antônimo da palavra 'amor'?",options:["Odor","Alegria","Raiva","Tristeza"],answer:"Raiva"},{id:2,category:"Linguagens",sobre:"Nesta categoria você encontrará questões de Inglês, Português e Espanhol, descubra seu conhecimento em linguagens e o quão poliglota você é!",fieldStudy:["Português","Inglês","Espanhol"],language:"en",question:"What is the opposite of the word 'happy'?",options:["Sad","Angry","Tired","Excited"],answer:"Sad"},{id:3,category:"Linguagens",sobre:"Nesta categoria você encontrará questões de Inglês, Português e Espanhol, descubra seu conhecimento em linguagens e o quão poliglota você é!",fieldStudy:["Português","Inglês","Espanhol"],language:"es",question:"¿Cuál es el antónimo de la palabra 'bueno'?",options:["Malo","Feo","Grande","Nuevo"],answer:"Malo"},{id:4,category:"Linguagens",sobre:"Nesta categoria você encontrará questões de Inglês, Português e Espanhol, descubra seu conhecimento em linguagens e o quão poliglota você é!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"Qual é a palavra em português que significa 'tooth' em inglês?",options:["Dente","Cérebro","Olho","Nariz"],answer:"Dente"},{id:5,category:"Linguagens",sobre:"Nesta categoria você encontrará questões de Inglês, Português e Espanhol, descubra seu conhecimento em linguagens e o quão poliglota você é!",fieldStudy:["Português","Inglês","Espanhol"],language:"en",question:"What is the Spanish word for 'book'?",options:["Libro","Perro","Gato","Casa"],answer:"Libro"},{id:6,category:"Linguagens",sobre:"Nesta categoria você encontrará questões de Inglês, Português e Espanhol, descubra seu conhecimento em linguagens e o quão poliglota você é!",fieldStudy:["Português","Inglês","Espanhol"],language:"es",question:"¿Cuál es el significado de la palabra 'gato'?",options:["Perro","Ratón","Pájaro","Gato"],answer:"Gato"},{id:7,category:"Linguagens",sobre:"Nesta categoria você encontrará questões de Inglês, Português e Espanhol, descubra seu conhecimento em linguagens e o quão poliglota você é!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"Qual é a tradução para o inglês da frase 'Eu amo você'?",options:["I love you","I hate you","I miss you","I need you"],answer:"I love you"},{id:8,category:"Linguagens",sobre:"Nesta categoria você encontrará questões de Inglês, Português e Espanhol, descubra seu conhecimento em linguagens e o quão poliglota você é!",fieldStudy:["Português","Inglês","Espanhol"],language:"en",question:"What is the Portuguese word for 'hello'?",options:["Hola","Bonjour","Ciao","Olá"],answer:"Olá"},{id:9,category:"Linguagens",sobre:"Nesta categoria você encontrará questões de Inglês, Português e Espanhol, descubra seu conhecimento em linguagens e o quão poliglota você é!",fieldStudy:["Português","Inglês","Espanhol"],language:"es",question:"¿Cuál es el verbo en la frase 'Yo como una manzana'?",options:["Yo","como","una","manzana"],answer:"como"},{id:10,category:"Linguagens",sobre:"Nesta categoria você encontrará questões de Inglês, Português e Espanhol, descubra seu conhecimento em linguagens e o quão poliglota você é!",fieldStudy:["Português","Inglês","Espanhol"],language:"en",question:"What is the plural of the word 'child'?",options:["Childs","Childrens","Childen","Children"],answer:"Children"},{id:11,category:"Linguagens",sobre:"Nesta categoria você encontrará questões de Inglês, Português e Espanhol, descubra seu conhecimento em linguagens e o quão poliglota você é!",fieldStudy:["Português","Inglês","Espanhol"],language:"en",question:"What is the Portuguese word for 'thank you'?",options:["Obrigado","Gracias","Merci","Thank you"],answer:"Obrigado"},{id:12,category:"Linguagens",sobre:"Nesta categoria você encontrará questões de Inglês, Português e Espanhol, descubra seu conhecimento em linguagens e o quão poliglota você é!",fieldStudy:["Português","Inglês","Espanhol"],language:"es",question:"¿Cuál es el plural de la palabra 'perro'?",options:["Perros","Perroes","Perres","Perós"],answer:"Perros"},{id:13,category:"Linguagens",sobre:"Nesta categoria você encontrará questões de Inglês, Português e Espanhol, descubra seu conhecimento em linguagens e o quão poliglota você é!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"Qual é a tradução para o inglês da palavra 'água'?",options:["Water","Fire","Air","Earth"],answer:"Water"},{id:14,category:"Linguagens",sobre:"Nesta categoria você encontrará questões de Inglês, Português e Espanhol, descubra seu conhecimento em linguagens e o quão poliglota você é!",fieldStudy:["Português","Inglês","Espanhol"],language:"en",question:"What is the Spanish word for 'house'?",options:["Casa","Carro","Bicicleta","Avión"],answer:"Casa"},{id:15,category:"Linguagens",sobre:"Nesta categoria você encontrará questões de Inglês, Português e Espanhol, descubra seu conhecimento em linguagens e o quão poliglota você é!",fieldStudy:["Português","Inglês","Espanhol"],language:"es",question:"¿Cuál es el adjetivo en la frase 'La casa es grande'?",options:["La","casa","es","grande"],answer:"grande"}],k0=[{id:1,category:"Direito",sobre:"Teste seus conhecimentos e desafie seus amigos para ver quem sabe mais sobre leis e jurisprudência!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"O que significa a sigla STF?",options:["Superior Tribunal de Fazenda","Supremo Tribunal Federal","Superintendência de Trânsito e Transportes","Sindicato dos Trabalhadores Ferroviários"],answer:"Supremo Tribunal Federal"},{id:2,category:"Direito",sobre:"Teste seus conhecimentos e desafie seus amigos para ver quem sabe mais sobre leis e jurisprudência!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"Qual é a lei que instituiu o Código de Defesa do Consumidor no Brasil?",options:["Lei nº 8.078/90","Lei nº 9.876/99","Lei nº 10.046/01","Lei nº 11.256/05"],answer:"Lei nº 8.078/90"},{id:3,category:"Direito",sobre:"Teste seus conhecimentos e desafie seus amigos para ver quem sabe mais sobre leis e jurisprudência!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"Qual é a idade mínima para votar no Brasil?",options:["16 anos","17 anos","18 anos","19 anos"],answer:"18 anos"},{id:4,category:"Direito",sobre:"Teste seus conhecimentos e desafie seus amigos para ver quem sabe mais sobre leis e jurisprudência!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"Em que ano foi promulgada a Constituição Federal brasileira?",options:["1987","1988","1989","1990"],answer:"1988"},{id:5,category:"Direito",sobre:"Teste seus conhecimentos e desafie seus amigos para ver quem sabe mais sobre leis e jurisprudência!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"Qual é o número de deputados federais no Brasil?",options:["513","500","520","517"],answer:"513"},{id:6,category:"Direito",sobre:"Teste seus conhecimentos e desafie seus amigos para ver quem sabe mais sobre leis e jurisprudência!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"Qual é o nome da lei que estabelece as diretrizes e bases da educação nacional?",options:["Lei de Diretrizes e Bases da Educação Nacional","Lei de Diretrizes e Normas da Educação Nacional","Lei de Direitos e Bases da Educação Nacional","Lei de Normas e Bases da Educação Nacional"],answer:"Lei de Diretrizes e Bases da Educação Nacional"},{id:7,category:"Direito",sobre:"Teste seus conhecimentos e desafie seus amigos para ver quem sabe mais sobre leis e jurisprudência!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"Qual é o nome da lei que define os crimes de responsabilidade do Presidente da República?",options:["Lei de Impeachment","Lei de Crimes Políticos","Lei de Responsabilidade do Presidente","Lei do Colarinho Branco"],answer:"Lei de Crimes Políticos"},{id:8,category:"Direito",sobre:"Teste seus conhecimentos e desafie seus amigos para ver quem sabe mais sobre leis e jurisprudência!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"Qual é o artigo da Constituição Federal que garante a liberdade de expressão?",options:["Artigo 5º","Artigo 10º","Artigo 15º","Artigo 20º"],answer:"Artigo 5º"},{id:9,category:"Direito",sobre:"Teste seus conhecimentos e desafie seus amigos para ver quem sabe mais sobre leis e jurisprudência!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"Qual é a lei que garante o direito à educação?",options:["Lei de Diretrizes e Bases da Educação","Lei do Bolsa Família","Lei de Incentivo à Cultura","Lei do Estágio"],answer:"Lei de Diretrizes e Bases da Educação"},{id:10,category:"Direito",sobre:"Teste seus conhecimentos e desafie seus amigos para ver quem sabe mais sobre leis e jurisprudência!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"Qual é a lei que estabelece a jornada máxima de trabalho de 8 horas por dia?",options:["Lei do Descanso Semanal Remunerado","Lei do Salário Mínimo","Lei das Férias","Consolidação das Leis do Trabalho (CLT)"],answer:"Consolidação das Leis do Trabalho (CLT)"},{id:11,category:"Direito",sobre:"Teste seus conhecimentos e desafie seus amigos para ver quem sabe mais sobre leis e jurisprudência!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"Qual é a lei que protege o consumidor contra práticas abusivas de empresas?",options:["Lei de Propriedade Industrial","Lei de Proteção à Propriedade Intelectual","Lei de Defesa do Consumidor","Lei de Patentes"],answer:"Lei de Defesa do Consumidor"},{id:12,category:"Direito",sobre:"Teste seus conhecimentos e desafie seus amigos para ver quem sabe mais sobre leis e jurisprudência!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"Qual é a lei que prevê punição para o assédio sexual?",options:["Lei de Proteção à Mulher","Lei de Drogas","Lei de Abuso de Autoridade","Lei do Assédio Sexual"],answer:"Lei de Proteção à Mulher"},{id:13,category:"Direito",sobre:"Teste seus conhecimentos e desafie seus amigos para ver quem sabe mais sobre leis e jurisprudência!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"Qual é a lei que estabelece as regras para o uso de medicamentos?",options:["Lei de Regulação Sanitária","Lei de Controle de Produtos Químicos","Lei de Vigilância Sanitária","Lei de Propriedade Industrial"],answer:"Lei de Regulação Sanitária"},{id:14,category:"Direito",sobre:"Teste seus conhecimentos e desafie seus amigos para ver quem sabe mais sobre leis e jurisprudência!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"Qual é a lei que estabelece as regras para a exploração de petróleo e gás no Brasil?",options:["Lei de Diretrizes e Bases da Educação Nacional","Lei de Diretrizes e Bases da Saúde","Lei de Diretrizes e Bases da Política Energética","Lei de Diretrizes e Bases da Política Agrícola"],answer:"Lei de Diretrizes e Bases da Política Energética"},{id:15,category:"Direito",sobre:"Teste seus conhecimentos e desafie seus amigos para ver quem sabe mais sobre leis e jurisprudência!",fieldStudy:["Português","Inglês","Espanhol"],language:"pt",question:"Qual é a lei que estabelece as regras para a exploração de petróleo e gás no Brasil?",options:["Lei de Diretrizes e Bases da Educação Nacional","Lei de Diretrizes e Bases da Saúde","Lei de Diretrizes e Bases da Política Energética","Lei de Diretrizes e Bases da Política Agrícola"],answer:"Lei de Diretrizes e Bases da Política Energética"}],C0=[{id:1,category:"Matemática",sobre:"Resolva equações e problemas para ver se você é um verdadeiro mestre dos números!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é o valor de x na equação 2x + 3 = 11?",options:["3","4","5","6"],answer:"4"},{id:2,category:"Matemática",sobre:"Resolva equações e problemas para ver se você é um verdadeiro mestre dos números!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é a solução da equação 5x - 7 = 18?",options:["5","6","7","8"],answer:"5"},{id:3,category:"Matemática",sobre:"Resolva equações e problemas para ver se você é um verdadeiro mestre dos números!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é o valor de y na equação 4y + 12 = 28?",options:["4","5","6","7"],answer:"4"},{id:4,category:"Matemática",sobre:"Resolva equações e problemas para ver se você é um verdadeiro mestre dos números!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é a fórmula da área de um triângulo?",options:["base x altura","(base x altura)/2","(base + altura) x 2","(base - altura) x 2"],answer:"(base x altura)/2"},{id:5,category:"Matemática",sobre:"Resolva equações e problemas para ver se você é um verdadeiro mestre dos números!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é a fórmula da circunferência?",options:["2 x raio","raio x raio x pi","2 x raio x pi","raio x pi"],answer:"2 x raio x pi"},{id:6,category:"Matemática",sobre:"Resolva equações e problemas para ver se você é um verdadeiro mestre dos números!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é o nome da figura geométrica que possui 6 lados?",options:["Quadrado","Triângulo","Hexágono","Pentágono"],answer:"Hexágono"},{id:7,category:"Matemática",sobre:"Resolva equações e problemas para ver se você é um verdadeiro mestre dos números!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é o valor do seno de 30 graus?",options:["0.5","0.707","0.866","1"],answer:"0.5"},{id:8,category:"Matemática",sobre:"Resolva equações e problemas para ver se você é um verdadeiro mestre dos números!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é o valor do cosseno de 45 graus?",options:["0.5","0.707","0.866","1"],answer:"0.707"},{id:9,category:"Matemática",sobre:"Resolva equações e problemas para ver se você é um verdadeiro mestre dos números!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é o valor da tangente de 60 graus?",options:["0.5","0.707","0.866","1"],answer:"0.866"},{id:10,category:"Matemática",sobre:"Resolva equações e problemas para ver se você é um verdadeiro mestre dos números!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é a fórmula da função quadrática?",options:["y = ax² + bx + c","y = ax² + bx","y = ax² + c","y = ax²"],answer:"y = ax² + bx + c"},{id:11,category:"Matemática",sobre:"Resolva equações e problemas para ver se você é um verdadeiro mestre dos números!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é a fórmula da função linear?",options:["y = ax² + bx + c","y = ax² + bx","y = ax² + c","y = ax²"],answer:"y = ax² + bx"},{id:12,category:"Matemática",sobre:"Resolva equações e problemas para ver se você é um verdadeiro mestre dos números!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é a fórmula da função exponencial?",options:["y = ax² + bx + c","y = ax² + bx","y = ax² + c","y = ax²"],answer:"y = ax² + c"},{id:13,category:"Matemática",sobre:"Resolva equações e problemas para ver se você é um verdadeiro mestre dos números!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é o resultado da operação 8² - 6²?",options:["28","32","40","44"],answer:"28"},{id:14,category:"Matemática",sobre:"Resolva equações e problemas para ver se você é um verdadeiro mestre dos números!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Quantos lados possui um octógono?",options:["5","6","7","8"],answer:"8"},{id:15,category:"Matemática",sobre:"Resolva equações e problemas para ver se você é um verdadeiro mestre dos números!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é o resultado da operação 2² x 3²?",options:["12","18","24","36"],answer:"36"}],E0=[{id:1,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"O que é um algoritmo?",options:["Um tipo de dado utilizado em programação","Uma linguagem de programação","Um conjunto de instruções ordenadas para resolver um problema","Um método para criar programas visualmente"],answer:"Um conjunto de instruções ordenadas para resolver um problema"},{id:2,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"O que é um laço de repetição (loop) em programação?",options:["Um conjunto de instruções que só são executadas uma vez","Um erro de programação","Um conjunto de instruções que são executadas várias vezes","Um método para ordenar um conjunto de dados"],answer:"Um conjunto de instruções que são executadas várias vezes"},{id:3,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a função do comando 'if' em programação?",options:["Executar uma instrução apenas se uma condição for verdadeira","Executar uma instrução apenas se uma condição for falsa","Executar uma instrução aleatória","Nenhuma das opções anteriores"],answer:"Executar uma instrução apenas se uma condição for verdadeira"},{id:4,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"O que é uma variável em programação?",options:["Um tipo de dado utilizado em programação","Uma linguagem de programação","Um conjunto de instruções ordenadas para resolver um problema","Um espaço na memória do computador para armazenar um valor"],answer:"Um espaço na memória do computador para armazenar um valor"},{id:5,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a função do comando 'for' em programação?",options:["Executar uma instrução apenas se uma condição for verdadeira","Executar uma instrução apenas se uma condição for falsa","Executar um conjunto de instruções várias vezes","Nenhuma das opções anteriores"],answer:"Executar um conjunto de instruções várias vezes"},{id:6,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"O que é um vetor (array) em programação?",options:["Um tipo de dado utilizado em programação","Uma linguagem de programação","Um conjunto de instruções ordenadas para resolver um problema","Uma estrutura de dados que permite armazenar vários valores em uma única variável"],answer:"Uma estrutura de dados que permite armazenar vários valores em uma única variável"},{id:7,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a estrutura de repetição que executa um bloco de código enquanto uma condição for verdadeira?",options:["For","While","Do While","If"],answer:"While"},{id:8,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a estrutura de repetição que executa um bloco de código pelo menos uma vez e depois enquanto uma condição for verdadeira?",options:["For","While","Do While","If"],answer:"Do While"},{id:9,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a estrutura de repetição que executa um bloco de código um número determinado de vezes?",options:["For","While","Do While","If"],answer:"For"},{id:10,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a estrutura de decisão que executa um bloco de código se uma condição for verdadeira?",options:["For","While","Do While","If"],answer:"If"},{id:11,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a estrutura de decisão que executa um bloco de código se uma condição for verdadeira e outro bloco de código se a condição for falsa?",options:["For","While","Do While","If"],answer:"If"},{id:12,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"O que significa a sigla SQL?",options:["Structured Query Language","Simple Query Language","Standard Query Language","System Query Language"],answer:"Structured Query Language"},{id:13,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"O que é uma variável em programação?",options:["Um comando que indica a ordem de execução do programa","Um elemento que armazena um valor na memória","Uma instrução que imprime informações na tela","Um operador que compara dois valores"],answer:"Um elemento que armazena um valor na memória"},{id:14,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a diferença entre uma linguagem de programação compilada e uma interpretada?",options:["A linguagem compilada é mais rápida, mas interpretada é mais fácil de aprender","A linguagem compilada é transformada em código de máquina antes da execução, enquanto a interpretada é executada linha a linha","A linguagem interpretada é transformada em código de máquina antes da execução, enquanto a compilada é executada linha a linha"],answer:"A linguagem compilada é transformada em código de máquina antes da execução, enquanto a interpretada é executada linha a linha"},{id:15,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"O que é uma estrutura de repetição em programação?",options:["Um conjunto de instruções que são executadas apenas uma vez","Um conjunto de instruções que são executadas até que uma condição seja satisfeita","Um conjunto de instruções que são executadas em sequência","Um conjunto de instruções que são executadas em paralelo"],answer:"Um conjunto de instruções que são executadas até que uma condição seja satisfeita"},{id:16,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é o valor de x na equação 2x + 3 = 11?",options:["3","4","5","6"],answer:"4"},{id:17,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a solução da equação 5x - 7 = 18?",options:["5","6","7","8"],answer:"5"},{id:18,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é o valor de y na equação 4y + 12 = 28?",options:["4","5","6","7"],answer:"4"},{id:19,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a fórmula da área de um triângulo?",options:["base x altura","(base x altura)/2","(base + altura) x 2","(base - altura) x 2"],answer:"(base x altura)/2"},{id:20,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a fórmula da circunferência?",options:["2 x raio","raio x raio x pi","2 x raio x pi","raio x pi"],answer:"2 x raio x pi"},{id:21,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é o nome da figura geométrica que possui 6 lados?",options:["Quadrado","Triângulo","Hexágono","Pentágono"],answer:"Hexágono"},{id:22,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é o valor do seno de 30 graus?",options:["0.5","0.707","0.866","1"],answer:"0.5"},{id:23,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é o valor do cosseno de 45 graus?",options:["0.5","0.707","0.866","1"],answer:"0.707"},{id:24,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é o valor da tangente de 60 graus?",options:["0.5","0.707","0.866","1"],answer:"0.866"},{id:25,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a fórmula da função quadrática?",options:["y = ax² + bx + c","y = ax² + bx","y = ax² + c","y = ax²"],answer:"y = ax² + bx + c"},{id:26,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a fórmula da função linear?",options:["y = ax² + bx + c","y = ax² + bx","y = ax² + c","y = ax²"],answer:"y = ax² + bx"},{id:27,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a fórmula da função exponencial?",options:["y = ax² + bx + c","y = ax² + bx","y = ax² + c","y = ax²"],answer:"y = ax² + c"},{id:28,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é o resultado da operação 8² - 6²?",options:["28","32","40","44"],answer:"28"},{id:29,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Direito"],language:"pt",question:"Quantos lados possui um octógono?",options:["5","6","7","8"],answer:"8"},{id:30,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é o resultado da operação 2² x 3²?",options:["12","18","24","36"],answer:"36"},{id:31,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"O que significa a sigla STF?",options:["Superior Tribunal de Fazenda","Supremo Tribunal Federal","Superintendência de Trânsito e Transportes","Sindicato dos Trabalhadores Ferroviários"],answer:"Supremo Tribunal Federal"},{id:32,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a lei que instituiu o Código de Defesa do Consumidor no Brasil?",options:["Lei nº 8.078/90","Lei nº 9.876/99","Lei nº 10.046/01","Lei nº 11.256/05"],answer:"Lei nº 8.078/90"},{id:33,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a idade mínima para votar no Brasil?",options:["16 anos","17 anos","18 anos","19 anos"],answer:"18 anos"},{id:34,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Em que ano foi promulgada a Constituição Federal brasileira?",options:["1987","1988","1989","1990"],answer:"1988"},{id:35,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é o número de deputados federais no Brasil?",options:["513","513","513","513"],answer:"513"},{id:36,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é o nome da lei que estabelece as diretrizes e bases da educação nacional?",options:["Lei de Diretrizes e Bases da Educação Nacional","Lei de Diretrizes e Normas da Educação Nacional","Lei de Logica de direitos e Bases da Educação Nacional","Lei de Normas e Bases da Educação Nacional"],answer:"Lei de Diretrizes e Bases da Educação Nacional"},{id:37,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é o nome da lei que define os crimes de responsabilidade do Presidente da República?",options:["Lei de Impeachment","Lei de Crimes Políticos","Lei de Responsabilidade do Presidente","Lei do Colarinho Branco"],answer:"Lei de Crimes Políticos"},{id:38,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é o artigo da Constituição Federal que garante a liberdade de expressão?",options:["Artigo 5º","Artigo 10º","Artigo 15º","Artigo 20º"],answer:"Artigo 5º"},{id:39,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a lei que garante o direito à educação?",options:["Lei de Diretrizes e Bases da Educação","Lei do Bolsa Família","Lei de Incentivo à Cultura","Lei do Estágio"],answer:"Lei de Diretrizes e Bases da Educação"},{id:40,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a lei que estabelece a jornada máxima de trabalho de 8 horas por dia?",options:["Lei do Descanso Semanal Remunerado","Lei do Salário Mínimo","Lei das Férias","Consolidação das Leis do Trabalho (CLT)"],answer:"Consolidação das Leis do Trabalho (CLT)"},{id:41,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a lei que protege o consumidor contra práticas abusivas de empresas?",options:["Lei de Propriedade Industrial","Lei de Proteção à Propriedade Intelectual","Lei de Defesa do Consumidor","Lei de Patentes"],answer:"Lei de Defesa do Consumidor"},{id:42,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a lei que prevê punição para o assédio sexual?",options:["Lei de Proteção à Mulher","Lei de Drogas","Lei de Abuso de Autoridade","Lei do Assédio Sexual"],answer:"Lei de Proteção à Mulher"},{id:43,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a lei que estabelece as regras para o uso de medicamentos?",options:["Lei de Regulação Sanitária","Lei de Controle de Produtos Químicos","Lei de Vigilância Sanitária","Lei de Propriedade Industrial"],answer:"Lei de Regulação Sanitária"},{id:44,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a lei que estabelece as regras para a exploração de petróleo e gás no Brasil?",options:["Lei de Diretrizes e Bases da Educação Nacional","Lei de Diretrizes e Bases da Saúde","Lei de Diretrizes e Bases da Política Energética","Lei de Diretrizes e Bases da Política Agrícola"],answer:"Lei de Diretrizes e Bases da Política Energética"},{id:45,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a lei que estabelece as regras para a exploração de petróleo e gás no Brasil?",options:["Lei de Diretrizes e Bases da Educação Nacional","Lei de Diretrizes e Bases da Saúde","Lei de Diretrizes e Bases da Política Energética","Lei de Diretrizes e Bases da Política Agrícola"],answer:"Lei de Diretrizes e Bases da Política Energética"},{id:46,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é o antônimo da palavra 'amor'?",options:["Odor","Alegria","Raiva","Tristeza"],answer:"Raiva"},{id:47,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"en",question:"What is the opposite of the word 'happy'?",options:["Sad","Angry","Tired","Excited"],answer:"Sad"},{id:48,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"es",question:"¿Cuál es el antónimo de la palabra 'bueno'?",options:["Malo","Feo","Grande","Nuevo"],answer:"Malo"},{id:49,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a palavra em português que significa 'tooth' em inglês?",options:["Dente","Cérebro","Olho","Nariz"],answer:"Dente"},{id:50,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"en",question:"What is the Spanish word for 'book'?",options:["Libro","Perro","Gato","Casa"],answer:"Libro"},{id:51,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"es",question:"¿Cuál es el significado de la palabra 'gato'?",options:["Perro","Ratón","Pájaro","Gato"],answer:"Gato"},{id:52,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a tradução para o inglês da frase 'Eu amo você'?",options:["I love you","I hate you","I miss you","I need you"],answer:"I love you"},{id:53,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"en",question:"What is the Portuguese word for 'hello'?",options:["Hola","Bonjour","Ciao","Olá"],answer:"Olá"},{id:54,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"es",question:"¿Cuál es el verbo en la frase 'Yo como una manzana'?",options:["Yo","como","una","manzana"],answer:"como"},{id:55,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"en",question:"What is the plural of the word 'child'?",options:["Childs","Childrens","Childen","Children"],answer:"Children"},{id:56,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"en",question:"What is the Portuguese word for 'thank you'?",options:["Obrigado","Gracias","Merci","Thank you"],answer:"Obrigado"},{id:57,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"es",question:"¿Cuál es el plural de la palabra 'perro'?",options:["Perros","Perroes","Perres","Perós"],answer:"Perros"},{id:58,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"pt",question:"Qual é a tradução para o inglês da palavra 'água'?",options:["Water","Fire","Air","Earth"],answer:"Water"},{id:59,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"en",question:"What is the Spanish word for 'house'?",options:["Casa","Carro","Bicicleta","Avión"],answer:"Casa"},{id:60,category:"Conhecimento Geral",sobre:"Descubra o quão poliglota, gênio dos números e programador você é!",fieldStudy:["Linguagem","Matemática","Logica de programação"],language:"es",question:"¿Cuál es el adjetivo en la frase 'La casa es grande'?",options:["La","casa","es","grande"],answer:"grande"}],xn={Linguagens:S0,Leis:k0,Matematica:C0,Programação:[{id:1,category:"Programação",sobre:"Descubra o quanto você sabe sobre linguagens de programação, lógica e muito mais!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"O que é um algoritmo?",options:["Um tipo de dado utilizado em programação","Uma linguagem de programação","Um conjunto de instruções ordenadas para resolver um problema","Um método para criar programas visualmente"],answer:"Um conjunto de instruções ordenadas para resolver um problema"},{id:2,category:"Lógica de Programação",sobre:"Descubra o quanto você sabe sobre linguagens de programação, lógica e muito mais!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"O que é um laço de repetição (loop) em programação?",options:["Um conjunto de instruções que só são executadas uma vez","Um erro de programação","Um conjunto de instruções que são executadas várias vezes","Um método para ordenar um conjunto de dados"],answer:"Um conjunto de instruções que são executadas várias vezes"},{id:3,category:"Programação",sobre:"Descubra o quanto você sabe sobre linguagens de programação, lógica e muito mais!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é a função do comando 'if' em programação?",options:["Executar uma instrução apenas se uma condição for verdadeira","Executar uma instrução apenas se uma condição for falsa","Executar uma instrução aleatória","Nenhuma das opções anteriores"],answer:"Executar uma instrução apenas se uma condição for verdadeira"},{id:4,category:"Programação",sobre:"Descubra o quanto você sabe sobre linguagens de programação, lógica e muito mais!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"O que é uma variável em programação?",options:["Um tipo de dado utilizado em programação","Uma linguagem de programação","Um conjunto de instruções ordenadas para resolver um problema","Um espaço na memória do computador para armazenar um valor"],answer:"Um espaço na memória do computador para armazenar um valor"},{id:5,category:"Programação",sobre:"Descubra o quanto você sabe sobre linguagens de programação, lógica e muito mais!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é a função do comando 'for' em programação?",options:["Executar uma instrução apenas se uma condição for verdadeira","Executar uma instrução apenas se uma condição for falsa","Executar um conjunto de instruções várias vezes","Nenhuma das opções anteriores"],answer:"Executar um conjunto de instruções várias vezes"},{id:6,category:"Programação",sobre:"Descubra o quanto você sabe sobre linguagens de programação, lógica e muito mais!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"O que é um vetor (array) em programação?",options:["Um tipo de dado utilizado em programação","Uma linguagem de programação","Um conjunto de instruções ordenadas para resolver um problema","Uma estrutura de dados que permite armazenar vários valores em uma única variável"],answer:"Uma estrutura de dados que permite armazenar vários valores em uma única variável"},{id:7,category:"Programação",sobre:"Descubra o quanto você sabe sobre linguagens de programação, lógica e muito mais!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é a estrutura de repetição que executa um bloco de código enquanto uma condição for verdadeira?",options:["For","While","Do While","If"],answer:"While"},{id:8,category:"Programação",sobre:"Descubra o quanto você sabe sobre linguagens de programação, lógica e muito mais!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é a estrutura de repetição que executa um bloco de código pelo menos uma vez e depois enquanto uma condição for verdadeira?",options:["For","While","Do While","If"],answer:"Do While"},{id:9,category:"Programação",sobre:"Descubra o quanto você sabe sobre linguagens de programação, lógica e muito mais!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é a estrutura de repetição que executa um bloco de código um número determinado de vezes?",options:["For","While","Do While","If"],answer:"For"},{id:10,category:"Programação",sobre:"Descubra o quanto você sabe sobre linguagens de programação, lógica e muito mais!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é a estrutura de decisão que executa um bloco de código se uma condição for verdadeira?",options:["For","While","Do While","If"],answer:"If"},{id:11,category:"Programação",sobre:"Descubra o quanto você sabe sobre linguagens de programação, lógica e muito mais!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é a estrutura de decisão que executa um bloco de código se uma condição for verdadeira e outro bloco de código se a condição for falsa?",options:["For","While","Do While","If"],answer:"If"},{id:12,category:"Programação",sobre:"Descubra o quanto você sabe sobre linguagens de programação, lógica e muito mais!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"O que significa a sigla SQL?",options:["Structured Query Language","Simple Query Language","Standard Query Language","System Query Language"],answer:"Structured Query Language"},{id:13,category:"Programação",sobre:"Descubra o quanto você sabe sobre linguagens de programação, lógica e muito mais!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"O que é uma variável em programação?",options:["Um comando que indica a ordem de execução do programa","Um elemento que armazena um valor na memória","Uma instrução que imprime informações na tela","Um operador que compara dois valores"],answer:"Um elemento que armazena um valor na memória"},{id:14,category:"Programação",sobre:"Descubra o quanto você sabe sobre linguagens de programação, lógica e muito mais!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"Qual é a diferença entre uma linguagem de programação compilada e uma interpretada?",options:["A linguagem compilada é mais rápida, mas a interpretada é mais fácil de aprender","A linguagem interpretada é mais rápida, mas a compilada é mais fácil de aprender","A linguagem compilada é transformada em código de máquina antes da execução, enquanto a interpretada é executada linha a linha","A linguagem interpretada é transformada em código de máquina antes da execução, enquanto a compilada é executada linha a linha"],answer:"A linguagem compilada é transformada em código de máquina antes da execução, enquanto a interpretada é executada linha a linha"},{id:15,category:"Programação",sobre:"Descubra o quanto você sabe sobre linguagens de programação, lógica e muito mais!",fieldStudy:["Algebra","Função","Geometria"],language:"pt",question:"O que é uma estrutura de repetição em programação?",options:["Um conjunto de instruções que são executadas apenas uma vez","Um conjunto de instruções que são executadas até que uma condição seja satisfeita","Um conjunto de instruções que são executadas em sequência","Um conjunto de instruções que são executadas em paralelo"],answer:"Um conjunto de instruções que são executadas até que uma condição seja satisfeita"}],Geral:E0},kc="/assets/cat-arrow-1-613f57e8.svg",Cc="/assets/cat-arrow-2-1a81d3eb.svg",L0="/assets/languages-illustration-f05769f0.svg",P0=()=>{const{categorySelected:e,setCategorySelected:t}=C.useContext(Xr),{userData:n,setUserData:r}=C.useContext(Ur.userName!==""?Ur:{userName:localStorage.getItem("userName")}),o=Yr(),a=i=>{try{for(let u=xn[i].length-1;u>0;u--){const p=Math.floor(Math.random()*(u+1));[xn[i][u],xn[i][p]]=[xn[i][p],xn[i][u]]}const s=xn[i].slice(0,10);t(s)}catch(l){console.log(l)}finally{o("/select-knowledge")}};return x(x0,{children:T("section",{className:"home__container",children:[x("div",{className:"square type-1"}),x("div",{className:"square type-2"}),x("div",{className:"square type-3"}),x("div",{className:"square type-4"}),T("header",{className:"heading",children:[x("img",{className:"heading__logo",src:Al,alt:"Logo do LearniFy"}),T("h1",{className:"home__title",children:["Olá, ",n.userName]}),x("h2",{className:"home__subtitle",children:"Vamos testar os seus conhecimentos?"})]}),T("div",{className:"categories__grid",children:[T("div",{className:"cat1",onClick:()=>a("Linguagens"),children:[T("span",{children:["Linguagens ",x("img",{src:kc})]}),x("img",{className:"illustration",src:L0,alt:"Ilustração de linguagens"})]}),T("div",{className:"cat2",onClick:()=>a("Matematica"),children:[T("span",{children:["Matemática ",x("img",{src:Cc})]}),x("img",{className:"illustration",src:op,alt:"Ilustração de matemática"})]}),T("div",{className:"cat3",onClick:()=>a("Leis"),children:[T("span",{children:["Direito ",x("img",{src:Cc})]}),x("img",{className:"illustration",src:ap,alt:"Ilustração de direito"})]}),T("div",{className:"cat4",onClick:()=>a("Programação"),children:[T("span",{children:["Programação ",x("img",{src:kc})]}),x("img",{className:"illustration",src:ip,alt:"Ilustração de programação"})]}),T("div",{className:"cat5",onClick:()=>a("Geral"),children:[x("div",{className:"general",children:x("img",{src:lp,alt:"Ilustração de geral"})}),x("span",{className:"title",children:"Conhecimento geral"}),x("span",{className:"subtitle",children:"Todas as categorias no teste para desafiar você"}),x(da,{children:"Iniciar teste"})]})]})]})})},_0=B.main`
width: 100%;
height: 100vh;
background-color: var(--yellow-color);
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: column;

`,N0=B.section`
width: 100%;
height: 75%;
background-color: var(--light-color);
display: flex;
flex-direction: column;
align-items: center;
border-radius: 40px 40px 0px 0px;
    padding:40px 40px 0px 40px;
    justify-content: center;
    @media (max-width: 768px) {
height: 90%;

}
`,z0=B.article`
width: 100%;
height: 100%;
justify-content: flex-end;
align-items: center;
display: flex;
flex-direction: row;
padding: 4% 0%;
`,b0=B.h4`
font-family: var(--font-titles);

font-weight: 700;
font-size: 20px;
line-height: 24px;
color: ${e=>e.topButton?"#C6C6C6":"#323232"};
cursor: pointer;
`,Ec=B.img`
width: 24px;
height: 24px;
`,q0=B.input`
width: 100%;
&[type="range"]{
    background: #C4C2C2;
    height: 16px;
    width: 100%;
    border-radius: 10px;
}
&[type="range"]::-webkit-slider-thumb {
-webkit-appearance: none;
background: #323232;
border-radius: 10px;
height: 16px;
max-width: 100%;
width: ${e=>`${e.ProgressValue}%`};
transition: 0.5s ease-in-out;

}
`,D0="/assets/arrow-right-disable-44d20a95.svg",I0="/assets/arrow-right-enable-4f270943.svg",R0=B.article`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
flex-direction: column;
gap: 10px;

`,T0=B.h4`
font-family: var(--font-titles);
width: 50%;
font-style: normal;
font-weight: 700;
font-size: 27px;
line-height: 34px;
display: flex;
align-items: center;
text-align: center;
padding-bottom: 20px;
color: var(--dark-color);
@media (max-width: 768px) {
    width: 100%;
}
`,A0=B.article`
display: flex;
flex-direction: row;
width: 100%;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 21px;
`,$0=B.article`
display: flex;
flex-direction: row;
width: 100%;
justify-content: center;
align-items: center;
flex-wrap: wrap;
gap: 21px;

`,M0=B.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;
gap: 10px;

width: 50px;
height: 54px;

background: #FFFA69;
font-style: normal;
font-weight: 700;
font-size: 28px;
font-family: var(--font-titles);
color: var(--dark-color);
`,wo=B.button`
width: 358px;
height: 81px;
display: flex;
flex-direction: row;
justify-content: flex-start;
align-items: center;
gap: 50px;
background: #FFFFFF;
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.07);
border-bottom:${e=>e.topButton&&"8px solid #FFFA69"};
transition: 0.2s ease-in-out;
`,xo=B.h4`
font-family: var(--font-titles);
font-weight: 700;
font-size: 34px;
color: var(--dark-color);
margin-left: 18px;
`,So=B.p`
font-family: var(--font-texts);
font-weight: 400;
font-size: 17px;
color: var(--dark-color);
`,j0=({clickQuestionIsTrue:e,QuestionId:t,handleAnswer:n})=>{const[r,o]=C.useState(t),[a,i]=C.useState(!1),[l,s]=C.useState(),{categorySelected:u}=C.useContext(Xr);return C.useEffect(()=>{const p={questionId:u[r].id,correctAnswer:u[r].answer,answer:u[r].options[l]};n(p)},[l]),C.useEffect(()=>{o(t),i(l!==null)},[t,l]),C.useEffect(()=>{s(null),e(!1)},[t]),C.useEffect(()=>{e(a)},[a]),T(R0,{children:[x(M0,{children:(r+1).toString().padStart(2,"0")}),x(T0,{children:u[r].question}),T(A0,{children:[T(wo,{topButton:l===0,onClick:()=>s(0),children:[x(xo,{children:"A"}),x(So,{children:u[r].options[0]})]}),T(wo,{topButton:l===1,onClick:()=>s(1),children:[x(xo,{children:"B"}),x(So,{children:u[r].options[1]})]})]}),T($0,{children:[T(wo,{topButton:l===2,onClick:()=>s(2),children:[x(xo,{children:"C"}),x(So,{children:u[r].options[2]})]}),T(wo,{topButton:l===3,onClick:()=>s(3),children:[x(xo,{children:"D"}),x(So,{children:u[r].options[3]})]})]})]})};let bi=0;const F0=()=>{const{validateAnswer:e,questions:t}=C.useContext(Ws),[n,r]=C.useState({}),[o,a]=C.useState(),[i,l]=C.useState(10),s=Yr(),u=g=>{r(g)},p=g=>{a(!g)},m=()=>{o||(e(n),l(i+10),bi=bi+1)};return C.useEffect(()=>{t.length===10&&s("/results")},[t.length]),x(_0,{children:T(N0,{children:[x(j0,{QuestionId:bi,handleAnswer:u,clickQuestionIsTrue:p}),T(z0,{children:[x(b0,{onClick:m,topButton:o,children:"Próxima"}),o?x(Ec,{src:D0}):x(Ec,{src:I0})]}),x(q0,{type:"range",min:"0",max:"100",defaultValue:"0",ProgressValue:i})]})})};function O0(){return T(Dh,{children:[x(qv,{}),T(qh,{children:[x(Sn,{path:"/",element:x(Bv,{})}),x(Sn,{path:"/home",element:x(P0,{})}),x(Sn,{path:"/select-knowledge",element:x(c0,{})}),x(Sn,{path:"/questions",element:x(F0,{})}),x(Sn,{path:"/results",element:x(w0,{})})]})]})}Di.createRoot(document.getElementById("root")).render(x(gn.StrictMode,{children:x(Uv,{children:x(Qv,{children:x(f0,{children:x(O0,{})})})})}));
