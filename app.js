import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import hbs from 'hbs';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import express from 'express';
const app = express();

dotenv.config();
const port = process.env.PORT;

app.use('/images' , express.static(path.join(__dirname,'public/images')));
app.use('/assets' , express.static(path.join(__dirname,'public/assets')));

// Handlebars
app.set('view engine','hbs');
hbs.registerPartials(__dirname+'/views/partials', function(err){});

const nombre = 'Jesus Peralta';
const titulo = 'WebRouting-NodeJS';

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
    console.log(__dirname);
  })

  

app.listen(port, ()=>{
  console.log(`Corriendo en puerto: ${port}`);
})