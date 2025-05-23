# Website with web routing 
Website that shows the paths of each section without the file extension (friendly URLs)
## Technologies
Node JS + Express + Handlebars
## Deploy on Railway
Website hosted on Railway's server
[WebRouting-NodeJS](https://webrouting-nodejs-production.up.railway.app/)
## How to use
```
npm install
npm run dev
```
## Developer notes 
Express changes with its integration into ES6
Express no longer works with __dirname in ES6 without first declaring it as
```
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
...
  app.get('*', (req, res) => {
    res.sendFile( __dirname + '/public/404.html' );
  })
```
## Error MIME Type
The application works locally but neither style nor js are loaded with the following message
```
Refused to apply style from 'http://localhost:8080/assets/css/main.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
```
### Solved
The resources are requested in the following manner:
```
app.use('/images' , express.static(path.join(__dirname,'public/images')));
app.use('/assets' , express.static(path.join(__dirname,'public/assets')));
```
