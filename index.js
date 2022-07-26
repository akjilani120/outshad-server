const express = require('express')
const app = express()
const port =process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config()
app.use(cors())
app.use(express.json())

const { MongoClient, ServerApiVersion, FindCursor } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.im5wk.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
  try {
    await client.connect();
    const dilwaleCollection = client.db("userData").collection("Diwale");
    const idiotsCollection = client.db("userData").collection("idiots");
   app.get("/dilwale" , async(req , res) =>{
    const result = await dilwaleCollection.find().toArray()
    res.send(result)
   })
   app.get("/idiots" , async(req , res) =>{
    const result = await idiotsCollection.find().toArray()
    res.send(result)
   })
    
  }finally {
    
  }
}
run().catch(console.dir);
app.get('/', (req, res) => {
  res.send('Process Robo work')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})