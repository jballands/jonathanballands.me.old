/*
 *  /js/resume/mgmtiMacAnimation.js
 *  © 2016 Jonathan Ballands
 */

import isElemInViewport from '../_utils/isElemInViewport.js';

export default function() {

  let hasMgmtiMacTriggered = false;

  // Set up everything
  let mgmtiMac = $('#mgmt-imac');
  // ---------------------------------------------------------------------------

  $(window).on('scroll', () => {

    if (isElemInViewport($('#mgmt-sidekick-unit')) && !hasMgmtiMacTriggered) {
      mgmtiMac.animate({ left: '150px' }, 600, 'easeOutExpo');
      hasMgmtiMacTriggered = true;
    }

  });
}
