class Tooltip {
  constructor(options = {}) {
    this.settings = {
      selector: 'a',
      tooltipClass: 'tooltip',
      margin: 10,
      position: 'top-center',
    };

    Object.keys(options).forEach((option) => {
      this.settings[option] = options[option];
    });

    this.tooltippedElements = document.querySelectorAll(this.settings.selector);

    this.createTooltip();
  }

  static elHasNonEmptyAttr(el) {
    return (attr) => {
      return el.hasAttribute(attr) &&
             el.getAttribute(attr) !== '';
    };
  }

  static getScroll() {
    const scroll = {};

    scroll.x = (window.pageXOffset !== undefined) ?
      window.pageXOffset :
      (document.documentElement || document.body.parentNode || document.body).scrollLeft;

    scroll.y = (window.pageYOffset !== undefined) ?
      window.pageYOffset :
      (document.documentElement || document.body.parentNode || document.body).scrollTop;

    return scroll;
  }

  getDesiredPosition(element) {
    const posSplit = element.dataset.position.split('-');

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

  resetClass() {
    this.tooltip.removeAttribute('class');
    this.tooltip.classList.add(this.settings.tooltipClass);
  }

  setClass(tooltipPosition) {
    this.tooltip.classList.add(`${this.settings.tooltipClass}--${tooltipPosition}`);
  }

  setTooltipVisibility() {
    const visibilityClass = `${this.settings.tooltipClass}--visible`;

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

  calcPosition(elementRect, side, alignment) {
    const tooltipBounding = this.tooltip.getBoundingClientRect();
    const elementBounding = elementRect;
    const pageScroll = Tooltip.getScroll();

    const position = {
      x: pageScroll.x,
      y: pageScroll.y
    };

    // top & bottom

    if ((side === 'top' || side === 'bottom')) {
      if (alignment === 'start') {
        position.x += elementBounding.left;
      }

      if (alignment === 'center') {
        position.x +=
          elementBounding.left +
          ((elementBounding.width / 2) - (tooltipBounding.width / 2));
      }

      if (alignment === 'end') {
        position.x += (elementBounding.right - tooltipBounding.width);
      }
    }

    if (side === 'top') {
      position.y += (elementBounding.top - tooltipBounding.height - this.settings.margin);
    }

    if (side === 'bottom') {
      position.y += (elementBounding.bottom + this.settings.margin);
    }

    // left & right

    if ((side === 'left' || side === 'right')) {
      if (alignment === 'start') {
        position.y += elementBounding.top;
      }

      if (alignment === 'center') {
        position.y +=
          elementBounding.top +
          ((elementBounding.height / 2) - (tooltipBounding.height / 2));
      }

      if (alignment === 'end') {
        position.y += elementBounding.bottom - tooltipBounding.height;
      }
    }

    if (side === 'left') {
      position.x += (elementBounding.left - this.settings.margin - tooltipBounding.width);
    }

    if (side === 'right') {
      position.x += (elementBounding.right + this.settings.margin);
    }

    return position;
  }

  checkVerticalSpace(elementBounding) {
    const topSpace = (elementBounding.top - this.settings.margin);
    const bottomSpace = window.innerHeight - (elementBounding.bottom + this.settings.margin);

    return {
      start: topSpace > this.tooltip.offsetHeight,
      end: bottomSpace > this.tooltip.offsetHeight
    };
  }

  checkHorizontalSpace(elementBounding) {
    const leftSpace = (elementBounding.left - this.settings.margin);
    const rightSpace = window.innerWidth - (elementBounding.right + this.settings.margin);

    return {
      start: leftSpace > this.tooltip.offsetWidth,
      end: rightSpace > this.tooltip.offsetWidth
    };
  }

  // check space on sides in the viewport
  getPossibleSides(elementBounding) {
    // return Object.assign(
    //   this.checkVerticalSpace(elementBounding),
    //   this.checkHorizontalSpace(elementBounding)
    // );

    return {
      vertical: this.checkVerticalSpace(elementBounding),
      horizontal: this.checkHorizontalSpace(elementBounding)
    };
  }

  // compare desired & possible side space;
  // if desired is not possible, return best possible position
  getActualSide(desiredSide, possibleSides) {
    let side = desiredSide;

    return side;
  }

  setTooltipPosition(element) {
    const elementRect = element.getBoundingClientRect();
    const desired = this.getDesiredPosition(element);
    const possibleSides = this.getPossibleSides(elementRect);
    const side = this.getActualSide(desired.side, possibleSides);
    const position = this.calcPosition(elementRect, side, desired.alignment);

    this.tooltip.style.left = `${position.x}px`;
    this.tooltip.style.top = `${position.y}px`;

    this.setClass(`${side}-${desired.alignment}`);
  }

  setTooltipContent(content) {
    this.tooltip.textContent = content;
  }

  mouseEnterHandler(event) {
    const element = event.currentTarget;

    this.setTooltipContent(element.dataset.tooltip);
    this.setTooltipPosition(element);
    this.setTooltipVisibility();
  }

  mouseLeaveHandler() {
    this.setTooltipVisibility();
  }

  bindElementEvents(element) {
    element.addEventListener('mouseenter', event => this.mouseEnterHandler(event));
    element.addEventListener('focus', event => this.mouseEnterHandler(event));

    element.addEventListener('mouseleave', event => this.mouseLeaveHandler(event));
    element.addEventListener('blur', event => this.mouseLeaveHandler(event));
  }

  createTooltipData() {
    [...this.tooltippedElements].forEach((element) => {
      const elementHas = Tooltip.elHasNonEmptyAttr(element);

      if (elementHas('title') && !elementHas('data-tooltip')) {
        element.dataset.tooltip = element.getAttribute('title');
        element.setAttribute('title', '');
      }

      if (!elementHas('data-position')) {
        element.dataset.position = this.settings.position;
      }

      if (elementHas('data-tooltip')) {
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
