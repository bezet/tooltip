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
        if (element.hasAttribute('title')) {
          var title = element.getAttribute('title');

          // TODO: Provide WAI-ARIA support
          if (title !== '') {
            element.setAttribute('title', '');
            element.dataset.title = title;
            _this.bindElementEvents(element);
          }
        }
      });
    }
  }, {
    key: 'bindElementEvents',
    value: function bindElementEvents(element) {
      var tooltippedElement = element;
      var tooltip = this.tooltip;
      var tooltippedElementRect = tooltippedElement.getBoundingClientRect();
      var tooltippedElementStyles = window.getComputedStyle(tooltippedElement);

      // const tooltipInViewport = ( elementRectTop ) => {
      //   return elementRectTop > 40;
      // };

      var calcXShift = function calcXShift(event) {
        var xShift = event.pageX;
        xShift -= tooltip.clientWidth / 2;

        // if ( tooltippedElementRect.left > ( tooltip.clientWidth - tooltippedElementRect.width ) ) {
        //   xShift -= ( tooltip.clientWidth / 2 );
        // }
        //
        // if ( tooltippedElementRect.right < ( tooltip.clientWidth - tooltippedElementRect.width ) ) {
        //   xShift += ( tooltip.clientWidth / 2 );
        // }

        return xShift;
      };

      var calcYShift = function calcYShift(event) {
        var yShift = -(tooltip.clientHeight + 10);

        if (tooltippedElementStyles.getPropertyValue('display') !== 'block') {
          yShift += tooltippedElementRect.top;
        } else {
          yShift += event.pageY;
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

      tooltippedElement.addEventListener('mouseover', function (event) {
        tooltip.textContent = tooltippedElement.dataset.title;
        setTooltipPosition(event);
        toggleTooltipVisibility();
      });

      tooltippedElement.addEventListener('mousemove', function (event) {
        setTooltipPosition(event);
      });

      tooltippedElement.addEventListener('mouseleave', function () {
        toggleTooltipVisibility();
      });
    }
  }]);
  return Tooltip;
}();

// let tooltip = new Tooltip();
//# sourceMappingURL=tooltip.js.map
