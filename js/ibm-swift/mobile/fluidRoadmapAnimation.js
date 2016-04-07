/*
 *  /js/ibm-swift/desktop/fluidRoadmapAnimation.js
 *  © 2016 Jonathan Ballands
 */

import isElemInViewport from '../../_utils/isElemInViewport.js';

export default function() {

  let animHasTriggered = false;

  // Set up everything
  let macbookOne = $('#ibmswift-macbook-1');
  let macbookTwo = $('#ibmswift-macbook-2');
  let macbookThree = $('#ibmswift-macbook-3');

  // ---------------------------------------------------------------------------

  macbookOne.css({ left: '50px', opacity: 0 }).stop();
  macbookTwo.css({ left: '135px', opacity: 0 }).stop();
  macbookThree.css({ left: '245px', opacity: 0 }).stop();

  $(window).on('scroll', () => {

    if (isElemInViewport($('#ibm-swift-fluid-roadmap')) && !animHasTriggered) {
      macbookOne.animate({ left: '0', opacity: 1 }, 1000, 'easeOutExpo', animateMacbookTwo);
      animHasTriggered = true;
    }

  });

  // ---------------------------------------------------------------------------

  let animateMacbookTwo = () => {
    macbookTwo.delay(250).animate({ left: '25px', opacity: 1 }, 1000, 'easeOutExpo', animateMacbookThree);
  };

  let animateMacbookThree = () => {
    macbookThree.delay(250).animate({ left: '65px', opacity: 1 }, 1000, 'easeOutExpo');
  };

}
