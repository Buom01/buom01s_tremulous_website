!function(e){function t(t){for(var n,r,o=t[0],u=t[1],l=0,c=[];l<o.length;l++)r=o[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(a&&a(t);c.length;)c.shift()()}function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var r={},o={0:0},i={0:0};n.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{2:1,3:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var i=({2:"route-about",3:"route-home"}[e]||e)+".chunk."+{2:"082a0",3:"a2b14"}[e]+".css",u=n.p+i,l=document.getElementsByTagName("link"),c=0;c<l.length;c++){var a=(_=l[c]).getAttribute("data-href")||_.getAttribute("href");if("stylesheet"===_.rel&&(a===i||a===u))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){var _;if((a=(_=s[c]).getAttribute("data-href"))===i||a===u)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||u,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete o[e],f.parentNode.removeChild(f),r(i)},f.href=u,document.getElementsByTagName("head")[0].appendChild(f)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=u);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.src=function(e){return n.p+""+({2:"route-about",3:"route-home"}[e]||e)+".chunk."+{2:"9e1ea",3:"c0f2d"}[e]+".esm.js"}(e);var a=new Error;l=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:c})}),12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},n.m=e,n.c=r,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/tremulous_fork/",n.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var a=l;n(n.s="mdyV")}({"+E3a":function(){},"/A0j":function(){},"1UZS":function(){},FaUl:function(){},QfWi:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e,t,n){var r,o=/(?:\?([^#]*))?(#.*)?$/,i=e.match(o),u={};if(i&&i[1])for(var c=i[1].split("&"),a=0;a<c.length;a++){var s=c[a].split("=");u[decodeURIComponent(s[0])]=decodeURIComponent(s.slice(1).join("="))}e=l(e.replace(o,"")),t=l(t||"");for(var _=Math.max(e.length,t.length),f=0;f<_;f++)if(t[f]&&":"===t[f].charAt(0)){var p=t[f].replace(/(^:|[+*?]+$)/g,""),d=(t[f].match(/[+*?]+$/)||m)[0]||"",h=~d.indexOf("+"),y=~d.indexOf("*"),v=e[f]||"";if(!v&&!y&&(d.indexOf("?")<0||h)){r=!1;break}if(u[p]=decodeURIComponent(v),h||y){u[p]=e.slice(f).map(decodeURIComponent).join("/");break}}else if(t[f]!==e[f]){r=!1;break}return(!0===n.default||!1!==r)&&u}function i(e,t){return e.rank<t.rank?1:e.rank>t.rank?-1:e.index-t.index}function u(e,t){return e.index=t,e.rank=function(e){return e.props.default?0:(t=e.props.path,l(t).map(c).join(""));var t}(e),e.props}function l(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function c(e){return":"==e.charAt(0)?1+"*+?".indexOf(e.charAt(e.length-1))||4:5}function a(){var e;return""+((e=g&&g.location?g.location:g&&g.getCurrentLocation?g.getCurrentLocation():"undefined"!=typeof location?location:C).pathname||"")+(e.search||"")}function s(e,t){return void 0===t&&(t=!1),"string"!=typeof e&&e.url&&(t=e.replace,e=e.url),function(e){for(var t=b.length;t--;)if(b[t].canRoute(e))return!0;return!1}(e)&&function(e,t){void 0===t&&(t="push"),g&&g[t]?g[t](e):"undefined"!=typeof history&&history[t+"State"]&&history[t+"State"](null,null,e)}(e,t?"replace":"push"),_(e)}function _(e){for(var t=!1,n=0;n<b.length;n++)!0===b[n].routeTo(e)&&(t=!0);for(var r=k.length;r--;)k[r](e);return t}function f(e){if(e&&e.getAttribute){var t=e.getAttribute("href"),n=e.getAttribute("target");if(t&&t.match(/^\//g)&&(!n||n.match(/^_?self$/i)))return s(t)}}function p(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button))return f(e.currentTarget||e.target||this),d(e)}function d(e){return e&&(e.stopImmediatePropagation&&e.stopImmediatePropagation(),e.stopPropagation&&e.stopPropagation(),e.preventDefault()),!1}function h(e){if(!(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||0!==e.button)){var t=e.target;do{if("A"===String(t.nodeName).toUpperCase()&&t.getAttribute("href")){if(t.hasAttribute("native"))return;if(f(t))return d(e)}}while(t=t.parentNode)}}function y(e){function t(){v.Component.call(this),n||(this.componentWillMount=()=>{e(e=>{n=e&&e.default||e,this.setState({})})},this.shouldComponentUpdate=()=>null!=n),this.render=e=>{if(n)return Object(v.h)(n,e);const t=function e(t,n){if("string"==typeof t.type)return null;const r=t.__;if(!r)return;let o=r.__k;if(o){Array.isArray(o)||(o=[o]);let n=o.indexOf(t);-1===n&&(n=o.length);for(let t=n;t--;){const n=o[t],r=n&&n.__e||e(n,!0);if(r)return r}}return n?void 0:e(r)}(this.__v),r=t&&t.nextSibling||(this.__P||this._parentDom).firstChild;return r&&Object(v.h)(r.localName,{dangerouslySetInnerHTML:S})}}let n;return t.preload=e,(t.prototype=new v.Component).constructor=t,t}n.r(t);n("1UZS"),n("q22g"),n("/A0j"),n("V322"),n("+E3a"),n("skV7"),n("FaUl");var v=n("hosL"),m={},g=null,b=[],k=[],C={},x=!1,w=function(e){function t(t){e.call(this,t),t.history&&(g=t.history),this.state={url:t.url||a()},x||("function"==typeof addEventListener&&(g||addEventListener("popstate",(function(){_(a())})),addEventListener("click",h)),x=!0)}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t.prototype.shouldComponentUpdate=function(e){return!0!==e.static||(e.url!==this.props.url||e.onChange!==this.props.onChange)},t.prototype.canRoute=function(e){var t=Object(v.toChildArray)(this.props.children);return this.getMatchingChildren(t,e,!1).length>0},t.prototype.routeTo=function(e){this.setState({url:e});var t=this.canRoute(e);return this.updating||this.forceUpdate(),t},t.prototype.componentWillMount=function(){b.push(this),this.updating=!0},t.prototype.componentDidMount=function(){var e=this;g&&(this.unlisten=g.listen((function(t){e.routeTo(""+(t.pathname||"")+(t.search||""))}))),this.updating=!1},t.prototype.componentWillUnmount=function(){"function"==typeof this.unlisten&&this.unlisten(),b.splice(b.indexOf(this),1)},t.prototype.componentWillUpdate=function(){this.updating=!0},t.prototype.componentDidUpdate=function(){this.updating=!1},t.prototype.getMatchingChildren=function(e,t,n){return e.filter(u).sort(i).map((function(e){var i=o(t,e.props.path,e.props);if(i){if(!1!==n){var u={url:t,matches:i};return r(u,i),delete u.ref,delete u.key,Object(v.cloneElement)(e,u)}return e}})).filter(Boolean)},t.prototype.render=function(e,t){var n=e.children,r=e.onChange,o=t.url,i=this.getMatchingChildren(Object(v.toChildArray)(n),o,!0),u=i[0]||null,l=this.previousUrl;return o!==l&&(this.previousUrl=o,"function"==typeof r&&r({router:this,url:o,previous:l,active:i,current:u})),u},t}(v.Component);w.subscribers=k,w.getCurrentUrl=a,w.route=s,w.Router=w,w.Route=function(e){return Object(v.createElement)(e.component,e)},w.Link=function(e){return Object(v.createElement)("a",r({onClick:p},e))},w.exec=o;const S={};var A=y((function(e){n.e(3).then(function(){var t=n("+1Jk");"function"==typeof e&&e(t)}.bind(null,n)).catch(n.oe)})),E=y((function(e){n.e(2).then(function(){var t=n("ZbNB");"function"==typeof e&&e(t)}.bind(null,n)).catch(n.oe)}));t.default=class extends v.Component{constructor(...e){super(...e),this.handleRoute=()=>{}}render(){return Object(v.h)("div",{id:"app"},Object(v.h)(w,{onChange:this.handleRoute},Object(v.h)(A,{path:"/tremulous_fork/"}),Object(v.h)(E,{path:"/tremulous_fork/about"})))}}},V322:function(){},hosL:function(e,t,n){"use strict";function r(e,t){for(var n in t)e[n]=t[n];return e}function o(e){var t=e.parentNode;t&&t.removeChild(e)}function i(e,t,n){var r,o=arguments,i={};for(r in t)"key"!==r&&"ref"!==r&&(i[r]=t[r]);if(arguments.length>3)for(n=[n],r=3;r<arguments.length;r++)n.push(o[r]);if(null!=n&&(i.children=n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===i[r]&&(i[r]=e.defaultProps[r]);return u(e,i,t&&t.key,t&&t.ref,null)}function u(e,t,n,r,o){var i={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:o};return null==o&&(i.__v=i),j.vnode&&j.vnode(i),i}function l(){return{current:null}}function c(e){return e.children}function a(e,t){this.props=e,this.context=t}function s(e,t){if(null==t)return e.__?s(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?s(e):null}function _(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return _(e)}}function f(e){(!e.__d&&(e.__d=!0)&&T.push(e)&&!p.__r++||D!==j.debounceRendering)&&((D=j.debounceRendering)||N)(p)}function p(){for(var e;p.__r=T.length;)e=T.sort((function(e,t){return e.__v.__b-t.__v.__b})),T=[],e.some((function(e){var t,n,o,i,u,l,c;e.__d&&(l=(u=(t=e).__v).__e,(c=t.__P)&&(n=[],(o=r({},u)).__v=o,i=k(c,u,o,t.__n,void 0!==c.ownerSVGElement,null,n,null==l?s(u):l),C(n,u),i!=l&&_(u)))}))}function d(e,t,n,r,i,l,a,_,f,p){var d,h,v,m,g,b,C,x=r&&r.__k||I,A=x.length;for(f==W&&(f=null!=a?a[0]:A?s(r,0):null),n.__k=[],d=0;d<t.length;d++)if(null!=(m=n.__k[d]=null==(m=t[d])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m?u(null,m,null,null,m):Array.isArray(m)?u(c,{children:m},null,null,null):null!=m.__e||null!=m.__c?u(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(v=x[d])||v&&m.key==v.key&&m.type===v.type)x[d]=void 0;else for(h=0;h<A;h++){if((v=x[h])&&m.key==v.key&&m.type===v.type){x[h]=void 0;break}v=null}g=k(e,m,v=v||W,i,l,a,_,f,p),(h=m.ref)&&v.ref!=h&&(C||(C=[]),v.ref&&C.push(v.ref,null,m),C.push(h,m.__c||g,m)),null!=g?(null==b&&(b=g),f=y(e,m,v,x,a,g,f),p||"option"!=n.type?"function"==typeof n.type&&(n.__d=f):e.value=""):f&&v.__e==f&&f.parentNode!=e&&(f=s(v))}if(n.__e=b,null!=a&&"function"!=typeof n.type)for(d=a.length;d--;)null!=a[d]&&o(a[d]);for(d=A;d--;)null!=x[d]&&S(x[d],x[d]);if(C)for(d=0;d<C.length;d++)w(C[d],C[++d],C[++d])}function h(e){return null==e||"boolean"==typeof e?[]:Array.isArray(e)?I.concat.apply([],e.map(h)):[e]}function y(e,t,n,r,o,i,u){var l,c,a;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(o==n||i!=u||null==i.parentNode)e:if(null==u||u.parentNode!==e)e.appendChild(i),l=null;else{for(c=u,a=0;(c=c.nextSibling)&&a<r.length;a+=2)if(c==i)break e;e.insertBefore(i,u),l=u}return void 0!==l?l:i.nextSibling}function v(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]="number"==typeof n&&!1===F.test(t)?n+"px":null==n?"":n}function m(e,t,n,r,o){var i,u,l,c,a;if(o?"className"===t&&(t="class"):"class"===t&&(t="className"),"style"===t)if(i=e.style,"string"==typeof n)i.cssText=n;else{if("string"==typeof r&&(i.cssText="",r=null),r)for(c in r)n&&c in n||v(i,c,"");if(n)for(a in n)r&&n[a]===r[a]||v(i,a,n[a])}else"o"===t[0]&&"n"===t[1]?(u=t!==(t=t.replace(/Capture$/,"")),l=t.toLowerCase(),t=(l in e?l:t).slice(2),n?(r||e.addEventListener(t,g,u),(e.l||(e.l={}))[t]=n):e.removeEventListener(t,g,u)):"list"!==t&&"tagName"!==t&&"form"!==t&&"type"!==t&&"size"!==t&&"download"!==t&&!o&&t in e?e[t]=null==n?"":n:"function"!=typeof n&&"dangerouslySetInnerHTML"!==t&&(t!==(t=t.replace(/^xlink:?/,""))?null==n||!1===n?e.removeAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",t.toLowerCase(),n):null==n||!1===n&&!/^ar/.test(t)?e.removeAttribute(t):e.setAttribute(t,n))}function g(e){this.l[e.type](j.event?j.event(e):e)}function b(e,t,n){var r,o;for(r=0;r<e.__k.length;r++)(o=e.__k[r])&&(o.__=e,o.__e&&("function"==typeof o.type&&o.__k.length>1&&b(o,t,n),t=y(n,o,o,e.__k,null,o.__e,t),"function"==typeof e.type&&(e.__d=t)))}function k(e,t,n,o,i,u,l,s,_){var f,p,h,y,v,m,g,k,C,w,S,E=t.type;if(void 0!==t.constructor)return null;(f=j.__b)&&f(t);try{e:if("function"==typeof E){if(k=t.props,C=(f=E.contextType)&&o[f.__c],w=f?C?C.props.value:f.__:o,n.__c?g=(p=t.__c=n.__c).__=p.__E:("prototype"in E&&E.prototype.render?t.__c=p=new E(k,w):(t.__c=p=new a(k,w),p.constructor=E,p.render=A),C&&C.sub(p),p.props=k,p.state||(p.state={}),p.context=w,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=E.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,E.getDerivedStateFromProps(k,p.__s))),y=p.props,v=p.state,h)null==E.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==E.getDerivedStateFromProps&&k!==y&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,w),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,w)||t.__v===n.__v){p.props=k,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,p.__h.length&&l.push(p),b(t,s,e);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,w),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(y,v,m)}))}p.context=w,p.props=k,p.state=p.__s,(f=j.__r)&&f(t),p.__d=!1,p.__v=t,p.__P=e,f=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(y,v)),S=null!=f&&f.type==c&&null==f.key?f.props.children:f,d(e,Array.isArray(S)?S:[S],t,n,o,i,u,l,s,_),p.base=t.__e,p.__h.length&&l.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==u&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=x(n.__e,t,n,o,i,u,l,_);(f=j.diffed)&&f(t)}catch(e){t.__v=null,j.__e(e,t,n)}return t.__e}function C(e,t){j.__c&&j.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){j.__e(e,t.__v)}}))}function x(e,t,n,r,o,i,u,l){var c,a,s,_,f,p=n.props,h=t.props;if(o="svg"===t.type||o,null!=i)for(c=0;c<i.length;c++)if(null!=(a=i[c])&&((null===t.type?3===a.nodeType:a.localName===t.type)||e==a)){e=a,i[c]=null;break}if(null==e){if(null===t.type)return document.createTextNode(h);e=o?document.createElementNS("http://www.w3.org/2000/svg",t.type):document.createElement(t.type,h.is&&{is:h.is}),i=null,l=!1}if(null===t.type)p!==h&&e.data!==h&&(e.data=h);else{if(null!=i&&(i=I.slice.call(e.childNodes)),s=(p=n.props||W).dangerouslySetInnerHTML,_=h.dangerouslySetInnerHTML,!l){if(null!=i)for(p={},f=0;f<e.attributes.length;f++)p[e.attributes[f].name]=e.attributes[f].value;(_||s)&&(_&&s&&_.__html==s.__html||(e.innerHTML=_&&_.__html||""))}(function(e,t,n,r,o){var i;for(i in n)"children"===i||"key"===i||i in t||m(e,i,null,n[i],r);for(i in t)o&&"function"!=typeof t[i]||"children"===i||"key"===i||"value"===i||"checked"===i||n[i]===t[i]||m(e,i,t[i],n[i],r)})(e,h,p,o,l),_?t.__k=[]:(c=t.props.children,d(e,Array.isArray(c)?c:[c],t,n,r,"foreignObject"!==t.type&&o,i,u,W,l)),l||("value"in h&&void 0!==(c=h.value)&&c!==e.value&&m(e,"value",c,p.value,!1),"checked"in h&&void 0!==(c=h.checked)&&c!==e.checked&&m(e,"checked",c,p.checked,!1))}return e}function w(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){j.__e(e,n)}}function S(e,t,n){var r,i,u;if(j.unmount&&j.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||w(r,null,t)),n||"function"==typeof e.type||(n=null!=(i=e.__e)),e.__e=e.__d=void 0,null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){j.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(u=0;u<r.length;u++)r[u]&&S(r[u],t,n);null!=i&&o(i)}function A(e,t,n){return this.constructor(e,n)}function E(e,t,n){var r,o,u;j.__&&j.__(e,t),o=(r=n===M)?null:n&&n.__k||t.__k,e=i(c,null,[e]),u=[],k(t,(r?t:n||t).__k=e,o||W,W,void 0!==t.ownerSVGElement,n&&!r?[n]:o?null:t.childNodes.length?I.slice.call(t.childNodes):null,u,n||W,r),C(u,e)}function O(e,t){E(e,t,M)}function P(e,t){var n,o;for(o in t=r(r({},e.props),t),arguments.length>2&&(t.children=I.slice.call(arguments,2)),n={},t)"key"!==o&&"ref"!==o&&(n[o]=t[o]);return u(e.type,n,t.key||e.key,t.ref||e.ref,null)}function U(e){var t={},n={__c:"__cC"+R++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var r,o=this;return this.getChildContext||(r=[],this.getChildContext=function(){return t[n.__c]=o,t},this.shouldComponentUpdate=function(e){o.props.value!==e.value&&r.some((function(t){t.context=e.value,f(t)}))},this.sub=function(e){r.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){r.splice(r.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Consumer.contextType=n,n.Provider.__=n,n}n.r(t),n.d(t,"render",(function(){return E})),n.d(t,"hydrate",(function(){return O})),n.d(t,"createElement",(function(){return i})),n.d(t,"h",(function(){return i})),n.d(t,"Fragment",(function(){return c})),n.d(t,"createRef",(function(){return l})),n.d(t,"isValidElement",(function(){return L})),n.d(t,"Component",(function(){return a})),n.d(t,"cloneElement",(function(){return P})),n.d(t,"createContext",(function(){return U})),n.d(t,"toChildArray",(function(){return h})),n.d(t,"__u",(function(){return S})),n.d(t,"options",(function(){return j}));var j,L,T,N,D,M,R,W={},I=[],F=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;j={__e:function(e,t){for(var n,r;t=t.__;)if((n=t.__c)&&!n.__)try{if(n.constructor&&null!=n.constructor.getDerivedStateFromError&&(r=!0,n.setState(n.constructor.getDerivedStateFromError(e))),null!=n.componentDidCatch&&(r=!0,n.componentDidCatch(e)),r)return f(n.__E=n)}catch(t){e=t}throw e}},L=function(e){return null!=e&&void 0===e.constructor},a.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof e&&(e=e(n,this.props)),e&&r(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),f(this))},a.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},a.prototype.render=c,T=[],N="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,p.__r=0,M=W,R=0},mdyV:function(e,t,n){"use strict";n.r(t);var r=n("hosL");const{h:o,render:i,hydrate:u}=r,l=e=>e&&e.default?e.default:e,c=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(n.p+"sw-esm.js"),"function"==typeof l(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild;0,(()=>{let t=l(n("QfWi")),r={};const a=document.querySelector('[type="__PREACT_CLI_DATA__"]');a&&(r=JSON.parse(decodeURI(a.innerHTML)).preRenderData||r);const s={preRenderData:r},_=r.url?c(r.url):"",f=u&&_===c(location.pathname);e=(f?u:i)(o(t,{CLI_DATA:s}),document.body,e)})()}},q22g:function(){},skV7:function(){}});
//# sourceMappingURL=bundle.e8694.esm.js.map