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

  codeiMac.css({ left: '100%' }).stop();

  $(window).on('scroll', () => {

    if (isElemInViewport($('#code-liquid-bit')) && !hasCodeiMacTriggered) {
      codeiMac.animate({ left: '100px' }, 600, 'easeOutExpo');
      hasCodeiMacTriggered = true;
    }

  });
}
