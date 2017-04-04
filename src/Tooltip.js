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
          this.bindEvents( element );
        }
      }
    } );
  }

  bindEvents( element ) {
    const tooltippedElement = element;
    const tooltip = this.tooltip;

    // const inViewport = ( elementRect ) => {
    //   return elementRect.top > 40;
    // };

    const calcXShift = ( event ) => {
      return event.pageX - ( tooltip.clientWidth / 2 );
    };

    const calcYShift = ( event ) => {
      const tooltippedElementRect = tooltippedElement.getBoundingClientRect();
      const tooltippedElementStyles = window.getComputedStyle( tooltippedElement );

      // console.log( tooltippedElementRect );

      let yShift = -( tooltip.clientHeight + 10 );

      if ( tooltippedElementStyles.getPropertyValue( 'display' ) !== 'block' ) {
        yShift += tooltippedElementRect.top;
      } else {
        yShift += event.pageY;
      }

      return yShift;
    };

    tooltippedElement.addEventListener( 'mouseover', ( event ) => {
      tooltip.textContent = tooltippedElement.dataset.title;

      tooltip.style.top = `${calcYShift( event )}px`;
      tooltip.style.left = `${calcXShift( event )}px`;

      tooltip.classList.add( 'tooltip--visible' );
    } );

    tooltippedElement.addEventListener( 'mousemove', ( event ) => {
      tooltip.style.top = `${calcYShift( event )}px`;
      tooltip.style.left = `${calcXShift( event )}px`;
    } );

    tooltippedElement.addEventListener( 'mouseleave', () => {
      tooltip.classList.remove( 'tooltip--visible' );
      tooltip.removeAttribute( 'style' );
    } );
  }
}

export default Tooltip;
