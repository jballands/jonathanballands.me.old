/*
 *  /js/somersault/mobile/powerfulAnimation.js
 *  © 2016 Jonathan Ballands
 */

import isElemInViewport from '../../_utils/isElemInViewport.js';

export default function() {

  let animHasTriggered = false;

  // Set up everything
  let iMac = $('#somersault-imac-1');
  const VIEWPORT_WIDTH = iMac.parent().width();

  // ---------------------------------------------------------------------------

  iMac.css({ left: '100%' }).stop();

  $(window).on('scroll', () => {

    if (isElemInViewport($('#somersault-powerful')) && !animHasTriggered) {
      iMac.animate({ left: `${(VIEWPORT_WIDTH / 2) - (iMac.width() / 2)}px` }, 600, 'easeOutExpo');
      animHasTriggered = true;
    }

  });
}
