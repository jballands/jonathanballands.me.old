/*
 *  /js/mobile.js
 *  © 2016 Jonathan Ballands
 */

import home from './home/mobile/index.js';
import ibmSwift from './ibm-swift/mobile/index.js';
import somersault from './somersault/mobile/index.js';
import resume from './resume/mobile/index.js';
import navigationBar from './navigationBar/index.js';

export default function() {
  home();
  ibmSwift();
  somersault();
  resume();
}
