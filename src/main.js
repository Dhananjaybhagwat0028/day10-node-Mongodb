import {MongoClient } from "mongodb";

async function main(){
 const uri = "mongodb://127.0.0.1:27017";
 const  client = new MongoClient(uri);

 const db=client.db("mydb");
 const message = db.collection("message");


 const res = await message.insertOne({ message:"node 1"});
  await client.close();

console.log("record added");
}

main();




