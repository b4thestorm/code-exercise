const { db } = require('./repository/db');
const express = require('express');
const bodyParser = require('body-parser');
const port = 4000;

const app = express();

async function listTables() {
  return db('pg_catalog.pg_tables')
    .select('tablename')
    .where({ schemaname: 'public' });
}

app.use(bodyParser.json());

app.get('/todos', (req, res) => {
  db('todos')
  .select({
    id: 'id',
    description: 'description',
    status: 'status' 
  })
  .then((todos) => {
    return res.json(todos);
  })
  .catch((err) => {
    console.error(err);
    return res.json({success: false, message: 'An error occurred, please try again later.'});
  })
});

app.post('/todo', (req, res) => {
  const description = req.body.data.description ? req.body.data.description : '';
  const status = req.body.data.status ? req.body.data.status : '';

  if (!description) {
    return res.json({success: false, message: 'description is required'});
  }

  db('todos')
    .insert({description, status})
    .then((id) => {
      return  res.json({success: true, message: 'todo was successfully added'});
    }).catch((err) => {
    console.error(err);
    return res.json({success: false, message: 'An error occurred, please try again later.'});
  });
})

app.delete('/todo/:todoId', (req, res) => {
  const id = req.params.todoId ? req.params.todoId : '';
  if (!id) {
    return res.json({success: false, message: 'can\'t delete'});
  }

  db('todos')
  .where('id', id)
  .del().then(() => {
    return res.json({success: true, message: 'todo was successfully deleted'})
  }).catch((err) => {
    return res.json({success: false, message: 'An error occurred, please try again later.'});
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = {
  listTables,
};
