/*
 *  /js/home/index.js
 *  © 2016 Jonathan Ballands
 */

import {LAPTOP_MIN, TABLET_MAX, TABLET_MIN, MOBILE_MAX} from '../_utils/constants.js';

// -----------------------------------------------------------------------------

import desktop from './desktop/index.js';
import tablet from './tablet/index.js';
import mobile from './mobile/index.js';

if (document.documentElement.clientWidth >= LAPTOP_MIN) {
  desktop();
}

if (document.documentElement.clientWidth <= TABLET_MAX &&
    document.documentElement.clientWidth >= TABLET_MIN) {
  tablet();
}

if (document.documentElement.clientWidth <= MOBILE_MAX) {
  mobile();
}
