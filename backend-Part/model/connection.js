const { MongoClient } = require("mongodb");
const url =
  "mongodb+srv://sagar:sagar@3721@cluster0.kzam7md.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const data_base = "testdb";
const collection_name = "users";
const mongoclient = new MongoClient(url);

async function createconnection() {
  //1. connect with Mongodb Server
  await mongoclient.connect();

  //2. connect with database
  const dbRef = mongoclient.db(data_base);

  //3.connect with collection
  const collectionRef = dbRef.collection(collection_name);

  return collectionRef;
}

module.exports = createconnection;
