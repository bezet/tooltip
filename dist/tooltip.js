!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Tooltip=e():t.Tooltip=e()}(this,function(){return function(t){function e(o){if(i[o])return i[o].exports;var n=i[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};return e.m=t,e.c=i,e.d=function(t,i,o){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,i,o){return i&&t(e.prototype,i),o&&t(e,o),e}}(),n=function(){function t(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.settings={selector:"a",tooltipClass:"tooltip",margin:10,position:"top-center"},Object.keys(i).forEach(function(t){e.settings[t]=i[t]}),this.tooltippedElements=document.querySelectorAll(this.settings.selector),this.createTooltip()}return o(t,[{key:"getDesiredPosition",value:function(t){var e=t.dataset.position.split("-");return e.length<2&&e.push("center"),{side:e[0],alignment:e[1]}}},{key:"resetClass",value:function(){this.tooltip.removeAttribute("class"),this.tooltip.classList.add(this.settings.tooltipClass)}},{key:"setClass",value:function(t){this.tooltip.classList.add(this.settings.tooltipClass+"--"+t)}},{key:"showTooltip",value:function(){var t=this.settings.tooltipClass+"--visible";this.tooltip.classList.contains(t)||this.tooltip.classList.add(t)}},{key:"hideTooltip",value:function(){var t=this.settings.tooltipClass+"--visible";this.tooltip.classList.contains(t)&&(this.tooltip.classList.remove(t),this.tooltip.removeAttribute("style"),this.resetClass())}},{key:"calcCoordinates",value:function(e,i){var o=this.tooltip.getBoundingClientRect(),n=e,s=t.getScroll(),r={x:s.x,y:s.y};return"top"!==i.side&&"bottom"!==i.side||("start"===i.alignment&&(r.x+=n.left),"center"===i.alignment&&(r.x+=n.left+(n.width/2-o.width/2)),"end"===i.alignment&&(r.x+=n.right-o.width)),"top"===i.side&&(r.y+=n.top-o.height-this.settings.margin),"bottom"===i.side&&(r.y+=n.bottom+this.settings.margin),"left"!==i.side&&"right"!==i.side||("start"===i.alignment&&(r.y+=n.top),"center"===i.alignment&&(r.y+=n.top+(n.height/2-o.height/2)),"end"===i.alignment&&(r.y+=n.bottom-o.height)),"left"===i.side&&(r.x+=n.left-this.settings.margin-o.width),"right"===i.side&&(r.x+=n.right+this.settings.margin),r}},{key:"checkVerticalSpace",value:function(t){var e=t.top-this.settings.margin,i=window.innerHeight-(t.bottom+this.settings.margin);return{start:e>this.tooltip.offsetHeight,end:i>this.tooltip.offsetHeight}}},{key:"checkHorizontalSpace",value:function(t){var e=t.left-this.settings.margin,i=window.innerWidth-(t.right+this.settings.margin);return{start:e>this.tooltip.offsetWidth,end:i>this.tooltip.offsetWidth}}},{key:"getPossibleSides",value:function(t){return{vertical:this.checkVerticalSpace(t),horizontal:this.checkHorizontalSpace(t)}}},{key:"getActualPosition",value:function(t,e){var i={top:"start",bottom:"end",left:"start",right:"end"},o={top:"bottom",bottom:"top",left:"right",right:"left",vertical:"horizontal",horizontal:"vertical"},n="top"===t.side||"bottom"===t.side?"vertical":"horizontal";return{side:function t(n,s){var r=e[n];return r[i[s]]?s:r[i[o[s]]]?o[s]:t(o[n],s)}(n,t.side),alignment:function(t,i){var o=e[t],n=void 0;return o.start&&o.end?n=i:o.start||o.end?o.start?o.end||(n="end"):n="start":n="center",n}(o[n],t.alignment)}}},{key:"setTooltipPosition",value:function(t){var e=t.getBoundingClientRect(),i=this.getDesiredPosition(t),o=this.getPossibleSides(e),n=this.getActualPosition(i,o),s=this.calcCoordinates(e,n);this.tooltip.style.left=s.x+"px",this.tooltip.style.top=s.y+"px",this.setClass(n.side+"-"+n.alignment)}},{key:"setTooltipContent",value:function(t){this.tooltip.textContent=t}},{key:"mouseEnterHandler",value:function(t){var e=t.currentTarget;this.setTooltipContent(e.dataset.tooltip),this.setTooltipPosition(e),this.showTooltip()}},{key:"mouseLeaveHandler",value:function(){this.hideTooltip()}},{key:"bindElementEvents",value:function(t){var e=this;t.addEventListener("mouseenter",function(t){return e.mouseEnterHandler(t)}),t.addEventListener("focus",function(t){return e.mouseEnterHandler(t)}),t.addEventListener("mouseleave",function(t){return e.mouseLeaveHandler(t)}),t.addEventListener("blur",function(t){return e.mouseLeaveHandler(t)})}},{key:"createTooltipData",value:function(){var e=this;[].concat(function(t){if(Array.isArray(t)){for(var e=0,i=Array(t.length);e<t.length;e++)i[e]=t[e];return i}return Array.from(t)}(this.tooltippedElements)).forEach(function(i){var o=i,n=t.elHasNonEmptyAttr(o);n("title")&&!n("data-tooltip")&&(o.dataset.tooltip=o.getAttribute("title"),o.setAttribute("title","")),n("data-position")||(o.dataset.position=e.settings.position),n("data-tooltip")&&e.bindElementEvents(o)})}},{key:"createTooltip",value:function(){var t=document.createElement("div");t.classList.add(this.settings.tooltipClass),document.body.appendChild(t),this.tooltip=t,this.createTooltipData()}}],[{key:"elHasNonEmptyAttr",value:function(t){return function(e){return t.hasAttribute(e)&&""!==t.getAttribute(e)}}},{key:"getScroll",value:function(){var t={};return t.x=void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft,t.y=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop,t}}]),t}();e.default=n,t.exports=e.default}])});
//# sourceMappingURL=tooltip.js.map