import { MongoClient } from "mongodb";
import express from "express";
const app = express();

async function main(req, res) {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("mydb");
  const messageColl = db.collection("message");

  let message = req.query.message || "default" ;
  let inputDocument = { message: " this is  from express" };
  await messageColl.insertOne(inputDocument);

  await client.close();

  res.send("record added");
}

async function findAllMessage(req, res) {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  const db = client.db("mydb");
  const messageColl = db.collection("message");

  let list = await messageColl.find().toArray();

  await client.close();
  res.send(list);
}

app.get("/main", main);
app.get("/find", findAllMessage);

// http://localhost:4000
app.listen(4000);
