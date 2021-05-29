const express = require('express');
const cors = require('cors');
const knex = require('knex');

const PORT = 3001;

const insert = require('./controllers/insert');
const show = require('./controllers/show');
const del = require('./controllers/delete');

const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: '1234567890',
        database: 'simple_crud'
    }
});

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Succed!');
})

app.put('/insert/data', insert.handleInsert(db));
app.get('/show', show.handleShow(db));
app.delete('/delete', del.handleDelete(db));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})