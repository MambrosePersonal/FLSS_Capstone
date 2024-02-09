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

async function getCollectionIdAsObject(id) {
  const db = client.db(dbName);
  const collection = db.collection('projects');
  const data = await collection.findOne({'proj_id': +id});
  return data;

}

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

app.get("/api/projects/:id", async (req, res) => {
  try {
    const data = await getCollectionIdAsObject(req.params.id);
    if(data) {
      res.json(data);
    } else {
      res.status(404).json({message: 'Project not found'});
    }
  } catch (error) {
    res.status(500).json({error: error});
  }
});

// app.use("", express.static("react-project/dist/index.html"));
// app.use("/index.html", express.static("react-project/dist/index.html"));
// app.use("/assets", express.static("react-project/dist/assets"));
// app.use(express.static("react-project/public"));

const port = 3500;
app.listen(port, () => console.log(`Listening on port ${port}.`));

client.close();