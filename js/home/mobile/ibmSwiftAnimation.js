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
  const VIEWPORT_WIDTH = ibmMacbook.parent().width();

  // ---------------------------------------------------------------------------

  ibmiPhone.css({ top: '-100%' }).stop();
  ibmMacbook.css({ left: '100%' }).stop();

  let macbookEndPoint = `${(VIEWPORT_WIDTH / 2) - (ibmMacbook.width() / 2)}px`;
  // Do we need to shift the content over?
  if (VIEWPORT_WIDTH < 414) {
    ibmiPhone.css({ left: '0' });
    macbookEndPoint = '15px';
  }

  $(window).on('scroll', () => {

    if (isElemInViewport($('#ibm-hero-unit-trigger')) && !hasIBMUnitTriggered) {
      ibmiPhone.animate({ top: '123px' }, 1000, 'easeOutExpo');
      ibmMacbook.animate({ left: macbookEndPoint }, 800, 'easeOutExpo');
      hasIBMUnitTriggered = true;
    }

  });
}
