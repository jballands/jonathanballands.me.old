/*
 *  /server/index.js
 *  © 2016 Jonathan Ballands
 */

import express from 'express';
import exphbs from 'express-handlebars';
import compress from 'compression';
import path from 'path';

// -----------------------------------------------------------------------------

import routes from './app/routes.js';
import config from './config.json';
import {log} from './foundation.js';

const FIFTEEN_MINS = 900000;

// -----------------------------------------------------------------------------

let app = express();

//
//  Handlebars -----------------------------------------------------------------
//

app.engine('hbs', exphbs({
  extname: '.hbs',
  layoutsDir: `${__dirname}/../views/layouts`,
  partialsDir: `${__dirname}/../views/partials`,
}));
app.set('view engine', 'hbs');
app.set('views', `${__dirname}/../views`)

//
//  Static Files ---------------------------------------------------------------
//

app.use(compress());
app.use(express.static(path.join(__dirname, '../public')));

//
//  Routing --------------------------------------------------------------------
//

app.use('/', routes());

//
//  Start ----------------------------------------------------------------------
//

app.listen(config.port, () => {
  log.info(`Server listening on port ${config.port}`);
});

process.on('SIGINT', () => {
  log.info('SIGINT!!!');
  process.exit(0);
});

process.on('SIGTERM', () => {
  log.info('SIGTERM!!!');
  process.exit(0);
});

process.on('exit', () => {
  server.close();
  log.info('The server is going down NOW. Bye bye');
});
