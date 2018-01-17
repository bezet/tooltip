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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Tooltip = function () {\n  function Tooltip() {\n    var _this = this;\n\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Tooltip);\n\n    this.settings = {\n      selector: 'a',\n      tooltipClass: 'tooltip',\n      margin: 10,\n      position: 'top-center'\n    };\n\n    Object.keys(options).forEach(function (option) {\n      _this.settings[option] = options[option];\n    });\n\n    this.tooltippedElements = document.querySelectorAll(this.settings.selector);\n\n    this.createTooltip();\n  }\n\n  _createClass(Tooltip, [{\n    key: 'getDesiredPosition',\n    value: function getDesiredPosition(element) {\n      var posSplit = element.dataset.position.split('-');\n\n      // for centered position only one alignment might be provided,\n      // eg. top === top-center\n      if (posSplit.length < 2) {\n        posSplit.push('center');\n      }\n\n      return {\n        side: posSplit[0],\n        alignment: posSplit[1]\n      };\n    }\n  }, {\n    key: 'resetClass',\n    value: function resetClass() {\n      this.tooltip.removeAttribute('class');\n      this.tooltip.classList.add(this.settings.tooltipClass);\n    }\n  }, {\n    key: 'setClass',\n    value: function setClass(tooltipPosition) {\n      this.tooltip.classList.add(this.settings.tooltipClass + '--' + tooltipPosition);\n    }\n  }, {\n    key: 'setTooltipVisibility',\n    value: function setTooltipVisibility() {\n      var visibilityClass = this.settings.tooltipClass + '--visible';\n\n      if (!this.tooltip.classList.contains(visibilityClass)) {\n        this.tooltip.classList.add(visibilityClass);\n      } else {\n        this.tooltip.classList.remove(visibilityClass);\n      }\n\n      if (!this.tooltip.classList.contains(visibilityClass)) {\n        this.tooltip.removeAttribute('style');\n        this.resetClass();\n      }\n    }\n  }, {\n    key: 'calcCoordinates',\n    value: function calcCoordinates(elementRect, position) {\n      var tooltipBounding = this.tooltip.getBoundingClientRect();\n      var elementBounding = elementRect;\n      var pageScroll = Tooltip.getScroll();\n\n      var coordinates = {\n        x: pageScroll.x,\n        y: pageScroll.y\n      };\n\n      // top & bottom\n\n      if (position.side === 'top' || position.side === 'bottom') {\n        if (position.alignment === 'start') {\n          coordinates.x += elementBounding.left;\n        }\n\n        if (position.alignment === 'center') {\n          coordinates.x += elementBounding.left + (elementBounding.width / 2 - tooltipBounding.width / 2);\n        }\n\n        if (position.alignment === 'end') {\n          coordinates.x += elementBounding.right - tooltipBounding.width;\n        }\n      }\n\n      if (position.side === 'top') {\n        coordinates.y += elementBounding.top - tooltipBounding.height - this.settings.margin;\n      }\n\n      if (position.side === 'bottom') {\n        coordinates.y += elementBounding.bottom + this.settings.margin;\n      }\n\n      // left & right\n\n      if (position.side === 'left' || position.side === 'right') {\n        if (position.alignment === 'start') {\n          coordinates.y += elementBounding.top;\n        }\n\n        if (position.alignment === 'center') {\n          coordinates.y += elementBounding.top + (elementBounding.height / 2 - tooltipBounding.height / 2);\n        }\n\n        if (position.alignment === 'end') {\n          coordinates.y += elementBounding.bottom - tooltipBounding.height;\n        }\n      }\n\n      if (position.side === 'left') {\n        coordinates.x += elementBounding.left - this.settings.margin - tooltipBounding.width;\n      }\n\n      if (position.side === 'right') {\n        coordinates.x += elementBounding.right + this.settings.margin;\n      }\n\n      return coordinates;\n    }\n  }, {\n    key: 'checkVerticalSpace',\n    value: function checkVerticalSpace(elementBounding) {\n      var topSpace = elementBounding.top - this.settings.margin;\n      var bottomSpace = window.innerHeight - (elementBounding.bottom + this.settings.margin);\n\n      return {\n        start: topSpace > this.tooltip.offsetHeight,\n        end: bottomSpace > this.tooltip.offsetHeight\n      };\n    }\n  }, {\n    key: 'checkHorizontalSpace',\n    value: function checkHorizontalSpace(elementBounding) {\n      var leftSpace = elementBounding.left - this.settings.margin;\n      var rightSpace = window.innerWidth - (elementBounding.right + this.settings.margin);\n\n      return {\n        start: leftSpace > this.tooltip.offsetWidth,\n        end: rightSpace > this.tooltip.offsetWidth\n      };\n    }\n\n    // check space on sides in the viewport\n\n  }, {\n    key: 'getPossibleSides',\n    value: function getPossibleSides(elementBounding) {\n      return {\n        vertical: this.checkVerticalSpace(elementBounding),\n        horizontal: this.checkHorizontalSpace(elementBounding)\n      };\n    }\n\n    // compare desired position & possible space on sides;\n    // if desired is not possible, return best possible position\n\n  }, {\n    key: 'getActualPosition',\n    value: function getActualPosition(desired, possible) {\n      var positionMap = {\n        top: 'start',\n        bottom: 'end',\n        left: 'start',\n        right: 'end'\n      };\n\n      var oppositeMap = {\n        top: 'bottom',\n        bottom: 'top',\n        left: 'right',\n        right: 'left',\n        vertical: 'horizontal',\n        horizontal: 'vertical'\n      };\n\n      var axis = desired.side === 'top' || desired.side === 'bottom' ? 'vertical' : 'horizontal';\n\n      var getSide = function getSide(wantedAxis, wantedSide) {\n        var theAxis = possible[wantedAxis];\n        var side = void 0;\n\n        if (theAxis[positionMap[wantedSide]]) {\n          side = wantedSide;\n        } else if (theAxis[positionMap[oppositeMap[wantedSide]]]) {\n          side = oppositeMap[wantedSide];\n        } else {\n          side = getSide(oppositeMap[wantedAxis], wantedSide);\n        }\n\n        return side;\n      };\n\n      var getAlignment = function getAlignment(wantedAxis, wantedAlignment) {\n        var possibleAlign = possible[wantedAxis];\n        var alignment = void 0;\n\n        if (possibleAlign.start && possibleAlign.end) {\n          alignment = wantedAlignment;\n        } else if (!possibleAlign.start && !possibleAlign.end) {\n          alignment = 'center';\n        } else if (!possibleAlign.start) {\n          alignment = 'start';\n        } else if (!possibleAlign.end) {\n          alignment = 'end';\n        }\n\n        return alignment;\n      };\n\n      return {\n        side: getSide(axis, desired.side),\n        alignment: getAlignment(oppositeMap[axis], desired.alignment)\n      };\n    }\n  }, {\n    key: 'setTooltipPosition',\n    value: function setTooltipPosition(element) {\n      var elementRect = element.getBoundingClientRect();\n      var desiredPosition = this.getDesiredPosition(element);\n      var possibleSides = this.getPossibleSides(elementRect);\n      var actualPosition = this.getActualPosition(desiredPosition, possibleSides);\n      var coordinates = this.calcCoordinates(elementRect, actualPosition);\n\n      this.tooltip.style.left = coordinates.x + 'px';\n      this.tooltip.style.top = coordinates.y + 'px';\n\n      this.setClass(actualPosition.side + '-' + actualPosition.alignment);\n    }\n  }, {\n    key: 'setTooltipContent',\n    value: function setTooltipContent(content) {\n      this.tooltip.textContent = content;\n    }\n  }, {\n    key: 'mouseEnterHandler',\n    value: function mouseEnterHandler(event) {\n      var element = event.currentTarget;\n\n      this.setTooltipContent(element.dataset.tooltip);\n      this.setTooltipPosition(element);\n      this.setTooltipVisibility();\n    }\n  }, {\n    key: 'mouseLeaveHandler',\n    value: function mouseLeaveHandler() {\n      this.setTooltipVisibility();\n    }\n  }, {\n    key: 'bindElementEvents',\n    value: function bindElementEvents(element) {\n      var _this2 = this;\n\n      element.addEventListener('mouseenter', function (event) {\n        return _this2.mouseEnterHandler(event);\n      });\n      element.addEventListener('focus', function (event) {\n        return _this2.mouseEnterHandler(event);\n      });\n\n      element.addEventListener('mouseleave', function (event) {\n        return _this2.mouseLeaveHandler(event);\n      });\n      element.addEventListener('blur', function (event) {\n        return _this2.mouseLeaveHandler(event);\n      });\n    }\n  }, {\n    key: 'createTooltipData',\n    value: function createTooltipData() {\n      var _this3 = this;\n\n      [].concat(_toConsumableArray(this.tooltippedElements)).forEach(function (element) {\n        var elementHas = Tooltip.elHasNonEmptyAttr(element);\n\n        if (elementHas('title') && !elementHas('data-tooltip')) {\n          element.dataset.tooltip = element.getAttribute('title');\n          element.setAttribute('title', '');\n        }\n\n        if (!elementHas('data-position')) {\n          element.dataset.position = _this3.settings.position;\n        }\n\n        if (elementHas('data-tooltip')) {\n          _this3.bindElementEvents(element);\n        }\n      });\n    }\n  }, {\n    key: 'createTooltip',\n    value: function createTooltip() {\n      var tooltip = document.createElement('div');\n      tooltip.classList.add(this.settings.tooltipClass);\n      document.body.appendChild(tooltip);\n\n      this.tooltip = tooltip;\n      this.createTooltipData();\n    }\n  }], [{\n    key: 'elHasNonEmptyAttr',\n    value: function elHasNonEmptyAttr(el) {\n      return function (attr) {\n        return el.hasAttribute(attr) && el.getAttribute(attr) !== '';\n      };\n    }\n  }, {\n    key: 'getScroll',\n    value: function getScroll() {\n      var scroll = {};\n\n      scroll.x = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;\n\n      scroll.y = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;\n\n      return scroll;\n    }\n  }]);\n\n  return Tooltip;\n}();\n\nexports.default = Tooltip;\nmodule.exports = exports['default'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Rvb2x0aXAuanM/ZGUwMSJdLCJuYW1lcyI6WyJUb29sdGlwIiwib3B0aW9ucyIsInNldHRpbmdzIiwic2VsZWN0b3IiLCJ0b29sdGlwQ2xhc3MiLCJtYXJnaW4iLCJwb3NpdGlvbiIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwib3B0aW9uIiwidG9vbHRpcHBlZEVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlVG9vbHRpcCIsImVsZW1lbnQiLCJwb3NTcGxpdCIsImRhdGFzZXQiLCJzcGxpdCIsImxlbmd0aCIsInB1c2giLCJzaWRlIiwiYWxpZ25tZW50IiwidG9vbHRpcCIsInJlbW92ZUF0dHJpYnV0ZSIsImNsYXNzTGlzdCIsImFkZCIsInRvb2x0aXBQb3NpdGlvbiIsInZpc2liaWxpdHlDbGFzcyIsImNvbnRhaW5zIiwicmVtb3ZlIiwicmVzZXRDbGFzcyIsImVsZW1lbnRSZWN0IiwidG9vbHRpcEJvdW5kaW5nIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZWxlbWVudEJvdW5kaW5nIiwicGFnZVNjcm9sbCIsImdldFNjcm9sbCIsImNvb3JkaW5hdGVzIiwieCIsInkiLCJsZWZ0Iiwid2lkdGgiLCJyaWdodCIsInRvcCIsImhlaWdodCIsImJvdHRvbSIsInRvcFNwYWNlIiwiYm90dG9tU3BhY2UiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInN0YXJ0Iiwib2Zmc2V0SGVpZ2h0IiwiZW5kIiwibGVmdFNwYWNlIiwicmlnaHRTcGFjZSIsImlubmVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsInZlcnRpY2FsIiwiY2hlY2tWZXJ0aWNhbFNwYWNlIiwiaG9yaXpvbnRhbCIsImNoZWNrSG9yaXpvbnRhbFNwYWNlIiwiZGVzaXJlZCIsInBvc3NpYmxlIiwicG9zaXRpb25NYXAiLCJvcHBvc2l0ZU1hcCIsImF4aXMiLCJnZXRTaWRlIiwid2FudGVkQXhpcyIsIndhbnRlZFNpZGUiLCJ0aGVBeGlzIiwiZ2V0QWxpZ25tZW50Iiwid2FudGVkQWxpZ25tZW50IiwicG9zc2libGVBbGlnbiIsImRlc2lyZWRQb3NpdGlvbiIsImdldERlc2lyZWRQb3NpdGlvbiIsInBvc3NpYmxlU2lkZXMiLCJnZXRQb3NzaWJsZVNpZGVzIiwiYWN0dWFsUG9zaXRpb24iLCJnZXRBY3R1YWxQb3NpdGlvbiIsImNhbGNDb29yZGluYXRlcyIsInN0eWxlIiwic2V0Q2xhc3MiLCJjb250ZW50IiwidGV4dENvbnRlbnQiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJzZXRUb29sdGlwQ29udGVudCIsInNldFRvb2x0aXBQb3NpdGlvbiIsInNldFRvb2x0aXBWaXNpYmlsaXR5IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlRW50ZXJIYW5kbGVyIiwibW91c2VMZWF2ZUhhbmRsZXIiLCJlbGVtZW50SGFzIiwiZWxIYXNOb25FbXB0eUF0dHIiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJiaW5kRWxlbWVudEV2ZW50cyIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUb29sdGlwRGF0YSIsImVsIiwiYXR0ciIsImhhc0F0dHJpYnV0ZSIsInNjcm9sbCIsInBhZ2VYT2Zmc2V0IiwidW5kZWZpbmVkIiwiZG9jdW1lbnRFbGVtZW50IiwicGFyZW50Tm9kZSIsInNjcm9sbExlZnQiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBQU1BLE87QUFDSixxQkFBMEI7QUFBQTs7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3hCLFNBQUtDLFFBQUwsR0FBZ0I7QUFDZEMsZ0JBQVUsR0FESTtBQUVkQyxvQkFBYyxTQUZBO0FBR2RDLGNBQVEsRUFITTtBQUlkQyxnQkFBVTtBQUpJLEtBQWhCOztBQU9BQyxXQUFPQyxJQUFQLENBQVlQLE9BQVosRUFBcUJRLE9BQXJCLENBQTZCLFVBQUNDLE1BQUQsRUFBWTtBQUN2QyxZ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Q0EzRSxjQUFRRSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixLQUFLeEIsUUFBTCxDQUFjRSxZQUFwQztBQUNBUSxlQUFTdUYsSUFBVCxDQUFjQyxXQUFkLENBQTBCN0UsT0FBMUI7O0FBRUEsV0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsV0FBSzhFLGlCQUFMO0FBQ0Q7OztzQ0FyUndCQyxFLEVBQUk7QUFDM0IsYUFBTyxVQUFDQyxJQUFELEVBQVU7QUFDZixlQUFPRCxHQUFHRSxZQUFILENBQWdCRCxJQUFoQixLQUNBRCxHQUFHUCxZQUFILENBQWdCUSxJQUFoQixNQUEwQixFQURqQztBQUVELE9BSEQ7QUFJRDs7O2dDQUVrQjtBQUNqQixVQUFNRSxTQUFTLEVBQWY7O0FBRUFBLGFBQU9sRSxDQUFQLEdBQVlVLE9BQU95RCxXQUFQLEtBQXVCQyxTQUF4QixHQUNUMUQsT0FBT3lELFdBREUsR0FFVCxDQUFDOUYsU0FBU2dHLGVBQVQsSUFBNEJoRyxTQUFTdUYsSUFBVCxDQUFjVSxVQUExQyxJQUF3RGpHLFNBQVN1RixJQUFsRSxFQUF3RVcsVUFGMUU7O0FBSUFMLGFBQU9qRSxDQUFQLEdBQVlTLE9BQU84RCxXQUFQLEtBQXVCSixTQUF4QixHQUNUMUQsT0FBTzhELFdBREUsR0FFVCxDQUFDbkcsU0FBU2dHLGVBQVQsSUFBNEJoRyxTQUFTdUYsSUFBVCxDQUFjVSxVQUExQyxJQUF3RGpHLFNBQVN1RixJQUFsRSxFQUF3RWEsU0FGMUU7O0FBSUEsYUFBT1AsTUFBUDtBQUNEOzs7Ozs7a0JBcVFZekcsTyIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9vbHRpcCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuc2V0dGluZ3MgPSB7XG4gICAgICBzZWxlY3RvcjogJ2EnLFxuICAgICAgdG9vbHRpcENsYXNzOiAndG9vbHRpcCcsXG4gICAgICBtYXJnaW46IDEwLFxuICAgICAgcG9zaXRpb246ICd0b3AtY2VudGVyJyxcbiAgICB9O1xuXG4gICAgT2JqZWN0LmtleXMob3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICB0aGlzLnNldHRpbmdzW29wdGlvbl0gPSBvcHRpb25zW29wdGlvbl07XG4gICAgfSk7XG5cbiAgICB0aGlzLnRvb2x0aXBwZWRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zZXR0aW5ncy5zZWxlY3Rvcik7XG5cbiAgICB0aGlzLmNyZWF0ZVRvb2x0aXAoKTtcbiAgfVxuXG4gIHN0YXRpYyBlbEhhc05vbkVtcHR5QXR0cihlbCkge1xuICAgIHJldHVybiAoYXR0cikgPT4ge1xuICAgICAgcmV0dXJuIGVsLmhhc0F0dHJpYnV0ZShhdHRyKSAmJlxuICAgICAgICAgICAgIGVsLmdldEF0dHJpYnV0ZShhdHRyKSAhPT0gJyc7XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRTY3JvbGwoKSB7XG4gICAgY29uc3Qgc2Nyb2xsID0ge307XG5cbiAgICBzY3JvbGwueCA9ICh3aW5kb3cucGFnZVhPZmZzZXQgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgd2luZG93LnBhZ2VYT2Zmc2V0IDpcbiAgICAgIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLnNjcm9sbExlZnQ7XG5cbiAgICBzY3JvbGwueSA9ICh3aW5kb3cucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0IDpcbiAgICAgIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLnNjcm9sbFRvcDtcblxuICAgIHJldHVybiBzY3JvbGw7XG4gIH1cblxuICBnZXREZXNpcmVkUG9zaXRpb24oZWxlbWVudCkge1xuICAgIGNvbnN0IHBvc1NwbGl0ID0gZWxlbWVudC5kYXRhc2V0LnBvc2l0aW9uLnNwbGl0KCctJyk7XG5cbiAgICAvLyBmb3IgY2VudGVyZWQgcG9zaXRpb24gb25seSBvbmUgYWxpZ25tZW50IG1pZ2h0IGJlIHByb3ZpZGVkLFxuICAgIC8vIGVnLiB0b3AgPT09IHRvcC1jZW50ZXJcbiAgICBpZiAocG9zU3BsaXQubGVuZ3RoIDwgMikge1xuICAgICAgcG9zU3BsaXQucHVzaCgnY2VudGVyJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNpZGU6IHBvc1NwbGl0WzBdLFxuICAgICAgYWxpZ25tZW50OiBwb3NTcGxpdFsxXVxuICAgIH07XG4gIH1cblxuICByZXNldENsYXNzKCkge1xuICAgIHRoaXMudG9vbHRpcC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgdGhpcy50b29sdGlwLmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5ncy50b29sdGlwQ2xhc3MpO1xuICB9XG5cbiAgc2V0Q2xhc3ModG9vbHRpcFBvc2l0aW9uKSB7XG4gICAgdGhpcy50b29sdGlwLmNsYXNzTGlzdC5hZGQoYCR7dGhpcy5zZXR0aW5ncy50b29sdGlwQ2xhc3N9LS0ke3Rvb2x0aXBQb3NpdGlvbn1gKTtcbiAgfVxuXG4gIHNldFRvb2x0aXBWaXNpYmlsaXR5KCkge1xuICAgIGNvbnN0IHZpc2liaWxpdHlDbGFzcyA9IGAke3RoaXMuc2V0dGluZ3MudG9vbHRpcENsYXNzfS0tdmlzaWJsZWA7XG5cbiAgICBpZiAoIXRoaXMudG9vbHRpcC5jbGFzc0xpc3QuY29udGFpbnModmlzaWJpbGl0eUNsYXNzKSkge1xuICAgICAgdGhpcy50b29sdGlwLmNsYXNzTGlzdC5hZGQodmlzaWJpbGl0eUNsYXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50b29sdGlwLmNsYXNzTGlzdC5yZW1vdmUodmlzaWJpbGl0eUNsYXNzKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMudG9vbHRpcC5jbGFzc0xpc3QuY29udGFpbnModmlzaWJpbGl0eUNsYXNzKSkge1xuICAgICAgdGhpcy50b29sdGlwLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgIHRoaXMucmVzZXRDbGFzcygpO1xuICAgIH1cbiAgfVxuXG4gIGNhbGNDb29yZGluYXRlcyhlbGVtZW50UmVjdCwgcG9zaXRpb24pIHtcbiAgICBjb25zdCB0b29sdGlwQm91bmRpbmcgPSB0aGlzLnRvb2x0aXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZWxlbWVudEJvdW5kaW5nID0gZWxlbWVudFJlY3Q7XG4gICAgY29uc3QgcGFnZVNjcm9sbCA9IFRvb2x0aXAuZ2V0U2Nyb2xsKCk7XG5cbiAgICBjb25zdCBjb29yZGluYXRlcyA9IHtcbiAgICAgIHg6IHBhZ2VTY3JvbGwueCxcbiAgICAgIHk6IHBhZ2VTY3JvbGwueVxuICAgIH07XG5cbiAgICAvLyB0b3AgJiBib3R0b21cblxuICAgIGlmICgocG9zaXRpb24uc2lkZSA9PT0gJ3RvcCcgfHwgcG9zaXRpb24uc2lkZSA9PT0gJ2JvdHRvbScpKSB7XG4gICAgICBpZiAocG9zaXRpb24uYWxpZ25tZW50ID09PSAnc3RhcnQnKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnggKz0gZWxlbWVudEJvdW5kaW5nLmxlZnQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChwb3NpdGlvbi5hbGlnbm1lbnQgPT09ICdjZW50ZXInKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnggKz1cbiAgICAgICAgICBlbGVtZW50Qm91bmRpbmcubGVmdCArXG4gICAgICAgICAgKChlbGVtZW50Qm91bmRpbmcud2lkdGggLyAyKSAtICh0b29sdGlwQm91bmRpbmcud2lkdGggLyAyKSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwb3NpdGlvbi5hbGlnbm1lbnQgPT09ICdlbmQnKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnggKz0gKGVsZW1lbnRCb3VuZGluZy5yaWdodCAtIHRvb2x0aXBCb3VuZGluZy53aWR0aCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHBvc2l0aW9uLnNpZGUgPT09ICd0b3AnKSB7XG4gICAgICBjb29yZGluYXRlcy55ICs9IChlbGVtZW50Qm91bmRpbmcudG9wIC0gdG9vbHRpcEJvdW5kaW5nLmhlaWdodCAtIHRoaXMuc2V0dGluZ3MubWFyZ2luKTtcbiAgICB9XG5cbiAgICBpZiAocG9zaXRpb24uc2lkZSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIGNvb3JkaW5hdGVzLnkgKz0gKGVsZW1lbnRCb3VuZGluZy5ib3R0b20gKyB0aGlzLnNldHRpbmdzLm1hcmdpbik7XG4gICAgfVxuXG4gICAgLy8gbGVmdCAmIHJpZ2h0XG5cbiAgICBpZiAoKHBvc2l0aW9uLnNpZGUgPT09ICdsZWZ0JyB8fCBwb3NpdGlvbi5zaWRlID09PSAncmlnaHQnKSkge1xuICAgICAgaWYgKHBvc2l0aW9uLmFsaWdubWVudCA9PT0gJ3N0YXJ0Jykge1xuICAgICAgICBjb29yZGluYXRlcy55ICs9IGVsZW1lbnRCb3VuZGluZy50b3A7XG4gICAgICB9XG5cbiAgICAgIGlmIChwb3NpdGlvbi5hbGlnbm1lbnQgPT09ICdjZW50ZXInKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnkgKz1cbiAgICAgICAgICBlbGVtZW50Qm91bmRpbmcudG9wICtcbiAgICAgICAgICAoKGVsZW1lbnRCb3VuZGluZy5oZWlnaHQgLyAyKSAtICh0b29sdGlwQm91bmRpbmcuaGVpZ2h0IC8gMikpO1xuICAgICAgfVxuXG4gICAgICBpZiAocG9zaXRpb24uYWxpZ25tZW50ID09PSAnZW5kJykge1xuICAgICAgICBjb29yZGluYXRlcy55ICs9IGVsZW1lbnRCb3VuZGluZy5ib3R0b20gLSB0b29sdGlwQm91bmRpbmcuaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbi5zaWRlID09PSAnbGVmdCcpIHtcbiAgICAgIGNvb3JkaW5hdGVzLnggKz0gKGVsZW1lbnRCb3VuZGluZy5sZWZ0IC0gdGhpcy5zZXR0aW5ncy5tYXJnaW4gLSB0b29sdGlwQm91bmRpbmcud2lkdGgpO1xuICAgIH1cblxuICAgIGlmIChwb3NpdGlvbi5zaWRlID09PSAncmlnaHQnKSB7XG4gICAgICBjb29yZGluYXRlcy54ICs9IChlbGVtZW50Qm91bmRpbmcucmlnaHQgKyB0aGlzLnNldHRpbmdzLm1hcmdpbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICB9XG5cbiAgY2hlY2tWZXJ0aWNhbFNwYWNlKGVsZW1lbnRCb3VuZGluZykge1xuICAgIGNvbnN0IHRvcFNwYWNlID0gKGVsZW1lbnRCb3VuZGluZy50b3AgLSB0aGlzLnNldHRpbmdzLm1hcmdpbik7XG4gICAgY29uc3QgYm90dG9tU3BhY2UgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSAoZWxlbWVudEJvdW5kaW5nLmJvdHRvbSArIHRoaXMuc2V0dGluZ3MubWFyZ2luKTtcblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogdG9wU3BhY2UgPiB0aGlzLnRvb2x0aXAub2Zmc2V0SGVpZ2h0LFxuICAgICAgZW5kOiBib3R0b21TcGFjZSA+IHRoaXMudG9vbHRpcC5vZmZzZXRIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgY2hlY2tIb3Jpem9udGFsU3BhY2UoZWxlbWVudEJvdW5kaW5nKSB7XG4gICAgY29uc3QgbGVmdFNwYWNlID0gKGVsZW1lbnRCb3VuZGluZy5sZWZ0IC0gdGhpcy5zZXR0aW5ncy5tYXJnaW4pO1xuICAgIGNvbnN0IHJpZ2h0U3BhY2UgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIChlbGVtZW50Qm91bmRpbmcucmlnaHQgKyB0aGlzLnNldHRpbmdzLm1hcmdpbik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6IGxlZnRTcGFjZSA+IHRoaXMudG9vbHRpcC5vZmZzZXRXaWR0aCxcbiAgICAgIGVuZDogcmlnaHRTcGFjZSA+IHRoaXMudG9vbHRpcC5vZmZzZXRXaWR0aFxuICAgIH07XG4gIH1cblxuICAvLyBjaGVjayBzcGFjZSBvbiBzaWRlcyBpbiB0aGUgdmlld3BvcnRcbiAgZ2V0UG9zc2libGVTaWRlcyhlbGVtZW50Qm91bmRpbmcpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmVydGljYWw6IHRoaXMuY2hlY2tWZXJ0aWNhbFNwYWNlKGVsZW1lbnRCb3VuZGluZyksXG4gICAgICBob3Jpem9udGFsOiB0aGlzLmNoZWNrSG9yaXpvbnRhbFNwYWNlKGVsZW1lbnRCb3VuZGluZylcbiAgICB9O1xuICB9XG5cbiAgLy8gY29tcGFyZSBkZXNpcmVkIHBvc2l0aW9uICYgcG9zc2libGUgc3BhY2Ugb24gc2lkZXM7XG4gIC8vIGlmIGRlc2lyZWQgaXMgbm90IHBvc3NpYmxlLCByZXR1cm4gYmVzdCBwb3NzaWJsZSBwb3NpdGlvblxuICBnZXRBY3R1YWxQb3NpdGlvbihkZXNpcmVkLCBwb3NzaWJsZSkge1xuICAgIGNvbnN0IHBvc2l0aW9uTWFwID0ge1xuICAgICAgdG9wOiAnc3RhcnQnLFxuICAgICAgYm90dG9tOiAnZW5kJyxcbiAgICAgIGxlZnQ6ICdzdGFydCcsXG4gICAgICByaWdodDogJ2VuZCcsXG4gICAgfTtcblxuICAgIGNvbnN0IG9wcG9zaXRlTWFwID0ge1xuICAgICAgdG9wOiAnYm90dG9tJyxcbiAgICAgIGJvdHRvbTogJ3RvcCcsXG4gICAgICBsZWZ0OiAncmlnaHQnLFxuICAgICAgcmlnaHQ6ICdsZWZ0JyxcbiAgICAgIHZlcnRpY2FsOiAnaG9yaXpvbnRhbCcsXG4gICAgICBob3Jpem9udGFsOiAndmVydGljYWwnLFxuICAgIH07XG5cbiAgICBjb25zdCBheGlzID0gKFxuICAgICAgZGVzaXJlZC5zaWRlID09PSAndG9wJyB8fCBkZXNpcmVkLnNpZGUgPT09ICdib3R0b20nXG4gICAgKSA/ICd2ZXJ0aWNhbCcgOiAnaG9yaXpvbnRhbCc7XG5cbiAgICBjb25zdCBnZXRTaWRlID0gKHdhbnRlZEF4aXMsIHdhbnRlZFNpZGUpID0+IHtcbiAgICAgIGNvbnN0IHRoZUF4aXMgPSBwb3NzaWJsZVt3YW50ZWRBeGlzXTtcbiAgICAgIGxldCBzaWRlO1xuXG4gICAgICBpZiAodGhlQXhpc1twb3NpdGlvbk1hcFt3YW50ZWRTaWRlXV0pIHtcbiAgICAgICAgc2lkZSA9IHdhbnRlZFNpZGU7XG4gICAgICB9IGVsc2UgaWYgKHRoZUF4aXNbcG9zaXRpb25NYXBbb3Bwb3NpdGVNYXBbd2FudGVkU2lkZV1dXSkge1xuICAgICAgICBzaWRlID0gb3Bwb3NpdGVNYXBbd2FudGVkU2lkZV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzaWRlID0gZ2V0U2lkZShvcHBvc2l0ZU1hcFt3YW50ZWRBeGlzXSwgd2FudGVkU2lkZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzaWRlO1xuICAgIH07XG5cbiAgICBjb25zdCBnZXRBbGlnbm1lbnQgPSAod2FudGVkQXhpcywgd2FudGVkQWxpZ25tZW50KSA9PiB7XG4gICAgICBjb25zdCBwb3NzaWJsZUFsaWduID0gcG9zc2libGVbd2FudGVkQXhpc107XG4gICAgICBsZXQgYWxpZ25tZW50O1xuXG4gICAgICBpZiAocG9zc2libGVBbGlnbi5zdGFydCAmJiBwb3NzaWJsZUFsaWduLmVuZCkge1xuICAgICAgICBhbGlnbm1lbnQgPSB3YW50ZWRBbGlnbm1lbnQ7XG4gICAgICB9IGVsc2UgaWYgKCFwb3NzaWJsZUFsaWduLnN0YXJ0ICYmICFwb3NzaWJsZUFsaWduLmVuZCkge1xuICAgICAgICBhbGlnbm1lbnQgPSAnY2VudGVyJztcbiAgICAgIH0gZWxzZSBpZiAoIXBvc3NpYmxlQWxpZ24uc3RhcnQpIHtcbiAgICAgICAgYWxpZ25tZW50ID0gJ3N0YXJ0JztcbiAgICAgIH0gZWxzZSBpZiAoIXBvc3NpYmxlQWxpZ24uZW5kKSB7XG4gICAgICAgIGFsaWdubWVudCA9ICdlbmQnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWxpZ25tZW50O1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2lkZTogZ2V0U2lkZShheGlzLCBkZXNpcmVkLnNpZGUpLFxuICAgICAgYWxpZ25tZW50OiBnZXRBbGlnbm1lbnQob3Bwb3NpdGVNYXBbYXhpc10sIGRlc2lyZWQuYWxpZ25tZW50KVxuICAgIH07XG4gIH1cblxuICBzZXRUb29sdGlwUG9zaXRpb24oZWxlbWVudCkge1xuICAgIGNvbnN0IGVsZW1lbnRSZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBkZXNpcmVkUG9zaXRpb24gPSB0aGlzLmdldERlc2lyZWRQb3NpdGlvbihlbGVtZW50KTtcbiAgICBjb25zdCBwb3NzaWJsZVNpZGVzID0gdGhpcy5nZXRQb3NzaWJsZVNpZGVzKGVsZW1lbnRSZWN0KTtcbiAgICBjb25zdCBhY3R1YWxQb3NpdGlvbiA9IHRoaXMuZ2V0QWN0dWFsUG9zaXRpb24oZGVzaXJlZFBvc2l0aW9uLCBwb3NzaWJsZVNpZGVzKTtcbiAgICBjb25zdCBjb29yZGluYXRlcyA9IHRoaXMuY2FsY0Nvb3JkaW5hdGVzKGVsZW1lbnRSZWN0LCBhY3R1YWxQb3NpdGlvbik7XG5cbiAgICB0aGlzLnRvb2x0aXAuc3R5bGUubGVmdCA9IGAke2Nvb3JkaW5hdGVzLnh9cHhgO1xuICAgIHRoaXMudG9vbHRpcC5zdHlsZS50b3AgPSBgJHtjb29yZGluYXRlcy55fXB4YDtcblxuICAgIHRoaXMuc2V0Q2xhc3MoYCR7YWN0dWFsUG9zaXRpb24uc2lkZX0tJHthY3R1YWxQb3NpdGlvbi5hbGlnbm1lbnR9YCk7XG4gIH1cblxuICBzZXRUb29sdGlwQ29udGVudChjb250ZW50KSB7XG4gICAgdGhpcy50b29sdGlwLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgfVxuXG4gIG1vdXNlRW50ZXJIYW5kbGVyKGV2ZW50KSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG5cbiAgICB0aGlzLnNldFRvb2x0aXBDb250ZW50KGVsZW1lbnQuZGF0YXNldC50b29sdGlwKTtcbiAgICB0aGlzLnNldFRvb2x0aXBQb3NpdGlvbihlbGVtZW50KTtcbiAgICB0aGlzLnNldFRvb2x0aXBWaXNpYmlsaXR5KCk7XG4gIH1cblxuICBtb3VzZUxlYXZlSGFuZGxlcigpIHtcbiAgICB0aGlzLnNldFRvb2x0aXBWaXNpYmlsaXR5KCk7XG4gIH1cblxuICBiaW5kRWxlbWVudEV2ZW50cyhlbGVtZW50KSB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZXZlbnQgPT4gdGhpcy5tb3VzZUVudGVySGFuZGxlcihldmVudCkpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBldmVudCA9PiB0aGlzLm1vdXNlRW50ZXJIYW5kbGVyKGV2ZW50KSk7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBldmVudCA9PiB0aGlzLm1vdXNlTGVhdmVIYW5kbGVyKGV2ZW50KSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZXZlbnQgPT4gdGhpcy5tb3VzZUxlYXZlSGFuZGxlcihldmVudCkpO1xuICB9XG5cbiAgY3JlYXRlVG9vbHRpcERhdGEoKSB7XG4gICAgWy4uLnRoaXMudG9vbHRpcHBlZEVsZW1lbnRzXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBlbGVtZW50SGFzID0gVG9vbHRpcC5lbEhhc05vbkVtcHR5QXR0cihlbGVtZW50KTtcblxuICAgICAgaWYgKGVsZW1lbnRIYXMoJ3RpdGxlJykgJiYgIWVsZW1lbnRIYXMoJ2RhdGEtdG9vbHRpcCcpKSB7XG4gICAgICAgIGVsZW1lbnQuZGF0YXNldC50b29sdGlwID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCd0aXRsZScsICcnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFlbGVtZW50SGFzKCdkYXRhLXBvc2l0aW9uJykpIHtcbiAgICAgICAgZWxlbWVudC5kYXRhc2V0LnBvc2l0aW9uID0gdGhpcy5zZXR0aW5ncy5wb3NpdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKGVsZW1lbnRIYXMoJ2RhdGEtdG9vbHRpcCcpKSB7XG4gICAgICAgIHRoaXMuYmluZEVsZW1lbnRFdmVudHMoZWxlbWVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjcmVhdGVUb29sdGlwKCkge1xuICAgIGNvbnN0IHRvb2x0aXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b29sdGlwLmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5ncy50b29sdGlwQ2xhc3MpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodG9vbHRpcCk7XG5cbiAgICB0aGlzLnRvb2x0aXAgPSB0b29sdGlwO1xuICAgIHRoaXMuY3JlYXRlVG9vbHRpcERhdGEoKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb29sdGlwO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xpYi90b29sdGlwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);
});