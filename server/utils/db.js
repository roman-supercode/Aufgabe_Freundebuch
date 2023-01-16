import { MongoClient } from 'mongodb';

// Umgebungsvariablen
const url = process.env.MONGO_URI;
const database = process.env.MONGO_DB;

// Eine neue MongoClient-Instanz wird mit der URL-Variable erstellt und in der Variablen "client" gespeichert
const client = new MongoClient(url);

// speichert später die Verbindung zur MongoDB-Datenbank 
let db;

// Die Funktion gibt ein neues Promise zurück. Wenn es bereits eine Verbindung zur MongoDB gibt, wird die vorhandene Verbindung direkt zurückgegeben.
// Andernfalls versucht die client.connect() Methode eine Verbindung herzustellen. 
// Wenn die Verbindung erfolgreich hergestellt wurde, wird die Datenbankvariable auf die Datenbank gesetzt, die durch den client.db(database) Aufruf referenziert wird.
// In beiden Fällen wird die Verbindung (entweder die bestehende oder die neu hergestellte) zurückgegeben. Wenn ein Fehler bei der Herstellung der Verbindung auftritt, wird das aufgetretene Error-Objekt über den reject() Aufruf zurückgegeben.
export const getDb = () => {
    return new Promise((resolve, reject) => {
        if (db) {
            return resolve(db);
        }

        client.connect()
            .then(() => {
                db = client.db(database);
                resolve(db);
            })
            .catch((err) => reject(err));
    });
}

