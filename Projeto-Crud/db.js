const mysql = require('mysql2'); //importar a lib

//estabelecer as credenciais de conexão
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'c@tolic@',
    database: 'userdb',
    port: '3306'
});

//estabelecer a coenxão
db.connect(err =>{
    if (err) throw err; //tratamento de exce~ção
    console.log("conectado ao banco de dados");
});

//exporta a configuração de conexão
module.exports = db;