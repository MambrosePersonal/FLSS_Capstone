import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';


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

app.get("/api/projects/:id/tasks", async (req, res) => {
  try {
      const proj_data = await getCollectionIdAsObject(req.params.id);

      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection('projects');

      if (!proj_data) {
          return res.status(404).json({ message: 'Project not found' });
      }

      const tasks = proj_data.tasks || []; // Ensure tasks array exists

      res.json(tasks);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/api/projects/:id/tasks/add", async (req, res) => {
  try {
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection('projects');
      const proj_id = req.params.id;
      const { description, status, person_assigned, due_date, estimated_duration } = req.body;
 
      // Find the project document first
      const project = await collection.findOne({'proj_id': +proj_id} );
 
      if (!project) {
          return res.status(404).json({ error: 'Project not found' });
      }
      
      const largestTaskId = project.tasks.length
      const taskId = largestTaskId + 1;
      
      await collection.updateOne({ 'proj_id': +proj_id },
          { $push: {  tasks: {"id": taskId,"description": description, "status": status, "person_assigned": person_assigned, "due_date":due_date, "estimated_duration":estimated_duration} } });
 
      res.status(201).json({ message: 'Task added successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
  }
});


app.get("/api/projects/:id/tasks/:tid", async (req, res) => {
  try {
      // const projectId = req.params.id;
      // const taskId = req.params.tid;

      // Connect to the database
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection('projects');

      // Find the project by ID
      const proj = await getCollectionIdAsObject(req.params.id);
      if (!proj) {
          return res.status(404).json({ message: 'Project not found' });
      }

      // Find the task within the project
      const tid = req.params.tid;
      const task = proj.tasks.find(task => task.id === Number(tid));
      if (!task) {
          return res.status(404).json({ message: 'Task not found' });
      }

      res.status(200).json(task);

  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

app.put("/api/projects/:id/tasks/:tid/edit", async (req, res) => {
  try {
      
      await client.connect();
      const db = client.db(dbName);
      const collection = db.collection('projects');
      const proj_id = req.params.id; // Project ID
      const task_id = req.params.tid; // Task ID

      // Updated task fields from the request body
      const { description, status, person_assigned, due_date, estimated_duration } = req.body;
 
      // Find the project and update the specific task
      const project = await collection.findOne({'proj_id': +proj_id} );
      //const task = await collection.findOne({'task_id': +task_id} );


      // Use the $set operator to modify the task within the array
      await collection.updateOne(
          { "proj_id": +proj_id,"task_id": +task_id },
          { $set: {task: {"description": description, "status": status, "person_assigned": person_assigned, "due_date":due_date, "estimated_duration":estimated_duration}}
          }
      );

 
      res.status(200).json({ message: 'Task updated successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
  }
});



const port = 3500;
app.listen(port, () => console.log(`Listening on port ${port}.`));

client.close();