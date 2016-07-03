/*
 *  /js/ibm-swift/desktop/fluidRoadmapAnimation.js
 *  © 2016 Jonathan Ballands
 */

import isElemInViewport from '../../_utils/isElemInViewport.js';

export default function() {

  let animHasTriggered = false;

  // Set up everything
  let macbook = $('#ibmswift-macbook-1');

  // ---------------------------------------------------------------------------

  macbook.css({ left: '100%' }).stop();

  $(window).on('scroll', () => {

    if (isElemInViewport($('#ibm-swift-fluid-roadmap')) && !animHasTriggered) {
      macbook.animate({ left: '25px' }, 600, 'easeOutExpo');
      animHasTriggered = true;
    }

  });

}
