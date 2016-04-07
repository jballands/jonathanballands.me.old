/*
 *  /js/somersault/index.js
 *  © 2016 Jonathan Ballands
 */

import {LAPTOP_MIN, MOBILE_MAX} from '../_utils/constants.js';

<<<<<<< HEAD
$(document).ready(() => {
  fitsInAnimation();
  powerfulAnimation();
});
=======
// -----------------------------------------------------------------------------

import desktop from './desktop/index.js';
import mobile from './mobile/index.js';

let viewport = null;

function size() {
  if (document.documentElement.clientWidth >= LAPTOP_MIN && viewport != LAPTOP_MIN) {
    viewport = LAPTOP_MIN;
    desktop();
  }
  else if (document.documentElement.clientWidth <= MOBILE_MAX && viewport != MOBILE_MAX) {
    viewport = MOBILE_MAX;
    mobile();
  }
}

window.onresize = size;
size();
>>>>>>> responsiveness
