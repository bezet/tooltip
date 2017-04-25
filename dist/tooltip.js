'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/* eslint no-unused-vars: 0 */

var Tooltip = function () {
  function Tooltip() {
    var tooltipSelector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'a';
    classCallCheck(this, Tooltip);

    this.tooltippedElements = document.querySelectorAll(tooltipSelector);
    this.tooltip = null;
    this.createTooltip();
  }

  createClass(Tooltip, [{
    key: 'createTooltip',
    value: function createTooltip() {
      var tooltipBox = document.createElement('span');
      tooltipBox.classList.add('tooltip');
      document.body.appendChild(tooltipBox);

      this.tooltip = tooltipBox;

      this.copyLabels();
    }
  }, {
    key: 'copyLabels',
    value: function copyLabels() {
      var _this = this;

      [].concat(toConsumableArray(this.tooltippedElements)).forEach(function (element) {
        if (element.hasAttribute('title') || element.hasAttribute('data-title')) {
          // TODO: Provide WAI-ARIA support

          var title = '';

          if (element.hasAttribute('title') && element.getAttribute('title') !== '') {
            title = element.getAttribute('title');
            element.setAttribute('title', '');
            element.dataset.title = title;
          } else if (element.hasAttribute('data-title') && element.dataset.title !== '') {
            title = element.dataset.title;
          }

          if (element.dataset.title !== '') {
            element.dataset.position = _this.getTooltipPosition(element, _this.getTooltipDimensions(title));
            _this.bindElementEvents(element);
          }
        }
      });
    }
  }, {
    key: 'getTooltipDimensions',
    value: function getTooltipDimensions(tooltipText) {
      var tooltipDimensions = [];
      this.tooltip.textContent = tooltipText;
      tooltipDimensions[0] = this.tooltip.offsetWidth;
      tooltipDimensions[1] = this.tooltip.offsetHeight;
      this.tooltip.textContent = '';

      return tooltipDimensions;
    }
  }, {
    key: 'getVerticalTooltipPosition',
    value: function getVerticalTooltipPosition(tooltippedElementRect, tooltipDimensions) {
      var verticalTooltipPosition = 'top';
      if (tooltippedElementRect.top < tooltippedElementRect.height + tooltipDimensions[1]) {
        verticalTooltipPosition = 'bottom';
      }
      return verticalTooltipPosition;
    }
  }, {
    key: 'getHorizontalTooltipPosition',
    value: function getHorizontalTooltipPosition(tooltippedElementRect, tooltipDimensions) {
      var horizontalTooltipPosition = 'center';

      if (tooltippedElementRect.left < tooltipDimensions[0] / 2 - tooltippedElementRect.width / 2) {
        horizontalTooltipPosition = 'left';
      }

      // if ( tooltippedElementRect.right ) {
      //   tooltipPosition[ 1 ] = 'right';
      // }

      return horizontalTooltipPosition;
    }
  }, {
    key: 'getTooltipPosition',
    value: function getTooltipPosition(tooltippedElement, tooltipDimensions) {
      var tooltippedElementRect = tooltippedElement.getBoundingClientRect();
      var tooltipPosition = [];
      tooltipPosition[0] = this.getVerticalTooltipPosition(tooltippedElementRect, tooltipDimensions);
      tooltipPosition[1] = this.getHorizontalTooltipPosition(tooltippedElementRect, tooltipDimensions);
      return tooltipPosition.join('-');
    }
  }, {
    key: 'bindElementEvents',
    value: function bindElementEvents(element) {
      var tooltippedElement = element;
      var tooltippedElementRect = tooltippedElement.getBoundingClientRect();

      var tooltip = this.tooltip;
      var tooltipPosition = tooltippedElement.dataset.position.split('-');

      var calcXShift = function calcXShift(event) {
        // [TOP/BOTTOM]-LEFT case
        var xShift = tooltippedElementRect.left;

        if (tooltipPosition[1] === 'center') {
          // [TOP/BOTTOM]-CENTER case
          xShift -= (tooltip.clientWidth - tooltippedElementRect.width) / 2;
        } else if (tooltipPosition[1] === 'right') {
          // [TOP/BOTTOM]-RIGHT case
          xShift += tooltippedElementRect.width - tooltip.clientWidth;
        }

        return xShift;
      };

      var calcYShift = function calcYShift(event) {
        var yShift = 0;

        if (tooltipPosition[0] === 'top') {
          // TOP-[LEFT/CENTER/RIGHT] case
          yShift = tooltippedElementRect.top - tooltip.clientHeight - 10;
        } else if (tooltipPosition[0] === 'bottom') {
          // BOTTOM-[LEFT/CENTER/RIGHT] case
          yShift = tooltippedElementRect.bottom + 10;
        }

        return yShift;
      };

      var setTooltipPosition = function setTooltipPosition(event) {
        tooltip.style.top = calcYShift(event) + 'px';
        tooltip.style.left = calcXShift(event) + 'px';
      };

      var toggleTooltipVisibility = function toggleTooltipVisibility() {
        var visibilityClass = 'tooltip--visible';
        tooltip.classList.toggle(visibilityClass);
        if (!tooltip.classList.contains(visibilityClass)) {
          tooltip.removeAttribute('style');
        }
      };

      var setTooltipArrowClass = function setTooltipArrowClass() {
        tooltip.classList.add('tooltip--' + element.dataset.position);
      };

      var removeTooltipArrowClass = function removeTooltipArrowClass() {
        tooltip.removeAttribute('class');
        tooltip.classList.add('tooltip');
      };

      var mouseEnterHandler = function mouseEnterHandler(event) {
        tooltip.textContent = tooltippedElement.dataset.title;
        setTooltipPosition(event);
        setTooltipArrowClass();
        toggleTooltipVisibility();
      };

      var mouseLeaveHandler = function mouseLeaveHandler() {
        toggleTooltipVisibility();
        removeTooltipArrowClass();
      };

      var windowResizeHandler = function windowResizeHandler() {
        tooltippedElementRect = tooltippedElement.getBoundingClientRect();
      };

      tooltippedElement.addEventListener('mouseenter', mouseEnterHandler);
      tooltippedElement.addEventListener('focus', mouseEnterHandler);
      tooltippedElement.addEventListener('mouseleave', mouseLeaveHandler);
      tooltippedElement.addEventListener('blur', mouseLeaveHandler);

      window.addEventListener('resize', windowResizeHandler);
    }
  }]);
  return Tooltip;
}();

// let tooltip = new Tooltip();
//# sourceMappingURL=tooltip.js.map
