parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var t,e,n=0,i=document.querySelectorAll(".product__image"),o=document.querySelector(".slider__line"),r=document.querySelectorAll(".slider__dot"),c=20;function d(){t=document.querySelector(".slider").offsetWidth,console.log(i.length),o.style.width=t*i.length,i.forEach(function(e){e.style.width=t+"px"}),window.innerWidth>=600&&(o.style.width=t/2*i.length,i.forEach(function(e){e.style.width=t/2+"px"})),l()}function l(){o.style.transform="translate(-"+(n*t+c*n)+"px)",window.innerWidth>=640&&(o.style.transform="translate(-"+(n*(t/2)+n*c)+"px)")}function s(t){r.forEach(function(t){return t.classList.remove("slider__dot--active")}),r[t].classList.add("slider__dot--active")}function u(){e=setTimeout(function(){++n>=i.length&&(n=0),s(n),l(),u()},2e3)}function a(){for(var t=document.querySelectorAll(".animated"),e=0;e<t.length;e++){var n=window.innerHeight;t[e].getBoundingClientRect().top<n-180&&t[e].classList.add("active")}}window.innerWidth>=640&&(c=30),window.addEventListener("resize",d),d(),u(),r.forEach(function(t,i){t.addEventListener("click",function(){clearTimeout(e),s(n=i),l(),setTimeout(u,1500)})}),window.addEventListener("scroll",function(t){return a()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.8dad1a67.js.map