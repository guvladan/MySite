/*! For license information please see collections-utils-561276bc6035ae6dcd06.chunk.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{509:function(t,e,r){t.exports=r(646)},510:function(t,e,r){"use strict";e.a=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("undefined"===typeof e||isNaN(e))throw Error("maxHeight is required");var n="string"===typeof t?document.querySelectorAll(t):t;if(n){var i=r.character||"&mldr;",a=r.classname||"js-shave",o="boolean"!==typeof r.spaces||r.spaces,s='<span class="js-shave-char">'.concat(i,"</span>");"length"in n||(n=[n]);for(var h=0;h<n.length;h+=1){var c=n[h],u=c.style,f=c.querySelector(".".concat(a)),l=void 0===c.textContent?"innerText":"textContent";f&&(c.removeChild(c.querySelector(".js-shave-char")),c[l]=c[l]);var g=c[l],p=o?g.split(" "):g;if(!(p.length<2)){var v=u.height;u.height="auto";var m=u.maxHeight;if(u.maxHeight="none",c.offsetHeight<=e)u.height=v,u.maxHeight=m;else{for(var d=p.length-1,S=0,x=void 0;S<d;)x=S+d+1>>1,c[l]=o?p.slice(0,x).join(" "):p.slice(0,x),c.insertAdjacentHTML("beforeend",s),c.offsetHeight>e?d=x-1:S=x;c[l]=o?p.slice(0,d).join(" "):p.slice(0,d),c.insertAdjacentHTML("beforeend",s);var w=o?" ".concat(p.slice(d).join(" ")):p.slice(d),y=document.createTextNode(w),z=document.createElement("span");z.classList.add(a),z.style.display="none",z.appendChild(y),c.insertAdjacentElement("beforeend",z),u.height=v,u.maxHeight=m}}}}}},646:function(t,e,r){!function(){var e=function(t,e,r,n){var i={};t=t||[],i.gramSizeLower=r||2,i.gramSizeUpper=n||3,i.useLevenshtein="boolean"!==typeof e||e,i.exactSet={},i.matchDict={},i.items={};var a=function(t,e){if(null===t&&null===e)throw"Trying to compare two null values";if(null===t||null===e)return 0;var r=function(t,e){for(var r,n,i=[],a=0;a<=e.length;a++)for(var o=0;o<=t.length;o++)n=a&&o?t.charAt(o-1)===e.charAt(a-1)?r:Math.min(i[o],i[o-1],r)+1:a+o,r=i[o],i[o]=n;return i.pop()}(t=String(t),e=String(e));return t.length>e.length?1-r/t.length:1-r/e.length},o=/[^a-zA-Z0-9\u00C0-\u00FF, ]+/g,s=function(t,e){for(var r={},n=function(t,e){e=e||2;var r="-"+t.toLowerCase().replace(o,"")+"-",n=e-r.length,i=[];if(n>0)for(var a=0;a<n;++a)r+="-";for(a=0;a<r.length-e+1;++a)i.push(r.slice(a,a+e));return i}(t,e=e||2),i=0;i<n.length;++i)n[i]in r?r[n[i]]+=1:r[n[i]]=1;return r};i.get=function(t,e,r){void 0===r&&(r=.33);var n=this._get(t,r);return n||"undefined"===typeof e?n:e},i._get=function(t,e){var r=this._normalizeStr(t),n=this.exactSet[r];if(n)return[[1,n]];for(var i=[],a=this.gramSizeUpper;a>=this.gramSizeLower;--a)if((i=this.__get(t,a,e))&&i.length>0)return i;return null},i.__get=function(t,e,r){var n,i,o,h,c=this._normalizeStr(t),u={},f=s(c,e),l=this.items[e],g=0;for(n in f)if(i=f[n],g+=Math.pow(i,2),n in this.matchDict)for(y=0;y<this.matchDict[n].length;++y)o=this.matchDict[n][y][0],h=this.matchDict[n][y][1],o in u?u[o]+=i*h:u[o]=i*h;if(function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}(u))return null;var p,v=Math.sqrt(g),m=[];for(var d in u)p=u[d],m.push([p/(v*l[d][0]),l[d][1]]);var S=function(t,e){return t[0]<e[0]?1:t[0]>e[0]?-1:0};if(m.sort(S),this.useLevenshtein){for(var x=[],w=Math.min(50,m.length),y=0;y<w;++y)x.push([a(m[y][1],c),m[y][1]]);(m=x).sort(S)}x=[];return m.forEach(function(t){t[0]>=r&&x.push([t[0],this.exactSet[t[1]]])}.bind(this)),x},i.add=function(t){if(this._normalizeStr(t)in this.exactSet)return!1;for(var e=this.gramSizeLower;e<this.gramSizeUpper+1;++e)this._add(t,e)},i._add=function(t,e){var r=this._normalizeStr(t),n=this.items[e]||[],i=n.length;n.push(0);var a,o,h=s(r,e),c=0;for(a in h)o=h[a],c+=Math.pow(o,2),a in this.matchDict?this.matchDict[a].push([i,o]):this.matchDict[a]=[[i,o]];var u=Math.sqrt(c);n[i]=[u,r],this.items[e]=n,this.exactSet[r]=t},i._normalizeStr=function(t){if("[object String]"!==Object.prototype.toString.call(t))throw"Must use a string as argument to FuzzySet functions";return t.toLowerCase()},i.length=function(){var t,e=0;for(t in this.exactSet)this.exactSet.hasOwnProperty(t)&&(e+=1);return e},i.isEmpty=function(){for(var t in this.exactSet)if(this.exactSet.hasOwnProperty(t))return!1;return!0},i.values=function(){var t,e=[];for(t in this.exactSet)this.exactSet.hasOwnProperty(t)&&e.push(this.exactSet[t]);return e};for(var h=i.gramSizeLower;h<i.gramSizeUpper+1;++h)i.items[h]=[];for(h=0;h<t.length;++h)i.add(t[h]);return i},r=this;t.exports?(t.exports=e,r&&(r.FuzzySet=e)):r.FuzzySet=e}()}}]);
//# sourceMappingURL=collections-utils-561276bc6035ae6dcd06.chunk.js.map