/*
 *  /js/home/desktop/ibmSwiftAnimation.js
 *  © 2016 Jonathan Ballands
 */

<<<<<<< HEAD:js/home/ibmSwiftAnimation.js
import isElemInViewport from '../_utils/isElemInViewport.js';
import needsResponsiveness from '../_utils/needsResponsiveness.js';
=======
import isElemInViewport from '../../_utils/isElemInViewport.js';
>>>>>>> responsiveness:js/home/desktop/ibmSwiftAnimation.js

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

  ibmiPhone.css({ top: '-100%' }).stop();
  ibmMacbook.css({ left: '120%' }).stop();

  $(window).on('scroll', () => {

    if (isElemInViewport($('#ibm-hero-unit-trigger')) && !hasIBMUnitTriggered) {
      ibmiPhone.animate({ top: ibmiPhoneTop }, 1000, 'easeOutExpo');
      ibmMacbook.animate({ left: ibmMacbookLeft }, 800, 'easeOutExpo');
      hasIBMUnitTriggered = true;
    }

  });
}
