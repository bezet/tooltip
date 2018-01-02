class Tooltip {
  constructor(options = {}) {
    this.settings = {
      selector: 'a',
      tooltipClass: 'tooltip',
      margin: 10,
      position: 'top'
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

  static getScroll() {
    return {
      top: (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop,
      left: (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft
    };
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

  calcXPos(element, possiblePositions) {
    const tooltipBounding = this.tooltip.getBoundingClientRect();
    const elementBounding = element.getBoundingClientRect();
    const pageXScroll = Tooltip.getScroll().left;
    const desiredPosition = element.dataset.position || this.settings.position;

    let xPos = null;

    // if (center) {
      xPos = pageXScroll + elementBounding.left + (elementBounding.width / 2) - (tooltipBounding.width / 2);
    // }

    // if (possiblePositions.left) {
    //   xPos = pageXScroll + elementBounding.left - this.settings.margin - tooltipBounding.width;
    // } else if (possiblePositions.right) {
    //   xPos = pageXScroll + elementBounding.right + this.settings.margin;
    // }

    // if (rightLimited) {
    //   xPos = pageXScroll + elementBounding.right - tooltipBounding.width;
    // }

    return xPos;
  }

  calcYPos(element, possiblePositions) {
    const tooltipBounding = this.tooltip.getBoundingClientRect();
    const elementBounding = element.getBoundingClientRect();
    const pageYScroll = Tooltip.getScroll().top;
    const desiredPosition = element.dataset.position || this.settings.position;

    let yPos = null;

    // if (center) {
    //   yPos = pageYScroll + elementBounding.top + (elementBounding.height / 2) - (tooltipBounding.height / 2);
    // }

    if (possiblePositions.top) {
      yPos = pageYScroll + elementBounding.top - (tooltipBounding.height) - this.settings.margin;
    } else if (possiblePositions.bottom) {
      yPos = pageYScroll + elementBounding.top + (elementBounding.height) + this.settings.margin;
    }

    return yPos;
  }

  checkBottomPosition(elementBounding) {
    const space = (elementBounding.bottom + this.tooltip.offsetHeight + this.settings.margin);
    return space < (window.innerHeight);
  }

  checkRightPosition(elementBounding) {
    const space = (elementBounding.right + this.tooltip.offsetWidth + this.settings.margin);
    return space < (window.innerWidth);
  }

  checkLeftPosition(elementBounding) {
    const space = (elementBounding.left - this.tooltip.offsetWidth - this.settings.margin);
    return space > 0;
  }

  checkTopPosition(elementBounding) {
    const space = (elementBounding.top - this.tooltip.offsetHeight - this.settings.margin);
    return space > 0;
  }

  getPossiblePositions(elementBounding) {
    return {
      top: this.checkTopPosition(elementBounding),
      right: this.checkRightPosition(elementBounding),
      bottom: this.checkBottomPosition(elementBounding),
      left: this.checkLeftPosition(elementBounding)
    };
  }

  setTooltipPosition(element) {
    const possiblePositions = this.getPossiblePositions(element.getBoundingClientRect());

    console.log(possiblePositions);

    this.tooltip.style.left = `${this.calcXPos(element, possiblePositions)}px`;
    this.tooltip.style.top = `${this.calcYPos(element, possiblePositions)}px`;
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

  // windowResizeHandler() {
  //   tooltippedElementRect = element.getBoundingClientRect();
  // }

  bindElementEvents(element) {
    element.addEventListener('mouseenter', event => this.mouseEnterHandler(event));
    element.addEventListener('focus', event => this.mouseEnterHandler(event));

    element.addEventListener('mouseleave', event => this.mouseLeaveHandler(event));
    element.addEventListener('blur', event => this.mouseLeaveHandler(event));

    // window.addEventListener('resize', event => this.windowResizeHandler(event));
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
