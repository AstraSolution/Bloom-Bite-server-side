const express = require("express");

require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");

const cors = require("cors");

const app = express();

const port = process.env.PORT || 5000;





app.use( cors());

app.use(express.json());




// const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.ck8e5sv.mongodb.net/?retryWrites=true&w=majority`;
const uri =`mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.lrptk8p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;





const client = new MongoClient(uri, {

  serverApi: {

    version: ServerApiVersion.v1,

    strict: true,

    deprecationErrors: true,

  },

});







const dbConnect = async () => {

  try {

    // <------ Database Collections ------> //

    const foodCollection = client.db("Bloom-Bite").collection("Foods");



    await client.connect();
    console.log("Database Connected!");
  } catch (error) {
    console.log(error.name, error.message);
  }
};
dbConnect();






app.get("/", (req, res) => {

  res.send("This the Server of Simple Style's Website");

});

app.listen(port, () => {

  console.log("the server is Running on ", port, "port.");

});
