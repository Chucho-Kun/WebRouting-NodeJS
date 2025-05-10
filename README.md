# Actualizacion Express - ES6
Express ya no trabaja con __dirname en el ES6 sin declararlo antes como 
 
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
# Error MIME Type

La aplicación tabaja en local pero no se cargan estilo ni js con el siguiente mensaje
```
Refused to apply style from 'http://localhost:8080/assets/css/main.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
```
