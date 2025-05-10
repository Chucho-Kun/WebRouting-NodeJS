const http = require('http');

http.createServer(( req , res )=>{
    res.writeHead(200 , {'Content-Type':'text/plain'});
    console.log(req);
    res.write('hola mundazo de npm');
    res.end();
})
.listen( 8080 )
console.log('escuchando ---')