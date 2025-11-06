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

//trazer o arquivo de rotas (API.JS)
const apiRoutes = require('./routes/api');
app.use(express.json()); //para o server ter a capacidade de tratar dados no formato json

//alcançar todas as rotas (api.js)
app.use('/api/users/', apiRoutes);

//instanciar o servidor a porta
app.listen(port, () =>{
    console.log("Servidor funcionando");
});
