/*
 *  /js/ibm-swift/fluidRoadmapAnimation.js
 *  © 2016 Jonathan Ballands
 */

import isElemInViewport from '../_utils/isElemInViewport.js';

export default function() {

  let animHasTriggered = false;

  // Set up everything
  let macbookOne = $('#ibmswift-macbook-1');
  let macbookTwo = $('#ibmswift-macbook-2');
  let macbookThree = $('#ibmswift-macbook-3');

  // ---------------------------------------------------------------------------

  $(window).on('scroll', () => {

    if (isElemInViewport($('#ibm-swift-fluid-roadmap-trigger')) && !animHasTriggered) {
      macbookOne.animate({ left: '0', opacity: 1 }, 1750, 'easeOutExpo', animateMacbookTwo);
      animHasTriggered = true;
    }

  });

  // ---------------------------------------------------------------------------

  let animateMacbookTwo = () => {
    macbookTwo.animate({ left: '75px', opacity: 1 }, 1750, 'easeOutExpo', animateMacbookThree);
  };

  let animateMacbookThree = () => {
    macbookThree.animate({ left: '175px', opacity: 1 }, 1750, 'easeOutExpo');
  };
}
