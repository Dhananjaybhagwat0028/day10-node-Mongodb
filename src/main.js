import { MongoClient } from "mongodb";

async function main() {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  let db = client.db("mydb");

  let messageCollection = db.collection("message");

  let inputDocument = { message: "helloo" };
  await messageCollection.insertOne(inputDocument);
  console.log("success");

  await client.close();


}
main();
