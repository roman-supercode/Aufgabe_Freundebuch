import express from 'express';
import cors from 'cors';
import multer from 'multer';
import './config/config.js';
import { getDb } from './utils/db.js';

const PORT = process.env.PORT;
const formReader = multer();

// Express initialisieren
const app = express();

const endpoint = '/api/personen';
const endpointAdd = '/api/personen/add';
const endpointEdit = '/api/personen/edit/:id';
const endpointDelete = '/api/personen/delete/:id';

// Middleware
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// GET
app.get(endpoint, (_, res) => {
    getDb()
        .then(db => db.collection('personen').find())
        // "pointer" wird in ein Array umgewandelt!
        .then(pointer => pointer.toArray())
        // sendet eine Antwort im JSON-Format zurück an den Client mit den Daten im Array
        .then(array => res.status(200).json(array))
        .catch((err) => console.log(err));
});


// POST
app.post(endpointAdd, formReader.none(), (req, res) => {
    const person = req.body;
    console.log(person);

    getDb()
        .then(db => db.collection('personen').insertOne(person))
        .then(reply => res.status(200).json(reply))
        .catch((err) => console.log(err));
});


// PUT
app.put(endpointEdit, formReader.none(), (req, res) => {
    const id = req.params.id;
    const item = req.body;

    const filter = { vorname: "Max" };

    getDb()
        .then(db => db.collection('personen').updateOne(filter, { $set: item }))
        .then(reply => res.status(200).json(reply))
        .catch((err) => console.log(err));
});


// DELETE
app.delete(endpointDelete, (req, res) => {
    const id = req.params.id;
    console.log(id);

    let query = { vorname: "Max"};

    getDb()
        .then(db => db.collection('personen').deleteOne(query))
        .then(reply => res.status(200).json(reply))
        .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log('Läuft auf:', PORT));
