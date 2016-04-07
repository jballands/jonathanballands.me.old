/*
 *  /js/somersault/desktop/powerfulAnimation.js
 *  © 2016 Jonathan Ballands
 */

import isElemInViewport from '../../_utils/isElemInViewport.js';

export default function() {

  let animHasTriggered = false;

  // Set up everything
  let iMac = $('#somersault-imac-1');
  // ---------------------------------------------------------------------------

  $(window).on('scroll', () => {

    if (isElemInViewport($('#somersault-powerful')) && !animHasTriggered) {
      iMac.animate({ left: '120px' }, 600, 'easeOutExpo');
      animHasTriggered = true;
    }

  });
}
