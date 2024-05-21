import express from 'express';
import cors from 'cors';
//import db from './database.json' assert {type: 'json'};
import { repo } from './repository.js';
import { MongoClient, ObjectId } from 'mongodb';

process.loadEnvFile();

// dotenv.config();
const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;

const client = await MongoClient.connect(url);
const db = client.db(dbName);
const peopleColl = db.collection(collectionName);

const app = express();
app.use(cors());
const port = process.env.PORT || 3000

// If --logging flag is true, turn on logging
let logging_is_on = false;
for (let arg of process.argv)
  if (arg === "--logging=on") logging_is_on = true;
if (logging_is_on)
  app.use(logger);

//API route for MongoDb
app.get('/api/allPeople', async (req, res) => {
  res.redirect(307, "/api/people");
});

app.get('/api/people', async (req, res) => {
  const people = await peopleColl.find({}).toArray();
  res.send(people);
});

app.get('/api/people/:id', async (req, res) => {
  const id = +req.params.id;
  const people = await peopleColl.findOne({ id: id });
  res.send(people);
});

// Serve static images - Unix is case-sensitive so normalize to lowercase
//app.use("/images", (req, res, next) => { res.send("Matched"); next() }); //Images from the images folder

app.use("/images", (req, res, next) => {
  req.url = req.url.toLowerCase()
  express.static("images")(req, res, next);
});
app.use(express.static("people-app/dist"));  // The static React app from .people-app/dist

app.listen(port, () => console.log(`Listening for requests on port ${port}`))

process.on('SIGINT', () => {
  client.close();
  console.log('Exiting gracefully')
  process.exit(0);
});

function logger(req, res, next) {
  let startTime = Date.now()
  res.addListener('finish', () => {
    console.log("#".repeat(50))
    console.log(new Date())
    console.log(`REQ: ${req.method} ${req.url} RES: ${res.statusCode} ${res.statusMessage} - ${Date.now() - startTime}ms`)
    console.log("#".repeat(50))
  });
  next();
}