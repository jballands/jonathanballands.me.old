/*
 *  /js/ibm-swift/desktop/eyePoppingAnimation.js
 *  © 2016 Jonathan Ballands
 */

import isElemInViewport from '../../_utils/isElemInViewport.js';

export default function() {

  let animHasTriggered = false;

  // Set up everything
  let eyePoppingiPhone = $('#ibmswift-iphone-1');

  // ---------------------------------------------------------------------------

  eyePoppingiPhone.css({ top: '0', opacity: 0 });

  $(window).on('scroll', () => {

    if (isElemInViewport($('#ibm-swift-eye-popping')) && !animHasTriggered) {
      eyePoppingiPhone.animate({ top: '40px', opacity: 1 }, 1250, 'easeOutExpo');
      animHasTriggered = true;
    }

  });
}
