!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,n){n(1),n(3),n(4)},function(e,t,n){n(2)()},function(e,t,n){var r,o;o=this,void 0===(r=function(){return o.svg4everybody=function(e){var l,s=Object(e),t=window.top!==window.self;l="polyfill"in s?s.polyfill:/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/.test(navigator.userAgent)||(navigator.userAgent.match(/\bEdge\/12\.(\d+)\b/)||[])[1]<10547||(navigator.userAgent.match(/\bAppleWebKit\/(\d+)\b/)||[])[1]<537||/\bEdge\/.(\d+)\b/.test(navigator.userAgent)&&t;var f={},m=window.requestAnimationFrame||setTimeout,p=document.getElementsByTagName("use"),g=0;l&&function e(){for(var t=0;t<p.length;){var n=p[t],r=n.parentNode,o=y(r),a=n.getAttribute("xlink:href")||n.getAttribute("href");if(!a&&s.attributeName&&(a=n.getAttribute(s.attributeName)),o&&a){if(l)if(!s.validate||s.validate(a,o,n)){r.removeChild(n);var i=a.split("#"),u=i.shift(),c=i.join("#");if(u.length){var d=f[u];d||((d=f[u]=new XMLHttpRequest).open("GET",u),d.send(),d._embeds=[]),d._embeds.push({parent:r,svg:o,id:c}),b(d)}else v(r,o,document.getElementById(c))}else++t,++g}else++t}(!p.length||0<p.length-g)&&m(e,67)}()};function v(e,t,n){if(n){var r=document.createDocumentFragment(),o=!t.hasAttribute("viewBox")&&n.getAttribute("viewBox");o&&t.setAttribute("viewBox",o);for(var a=n.cloneNode(!0);a.childNodes.length;)r.appendChild(a.firstChild);e.appendChild(r)}}function b(r){r.onreadystatechange=function(){if(4===r.readyState){var n=r._cachedDocument;n||((n=r._cachedDocument=document.implementation.createHTMLDocument("")).body.innerHTML=r.responseText,r._cachedTarget={}),r._embeds.splice(0).map(function(e){var t=r._cachedTarget[e.id];t=t||(r._cachedTarget[e.id]=n.getElementById(e.id)),v(e.parent,e.svg,t)})}},r.onreadystatechange()}function y(e){for(var t=e;"svg"!==t.nodeName.toLowerCase()&&(t=t.parentNode););return t}}.apply(t,[]))||(e.exports=r)},function(e,t){var n,r;n=document.querySelector(".main-nav"),r=document.querySelector(".main-nav__toggle"),n&&r&&r.addEventListener("click",function(){n.classList.toggle("main-nav--opened")})},function(e,t,n){if(n(5)(function(){/Safari/.test(navigator.userAgent)&&/Apple Computer/.test(navigator.vendor)&&(document.querySelector("body").classList.remove("webp"),document.querySelector("body").classList.add("no-webp"))}),"loading"in HTMLImageElement.prototype)document.querySelectorAll('img[loading="lazy"]').forEach(function(e){e.removeAttribute("data-src"),e.removeAttribute("data-srcset")});else{var r=document.createElement("script");r.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.2.0/lazysizes.min.js",document.getElementsByTagName("head")[0].appendChild(r)}},function(e,t){e.exports=function(e){(document.attachEvent?"complete"===document.readyState:"loading"!==document.readyState)?e():document.addEventListener("DOMContentLoaded",e)}}]);