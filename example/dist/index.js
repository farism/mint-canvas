var Mint=function(){"use strict";var t,e,n,r,o,i,a={},s=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(t,e){for(var n in e)t[n]=e[n];return t}function l(t){var e=t.parentNode;e&&e.removeChild(t)}function h(t,e,n){var r,o=arguments,i={};for(r in e)"key"!==r&&"ref"!==r&&(i[r]=e[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===i[r]&&(i[r]=t.defaultProps[r]);return f(t,i,e&&e.key,e&&e.ref,null)}function f(e,n,r,o,i){var a={type:e,props:n,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i};return null==i&&(a.__v=a),t.vnode&&t.vnode(a),a}function d(t){return t.children}function p(t,e){this.props=t,this.context=e}function m(t,e){if(null==e)return t.__?m(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?m(t):null}function y(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return y(t)}}function _(i){(!i.__d&&(i.__d=!0)&&e.push(i)&&!n++||o!==t.debounceRendering)&&((o=t.debounceRendering)||r)(g)}function g(){for(var t;n=e.length;)t=e.sort((function(t,e){return t.__v.__b-e.__v.__b})),e=[],t.some((function(t){var e,n,r,o,i,a,s;t.__d&&(a=(i=(e=t).__v).__e,(s=e.__P)&&(n=[],(r=c({},i)).__v=r,o=S(s,i,r,e.__n,void 0!==s.ownerSVGElement,null,n,null==a?m(i):a),T(n,i),o!=a&&y(i)))}))}function v(t,e,n,r,o,i,u,c,h,p){var y,_,g,v,w,b,k,x,T,E=r&&r.__k||s,D=E.length;for(h==a&&(h=null!=u?u[0]:D?m(r,0):null),n.__k=[],y=0;y<e.length;y++)if(null!=(v=n.__k[y]=null==(v=e[y])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v?f(null,v,null,null,v):Array.isArray(v)?f(d,{children:v},null,null,null):null!=v.__e||null!=v.__c?f(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(g=E[y])||g&&v.key==g.key&&v.type===g.type)E[y]=void 0;else for(_=0;_<D;_++){if((g=E[_])&&v.key==g.key&&v.type===g.type){E[_]=void 0;break}g=null}if(w=S(t,v,g=g||a,o,i,u,c,h,p),(_=v.ref)&&g.ref!=_&&(x||(x=[]),g.ref&&x.push(g.ref,null,v),x.push(_,v.__c||w,v)),null!=w){if(null==k&&(k=w),T=void 0,void 0!==v.__d)T=v.__d,v.__d=void 0;else if(u==g||w!=h||null==w.parentNode){t:if(null==h||h.parentNode!==t)t.appendChild(w),T=null;else{for(b=h,_=0;(b=b.nextSibling)&&_<D;_+=2)if(b==w)break t;t.insertBefore(w,h),T=h}"option"==n.type&&(t.value="")}h=void 0!==T?T:w.nextSibling,"function"==typeof n.type&&(n.__d=h)}else h&&g.__e==h&&h.parentNode!=t&&(h=m(g))}if(n.__e=k,null!=u&&"function"!=typeof n.type)for(y=u.length;y--;)null!=u[y]&&l(u[y]);for(y=D;y--;)null!=E[y]&&P(E[y],E[y]);if(x)for(y=0;y<x.length;y++)C(x[y],x[++y],x[++y])}function w(t){return null==t||"boolean"==typeof t?[]:Array.isArray(t)?s.concat.apply([],t.map(w)):[t]}function b(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===u.test(e)?n+"px":null==n?"":n}function k(t,e,n,r,o){var i,a,s,u,c;if(o?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(i=t.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(u in r)n&&u in n||b(i,u,"");if(n)for(c in n)r&&n[c]===r[c]||b(i,c,n[c])}else"o"===e[0]&&"n"===e[1]?(a=e!==(e=e.replace(/Capture$/,"")),s=e.toLowerCase(),e=(s in t?s:e).slice(2),n?(r||t.addEventListener(e,x,a),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,x,a)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function x(e){this.l[e.type](t.event?t.event(e):e)}function S(e,n,r,o,i,u,l,h,f){var m,y,_,g,w,b,x,S,T,C,P,D=n.type;if(void 0!==n.constructor)return null;(m=t.__b)&&m(n);try{t:if("function"==typeof D){if(S=n.props,T=(m=D.contextType)&&o[m.__c],C=m?T?T.props.value:m.__:o,r.__c?x=(y=n.__c=r.__c).__=y.__E:("prototype"in D&&D.prototype.render?n.__c=y=new D(S,C):(n.__c=y=new p(S,C),y.constructor=D,y.render=E),T&&T.sub(y),y.props=S,y.state||(y.state={}),y.context=C,y.__n=o,_=y.__d=!0,y.__h=[]),null==y.__s&&(y.__s=y.state),null!=D.getDerivedStateFromProps&&(y.__s==y.state&&(y.__s=c({},y.__s)),c(y.__s,D.getDerivedStateFromProps(S,y.__s))),g=y.props,w=y.state,_)null==D.getDerivedStateFromProps&&null!=y.componentWillMount&&y.componentWillMount(),null!=y.componentDidMount&&y.__h.push(y.componentDidMount);else{if(null==D.getDerivedStateFromProps&&S!==g&&null!=y.componentWillReceiveProps&&y.componentWillReceiveProps(S,C),!y.__e&&null!=y.shouldComponentUpdate&&!1===y.shouldComponentUpdate(S,y.__s,C)||n.__v===r.__v){for(y.props=S,y.state=y.__s,n.__v!==r.__v&&(y.__d=!1),y.__v=n,n.__e=r.__e,n.__k=r.__k,y.__h.length&&l.push(y),m=0;m<n.__k.length;m++)n.__k[m]&&(n.__k[m].__=n);break t}null!=y.componentWillUpdate&&y.componentWillUpdate(S,y.__s,C),null!=y.componentDidUpdate&&y.__h.push((function(){y.componentDidUpdate(g,w,b)}))}y.context=C,y.props=S,y.state=y.__s,(m=t.__r)&&m(n),y.__d=!1,y.__v=n,y.__P=e,m=y.render(y.props,y.state,y.context),null!=y.getChildContext&&(o=c(c({},o),y.getChildContext())),_||null==y.getSnapshotBeforeUpdate||(b=y.getSnapshotBeforeUpdate(g,w)),P=null!=m&&m.type==d&&null==m.key?m.props.children:m,v(e,Array.isArray(P)?P:[P],n,r,o,i,u,l,h,f),y.base=n.__e,y.__h.length&&l.push(y),x&&(y.__E=y.__=null),y.__e=!1}else null==u&&n.__v===r.__v?(n.__k=r.__k,n.__e=r.__e):n.__e=function(t,e,n,r,o,i,u,c){var l,h,f,d,p,m=n.props,y=e.props;if(o="svg"===e.type||o,null!=i)for(l=0;l<i.length;l++)if(null!=(h=i[l])&&((null===e.type?3===h.nodeType:h.localName===e.type)||t==h)){t=h,i[l]=null;break}if(null==t){if(null===e.type)return document.createTextNode(y);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,y.is&&{is:y.is}),i=null,c=!1}if(null===e.type)m!==y&&t.data!=y&&(t.data=y);else{if(null!=i&&(i=s.slice.call(t.childNodes)),f=(m=n.props||a).dangerouslySetInnerHTML,d=y.dangerouslySetInnerHTML,!c){if(null!=i)for(m={},p=0;p<t.attributes.length;p++)m[t.attributes[p].name]=t.attributes[p].value;(d||f)&&(d&&f&&d.__html==f.__html||(t.innerHTML=d&&d.__html||""))}(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||k(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||k(t,i,e[i],n[i],r)})(t,y,m,o,c),d?e.__k=[]:(l=e.props.children,v(t,Array.isArray(l)?l:[l],e,n,r,"foreignObject"!==e.type&&o,i,u,a,c)),c||("value"in y&&void 0!==(l=y.value)&&l!==t.value&&k(t,"value",l,m.value,!1),"checked"in y&&void 0!==(l=y.checked)&&l!==t.checked&&k(t,"checked",l,m.checked,!1))}return t}(r.__e,n,r,o,i,u,l,f);(m=t.diffed)&&m(n)}catch(e){n.__v=null,t.__e(e,n,r)}return n.__e}function T(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(t){t.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function C(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function P(e,n,r){var o,i,a;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||C(o,null,n)),r||"function"==typeof e.type||(r=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(a=0;a<o.length;a++)o[a]&&P(o[a],n,r);null!=i&&l(i)}function E(t,e,n){return this.constructor(t,n)}function D(e,n,r){var o,u,c;t.__&&t.__(e,n),u=(o=r===i)?null:r&&r.__k||n.__k,e=h(d,null,[e]),c=[],S(n,(o?n:r||n).__k=e,u||a,a,void 0!==n.ownerSVGElement,r&&!o?[r]:u?null:n.childNodes.length?s.slice.call(n.childNodes):null,c,r||a,o),T(c,e)}t={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return _(n.__E=n)}catch(e){t=e}throw t}},p.prototype.setState=function(t,e){var n;n=this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&c(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),_(this))},p.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),_(this))},p.prototype.render=d,e=[],n=0,r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=a;var M,A=[],O=t.__r,N=t.diffed,U=t.__c,j=t.unmount;function W(){A.some((function(e){if(e.__P)try{e.__H.__h.forEach(L),e.__H.__h.forEach(R),e.__H.__h=[]}catch(n){return e.__H.__h=[],t.__e(n,e.__v),!0}})),A=[]}function L(t){"function"==typeof t.u&&t.u()}function R(t){t.u=t.__()}function Y(t,e){for(var n in t)if("__source"!==n&&!(n in e))return!0;for(var r in e)if("__source"!==r&&t[r]!==e[r])return!0;return!1}t.__r=function(t){O&&O(t);var e=t.__c.__H;e&&(e.__h.forEach(L),e.__h.forEach(R),e.__h=[])},t.diffed=function(e){N&&N(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==A.push(n)&&M===t.requestAnimationFrame||((M=t.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);"undefined"!=typeof window&&(e=requestAnimationFrame(n))})(W))},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(L),e.__h=e.__h.filter((function(t){return!t.__||R(t)}))}catch(r){n.some((function(t){t.__h&&(t.__h=[])})),n=[],t.__e(r,e.__v)}})),U&&U(e,n)},t.unmount=function(e){j&&j(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(L)}catch(e){t.__e(e,n.__v)}},function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).isPureReactComponent=!0,n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.shouldComponentUpdate=function(t,e){return Y(this.props,t)||Y(this.state,e)}}(p);var F=t.__b;t.__b=function(t){t.type&&t.type.t&&t.ref&&(t.props.ref=t.ref,t.ref=null),F&&F(t)};var I=t.__e;function H(t){return t&&((t=function(t,e){for(var n in e)t[n]=e[n];return t}({},t)).__c=null,t.__k=t.__k&&t.__k.map(H)),t}function q(){this.__u=0,this.o=null,this.__b=null}function $(t){var e=t.__.__c;return e&&e.u&&e.u(t)}function z(){this.i=null,this.l=null}t.__e=function(t,e,n){if(t.then)for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return r.__c(t,e.__c);I(t,e,n)},(q.prototype=new p).__c=function(t,e){var n=this;null==n.o&&(n.o=[]),n.o.push(e);var r=$(n.__v),o=!1,i=function(){o||(o=!0,r?r(a):a())};e.__c=e.componentWillUnmount,e.componentWillUnmount=function(){i(),e.__c&&e.__c()};var a=function(){var t;if(!--n.__u)for(n.__v.__k[0]=n.state.u,n.setState({u:n.__b=null});t=n.o.pop();)t.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),t.then(i,i)},q.prototype.render=function(t,e){return this.__b&&(this.__v.__k[0]=H(this.__b),this.__b=null),[h(p,null,e.u?null:t.children),e.u&&t.fallback]};var B=function(t,e,n){if(++n[1]===n[0]&&t.l.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.l.size))for(n=t.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.i=n=n[2]}};(z.prototype=new p).u=function(t){var e=this,n=$(e.__v),r=e.l.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),B(e,t,r)):o()};n?n(i):i()}},z.prototype.render=function(t){this.i=null,this.l=new Map;var e=w(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var n=e.length;n--;)this.l.set(e[n],this.i=[1,0,this.i]);return t.children},z.prototype.componentDidUpdate=z.prototype.componentDidMount=function(){var t=this;t.l.forEach((function(e,n){B(t,n,e)}))};var X=function(){function t(){}var e=t.prototype;return e.getChildContext=function(){return this.props.context},e.render=function(t){return t.children},t}();function G(t){var e=this,n=t.container,r=h(X,{context:e.context},t.vnode);return e.s&&e.s!==n&&(e.v.parentNode&&e.s.removeChild(e.v),P(e.h),e.p=!1),t.vnode?e.p?(n.__k=e.__k,D(r,n),e.__k=n.__k):(e.v=document.createTextNode(""),D("",n,i),n.appendChild(e.v),e.p=!0,e.s=n,D(r,n,e.v),e.__k=e.v.__k):e.p&&(e.v.parentNode&&e.s.removeChild(e.v),P(e.h)),e.h=r,e.componentWillUnmount=function(){e.v.parentNode&&e.s.removeChild(e.v),P(e.h)},null}function Q(t,e){return h(G,{vnode:t,container:e})}var J=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;p.prototype.isReactComponent={};var V="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,K=t.event;function Z(t,e){t["UNSAFE_"+e]&&!t[e]&&Object.defineProperty(t,e,{configurable:!1,get:function(){return this["UNSAFE_"+e]},set:function(t){this["UNSAFE_"+e]=t}})}t.event=function(t){K&&(t=K(t)),t.persist=function(){};var e=!1,n=!1,r=t.stopPropagation;t.stopPropagation=function(){r.call(t),e=!0};var o=t.preventDefault;return t.preventDefault=function(){o.call(t),n=!0},t.isPropagationStopped=function(){return e},t.isDefaultPrevented=function(){return n},t.nativeEvent=t};var tt={configurable:!0,get:function(){return this.class}},et=t.vnode;t.vnode=function(t){t.$$typeof=V;var e=t.type,n=t.props;if(e){if(n.class!=n.className&&(tt.enumerable="className"in n,null!=n.className&&(n.class=n.className),Object.defineProperty(n,"className",tt)),"function"!=typeof e){var r,o,i;for(i in n.defaultValue&&void 0!==n.value&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&"select"===e&&(w(n.children).forEach((function(t){-1!=n.value.indexOf(t.props.value)&&(t.props.selected=!0)})),delete n.value),n)if(r=J.test(i))break;if(r)for(i in o=t.props={},n)o[J.test(i)?i.replace(/[A-Z0-9]/,"-$&").toLowerCase():i]=n[i]}!function(e){var n=t.type,r=t.props;if(r&&"string"==typeof n){var o={};for(var i in r)/^on(Ani|Tra|Tou)/.test(i)&&(r[i.toLowerCase()]=r[i],delete r[i]),o[i.toLowerCase()]=i;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===n||"input"===n.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var a=o.oninput||"oninput";r[a]||(r[a]=r[o.onchange],delete r[o.onchange])}}}(),"function"==typeof e&&!e.m&&e.prototype&&(Z(e.prototype,"componentWillMount"),Z(e.prototype,"componentWillReceiveProps"),Z(e.prototype,"componentWillUpdate"),e.m=!0)}et&&et(t)};class nt extends HTMLElement{constructor(){super(),this.props={};for(const{original:t,name:e}of this.constructor.props)Object.defineProperty(this,t,{get(){return this.props[e]},set(t){this.props[e]=t,this._render()}})}connectedCallback(){this._render()}attributeChangedCallback(t,e,n){for(const{original:e,name:r}of this.constructor.props)e===t&&(this.props[r]=n,this._render())}disconnectedCallback(){D(null,this)}_render(){this.isConnected&&D(h(this.constructor.component,this.props),this)}}function rt(t,e,n){const r=class extends nt{};r.observedAttributes=n.map((t=>t.original)),r.component=t,r.props=n,customElements.define(e,r)}function ot(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function it(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function at(t){it(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function st(t,e){it(2,arguments);var n=at(t),r=ot(e);if(isNaN(r))return new Date(NaN);if(!r)return n;var o=n.getDate(),i=new Date(n.getTime());i.setMonth(n.getMonth()+r+1,0);var a=i.getDate();return o>=a?i:(n.setFullYear(i.getFullYear(),i.getMonth(),o),n)}function ut(t,e){it(2,arguments);var n=at(t).getTime(),r=ot(e);return new Date(n+r)}function ct(t,e){it(1,arguments);var n=e||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,i=null==o?0:ot(o),a=null==n.weekStartsOn?i:ot(n.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=at(t),u=s.getDay(),c=(u<a?7:0)+u-a;return s.setDate(s.getDate()-c),s.setHours(0,0,0,0),s}function lt(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function ht(t){it(1,arguments);var e=at(t);return e.setHours(0,0,0,0),e}function ft(t,e){it(2,arguments);var n=at(t),r=at(e),o=n.getTime()-r.getTime();return o<0?-1:o>0?1:o}function dt(t){return it(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function pt(t){if(it(1,arguments),!dt(t)&&"number"!=typeof t)return!1;var e=at(t);return!isNaN(Number(e))}function mt(t){it(1,arguments);var e=at(t);return e.setHours(23,59,59,999),e}function yt(t){it(1,arguments);var e=at(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function _t(t,e){it(1,arguments);var n=t||{},r=at(n.start),o=at(n.end),i=o.getTime();if(!(r.getTime()<=i))throw new RangeError("Invalid interval");var a=[],s=r;s.setHours(0,0,0,0);var u=e&&"step"in e?Number(e.step):1;if(u<1||isNaN(u))throw new RangeError("`options.step` must be a number greater than 1");for(;s.getTime()<=i;)a.push(at(s)),s.setDate(s.getDate()+u),s.setHours(0,0,0,0);return a}function gt(t){it(1,arguments);var e=at(t);return e.setDate(1),e.setHours(0,0,0,0),e}function vt(t,e){it(1,arguments);var n=e||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,i=null==o?0:ot(o),a=null==n.weekStartsOn?i:ot(n.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=at(t),u=s.getDay(),c=6+(u<a?-7:0)-(u-a);return s.setDate(s.getDate()+c),s.setHours(23,59,59,999),s}var wt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function bt(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var kt={date:bt({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:bt({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:bt({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},xt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function St(t){return function(e,n){var r,o=n||{};if("formatting"===(o.context?String(o.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,a=o.width?String(o.width):i;r=t.formattingValues[a]||t.formattingValues[i]}else{var s=t.defaultWidth,u=o.width?String(o.width):t.defaultWidth;r=t.values[u]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}var Tt={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:St({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:St({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:St({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:St({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:St({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},Ct=Tt;function Pt(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(o);if(!i)return null;var a,s=i[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?Dt(u,(function(t){return t.test(s)})):Et(u,(function(t){return t.test(s)}));a=t.valueCallback?t.valueCallback(c):c,a=n.valueCallback?n.valueCallback(a):a;var l=e.slice(s.length);return{value:a,rest:l}}}function Et(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function Dt(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var Mt,At={ordinalNumber:(Mt={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(Mt.matchPattern);if(!n)return null;var r=n[0],o=t.match(Mt.parsePattern);if(!o)return null;var i=Mt.valueCallback?Mt.valueCallback(o[0]):o[0];i=e.valueCallback?e.valueCallback(i):i;var a=t.slice(r.length);return{value:i,rest:a}}),era:Pt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Pt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Pt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Pt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Pt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},Ot={code:"en-US",formatDistance:function(t,e,n){var r,o=wt[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:kt,formatRelative:function(t,e,n,r){return xt[t]},localize:Ct,match:At,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Nt(t,e){it(2,arguments);var n=ot(e);return ut(t,-n)}function Ut(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var jt=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return Ut("yy"===e?r%100:r,e.length)},Wt=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):Ut(n+1,2)},Lt=function(t,e){return Ut(t.getUTCDate(),e.length)},Rt=function(t,e){return Ut(t.getUTCHours()%12||12,e.length)},Yt=function(t,e){return Ut(t.getUTCHours(),e.length)},Ft=function(t,e){return Ut(t.getUTCMinutes(),e.length)},It=function(t,e){return Ut(t.getUTCSeconds(),e.length)},Ht=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return Ut(Math.floor(r*Math.pow(10,n-3)),e.length)},qt=864e5;function $t(t){it(1,arguments);var e=1,n=at(t),r=n.getUTCDay(),o=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function zt(t){it(1,arguments);var e=at(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var o=$t(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var a=$t(i);return e.getTime()>=o.getTime()?n+1:e.getTime()>=a.getTime()?n:n-1}function Bt(t){it(1,arguments);var e=zt(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=$t(n);return r}var Xt=6048e5;function Gt(t,e){it(1,arguments);var n=e||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,i=null==o?0:ot(o),a=null==n.weekStartsOn?i:ot(n.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=at(t),u=s.getUTCDay(),c=(u<a?7:0)+u-a;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s}function Qt(t,e){it(1,arguments);var n=at(t),r=n.getUTCFullYear(),o=e||{},i=o.locale,a=i&&i.options&&i.options.firstWeekContainsDate,s=null==a?1:ot(a),u=null==o.firstWeekContainsDate?s:ot(o.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,u),c.setUTCHours(0,0,0,0);var l=Gt(c,e),h=new Date(0);h.setUTCFullYear(r,0,u),h.setUTCHours(0,0,0,0);var f=Gt(h,e);return n.getTime()>=l.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function Jt(t,e){it(1,arguments);var n=e||{},r=n.locale,o=r&&r.options&&r.options.firstWeekContainsDate,i=null==o?1:ot(o),a=null==n.firstWeekContainsDate?i:ot(n.firstWeekContainsDate),s=Qt(t,e),u=new Date(0);u.setUTCFullYear(s,0,a),u.setUTCHours(0,0,0,0);var c=Gt(u,e);return c}var Vt=6048e5,Kt={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return jt(t,e)},Y:function(t,e,n,r){var o=Qt(t,r),i=o>0?o:1-o;return"YY"===e?Ut(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):Ut(i,e.length)},R:function(t,e){return Ut(zt(t),e.length)},u:function(t,e){return Ut(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Ut(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Ut(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return Wt(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return Ut(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var o=function(t,e){it(1,arguments);var n=at(t),r=Gt(n,e).getTime()-Jt(n,e).getTime();return Math.round(r/Vt)+1}(t,r);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):Ut(o,e.length)},I:function(t,e,n){var r=function(t){it(1,arguments);var e=at(t),n=$t(e).getTime()-Bt(e).getTime();return Math.round(n/Xt)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Ut(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):Lt(t,e)},D:function(t,e,n){var r=function(t){it(1,arguments);var e=at(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),o=n-r;return Math.floor(o/qt)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Ut(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var o=t.getUTCDay(),i=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return Ut(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var o=t.getUTCDay(),i=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return Ut(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return Ut(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,o=t.getUTCHours();switch(r=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,o=t.getUTCHours();switch(r=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Rt(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Yt(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Ut(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Ut(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Ft(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):It(t,e)},S:function(t,e){return Ht(t,e)},X:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();if(0===o)return"Z";switch(e){case"X":return te(o);case"XXXX":case"XX":return ee(o);default:return ee(o,":")}},x:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return te(o);case"xxxx":case"xx":return ee(o);default:return ee(o,":")}},O:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Zt(o,":");default:return"GMT"+ee(o,":")}},z:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Zt(o,":");default:return"GMT"+ee(o,":")}},t:function(t,e,n,r){var o=r._originalDate||t;return Ut(Math.floor(o.getTime()/1e3),e.length)},T:function(t,e,n,r){return Ut((r._originalDate||t).getTime(),e.length)}};function Zt(t,e){var n=t>0?"-":"+",r=Math.abs(t),o=Math.floor(r/60),i=r%60;return 0===i?n+String(o):n+String(o)+e+Ut(i,2)}function te(t,e){return t%60==0?(t>0?"-":"+")+Ut(Math.abs(t)/60,2):ee(t,e)}function ee(t,e){var n=e||"",r=t>0?"-":"+",o=Math.abs(t);return r+Ut(Math.floor(o/60),2)+n+Ut(o%60,2)}var ne=Kt;function re(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function oe(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var ie={p:oe,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],o=r[1],i=r[2];if(!i)return re(t,e);switch(o){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",re(o,e)).replace("{{time}}",oe(i,e))}},ae=["D","DD"],se=["YY","YYYY"];function ue(t){return-1!==ae.indexOf(t)}function ce(t){return-1!==se.indexOf(t)}function le(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var he=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,fe=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,de=/^'([^]*?)'?$/,pe=/''/g,me=/[a-zA-Z]/;function ye(t,e,n){it(2,arguments);var r=String(e),o=n||{},i=o.locale||Ot,a=i.options&&i.options.firstWeekContainsDate,s=null==a?1:ot(a),u=null==o.firstWeekContainsDate?s:ot(o.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,l=null==c?0:ot(c),h=null==o.weekStartsOn?l:ot(o.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var f=at(t);if(!pt(f))throw new RangeError("Invalid time value");var d=lt(f),p=Nt(f,d),m={firstWeekContainsDate:u,weekStartsOn:h,locale:i,_originalDate:f},y=r.match(fe).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,ie[e])(t,i.formatLong,m):t})).join("").match(he).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return _e(n);var a=ne[r];if(a)return!o.useAdditionalWeekYearTokens&&ce(n)&&le(n,e,t),!o.useAdditionalDayOfYearTokens&&ue(n)&&le(n,e,t),a(p,n,i.localize,m);if(r.match(me))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return y}function _e(t){return t.match(de)[1].replace(pe,"'")}function ge(t){return function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e=e||{})Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}({},t)}var ve=6e4,we=1440,be=43200,ke=525600;function xe(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};it(2,arguments);var r=n.locale||Ot;if(!r.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var o=ft(t,e);if(isNaN(o))throw new RangeError("Invalid time value");var i,a,s=ge(n);s.addSuffix=Boolean(n.addSuffix),s.comparison=o,o>0?(i=at(e),a=at(t)):(i=at(t),a=at(e));var u,c=null==n.roundingMethod?"round":String(n.roundingMethod);if("floor"===c)u=Math.floor;else if("ceil"===c)u=Math.ceil;else{if("round"!==c)throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");u=Math.round}var l,h=a.getTime()-i.getTime(),f=h/ve,d=lt(a)-lt(i),p=(h-d)/ve;if("second"===(l=null==n.unit?f<1?"second":f<60?"minute":f<we?"hour":p<be?"day":p<ke?"month":"year":String(n.unit))){var m=u(h/1e3);return r.formatDistance("xSeconds",m,s)}if("minute"===l){var y=u(f);return r.formatDistance("xMinutes",y,s)}if("hour"===l){var _=u(f/60);return r.formatDistance("xHours",_,s)}if("day"===l){var g=u(p/we);return r.formatDistance("xDays",g,s)}if("month"===l){var v=u(p/be);return 12===v&&"month"!==n.unit?r.formatDistance("xYears",1,s):r.formatDistance("xMonths",v,s)}if("year"===l){var w=u(p/ke);return r.formatDistance("xYears",w,s)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}const Se=Symbol("Mint.Equals"),Te=Symbol.for("react.element"),Ce=(t,e)=>void 0===t&&void 0===e||null===t&&null===e||(null!=t&&null!=t&&t[Se]?t[Se](e):null!=e&&null!=e&&e[Se]?e[Se](t):(t&&t.$$typeof===Te||e&&e.$$typeof===Te||console.warn("Comparing entites with === because there is no comparison function defined:",t,e),t===e));class Record{constructor(t){for(let e in t)this[e]=t[e]}[Se](t){if(!(t instanceof Record))return!1;if(Object.keys(this).length!==Object.keys(t).length)return!1;for(let e in this)if(!Ce(t[e],this[e]))return!1;return!0}}const Pe=(t,e)=>n=>{const r=class extends Record{};return r.mappings=n,r.encode=t=>{const e={};for(let r in n){const[o,i,a]=n[r];e[o]=a?a(t[r]):t[r]}return e},r.decode=o=>{const{ok:i,err:a}=e,s={};for(let e in n){const[r,i]=n[e],u=t.field(r,i)(o);if(u instanceof a)return u;s[e]=u._0}return new i(new r(s))},r},Ee=(t,e)=>{const n=Object.assign(Object.create(null),t,e);return t instanceof Record?new t.constructor(n):new Record(n)},De=(t,e=!0)=>{window.location.pathname+window.location.search+window.location.hash!==t&&(e?(window.history.pushState({},"",t),dispatchEvent(new PopStateEvent("popstate"))):window.history.replaceState({},"",t))},Me=t=>{let e=document.createElement("style");document.head.appendChild(e),e.innerHTML=t},Ae=t=>(e,n)=>{const{just:r,nothing:o}=t;return e.length>=n+1&&n>=0?new r(e[n]):new o};class Oe{constructor(){this.effectAllowed="none",this.dropEffect="none",this.files=[],this.types=[],this.cache={}}getData(t){return this.cache[t]||""}setData(t,e){return this.cache[t]=e,null}clearData(){return this.cache={},null}}const Ne=t=>new Proxy(t,{get:function(t,e){if(e in t){const n=t[e];return n instanceof Function?()=>t[e]():n}switch(e){case"clipboardData":return t.clipboardData=new Oe;case"dataTransfer":return t.dataTransfer=new Oe;case"data":case"key":case"locale":case"animationName":case"pseudoElement":case"propertyName":return"";case"altKey":case"ctrlKey":case"metaKey":case"repeat":case"shiftKey":return!1;case"charCode":case"keyCode":case"location":case"which":case"button":case"buttons":case"clientX":case"clientY":case"pageX":case"pageY":case"screenX":case"screenY":case"detail":case"deltaMode":case"deltaX":case"deltaY":case"deltaZ":case"elapsedTime":return-1;default:return}}}),Ue=(t,e)=>{const n=Object.getOwnPropertyDescriptors(Reflect.getPrototypeOf(t));for(let r in n){if(e&&e[r])continue;const o=n[r].value;"function"==typeof o&&(t[r]=o.bind(t))}},je=(t,e)=>{if(!e)return;const n={};Object.keys(e).forEach((t=>{let r=null;n[t]={get:()=>(r||(r=e[t]()),r)}})),Object.defineProperties(t,n)},We=function(){let t=Array.from(arguments);return Array.isArray(t[0])&&1===t.length?t[0]:t},Le=function(t){const e={},n=(t,n)=>{e[t.toString().trim()]=n.toString().trim()};for(let e of t)if("string"==typeof e)e.split(";").forEach((t=>{const[e,r]=t.split(":");e&&r&&n(e,r)}));else if(e instanceof Map)for(let[t,r]of e)n(t,r);else if(e instanceof Array)for(let[t,r]of e)n(t,r);else for(let t in e)n(t,e[t]);return e};class Re extends p{render(){const t=[];for(let e in this.props.globals)t.push(h(this.props.globals[e],{ref:t=>t._persist(),key:e}));return h("div",{},[...t,...this.props.children])}}Re.displayName="Mint.Root";class Ye{constructor(t){t&&t instanceof Node&&t!==document.body?this.root=t:(this.root=document.createElement("div"),document.body.appendChild(this.root))}render(t,e){void 0!==t&&D(h(Re,{globals:e},[h(t,{key:"$MAIN"})]),this.root)}}class Fe{constructor(t,e){this.teardown=e,this.subject=t,this.steps=[]}async run(){let t;try{t=await new Promise(this.next.bind(this))}finally{this.teardown&&this.teardown()}return t}async next(t,e){requestAnimationFrame((async()=>{let n=this.steps.shift();if(n)try{this.subject=await n(this.subject)}catch(t){return e(t)}this.steps.length?this.next(t,e):t(this.subject)}))}step(t){return this.steps.push(t),this}}const Ie=["componentWillMount","render","getSnapshotBeforeUpdate","componentDidMount","componentWillReceiveProps","shouldComponentUpdate","componentWillUpdate","componentDidUpdate","componentWillUnmount","componentDidCatch","setState","forceUpdate","constructor"];class He extends p{constructor(t){super(t),Ue(this,Ie)}_d(t,e){je(this,e);const n={};Object.keys(t).forEach((e=>{const[r,o]=t[e],i=r||e;n[e]={get:()=>i in this.props?this.props[i]:o}})),Object.defineProperties(this,n)}}class qe{constructor(){Ue(this),this.subscriptions=new Map,this.state={}}setState(t,e){this.state=Object.assign({},this.state,t),e()}_d(t){je(this,t)}_subscribe(t,e){const n=this.subscriptions.get(t);null==e||null!=n&&((t,e)=>{if(t instanceof Object&&e instanceof Object){const n=new Set(Object.keys(t).concat(Object.keys(e)));for(let r of n)if(!Ce(t[r],e[r]))return!1;return!0}return console.warn("Comparing entites with === because there is no comparison function defined:",t,e),t===e})(n,e)||(this.subscriptions.set(t,e),this._update())}_unsubscribe(t){this.subscriptions.has(t)&&(this.subscriptions.delete(t),this._update())}_update(){this.update()}get _subscriptions(){return Array.from(this.subscriptions.values())}update(){}}var $e,ze,Be=($e=function(t,e){var n=function(){var t=function(t,e,n,r){for(n=n||{},r=t.length;r--;n[t[r]]=e);return n},e=[1,9],n=[1,10],r=[1,11],o=[1,12],i=[5,11,12,13,14,15],a={trace:function(){},yy:{},symbols_:{error:2,root:3,expressions:4,EOF:5,expression:6,optional:7,literal:8,splat:9,param:10,"(":11,")":12,LITERAL:13,SPLAT:14,PARAM:15,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",11:"(",12:")",13:"LITERAL",14:"SPLAT",15:"PARAM"},productions_:[0,[3,2],[3,1],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[7,3],[8,1],[9,1],[10,1]],performAction:function(t,e,n,r,o,i,a){var s=i.length-1;switch(o){case 1:return new r.Root({},[i[s-1]]);case 2:return new r.Root({},[new r.Literal({value:""})]);case 3:this.$=new r.Concat({},[i[s-1],i[s]]);break;case 4:case 5:this.$=i[s];break;case 6:this.$=new r.Literal({value:i[s]});break;case 7:this.$=new r.Splat({name:i[s]});break;case 8:this.$=new r.Param({name:i[s]});break;case 9:this.$=new r.Optional({},[i[s-1]]);break;case 10:this.$=t;break;case 11:case 12:this.$=t.slice(1)}},table:[{3:1,4:2,5:[1,3],6:4,7:5,8:6,9:7,10:8,11:e,13:n,14:r,15:o},{1:[3]},{5:[1,13],6:14,7:5,8:6,9:7,10:8,11:e,13:n,14:r,15:o},{1:[2,2]},t(i,[2,4]),t(i,[2,5]),t(i,[2,6]),t(i,[2,7]),t(i,[2,8]),{4:15,6:4,7:5,8:6,9:7,10:8,11:e,13:n,14:r,15:o},t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),{1:[2,1]},t(i,[2,3]),{6:14,7:5,8:6,9:7,10:8,11:e,12:[1,16],13:n,14:r,15:o},t(i,[2,9])],defaultActions:{3:[2,2],13:[2,1]},parseError:function(t,e){if(!e.recoverable){function n(t,e){this.message=t,this.hash=e}throw n.prototype=Error,new n(t,e)}this.trace(t)},parse:function(t){var e=this,n=[0],r=[null],o=[],i=this.table,a="",s=0,u=0,c=2,l=1,h=o.slice.call(arguments,1),f=Object.create(this.lexer),d={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(d.yy[p]=this.yy[p]);f.setInput(t,d.yy),d.yy.lexer=f,d.yy.parser=this,void 0===f.yylloc&&(f.yylloc={});var m=f.yylloc;o.push(m);var y=f.options&&f.options.ranges;"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var _,g,v,w,b,k,x,S,T=function(){var t;return"number"!=typeof(t=f.lex()||l)&&(t=e.symbols_[t]||t),t},C={};;){if(g=n[n.length-1],this.defaultActions[g]?v=this.defaultActions[g]:(null==_&&(_=T()),v=i[g]&&i[g][_]),void 0===v||!v.length||!v[0]){var P="";for(b in S=[],i[g])this.terminals_[b]&&b>c&&S.push("'"+this.terminals_[b]+"'");P=f.showPosition?"Parse error on line "+(s+1)+":\n"+f.showPosition()+"\nExpecting "+S.join(", ")+", got '"+(this.terminals_[_]||_)+"'":"Parse error on line "+(s+1)+": Unexpected "+(_==l?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(P,{text:f.match,token:this.terminals_[_]||_,line:f.yylineno,loc:m,expected:S})}if(v[0]instanceof Array&&v.length>1)throw new Error("Parse Error: multiple actions possible at state: "+g+", token: "+_);switch(v[0]){case 1:n.push(_),r.push(f.yytext),o.push(f.yylloc),n.push(v[1]),_=null,u=f.yyleng,a=f.yytext,s=f.yylineno,m=f.yylloc;break;case 2:if(k=this.productions_[v[1]][1],C.$=r[r.length-k],C._$={first_line:o[o.length-(k||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(k||1)].first_column,last_column:o[o.length-1].last_column},y&&(C._$.range=[o[o.length-(k||1)].range[0],o[o.length-1].range[1]]),void 0!==(w=this.performAction.apply(C,[a,u,s,d.yy,v[1],r,o].concat(h))))return w;k&&(n=n.slice(0,-1*k*2),r=r.slice(0,-1*k),o=o.slice(0,-1*k)),n.push(this.productions_[v[1]][0]),r.push(C.$),o.push(C._$),x=i[n[n.length-2]][n[n.length-1]],n.push(x);break;case 3:return!0}}return!0}},s=function(){var t={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var o=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[o[0],o[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,r,o;if(this.options.backtrack_lexer&&(o={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(o.yylloc.range=this.yylloc.range.slice(0))),(r=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var i in o)this[i]=o[i];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,r;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var o=this._currentRules(),i=0;i<o.length;i++)if((n=this._input.match(this.rules[o[i]]))&&(!e||n[0].length>e[0].length)){if(e=n,r=i,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,o[i])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,o[r]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(t,e,n,r){switch(n){case 0:return"(";case 1:return")";case 2:return"SPLAT";case 3:return"PARAM";case 4:case 5:return"LITERAL";case 6:return"EOF"}},rules:[/^(?:\()/,/^(?:\))/,/^(?:\*+\w+)/,/^(?::+\w+)/,/^(?:[\w%\-~\n]+)/,/^(?:.)/,/^(?:$)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6],inclusive:!0}}};return t}();function u(){this.yy={}}return a.lexer=s,u.prototype=a,a.Parser=u,new u}();e.parser=n,e.Parser=n.Parser,e.parse=function(){return n.parse.apply(n,arguments)}},$e(ze={path:undefined,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&ze.path)}},ze.exports),ze.exports);function Xe(t){return function(e,n){return{displayName:t,props:e,children:n||[]}}}var Ge={Root:Xe("Root"),Concat:Xe("Concat"),Literal:Xe("Literal"),Splat:Xe("Splat"),Param:Xe("Param"),Optional:Xe("Optional")},Qe=Be.parser;Qe.yy=Ge;var Je=Qe,Ve=Object.keys(Ge),Ke=function(t){return Ve.forEach((function(e){if(void 0===t[e])throw new Error("No handler defined for "+e.displayName)})),{visit:function(t,e){return this.handlers[t.displayName].call(this,t,e)},handlers:t}},Ze=/[\-{}\[\]+?.,\\\^$|#\s]/g;function tn(t){this.captures=t.captures,this.re=t.re}tn.prototype.match=function(t){var e=this.re.exec(t),n={};if(e)return this.captures.forEach((function(t,r){void 0===e[r+1]?n[t]=void 0:n[t]=decodeURIComponent(e[r+1])})),n};var en=Ke({Concat:function(t){return t.children.reduce(function(t,e){var n=this.visit(e);return{re:t.re+n.re,captures:t.captures.concat(n.captures)}}.bind(this),{re:"",captures:[]})},Literal:function(t){return{re:t.props.value.replace(Ze,"\\$&"),captures:[]}},Splat:function(t){return{re:"([^?]*?)",captures:[t.props.name]}},Param:function(t){return{re:"([^\\/\\?]+)",captures:[t.props.name]}},Optional:function(t){var e=this.visit(t.children[0]);return{re:"(?:"+e.re+")?",captures:e.captures}},Root:function(t){var e=this.visit(t.children[0]);return new tn({re:new RegExp("^"+e.re+"(?=\\?|$)"),captures:e.captures})}}),nn=Ke({Concat:function(t,e){var n=t.children.map(function(t){return this.visit(t,e)}.bind(this));return!n.some((function(t){return!1===t}))&&n.join("")},Literal:function(t){return decodeURI(t.props.value)},Splat:function(t,e){return!!e[t.props.name]&&e[t.props.name]},Param:function(t,e){return!!e[t.props.name]&&e[t.props.name]},Optional:function(t,e){return this.visit(t.children[0],e)||""},Root:function(t,e){e=e||{};var n=this.visit(t.children[0],e);return!!n&&encodeURI(n)}}),rn=nn;function on(t){var e;if(e=this?this:Object.create(on.prototype),void 0===t)throw new Error("A route spec is required");return e.spec=t,e.ast=Je.parse(t),e}on.prototype=Object.create(null),on.prototype.match=function(t){return en.visit(this.ast).match(t)||!1},on.prototype.reverse=function(t){return rn.visit(this.ast,t)};var an=on;Event.prototype.propagationPath=function(){var t=function(){var t=this.target||null,e=[t];if(!t||!t.parentElement)return[];for(;t.parentElement;)t=t.parentElement,e.unshift(t);return e}.bind(this);return this.path||this.composedPath&&this.composedPath()||t()};class sn extends p{handleClick(t,e){if(!t.defaultPrevented&&!t.ctrlKey)for(let e of t.propagationPath())if("A"===e.tagName){if(""!==e.target.trim())return;let n=e.pathname,r=e.origin,o=e.search,i=e.hash;if(r===window.location.origin)for(let e of this.props.routes){let r=n+o+i,a=new an(e.path);if("*"==e.path||a.match(r))return t.preventDefault(),void De(r)}}}render(){const t=[];for(let e in this.props.globals)t.push(h(this.props.globals[e],{ref:t=>t._persist(),key:e}));return h("div",{onClick:this.handleClick.bind(this)},[...t,...this.props.children])}}sn.displayName="Mint.Root";var un=t=>class{constructor(){this.root=document.createElement("div"),document.body.appendChild(this.root),this.firstPageLoad=!0,this.routes=[],this.url=null,window.addEventListener("popstate",(()=>{this.handlePopState()}))}resolvePagePosition(){var t;t=()=>{requestAnimationFrame((()=>{let t;try{t=this.root.querySelector(`a[name="${window.location.hash.slice(1)}"]`)}finally{}window.location.hash&&t?window.location.href=window.location.hash:this.firstPageLoad||window.scrollTo(document.body.scrollTop,0),this.firstPageLoad=!1}))},"function"!=typeof window.queueMicrotask?Promise.resolve().then(t).catch((t=>setTimeout((()=>{throw t})))):window.queueMicrotask(t)}handlePopState(){const e=window.location.pathname+window.location.search+window.location.hash;if(e!==this.url){for(let n of this.routes)if("*"===n.path)n.handler(),this.resolvePagePosition();else{let r=new an(n.path).match(e);if(r)try{let e=n.mapping.map(((e,o)=>{const i=r[e],a=n.decoders[o](i);if(a instanceof t.ok)return a._0;throw""}));n.handler.apply(null,e),this.resolvePagePosition();break}catch(t){}}this.url=e}}render(t,e){void 0!==t&&(D(h(sn,{routes:this.routes,globals:e},[h(t,{key:"$MAIN"})]),this.root),this.handlePopState())}addRoutes(t){this.routes=this.routes.concat(t)}};const cn=t=>{let e=JSON.stringify(t,"",2);return void 0===e&&(e="undefined"),((t,e=1,n)=>{if(n={indent:" ",includeEmptyLines:!1,...n},"string"!=typeof t)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof t}\``);if("number"!=typeof e)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof e}\``);if("string"!=typeof n.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof n.indent}\``);if(0===e)return t;const r=n.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return t.replace(r,n.indent.repeat(e))})(e)};class ln{constructor(t,e=[]){this.message=t,this.object=null,this.path=e}push(t){this.path.unshift(t)}toString(){const t=this.message.trim(),e=this.path.reduce(((t,e)=>{if(t.length)switch(e.type){case"FIELD":return`${t}.${e.value}`;case"ARRAY":return`${t}[${e.value}]`}else switch(e.type){case"FIELD":return e.value;case"ARRAY":return"[$(item.value)]"}}),"");return e.length&&this.object?t+"\n\n"+hn.trim().replace("{value}",cn(this.object)).replace("{path}",e):t}}const hn="\nThe input is in this object:\n\n{value}\n\nat: {path}\n",fn=t=>e=>{const{ok:n,err:r}=t;return"string"!=typeof e?new r(new ln("\nI was trying to decode the value:\n\n{value}\n\nas a String, but could not.\n".replace("{value}",cn(e)))):new n(e)},dn=t=>e=>{const{ok:n,err:r}=t;let o=NaN;return o="number"==typeof e?new Date(e):Date.parse(e),Number.isNaN(o)?new r(new ln("\nI was trying to decode the value:\n\n{value}\n\nas a Time, but could not.\n".replace("{value}",cn(e)))):new n(new Date(o))},pn=t=>e=>{const{ok:n,err:r}=t;let o=parseFloat(e);return isNaN(o)?new r(new ln("\nI was trying to decode the value:\n\n{value}\n\nas a Number, but could not.\n".replace("{value}",cn(e)))):new n(o)},mn=t=>e=>{const{ok:n,err:r}=t;return"boolean"!=typeof e?new r(new ln("\nI was trying to decode the value:\n\n{value}\n\nas a Bool, but could not.\n".replace("{value}",cn(e)))):new n(e)},yn=t=>(e,n)=>{const{err:r,nothing:o}=t;return t=>{if(null==t||null==t||"object"!=typeof t||Array.isArray(t)){const n='\nI was trying to decode the field "{field}" from the object:\n\n{value}\n\nbut I could not because it\'s not an object.\n'.replace("{field}",e).replace("{value}",cn(t));return new r(new ln(n))}{const o=t[e],i=n(o);return i instanceof r&&(i._0.push({type:"FIELD",value:e}),i._0.object=t),i}}},_n=t=>e=>n=>{const{ok:r,err:o}=t;if(!Array.isArray(n))return new o(new ln("\nI was trying to decode the value:\n\n{value}\n\nas an Array, but could not.\n".replace("{value}",cn(n))));let i=[],a=0;for(let t of n){let r=e(t);if(r instanceof o)return r._0.push({type:"ARRAY",value:a}),r._0.object=n,r;i.push(r._0),a++}return new r(i)},gn=t=>e=>n=>{const{ok:r,just:o,nothing:i,err:a}=t;if(null==n||null==n)return new r(new i);{const t=e(n);return t instanceof a?t:new r(new o(t._0))}},vn=t=>e=>n=>{const{ok:r,err:o}=t;if(!Array.isArray(n))return new o(new ln("\nI was trying to decode the value:\n\n{value}\n\nas an Tuple, but could not.\n".replace("{value}",cn(n))));let i=[],a=0;for(let t of e){if(void 0===n[a]||null===n[a])return new o(new ln("\nI was trying to decode one of the values of a tuple:\n\n{value}\n\nbut could not.\n".replace("{value}",cn(n[a]))));{let e=t(n[a]);if(e instanceof o)return e._0.push({type:"ARRAY",value:a}),e._0.object=n,e;i.push(e._0)}a++}return new r(i)},wn=t=>e=>n=>{const{ok:r,err:o}=t;if(null==n||null==n||"object"!=typeof n||Array.isArray(n)){const t="\nI was trying to decode the value:\n\n{value}\n\nas a Map, but could not.\n".replace("{value}",cn(n));return new o(new ln(t))}{const t=[];for(let r in n){const i=e(n[r]);if(i instanceof o)return i;t.push([r,i._0])}return new r(t)}},bn=t=>e=>new t.ok(e),kn=t=>t,xn=t=>t.toISOString(),Sn=t=>e=>e.map((e=>t?t(e):e)),Tn=t=>e=>{const n={};for(let r of e)n[r[0]]=t?t(r[1]):r[1];return n},Cn=t=>e=>n=>n instanceof t.just?e?e(n._0):n._0:null,Pn=t=>e=>e.map(((e,n)=>{const r=t[n];return r?r(e):e}));var En=t=>({maybe:Cn(t),identity:kn,tuple:Pn,array:Sn,time:xn,map:Tn});class Dn{constructor(){Ue(this)}_d(t){je(this,t)}}class Mn{constructor(){Ue(this),this.listeners=new Set,this.state={}}setState(t,e){this.state=Object.assign({},this.state,t);for(let t of this.listeners)t.forceUpdate();e()}_d(t){je(this,t)}_subscribe(t){this.listeners.add(t)}_unsubscribe(t){this.listeners.delete(t)}}class An{[Se](t){if(!(t instanceof this.constructor))return!1;if(t.length!==this.length)return!1;for(let e=0;e<this.length;e++)if(!Ce(this["_"+e],t["_"+e]))return!1;return!0}}const On=function(t){return null==t};return Function.prototype[Se]=function(t){return this===t},Node.prototype[Se]=function(t){return this===t},Symbol.prototype[Se]=function(t){return this.valueOf()===t},Date.prototype[Se]=function(t){return+this==+t},Number.prototype[Se]=function(t){return this.valueOf()===t},Boolean.prototype[Se]=function(t){return this.valueOf()===t},String.prototype[Se]=function(t){return this.valueOf()===t},Array.prototype[Se]=function(t){if(On(t))return!1;if(this.length!==t.length)return!1;if(0==this.length)return!0;for(let e in this)if(!Ce(this[e],t[e]))return!1;return!0},FormData.prototype[Se]=function(t){if(On(t))return!1;const e=Array.from(this.keys()).sort(),n=Array.from(t.keys()).sort();if(Ce(e,n)){if(0==e.length)return!0;for(let n of e){const e=Array.from(this.getAll(n).sort()),r=Array.from(t.getAll(n).sort());if(!Ce(e,r))return!1}return!0}return!1},URLSearchParams.prototype[Se]=function(t){return!On(t)&&this.toString()===t.toString()},Set.prototype[Se]=function(t){return!On(t)&&Ce(Array.from(this).sort(),Array.from(t).sort())},Map.prototype[Se]=function(t){if(On(t))return!1;const e=Array.from(this.keys()).sort(),n=Array.from(t.keys()).sort();if(Ce(e,n)){if(0==e.length)return!0;for(let n of e)if(!Ce(this.get(n),t.get(n)))return!1;return!0}return!1},t=>{const e=(t=>({boolean:mn(t),object:bn(t),number:pn(t),string:fn(t),field:yn(t),array:_n(t),maybe:gn(t),tuple:vn(t),time:dn(t),map:wn(t)}))(t);return{program:new(un(t)),normalizeEvent:Ne,insertStyles:Me,navigate:De,compare:Ce,update:Ee,array:We,style:Le,at:Ae(t),EmbeddedProgram:Ye,TestContext:Fe,Component:He,Provider:qe,Module:Dn,Store:Mn,Decoder:e,Encoder:En(t),DateFNS:{format:ye,startOfMonth:gt,startOfWeek:ct,startOfDay:ht,endOfMonth:yt,endOfWeek:vt,endOfDay:mt,addMonths:st,eachDay:_t,distanceInWordsStrict:xe},Record:Record,Enum:An,Nothing:t.nothing,Just:t.just,Err:t.err,Ok:t.ok,createRecord:Pe(e,t),createPortal:Q,register:rt,createElement:h,React:{Fragment:d},ReactDOM:{unmountComponentAtNode:t=>D(null,t),render:D},Symbols:{Equals:Se}}}}();
(() => {
  const _enums = {}
  const mint = Mint(_enums)

  const _normalizeEvent = (event) => {
    return EI.sn(mint.normalizeEvent(event))
  }

  const _R = mint.createRecord
  const _h = mint.createElement
  const _createPortal = mint.createPortal
  const _insertStyles = mint.insertStyles
  const _navigate = mint.navigate
  const _compare = mint.compare
  const _program = mint.program
  const _encode = mint.encode
  const _style = mint.style
  const _array = mint.array
  const _wc = mint.register
  const _u = mint.update
  const _at = mint.at

  window.TestContext = mint.TestContext
  const TestContext = mint.TestContext
  const ReactDOM = mint.ReactDOM
  const Decoder = mint.Decoder
  const Encoder = mint.Encoder
  const DateFNS = mint.DateFNS
  const Record = mint.Record
  const React = mint.React

  const _C = mint.Component
  const _P = mint.Provider
  const _M = mint.Module
  const _S = mint.Store
  const _E = mint.Enum

  const _PR = (patterns) => new RecordPattern(patterns)
  const _PE = (x, pattern) => new Pattern(x, pattern)
  const _PV = Symbol("Variable")
  const _PS = Symbol("Spread")

  class RecordPattern {
    constructor(patterns) {
      this.patterns = patterns
    }
  }

  class Pattern {
    constructor(x,pattern) {
      this.pattern = pattern;
      this.x = x;
    }
  }

  const __match = (value, pattern, values = []) => {
    if (pattern === null) {
    } else if (pattern === _PV) {
      values.push(value)
    } else if (Array.isArray(pattern)) { // This covers tuples and arrays (they are the same)
      const hasSpread = pattern.some((item) => item === _PS)

      if (hasSpread && value.length >= (pattern.length - 1)) {
        let endValues = []
        let startIndex = 0

        while (pattern[startIndex] !== _PS && startIndex < pattern.length) {
          if (!__match(value[startIndex], pattern[startIndex], values)) {
            return false
          }
          startIndex++
        }

        let endIndex = 1

        while (pattern[pattern.length - endIndex] !== _PS && endIndex < pattern.length) {
          if (!__match(value[value.length - endIndex], pattern[pattern.length - endIndex], endValues)) {
            return false
          }
          endIndex++
        }

        // Add in the spread
        values.push(value.slice(startIndex, value.length - (endIndex - 1)))

        // Add in the end values
        for (let item of endValues) {
          values.push(item)
        }
      } else {
        if (pattern.length !== value.length) {
          return false
        } else {
          for (let index in pattern) {
            if (!__match(value[index], pattern[index], values)) {
              return false
            }
          }
        }
      }
    } else if (pattern instanceof Pattern) {
      if (value instanceof pattern.x) {
        for (let index in pattern.pattern) {
          if (!__match(value[`_${index}`], pattern.pattern[index], values)) {
            return false
          }
        }
      } else {
        return false
      }
    } else if (pattern instanceof RecordPattern && value instanceof Record) {
      for (let index in pattern.patterns) {
        const item = pattern.patterns[index];

        if (!__match(value[item[0]], item[1], values)) {
          return false
        }
      }
    } else {
      if (!_compare(value, pattern)) {
        return false
      }
    }

    return values;
  }

  const _match = (value, patterns) => {
    for (let pattern of patterns) {
      if (pattern[0] === null) {
        return pattern[1]()
      } else {
        const values = __match(value, pattern[0]);

        if (values) {
          return pattern[1].apply(null, values)
        }
      }
    }
  }

  const _m = (method) => {
    let value
    return () => {
      if (value) { return value }
      value = method()
      return value
    }
  }

  const _o = (item, value) => {
    if (item !== undefined && item !== null) {
      return item;
    } else {
      return value;
    }
  }

  const _s = (item, callback) => {
    if (item instanceof AO) {
      return item
    } else if (item instanceof AN) {
      return new AN(callback(item._0))
    } else {
      return callback(item)
    }
  }

  class DoError extends Error {}

  class AN extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class AO extends _E{constructor(){super();this.length = 0}};class FH extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class FI extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class EY extends _E{constructor(){super();this.length = 0}};class BH extends _E{constructor(){super();this.length = 0}};class EZ extends _E{constructor(){super();this.length = 0}};class FA extends _E{constructor(){super();this.length = 0}};class DF extends _E{constructor(){super();this.length = 0}};class FB extends _E{constructor(){super();this.length = 0}};class CV extends _E{constructor(){super();this.length = 0}};class BR extends _E{constructor(){super();this.length = 0}};class EM extends _E{constructor(){super();this.length = 0}};class EN extends _E{constructor(){super();this.length = 0}};class EO extends _E{constructor(){super();this.length = 0}};class EP extends _E{constructor(){super();this.length = 0}};class EQ extends _E{constructor(){super();this.length = 0}};class ER extends _E{constructor(){super();this.length = 0}};class ES extends _E{constructor(){super();this.length = 0}};class ET extends _E{constructor(){super();this.length = 0}};class EU extends _E{constructor(){super();this.length = 0}};class EV extends _E{constructor(){super();this.length = 0}};class EA extends _E{constructor(){super();this.length = 0}};class BV extends _E{constructor(){super();this.length = 0}};class BW extends _E{constructor(){super();this.length = 0}};class BX extends _E{constructor(){super();this.length = 0}};class BY extends _E{constructor(){super();this.length = 0}};class BZ extends _E{constructor(){super();this.length = 0}};class CA extends _E{constructor(){super();this.length = 0}};class BC extends _E{constructor(){super();this.length = 0}};class BE extends _E{constructor(){super();this.length = 0}};class BD extends _E{constructor(){super();this.length = 0}};class FF extends _E{constructor(){super();this.length = 0}};class FG extends _E{constructor(){super();this.length = 0}};class EJ extends _E{constructor(){super();this.length = 0}};class DW extends _E{constructor(){super();this.length = 0}};class EK extends _E{constructor(){super();this.length = 0}};class CI extends _E{constructor(){super();this.length = 0}};class EW extends _E{constructor(){super();this.length = 0}};class EX extends _E{constructor(){super();this.length = 0}};class EL extends _E{constructor(){super();this.length = 0}};class BM extends _E{constructor(){super();this.length = 0}};class BN extends _E{constructor(){super();this.length = 0}};class CK extends _E{constructor(){super();this.length = 0}};class FC extends _E{constructor(){super();this.length = 0}};class FD extends _E{constructor(){super();this.length = 0}};class FE extends _E{constructor(){super();this.length = 0}};class AM extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class CE extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class CL extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};const B = _R({hostname:["hostname",Decoder.string],protocol:["protocol",Decoder.string],origin:["origin",Decoder.string],search:["search",Decoder.string],path:["path",Decoder.string],hash:["hash",Decoder.string],host:["host",Decoder.string],port:["port",Decoder.string]});const C = _R({});const D = _R({});const E = _R({});const F = _R({});const G = _R({});const H = _R({});const I = _R({});const J = _R({});const K = _R({});const L = _R({});const M = _R({});const N = _R({});const O = _R({});const P = _R({});const Q = _R({});const R = _R({});const S = _R({});const T = _R({});const V = _R({});const W = _R({});const U = _R({height:["height",Decoder.number],bottom:["bottom",Decoder.number],width:["width",Decoder.number],right:["right",Decoder.number],left:["left",Decoder.number],top:["top",Decoder.number],x:["x",Decoder.number],y:["y",Decoder.number]});const X = _R({});const Y = _R({value:["value",Decoder.string],key:["key",Decoder.string]});const Z = _R({});const AA = _R({});const AB = _R({});const AC = _R({});const AD = _R({caseInsensitive:["caseInsensitive",Decoder.boolean],multiline:["multiline",Decoder.boolean],unicode:["unicode",Decoder.boolean],global:["global",Decoder.boolean],sticky:["sticky",Decoder.boolean]});const AE = _R({submatches:["submatches",Decoder.array(Decoder.string),Encoder.array()],match:["match",Decoder.string],index:["index",Decoder.number]});const EH=new(class extends _M{rt(ru){return ((() => {
      if (!this._a) {
        this._a = document.createElement('a')
      }

      this._a.href = ru

      return new B({hostname:(this._a.hostname || ""),protocol:(this._a.protocol || ""),origin:(this._a.origin || ""),path:(this._a.pathname || ""),search:(this._a.search || ""),hash:(this._a.hash || ""),host:(this._a.host || ""),port:(this._a.port || "")})
    })())}});const AH=new(class extends _M{o(rv){return (rv.length)}l(rw,rx){return (rw.split(rx))}});const EF=new(class extends _M{ri(ry){return (ry)}rr(rz){return (rz)}rm(sa,sb){return AG.sc((()=>{const _0 = [];const _1 = sa;let _i = -1;for(let [se,sd] of _1){_i++;const _2 = _compare(se, sb)
if (!_2) { continue };_0.push(sd)};return _0})())}});const EE=new(class extends _M{sf(){return (window.location.href)}rg(sg){const si=EE.sh();const sj=EH.rt(sg);return (_compare(si.hostname, sj.hostname) && _compare(si.protocol, sj.protocol) && _compare(si.origin, sj.origin) && _compare(si.path, sj.path) && _compare(si.host, sj.host) && _compare(si.port, sj.port))}sh(){return EH.rt(EE.sf())}});const EG=new(class extends _M{rp(){return (false)}});const CT=new(class extends _M{jr(sk){return (sk.toString())}});const DB=new(class extends _M{ll(sl,sm){return (Math.pow(sl, sm))}});const EI=new(class extends _M{sn(so){return new X({bubbles:(so.bubbles),cancelable:(so.cancelable),currentTarget:(so.currentTarget),defaultPrevented:(so.defaultPrevented),dataTransfer:(so.dataTransfer),clipboardData:(so.clipboardData),eventPhase:(so.eventPhase),isTrusted:(so.isTrusted),target:(so.target),timeStamp:(so.timeStamp),type:(so.type),data:(so.data),altKey:(so.altKey),charCode:(so.charCode),ctrlKey:(so.ctrlKey),key:(so.key),keyCode:(so.keyCode),locale:(so.locale),location:(so.location),metaKey:(so.metaKey),repeat:(so.repeat),shiftKey:(so.shiftKey),which:(so.which),button:(so.button),buttons:(so.buttons),clientX:(so.clientX),clientY:(so.clientY),pageX:(so.pageX),pageY:(so.pageY),screenX:(so.screenX),screenY:(so.screenY),detail:(so.detail),deltaMode:(so.deltaMode),deltaX:(so.deltaX),deltaY:(so.deltaY),deltaZ:(so.deltaZ),animationName:(so.animationName),pseudoElement:(so.pseudoElement),propertyName:(so.propertyName),elapsedTime:(so.elapsedTime),event:so})}});const BP=new(class extends _M{er(sp){return ((() => {
      const rect = sp.getBoundingClientRect()

      return new U({bottom:(rect.bottom),height:(rect.height),width:(rect.width),right:(rect.right),left:(rect.left),top:(rect.top),x:(rect.x),y:(rect.y)})
    })())}iv(sq,sr,ss){return (sq.setAttribute(sr, ss) && element)}hf(st,su,sv){return ((() => {
      st.style[su] = sv
      return st
    })())}});const AP=new(class extends _M{y(sw){return (new Promise((resolve) => {
      setTimeout(() => {
        resolve(null)
      }, sw)
    }))}});const AI=new(class extends _M{p(sx){return (sx.toString())}});const AG=new(class extends _M{h(sy,sz){return ((() => {
      for (let item of sy) {
        if (_compare(sz, item)) {
          return true
        }
      }

      return false
    })())}sc(ta){return _at(ta, 0)}c(tb){return _compare(AG.q(tb), 0)}e(tc,td){return (()=>{const _0 = [];const _1 = tc;let _i = -1;for(let te of _1){_i++;const tf = _i;_0.push(td(te, tf))};return _0})()}bt(tg,th){return (Array.from({ length: (th + 1) - tg }).map((v, $0) => $0 + tg))}q(ti){return (ti.length)}});const CD=new(class extends _M{gn(tj,tk,tl){(tj.addColorStop(tk, tl));return tj}});const AK=new(class extends _M{s(tm){return _match(tm,[[_PE(AN,[_PV]),((tn)=>{return (()=>{const to=((() => tn instanceof HTMLCanvasElement)());return (to ? (new AN(tn)) : new AO())})()})],[null,(()=>{return new AO()})]])}es(tp){return (tp)}});const BQ=new(class extends _M{jv(tq,tr,ts,tt,tu,tv,tw = false){(tq.arc(tr, ts, tt, tu, tv, tw));return tq}ge(tx){(tx.closePath());return tx}ew(){return (new Path2D())}gf(ty,tz,ua){(ty.lineTo(tz, ua));return ty}gg(ub,uc,ud){(ub.moveTo(uc, ud));return ub}ev(ue,uf,ug,uh,ui){(ue.rect(uf, ug, uh, ui));return ue}});const CH=new(class extends _M{hc(uj){return (uj)}});const CY=new(class extends _M{ku(uk){return (uk.width)}});const AL=new(class extends _M{az(ul,um,un,uo,up,uq,ur = false){(ul.getContext('2d').arc(um, un, uo, up, uq, ur));return ul}aw(us,ut,uu,uv,uw,ux){(us.getContext('2d').arcTo(ut, uu, uv, uw, ux));return us}ap(uy){(uy.getContext('2d').beginPath());return uy}nk(uz,va,vb,vc,vd,ve,vf){(uz.getContext('2d').bezierCurveTo(va, vb, vc, vd, ve, vf));return uz}ki(vg,vh,vi,vj,vk){(vg.getContext('2d').clearRect(vh, vi, vj, vk));return vg}je(vl,vm = new CV()){(vl.getContext('2d').clip(AL.vn(vm)));return vl}ey(vo,vp,vq = new CV()){(vo.getContext('2d').clip(vp, AL.vn(vq)));return vo}dz(vr){(vr.getContext('2d').closePath());return vr}go(vs,vt,vu,vv){return (vs.getContext('2d').createConicGradient(vt, vu, vv))}bq(vw,vx,vy,vz = `srgb`){return (vw.getContext('2d').createImageData(vx, vy, { colorSpace: vz }))}qc(wa,wb,wc,wd,we){return (wa.getContext('2d').createLinearGradient(wb, wc, wd, we))}hq(wf,wg,wh){const wj=AL.wi(wh);return ((() => {
      const $pattern = wf.getContext('2d').createPattern(wg, wj)

      if ($pattern !== null) {
        return new AN(($pattern))
      } else {
        return new AO()
      }
    })())}lr(wk,wl,wm,wn,wo,wp,wq){return (wk.getContext('2d').createRadialGradient(wl, wm, wn, wo, wp, wq))}wr(ws){return _match(ws,[[_PE(EJ,[]),(()=>{return `ltr`})],[_PE(DW,[]),(()=>{return `rtl`})],[_PE(EK,[]),(()=>{return `inherit`})]])}hg(wt,wu,wv,ww,wx = 0,wy = 0,wz = 0,xa = 0,xb = 0,xc = 0){(!_compare(wz, 0) || !_compare(xa, 0) || !_compare(xb, 0) || !_compare(xc, 0) ? (wt.getContext('2d').drawImage(wu, wv, ww, wx, wy, wz, xa, xb, xc)) : (!_compare(wx, 0) || !_compare(wy, 0) ? (wt.getContext('2d').drawImage(wu, wv, ww, wx, wy)) : (wt.getContext('2d').drawImage(wu, wv, ww))));return wt}ci(xd,xe,xf,xg,xh,xi,xj,xk,xl = false){(xd.getContext('2d').ellipse(xe, xf, xg, xh, xi, xj, xk, xl));return xd}ay(xm,xn = new CV()){(xm.getContext('2d').fill(AL.vn(xn)));return xm}gh(xo,xp,xq = new CV()){(xo.getContext('2d').fill(xp, AL.vn(xq)));return xo}ag(xr,xs,xt,xu,xv){(xr.getContext('2d').fillRect(xs, xt, xu, xv));return xr}vn(xw){return _match(xw,[[_PE(CV,[]),(()=>{return `nonzero`})],[_PE(BR,[]),(()=>{return `evenodd`})]])}db(xx,xy,xz,ya,yb = -1){(xx.getContext('2d').fillText(xy, xz, ya, yb === -1 ? undefined : yb ));return xx}yc(yd){return _match(yd,[[_PE(EL,[]),(()=>{return `auto`})],[_PE(BM,[]),(()=>{return `normal`})],[_PE(BN,[]),(()=>{return `none`})]])}ye(yf){return _match(yf,[[_PE(EM,[]),(()=>{return `source-over`})],[_PE(EN,[]),(()=>{return `source-atop`})],[_PE(EO,[]),(()=>{return `source-in`})],[_PE(EP,[]),(()=>{return `source-out`})],[_PE(EQ,[]),(()=>{return `destination-over`})],[_PE(ER,[]),(()=>{return `destination-atop`})],[_PE(ES,[]),(()=>{return `destination-in`})],[_PE(ET,[]),(()=>{return `destination-out`})],[_PE(EU,[]),(()=>{return `lighter`})],[_PE(EV,[]),(()=>{return `copy`})],[_PE(EA,[]),(()=>{return `xor`})]])}yg(yh){return _match(yh,[[_PE(CI,[]),(()=>{return `low`})],[_PE(EW,[]),(()=>{return `medium`})],[_PE(EX,[]),(()=>{return `high`})]])}kf(yi,yj,yk,yl = new CV(),ym = new AO()){return _match(ym,[[_PE(AN,[_PV]),((yn)=>{return (yi.getContext('2d').isPointInPath(yn, yj, yk, AL.vn(yl)))})],[_PE(AO,[]),(()=>{return (yi.getContext('2d').isPointInPath(yj, yk, AL.vn(yl)))})]])}jo(yo,yp,yq,yr = new AO()){return _match(yr,[[_PE(AN,[_PV]),((ys)=>{return (yo.getContext('2d').isPointInStroke(yp, yq, ys))})],[_PE(AO,[]),(()=>{return (yo.getContext('2d').isPointInStroke(yp, yq))})]])}yt(yu){return _match(yu,[[_PE(EY,[]),(()=>{return `butt`})],[_PE(BH,[]),(()=>{return `round`})],[_PE(EZ,[]),(()=>{return `square`})]])}yv(yw){return _match(yw,[[_PE(FA,[]),(()=>{return `bevel`})],[_PE(DF,[]),(()=>{return `round`})],[_PE(FB,[]),(()=>{return `miter`})]])}an(yx,yy,yz){(yx.getContext('2d').lineTo(yy, yz));return yx}kv(za,zb){return (za.getContext('2d').measureText(zb))}ao(zc,zd,ze){(zc.getContext('2d').moveTo(zd, ze));return zc}wi(zf){return _match(zf,[[_PE(CK,[]),(()=>{return `repeat`})],[_PE(FC,[]),(()=>{return `repeat-x`})],[_PE(FD,[]),(()=>{return `repeat-y`})],[_PE(FE,[]),(()=>{return `no-repeat`})]])}bx(zg,zh,zi,zj){(zg.getContext('2d').putImageData(zh, zi, zj));return zg}il(zk,zl,zm,zn,zo){(zk.getContext('2d').quadraticCurveTo(zl, zm, zn, zo));return zk}gv(zp,zq,zr,zs,zt){(zp.getContext('2d').rect(zq, zr, zs, zt));return zp}fl(zu){(zu.getContext('2d').reset());return zu}ld(zv){(zv.getContext('2d').resetTransform());return zv}kp(zw){(zw.getContext('2d').restore());return zw}or(zx,zy){(zx.getContext('2d').rotate(zy));return zx}pl(zz,aaa,aab,aac,aad,aae){(zz.getContext('2d').roundRect(aaa, aab, aac, aad, aae));return zz}kn(aaf){(aaf.getContext('2d').save());return aaf}mj(aag,aah,aai){(aag.getContext('2d').scale(aah, aai));return aag}pw(aaj,aak){(aaj.getContext('2d').direction = AL.wr(aak));return aaj}ah(aal,aam){_match(aam,[[_PE(AM,[_PV]),((aan)=>{return (aal.getContext('2d').fillStyle = aan)})],[_PE(CE,[_PV]),((aao)=>{return (aal.getContext('2d').fillStyle = aao)})],[_PE(CL,[_PV]),((aap)=>{return (aal.getContext('2d').fillStyle = aap)})]]);return aal}fd(aaq,aar){(aaq.getContext('2d').filter = aar);return aaq}da(aas,aat){(aas.getContext('2d').font = aat);return aas}em(aau,aav){(aau.getContext('2d').fontKerning = AL.yc(aav));return aau}be(aaw,aax){(aaw.getContext('2d').globalAlpha = aax);return aaw}qo(aay,aaz){(aay.getContext('2d').globalCompositeOperation = AL.ye(aaz));return aay}pb(aba,abb){(aba.getContext('2d').imageSmoothingEnabled = abb);return aba}hh(abc,abd){(abc.getContext('2d').imageSmoothingQuality = AL.yg(abd));return abc}nb(abe,abf){const abg=`${abf}px`;(abe.getContext('2d').letterSpacing = abg);return abe}dn(abh,abi){(abh.getContext('2d').lineCap = AL.yt(abi));return abh}bk(abj,abk){(abj.getContext('2d').setLineDash(abk));return abj}nw(abl,abm){(abl.getContext('2d').lineDashOffset = abm);return abl}md(abn,abo){(abn.getContext('2d').lineJoin = AL.yv(abo));return abn}ax(abp,abq){(abp.getContext('2d').lineWidth = abq);return abp}ac(abr,abs){(abr.getContext('2d').shadowBlur = abs);return abr}ae(abt,abu){(abt.getContext('2d').shadowColor = abu);return abt}ad(abv,abw){(abv.getContext('2d').shadowOffsetX = abw);return abv}ef(abx,aby){(abx.getContext('2d').shadowOffsetY = aby);return abx}v(abz,aca){_match(aca,[[_PE(AM,[_PV]),((acb)=>{return (abz.getContext('2d').strokeStyle = acb)})],[_PE(CE,[_PV]),((acc)=>{return (abz.getContext('2d').strokeStyle = acc)})],[_PE(CL,[_PV]),((acd)=>{return (abz.getContext('2d').strokeStyle = acd)})]]);return abz}dc(ace,acf){(ace.getContext('2d').textAlign = AL.acg(acf));return ace}fw(ach,aci){(ach.getContext('2d').textBaseline = AL.fy(aci));return ach}cc(acj,ack,acl,acm,acn,aco,acp){(acj.getContext('2d').setTransform(ack, acl, acm, acn, aco, acp));return acj}hz(acq,acr){const acs=`${acr}px`;(acq.getContext('2d').wordSpacing = acs);return acq}am(act,acu = new AO()){_match(acu,[[_PE(AN,[_PV]),((acv)=>{return (act.getContext('2d').stroke(acv))})],[_PE(AO,[]),(()=>{return (act.getContext('2d').stroke())})]]);return act}u(acw,acx,acy,acz,ada){(acw.getContext('2d').strokeRect(acx, acy, acz, ada));return acw}dh(adb,adc,add,ade,adf = 0){(adb.getContext('2d').strokeText(adc, add, ade, adf > 0 ? adf : undefined));return adb}acg(adg){return _match(adg,[[_PE(BC,[]),(()=>{return `left`})],[_PE(BE,[]),(()=>{return `right`})],[_PE(BD,[]),(()=>{return `center`})],[_PE(FF,[]),(()=>{return `start`})],[_PE(FG,[]),(()=>{return `end`})]])}fy(adh){return _match(adh,[[_PE(BY,[]),(()=>{return `alphabetic`})],[_PE(CA,[]),(()=>{return `bottom`})],[_PE(BW,[]),(()=>{return `hanging`})],[_PE(BZ,[]),(()=>{return `ideographic`})],[_PE(BX,[]),(()=>{return `middle`})],[_PE(BV,[]),(()=>{return `top`})]])}ie(adi,adj,adk,adl,adm,adn,ado){(adi.getContext('2d').transform(adj, adk, adl, adm, adn, ado));return adi}mu(adp,adq,adr){(adp.getContext('2d').translate(adq, adr));return adp}});const AW=new(class extends _M{bu(ads,adt,adu){return (ads.data[adt] = adu)}});_program.addRoutes([{handler:(()=>{``}),decoders:[],mapping:[],path:`/`},{handler:((adx)=>{ED.adv(adx)}),decoders:[Decoder.string],mapping:['method'],path:`/:method`}]);class AF extends _C{constructor(props){super(props);this._d({d:[null,[]],n:[null,`mint`],m:[null,``]});this.state = new Record({f:[],r:true})}$b(b){const _={[`--a-a`]:`calc(` + this.a + `ch + 10px)`};(b ? Object.assign(_, {[`--b-a`]:`#F9F9F9`}) : null);(b ? Object.assign(_, {[`--b-b`]:`1.6`,[`--b-c`]:`1`}) : Object.assign(_, {[`--b-c`]:`var(--unhighlighted-opacity)`}));(b ? Object.assign(_, {[`--a-b`]:`#DDD`}) : Object.assign(_, {[`--a-b`]:`var(--title-border)`}));return _}$c(){const _={};(AG.c(this.d) ? Object.assign(_, {[`--c-a`]:`1`}) : Object.assign(_, {[`--c-b`]:`#EEE`,[`--c-a`]:`0.5`}));return _}get j(){return (_compare(this.n, `plain`) ? AH.l(this.m, `\n`) : AH.l((hljs.highlight(this.n, this.m, true).value), `\n`))}get a(){return AH.o(AI.p(AG.q(this.f)))}get f(){return this.state.f;}get r(){return this.state.r;}componentDidUpdate(){const k=this.j;return (!_compare(k, this.f) ? new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({f:k})), _resolve)
})) : (null))}componentDidMount(){return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({f:this.j})), _resolve)
}))}render(){return _h("div", {className:`a`}, [_h("pre", {className:`c`,style:_style([this.$c()])}, [AG.e(this.f, ((g, i)=>{return _h("div", {"dangerouslySetInnerHTML":({__html: g}),className:`b`,style:_style([this.$b(AG.h(this.d, i))])})}))])])}};;class AJ extends _C{get t(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [z,aa] = [(()=>{const x=(()=>{return _match(AK.s(this.t),[[_PE(AN,[_PV]),((w)=>{return (()=>{AL.u(AL.v(w, new AM(`green`)), 20, 10, 160, 100);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return x()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setStrokeStyle(CanvasFillStyle::String("green"))
          |> Canvas.strokeRect(20, 10, 160, 100)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [z]),_h(AF, {m:aa})])}};;class AQ extends _C{get ab(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [aj,ak] = [(()=>{const ai=(()=>{return _match(AK.s(this.ab),[[_PE(AN,[_PV]),((af)=>{return (()=>{AL.ac(AL.ad(AL.ae(af, `red`), 25), 10);AL.ag(AL.ah(af, new AM(`blue`)), 20, 20, 150, 100);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return ai()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Shadow
          el
          |> Canvas.setShadowColor("red")
          |> Canvas.setShadowOffsetX(25)
          |> Canvas.setShadowBlur(10)

          // Rectangle
          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
          |> Canvas.fillRect(20, 20, 150, 100)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [aj]),_h(AF, {m:ak})])}};;class AR extends _C{get al(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [as,at] = [(()=>{const ar=(()=>{return _match(AK.s(this.al),[[_PE(AN,[_PV]),((aq)=>{return (()=>{AL.am(AL.an(AL.ao(AL.ap(aq), 30, 50), 150, 100));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return ar()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.beginPath()
          |> Canvas.moveTo(30, 50)
          |> Canvas.lineTo(150, 100)
          |> Canvas.stroke()

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [as]),_h(AF, {m:at})])}};;class AS extends _C{get au(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [bb,bc] = [(()=>{const ba=(()=>{return _match(AK.s(this.au),[[_PE(AN,[_PV]),((av)=>{return (()=>{AL.am(AL.an(AL.an(AL.ao(AL.v(AL.ap(av), new AM(`gray`)), 200, 20), 200, 130), 50, 20));AL.am(AL.aw(AL.ao(AL.ax(AL.v(AL.ap(av), new AM(`black`)), 5), 200, 20), 200, 130, 50, 20, 40));AL.ay(AL.az(AL.ah(AL.ap(av), new AM(`blue`)), 200, 20, 5, 0, 2 * (Math.PI)));AL.ay(AL.az(AL.az(AL.ah(AL.ap(av), new AM(`red`)), 200, 130, 5, 0, 2 * (Math.PI)), 50, 20, 5, 0, 2 * (Math.PI)));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return ba()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Tangential lines
          el
          |> Canvas.beginPath
          |> Canvas.setStrokeStyle(CanvasFillStyle::String("gray"))
          |> Canvas.moveTo(200, 20)
          |> Canvas.lineTo(200, 130)
          |> Canvas.lineTo(50, 20)
          |> Canvas.stroke

          // Arc
          el
          |> Canvas.beginPath
          |> Canvas.setStrokeStyle(CanvasFillStyle::String("black"))
          |> Canvas.setLineWidth(5)
          |> Canvas.moveTo(200, 20)
          |> Canvas.arcTo(200, 130, 50, 20, 40)
          |> Canvas.stroke

          // Start point
          el
          |> Canvas.beginPath
          |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
          |> Canvas.arc(200, 20, 5, 0, 2 * \`Math.PI\`)
          |> Canvas.fill

          // Control points
          el
          |> Canvas.beginPath
          |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
          |> Canvas.arc(200, 130, 5, 0, 2 * \`Math.PI\`)
          |> Canvas.arc(50, 20, 5, 0, 2 * \`Math.PI\`)
          |> Canvas.fill

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [bb]),_h(AF, {m:bc})])}};;class AT extends _C{get bd(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [bh,bi] = [(()=>{const bg=(()=>{return _match(AK.s(this.bd),[[_PE(AN,[_PV]),((bf)=>{return (()=>{AL.be(bf, 0.5);AL.ag(AL.ah(bf, new AM(`blue`)), 10, 10, 100, 100);AL.ag(AL.ah(bf, new AM(`red`)), 50, 50, 100, 100);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return bg()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setGlobalAlpha(0.5)

          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
          |> Canvas.fillRect(10, 10, 100, 100)

          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
          |> Canvas.fillRect(50, 50, 100, 100)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [bh]),_h(AF, {m:bi})])}};;class AU extends _C{get bj(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [bn,bo] = [(()=>{const bm=(()=>{return _match(AK.s(this.bj),[[_PE(AN,[_PV]),((bl)=>{return (()=>{AL.am(AL.an(AL.ao(AL.bk(AL.ap(bl), [5, 15]), 0, 50), 300, 50));AL.am(AL.an(AL.ao(AL.bk(AL.ap(bl), []), 0, 100), 300, 100));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return bm()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Dashed line
          el
          |> Canvas.beginPath()
          |> Canvas.setLineDash([5, 15])
          |> Canvas.moveTo(0, 50)
          |> Canvas.lineTo(300, 50)
          |> Canvas.stroke()

          // Solid line
          el
          |> Canvas.beginPath()
          |> Canvas.setLineDash([])
          |> Canvas.moveTo(0, 100)
          |> Canvas.lineTo(300, 100)
          |> Canvas.stroke()

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [bn]),_h(AF, {m:bo})])}};;class AV extends _C{get bp(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [bz,ca] = [(()=>{const by=(()=>{return _match(AK.s(this.bp),[[_PE(AN,[_PV]),((br)=>{return (()=>{const bs=AL.bq(br, 100, 100);AG.e(AG.bt(0, 100 * 100 - 1), ((bw, bv)=>{AW.bu(bs, bv * 4, 190);AW.bu(bs, bv * 4 + 1, 0);AW.bu(bs, bv * 4 + 2, 210);AW.bu(bs, bv * 4 + 3, 255);return bw}));AL.bx(br, bs, 20, 20);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return by()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          let imageData =
            Canvas.createImageData(el, 100, 100)

          Array.range(0, 100 * 100 - 1)
          |> Array.mapWithIndex(
            (val : Number, index : Number) {
              ImageData.set(imageData, index * 4, 190)
              ImageData.set(imageData, index * 4 + 1, 0)
              ImageData.set(imageData, index * 4 + 2, 210)
              ImageData.set(imageData, index * 4 + 3, 255)
              val
            })

          el
          |> Canvas.putImageData(imageData, 20, 20)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [bz]),_h(AF, {m:ca})])}};;class AX extends _C{get cb(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [cf,cg] = [(()=>{const ce=(()=>{return _match(AK.s(this.cb),[[_PE(AN,[_PV]),((cd)=>{return (()=>{AL.ag(AL.cc(cd, 1, 0.2, 0.8, 1, 0, 0), 0, 0, 100, 100);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return ce()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setTransform(1, 0.2, 0.8, 1, 0, 0)
          |> Canvas.fillRect(0, 0, 100, 100)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [cf]),_h(AF, {m:cg})])}};;class AY extends _C{get ch(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [cl,cm] = [(()=>{const ck=(()=>{return _match(AK.s(this.ch),[[_PE(AN,[_PV]),((cj)=>{return (()=>{AL.ay(AL.ci(cj, 100, 100, 50, 75, 3.14 * 2, 0, 0));AL.am(AL.ci(AL.ap(cj), 100, 100, 50, 75, (Math.PI) / 4, 0, 2 * (Math.PI)));AL.am(AL.an(AL.ao(AL.bk(AL.ap(cj), [5, 5]), 0, 200), 200, 0));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return ck()})();return _h("canvas", {"width":`200`,"height":`200`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.ellipse(100, 100, 50, 75, 3.14 * 2, 0, 0)
          |> Canvas.fill

          el
          |> Canvas.beginPath
          |> Canvas.ellipse(100, 100, 50, 75, \`Math.PI\` / 4, 0, 2 * \`Math.PI\`)
          |> Canvas.stroke

          // Draw the ellipse's line of reflection
          el
          |> Canvas.beginPath
          |> Canvas.setLineDash([5, 5])
          |> Canvas.moveTo(0, 200)
          |> Canvas.lineTo(200, 0)
          |> Canvas.stroke

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas
  width="200"
  height="200"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [cl]),_h(AF, {m:cm})])}};;class AZ extends _C{get cn(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [cq,cr] = [(()=>{const cp=(()=>{return _match(AK.s(this.cn),[[_PE(AN,[_PV]),((co)=>{return (()=>{AL.ag(AL.ah(co, new AM(`green`)), 10, 10, 150, 100);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return cp()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("green"))
          |> Canvas.fillRect(10, 10, 150, 100)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [cq]),_h(AF, {m:cr})])}};;class BA extends _C{get cs(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [cv,cw] = [(()=>{const cu=(()=>{return _match(AK.s(this.cs),[[_PE(AN,[_PV]),((ct)=>{return (()=>{AL.ac(AL.ae(ct, `red`), 15);AL.ag(AL.ah(ct, new AM(`blue`)), 20, 20, 150, 100);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return cu()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Shadow
          el
          |> Canvas.setShadowColor("red")
          |> Canvas.setShadowBlur(15)

          // Rectangle
          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
          |> Canvas.fillRect(20, 20, 150, 100)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [cv]),_h(AF, {m:cw})])}};;class BB extends _C{get cx(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [de,df] = [(()=>{const dd=(()=>{return _match(AK.s(this.cx),[[_PE(AN,[_PV]),((cz)=>{return (()=>{const cy=175;AL.am(AL.an(AL.ao(AL.ap(cz), cy, 0), cy, 150));AL.da(cz, `30px serif`);AL.db(AL.dc(cz, new BC()), `left-aligned`, cy, 40);AL.db(AL.dc(cz, new BD()), `center-aligned`, cy, 85);AL.db(AL.dc(cz, new BE()), `right-aligned`, cy, 130);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return dd()})();return _h("canvas", {"width":`350`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          let x =
            175

          el
          |> Canvas.beginPath()
          |> Canvas.moveTo(x, 0)
          |> Canvas.lineTo(x, 150)
          |> Canvas.stroke()

          el
          |> Canvas.setFont("30px serif")

          el
          |> Canvas.setTextAlign(CanvasTextAlign::Left)
          |> Canvas.fillText("left-aligned", x, 40)

          el
          |> Canvas.setTextAlign(CanvasTextAlign::Center)
          |> Canvas.fillText("center-aligned", x, 85)

          el
          |> Canvas.setTextAlign(CanvasTextAlign::Right)
          |> Canvas.fillText("right-aligned", x, 130)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas width="350"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [de]),_h(AF, {m:df})])}};;class BF extends _C{get dg(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [dk,dl] = [(()=>{const dj=(()=>{return _match(AK.s(this.dg),[[_PE(AN,[_PV]),((di)=>{return (()=>{AL.dh(AL.da(di, `bold 48px serif`), `Hello world`, 50, 100);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return dj()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setFont("bold 48px serif")
          |> Canvas.strokeText("Hello world", 50, 100)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [dk]),_h(AF, {m:dl})])}};;class BG extends _C{get dm(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [dr,ds] = [(()=>{const dq=(()=>{return _match(AK.s(this.dm),[[_PE(AN,[_PV]),((dp)=>{return (()=>{AL.am(AL.an(AL.dn(AL.ax(AL.ao(AL.ap(dp), 20, 20), 15), new BH()), 100, 100));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return dq()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.beginPath()
          |> Canvas.moveTo(20, 20)
          |> Canvas.setLineWidth(15)
          |> Canvas.setLineCap(CanvasLineCap::Round)
          |> Canvas.lineTo(100, 100)
          |> Canvas.stroke()

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [dr]),_h(AF, {m:ds})])}};;class BI extends _C{get dt(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [dw,dx] = [(()=>{const dv=(()=>{return _match(AK.s(this.dt),[[_PE(AN,[_PV]),((du)=>{return (()=>{AL.ag(AL.ah(du, new AM(`blue`)), 10, 10, 100, 100);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return dv()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
          |> Canvas.fillRect(10, 10, 100, 100)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [dw]),_h(AF, {m:dx})])}};;class BJ extends _C{get dy(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [ec,ed] = [(()=>{const eb=(()=>{return _match(AK.s(this.dy),[[_PE(AN,[_PV]),((ea)=>{return (()=>{AL.am(AL.dz(AL.an(AL.an(AL.ao(AL.ap(ea), 20, 140), 120, 10), 220, 140)));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return eb()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.beginPath()
          |> Canvas.moveTo(20, 140)
          |> Canvas.lineTo(120, 10)
          |> Canvas.lineTo(220, 140)
          |> Canvas.closePath
          |> Canvas.stroke

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ec]),_h(AF, {m:ed})])}};;class BK extends _C{get ee(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [ei,ej] = [(()=>{const eh=(()=>{return _match(AK.s(this.ee),[[_PE(AN,[_PV]),((eg)=>{return (()=>{AL.ac(AL.ef(AL.ae(eg, `red`), 25), 10);AL.ag(AL.ah(eg, new AM(`blue`)), 20, 20, 150, 80);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return eh()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Shadow
          el
          |> Canvas.setShadowColor("red")
          |> Canvas.setShadowOffsetY(25)
          |> Canvas.setShadowBlur(10)

          // Rectangle
          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
          |> Canvas.fillRect(20, 20, 150, 80)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ei]),_h(AF, {m:ej})])}};;class BL extends _C{get ek(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [eo,ep] = [(()=>{const en=(()=>{return _match(AK.s(this.ek),[[_PE(AN,[_PV]),((el)=>{return (()=>{AL.da(el, `30px serif`);AL.db(el, `AVA Ta We (default: auto)`, 5, 30);AL.db(AL.em(el, new BM()), `AVA Ta We (normal)`, 5, 70);AL.db(AL.em(el, new BN()), `AVA Ta We none`, 5, 110);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return en()})();return _h("canvas", {"width":`400`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setFont("30px serif")

          // Default (auto)
          el
          |> Canvas.fillText("AVA Ta We (default: auto)", 5, 30)

          // Font kerning: normal
          el
          |> Canvas.setFontKerning(CanvasFontKerning::Normal)
          |> Canvas.fillText("AVA Ta We (normal)", 5, 70)

          // Font kerning: none
          el
          |> Canvas.setFontKerning(CanvasFontKerning::None)
          |> Canvas.fillText("AVA Ta We none", 5, 110)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas width="400"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [eo]),_h(AF, {m:ep})])}};;class BO extends _C{get eq(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [fa,fb] = [(()=>{const ez=(()=>{return _match(AK.s(this.eq),[[_PE(AN,[_PV]),((et)=>{return (()=>{const eu=BP.er(AK.es(et));const ex=BQ.ev(BQ.ev(BQ.ew(), 80, 10, 20, 130), 40, 50, 100, 50);AL.ey(et, ex, new BR());AL.ag(AL.ah(et, new AM(`blue`)), 0, 0, eu.width, eu.height);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return ez()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          let dims =
            el
            |> Dom.Canvas.toDomElement
            |> Dom.getDimensions

          // Create clipping path
          let region =
            Path2D.create()
            |> Path2D.rect(80, 10, 20, 130)
            |> Path2D.rect(40, 50, 100, 50)

          // Apply the clipping path
          el
          |> Canvas.clipPath(region, CanvasFillRule::EvenOdd)

          // Draw stuff that gets clipped
          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
          |> Canvas.fillRect(0, 0, dims.width, dims.height)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [fa]),_h(AF, {m:fb})])}};;class BS extends _C{get fc(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [fg,fh] = [(()=>{const ff=(()=>{return _match(AK.s(this.fc),[[_PE(AN,[_PV]),((fe)=>{return (()=>{AL.db(AL.da(AL.fd(fe, `blur(4px)`), `48px serif`), `Hello world`, 50, 100);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return ff()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setFilter("blur(4px)")
          |> Canvas.setFont("48px serif")
          |> Canvas.fillText("Hello world", 50, 100)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [fg]),_h(AF, {m:fh})])}};;class BT extends _C{get fi(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [fp,fq] = [(()=>{const fk=(()=>{return _match(AK.s(this.fi),[[_PE(AN,[_PV]),((fj)=>{return (()=>{AL.db(AL.da(fj, `25px sans-serif`), `Click reset button to reset`, 0, 50);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});const fn=(()=>{return _match(AK.s(this.fi),[[_PE(AN,[_PV]),((fm)=>{return (()=>{AL.fl(fm);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return fk()})();return _h("div", {}, [_h("button", {"onClick":(event => (((fo)=>{return fn()}))(_normalizeEvent(event)))}, [`reset`]),_h("canvas", {ref:(element) => { this._canvas = element }})])})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setFont("25px sans-serif")
          |> Canvas.fillText("Click reset button to reset", 0, 50)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

let reset =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.reset

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<div>
  <button onClick={(e : Html.Event) { reset() }}>
    "reset"
  </button>

  <canvas as canvas/>
</div>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [fp]),_h(AF, {m:fq})])}};;class BU extends _C{get fr(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [ga,gb] = [(()=>{const fz=(()=>{return _match(AK.s(this.fr),[[_PE(AN,[_PV]),((ft)=>{return (()=>{const fs=[new BV(), new BW(), new BX(), new BY(), new BZ(), new CA()];AL.v(AL.da(ft, `36px serif`), new AM(`red`));AG.e(fs, ((fx, fu)=>{const fv=75 + fu * 75;return AL.db(AL.am(AL.an(AL.ao(AL.ap(AL.fw(ft, fx)), 0, fv + 0.5), 550, fv + 0.5)), `Abcdefghijklmnop (${AL.fy(fx)})`, 0, fv)}));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return fz()})();return _h("canvas", {"width":`550`,"height":`500`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          let baselines =
            [
              CanvasTextBaseline::Top,
              CanvasTextBaseline::Hanging,
              CanvasTextBaseline::Middle,
              CanvasTextBaseline::Alphabetic,
              CanvasTextBaseline::Ideographic,
              CanvasTextBaseline::Bottom
            ]

          el
          |> Canvas.setFont("36px serif")
          |> Canvas.setStrokeStyle(CanvasFillStyle::String("red"))

          Array.mapWithIndex(
            baselines, 
            (baseline : CanvasTextBaseline, index : Number) {
              let y =
                75 + index * 75

              el
              |> Canvas.setTextBaseline(baseline)
              |> Canvas.beginPath()
              |> Canvas.moveTo(0, y + 0.5)
              |> Canvas.lineTo(550, y + 0.5)
              |> Canvas.stroke()
              |> Canvas.fillText("Abcdefghijklmnop (#{Canvas.textBaselineToStr(baseline)})", 0, y)
            })

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas
  width="550"
  height="500"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ga]),_h(AF, {m:gb})])}};;class CB extends _C{get gc(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [gk,gl] = [(()=>{const gj=(()=>{return _match(AK.s(this.gc),[[_PE(AN,[_PV]),((gi)=>{return (()=>{const gd=BQ.ew();BQ.ge(BQ.gf(BQ.gf(BQ.gf(BQ.gf(BQ.gf(BQ.gg(gd, 30, 90), 110, 20), 240, 130), 60, 130), 190, 20), 270, 90));AL.gh(AL.ah(gi, new AM(`green`)), gd, new BR());return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return gj()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Create path
          let region =
            Path2D.create()

          region
          |> Path2D.moveTo(30, 90)
          |> Path2D.lineTo(110, 20)
          |> Path2D.lineTo(240, 130)
          |> Path2D.lineTo(60, 130)
          |> Path2D.lineTo(190, 20)
          |> Path2D.lineTo(270, 90)
          |> Path2D.closePath()

          // Fill path
          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("green"))
          |> Canvas.fillPath(region, CanvasFillRule::EvenOdd)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [gk]),_h(AF, {m:gl})])}};;class CC extends _C{get gm(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [gs,gt] = [(()=>{const gr=(()=>{return _match(AK.s(this.gm),[[_PE(AN,[_PV]),((gp)=>{return (()=>{const gq=CD.gn(CD.gn(CD.gn(CD.gn(CD.gn(AL.go(gp, 0, 100, 100), 0, `red`), 0.25, `orange`), 0.5, `yellow`), 0.75, `green`), 1, `blue`);AL.ag(AL.ah(gp, new CE(gq)), 20, 20, 200, 200);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return gr()})();return _h("canvas", {"width":`240`,"height":`240`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Add five color stops
          let gradient =
            Canvas.createConicGradient(el, 0, 100, 100)
            |> CanvasGradient.addColorStop(0, "red")
            |> CanvasGradient.addColorStop(0.25, "orange")
            |> CanvasGradient.addColorStop(0.5, "yellow")
            |> CanvasGradient.addColorStop(0.75, "green")
            |> CanvasGradient.addColorStop(1, "blue")

          // Set the fill style and draw a rectangle
          el
          |> Canvas.setFillStyle(CanvasFillStyle::Gradient(gradient))
          |> Canvas.fillRect(20, 20, 200, 200)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas
  width="240"
  height="240"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [gs]),_h(AF, {m:gt})])}};;class CF extends _C{get gu(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [gy,gz] = [(()=>{const gx=(()=>{return _match(AK.s(this.gu),[[_PE(AN,[_PV]),((gw)=>{return (()=>{AL.ay(AL.gv(gw, 10, 10, 150, 100));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return gx()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.rect(10, 10, 150, 100)
          |> Canvas.fill

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [gy]),_h(AF, {m:gz})])}};;class CG extends _C{get hb(){return (this._image ? new AN(this._image) : new AO);}get ha(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [hk,hl] = [(()=>{const hj=(()=>{return _match(AK.s(this.ha),[[_PE(AN,[_PV]),((hi)=>{return _match(this.hb,[[_PE(AN,[_PV]),((hd)=>{return (()=>{const he=CH.hc(hd);BP.hf(hd, `display`, `none`);AL.hg(AL.hh(hi, new CI()), he, 0, 0, 300, 150);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])})],[_PE(AO,[]),(()=>{return ``})]])});return _h(React.Fragment, {}, [_h("img", {"src":`/assets/canvas_createpattern_b99d5d2815a4c038e9721778fb4910ff.png`,"onLoad":(event => (hj)(_normalizeEvent(event))),ref:(element) => { this._image = element }}),_h("canvas", {ref:(element) => { this._canvas = element }})])})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(canvasEl) =>
        case image {
          Maybe::Just(imageEl) =>
            {
              let imageSource =
                CanvasImageSource.fromImage(imageEl)

              Dom.setStyle(imageEl, "display", "none")

              canvasEl
              |> Canvas.setImageSmoothingQuality(CanvasImageSmoothingQuality::Low)
              |> Canvas.drawImage(imageSource, 0, 0, 300, 150)

              ""
            }

          Maybe::Nothing =>
            ""
        }

      Maybe::Nothing =>
        ""
    }
  }

<>
  <img as image
    src={@asset(../../assets/canvas_createpattern.png)}
    onLoad={draw}/>

  <canvas as canvas/>
</>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [hk]),_h(AF, {m:hl})])}};;class CJ extends _C{get hn(){return (this._image ? new AN(this._image) : new AO);}get hm(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [hv,hw] = [(()=>{const hu=(()=>{return _match(AK.s(this.hm),[[_PE(AN,[_PV]),((hr)=>{return _match(this.hn,[[_PE(AN,[_PV]),((ho)=>{return (()=>{const hp=CH.hc(ho);const hs=AL.hq(hr, hp, new CK());BP.hf(ho, `display`, `none`);_match(hs,[[_PE(AN,[_PV]),((ht)=>{return (()=>{AL.ag(AL.ah(hr, new CL(ht)), 0, 0, 300, 300);return ``})()})],[_PE(AO,[]),(()=>{return ``})]]);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])})],[_PE(AO,[]),(()=>{return ``})]])});return _h(React.Fragment, {}, [_h("img", {"src":`/assets/canvas_createpattern_b99d5d2815a4c038e9721778fb4910ff.png`,"onLoad":(event => (hu)(_normalizeEvent(event))),ref:(element) => { this._image = element }}),_h("canvas", {"width":`300`,"height":`300`,ref:(element) => { this._canvas = element }})])})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(canvasEl) =>
        case image {
          Maybe::Just(imageEl) =>
            {
              let imageSource =
                CanvasImageSource.fromImage(imageEl)

              let pattern =
                Canvas.createPattern(canvasEl, imageSource, CanvasPatternRepeat::Repeat)

              Dom.setStyle(imageEl, "display", "none")

              case pattern {
                Maybe::Just(p) =>
                  {
                    canvasEl
                    |> Canvas.setFillStyle(CanvasFillStyle::Pattern(p))
                    |> Canvas.fillRect(0, 0, 300, 300)

                    ""
                  }

                Maybe::Nothing =>
                  ""
              }

              ""
            }

          Maybe::Nothing =>
            ""
        }

      Maybe::Nothing =>
        ""
    }
  }

<>
  <img as image
    src={@asset(../../assets/canvas_createpattern.png)}
    onLoad={draw}/>

  <canvas as canvas
    width="300"
    height="300"/>
</>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [hv]),_h(AF, {m:hw})])}};;class CM extends _C{get hx(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [ib,ic] = [(()=>{const ia=(()=>{return _match(AK.s(this.hx),[[_PE(AN,[_PV]),((hy)=>{return (()=>{AL.da(hy, `30px serif`);AL.db(hy, `Hello world (default: 0px)`, 10, 40);AL.db(AL.hz(hy, 10), `Hello world (10px)`, 10, 90);AL.db(AL.hz(hy, 30), `Hello world (30px)`, 10, 140);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return ia()})();return _h("canvas", {"width":`700`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setFont("30px serif")

          // Default word spacing
          el
          |> Canvas.fillText("Hello world (default: 0px)", 10, 40)

          // Custom word spacing: 10px
          el
          |> Canvas.setWordSpacing(10)
          |> Canvas.fillText("Hello world (10px)", 10, 90)

          // Custom word spacing: 30px
          el
          |> Canvas.setWordSpacing(30)
          |> Canvas.fillText("Hello world (30px)", 10, 140)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas width="700"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ib]),_h(AF, {m:ic})])}};;class CN extends _C{get id(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [ii,ij] = [(()=>{const ih=(()=>{return _match(AK.s(this.id),[[_PE(AN,[_PV]),((ig)=>{return (()=>{AL.ag(AL.ie(ig, 1, 0.2, 0.8, 1, 0, 0), 0, 0, 100, 100);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return ih()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.transform(1, 0.2, 0.8, 1, 0, 0)
          |> Canvas.fillRect(0, 0, 100, 100)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ii]),_h(AF, {m:ij})])}};;class CO extends _C{get ik(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [ip,iq] = [(()=>{const io=(()=>{return _match(AK.s(this.ik),[[_PE(AN,[_PV]),((im)=>{return (()=>{AL.am(AL.il(AL.ao(AL.ap(im), 50, 20), 230, 30, 50, 100));AL.ay(AL.az(AL.az(AL.ap(AL.ah(im, new AM(`blue`))), 50, 20, 5, 0, 2 * (Math.PI)), 50, 100, 5, 0, 2 * (Math.PI)));AL.ay(AL.az(AL.ap(AL.ah(im, new AM(`red`))), 230, 30, 5, 0, 2 * (Math.PI)));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return io()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Quadratic Bézier curve
          el
          |> Canvas.beginPath
          |> Canvas.moveTo(50, 20)
          |> Canvas.quadraticCurveTo(230, 30, 50, 100)
          |> Canvas.stroke

          // Start and end points
          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
          |> Canvas.beginPath
          |> Canvas.arc(50, 20, 5, 0, 2 * \`Math.PI\`)
          |> Canvas.arc(50, 100, 5, 0, 2 * \`Math.PI\`)
          |> Canvas.fill

          // Control point
          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
          |> Canvas.beginPath
          |> Canvas.arc(230, 30, 5, 0, 2 * \`Math.PI\`)
          |> Canvas.fill

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ip]),_h(AF, {m:iq})])}};;class CP extends _C{get is(){return (this._image ? new AN(this._image) : new AO);}get ir(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [iz,ja] = [(()=>{const iy=(()=>{return _match(AK.s(this.ir),[[_PE(AN,[_PV]),((iw)=>{return _match(this.is,[[_PE(AN,[_PV]),((it)=>{return (()=>{const iu=BP.er(it);BP.hf(it, `display`, `none`);BP.iv(BP.iv(AK.es(iw), `width`, `${iu.width}`), `height`, `${iu.width}`);const ix=CH.hc(it);AL.hg(iw, ix, 0, 0);return ``})()})],[null,(()=>{return ``})]])})],[null,(()=>{return ``})]])});return _h(React.Fragment, {}, [_h("img", {"src":`/assets/rhino_a195bee0a7ab0dea23d28fba649dc033.jpg`,"onLoad":(event => (iy)(_normalizeEvent(event))),ref:(element) => { this._image = element }}),_h("canvas", {ref:(element) => { this._canvas = element }})])})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        case image {
          Maybe::Just(img) =>
            {
              let dims =
                Dom.getDimensions(img)

              // resize canvas to display full image
              Dom.setStyle(img, "display", "none")

              el
              |> Dom.Canvas.toDomElement
              |> Dom.setAttribute("width", "#{dims.width}")
              |> Dom.setAttribute("height", "#{dims.width}")

              let imageData =
                CanvasImageSource.fromImage(img)

              el
              |> Canvas.drawImage(imageData, 0, 0)

              ""
            }

          =>
            ""
        }

      =>
        ""
    }
  }

<>
  <img as image
    src={@asset(../../assets/rhino.jpg)}
    onLoad={draw}/>

  <canvas as canvas/>
</>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [iz]),_h(AF, {m:ja})])}};;class CQ extends _C{get jb(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [jg,jh] = [(()=>{const jf=(()=>{return _match(AK.s(this.jb),[[_PE(AN,[_PV]),((jc)=>{return (()=>{const jd=BP.er(AK.es(jc));AL.je(AL.az(AL.ap(jc), 100, 75, 50, 0, (Math.PI) * 2));AL.ag(AL.ah(AL.ag(AL.ah(jc, new AM(`blue`)), 0, 0, jd.width, jd.height), new AM(`orange`)), 0, 0, 100, 100);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return jf()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          let dims =
            el
            |> Dom.Canvas.toDomElement
            |> Dom.getDimensions

          // Create circular clipping region
          el
          |> Canvas.beginPath
          |> Canvas.arc(100, 75, 50, 0, \`Math.PI\` * 2)
          |> Canvas.clip

          // Draw stuff that gets clipped
          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
          |> Canvas.fillRect(0, 0, dims.width, dims.height)
          |> Canvas.setFillStyle(CanvasFillStyle::String("orange"))
          |> Canvas.fillRect(0, 0, 100, 100)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [jg]),_h(AF, {m:jh})])}};;class CR extends _C{get ji(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [jl,jm] = [(()=>{const jk=(()=>{return _match(AK.s(this.ji),[[_PE(AN,[_PV]),((jj)=>{return (()=>{AL.ef(AL.ad(AL.ae(jj, `red`), 10), 10);AL.ag(jj, 20, 20, 100, 100);AL.u(AL.ax(jj, 6), 170, 20, 100, 100);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return jk()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Shadow
          el
          |> Canvas.setShadowColor("red")
          |> Canvas.setShadowOffsetX(10)
          |> Canvas.setShadowOffsetY(10)

          // Filled rectangle
          el
          |> Canvas.fillRect(20, 20, 100, 100)

          // Stroked rectangle
          el
          |> Canvas.setLineWidth(6)
          |> Canvas.strokeRect(170, 20, 100, 100)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [jl]),_h(AF, {m:jm})])}};;class CS extends _C{get jn(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [jt,ju] = [(()=>{const js=(()=>{return _match(AK.s(this.jn),[[_PE(AN,[_PV]),((jp)=>{return (()=>{const jq=AL.jo(AL.am(AL.gv(jp, 10, 10, 100, 100)), 50, 10);AL.db(jp, `(50, 10) is in stroke: ${CT.jr(jq)}`, 150, 50);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return js()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          let isInStroke =
            el
            |> Canvas.rect(10, 10, 100, 100)
            |> Canvas.stroke()
            |> Canvas.isPointInStroke(50, 10)

          el
          |> Canvas.fillText("(50, 10) is in stroke: #{Bool.toString(isInStroke)}", 150, 50)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [jt]),_h(AF, {m:ju})])}};;class CU extends _C{get jx(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [kk,kl] = [(()=>{const jw=BQ.jv(BQ.ew(), 150, 75, 50, 0, 2 * (Math.PI));const jz=(()=>{return _match(AK.s(this.jx),[[_PE(AN,[_PV]),((jy)=>{return (()=>{AL.gh(AL.ah(jy, new AM(`red`)), jw);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});const kj=((kc)=>{return _match(AK.s(this.jx),[[_PE(AN,[_PV]),((ka)=>{return (()=>{const kb=BP.er(AK.es(ka));const kd=kc.clientX - kb.left;const ke=kc.clientY - kb.top;const kg=AL.kf(ka, kd, ke, new CV(), new AN(jw));const kh=new AM((kg ? `green` : `red`));AL.gh(AL.ki(AL.ah(ka, kh), 0, 0, kb.width, kb.height), jw);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return jz()})();return _h("canvas", {"onMouseMove":(event => (kj)(_normalizeEvent(event))),ref:(element) => { this._canvas = element }})})(), `let circle =
  Path2D.create()
  |> Path2D.arc(150, 75, 50, 0, 2 * \`Math.PI\`)

let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
          |> Canvas.fillPath(circle)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

// Listen for mouse moves
let onMouseMove =
  (e : Html.Event) {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          let dims =
            el
            |> Dom.Canvas.toDomElement
            |> Dom.getDimensions

          let x =
            e.clientX - dims.left

          let y =
            e.clientY - dims.top

          // Check whether point is inside circle
          let isPointInPath =
            el
            |> Canvas.isPointInPath(x, y, CanvasFillRule::Nonzero, Maybe::Just(circle))

          let color =
            CanvasFillStyle::String(
              if isPointInPath {
                "green"
              } else {
                "red"
              })

          el
          |> Canvas.setFillStyle(color)
          |> Canvas.clearRect(0, 0, dims.width, dims.height)
          |> Canvas.fillPath(circle)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas onMouseMove={onMouseMove}/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [kk]),_h(AF, {m:kl})])}};;class CW extends _C{get km(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [kr,ks] = [(()=>{const kq=(()=>{return _match(AK.s(this.km),[[_PE(AN,[_PV]),((ko)=>{return (()=>{AL.kn(ko);AL.ag(AL.ah(ko, new AM(`green`)), 10, 10, 100, 100);AL.ag(AL.kp(ko), 150, 40, 100, 100);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return kq()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Save the current state
          el
          |> Canvas.save()

          // Set the fill style and draw a rect
          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("green"))
          |> Canvas.fillRect(10, 10, 100, 100)

          // Restore to the state saved by the most recent call to save()
          el
          |> Canvas.restore()
          |> Canvas.fillRect(150, 40, 100, 100)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [kr]),_h(AF, {m:ks})])}};;class CX extends _C{get kt(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [kz,la] = [(()=>{const ky=(()=>{return _match(AK.s(this.kt),[[_PE(AN,[_PV]),((kw)=>{return (()=>{const kx=CY.ku(AL.kv(kw, `Hello world`));AL.db(AL.da(kw, `24px serif`), `width: ${kx}`, 0, 50);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return ky()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          let width =
            el
            |> Canvas.measureText("Hello world")
            |> TextMetrics.width

          el
          |> Canvas.setFont("24px serif")
          |> Canvas.fillText("width: #{width}", 0, 50)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [kz]),_h(AF, {m:la})])}};;class CZ extends _C{get lb(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [lf,lg] = [(()=>{const le=(()=>{return _match(AK.s(this.lb),[[_PE(AN,[_PV]),((lc)=>{return (()=>{AL.ag(AL.ag(AL.ah(AL.ie(lc, 1, 0, 1.7, 1, 0, 0), new AM(`gray`)), 40, 40, 50, 20), 40, 90, 50, 20);AL.ag(AL.ag(AL.ah(AL.ld(lc), new AM(`red`)), 40, 40, 50, 20), 40, 90, 50, 20);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return le()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Skewed rectangles
          el
          |> Canvas.transform(1, 0, 1.7, 1, 0, 0)
          |> Canvas.setFillStyle(CanvasFillStyle::String("gray"))
          |> Canvas.fillRect(40, 40, 50, 20)
          |> Canvas.fillRect(40, 90, 50, 20)

          // Non-skewed rectangles
          el
          |> Canvas.resetTransform()
          |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
          |> Canvas.fillRect(40, 40, 50, 20)
          |> Canvas.fillRect(40, 90, 50, 20)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [lf]),_h(AF, {m:lg})])}};;class DA extends _C{get lh(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [lo,lp] = [(()=>{const ln=(()=>{return _match(AK.s(this.lh),[[_PE(AN,[_PV]),((li)=>{return (()=>{AL.ki(li, 0, 0, 150, 150);AL.u(AL.ax(AL.v(li, new AM(`#09f`)), 2), -5, 50, 160, 50);AL.ax(AL.v(li, new AM(`#000`)), 10);AL.ao(AL.ap(li), 0, 100);AG.e(AG.bt(0, 24), ((lm, lj)=>{const lk=(_compare(lj % 2, 0) ? 25 : -25);AL.an(li, DB.ll(lj, 1.5) * 2, 75 + lk);return lm}));AL.am(li);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return ln()})();return _h("canvas", {"width":`150`,"height":`150`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Clear canvas
          el
          |> Canvas.clearRect(0, 0, 150, 150)

          // Draw guides
          el
          |> Canvas.setStrokeStyle(CanvasFillStyle::String("#09f"))
          |> Canvas.setLineWidth(2)
          |> Canvas.strokeRect(-5, 50, 160, 50)

          // Set line styles
          el
          |> Canvas.setStrokeStyle(CanvasFillStyle::String("#000"))
          |> Canvas.setLineWidth(10)

          // Draw lines
          el
          |> Canvas.beginPath
          |> Canvas.moveTo(0, 100)

          Array.range(0, 24)
          |> Array.mapWithIndex(
            (val : Number, i : Number) {
              let dy =
                if i % 2 == 0 {
                  25
                } else {
                  -25
                }

              Canvas.lineTo(el, Math.pow(i, 1.5) * 2, 75 + dy)
              val
            })

          el
          |> Canvas.stroke

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas
  width="150"
  height="150"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [lo]),_h(AF, {m:lp})])}};;class DC extends _C{get lq(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [lv,lw] = [(()=>{const lu=(()=>{return _match(AK.s(this.lq),[[_PE(AN,[_PV]),((ls)=>{return (()=>{const lt=CD.gn(CD.gn(CD.gn(AL.lr(ls, 110, 90, 30, 100, 100, 70), 0, `pink`), 0.9, `white`), 1, `green`);AL.ag(AL.ah(ls, new CE(lt)), 20, 20, 160, 160);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return lu()})();return _h("canvas", {"width":`200`,"height":`200`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Add five color stops
          let gradient =
            Canvas.createRadialGradient(el, 110, 90, 30, 100, 100, 70)
            |> CanvasGradient.addColorStop(0, "pink")
            |> CanvasGradient.addColorStop(0.9, "white")
            |> CanvasGradient.addColorStop(1, "green")

          // Set the fill style and draw a rectangle
          el
          |> Canvas.setFillStyle(CanvasFillStyle::Gradient(gradient))
          |> Canvas.fillRect(20, 20, 160, 160)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas
  width="200"
  height="200"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [lv]),_h(AF, {m:lw})])}};;class DD extends _C{get lx(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [ma,mb] = [(()=>{const lz=(()=>{return _match(AK.s(this.lx),[[_PE(AN,[_PV]),((ly)=>{return (()=>{AL.dh(AL.da(ly, `50px serif`), `Hello world`, 50, 90);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return lz()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setFont("50px serif")
          |> Canvas.strokeText("Hello world", 50, 90)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ma]),_h(AF, {m:mb})])}};;class DE extends _C{get mc(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [mg,mh] = [(()=>{const mf=(()=>{return _match(AK.s(this.mc),[[_PE(AN,[_PV]),((me)=>{return (()=>{AL.am(AL.an(AL.an(AL.an(AL.ao(AL.ap(AL.md(AL.ax(me, 20), new DF())), 20, 20), 190, 100), 280, 20), 280, 150));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return mf()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setLineWidth(20)
          |> Canvas.setLineJoin(CanvasLineJoin::Round)
          |> Canvas.beginPath()
          |> Canvas.moveTo(20, 20)
          |> Canvas.lineTo(190, 100)
          |> Canvas.lineTo(280, 20)
          |> Canvas.lineTo(280, 150)
          |> Canvas.stroke()

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [mg]),_h(AF, {m:mh})])}};;class DG extends _C{get mi(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [mm,mn] = [(()=>{const ml=(()=>{return _match(AK.s(this.mi),[[_PE(AN,[_PV]),((mk)=>{return (()=>{AL.ag(AL.ah(AL.mj(mk, 9, 3), new AM(`red`)), 10, 10, 8, 20);AL.cc(mk, 1, 0, 0, 1, 0, 0);AL.ag(AL.ah(mk, new AM(`gray`)), 10, 10, 8, 20);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return ml()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Scaled rectangle
          el
          |> Canvas.scale(9, 3)
          |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
          |> Canvas.fillRect(10, 10, 8, 20)

          // Reset current transformation matrix to the identity matrix
          el
          |> Canvas.setTransform(1, 0, 0, 1, 0, 0)

          // Non-scaled rectangle
          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("gray"))
          |> Canvas.fillRect(10, 10, 8, 20)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [mm]),_h(AF, {m:mn})])}};;class DH extends _C{get mo(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [mr,ms] = [(()=>{const mq=(()=>{return _match(AK.s(this.mo),[[_PE(AN,[_PV]),((mp)=>{return (()=>{AL.am(AL.an(AL.ao(AL.v(AL.ap(mp), new AM(`blue`)), 20, 20), 200, 20));AL.am(AL.an(AL.ao(AL.v(AL.ap(mp), new AM(`green`)), 20, 20), 120, 120));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return mq()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Tangential lines
          el
          |> Canvas.beginPath
          |> Canvas.setStrokeStyle(CanvasFillStyle::String("blue"))
          |> Canvas.moveTo(20, 20)
          |> Canvas.lineTo(200, 20)
          |> Canvas.stroke

          // Second path
          el
          |> Canvas.beginPath
          |> Canvas.setStrokeStyle(CanvasFillStyle::String("green"))
          |> Canvas.moveTo(20, 20)
          |> Canvas.lineTo(120, 120)
          |> Canvas.stroke

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [mr]),_h(AF, {m:ms})])}};;class DI extends _C{get mt(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [mx,my] = [(()=>{const mw=(()=>{return _match(AK.s(this.mt),[[_PE(AN,[_PV]),((mv)=>{return (()=>{AL.ag(AL.ah(AL.mu(mv, 110, 30), new AM(`red`)), 0, 0, 80, 80);AL.cc(mv, 1, 0, 0, 1, 0, 0);AL.ag(AL.ah(mv, new AM(`gray`)), 0, 0, 80, 80);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return mw()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Moved square
          el
          |> Canvas.translate(110, 30)
          |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
          |> Canvas.fillRect(0, 0, 80, 80)

          // Reset current transformation matrix to the identity matrix
          el
          |> Canvas.setTransform(1, 0, 0, 1, 0, 0)

          // Unmoved square
          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("gray"))
          |> Canvas.fillRect(0, 0, 80, 80)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [mx]),_h(AF, {m:my})])}};;class DJ extends _C{get mz(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [nd,ne] = [(()=>{const nc=(()=>{return _match(AK.s(this.mz),[[_PE(AN,[_PV]),((na)=>{return (()=>{AL.da(na, `30px serif`);AL.db(na, `Hello world (default: 0px)`, 10, 40);AL.db(AL.nb(na, 10), `Hello world (10px)`, 10, 90);AL.db(AL.nb(na, 20), `Hello world (20px)`, 10, 140);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return nc()})();return _h("canvas", {"width":`700`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setFont("30px serif")

          // Default letter spacing
          el
          |> Canvas.fillText("Hello world (default: 0px)", 10, 40)

          // Custom letter spacing: 10px
          el
          |> Canvas.setLetterSpacing(10)
          |> Canvas.fillText("Hello world (10px)", 10, 90)

          // Custom letter spacing: 20px
          el
          |> Canvas.setLetterSpacing(20)
          |> Canvas.fillText("Hello world (20px)", 10, 140)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas width="700"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [nd]),_h(AF, {m:ne})])}};;class DK extends _C{get nf(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [nn,no] = [(()=>{const nm=(()=>{return _match(AK.s(this.nf),[[_PE(AN,[_PV]),((nl)=>{return (()=>{const ng=[50, 20];const nh=[230, 30];const ni=[150, 80];const nj=[250, 100];AL.am(AL.nk(AL.ao(AL.ap(nl), ng[0], ng[1]), nh[0], nh[1], ni[0], ni[1], nj[0], nj[1]));AL.ay(AL.az(AL.az(AL.ap(AL.ah(nl, new AM(`blue`))), ng[0], ng[1], 5, 0, 2 * (Math.PI)), nj[0], nj[1], 5, 0, 2 * (Math.PI)));AL.ay(AL.az(AL.az(AL.ap(AL.ah(nl, new AM(`red`))), nh[0], nh[1], 5, 0, 2 * (Math.PI)), ni[0], ni[1], 5, 0, 2 * (Math.PI)));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return nm()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          let start =
            {50, 20}

          let cp1 =
            {230, 30}

          let cp2 =
            {150, 80}

          let end =
            {250, 100}

          el
          |> Canvas.beginPath
          |> Canvas.moveTo(start[0], start[1])
          |> Canvas.bezierCurveTo(cp1[0], cp1[1], cp2[0], cp2[1], end[0], end[1])
          |> Canvas.stroke

          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
          |> Canvas.beginPath
          |> Canvas.arc(start[0], start[1], 5, 0, 2 * \`Math.PI\`)
          |> Canvas.arc(end[0], end[1], 5, 0, 2 * \`Math.PI\`)
          |> Canvas.fill

          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
          |> Canvas.beginPath
          |> Canvas.arc(cp1[0], cp1[1], 5, 0, 2 * \`Math.PI\`)
          |> Canvas.arc(cp2[0], cp2[1], 5, 0, 2 * \`Math.PI\`)
          |> Canvas.fill

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [nn]),_h(AF, {m:no})])}};;class DL extends _C{get np(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [ns,nt] = [(()=>{const nr=(()=>{return _match(AK.s(this.np),[[_PE(AN,[_PV]),((nq)=>{return (()=>{AL.db(AL.da(nq, `50px serif`), `Hello world`, 50, 90);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return nr()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setFont("50px serif")
          |> Canvas.fillText("Hello world", 50, 90)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ns]),_h(AF, {m:nt})])}};;class DM extends _C{get nu(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [ny,nz] = [(()=>{const nx=(()=>{return _match(AK.s(this.nu),[[_PE(AN,[_PV]),((nv)=>{return (()=>{AL.bk(nv, [4, 16]);AL.am(AL.an(AL.ao(AL.ap(nv), 0, 50), 300, 50));AL.am(AL.an(AL.ao(AL.nw(AL.v(AL.ap(nv), new AM(`red`)), 4), 0, 100), 300, 100));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return nx()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setLineDash([4, 16])

          // Dashed line with no offset
          el
          |> Canvas.beginPath()
          |> Canvas.moveTo(0, 50)
          |> Canvas.lineTo(300, 50)
          |> Canvas.stroke()

          // Dashed line with offset of 4
          el
          |> Canvas.beginPath()
          |> Canvas.setStrokeStyle(CanvasFillStyle::String("red"))
          |> Canvas.setLineDashOffset(4)
          |> Canvas.moveTo(0, 100)
          |> Canvas.lineTo(300, 100)
          |> Canvas.stroke()

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ny]),_h(AF, {m:nz})])}};;class DN extends _C{get oa(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [od,oe] = [(()=>{const oc=(()=>{return _match(AK.s(this.oa),[[_PE(AN,[_PV]),((ob)=>{return (()=>{AL.am(AL.gv(ob, 10, 10, 150, 100));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return oc()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.rect(10, 10, 150, 100)
          |> Canvas.stroke()

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [od]),_h(AF, {m:oe})])}};;class DO extends _C{get of(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [oi,oj] = [(()=>{const oh=(()=>{return _match(AK.s(this.of),[[_PE(AN,[_PV]),((og)=>{return (()=>{AL.am(AL.gv(AL.an(AL.ao(AL.ap(AL.ax(og, 15)), 20, 20), 130, 130), 40, 40, 70, 70));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return oh()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setLineWidth(15)
          |> Canvas.beginPath
          |> Canvas.moveTo(20, 20)
          |> Canvas.lineTo(130, 130)
          |> Canvas.rect(40, 40, 70, 70)
          |> Canvas.stroke

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [oi]),_h(AF, {m:oj})])}};;class DP extends _C{get ok(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [on,oo] = [(()=>{const om=(()=>{return _match(AK.s(this.ok),[[_PE(AN,[_PV]),((ol)=>{return (()=>{AL.am(AL.az(AL.ap(ol), 150, 75, 50, 0, 2 * (Math.PI)));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return om()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.beginPath
          |> Canvas.arc(150, 75, 50, 0, 2 * \`Math.PI\`)
          |> Canvas.stroke

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [on]),_h(AF, {m:oo})])}};;class DQ extends _C{get op(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [ot,ou] = [(()=>{const os=(()=>{return _match(AK.s(this.op),[[_PE(AN,[_PV]),((oq)=>{return (()=>{AL.ay(AL.ah(AL.az(oq, 0, 0, 5, 0, 2 * (Math.PI)), new AM(`blue`)));AL.ag(AL.ah(oq, new AM(`gray`)), 100, 0, 80, 20);AL.ag(AL.ah(AL.or(oq, (45 * (Math.PI)) / 180), new AM(`red`)), 100, 0, 80, 20);AL.cc(oq, 1, 0, 0, 1, 0, 0);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return os()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Point of transform origin
          el
          |> Canvas.arc(0, 0, 5, 0, 2 * \`Math.PI\`)
          |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
          |> Canvas.fill()

          // Non-rotated rectangle
          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("gray"))
          |> Canvas.fillRect(100, 0, 80, 20)

          // Rotated rectangle
          el
          |> Canvas.rotate((45 * \`Math.PI\`) / 180)
          |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
          |> Canvas.fillRect(100, 0, 80, 20)

          // Reset transformation matrix to the identity matrix
          el
          |> Canvas.setTransform(1, 0, 0, 1, 0, 0)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ot]),_h(AF, {m:ou})])}};;class DR extends _C{get ow(){return (this._image ? new AN(this._image) : new AO);}get ov(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [pd,pe] = [(()=>{const pc=(()=>{return _match(AK.s(this.ov),[[_PE(AN,[_PV]),((pa)=>{return _match(this.ow,[[_PE(AN,[_PV]),((ox)=>{return (()=>{const oy=BP.er(ox);BP.hf(ox, `display`, `none`);const oz=CH.hc(ox);AL.dc(AL.da(pa, `16px sans-serif`), new BD());AL.hg(AL.db(pa, `Source`, oy.width * 0.5, 20), oz, 0, 24, oy.width, oy.height);AL.hg(AL.pb(AL.db(pa, `Smoothing = TRUE`, oy.width * 2.5, 20), true), oz, oy.width, 24, oy.width * 3, oy.height * 3);AL.hg(AL.pb(AL.db(pa, `Smoothing = FALSE`, oy.width * 5.5, 20), false), oz, oy.width * 4, 24, oy.width * 3, oy.height * 3);return ``})()})],[null,(()=>{return ``})]])})],[null,(()=>{return ``})]])});return _h(React.Fragment, {}, [_h("img", {"src":`/assets/star_aca6451fdeb0e4bf346a1ba9744ea7bb.png`,"onLoad":(event => (pc)(_normalizeEvent(event))),ref:(element) => { this._image = element }}),_h("canvas", {"width":`460`,"height":`210`,ref:(element) => { this._canvas = element }})])})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        case image {
          Maybe::Just(img) =>
            {
              let dims =
                Dom.getDimensions(img)

              Dom.setStyle(img, "display", "none")

              let imageData =
                CanvasImageSource.fromImage(img)

              el
              |> Canvas.setFont("16px sans-serif")
              |> Canvas.setTextAlign(CanvasTextAlign::Center)

              el
              |> Canvas.fillText("Source", dims.width * 0.5, 20)
              |> Canvas.drawImage(imageData, 0, 24, dims.width, dims.height)

              el
              |> Canvas.fillText("Smoothing = TRUE", dims.width * 2.5, 20)
              |> Canvas.setImageSmoothingEnabled(true)
              |> Canvas.drawImage(imageData, dims.width, 24, dims.width * 3, dims.height * 3)

              el
              |> Canvas.fillText("Smoothing = FALSE", dims.width * 5.5, 20)
              |> Canvas.setImageSmoothingEnabled(false)
              |> Canvas.drawImage(imageData, dims.width * 4, 24, dims.width * 3, dims.height * 3)

              ""
            }

          =>
            ""
        }

      =>
        ""
    }
  }

<>
  <img as image
    src={@asset(../../assets/star.png)}
    onLoad={draw}/>

  <canvas as canvas
    width="460"
    height="210"/>
</>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [pd]),_h(AF, {m:pe})])}};;class DS extends _C{get pf(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [pi,pj] = [(()=>{const ph=(()=>{return _match(AK.s(this.pf),[[_PE(AN,[_PV]),((pg)=>{return (()=>{AL.u(AL.v(pg, new AM(`blue`)), 10, 10, 100, 100);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return ph()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setStrokeStyle(CanvasFillStyle::String("blue"))
          |> Canvas.strokeRect(10, 10, 100, 100)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [pi]),_h(AF, {m:pj})])}};;class DT extends _C{get pk(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [po,pp] = [(()=>{const pn=(()=>{return _match(AK.s(this.pk),[[_PE(AN,[_PV]),((pm)=>{return (()=>{AL.am(AL.pl(AL.ap(AL.v(pm, new AM(`red`))), 10, 20, 150, 100, [0]));AL.am(AL.pl(AL.ap(AL.v(pm, new AM(`blue`))), 10, 20, 150, 100, [40]));AL.am(AL.pl(AL.ap(AL.v(pm, new AM(`orange`))), 10, 150, 150, 100, [10, 40]));AL.am(AL.pl(AL.ap(AL.v(pm, new AM(`green`))), 400, 20, 200, 100, [0, 30, 50, 60]));AL.am(AL.pl(AL.ap(AL.v(pm, new AM(`magenta`))), 400, 150, -200, 100, [0, 30, 50, 60]));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return pn()})();return _h("canvas", {"width":`700`,"height":`300`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Rounded rectangle with zero radius (specified as a number)
          el
          |> Canvas.setStrokeStyle(CanvasFillStyle::String("red"))
          |> Canvas.beginPath
          |> Canvas.roundRect(10, 20, 150, 100, [0])
          |> Canvas.stroke

          // Rounded rectangle with 40px radius (single element list)
          el
          |> Canvas.setStrokeStyle(CanvasFillStyle::String("blue"))
          |> Canvas.beginPath
          |> Canvas.roundRect(10, 20, 150, 100, [40])
          |> Canvas.stroke

          // Rounded rectangle with 2 different radii
          el
          |> Canvas.setStrokeStyle(CanvasFillStyle::String("orange"))
          |> Canvas.beginPath
          |> Canvas.roundRect(10, 150, 150, 100, [10, 40])
          |> Canvas.stroke

          // Rounded rectangle with four different radii
          el
          |> Canvas.setStrokeStyle(CanvasFillStyle::String("green"))
          |> Canvas.beginPath
          |> Canvas.roundRect(400, 20, 200, 100, [0, 30, 50, 60])
          |> Canvas.stroke

          // Same rectangle drawn backwards
          el
          |> Canvas.setStrokeStyle(CanvasFillStyle::String("magenta"))
          |> Canvas.beginPath
          |> Canvas.roundRect(400, 150, -200, 100, [0, 30, 50, 60])
          |> Canvas.stroke

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas
  width="700"
  height="300"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [po]),_h(AF, {m:pp})])}};;class DU extends _C{get pq(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [pt,pu] = [(()=>{const ps=(()=>{return _match(AK.s(this.pq),[[_PE(AN,[_PV]),((pr)=>{return (()=>{AL.ag(AL.ah(AL.kn(pr), new AM(`green`)), 10, 10, 100, 100);AL.ag(AL.kp(pr), 150, 40, 100, 100);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return ps()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Save the current state
          el
          |> Canvas.save()
          |> Canvas.setFillStyle(CanvasFillStyle::String("green"))
          |> Canvas.fillRect(10, 10, 100, 100)

          // Restore to the state saved by the most recent call to save()
          el
          |> Canvas.restore()
          |> Canvas.fillRect(150, 40, 100, 100)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [pt]),_h(AF, {m:pu})])}};;class DV extends _C{get pv(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [pz,qa] = [(()=>{const py=(()=>{return _match(AK.s(this.pv),[[_PE(AN,[_PV]),((px)=>{return (()=>{AL.db(AL.pw(AL.db(AL.da(px, `48px serif`), `Hi!`, 150, 50), new DW()), `Hi!`, 150, 130);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return py()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setFont("48px serif")
          |> Canvas.fillText("Hi!", 150, 50)
          |> Canvas.setDirection(CanvasDirection::RTL)
          |> Canvas.fillText("Hi!", 150, 130)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [pz]),_h(AF, {m:qa})])}};;class DX extends _C{get qb(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [qg,qh] = [(()=>{const qf=(()=>{return _match(AK.s(this.qb),[[_PE(AN,[_PV]),((qd)=>{return (()=>{const qe=CD.gn(CD.gn(CD.gn(AL.qc(qd, 20, 0, 220, 0), 0, `green`), 0.5, `cyan`), 1, `green`);AL.ag(AL.ah(qd, new CE(qe)), 20, 20, 200, 200);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return qf()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          // Add five color stops
          let gradient =
            Canvas.createLinearGradient(el, 20, 0, 220, 0)
            |> CanvasGradient.addColorStop(0, "green")
            |> CanvasGradient.addColorStop(0.5, "cyan")
            |> CanvasGradient.addColorStop(1, "green")

          // Set the fill style and draw a rectangle
          el
          |> Canvas.setFillStyle(CanvasFillStyle::Gradient(gradient))
          |> Canvas.fillRect(20, 20, 200, 200)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [qg]),_h(AF, {m:qh})])}};;class DY extends _C{get qi(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [ql,qm] = [(()=>{const qk=(()=>{return _match(AK.s(this.qi),[[_PE(AN,[_PV]),((qj)=>{return (()=>{AL.ay(AL.gv(qj, 10, 20, 150, 100));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return qk()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.rect(10, 20, 150, 100)
          |> Canvas.fill

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ql]),_h(AF, {m:qm})])}};;class DZ extends _C{get qn(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [qr,qs] = [(()=>{const qq=(()=>{return _match(AK.s(this.qn),[[_PE(AN,[_PV]),((qp)=>{return (()=>{AL.qo(qp, new EA());AL.ag(AL.ah(qp, new AM(`blue`)), 10, 10, 100, 100);AL.ag(AL.ah(qp, new AM(`red`)), 50, 50, 100, 100);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return qq()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.setGlobalCompositeOperation(CanvasGlobalCompositeOperation::Xor)

          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
          |> Canvas.fillRect(10, 10, 100, 100)

          el
          |> Canvas.setFillStyle(CanvasFillStyle::String("red"))
          |> Canvas.fillRect(50, 50, 100, 100)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [qr]),_h(AF, {m:qs})])}};;class EB extends _C{get qt(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [qx,qy] = [(()=>{const qw=(()=>{return _match(AK.s(this.qt),[[_PE(AN,[_PV]),((qu)=>{return (()=>{const qv=BP.er(AK.es(qu));AL.ag(AL.ah(AL.ap(qu), new AM(`#ff6`)), 0, 0, qv.width, qv.height);AL.ay(AL.dz(AL.an(AL.an(AL.ao(AL.ah(AL.ap(qu), new AM(`blue`)), 20, 20), 180, 20), 130, 130)));AL.ki(qu, 10, 10, 120, 100);return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return qw()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          let dims =
            el
            |> Dom.Canvas.toDomElement
            |> Dom.getDimensions

          // Draw yellow background
          el
          |> Canvas.beginPath
          |> Canvas.setFillStyle(CanvasFillStyle::String("#ff6"))
          |> Canvas.fillRect(0, 0, dims.width, dims.height)

          // Draw blue triangle
          el
          |> Canvas.beginPath
          |> Canvas.setFillStyle(CanvasFillStyle::String("blue"))
          |> Canvas.moveTo(20, 20)
          |> Canvas.lineTo(180, 20)
          |> Canvas.lineTo(130, 130)
          |> Canvas.closePath
          |> Canvas.fill

          // Clear part of the canvas
          el
          |> Canvas.clearRect(10, 10, 120, 100)

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [qx]),_h(AF, {m:qy})])}};;class EC extends _C{get qz(){return (this._canvas ? new AN(this._canvas) : new AO);}render(){const [rc,rd] = [(()=>{const rb=(()=>{return _match(AK.s(this.qz),[[_PE(AN,[_PV]),((ra)=>{return (()=>{AL.am(AL.an(AL.ao(AL.an(AL.ao(AL.ap(ra), 50, 50), 200, 50), 50, 90), 280, 120));return ``})()})],[_PE(AO,[]),(()=>{return ``})]])});(async()=>{await AP.y(0);return rb()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case Dom.Canvas.fromDomElement(canvas) {
      Maybe::Just(el) =>
        {
          el
          |> Canvas.beginPath()
          |> Canvas.moveTo(50, 50)
          |> Canvas.lineTo(200, 50)
          |> Canvas.moveTo(50, 90)
          |> Canvas.lineTo(280, 120)
          |> Canvas.stroke()

          ""
        }

      Maybe::Nothing =>
        ""
    }
  }

{
  await Timer.timeout(0)
  draw()
}

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [rc]),_h(AF, {m:rd})])}};;class A extends _C{constructor(props){super(props);this._d({},{rj:(()=>{return EF.rr([[`setDirection`, (()=>{return $a()})], [`setFillStyle`, (()=>{return $b()})], [`setFilter`, (()=>{return $c()})], [`setFont`, (()=>{return $d()})], [`setFontKerning`, (()=>{return $e()})], [`setGlobalAlpha`, (()=>{return $f()})], [`setGlobalCompositeOperation`, (()=>{return $g()})], [`setImageSmoothingEnabled`, (()=>{return $h()})], [`setImageSmoothingQuality`, (()=>{return $i()})], [`setLetterSpacing`, (()=>{return $j()})], [`setLineCap`, (()=>{return $k()})], [`setLineDashOffset`, (()=>{return $l()})], [`setLineJoin`, (()=>{return $m()})], [`setLineWidth`, (()=>{return $n()})], [`setMiterLimit`, (()=>{return $o()})], [`setShadowBlur`, (()=>{return $p()})], [`setShadowColor`, (()=>{return $q()})], [`setShadowOffsetX`, (()=>{return $r()})], [`setShadowOffsetY`, (()=>{return $s()})], [`setStrokeStyle`, (()=>{return $t()})], [`setTextAlign`, (()=>{return $u()})], [`setTextBaseline`, (()=>{return $v()})], [`setWordSpacing`, (()=>{return $w()})]])}),rl:(()=>{return EF.rr([[`arc`, (()=>{return $x()})], [`arcTo`, (()=>{return $y()})], [`beginPath`, (()=>{return $z()})], [`bezierCurveTo`, (()=>{return $aa()})], [`clearRect`, (()=>{return $ab()})], [`clip`, (()=>{return $ac()})], [`clipPath`, (()=>{return $ad()})], [`closePath`, (()=>{return $ae()})], [`createConicGradient`, (()=>{return $af()})], [`createImageData`, (()=>{return $ag()})], [`createLinearGradient`, (()=>{return $ah()})], [`createPattern`, (()=>{return $ai()})], [`createRadialGradient`, (()=>{return $aj()})], [`drawImage`, (()=>{return $ak()})], [`ellipse`, (()=>{return $al()})], [`fill`, (()=>{return $am()})], [`fillPath`, (()=>{return $an()})], [`fillRect`, (()=>{return $ao()})], [`fillText`, (()=>{return $ap()})], [`isPointInPath`, (()=>{return $aq()})], [`isPointInStroke`, (()=>{return $ar()})], [`lineTo`, (()=>{return $as()})], [`measureText`, (()=>{return $at()})], [`moveTo`, (()=>{return $au()})], [`putImageData`, (()=>{return $x()})], [`quadraticCurveTo`, (()=>{return $av()})], [`rect`, (()=>{return $aw()})], [`reset`, (()=>{return $ax()})], [`resetTransform`, (()=>{return $ay()})], [`restore`, (()=>{return $az()})], [`rotate`, (()=>{return $ba()})], [`roundRect`, (()=>{return $bb()})], [`save`, (()=>{return $bc()})], [`scale`, (()=>{return $bd()})], [`setLineDash`, (()=>{return $be()})], [`setTransform`, (()=>{return $bf()})], [`stroke`, (()=>{return $bg()})], [`strokeRect`, (()=>{return $bh()})], [`strokeText`, (()=>{return $bi()})], [`transform`, (()=>{return $bj()})], [`translate`, (()=>{return $bk()})]])})})}get rn(){return ED.rs;}componentWillUnmount(){ED._unsubscribe(this)}componentDidMount(){ED._subscribe(this)}re(rf){return (EE.rg(rf) ? `active` : ``)}render(){return _h("article", {}, [_h("div", {className:`page`}, [_h("div", {className:`guide guide--wide`}, [_h("div", {className:`toc`}, [_h("div", {className:`toc__wrapper`}, [_h("div", {className:`page__package`}, [_h("strong", {}, [`mint-canvas`]),_h("p", {})]),_h("div", {className:`toc__section`}, [`Config Functions`]),_h("div", {"id":`sidebar`,className:`toc__pages`}, [_h("div", {className:`sidebar`}, [_h("div", {}, [(()=>{const _0 = [];const _1 = EF.ri(this.rj);let _i = -1;for(let rh of _1){_i++;_0.push(_h("div", {"data-id":`version-item`}, [_h("a", {"href":`/${rh[0]}`,className:this.re(rh[0])}, [rh[0]])]))};return _0})()])])]),_h("div", {className:`toc__section`}, [`Draw Functions`]),_h("div", {"id":`sidebar`,className:`toc__pages`}, [_h("div", {className:`sidebar`}, [_h("div", {}, [(()=>{const _0 = [];const _1 = EF.ri(this.rl);let _i = -1;for(let rk of _1){_i++;_0.push(_h("div", {"data-id":`version-item`}, [_h("a", {"href":`/${rk[0]}`,className:this.re(rk[0])}, [rk[0]])]))};return _0})()])])])])]),_h("div", {className:`guide-content`}, [_match(EF.rm(this.rj, this.rn),[[_PE(AN,[_PV]),((ro)=>{return ro()})],[null,(()=>{return EG.rp()})]]),_match(EF.rm(this.rl, this.rn),[[_PE(AN,[_PV]),((rq)=>{return rq()})],[null,(()=>{return EG.rp()})]])])])])])}};;const $a=_m(() => _h(DV, {}));const $b=_m(() => _h(BI, {}));const $c=_m(() => _h(BS, {}));const $d=_m(() => _h(BF, {}));const $e=_m(() => _h(BL, {}));const $f=_m(() => _h(AT, {}));const $g=_m(() => _h(DZ, {}));const $h=_m(() => _h(DR, {}));const $i=_m(() => _h(CG, {}));const $j=_m(() => _h(DJ, {}));const $k=_m(() => _h(BG, {}));const $l=_m(() => _h(DM, {}));const $m=_m(() => _h(DE, {}));const $n=_m(() => _h(DO, {}));const $o=_m(() => _h(DA, {}));const $p=_m(() => _h(BA, {}));const $q=_m(() => _h(CR, {}));const $r=_m(() => _h(AQ, {}));const $s=_m(() => _h(BK, {}));const $t=_m(() => _h(DS, {}));const $u=_m(() => _h(BB, {}));const $v=_m(() => _h(BU, {}));const $w=_m(() => _h(CM, {}));const $x=_m(() => _h(DP, {}));const $y=_m(() => _h(AS, {}));const $z=_m(() => _h(DH, {}));const $aa=_m(() => _h(DK, {}));const $ab=_m(() => _h(EB, {}));const $ac=_m(() => _h(CQ, {}));const $ad=_m(() => _h(BO, {}));const $ae=_m(() => _h(BJ, {}));const $af=_m(() => _h(CC, {}));const $ag=_m(() => _h(AV, {}));const $ah=_m(() => _h(DX, {}));const $ai=_m(() => _h(CJ, {}));const $aj=_m(() => _h(DC, {}));const $ak=_m(() => _h(CP, {}));const $al=_m(() => _h(AY, {}));const $am=_m(() => _h(CF, {}));const $an=_m(() => _h(CB, {}));const $ao=_m(() => _h(AZ, {}));const $ap=_m(() => _h(DL, {}));const $aq=_m(() => _h(CU, {}));const $ar=_m(() => _h(CS, {}));const $as=_m(() => _h(AR, {}));const $at=_m(() => _h(CX, {}));const $au=_m(() => _h(EC, {}));const $av=_m(() => _h(CO, {}));const $aw=_m(() => _h(DY, {}));const $ax=_m(() => _h(BT, {}));const $ay=_m(() => _h(CZ, {}));const $az=_m(() => _h(CW, {}));const $ba=_m(() => _h(DQ, {}));const $bb=_m(() => _h(DT, {}));const $bc=_m(() => _h(DU, {}));const $bd=_m(() => _h(DG, {}));const $be=_m(() => _h(AU, {}));const $bf=_m(() => _h(AX, {}));const $bg=_m(() => _h(DN, {}));const $bh=_m(() => _h(AJ, {}));const $bi=_m(() => _h(DD, {}));const $bj=_m(() => _h(CN, {}));const $bk=_m(() => _h(DI, {}));const ED=new(class extends _S{constructor(){super();this.state={rs:`setDirection`}}get rs(){return this.state.rs;}adv(adw){return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({rs:adw})), _resolve)
}))}});_insertStyles(`
.a {
  box-shadow: 0 0 0.625em var(--shadow-color);
  background: var(--content-color);
  color: var(--content--text);
  border-radius: 0.5em;
  display: grid;
}

.b {
  counter-increment: line-number;
  background: var(--b-a);
  line-height: var(--b-b);
  opacity: var(--b-c);
}

.b::before {
  content: counter(line-number);
  width: var(--a-a);
  border-right: 2px solid;
  display: inline-block;
  padding-right: 10px;
  margin-right: 15px;
  text-align: right;
  color: #999;
  border-right-color: var(--a-b);
}

.c {
  counter-reset: line-number;
  font-family: monospace;
  line-height: 150%;
  overflow: auto;
  padding: 1em;
  color: #999;
  margin: 0;
  --unhighlighted-opacity: var(--c-a);
  --highlighted-background: var(--c-b);
}

.c .hljs-doctag {
  color: #bc35e3;
}

.c .hljs-keyword {
  color: #bc35e3;
}

.c .hljs-formula {
  color: #bc35e3;
}

.c .hljs-attr {
  color: #1D8FE8;
}

.c .hljs-variable {
  color: #1D8FE8;
}

.c .hljs-template-variable {
  color: #1D8FE8;
}

.c .hljs-type {
  color: #1D8FE8;
}

.c .hljs-selector-class {
  color: #1D8FE8;
}

.c .hljs-selector-attr {
  color: #1D8FE8;
}

.c .hljs-selector-pseudo {
  color: #1D8FE8;
}

.c .hljs-number {
  color: #1D8FE8;
}

.c .hljs-string {
  color: #26AE3D;
}

.c .hljs-regexp {
  color: #26AE3D;
}

.c .hljs-addition {
  color: #26AE3D;
}

.c .hljs-attribute {
  color: #26AE3D;
}

.c .hljs-meta-string {
  color: #26AE3D;
}

.c .hljs-section {
  font-weight: bold;
  color: #D5841C;
}

.c .hljs-name {
  font-weight: bold;
  color: #D5841C;
}

.c .hljs-selector-tag {
  font-weight: bold;
  color: #D5841C;
}

.c .hljs-deletion {
  font-weight: bold;
  color: #D5841C;
}

.c .hljs-subst {
  font-weight: bold;
  color: #D5841C;
}
`)

  const Nothing = AO
  const Just = AN
  const Err = FH
  const Ok = FI

  _enums.nothing = AO
  _enums.just = AN
  _enums.err = FH
  _enums.ok = FI

  
  
_program.render(A, {})
})()