import express from 'express';
//import db from './database.json' assert {type: 'json'};
import fs from 'fs';

let db;
try {
  db = JSON.parse(fs.readFileSync('./database.json'));
} catch (error) {
  console.error("Couldn't read database", error)
  throw (error);
}

const app = express();

// Try to load .env file
try {
  process.loadEnvFile();
} catch (error) {
  console.log("No .env file present, setting port to 3000")
}
const port = process.env.PORT || 3000;

// API route
app.get('/api/allPeople', (req, res) => {
  res.send(db.people);
});
app.use(express.static("web-app"));

app.listen(port, () => console.log(`Listening for requests on port ${port}`))
