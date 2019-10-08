const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const routes = require("./routes");
require('dotenv').config()


// const MongoClient = require('mongodb').MongoClient;
// const uri = process.env.ATLAS_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//  // perform actions on the collection object
//   client.close();
// });


// MongoClient.connect(uri, function(err, db) {
//   db.close();
// });


// if(process.env.LOCAL || process.env.MONGODB_URI) {
//   mongoose.connect(process.env.LOCAL || process.env.MONGODB_URI, { useNewUrlParser: true });
// } else {
//   console.log("MongoDB connection string not defined!");
// }


// const MongoClient = require('mongodb').MongoClient;
// const uri = process.env.ATLAS_URI;
// const client = new MongoClient(uri, { useNewUrlParser: true });

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });


// (mongoose.connect( process.env.LOCAL, { useNewUrlParser: true }));
// mongoose.connection.on("open", function (ref) {
//   console.log("Connected to mongo server.");
// });
// mongoose.connection.on('error', function (err) { console.log(err) });

// // Connect to the Mongo DB
mongoose.connect( process.env.LOCAL || process.env.ATLAS_URI, { useNewUrlParser: true });
mongoose.connection.on("open", function (ref) {
  console.log("Connected to mongo server.");
});
mongoose.connection.on('error', function (err) { console.log(err) });




// require("./models/wine");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
