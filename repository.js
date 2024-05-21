import fs from 'fs';
import { MongoClient, ObjectId } from 'mongodb';

let db;
try {
  //db = JSON.parse(fs.readFileSync('./database.json'));
  db = {};
} catch (error) {
  console.error("Couldn't read database", error)
  throw (error);
}

const readAllPeople = () => {
  return db.people;
}
const readPerson = (id) => {
  return db.people.find(p => p.id === +id)
}
const createPerson = (newPerson) => {
  throw "not yet implemented"
}
const deletePerson = (id) => {
  throw "not yet implemented"
}
const updatePerson = (id, newPerson) => {
  throw "not yet implemented"
}
export const repo = {
  people: {
    readAll: readAllPeople,
    read: readPerson,
    create: createPerson,
    delete: deletePerson,
    update: updatePerson,
  },
}