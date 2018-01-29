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

  showTooltip() {
    const visibilityClass = `${this.settings.tooltipClass}--visible`;

    if (!this.tooltip.classList.contains(visibilityClass)) {
      this.tooltip.classList.add(visibilityClass);
    }
  }

  hideTooltip() {
    const visibilityClass = `${this.settings.tooltipClass}--visible`;

    if (this.tooltip.classList.contains(visibilityClass)) {
      this.tooltip.classList.remove(visibilityClass);
      this.tooltip.removeAttribute('style');
      this.resetClass();
    }
  }

  calcCoordinates(elementRect, position) {
    const tooltipBounding = this.tooltip.getBoundingClientRect();
    const elementBounding = elementRect;
    const pageScroll = Tooltip.getScroll();

    const coordinates = {
      x: pageScroll.x,
      y: pageScroll.y
    };

    // top & bottom

    if ((position.side === 'top' || position.side === 'bottom')) {
      if (position.alignment === 'start') {
        coordinates.x += elementBounding.left;
      }

      if (position.alignment === 'center') {
        coordinates.x +=
          elementBounding.left +
          ((elementBounding.width / 2) - (tooltipBounding.width / 2));
      }

      if (position.alignment === 'end') {
        coordinates.x += (elementBounding.right - tooltipBounding.width);
      }
    }

    if (position.side === 'top') {
      coordinates.y += (elementBounding.top - tooltipBounding.height - this.settings.margin);
    }

    if (position.side === 'bottom') {
      coordinates.y += (elementBounding.bottom + this.settings.margin);
    }

    // left & right

    if ((position.side === 'left' || position.side === 'right')) {
      if (position.alignment === 'start') {
        coordinates.y += elementBounding.top;
      }

      if (position.alignment === 'center') {
        coordinates.y +=
          elementBounding.top +
          ((elementBounding.height / 2) - (tooltipBounding.height / 2));
      }

      if (position.alignment === 'end') {
        coordinates.y += elementBounding.bottom - tooltipBounding.height;
      }
    }

    if (position.side === 'left') {
      coordinates.x += (elementBounding.left - this.settings.margin - tooltipBounding.width);
    }

    if (position.side === 'right') {
      coordinates.x += (elementBounding.right + this.settings.margin);
    }

    return coordinates;
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
    return {
      vertical: this.checkVerticalSpace(elementBounding),
      horizontal: this.checkHorizontalSpace(elementBounding)
    };
  }

  // compare desired position & possible space on sides;
  // if desired is not possible, return best possible position
  getActualPosition(desired, possible) {
    const positionMap = {
      top: 'start',
      bottom: 'end',
      left: 'start',
      right: 'end',
    };

    const oppositeMap = {
      top: 'bottom',
      bottom: 'top',
      left: 'right',
      right: 'left',
      vertical: 'horizontal',
      horizontal: 'vertical',
    };

    const axis = (
      desired.side === 'top' || desired.side === 'bottom'
    ) ? 'vertical' : 'horizontal';

    const getSide = (wantedAxis, wantedSide) => {
      const theAxis = possible[wantedAxis];
      let side;

      if (theAxis[positionMap[wantedSide]]) {
        side = wantedSide;
      } else if (theAxis[positionMap[oppositeMap[wantedSide]]]) {
        side = oppositeMap[wantedSide];
      } else {
        side = getSide(oppositeMap[wantedAxis], wantedSide);
      }

      return side;
    };

    const getAlignment = (wantedAxis, wantedAlignment) => {
      const possibleAlign = possible[wantedAxis];
      let alignment;

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

  setTooltipPosition(element) {
    const elementRect = element.getBoundingClientRect();
    const desiredPosition = this.getDesiredPosition(element);
    const possibleSides = this.getPossibleSides(elementRect);
    const actualPosition = this.getActualPosition(desiredPosition, possibleSides);
    const coordinates = this.calcCoordinates(elementRect, actualPosition);

    this.tooltip.style.left = `${coordinates.x}px`;
    this.tooltip.style.top = `${coordinates.y}px`;

    this.setClass(`${actualPosition.side}-${actualPosition.alignment}`);
  }

  setTooltipContent(content) {
    this.tooltip.textContent = content;
  }

  mouseEnterHandler(event) {
    const element = event.currentTarget;

    this.setTooltipContent(element.dataset.tooltip);
    this.setTooltipPosition(element);
    this.showTooltip();
  }

  mouseLeaveHandler() {
    this.hideTooltip();
  }

  bindElementEvents(element) {
    element.addEventListener('mouseenter', event => this.mouseEnterHandler(event));
    element.addEventListener('focus', event => this.mouseEnterHandler(event));

    element.addEventListener('mouseleave', event => this.mouseLeaveHandler(event));
    element.addEventListener('blur', event => this.mouseLeaveHandler(event));
  }

  createTooltipData() {
    [...this.tooltippedElements].forEach((el) => {
      const element = el;
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
