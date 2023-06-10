
import { MongoClient } from "mongodb";


 async function insertRec(message) {
    
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri); //open

    const db = client.db("Sakoli");
    const data = db.collection("Message");
    await data.insertOne(message);

    await client.close();     //Close
    console.log("Congradulations: Upload zala bhava!!!");

}

 async function readRec() {
    
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri); //open

    const db = client.db("Sakoli");
    const data = db.collection("Message");
    let list = await data.find().toArray();


    await client.close();     //Close
    console.log("Congradulations: Upload zala bhava!!!");
    return list;
}

export {insertRec,readRec};