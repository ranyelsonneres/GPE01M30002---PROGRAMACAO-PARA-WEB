//lógica de negócio do back-end
const express = require('express'); //importar o framework
const router = express.Router(); //definir as rotas de forma modularizadas

//conectar ao banco de dados
const db = require('../db');

//CREATE (POST)
//SQL -> insert 
router.post('/', (req, res)=>{
    //receber do front (nome, email) - json
    const {nome, email} = req.body; //corpo da requisição do front

    //instrução sql
    db.query('INSERT INTO users (nome, email) VALUES (?, ?)', [nome, email],
        (err, result) =>{
            if (err) return res.status(500).send(err);
            res.status(201).json({id: result.insertId, nome, email})
        }
    );
})

//exportar as rotas
module.exports = router;
