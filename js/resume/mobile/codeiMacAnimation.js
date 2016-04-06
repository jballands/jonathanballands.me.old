/*
 *  /js/resume/desktop/codeiMacAnimation.js
 *  © 2016 Jonathan Ballands
 */

import isElemInViewport from '../../_utils/isElemInViewport.js';

export default function() {

  let hasCodeiMacTriggered = false;

  // Set up everything
  let codeiMac = $('#code-imac');
  // ---------------------------------------------------------------------------

  $(window).on('scroll', () => {

    if (isElemInViewport($('#code-liquid-bit')) && !hasCodeiMacTriggered) {
      codeiMac.animate({ left: '150px' }, 600, 'easeOutExpo');
      hasCodeiMacTriggered = true;
    }

  });
}
