const express = require('express')
const app = express()
const port =process.env.PORT || 5000;
const cors = require('cors');
require('dotenv').config()
app.use(cors())
app.use(express.json())

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.im5wk.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.get('/', (req, res) => {
  res.send('Outshad digital software')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})