const { MongoClient } = require("mongodb");


const uri = "mongodb://127.0.0.1:27017/aspire";


const client = new MongoClient(uri);


async function connectToMongoDB() {
  try {
    await client.connect();

    const db = client.db("aspire");
    const collection = db.collection("Employee");

    /*const inserter = await collection.insertMany([
      {
        _id: 9,
        firstName: "ram",
        lastName: "k",
        gender: "male",
        email: "ram.k@abc.com",
        salary: 2000,
        department: { name: "Marketing" },
      },
      {
        _id: 10,
        firstName: "ajay",
        lastName: "k",
        gender: "male",
        email: "ajay@abc.com",
        salary: 5700,
        department: { name: "Computer" },
      },
    ]);

    console.log("record inserted  :" + inserter._id);

    await collection.updateOne({'email':"ajay@abc.com"},{$set:{'lastName':"kumar"}},{upsert:true});

    await collection.deleteOne({'firstName':"ram"});*/

    const cursor = collection.find({});

    await cursor.forEach((record) => {
      console.log(record);
    });
    await client.close();
  } catch (error) {
    console.error("Error:", error);
  }
}


connectToMongoDB();