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
          this.bindElementEvents( element );
        }
      }
    } );
  }

  bindElementEvents( element ) {
    const tooltippedElement = element;
    const tooltip = this.tooltip;
    const tooltippedElementRect = tooltippedElement.getBoundingClientRect();
    const tooltippedElementStyles = window.getComputedStyle( tooltippedElement );

    // const tooltipInViewport = ( elementRectTop ) => {
    //   return elementRectTop > 40;
    // };

    const calcXShift = ( event ) => {
      let xShift = event.pageX;
      xShift -= ( tooltip.clientWidth / 2 );

      // if ( tooltippedElementRect.left > ( tooltip.clientWidth - tooltippedElementRect.width ) ) {
      //   xShift -= ( tooltip.clientWidth / 2 );
      // }
      //
      // if ( tooltippedElementRect.right < ( tooltip.clientWidth - tooltippedElementRect.width ) ) {
      //   xShift += ( tooltip.clientWidth / 2 );
      // }

      return xShift;
    };

    const calcYShift = ( event ) => {
      let yShift = -( tooltip.clientHeight + 10 );

      if ( tooltippedElementStyles.getPropertyValue( 'display' ) !== 'block' ) {
        yShift += tooltippedElementRect.top;
      } else {
        yShift += event.pageY;
      }

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

    tooltippedElement.addEventListener( 'mouseover', ( event ) => {
      tooltip.textContent = tooltippedElement.dataset.title;
      setTooltipPosition( event );
      toggleTooltipVisibility();
    } );

    tooltippedElement.addEventListener( 'mousemove', ( event ) => {
      setTooltipPosition( event );
    } );

    tooltippedElement.addEventListener( 'mouseleave', () => {
      toggleTooltipVisibility();
    } );
  }
}

export default Tooltip;
