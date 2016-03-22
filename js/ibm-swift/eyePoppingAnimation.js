/*
 *  /js/ibm-swift/eyePoppingAnimation.js
 *  © 2016 Jonathan Ballands
 */

import isElemInViewport from '../_utils/isElemInViewport.js';

export default function() {

  let hasiPhoneTriggered = false;

  // Set up everything
  let eyePoppingiPhone = $('#ibmswift-iphone-1');

  // ---------------------------------------------------------------------------

  $(window).on('scroll', () => {

    if (isElemInViewport($('#ibm-swift-eye-popping-trigger')) && !hasiPhoneTriggered) {
      eyePoppingiPhone.animate({ top: '100px', opacity: 1 }, 2500, 'easeOutExpo');
      hasiPhoneTriggered = true;
    }

  });
}
