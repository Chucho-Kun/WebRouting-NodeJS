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
