import { getDb } from "../utils/db.js";
import { ObjectID } from "bson";

// GET
export const getAllPeople = (_, res) => {
    // database connected then...
    getDb()
        .then(db => db.collection('people').find())
        // "pointer" wird in ein Array umgewandelt!
        .then(pointer => pointer.toArray())
        // sendet eine Antwort im JSON-Format zurück an den Client mit den Daten im Array
        .then(array => res.status(200).json(array))
        .catch((err) => console.log("Something wrong with GET", err));
};

// POST
export const addPerson = (req, res) => {
    const newPerson = req.body;

    // database connected then...
    getDb()
        .then(db => db.collection('people').insertOne(newPerson))
        .then(reply => res.status(200).json(reply))
        .catch((err) => console.log("Something wrong with POST", { err }));
};

// PUT
export const editPerson = (req, res) => {
    const id = req.params.id;
    const item = req.body;

    // Filter nach der Document ObjectID
    const filter = { _id: new ObjectID(id) };

    getDb()
        .then(db => db.collection('people').updateOne(filter, { $set: item }))
        .then(reply => res.status(200).json(reply))
        .catch((err) => console.log("Something wrong with PUT", { err }));
};

// DELETE
export const deletePerson = (req, res) => {
    const id = req.params.id;
    // console.log(id);

    getDb()
        .then(db => db.collection('people').deleteOne({ _id: new ObjectID(id) }))
        .then(reply => res.status(200).json(reply))
        .catch((err) => console.log(err));
};