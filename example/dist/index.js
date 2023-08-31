var Mint=function(){"use strict";var t,e,n,r,o,i,a={},s=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(t,e){for(var n in e)t[n]=e[n];return t}function l(t){var e=t.parentNode;e&&e.removeChild(t)}function h(t,e,n){var r,o=arguments,i={};for(r in e)"key"!==r&&"ref"!==r&&(i[r]=e[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof t&&null!=t.defaultProps)for(r in t.defaultProps)void 0===i[r]&&(i[r]=t.defaultProps[r]);return f(t,i,e&&e.key,e&&e.ref,null)}function f(e,n,r,o,i){var a={type:e,props:n,key:r,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:i};return null==i&&(a.__v=a),t.vnode&&t.vnode(a),a}function d(t){return t.children}function p(t,e){this.props=t,this.context=e}function m(t,e){if(null==e)return t.__?m(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?m(t):null}function y(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return y(t)}}function _(i){(!i.__d&&(i.__d=!0)&&e.push(i)&&!n++||o!==t.debounceRendering)&&((o=t.debounceRendering)||r)(g)}function g(){for(var t;n=e.length;)t=e.sort((function(t,e){return t.__v.__b-e.__v.__b})),e=[],t.some((function(t){var e,n,r,o,i,a,s;t.__d&&(a=(i=(e=t).__v).__e,(s=e.__P)&&(n=[],(r=c({},i)).__v=r,o=S(s,i,r,e.__n,void 0!==s.ownerSVGElement,null,n,null==a?m(i):a),T(n,i),o!=a&&y(i)))}))}function v(t,e,n,r,o,i,u,c,h,p){var y,_,g,v,w,b,k,x,T,E=r&&r.__k||s,D=E.length;for(h==a&&(h=null!=u?u[0]:D?m(r,0):null),n.__k=[],y=0;y<e.length;y++)if(null!=(v=n.__k[y]=null==(v=e[y])||"boolean"==typeof v?null:"string"==typeof v||"number"==typeof v?f(null,v,null,null,v):Array.isArray(v)?f(d,{children:v},null,null,null):null!=v.__e||null!=v.__c?f(v.type,v.props,v.key,null,v.__v):v)){if(v.__=n,v.__b=n.__b+1,null===(g=E[y])||g&&v.key==g.key&&v.type===g.type)E[y]=void 0;else for(_=0;_<D;_++){if((g=E[_])&&v.key==g.key&&v.type===g.type){E[_]=void 0;break}g=null}if(w=S(t,v,g=g||a,o,i,u,c,h,p),(_=v.ref)&&g.ref!=_&&(x||(x=[]),g.ref&&x.push(g.ref,null,v),x.push(_,v.__c||w,v)),null!=w){if(null==k&&(k=w),T=void 0,void 0!==v.__d)T=v.__d,v.__d=void 0;else if(u==g||w!=h||null==w.parentNode){t:if(null==h||h.parentNode!==t)t.appendChild(w),T=null;else{for(b=h,_=0;(b=b.nextSibling)&&_<D;_+=2)if(b==w)break t;t.insertBefore(w,h),T=h}"option"==n.type&&(t.value="")}h=void 0!==T?T:w.nextSibling,"function"==typeof n.type&&(n.__d=h)}else h&&g.__e==h&&h.parentNode!=t&&(h=m(g))}if(n.__e=k,null!=u&&"function"!=typeof n.type)for(y=u.length;y--;)null!=u[y]&&l(u[y]);for(y=D;y--;)null!=E[y]&&P(E[y],E[y]);if(x)for(y=0;y<x.length;y++)C(x[y],x[++y],x[++y])}function w(t){return null==t||"boolean"==typeof t?[]:Array.isArray(t)?s.concat.apply([],t.map(w)):[t]}function b(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]="number"==typeof n&&!1===u.test(e)?n+"px":null==n?"":n}function k(t,e,n,r,o){var i,a,s,u,c;if(o?"className"===e&&(e="class"):"class"===e&&(e="className"),"style"===e)if(i=t.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(u in r)n&&u in n||b(i,u,"");if(n)for(c in n)r&&n[c]===r[c]||b(i,c,n[c])}else"o"===e[0]&&"n"===e[1]?(a=e!==(e=e.replace(/Capture$/,"")),s=e.toLowerCase(),e=(s in t?s:e).slice(2),n?(r||t.addEventListener(e,x,a),(t.l||(t.l={}))[e]=n):t.removeEventListener(e,x,a)):"list"!==e&&"tagName"!==e&&"form"!==e&&"type"!==e&&"size"!==e&&!o&&e in t?t[e]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==e&&(e!==(e=e.replace(/^xlink:?/,""))?null==n||!1===n?t.removeAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase()):t.setAttributeNS("http://www.w3.org/1999/xlink",e.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(e)?t.removeAttribute(e):t.setAttribute(e,n))}function x(e){this.l[e.type](t.event?t.event(e):e)}function S(e,n,r,o,i,u,l,h,f){var m,y,_,g,w,b,x,S,T,C,P,D=n.type;if(void 0!==n.constructor)return null;(m=t.__b)&&m(n);try{t:if("function"==typeof D){if(S=n.props,T=(m=D.contextType)&&o[m.__c],C=m?T?T.props.value:m.__:o,r.__c?x=(y=n.__c=r.__c).__=y.__E:("prototype"in D&&D.prototype.render?n.__c=y=new D(S,C):(n.__c=y=new p(S,C),y.constructor=D,y.render=E),T&&T.sub(y),y.props=S,y.state||(y.state={}),y.context=C,y.__n=o,_=y.__d=!0,y.__h=[]),null==y.__s&&(y.__s=y.state),null!=D.getDerivedStateFromProps&&(y.__s==y.state&&(y.__s=c({},y.__s)),c(y.__s,D.getDerivedStateFromProps(S,y.__s))),g=y.props,w=y.state,_)null==D.getDerivedStateFromProps&&null!=y.componentWillMount&&y.componentWillMount(),null!=y.componentDidMount&&y.__h.push(y.componentDidMount);else{if(null==D.getDerivedStateFromProps&&S!==g&&null!=y.componentWillReceiveProps&&y.componentWillReceiveProps(S,C),!y.__e&&null!=y.shouldComponentUpdate&&!1===y.shouldComponentUpdate(S,y.__s,C)||n.__v===r.__v){for(y.props=S,y.state=y.__s,n.__v!==r.__v&&(y.__d=!1),y.__v=n,n.__e=r.__e,n.__k=r.__k,y.__h.length&&l.push(y),m=0;m<n.__k.length;m++)n.__k[m]&&(n.__k[m].__=n);break t}null!=y.componentWillUpdate&&y.componentWillUpdate(S,y.__s,C),null!=y.componentDidUpdate&&y.__h.push((function(){y.componentDidUpdate(g,w,b)}))}y.context=C,y.props=S,y.state=y.__s,(m=t.__r)&&m(n),y.__d=!1,y.__v=n,y.__P=e,m=y.render(y.props,y.state,y.context),null!=y.getChildContext&&(o=c(c({},o),y.getChildContext())),_||null==y.getSnapshotBeforeUpdate||(b=y.getSnapshotBeforeUpdate(g,w)),P=null!=m&&m.type==d&&null==m.key?m.props.children:m,v(e,Array.isArray(P)?P:[P],n,r,o,i,u,l,h,f),y.base=n.__e,y.__h.length&&l.push(y),x&&(y.__E=y.__=null),y.__e=!1}else null==u&&n.__v===r.__v?(n.__k=r.__k,n.__e=r.__e):n.__e=function(t,e,n,r,o,i,u,c){var l,h,f,d,p,m=n.props,y=e.props;if(o="svg"===e.type||o,null!=i)for(l=0;l<i.length;l++)if(null!=(h=i[l])&&((null===e.type?3===h.nodeType:h.localName===e.type)||t==h)){t=h,i[l]=null;break}if(null==t){if(null===e.type)return document.createTextNode(y);t=o?document.createElementNS("http://www.w3.org/2000/svg",e.type):document.createElement(e.type,y.is&&{is:y.is}),i=null,c=!1}if(null===e.type)m!==y&&t.data!=y&&(t.data=y);else{if(null!=i&&(i=s.slice.call(t.childNodes)),f=(m=n.props||a).dangerouslySetInnerHTML,d=y.dangerouslySetInnerHTML,!c){if(null!=i)for(m={},p=0;p<t.attributes.length;p++)m[t.attributes[p].name]=t.attributes[p].value;(d||f)&&(d&&f&&d.__html==f.__html||(t.innerHTML=d&&d.__html||""))}(function(t,e,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in e||k(t,i,null,n[i],r);for(i in e)o&&"function"!=typeof e[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===e[i]||k(t,i,e[i],n[i],r)})(t,y,m,o,c),d?e.__k=[]:(l=e.props.children,v(t,Array.isArray(l)?l:[l],e,n,r,"foreignObject"!==e.type&&o,i,u,a,c)),c||("value"in y&&void 0!==(l=y.value)&&l!==t.value&&k(t,"value",l,m.value,!1),"checked"in y&&void 0!==(l=y.checked)&&l!==t.checked&&k(t,"checked",l,m.checked,!1))}return t}(r.__e,n,r,o,i,u,l,f);(m=t.diffed)&&m(n)}catch(e){n.__v=null,t.__e(e,n,r)}return n.__e}function T(e,n){t.__c&&t.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(t){t.call(n)}))}catch(e){t.__e(e,n.__v)}}))}function C(e,n,r){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,r)}}function P(e,n,r){var o,i,a;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||C(o,null,n)),r||"function"==typeof e.type||(r=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(a=0;a<o.length;a++)o[a]&&P(o[a],n,r);null!=i&&l(i)}function E(t,e,n){return this.constructor(t,n)}function D(e,n,r){var o,u,c;t.__&&t.__(e,n),u=(o=r===i)?null:r&&r.__k||n.__k,e=h(d,null,[e]),c=[],S(n,(o?n:r||n).__k=e,u||a,a,void 0!==n.ownerSVGElement,r&&!o?[r]:u?null:n.childNodes.length?s.slice.call(n.childNodes):null,c,r||a,o),T(c,e)}t={__e:function(t,e){for(var n,r;e=e.__;)if((n=e.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(t))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(t)),r)return _(n.__E=n)}catch(e){t=e}throw t}},p.prototype.setState=function(t,e){var n;n=this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof t&&(t=t(n,this.props)),t&&c(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),_(this))},p.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),_(this))},p.prototype.render=d,e=[],n=0,r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=a;var M,A=[],O=t.__r,N=t.diffed,U=t.__c,j=t.unmount;function W(){A.some((function(e){if(e.__P)try{e.__H.__h.forEach(L),e.__H.__h.forEach(R),e.__H.__h=[]}catch(n){return e.__H.__h=[],t.__e(n,e.__v),!0}})),A=[]}function L(t){"function"==typeof t.u&&t.u()}function R(t){t.u=t.__()}function Y(t,e){for(var n in t)if("__source"!==n&&!(n in e))return!0;for(var r in e)if("__source"!==r&&t[r]!==e[r])return!0;return!1}t.__r=function(t){O&&O(t);var e=t.__c.__H;e&&(e.__h.forEach(L),e.__h.forEach(R),e.__h=[])},t.diffed=function(e){N&&N(e);var n=e.__c;n&&n.__H&&n.__H.__h.length&&(1!==A.push(n)&&M===t.requestAnimationFrame||((M=t.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);"undefined"!=typeof window&&(e=requestAnimationFrame(n))})(W))},t.__c=function(e,n){n.some((function(e){try{e.__h.forEach(L),e.__h=e.__h.filter((function(t){return!t.__||R(t)}))}catch(r){n.some((function(t){t.__h&&(t.__h=[])})),n=[],t.__e(r,e.__v)}})),U&&U(e,n)},t.unmount=function(e){j&&j(e);var n=e.__c;if(n&&n.__H)try{n.__H.__.forEach(L)}catch(e){t.__e(e,n.__v)}},function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).isPureReactComponent=!0,n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,r.prototype.shouldComponentUpdate=function(t,e){return Y(this.props,t)||Y(this.state,e)}}(p);var F=t.__b;t.__b=function(t){t.type&&t.type.t&&t.ref&&(t.props.ref=t.ref,t.ref=null),F&&F(t)};var I=t.__e;function H(t){return t&&((t=function(t,e){for(var n in e)t[n]=e[n];return t}({},t)).__c=null,t.__k=t.__k&&t.__k.map(H)),t}function q(){this.__u=0,this.o=null,this.__b=null}function $(t){var e=t.__.__c;return e&&e.u&&e.u(t)}function z(){this.i=null,this.l=null}t.__e=function(t,e,n){if(t.then)for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return r.__c(t,e.__c);I(t,e,n)},(q.prototype=new p).__c=function(t,e){var n=this;null==n.o&&(n.o=[]),n.o.push(e);var r=$(n.__v),o=!1,i=function(){o||(o=!0,r?r(a):a())};e.__c=e.componentWillUnmount,e.componentWillUnmount=function(){i(),e.__c&&e.__c()};var a=function(){var t;if(!--n.__u)for(n.__v.__k[0]=n.state.u,n.setState({u:n.__b=null});t=n.o.pop();)t.forceUpdate()};n.__u++||n.setState({u:n.__b=n.__v.__k[0]}),t.then(i,i)},q.prototype.render=function(t,e){return this.__b&&(this.__v.__k[0]=H(this.__b),this.__b=null),[h(p,null,e.u?null:t.children),e.u&&t.fallback]};var B=function(t,e,n){if(++n[1]===n[0]&&t.l.delete(e),t.props.revealOrder&&("t"!==t.props.revealOrder[0]||!t.l.size))for(n=t.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;t.i=n=n[2]}};(z.prototype=new p).u=function(t){var e=this,n=$(e.__v),r=e.l.get(t);return r[0]++,function(o){var i=function(){e.props.revealOrder?(r.push(o),B(e,t,r)):o()};n?n(i):i()}},z.prototype.render=function(t){this.i=null,this.l=new Map;var e=w(t.children);t.revealOrder&&"b"===t.revealOrder[0]&&e.reverse();for(var n=e.length;n--;)this.l.set(e[n],this.i=[1,0,this.i]);return t.children},z.prototype.componentDidUpdate=z.prototype.componentDidMount=function(){var t=this;t.l.forEach((function(e,n){B(t,n,e)}))};var X=function(){function t(){}var e=t.prototype;return e.getChildContext=function(){return this.props.context},e.render=function(t){return t.children},t}();function G(t){var e=this,n=t.container,r=h(X,{context:e.context},t.vnode);return e.s&&e.s!==n&&(e.v.parentNode&&e.s.removeChild(e.v),P(e.h),e.p=!1),t.vnode?e.p?(n.__k=e.__k,D(r,n),e.__k=n.__k):(e.v=document.createTextNode(""),D("",n,i),n.appendChild(e.v),e.p=!0,e.s=n,D(r,n,e.v),e.__k=e.v.__k):e.p&&(e.v.parentNode&&e.s.removeChild(e.v),P(e.h)),e.h=r,e.componentWillUnmount=function(){e.v.parentNode&&e.s.removeChild(e.v),P(e.h)},null}function Q(t,e){return h(G,{vnode:t,container:e})}var J=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;p.prototype.isReactComponent={};var V="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,K=t.event;function Z(t,e){t["UNSAFE_"+e]&&!t[e]&&Object.defineProperty(t,e,{configurable:!1,get:function(){return this["UNSAFE_"+e]},set:function(t){this["UNSAFE_"+e]=t}})}t.event=function(t){K&&(t=K(t)),t.persist=function(){};var e=!1,n=!1,r=t.stopPropagation;t.stopPropagation=function(){r.call(t),e=!0};var o=t.preventDefault;return t.preventDefault=function(){o.call(t),n=!0},t.isPropagationStopped=function(){return e},t.isDefaultPrevented=function(){return n},t.nativeEvent=t};var tt={configurable:!0,get:function(){return this.class}},et=t.vnode;t.vnode=function(t){t.$$typeof=V;var e=t.type,n=t.props;if(e){if(n.class!=n.className&&(tt.enumerable="className"in n,null!=n.className&&(n.class=n.className),Object.defineProperty(n,"className",tt)),"function"!=typeof e){var r,o,i;for(i in n.defaultValue&&void 0!==n.value&&(n.value||0===n.value||(n.value=n.defaultValue),delete n.defaultValue),Array.isArray(n.value)&&n.multiple&&"select"===e&&(w(n.children).forEach((function(t){-1!=n.value.indexOf(t.props.value)&&(t.props.selected=!0)})),delete n.value),n)if(r=J.test(i))break;if(r)for(i in o=t.props={},n)o[J.test(i)?i.replace(/[A-Z0-9]/,"-$&").toLowerCase():i]=n[i]}!function(e){var n=t.type,r=t.props;if(r&&"string"==typeof n){var o={};for(var i in r)/^on(Ani|Tra|Tou)/.test(i)&&(r[i.toLowerCase()]=r[i],delete r[i]),o[i.toLowerCase()]=i;if(o.ondoubleclick&&(r.ondblclick=r[o.ondoubleclick],delete r[o.ondoubleclick]),o.onbeforeinput&&(r.onbeforeinput=r[o.onbeforeinput],delete r[o.onbeforeinput]),o.onchange&&("textarea"===n||"input"===n.toLowerCase()&&!/^fil|che|ra/i.test(r.type))){var a=o.oninput||"oninput";r[a]||(r[a]=r[o.onchange],delete r[o.onchange])}}}(),"function"==typeof e&&!e.m&&e.prototype&&(Z(e.prototype,"componentWillMount"),Z(e.prototype,"componentWillReceiveProps"),Z(e.prototype,"componentWillUpdate"),e.m=!0)}et&&et(t)};class nt extends HTMLElement{constructor(){super(),this.props={};for(const{original:t,name:e}of this.constructor.props)Object.defineProperty(this,t,{get(){return this.props[e]},set(t){this.props[e]=t,this._render()}})}connectedCallback(){this._render()}attributeChangedCallback(t,e,n){for(const{original:e,name:r}of this.constructor.props)e===t&&(this.props[r]=n,this._render())}disconnectedCallback(){D(null,this)}_render(){this.isConnected&&D(h(this.constructor.component,this.props),this)}}function rt(t,e,n){const r=class extends nt{};r.observedAttributes=n.map((t=>t.original)),r.component=t,r.props=n,customElements.define(e,r)}function ot(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function it(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function at(t){it(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"==typeof t&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function st(t,e){it(2,arguments);var n=at(t),r=ot(e);if(isNaN(r))return new Date(NaN);if(!r)return n;var o=n.getDate(),i=new Date(n.getTime());i.setMonth(n.getMonth()+r+1,0);var a=i.getDate();return o>=a?i:(n.setFullYear(i.getFullYear(),i.getMonth(),o),n)}function ut(t,e){it(2,arguments);var n=at(t).getTime(),r=ot(e);return new Date(n+r)}function ct(t,e){it(1,arguments);var n=e||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,i=null==o?0:ot(o),a=null==n.weekStartsOn?i:ot(n.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=at(t),u=s.getDay(),c=(u<a?7:0)+u-a;return s.setDate(s.getDate()-c),s.setHours(0,0,0,0),s}function lt(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function ht(t){it(1,arguments);var e=at(t);return e.setHours(0,0,0,0),e}function ft(t,e){it(2,arguments);var n=at(t),r=at(e),o=n.getTime()-r.getTime();return o<0?-1:o>0?1:o}function dt(t){return it(1,arguments),t instanceof Date||"object"==typeof t&&"[object Date]"===Object.prototype.toString.call(t)}function pt(t){if(it(1,arguments),!dt(t)&&"number"!=typeof t)return!1;var e=at(t);return!isNaN(Number(e))}function mt(t){it(1,arguments);var e=at(t);return e.setHours(23,59,59,999),e}function yt(t){it(1,arguments);var e=at(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function _t(t,e){it(1,arguments);var n=t||{},r=at(n.start),o=at(n.end),i=o.getTime();if(!(r.getTime()<=i))throw new RangeError("Invalid interval");var a=[],s=r;s.setHours(0,0,0,0);var u=e&&"step"in e?Number(e.step):1;if(u<1||isNaN(u))throw new RangeError("`options.step` must be a number greater than 1");for(;s.getTime()<=i;)a.push(at(s)),s.setDate(s.getDate()+u),s.setHours(0,0,0,0);return a}function gt(t){it(1,arguments);var e=at(t);return e.setDate(1),e.setHours(0,0,0,0),e}function vt(t,e){it(1,arguments);var n=e||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,i=null==o?0:ot(o),a=null==n.weekStartsOn?i:ot(n.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=at(t),u=s.getDay(),c=6+(u<a?-7:0)-(u-a);return s.setDate(s.getDate()+c),s.setHours(23,59,59,999),s}var wt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function bt(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,r=t.formats[n]||t.formats[t.defaultWidth];return r}}var kt={date:bt({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:bt({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:bt({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},xt={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function St(t){return function(e,n){var r,o=n||{};if("formatting"===(o.context?String(o.context):"standalone")&&t.formattingValues){var i=t.defaultFormattingWidth||t.defaultWidth,a=o.width?String(o.width):i;r=t.formattingValues[a]||t.formattingValues[i]}else{var s=t.defaultWidth,u=o.width?String(o.width):t.defaultWidth;r=t.values[u]||t.values[s]}return r[t.argumentCallback?t.argumentCallback(e):e]}}var Tt={ordinalNumber:function(t,e){var n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:St({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:St({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:St({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:St({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:St({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},Ct=Tt;function Pt(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,o=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],i=e.match(o);if(!i)return null;var a,s=i[0],u=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],c=Array.isArray(u)?Dt(u,(function(t){return t.test(s)})):Et(u,(function(t){return t.test(s)}));a=t.valueCallback?t.valueCallback(c):c,a=n.valueCallback?n.valueCallback(a):a;var l=e.slice(s.length);return{value:a,rest:l}}}function Et(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function Dt(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}var Mt,At={ordinalNumber:(Mt={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(Mt.matchPattern);if(!n)return null;var r=n[0],o=t.match(Mt.parsePattern);if(!o)return null;var i=Mt.valueCallback?Mt.valueCallback(o[0]):o[0];i=e.valueCallback?e.valueCallback(i):i;var a=t.slice(r.length);return{value:i,rest:a}}),era:Pt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:Pt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:Pt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:Pt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:Pt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},Ot={code:"en-US",formatDistance:function(t,e,n){var r,o=wt[t];return r="string"==typeof o?o:1===e?o.one:o.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r},formatLong:kt,formatRelative:function(t,e,n,r){return xt[t]},localize:Ct,match:At,options:{weekStartsOn:0,firstWeekContainsDate:1}};function Nt(t,e){it(2,arguments);var n=ot(e);return ut(t,-n)}function Ut(t,e){for(var n=t<0?"-":"",r=Math.abs(t).toString();r.length<e;)r="0"+r;return n+r}var jt=function(t,e){var n=t.getUTCFullYear(),r=n>0?n:1-n;return Ut("yy"===e?r%100:r,e.length)},Wt=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):Ut(n+1,2)},Lt=function(t,e){return Ut(t.getUTCDate(),e.length)},Rt=function(t,e){return Ut(t.getUTCHours()%12||12,e.length)},Yt=function(t,e){return Ut(t.getUTCHours(),e.length)},Ft=function(t,e){return Ut(t.getUTCMinutes(),e.length)},It=function(t,e){return Ut(t.getUTCSeconds(),e.length)},Ht=function(t,e){var n=e.length,r=t.getUTCMilliseconds();return Ut(Math.floor(r*Math.pow(10,n-3)),e.length)},qt=864e5;function $t(t){it(1,arguments);var e=1,n=at(t),r=n.getUTCDay(),o=(r<e?7:0)+r-e;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function zt(t){it(1,arguments);var e=at(t),n=e.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var o=$t(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var a=$t(i);return e.getTime()>=o.getTime()?n+1:e.getTime()>=a.getTime()?n:n-1}function Bt(t){it(1,arguments);var e=zt(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var r=$t(n);return r}var Xt=6048e5;function Gt(t,e){it(1,arguments);var n=e||{},r=n.locale,o=r&&r.options&&r.options.weekStartsOn,i=null==o?0:ot(o),a=null==n.weekStartsOn?i:ot(n.weekStartsOn);if(!(a>=0&&a<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=at(t),u=s.getUTCDay(),c=(u<a?7:0)+u-a;return s.setUTCDate(s.getUTCDate()-c),s.setUTCHours(0,0,0,0),s}function Qt(t,e){it(1,arguments);var n=at(t),r=n.getUTCFullYear(),o=e||{},i=o.locale,a=i&&i.options&&i.options.firstWeekContainsDate,s=null==a?1:ot(a),u=null==o.firstWeekContainsDate?s:ot(o.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=new Date(0);c.setUTCFullYear(r+1,0,u),c.setUTCHours(0,0,0,0);var l=Gt(c,e),h=new Date(0);h.setUTCFullYear(r,0,u),h.setUTCHours(0,0,0,0);var f=Gt(h,e);return n.getTime()>=l.getTime()?r+1:n.getTime()>=f.getTime()?r:r-1}function Jt(t,e){it(1,arguments);var n=e||{},r=n.locale,o=r&&r.options&&r.options.firstWeekContainsDate,i=null==o?1:ot(o),a=null==n.firstWeekContainsDate?i:ot(n.firstWeekContainsDate),s=Qt(t,e),u=new Date(0);u.setUTCFullYear(s,0,a),u.setUTCHours(0,0,0,0);var c=Gt(u,e);return c}var Vt=6048e5,Kt={G:function(t,e,n){var r=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});default:return n.era(r,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var r=t.getUTCFullYear(),o=r>0?r:1-r;return n.ordinalNumber(o,{unit:"year"})}return jt(t,e)},Y:function(t,e,n,r){var o=Qt(t,r),i=o>0?o:1-o;return"YY"===e?Ut(i%100,2):"Yo"===e?n.ordinalNumber(i,{unit:"year"}):Ut(i,e.length)},R:function(t,e){return Ut(zt(t),e.length)},u:function(t,e){return Ut(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(r);case"QQ":return Ut(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(t,e,n){var r=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(r);case"qq":return Ut(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(t,e,n){var r=t.getUTCMonth();switch(e){case"M":case"MM":return Wt(t,e);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(t,e,n){var r=t.getUTCMonth();switch(e){case"L":return String(r+1);case"LL":return Ut(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(t,e,n,r){var o=function(t,e){it(1,arguments);var n=at(t),r=Gt(n,e).getTime()-Jt(n,e).getTime();return Math.round(r/Vt)+1}(t,r);return"wo"===e?n.ordinalNumber(o,{unit:"week"}):Ut(o,e.length)},I:function(t,e,n){var r=function(t){it(1,arguments);var e=at(t),n=$t(e).getTime()-Bt(e).getTime();return Math.round(n/Xt)+1}(t);return"Io"===e?n.ordinalNumber(r,{unit:"week"}):Ut(r,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):Lt(t,e)},D:function(t,e,n){var r=function(t){it(1,arguments);var e=at(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var r=e.getTime(),o=n-r;return Math.floor(o/qt)+1}(t);return"Do"===e?n.ordinalNumber(r,{unit:"dayOfYear"}):Ut(r,e.length)},E:function(t,e,n){var r=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(t,e,n,r){var o=t.getUTCDay(),i=(o-r.weekStartsOn+8)%7||7;switch(e){case"e":return String(i);case"ee":return Ut(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(o,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(o,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(o,{width:"short",context:"formatting"});default:return n.day(o,{width:"wide",context:"formatting"})}},c:function(t,e,n,r){var o=t.getUTCDay(),i=(o-r.weekStartsOn+8)%7||7;switch(e){case"c":return String(i);case"cc":return Ut(i,e.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(o,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(o,{width:"narrow",context:"standalone"});case"cccccc":return n.day(o,{width:"short",context:"standalone"});default:return n.day(o,{width:"wide",context:"standalone"})}},i:function(t,e,n){var r=t.getUTCDay(),o=0===r?7:r;switch(e){case"i":return String(o);case"ii":return Ut(o,e.length);case"io":return n.ordinalNumber(o,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(t,e,n){var r=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(t,e,n){var r,o=t.getUTCHours();switch(r=12===o?"noon":0===o?"midnight":o/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(t,e,n){var r,o=t.getUTCHours();switch(r=o>=17?"evening":o>=12?"afternoon":o>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var r=t.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return Rt(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):Yt(t,e)},K:function(t,e,n){var r=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(r,{unit:"hour"}):Ut(r,e.length)},k:function(t,e,n){var r=t.getUTCHours();return 0===r&&(r=24),"ko"===e?n.ordinalNumber(r,{unit:"hour"}):Ut(r,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Ft(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):It(t,e)},S:function(t,e){return Ht(t,e)},X:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();if(0===o)return"Z";switch(e){case"X":return te(o);case"XXXX":case"XX":return ee(o);default:return ee(o,":")}},x:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"x":return te(o);case"xxxx":case"xx":return ee(o);default:return ee(o,":")}},O:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+Zt(o,":");default:return"GMT"+ee(o,":")}},z:function(t,e,n,r){var o=(r._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+Zt(o,":");default:return"GMT"+ee(o,":")}},t:function(t,e,n,r){var o=r._originalDate||t;return Ut(Math.floor(o.getTime()/1e3),e.length)},T:function(t,e,n,r){return Ut((r._originalDate||t).getTime(),e.length)}};function Zt(t,e){var n=t>0?"-":"+",r=Math.abs(t),o=Math.floor(r/60),i=r%60;return 0===i?n+String(o):n+String(o)+e+Ut(i,2)}function te(t,e){return t%60==0?(t>0?"-":"+")+Ut(Math.abs(t)/60,2):ee(t,e)}function ee(t,e){var n=e||"",r=t>0?"-":"+",o=Math.abs(t);return r+Ut(Math.floor(o/60),2)+n+Ut(o%60,2)}var ne=Kt;function re(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}}function oe(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}}var ie={p:oe,P:function(t,e){var n,r=t.match(/(P+)(p+)?/)||[],o=r[1],i=r[2];if(!i)return re(t,e);switch(o){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",re(o,e)).replace("{{time}}",oe(i,e))}},ae=["D","DD"],se=["YY","YYYY"];function ue(t){return-1!==ae.indexOf(t)}function ce(t){return-1!==se.indexOf(t)}function le(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var he=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,fe=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,de=/^'([^]*?)'?$/,pe=/''/g,me=/[a-zA-Z]/;function ye(t,e,n){it(2,arguments);var r=String(e),o=n||{},i=o.locale||Ot,a=i.options&&i.options.firstWeekContainsDate,s=null==a?1:ot(a),u=null==o.firstWeekContainsDate?s:ot(o.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var c=i.options&&i.options.weekStartsOn,l=null==c?0:ot(c),h=null==o.weekStartsOn?l:ot(o.weekStartsOn);if(!(h>=0&&h<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var f=at(t);if(!pt(f))throw new RangeError("Invalid time value");var d=lt(f),p=Nt(f,d),m={firstWeekContainsDate:u,weekStartsOn:h,locale:i,_originalDate:f},y=r.match(fe).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,ie[e])(t,i.formatLong,m):t})).join("").match(he).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return _e(n);var a=ne[r];if(a)return!o.useAdditionalWeekYearTokens&&ce(n)&&le(n,e,t),!o.useAdditionalDayOfYearTokens&&ue(n)&&le(n,e,t),a(p,n,i.localize,m);if(r.match(me))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("");return y}function _e(t){return t.match(de)[1].replace(pe,"'")}function ge(t){return function(t,e){if(null==t)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in e=e||{})Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}({},t)}var ve=6e4,we=1440,be=43200,ke=525600;function xe(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};it(2,arguments);var r=n.locale||Ot;if(!r.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var o=ft(t,e);if(isNaN(o))throw new RangeError("Invalid time value");var i,a,s=ge(n);s.addSuffix=Boolean(n.addSuffix),s.comparison=o,o>0?(i=at(e),a=at(t)):(i=at(t),a=at(e));var u,c=null==n.roundingMethod?"round":String(n.roundingMethod);if("floor"===c)u=Math.floor;else if("ceil"===c)u=Math.ceil;else{if("round"!==c)throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");u=Math.round}var l,h=a.getTime()-i.getTime(),f=h/ve,d=lt(a)-lt(i),p=(h-d)/ve;if("second"===(l=null==n.unit?f<1?"second":f<60?"minute":f<we?"hour":p<be?"day":p<ke?"month":"year":String(n.unit))){var m=u(h/1e3);return r.formatDistance("xSeconds",m,s)}if("minute"===l){var y=u(f);return r.formatDistance("xMinutes",y,s)}if("hour"===l){var _=u(f/60);return r.formatDistance("xHours",_,s)}if("day"===l){var g=u(p/we);return r.formatDistance("xDays",g,s)}if("month"===l){var v=u(p/be);return 12===v&&"month"!==n.unit?r.formatDistance("xYears",1,s):r.formatDistance("xMonths",v,s)}if("year"===l){var w=u(p/ke);return r.formatDistance("xYears",w,s)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}const Se=Symbol("Mint.Equals"),Te=Symbol.for("react.element"),Ce=(t,e)=>void 0===t&&void 0===e||null===t&&null===e||(null!=t&&null!=t&&t[Se]?t[Se](e):null!=e&&null!=e&&e[Se]?e[Se](t):(t&&t.$$typeof===Te||e&&e.$$typeof===Te||console.warn("Comparing entites with === because there is no comparison function defined:",t,e),t===e));class Record{constructor(t){for(let e in t)this[e]=t[e]}[Se](t){if(!(t instanceof Record))return!1;if(Object.keys(this).length!==Object.keys(t).length)return!1;for(let e in this)if(!Ce(t[e],this[e]))return!1;return!0}}const Pe=(t,e)=>n=>{const r=class extends Record{};return r.mappings=n,r.encode=t=>{const e={};for(let r in n){const[o,i,a]=n[r];e[o]=a?a(t[r]):t[r]}return e},r.decode=o=>{const{ok:i,err:a}=e,s={};for(let e in n){const[r,i]=n[e],u=t.field(r,i)(o);if(u instanceof a)return u;s[e]=u._0}return new i(new r(s))},r},Ee=(t,e)=>{const n=Object.assign(Object.create(null),t,e);return t instanceof Record?new t.constructor(n):new Record(n)},De=(t,e=!0)=>{window.location.pathname+window.location.search+window.location.hash!==t&&(e?(window.history.pushState({},"",t),dispatchEvent(new PopStateEvent("popstate"))):window.history.replaceState({},"",t))},Me=t=>{let e=document.createElement("style");document.head.appendChild(e),e.innerHTML=t},Ae=t=>(e,n)=>{const{just:r,nothing:o}=t;return e.length>=n+1&&n>=0?new r(e[n]):new o};class Oe{constructor(){this.effectAllowed="none",this.dropEffect="none",this.files=[],this.types=[],this.cache={}}getData(t){return this.cache[t]||""}setData(t,e){return this.cache[t]=e,null}clearData(){return this.cache={},null}}const Ne=t=>new Proxy(t,{get:function(t,e){if(e in t){const n=t[e];return n instanceof Function?()=>t[e]():n}switch(e){case"clipboardData":return t.clipboardData=new Oe;case"dataTransfer":return t.dataTransfer=new Oe;case"data":case"key":case"locale":case"animationName":case"pseudoElement":case"propertyName":return"";case"altKey":case"ctrlKey":case"metaKey":case"repeat":case"shiftKey":return!1;case"charCode":case"keyCode":case"location":case"which":case"button":case"buttons":case"clientX":case"clientY":case"pageX":case"pageY":case"screenX":case"screenY":case"detail":case"deltaMode":case"deltaX":case"deltaY":case"deltaZ":case"elapsedTime":return-1;default:return}}}),Ue=(t,e)=>{const n=Object.getOwnPropertyDescriptors(Reflect.getPrototypeOf(t));for(let r in n){if(e&&e[r])continue;const o=n[r].value;"function"==typeof o&&(t[r]=o.bind(t))}},je=(t,e)=>{if(!e)return;const n={};Object.keys(e).forEach((t=>{let r=null;n[t]={get:()=>(r||(r=e[t]()),r)}})),Object.defineProperties(t,n)},We=function(){let t=Array.from(arguments);return Array.isArray(t[0])&&1===t.length?t[0]:t},Le=function(t){const e={},n=(t,n)=>{e[t.toString().trim()]=n.toString().trim()};for(let e of t)if("string"==typeof e)e.split(";").forEach((t=>{const[e,r]=t.split(":");e&&r&&n(e,r)}));else if(e instanceof Map)for(let[t,r]of e)n(t,r);else if(e instanceof Array)for(let[t,r]of e)n(t,r);else for(let t in e)n(t,e[t]);return e};class Re extends p{render(){const t=[];for(let e in this.props.globals)t.push(h(this.props.globals[e],{ref:t=>t._persist(),key:e}));return h("div",{},[...t,...this.props.children])}}Re.displayName="Mint.Root";class Ye{constructor(t){t&&t instanceof Node&&t!==document.body?this.root=t:(this.root=document.createElement("div"),document.body.appendChild(this.root))}render(t,e){void 0!==t&&D(h(Re,{globals:e},[h(t,{key:"$MAIN"})]),this.root)}}class Fe{constructor(t,e){this.teardown=e,this.subject=t,this.steps=[]}async run(){let t;try{t=await new Promise(this.next.bind(this))}finally{this.teardown&&this.teardown()}return t}async next(t,e){requestAnimationFrame((async()=>{let n=this.steps.shift();if(n)try{this.subject=await n(this.subject)}catch(t){return e(t)}this.steps.length?this.next(t,e):t(this.subject)}))}step(t){return this.steps.push(t),this}}const Ie=["componentWillMount","render","getSnapshotBeforeUpdate","componentDidMount","componentWillReceiveProps","shouldComponentUpdate","componentWillUpdate","componentDidUpdate","componentWillUnmount","componentDidCatch","setState","forceUpdate","constructor"];class He extends p{constructor(t){super(t),Ue(this,Ie)}_d(t,e){je(this,e);const n={};Object.keys(t).forEach((e=>{const[r,o]=t[e],i=r||e;n[e]={get:()=>i in this.props?this.props[i]:o}})),Object.defineProperties(this,n)}}class qe{constructor(){Ue(this),this.subscriptions=new Map,this.state={}}setState(t,e){this.state=Object.assign({},this.state,t),e()}_d(t){je(this,t)}_subscribe(t,e){const n=this.subscriptions.get(t);null==e||null!=n&&((t,e)=>{if(t instanceof Object&&e instanceof Object){const n=new Set(Object.keys(t).concat(Object.keys(e)));for(let r of n)if(!Ce(t[r],e[r]))return!1;return!0}return console.warn("Comparing entites with === because there is no comparison function defined:",t,e),t===e})(n,e)||(this.subscriptions.set(t,e),this._update())}_unsubscribe(t){this.subscriptions.has(t)&&(this.subscriptions.delete(t),this._update())}_update(){this.update()}get _subscriptions(){return Array.from(this.subscriptions.values())}update(){}}var $e,ze,Be=($e=function(t,e){var n=function(){var t=function(t,e,n,r){for(n=n||{},r=t.length;r--;n[t[r]]=e);return n},e=[1,9],n=[1,10],r=[1,11],o=[1,12],i=[5,11,12,13,14,15],a={trace:function(){},yy:{},symbols_:{error:2,root:3,expressions:4,EOF:5,expression:6,optional:7,literal:8,splat:9,param:10,"(":11,")":12,LITERAL:13,SPLAT:14,PARAM:15,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",11:"(",12:")",13:"LITERAL",14:"SPLAT",15:"PARAM"},productions_:[0,[3,2],[3,1],[4,2],[4,1],[6,1],[6,1],[6,1],[6,1],[7,3],[8,1],[9,1],[10,1]],performAction:function(t,e,n,r,o,i,a){var s=i.length-1;switch(o){case 1:return new r.Root({},[i[s-1]]);case 2:return new r.Root({},[new r.Literal({value:""})]);case 3:this.$=new r.Concat({},[i[s-1],i[s]]);break;case 4:case 5:this.$=i[s];break;case 6:this.$=new r.Literal({value:i[s]});break;case 7:this.$=new r.Splat({name:i[s]});break;case 8:this.$=new r.Param({name:i[s]});break;case 9:this.$=new r.Optional({},[i[s-1]]);break;case 10:this.$=t;break;case 11:case 12:this.$=t.slice(1)}},table:[{3:1,4:2,5:[1,3],6:4,7:5,8:6,9:7,10:8,11:e,13:n,14:r,15:o},{1:[3]},{5:[1,13],6:14,7:5,8:6,9:7,10:8,11:e,13:n,14:r,15:o},{1:[2,2]},t(i,[2,4]),t(i,[2,5]),t(i,[2,6]),t(i,[2,7]),t(i,[2,8]),{4:15,6:4,7:5,8:6,9:7,10:8,11:e,13:n,14:r,15:o},t(i,[2,10]),t(i,[2,11]),t(i,[2,12]),{1:[2,1]},t(i,[2,3]),{6:14,7:5,8:6,9:7,10:8,11:e,12:[1,16],13:n,14:r,15:o},t(i,[2,9])],defaultActions:{3:[2,2],13:[2,1]},parseError:function(t,e){if(!e.recoverable){function n(t,e){this.message=t,this.hash=e}throw n.prototype=Error,new n(t,e)}this.trace(t)},parse:function(t){var e=this,n=[0],r=[null],o=[],i=this.table,a="",s=0,u=0,c=2,l=1,h=o.slice.call(arguments,1),f=Object.create(this.lexer),d={yy:{}};for(var p in this.yy)Object.prototype.hasOwnProperty.call(this.yy,p)&&(d.yy[p]=this.yy[p]);f.setInput(t,d.yy),d.yy.lexer=f,d.yy.parser=this,void 0===f.yylloc&&(f.yylloc={});var m=f.yylloc;o.push(m);var y=f.options&&f.options.ranges;"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var _,g,v,w,b,k,x,S,T=function(){var t;return"number"!=typeof(t=f.lex()||l)&&(t=e.symbols_[t]||t),t},C={};;){if(g=n[n.length-1],this.defaultActions[g]?v=this.defaultActions[g]:(null==_&&(_=T()),v=i[g]&&i[g][_]),void 0===v||!v.length||!v[0]){var P="";for(b in S=[],i[g])this.terminals_[b]&&b>c&&S.push("'"+this.terminals_[b]+"'");P=f.showPosition?"Parse error on line "+(s+1)+":\n"+f.showPosition()+"\nExpecting "+S.join(", ")+", got '"+(this.terminals_[_]||_)+"'":"Parse error on line "+(s+1)+": Unexpected "+(_==l?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(P,{text:f.match,token:this.terminals_[_]||_,line:f.yylineno,loc:m,expected:S})}if(v[0]instanceof Array&&v.length>1)throw new Error("Parse Error: multiple actions possible at state: "+g+", token: "+_);switch(v[0]){case 1:n.push(_),r.push(f.yytext),o.push(f.yylloc),n.push(v[1]),_=null,u=f.yyleng,a=f.yytext,s=f.yylineno,m=f.yylloc;break;case 2:if(k=this.productions_[v[1]][1],C.$=r[r.length-k],C._$={first_line:o[o.length-(k||1)].first_line,last_line:o[o.length-1].last_line,first_column:o[o.length-(k||1)].first_column,last_column:o[o.length-1].last_column},y&&(C._$.range=[o[o.length-(k||1)].range[0],o[o.length-1].range[1]]),void 0!==(w=this.performAction.apply(C,[a,u,s,d.yy,v[1],r,o].concat(h))))return w;k&&(n=n.slice(0,-1*k*2),r=r.slice(0,-1*k),o=o.slice(0,-1*k)),n.push(this.productions_[v[1]][0]),r.push(C.$),o.push(C._$),x=i[n[n.length-2]][n[n.length-1]],n.push(x);break;case 3:return!0}}return!0}},s=function(){var t={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var o=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===r.length?this.yylloc.first_column:0)+r[r.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[o[0],o[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,r,o;if(this.options.backtrack_lexer&&(o={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(o.yylloc.range=this.yylloc.range.slice(0))),(r=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var i in o)this[i]=o[i];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,r;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var o=this._currentRules(),i=0;i<o.length;i++)if((n=this._input.match(this.rules[o[i]]))&&(!e||n[0].length>e[0].length)){if(e=n,r=i,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,o[i])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,o[r]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(t,e,n,r){switch(n){case 0:return"(";case 1:return")";case 2:return"SPLAT";case 3:return"PARAM";case 4:case 5:return"LITERAL";case 6:return"EOF"}},rules:[/^(?:\()/,/^(?:\))/,/^(?:\*+\w+)/,/^(?::+\w+)/,/^(?:[\w%\-~\n]+)/,/^(?:.)/,/^(?:$)/],conditions:{INITIAL:{rules:[0,1,2,3,4,5,6],inclusive:!0}}};return t}();function u(){this.yy={}}return a.lexer=s,u.prototype=a,a.Parser=u,new u}();e.parser=n,e.Parser=n.Parser,e.parse=function(){return n.parse.apply(n,arguments)}},$e(ze={path:undefined,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&ze.path)}},ze.exports),ze.exports);function Xe(t){return function(e,n){return{displayName:t,props:e,children:n||[]}}}var Ge={Root:Xe("Root"),Concat:Xe("Concat"),Literal:Xe("Literal"),Splat:Xe("Splat"),Param:Xe("Param"),Optional:Xe("Optional")},Qe=Be.parser;Qe.yy=Ge;var Je=Qe,Ve=Object.keys(Ge),Ke=function(t){return Ve.forEach((function(e){if(void 0===t[e])throw new Error("No handler defined for "+e.displayName)})),{visit:function(t,e){return this.handlers[t.displayName].call(this,t,e)},handlers:t}},Ze=/[\-{}\[\]+?.,\\\^$|#\s]/g;function tn(t){this.captures=t.captures,this.re=t.re}tn.prototype.match=function(t){var e=this.re.exec(t),n={};if(e)return this.captures.forEach((function(t,r){void 0===e[r+1]?n[t]=void 0:n[t]=decodeURIComponent(e[r+1])})),n};var en=Ke({Concat:function(t){return t.children.reduce(function(t,e){var n=this.visit(e);return{re:t.re+n.re,captures:t.captures.concat(n.captures)}}.bind(this),{re:"",captures:[]})},Literal:function(t){return{re:t.props.value.replace(Ze,"\\$&"),captures:[]}},Splat:function(t){return{re:"([^?]*?)",captures:[t.props.name]}},Param:function(t){return{re:"([^\\/\\?]+)",captures:[t.props.name]}},Optional:function(t){var e=this.visit(t.children[0]);return{re:"(?:"+e.re+")?",captures:e.captures}},Root:function(t){var e=this.visit(t.children[0]);return new tn({re:new RegExp("^"+e.re+"(?=\\?|$)"),captures:e.captures})}}),nn=Ke({Concat:function(t,e){var n=t.children.map(function(t){return this.visit(t,e)}.bind(this));return!n.some((function(t){return!1===t}))&&n.join("")},Literal:function(t){return decodeURI(t.props.value)},Splat:function(t,e){return!!e[t.props.name]&&e[t.props.name]},Param:function(t,e){return!!e[t.props.name]&&e[t.props.name]},Optional:function(t,e){return this.visit(t.children[0],e)||""},Root:function(t,e){e=e||{};var n=this.visit(t.children[0],e);return!!n&&encodeURI(n)}}),rn=nn;function on(t){var e;if(e=this?this:Object.create(on.prototype),void 0===t)throw new Error("A route spec is required");return e.spec=t,e.ast=Je.parse(t),e}on.prototype=Object.create(null),on.prototype.match=function(t){return en.visit(this.ast).match(t)||!1},on.prototype.reverse=function(t){return rn.visit(this.ast,t)};var an=on;Event.prototype.propagationPath=function(){var t=function(){var t=this.target||null,e=[t];if(!t||!t.parentElement)return[];for(;t.parentElement;)t=t.parentElement,e.unshift(t);return e}.bind(this);return this.path||this.composedPath&&this.composedPath()||t()};class sn extends p{handleClick(t,e){if(!t.defaultPrevented&&!t.ctrlKey)for(let e of t.propagationPath())if("A"===e.tagName){if(""!==e.target.trim())return;let n=e.pathname,r=e.origin,o=e.search,i=e.hash;if(r===window.location.origin)for(let e of this.props.routes){let r=n+o+i,a=new an(e.path);if("*"==e.path||a.match(r))return t.preventDefault(),void De(r)}}}render(){const t=[];for(let e in this.props.globals)t.push(h(this.props.globals[e],{ref:t=>t._persist(),key:e}));return h("div",{onClick:this.handleClick.bind(this)},[...t,...this.props.children])}}sn.displayName="Mint.Root";var un=t=>class{constructor(){this.root=document.createElement("div"),document.body.appendChild(this.root),this.firstPageLoad=!0,this.routes=[],this.url=null,window.addEventListener("popstate",(()=>{this.handlePopState()}))}resolvePagePosition(){var t;t=()=>{requestAnimationFrame((()=>{let t;try{t=this.root.querySelector(`a[name="${window.location.hash.slice(1)}"]`)}finally{}window.location.hash&&t?window.location.href=window.location.hash:this.firstPageLoad||window.scrollTo(document.body.scrollTop,0),this.firstPageLoad=!1}))},"function"!=typeof window.queueMicrotask?Promise.resolve().then(t).catch((t=>setTimeout((()=>{throw t})))):window.queueMicrotask(t)}handlePopState(){const e=window.location.pathname+window.location.search+window.location.hash;if(e!==this.url){for(let n of this.routes)if("*"===n.path)n.handler(),this.resolvePagePosition();else{let r=new an(n.path).match(e);if(r)try{let e=n.mapping.map(((e,o)=>{const i=r[e],a=n.decoders[o](i);if(a instanceof t.ok)return a._0;throw""}));n.handler.apply(null,e),this.resolvePagePosition();break}catch(t){}}this.url=e}}render(t,e){void 0!==t&&(D(h(sn,{routes:this.routes,globals:e},[h(t,{key:"$MAIN"})]),this.root),this.handlePopState())}addRoutes(t){this.routes=this.routes.concat(t)}};const cn=t=>{let e=JSON.stringify(t,"",2);return void 0===e&&(e="undefined"),((t,e=1,n)=>{if(n={indent:" ",includeEmptyLines:!1,...n},"string"!=typeof t)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof t}\``);if("number"!=typeof e)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof e}\``);if("string"!=typeof n.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof n.indent}\``);if(0===e)return t;const r=n.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return t.replace(r,n.indent.repeat(e))})(e)};class ln{constructor(t,e=[]){this.message=t,this.object=null,this.path=e}push(t){this.path.unshift(t)}toString(){const t=this.message.trim(),e=this.path.reduce(((t,e)=>{if(t.length)switch(e.type){case"FIELD":return`${t}.${e.value}`;case"ARRAY":return`${t}[${e.value}]`}else switch(e.type){case"FIELD":return e.value;case"ARRAY":return"[$(item.value)]"}}),"");return e.length&&this.object?t+"\n\n"+hn.trim().replace("{value}",cn(this.object)).replace("{path}",e):t}}const hn="\nThe input is in this object:\n\n{value}\n\nat: {path}\n",fn=t=>e=>{const{ok:n,err:r}=t;return"string"!=typeof e?new r(new ln("\nI was trying to decode the value:\n\n{value}\n\nas a String, but could not.\n".replace("{value}",cn(e)))):new n(e)},dn=t=>e=>{const{ok:n,err:r}=t;let o=NaN;return o="number"==typeof e?new Date(e):Date.parse(e),Number.isNaN(o)?new r(new ln("\nI was trying to decode the value:\n\n{value}\n\nas a Time, but could not.\n".replace("{value}",cn(e)))):new n(new Date(o))},pn=t=>e=>{const{ok:n,err:r}=t;let o=parseFloat(e);return isNaN(o)?new r(new ln("\nI was trying to decode the value:\n\n{value}\n\nas a Number, but could not.\n".replace("{value}",cn(e)))):new n(o)},mn=t=>e=>{const{ok:n,err:r}=t;return"boolean"!=typeof e?new r(new ln("\nI was trying to decode the value:\n\n{value}\n\nas a Bool, but could not.\n".replace("{value}",cn(e)))):new n(e)},yn=t=>(e,n)=>{const{err:r,nothing:o}=t;return t=>{if(null==t||null==t||"object"!=typeof t||Array.isArray(t)){const n='\nI was trying to decode the field "{field}" from the object:\n\n{value}\n\nbut I could not because it\'s not an object.\n'.replace("{field}",e).replace("{value}",cn(t));return new r(new ln(n))}{const o=t[e],i=n(o);return i instanceof r&&(i._0.push({type:"FIELD",value:e}),i._0.object=t),i}}},_n=t=>e=>n=>{const{ok:r,err:o}=t;if(!Array.isArray(n))return new o(new ln("\nI was trying to decode the value:\n\n{value}\n\nas an Array, but could not.\n".replace("{value}",cn(n))));let i=[],a=0;for(let t of n){let r=e(t);if(r instanceof o)return r._0.push({type:"ARRAY",value:a}),r._0.object=n,r;i.push(r._0),a++}return new r(i)},gn=t=>e=>n=>{const{ok:r,just:o,nothing:i,err:a}=t;if(null==n||null==n)return new r(new i);{const t=e(n);return t instanceof a?t:new r(new o(t._0))}},vn=t=>e=>n=>{const{ok:r,err:o}=t;if(!Array.isArray(n))return new o(new ln("\nI was trying to decode the value:\n\n{value}\n\nas an Tuple, but could not.\n".replace("{value}",cn(n))));let i=[],a=0;for(let t of e){if(void 0===n[a]||null===n[a])return new o(new ln("\nI was trying to decode one of the values of a tuple:\n\n{value}\n\nbut could not.\n".replace("{value}",cn(n[a]))));{let e=t(n[a]);if(e instanceof o)return e._0.push({type:"ARRAY",value:a}),e._0.object=n,e;i.push(e._0)}a++}return new r(i)},wn=t=>e=>n=>{const{ok:r,err:o}=t;if(null==n||null==n||"object"!=typeof n||Array.isArray(n)){const t="\nI was trying to decode the value:\n\n{value}\n\nas a Map, but could not.\n".replace("{value}",cn(n));return new o(new ln(t))}{const t=[];for(let r in n){const i=e(n[r]);if(i instanceof o)return i;t.push([r,i._0])}return new r(t)}},bn=t=>e=>new t.ok(e),kn=t=>t,xn=t=>t.toISOString(),Sn=t=>e=>e.map((e=>t?t(e):e)),Tn=t=>e=>{const n={};for(let r of e)n[r[0]]=t?t(r[1]):r[1];return n},Cn=t=>e=>n=>n instanceof t.just?e?e(n._0):n._0:null,Pn=t=>e=>e.map(((e,n)=>{const r=t[n];return r?r(e):e}));var En=t=>({maybe:Cn(t),identity:kn,tuple:Pn,array:Sn,time:xn,map:Tn});class Dn{constructor(){Ue(this)}_d(t){je(this,t)}}class Mn{constructor(){Ue(this),this.listeners=new Set,this.state={}}setState(t,e){this.state=Object.assign({},this.state,t);for(let t of this.listeners)t.forceUpdate();e()}_d(t){je(this,t)}_subscribe(t){this.listeners.add(t)}_unsubscribe(t){this.listeners.delete(t)}}class An{[Se](t){if(!(t instanceof this.constructor))return!1;if(t.length!==this.length)return!1;for(let e=0;e<this.length;e++)if(!Ce(this["_"+e],t["_"+e]))return!1;return!0}}const On=function(t){return null==t};return Function.prototype[Se]=function(t){return this===t},Node.prototype[Se]=function(t){return this===t},Symbol.prototype[Se]=function(t){return this.valueOf()===t},Date.prototype[Se]=function(t){return+this==+t},Number.prototype[Se]=function(t){return this.valueOf()===t},Boolean.prototype[Se]=function(t){return this.valueOf()===t},String.prototype[Se]=function(t){return this.valueOf()===t},Array.prototype[Se]=function(t){if(On(t))return!1;if(this.length!==t.length)return!1;if(0==this.length)return!0;for(let e in this)if(!Ce(this[e],t[e]))return!1;return!0},FormData.prototype[Se]=function(t){if(On(t))return!1;const e=Array.from(this.keys()).sort(),n=Array.from(t.keys()).sort();if(Ce(e,n)){if(0==e.length)return!0;for(let n of e){const e=Array.from(this.getAll(n).sort()),r=Array.from(t.getAll(n).sort());if(!Ce(e,r))return!1}return!0}return!1},URLSearchParams.prototype[Se]=function(t){return!On(t)&&this.toString()===t.toString()},Set.prototype[Se]=function(t){return!On(t)&&Ce(Array.from(this).sort(),Array.from(t).sort())},Map.prototype[Se]=function(t){if(On(t))return!1;const e=Array.from(this.keys()).sort(),n=Array.from(t.keys()).sort();if(Ce(e,n)){if(0==e.length)return!0;for(let n of e)if(!Ce(this.get(n),t.get(n)))return!1;return!0}return!1},t=>{const e=(t=>({boolean:mn(t),object:bn(t),number:pn(t),string:fn(t),field:yn(t),array:_n(t),maybe:gn(t),tuple:vn(t),time:dn(t),map:wn(t)}))(t);return{program:new(un(t)),normalizeEvent:Ne,insertStyles:Me,navigate:De,compare:Ce,update:Ee,array:We,style:Le,at:Ae(t),EmbeddedProgram:Ye,TestContext:Fe,Component:He,Provider:qe,Module:Dn,Store:Mn,Decoder:e,Encoder:En(t),DateFNS:{format:ye,startOfMonth:gt,startOfWeek:ct,startOfDay:ht,endOfMonth:yt,endOfWeek:vt,endOfDay:mt,addMonths:st,eachDay:_t,distanceInWordsStrict:xe},Record:Record,Enum:An,Nothing:t.nothing,Just:t.just,Err:t.err,Ok:t.ok,createRecord:Pe(e,t),createPortal:Q,register:rt,createElement:h,React:{Fragment:d},ReactDOM:{unmountComponentAtNode:t=>D(null,t),render:D},Symbols:{Equals:Se}}}}();
(() => {
  const _enums = {}
  const mint = Mint(_enums)

  const _normalizeEvent = (event) => {
    return EH.sn(mint.normalizeEvent(event))
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
    if (item instanceof AN) {
      return item
    } else if (item instanceof AM) {
      return new AM(callback(item._0))
    } else {
      return callback(item)
    }
  }

  class DoError extends Error {}

  class AM extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class AN extends _E{constructor(){super();this.length = 0}};class FG extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class FH extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class EX extends _E{constructor(){super();this.length = 0}};class BG extends _E{constructor(){super();this.length = 0}};class EY extends _E{constructor(){super();this.length = 0}};class EZ extends _E{constructor(){super();this.length = 0}};class DE extends _E{constructor(){super();this.length = 0}};class FA extends _E{constructor(){super();this.length = 0}};class CU extends _E{constructor(){super();this.length = 0}};class BQ extends _E{constructor(){super();this.length = 0}};class EL extends _E{constructor(){super();this.length = 0}};class EM extends _E{constructor(){super();this.length = 0}};class EN extends _E{constructor(){super();this.length = 0}};class EO extends _E{constructor(){super();this.length = 0}};class EP extends _E{constructor(){super();this.length = 0}};class EQ extends _E{constructor(){super();this.length = 0}};class ER extends _E{constructor(){super();this.length = 0}};class ES extends _E{constructor(){super();this.length = 0}};class ET extends _E{constructor(){super();this.length = 0}};class EU extends _E{constructor(){super();this.length = 0}};class DZ extends _E{constructor(){super();this.length = 0}};class BU extends _E{constructor(){super();this.length = 0}};class BV extends _E{constructor(){super();this.length = 0}};class BW extends _E{constructor(){super();this.length = 0}};class BX extends _E{constructor(){super();this.length = 0}};class BY extends _E{constructor(){super();this.length = 0}};class BZ extends _E{constructor(){super();this.length = 0}};class BB extends _E{constructor(){super();this.length = 0}};class BD extends _E{constructor(){super();this.length = 0}};class BC extends _E{constructor(){super();this.length = 0}};class FE extends _E{constructor(){super();this.length = 0}};class FF extends _E{constructor(){super();this.length = 0}};class EI extends _E{constructor(){super();this.length = 0}};class DV extends _E{constructor(){super();this.length = 0}};class EJ extends _E{constructor(){super();this.length = 0}};class CH extends _E{constructor(){super();this.length = 0}};class EV extends _E{constructor(){super();this.length = 0}};class EW extends _E{constructor(){super();this.length = 0}};class EK extends _E{constructor(){super();this.length = 0}};class BL extends _E{constructor(){super();this.length = 0}};class BM extends _E{constructor(){super();this.length = 0}};class CJ extends _E{constructor(){super();this.length = 0}};class FB extends _E{constructor(){super();this.length = 0}};class FC extends _E{constructor(){super();this.length = 0}};class FD extends _E{constructor(){super();this.length = 0}};class AL extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class CD extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};class CK extends _E{constructor(_0){super();this._0 = _0;this.length = 1}};const B = _R({hostname:["hostname",Decoder.string],protocol:["protocol",Decoder.string],origin:["origin",Decoder.string],search:["search",Decoder.string],path:["path",Decoder.string],hash:["hash",Decoder.string],host:["host",Decoder.string],port:["port",Decoder.string]});const C = _R({});const D = _R({});const E = _R({});const F = _R({});const G = _R({});const H = _R({});const I = _R({});const J = _R({});const K = _R({});const L = _R({});const M = _R({});const N = _R({});const O = _R({});const P = _R({});const Q = _R({});const R = _R({});const S = _R({});const T = _R({});const V = _R({});const W = _R({});const U = _R({height:["height",Decoder.number],bottom:["bottom",Decoder.number],width:["width",Decoder.number],right:["right",Decoder.number],left:["left",Decoder.number],top:["top",Decoder.number],x:["x",Decoder.number],y:["y",Decoder.number]});const X = _R({});const Y = _R({value:["value",Decoder.string],key:["key",Decoder.string]});const Z = _R({});const AA = _R({});const AB = _R({});const AC = _R({});const AD = _R({caseInsensitive:["caseInsensitive",Decoder.boolean],multiline:["multiline",Decoder.boolean],unicode:["unicode",Decoder.boolean],global:["global",Decoder.boolean],sticky:["sticky",Decoder.boolean]});const AE = _R({submatches:["submatches",Decoder.array(Decoder.string),Encoder.array()],match:["match",Decoder.string],index:["index",Decoder.number]});const EG=new(class extends _M{rr(rs){return ((() => {
      if (!this._a) {
        this._a = document.createElement('a')
      }

      this._a.href = rs

      return new B({hostname:(this._a.hostname || ""),protocol:(this._a.protocol || ""),origin:(this._a.origin || ""),path:(this._a.pathname || ""),search:(this._a.search || ""),hash:(this._a.hash || ""),host:(this._a.host || ""),port:(this._a.port || "")})
    })())}});const AH=new(class extends _M{o(rt){return (rt.length)}l(ru,rv){return (ru.split(rv))}});const EE=new(class extends _M{rg(rw){return (rw)}rp(rx){return (rx)}rk(ry,rz){return AG.sa((()=>{const _0 = [];const _1 = ry;let _i = -1;for(let [sc,sb] of _1){_i++;const _2 = _compare(sc, rz)
if (!_2) { continue };_0.push(sb)};return _0})())}});const ED=new(class extends _M{sd(){return (window.location.href)}re(se){const sg=ED.sf();const sh=EG.rr(se);return (_compare(sg.hostname, sh.hostname) && _compare(sg.protocol, sh.protocol) && _compare(sg.origin, sh.origin) && _compare(sg.path, sh.path) && _compare(sg.host, sh.host) && _compare(sg.port, sh.port))}si(sj){return (_navigate(sj))}sf(){return EG.rr(ED.sd())}});const EF=new(class extends _M{rn(){return (false)}});const CS=new(class extends _M{jp(sk){return (sk.toString())}});const DA=new(class extends _M{lj(sl,sm){return (Math.pow(sl, sm))}});const EH=new(class extends _M{sn(so){return new X({bubbles:(so.bubbles),cancelable:(so.cancelable),currentTarget:(so.currentTarget),defaultPrevented:(so.defaultPrevented),dataTransfer:(so.dataTransfer),clipboardData:(so.clipboardData),eventPhase:(so.eventPhase),isTrusted:(so.isTrusted),target:(so.target),timeStamp:(so.timeStamp),type:(so.type),data:(so.data),altKey:(so.altKey),charCode:(so.charCode),ctrlKey:(so.ctrlKey),key:(so.key),keyCode:(so.keyCode),locale:(so.locale),location:(so.location),metaKey:(so.metaKey),repeat:(so.repeat),shiftKey:(so.shiftKey),which:(so.which),button:(so.button),buttons:(so.buttons),clientX:(so.clientX),clientY:(so.clientY),pageX:(so.pageX),pageY:(so.pageY),screenX:(so.screenX),screenY:(so.screenY),detail:(so.detail),deltaMode:(so.deltaMode),deltaX:(so.deltaX),deltaY:(so.deltaY),deltaZ:(so.deltaZ),animationName:(so.animationName),pseudoElement:(so.pseudoElement),propertyName:(so.propertyName),elapsedTime:(so.elapsedTime),event:so})}});const BO=new(class extends _M{eq(sp){return ((() => {
      const rect = sp.getBoundingClientRect()

      return new U({bottom:(rect.bottom),height:(rect.height),width:(rect.width),right:(rect.right),left:(rect.left),top:(rect.top),x:(rect.x),y:(rect.y)})
    })())}it(sq,sr,ss){return (sq.setAttribute(sr, ss) && element)}hd(st,su,sv){return ((() => {
      st.style[su] = sv
      return st
    })())}});const AO=new(class extends _M{x(sw){return (new Promise((resolve) => {
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
    })())}sa(ta){return _at(ta, 0)}c(tb){return _compare(AG.q(tb), 0)}e(tc,td){return (()=>{const _0 = [];const _1 = tc;let _i = -1;for(let te of _1){_i++;const tf = _i;_0.push(td(te, tf))};return _0})()}bs(tg,th){return (Array.from({ length: (th + 1) - tg }).map((v, $0) => $0 + tg))}q(ti){return (ti.length)}});const CC=new(class extends _M{gl(tj,tk,tl){(tj.addColorStop(tk, tl));return tj}});const BP=new(class extends _M{jt(tm,tn,to,tp,tq,tr,ts = false){(tm.arc(tn, to, tp, tq, tr, ts));return tm}gc(tt){(tt.closePath());return tt}eu(){return (new Path2D())}gd(tu,tv,tw){(tu.lineTo(tv, tw));return tu}ge(tx,ty,tz){(tx.moveTo(ty, tz));return tx}et(ua,ub,uc,ud,ue){(ua.rect(ub, uc, ud, ue));return ua}});const CG=new(class extends _M{ha(uf){return (uf)}});const CX=new(class extends _M{ks(ug){return (ug.width)}});const AK=new(class extends _M{ay(uh,ui,uj,uk,ul,um,un = false){(uh.getContext('2d').arc(ui, uj, uk, ul, um, un));return uh}av(uo,up,uq,ur,us,ut){(uo.getContext('2d').arcTo(up, uq, ur, us, ut));return uo}ao(uu){(uu.getContext('2d').beginPath());return uu}ni(uv,uw,ux,uy,uz,va,vb){(uv.getContext('2d').bezierCurveTo(uw, ux, uy, uz, va, vb));return uv}kg(vc,vd,ve,vf,vg){(vc.getContext('2d').clearRect(vd, ve, vf, vg));return vc}jc(vh,vi = new CU()){(vh.getContext('2d').clip(AK.vj(vi)));return vh}ew(vk,vl,vm = new CU()){(vk.getContext('2d').clip(vl, AK.vj(vm)));return vk}dy(vn){(vn.getContext('2d').closePath());return vn}gm(vo,vp,vq,vr){return (vo.getContext('2d').createConicGradient(vp, vq, vr))}bp(vs,vt,vu,vv = `srgb`){return (vs.getContext('2d').createImageData(vt, vu, { colorSpace: vv }))}qa(vw,vx,vy,vz,wa){return (vw.getContext('2d').createLinearGradient(vx, vy, vz, wa))}ho(wb,wc,wd){const wf=AK.we(wd);return ((() => {
      const $pattern = wb.getContext('2d').createPattern(wc, wf)

      if ($pattern !== null) {
        return new AM(($pattern))
      } else {
        return new AN()
      }
    })())}lp(wg,wh,wi,wj,wk,wl,wm){return (wg.getContext('2d').createRadialGradient(wh, wi, wj, wk, wl, wm))}wn(wo){return _match(wo,[[_PE(EI,[]),(()=>{return `ltr`})],[_PE(DV,[]),(()=>{return `rtl`})],[_PE(EJ,[]),(()=>{return `inherit`})]])}he(wp,wq,wr,ws,wt = 0,wu = 0,wv = 0,ww = 0,wx = 0,wy = 0){(!_compare(wv, 0) || !_compare(ww, 0) || !_compare(wx, 0) || !_compare(wy, 0) ? (wp.getContext('2d').drawImage(wq, wr, ws, wt, wu, wv, ww, wx, wy)) : (!_compare(wt, 0) || !_compare(wu, 0) ? (wp.getContext('2d').drawImage(wq, wr, ws, wt, wu)) : (wp.getContext('2d').drawImage(wq, wr, ws))));return wp}ch(wz,xa,xb,xc,xd,xe,xf,xg,xh = false){(wz.getContext('2d').ellipse(xa, xb, xc, xd, xe, xf, xg, xh));return wz}ax(xi,xj = new CU()){(xi.getContext('2d').fill(AK.vj(xj)));return xi}gf(xk,xl,xm = new CU()){(xk.getContext('2d').fill(xl, AK.vj(xm)));return xk}af(xn,xo,xp,xq,xr){(xn.getContext('2d').fillRect(xo, xp, xq, xr));return xn}vj(xs){return _match(xs,[[_PE(CU,[]),(()=>{return `nonzero`})],[_PE(BQ,[]),(()=>{return `evenodd`})]])}da(xt,xu,xv,xw,xx = -1){(xt.getContext('2d').fillText(xu, xv, xw, xx === -1 ? undefined : xx ));return xt}xy(xz){return _match(xz,[[_PE(EK,[]),(()=>{return `auto`})],[_PE(BL,[]),(()=>{return `normal`})],[_PE(BM,[]),(()=>{return `none`})]])}ya(yb){return _match(yb,[[_PE(EL,[]),(()=>{return `source-over`})],[_PE(EM,[]),(()=>{return `source-atop`})],[_PE(EN,[]),(()=>{return `source-in`})],[_PE(EO,[]),(()=>{return `source-out`})],[_PE(EP,[]),(()=>{return `destination-over`})],[_PE(EQ,[]),(()=>{return `destination-atop`})],[_PE(ER,[]),(()=>{return `destination-in`})],[_PE(ES,[]),(()=>{return `destination-out`})],[_PE(ET,[]),(()=>{return `lighter`})],[_PE(EU,[]),(()=>{return `copy`})],[_PE(DZ,[]),(()=>{return `xor`})]])}yc(yd){return _match(yd,[[_PE(CH,[]),(()=>{return `low`})],[_PE(EV,[]),(()=>{return `medium`})],[_PE(EW,[]),(()=>{return `high`})]])}kd(ye,yf,yg,yh = new CU(),yi = new AN()){return _match(yi,[[_PE(AM,[_PV]),((yj)=>{return (ye.getContext('2d').isPointInPath(yj, yf, yg, AK.vj(yh)))})],[_PE(AN,[]),(()=>{return (ye.getContext('2d').isPointInPath(yf, yg, AK.vj(yh)))})]])}jm(yk,yl,ym,yn = new AN()){return _match(yn,[[_PE(AM,[_PV]),((yo)=>{return (yk.getContext('2d').isPointInStroke(yl, ym, yo))})],[_PE(AN,[]),(()=>{return (yk.getContext('2d').isPointInStroke(yl, ym))})]])}yp(yq){return _match(yq,[[_PE(EX,[]),(()=>{return `butt`})],[_PE(BG,[]),(()=>{return `round`})],[_PE(EY,[]),(()=>{return `square`})]])}yr(ys){return _match(ys,[[_PE(EZ,[]),(()=>{return `bevel`})],[_PE(DE,[]),(()=>{return `round`})],[_PE(FA,[]),(()=>{return `miter`})]])}am(yt,yu,yv){(yt.getContext('2d').lineTo(yu, yv));return yt}kt(yw,yx){return (yw.getContext('2d').measureText(yx))}an(yy,yz,za){(yy.getContext('2d').moveTo(yz, za));return yy}we(zb){return _match(zb,[[_PE(CJ,[]),(()=>{return `repeat`})],[_PE(FB,[]),(()=>{return `repeat-x`})],[_PE(FC,[]),(()=>{return `repeat-y`})],[_PE(FD,[]),(()=>{return `no-repeat`})]])}bw(zc,zd,ze,zf){(zc.getContext('2d').putImageData(zd, ze, zf));return zc}ij(zg,zh,zi,zj,zk){(zg.getContext('2d').quadraticCurveTo(zh, zi, zj, zk));return zg}gt(zl,zm,zn,zo,zp){(zl.getContext('2d').rect(zm, zn, zo, zp));return zl}fj(zq){(zq.getContext('2d').reset());return zq}lb(zr){(zr.getContext('2d').resetTransform());return zr}kn(zs){(zs.getContext('2d').restore());return zs}op(zt,zu){(zt.getContext('2d').rotate(zu));return zt}pj(zv,zw,zx,zy,zz,aaa){(zv.getContext('2d').roundRect(zw, zx, zy, zz, aaa));return zv}kl(aab){(aab.getContext('2d').save());return aab}mh(aac,aad,aae){(aac.getContext('2d').scale(aad, aae));return aac}pu(aaf,aag){(aaf.getContext('2d').direction = AK.wn(aag));return aaf}ag(aah,aai){_match(aai,[[_PE(AL,[_PV]),((aaj)=>{return (aah.getContext('2d').fillStyle = aaj)})],[_PE(CD,[_PV]),((aak)=>{return (aah.getContext('2d').fillStyle = aak)})],[_PE(CK,[_PV]),((aal)=>{return (aah.getContext('2d').fillStyle = aal)})]]);return aah}fb(aam,aan){(aam.getContext('2d').filter = aan);return aam}cz(aao,aap){(aao.getContext('2d').font = aap);return aao}el(aaq,aar){(aaq.getContext('2d').fontKerning = AK.xy(aar));return aaq}bd(aas,aat){(aas.getContext('2d').globalAlpha = aat);return aas}qm(aau,aav){(aau.getContext('2d').globalCompositeOperation = AK.ya(aav));return aau}oz(aaw,aax){(aaw.getContext('2d').imageSmoothingEnabled = aax);return aaw}hf(aay,aaz){(aay.getContext('2d').imageSmoothingQuality = AK.yc(aaz));return aay}mz(aba,abb){const abc=`${abb}px`;(aba.getContext('2d').letterSpacing = abc);return aba}dm(abd,abe){(abd.getContext('2d').lineCap = AK.yp(abe));return abd}bj(abf,abg){(abf.getContext('2d').setLineDash(abg));return abf}nu(abh,abi){(abh.getContext('2d').lineDashOffset = abi);return abh}mb(abj,abk){(abj.getContext('2d').lineJoin = AK.yr(abk));return abj}aw(abl,abm){(abl.getContext('2d').lineWidth = abm);return abl}ab(abn,abo){(abn.getContext('2d').shadowBlur = abo);return abn}ad(abp,abq){(abp.getContext('2d').shadowColor = abq);return abp}ac(abr,abs){(abr.getContext('2d').shadowOffsetX = abs);return abr}ee(abt,abu){(abt.getContext('2d').shadowOffsetY = abu);return abt}u(abv,abw){_match(abw,[[_PE(AL,[_PV]),((abx)=>{return (abv.getContext('2d').strokeStyle = abx)})],[_PE(CD,[_PV]),((aby)=>{return (abv.getContext('2d').strokeStyle = aby)})],[_PE(CK,[_PV]),((abz)=>{return (abv.getContext('2d').strokeStyle = abz)})]]);return abv}db(aca,acb){(aca.getContext('2d').textAlign = AK.acc(acb));return aca}fu(acd,ace){(acd.getContext('2d').textBaseline = AK.fw(ace));return acd}cb(acf,acg,ach,aci,acj,ack,acl){(acf.getContext('2d').setTransform(acg, ach, aci, acj, ack, acl));return acf}hx(acm,acn){const aco=`${acn}px`;(acm.getContext('2d').wordSpacing = aco);return acm}al(acp,acq = new AN()){_match(acq,[[_PE(AM,[_PV]),((acr)=>{return (acp.getContext('2d').stroke(acr))})],[_PE(AN,[]),(()=>{return (acp.getContext('2d').stroke())})]]);return acp}t(acs,act,acu,acv,acw){(acs.getContext('2d').strokeRect(act, acu, acv, acw));return acs}dg(acx,acy,acz,ada,adb = 0){(acx.getContext('2d').strokeText(acy, acz, ada, adb > 0 ? adb : undefined));return acx}acc(adc){return _match(adc,[[_PE(BB,[]),(()=>{return `left`})],[_PE(BD,[]),(()=>{return `right`})],[_PE(BC,[]),(()=>{return `center`})],[_PE(FE,[]),(()=>{return `start`})],[_PE(FF,[]),(()=>{return `end`})]])}fw(add){return _match(add,[[_PE(BX,[]),(()=>{return `alphabetic`})],[_PE(BZ,[]),(()=>{return `bottom`})],[_PE(BV,[]),(()=>{return `hanging`})],[_PE(BY,[]),(()=>{return `ideographic`})],[_PE(BW,[]),(()=>{return `middle`})],[_PE(BU,[]),(()=>{return `top`})]])}ic(ade,adf,adg,adh,adi,adj,adk){(ade.getContext('2d').transform(adf, adg, adh, adi, adj, adk));return ade}ms(adl,adm,adn){(adl.getContext('2d').translate(adm, adn));return adl}});const AV=new(class extends _M{bt(ado,adp,adq){return (ado.data[adp] = adq)}});_program.addRoutes([{handler:(()=>{ED.si(`/setDirection`)}),decoders:[],mapping:[],path:`/`},{handler:((adt)=>{EC.adr(adt)}),decoders:[Decoder.string],mapping:['method'],path:`/:method`}]);class AF extends _C{constructor(props){super(props);this._d({d:[null,[]],n:[null,`mint`],m:[null,``]});this.state = new Record({f:[],r:true})}$b(b){const _={[`--a-a`]:`calc(` + this.a + `ch + 10px)`};(b ? Object.assign(_, {[`--b-a`]:`#F9F9F9`}) : null);(b ? Object.assign(_, {[`--b-b`]:`1.6`,[`--b-c`]:`1`}) : Object.assign(_, {[`--b-c`]:`var(--unhighlighted-opacity)`}));(b ? Object.assign(_, {[`--a-b`]:`#DDD`}) : Object.assign(_, {[`--a-b`]:`var(--title-border)`}));return _}$c(){const _={};(AG.c(this.d) ? Object.assign(_, {[`--c-a`]:`1`}) : Object.assign(_, {[`--c-b`]:`#EEE`,[`--c-a`]:`0.5`}));return _}get j(){return (_compare(this.n, `plain`) ? AH.l(this.m, `\n`) : AH.l((hljs.highlight(this.n, this.m, true).value), `\n`))}get a(){return AH.o(AI.p(AG.q(this.f)))}get f(){return this.state.f;}get r(){return this.state.r;}componentDidUpdate(){const k=this.j;return (!_compare(k, this.f) ? new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({f:k})), _resolve)
})) : (null))}componentDidMount(){return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({f:this.j})), _resolve)
}))}render(){return _h("div", {className:`a`}, [_h("pre", {className:`c`,style:_style([this.$c()])}, [AG.e(this.f, ((g, i)=>{return _h("div", {"dangerouslySetInnerHTML":({__html: g}),className:`b`,style:_style([this.$b(AG.h(this.d, i))])})}))])])}};;class AJ extends _C{get s(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [y,z] = [(()=>{const w=(()=>{return _match(this.s,[[_PE(AM,[_PV]),((v)=>{return (()=>{AK.t(AK.u(v, new AL(`green`)), 20, 10, 160, 100);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return w()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [y]),_h(AF, {m:z})])}};;class AP extends _C{get aa(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [ai,aj] = [(()=>{const ah=(()=>{return _match(this.aa,[[_PE(AM,[_PV]),((ae)=>{return (()=>{AK.ab(AK.ac(AK.ad(ae, `red`), 25), 10);AK.af(AK.ag(ae, new AL(`blue`)), 20, 20, 150, 100);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return ah()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ai]),_h(AF, {m:aj})])}};;class AQ extends _C{get ak(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [ar,as] = [(()=>{const aq=(()=>{return _match(this.ak,[[_PE(AM,[_PV]),((ap)=>{return (()=>{AK.al(AK.am(AK.an(AK.ao(ap), 30, 50), 150, 100));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return aq()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ar]),_h(AF, {m:as})])}};;class AR extends _C{get at(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [ba,bb] = [(()=>{const az=(()=>{return _match(this.at,[[_PE(AM,[_PV]),((au)=>{return (()=>{AK.al(AK.am(AK.am(AK.an(AK.u(AK.ao(au), new AL(`gray`)), 200, 20), 200, 130), 50, 20));AK.al(AK.av(AK.an(AK.aw(AK.u(AK.ao(au), new AL(`black`)), 5), 200, 20), 200, 130, 50, 20, 40));AK.ax(AK.ay(AK.ag(AK.ao(au), new AL(`blue`)), 200, 20, 5, 0, 2 * (Math.PI)));AK.ax(AK.ay(AK.ay(AK.ag(AK.ao(au), new AL(`red`)), 200, 130, 5, 0, 2 * (Math.PI)), 50, 20, 5, 0, 2 * (Math.PI)));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return az()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ba]),_h(AF, {m:bb})])}};;class AS extends _C{get bc(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [bg,bh] = [(()=>{const bf=(()=>{return _match(this.bc,[[_PE(AM,[_PV]),((be)=>{return (()=>{AK.bd(be, 0.5);AK.af(AK.ag(be, new AL(`blue`)), 10, 10, 100, 100);AK.af(AK.ag(be, new AL(`red`)), 50, 50, 100, 100);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return bf()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [bg]),_h(AF, {m:bh})])}};;class AT extends _C{get bi(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [bm,bn] = [(()=>{const bl=(()=>{return _match(this.bi,[[_PE(AM,[_PV]),((bk)=>{return (()=>{AK.al(AK.am(AK.an(AK.bj(AK.ao(bk), [5, 15]), 0, 50), 300, 50));AK.al(AK.am(AK.an(AK.bj(AK.ao(bk), []), 0, 100), 300, 100));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return bl()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [bm]),_h(AF, {m:bn})])}};;class AU extends _C{get bo(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [by,bz] = [(()=>{const bx=(()=>{return _match(this.bo,[[_PE(AM,[_PV]),((bq)=>{return (()=>{const br=AK.bp(bq, 100, 100);AG.e(AG.bs(0, 100 * 100 - 1), ((bv, bu)=>{AV.bt(br, bu * 4, 190);AV.bt(br, bu * 4 + 1, 0);AV.bt(br, bu * 4 + 2, 210);AV.bt(br, bu * 4 + 3, 255);return bv}));AK.bw(bq, br, 20, 20);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return bx()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [by]),_h(AF, {m:bz})])}};;class AW extends _C{get ca(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [ce,cf] = [(()=>{const cd=(()=>{return _match(this.ca,[[_PE(AM,[_PV]),((cc)=>{return (()=>{AK.af(AK.cb(cc, 1, 0.2, 0.8, 1, 0, 0), 0, 0, 100, 100);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return cd()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ce]),_h(AF, {m:cf})])}};;class AX extends _C{get cg(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [ck,cl] = [(()=>{const cj=(()=>{return _match(this.cg,[[_PE(AM,[_PV]),((ci)=>{return (()=>{AK.ax(AK.ch(ci, 100, 100, 50, 75, 3.14 * 2, 0, 0));AK.al(AK.ch(AK.ao(ci), 100, 100, 50, 75, (Math.PI) / 4, 0, 2 * (Math.PI)));AK.al(AK.am(AK.an(AK.bj(AK.ao(ci), [5, 5]), 0, 200), 200, 0));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return cj()})();return _h("canvas", {"width":`200`,"height":`200`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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
  height="200"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ck]),_h(AF, {m:cl})])}};;class AY extends _C{get cm(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [cp,cq] = [(()=>{const co=(()=>{return _match(this.cm,[[_PE(AM,[_PV]),((cn)=>{return (()=>{AK.af(AK.ag(cn, new AL(`green`)), 10, 10, 150, 100);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return co()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [cp]),_h(AF, {m:cq})])}};;class AZ extends _C{get cr(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [cu,cv] = [(()=>{const ct=(()=>{return _match(this.cr,[[_PE(AM,[_PV]),((cs)=>{return (()=>{AK.ab(AK.ad(cs, `red`), 15);AK.af(AK.ag(cs, new AL(`blue`)), 20, 20, 150, 100);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return ct()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [cu]),_h(AF, {m:cv})])}};;class BA extends _C{get cw(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [dd,de] = [(()=>{const dc=(()=>{return _match(this.cw,[[_PE(AM,[_PV]),((cy)=>{return (()=>{const cx=175;AK.al(AK.am(AK.an(AK.ao(cy), cx, 0), cx, 150));AK.cz(cy, `30px serif`);AK.da(AK.db(cy, new BB()), `left-aligned`, cx, 40);AK.da(AK.db(cy, new BC()), `center-aligned`, cx, 85);AK.da(AK.db(cy, new BD()), `right-aligned`, cx, 130);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return dc()})();return _h("canvas", {"width":`350`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas width="350"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [dd]),_h(AF, {m:de})])}};;class BE extends _C{get df(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [dj,dk] = [(()=>{const di=(()=>{return _match(this.df,[[_PE(AM,[_PV]),((dh)=>{return (()=>{AK.dg(AK.cz(dh, `bold 48px serif`), `Hello world`, 50, 100);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return di()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [dj]),_h(AF, {m:dk})])}};;class BF extends _C{get dl(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [dq,dr] = [(()=>{const dp=(()=>{return _match(this.dl,[[_PE(AM,[_PV]),((dn)=>{return (()=>{AK.al(AK.am(AK.dm(AK.aw(AK.an(AK.ao(dn), 20, 20), 15), new BG()), 100, 100));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return dp()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [dq]),_h(AF, {m:dr})])}};;class BH extends _C{get ds(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [dv,dw] = [(()=>{const du=(()=>{return _match(this.ds,[[_PE(AM,[_PV]),((dt)=>{return (()=>{AK.af(AK.ag(dt, new AL(`blue`)), 10, 10, 100, 100);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return du()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [dv]),_h(AF, {m:dw})])}};;class BI extends _C{get dx(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [eb,ec] = [(()=>{const ea=(()=>{return _match(this.dx,[[_PE(AM,[_PV]),((dz)=>{return (()=>{AK.al(AK.dy(AK.am(AK.am(AK.an(AK.ao(dz), 20, 140), 120, 10), 220, 140)));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return ea()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [eb]),_h(AF, {m:ec})])}};;class BJ extends _C{get ed(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [eh,ei] = [(()=>{const eg=(()=>{return _match(this.ed,[[_PE(AM,[_PV]),((ef)=>{return (()=>{AK.ab(AK.ee(AK.ad(ef, `red`), 25), 10);AK.af(AK.ag(ef, new AL(`blue`)), 20, 20, 150, 80);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return eg()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [eh]),_h(AF, {m:ei})])}};;class BK extends _C{get ej(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [en,eo] = [(()=>{const em=(()=>{return _match(this.ej,[[_PE(AM,[_PV]),((ek)=>{return (()=>{AK.cz(ek, `30px serif`);AK.da(ek, `AVA Ta We (default: auto)`, 5, 30);AK.da(AK.el(ek, new BL()), `AVA Ta We (normal)`, 5, 70);AK.da(AK.el(ek, new BM()), `AVA Ta We none`, 5, 110);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return em()})();return _h("canvas", {"width":`400`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas width="400"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [en]),_h(AF, {m:eo})])}};;class BN extends _C{get ep(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [ey,ez] = [(()=>{const ex=(()=>{return _match(this.ep,[[_PE(AM,[_PV]),((er)=>{return (()=>{const es=BO.eq(er);const ev=BP.et(BP.et(BP.eu(), 80, 10, 20, 130), 40, 50, 100, 50);AK.ew(er, ev, new BQ());AK.af(AK.ag(er, new AL(`blue`)), 0, 0, es.width, es.height);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return ex()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
      Maybe::Just(el) =>
        {
          let dims =
            Dom.getDimensions(el)

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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ey]),_h(AF, {m:ez})])}};;class BR extends _C{get fa(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [fe,ff] = [(()=>{const fd=(()=>{return _match(this.fa,[[_PE(AM,[_PV]),((fc)=>{return (()=>{AK.da(AK.cz(AK.fb(fc, `blur(4px)`), `48px serif`), `Hello world`, 50, 100);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return fd()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [fe]),_h(AF, {m:ff})])}};;class BS extends _C{get fg(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [fn,fo] = [(()=>{const fi=(()=>{return _match(this.fg,[[_PE(AM,[_PV]),((fh)=>{return (()=>{AK.da(AK.cz(fh, `25px sans-serif`), `Click reset button to reset`, 0, 50);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});const fl=(()=>{return _match(this.fg,[[_PE(AM,[_PV]),((fk)=>{return (()=>{AK.fj(fk);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return fi()})();return _h("div", {}, [_h("button", {"onClick":(event => (((fm)=>{return fl()}))(_normalizeEvent(event)))}, [`reset`]),_h("canvas", {ref:(element) => { this._canvas = element }})])})(), `let draw =
  () {
    case canvas {
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
    case canvas {
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
</div>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [fn]),_h(AF, {m:fo})])}};;class BT extends _C{get fp(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [fy,fz] = [(()=>{const fx=(()=>{return _match(this.fp,[[_PE(AM,[_PV]),((fr)=>{return (()=>{const fq=[new BU(), new BV(), new BW(), new BX(), new BY(), new BZ()];AK.u(AK.cz(fr, `36px serif`), new AL(`red`));AG.e(fq, ((fv, fs)=>{const ft=75 + fs * 75;return AK.da(AK.al(AK.am(AK.an(AK.ao(AK.fu(fr, fv)), 0, ft + 0.5), 550, ft + 0.5)), `Abcdefghijklmnop (${AK.fw(fv)})`, 0, ft)}));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return fx()})();return _h("canvas", {"width":`550`,"height":`500`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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
  height="500"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [fy]),_h(AF, {m:fz})])}};;class CA extends _C{get ga(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [gi,gj] = [(()=>{const gh=(()=>{return _match(this.ga,[[_PE(AM,[_PV]),((gg)=>{return (()=>{const gb=BP.eu();BP.gc(BP.gd(BP.gd(BP.gd(BP.gd(BP.gd(BP.ge(gb, 30, 90), 110, 20), 240, 130), 60, 130), 190, 20), 270, 90));AK.gf(AK.ag(gg, new AL(`green`)), gb, new BQ());return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return gh()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [gi]),_h(AF, {m:gj})])}};;class CB extends _C{get gk(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [gq,gr] = [(()=>{const gp=(()=>{return _match(this.gk,[[_PE(AM,[_PV]),((gn)=>{return (()=>{const go=CC.gl(CC.gl(CC.gl(CC.gl(CC.gl(AK.gm(gn, 0, 100, 100), 0, `red`), 0.25, `orange`), 0.5, `yellow`), 0.75, `green`), 1, `blue`);AK.af(AK.ag(gn, new CD(go)), 20, 20, 200, 200);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return gp()})();return _h("canvas", {"width":`240`,"height":`240`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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
  height="240"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [gq]),_h(AF, {m:gr})])}};;class CE extends _C{get gs(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [gw,gx] = [(()=>{const gv=(()=>{return _match(this.gs,[[_PE(AM,[_PV]),((gu)=>{return (()=>{AK.ax(AK.gt(gu, 10, 10, 150, 100));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return gv()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [gw]),_h(AF, {m:gx})])}};;class CF extends _C{get gz(){return (this._image ? new AM(this._image) : new AN);}get gy(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [hi,hj] = [(()=>{const hh=(()=>{return _match(this.gy,[[_PE(AM,[_PV]),((hg)=>{return _match(this.gz,[[_PE(AM,[_PV]),((hb)=>{return (()=>{const hc=CG.ha(hb);BO.hd(hb, `display`, `none`);AK.he(AK.hf(hg, new CH()), hc, 0, 0, 300, 150);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])})],[_PE(AN,[]),(()=>{return ``})]])});return _h(React.Fragment, {}, [_h("img", {"src":`/assets/canvas_createpattern_b99d5d2815a4c038e9721778fb4910ff.png`,"onLoad":(event => (hh)(_normalizeEvent(event))),ref:(element) => { this._image = element }}),_h("canvas", {ref:(element) => { this._canvas = element }})])})(), `let draw =
  () {
    case canvas {
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
</>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [hi]),_h(AF, {m:hj})])}};;class CI extends _C{get hl(){return (this._image ? new AM(this._image) : new AN);}get hk(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [ht,hu] = [(()=>{const hs=(()=>{return _match(this.hk,[[_PE(AM,[_PV]),((hp)=>{return _match(this.hl,[[_PE(AM,[_PV]),((hm)=>{return (()=>{const hn=CG.ha(hm);const hq=AK.ho(hp, hn, new CJ());BO.hd(hm, `display`, `none`);_match(hq,[[_PE(AM,[_PV]),((hr)=>{return (()=>{AK.af(AK.ag(hp, new CK(hr)), 0, 0, 300, 300);return ``})()})],[_PE(AN,[]),(()=>{return ``})]]);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])})],[_PE(AN,[]),(()=>{return ``})]])});return _h(React.Fragment, {}, [_h("img", {"src":`/assets/canvas_createpattern_b99d5d2815a4c038e9721778fb4910ff.png`,"onLoad":(event => (hs)(_normalizeEvent(event))),ref:(element) => { this._image = element }}),_h("canvas", {"width":`300`,"height":`300`,ref:(element) => { this._canvas = element }})])})(), `let draw =
  () {
    case canvas {
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
</>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ht]),_h(AF, {m:hu})])}};;class CL extends _C{get hv(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [hz,ia] = [(()=>{const hy=(()=>{return _match(this.hv,[[_PE(AM,[_PV]),((hw)=>{return (()=>{AK.cz(hw, `30px serif`);AK.da(hw, `Hello world (default: 0px)`, 10, 40);AK.da(AK.hx(hw, 10), `Hello world (10px)`, 10, 90);AK.da(AK.hx(hw, 30), `Hello world (30px)`, 10, 140);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return hy()})();return _h("canvas", {"width":`700`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas width="700"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [hz]),_h(AF, {m:ia})])}};;class CM extends _C{get ib(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [ig,ih] = [(()=>{const ie=(()=>{return _match(this.ib,[[_PE(AM,[_PV]),((id)=>{return (()=>{AK.af(AK.ic(id, 1, 0.2, 0.8, 1, 0, 0), 0, 0, 100, 100);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return ie()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ig]),_h(AF, {m:ih})])}};;class CN extends _C{get ii(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [im,io] = [(()=>{const il=(()=>{return _match(this.ii,[[_PE(AM,[_PV]),((ik)=>{return (()=>{AK.al(AK.ij(AK.an(AK.ao(ik), 50, 20), 230, 30, 50, 100));AK.ax(AK.ay(AK.ay(AK.ao(AK.ag(ik, new AL(`blue`))), 50, 20, 5, 0, 2 * (Math.PI)), 50, 100, 5, 0, 2 * (Math.PI)));AK.ax(AK.ay(AK.ao(AK.ag(ik, new AL(`red`))), 230, 30, 5, 0, 2 * (Math.PI)));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return il()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [im]),_h(AF, {m:io})])}};;class CO extends _C{get iq(){return (this._image ? new AM(this._image) : new AN);}get ip(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [ix,iy] = [(()=>{const iw=(()=>{return _match(this.ip,[[_PE(AM,[_PV]),((iu)=>{return _match(this.iq,[[_PE(AM,[_PV]),((ir)=>{return (()=>{const is=BO.eq(ir);BO.it(iu, `width`, `${is.width}`);BO.it(iu, `height`, `${is.width}`);BO.hd(ir, `display`, `none`);const iv=CG.ha(ir);AK.he(iu, iv, 0, 0);return ``})()})],[null,(()=>{return ``})]])})],[null,(()=>{return ``})]])});return _h(React.Fragment, {}, [_h("img", {"src":`/assets/rhino_a195bee0a7ab0dea23d28fba649dc033.jpg`,"onLoad":(event => (iw)(_normalizeEvent(event))),ref:(element) => { this._image = element }}),_h("canvas", {ref:(element) => { this._canvas = element }})])})(), `let draw =
  () {
    case canvas {
      Maybe::Just(el) =>
        case image {
          Maybe::Just(img) =>
            {
              let dims =
                Dom.getDimensions(img)

              // resize canvas to display full image
              Dom.setAttribute(el, "width", "#{dims.width}")
              Dom.setAttribute(el, "height", "#{dims.width}")
              Dom.setStyle(img, "display", "none")

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
</>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ix]),_h(AF, {m:iy})])}};;class CP extends _C{get iz(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [je,jf] = [(()=>{const jd=(()=>{return _match(this.iz,[[_PE(AM,[_PV]),((ja)=>{return (()=>{const jb=BO.eq(ja);AK.jc(AK.ay(AK.ao(ja), 100, 75, 50, 0, (Math.PI) * 2));AK.af(AK.ag(AK.af(AK.ag(ja, new AL(`blue`)), 0, 0, jb.width, jb.height), new AL(`orange`)), 0, 0, 100, 100);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return jd()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
      Maybe::Just(el) =>
        {
          let dims =
            Dom.getDimensions(el)

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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [je]),_h(AF, {m:jf})])}};;class CQ extends _C{get jg(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [jj,jk] = [(()=>{const ji=(()=>{return _match(this.jg,[[_PE(AM,[_PV]),((jh)=>{return (()=>{AK.ee(AK.ac(AK.ad(jh, `red`), 10), 10);AK.af(jh, 20, 20, 100, 100);AK.t(AK.aw(jh, 6), 170, 20, 100, 100);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return ji()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [jj]),_h(AF, {m:jk})])}};;class CR extends _C{get jl(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [jr,js] = [(()=>{const jq=(()=>{return _match(this.jl,[[_PE(AM,[_PV]),((jn)=>{return (()=>{const jo=AK.jm(AK.al(AK.gt(jn, 10, 10, 100, 100)), 50, 10);AK.da(jn, `(50, 10) is in stroke: ${CS.jp(jo)}`, 150, 50);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return jq()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [jr]),_h(AF, {m:js})])}};;class CT extends _C{get jv(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [ki,kj] = [(()=>{const ju=BP.jt(BP.eu(), 150, 75, 50, 0, 2 * (Math.PI));const jx=(()=>{return _match(this.jv,[[_PE(AM,[_PV]),((jw)=>{return (()=>{AK.gf(AK.ag(jw, new AL(`red`)), ju);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});const kh=((ka)=>{return _match(this.jv,[[_PE(AM,[_PV]),((jy)=>{return (()=>{const jz=BO.eq(jy);const kb=ka.clientX - jz.left;const kc=ka.clientY - jz.top;const ke=AK.kd(jy, kb, kc, new CU(), new AM(ju));const kf=new AL((ke ? `green` : `red`));AK.gf(AK.kg(AK.ag(jy, kf), 0, 0, jz.width, jz.height), ju);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return jx()})();return _h("canvas", {"onMouseMove":(event => (kh)(_normalizeEvent(event))),ref:(element) => { this._canvas = element }})})(), `let circle =
  Path2D.create()
  |> Path2D.arc(150, 75, 50, 0, 2 * \`Math.PI\`)

let draw =
  () {
    case canvas {
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
    case canvas {
      Maybe::Just(el) =>
        {
          let dims =
            Dom.getDimensions(el)

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

<canvas as canvas onMouseMove={onMouseMove}/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ki]),_h(AF, {m:kj})])}};;class CV extends _C{get kk(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [kp,kq] = [(()=>{const ko=(()=>{return _match(this.kk,[[_PE(AM,[_PV]),((km)=>{return (()=>{AK.kl(km);AK.af(AK.ag(km, new AL(`green`)), 10, 10, 100, 100);AK.af(AK.kn(km), 150, 40, 100, 100);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return ko()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [kp]),_h(AF, {m:kq})])}};;class CW extends _C{get kr(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [kx,ky] = [(()=>{const kw=(()=>{return _match(this.kr,[[_PE(AM,[_PV]),((ku)=>{return (()=>{const kv=CX.ks(AK.kt(ku, `Hello world`));AK.da(AK.cz(ku, `24px serif`), `width: ${kv}`, 0, 50);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return kw()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [kx]),_h(AF, {m:ky})])}};;class CY extends _C{get kz(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [ld,le] = [(()=>{const lc=(()=>{return _match(this.kz,[[_PE(AM,[_PV]),((la)=>{return (()=>{AK.af(AK.af(AK.ag(AK.ic(la, 1, 0, 1.7, 1, 0, 0), new AL(`gray`)), 40, 40, 50, 20), 40, 90, 50, 20);AK.af(AK.af(AK.ag(AK.lb(la), new AL(`red`)), 40, 40, 50, 20), 40, 90, 50, 20);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return lc()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ld]),_h(AF, {m:le})])}};;class CZ extends _C{get lf(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [lm,ln] = [(()=>{const ll=(()=>{return _match(this.lf,[[_PE(AM,[_PV]),((lg)=>{return (()=>{AK.kg(lg, 0, 0, 150, 150);AK.t(AK.aw(AK.u(lg, new AL(`#09f`)), 2), -5, 50, 160, 50);AK.aw(AK.u(lg, new AL(`#000`)), 10);AK.an(AK.ao(lg), 0, 100);AG.e(AG.bs(0, 24), ((lk, lh)=>{const li=(_compare(lh % 2, 0) ? 25 : -25);AK.am(lg, DA.lj(lh, 1.5) * 2, 75 + li);return lk}));AK.al(lg);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return ll()})();return _h("canvas", {"width":`150`,"height":`150`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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
  height="150"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [lm]),_h(AF, {m:ln})])}};;class DB extends _C{get lo(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [lt,lu] = [(()=>{const ls=(()=>{return _match(this.lo,[[_PE(AM,[_PV]),((lq)=>{return (()=>{const lr=CC.gl(CC.gl(CC.gl(AK.lp(lq, 110, 90, 30, 100, 100, 70), 0, `pink`), 0.9, `white`), 1, `green`);AK.af(AK.ag(lq, new CD(lr)), 20, 20, 160, 160);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return ls()})();return _h("canvas", {"width":`200`,"height":`200`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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
  height="200"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [lt]),_h(AF, {m:lu})])}};;class DC extends _C{get lv(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [ly,lz] = [(()=>{const lx=(()=>{return _match(this.lv,[[_PE(AM,[_PV]),((lw)=>{return (()=>{AK.dg(AK.cz(lw, `50px serif`), `Hello world`, 50, 90);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return lx()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ly]),_h(AF, {m:lz})])}};;class DD extends _C{get ma(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [me,mf] = [(()=>{const md=(()=>{return _match(this.ma,[[_PE(AM,[_PV]),((mc)=>{return (()=>{AK.al(AK.am(AK.am(AK.am(AK.an(AK.ao(AK.mb(AK.aw(mc, 20), new DE())), 20, 20), 190, 100), 280, 20), 280, 150));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return md()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [me]),_h(AF, {m:mf})])}};;class DF extends _C{get mg(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [mk,ml] = [(()=>{const mj=(()=>{return _match(this.mg,[[_PE(AM,[_PV]),((mi)=>{return (()=>{AK.af(AK.ag(AK.mh(mi, 9, 3), new AL(`red`)), 10, 10, 8, 20);AK.cb(mi, 1, 0, 0, 1, 0, 0);AK.af(AK.ag(mi, new AL(`gray`)), 10, 10, 8, 20);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return mj()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [mk]),_h(AF, {m:ml})])}};;class DG extends _C{get mm(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [mp,mq] = [(()=>{const mo=(()=>{return _match(this.mm,[[_PE(AM,[_PV]),((mn)=>{return (()=>{AK.al(AK.am(AK.an(AK.u(AK.ao(mn), new AL(`blue`)), 20, 20), 200, 20));AK.al(AK.am(AK.an(AK.u(AK.ao(mn), new AL(`green`)), 20, 20), 120, 120));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return mo()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [mp]),_h(AF, {m:mq})])}};;class DH extends _C{get mr(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [mv,mw] = [(()=>{const mu=(()=>{return _match(this.mr,[[_PE(AM,[_PV]),((mt)=>{return (()=>{AK.af(AK.ag(AK.ms(mt, 110, 30), new AL(`red`)), 0, 0, 80, 80);AK.cb(mt, 1, 0, 0, 1, 0, 0);AK.af(AK.ag(mt, new AL(`gray`)), 0, 0, 80, 80);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return mu()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [mv]),_h(AF, {m:mw})])}};;class DI extends _C{get mx(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [nb,nc] = [(()=>{const na=(()=>{return _match(this.mx,[[_PE(AM,[_PV]),((my)=>{return (()=>{AK.cz(my, `30px serif`);AK.da(my, `Hello world (default: 0px)`, 10, 40);AK.da(AK.mz(my, 10), `Hello world (10px)`, 10, 90);AK.da(AK.mz(my, 20), `Hello world (20px)`, 10, 140);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return na()})();return _h("canvas", {"width":`700`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas width="700"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [nb]),_h(AF, {m:nc})])}};;class DJ extends _C{get nd(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [nl,nm] = [(()=>{const nk=(()=>{return _match(this.nd,[[_PE(AM,[_PV]),((nj)=>{return (()=>{const ne=[50, 20];const nf=[230, 30];const ng=[150, 80];const nh=[250, 100];AK.al(AK.ni(AK.an(AK.ao(nj), ne[0], ne[1]), nf[0], nf[1], ng[0], ng[1], nh[0], nh[1]));AK.ax(AK.ay(AK.ay(AK.ao(AK.ag(nj, new AL(`blue`))), ne[0], ne[1], 5, 0, 2 * (Math.PI)), nh[0], nh[1], 5, 0, 2 * (Math.PI)));AK.ax(AK.ay(AK.ay(AK.ao(AK.ag(nj, new AL(`red`))), nf[0], nf[1], 5, 0, 2 * (Math.PI)), ng[0], ng[1], 5, 0, 2 * (Math.PI)));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return nk()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [nl]),_h(AF, {m:nm})])}};;class DK extends _C{get nn(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [nq,nr] = [(()=>{const np=(()=>{return _match(this.nn,[[_PE(AM,[_PV]),((no)=>{return (()=>{AK.da(AK.cz(no, `50px serif`), `Hello world`, 50, 90);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return np()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [nq]),_h(AF, {m:nr})])}};;class DL extends _C{get ns(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [nw,nx] = [(()=>{const nv=(()=>{return _match(this.ns,[[_PE(AM,[_PV]),((nt)=>{return (()=>{AK.bj(nt, [4, 16]);AK.al(AK.am(AK.an(AK.ao(nt), 0, 50), 300, 50));AK.al(AK.am(AK.an(AK.nu(AK.u(AK.ao(nt), new AL(`red`)), 4), 0, 100), 300, 100));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return nv()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [nw]),_h(AF, {m:nx})])}};;class DM extends _C{get ny(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [ob,oc] = [(()=>{const oa=(()=>{return _match(this.ny,[[_PE(AM,[_PV]),((nz)=>{return (()=>{AK.al(AK.gt(nz, 10, 10, 150, 100));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return oa()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ob]),_h(AF, {m:oc})])}};;class DN extends _C{get od(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [og,oh] = [(()=>{const of=(()=>{return _match(this.od,[[_PE(AM,[_PV]),((oe)=>{return (()=>{AK.al(AK.gt(AK.am(AK.an(AK.ao(AK.aw(oe, 15)), 20, 20), 130, 130), 40, 40, 70, 70));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return of()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [og]),_h(AF, {m:oh})])}};;class DO extends _C{get oi(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [ol,om] = [(()=>{const ok=(()=>{return _match(this.oi,[[_PE(AM,[_PV]),((oj)=>{return (()=>{AK.al(AK.ay(AK.ao(oj), 150, 75, 50, 0, 2 * (Math.PI)));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return ok()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ol]),_h(AF, {m:om})])}};;class DP extends _C{get on(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [or,os] = [(()=>{const oq=(()=>{return _match(this.on,[[_PE(AM,[_PV]),((oo)=>{return (()=>{AK.ax(AK.ag(AK.ay(oo, 0, 0, 5, 0, 2 * (Math.PI)), new AL(`blue`)));AK.af(AK.ag(oo, new AL(`gray`)), 100, 0, 80, 20);AK.af(AK.ag(AK.op(oo, (45 * (Math.PI)) / 180), new AL(`red`)), 100, 0, 80, 20);AK.cb(oo, 1, 0, 0, 1, 0, 0);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return oq()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [or]),_h(AF, {m:os})])}};;class DQ extends _C{get ou(){return (this._image ? new AM(this._image) : new AN);}get ot(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [pb,pc] = [(()=>{const pa=(()=>{return _match(this.ot,[[_PE(AM,[_PV]),((oy)=>{return _match(this.ou,[[_PE(AM,[_PV]),((ov)=>{return (()=>{const ow=BO.eq(ov);BO.hd(ov, `display`, `none`);const ox=CG.ha(ov);AK.db(AK.cz(oy, `16px sans-serif`), new BC());AK.he(AK.da(oy, `Source`, ow.width * 0.5, 20), ox, 0, 24, ow.width, ow.height);AK.he(AK.oz(AK.da(oy, `Smoothing = TRUE`, ow.width * 2.5, 20), true), ox, ow.width, 24, ow.width * 3, ow.height * 3);AK.he(AK.oz(AK.da(oy, `Smoothing = FALSE`, ow.width * 5.5, 20), false), ox, ow.width * 4, 24, ow.width * 3, ow.height * 3);return ``})()})],[null,(()=>{return ``})]])})],[null,(()=>{return ``})]])});return _h(React.Fragment, {}, [_h("img", {"src":`/assets/star_aca6451fdeb0e4bf346a1ba9744ea7bb.png`,"onLoad":(event => (pa)(_normalizeEvent(event))),ref:(element) => { this._image = element }}),_h("canvas", {"width":`460`,"height":`210`,ref:(element) => { this._canvas = element }})])})(), `let draw =
  () {
    case canvas {
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
</>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [pb]),_h(AF, {m:pc})])}};;class DR extends _C{get pd(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [pg,ph] = [(()=>{const pf=(()=>{return _match(this.pd,[[_PE(AM,[_PV]),((pe)=>{return (()=>{AK.t(AK.u(pe, new AL(`blue`)), 10, 10, 100, 100);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return pf()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [pg]),_h(AF, {m:ph})])}};;class DS extends _C{get pi(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [pm,pn] = [(()=>{const pl=(()=>{return _match(this.pi,[[_PE(AM,[_PV]),((pk)=>{return (()=>{AK.al(AK.pj(AK.ao(AK.u(pk, new AL(`red`))), 10, 20, 150, 100, [0]));AK.al(AK.pj(AK.ao(AK.u(pk, new AL(`blue`))), 10, 20, 150, 100, [40]));AK.al(AK.pj(AK.ao(AK.u(pk, new AL(`orange`))), 10, 150, 150, 100, [10, 40]));AK.al(AK.pj(AK.ao(AK.u(pk, new AL(`green`))), 400, 20, 200, 100, [0, 30, 50, 60]));AK.al(AK.pj(AK.ao(AK.u(pk, new AL(`magenta`))), 400, 150, -200, 100, [0, 30, 50, 60]));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return pl()})();return _h("canvas", {"width":`700`,"height":`300`,ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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
  height="300"/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [pm]),_h(AF, {m:pn})])}};;class DT extends _C{get po(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [pr,ps] = [(()=>{const pq=(()=>{return _match(this.po,[[_PE(AM,[_PV]),((pp)=>{return (()=>{AK.af(AK.ag(AK.kl(pp), new AL(`green`)), 10, 10, 100, 100);AK.af(AK.kn(pp), 150, 40, 100, 100);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return pq()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [pr]),_h(AF, {m:ps})])}};;class DU extends _C{get pt(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [px,py] = [(()=>{const pw=(()=>{return _match(this.pt,[[_PE(AM,[_PV]),((pv)=>{return (()=>{AK.da(AK.pu(AK.da(AK.cz(pv, `48px serif`), `Hi!`, 150, 50), new DV()), `Hi!`, 150, 130);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return pw()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [px]),_h(AF, {m:py})])}};;class DW extends _C{get pz(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [qe,qf] = [(()=>{const qd=(()=>{return _match(this.pz,[[_PE(AM,[_PV]),((qb)=>{return (()=>{const qc=CC.gl(CC.gl(CC.gl(AK.qa(qb, 20, 0, 220, 0), 0, `green`), 0.5, `cyan`), 1, `green`);AK.af(AK.ag(qb, new CD(qc)), 20, 20, 200, 200);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return qd()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [qe]),_h(AF, {m:qf})])}};;class DX extends _C{get qg(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [qj,qk] = [(()=>{const qi=(()=>{return _match(this.qg,[[_PE(AM,[_PV]),((qh)=>{return (()=>{AK.ax(AK.gt(qh, 10, 20, 150, 100));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return qi()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [qj]),_h(AF, {m:qk})])}};;class DY extends _C{get ql(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [qp,qq] = [(()=>{const qo=(()=>{return _match(this.ql,[[_PE(AM,[_PV]),((qn)=>{return (()=>{AK.qm(qn, new DZ());AK.af(AK.ag(qn, new AL(`blue`)), 10, 10, 100, 100);AK.af(AK.ag(qn, new AL(`red`)), 50, 50, 100, 100);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return qo()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [qp]),_h(AF, {m:qq})])}};;class EA extends _C{get qr(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [qv,qw] = [(()=>{const qu=(()=>{return _match(this.qr,[[_PE(AM,[_PV]),((qs)=>{return (()=>{const qt=BO.eq(qs);AK.af(AK.ag(AK.ao(qs), new AL(`#ff6`)), 0, 0, qt.width, qt.height);AK.ax(AK.dy(AK.am(AK.am(AK.an(AK.ag(AK.ao(qs), new AL(`blue`)), 20, 20), 180, 20), 130, 130)));AK.kg(qs, 10, 10, 120, 100);return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return qu()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
      Maybe::Just(el) =>
        {
          let dims =
            Dom.getDimensions(el)

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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [qv]),_h(AF, {m:qw})])}};;class EB extends _C{get qx(){return (this._canvas ? new AM(this._canvas) : new AN);}render(){const [ra,rb] = [(()=>{const qz=(()=>{return _match(this.qx,[[_PE(AM,[_PV]),((qy)=>{return (()=>{AK.al(AK.am(AK.an(AK.am(AK.an(AK.ao(qy), 50, 50), 200, 50), 50, 90), 280, 120));return ``})()})],[_PE(AN,[]),(()=>{return ``})]])});(async()=>{await AO.x(0);return qz()})();return _h("canvas", {ref:(element) => { this._canvas = element }})})(), `let draw =
  () {
    case canvas {
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

<canvas as canvas/>`];return _h(React.Fragment, {}, [_h("div", {className:`demo`}, [ra]),_h(AF, {m:rb})])}};;class A extends _C{constructor(props){super(props);this._d({},{rh:(()=>{return EE.rp([[`setDirection`, (()=>{return $a()})], [`setFillStyle`, (()=>{return $b()})], [`setFilter`, (()=>{return $c()})], [`setFont`, (()=>{return $d()})], [`setFontKerning`, (()=>{return $e()})], [`setGlobalAlpha`, (()=>{return $f()})], [`setGlobalCompositeOperation`, (()=>{return $g()})], [`setImageSmoothingEnabled`, (()=>{return $h()})], [`setImageSmoothingQuality`, (()=>{return $i()})], [`setLetterSpacing`, (()=>{return $j()})], [`setLineCap`, (()=>{return $k()})], [`setLineDashOffset`, (()=>{return $l()})], [`setLineJoin`, (()=>{return $m()})], [`setLineWidth`, (()=>{return $n()})], [`setMiterLimit`, (()=>{return $o()})], [`setShadowBlur`, (()=>{return $p()})], [`setShadowColor`, (()=>{return $q()})], [`setShadowOffsetX`, (()=>{return $r()})], [`setShadowOffsetY`, (()=>{return $s()})], [`setStrokeStyle`, (()=>{return $t()})], [`setTextAlign`, (()=>{return $u()})], [`setTextBaseline`, (()=>{return $v()})], [`setWordSpacing`, (()=>{return $w()})]])}),rj:(()=>{return EE.rp([[`arc`, (()=>{return $x()})], [`arcTo`, (()=>{return $y()})], [`beginPath`, (()=>{return $z()})], [`bezierCurveTo`, (()=>{return $aa()})], [`clearRect`, (()=>{return $ab()})], [`clip`, (()=>{return $ac()})], [`clipPath`, (()=>{return $ad()})], [`closePath`, (()=>{return $ae()})], [`createConicGradient`, (()=>{return $af()})], [`createImageData`, (()=>{return $ag()})], [`createLinearGradient`, (()=>{return $ah()})], [`createPattern`, (()=>{return $ai()})], [`createRadialGradient`, (()=>{return $aj()})], [`drawImage`, (()=>{return $ak()})], [`ellipse`, (()=>{return $al()})], [`fill`, (()=>{return $am()})], [`fillPath`, (()=>{return $an()})], [`fillRect`, (()=>{return $ao()})], [`fillText`, (()=>{return $ap()})], [`isPointInPath`, (()=>{return $aq()})], [`isPointInStroke`, (()=>{return $ar()})], [`lineTo`, (()=>{return $as()})], [`measureText`, (()=>{return $at()})], [`moveTo`, (()=>{return $au()})], [`putImageData`, (()=>{return $x()})], [`quadraticCurveTo`, (()=>{return $av()})], [`rect`, (()=>{return $aw()})], [`reset`, (()=>{return $ax()})], [`resetTransform`, (()=>{return $ay()})], [`restore`, (()=>{return $az()})], [`rotate`, (()=>{return $ba()})], [`roundRect`, (()=>{return $bb()})], [`save`, (()=>{return $bc()})], [`scale`, (()=>{return $bd()})], [`setLineDash`, (()=>{return $be()})], [`setTransform`, (()=>{return $bf()})], [`stroke`, (()=>{return $bg()})], [`strokeRect`, (()=>{return $bh()})], [`strokeText`, (()=>{return $bi()})], [`transform`, (()=>{return $bj()})], [`translate`, (()=>{return $bk()})]])})})}get rl(){return EC.rq;}componentWillUnmount(){EC._unsubscribe(this)}componentDidMount(){EC._subscribe(this)}rc(rd){return (ED.re(rd) ? `active` : ``)}render(){return _h("article", {}, [_h("div", {className:`page`}, [_h("div", {className:`guide guide--wide`}, [_h("div", {className:`toc`}, [_h("div", {className:`toc__wrapper`}, [_h("div", {className:`page__package`}, [_h("strong", {}, [`mint-canvas`]),_h("p", {})]),_h("div", {className:`toc__section`}, [`Config Functions`]),_h("div", {"id":`sidebar`,className:`toc__pages`}, [_h("div", {className:`sidebar`}, [_h("div", {}, [(()=>{const _0 = [];const _1 = EE.rg(this.rh);let _i = -1;for(let rf of _1){_i++;_0.push(_h("div", {"data-id":`version-item`}, [_h("a", {"href":`/${rf[0]}`,className:this.rc(rf[0])}, [rf[0]])]))};return _0})()])])]),_h("div", {className:`toc__section`}, [`Draw Functions`]),_h("div", {"id":`sidebar`,className:`toc__pages`}, [_h("div", {className:`sidebar`}, [_h("div", {}, [(()=>{const _0 = [];const _1 = EE.rg(this.rj);let _i = -1;for(let ri of _1){_i++;_0.push(_h("div", {"data-id":`version-item`}, [_h("a", {"href":`/${ri[0]}`,className:this.rc(ri[0])}, [ri[0]])]))};return _0})()])])])])]),_h("div", {className:`guide-content`}, [_match(EE.rk(this.rh, this.rl),[[_PE(AM,[_PV]),((rm)=>{return rm()})],[null,(()=>{return EF.rn()})]]),_match(EE.rk(this.rj, this.rl),[[_PE(AM,[_PV]),((ro)=>{return ro()})],[null,(()=>{return EF.rn()})]])])])])])}};;const $a=_m(() => _h(DU, {}));const $b=_m(() => _h(BH, {}));const $c=_m(() => _h(BR, {}));const $d=_m(() => _h(BE, {}));const $e=_m(() => _h(BK, {}));const $f=_m(() => _h(AS, {}));const $g=_m(() => _h(DY, {}));const $h=_m(() => _h(DQ, {}));const $i=_m(() => _h(CF, {}));const $j=_m(() => _h(DI, {}));const $k=_m(() => _h(BF, {}));const $l=_m(() => _h(DL, {}));const $m=_m(() => _h(DD, {}));const $n=_m(() => _h(DN, {}));const $o=_m(() => _h(CZ, {}));const $p=_m(() => _h(AZ, {}));const $q=_m(() => _h(CQ, {}));const $r=_m(() => _h(AP, {}));const $s=_m(() => _h(BJ, {}));const $t=_m(() => _h(DR, {}));const $u=_m(() => _h(BA, {}));const $v=_m(() => _h(BT, {}));const $w=_m(() => _h(CL, {}));const $x=_m(() => _h(DO, {}));const $y=_m(() => _h(AR, {}));const $z=_m(() => _h(DG, {}));const $aa=_m(() => _h(DJ, {}));const $ab=_m(() => _h(EA, {}));const $ac=_m(() => _h(CP, {}));const $ad=_m(() => _h(BN, {}));const $ae=_m(() => _h(BI, {}));const $af=_m(() => _h(CB, {}));const $ag=_m(() => _h(AU, {}));const $ah=_m(() => _h(DW, {}));const $ai=_m(() => _h(CI, {}));const $aj=_m(() => _h(DB, {}));const $ak=_m(() => _h(CO, {}));const $al=_m(() => _h(AX, {}));const $am=_m(() => _h(CE, {}));const $an=_m(() => _h(CA, {}));const $ao=_m(() => _h(AY, {}));const $ap=_m(() => _h(DK, {}));const $aq=_m(() => _h(CT, {}));const $ar=_m(() => _h(CR, {}));const $as=_m(() => _h(AQ, {}));const $at=_m(() => _h(CW, {}));const $au=_m(() => _h(EB, {}));const $av=_m(() => _h(CN, {}));const $aw=_m(() => _h(DX, {}));const $ax=_m(() => _h(BS, {}));const $ay=_m(() => _h(CY, {}));const $az=_m(() => _h(CV, {}));const $ba=_m(() => _h(DP, {}));const $bb=_m(() => _h(DS, {}));const $bc=_m(() => _h(DT, {}));const $bd=_m(() => _h(DF, {}));const $be=_m(() => _h(AT, {}));const $bf=_m(() => _h(AW, {}));const $bg=_m(() => _h(DM, {}));const $bh=_m(() => _h(AJ, {}));const $bi=_m(() => _h(DC, {}));const $bj=_m(() => _h(CM, {}));const $bk=_m(() => _h(DH, {}));const EC=new(class extends _S{constructor(){super();this.state={rq:`arc`}}get rq(){return this.state.rq;}adr(ads){return new Promise(((_resolve)=>{this.setState(_u(this.state, new Record({rq:ads})), _resolve)
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

  const Nothing = AN
  const Just = AM
  const Err = FG
  const Ok = FH

  _enums.nothing = AN
  _enums.just = AM
  _enums.err = FG
  _enums.ok = FH

  
  
_program.render(A, {})
})()