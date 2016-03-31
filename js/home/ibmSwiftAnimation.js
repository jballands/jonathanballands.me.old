/*
 *  /js/home/ibmSwiftAnimation.js
 *  © 2016 Jonathan Ballands
 */

import isElemInViewport from '../_utils/isElemInViewport.js';
import needsResponsiveness from '../_utils/needsResponsiveness.js';

export default function() {

  let hasIBMUnitTriggered = false;

  // Set up everything
  let ibmiPhone = $('#ibm-hero-unit-iphone');
  let ibmMacbook = $('#ibm-hero-unit-macbook');

  // Check responsiveness
  //let mq = window.matchMedia('(max-width: 768px)');

  let ibmiPhoneTop = needsResponsiveness ? '120px' : '250px';
  let ibmMacbookLeft = needsResponsiveness ? '30px' : '100px';

  // ---------------------------------------------------------------------------

  $(window).on('scroll', () => {

    if (isElemInViewport($('#ibm-hero-unit-trigger')) && !hasIBMUnitTriggered) {
      ibmiPhone.animate({ top: ibmiPhoneTop }, 1000, 'easeOutExpo');
      ibmMacbook.animate({ left: ibmMacbookLeft }, 800, 'easeOutExpo');
      hasIBMUnitTriggered = true;
    }

  });
}
