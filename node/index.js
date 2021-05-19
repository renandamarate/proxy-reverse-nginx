var express = require('express')
var app = express()
var port = 3000

var config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
var mysql = require('mysql')
var connection = mysql.createConnection(config)

console.log("Inserindo dados...");
connection.query(`CREATE TABLE IF NOT EXISTS people (nome VARCHAR(255) PRIMARY KEY)  ENGINE=INNODB;`)
connection.query(`INSERT IGNORE INTO people(nome) values('Carlos');`)
connection.query(`INSERT IGNORE INTO people(nome) values('Renan');`)
connection.query(`INSERT IGNORE INTO people(nome) values('Bruna');`)
connection.query(`INSERT IGNORE INTO people(nome) values('Miguel');`)

var retorno = "";
connection.query('SELECT * FROM people;', function (err, data) {
    if (err) console.log(err);
    retorno = data;
  });

connection.end()

app.get('/', (req,res) => {
    res.send(JSON.stringify(retorno))
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})