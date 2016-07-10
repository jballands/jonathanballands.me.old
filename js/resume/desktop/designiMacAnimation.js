/*
 *  /js/resume/desktop/designiMacAnimation.js
 *  © 2016 Jonathan Ballands
 */

import isElemInViewport from '../../_utils/isElemInViewport.js';

export default function() {

  let hasDesigniMacTriggered = false;

  // Set up everything
  let designiMac = $('#design-imac');
  // ---------------------------------------------------------------------------

  designiMac.css({ right: '100%' }).stop();

  $(window).on('scroll', () => {

    if (isElemInViewport($('#design-liquid-bit')) && !hasDesigniMacTriggered) {
      designiMac.animate({ right: '100px' }, 600, 'easeOutExpo');
      hasDesigniMacTriggered = true;
    }

  });
}
