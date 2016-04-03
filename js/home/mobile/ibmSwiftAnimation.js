/*
 *  /js/home/mobile/ibmSwiftAnimation.js
 *  © 2016 Jonathan Ballands
 */

import isElemInViewport from '../../_utils/isElemInViewport.js';

export default function() {

  let hasIBMUnitTriggered = false;

  // Set up everything
  let ibmiPhone = $('#ibm-hero-unit-iphone');
  let ibmMacbook = $('#ibm-hero-unit-macbook');
  // ---------------------------------------------------------------------------

  $(window).on('scroll', () => {

    if (isElemInViewport($('#ibm-hero-unit-trigger')) && !hasIBMUnitTriggered) {
      ibmiPhone.animate({ top: '130px' }, 1000, 'easeOutExpo');
      ibmMacbook.animate({ left: '10px' }, 800, 'easeOutExpo');
      hasIBMUnitTriggered = true;
    }

  });
}
