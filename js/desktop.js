/*
 *  /js/desktop.js
 *  © 2016 Jonathan Ballands
 */

import home from './home/desktop/index.js';
import ibmSwift from './ibm-swift/desktop/index.js';
import somersault from './somersault/desktop/index.js';
import resume from './resume/desktop/index.js';

export default function() {
  home();
  ibmSwift();
  somersault();
  resume();
}
