/******/ (function(modules) { // webpackBootstrap
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


var _tooltip = __webpack_require__(1);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var myTooltip = new _tooltip2.default({ selector: '.btn' });

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tooltip = function () {
  function Tooltip() {
    var _this = this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Tooltip);

    this.settings = {
      selector: 'a',
      tooltipClass: 'tooltip',
      margin: 10,
      position: 'top-center'
    };

    Object.keys(options).forEach(function (option) {
      _this.settings[option] = options[option];
    });

    this.tooltippedElements = document.querySelectorAll(this.settings.selector);

    this.createTooltip();
  }

  _createClass(Tooltip, [{
    key: 'getDesiredPosition',
    value: function getDesiredPosition(element) {
      var posSplit = element.dataset.position.split('-');

      // for centered position only one alignment might be provided,
      // eg. top === top-center
      if (posSplit.length < 2) {
        posSplit.push('center');
      }

      return {
        side: posSplit[0],
        alignment: posSplit[1]
      };
    }
  }, {
    key: 'resetClass',
    value: function resetClass() {
      this.tooltip.removeAttribute('class');
      this.tooltip.classList.add(this.settings.tooltipClass);
    }
  }, {
    key: 'setClass',
    value: function setClass(tooltipPosition) {
      this.tooltip.classList.add(this.settings.tooltipClass + '--' + tooltipPosition);
    }
  }, {
    key: 'setTooltipVisibility',
    value: function setTooltipVisibility() {
      var visibilityClass = this.settings.tooltipClass + '--visible';

      if (!this.tooltip.classList.contains(visibilityClass)) {
        this.tooltip.classList.add(visibilityClass);
      } else {
        this.tooltip.classList.remove(visibilityClass);
      }

      if (!this.tooltip.classList.contains(visibilityClass)) {
        this.tooltip.removeAttribute('style');
        this.resetClass();
      }
    }
  }, {
    key: 'calcCoordinates',
    value: function calcCoordinates(elementRect, position) {
      var tooltipBounding = this.tooltip.getBoundingClientRect();
      var elementBounding = elementRect;
      var pageScroll = Tooltip.getScroll();

      var coordinates = {
        x: pageScroll.x,
        y: pageScroll.y
      };

      // top & bottom

      if (position.side === 'top' || position.side === 'bottom') {
        if (position.alignment === 'start') {
          coordinates.x += elementBounding.left;
        }

        if (position.alignment === 'center') {
          coordinates.x += elementBounding.left + (elementBounding.width / 2 - tooltipBounding.width / 2);
        }

        if (position.alignment === 'end') {
          coordinates.x += elementBounding.right - tooltipBounding.width;
        }
      }

      if (position.side === 'top') {
        coordinates.y += elementBounding.top - tooltipBounding.height - this.settings.margin;
      }

      if (position.side === 'bottom') {
        coordinates.y += elementBounding.bottom + this.settings.margin;
      }

      // left & right

      if (position.side === 'left' || position.side === 'right') {
        if (position.alignment === 'start') {
          coordinates.y += elementBounding.top;
        }

        if (position.alignment === 'center') {
          coordinates.y += elementBounding.top + (elementBounding.height / 2 - tooltipBounding.height / 2);
        }

        if (position.alignment === 'end') {
          coordinates.y += elementBounding.bottom - tooltipBounding.height;
        }
      }

      if (position.side === 'left') {
        coordinates.x += elementBounding.left - this.settings.margin - tooltipBounding.width;
      }

      if (position.side === 'right') {
        coordinates.x += elementBounding.right + this.settings.margin;
      }

      return coordinates;
    }
  }, {
    key: 'checkVerticalSpace',
    value: function checkVerticalSpace(elementBounding) {
      var topSpace = elementBounding.top - this.settings.margin;
      var bottomSpace = window.innerHeight - (elementBounding.bottom + this.settings.margin);

      return {
        start: topSpace > this.tooltip.offsetHeight,
        end: bottomSpace > this.tooltip.offsetHeight
      };
    }
  }, {
    key: 'checkHorizontalSpace',
    value: function checkHorizontalSpace(elementBounding) {
      var leftSpace = elementBounding.left - this.settings.margin;
      var rightSpace = window.innerWidth - (elementBounding.right + this.settings.margin);

      return {
        start: leftSpace > this.tooltip.offsetWidth,
        end: rightSpace > this.tooltip.offsetWidth
      };
    }

    // check space on sides in the viewport

  }, {
    key: 'getPossibleSides',
    value: function getPossibleSides(elementBounding) {
      return {
        vertical: this.checkVerticalSpace(elementBounding),
        horizontal: this.checkHorizontalSpace(elementBounding)
      };
    }

    // compare desired position & possible space on sides;
    // if desired is not possible, return best possible position

  }, {
    key: 'getActualPosition',
    value: function getActualPosition(desired, possible) {
      var positionMap = {
        top: 'start',
        bottom: 'end',
        left: 'start',
        right: 'end'
      };

      var oppositeMap = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left',
        vertical: 'horizontal',
        horizontal: 'vertical'
      };

      var axis = desired.side === 'top' || desired.side === 'bottom' ? 'vertical' : 'horizontal';

      var getSide = function getSide(wantedAxis, wantedSide) {
        var theAxis = possible[wantedAxis];
        var side = void 0;

        if (theAxis[positionMap[wantedSide]]) {
          side = wantedSide;
        } else if (theAxis[positionMap[oppositeMap[wantedSide]]]) {
          side = oppositeMap[wantedSide];
        } else {
          side = getSide(oppositeMap[wantedAxis], wantedSide);
        }

        return side;
      };

      var getAlignment = function getAlignment(wantedAxis, wantedAlignment) {
        var possibleAlign = possible[wantedAxis];
        var alignment = void 0;

        if (possibleAlign.start && possibleAlign.end) {
          alignment = wantedAlignment;
        } else if (!possibleAlign.start && !possibleAlign.end) {
          alignment = 'center';
        } else if (!possibleAlign.start) {
          alignment = 'start';
        } else if (!possibleAlign.end) {
          alignment = 'end';
        }

        return alignment;
      };

      return {
        side: getSide(axis, desired.side),
        alignment: getAlignment(oppositeMap[axis], desired.alignment)
      };
    }
  }, {
    key: 'setTooltipPosition',
    value: function setTooltipPosition(element) {
      var elementRect = element.getBoundingClientRect();
      var desiredPosition = this.getDesiredPosition(element);
      var possibleSides = this.getPossibleSides(elementRect);
      var actualPosition = this.getActualPosition(desiredPosition, possibleSides);
      var coordinates = this.calcCoordinates(elementRect, actualPosition);

      this.tooltip.style.left = coordinates.x + 'px';
      this.tooltip.style.top = coordinates.y + 'px';

      this.setClass(actualPosition.side + '-' + actualPosition.alignment);
    }
  }, {
    key: 'setTooltipContent',
    value: function setTooltipContent(content) {
      this.tooltip.textContent = content;
    }
  }, {
    key: 'mouseEnterHandler',
    value: function mouseEnterHandler(event) {
      var element = event.currentTarget;

      this.setTooltipContent(element.dataset.tooltip);
      this.setTooltipPosition(element);
      this.setTooltipVisibility();
    }
  }, {
    key: 'mouseLeaveHandler',
    value: function mouseLeaveHandler() {
      this.setTooltipVisibility();
    }
  }, {
    key: 'bindElementEvents',
    value: function bindElementEvents(element) {
      var _this2 = this;

      element.addEventListener('mouseenter', function (event) {
        return _this2.mouseEnterHandler(event);
      });
      element.addEventListener('focus', function (event) {
        return _this2.mouseEnterHandler(event);
      });

      element.addEventListener('mouseleave', function (event) {
        return _this2.mouseLeaveHandler(event);
      });
      element.addEventListener('blur', function (event) {
        return _this2.mouseLeaveHandler(event);
      });
    }
  }, {
    key: 'createTooltipData',
    value: function createTooltipData() {
      var _this3 = this;

      [].concat(_toConsumableArray(this.tooltippedElements)).forEach(function (el) {
        var element = el;
        var elementHas = Tooltip.elHasNonEmptyAttr(element);

        if (elementHas('title') && !elementHas('data-tooltip')) {
          element.dataset.tooltip = element.getAttribute('title');
          element.setAttribute('title', '');
        }

        if (!elementHas('data-position')) {
          element.dataset.position = _this3.settings.position;
        }

        if (elementHas('data-tooltip')) {
          _this3.bindElementEvents(element);
        }
      });
    }
  }, {
    key: 'createTooltip',
    value: function createTooltip() {
      var tooltip = document.createElement('div');
      tooltip.classList.add(this.settings.tooltipClass);
      document.body.appendChild(tooltip);

      this.tooltip = tooltip;
      this.createTooltipData();
    }
  }], [{
    key: 'elHasNonEmptyAttr',
    value: function elHasNonEmptyAttr(el) {
      return function (attr) {
        return el.hasAttribute(attr) && el.getAttribute(attr) !== '';
      };
    }
  }, {
    key: 'getScroll',
    value: function getScroll() {
      var scroll = {};

      scroll.x = window.pageXOffset !== undefined ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;

      scroll.y = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

      return scroll;
    }
  }]);

  return Tooltip;
}();

exports.default = Tooltip;
module.exports = exports['default'];

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map