/*
 *  /server/foundation.js
 *  © 2016 Jonathan Ballands
 */

import log from 'loglevel';

// -----------------------------------------------------------------------------

import config from './config.json';

//
//  Set Up Logging -------------------------------------------------------------
//

log.setLevel(config.beVerbose ? 0 : 2);
export {log};
