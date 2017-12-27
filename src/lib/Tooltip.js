class Tooltip {
  constructor(tooltipSelector = 'a') {
    this.tooltippedElements = document.querySelectorAll(tooltipSelector);
    this.tooltip = null;
    this.createTooltip();
  }

  createTooltip() {
    const tooltipBox = document.createElement('span');
    tooltipBox.classList.add('tooltip');
    document.body.appendChild(tooltipBox);

    this.tooltip = tooltipBox;

    this.createTooltipData();
  }

  createTooltipData() {
    [...this.tooltippedElements].forEach((element) => {
      const tooltippedElement = element;

      const elHasNonEmptyAttr = (el, attr) => {
        return el.hasAttribute(attr) &&
               el.getAttribute(attr) !== '';
      };

      // TODO: Provide WAI-ARIA support

      if (elHasNonEmptyAttr(tooltippedElement, 'title')) {
        tooltippedElement.dataset.tooltip = tooltippedElement.getAttribute('title');
        tooltippedElement.setAttribute('title', '');
      }

      if (elHasNonEmptyAttr(tooltippedElement, 'data-tooltip')) {
        tooltippedElement.dataset.position = this.getTooltipPosition(
          tooltippedElement,
          this.getTooltipDimensions(tooltippedElement.dataset.tooltip)
        );

        this.bindElementEvents(tooltippedElement);
      }
    });
  }

  getTooltipDimensions(tooltipText) {
    const tooltipDimensions = [];
    this.tooltip.textContent = tooltipText;
    tooltipDimensions[0] = this.tooltip.offsetWidth;
    tooltipDimensions[1] = this.tooltip.offsetHeight;
    this.tooltip.textContent = '';

    return tooltipDimensions;
  }

  getVerticalTooltipPosition(tooltippedElementRect, tooltipDimensions) {
    let verticalTooltipPosition = 'top';
    if (tooltippedElementRect.top < (tooltippedElementRect.height + tooltipDimensions[1])) {
      verticalTooltipPosition = 'bottom';
    }
    return verticalTooltipPosition;
  }

  getHorizontalTooltipPosition(tooltippedElementRect, tooltipDimensions) {
    let horizontalTooltipPosition = 'center';

    if (tooltippedElementRect.left <
      ((tooltipDimensions[0] / 2) - (tooltippedElementRect.width / 2))) {
      horizontalTooltipPosition = 'left';
    }

    // if ( tooltippedElementRect.right ) {
    //   tooltipPosition[ 1 ] = 'right';
    // }

    return horizontalTooltipPosition;
  }

  getTooltipPosition(tooltippedElement, tooltipDimensions) {
    const tooltippedElementRect = tooltippedElement.getBoundingClientRect();
    const tooltipPosition = [];
    tooltipPosition[0] = this.getVerticalTooltipPosition(
      tooltippedElementRect,
      tooltipDimensions
    );
    tooltipPosition[1] = this.getHorizontalTooltipPosition(
      tooltippedElementRect,
      tooltipDimensions
    );
    return tooltipPosition.join('-');
  }

  bindElementEvents(element) {
    const tooltippedElement = element;
    let tooltippedElementRect = tooltippedElement.getBoundingClientRect();

    const tooltip = this.tooltip;
    const tooltipPosition = tooltippedElement.dataset.position.split('-');

    const calcXShift = () => {
      // [TOP/BOTTOM]-LEFT case
      let xShift = tooltippedElementRect.left;

      if (tooltipPosition[1] === 'center') {
        // [TOP/BOTTOM]-CENTER case
        xShift -= (tooltip.clientWidth - tooltippedElementRect.width) / 2;
      } else if (tooltipPosition[1] === 'right') {
        // [TOP/BOTTOM]-RIGHT case
        xShift += tooltippedElementRect.width - tooltip.clientWidth;
      }

      return xShift;
    };

    const calcYShift = () => {
      let yShift = 0;

      if (tooltipPosition[0] === 'top') {
        // TOP-[LEFT/CENTER/RIGHT] case
        yShift = tooltippedElementRect.top - tooltip.clientHeight - 10;
      } else if (tooltipPosition[0] === 'bottom') {
        // BOTTOM-[LEFT/CENTER/RIGHT] case
        yShift = tooltippedElementRect.bottom + 10;
      }

      return yShift;
    };

    const setTooltipPosition = (event) => {
      tooltip.style.top = `${calcYShift(event)}px`;
      tooltip.style.left = `${calcXShift(event)}px`;
    };

    const toggleTooltipVisibility = () => {
      const visibilityClass = 'tooltip--visible';
      tooltip.classList.toggle(visibilityClass);
      if (!tooltip.classList.contains(visibilityClass)) {
        tooltip.removeAttribute('style');
      }
    };

    const setTooltipArrowClass = () => {
      tooltip.classList.add(`tooltip--${element.dataset.position}`);
    };

    const removeTooltipArrowClass = () => {
      tooltip.removeAttribute('class');
      tooltip.classList.add('tooltip');
    };

    const mouseEnterHandler = (event) => {
      tooltip.textContent = tooltippedElement.dataset.tooltip;
      setTooltipPosition(event);
      setTooltipArrowClass();
      toggleTooltipVisibility();
    };

    const mouseLeaveHandler = () => {
      toggleTooltipVisibility();
      removeTooltipArrowClass();
    };

    const windowResizeHandler = () => {
      tooltippedElementRect = tooltippedElement.getBoundingClientRect();
    };

    tooltippedElement.addEventListener('mouseenter', mouseEnterHandler);
    tooltippedElement.addEventListener('focus', mouseEnterHandler);
    tooltippedElement.addEventListener('mouseleave', mouseLeaveHandler);
    tooltippedElement.addEventListener('blur', mouseLeaveHandler);

    window.addEventListener('resize', windowResizeHandler);
  }
}

export default Tooltip;
