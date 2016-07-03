/*
 *  /js/ibm-swift/mobile/fluidRoadmapAnimation.js
 *  © 2016 Jonathan Ballands
 */

import isElemInViewport from '../../_utils/isElemInViewport.js';

export default function() {

  let animHasTriggered = false;

  // Set up everything
  let macbookOne = $('#ibmswift-macbook-1');
  const VIEWPORT_WIDTH = macbookOne.parent().width();

  // ---------------------------------------------------------------------------

  macbookOne.css({ left: '100%' }).stop();

  $(window).on('scroll', () => {

    if (isElemInViewport($('#ibm-swift-fluid-roadmap')) && !animHasTriggered) {
      macbookOne.animate({ left: `${(VIEWPORT_WIDTH / 2) - (macbookOne.width() / 2)}px` }, 600, 'easeOutExpo');
      animHasTriggered = true;
    }

  });

}
