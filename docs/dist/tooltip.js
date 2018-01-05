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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/*\n\nposition:\n  'left-top'\n  'center-top' || 'top'\n  'right-top'\n\n  'left-center' || 'left'\n\n  'right-center' || 'right'\n\n  'left-bottom'\n  'center-bottom' || 'bottom'\n  'right-bottom'\n\n*/\nvar Tooltip = function () {\n  function Tooltip() {\n    var _this = this;\n\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, Tooltip);\n\n    this.settings = {\n      selector: 'a',\n      tooltipClass: 'tooltip',\n      margin: 10,\n      position: 'center-top'\n    };\n\n    Object.keys(options).forEach(function (option) {\n      _this.settings[option] = options[option];\n    });\n\n    this.tooltippedElements = document.querySelectorAll(this.settings.selector);\n\n    this.createTooltip();\n  }\n\n  _createClass(Tooltip, [{\n    key: 'getDesiredPosition',\n    value: function getDesiredPosition(element) {\n      var position = '';\n\n      if (Tooltip.elHasNonEmptyAttr(element, 'data-position')) {\n        position = element.dataset.position;\n      } else {\n        position = this.settings.position;\n      }\n\n      var posSplit = position.split('-');\n\n      if (posSplit.length < 2) {\n        if (posSplit[0] === 'top' || posSplit[0] === 'bottom') {\n          posSplit.unshift('center');\n        }\n\n        if (posSplit[0] === 'left' || posSplit[0] === 'right') {\n          posSplit.push('center');\n        }\n      }\n\n      return {\n        x: posSplit[0],\n        y: posSplit[1]\n      };\n    }\n  }, {\n    key: 'setTooltipVisibility',\n    value: function setTooltipVisibility() {\n      var visibilityClass = 'tooltip--visible';\n\n      if (!this.tooltip.classList.contains(visibilityClass)) {\n        this.tooltip.classList.add(visibilityClass);\n      } else {\n        this.tooltip.classList.remove(visibilityClass);\n      }\n\n      if (!this.tooltip.classList.contains(visibilityClass)) {\n        this.tooltip.removeAttribute('style');\n      }\n    }\n  }, {\n    key: 'removeTooltipArrowClass',\n    value: function removeTooltipArrowClass() {\n      this.tooltip.removeAttribute('class');\n      this.tooltip.classList.add(this.settings.tooltipClass);\n    }\n  }, {\n    key: 'setTooltipArrowClass',\n    value: function setTooltipArrowClass(tooltipPosition) {\n      this.tooltip.classList.add('tooltip--' + tooltipPosition);\n    }\n  }, {\n    key: 'calcXPos',\n    value: function calcXPos(element, possiblePositions) {\n      var tooltipBounding = this.tooltip.getBoundingClientRect();\n      var elementBounding = element.getBoundingClientRect();\n      var pageXScroll = Tooltip.getScroll().left;\n\n      var desiredPosition = this.getDesiredPosition(element);\n\n      console.log(desiredPosition);\n\n      var xPos = null;\n\n      // no space on left side\n      if (!possiblePositions.left) {\n        xPos = pageXScroll + elementBounding.left;\n\n        // no space on right side\n      } else if (!possiblePositions.right) {\n        xPos = pageXScroll + elementBounding.right - tooltipBounding.width;\n\n        // in any other case just center it\n      } else {\n        xPos = pageXScroll + elementBounding.left + elementBounding.width / 2 - tooltipBounding.width / 2;\n      }\n\n      // if (possiblePositions.left) {\n      //   xPos = pageXScroll + elementBounding.left - this.settings.margin - tooltipBounding.width;\n      // } else if (possiblePositions.right) {\n      //   xPos = pageXScroll + elementBounding.right + this.settings.margin;\n      // }\n\n      // if (rightLimited) {\n      //   xPos = pageXScroll + elementBounding.right - tooltipBounding.width;\n      // }\n\n      return xPos;\n    }\n  }, {\n    key: 'calcYPos',\n    value: function calcYPos(element, possiblePositions) {\n      var tooltipBounding = this.tooltip.getBoundingClientRect();\n      var elementBounding = element.getBoundingClientRect();\n      var pageYScroll = Tooltip.getScroll().top;\n      // const desiredPosition = this.getDesiredPosition(element);\n\n      var yPos = null;\n\n      // if (center) {\n      //   yPos = pageYScroll + elementBounding.top + (elementBounding.height / 2) - (tooltipBounding.height / 2);\n      // }\n\n      if (possiblePositions.top) {\n        yPos = pageYScroll + elementBounding.top - tooltipBounding.height - this.settings.margin;\n      } else if (possiblePositions.bottom) {\n        yPos = pageYScroll + elementBounding.top + elementBounding.height + this.settings.margin;\n      }\n\n      return yPos;\n    }\n  }, {\n    key: 'checkBottomPosition',\n    value: function checkBottomPosition(elementBounding) {\n      var space = elementBounding.bottom + this.tooltip.offsetHeight + this.settings.margin;\n      return space < window.innerHeight;\n    }\n  }, {\n    key: 'checkRightPosition',\n    value: function checkRightPosition(elementBounding) {\n      var space = elementBounding.right + this.tooltip.offsetWidth + this.settings.margin;\n      return space < window.innerWidth;\n    }\n  }, {\n    key: 'checkLeftPosition',\n    value: function checkLeftPosition(elementBounding) {\n      var space = elementBounding.left - this.tooltip.offsetWidth - this.settings.margin;\n      return space > 0;\n    }\n  }, {\n    key: 'checkTopPosition',\n    value: function checkTopPosition(elementBounding) {\n      var space = elementBounding.top - this.tooltip.offsetHeight - this.settings.margin;\n      return space > 0;\n    }\n  }, {\n    key: 'getPossiblePositions',\n    value: function getPossiblePositions(elementBounding) {\n      return {\n        top: this.checkTopPosition(elementBounding),\n        right: this.checkRightPosition(elementBounding),\n        bottom: this.checkBottomPosition(elementBounding),\n        left: this.checkLeftPosition(elementBounding)\n      };\n    }\n  }, {\n    key: 'setTooltipPosition',\n    value: function setTooltipPosition(element) {\n      var possiblePositions = this.getPossiblePositions(element.getBoundingClientRect());\n\n      // console.log(possiblePositions);\n\n      this.tooltip.style.left = this.calcXPos(element, possiblePositions) + 'px';\n      this.tooltip.style.top = this.calcYPos(element, possiblePositions) + 'px';\n    }\n  }, {\n    key: 'setTooltipContent',\n    value: function setTooltipContent(content) {\n      this.tooltip.textContent = content;\n    }\n  }, {\n    key: 'mouseEnterHandler',\n    value: function mouseEnterHandler(event) {\n      var element = event.currentTarget;\n\n      this.setTooltipContent(element.dataset.tooltip);\n      this.setTooltipPosition(element);\n      this.setTooltipArrowClass(element.dataset.position);\n      this.setTooltipVisibility();\n    }\n  }, {\n    key: 'mouseLeaveHandler',\n    value: function mouseLeaveHandler() {\n      this.setTooltipVisibility();\n      this.removeTooltipArrowClass();\n    }\n\n    // windowResizeHandler() {\n    //   tooltippedElementRect = element.getBoundingClientRect();\n    // }\n\n  }, {\n    key: 'bindElementEvents',\n    value: function bindElementEvents(element) {\n      var _this2 = this;\n\n      element.addEventListener('mouseenter', function (event) {\n        return _this2.mouseEnterHandler(event);\n      });\n      element.addEventListener('focus', function (event) {\n        return _this2.mouseEnterHandler(event);\n      });\n\n      element.addEventListener('mouseleave', function (event) {\n        return _this2.mouseLeaveHandler(event);\n      });\n      element.addEventListener('blur', function (event) {\n        return _this2.mouseLeaveHandler(event);\n      });\n\n      // window.addEventListener('resize', event => this.windowResizeHandler(event));\n    }\n  }, {\n    key: 'createTooltipData',\n    value: function createTooltipData() {\n      var _this3 = this;\n\n      [].concat(_toConsumableArray(this.tooltippedElements)).forEach(function (element) {\n        if (Tooltip.elHasNonEmptyAttr(element, 'title')) {\n          element.dataset.tooltip = element.getAttribute('title');\n          element.setAttribute('title', '');\n        }\n\n        if (Tooltip.elHasNonEmptyAttr(element, 'data-tooltip')) {\n          _this3.bindElementEvents(element);\n        }\n      });\n    }\n  }, {\n    key: 'createTooltip',\n    value: function createTooltip() {\n      var tooltip = document.createElement('div');\n      tooltip.classList.add(this.settings.tooltipClass);\n      document.body.appendChild(tooltip);\n\n      this.tooltip = tooltip;\n      this.createTooltipData();\n    }\n  }], [{\n    key: 'elHasNonEmptyAttr',\n    value: function elHasNonEmptyAttr(el, attr) {\n      return el.hasAttribute(attr) && el.getAttribute(attr) !== '';\n    }\n  }, {\n    key: 'getScroll',\n    value: function getScroll() {\n      var scroll = {};\n\n      scroll.top = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;\n\n      scroll.left = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;\n\n      return scroll;\n    }\n  }]);\n\n  return Tooltip;\n}();\n\nexports.default = Tooltip;\nmodule.exports = exports['default'];//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGliL3Rvb2x0aXAuanM/ZGUwMSJdLCJuYW1lcyI6WyJUb29sdGlwIiwib3B0aW9ucyIsInNldHRpbmdzIiwic2VsZWN0b3IiLCJ0b29sdGlwQ2xhc3MiLCJtYXJnaW4iLCJwb3NpdGlvbiIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwib3B0aW9uIiwidG9vbHRpcHBlZEVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY3JlYXRlVG9vbHRpcCIsImVsZW1lbnQiLCJlbEhhc05vbkVtcHR5QXR0ciIsImRhdGFzZXQiLCJwb3NTcGxpdCIsInNwbGl0IiwibGVuZ3RoIiwidW5zaGlmdCIsInB1c2giLCJ4IiwieSIsInZpc2liaWxpdHlDbGFzcyIsInRvb2x0aXAiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImFkZCIsInJlbW92ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInRvb2x0aXBQb3NpdGlvbiIsInBvc3NpYmxlUG9zaXRpb25zIiwidG9vbHRpcEJvdW5kaW5nIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZWxlbWVudEJvdW5kaW5nIiwicGFnZVhTY3JvbGwiLCJnZXRTY3JvbGwiLCJsZWZ0IiwiZGVzaXJlZFBvc2l0aW9uIiwiZ2V0RGVzaXJlZFBvc2l0aW9uIiwiY29uc29sZSIsImxvZyIsInhQb3MiLCJyaWdodCIsIndpZHRoIiwicGFnZVlTY3JvbGwiLCJ0b3AiLCJ5UG9zIiwiaGVpZ2h0IiwiYm90dG9tIiwic3BhY2UiLCJvZmZzZXRIZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsIm9mZnNldFdpZHRoIiwiaW5uZXJXaWR0aCIsImNoZWNrVG9wUG9zaXRpb24iLCJjaGVja1JpZ2h0UG9zaXRpb24iLCJjaGVja0JvdHRvbVBvc2l0aW9uIiwiY2hlY2tMZWZ0UG9zaXRpb24iLCJnZXRQb3NzaWJsZVBvc2l0aW9ucyIsInN0eWxlIiwiY2FsY1hQb3MiLCJjYWxjWVBvcyIsImNvbnRlbnQiLCJ0ZXh0Q29udGVudCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInNldFRvb2x0aXBDb250ZW50Iiwic2V0VG9vbHRpcFBvc2l0aW9uIiwic2V0VG9vbHRpcEFycm93Q2xhc3MiLCJzZXRUb29sdGlwVmlzaWJpbGl0eSIsInJlbW92ZVRvb2x0aXBBcnJvd0NsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1vdXNlRW50ZXJIYW5kbGVyIiwibW91c2VMZWF2ZUhhbmRsZXIiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJiaW5kRWxlbWVudEV2ZW50cyIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjcmVhdGVUb29sdGlwRGF0YSIsImVsIiwiYXR0ciIsImhhc0F0dHJpYnV0ZSIsInNjcm9sbCIsInBhZ2VZT2Zmc2V0IiwidW5kZWZpbmVkIiwiZG9jdW1lbnRFbGVtZW50IiwicGFyZW50Tm9kZSIsInNjcm9sbFRvcCIsInBhZ2VYT2Zmc2V0Iiwic2Nyb2xsTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7SUFnQk1BLE87QUFDSixxQkFBMEI7QUFBQTs7QUFBQSxRQUFkQyxPQUFjLHVFQUFKLEVBQUk7O0FBQUE7O0FBQ3hCLFNBQUtDLFFBQUwsR0FBZ0I7QUFDZEMsZ0JBQVUsR0FESTtBQUVkQyxvQkFBYyxTQUZBO0FBR2RDLGNBQVEsRUFITTtBQUlkQyxnQkFBVTtBQUpJLEtBQWhCOztBQU9BQyxXQUFPQyxJQUFQLENBQVlQLE9BQVosRUFBcUJRLE9BQXJCLENBQTZCLFVBQUNDLE1BQUQsRUFBWTtBQUN2QyxZQUFLUixRQUFMLENBQWNRLE1BQWQsSUFBd0JULFFBQVFTLE1BQVIsQ0FBeEI7QUFDRCxLQUZEOztBQUlBLFNBQUtDLGtCQUFMLEdBQTBCQyxTQUFTQyxnQkFBVCxDQUEwQixLQUFLWCxRQUFMLENBQWNDLFFBQXhDLENBQTFCOztBQUVBLFNBQUtXLGFBQUw7QUFDRDs7Ozt1Q0FxQmtCQyxPLEVBQVM7QUFDMUIsVUFB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QVNzRSxJQUFULENBQWNDLFdBQWQsQ0FBMEJ6RCxPQUExQjs7QUFFQSxXQUFLQSxPQUFMLEdBQWVBLE9BQWY7QUFDQSxXQUFLMEQsaUJBQUw7QUFDRDs7O3NDQXpOd0JDLEUsRUFBSUMsSSxFQUFNO0FBQ2pDLGFBQU9ELEdBQUdFLFlBQUgsQ0FBZ0JELElBQWhCLEtBQ0FELEdBQUdQLFlBQUgsQ0FBZ0JRLElBQWhCLE1BQTBCLEVBRGpDO0FBRUQ7OztnQ0FFa0I7QUFDakIsVUFBTUUsU0FBUyxFQUFmOztBQUVBQSxhQUFPeEMsR0FBUCxHQUFjTSxPQUFPbUMsV0FBUCxLQUF1QkMsU0FBeEIsR0FDWHBDLE9BQU9tQyxXQURJLEdBRVgsQ0FBQzdFLFNBQVMrRSxlQUFULElBQTRCL0UsU0FBU3NFLElBQVQsQ0FBY1UsVUFBMUMsSUFBd0RoRixTQUFTc0UsSUFBbEUsRUFBd0VXLFNBRjFFOztBQUlBTCxhQUFPakQsSUFBUCxHQUFlZSxPQUFPd0MsV0FBUCxLQUF1QkosU0FBeEIsR0FDWnBDLE9BQU93QyxXQURLLEdBRVosQ0FBQ2xGLFNBQVMrRSxlQUFULElBQTRCL0UsU0FBU3NFLElBQVQsQ0FBY1UsVUFBMUMsSUFBd0RoRixTQUFTc0UsSUFBbEUsRUFBd0VhLFVBRjFFOztBQUlBLGFBQU9QLE1BQVA7QUFDRDs7Ozs7O2tCQTJNWXhGLE8iLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5cbnBvc2l0aW9uOlxuICAnbGVmdC10b3AnXG4gICdjZW50ZXItdG9wJyB8fCAndG9wJ1xuICAncmlnaHQtdG9wJ1xuXG4gICdsZWZ0LWNlbnRlcicgfHwgJ2xlZnQnXG5cbiAgJ3JpZ2h0LWNlbnRlcicgfHwgJ3JpZ2h0J1xuXG4gICdsZWZ0LWJvdHRvbSdcbiAgJ2NlbnRlci1ib3R0b20nIHx8ICdib3R0b20nXG4gICdyaWdodC1ib3R0b20nXG5cbiovXG5jbGFzcyBUb29sdGlwIHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5zZXR0aW5ncyA9IHtcbiAgICAgIHNlbGVjdG9yOiAnYScsXG4gICAgICB0b29sdGlwQ2xhc3M6ICd0b29sdGlwJyxcbiAgICAgIG1hcmdpbjogMTAsXG4gICAgICBwb3NpdGlvbjogJ2NlbnRlci10b3AnXG4gICAgfTtcblxuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgdGhpcy5zZXR0aW5nc1tvcHRpb25dID0gb3B0aW9uc1tvcHRpb25dO1xuICAgIH0pO1xuXG4gICAgdGhpcy50b29sdGlwcGVkRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2V0dGluZ3Muc2VsZWN0b3IpO1xuXG4gICAgdGhpcy5jcmVhdGVUb29sdGlwKCk7XG4gIH1cblxuICBzdGF0aWMgZWxIYXNOb25FbXB0eUF0dHIoZWwsIGF0dHIpIHtcbiAgICByZXR1cm4gZWwuaGFzQXR0cmlidXRlKGF0dHIpICYmXG4gICAgICAgICAgIGVsLmdldEF0dHJpYnV0ZShhdHRyKSAhPT0gJyc7XG4gIH1cblxuICBzdGF0aWMgZ2V0U2Nyb2xsKCkge1xuICAgIGNvbnN0IHNjcm9sbCA9IHt9O1xuXG4gICAgc2Nyb2xsLnRvcCA9ICh3aW5kb3cucGFnZVlPZmZzZXQgIT09IHVuZGVmaW5lZCkgP1xuICAgICAgd2luZG93LnBhZ2VZT2Zmc2V0IDpcbiAgICAgIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keS5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHkpLnNjcm9sbFRvcDtcblxuICAgIHNjcm9sbC5sZWZ0ID0gKHdpbmRvdy5wYWdlWE9mZnNldCAhPT0gdW5kZWZpbmVkKSA/XG4gICAgICB3aW5kb3cucGFnZVhPZmZzZXQgOlxuICAgICAgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fCBkb2N1bWVudC5ib2R5LnBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keSkuc2Nyb2xsTGVmdDtcblxuICAgIHJldHVybiBzY3JvbGw7XG4gIH1cblxuICBnZXREZXNpcmVkUG9zaXRpb24oZWxlbWVudCkge1xuICAgIGxldCBwb3NpdGlvbiA9ICcnO1xuXG4gICAgaWYgKFRvb2x0aXAuZWxIYXNOb25FbXB0eUF0dHIoZWxlbWVudCwgJ2RhdGEtcG9zaXRpb24nKSkge1xuICAgICAgcG9zaXRpb24gPSBlbGVtZW50LmRhdGFzZXQucG9zaXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvc2l0aW9uID0gdGhpcy5zZXR0aW5ncy5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBjb25zdCBwb3NTcGxpdCA9IHBvc2l0aW9uLnNwbGl0KCctJyk7XG5cbiAgICBpZiAocG9zU3BsaXQubGVuZ3RoIDwgMikge1xuICAgICAgaWYgKHBvc1NwbGl0WzBdID09PSAndG9wJyB8fCBwb3NTcGxpdFswXSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgcG9zU3BsaXQudW5zaGlmdCgnY2VudGVyJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwb3NTcGxpdFswXSA9PT0gJ2xlZnQnIHx8IHBvc1NwbGl0WzBdID09PSAncmlnaHQnKSB7XG4gICAgICAgIHBvc1NwbGl0LnB1c2goJ2NlbnRlcicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB4OiBwb3NTcGxpdFswXSxcbiAgICAgIHk6IHBvc1NwbGl0WzFdXG4gICAgfTtcbiAgfVxuXG4gIHNldFRvb2x0aXBWaXNpYmlsaXR5KCkge1xuICAgIGNvbnN0IHZpc2liaWxpdHlDbGFzcyA9ICd0b29sdGlwLS12aXNpYmxlJztcblxuICAgIGlmICghdGhpcy50b29sdGlwLmNsYXNzTGlzdC5jb250YWlucyh2aXNpYmlsaXR5Q2xhc3MpKSB7XG4gICAgICB0aGlzLnRvb2x0aXAuY2xhc3NMaXN0LmFkZCh2aXNpYmlsaXR5Q2xhc3MpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZSh2aXNpYmlsaXR5Q2xhc3MpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy50b29sdGlwLmNsYXNzTGlzdC5jb250YWlucyh2aXNpYmlsaXR5Q2xhc3MpKSB7XG4gICAgICB0aGlzLnRvb2x0aXAucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVRvb2x0aXBBcnJvd0NsYXNzKCkge1xuICAgIHRoaXMudG9vbHRpcC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgdGhpcy50b29sdGlwLmNsYXNzTGlzdC5hZGQodGhpcy5zZXR0aW5ncy50b29sdGlwQ2xhc3MpO1xuICB9XG5cbiAgc2V0VG9vbHRpcEFycm93Q2xhc3ModG9vbHRpcFBvc2l0aW9uKSB7XG4gICAgdGhpcy50b29sdGlwLmNsYXNzTGlzdC5hZGQoYHRvb2x0aXAtLSR7dG9vbHRpcFBvc2l0aW9ufWApO1xuICB9XG5cbiAgY2FsY1hQb3MoZWxlbWVudCwgcG9zc2libGVQb3NpdGlvbnMpIHtcbiAgICBjb25zdCB0b29sdGlwQm91bmRpbmcgPSB0aGlzLnRvb2x0aXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgZWxlbWVudEJvdW5kaW5nID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBjb25zdCBwYWdlWFNjcm9sbCA9IFRvb2x0aXAuZ2V0U2Nyb2xsKCkubGVmdDtcblxuICAgIGNvbnN0IGRlc2lyZWRQb3NpdGlvbiA9IHRoaXMuZ2V0RGVzaXJlZFBvc2l0aW9uKGVsZW1lbnQpO1xuXG4gICAgY29uc29sZS5sb2coZGVzaXJlZFBvc2l0aW9uKTtcblxuICAgIGxldCB4UG9zID0gbnVsbDtcblxuICAgIC8vIG5vIHNwYWNlIG9uIGxlZnQgc2lkZVxuICAgIGlmICghcG9zc2libGVQb3NpdGlvbnMubGVmdCkge1xuICAgICAgeFBvcyA9IHBhZ2VYU2Nyb2xsICsgZWxlbWVudEJvdW5kaW5nLmxlZnQ7XG5cbiAgICAvLyBubyBzcGFjZSBvbiByaWdodCBzaWRlXG4gICAgfSBlbHNlIGlmICghcG9zc2libGVQb3NpdGlvbnMucmlnaHQpIHtcbiAgICAgIHhQb3MgPSBwYWdlWFNjcm9sbCArIGVsZW1lbnRCb3VuZGluZy5yaWdodCAtIHRvb2x0aXBCb3VuZGluZy53aWR0aDtcblxuICAgIC8vIGluIGFueSBvdGhlciBjYXNlIGp1c3QgY2VudGVyIGl0XG4gICAgfSBlbHNlIHtcbiAgICAgIHhQb3MgPSBwYWdlWFNjcm9sbCArIGVsZW1lbnRCb3VuZGluZy5sZWZ0ICsgKGVsZW1lbnRCb3VuZGluZy53aWR0aCAvIDIpIC0gKHRvb2x0aXBCb3VuZGluZy53aWR0aCAvIDIpO1xuICAgIH1cblxuICAgIC8vIGlmIChwb3NzaWJsZVBvc2l0aW9ucy5sZWZ0KSB7XG4gICAgLy8gICB4UG9zID0gcGFnZVhTY3JvbGwgKyBlbGVtZW50Qm91bmRpbmcubGVmdCAtIHRoaXMuc2V0dGluZ3MubWFyZ2luIC0gdG9vbHRpcEJvdW5kaW5nLndpZHRoO1xuICAgIC8vIH0gZWxzZSBpZiAocG9zc2libGVQb3NpdGlvbnMucmlnaHQpIHtcbiAgICAvLyAgIHhQb3MgPSBwYWdlWFNjcm9sbCArIGVsZW1lbnRCb3VuZGluZy5yaWdodCArIHRoaXMuc2V0dGluZ3MubWFyZ2luO1xuICAgIC8vIH1cblxuICAgIC8vIGlmIChyaWdodExpbWl0ZWQpIHtcbiAgICAvLyAgIHhQb3MgPSBwYWdlWFNjcm9sbCArIGVsZW1lbnRCb3VuZGluZy5yaWdodCAtIHRvb2x0aXBCb3VuZGluZy53aWR0aDtcbiAgICAvLyB9XG5cbiAgICByZXR1cm4geFBvcztcbiAgfVxuXG4gIGNhbGNZUG9zKGVsZW1lbnQsIHBvc3NpYmxlUG9zaXRpb25zKSB7XG4gICAgY29uc3QgdG9vbHRpcEJvdW5kaW5nID0gdGhpcy50b29sdGlwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IGVsZW1lbnRCb3VuZGluZyA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgY29uc3QgcGFnZVlTY3JvbGwgPSBUb29sdGlwLmdldFNjcm9sbCgpLnRvcDtcbiAgICAvLyBjb25zdCBkZXNpcmVkUG9zaXRpb24gPSB0aGlzLmdldERlc2lyZWRQb3NpdGlvbihlbGVtZW50KTtcblxuICAgIGxldCB5UG9zID0gbnVsbDtcblxuICAgIC8vIGlmIChjZW50ZXIpIHtcbiAgICAvLyAgIHlQb3MgPSBwYWdlWVNjcm9sbCArIGVsZW1lbnRCb3VuZGluZy50b3AgKyAoZWxlbWVudEJvdW5kaW5nLmhlaWdodCAvIDIpIC0gKHRvb2x0aXBCb3VuZGluZy5oZWlnaHQgLyAyKTtcbiAgICAvLyB9XG5cbiAgICBpZiAocG9zc2libGVQb3NpdGlvbnMudG9wKSB7XG4gICAgICB5UG9zID0gcGFnZVlTY3JvbGwgKyBlbGVtZW50Qm91bmRpbmcudG9wIC0gKHRvb2x0aXBCb3VuZGluZy5oZWlnaHQpIC0gdGhpcy5zZXR0aW5ncy5tYXJnaW47XG4gICAgfSBlbHNlIGlmIChwb3NzaWJsZVBvc2l0aW9ucy5ib3R0b20pIHtcbiAgICAgIHlQb3MgPSBwYWdlWVNjcm9sbCArIGVsZW1lbnRCb3VuZGluZy50b3AgKyAoZWxlbWVudEJvdW5kaW5nLmhlaWdodCkgKyB0aGlzLnNldHRpbmdzLm1hcmdpbjtcbiAgICB9XG5cbiAgICByZXR1cm4geVBvcztcbiAgfVxuXG4gIGNoZWNrQm90dG9tUG9zaXRpb24oZWxlbWVudEJvdW5kaW5nKSB7XG4gICAgY29uc3Qgc3BhY2UgPSAoZWxlbWVudEJvdW5kaW5nLmJvdHRvbSArIHRoaXMudG9vbHRpcC5vZmZzZXRIZWlnaHQgKyB0aGlzLnNldHRpbmdzLm1hcmdpbik7XG4gICAgcmV0dXJuIHNwYWNlIDwgKHdpbmRvdy5pbm5lckhlaWdodCk7XG4gIH1cblxuICBjaGVja1JpZ2h0UG9zaXRpb24oZWxlbWVudEJvdW5kaW5nKSB7XG4gICAgY29uc3Qgc3BhY2UgPSAoZWxlbWVudEJvdW5kaW5nLnJpZ2h0ICsgdGhpcy50b29sdGlwLm9mZnNldFdpZHRoICsgdGhpcy5zZXR0aW5ncy5tYXJnaW4pO1xuICAgIHJldHVybiBzcGFjZSA8ICh3aW5kb3cuaW5uZXJXaWR0aCk7XG4gIH1cblxuICBjaGVja0xlZnRQb3NpdGlvbihlbGVtZW50Qm91bmRpbmcpIHtcbiAgICBjb25zdCBzcGFjZSA9IChlbGVtZW50Qm91bmRpbmcubGVmdCAtIHRoaXMudG9vbHRpcC5vZmZzZXRXaWR0aCAtIHRoaXMuc2V0dGluZ3MubWFyZ2luKTtcbiAgICByZXR1cm4gc3BhY2UgPiAwO1xuICB9XG5cbiAgY2hlY2tUb3BQb3NpdGlvbihlbGVtZW50Qm91bmRpbmcpIHtcbiAgICBjb25zdCBzcGFjZSA9IChlbGVtZW50Qm91bmRpbmcudG9wIC0gdGhpcy50b29sdGlwLm9mZnNldEhlaWdodCAtIHRoaXMuc2V0dGluZ3MubWFyZ2luKTtcbiAgICByZXR1cm4gc3BhY2UgPiAwO1xuICB9XG5cbiAgZ2V0UG9zc2libGVQb3NpdGlvbnMoZWxlbWVudEJvdW5kaW5nKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdGhpcy5jaGVja1RvcFBvc2l0aW9uKGVsZW1lbnRCb3VuZGluZyksXG4gICAgICByaWdodDogdGhpcy5jaGVja1JpZ2h0UG9zaXRpb24oZWxlbWVudEJvdW5kaW5nKSxcbiAgICAgIGJvdHRvbTogdGhpcy5jaGVja0JvdHRvbVBvc2l0aW9uKGVsZW1lbnRCb3VuZGluZyksXG4gICAgICBsZWZ0OiB0aGlzLmNoZWNrTGVmdFBvc2l0aW9uKGVsZW1lbnRCb3VuZGluZylcbiAgICB9O1xuICB9XG5cbiAgc2V0VG9vbHRpcFBvc2l0aW9uKGVsZW1lbnQpIHtcbiAgICBjb25zdCBwb3NzaWJsZVBvc2l0aW9ucyA9IHRoaXMuZ2V0UG9zc2libGVQb3NpdGlvbnMoZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhwb3NzaWJsZVBvc2l0aW9ucyk7XG5cbiAgICB0aGlzLnRvb2x0aXAuc3R5bGUubGVmdCA9IGAke3RoaXMuY2FsY1hQb3MoZWxlbWVudCwgcG9zc2libGVQb3NpdGlvbnMpfXB4YDtcbiAgICB0aGlzLnRvb2x0aXAuc3R5bGUudG9wID0gYCR7dGhpcy5jYWxjWVBvcyhlbGVtZW50LCBwb3NzaWJsZVBvc2l0aW9ucyl9cHhgO1xuICB9XG5cbiAgc2V0VG9vbHRpcENvbnRlbnQoY29udGVudCkge1xuICAgIHRoaXMudG9vbHRpcC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBtb3VzZUVudGVySGFuZGxlcihldmVudCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuXG4gICAgdGhpcy5zZXRUb29sdGlwQ29udGVudChlbGVtZW50LmRhdGFzZXQudG9vbHRpcCk7XG4gICAgdGhpcy5zZXRUb29sdGlwUG9zaXRpb24oZWxlbWVudCk7XG4gICAgdGhpcy5zZXRUb29sdGlwQXJyb3dDbGFzcyhlbGVtZW50LmRhdGFzZXQucG9zaXRpb24pO1xuICAgIHRoaXMuc2V0VG9vbHRpcFZpc2liaWxpdHkoKTtcbiAgfVxuXG4gIG1vdXNlTGVhdmVIYW5kbGVyKCkge1xuICAgIHRoaXMuc2V0VG9vbHRpcFZpc2liaWxpdHkoKTtcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXBBcnJvd0NsYXNzKCk7XG4gIH1cblxuICAvLyB3aW5kb3dSZXNpemVIYW5kbGVyKCkge1xuICAvLyAgIHRvb2x0aXBwZWRFbGVtZW50UmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIC8vIH1cblxuICBiaW5kRWxlbWVudEV2ZW50cyhlbGVtZW50KSB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgZXZlbnQgPT4gdGhpcy5tb3VzZUVudGVySGFuZGxlcihldmVudCkpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBldmVudCA9PiB0aGlzLm1vdXNlRW50ZXJIYW5kbGVyKGV2ZW50KSk7XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBldmVudCA9PiB0aGlzLm1vdXNlTGVhdmVIYW5kbGVyKGV2ZW50KSk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZXZlbnQgPT4gdGhpcy5tb3VzZUxlYXZlSGFuZGxlcihldmVudCkpO1xuXG4gICAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGV2ZW50ID0+IHRoaXMud2luZG93UmVzaXplSGFuZGxlcihldmVudCkpO1xuICB9XG5cbiAgY3JlYXRlVG9vbHRpcERhdGEoKSB7XG4gICAgWy4uLnRoaXMudG9vbHRpcHBlZEVsZW1lbnRzXS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoVG9vbHRpcC5lbEhhc05vbkVtcHR5QXR0cihlbGVtZW50LCAndGl0bGUnKSkge1xuICAgICAgICBlbGVtZW50LmRhdGFzZXQudG9vbHRpcCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0aXRsZScpO1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChUb29sdGlwLmVsSGFzTm9uRW1wdHlBdHRyKGVsZW1lbnQsICdkYXRhLXRvb2x0aXAnKSkge1xuICAgICAgICB0aGlzLmJpbmRFbGVtZW50RXZlbnRzKGVsZW1lbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlVG9vbHRpcCgpIHtcbiAgICBjb25zdCB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9vbHRpcC5jbGFzc0xpc3QuYWRkKHRoaXMuc2V0dGluZ3MudG9vbHRpcENsYXNzKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRvb2x0aXApO1xuXG4gICAgdGhpcy50b29sdGlwID0gdG9vbHRpcDtcbiAgICB0aGlzLmNyZWF0ZVRvb2x0aXBEYXRhKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9saWIvdG9vbHRpcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ })
/******/ ]);
});