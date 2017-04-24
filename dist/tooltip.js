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
            element.dataset.position = _this.determineTooltipPosition(element, _this.getTooltipDimensions(title));
            _this.bindElementEvents(element);
          }
        }
      });
    }
  }, {
    key: 'getElementsPositionInViewport',
    value: function getElementsPositionInViewport(element) {
      var elementsPosition = element;
      return elementsPosition;
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
    key: 'determineTooltipPosition',
    value: function determineTooltipPosition(element, tooltipDimensions) {
      var tooltipPosition = tooltipDimensions;

      tooltipPosition = 'top-center';

      return tooltipPosition;
    }
  }, {
    key: 'bindElementEvents',
    value: function bindElementEvents(element) {
      var tooltippedElement = element;
      var tooltippedElementRect = tooltippedElement.getBoundingClientRect();
      // const tooltippedElementStyles = window.getComputedStyle( tooltippedElement );
      var tooltip = this.tooltip;
      var tooltipPosition = tooltippedElement.dataset.position.split('-');

      var calcXShift = function calcXShift(event) {
        // if ( this.options.floating ) {
        // let xShift = event.pageX;
        // xShift -= ( tooltip.clientWidth / 2 );
        // xShift -= tooltip.clientWidth;
        // } else {}

        console.log(event);

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
        // if ( this.options.floating ) {
        //   yShift += event.pageY;
        // }

        var yShift = 0;

        if (tooltipPosition[0] === 'top') {
          // TOP-[LEFT/CENTER/RIGHT] case
          yShift = tooltippedElementRect.top - tooltip.clientHeight - 10;
        } else if (tooltipPosition[0] === 'bottom') {
          // BOTTOM-[LEFT/CENTER/RIGHT] case
          yShift = tooltippedElementRect.bottom + 10;
        }

        console.log(event);

        // if ( tooltippedElementStyles.getPropertyValue( 'display' ) !== 'block' ) {
        //   yShift += tooltippedElementRect.top;
        // }

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

      var mouseEnterHandler = function mouseEnterHandler(event) {
        tooltip.textContent = tooltippedElement.dataset.title;
        setTooltipPosition(event);
        toggleTooltipVisibility();
      };

      var mouseMoveHandler = function mouseMoveHandler(event) {
        setTooltipPosition(event);
      };

      var mouseLeaveHandler = function mouseLeaveHandler() {
        toggleTooltipVisibility();
      };

      tooltippedElement.addEventListener('mouseenter', mouseEnterHandler);
      tooltippedElement.addEventListener('focus', mouseEnterHandler);
      tooltippedElement.addEventListener('mousemove', mouseMoveHandler);
      tooltippedElement.addEventListener('mouseleave', mouseLeaveHandler);
      tooltippedElement.addEventListener('blur', mouseLeaveHandler);
    }
  }]);
  return Tooltip;
}();

// let tooltip = new Tooltip();
//# sourceMappingURL=tooltip.js.map
