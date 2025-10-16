const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}))

app.use(express.static('public'));
const path = require('path');

app.get('/', (req, res) => {
  //res.send('Hello World - Teste!')
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.get('/sobre', (req, res) => {
    res.send('Pagina sobre')
  })

  app.post('/contato', (req, res) =>{
    const {nome, email} = req.body;
    res.send(`Dados recebidos: ${nome}, ${email}`);
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
