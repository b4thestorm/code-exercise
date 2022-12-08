const { db } = require('./repository/db');
const express = require('express');
const bodyParser = require('body-parser');
const port = 4000;

//initialize knex
const knexConfig = require('./db/knexfile');
const knex = require('knex')(knexConfig[process.env.NODE_ENV])


const app = express();

async function listTables() {
  return db('pg_catalog.pg_tables')
    .select('tablename')
    .where({ schemaname: 'public' });
}

app.use(bodyParser.json());

app.get('/add-todo', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = {
  listTables,
};
