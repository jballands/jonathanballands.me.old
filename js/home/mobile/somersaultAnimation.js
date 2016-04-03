/*
 *  /js/home/desktop/somersaultAnimation.js
 *  © 2016 Jonathan Ballands
 */

import isElemInViewport from '../../_utils/isElemInViewport.js';

export default function() {

  let hasSomersaultUnitTriggered = false;

  // Set up everything
  let somersaultFrontPhone = $('#somersault-hero-unit-front');
  let somersaultBackPhone = $('#somersault-hero-unit-back');

  // ---------------------------------------------------------------------------

  $(window).on('scroll', () => {

    // if (isElemInViewport($('#somersault-hero-unit-trigger')) && !hasSomersaultUnitTriggered) {
    //   somersaultBackPhone.animate({ top: '100px' }, 800, 'easeOutExpo', somersaultBackPhoneDriftDown);
    //   somersaultFrontPhone.animate({ top: '100px' }, 1200, 'easeOutExpo', somersaultFrontPhoneDriftDown);
    //   hasSomersaultUnitTriggered = true;
    // }

  });

  // ---------------------------------------------------------------------------

  let somersaultFrontPhoneDriftDown = () => {
    somersaultFrontPhone.animate({ top: '130px' }, 3000, 'easeInOutSine', somersaultFrontPhoneDriftUp);
  };

  let somersaultFrontPhoneDriftUp = () => {
    somersaultFrontPhone.animate({ top: '100px' }, 3000, 'easeInOutSine', somersaultFrontPhoneDriftDown);
  }

  let somersaultBackPhoneDriftDown = () => {
    somersaultBackPhone.animate({ top: '130px' }, 3000, 'easeInOutSine', somersaultBackPhoneDriftUp);
  };

  let somersaultBackPhoneDriftUp = () => {
    somersaultBackPhone.animate({ top: '100px' }, 3000, 'easeInOutSine', somersaultBackPhoneDriftDown);
  }
}
