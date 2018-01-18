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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Tooltip = function () {\n  function Tooltip() {\n    var _this = this;\n\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Tooltip);\n\n    this.settings = {\n      selector: 'a',\n      tooltipClass: 'tooltip',\n      margin: 10,\n      position: 'top-center'\n    };\n\n    Object.keys(options).forEach(function (option) {\n      _this.settings[option] = options[option];\n    });\n\n    this.tooltippedElements = document.querySelectorAll(this.settings.selector);\n\n    this.createTooltip();\n  }\n\n  _createClass(Tooltip, [{\n    key: 'getDesiredPosition',\n    value: function getDesiredPosition(element) {\n      var posSplit = element.dataset.position.split('-');\n\n      // for centered position only one alignment might be provided,\n      // eg. top === top-center\n      if (posSplit.length < 2) {\n        posSplit.push('center');\n      }\n\n      return {\n        side: posSplit[0],\n        alignment: posSplit[1]\n      };\n    }\n  }, {\n    key: 'resetClass',\n    value: function resetClass() {\n      this.tooltip.removeAttribute('class');\n      this.tooltip.classList.add(this.settings.tooltipClass);\n    }\n  }, {\n    key: 'setClass',\n    value: function setClass(tooltipPosition) {\n      this.tooltip.classList.add(this.settings.tooltipClass + '--' + tooltipPosition);\n    }\n  }, {\n    key: 'setTooltipVisibility',\n    value: function setTooltipVisibility() {\n      var visibilityClass = this.settings.tooltipClass + '--visible';\n\n      if (!this.tooltip.classList.contains(visibilityClass)) {\n        this.tooltip.classList.add(visibilityClass);\n      } else {\n        this.tooltip.classList.remove(visibilityClass);\n      }\n\n      if (!this.tooltip.classList.contains(visibilityClass)) {\n        this.tooltip.removeAttribute('style');\n        this.resetClass();\n      }\n    }\n  }, {\n    key: 'calcCoordinates',\n    value: function calcCoordinates(elementRect, position) {\n      var tooltipBounding = this.tooltip.getBoundingClientRect();\n      var elementBounding = elementRect;\n      var pageScroll = Tooltip.getScroll();\n\n      var coordinates = {\n        x: pageScroll.x,\n        y: pageScroll.y\n      };\n\n      // top & bottom\n\n      if (position.side === 'top' || position.side === 'bottom') {\n        if (position.alignment === 'start') {\n          coordinates.x += elementBounding.left;\n        }\n\n        if (position.alignment === 'center') {\n          coordinates.x += elementBounding.left + (elementBounding.width / 2 - tooltipBounding.width / 2);\n        }\n\n        if (position.alignment === 'end') {\n          coordinates.x += elementBounding.right - tooltipBounding.width;\n        }\n      }\n\n      if (position.side === 'top') {\n        coordinates.y += elementBounding.top - tooltipBounding.height - this.settings.margin;\n      }\n\n      if (position.side === 'bottom') {\n        coordinates.y += elementBounding.bottom + this.settings.margin;\n      }\n\n      // left & right\n\n      if (position.side === 'left' || position.side === 'right') {\n        if (position.alignment === 'start') {\n          coordinates.y += elementBounding.top;\n        }\n\n        if (position.alignment === 'center') {\n          coordinates.y += elementBounding.top + (elementBounding.height / 2 - tooltipBounding.height / 2);\n        }\n\n        if (position.alignment === 'end') {\n          coordinates.y += elementBounding.bottom - tooltipBounding.height;\n        }\n      }\n\n      if (position.side === 'left') {\n        coordinates.x += elementBounding.left - this.settings.margin - tooltipBounding.width;\n      }\n\n      if (position.side === 'right') {\n        coordinates.x += elementBounding.right + this.settings.margin;\n      }\n\n      return coordinates;\n    }\n  }, {\n    key: 'checkVerticalSpace',\n    value: function checkVerticalSpace(elementBounding) {\n      var topSpace = elementBounding.top - this.settings.margin;\n      var bottomSpace = window.innerHeight - (elementBounding.bottom + this.settings.margin);\n\n      return {\n        start: topSpace > this.tooltip.offsetHeight,\n        end: bottomSpace > this.tooltip.offsetHeight\n      };\n    }\n  }, {\n    key: 'checkHorizontalSpace',\n    value: function checkHorizontalSpace(elementBounding) {\n      var leftSpace = elementBounding.left - this.settings.margin;\n      var rightSpace = window.innerWidth - (elementBounding.right + this.settings.margin);\n\n      return {\n        start: leftSpace > this.tooltip.offsetWidth,\n        end: rightSpace > this.tooltip.offsetWidth\n      };\n    }\n\n    // check space on sides in the viewport\n\n  }, {\n    key: 'getPossibleSides',\n    value: function getPossibleSides(elementBounding) {\n      return {\n        vertical: this.checkVerticalSpace(elementBounding),\n        horizontal: this.checkHorizontalSpace(elementBounding)\n      };\n    }\n\n    // compare desired position & possible space on sides;\n    // if desired is not possible, return best possible position\n\n  }, {\n    key: 'getActualPosition',\n    value: function getActualPosition(desired, possible) {\n      var positionMap = {\n        top: 'start',\n        bottom: 'end',\n        left: 'start',\n        right: 'end'\n      };\n\n      var oppositeMap = {\n        top: 'bottom',\n        bottom: 'top',\n        left: 'right',\n        right: 'left',\n        vertical: 'horizontal',\n        horizontal: 'vertical'\n      };\n\n      var axis = desired.side === 'top' || desired.side === 'bottom' ? 'vertical' : 'horizontal';\n\n      var getSide = function getSide(wantedAxis, wantedSide) {\n        var theAxis = possible[wantedAxis];\n        var side = void 0;\n\n        if (theAxis[positionMap[wantedSide]]) {\n          side = wantedSide;\n        } else if (theAxis[positionMap[oppositeMap[wantedSide]]]) {\n          side = oppositeMap[wantedSide];\n        } else {\n          side = getSide(oppositeMap[wantedAxis], wantedSide);\n        }\n\n        return side;\n      };\n\n      var getAlignment = function getAlignment(wantedAxis, wantedAlignment) {\n        var possibleAlign = possible[wantedAxis];\n        var alignment = void 0;\n\n        if (possibleAlign.start && possibleAlign.end) {\n          alignment = wantedAlignment;\n        } else if (!possibleAlign.start && !possibleAlign.end) {\n          alignment = 'center';\n        } else if (!possibleAlign.start) {\n          alignment = 'start';\n        } else if (!possibleAlign.end) {\n          alignment = 'end';\n        }\n\n        return alignment;\n      };\n\n      return {\n        side: getSide(axis, desired.side),\n        alignment: getAlignment(oppositeMap[axis], desired.alignment)\n      };\n    }\n  }, {\n    key: 'setTooltipPosition',\n    value: function setTooltipPosition(element) {\n      var elementRect = element.getBoundingClientRect();\n      var desiredPosition = this.getDesiredPosition(element);\n      var possibleSides = this.getPossibleSides(elementRect);\n      var actualPosition = this.getActualPosition(desiredPosition, possibleSides);\n      var coordinates = this.calcCoordinates(elementRect, actualPosition);\n\n      this.tooltip.style.left = coordinates.x + 'px';\n      this.tooltip.style.top = coordinates.y + 'px';\n\n      this.setClass(actualPosition.side + '-' + actualPosition.alignment);\n    }\n  }, {\n    key: 'setTooltipContent',\n    value: function setTooltipContent(content) {\n      this.tooltip.textContent = content;\n    }\n  }, {\n    key: 'mouseEnterHandler',\n    value: function mouseEnterHandler(event) {\n      var element = event.currentTarget;\n\n      this.setTooltipContent(element.dataset.tooltip);\n      this.setTooltipPosition(element);\n      this.setTooltipVisibility();\n    }\n  }, {\n    key: 'mouseLeaveHandler',\n    value: function mouseLeaveHandler() {\n      this.setTooltipVisibility();\n    }\n  }, {\n    key: 'bindElementEvents',\n    value: function bindElementEvents(element) {\n      var _this2 = this;\n\n      element.addEventListener('mouseenter', function (event) {\n        return _this2.mouseEnterHandler(event);\n      });\n      element.addEventListener('focus', function (event) {\n        return _this2.mouseEnterHandler(event);\n      });\n\n      element.addEventListener('mouseleave', function (event) {\n        return _this2.mouseLeaveHandler(event);\n      });\n      element.addEventListener('blur', function (event) {\n        return _this2.mouseLeaveHandler(event);\n      });\n    }\n  }, {\n    key: 'createTooltipData',\n    value: function createTooltipData() {\n      var _this3 = this;\n\n      [].concat(_toConsumableArray(this.tooltippedElements)).forEach(function (el) {\n        var element = el;\n        var elementHas = Tooltip.elHasNonEmptyAttr(element);\n\n        if (elementHas('title') && !elementHas('data-tooltip')) {\n          element.dataset.tooltip = element.getAttribute('title');\n          element.setAttribute('title', '');\n        }\n\n        if (!elementHas('data-position')) {\n          element.dataset.position = _this3.settings.position;\n        }\n\n        if (elementHas('data-tooltip')) {\n          _this3.bindElementEvents(element);\n        }\n      });\n    }\n  }, {\n    key: 'createTooltip',\n    value: function createTooltip() {\n      var tooltip = document.createElement('div');\n      tooltip.classList.add(this.settings.tooltipClass);\n      document.body.appendChild(tooltip);\n\n      this.tooltip = tooltip;\n      this.createTooltipData();\n    }\n  }], [{\n    key: 'elHasNonEmptyAttr',\n    value: function elHasNonEmptyAttr(el) {\n      return function (attr) {\n        return el.hasAttribute(attr) && el.getAttribute(attr) !== '';\n      };\n    }\n  }, {\n    key: 'getScroll',\n    value: function getScroll() {\n      var scroll = {};\n\n      scroll.x = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;\n\n      scroll.y = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;\n\n      return scroll;\n    }\n  }]);\n\n  return Tooltip;\n}();\n\nexports.default = Tooltip;\nmodule.exports = exports['default'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Rvb2x0aXAuanM/ZGUwMSJdLCJuYW1lcyI6WyJUb29sdGlwIiwib3B0aW9ucyIsInNldHRpbmdzIiwic2VsZWN0b3IiLCJ0b29sdGlwQ2xhc3MiLCJtYXJnaW4iLCJwb3NpdGlvbiIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwib3B0aW9uIiwidG9vbHRpcHBlZEVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlVG9vbHRpcCIsImVsZW1lbnQiLCJwb3NTcGxpdCIsImRhdGFzZXQiLCJzcGxpdCIsImxlbmd0aCIsInB1c2giLCJzaWRlIiwiYWxpZ25tZW50IiwidG9vbHRpcCIsInJlbW92ZUF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsInRvb2x0aXBQb3NpdGlvbiIsInZpc2liaWxpdHlDbGFzcyIsImNvbnRhaW5zIiwicmVtb3ZlIiwicmVzZXRDbGFzcyIsImVsZW1lbnRSZWN0IiwidG9vbHRpcEJvdW5kaW5nIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZWxlbWVudEJvdW5kaW5nIiwicGFnZVNjcm9sbCIsImdldFNjcm9sbCIsImNvb3JkaW5hdGVzIiwieCIsInkiLCJsZWZ0Iiwid2lkdGgiLCJyaWdodCIsInRvcCIsImhlaWdodCIsImJvdHRvbSIsInRvcFNwYWNlIiwiYm90dG9tU3BhY2UiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInN0YXJ0Iiwib2Zmc2V0SGVpZ2h0IiwiZW5kIiwibGVmdFNwYWNlIiwicmlnaHRTcGFjZSIsImlubmVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsInZlcnRpY2FsIiwiY2hlY2tWZXJ0aWNhbFNwYWNlIiwiaG9yaXpvbnRhbCIsImNoZWNrSG9yaXpvbnRhbFNwYWNlIiwiZGVzaXJlZCIsInBvc3NpYmxlIiwicG9zaXRpb25NYXAiLCJvcHBvc2l0ZU1hcCIsImF4aXMiLCJnZXRTaWRlIiwid2FudGVkQXhpcyIsIndhbnRlZFNpZGUiLCJ0aGVBeGlzIiwiZ2V0QWxpZ25tZW50Iiwid2FudGVkQWxpZ25tZW50IiwicG9zc2libGVBbGlnbiIsImRlc2lyZWRQb3NpdGlvbiIsImdldERlc2lyZWRQb3NpdGlvbiIsInBvc3NpYmxlU2lkZXMiLCJnZXRQb3NzaWJsZVNpZGVzIiwiYWN0dWFsUG9zaXRpb24iLCJnZXRBY3R1YWxQb3NpdGlvbiIsImNhbGNDb29yZGluYXRlcyIsInN0eWxlIiwic2V0Q2xhc3MiLCJjb250ZW50IiwidGV4dENvbnRlbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJzZXRUb29sdGlwQ29udGVudCIsInNldFRvb2x0aXBQb3NpdGlvbiIsInNldFRvb2x0aXBWaXNpYmlsaXR5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlRW50ZXJIYW5kbGVyIiwibW91c2VMZWF2ZUhhbmRsZXIiLCJlbCIsImVsZW1lbnRIYXMiLCJlbEhhc05vbkVtcHR5QXR0ciIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImJpbmRFbGVtZW50RXZlbnRzIiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZVRvb2x0aXBEYXRhIiwiYXR0ciIsImhhc0F0dHJpYnV0ZSIsInNjcm9sbCIsInBhZ2VYT2Zmc2V0IiwidW5kZWZpbmVkIiwiZG9jdW1lbnRFbGVtZW50IiwicGFyZW50Tm9kZSIsInNjcm9sbExlZnQiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLE87QUFDSixxQkFBMEI7QUFBQTs7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3hCLFNBQUtDLFFBQUwsR0FBZ0I7QUFDZEMsZ0JBQVUsR0FESTtBQUVkQyxvQkFBYyxTQUZBO0FBR2RDLGNBQVEsRUFITTtBQUlkQyxnQkFBVTtBQUpJLEtBQWhCOztBQU9BQyxXQUFPQyxJQUFQLENBQVlQLE9BQVosRUFBcUJRLE9BQXJCLENBQTZCLFVBQUNDLE1BQUQsRUFBWTtBQUN2QyxZ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LGFBQVQsQ0FBdUIsS0FBdkIsQ0FBaEI7QUFDQTVFLGNBQVFFLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLEtBQUt4QixRQUFMLENBQWNFLFlBQXBDO0FBQ0FRLGVBQVN3RixJQUFULENBQWNDLFdBQWQsQ0FBMEI5RSxPQUExQjs7QUFFQSxXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxXQUFLK0UsaUJBQUw7QUFDRDs7O3NDQXRSd0JULEUsRUFBSTtBQUMzQixhQUFPLFVBQUNVLElBQUQsRUFBVTtBQUNmLGVBQU9WLEdBQUdXLFlBQUgsQ0FBZ0JELElBQWhCLEtBQ0FWLEdBQUdHLFlBQUgsQ0FBZ0JPLElBQWhCLE1BQTBCLEVBRGpDO0FBRUQsT0FIRDtBQUlEOzs7Z0NBRWtCO0FBQ2pCLFVBQU1FLFNBQVMsRUFBZjs7QUFFQUEsYUFBT2xFLENBQVAsR0FBWVUsT0FBT3lELFdBQVAsS0FBdUJDLFNBQXhCLEdBQ1QxRCxPQUFPeUQsV0FERSxHQUVULENBQUM5RixTQUFTZ0csZUFBVCxJQUE0QmhHLFNBQVN3RixJQUFULENBQWNTLFVBQTFDLElBQXdEakcsU0FBU3dGLElBQWxFLEVBQXdFVSxVQUYxRTs7QUFJQUwsYUFBT2pFLENBQVAsR0FBWVMsT0FBTzhELFdBQVAsS0FBdUJKLFNBQXhCLEdBQ1QxRCxPQUFPOEQsV0FERSxHQUVULENBQUNuRyxTQUFTZ0csZUFBVCxJQUE0QmhHLFNBQVN3RixJQUFULENBQWNTLFVBQTFDLElBQXdEakcsU0FBU3dGLElBQWxFLEVBQXdFWSxTQUYxRTs7QUFJQSxhQUFPUCxNQUFQO0FBQ0Q7Ozs7OztrQkFzUVl6RyxPIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb29sdGlwIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHtcbiAgICAgIHNlbGVjdG9yOiAnYScsXG4gICAgICB0b29sdGlwQ2xhc3M6ICd0b29sdGlwJyxcbiAgICAgIG1hcmdpbjogMTAsXG4gICAgICBwb3NpdGlvbjogJ3RvcC1jZW50ZXInLFxuICAgIH07XG5cbiAgICBPYmplY3Qua2V5cyhvcHRpb25zKS5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgIHRoaXMuc2V0dGluZ3Nbb3B0aW9uXSA9IG9wdGlvbnNbb3B0aW9uXTtcbiAgICB9KTtcblxuICAgIHRoaXMudG9vbHRpcHBlZEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNldHRpbmdzLnNlbGVjdG9yKTtcblxuICAgIHRoaXMuY3JlYXRlVG9vbHRpcCgpO1xuICB9XG5cbiAgc3RhdGljIGVsSGFzTm9uRW1wdHlBdHRyKGVsKSB7XG4gICAgcmV0dXJuIChhdHRyKSA9PiB7XG4gICAgICByZXR1cm4gZWwuaGFzQXR0cmlidXRlKGF0dHIpICYmXG4gICAgICAgICAgICAgZWwuZ2V0QXR0cmlidXRlKGF0dHIpICE9PSAnJztcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldFNjcm9sbCgpIHtcbiAgICBjb25zdCBzY3JvbGwgPSB7fTtcblxuICAgIHNjcm9sbC54ID0gKHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICB3aW5kb3cucGFnZVhPZmZzZXQgOlxuICAgICAgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keSkuc2Nyb2xsTGVmdDtcblxuICAgIHNjcm9sbC55ID0gKHdpbmRvdy5wYWdlWU9mZnNldCAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICB3aW5kb3cucGFnZVlPZmZzZXQgOlxuICAgICAgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keSkuc2Nyb2xsVG9wO1xuXG4gICAgcmV0dXJuIHNjcm9sbDtcbiAgfVxuXG4gIGdldERlc2lyZWRQb3NpdGlvbihlbGVtZW50KSB7XG4gICAgY29uc3QgcG9zU3BsaXQgPSBlbGVtZW50LmRhdGFzZXQucG9zaXRpb24uc3BsaXQoJy0nKTtcblxuICAgIC8vIGZvciBjZW50ZXJlZCBwb3NpdGlvbiBvbmx5IG9uZSBhbGlnbm1lbnQgbWlnaHQgYmUgcHJvdmlkZWQsXG4gICAgLy8gZWcuIHRvcCA9PT0gdG9wLWNlbnRlclxuICAgIGlmIChwb3NTcGxpdC5sZW5ndGggPCAyKSB7XG4gICAgICBwb3NTcGxpdC5wdXNoKCdjZW50ZXInKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2lkZTogcG9zU3BsaXRbMF0sXG4gICAgICBhbGlnbm1lbnQ6IHBvc1NwbGl0WzFdXG4gICAgfTtcbiAgfVxuXG4gIHJlc2V0Q2xhc3MoKSB7XG4gICAgdGhpcy50b29sdGlwLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICB0aGlzLnRvb2x0aXAuY2xhc3NMaXN0LmFkZCh0aGlzLnNldHRpbmdzLnRvb2x0aXBDbGFzcyk7XG4gIH1cblxuICBzZXRDbGFzcyh0b29sdGlwUG9zaXRpb24pIHtcbiAgICB0aGlzLnRvb2x0aXAuY2xhc3NMaXN0LmFkZChgJHt0aGlzLnNldHRpbmdzLnRvb2x0aXBDbGFzc30tLSR7dG9vbHRpcFBvc2l0aW9ufWApO1xuICB9XG5cbiAgc2V0VG9vbHRpcFZpc2liaWxpdHkoKSB7XG4gICAgY29uc3QgdmlzaWJpbGl0eUNsYXNzID0gYCR7dGhpcy5zZXR0aW5ncy50b29sdGlwQ2xhc3N9LS12aXNpYmxlYDtcblxuICAgIGlmICghdGhpcy50b29sdGlwLmNsYXNzTGlzdC5jb250YWlucyh2aXNpYmlsaXR5Q2xhc3MpKSB7XG4gICAgICB0aGlzLnRvb2x0aXAuY2xhc3NMaXN0LmFkZCh2aXNpYmlsaXR5Q2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZSh2aXNpYmlsaXR5Q2xhc3MpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy50b29sdGlwLmNsYXNzTGlzdC5jb250YWlucyh2aXNpYmlsaXR5Q2xhc3MpKSB7XG4gICAgICB0aGlzLnRvb2x0aXAucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgdGhpcy5yZXNldENsYXNzKCk7XG4gICAgfVxuICB9XG5cbiAgY2FsY0Nvb3JkaW5hdGVzKGVsZW1lbnRSZWN0LCBwb3NpdGlvbikge1xuICAgIGNvbnN0IHRvb2x0aXBCb3VuZGluZyA9IHRoaXMudG9vbHRpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBlbGVtZW50Qm91bmRpbmcgPSBlbGVtZW50UmVjdDtcbiAgICBjb25zdCBwYWdlU2Nyb2xsID0gVG9vbHRpcC5nZXRTY3JvbGwoKTtcblxuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0ge1xuICAgICAgeDogcGFnZVNjcm9sbC54LFxuICAgICAgeTogcGFnZVNjcm9sbC55XG4gICAgfTtcblxuICAgIC8vIHRvcCAmIGJvdHRvbVxuXG4gICAgaWYgKChwb3NpdGlvbi5zaWRlID09PSAndG9wJyB8fCBwb3NpdGlvbi5zaWRlID09PSAnYm90dG9tJykpIHtcbiAgICAgIGlmIChwb3NpdGlvbi5hbGlnbm1lbnQgPT09ICdzdGFydCcpIHtcbiAgICAgICAgY29vcmRpbmF0ZXMueCArPSBlbGVtZW50Qm91bmRpbmcubGVmdDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uLmFsaWdubWVudCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgY29vcmRpbmF0ZXMueCArPVxuICAgICAgICAgIGVsZW1lbnRCb3VuZGluZy5sZWZ0ICtcbiAgICAgICAgICAoKGVsZW1lbnRCb3VuZGluZy53aWR0aCAvIDIpIC0gKHRvb2x0aXBCb3VuZGluZy53aWR0aCAvIDIpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uLmFsaWdubWVudCA9PT0gJ2VuZCcpIHtcbiAgICAgICAgY29vcmRpbmF0ZXMueCArPSAoZWxlbWVudEJvdW5kaW5nLnJpZ2h0IC0gdG9vbHRpcEJvdW5kaW5nLndpZHRoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24uc2lkZSA9PT0gJ3RvcCcpIHtcbiAgICAgIGNvb3JkaW5hdGVzLnkgKz0gKGVsZW1lbnRCb3VuZGluZy50b3AgLSB0b29sdGlwQm91bmRpbmcuaGVpZ2h0IC0gdGhpcy5zZXR0aW5ncy5tYXJnaW4pO1xuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbi5zaWRlID09PSAnYm90dG9tJykge1xuICAgICAgY29vcmRpbmF0ZXMueSArPSAoZWxlbWVudEJvdW5kaW5nLmJvdHRvbSArIHRoaXMuc2V0dGluZ3MubWFyZ2luKTtcbiAgICB9XG5cbiAgICAvLyBsZWZ0ICYgcmlnaHRcblxuICAgIGlmICgocG9zaXRpb24uc2lkZSA9PT0gJ2xlZnQnIHx8IHBvc2l0aW9uLnNpZGUgPT09ICdyaWdodCcpKSB7XG4gICAgICBpZiAocG9zaXRpb24uYWxpZ25tZW50ID09PSAnc3RhcnQnKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnkgKz0gZWxlbWVudEJvdW5kaW5nLnRvcDtcbiAgICAgIH1cblxuICAgICAgaWYgKHBvc2l0aW9uLmFsaWdubWVudCA9PT0gJ2NlbnRlcicpIHtcbiAgICAgICAgY29vcmRpbmF0ZXMueSArPVxuICAgICAgICAgIGVsZW1lbnRCb3VuZGluZy50b3AgK1xuICAgICAgICAgICgoZWxlbWVudEJvdW5kaW5nLmhlaWdodCAvIDIpIC0gKHRvb2x0aXBCb3VuZGluZy5oZWlnaHQgLyAyKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwb3NpdGlvbi5hbGlnbm1lbnQgPT09ICdlbmQnKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnkgKz0gZWxlbWVudEJvdW5kaW5nLmJvdHRvbSAtIHRvb2x0aXBCb3VuZGluZy5oZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uLnNpZGUgPT09ICdsZWZ0Jykge1xuICAgICAgY29vcmRpbmF0ZXMueCArPSAoZWxlbWVudEJvdW5kaW5nLmxlZnQgLSB0aGlzLnNldHRpbmdzLm1hcmdpbiAtIHRvb2x0aXBCb3VuZGluZy53aWR0aCk7XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uLnNpZGUgPT09ICdyaWdodCcpIHtcbiAgICAgIGNvb3JkaW5hdGVzLnggKz0gKGVsZW1lbnRCb3VuZGluZy5yaWdodCArIHRoaXMuc2V0dGluZ3MubWFyZ2luKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29vcmRpbmF0ZXM7XG4gIH1cblxuICBjaGVja1ZlcnRpY2FsU3BhY2UoZWxlbWVudEJvdW5kaW5nKSB7XG4gICAgY29uc3QgdG9wU3BhY2UgPSAoZWxlbWVudEJvdW5kaW5nLnRvcCAtIHRoaXMuc2V0dGluZ3MubWFyZ2luKTtcbiAgICBjb25zdCBib3R0b21TcGFjZSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIChlbGVtZW50Qm91bmRpbmcuYm90dG9tICsgdGhpcy5zZXR0aW5ncy5tYXJnaW4pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiB0b3BTcGFjZSA+IHRoaXMudG9vbHRpcC5vZmZzZXRIZWlnaHQsXG4gICAgICBlbmQ6IGJvdHRvbVNwYWNlID4gdGhpcy50b29sdGlwLm9mZnNldEhlaWdodFxuICAgIH07XG4gIH1cblxuICBjaGVja0hvcml6b250YWxTcGFjZShlbGVtZW50Qm91bmRpbmcpIHtcbiAgICBjb25zdCBsZWZ0U3BhY2UgPSAoZWxlbWVudEJvdW5kaW5nLmxlZnQgLSB0aGlzLnNldHRpbmdzLm1hcmdpbik7XG4gICAgY29uc3QgcmlnaHRTcGFjZSA9IHdpbmRvdy5pbm5lcldpZHRoIC0gKGVsZW1lbnRCb3VuZGluZy5yaWdodCArIHRoaXMuc2V0dGluZ3MubWFyZ2luKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogbGVmdFNwYWNlID4gdGhpcy50b29sdGlwLm9mZnNldFdpZHRoLFxuICAgICAgZW5kOiByaWdodFNwYWNlID4gdGhpcy50b29sdGlwLm9mZnNldFdpZHRoXG4gICAgfTtcbiAgfVxuXG4gIC8vIGNoZWNrIHNwYWNlIG9uIHNpZGVzIGluIHRoZSB2aWV3cG9ydFxuICBnZXRQb3NzaWJsZVNpZGVzKGVsZW1lbnRCb3VuZGluZykge1xuICAgIHJldHVybiB7XG4gICAgICB2ZXJ0aWNhbDogdGhpcy5jaGVja1ZlcnRpY2FsU3BhY2UoZWxlbWVudEJvdW5kaW5nKSxcbiAgICAgIGhvcml6b250YWw6IHRoaXMuY2hlY2tIb3Jpem9udGFsU3BhY2UoZWxlbWVudEJvdW5kaW5nKVxuICAgIH07XG4gIH1cblxuICAvLyBjb21wYXJlIGRlc2lyZWQgcG9zaXRpb24gJiBwb3NzaWJsZSBzcGFjZSBvbiBzaWRlcztcbiAgLy8gaWYgZGVzaXJlZCBpcyBub3QgcG9zc2libGUsIHJldHVybiBiZXN0IHBvc3NpYmxlIHBvc2l0aW9uXG4gIGdldEFjdHVhbFBvc2l0aW9uKGRlc2lyZWQsIHBvc3NpYmxlKSB7XG4gICAgY29uc3QgcG9zaXRpb25NYXAgPSB7XG4gICAgICB0b3A6ICdzdGFydCcsXG4gICAgICBib3R0b206ICdlbmQnLFxuICAgICAgbGVmdDogJ3N0YXJ0JyxcbiAgICAgIHJpZ2h0OiAnZW5kJyxcbiAgICB9O1xuXG4gICAgY29uc3Qgb3Bwb3NpdGVNYXAgPSB7XG4gICAgICB0b3A6ICdib3R0b20nLFxuICAgICAgYm90dG9tOiAndG9wJyxcbiAgICAgIGxlZnQ6ICdyaWdodCcsXG4gICAgICByaWdodDogJ2xlZnQnLFxuICAgICAgdmVydGljYWw6ICdob3Jpem9udGFsJyxcbiAgICAgIGhvcml6b250YWw6ICd2ZXJ0aWNhbCcsXG4gICAgfTtcblxuICAgIGNvbnN0IGF4aXMgPSAoXG4gICAgICBkZXNpcmVkLnNpZGUgPT09ICd0b3AnIHx8IGRlc2lyZWQuc2lkZSA9PT0gJ2JvdHRvbSdcbiAgICApID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcblxuICAgIGNvbnN0IGdldFNpZGUgPSAod2FudGVkQXhpcywgd2FudGVkU2lkZSkgPT4ge1xuICAgICAgY29uc3QgdGhlQXhpcyA9IHBvc3NpYmxlW3dhbnRlZEF4aXNdO1xuICAgICAgbGV0IHNpZGU7XG5cbiAgICAgIGlmICh0aGVBeGlzW3Bvc2l0aW9uTWFwW3dhbnRlZFNpZGVdXSkge1xuICAgICAgICBzaWRlID0gd2FudGVkU2lkZTtcbiAgICAgIH0gZWxzZSBpZiAodGhlQXhpc1twb3NpdGlvbk1hcFtvcHBvc2l0ZU1hcFt3YW50ZWRTaWRlXV1dKSB7XG4gICAgICAgIHNpZGUgPSBvcHBvc2l0ZU1hcFt3YW50ZWRTaWRlXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNpZGUgPSBnZXRTaWRlKG9wcG9zaXRlTWFwW3dhbnRlZEF4aXNdLCB3YW50ZWRTaWRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNpZGU7XG4gICAgfTtcblxuICAgIGNvbnN0IGdldEFsaWdubWVudCA9ICh3YW50ZWRBeGlzLCB3YW50ZWRBbGlnbm1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHBvc3NpYmxlQWxpZ24gPSBwb3NzaWJsZVt3YW50ZWRBeGlzXTtcbiAgICAgIGxldCBhbGlnbm1lbnQ7XG5cbiAgICAgIGlmIChwb3NzaWJsZUFsaWduLnN0YXJ0ICYmIHBvc3NpYmxlQWxpZ24uZW5kKSB7XG4gICAgICAgIGFsaWdubWVudCA9IHdhbnRlZEFsaWdubWVudDtcbiAgICAgIH0gZWxzZSBpZiAoIXBvc3NpYmxlQWxpZ24uc3RhcnQgJiYgIXBvc3NpYmxlQWxpZ24uZW5kKSB7XG4gICAgICAgIGFsaWdubWVudCA9ICdjZW50ZXInO1xuICAgICAgfSBlbHNlIGlmICghcG9zc2libGVBbGlnbi5zdGFydCkge1xuICAgICAgICBhbGlnbm1lbnQgPSAnc3RhcnQnO1xuICAgICAgfSBlbHNlIGlmICghcG9zc2libGVBbGlnbi5lbmQpIHtcbiAgICAgICAgYWxpZ25tZW50ID0gJ2VuZCc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhbGlnbm1lbnQ7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBzaWRlOiBnZXRTaWRlKGF4aXMsIGRlc2lyZWQuc2lkZSksXG4gICAgICBhbGlnbm1lbnQ6IGdldEFsaWdubWVudChvcHBvc2l0ZU1hcFtheGlzXSwgZGVzaXJlZC5hbGlnbm1lbnQpXG4gICAgfTtcbiAgfVxuXG4gIHNldFRvb2x0aXBQb3NpdGlvbihlbGVtZW50KSB7XG4gICAgY29uc3QgZWxlbWVudFJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGRlc2lyZWRQb3NpdGlvbiA9IHRoaXMuZ2V0RGVzaXJlZFBvc2l0aW9uKGVsZW1lbnQpO1xuICAgIGNvbnN0IHBvc3NpYmxlU2lkZXMgPSB0aGlzLmdldFBvc3NpYmxlU2lkZXMoZWxlbWVudFJlY3QpO1xuICAgIGNvbnN0IGFjdHVhbFBvc2l0aW9uID0gdGhpcy5nZXRBY3R1YWxQb3NpdGlvbihkZXNpcmVkUG9zaXRpb24sIHBvc3NpYmxlU2lkZXMpO1xuICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gdGhpcy5jYWxjQ29vcmRpbmF0ZXMoZWxlbWVudFJlY3QsIGFjdHVhbFBvc2l0aW9uKTtcblxuICAgIHRoaXMudG9vbHRpcC5zdHlsZS5sZWZ0ID0gYCR7Y29vcmRpbmF0ZXMueH1weGA7XG4gICAgdGhpcy50b29sdGlwLnN0eWxlLnRvcCA9IGAke2Nvb3JkaW5hdGVzLnl9cHhgO1xuXG4gICAgdGhpcy5zZXRDbGFzcyhgJHthY3R1YWxQb3NpdGlvbi5zaWRlfS0ke2FjdHVhbFBvc2l0aW9uLmFsaWdubWVudH1gKTtcbiAgfVxuXG4gIHNldFRvb2x0aXBDb250ZW50KGNvbnRlbnQpIHtcbiAgICB0aGlzLnRvb2x0aXAudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICB9XG5cbiAgbW91c2VFbnRlckhhbmRsZXIoZXZlbnQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZXZlbnQuY3VycmVudFRhcmdldDtcblxuICAgIHRoaXMuc2V0VG9vbHRpcENvbnRlbnQoZWxlbWVudC5kYXRhc2V0LnRvb2x0aXApO1xuICAgIHRoaXMuc2V0VG9vbHRpcFBvc2l0aW9uKGVsZW1lbnQpO1xuICAgIHRoaXMuc2V0VG9vbHRpcFZpc2liaWxpdHkoKTtcbiAgfVxuXG4gIG1vdXNlTGVhdmVIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0VG9vbHRpcFZpc2liaWxpdHkoKTtcbiAgfVxuXG4gIGJpbmRFbGVtZW50RXZlbnRzKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBldmVudCA9PiB0aGlzLm1vdXNlRW50ZXJIYW5kbGVyKGV2ZW50KSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGV2ZW50ID0+IHRoaXMubW91c2VFbnRlckhhbmRsZXIoZXZlbnQpKTtcblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGV2ZW50ID0+IHRoaXMubW91c2VMZWF2ZUhhbmRsZXIoZXZlbnQpKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCBldmVudCA9PiB0aGlzLm1vdXNlTGVhdmVIYW5kbGVyKGV2ZW50KSk7XG4gIH1cblxuICBjcmVhdGVUb29sdGlwRGF0YSgpIHtcbiAgICBbLi4udGhpcy50b29sdGlwcGVkRWxlbWVudHNdLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gZWw7XG4gICAgICBjb25zdCBlbGVtZW50SGFzID0gVG9vbHRpcC5lbEhhc05vbkVtcHR5QXR0cihlbGVtZW50KTtcblxuICAgICAgaWYgKGVsZW1lbnRIYXMoJ3RpdGxlJykgJiYgIWVsZW1lbnRIYXMoJ2RhdGEtdG9vbHRpcCcpKSB7XG4gICAgICAgIGVsZW1lbnQuZGF0YXNldC50b29sdGlwID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsICcnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFlbGVtZW50SGFzKCdkYXRhLXBvc2l0aW9uJykpIHtcbiAgICAgICAgZWxlbWVudC5kYXRhc2V0LnBvc2l0aW9uID0gdGhpcy5zZXR0aW5ncy5wb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnRIYXMoJ2RhdGEtdG9vbHRpcCcpKSB7XG4gICAgICAgIHRoaXMuYmluZEVsZW1lbnRFdmVudHMoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVUb29sdGlwKCkge1xuICAgIGNvbnN0IHRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b29sdGlwLmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5ncy50b29sdGlwQ2xhc3MpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9vbHRpcCk7XG5cbiAgICB0aGlzLnRvb2x0aXAgPSB0b29sdGlwO1xuICAgIHRoaXMuY3JlYXRlVG9vbHRpcERhdGEoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi90b29sdGlwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);
});