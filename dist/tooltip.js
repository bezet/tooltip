(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Tooltip"] = factory();
	else
		root["Tooltip"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _tooltip = __webpack_require__(1);\n\nvar _tooltip2 = _interopRequireDefault(_tooltip);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _tooltip2.default;\nmodule.exports = exports['default'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvb2x0aXAgZnJvbSAnLi9saWIvdG9vbHRpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IFRvb2x0aXA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Tooltip = function () {\n  function Tooltip() {\n    var _this = this;\n\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Tooltip);\n\n    this.settings = {\n      selector: 'a',\n      tooltipClass: 'tooltip',\n      margin: 10,\n      position: 'top-center'\n    };\n\n    Object.keys(options).forEach(function (option) {\n      _this.settings[option] = options[option];\n    });\n\n    this.tooltippedElements = document.querySelectorAll(this.settings.selector);\n\n    this.createTooltip();\n  }\n\n  _createClass(Tooltip, [{\n    key: 'getDesiredPosition',\n    value: function getDesiredPosition(element) {\n      var posSplit = element.dataset.position.split('-');\n\n      // for centered position only one alignment might be provided,\n      // eg. top === top-center\n      if (posSplit.length < 2) {\n        posSplit.push('center');\n      }\n\n      return {\n        side: posSplit[0],\n        alignment: posSplit[1]\n      };\n    }\n  }, {\n    key: 'resetClass',\n    value: function resetClass() {\n      this.tooltip.removeAttribute('class');\n      this.tooltip.classList.add(this.settings.tooltipClass);\n    }\n  }, {\n    key: 'setClass',\n    value: function setClass(tooltipPosition) {\n      this.tooltip.classList.add(this.settings.tooltipClass + '--' + tooltipPosition);\n    }\n  }, {\n    key: 'setTooltipVisibility',\n    value: function setTooltipVisibility() {\n      var visibilityClass = this.settings.tooltipClass + '--visible';\n\n      if (!this.tooltip.classList.contains(visibilityClass)) {\n        this.tooltip.classList.add(visibilityClass);\n      } else {\n        this.tooltip.classList.remove(visibilityClass);\n      }\n\n      if (!this.tooltip.classList.contains(visibilityClass)) {\n        this.tooltip.removeAttribute('style');\n        this.resetClass();\n      }\n    }\n  }, {\n    key: 'calcPosition',\n    value: function calcPosition(elementRect, side, alignment) {\n      var tooltipBounding = this.tooltip.getBoundingClientRect();\n      var elementBounding = elementRect;\n      var pageScroll = Tooltip.getScroll();\n\n      var position = {\n        x: pageScroll.x,\n        y: pageScroll.y\n      };\n\n      // top & bottom\n\n      if (side === 'top' || side === 'bottom') {\n        if (alignment === 'start') {\n          position.x += elementBounding.left;\n        }\n\n        if (alignment === 'center') {\n          position.x += elementBounding.left + (elementBounding.width / 2 - tooltipBounding.width / 2);\n        }\n\n        if (alignment === 'end') {\n          position.x += elementBounding.right - tooltipBounding.width;\n        }\n      }\n\n      if (side === 'top') {\n        position.y += elementBounding.top - tooltipBounding.height - this.settings.margin;\n      }\n\n      if (side === 'bottom') {\n        position.y += elementBounding.bottom + this.settings.margin;\n      }\n\n      // left & right\n\n      if (side === 'left' || side === 'right') {\n        if (alignment === 'start') {\n          position.y += elementBounding.top;\n        }\n\n        if (alignment === 'center') {\n          position.y += elementBounding.top + (elementBounding.height / 2 - tooltipBounding.height / 2);\n        }\n\n        if (alignment === 'end') {\n          position.y += elementBounding.bottom - tooltipBounding.height;\n        }\n      }\n\n      if (side === 'left') {\n        position.x += elementBounding.left - this.settings.margin - tooltipBounding.width;\n      }\n\n      if (side === 'right') {\n        position.x += elementBounding.right + this.settings.margin;\n      }\n\n      return position;\n    }\n  }, {\n    key: 'checkVerticalSpace',\n    value: function checkVerticalSpace(elementBounding) {\n      var topSpace = elementBounding.top - this.settings.margin;\n      var bottomSpace = window.innerHeight - (elementBounding.bottom + this.settings.margin);\n\n      return {\n        start: topSpace > this.tooltip.offsetHeight,\n        end: bottomSpace > this.tooltip.offsetHeight\n      };\n    }\n  }, {\n    key: 'checkHorizontalSpace',\n    value: function checkHorizontalSpace(elementBounding) {\n      var leftSpace = elementBounding.left - this.settings.margin;\n      var rightSpace = window.innerWidth - (elementBounding.right + this.settings.margin);\n\n      return {\n        start: leftSpace > this.tooltip.offsetWidth,\n        end: rightSpace > this.tooltip.offsetWidth\n      };\n    }\n\n    // check space on sides in the viewport\n\n  }, {\n    key: 'getPossibleSides',\n    value: function getPossibleSides(elementBounding) {\n      // return Object.assign(\n      //   this.checkVerticalSpace(elementBounding),\n      //   this.checkHorizontalSpace(elementBounding)\n      // );\n\n      return {\n        vertical: this.checkVerticalSpace(elementBounding),\n        horizontal: this.checkHorizontalSpace(elementBounding)\n      };\n    }\n\n    // compare desired & possible side space;\n    // if desired is not possible, return best possible position\n\n  }, {\n    key: 'getActualSide',\n    value: function getActualSide(desiredSide, possibleSides) {\n      var side = desiredSide;\n\n      return side;\n    }\n  }, {\n    key: 'setTooltipPosition',\n    value: function setTooltipPosition(element) {\n      var elementRect = element.getBoundingClientRect();\n      var desired = this.getDesiredPosition(element);\n      var possibleSides = this.getPossibleSides(elementRect);\n      var side = this.getActualSide(desired.side, possibleSides);\n      var position = this.calcPosition(elementRect, side, desired.alignment);\n\n      this.tooltip.style.left = position.x + 'px';\n      this.tooltip.style.top = position.y + 'px';\n\n      this.setClass(side + '-' + desired.alignment);\n    }\n  }, {\n    key: 'setTooltipContent',\n    value: function setTooltipContent(content) {\n      this.tooltip.textContent = content;\n    }\n  }, {\n    key: 'mouseEnterHandler',\n    value: function mouseEnterHandler(event) {\n      var element = event.currentTarget;\n\n      this.setTooltipContent(element.dataset.tooltip);\n      this.setTooltipPosition(element);\n      this.setTooltipVisibility();\n    }\n  }, {\n    key: 'mouseLeaveHandler',\n    value: function mouseLeaveHandler() {\n      this.setTooltipVisibility();\n    }\n  }, {\n    key: 'bindElementEvents',\n    value: function bindElementEvents(element) {\n      var _this2 = this;\n\n      element.addEventListener('mouseenter', function (event) {\n        return _this2.mouseEnterHandler(event);\n      });\n      element.addEventListener('focus', function (event) {\n        return _this2.mouseEnterHandler(event);\n      });\n\n      element.addEventListener('mouseleave', function (event) {\n        return _this2.mouseLeaveHandler(event);\n      });\n      element.addEventListener('blur', function (event) {\n        return _this2.mouseLeaveHandler(event);\n      });\n    }\n  }, {\n    key: 'createTooltipData',\n    value: function createTooltipData() {\n      var _this3 = this;\n\n      [].concat(_toConsumableArray(this.tooltippedElements)).forEach(function (element) {\n        var elementHas = Tooltip.elHasNonEmptyAttr(element);\n\n        if (elementHas('title') && !elementHas('data-tooltip')) {\n          element.dataset.tooltip = element.getAttribute('title');\n          element.setAttribute('title', '');\n        }\n\n        if (!elementHas('data-position')) {\n          element.dataset.position = _this3.settings.position;\n        }\n\n        if (elementHas('data-tooltip')) {\n          _this3.bindElementEvents(element);\n        }\n      });\n    }\n  }, {\n    key: 'createTooltip',\n    value: function createTooltip() {\n      var tooltip = document.createElement('div');\n      tooltip.classList.add(this.settings.tooltipClass);\n      document.body.appendChild(tooltip);\n\n      this.tooltip = tooltip;\n      this.createTooltipData();\n    }\n  }], [{\n    key: 'elHasNonEmptyAttr',\n    value: function elHasNonEmptyAttr(el) {\n      return function (attr) {\n        return el.hasAttribute(attr) && el.getAttribute(attr) !== '';\n      };\n    }\n  }, {\n    key: 'getScroll',\n    value: function getScroll() {\n      var scroll = {};\n\n      scroll.x = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;\n\n      scroll.y = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;\n\n      return scroll;\n    }\n  }]);\n\n  return Tooltip;\n}();\n\nexports.default = Tooltip;\nmodule.exports = exports['default'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Rvb2x0aXAuanM/ZGUwMSJdLCJuYW1lcyI6WyJUb29sdGlwIiwib3B0aW9ucyIsInNldHRpbmdzIiwic2VsZWN0b3IiLCJ0b29sdGlwQ2xhc3MiLCJtYXJnaW4iLCJwb3NpdGlvbiIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwib3B0aW9uIiwidG9vbHRpcHBlZEVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlVG9vbHRpcCIsImVsZW1lbnQiLCJwb3NTcGxpdCIsImRhdGFzZXQiLCJzcGxpdCIsImxlbmd0aCIsInB1c2giLCJzaWRlIiwiYWxpZ25tZW50IiwidG9vbHRpcCIsInJlbW92ZUF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsInRvb2x0aXBQb3NpdGlvbiIsInZpc2liaWxpdHlDbGFzcyIsImNvbnRhaW5zIiwicmVtb3ZlIiwicmVzZXRDbGFzcyIsImVsZW1lbnRSZWN0IiwidG9vbHRpcEJvdW5kaW5nIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZWxlbWVudEJvdW5kaW5nIiwicGFnZVNjcm9sbCIsImdldFNjcm9sbCIsIngiLCJ5IiwibGVmdCIsIndpZHRoIiwicmlnaHQiLCJ0b3AiLCJoZWlnaHQiLCJib3R0b20iLCJ0b3BTcGFjZSIsImJvdHRvbVNwYWNlIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJzdGFydCIsIm9mZnNldEhlaWdodCIsImVuZCIsImxlZnRTcGFjZSIsInJpZ2h0U3BhY2UiLCJpbm5lcldpZHRoIiwib2Zmc2V0V2lkdGgiLCJ2ZXJ0aWNhbCIsImNoZWNrVmVydGljYWxTcGFjZSIsImhvcml6b250YWwiLCJjaGVja0hvcml6b250YWxTcGFjZSIsImRlc2lyZWRTaWRlIiwicG9zc2libGVTaWRlcyIsImRlc2lyZWQiLCJnZXREZXNpcmVkUG9zaXRpb24iLCJnZXRQb3NzaWJsZVNpZGVzIiwiZ2V0QWN0dWFsU2lkZSIsImNhbGNQb3NpdGlvbiIsInN0eWxlIiwic2V0Q2xhc3MiLCJjb250ZW50IiwidGV4dENvbnRlbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJzZXRUb29sdGlwQ29udGVudCIsInNldFRvb2x0aXBQb3NpdGlvbiIsInNldFRvb2x0aXBWaXNpYmlsaXR5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlRW50ZXJIYW5kbGVyIiwibW91c2VMZWF2ZUhhbmRsZXIiLCJlbGVtZW50SGFzIiwiZWxIYXNOb25FbXB0eUF0dHIiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJiaW5kRWxlbWVudEV2ZW50cyIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUb29sdGlwRGF0YSIsImVsIiwiYXR0ciIsImhhc0F0dHJpYnV0ZSIsInNjcm9sbCIsInBhZ2VYT2Zmc2V0IiwidW5kZWZpbmVkIiwiZG9jdW1lbnRFbGVtZW50IiwicGFyZW50Tm9kZSIsInNjcm9sbExlZnQiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLE87QUFDSixxQkFBMEI7QUFBQTs7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3hCLFNBQUtDLFFBQUwsR0FBZ0I7QUFDZEMsZ0JBQVUsR0FESTtBQUVkQyxvQkFBYyxTQUZBO0FBR2RDLGNBQVEsRUFITTtBQUlkQyxnQkFBVTtBQUpJLEtBQWhCOztBQU9BQyxXQUFPQyxJQUFQLENBQVlQLE9BQVosRUFBcUJRLE9BQXJCLENBQTZCLFVBQUNDLE1BQUQsRUFBWTtBQUN2QyxZQUFLUixRQUFMLENBQWNRLE1BQWQsSUFBd0JULFFBQVFTLE1BQVIsQ0FBeEI7QUFDRCxLQUZEOztBQUlBLFNBQUtDLGtCQUFMLEdBQTBCQyxTQUFTQyxnQkFBVCxDQUEwQixLQUFLWCxRQUFMLENBQWNDLFFBQXhDLENBQTFCOztBQUVBLFNBQUtXLGFBQUw7QUFDRDs7Ozt1Q0F1QmtCQyxPLEVBQVM7QUFDMUIsVUFBTUMsV0FB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LFNBRjFFOztBQUlBLGFBQU9QLE1BQVA7QUFDRDs7Ozs7O2tCQXFOWTVGLE8iLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRvb2x0aXAge1xuICBjb25zdHJ1Y3RvcihvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLnNldHRpbmdzID0ge1xuICAgICAgc2VsZWN0b3I6ICdhJyxcbiAgICAgIHRvb2x0aXBDbGFzczogJ3Rvb2x0aXAnLFxuICAgICAgbWFyZ2luOiAxMCxcbiAgICAgIHBvc2l0aW9uOiAndG9wLWNlbnRlcicsXG4gICAgfTtcblxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgdGhpcy5zZXR0aW5nc1tvcHRpb25dID0gb3B0aW9uc1tvcHRpb25dO1xuICAgIH0pO1xuXG4gICAgdGhpcy50b29sdGlwcGVkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2V0dGluZ3Muc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5jcmVhdGVUb29sdGlwKCk7XG4gIH1cblxuICBzdGF0aWMgZWxIYXNOb25FbXB0eUF0dHIoZWwpIHtcbiAgICByZXR1cm4gKGF0dHIpID0+IHtcbiAgICAgIHJldHVybiBlbC5oYXNBdHRyaWJ1dGUoYXR0cikgJiZcbiAgICAgICAgICAgICBlbC5nZXRBdHRyaWJ1dGUoYXR0cikgIT09ICcnO1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0U2Nyb2xsKCkge1xuICAgIGNvbnN0IHNjcm9sbCA9IHt9O1xuXG4gICAgc2Nyb2xsLnggPSAod2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQpID9cbiAgICAgIHdpbmRvdy5wYWdlWE9mZnNldCA6XG4gICAgICAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5KS5zY3JvbGxMZWZ0O1xuXG4gICAgc2Nyb2xsLnkgPSAod2luZG93LnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWQpID9cbiAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCA6XG4gICAgICAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5KS5zY3JvbGxUb3A7XG5cbiAgICByZXR1cm4gc2Nyb2xsO1xuICB9XG5cbiAgZ2V0RGVzaXJlZFBvc2l0aW9uKGVsZW1lbnQpIHtcbiAgICBjb25zdCBwb3NTcGxpdCA9IGVsZW1lbnQuZGF0YXNldC5wb3NpdGlvbi5zcGxpdCgnLScpO1xuXG4gICAgLy8gZm9yIGNlbnRlcmVkIHBvc2l0aW9uIG9ubHkgb25lIGFsaWdubWVudCBtaWdodCBiZSBwcm92aWRlZCxcbiAgICAvLyBlZy4gdG9wID09PSB0b3AtY2VudGVyXG4gICAgaWYgKHBvc1NwbGl0Lmxlbmd0aCA8IDIpIHtcbiAgICAgIHBvc1NwbGl0LnB1c2goJ2NlbnRlcicpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBzaWRlOiBwb3NTcGxpdFswXSxcbiAgICAgIGFsaWdubWVudDogcG9zU3BsaXRbMV1cbiAgICB9O1xuICB9XG5cbiAgcmVzZXRDbGFzcygpIHtcbiAgICB0aGlzLnRvb2x0aXAucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgIHRoaXMudG9vbHRpcC5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3MudG9vbHRpcENsYXNzKTtcbiAgfVxuXG4gIHNldENsYXNzKHRvb2x0aXBQb3NpdGlvbikge1xuICAgIHRoaXMudG9vbHRpcC5jbGFzc0xpc3QuYWRkKGAke3RoaXMuc2V0dGluZ3MudG9vbHRpcENsYXNzfS0tJHt0b29sdGlwUG9zaXRpb259YCk7XG4gIH1cblxuICBzZXRUb29sdGlwVmlzaWJpbGl0eSgpIHtcbiAgICBjb25zdCB2aXNpYmlsaXR5Q2xhc3MgPSBgJHt0aGlzLnNldHRpbmdzLnRvb2x0aXBDbGFzc30tLXZpc2libGVgO1xuXG4gICAgaWYgKCF0aGlzLnRvb2x0aXAuY2xhc3NMaXN0LmNvbnRhaW5zKHZpc2liaWxpdHlDbGFzcykpIHtcbiAgICAgIHRoaXMudG9vbHRpcC5jbGFzc0xpc3QuYWRkKHZpc2liaWxpdHlDbGFzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudG9vbHRpcC5jbGFzc0xpc3QucmVtb3ZlKHZpc2liaWxpdHlDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnRvb2x0aXAuY2xhc3NMaXN0LmNvbnRhaW5zKHZpc2liaWxpdHlDbGFzcykpIHtcbiAgICAgIHRoaXMudG9vbHRpcC5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICB0aGlzLnJlc2V0Q2xhc3MoKTtcbiAgICB9XG4gIH1cblxuICBjYWxjUG9zaXRpb24oZWxlbWVudFJlY3QsIHNpZGUsIGFsaWdubWVudCkge1xuICAgIGNvbnN0IHRvb2x0aXBCb3VuZGluZyA9IHRoaXMudG9vbHRpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBlbGVtZW50Qm91bmRpbmcgPSBlbGVtZW50UmVjdDtcbiAgICBjb25zdCBwYWdlU2Nyb2xsID0gVG9vbHRpcC5nZXRTY3JvbGwoKTtcblxuICAgIGNvbnN0IHBvc2l0aW9uID0ge1xuICAgICAgeDogcGFnZVNjcm9sbC54LFxuICAgICAgeTogcGFnZVNjcm9sbC55XG4gICAgfTtcblxuICAgIC8vIHRvcCAmIGJvdHRvbVxuXG4gICAgaWYgKChzaWRlID09PSAndG9wJyB8fCBzaWRlID09PSAnYm90dG9tJykpIHtcbiAgICAgIGlmIChhbGlnbm1lbnQgPT09ICdzdGFydCcpIHtcbiAgICAgICAgcG9zaXRpb24ueCArPSBlbGVtZW50Qm91bmRpbmcubGVmdDtcbiAgICAgIH1cblxuICAgICAgaWYgKGFsaWdubWVudCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgcG9zaXRpb24ueCArPVxuICAgICAgICAgIGVsZW1lbnRCb3VuZGluZy5sZWZ0ICtcbiAgICAgICAgICAoKGVsZW1lbnRCb3VuZGluZy53aWR0aCAvIDIpIC0gKHRvb2x0aXBCb3VuZGluZy53aWR0aCAvIDIpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFsaWdubWVudCA9PT0gJ2VuZCcpIHtcbiAgICAgICAgcG9zaXRpb24ueCArPSAoZWxlbWVudEJvdW5kaW5nLnJpZ2h0IC0gdG9vbHRpcEJvdW5kaW5nLndpZHRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2lkZSA9PT0gJ3RvcCcpIHtcbiAgICAgIHBvc2l0aW9uLnkgKz0gKGVsZW1lbnRCb3VuZGluZy50b3AgLSB0b29sdGlwQm91bmRpbmcuaGVpZ2h0IC0gdGhpcy5zZXR0aW5ncy5tYXJnaW4pO1xuICAgIH1cblxuICAgIGlmIChzaWRlID09PSAnYm90dG9tJykge1xuICAgICAgcG9zaXRpb24ueSArPSAoZWxlbWVudEJvdW5kaW5nLmJvdHRvbSArIHRoaXMuc2V0dGluZ3MubWFyZ2luKTtcbiAgICB9XG5cbiAgICAvLyBsZWZ0ICYgcmlnaHRcblxuICAgIGlmICgoc2lkZSA9PT0gJ2xlZnQnIHx8IHNpZGUgPT09ICdyaWdodCcpKSB7XG4gICAgICBpZiAoYWxpZ25tZW50ID09PSAnc3RhcnQnKSB7XG4gICAgICAgIHBvc2l0aW9uLnkgKz0gZWxlbWVudEJvdW5kaW5nLnRvcDtcbiAgICAgIH1cblxuICAgICAgaWYgKGFsaWdubWVudCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgcG9zaXRpb24ueSArPVxuICAgICAgICAgIGVsZW1lbnRCb3VuZGluZy50b3AgK1xuICAgICAgICAgICgoZWxlbWVudEJvdW5kaW5nLmhlaWdodCAvIDIpIC0gKHRvb2x0aXBCb3VuZGluZy5oZWlnaHQgLyAyKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChhbGlnbm1lbnQgPT09ICdlbmQnKSB7XG4gICAgICAgIHBvc2l0aW9uLnkgKz0gZWxlbWVudEJvdW5kaW5nLmJvdHRvbSAtIHRvb2x0aXBCb3VuZGluZy5oZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgcG9zaXRpb24ueCArPSAoZWxlbWVudEJvdW5kaW5nLmxlZnQgLSB0aGlzLnNldHRpbmdzLm1hcmdpbiAtIHRvb2x0aXBCb3VuZGluZy53aWR0aCk7XG4gICAgfVxuXG4gICAgaWYgKHNpZGUgPT09ICdyaWdodCcpIHtcbiAgICAgIHBvc2l0aW9uLnggKz0gKGVsZW1lbnRCb3VuZGluZy5yaWdodCArIHRoaXMuc2V0dGluZ3MubWFyZ2luKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH1cblxuICBjaGVja1ZlcnRpY2FsU3BhY2UoZWxlbWVudEJvdW5kaW5nKSB7XG4gICAgY29uc3QgdG9wU3BhY2UgPSAoZWxlbWVudEJvdW5kaW5nLnRvcCAtIHRoaXMuc2V0dGluZ3MubWFyZ2luKTtcbiAgICBjb25zdCBib3R0b21TcGFjZSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChlbGVtZW50Qm91bmRpbmcuYm90dG9tICsgdGhpcy5zZXR0aW5ncy5tYXJnaW4pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiB0b3BTcGFjZSA+IHRoaXMudG9vbHRpcC5vZmZzZXRIZWlnaHQsXG4gICAgICBlbmQ6IGJvdHRvbVNwYWNlID4gdGhpcy50b29sdGlwLm9mZnNldEhlaWdodFxuICAgIH07XG4gIH1cblxuICBjaGVja0hvcml6b250YWxTcGFjZShlbGVtZW50Qm91bmRpbmcpIHtcbiAgICBjb25zdCBsZWZ0U3BhY2UgPSAoZWxlbWVudEJvdW5kaW5nLmxlZnQgLSB0aGlzLnNldHRpbmdzLm1hcmdpbik7XG4gICAgY29uc3QgcmlnaHRTcGFjZSA9IHdpbmRvdy5pbm5lcldpZHRoIC0gKGVsZW1lbnRCb3VuZGluZy5yaWdodCArIHRoaXMuc2V0dGluZ3MubWFyZ2luKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogbGVmdFNwYWNlID4gdGhpcy50b29sdGlwLm9mZnNldFdpZHRoLFxuICAgICAgZW5kOiByaWdodFNwYWNlID4gdGhpcy50b29sdGlwLm9mZnNldFdpZHRoXG4gICAgfTtcbiAgfVxuXG4gIC8vIGNoZWNrIHNwYWNlIG9uIHNpZGVzIGluIHRoZSB2aWV3cG9ydFxuICBnZXRQb3NzaWJsZVNpZGVzKGVsZW1lbnRCb3VuZGluZykge1xuICAgIC8vIHJldHVybiBPYmplY3QuYXNzaWduKFxuICAgIC8vICAgdGhpcy5jaGVja1ZlcnRpY2FsU3BhY2UoZWxlbWVudEJvdW5kaW5nKSxcbiAgICAvLyAgIHRoaXMuY2hlY2tIb3Jpem9udGFsU3BhY2UoZWxlbWVudEJvdW5kaW5nKVxuICAgIC8vICk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmVydGljYWw6IHRoaXMuY2hlY2tWZXJ0aWNhbFNwYWNlKGVsZW1lbnRCb3VuZGluZyksXG4gICAgICBob3Jpem9udGFsOiB0aGlzLmNoZWNrSG9yaXpvbnRhbFNwYWNlKGVsZW1lbnRCb3VuZGluZylcbiAgICB9O1xuICB9XG5cbiAgLy8gY29tcGFyZSBkZXNpcmVkICYgcG9zc2libGUgc2lkZSBzcGFjZTtcbiAgLy8gaWYgZGVzaXJlZCBpcyBub3QgcG9zc2libGUsIHJldHVybiBiZXN0IHBvc3NpYmxlIHBvc2l0aW9uXG4gIGdldEFjdHVhbFNpZGUoZGVzaXJlZFNpZGUsIHBvc3NpYmxlU2lkZXMpIHtcbiAgICBsZXQgc2lkZSA9IGRlc2lyZWRTaWRlO1xuXG4gICAgcmV0dXJuIHNpZGU7XG4gIH1cblxuICBzZXRUb29sdGlwUG9zaXRpb24oZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBkZXNpcmVkID0gdGhpcy5nZXREZXNpcmVkUG9zaXRpb24oZWxlbWVudCk7XG4gICAgY29uc3QgcG9zc2libGVTaWRlcyA9IHRoaXMuZ2V0UG9zc2libGVTaWRlcyhlbGVtZW50UmVjdCk7XG4gICAgY29uc3Qgc2lkZSA9IHRoaXMuZ2V0QWN0dWFsU2lkZShkZXNpcmVkLnNpZGUsIHBvc3NpYmxlU2lkZXMpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5jYWxjUG9zaXRpb24oZWxlbWVudFJlY3QsIHNpZGUsIGRlc2lyZWQuYWxpZ25tZW50KTtcblxuICAgIHRoaXMudG9vbHRpcC5zdHlsZS5sZWZ0ID0gYCR7cG9zaXRpb24ueH1weGA7XG4gICAgdGhpcy50b29sdGlwLnN0eWxlLnRvcCA9IGAke3Bvc2l0aW9uLnl9cHhgO1xuXG4gICAgdGhpcy5zZXRDbGFzcyhgJHtzaWRlfS0ke2Rlc2lyZWQuYWxpZ25tZW50fWApO1xuICB9XG5cbiAgc2V0VG9vbHRpcENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMudG9vbHRpcC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBtb3VzZUVudGVySGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgdGhpcy5zZXRUb29sdGlwQ29udGVudChlbGVtZW50LmRhdGFzZXQudG9vbHRpcCk7XG4gICAgdGhpcy5zZXRUb29sdGlwUG9zaXRpb24oZWxlbWVudCk7XG4gICAgdGhpcy5zZXRUb29sdGlwVmlzaWJpbGl0eSgpO1xuICB9XG5cbiAgbW91c2VMZWF2ZUhhbmRsZXIoKSB7XG4gICAgdGhpcy5zZXRUb29sdGlwVmlzaWJpbGl0eSgpO1xuICB9XG5cbiAgYmluZEVsZW1lbnRFdmVudHMoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGV2ZW50ID0+IHRoaXMubW91c2VFbnRlckhhbmRsZXIoZXZlbnQpKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZXZlbnQgPT4gdGhpcy5tb3VzZUVudGVySGFuZGxlcihldmVudCkpO1xuXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgZXZlbnQgPT4gdGhpcy5tb3VzZUxlYXZlSGFuZGxlcihldmVudCkpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGV2ZW50ID0+IHRoaXMubW91c2VMZWF2ZUhhbmRsZXIoZXZlbnQpKTtcbiAgfVxuXG4gIGNyZWF0ZVRvb2x0aXBEYXRhKCkge1xuICAgIFsuLi50aGlzLnRvb2x0aXBwZWRFbGVtZW50c10uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgY29uc3QgZWxlbWVudEhhcyA9IFRvb2x0aXAuZWxIYXNOb25FbXB0eUF0dHIoZWxlbWVudCk7XG5cbiAgICAgIGlmIChlbGVtZW50SGFzKCd0aXRsZScpICYmICFlbGVtZW50SGFzKCdkYXRhLXRvb2x0aXAnKSkge1xuICAgICAgICBlbGVtZW50LmRhdGFzZXQudG9vbHRpcCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZWxlbWVudEhhcygnZGF0YS1wb3NpdGlvbicpKSB7XG4gICAgICAgIGVsZW1lbnQuZGF0YXNldC5wb3NpdGlvbiA9IHRoaXMuc2V0dGluZ3MucG9zaXRpb247XG4gICAgICB9XG5cbiAgICAgIGlmIChlbGVtZW50SGFzKCdkYXRhLXRvb2x0aXAnKSkge1xuICAgICAgICB0aGlzLmJpbmRFbGVtZW50RXZlbnRzKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlVG9vbHRpcCgpIHtcbiAgICBjb25zdCB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9vbHRpcC5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3MudG9vbHRpcENsYXNzKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvb2x0aXApO1xuXG4gICAgdGhpcy50b29sdGlwID0gdG9vbHRpcDtcbiAgICB0aGlzLmNyZWF0ZVRvb2x0aXBEYXRhKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdG9vbHRpcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);
});