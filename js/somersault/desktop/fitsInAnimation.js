/*
 *  /js/somersault/fitsInAnimation.js
 *  © 2016 Jonathan Ballands
 */

import isElemInViewport from '../../_utils/isElemInViewport.js';

export default function() {

  let animHasTriggered = false;

  // Set up everything
  let iPhone3 = $('#somersault-iphone-3');
  let iPhone4 = $('#somersault-iphone-4');
  let iPhone5 = $('#somersault-iphone-5');
  let iPhone6 = $('#somersault-iphone-6');
  let iPhone7 = $('#somersault-iphone-7');
  let iPhone8 = $('#somersault-iphone-8');

  // ---------------------------------------------------------------------------

  $(window).on('scroll', () => {

    // 338px is 50% of the parent container, 30px displacement
    if (isElemInViewport($('#somersault-fits-in')) && !animHasTriggered) {
      iPhone5.animate({ top: '138px', opacity: 1 }, 2000, 'easeOutExpo');
      iPhone7.delay(300).animate({ top: '238px', opacity: 1 }, 2000, 'easeOutExpo');
      iPhone6.delay(225).animate({ top: '-38px', opacity: 1 }, 2000, 'easeOutExpo');
      iPhone3.delay(75).animate({ top: '338px', opacity: 1 }, 2000, 'easeOutExpo');
      iPhone4.delay(375).animate({ top: '38px', opacity: 1 }, 2000, 'easeOutExpo');
      iPhone8.delay(150).animate({ top: '68px', opacity: 1 }, 2000, 'easeOutExpo');

      animHasTriggered = true;
    }

  });
}
