/*
 *  /js/somersault/mobile/powerfulAnimation.js
 *  © 2016 Jonathan Ballands
 */

import isElemInViewport from '../../_utils/isElemInViewport.js';

export default function() {

  let animHasTriggered = false;

  // Set up everything
  let iMac = $('#somersault-imac-1');
  // ---------------------------------------------------------------------------

  iMac.css({ left: '180%' }).stop();

  $(window).on('scroll', () => {

    if (isElemInViewport($('#somersault-powerful')) && !animHasTriggered) {
      iMac.animate({ left: '0' }, 600, 'easeOutExpo');
      animHasTriggered = true;
    }

  });
}
