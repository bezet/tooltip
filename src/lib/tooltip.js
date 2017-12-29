class Tooltip {
  constructor(options = {}) {
    this.settings = {
      selector: 'a',
      tooltipClass: 'tooltip',
      margin: 10
    };

    Object.keys(options).forEach((option) => {
      this.settings[option] = options[option];
    });

    this.tooltippedElements = document.querySelectorAll(this.settings.selector);

    this.createTooltip();
  }

  static elHasNonEmptyAttr(el, attr) {
    return el.hasAttribute(attr) &&
           el.getAttribute(attr) !== '';
  }

  setTooltipVisibility() {
    const visibilityClass = 'tooltip--visible';

    if (!this.tooltip.classList.contains(visibilityClass)) {
      this.tooltip.classList.add(visibilityClass);
    } else {
      this.tooltip.classList.remove(visibilityClass);
    }

    // if (!this.tooltip.classList.contains(visibilityClass)) {
    //   this.tooltip.removeAttribute('style');
    // }
  }

  removeTooltipArrowClass() {
    // this.tooltip.removeAttribute('class');
    // this.tooltip.classList.add(this.settings.tooltipClass);
    this.tooltip.classList.add(this.settings.tooltipClass);
  };

  setTooltipArrowClass(tooltipPosition) {
    this.tooltip.classList.add(`tooltip--${tooltipPosition}`);
  }

  calcXPos(elementBounding) {
    const tooltipBounding = this.tooltip.getBoundingClientRect();

    const xPos = (elementBounding.left) + (elementBounding.width / 2) - (tooltipBounding.width / 2);
    // const xPos = (elementBounding.left) - (tooltipBounding.width) - this.settings.margin;

    return xPos;
  }

  calcYPos(elementBounding) {
    const tooltipBounding = this.tooltip.getBoundingClientRect();

    const yPos = (elementBounding.top) - (tooltipBounding.height) - this.settings.margin;
    // const yPos = (elementBounding.top) + (elementBounding.height / 2) - (tooltipBounding.height / 2);

    return yPos;
  }

  setTooltipPosition(element) {
    const elementBounding = element.getBoundingClientRect();

    this.tooltip.style.left = `${this.calcXPos(elementBounding)}px`;
    this.tooltip.style.top = `${this.calcYPos(elementBounding)}px`;
  }

  setTooltipContent(content) {
    this.tooltip.textContent = content;
  }

  mouseEnterHandler(event) {
    const element = event.currentTarget;

    this.setTooltipContent(element.dataset.tooltip);
    this.setTooltipPosition(element);
    this.setTooltipArrowClass(element.dataset.position);
    this.setTooltipVisibility();
  }

  mouseLeaveHandler() {
    this.setTooltipVisibility();
    this.removeTooltipArrowClass();
  }

  windowResizeHandler() {
  //   tooltippedElementRect = element.getBoundingClientRect();
  }

  bindElementEvents(element) {
    element.addEventListener('mouseenter', event => this.mouseEnterHandler(event));
    element.addEventListener('focus', event => this.mouseEnterHandler(event));

    element.addEventListener('mouseleave', event => this.mouseLeaveHandler(event));
    element.addEventListener('blur', event => this.mouseLeaveHandler(event));

    window.addEventListener('resize', event => this.windowResizeHandler(event));
  }

  createTooltipData() {
    [...this.tooltippedElements].forEach((element) => {
      if (Tooltip.elHasNonEmptyAttr(element, 'title')) {
        element.dataset.tooltip = element.getAttribute('title');
        element.setAttribute('title', '');
      }

      if (Tooltip.elHasNonEmptyAttr(element, 'data-tooltip')) {
        this.bindElementEvents(element);
      }
    });
  }

  createTooltip() {
    const tooltip = document.createElement('div');
    tooltip.classList.add(this.settings.tooltipClass);
    document.body.appendChild(tooltip);

    this.tooltip = tooltip;
    this.createTooltipData();
  }
}

export default Tooltip;
