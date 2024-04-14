import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(cors());
var url = "mongodb://localhost:27017/";

app.listen(port, () => {
  console.log(`server is up and running at port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello world!!!!!!!");
});

app.post("/register", async (req, res) => {
  const { name, mail, password } = req.body;
  console.log(req.body);
  console.log(`password : ${password}`);
  let client;

  try {
    client = new MongoClient(url, { useUnifiedTopology: true });
    await client.connect();
    console.log("Connected to MongoDB");
    const db = client.db("test");
    const collection = db.collection("testreact");
    var myobj = { name: name, mail: mail, password: password };
    const result = collection.insertOne(myobj);
    console.log(`${(await result).insertedId} document inserted`);
    res.json({ message: "User Registerd successfully" });
  } catch (err) {
    console.error("Error:", err.errmsg);
    res.json({ message: err.errmsg });
  }
});

// app.post("/register", async (req, res) => {
//   const { name, mail } = req.body;
//   let client;

//   try {
//     client = new MongoClient(url, { useUnifiedTopology: true });
//     await client.connect();
//     console.log("Connected to MongoDB");
//     const db = client.db("test");
//     const collection = db.collection("testreact");
//     const user = await collection.findOne({ name, mail });
//     if (user) {
//       const { _id, name, mail } = user;
//       console.log(_id);
//       console.log(name);
//       console.log(mail);
//     }
//   } catch (err) {
//     console.error("Error:", err);
//     res.status(500).json({ error: "An error occurred" });
//   }

//   res.json({ message: "Form data received successfully" });
// });
