class Tooltip {
  constructor(options = {}) {
    this.settings = {
      selector: 'a',
      tooltipClass: 'tooltip',
      margin: 10,
      position: 'center-top'
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
    let position = '';

    if (Tooltip.elHasNonEmptyAttr(element)('data-position')) {
      position = element.dataset.position;
    } else {
      position = this.settings.position;
    }

    const posSplit = position.split('-');

    // for centered position only one alignment might be provided,
    // eg. top === center-top
    if (posSplit.length < 2) {
      if (posSplit[0] === 'top' || posSplit[0] === 'bottom') {
        posSplit.unshift('center');
      }

      if (posSplit[0] === 'left' || posSplit[0] === 'right') {
        posSplit.push('center');
      }
    }

    return {
      x: posSplit[0],
      y: posSplit[1]
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

  calcPosition(elementRect, posObj) {
    const tooltipBounding = this.tooltip.getBoundingClientRect();
    const elementBounding = elementRect;
    const pageScroll = Tooltip.getScroll();

    const position = {
      x: pageScroll.x,
      y: pageScroll.y
    };

    // x axis

    if (posObj.x === 'left' && (posObj.y === 'top' || posObj.y === 'bottom')) {
      position.x += elementBounding.left;
    }

    if (posObj.x === 'center' && (posObj.y === 'top' || posObj.y === 'bottom')) {
      position.x +=
        elementBounding.left +
        ((elementBounding.width / 2) - (tooltipBounding.width / 2));
    }

    if (posObj.x === 'right' && (posObj.y === 'top' || posObj.y === 'bottom')) {
      position.x += (elementBounding.right - tooltipBounding.width);
    }

    if (posObj.x === 'left' && posObj.y === 'center') {
      position.x += (elementBounding.left - this.settings.margin - tooltipBounding.width);
    }

    if (posObj.x === 'right' && posObj.y === 'center') {
      position.x += (elementBounding.right + this.settings.margin);
    }

    // y axis

    if (posObj.y === 'top') {
      position.y += (elementBounding.top - tooltipBounding.height - this.settings.margin);
    }

    if (posObj.y === 'center') {
      position.y +=
        elementBounding.top +
        ((elementBounding.height / 2) - (tooltipBounding.height / 2));
    }

    if (posObj.y === 'bottom') {
      position.y += (elementBounding.bottom + this.settings.margin);
    }

    return position;
  }

  checkBottomPosition(elementBounding) {
    const space = window.innerHeight - (elementBounding.bottom + this.settings.margin);
    return space > this.tooltip.offsetHeight;
  }

  checkTopPosition(elementBounding) {
    const space = (elementBounding.top - this.settings.margin);
    return space > this.tooltip.offsetHeight;
  }

  checkRightPosition(elementBounding) {
    const space = window.innerWidth - (elementBounding.right + this.settings.margin);
    return space > this.tooltip.offsetWidth;
  }

  checkLeftPosition(elementBounding) {
    const space = (elementBounding.left - this.settings.margin);
    return space > this.tooltip.offsetWidth;
  }

  // check alignments possible in the viewport
  getPossiblePositions(elementBounding) {
    const positions = {};

    positions.x = {
      left: this.checkLeftPosition(elementBounding),
      center: true,
      right: this.checkRightPosition(elementBounding),
    };

    positions.y = {
      top: this.checkTopPosition(elementBounding),
      center: true,
      bottom: this.checkBottomPosition(elementBounding),
    };

    return positions;
  }

  // compare desired & possible alignments;
  // if desired is not possible, return best possible position
  getActualPosition(desiredPosition, possiblePositions) {
    const position = {};

    const isPossible = (x, y) => {
      return possiblePositions.x[x] && possiblePositions.y[y];
    };

    // order is important
    const available = {
      'left-top': isPossible('left', 'top'),
      'right-top': isPossible('right', 'top'),
      'center-top': isPossible('center', 'top'),

      'left-bottom': isPossible('left', 'bottom'),
      'right-bottom': isPossible('right', 'bottom'),
      'center-bottom': isPossible('center', 'bottom'),

      'left-center': isPossible('left', 'center'),
      'right-center': isPossible('right', 'center'),
      'center-center': false,
    };

    if (available[`${desiredPosition.x}-${desiredPosition.y}`]) {
      position.x = desiredPosition.x;
      position.y = desiredPosition.y;
    } else {
      Object.keys(available).filter(pos => available[pos]).forEach((pos) => {
        console.log(pos);
      });
    }

    return position;
  }

  setTooltipPosition(element) {
    const elementRect = element.getBoundingClientRect();
    const desiredPosition = this.getDesiredPosition(element);
    const possiblePositions = this.getPossiblePositions(elementRect);
    const actualPosition = this.getActualPosition(desiredPosition, possiblePositions);

    this.tooltip.style.left = `${this.calcPosition(elementRect, actualPosition).x}px`;
    this.tooltip.style.top = `${this.calcPosition(elementRect, actualPosition).y}px`;

    this.setClass(`${actualPosition.x}-${actualPosition.y}`);
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
