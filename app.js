import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import hbs from 'hbs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express from 'express';
const app = express();

// Handlebars
hbs.registerPartials(__dirname+'/views/partials', function(err){});

app.set('view engine','hbs');
app.use('/assets', express.static(path.join(__dirname, '/assets')));

const nombre = 'Jesus Peralta';
const titulo = 'ServiceWeb-NodeJS';

app.get('/', (req, res) => {
    res.render('home',{ nombre , titulo });
  });

  app.get('/generic', (req, res) => {
    res.render('generic',{ nombre , titulo });
  })

  app.get('/elements', (req, res) => {
    res.render('elements',{ nombre , titulo });
  })

  app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html' );
  })

app.listen(8080)