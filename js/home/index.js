/*
 *  /js/home/index.js
 *  © 2016 Jonathan Ballands
 */

import navigationBar from '../_utils/navigationBar.js';

import ibmSwiftAnimation from './ibmSwiftAnimation.js';
import somersaultAnimation from './somersaultAnimation.js';
import selfPromotionAnimation from './selfPromotionAnimation.js';

$(document).ready(() => {
  navigationBar();

  ibmSwiftAnimation();
  somersaultAnimation();
  selfPromotionAnimation();
});
