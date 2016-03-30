/*
 *  /server/app/index.js
 *  © 2016 Jonathan Ballands
 */

import express from 'express';

// -----------------------------------------------------------------------------

import WorkRouter from './workRoutes.js';
import {log} from '../foundation.js';

// -----------------------------------------------------------------------------

export default function() {
  let router = express.Router();

// -----------------------------------------------------------------------------

  router.get('', (req, res) => {
    res.render('home', {
      layout: 'default',
      title: 'jonathanballands.me'
    });
  });

// -----------------------------------------------------------------------------

  router.get('/resume', (req, res) => {
    res.render('resume', {
      layout: 'default',
      title: 'Résumé | jonathanballands.me'
    });
  });

// -----------------------------------------------------------------------------

router.use('/work', WorkRouter());

// -----------------------------------------------------------------------------

  return router;
}
