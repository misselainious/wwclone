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
//   const Producer = client.db("wwatlasDB").collection("producerList");
//   const Wine = client.db("wwatlasDB").collection("wineList");
//   console.log("iz working. Cats.");
//   // perform actions on the collection object
//   client.close();
// });

// const MongoClient = require('mongodb').MongoClient;

// // replace the uri string with your connection string.
// const uri = process.env.ATLAS_URI;
// MongoClient.connect(uri, function(err, client) {
//    if(err) {
//         console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
//    }
//    console.log('Connected...');
//    const collection = client.db("wwatlasDB").collection("wineList");
//    // perform actions on the collection object
//    client.close();
// });


// // Connect to the Atlas
mongoose.connect( process.env.LOCAL || process.env.ATLAS_URI, { useNewUrlParser: true, dbName: 'wwatlasDB' });
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
