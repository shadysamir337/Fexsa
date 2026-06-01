(function(){const k=document.createElement("link").relList;if(k&&k.supports&&k.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))D(C);new MutationObserver(C=>{for(const M of C)if(M.type==="childList")for(const G of M.addedNodes)G.tagName==="LINK"&&G.rel==="modulepreload"&&D(G)}).observe(document,{childList:!0,subtree:!0});function m(C){const M={};return C.integrity&&(M.integrity=C.integrity),C.referrerPolicy&&(M.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?M.credentials="include":C.crossOrigin==="anonymous"?M.credentials="omit":M.credentials="same-origin",M}function D(C){if(C.ep)return;C.ep=!0;const M=m(C);fetch(C.href,M)}})();function Ou(c){return c&&c.__esModule&&Object.prototype.hasOwnProperty.call(c,"default")?c.default:c}var jo={exports:{}},xr={},_o={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pu;function Wd(){if(Pu)return W;Pu=1;var c=Symbol.for("react.element"),k=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),M=Symbol.for("react.provider"),G=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),H=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),A=Symbol.iterator;function $(f){return f===null||typeof f!="object"?null:(f=A&&f[A]||f["@@iterator"],typeof f=="function"?f:null)}var me={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},qe=Object.assign,le={};function b(f,y,V){this.props=f,this.context=y,this.refs=le,this.updater=V||me}b.prototype.isReactComponent={},b.prototype.setState=function(f,y){if(typeof f!="object"&&typeof f!="function"&&f!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,f,y,"setState")},b.prototype.forceUpdate=function(f){this.updater.enqueueForceUpdate(this,f,"forceUpdate")};function yt(){}yt.prototype=b.prototype;function ct(f,y,V){this.props=f,this.context=y,this.refs=le,this.updater=V||me}var et=ct.prototype=new yt;et.constructor=ct,qe(et,b.prototype),et.isPureReactComponent=!0;var Ee=Array.isArray,tt=Object.prototype.hasOwnProperty,Pe={current:null},Re={key:!0,ref:!0,__self:!0,__source:!0};function Ke(f,y,V){var Q,K={},X=null,ee=null;if(y!=null)for(Q in y.ref!==void 0&&(ee=y.ref),y.key!==void 0&&(X=""+y.key),y)tt.call(y,Q)&&!Re.hasOwnProperty(Q)&&(K[Q]=y[Q]);var Z=arguments.length-2;if(Z===1)K.children=V;else if(1<Z){for(var ie=Array(Z),Ve=0;Ve<Z;Ve++)ie[Ve]=arguments[Ve+2];K.children=ie}if(f&&f.defaultProps)for(Q in Z=f.defaultProps,Z)K[Q]===void 0&&(K[Q]=Z[Q]);return{$$typeof:c,type:f,key:X,ref:ee,props:K,_owner:Pe.current}}function Pt(f,y){return{$$typeof:c,type:f.type,key:y,ref:f.ref,props:f.props,_owner:f._owner}}function xt(f){return typeof f=="object"&&f!==null&&f.$$typeof===c}function Xt(f){var y={"=":"=0",":":"=2"};return"$"+f.replace(/[=:]/g,function(V){return y[V]})}var dt=/\/+/g;function Ue(f,y){return typeof f=="object"&&f!==null&&f.key!=null?Xt(""+f.key):y.toString(36)}function nt(f,y,V,Q,K){var X=typeof f;(X==="undefined"||X==="boolean")&&(f=null);var ee=!1;if(f===null)ee=!0;else switch(X){case"string":case"number":ee=!0;break;case"object":switch(f.$$typeof){case c:case k:ee=!0}}if(ee)return ee=f,K=K(ee),f=Q===""?"."+Ue(ee,0):Q,Ee(K)?(V="",f!=null&&(V=f.replace(dt,"$&/")+"/"),nt(K,y,V,"",function(Ve){return Ve})):K!=null&&(xt(K)&&(K=Pt(K,V+(!K.key||ee&&ee.key===K.key?"":(""+K.key).replace(dt,"$&/")+"/")+f)),y.push(K)),1;if(ee=0,Q=Q===""?".":Q+":",Ee(f))for(var Z=0;Z<f.length;Z++){X=f[Z];var ie=Q+Ue(X,Z);ee+=nt(X,y,V,ie,K)}else if(ie=$(f),typeof ie=="function")for(f=ie.call(f),Z=0;!(X=f.next()).done;)X=X.value,ie=Q+Ue(X,Z++),ee+=nt(X,y,V,ie,K);else if(X==="object")throw y=String(f),Error("Objects are not valid as a React child (found: "+(y==="[object Object]"?"object with keys {"+Object.keys(f).join(", ")+"}":y)+"). If you meant to render a collection of children, use an array instead.");return ee}function ft(f,y,V){if(f==null)return f;var Q=[],K=0;return nt(f,Q,"","",function(X){return y.call(V,X,K++)}),Q}function Ie(f){if(f._status===-1){var y=f._result;y=y(),y.then(function(V){(f._status===0||f._status===-1)&&(f._status=1,f._result=V)},function(V){(f._status===0||f._status===-1)&&(f._status=2,f._result=V)}),f._status===-1&&(f._status=0,f._result=y)}if(f._status===1)return f._result.default;throw f._result}var ue={current:null},E={transition:null},F={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:E,ReactCurrentOwner:Pe};function _(){throw Error("act(...) is not supported in production builds of React.")}return W.Children={map:ft,forEach:function(f,y,V){ft(f,function(){y.apply(this,arguments)},V)},count:function(f){var y=0;return ft(f,function(){y++}),y},toArray:function(f){return ft(f,function(y){return y})||[]},only:function(f){if(!xt(f))throw Error("React.Children.only expected to receive a single React element child.");return f}},W.Component=b,W.Fragment=m,W.Profiler=C,W.PureComponent=ct,W.StrictMode=D,W.Suspense=L,W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,W.act=_,W.cloneElement=function(f,y,V){if(f==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+f+".");var Q=qe({},f.props),K=f.key,X=f.ref,ee=f._owner;if(y!=null){if(y.ref!==void 0&&(X=y.ref,ee=Pe.current),y.key!==void 0&&(K=""+y.key),f.type&&f.type.defaultProps)var Z=f.type.defaultProps;for(ie in y)tt.call(y,ie)&&!Re.hasOwnProperty(ie)&&(Q[ie]=y[ie]===void 0&&Z!==void 0?Z[ie]:y[ie])}var ie=arguments.length-2;if(ie===1)Q.children=V;else if(1<ie){Z=Array(ie);for(var Ve=0;Ve<ie;Ve++)Z[Ve]=arguments[Ve+2];Q.children=Z}return{$$typeof:c,type:f.type,key:K,ref:X,props:Q,_owner:ee}},W.createContext=function(f){return f={$$typeof:G,_currentValue:f,_currentValue2:f,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},f.Provider={$$typeof:M,_context:f},f.Consumer=f},W.createElement=Ke,W.createFactory=function(f){var y=Ke.bind(null,f);return y.type=f,y},W.createRef=function(){return{current:null}},W.forwardRef=function(f){return{$$typeof:U,render:f}},W.isValidElement=xt,W.lazy=function(f){return{$$typeof:B,_payload:{_status:-1,_result:f},_init:Ie}},W.memo=function(f,y){return{$$typeof:H,type:f,compare:y===void 0?null:y}},W.startTransition=function(f){var y=E.transition;E.transition={};try{f()}finally{E.transition=y}},W.unstable_act=_,W.useCallback=function(f,y){return ue.current.useCallback(f,y)},W.useContext=function(f){return ue.current.useContext(f)},W.useDebugValue=function(){},W.useDeferredValue=function(f){return ue.current.useDeferredValue(f)},W.useEffect=function(f,y){return ue.current.useEffect(f,y)},W.useId=function(){return ue.current.useId()},W.useImperativeHandle=function(f,y,V){return ue.current.useImperativeHandle(f,y,V)},W.useInsertionEffect=function(f,y){return ue.current.useInsertionEffect(f,y)},W.useLayoutEffect=function(f,y){return ue.current.useLayoutEffect(f,y)},W.useMemo=function(f,y){return ue.current.useMemo(f,y)},W.useReducer=function(f,y,V){return ue.current.useReducer(f,y,V)},W.useRef=function(f){return ue.current.useRef(f)},W.useState=function(f){return ue.current.useState(f)},W.useSyncExternalStore=function(f,y,V){return ue.current.useSyncExternalStore(f,y,V)},W.useTransition=function(){return ue.current.useTransition()},W.version="18.3.1",W}var zu;function Lo(){return zu||(zu=1,_o.exports=Wd()),_o.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tu;function Qd(){if(Tu)return xr;Tu=1;var c=Lo(),k=Symbol.for("react.element"),m=Symbol.for("react.fragment"),D=Object.prototype.hasOwnProperty,C=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,M={key:!0,ref:!0,__self:!0,__source:!0};function G(U,L,H){var B,A={},$=null,me=null;H!==void 0&&($=""+H),L.key!==void 0&&($=""+L.key),L.ref!==void 0&&(me=L.ref);for(B in L)D.call(L,B)&&!M.hasOwnProperty(B)&&(A[B]=L[B]);if(U&&U.defaultProps)for(B in L=U.defaultProps,L)A[B]===void 0&&(A[B]=L[B]);return{$$typeof:k,type:U,key:$,ref:me,props:A,_owner:C.current}}return xr.Fragment=m,xr.jsx=G,xr.jsxs=G,xr}var Lu;function Hd(){return Lu||(Lu=1,jo.exports=Qd()),jo.exports}var u=Hd(),Le=Lo();const $d=Ou(Le);var Ll={},Po={exports:{}},Be={},zo={exports:{}},To={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ru;function qd(){return Ru||(Ru=1,(function(c){function k(E,F){var _=E.length;E.push(F);e:for(;0<_;){var f=_-1>>>1,y=E[f];if(0<C(y,F))E[f]=F,E[_]=y,_=f;else break e}}function m(E){return E.length===0?null:E[0]}function D(E){if(E.length===0)return null;var F=E[0],_=E.pop();if(_!==F){E[0]=_;e:for(var f=0,y=E.length,V=y>>>1;f<V;){var Q=2*(f+1)-1,K=E[Q],X=Q+1,ee=E[X];if(0>C(K,_))X<y&&0>C(ee,K)?(E[f]=ee,E[X]=_,f=X):(E[f]=K,E[Q]=_,f=Q);else if(X<y&&0>C(ee,_))E[f]=ee,E[X]=_,f=X;else break e}}return F}function C(E,F){var _=E.sortIndex-F.sortIndex;return _!==0?_:E.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var M=performance;c.unstable_now=function(){return M.now()}}else{var G=Date,U=G.now();c.unstable_now=function(){return G.now()-U}}var L=[],H=[],B=1,A=null,$=3,me=!1,qe=!1,le=!1,b=typeof setTimeout=="function"?setTimeout:null,yt=typeof clearTimeout=="function"?clearTimeout:null,ct=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function et(E){for(var F=m(H);F!==null;){if(F.callback===null)D(H);else if(F.startTime<=E)D(H),F.sortIndex=F.expirationTime,k(L,F);else break;F=m(H)}}function Ee(E){if(le=!1,et(E),!qe)if(m(L)!==null)qe=!0,Ie(tt);else{var F=m(H);F!==null&&ue(Ee,F.startTime-E)}}function tt(E,F){qe=!1,le&&(le=!1,yt(Ke),Ke=-1),me=!0;var _=$;try{for(et(F),A=m(L);A!==null&&(!(A.expirationTime>F)||E&&!Xt());){var f=A.callback;if(typeof f=="function"){A.callback=null,$=A.priorityLevel;var y=f(A.expirationTime<=F);F=c.unstable_now(),typeof y=="function"?A.callback=y:A===m(L)&&D(L),et(F)}else D(L);A=m(L)}if(A!==null)var V=!0;else{var Q=m(H);Q!==null&&ue(Ee,Q.startTime-F),V=!1}return V}finally{A=null,$=_,me=!1}}var Pe=!1,Re=null,Ke=-1,Pt=5,xt=-1;function Xt(){return!(c.unstable_now()-xt<Pt)}function dt(){if(Re!==null){var E=c.unstable_now();xt=E;var F=!0;try{F=Re(!0,E)}finally{F?Ue():(Pe=!1,Re=null)}}else Pe=!1}var Ue;if(typeof ct=="function")Ue=function(){ct(dt)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ft=nt.port2;nt.port1.onmessage=dt,Ue=function(){ft.postMessage(null)}}else Ue=function(){b(dt,0)};function Ie(E){Re=E,Pe||(Pe=!0,Ue())}function ue(E,F){Ke=b(function(){E(c.unstable_now())},F)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(E){E.callback=null},c.unstable_continueExecution=function(){qe||me||(qe=!0,Ie(tt))},c.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Pt=0<E?Math.floor(1e3/E):5},c.unstable_getCurrentPriorityLevel=function(){return $},c.unstable_getFirstCallbackNode=function(){return m(L)},c.unstable_next=function(E){switch($){case 1:case 2:case 3:var F=3;break;default:F=$}var _=$;$=F;try{return E()}finally{$=_}},c.unstable_pauseExecution=function(){},c.unstable_requestPaint=function(){},c.unstable_runWithPriority=function(E,F){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var _=$;$=E;try{return F()}finally{$=_}},c.unstable_scheduleCallback=function(E,F,_){var f=c.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?f+_:f):_=f,E){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=_+y,E={id:B++,callback:F,priorityLevel:E,startTime:_,expirationTime:y,sortIndex:-1},_>f?(E.sortIndex=_,k(H,E),m(L)===null&&E===m(H)&&(le?(yt(Ke),Ke=-1):le=!0,ue(Ee,_-f))):(E.sortIndex=y,k(L,E),qe||me||(qe=!0,Ie(tt))),E},c.unstable_shouldYield=Xt,c.unstable_wrapCallback=function(E){var F=$;return function(){var _=$;$=F;try{return E.apply(this,arguments)}finally{$=_}}}})(To)),To}var Iu;function Kd(){return Iu||(Iu=1,zo.exports=qd()),zo.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fu;function Xd(){if(Fu)return Be;Fu=1;var c=Lo(),k=Kd();function m(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var D=new Set,C={};function M(e,t){G(e,t),G(e+"Capture",t)}function G(e,t){for(C[e]=t,e=0;e<t.length;e++)D.add(t[e])}var U=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),L=Object.prototype.hasOwnProperty,H=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,B={},A={};function $(e){return L.call(A,e)?!0:L.call(B,e)?!1:H.test(e)?A[e]=!0:(B[e]=!0,!1)}function me(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qe(e,t,n,r){if(t===null||typeof t>"u"||me(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function le(e,t,n,r,l,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var b={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){b[e]=new le(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];b[t]=new le(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){b[e]=new le(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){b[e]=new le(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){b[e]=new le(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){b[e]=new le(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){b[e]=new le(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){b[e]=new le(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){b[e]=new le(e,5,!1,e.toLowerCase(),null,!1,!1)});var yt=/[\-:]([a-z])/g;function ct(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(yt,ct);b[t]=new le(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(yt,ct);b[t]=new le(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(yt,ct);b[t]=new le(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){b[e]=new le(e,1,!1,e.toLowerCase(),null,!1,!1)}),b.xlinkHref=new le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){b[e]=new le(e,1,!1,e.toLowerCase(),null,!0,!0)});function et(e,t,n,r){var l=b.hasOwnProperty(t)?b[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qe(t,n,l,r)&&(n=null),r||l===null?$(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ee=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tt=Symbol.for("react.element"),Pe=Symbol.for("react.portal"),Re=Symbol.for("react.fragment"),Ke=Symbol.for("react.strict_mode"),Pt=Symbol.for("react.profiler"),xt=Symbol.for("react.provider"),Xt=Symbol.for("react.context"),dt=Symbol.for("react.forward_ref"),Ue=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),Ie=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),E=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=E&&e[E]||e["@@iterator"],typeof e=="function"?e:null)}var _=Object.assign,f;function y(e){if(f===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);f=t&&t[1]||""}return`
`+f+e}var V=!1;function Q(e,t){if(!e||V)return"";V=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(g){var r=g}Reflect.construct(e,[],t)}else{try{t.call()}catch(g){r=g}e.call(t.prototype)}else{try{throw Error()}catch(g){r=g}e()}}catch(g){if(g&&r&&typeof g.stack=="string"){for(var l=g.stack.split(`
`),i=r.stack.split(`
`),o=l.length-1,s=i.length-1;1<=o&&0<=s&&l[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(l[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||l[o]!==i[s]){var a=`
`+l[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=s);break}}}finally{V=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?y(e):""}function K(e){switch(e.tag){case 5:return y(e.type);case 16:return y("Lazy");case 13:return y("Suspense");case 19:return y("SuspenseList");case 0:case 2:case 15:return e=Q(e.type,!1),e;case 11:return e=Q(e.type.render,!1),e;case 1:return e=Q(e.type,!0),e;default:return""}}function X(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Re:return"Fragment";case Pe:return"Portal";case Pt:return"Profiler";case Ke:return"StrictMode";case Ue:return"Suspense";case nt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Xt:return(e.displayName||"Context")+".Consumer";case xt:return(e._context.displayName||"Context")+".Provider";case dt:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ft:return t=e.displayName||null,t!==null?t:X(e.type)||"Memo";case Ie:t=e._payload,e=e._init;try{return X(e(t))}catch{}}return null}function ee(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return X(t);case 8:return t===Ke?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Z(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ie(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ve(e){var t=ie(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Sr(e){e._valueTracker||(e._valueTracker=Ve(e))}function Fo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ie(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function kr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Rl(e,t){var n=t.checked;return _({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Do(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Z(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Mo(e,t){t=t.checked,t!=null&&et(e,"checked",t,!1)}function Il(e,t){Mo(e,t);var n=Z(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Fl(e,t.type,Z(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Oo(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Fl(e,t,n){(t!=="number"||kr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fn=Array.isArray;function un(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Z(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Dl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(m(91));return _({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ao(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(m(92));if(Fn(n)){if(1<n.length)throw Error(m(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Z(n)}}function Bo(e,t){var n=Z(t.value),r=Z(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Uo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Vo(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ml(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Vo(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Er,Wo=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Er=Er||document.createElement("div"),Er.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Er.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qu=["Webkit","ms","Moz","O"];Object.keys(Mn).forEach(function(e){qu.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mn[t]=Mn[e]})});function Qo(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mn.hasOwnProperty(e)&&Mn[e]?(""+t).trim():t+"px"}function Ho(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=Qo(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Ku=_({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ol(e,t){if(t){if(Ku[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(m(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(m(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(m(61))}if(t.style!=null&&typeof t.style!="object")throw Error(m(62))}}function Al(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bl=null;function Ul(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Vl=null,cn=null,dn=null;function $o(e){if(e=lr(e)){if(typeof Vl!="function")throw Error(m(280));var t=e.stateNode;t&&(t=qr(t),Vl(e.stateNode,e.type,t))}}function qo(e){cn?dn?dn.push(e):dn=[e]:cn=e}function Ko(){if(cn){var e=cn,t=dn;if(dn=cn=null,$o(e),t)for(e=0;e<t.length;e++)$o(t[e])}}function Xo(e,t){return e(t)}function Yo(){}var Wl=!1;function Go(e,t,n){if(Wl)return e(t,n);Wl=!0;try{return Xo(e,t,n)}finally{Wl=!1,(cn!==null||dn!==null)&&(Yo(),Ko())}}function On(e,t){var n=e.stateNode;if(n===null)return null;var r=qr(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(m(231,t,typeof n));return n}var Ql=!1;if(U)try{var An={};Object.defineProperty(An,"passive",{get:function(){Ql=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{Ql=!1}function Xu(e,t,n,r,l,i,o,s,a){var g=Array.prototype.slice.call(arguments,3);try{t.apply(n,g)}catch(x){this.onError(x)}}var Bn=!1,Cr=null,Nr=!1,Hl=null,Yu={onError:function(e){Bn=!0,Cr=e}};function Gu(e,t,n,r,l,i,o,s,a){Bn=!1,Cr=null,Xu.apply(Yu,arguments)}function Zu(e,t,n,r,l,i,o,s,a){if(Gu.apply(this,arguments),Bn){if(Bn){var g=Cr;Bn=!1,Cr=null}else throw Error(m(198));Nr||(Nr=!0,Hl=g)}}function Yt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Jo(e){if(Yt(e)!==e)throw Error(m(188))}function Ju(e){var t=e.alternate;if(!t){if(t=Yt(e),t===null)throw Error(m(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Jo(l),e;if(i===r)return Jo(l),t;i=i.sibling}throw Error(m(188))}if(n.return!==r.return)n=l,r=i;else{for(var o=!1,s=l.child;s;){if(s===n){o=!0,n=l,r=i;break}if(s===r){o=!0,r=l,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=l;break}if(s===r){o=!0,r=i,n=l;break}s=s.sibling}if(!o)throw Error(m(189))}}if(n.alternate!==r)throw Error(m(190))}if(n.tag!==3)throw Error(m(188));return n.stateNode.current===n?e:t}function bo(e){return e=Ju(e),e!==null?es(e):null}function es(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=es(e);if(t!==null)return t;e=e.sibling}return null}var ts=k.unstable_scheduleCallback,ns=k.unstable_cancelCallback,bu=k.unstable_shouldYield,ec=k.unstable_requestPaint,de=k.unstable_now,tc=k.unstable_getCurrentPriorityLevel,$l=k.unstable_ImmediatePriority,rs=k.unstable_UserBlockingPriority,jr=k.unstable_NormalPriority,nc=k.unstable_LowPriority,ls=k.unstable_IdlePriority,_r=null,pt=null;function rc(e){if(pt&&typeof pt.onCommitFiberRoot=="function")try{pt.onCommitFiberRoot(_r,e,void 0,(e.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:oc,lc=Math.log,ic=Math.LN2;function oc(e){return e>>>=0,e===0?32:31-(lc(e)/ic|0)|0}var Pr=64,zr=4194304;function Un(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Tr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~l;s!==0?r=Un(s):(i&=o,i!==0&&(r=Un(i)))}else o=n&~l,o!==0?r=Un(o):i!==0&&(r=Un(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&l)===0&&(l=r&-r,i=t&-t,l>=i||l===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),l=1<<n,r|=e[n],t&=~l;return r}function sc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ac(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-rt(i),s=1<<o,a=l[o];a===-1?((s&n)===0||(s&r)!==0)&&(l[o]=sc(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function ql(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function is(){var e=Pr;return Pr<<=1,(Pr&4194240)===0&&(Pr=64),e}function Kl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Vn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-rt(t),e[t]=n}function uc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-rt(n),i=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~i}}function Xl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-rt(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var J=0;function os(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ss,Yl,as,us,cs,Gl=!1,Lr=[],zt=null,Tt=null,Lt=null,Wn=new Map,Qn=new Map,Rt=[],cc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ds(e,t){switch(e){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Tt=null;break;case"mouseover":case"mouseout":Lt=null;break;case"pointerover":case"pointerout":Wn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qn.delete(t.pointerId)}}function Hn(e,t,n,r,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[l]},t!==null&&(t=lr(t),t!==null&&Yl(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function dc(e,t,n,r,l){switch(t){case"focusin":return zt=Hn(zt,e,t,n,r,l),!0;case"dragenter":return Tt=Hn(Tt,e,t,n,r,l),!0;case"mouseover":return Lt=Hn(Lt,e,t,n,r,l),!0;case"pointerover":var i=l.pointerId;return Wn.set(i,Hn(Wn.get(i)||null,e,t,n,r,l)),!0;case"gotpointercapture":return i=l.pointerId,Qn.set(i,Hn(Qn.get(i)||null,e,t,n,r,l)),!0}return!1}function fs(e){var t=Gt(e.target);if(t!==null){var n=Yt(t);if(n!==null){if(t=n.tag,t===13){if(t=Zo(n),t!==null){e.blockedOn=t,cs(e.priority,function(){as(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Rr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Jl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bl=r,n.target.dispatchEvent(r),Bl=null}else return t=lr(n),t!==null&&Yl(t),e.blockedOn=n,!1;t.shift()}return!0}function ps(e,t,n){Rr(e)&&n.delete(t)}function fc(){Gl=!1,zt!==null&&Rr(zt)&&(zt=null),Tt!==null&&Rr(Tt)&&(Tt=null),Lt!==null&&Rr(Lt)&&(Lt=null),Wn.forEach(ps),Qn.forEach(ps)}function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,Gl||(Gl=!0,k.unstable_scheduleCallback(k.unstable_NormalPriority,fc)))}function qn(e){function t(l){return $n(l,e)}if(0<Lr.length){$n(Lr[0],e);for(var n=1;n<Lr.length;n++){var r=Lr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(zt!==null&&$n(zt,e),Tt!==null&&$n(Tt,e),Lt!==null&&$n(Lt,e),Wn.forEach(t),Qn.forEach(t),n=0;n<Rt.length;n++)r=Rt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&(n=Rt[0],n.blockedOn===null);)fs(n),n.blockedOn===null&&Rt.shift()}var fn=Ee.ReactCurrentBatchConfig,Ir=!0;function pc(e,t,n,r){var l=J,i=fn.transition;fn.transition=null;try{J=1,Zl(e,t,n,r)}finally{J=l,fn.transition=i}}function mc(e,t,n,r){var l=J,i=fn.transition;fn.transition=null;try{J=4,Zl(e,t,n,r)}finally{J=l,fn.transition=i}}function Zl(e,t,n,r){if(Ir){var l=Jl(e,t,n,r);if(l===null)hi(e,t,r,Fr,n),ds(e,r);else if(dc(l,e,t,n,r))r.stopPropagation();else if(ds(e,r),t&4&&-1<cc.indexOf(e)){for(;l!==null;){var i=lr(l);if(i!==null&&ss(i),i=Jl(e,t,n,r),i===null&&hi(e,t,r,Fr,n),i===l)break;l=i}l!==null&&r.stopPropagation()}else hi(e,t,r,null,n)}}var Fr=null;function Jl(e,t,n,r){if(Fr=null,e=Ul(r),e=Gt(e),e!==null)if(t=Yt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fr=e,null}function ms(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tc()){case $l:return 1;case rs:return 4;case jr:case nc:return 16;case ls:return 536870912;default:return 16}default:return 16}}var It=null,bl=null,Dr=null;function hs(){if(Dr)return Dr;var e,t=bl,n=t.length,r,l="value"in It?It.value:It.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[i-r];r++);return Dr=l.slice(e,1<r?1-r:void 0)}function Mr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Or(){return!0}function gs(){return!1}function We(e){function t(n,r,l,i,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Or:gs,this.isPropagationStopped=gs,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Or)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Or)},persist:function(){},isPersistent:Or}),t}var pn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ei=We(pn),Kn=_({},pn,{view:0,detail:0}),hc=We(Kn),ti,ni,Xn,Ar=_({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:li,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xn&&(Xn&&e.type==="mousemove"?(ti=e.screenX-Xn.screenX,ni=e.screenY-Xn.screenY):ni=ti=0,Xn=e),ti)},movementY:function(e){return"movementY"in e?e.movementY:ni}}),vs=We(Ar),gc=_({},Ar,{dataTransfer:0}),vc=We(gc),yc=_({},Kn,{relatedTarget:0}),ri=We(yc),xc=_({},pn,{animationName:0,elapsedTime:0,pseudoElement:0}),wc=We(xc),Sc=_({},pn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kc=We(Sc),Ec=_({},pn,{data:0}),ys=We(Ec),Cc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _c(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=jc[e])?!!t[e]:!1}function li(){return _c}var Pc=_({},Kn,{key:function(e){if(e.key){var t=Cc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Nc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:li,charCode:function(e){return e.type==="keypress"?Mr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zc=We(Pc),Tc=_({},Ar,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xs=We(Tc),Lc=_({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:li}),Rc=We(Lc),Ic=_({},pn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fc=We(Ic),Dc=_({},Ar,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mc=We(Dc),Oc=[9,13,27,32],ii=U&&"CompositionEvent"in window,Yn=null;U&&"documentMode"in document&&(Yn=document.documentMode);var Ac=U&&"TextEvent"in window&&!Yn,ws=U&&(!ii||Yn&&8<Yn&&11>=Yn),Ss=" ",ks=!1;function Es(e,t){switch(e){case"keyup":return Oc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mn=!1;function Bc(e,t){switch(e){case"compositionend":return Cs(t);case"keypress":return t.which!==32?null:(ks=!0,Ss);case"textInput":return e=t.data,e===Ss&&ks?null:e;default:return null}}function Uc(e,t){if(mn)return e==="compositionend"||!ii&&Es(e,t)?(e=hs(),Dr=bl=It=null,mn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ws&&t.locale!=="ko"?null:t.data;default:return null}}var Vc={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Vc[e.type]:t==="textarea"}function js(e,t,n,r){qo(r),t=Qr(t,"onChange"),0<t.length&&(n=new ei("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Gn=null,Zn=null;function Wc(e){Hs(e,0)}function Br(e){var t=xn(e);if(Fo(t))return e}function Qc(e,t){if(e==="change")return t}var _s=!1;if(U){var oi;if(U){var si="oninput"in document;if(!si){var Ps=document.createElement("div");Ps.setAttribute("oninput","return;"),si=typeof Ps.oninput=="function"}oi=si}else oi=!1;_s=oi&&(!document.documentMode||9<document.documentMode)}function zs(){Gn&&(Gn.detachEvent("onpropertychange",Ts),Zn=Gn=null)}function Ts(e){if(e.propertyName==="value"&&Br(Zn)){var t=[];js(t,Zn,e,Ul(e)),Go(Wc,t)}}function Hc(e,t,n){e==="focusin"?(zs(),Gn=t,Zn=n,Gn.attachEvent("onpropertychange",Ts)):e==="focusout"&&zs()}function $c(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Br(Zn)}function qc(e,t){if(e==="click")return Br(t)}function Kc(e,t){if(e==="input"||e==="change")return Br(t)}function Xc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var lt=typeof Object.is=="function"?Object.is:Xc;function Jn(e,t){if(lt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!L.call(t,l)||!lt(e[l],t[l]))return!1}return!0}function Ls(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rs(e,t){var n=Ls(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ls(n)}}function Is(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Is(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Fs(){for(var e=window,t=kr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=kr(e.document)}return t}function ai(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yc(e){var t=Fs(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Is(n.ownerDocument.documentElement,n)){if(r!==null&&ai(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(r.start,l);r=r.end===void 0?i:Math.min(r.end,l),!e.extend&&i>r&&(l=r,r=i,i=l),l=Rs(n,i);var o=Rs(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gc=U&&"documentMode"in document&&11>=document.documentMode,hn=null,ui=null,bn=null,ci=!1;function Ds(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ci||hn==null||hn!==kr(r)||(r=hn,"selectionStart"in r&&ai(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bn&&Jn(bn,r)||(bn=r,r=Qr(ui,"onSelect"),0<r.length&&(t=new ei("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hn)))}function Ur(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var gn={animationend:Ur("Animation","AnimationEnd"),animationiteration:Ur("Animation","AnimationIteration"),animationstart:Ur("Animation","AnimationStart"),transitionend:Ur("Transition","TransitionEnd")},di={},Ms={};U&&(Ms=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Vr(e){if(di[e])return di[e];if(!gn[e])return e;var t=gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ms)return di[e]=t[n];return e}var Os=Vr("animationend"),As=Vr("animationiteration"),Bs=Vr("animationstart"),Us=Vr("transitionend"),Vs=new Map,Ws="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ft(e,t){Vs.set(e,t),M(t,[e])}for(var fi=0;fi<Ws.length;fi++){var pi=Ws[fi],Zc=pi.toLowerCase(),Jc=pi[0].toUpperCase()+pi.slice(1);Ft(Zc,"on"+Jc)}Ft(Os,"onAnimationEnd"),Ft(As,"onAnimationIteration"),Ft(Bs,"onAnimationStart"),Ft("dblclick","onDoubleClick"),Ft("focusin","onFocus"),Ft("focusout","onBlur"),Ft(Us,"onTransitionEnd"),G("onMouseEnter",["mouseout","mouseover"]),G("onMouseLeave",["mouseout","mouseover"]),G("onPointerEnter",["pointerout","pointerover"]),G("onPointerLeave",["pointerout","pointerover"]),M("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),M("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),M("onBeforeInput",["compositionend","keypress","textInput","paste"]),M("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),M("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),M("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new Set("cancel close invalid load scroll toggle".split(" ").concat(er));function Qs(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zu(r,t,void 0,e),e.currentTarget=null}function Hs(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],a=s.instance,g=s.currentTarget;if(s=s.listener,a!==i&&l.isPropagationStopped())break e;Qs(l,s,g),i=a}else for(o=0;o<r.length;o++){if(s=r[o],a=s.instance,g=s.currentTarget,s=s.listener,a!==i&&l.isPropagationStopped())break e;Qs(l,s,g),i=a}}}if(Nr)throw e=Hl,Nr=!1,Hl=null,e}function ne(e,t){var n=t[Si];n===void 0&&(n=t[Si]=new Set);var r=e+"__bubble";n.has(r)||($s(t,e,2,!1),n.add(r))}function mi(e,t,n){var r=0;t&&(r|=4),$s(n,e,r,t)}var Wr="_reactListening"+Math.random().toString(36).slice(2);function tr(e){if(!e[Wr]){e[Wr]=!0,D.forEach(function(n){n!=="selectionchange"&&(bc.has(n)||mi(n,!1,e),mi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Wr]||(t[Wr]=!0,mi("selectionchange",!1,t))}}function $s(e,t,n,r){switch(ms(t)){case 1:var l=pc;break;case 4:l=mc;break;default:l=Zl}n=l.bind(null,t,n,e),l=void 0,!Ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function hi(e,t,n,r,l){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===l||s.nodeType===8&&s.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===l||a.nodeType===8&&a.parentNode===l))return;o=o.return}for(;s!==null;){if(o=Gt(s),o===null)return;if(a=o.tag,a===5||a===6){r=i=o;continue e}s=s.parentNode}}r=r.return}Go(function(){var g=i,x=Ul(n),w=[];e:{var v=Vs.get(e);if(v!==void 0){var N=ei,P=e;switch(e){case"keypress":if(Mr(n)===0)break e;case"keydown":case"keyup":N=zc;break;case"focusin":P="focus",N=ri;break;case"focusout":P="blur",N=ri;break;case"beforeblur":case"afterblur":N=ri;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=vs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=vc;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=Rc;break;case Os:case As:case Bs:N=wc;break;case Us:N=Fc;break;case"scroll":N=hc;break;case"wheel":N=Mc;break;case"copy":case"cut":case"paste":N=kc;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=xs}var z=(t&4)!==0,fe=!z&&e==="scroll",p=z?v!==null?v+"Capture":null:v;z=[];for(var d=g,h;d!==null;){h=d;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,p!==null&&(S=On(d,p),S!=null&&z.push(nr(d,S,h)))),fe)break;d=d.return}0<z.length&&(v=new N(v,P,null,n,x),w.push({event:v,listeners:z}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",v&&n!==Bl&&(P=n.relatedTarget||n.fromElement)&&(Gt(P)||P[wt]))break e;if((N||v)&&(v=x.window===x?x:(v=x.ownerDocument)?v.defaultView||v.parentWindow:window,N?(P=n.relatedTarget||n.toElement,N=g,P=P?Gt(P):null,P!==null&&(fe=Yt(P),P!==fe||P.tag!==5&&P.tag!==6)&&(P=null)):(N=null,P=g),N!==P)){if(z=vs,S="onMouseLeave",p="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(z=xs,S="onPointerLeave",p="onPointerEnter",d="pointer"),fe=N==null?v:xn(N),h=P==null?v:xn(P),v=new z(S,d+"leave",N,n,x),v.target=fe,v.relatedTarget=h,S=null,Gt(x)===g&&(z=new z(p,d+"enter",P,n,x),z.target=h,z.relatedTarget=fe,S=z),fe=S,N&&P)t:{for(z=N,p=P,d=0,h=z;h;h=vn(h))d++;for(h=0,S=p;S;S=vn(S))h++;for(;0<d-h;)z=vn(z),d--;for(;0<h-d;)p=vn(p),h--;for(;d--;){if(z===p||p!==null&&z===p.alternate)break t;z=vn(z),p=vn(p)}z=null}else z=null;N!==null&&qs(w,v,N,z,!1),P!==null&&fe!==null&&qs(w,fe,P,z,!0)}}e:{if(v=g?xn(g):window,N=v.nodeName&&v.nodeName.toLowerCase(),N==="select"||N==="input"&&v.type==="file")var T=Qc;else if(Ns(v))if(_s)T=Kc;else{T=$c;var R=Hc}else(N=v.nodeName)&&N.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(T=qc);if(T&&(T=T(e,g))){js(w,T,n,x);break e}R&&R(e,v,g),e==="focusout"&&(R=v._wrapperState)&&R.controlled&&v.type==="number"&&Fl(v,"number",v.value)}switch(R=g?xn(g):window,e){case"focusin":(Ns(R)||R.contentEditable==="true")&&(hn=R,ui=g,bn=null);break;case"focusout":bn=ui=hn=null;break;case"mousedown":ci=!0;break;case"contextmenu":case"mouseup":case"dragend":ci=!1,Ds(w,n,x);break;case"selectionchange":if(Gc)break;case"keydown":case"keyup":Ds(w,n,x)}var I;if(ii)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else mn?Es(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(ws&&n.locale!=="ko"&&(mn||O!=="onCompositionStart"?O==="onCompositionEnd"&&mn&&(I=hs()):(It=x,bl="value"in It?It.value:It.textContent,mn=!0)),R=Qr(g,O),0<R.length&&(O=new ys(O,e,null,n,x),w.push({event:O,listeners:R}),I?O.data=I:(I=Cs(n),I!==null&&(O.data=I)))),(I=Ac?Bc(e,n):Uc(e,n))&&(g=Qr(g,"onBeforeInput"),0<g.length&&(x=new ys("onBeforeInput","beforeinput",null,n,x),w.push({event:x,listeners:g}),x.data=I))}Hs(w,t)})}function nr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qr(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,i=l.stateNode;l.tag===5&&i!==null&&(l=i,i=On(e,n),i!=null&&r.unshift(nr(e,i,l)),i=On(e,t),i!=null&&r.push(nr(e,i,l))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function qs(e,t,n,r,l){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,a=s.alternate,g=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&g!==null&&(s=g,l?(a=On(n,i),a!=null&&o.unshift(nr(n,a,s))):l||(a=On(n,i),a!=null&&o.push(nr(n,a,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var ed=/\r\n?/g,td=/\u0000|\uFFFD/g;function Ks(e){return(typeof e=="string"?e:""+e).replace(ed,`
`).replace(td,"")}function Hr(e,t,n){if(t=Ks(t),Ks(e)!==t&&n)throw Error(m(425))}function $r(){}var gi=null,vi=null;function yi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xi=typeof setTimeout=="function"?setTimeout:void 0,nd=typeof clearTimeout=="function"?clearTimeout:void 0,Xs=typeof Promise=="function"?Promise:void 0,rd=typeof queueMicrotask=="function"?queueMicrotask:typeof Xs<"u"?function(e){return Xs.resolve(null).then(e).catch(ld)}:xi;function ld(e){setTimeout(function(){throw e})}function wi(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),qn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);qn(t)}function Dt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ys(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var yn=Math.random().toString(36).slice(2),mt="__reactFiber$"+yn,rr="__reactProps$"+yn,wt="__reactContainer$"+yn,Si="__reactEvents$"+yn,id="__reactListeners$"+yn,od="__reactHandles$"+yn;function Gt(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[wt]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ys(e);e!==null;){if(n=e[mt])return n;e=Ys(e)}return t}e=n,n=e.parentNode}return null}function lr(e){return e=e[mt]||e[wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(m(33))}function qr(e){return e[rr]||null}var ki=[],wn=-1;function Mt(e){return{current:e}}function re(e){0>wn||(e.current=ki[wn],ki[wn]=null,wn--)}function te(e,t){wn++,ki[wn]=e.current,e.current=t}var Ot={},Ce=Mt(Ot),Fe=Mt(!1),Zt=Ot;function Sn(e,t){var n=e.type.contextTypes;if(!n)return Ot;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},i;for(i in n)l[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function De(e){return e=e.childContextTypes,e!=null}function Kr(){re(Fe),re(Ce)}function Gs(e,t,n){if(Ce.current!==Ot)throw Error(m(168));te(Ce,t),te(Fe,n)}function Zs(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(m(108,ee(e)||"Unknown",l));return _({},n,r)}function Xr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ot,Zt=Ce.current,te(Ce,e),te(Fe,Fe.current),!0}function Js(e,t,n){var r=e.stateNode;if(!r)throw Error(m(169));n?(e=Zs(e,t,Zt),r.__reactInternalMemoizedMergedChildContext=e,re(Fe),re(Ce),te(Ce,e)):re(Fe),te(Fe,n)}var St=null,Yr=!1,Ei=!1;function bs(e){St===null?St=[e]:St.push(e)}function sd(e){Yr=!0,bs(e)}function At(){if(!Ei&&St!==null){Ei=!0;var e=0,t=J;try{var n=St;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,Yr=!1}catch(l){throw St!==null&&(St=St.slice(e+1)),ts($l,At),l}finally{J=t,Ei=!1}}return null}var kn=[],En=0,Gr=null,Zr=0,Xe=[],Ye=0,Jt=null,kt=1,Et="";function bt(e,t){kn[En++]=Zr,kn[En++]=Gr,Gr=e,Zr=t}function ea(e,t,n){Xe[Ye++]=kt,Xe[Ye++]=Et,Xe[Ye++]=Jt,Jt=e;var r=kt;e=Et;var l=32-rt(r)-1;r&=~(1<<l),n+=1;var i=32-rt(t)+l;if(30<i){var o=l-l%5;i=(r&(1<<o)-1).toString(32),r>>=o,l-=o,kt=1<<32-rt(t)+l|n<<l|r,Et=i+e}else kt=1<<i|n<<l|r,Et=e}function Ci(e){e.return!==null&&(bt(e,1),ea(e,1,0))}function Ni(e){for(;e===Gr;)Gr=kn[--En],kn[En]=null,Zr=kn[--En],kn[En]=null;for(;e===Jt;)Jt=Xe[--Ye],Xe[Ye]=null,Et=Xe[--Ye],Xe[Ye]=null,kt=Xe[--Ye],Xe[Ye]=null}var Qe=null,He=null,oe=!1,it=null;function ta(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function na(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,He=Dt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,He=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Jt!==null?{id:kt,overflow:Et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,He=null,!0):!1;default:return!1}}function ji(e){return(e.mode&1)!==0&&(e.flags&128)===0}function _i(e){if(oe){var t=He;if(t){var n=t;if(!na(e,t)){if(ji(e))throw Error(m(418));t=Dt(n.nextSibling);var r=Qe;t&&na(e,t)?ta(r,n):(e.flags=e.flags&-4097|2,oe=!1,Qe=e)}}else{if(ji(e))throw Error(m(418));e.flags=e.flags&-4097|2,oe=!1,Qe=e}}}function ra(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function Jr(e){if(e!==Qe)return!1;if(!oe)return ra(e),oe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!yi(e.type,e.memoizedProps)),t&&(t=He)){if(ji(e))throw la(),Error(m(418));for(;t;)ta(e,t),t=Dt(t.nextSibling)}if(ra(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(m(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){He=Dt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}He=null}}else He=Qe?Dt(e.stateNode.nextSibling):null;return!0}function la(){for(var e=He;e;)e=Dt(e.nextSibling)}function Cn(){He=Qe=null,oe=!1}function Pi(e){it===null?it=[e]:it.push(e)}var ad=Ee.ReactCurrentBatchConfig;function ir(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(m(309));var r=n.stateNode}if(!r)throw Error(m(147,e));var l=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=l.refs;o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(m(284));if(!n._owner)throw Error(m(290,e))}return e}function br(e,t){throw e=Object.prototype.toString.call(t),Error(m(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ia(e){var t=e._init;return t(e._payload)}function oa(e){function t(p,d){if(e){var h=p.deletions;h===null?(p.deletions=[d],p.flags|=16):h.push(d)}}function n(p,d){if(!e)return null;for(;d!==null;)t(p,d),d=d.sibling;return null}function r(p,d){for(p=new Map;d!==null;)d.key!==null?p.set(d.key,d):p.set(d.index,d),d=d.sibling;return p}function l(p,d){return p=qt(p,d),p.index=0,p.sibling=null,p}function i(p,d,h){return p.index=h,e?(h=p.alternate,h!==null?(h=h.index,h<d?(p.flags|=2,d):h):(p.flags|=2,d)):(p.flags|=1048576,d)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function s(p,d,h,S){return d===null||d.tag!==6?(d=wo(h,p.mode,S),d.return=p,d):(d=l(d,h),d.return=p,d)}function a(p,d,h,S){var T=h.type;return T===Re?x(p,d,h.props.children,S,h.key):d!==null&&(d.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ie&&ia(T)===d.type)?(S=l(d,h.props),S.ref=ir(p,d,h),S.return=p,S):(S=El(h.type,h.key,h.props,null,p.mode,S),S.ref=ir(p,d,h),S.return=p,S)}function g(p,d,h,S){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=So(h,p.mode,S),d.return=p,d):(d=l(d,h.children||[]),d.return=p,d)}function x(p,d,h,S,T){return d===null||d.tag!==7?(d=an(h,p.mode,S,T),d.return=p,d):(d=l(d,h),d.return=p,d)}function w(p,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=wo(""+d,p.mode,h),d.return=p,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case tt:return h=El(d.type,d.key,d.props,null,p.mode,h),h.ref=ir(p,null,d),h.return=p,h;case Pe:return d=So(d,p.mode,h),d.return=p,d;case Ie:var S=d._init;return w(p,S(d._payload),h)}if(Fn(d)||F(d))return d=an(d,p.mode,h,null),d.return=p,d;br(p,d)}return null}function v(p,d,h,S){var T=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return T!==null?null:s(p,d,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case tt:return h.key===T?a(p,d,h,S):null;case Pe:return h.key===T?g(p,d,h,S):null;case Ie:return T=h._init,v(p,d,T(h._payload),S)}if(Fn(h)||F(h))return T!==null?null:x(p,d,h,S,null);br(p,h)}return null}function N(p,d,h,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(h)||null,s(d,p,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case tt:return p=p.get(S.key===null?h:S.key)||null,a(d,p,S,T);case Pe:return p=p.get(S.key===null?h:S.key)||null,g(d,p,S,T);case Ie:var R=S._init;return N(p,d,h,R(S._payload),T)}if(Fn(S)||F(S))return p=p.get(h)||null,x(d,p,S,T,null);br(d,S)}return null}function P(p,d,h,S){for(var T=null,R=null,I=d,O=d=0,xe=null;I!==null&&O<h.length;O++){I.index>O?(xe=I,I=null):xe=I.sibling;var Y=v(p,I,h[O],S);if(Y===null){I===null&&(I=xe);break}e&&I&&Y.alternate===null&&t(p,I),d=i(Y,d,O),R===null?T=Y:R.sibling=Y,R=Y,I=xe}if(O===h.length)return n(p,I),oe&&bt(p,O),T;if(I===null){for(;O<h.length;O++)I=w(p,h[O],S),I!==null&&(d=i(I,d,O),R===null?T=I:R.sibling=I,R=I);return oe&&bt(p,O),T}for(I=r(p,I);O<h.length;O++)xe=N(I,p,O,h[O],S),xe!==null&&(e&&xe.alternate!==null&&I.delete(xe.key===null?O:xe.key),d=i(xe,d,O),R===null?T=xe:R.sibling=xe,R=xe);return e&&I.forEach(function(Kt){return t(p,Kt)}),oe&&bt(p,O),T}function z(p,d,h,S){var T=F(h);if(typeof T!="function")throw Error(m(150));if(h=T.call(h),h==null)throw Error(m(151));for(var R=T=null,I=d,O=d=0,xe=null,Y=h.next();I!==null&&!Y.done;O++,Y=h.next()){I.index>O?(xe=I,I=null):xe=I.sibling;var Kt=v(p,I,Y.value,S);if(Kt===null){I===null&&(I=xe);break}e&&I&&Kt.alternate===null&&t(p,I),d=i(Kt,d,O),R===null?T=Kt:R.sibling=Kt,R=Kt,I=xe}if(Y.done)return n(p,I),oe&&bt(p,O),T;if(I===null){for(;!Y.done;O++,Y=h.next())Y=w(p,Y.value,S),Y!==null&&(d=i(Y,d,O),R===null?T=Y:R.sibling=Y,R=Y);return oe&&bt(p,O),T}for(I=r(p,I);!Y.done;O++,Y=h.next())Y=N(I,p,O,Y.value,S),Y!==null&&(e&&Y.alternate!==null&&I.delete(Y.key===null?O:Y.key),d=i(Y,d,O),R===null?T=Y:R.sibling=Y,R=Y);return e&&I.forEach(function(Vd){return t(p,Vd)}),oe&&bt(p,O),T}function fe(p,d,h,S){if(typeof h=="object"&&h!==null&&h.type===Re&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case tt:e:{for(var T=h.key,R=d;R!==null;){if(R.key===T){if(T=h.type,T===Re){if(R.tag===7){n(p,R.sibling),d=l(R,h.props.children),d.return=p,p=d;break e}}else if(R.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Ie&&ia(T)===R.type){n(p,R.sibling),d=l(R,h.props),d.ref=ir(p,R,h),d.return=p,p=d;break e}n(p,R);break}else t(p,R);R=R.sibling}h.type===Re?(d=an(h.props.children,p.mode,S,h.key),d.return=p,p=d):(S=El(h.type,h.key,h.props,null,p.mode,S),S.ref=ir(p,d,h),S.return=p,p=S)}return o(p);case Pe:e:{for(R=h.key;d!==null;){if(d.key===R)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(p,d.sibling),d=l(d,h.children||[]),d.return=p,p=d;break e}else{n(p,d);break}else t(p,d);d=d.sibling}d=So(h,p.mode,S),d.return=p,p=d}return o(p);case Ie:return R=h._init,fe(p,d,R(h._payload),S)}if(Fn(h))return P(p,d,h,S);if(F(h))return z(p,d,h,S);br(p,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(p,d.sibling),d=l(d,h),d.return=p,p=d):(n(p,d),d=wo(h,p.mode,S),d.return=p,p=d),o(p)):n(p,d)}return fe}var Nn=oa(!0),sa=oa(!1),el=Mt(null),tl=null,jn=null,zi=null;function Ti(){zi=jn=tl=null}function Li(e){var t=el.current;re(el),e._currentValue=t}function Ri(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function _n(e,t){tl=e,zi=jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Me=!0),e.firstContext=null)}function Ge(e){var t=e._currentValue;if(zi!==e)if(e={context:e,memoizedValue:t,next:null},jn===null){if(tl===null)throw Error(m(308));jn=e,tl.dependencies={lanes:0,firstContext:e}}else jn=jn.next=e;return t}var en=null;function Ii(e){en===null?en=[e]:en.push(e)}function aa(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,Ii(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ct(e,r)}function Ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Bt=!1;function Fi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ua(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(q&2)!==0){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ct(e,n)}return l=r.interleaved,l===null?(t.next=t,Ii(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ct(e,n)}function nl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xl(e,n)}}function ca(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?l=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function rl(e,t,n,r){var l=e.updateQueue;Bt=!1;var i=l.firstBaseUpdate,o=l.lastBaseUpdate,s=l.shared.pending;if(s!==null){l.shared.pending=null;var a=s,g=a.next;a.next=null,o===null?i=g:o.next=g,o=a;var x=e.alternate;x!==null&&(x=x.updateQueue,s=x.lastBaseUpdate,s!==o&&(s===null?x.firstBaseUpdate=g:s.next=g,x.lastBaseUpdate=a))}if(i!==null){var w=l.baseState;o=0,x=g=a=null,s=i;do{var v=s.lane,N=s.eventTime;if((r&v)===v){x!==null&&(x=x.next={eventTime:N,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var P=e,z=s;switch(v=t,N=n,z.tag){case 1:if(P=z.payload,typeof P=="function"){w=P.call(N,w,v);break e}w=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=z.payload,v=typeof P=="function"?P.call(N,w,v):P,v==null)break e;w=_({},w,v);break e;case 2:Bt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,v=l.effects,v===null?l.effects=[s]:v.push(s))}else N={eventTime:N,lane:v,tag:s.tag,payload:s.payload,callback:s.callback,next:null},x===null?(g=x=N,a=w):x=x.next=N,o|=v;if(s=s.next,s===null){if(s=l.shared.pending,s===null)break;v=s,s=v.next,v.next=null,l.lastBaseUpdate=v,l.shared.pending=null}}while(!0);if(x===null&&(a=w),l.baseState=a,l.firstBaseUpdate=g,l.lastBaseUpdate=x,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else i===null&&(l.shared.lanes=0);rn|=o,e.lanes=o,e.memoizedState=w}}function da(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(m(191,l));l.call(r)}}}var or={},ht=Mt(or),sr=Mt(or),ar=Mt(or);function tn(e){if(e===or)throw Error(m(174));return e}function Di(e,t){switch(te(ar,t),te(sr,e),te(ht,or),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ml(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ml(t,e)}re(ht),te(ht,t)}function Pn(){re(ht),re(sr),re(ar)}function fa(e){tn(ar.current);var t=tn(ht.current),n=Ml(t,e.type);t!==n&&(te(sr,e),te(ht,n))}function Mi(e){sr.current===e&&(re(ht),re(sr))}var se=Mt(0);function ll(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Oi=[];function Ai(){for(var e=0;e<Oi.length;e++)Oi[e]._workInProgressVersionPrimary=null;Oi.length=0}var il=Ee.ReactCurrentDispatcher,Bi=Ee.ReactCurrentBatchConfig,nn=0,ae=null,he=null,ve=null,ol=!1,ur=!1,cr=0,ud=0;function Ne(){throw Error(m(321))}function Ui(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lt(e[n],t[n]))return!1;return!0}function Vi(e,t,n,r,l,i){if(nn=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,il.current=e===null||e.memoizedState===null?pd:md,e=n(r,l),ur){i=0;do{if(ur=!1,cr=0,25<=i)throw Error(m(301));i+=1,ve=he=null,t.updateQueue=null,il.current=hd,e=n(r,l)}while(ur)}if(il.current=ul,t=he!==null&&he.next!==null,nn=0,ve=he=ae=null,ol=!1,t)throw Error(m(300));return e}function Wi(){var e=cr!==0;return cr=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ve===null?ae.memoizedState=ve=e:ve=ve.next=e,ve}function Ze(){if(he===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=he.next;var t=ve===null?ae.memoizedState:ve.next;if(t!==null)ve=t,he=e;else{if(e===null)throw Error(m(310));he=e,e={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},ve===null?ae.memoizedState=ve=e:ve=ve.next=e}return ve}function dr(e,t){return typeof t=="function"?t(e):t}function Qi(e){var t=Ze(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=he,l=r.baseQueue,i=n.pending;if(i!==null){if(l!==null){var o=l.next;l.next=i.next,i.next=o}r.baseQueue=l=i,n.pending=null}if(l!==null){i=l.next,r=r.baseState;var s=o=null,a=null,g=i;do{var x=g.lane;if((nn&x)===x)a!==null&&(a=a.next={lane:0,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null}),r=g.hasEagerState?g.eagerState:e(r,g.action);else{var w={lane:x,action:g.action,hasEagerState:g.hasEagerState,eagerState:g.eagerState,next:null};a===null?(s=a=w,o=r):a=a.next=w,ae.lanes|=x,rn|=x}g=g.next}while(g!==null&&g!==i);a===null?o=r:a.next=s,lt(r,t.memoizedState)||(Me=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do i=l.lane,ae.lanes|=i,rn|=i,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hi(e){var t=Ze(),n=t.queue;if(n===null)throw Error(m(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do i=e(i,o.action),o=o.next;while(o!==l);lt(i,t.memoizedState)||(Me=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function pa(){}function ma(e,t){var n=ae,r=Ze(),l=t(),i=!lt(r.memoizedState,l);if(i&&(r.memoizedState=l,Me=!0),r=r.queue,$i(va.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ve!==null&&ve.memoizedState.tag&1){if(n.flags|=2048,fr(9,ga.bind(null,n,r,l,t),void 0,null),ye===null)throw Error(m(349));(nn&30)!==0||ha(n,t,l)}return l}function ha(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ga(e,t,n,r){t.value=n,t.getSnapshot=r,ya(t)&&xa(e)}function va(e,t,n){return n(function(){ya(t)&&xa(e)})}function ya(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lt(e,n)}catch{return!0}}function xa(e){var t=Ct(e,1);t!==null&&ut(t,e,1,-1)}function wa(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:dr,lastRenderedState:e},t.queue=e,e=e.dispatch=fd.bind(null,ae,e),[t.memoizedState,e]}function fr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ae.updateQueue,t===null?(t={lastEffect:null,stores:null},ae.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Sa(){return Ze().memoizedState}function sl(e,t,n,r){var l=gt();ae.flags|=e,l.memoizedState=fr(1|t,n,void 0,r===void 0?null:r)}function al(e,t,n,r){var l=Ze();r=r===void 0?null:r;var i=void 0;if(he!==null){var o=he.memoizedState;if(i=o.destroy,r!==null&&Ui(r,o.deps)){l.memoizedState=fr(t,n,i,r);return}}ae.flags|=e,l.memoizedState=fr(1|t,n,i,r)}function ka(e,t){return sl(8390656,8,e,t)}function $i(e,t){return al(2048,8,e,t)}function Ea(e,t){return al(4,2,e,t)}function Ca(e,t){return al(4,4,e,t)}function Na(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ja(e,t,n){return n=n!=null?n.concat([e]):null,al(4,4,Na.bind(null,t,e),n)}function qi(){}function _a(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ui(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Pa(e,t){var n=Ze();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ui(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function za(e,t,n){return(nn&21)===0?(e.baseState&&(e.baseState=!1,Me=!0),e.memoizedState=n):(lt(n,t)||(n=is(),ae.lanes|=n,rn|=n,e.baseState=!0),t)}function cd(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=Bi.transition;Bi.transition={};try{e(!1),t()}finally{J=n,Bi.transition=r}}function Ta(){return Ze().memoizedState}function dd(e,t,n){var r=Ht(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},La(e))Ra(t,n);else if(n=aa(e,t,n,r),n!==null){var l=Te();ut(n,e,r,l),Ia(n,t,r)}}function fd(e,t,n){var r=Ht(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(La(e))Ra(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(l.hasEagerState=!0,l.eagerState=s,lt(s,o)){var a=t.interleaved;a===null?(l.next=l,Ii(t)):(l.next=a.next,a.next=l),t.interleaved=l;return}}catch{}finally{}n=aa(e,t,l,r),n!==null&&(l=Te(),ut(n,e,r,l),Ia(n,t,r))}}function La(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Ra(e,t){ur=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ia(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xl(e,n)}}var ul={readContext:Ge,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},pd={readContext:Ge,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:Ge,useEffect:ka,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,sl(4194308,4,Na.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sl(4194308,4,e,t)},useInsertionEffect:function(e,t){return sl(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dd.bind(null,ae,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:wa,useDebugValue:qi,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=wa(!1),t=e[0];return e=cd.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ae,l=gt();if(oe){if(n===void 0)throw Error(m(407));n=n()}else{if(n=t(),ye===null)throw Error(m(349));(nn&30)!==0||ha(r,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,ka(va.bind(null,r,i,e),[e]),r.flags|=2048,fr(9,ga.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=gt(),t=ye.identifierPrefix;if(oe){var n=Et,r=kt;n=(r&~(1<<32-rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=cr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ud++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},md={readContext:Ge,useCallback:_a,useContext:Ge,useEffect:$i,useImperativeHandle:ja,useInsertionEffect:Ea,useLayoutEffect:Ca,useMemo:Pa,useReducer:Qi,useRef:Sa,useState:function(){return Qi(dr)},useDebugValue:qi,useDeferredValue:function(e){var t=Ze();return za(t,he.memoizedState,e)},useTransition:function(){var e=Qi(dr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:pa,useSyncExternalStore:ma,useId:Ta,unstable_isNewReconciler:!1},hd={readContext:Ge,useCallback:_a,useContext:Ge,useEffect:$i,useImperativeHandle:ja,useInsertionEffect:Ea,useLayoutEffect:Ca,useMemo:Pa,useReducer:Hi,useRef:Sa,useState:function(){return Hi(dr)},useDebugValue:qi,useDeferredValue:function(e){var t=Ze();return he===null?t.memoizedState=e:za(t,he.memoizedState,e)},useTransition:function(){var e=Hi(dr)[0],t=Ze().memoizedState;return[e,t]},useMutableSource:pa,useSyncExternalStore:ma,useId:Ta,unstable_isNewReconciler:!1};function ot(e,t){if(e&&e.defaultProps){t=_({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ki(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:_({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?Yt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),l=Ht(e),i=Nt(r,l);i.payload=t,n!=null&&(i.callback=n),t=Ut(e,i,l),t!==null&&(ut(t,e,l,r),nl(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),l=Ht(e),i=Nt(r,l);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ut(e,i,l),t!==null&&(ut(t,e,l,r),nl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=Ht(e),l=Nt(n,r);l.tag=2,t!=null&&(l.callback=t),t=Ut(e,l,r),t!==null&&(ut(t,e,r,n),nl(t,e,r))}};function Fa(e,t,n,r,l,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!Jn(n,r)||!Jn(l,i):!0}function Da(e,t,n){var r=!1,l=Ot,i=t.contextType;return typeof i=="object"&&i!==null?i=Ge(i):(l=De(t)?Zt:Ce.current,r=t.contextTypes,i=(r=r!=null)?Sn(e,l):Ot),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ma(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function Xi(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},Fi(e);var i=t.contextType;typeof i=="object"&&i!==null?l.context=Ge(i):(i=De(t)?Zt:Ce.current,l.context=Sn(e,i)),l.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ki(e,t,i,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&cl.enqueueReplaceState(l,l.state,null),rl(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function zn(e,t){try{var n="",r=t;do n+=K(r),r=r.return;while(r);var l=n}catch(i){l=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:l,digest:null}}function Yi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Gi(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gd=typeof WeakMap=="function"?WeakMap:Map;function Oa(e,t,n){n=Nt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){vl||(vl=!0,fo=r),Gi(e,t)},n}function Aa(e,t,n){n=Nt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Gi(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Gi(e,t),typeof r!="function"&&(Wt===null?Wt=new Set([this]):Wt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ba(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gd;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=Td.bind(null,e,t,n),t.then(e,e))}function Ua(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Va(e,t,n,r,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Nt(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var vd=Ee.ReactCurrentOwner,Me=!1;function ze(e,t,n,r){t.child=e===null?sa(t,null,n,r):Nn(t,e.child,n,r)}function Wa(e,t,n,r,l){n=n.render;var i=t.ref;return _n(t,l),r=Vi(e,t,n,r,i,l),n=Wi(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,jt(e,t,l)):(oe&&n&&Ci(t),t.flags|=1,ze(e,t,r,l),t.child)}function Qa(e,t,n,r,l){if(e===null){var i=n.type;return typeof i=="function"&&!xo(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ha(e,t,i,r,l)):(e=El(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&l)===0){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Jn,n(o,r)&&e.ref===t.ref)return jt(e,t,l)}return t.flags|=1,e=qt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ha(e,t,n,r,l){if(e!==null){var i=e.memoizedProps;if(Jn(i,r)&&e.ref===t.ref)if(Me=!1,t.pendingProps=r=i,(e.lanes&l)!==0)(e.flags&131072)!==0&&(Me=!0);else return t.lanes=e.lanes,jt(e,t,l)}return Zi(e,t,n,r,l)}function $a(e,t,n){var r=t.pendingProps,l=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(Ln,$e),$e|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,te(Ln,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,te(Ln,$e),$e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,te(Ln,$e),$e|=r;return ze(e,t,l,n),t.child}function qa(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Zi(e,t,n,r,l){var i=De(n)?Zt:Ce.current;return i=Sn(t,i),_n(t,l),n=Vi(e,t,n,r,i,l),r=Wi(),e!==null&&!Me?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,jt(e,t,l)):(oe&&r&&Ci(t),t.flags|=1,ze(e,t,n,l),t.child)}function Ka(e,t,n,r,l){if(De(n)){var i=!0;Xr(t)}else i=!1;if(_n(t,l),t.stateNode===null)fl(e,t),Da(t,n,r),Xi(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var a=o.context,g=n.contextType;typeof g=="object"&&g!==null?g=Ge(g):(g=De(n)?Zt:Ce.current,g=Sn(t,g));var x=n.getDerivedStateFromProps,w=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";w||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||a!==g)&&Ma(t,o,r,g),Bt=!1;var v=t.memoizedState;o.state=v,rl(t,r,o,l),a=t.memoizedState,s!==r||v!==a||Fe.current||Bt?(typeof x=="function"&&(Ki(t,n,x,r),a=t.memoizedState),(s=Bt||Fa(t,n,s,r,v,a,g))?(w||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=g,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ua(e,t),s=t.memoizedProps,g=t.type===t.elementType?s:ot(t.type,s),o.props=g,w=t.pendingProps,v=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ge(a):(a=De(n)?Zt:Ce.current,a=Sn(t,a));var N=n.getDerivedStateFromProps;(x=typeof N=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==w||v!==a)&&Ma(t,o,r,a),Bt=!1,v=t.memoizedState,o.state=v,rl(t,r,o,l);var P=t.memoizedState;s!==w||v!==P||Fe.current||Bt?(typeof N=="function"&&(Ki(t,n,N,r),P=t.memoizedState),(g=Bt||Fa(t,n,g,r,v,P,a)||!1)?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=P),o.props=r,o.state=P,o.context=a,r=g):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),r=!1)}return Ji(e,t,n,r,i,l)}function Ji(e,t,n,r,l,i){qa(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&Js(t,n,!1),jt(e,t,i);r=t.stateNode,vd.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Nn(t,e.child,null,i),t.child=Nn(t,null,s,i)):ze(e,t,s,i),t.memoizedState=r.state,l&&Js(t,n,!0),t.child}function Xa(e){var t=e.stateNode;t.pendingContext?Gs(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gs(e,t.context,!1),Di(e,t.containerInfo)}function Ya(e,t,n,r,l){return Cn(),Pi(l),t.flags|=256,ze(e,t,n,r),t.child}var bi={dehydrated:null,treeContext:null,retryLane:0};function eo(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ga(e,t,n){var r=t.pendingProps,l=se.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(l&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),te(se,l&1),e===null)return _i(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Cl(o,r,0,null),e=an(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=eo(n),t.memoizedState=bi,e):to(t,o));if(l=e.memoizedState,l!==null&&(s=l.dehydrated,s!==null))return yd(e,t,o,r,s,l,n);if(i){i=r.fallback,o=t.mode,l=e.child,s=l.sibling;var a={mode:"hidden",children:r.children};return(o&1)===0&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=qt(l,a),r.subtreeFlags=l.subtreeFlags&14680064),s!==null?i=qt(s,i):(i=an(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?eo(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=bi,r}return i=e.child,e=i.sibling,r=qt(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function to(e,t){return t=Cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function dl(e,t,n,r){return r!==null&&Pi(r),Nn(t,e.child,null,n),e=to(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yd(e,t,n,r,l,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Yi(Error(m(422))),dl(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,l=t.mode,r=Cl({mode:"visible",children:r.children},l,0,null),i=an(i,l,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Nn(t,e.child,null,o),t.child.memoizedState=eo(o),t.memoizedState=bi,i);if((t.mode&1)===0)return dl(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(m(419)),r=Yi(i,r,void 0),dl(e,t,o,r)}if(s=(o&e.childLanes)!==0,Me||s){if(r=ye,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(r.suspendedLanes|o))!==0?0:l,l!==0&&l!==i.retryLane&&(i.retryLane=l,Ct(e,l),ut(r,e,l,-1))}return yo(),r=Yi(Error(m(421))),dl(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Ld.bind(null,e),l._reactRetry=t,null):(e=i.treeContext,He=Dt(l.nextSibling),Qe=t,oe=!0,it=null,e!==null&&(Xe[Ye++]=kt,Xe[Ye++]=Et,Xe[Ye++]=Jt,kt=e.id,Et=e.overflow,Jt=t),t=to(t,r.children),t.flags|=4096,t)}function Za(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ri(e.return,t,n)}function no(e,t,n,r,l){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=l)}function Ja(e,t,n){var r=t.pendingProps,l=r.revealOrder,i=r.tail;if(ze(e,t,r.children,n),r=se.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Za(e,n,t);else if(e.tag===19)Za(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(te(se,r),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ll(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),no(t,!1,l,n,i);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ll(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}no(t,!0,n,null,i);break;case"together":no(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function fl(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),rn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(m(153));if(t.child!==null){for(e=t.child,n=qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xd(e,t,n){switch(t.tag){case 3:Xa(t),Cn();break;case 5:fa(t);break;case 1:De(t.type)&&Xr(t);break;case 4:Di(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;te(el,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(te(se,se.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?Ga(e,t,n):(te(se,se.current&1),e=jt(e,t,n),e!==null?e.sibling:null);te(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Ja(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),te(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,$a(e,t,n)}return jt(e,t,n)}var ba,ro,eu,tu;ba=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},ro=function(){},eu=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,tn(ht.current);var i=null;switch(n){case"input":l=Rl(e,l),r=Rl(e,r),i=[];break;case"select":l=_({},l,{value:void 0}),r=_({},r,{value:void 0}),i=[];break;case"textarea":l=Dl(e,l),r=Dl(e,r),i=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$r)}Ol(n,r);var o;n=null;for(g in l)if(!r.hasOwnProperty(g)&&l.hasOwnProperty(g)&&l[g]!=null)if(g==="style"){var s=l[g];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else g!=="dangerouslySetInnerHTML"&&g!=="children"&&g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(C.hasOwnProperty(g)?i||(i=[]):(i=i||[]).push(g,null));for(g in r){var a=r[g];if(s=l!=null?l[g]:void 0,r.hasOwnProperty(g)&&a!==s&&(a!=null||s!=null))if(g==="style")if(s){for(o in s)!s.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&s[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(i||(i=[]),i.push(g,n)),n=a;else g==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(g,a)):g==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(g,""+a):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&(C.hasOwnProperty(g)?(a!=null&&g==="onScroll"&&ne("scroll",e),i||s===a||(i=[])):(i=i||[]).push(g,a))}n&&(i=i||[]).push("style",n);var g=i;(t.updateQueue=g)&&(t.flags|=4)}},tu=function(e,t,n,r){n!==r&&(t.flags|=4)};function pr(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function wd(e,t,n){var r=t.pendingProps;switch(Ni(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return De(t.type)&&Kr(),je(t),null;case 3:return r=t.stateNode,Pn(),re(Fe),re(Ce),Ai(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Jr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,it!==null&&(ho(it),it=null))),ro(e,t),je(t),null;case 5:Mi(t);var l=tn(ar.current);if(n=t.type,e!==null&&t.stateNode!=null)eu(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(m(166));return je(t),null}if(e=tn(ht.current),Jr(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[mt]=t,r[rr]=i,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(l=0;l<er.length;l++)ne(er[l],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Do(r,i),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ne("invalid",r);break;case"textarea":Ao(r,i),ne("invalid",r)}Ol(n,i),l=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,s,e),l=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Hr(r.textContent,s,e),l=["children",""+s]):C.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":Sr(r),Oo(r,i,!0);break;case"textarea":Sr(r),Uo(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=$r)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Vo(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[mt]=t,e[rr]=r,ba(e,t,!1,!1),t.stateNode=e;e:{switch(o=Al(n,r),n){case"dialog":ne("cancel",e),ne("close",e),l=r;break;case"iframe":case"object":case"embed":ne("load",e),l=r;break;case"video":case"audio":for(l=0;l<er.length;l++)ne(er[l],e);l=r;break;case"source":ne("error",e),l=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),l=r;break;case"details":ne("toggle",e),l=r;break;case"input":Do(e,r),l=Rl(e,r),ne("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=_({},r,{value:void 0}),ne("invalid",e);break;case"textarea":Ao(e,r),l=Dl(e,r),ne("invalid",e);break;default:l=r}Ol(n,l),s=l;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?Ho(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Wo(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Dn(e,a):typeof a=="number"&&Dn(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(C.hasOwnProperty(i)?a!=null&&i==="onScroll"&&ne("scroll",e):a!=null&&et(e,i,a,o))}switch(n){case"input":Sr(e),Oo(e,r,!1);break;case"textarea":Sr(e),Uo(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Z(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?un(e,!!r.multiple,i,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return je(t),null;case 6:if(e&&t.stateNode!=null)tu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(m(166));if(n=tn(ar.current),tn(ht.current),Jr(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(i=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:Hr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Hr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return je(t),null;case 13:if(re(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(oe&&He!==null&&(t.mode&1)!==0&&(t.flags&128)===0)la(),Cn(),t.flags|=98560,i=!1;else if(i=Jr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(m(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(m(317));i[mt]=t}else Cn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),i=!1}else it!==null&&(ho(it),it=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(se.current&1)!==0?ge===0&&(ge=3):yo())),t.updateQueue!==null&&(t.flags|=4),je(t),null);case 4:return Pn(),ro(e,t),e===null&&tr(t.stateNode.containerInfo),je(t),null;case 10:return Li(t.type._context),je(t),null;case 17:return De(t.type)&&Kr(),je(t),null;case 19:if(re(se),i=t.memoizedState,i===null)return je(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)pr(i,!1);else{if(ge!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(o=ll(e),o!==null){for(t.flags|=128,pr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return te(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&de()>Rn&&(t.flags|=128,r=!0,pr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ll(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),pr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!oe)return je(t),null}else 2*de()-i.renderingStartTime>Rn&&n!==1073741824&&(t.flags|=128,r=!0,pr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=de(),t.sibling=null,n=se.current,te(se,r?n&1|2:n&1),t):(je(t),null);case 22:case 23:return vo(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?($e&1073741824)!==0&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),null;case 24:return null;case 25:return null}throw Error(m(156,t.tag))}function Sd(e,t){switch(Ni(t),t.tag){case 1:return De(t.type)&&Kr(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Pn(),re(Fe),re(Ce),Ai(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Mi(t),null;case 13:if(re(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(m(340));Cn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(se),null;case 4:return Pn(),null;case 10:return Li(t.type._context),null;case 22:case 23:return vo(),null;case 24:return null;default:return null}}var pl=!1,_e=!1,kd=typeof WeakSet=="function"?WeakSet:Set,j=null;function Tn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ce(e,t,r)}else n.current=null}function lo(e,t,n){try{n()}catch(r){ce(e,t,r)}}var nu=!1;function Ed(e,t){if(gi=Ir,e=Fs(),ai(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,a=-1,g=0,x=0,w=e,v=null;t:for(;;){for(var N;w!==n||l!==0&&w.nodeType!==3||(s=o+l),w!==i||r!==0&&w.nodeType!==3||(a=o+r),w.nodeType===3&&(o+=w.nodeValue.length),(N=w.firstChild)!==null;)v=w,w=N;for(;;){if(w===e)break t;if(v===n&&++g===l&&(s=o),v===i&&++x===r&&(a=o),(N=w.nextSibling)!==null)break;w=v,v=w.parentNode}w=N}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(vi={focusedElem:e,selectionRange:n},Ir=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var P=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var z=P.memoizedProps,fe=P.memoizedState,p=t.stateNode,d=p.getSnapshotBeforeUpdate(t.elementType===t.type?z:ot(t.type,z),fe);p.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(m(163))}}catch(S){ce(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return P=nu,nu=!1,P}function mr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var i=l.destroy;l.destroy=void 0,i!==void 0&&lo(t,n,i)}l=l.next}while(l!==r)}}function ml(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function io(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ru(e){var t=e.alternate;t!==null&&(e.alternate=null,ru(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[rr],delete t[Si],delete t[id],delete t[od])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function lu(e){return e.tag===5||e.tag===3||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||lu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oo(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$r));else if(r!==4&&(e=e.child,e!==null))for(oo(e,t,n),e=e.sibling;e!==null;)oo(e,t,n),e=e.sibling}function so(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(so(e,t,n),e=e.sibling;e!==null;)so(e,t,n),e=e.sibling}var we=null,st=!1;function Vt(e,t,n){for(n=n.child;n!==null;)ou(e,t,n),n=n.sibling}function ou(e,t,n){if(pt&&typeof pt.onCommitFiberUnmount=="function")try{pt.onCommitFiberUnmount(_r,n)}catch{}switch(n.tag){case 5:_e||Tn(n,t);case 6:var r=we,l=st;we=null,Vt(e,t,n),we=r,st=l,we!==null&&(st?(e=we,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):we.removeChild(n.stateNode));break;case 18:we!==null&&(st?(e=we,n=n.stateNode,e.nodeType===8?wi(e.parentNode,n):e.nodeType===1&&wi(e,n),qn(e)):wi(we,n.stateNode));break;case 4:r=we,l=st,we=n.stateNode.containerInfo,st=!0,Vt(e,t,n),we=r,st=l;break;case 0:case 11:case 14:case 15:if(!_e&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var i=l,o=i.destroy;i=i.tag,o!==void 0&&((i&2)!==0||(i&4)!==0)&&lo(n,t,o),l=l.next}while(l!==r)}Vt(e,t,n);break;case 1:if(!_e&&(Tn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ce(n,t,s)}Vt(e,t,n);break;case 21:Vt(e,t,n);break;case 22:n.mode&1?(_e=(r=_e)||n.memoizedState!==null,Vt(e,t,n),_e=r):Vt(e,t,n);break;default:Vt(e,t,n)}}function su(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new kd),t.forEach(function(r){var l=Rd.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:we=s.stateNode,st=!1;break e;case 3:we=s.stateNode.containerInfo,st=!0;break e;case 4:we=s.stateNode.containerInfo,st=!0;break e}s=s.return}if(we===null)throw Error(m(160));ou(i,o,l),we=null,st=!1;var a=l.alternate;a!==null&&(a.return=null),l.return=null}catch(g){ce(l,t,g)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)au(t,e),t=t.sibling}function au(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),vt(e),r&4){try{mr(3,e,e.return),ml(3,e)}catch(z){ce(e,e.return,z)}try{mr(5,e,e.return)}catch(z){ce(e,e.return,z)}}break;case 1:at(t,e),vt(e),r&512&&n!==null&&Tn(n,n.return);break;case 5:if(at(t,e),vt(e),r&512&&n!==null&&Tn(n,n.return),e.flags&32){var l=e.stateNode;try{Dn(l,"")}catch(z){ce(e,e.return,z)}}if(r&4&&(l=e.stateNode,l!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&Mo(l,i),Al(s,o);var g=Al(s,i);for(o=0;o<a.length;o+=2){var x=a[o],w=a[o+1];x==="style"?Ho(l,w):x==="dangerouslySetInnerHTML"?Wo(l,w):x==="children"?Dn(l,w):et(l,x,w,g)}switch(s){case"input":Il(l,i);break;case"textarea":Bo(l,i);break;case"select":var v=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!i.multiple;var N=i.value;N!=null?un(l,!!i.multiple,N,!1):v!==!!i.multiple&&(i.defaultValue!=null?un(l,!!i.multiple,i.defaultValue,!0):un(l,!!i.multiple,i.multiple?[]:"",!1))}l[rr]=i}catch(z){ce(e,e.return,z)}}break;case 6:if(at(t,e),vt(e),r&4){if(e.stateNode===null)throw Error(m(162));l=e.stateNode,i=e.memoizedProps;try{l.nodeValue=i}catch(z){ce(e,e.return,z)}}break;case 3:if(at(t,e),vt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(z){ce(e,e.return,z)}break;case 4:at(t,e),vt(e);break;case 13:at(t,e),vt(e),l=e.child,l.flags&8192&&(i=l.memoizedState!==null,l.stateNode.isHidden=i,!i||l.alternate!==null&&l.alternate.memoizedState!==null||(co=de())),r&4&&su(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(_e=(g=_e)||x,at(t,e),_e=g):at(t,e),vt(e),r&8192){if(g=e.memoizedState!==null,(e.stateNode.isHidden=g)&&!x&&(e.mode&1)!==0)for(j=e,x=e.child;x!==null;){for(w=j=x;j!==null;){switch(v=j,N=v.child,v.tag){case 0:case 11:case 14:case 15:mr(4,v,v.return);break;case 1:Tn(v,v.return);var P=v.stateNode;if(typeof P.componentWillUnmount=="function"){r=v,n=v.return;try{t=r,P.props=t.memoizedProps,P.state=t.memoizedState,P.componentWillUnmount()}catch(z){ce(r,n,z)}}break;case 5:Tn(v,v.return);break;case 22:if(v.memoizedState!==null){du(w);continue}}N!==null?(N.return=v,j=N):du(w)}x=x.sibling}e:for(x=null,w=e;;){if(w.tag===5){if(x===null){x=w;try{l=w.stateNode,g?(i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=w.stateNode,a=w.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=Qo("display",o))}catch(z){ce(e,e.return,z)}}}else if(w.tag===6){if(x===null)try{w.stateNode.nodeValue=g?"":w.memoizedProps}catch(z){ce(e,e.return,z)}}else if((w.tag!==22&&w.tag!==23||w.memoizedState===null||w===e)&&w.child!==null){w.child.return=w,w=w.child;continue}if(w===e)break e;for(;w.sibling===null;){if(w.return===null||w.return===e)break e;x===w&&(x=null),w=w.return}x===w&&(x=null),w.sibling.return=w.return,w=w.sibling}}break;case 19:at(t,e),vt(e),r&4&&su(e);break;case 21:break;default:at(t,e),vt(e)}}function vt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(lu(n)){var r=n;break e}n=n.return}throw Error(m(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dn(l,""),r.flags&=-33);var i=iu(e);so(e,i,l);break;case 3:case 4:var o=r.stateNode.containerInfo,s=iu(e);oo(e,s,o);break;default:throw Error(m(161))}}catch(a){ce(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Cd(e,t,n){j=e,uu(e)}function uu(e,t,n){for(var r=(e.mode&1)!==0;j!==null;){var l=j,i=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||pl;if(!o){var s=l.alternate,a=s!==null&&s.memoizedState!==null||_e;s=pl;var g=_e;if(pl=o,(_e=a)&&!g)for(j=l;j!==null;)o=j,a=o.child,o.tag===22&&o.memoizedState!==null?fu(l):a!==null?(a.return=o,j=a):fu(l);for(;i!==null;)j=i,uu(i),i=i.sibling;j=l,pl=s,_e=g}cu(e)}else(l.subtreeFlags&8772)!==0&&i!==null?(i.return=l,j=i):cu(e)}}function cu(e){for(;j!==null;){var t=j;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:_e||ml(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!_e)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:ot(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&da(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}da(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var g=t.alternate;if(g!==null){var x=g.memoizedState;if(x!==null){var w=x.dehydrated;w!==null&&qn(w)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(m(163))}_e||t.flags&512&&io(t)}catch(v){ce(t,t.return,v)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function du(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function fu(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ml(4,t)}catch(a){ce(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(a){ce(t,l,a)}}var i=t.return;try{io(t)}catch(a){ce(t,i,a)}break;case 5:var o=t.return;try{io(t)}catch(a){ce(t,o,a)}}}catch(a){ce(t,t.return,a)}if(t===e){j=null;break}var s=t.sibling;if(s!==null){s.return=t.return,j=s;break}j=t.return}}var Nd=Math.ceil,hl=Ee.ReactCurrentDispatcher,ao=Ee.ReactCurrentOwner,Je=Ee.ReactCurrentBatchConfig,q=0,ye=null,pe=null,Se=0,$e=0,Ln=Mt(0),ge=0,hr=null,rn=0,gl=0,uo=0,gr=null,Oe=null,co=0,Rn=1/0,_t=null,vl=!1,fo=null,Wt=null,yl=!1,Qt=null,xl=0,vr=0,po=null,wl=-1,Sl=0;function Te(){return(q&6)!==0?de():wl!==-1?wl:wl=de()}function Ht(e){return(e.mode&1)===0?1:(q&2)!==0&&Se!==0?Se&-Se:ad.transition!==null?(Sl===0&&(Sl=is()),Sl):(e=J,e!==0||(e=window.event,e=e===void 0?16:ms(e.type)),e)}function ut(e,t,n,r){if(50<vr)throw vr=0,po=null,Error(m(185));Vn(e,n,r),((q&2)===0||e!==ye)&&(e===ye&&((q&2)===0&&(gl|=n),ge===4&&$t(e,Se)),Ae(e,r),n===1&&q===0&&(t.mode&1)===0&&(Rn=de()+500,Yr&&At()))}function Ae(e,t){var n=e.callbackNode;ac(e,t);var r=Tr(e,e===ye?Se:0);if(r===0)n!==null&&ns(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ns(n),t===1)e.tag===0?sd(mu.bind(null,e)):bs(mu.bind(null,e)),rd(function(){(q&6)===0&&At()}),n=null;else{switch(os(r)){case 1:n=$l;break;case 4:n=rs;break;case 16:n=jr;break;case 536870912:n=ls;break;default:n=jr}n=ku(n,pu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function pu(e,t){if(wl=-1,Sl=0,(q&6)!==0)throw Error(m(327));var n=e.callbackNode;if(In()&&e.callbackNode!==n)return null;var r=Tr(e,e===ye?Se:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=kl(e,r);else{t=r;var l=q;q|=2;var i=gu();(ye!==e||Se!==t)&&(_t=null,Rn=de()+500,on(e,t));do try{Pd();break}catch(s){hu(e,s)}while(!0);Ti(),hl.current=i,q=l,pe!==null?t=0:(ye=null,Se=0,t=ge)}if(t!==0){if(t===2&&(l=ql(e),l!==0&&(r=l,t=mo(e,l))),t===1)throw n=hr,on(e,0),$t(e,r),Ae(e,de()),n;if(t===6)$t(e,r);else{if(l=e.current.alternate,(r&30)===0&&!jd(l)&&(t=kl(e,r),t===2&&(i=ql(e),i!==0&&(r=i,t=mo(e,i))),t===1))throw n=hr,on(e,0),$t(e,r),Ae(e,de()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(m(345));case 2:sn(e,Oe,_t);break;case 3:if($t(e,r),(r&130023424)===r&&(t=co+500-de(),10<t)){if(Tr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=xi(sn.bind(null,e,Oe,_t),t);break}sn(e,Oe,_t);break;case 4:if($t(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-rt(r);i=1<<o,o=t[o],o>l&&(l=o),r&=~i}if(r=l,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Nd(r/1960))-r,10<r){e.timeoutHandle=xi(sn.bind(null,e,Oe,_t),r);break}sn(e,Oe,_t);break;case 5:sn(e,Oe,_t);break;default:throw Error(m(329))}}}return Ae(e,de()),e.callbackNode===n?pu.bind(null,e):null}function mo(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(on(e,t).flags|=256),e=kl(e,t),e!==2&&(t=Oe,Oe=n,t!==null&&ho(t)),e}function ho(e){Oe===null?Oe=e:Oe.push.apply(Oe,e)}function jd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],i=l.getSnapshot;l=l.value;try{if(!lt(i(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $t(e,t){for(t&=~uo,t&=~gl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function mu(e){if((q&6)!==0)throw Error(m(327));In();var t=Tr(e,0);if((t&1)===0)return Ae(e,de()),null;var n=kl(e,t);if(e.tag!==0&&n===2){var r=ql(e);r!==0&&(t=r,n=mo(e,r))}if(n===1)throw n=hr,on(e,0),$t(e,t),Ae(e,de()),n;if(n===6)throw Error(m(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,Oe,_t),Ae(e,de()),null}function go(e,t){var n=q;q|=1;try{return e(t)}finally{q=n,q===0&&(Rn=de()+500,Yr&&At())}}function ln(e){Qt!==null&&Qt.tag===0&&(q&6)===0&&In();var t=q;q|=1;var n=Je.transition,r=J;try{if(Je.transition=null,J=1,e)return e()}finally{J=r,Je.transition=n,q=t,(q&6)===0&&At()}}function vo(){$e=Ln.current,re(Ln)}function on(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nd(n)),pe!==null)for(n=pe.return;n!==null;){var r=n;switch(Ni(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kr();break;case 3:Pn(),re(Fe),re(Ce),Ai();break;case 5:Mi(r);break;case 4:Pn();break;case 13:re(se);break;case 19:re(se);break;case 10:Li(r.type._context);break;case 22:case 23:vo()}n=n.return}if(ye=e,pe=e=qt(e.current,null),Se=$e=t,ge=0,hr=null,uo=gl=rn=0,Oe=gr=null,en!==null){for(t=0;t<en.length;t++)if(n=en[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=l,r.next=o}n.pending=r}en=null}return e}function hu(e,t){do{var n=pe;try{if(Ti(),il.current=ul,ol){for(var r=ae.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}ol=!1}if(nn=0,ve=he=ae=null,ur=!1,cr=0,ao.current=null,n===null||n.return===null){ge=1,hr=t,pe=null;break}e:{var i=e,o=n.return,s=n,a=t;if(t=Se,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var g=a,x=s,w=x.tag;if((x.mode&1)===0&&(w===0||w===11||w===15)){var v=x.alternate;v?(x.updateQueue=v.updateQueue,x.memoizedState=v.memoizedState,x.lanes=v.lanes):(x.updateQueue=null,x.memoizedState=null)}var N=Ua(o);if(N!==null){N.flags&=-257,Va(N,o,s,i,t),N.mode&1&&Ba(i,g,t),t=N,a=g;var P=t.updateQueue;if(P===null){var z=new Set;z.add(a),t.updateQueue=z}else P.add(a);break e}else{if((t&1)===0){Ba(i,g,t),yo();break e}a=Error(m(426))}}else if(oe&&s.mode&1){var fe=Ua(o);if(fe!==null){(fe.flags&65536)===0&&(fe.flags|=256),Va(fe,o,s,i,t),Pi(zn(a,s));break e}}i=a=zn(a,s),ge!==4&&(ge=2),gr===null?gr=[i]:gr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var p=Oa(i,a,t);ca(i,p);break e;case 1:s=a;var d=i.type,h=i.stateNode;if((i.flags&128)===0&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Wt===null||!Wt.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Aa(i,s,t);ca(i,S);break e}}i=i.return}while(i!==null)}yu(n)}catch(T){t=T,pe===n&&n!==null&&(pe=n=n.return);continue}break}while(!0)}function gu(){var e=hl.current;return hl.current=ul,e===null?ul:e}function yo(){(ge===0||ge===3||ge===2)&&(ge=4),ye===null||(rn&268435455)===0&&(gl&268435455)===0||$t(ye,Se)}function kl(e,t){var n=q;q|=2;var r=gu();(ye!==e||Se!==t)&&(_t=null,on(e,t));do try{_d();break}catch(l){hu(e,l)}while(!0);if(Ti(),q=n,hl.current=r,pe!==null)throw Error(m(261));return ye=null,Se=0,ge}function _d(){for(;pe!==null;)vu(pe)}function Pd(){for(;pe!==null&&!bu();)vu(pe)}function vu(e){var t=Su(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?yu(e):pe=t,ao.current=null}function yu(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=wd(n,t,$e),n!==null){pe=n;return}}else{if(n=Sd(n,t),n!==null){n.flags&=32767,pe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,pe=null;return}}if(t=t.sibling,t!==null){pe=t;return}pe=t=e}while(t!==null);ge===0&&(ge=5)}function sn(e,t,n){var r=J,l=Je.transition;try{Je.transition=null,J=1,zd(e,t,n,r)}finally{Je.transition=l,J=r}return null}function zd(e,t,n,r){do In();while(Qt!==null);if((q&6)!==0)throw Error(m(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(m(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(uc(e,i),e===ye&&(pe=ye=null,Se=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||yl||(yl=!0,ku(jr,function(){return In(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=Je.transition,Je.transition=null;var o=J;J=1;var s=q;q|=4,ao.current=null,Ed(e,n),au(n,e),Yc(vi),Ir=!!gi,vi=gi=null,e.current=n,Cd(n),ec(),q=s,J=o,Je.transition=i}else e.current=n;if(yl&&(yl=!1,Qt=e,xl=l),i=e.pendingLanes,i===0&&(Wt=null),rc(n.stateNode),Ae(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(vl)throw vl=!1,e=fo,fo=null,e;return(xl&1)!==0&&e.tag!==0&&In(),i=e.pendingLanes,(i&1)!==0?e===po?vr++:(vr=0,po=e):vr=0,At(),null}function In(){if(Qt!==null){var e=os(xl),t=Je.transition,n=J;try{if(Je.transition=null,J=16>e?16:e,Qt===null)var r=!1;else{if(e=Qt,Qt=null,xl=0,(q&6)!==0)throw Error(m(331));var l=q;for(q|=4,j=e.current;j!==null;){var i=j,o=i.child;if((j.flags&16)!==0){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var g=s[a];for(j=g;j!==null;){var x=j;switch(x.tag){case 0:case 11:case 15:mr(8,x,i)}var w=x.child;if(w!==null)w.return=x,j=w;else for(;j!==null;){x=j;var v=x.sibling,N=x.return;if(ru(x),x===g){j=null;break}if(v!==null){v.return=N,j=v;break}j=N}}}var P=i.alternate;if(P!==null){var z=P.child;if(z!==null){P.child=null;do{var fe=z.sibling;z.sibling=null,z=fe}while(z!==null)}}j=i}}if((i.subtreeFlags&2064)!==0&&o!==null)o.return=i,j=o;else e:for(;j!==null;){if(i=j,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:mr(9,i,i.return)}var p=i.sibling;if(p!==null){p.return=i.return,j=p;break e}j=i.return}}var d=e.current;for(j=d;j!==null;){o=j;var h=o.child;if((o.subtreeFlags&2064)!==0&&h!==null)h.return=o,j=h;else e:for(o=d;j!==null;){if(s=j,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:ml(9,s)}}catch(T){ce(s,s.return,T)}if(s===o){j=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,j=S;break e}j=s.return}}if(q=l,At(),pt&&typeof pt.onPostCommitFiberRoot=="function")try{pt.onPostCommitFiberRoot(_r,e)}catch{}r=!0}return r}finally{J=n,Je.transition=t}}return!1}function xu(e,t,n){t=zn(n,t),t=Oa(e,t,1),e=Ut(e,t,1),t=Te(),e!==null&&(Vn(e,1,t),Ae(e,t))}function ce(e,t,n){if(e.tag===3)xu(e,e,n);else for(;t!==null;){if(t.tag===3){xu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wt===null||!Wt.has(r))){e=zn(n,e),e=Aa(t,e,1),t=Ut(t,e,1),e=Te(),t!==null&&(Vn(t,1,e),Ae(t,e));break}}t=t.return}}function Td(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,ye===e&&(Se&n)===n&&(ge===4||ge===3&&(Se&130023424)===Se&&500>de()-co?on(e,0):uo|=n),Ae(e,t)}function wu(e,t){t===0&&((e.mode&1)===0?t=1:(t=zr,zr<<=1,(zr&130023424)===0&&(zr=4194304)));var n=Te();e=Ct(e,t),e!==null&&(Vn(e,t,n),Ae(e,n))}function Ld(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),wu(e,n)}function Rd(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(m(314))}r!==null&&r.delete(t),wu(e,n)}var Su;Su=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Fe.current)Me=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Me=!1,xd(e,t,n);Me=(e.flags&131072)!==0}else Me=!1,oe&&(t.flags&1048576)!==0&&ea(t,Zr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;fl(e,t),e=t.pendingProps;var l=Sn(t,Ce.current);_n(t,n),l=Vi(null,t,r,e,l,n);var i=Wi();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,De(r)?(i=!0,Xr(t)):i=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Fi(t),l.updater=cl,t.stateNode=l,l._reactInternals=t,Xi(t,r,e,n),t=Ji(null,t,r,!0,i,n)):(t.tag=0,oe&&i&&Ci(t),ze(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(fl(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=Fd(r),e=ot(r,e),l){case 0:t=Zi(null,t,r,e,n);break e;case 1:t=Ka(null,t,r,e,n);break e;case 11:t=Wa(null,t,r,e,n);break e;case 14:t=Qa(null,t,r,ot(r.type,e),n);break e}throw Error(m(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Zi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Ka(e,t,r,l,n);case 3:e:{if(Xa(t),e===null)throw Error(m(387));r=t.pendingProps,i=t.memoizedState,l=i.element,ua(e,t),rl(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){l=zn(Error(m(423)),t),t=Ya(e,t,r,n,l);break e}else if(r!==l){l=zn(Error(m(424)),t),t=Ya(e,t,r,n,l);break e}else for(He=Dt(t.stateNode.containerInfo.firstChild),Qe=t,oe=!0,it=null,n=sa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Cn(),r===l){t=jt(e,t,n);break e}ze(e,t,r,n)}t=t.child}return t;case 5:return fa(t),e===null&&_i(t),r=t.type,l=t.pendingProps,i=e!==null?e.memoizedProps:null,o=l.children,yi(r,l)?o=null:i!==null&&yi(r,i)&&(t.flags|=32),qa(e,t),ze(e,t,o,n),t.child;case 6:return e===null&&_i(t),null;case 13:return Ga(e,t,n);case 4:return Di(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Nn(t,null,r,n):ze(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),Wa(e,t,r,l,n);case 7:return ze(e,t,t.pendingProps,n),t.child;case 8:return ze(e,t,t.pendingProps.children,n),t.child;case 12:return ze(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,i=t.memoizedProps,o=l.value,te(el,r._currentValue),r._currentValue=o,i!==null)if(lt(i.value,o)){if(i.children===l.children&&!Fe.current){t=jt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Nt(-1,n&-n),a.tag=2;var g=i.updateQueue;if(g!==null){g=g.shared;var x=g.pending;x===null?a.next=a:(a.next=x.next,x.next=a),g.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Ri(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(m(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ri(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ze(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,_n(t,n),l=Ge(l),r=r(l),t.flags|=1,ze(e,t,r,n),t.child;case 14:return r=t.type,l=ot(r,t.pendingProps),l=ot(r.type,l),Qa(e,t,r,l,n);case 15:return Ha(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:ot(r,l),fl(e,t),t.tag=1,De(r)?(e=!0,Xr(t)):e=!1,_n(t,n),Da(t,r,l),Xi(t,r,l,n),Ji(null,t,r,!0,e,n);case 19:return Ja(e,t,n);case 22:return $a(e,t,n)}throw Error(m(156,t.tag))};function ku(e,t){return ts(e,t)}function Id(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new Id(e,t,n,r)}function xo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fd(e){if(typeof e=="function")return xo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===dt)return 11;if(e===ft)return 14}return 2}function qt(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function El(e,t,n,r,l,i){var o=2;if(r=e,typeof e=="function")xo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Re:return an(n.children,l,i,t);case Ke:o=8,l|=8;break;case Pt:return e=be(12,n,t,l|2),e.elementType=Pt,e.lanes=i,e;case Ue:return e=be(13,n,t,l),e.elementType=Ue,e.lanes=i,e;case nt:return e=be(19,n,t,l),e.elementType=nt,e.lanes=i,e;case ue:return Cl(n,l,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xt:o=10;break e;case Xt:o=9;break e;case dt:o=11;break e;case ft:o=14;break e;case Ie:o=16,r=null;break e}throw Error(m(130,e==null?e:typeof e,""))}return t=be(o,n,t,l),t.elementType=e,t.type=r,t.lanes=i,t}function an(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function Cl(e,t,n,r){return e=be(22,e,r,t),e.elementType=ue,e.lanes=n,e.stateNode={isHidden:!1},e}function wo(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function So(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Dd(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function ko(e,t,n,r,l,i,o,s,a){return e=new Dd(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=be(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fi(i),e}function Md(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pe,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Eu(e){if(!e)return Ot;e=e._reactInternals;e:{if(Yt(e)!==e||e.tag!==1)throw Error(m(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(De(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(m(171))}if(e.tag===1){var n=e.type;if(De(n))return Zs(e,n,t)}return t}function Cu(e,t,n,r,l,i,o,s,a){return e=ko(n,r,!0,e,l,i,o,s,a),e.context=Eu(null),n=e.current,r=Te(),l=Ht(n),i=Nt(r,l),i.callback=t??null,Ut(n,i,l),e.current.lanes=l,Vn(e,l,r),Ae(e,r),e}function Nl(e,t,n,r){var l=t.current,i=Te(),o=Ht(l);return n=Eu(n),t.context===null?t.context=n:t.pendingContext=n,t=Nt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(l,t,o),e!==null&&(ut(e,l,o,i),nl(e,l,o)),o}function jl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Eo(e,t){Nu(e,t),(e=e.alternate)&&Nu(e,t)}function Od(){return null}var ju=typeof reportError=="function"?reportError:function(e){console.error(e)};function Co(e){this._internalRoot=e}_l.prototype.render=Co.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(m(409));Nl(e,t,null,null)},_l.prototype.unmount=Co.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ln(function(){Nl(null,e,null,null)}),t[wt]=null}};function _l(e){this._internalRoot=e}_l.prototype.unstable_scheduleHydration=function(e){if(e){var t=us();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&t!==0&&t<Rt[n].priority;n++);Rt.splice(n,0,e),n===0&&fs(e)}};function No(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _u(){}function Ad(e,t,n,r,l){if(l){if(typeof r=="function"){var i=r;r=function(){var g=jl(o);i.call(g)}}var o=Cu(t,r,e,0,null,!1,!1,"",_u);return e._reactRootContainer=o,e[wt]=o.current,tr(e.nodeType===8?e.parentNode:e),ln(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var s=r;r=function(){var g=jl(a);s.call(g)}}var a=ko(e,0,!1,null,null,!1,!1,"",_u);return e._reactRootContainer=a,e[wt]=a.current,tr(e.nodeType===8?e.parentNode:e),ln(function(){Nl(t,a,n,r)}),a}function zl(e,t,n,r,l){var i=n._reactRootContainer;if(i){var o=i;if(typeof l=="function"){var s=l;l=function(){var a=jl(o);s.call(a)}}Nl(t,o,e,l)}else o=Ad(n,t,e,l,r);return jl(o)}ss=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Un(t.pendingLanes);n!==0&&(Xl(t,n|1),Ae(t,de()),(q&6)===0&&(Rn=de()+500,At()))}break;case 13:ln(function(){var r=Ct(e,1);if(r!==null){var l=Te();ut(r,e,1,l)}}),Eo(e,1)}},Yl=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var n=Te();ut(t,e,134217728,n)}Eo(e,134217728)}},as=function(e){if(e.tag===13){var t=Ht(e),n=Ct(e,t);if(n!==null){var r=Te();ut(n,e,t,r)}Eo(e,t)}},us=function(){return J},cs=function(e,t){var n=J;try{return J=e,t()}finally{J=n}},Vl=function(e,t,n){switch(t){case"input":if(Il(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=qr(r);if(!l)throw Error(m(90));Fo(r),Il(r,l)}}}break;case"textarea":Bo(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}},Xo=go,Yo=ln;var Bd={usingClientEntryPoint:!1,Events:[lr,xn,qr,qo,Ko,go]},yr={findFiberByHostInstance:Gt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ud={bundleType:yr.bundleType,version:yr.version,rendererPackageName:yr.rendererPackageName,rendererConfig:yr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ee.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bo(e),e===null?null:e.stateNode},findFiberByHostInstance:yr.findFiberByHostInstance||Od,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{_r=Tl.inject(Ud),pt=Tl}catch{}}return Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bd,Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!No(t))throw Error(m(200));return Md(e,t,null,n)},Be.createRoot=function(e,t){if(!No(e))throw Error(m(299));var n=!1,r="",l=ju;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=ko(e,1,!1,null,null,n,!1,r,l),e[wt]=t.current,tr(e.nodeType===8?e.parentNode:e),new Co(t)},Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(m(188)):(e=Object.keys(e).join(","),Error(m(268,e)));return e=bo(t),e=e===null?null:e.stateNode,e},Be.flushSync=function(e){return ln(e)},Be.hydrate=function(e,t,n){if(!Pl(t))throw Error(m(200));return zl(null,e,t,!0,n)},Be.hydrateRoot=function(e,t,n){if(!No(e))throw Error(m(405));var r=n!=null&&n.hydratedSources||null,l=!1,i="",o=ju;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Cu(t,null,e,1,n??null,l,!1,i,o),e[wt]=t.current,tr(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new _l(t)},Be.render=function(e,t,n){if(!Pl(t))throw Error(m(200));return zl(null,e,t,!1,n)},Be.unmountComponentAtNode=function(e){if(!Pl(e))throw Error(m(40));return e._reactRootContainer?(ln(function(){zl(null,null,e,!1,function(){e._reactRootContainer=null,e[wt]=null})}),!0):!1},Be.unstable_batchedUpdates=go,Be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pl(n))throw Error(m(200));if(e==null||e._reactInternals===void 0)throw Error(m(38));return zl(e,t,n,!1,r)},Be.version="18.3.1-next-f1338f8080-20240426",Be}var Du;function Yd(){if(Du)return Po.exports;Du=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(k){console.error(k)}}return c(),Po.exports=Xd(),Po.exports}var Mu;function Gd(){if(Mu)return Ll;Mu=1;var c=Yd();return Ll.createRoot=c.createRoot,Ll.hydrateRoot=c.hydrateRoot,Ll}var Zd=Gd();const Jd=Ou(Zd),Ro="/Fexsa/assets/Fexsa_Logo_White-DbqtYdzr.png",bd=()=>{const[c,k]=Le.useState(!1),[m,D]=Le.useState(!1),[C,M]=Le.useState("home"),G=[{label:"Home",href:"#home"},{label:"About",href:"#about"},{label:"Services",href:"#services"},{label:"Sectors",href:"#sectors"},{label:"Contact",href:"#contact"}];Le.useEffect(()=>{const L=()=>{k(window.scrollY>50);const H=G.map(A=>A.href.substring(1)),B=window.scrollY+100;for(let A=H.length-1;A>=0;A--){const $=document.getElementById(H[A]);if($&&$.offsetTop<=B){M(H[A]);break}}};return window.addEventListener("scroll",L),()=>window.removeEventListener("scroll",L)},[]);const U=L=>{const H=document.querySelector(L);H&&H.scrollIntoView({behavior:"smooth"}),D(!1)};return u.jsxs("nav",{className:`navbar ${c?"scrolled":""}`,children:[u.jsxs("div",{className:"navbar-container",children:[u.jsx("div",{className:"navbar-logo",children:u.jsx("img",{src:Ro,alt:"FEXSA",className:"logo-img"})}),u.jsx("ul",{className:"nav-links desktop-only",children:G.map(L=>u.jsx("li",{children:u.jsx("a",{href:L.href,className:`nav-link ${C===L.href.substring(1)?"active":""}`,onClick:H=>{H.preventDefault(),U(L.href)},children:L.label})},L.href))}),u.jsx("a",{href:"#contact",className:"btn btn-primary cta-button desktop-only",onClick:L=>{L.preventDefault(),U("#contact")},children:"Get In Touch"}),u.jsxs("button",{className:"mobile-menu-toggle mobile-only",onClick:()=>D(!m),"aria-label":"Toggle menu",children:[u.jsx("span",{className:m?"open":""}),u.jsx("span",{className:m?"open":""}),u.jsx("span",{className:m?"open":""})]})]}),m&&u.jsx("div",{className:"mobile-menu mobile-only",children:u.jsxs("ul",{className:"mobile-nav-links",children:[G.map(L=>u.jsx("li",{children:u.jsx("a",{href:L.href,className:`nav-link ${C===L.href.substring(1)?"active":""}`,onClick:H=>{H.preventDefault(),U(L.href)},children:L.label})},L.href)),u.jsx("li",{children:u.jsx("a",{href:"#contact",className:"btn btn-primary mobile-cta",onClick:L=>{L.preventDefault(),U("#contact")},children:"Get In Touch"})})]})}),u.jsx("style",{jsx:!0,children:`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.3s ease;
          background: transparent;
        }

        .navbar.scrolled {
          background: rgba(10, 15, 44, 0.95);
          backdrop-filter: blur(10px);
          padding: 15px 0;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
        }

        .logo-img {
          height: 40px;
        }

        .nav-links {
          display: flex;
          list-style: none;
          gap: 30px;
        }

        .nav-link {
          color: #fff;
          font-weight: 500;
          font-size: 0.95rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          position: relative;
          padding: 5px 0;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #00AEEF;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-link.active {
          color: #00AEEF;
        }

        .cta-button {
          padding: 10px 24px;
          font-size: 0.9rem;
        }

        .mobile-menu-toggle {
          display: flex;
          flex-direction: column;
          gap: 5px;
          background: transparent;
          padding: 5px;
        }

        .mobile-menu-toggle span {
          width: 25px;
          height: 3px;
          background: #fff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .mobile-menu-toggle span.open:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .mobile-menu-toggle span.open:nth-child(2) {
          opacity: 0;
        }

        .mobile-menu-toggle span.open:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(10, 15, 44, 0.98);
          backdrop-filter: blur(10px);
          padding: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .mobile-nav-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .mobile-nav-links .nav-link {
          display: block;
          padding: 10px 0;
          font-size: 1.1rem;
        }

        .mobile-cta {
          display: block;
          text-align: center;
          margin-top: 10px;
        }

        .desktop-only {
          display: flex;
        }

        .mobile-only {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-only {
            display: none !important;
          }

          .mobile-only {
            display: flex;
          }

          .logo-img {
            height: 35px;
          }
        }
      `})]})},ef=()=>u.jsxs("section",{id:"home",className:"hero",children:[u.jsx("div",{className:"hero-overlay"}),u.jsx("div",{className:"hero-grid"}),u.jsxs("div",{className:"hero-content",children:[u.jsx("div",{className:"hero-badge",children:u.jsx("span",{children:"Independent Quality & Inspection Services"})}),u.jsxs("h1",{className:"hero-title",children:["Assuring the Quality",u.jsx("br",{}),u.jsx("span",{className:"hero-highlight",children:"of Works & Controlling It"}),u.jsx("br",{}),"for Success of Targets"]}),u.jsx("p",{className:"hero-text",children:"FEXSA Inspection & Audit Services LLC is an independent quality and inspection company with clear focus and international reach — serving energy, oil & gas, and water treatment industries worldwide."}),u.jsxs("div",{className:"hero-buttons",children:[u.jsx("a",{href:"#services",className:"btn btn-primary",onClick:c=>{c.preventDefault(),document.querySelector("#services").scrollIntoView({behavior:"smooth"})},children:"Our Services"}),u.jsx("a",{href:"#contact",className:"btn btn-secondary",onClick:c=>{c.preventDefault(),document.querySelector("#contact").scrollIntoView({behavior:"smooth"})},children:"Contact Us"})]})]}),u.jsx("div",{className:"hero-logo-watermark",children:u.jsx("img",{src:Ro,alt:"FEXSA"})}),u.jsx("style",{jsx:!0,children:`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0A0F2C 0%, #0D1B5E 50%, #0A0F2C 100%);
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 30% 50%, rgba(0, 174, 239, 0.08) 0%, transparent 60%);
        }

        .hero-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(0, 174, 239, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 174, 239, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.5;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          text-align: center;
          padding: 0 20px;
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.3);
          border-radius: 30px;
          margin-bottom: 30px;
        }

        .hero-badge span {
          color: #00AEEF;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .hero-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin-bottom: 24px;
          text-transform: uppercase;
        }

        .hero-highlight {
          color: #00AEEF;
        }

        .hero-text {
          font-size: 1.15rem;
          color: #B0BEC5;
          line-height: 1.8;
          margin-bottom: 40px;
          max-width: 650px;
          margin-left: auto;
          margin-right: auto;
        }

        .hero-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .hero-logo-watermark {
          position: absolute;
          bottom: 40px;
          right: 40px;
          opacity: 0.06;
          z-index: 1;
        }

        .hero-logo-watermark img {
          width: 200px;
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: 2.8rem;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.2rem;
          }

          .hero-text {
            font-size: 1rem;
          }

          .hero-logo-watermark {
            bottom: 20px;
            right: 20px;
          }

          .hero-logo-watermark img {
            width: 120px;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.8rem;
          }

          .hero-badge span {
            font-size: 0.7rem;
            letter-spacing: 1px;
          }
        }
      `})]}),tf=[{number:"15+",label:"Years Experience"},{number:"12+",label:"Countries Served"},{number:"500+",label:"Projects Completed"},{number:"100%",label:"Client Focus"}],nf=({number:c,label:k})=>{const[m,D]=Le.useState(!1),C=Le.useRef(null),[M,G]=Le.useState(0);return Le.useEffect(()=>{const U=new IntersectionObserver(([L])=>{L.isIntersecting&&D(!0)},{threshold:.3});return C.current&&U.observe(C.current),()=>U.disconnect()},[]),Le.useEffect(()=>{if(!m)return;const U=parseInt(c.replace(/[^0-9]/g,""));c.replace(/[0-9]/g,"").replace(" ","");const L=1500,H=50,B=U/H,A=L/H;let $=0;const me=setInterval(()=>{$+=B,$>=U?(G(U),clearInterval(me)):G(Math.floor($))},A);return()=>clearInterval(me)},[m,c]),u.jsxs("div",{className:"stat-item",ref:C,children:[u.jsx("div",{className:"stat-number",children:m?M+(c.includes("+")?"+":c.includes("%")?"%":""):"0"}),u.jsx("div",{className:"stat-label",children:k})]})},rf=()=>u.jsxs("section",{className:"stats-bar",children:[u.jsx("div",{className:"stats-container",children:tf.map(c=>u.jsx(nf,{number:c.number,label:c.label},c.label))}),u.jsx("style",{jsx:!0,children:`
        .stats-bar {
          background: linear-gradient(135deg, #0D1B5E, #1A2B8A);
          border-top: 3px solid #00AEEF;
          border-bottom: 3px solid #00AEEF;
          padding: 50px 0;
          position: relative;
          z-index: 3;
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
          padding: 0 20px;
        }

        .stat-item {
          text-align: center;
          color: #fff;
        }

        .stat-number {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 3.5rem;
          font-weight: 800;
          color: #00AEEF;
          line-height: 1;
          margin-bottom: 8px;
        }

        .stat-label {
          font-size: 1rem;
          color: #B0BEC5;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (max-width: 768px) {
          .stats-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 25px;
          }

          .stat-number {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 480px) {
          .stats-bar {
            padding: 35px 0;
          }

          .stat-number {
            font-size: 2rem;
          }

          .stat-label {
            font-size: 0.85rem;
          }
        }
      `})]}),lf="/Fexsa/assets/Fexsa_Logo_Colored-BLQEpOPe.png",of=[{icon:"🎯",title:"Precision-Focused",desc:"Every inspection conducted with meticulous attention to compliance, standards, and client requirements."},{icon:"🌍",title:"International Reach",desc:"Operations spanning multiple continents with qualified inspectors deployed globally."},{icon:"🤝",title:"Client-Centric",desc:"Close, trusting relationships maintained through transparent communication and technical excellence."},{icon:"🏅",title:"Certified Professionals",desc:"Specialized, qualified personnel certified in welding, NDT, and industrial quality systems."}],sf=()=>u.jsxs("section",{id:"about",className:"about",children:[u.jsxs("div",{className:"about-container",children:[u.jsxs("div",{className:"about-left",children:[u.jsx("img",{src:lf,alt:"FEXSA",className:"about-logo"}),u.jsx("h2",{className:"section-heading",style:{textAlign:"left"},children:"Who We Are"}),u.jsx("p",{className:"about-text",children:"FEXSA Inspection & Audit Services LLC is an independent Quality and Inspection Services company with a clear focus and international reach. We have a team made up of the best professionals in the sector, which allows us to offer dynamic, client-oriented services with high technical focus."}),u.jsx("p",{className:"about-text",children:"Our team of professionals are specialized, qualified, and committed to the project — always maintaining a close and trusting relationship with the client. We provide Industrial Quality Advisory Services, Inspection Services, Expediting, Supplier Evaluation, Preparation of Welding Specifications, and more."}),u.jsx("a",{href:"#contact",className:"btn btn-primary",onClick:c=>{c.preventDefault(),document.querySelector("#contact").scrollIntoView({behavior:"smooth"})},children:"Talk to Our Team →"})]}),u.jsx("div",{className:"about-right",children:u.jsx("div",{className:"value-cards-grid",children:of.map(c=>u.jsxs("div",{className:"card value-card",children:[u.jsx("div",{className:"value-icon",children:c.icon}),u.jsx("h3",{className:"value-title",children:c.title}),u.jsx("p",{className:"value-desc",children:c.desc})]},c.title))})})]}),u.jsx("style",{jsx:!0,children:`
        .about {
          background: #F4F7FB;
          padding: 80px 0;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }

        .about-logo {
          height: 45px;
          margin-bottom: 20px;
        }

        .about-text {
          font-size: 1.05rem;
          color: #555;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .about-left .btn {
          margin-top: 10px;
        }

        .value-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .value-card {
          text-align: center;
          padding: 24px 16px;
          background: #fff;
        }

        .value-icon {
          font-size: 2rem;
          margin-bottom: 10px;
        }

        .value-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #0D1B5E;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .value-desc {
          font-size: 0.85rem;
          color: #666;
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .value-cards-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .value-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]}),af=[{id:"inspection-expediting",icon:"📦",title:"Inspection & Expediting of Supplies",tags:["Factory Acceptance Tests","NCR Management","Milestone Tracking"],desc:"Manufacturing control and inspection in supplier workshops, ensuring compliance with defined requirements. We identify quality problems, raise applicable Non-Conformity reports, and complement suppliers with expediting services — verifying contractual milestones and manufacturing progress to keep your project on track."},{id:"pressure-equipment",icon:"⚙️",title:"Pressure Equipment Acceptance Testing",tags:["PED 2014/68/EU","ASME BPVC","Hydrostatic Testing"],desc:"Final tests and pressure tests on pressure equipment and assemblies, including testing of safety devices. Our inspectors verify structural integrity, compliance with the Pressure Equipment Directive (PED 2014/68/EU), ASME Boiler &amp; Pressure Vessel Code, and all applicable design specifications before equipment leaves the manufacturer."},{id:"qa-qc",icon:"📋",title:"Inspection Coordination (QA/QC)",tags:["ITP Development","QA/QC Plans","Factory Audits"],desc:"Full coordination of inspection activities from the manufacturing quality standpoint. We review applicable technical documentation, develop and maintain Inspection &amp; Test Plans (ITPs), coordinate inspection visits to factories and supplier workshops, and verify that both specified requirements and best industry practices are consistently met."},{id:"ndt",icon:"🔬",title:"Non-Destructive Testing (NDT)",tags:["UT / RT / MT / PT","Visual Inspection (VT)","Acoustic Emission (AT)"],desc:"Full-spectrum NDT services using standard and advanced methods so that neither the component nor the construction is affected during the test procedure. Our qualified personnel apply Ultrasonic Testing (UT), Radiographic Examination (RT), Magnetic Particle Testing (MT), Penetrant Testing (PT), Visual Testing (VT), Acoustic Emission Testing (AT), and Digital Radiography (CR) in accordance with EN ISO 9712."},{id:"welding",icon:"🔥",title:"Welding Inspection & Qualification",tags:["WPS / PQR","AWS D1.1 / EN ISO 3834","Weld UT Testing"],desc:"Comprehensive welding inspection services for QA/QC purposes, factory acceptance tests, and damage assessments across all construction types. We develop Welding Procedure Specifications (WPS), Procedure Qualification Records (PQR), and Welder Performance Qualifications per AWS D1.1, EN ISO 3834, and ASME Section IX — and support ultrasonic testing of weld seams to verify integrity without material damage."},{id:"supplier",icon:"✅",title:"Supplier Evaluation & Quality Advisory",tags:["Supplier Audits","QMS Assessment","Final Dossiers"],desc:"Thorough evaluation of supplier capabilities, quality management systems, and process controls — ensuring your supply chain meets the highest standards before commitment. We also provide industrial quality advisory services to help organizations implement robust QM frameworks: from ITP and Final Dossier preparation to specification development, procedure qualification for pressure equipment, and ongoing technical customer support."},{id:"remote-inspection",icon:"📡",title:"Remote Inspection & Monitoring",tags:["Continuous Monitoring","Acoustic Emission","Online Dashboard"],desc:"Advanced remote inspection and structural health monitoring solutions for infrastructure and industrial components. Utilizing acoustic emission technology with real-time data transmission (GSM) and trend analysis, we provide continuous oversight of critical assets — enabling predictive maintenance and early failure detection without the need for on-site personnel."},{id:"damage-analysis",icon:"🔍",title:"Damage Analysis & Failure Investigation",tags:["Root Cause Analysis","NDT Investigation","Forensic Engineering"],desc:"Comprehensive damage analysis and failure investigation services to determine the root causes of material defects, structural failures, and equipment malfunctions. Our team uses advanced NDT methods and metallurgical techniques to assess damage, evaluate repair effectiveness, and provide actionable recommendations to prevent recurrence."},{id:"plant-safety",icon:"🏭",title:"Plant Safety & Risk Assessment",tags:["QRA","Steam Boiler","PED Compliance"],desc:"Quantitative Risk Assessment (QRA) and plant safety inspections for industrial facilities, steam boilers, pressure equipment, and processing plants. We evaluate operational risks, verify compliance with safety regulations, and recommend mitigation strategies to ensure the protection of personnel, assets, and the environment."},{id:"system-monitoring",icon:"📊",title:"System Monitoring & Compliance",tags:["Building Code","F-GAS","ISO Audits"],desc:"Ongoing system monitoring and compliance verification for technical installations, building code requirements, environmental regulations (F-GAS), and quality management systems (ISO 9001, ISO 14001). We provide periodic inspections, audits, and certification support to maintain regulatory compliance and operational excellence."}],uf=()=>u.jsxs("section",{id:"services",className:"services",children:[u.jsx("h2",{className:"section-heading light",children:"Our Main Services"}),u.jsx("p",{className:"section-subheading light",children:"Comprehensive testing, inspection, and quality services — delivered by certified professionals with decades of international project experience across energy, oil & gas, and industrial sectors."}),u.jsx("div",{className:"services-grid",children:af.map(c=>u.jsxs("div",{className:"card service-card",children:[u.jsx("div",{className:"service-icon",children:c.icon}),u.jsx("h3",{className:"service-title",children:c.title}),u.jsx("div",{className:"service-tags",children:c.tags.map(k=>u.jsx("span",{className:"badge badge-outline",children:k},k))}),u.jsx("p",{className:"service-desc",children:c.desc})]},c.id))}),u.jsx("style",{jsx:!0,children:`
        .services {
          background: #0A0F2C;
          padding: 80px 0;
        }

        .services-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 28px;
          color: #fff;
        }

        .service-card:hover {
          background: rgba(255, 255, 255, 0.06);
          border-color: #00AEEF;
          transform: translateY(-4px);
        }

        .service-icon {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .service-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 12px;
          line-height: 1.3;
        }

        .service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 14px;
        }

        .service-tags .badge {
          font-size: 0.7rem;
          padding: 4px 10px;
          background: rgba(0, 174, 239, 0.1);
          border: 1px solid rgba(0, 174, 239, 0.3);
          color: #00AEEF;
          border-radius: 12px;
        }

        .service-desc {
          font-size: 0.9rem;
          color: #B0BEC5;
          line-height: 1.65;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `})]}),cf=[{code:"UT",title:"Ultrasonic Testing",desc:"Detection of internal flaws and weld defects using high-frequency sound waves, including standard and phased-array techniques."},{code:"RT",title:"Radiographic Examination",desc:"Digital and conventional radiography (CR/DR) for volumetric inspection of welds, castings, and pressure components."},{code:"MT",title:"Magnetic Particle Testing",desc:"Detection of surface and near-surface material separations in ferromagnetic materials such as weld joints and structural steel."},{code:"PT",title:"Penetrant Testing",desc:"Dye penetrant testing to reveal open surface discontinuities in non-porous materials, commonly used on austenitic welds."},{code:"VT",title:"Visual Testing",desc:"External and internal examination by certified inspectors — the foundation of every inspection program, covering dimensional and surface checks."},{code:"AT",title:"Acoustic Emission Testing",desc:"Real-time detection of active defects in pressure vessels, storage tanks, and pipelines under operational or proof-test loads."}],df=()=>u.jsxs("section",{id:"ndt-methods",className:"ndt-methods",children:[u.jsx("h2",{className:"section-heading light",children:"Non-Destructive Testing (NDT) Methods"}),u.jsxs("p",{className:"section-subheading light",style:{marginBottom:"30px"},children:["All methods applied so that neither the component nor the structure is affected during the test — personnel certified to"," ",u.jsx("strong",{style:{color:"#00AEEF"},children:"EN ISO 9712"}),"."]}),u.jsx("div",{className:"ndt-grid",children:cf.map(c=>u.jsxs("div",{className:"ndt-card",children:[u.jsx("span",{className:"badge ndt-code",children:c.code}),u.jsx("h3",{className:"ndt-title",children:c.title}),u.jsx("p",{className:"ndt-desc",children:c.desc})]},c.code))}),u.jsx("style",{jsx:!0,children:`
        .ndt-methods {
          background: #080B25;
          padding: 80px 0;
        }

        .ndt-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .ndt-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 8px;
          padding: 24px;
          text-align: center;
          transition: all 0.3s ease;
        }

        .ndt-card:hover {
          border-color: #00AEEF;
          background: rgba(255, 255, 255, 0.05);
        }

        .ndt-code {
          background: #00AEEF;
          color: #0A0F2C;
          font-size: 0.85rem;
          font-weight: 700;
          padding: 6px 16px;
          margin-bottom: 14px;
          display: inline-block;
          border-radius: 4px;
        }

        .ndt-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .ndt-desc {
          font-size: 0.88rem;
          color: #B0BEC5;
          line-height: 1.55;
        }

        @media (max-width: 1024px) {
          .ndt-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .ndt-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]}),ff=[{icon:"📜",title:"ISO 9001 Quality Management",desc:"Comprehensive audit and certification support for ISO 9001 quality management systems, helping organizations implement robust QM frameworks that meet international standards."},{icon:"🌿",title:"ISO 14001 Environmental Management",desc:"Guidance and assessment for ISO 14001 environmental management system certification, enabling companies to demonstrate environmental responsibility and regulatory compliance."},{icon:"👤",title:"Product & Personnel Certification",desc:"Independent verification of product conformity and personnel competencies — ensuring that both manufactured goods and certified professionals meet required specifications."},{icon:"✓",title:"Verification of Conformity",desc:"Third-party verification that persons, systems, and products comply with applicable directives, standards, and contractual requirements throughout the supply chain."}],pf=["ISO 9001","EN ISO 9712","ASME BPVC","API 570/653","EN ISO 3834","PED 2014/68/EU"],mf=()=>u.jsxs("section",{id:"certification",className:"certification",children:[u.jsx("h2",{className:"section-heading light",children:"Certification & Compliance Services"}),u.jsx("p",{className:"section-subheading light",children:"Independent verification and certification support across quality, environmental, and product standards — backed by international accreditations."}),u.jsx("div",{className:"cert-grid",children:ff.map(c=>u.jsxs("div",{className:"card cert-card",children:[u.jsx("div",{className:"cert-icon",children:c.icon}),u.jsx("h3",{className:"cert-title",children:c.title}),u.jsx("p",{className:"cert-desc",children:c.desc})]},c.title))}),u.jsx("div",{className:"standards-bar",children:pf.map(c=>u.jsx("span",{className:"badge",children:c},c))}),u.jsx("style",{jsx:!0,children:`
        .certification {
          background: #0D1B5E;
          padding: 80px 0;
        }

        .cert-grid {
          max-width: 1200px;
          margin: 0 auto 40px;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .cert-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
          padding: 28px 18px;
          color: #fff;
        }

        .cert-card:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #00AEEF;
        }

        .cert-icon {
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .cert-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #00AEEF;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .cert-desc {
          font-size: 0.85rem;
          color: #B0BEC5;
          line-height: 1.55;
        }

        .standards-bar {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
        }

        .standards-bar .badge {
          background: rgba(0, 174, 239, 0.15);
          color: #00AEEF;
          font-size: 0.85rem;
          padding: 8px 18px;
        }

        @media (max-width: 1024px) {
          .cert-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .cert-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]}),hf=[{icon:"💧",name:"Water Treatment Plants",specialisations:["Effluent treatment plants","Desalination plants","Process water systems"]},{icon:"⚡",name:"Conventional Energy",specialisations:["Combined Cycles","Cogeneration plants","Internal Combustion plants"]},{icon:"☀️",name:"Renewable Energy",specialisations:["Photovoltaic plants","Solar Tower plants","Parabolic Cylinder Collector plants","Hybrid plants"]},{icon:"🛢️",name:"Oil & Gas Plants",specialisations:["Upstream Facilities","Midstream Facilities","Downstream Facilities"]},{icon:"🚗",name:"Automotive Industry",specialisations:["Component testing","Manufacturing audits","Supplier quality verification"]},{icon:"🏗️",name:"Construction & Real Estate",specialisations:["Building code compliance","Structural inspection","Materials testing"]},{icon:"🚆",name:"Transport & Traffic",specialisations:["Infrastructure monitoring","Bridge inspection","Rolling stock assessment"]},{icon:"⚙️",name:"Machinery & Manufacturing",specialisations:["Equipment certification","Process validation","Quality system audits"]}],gf=()=>u.jsxs("section",{id:"sectors",className:"sectors",children:[u.jsx("h2",{className:"section-heading",children:"Sectors We Serve"}),u.jsx("p",{className:"section-subheading",children:"At FEXSA we have extensive experience in international projects across the most demanding industrial sectors. Our inspectors are trained for the unique challenges of each domain."}),u.jsx("div",{className:"sectors-grid",children:hf.map(c=>u.jsxs("div",{className:"card sector-card",children:[u.jsx("div",{className:"sector-icon",children:c.icon}),u.jsx("h3",{className:"sector-name",children:c.name}),u.jsx("ul",{className:"sector-list",children:c.specialisations.map(k=>u.jsx("li",{children:k},k))})]},c.name))}),u.jsx("style",{jsx:!0,children:`
        .sectors {
          background: #EEF3F8;
          padding: 80px 0;
        }

        .sectors-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .sector-card {
          text-align: center;
          padding: 30px 20px;
          background: #fff;
        }

        .sector-card:hover {
          border-color: #1565C0;
          box-shadow: 0 8px 25px rgba(13, 27, 94, 0.12);
        }

        .sector-icon {
          font-size: 2.5rem;
          margin-bottom: 12px;
        }

        .sector-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0D1B5E;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .sector-list {
          list-style: none;
          text-align: left;
        }

        .sector-list li {
          font-size: 0.88rem;
          color: #666;
          padding: 4px 0;
          position: relative;
          padding-left: 16px;
        }

        .sector-list li::before {
          content: '›';
          position: absolute;
          left: 0;
          color: #00AEEF;
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .sectors-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .sectors-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `})]}),vf=[{label:"ISO 9001 Certification",href:"#certification"},{label:"NDT Services",href:"#ndt-methods"},{label:"Pressure Equipment Testing",href:"#services"},{label:"Welding Inspection",href:"#services"},{label:"Remote Monitoring",href:"#services"},{label:"Supplier Audits",href:"#services"}],yf=()=>u.jsxs("section",{className:"popular-solutions",children:[u.jsx("h2",{className:"section-heading light",children:"Popular Solutions"}),u.jsx("div",{className:"popular-grid",children:vf.map(c=>u.jsxs("a",{href:c.href,className:"popular-link",onClick:k=>{k.preventDefault();const m=document.querySelector(c.href);m&&m.scrollIntoView({behavior:"smooth"})},children:[c.label," →"]},c.label))}),u.jsx("style",{jsx:!0,children:`
        .popular-solutions {
          background: #080B25;
          padding: 60px 0;
        }

        .popular-grid {
          max-width: 1200px;
          margin: 30px auto 0;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .popular-link {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px 20px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 6px;
          color: #fff;
          font-weight: 500;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          text-align: center;
        }

        .popular-link:hover {
          background: rgba(0, 174, 239, 0.12);
          border-color: #00AEEF;
          color: #00AEEF;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .popular-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .popular-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]}),xf=[{num:"01",title:"Independent & Impartial",desc:"No conflicts of interest — we work solely in your project's best interest."},{num:"02",title:"Globally Deployed",desc:"Inspectors available in key industrial hubs across Europe, Middle East, Asia, and Americas."},{num:"03",title:"Technical Excellence",desc:"Senior engineers with advanced certifications in welding, NDT, and quality systems."},{num:"04",title:"Fast Response",desc:"Agile mobilization of inspection teams to meet critical project timelines."},{num:"05",title:"Full Documentation",desc:"Comprehensive reporting, ITPs, Non-Conformity reports, and final dossiers."},{num:"06",title:"Trusted Relationships",desc:"Long-term partnerships built on transparency, honesty, and consistent results."}],wf=()=>u.jsxs("section",{id:"why-fexsa",className:"why-fexsa",children:[u.jsx("h2",{className:"section-heading light",children:"Why Choose FEXSA"}),u.jsx("p",{className:"section-subheading light",children:"What sets us apart in the competitive world of industrial inspection and audit services."}),u.jsx("div",{className:"why-grid",children:xf.map(c=>u.jsxs("div",{className:"why-item",children:[u.jsx("div",{className:"why-number",children:c.num}),u.jsxs("div",{className:"why-content",children:[u.jsx("h3",{className:"why-title",children:c.title}),u.jsx("p",{className:"why-desc",children:c.desc})]})]},c.num))}),u.jsx("style",{jsx:!0,children:`
        .why-fexsa {
          background: linear-gradient(135deg, #1A2B8A, #0D1B5E);
          padding: 80px 0;
        }

        .why-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .why-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 24px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .why-item:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: #00AEEF;
        }

        .why-number {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #00AEEF;
          line-height: 1;
          flex-shrink: 0;
        }

        .why-content {
          flex: 1;
        }

        .why-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .why-desc {
          font-size: 0.88rem;
          color: #B0BEC5;
          line-height: 1.5;
        }

        @media (max-width: 1024px) {
          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .why-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]});class wr{constructor(k=0,m="Network Error"){this.status=k,this.text=m}}const Sf=()=>{if(!(typeof localStorage>"u"))return{get:c=>Promise.resolve(localStorage.getItem(c)),set:(c,k)=>Promise.resolve(localStorage.setItem(c,k)),remove:c=>Promise.resolve(localStorage.removeItem(c))}},ke={origin:"https://api.emailjs.com",blockHeadless:!1,storageProvider:Sf()},Io=c=>c?typeof c=="string"?{publicKey:c}:c.toString()==="[object Object]"?c:{}:{},kf=(c,k="https://api.emailjs.com")=>{if(!c)return;const m=Io(c);ke.publicKey=m.publicKey,ke.blockHeadless=m.blockHeadless,ke.storageProvider=m.storageProvider,ke.blockList=m.blockList,ke.limitRate=m.limitRate,ke.origin=m.origin||k},Au=async(c,k,m={})=>{const D=await fetch(ke.origin+c,{method:"POST",headers:m,body:k}),C=await D.text(),M=new wr(D.status,C);if(D.ok)return M;throw M},Bu=(c,k,m)=>{if(!c||typeof c!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!k||typeof k!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!m||typeof m!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},Ef=c=>{if(c&&c.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Uu=c=>c.webdriver||!c.languages||c.languages.length===0,Vu=()=>new wr(451,"Unavailable For Headless Browser"),Cf=(c,k)=>{if(!Array.isArray(c))throw"The BlockList list has to be an array";if(typeof k!="string")throw"The BlockList watchVariable has to be a string"},Nf=c=>{var k;return!((k=c.list)!=null&&k.length)||!c.watchVariable},jf=(c,k)=>c instanceof FormData?c.get(k):c[k],Wu=(c,k)=>{if(Nf(c))return!1;Cf(c.list,c.watchVariable);const m=jf(k,c.watchVariable);return typeof m!="string"?!1:c.list.includes(m)},Qu=()=>new wr(403,"Forbidden"),_f=(c,k)=>{if(typeof c!="number"||c<0)throw"The LimitRate throttle has to be a positive number";if(k&&typeof k!="string")throw"The LimitRate ID has to be a non-empty string"},Pf=async(c,k,m)=>{const D=Number(await m.get(c)||0);return k-Date.now()+D},Hu=async(c,k,m)=>{if(!k.throttle||!m)return!1;_f(k.throttle,k.id);const D=k.id||c;return await Pf(D,k.throttle,m)>0?!0:(await m.set(D,Date.now().toString()),!1)},$u=()=>new wr(429,"Too Many Requests"),zf=async(c,k,m,D)=>{const C=Io(D),M=C.publicKey||ke.publicKey,G=C.blockHeadless||ke.blockHeadless,U=C.storageProvider||ke.storageProvider,L={...ke.blockList,...C.blockList},H={...ke.limitRate,...C.limitRate};return G&&Uu(navigator)?Promise.reject(Vu()):(Bu(M,c,k),Ef(m),m&&Wu(L,m)?Promise.reject(Qu()):await Hu(location.pathname,H,U)?Promise.reject($u()):Au("/api/v1.0/email/send",JSON.stringify({lib_version:"4.4.1",user_id:M,service_id:c,template_id:k,template_params:m}),{"Content-type":"application/json"}))},Tf=c=>{if(!c||c.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},Lf=c=>typeof c=="string"?document.querySelector(c):c,Rf=async(c,k,m,D)=>{const C=Io(D),M=C.publicKey||ke.publicKey,G=C.blockHeadless||ke.blockHeadless,U=ke.storageProvider||C.storageProvider,L={...ke.blockList,...C.blockList},H={...ke.limitRate,...C.limitRate};if(G&&Uu(navigator))return Promise.reject(Vu());const B=Lf(m);Bu(M,c,k),Tf(B);const A=new FormData(B);return Wu(L,A)?Promise.reject(Qu()):await Hu(location.pathname,H,U)?Promise.reject($u()):(A.append("lib_version","4.4.1"),A.append("service_id",c),A.append("template_id",k),A.append("user_id",M),Au("/api/v1.0/email/send-form",A))},If={init:kf,send:zf,sendForm:Rf,EmailJSResponseStatus:wr},Ff="service_fexsa",Df="template_fexsa_contact",Mf="YOUR_PUBLIC_KEY_HERE",Of=()=>{const[c,k]=Le.useState({subject:"",name:"",email:"",mobile:"",details:""}),[m,D]=Le.useState("idle"),[C,M]=Le.useState({}),G=()=>{const B={};return c.subject.trim()||(B.subject="Subject is required"),c.name.trim()||(B.name="Name is required"),c.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email)||(B.email="Please enter a valid email"):B.email="Email is required",c.details.trim()||(B.details="Details are required"),M(B),Object.keys(B).length===0},U=B=>{const{name:A,value:$}=B.target;k(me=>({...me,[A]:$})),C[A]&&M(me=>({...me,[A]:""}))},L=async B=>{if(B.preventDefault(),!!G()){D("loading");try{await If.send(Ff,Df,{subject:c.subject,from_name:c.name,reply_to:c.email,mobile:c.mobile,message:c.details,to_email:"shadysamir335@gmail.com"},Mf),D("sent")}catch{const $=`mailto:shadysamir335@gmail.com?subject=${encodeURIComponent(c.subject)}&body=${encodeURIComponent(`Name: ${c.name}
Email: ${c.email}
Mobile: ${c.mobile}

Details:
${c.details}`)}`;window.location.href=$,D("sent")}}},H=[{label:"Email",value:"info@fexsa.net",href:"mailto:info@fexsa.net",icon:"✉️"},{label:"Phone / WhatsApp",value:"(+971) 50 225 93 01",href:"tel:+971502259301",icon:"📱"},{label:"Phone 2",value:"(+971) 52 435 02 07",href:"tel:+971524350207",icon:"📱"}];return u.jsxs("section",{id:"contact",className:"contact",children:[u.jsx("h2",{className:"section-heading light",children:"Get In Touch"}),u.jsx("p",{className:"section-subheading light",children:"Ready to ensure the quality of your next project? Reach out to our team of specialists and we will get back to you promptly."}),u.jsxs("div",{className:"contact-grid",children:[u.jsxs("div",{className:"contact-info",children:[u.jsx("h3",{className:"contact-info-title",children:"Contact Details"}),u.jsx("div",{className:"contact-info-list",children:H.map(B=>u.jsxs("a",{href:B.href,className:"contact-info-item",children:[u.jsx("span",{className:"contact-icon",children:B.icon}),u.jsxs("div",{children:[u.jsx("div",{className:"contact-label",children:B.label}),u.jsx("div",{className:"contact-value",children:B.value})]})]},B.label))})]}),u.jsxs("div",{className:"contact-form-wrapper",children:[u.jsx("h3",{className:"contact-form-title",children:"Send Us a Message"}),m==="sent"?u.jsxs("div",{className:"form-success",children:[u.jsx("div",{className:"success-icon",children:"✓"}),u.jsx("h4",{children:"Message Sent!"}),u.jsx("p",{children:"Thank you for reaching out. We will get back to you shortly."}),u.jsx("button",{className:"btn btn-primary",onClick:()=>{D("idle"),k({subject:"",name:"",email:"",mobile:"",details:""})},children:"Send Another Message"})]}):u.jsxs("form",{className:"contact-form",onSubmit:L,children:[u.jsxs("div",{className:"form-field",children:[u.jsx("label",{htmlFor:"subject",children:"Subject *"}),u.jsx("input",{type:"text",id:"subject",name:"subject",value:c.subject,onChange:U,placeholder:"e.g. Inspection services inquiry",className:C.subject?"error":""}),C.subject&&u.jsx("span",{className:"error-text",children:C.subject})]}),u.jsxs("div",{className:"form-field",children:[u.jsx("label",{htmlFor:"name",children:"Full Name *"}),u.jsx("input",{type:"text",id:"name",name:"name",value:c.name,onChange:U,placeholder:"Your full name",className:C.name?"error":""}),C.name&&u.jsx("span",{className:"error-text",children:C.name})]}),u.jsxs("div",{className:"form-field",children:[u.jsx("label",{htmlFor:"email",children:"Email Address *"}),u.jsx("input",{type:"email",id:"email",name:"email",value:c.email,onChange:U,placeholder:"your@email.com",className:C.email?"error":""}),C.email&&u.jsx("span",{className:"error-text",children:C.email})]}),u.jsxs("div",{className:"form-field",children:[u.jsx("label",{htmlFor:"mobile",children:"Mobile Number"}),u.jsx("input",{type:"tel",id:"mobile",name:"mobile",value:c.mobile,onChange:U,placeholder:"+971 XX XXX XXXX"})]}),u.jsxs("div",{className:"form-field full-width",children:[u.jsx("label",{htmlFor:"details",children:"Details *"}),u.jsx("textarea",{id:"details",name:"details",value:c.details,onChange:U,placeholder:"Describe your project or inquiry in detail…",rows:"6",className:C.details?"error":""}),C.details&&u.jsx("span",{className:"error-text",children:C.details})]}),u.jsx("button",{type:"submit",className:"btn-submit",disabled:m==="loading",children:m==="loading"?"Sending…":"Submit Message →"})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .contact {
          background: #0A0F2C;
          padding: 80px 0;
        }

        .contact-grid {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 40px;
          align-items: start;
        }

        /* Contact Info */
        .contact-info {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 30px;
        }

        .contact-info-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #00AEEF;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-info-item {
          display: flex;
          gap: 14px;
          align-items: center;
          padding: 16px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 6px;
          transition: background 0.3s ease;
        }

        .contact-info-item:hover {
          background: rgba(0, 174, 239, 0.1);
        }

        .contact-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .contact-label {
          font-size: 0.75rem;
          color: #00AEEF;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 600;
        }

        .contact-value {
          color: #fff;
          font-size: 1rem;
          margin-top: 2px;
        }

        /* Contact Form */
        .contact-form-wrapper {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 30px;
        }

        .contact-form-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #00AEEF;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .contact-form {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .form-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-field.full-width {
          grid-column: 1 / -1;
        }

        .form-field label {
          color: #B0BEC5;
          font-size: 0.85rem;
          font-weight: 500;
        }

        .form-field input,
        .form-field textarea {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 4px;
          padding: 12px 14px;
          color: #fff;
          font-size: 0.95rem;
          transition: border-color 0.3s ease;
        }

        .form-field input:focus,
        .form-field textarea:focus {
          border-color: #00AEEF;
          outline: none;
        }

        .form-field input::placeholder,
        .form-field textarea::placeholder {
          color: rgba(176, 190, 197, 0.5);
        }

        .form-field input.error,
        .form-field textarea.error {
          border-color: #ff4444;
        }

        .error-text {
          color: #ff4444;
          font-size: 0.8rem;
        }

        .form-field textarea {
          resize: vertical;
          min-height: 120px;
        }

        .contact-form .btn-submit {
          grid-column: 1 / -1;
        }

        /* Success State */
        .form-success {
          text-align: center;
          padding: 40px 20px;
          color: #fff;
        }

        .success-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 60px;
          height: 60px;
          background: #00AEEF;
          color: #0A0F2C;
          border-radius: 50%;
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .form-success h4 {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.5rem;
          margin-bottom: 8px;
        }

        .form-success p {
          color: #B0BEC5;
          margin-bottom: 24px;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .contact-form {
            grid-template-columns: 1fr;
          }
        }
      `})]})},Af=()=>{const c=["Inspection & Expediting","Quality Technicians","Welding & NDT","Supplier Evaluation","QA/QC Coordination"],k=[{label:"About Us",href:"#about"},{label:"Sectors",href:"#sectors"},{label:"Contact",href:"#contact"}];return u.jsxs("footer",{className:"footer",children:[u.jsxs("div",{className:"footer-container",children:[u.jsxs("div",{className:"footer-main",children:[u.jsxs("div",{className:"footer-brand",children:[u.jsx("img",{src:Ro,alt:"FEXSA",className:"footer-logo"}),u.jsx("p",{className:"footer-tagline",children:"FEXSA Inspection & Audit Services LLC — Assuring the Quality of Works and Controlling it for getting the Success of Targets."})]}),u.jsxs("div",{className:"footer-column",children:[u.jsx("h4",{className:"footer-title",children:"Services"}),u.jsx("ul",{className:"footer-links",children:c.map(D=>u.jsx("li",{children:u.jsx("a",{href:"#services",onClick:C=>{C.preventDefault();const M=document.querySelector("#services");M&&M.scrollIntoView({behavior:"smooth"})},children:D})},D))})]}),u.jsxs("div",{className:"footer-column",children:[u.jsx("h4",{className:"footer-title",children:"Company"}),u.jsx("ul",{className:"footer-links",children:k.map(D=>u.jsx("li",{children:u.jsx("a",{href:D.href,onClick:C=>{C.preventDefault();const M=document.querySelector(D.href);M&&M.scrollIntoView({behavior:"smooth"})},children:D.label})},D.label))})]}),u.jsxs("div",{className:"footer-column",children:[u.jsx("h4",{className:"footer-title",children:"Contact"}),u.jsxs("ul",{className:"footer-links",children:[u.jsx("li",{children:u.jsx("a",{href:"mailto:info@fexsa.net",children:"info@fexsa.net"})}),u.jsx("li",{className:"footer-phone",children:"(+971) 50 225 93 01"}),u.jsx("li",{className:"footer-phone",children:"(+971) 52 435 02 07"})]})]})]}),u.jsx("div",{className:"footer-bottom",children:u.jsxs("p",{children:["© ",2025," FEXSA Inspection & Audit Services LLC. All rights reserved."]})})]}),u.jsx("style",{jsx:!0,children:`
        .footer {
          background: #0A0A1A;
          padding: 60px 0 0;
          color: #B0BEC5;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-main {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 40px;
          padding-bottom: 40px;
        }

        .footer-logo {
          height: 35px;
          margin-bottom: 16px;
        }

        .footer-tagline {
          font-size: 0.9rem;
          line-height: 1.6;
          color: #666;
        }

        .footer-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #fff;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .footer-links a {
          color: #666;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #00AEEF;
        }

        .footer-phone {
          font-size: 0.9rem;
          color: #666;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding: 20px 0;
          text-align: center;
        }

        .footer-bottom p {
          font-size: 0.85rem;
          color: #555;
        }

        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 768px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer {
            padding: 40px 0 0;
          }
        }
      `})]})};function Bf(){return Le.useRef({}),Le.useEffect(()=>{const c=new IntersectionObserver(m=>{m.forEach(D=>{D.isIntersecting&&D.target.classList.add("visible")})},{threshold:.1});return document.querySelectorAll(".fade-in").forEach(m=>c.observe(m)),()=>c.disconnect()},[]),u.jsxs("div",{className:"app",children:[u.jsx(bd,{}),u.jsxs("main",{children:[u.jsx(ef,{}),u.jsx(rf,{}),u.jsx(sf,{}),u.jsx(uf,{}),u.jsx(df,{}),u.jsx(mf,{}),u.jsx(gf,{}),u.jsx(yf,{}),u.jsx(wf,{}),u.jsx(Of,{})]}),u.jsx(Af,{})]})}Jd.createRoot(document.getElementById("root")).render(u.jsx($d.StrictMode,{children:u.jsx(Bf,{})}));
