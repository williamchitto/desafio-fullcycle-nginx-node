const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'nodedb',
};

const names = [
  'Luke Skywalker',
  'Leia Organa',
  'Han Solo',
  'Darth Vader',
  'Obi-Wan Kenobi',
  'Yoda',
  'Chewbacca',
  'R2-D2',
  'C-3PO',
  'Boba Fett'
];

app.get('/', (req, res) => {
  insertPeopleName(res);
});

app.listen(PORT, () => {
  console.log('STARTED AT ' + PORT);
});

function getPersonName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

function insertPeopleName(res) {
  const name = getPersonName();
  const connection = mysql.createConnection(config);
  const sql = `INSERT INTO people(name) values('${name}')`;
  
  connection.query(sql, (err) => {
    if (err) {
      console.error('Erro ao inserir no banco:', err);
      res.status(500).send('Erro ao inserir no banco de dados.');
      return;
    }
    console.log(`${name} inserido no banco!`);
    getPeople(res, connection);
  });
}

function getPeople(res, connection) {
  const sql = `SELECT id, name FROM people`;  
  
  connection.query(sql, (error, results, fields) => {
    if (error) {
      console.error('Erro ao buscar dados:', error);
      res.status(500).send('Erro ao buscar dados.');
      return;
    }
    
    let table = '<table border="1">';
    table += '<tr><th>#</th><th>Name</th></tr>';
    for (let people of results) {
      table += `<tr><td>${people.id}</td><td>${people.name}</td></tr>`;
    }
    table += '</table>';    
    
    res.send('<h1>Full Cycle Rocks!</h1>' + table);
  });

  connection.end();
}
