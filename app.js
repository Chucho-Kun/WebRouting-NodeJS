import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express from 'express'
const app = express()

app.use( express.static( 'public' ) );



  app.get('/generic', (req, res) => {
    res.sendFile( __dirname + '/public/generic.html' );
  })

  app.get('/elements', (req, res) => {
    res.sendFile( __dirname + '/public/elements.html' );
  })

  app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html' );
  })

app.listen(8080)