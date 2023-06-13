import {MongoClient } from "mongodb";

async function insertRecord(){
 const uri = "mongodb://127.0.0.1:27017";
 const  client = new MongoClient(uri);

 const db=client.db("mydb");
 const message = db.collection("message");

let jsonDocument ={message:"hello world", to:'dhanu' ,from:'cdac'}
  await message.insertOne({jsonDocument });
  await client.close();

console.log("record added");
}

async function main(){
  await insertRecord();
}
main();




