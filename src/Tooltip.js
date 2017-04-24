class Tooltip {
  constructor( tooltipSelector = 'a' ) {
    this.tooltippedElements = document.querySelectorAll( tooltipSelector );
    this.tooltip = null;
    this.createTooltip();
  }

  createTooltip() {
    const tooltipBox = document.createElement( 'span' );
    tooltipBox.classList.add( 'tooltip' );
    document.body.appendChild( tooltipBox );

    this.tooltip = tooltipBox;

    this.copyLabels();
  }

  copyLabels() {
    [ ...this.tooltippedElements ].forEach( ( element ) => {
      if ( element.hasAttribute( 'title' ) ) {
        const title = element.getAttribute( 'title' );

        // TODO: Provide WAI-ARIA support
        if ( title !== '' ) {
          element.setAttribute( 'title', '' );
          element.dataset.title = title;
          element.dataset.position = this.determineTooltipPosition( element, this.getTooltipDimensions( title ) );
          this.bindElementEvents( element );
        }
      }
    } );
  }

  getElementsPositionInViewport( element ) {
    const elementsPosition = element;
    return elementsPosition;
  }

  getTooltipDimensions( tooltipText ) {
    const tooltipDimensions = [];

    this.tooltip.textContent = tooltipText;

    tooltipDimensions[ 0 ] = this.tooltip.offsetWidth;
    tooltipDimensions[ 1 ] = this.tooltip.offsetHeight;

    this.tooltip.textContent = '';

    return tooltipDimensions;
  }

  determineTooltipPosition( element, tooltipDimensions ) {
    let tooltipPosition = tooltipDimensions;

    tooltipPosition = 'top-center';

    return tooltipPosition;
  }

  bindElementEvents( element ) {
    const tooltippedElement = element;
    const tooltippedElementRect = tooltippedElement.getBoundingClientRect();
    // const tooltippedElementStyles = window.getComputedStyle( tooltippedElement );
    const tooltip = this.tooltip;
    const tooltipPosition = tooltippedElement.dataset.position.split( '-' );

    const calcXShift = ( event ) => {
      // if ( this.options.floating ) {
        // let xShift = event.pageX;
        // xShift -= ( tooltip.clientWidth / 2 );
        // xShift -= tooltip.clientWidth;
      // } else {}

      console.log( event );

      // [TOP/BOTTOM]-LEFT case
      let xShift = tooltippedElementRect.left;

      if ( tooltipPosition[ 1 ] === 'center' ) {
        // [TOP/BOTTOM]-CENTER case
        xShift -= ( tooltip.clientWidth - tooltippedElementRect.width ) / 2;

      } else if ( tooltipPosition[ 1 ] === 'right' ) {
        // [TOP/BOTTOM]-RIGHT case
        xShift += tooltippedElementRect.width - tooltip.clientWidth;
      }

      return xShift;
    };

    const calcYShift = ( event ) => {
      // if ( this.options.floating ) {
      //   yShift += event.pageY;
      // }

      let yShift = 0;

      if ( tooltipPosition[ 0 ] === 'top' ) {
        // TOP-[LEFT/CENTER/RIGHT] case
        yShift = tooltippedElementRect.top - tooltip.clientHeight - 10;

      } else if ( tooltipPosition[ 0 ] === 'bottom' ) {
        // BOTTOM-[LEFT/CENTER/RIGHT] case
        yShift = tooltippedElementRect.bottom + 10;
      }

      console.log( event );

      // if ( tooltippedElementStyles.getPropertyValue( 'display' ) !== 'block' ) {
      //   yShift += tooltippedElementRect.top;
      // }

      return yShift;
    };

    const setTooltipPosition = ( event ) => {
      tooltip.style.top = `${calcYShift( event )}px`;
      tooltip.style.left = `${calcXShift( event )}px`;
    };

    const toggleTooltipVisibility = () => {
      const visibilityClass = 'tooltip--visible';
      tooltip.classList.toggle( visibilityClass );
      if ( !tooltip.classList.contains( visibilityClass ) ) {
        tooltip.removeAttribute( 'style' );
      }
    };

    const mouseEnterHandler = ( event ) => {
      tooltip.textContent = tooltippedElement.dataset.title;
      setTooltipPosition( event );
      toggleTooltipVisibility();
    };

    const mouseMoveHandler = ( event ) => {
      setTooltipPosition( event );
    };

    const mouseLeaveHandler = () => {
      toggleTooltipVisibility();
    };

    tooltippedElement.addEventListener( 'mouseenter', mouseEnterHandler );
    tooltippedElement.addEventListener( 'focus', mouseEnterHandler );
    tooltippedElement.addEventListener( 'mousemove', mouseMoveHandler );
    tooltippedElement.addEventListener( 'mouseleave', mouseLeaveHandler );
    tooltippedElement.addEventListener( 'blur', mouseLeaveHandler );
  }
}

export default Tooltip;
