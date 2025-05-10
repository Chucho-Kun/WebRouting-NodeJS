import express from 'express'

const app = express()

app.use( express.static( 'public' ) );

app.get('/', (req, res) => {
  res.send('Pagina principal')
})

app.get('/hola-mundo', (req, res) => {
    res.send('pagina de hola mundo')
  })

  app.get('*', (req, res) => {
    res.send('404 ! Pagina no encontrada')
  })

app.listen(8080)