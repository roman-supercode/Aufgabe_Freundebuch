import express from 'express';
import cors from 'cors';
import './config/config.js';
import { getDb } from './utils/db.js';

const PORT = process.env.PORT;

// Express initialisieren
const app = express();

const endpoint = '/api/personen';
const endpointAdd = '/api/personen/add';

// Middleware
app.use(cors());
app.use(express.json());

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
app.post(endpointAdd, (req, res) => {
    const person = req.body;
    // console.log(person.bestandskunde);

    getDb()
        .then(db => db.collection('personen').insertOne(person))
        .then(reply => res.status(200).json(reply))
        .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log('Läuft auf:', PORT));