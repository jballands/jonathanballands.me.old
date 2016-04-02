/*
 *  /js/somersault/index.js
 *  © 2016 Jonathan Ballands
 */

import {LAPTOP_MIN, TABLET_MAX, TABLET_MIN, MOBILE_MAX} from '../_utils/constants.js';

// -----------------------------------------------------------------------------

import desktop from './desktop/index.js';

if (document.documentElement.clientWidth >= LAPTOP_MIN) {
  desktop();
}
