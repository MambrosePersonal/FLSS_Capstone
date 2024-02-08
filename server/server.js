import express from 'express';
import { MongoClient } from 'mongodb';



var url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "proj-mgmt";

const app = express();

app.use(express.json());



app.all("*", (req, res, next) => {
  console.log(req.url);
  next();
});

app.get("/api/projects", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection('projects');
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// app.use("", express.static("public/dist/index.html"));
// app.use("/index.html", express.static("public/dist/index.html"));
// app.use("/assets", express.static("public/dist/assets"));
// app.use(express.static("public"));

const port = 3500;
client.close();
app.listen(port, () => console.log(`Listening on port ${port}.`));