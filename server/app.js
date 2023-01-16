import express from 'express';
import cors from 'cors';
import multer from 'multer';
import './config/config.js';
// import { getDb } from './utils/db.js';
import { ObjectId } from 'mongodb';
import { getAllPeople, addPerson, editPerson, deletePerson } from './controllers/peopleController.js';

const PORT = process.env.PORT;
const formReader = multer();

// Express initialisieren
const app = express();

// URL's
const endpoint = '/api/people';
const endpointAdd = '/api/person/add';
const endpointEdit = '/api/person/edit/:id';
const endpointDelete = '/api/person/delete/:id';

// Middleware
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//* GET
app.get(endpoint, getAllPeople);

//* POST
app.post(endpointAdd, formReader.none(), addPerson);

//* PUT
app.put(endpointEdit, formReader.none(), editPerson);

//* DELETE
app.delete(endpointDelete, deletePerson);

// Starte Express Server
app.listen(PORT, () => console.log('Läuft auf:', PORT));
