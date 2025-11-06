const express = require('express'); //importar o framework
const app = express();
const port = 3000;

//passar o caminho dos arquivos estáticos
const path = require('path');
app.use(express.static('public'));

//chamar a conexão com o banco de dados (db.js)
const db = require('./db');


//rota principal (/)
app.get('/', (req, res) =>{
    //res.send("Front funcinando");
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

//instanciar o servidor a porta
app.listen(port, () =>{
    console.log("Servidor funcionando");
});
