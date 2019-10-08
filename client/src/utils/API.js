import axios from "axios";

export default {
  // Gets all wine
  getWines: function() {
    // console.log("GETTING WINES")
    return axios.get("/api/wines");
  },
  newWines: function() {
    // console.log("GETTING WINES")
    return axios.get("/api/wines/new");
  },
  featureWine: function() {
    // console.log("GETTING WINES")
    return axios.get("/api/wines/feature");
  },
  getProducerWines: function(producer) {
    return axios.get("/api/wines/" + producer);
  },
  // Gets the wine with the given id
  getWine: function(id) {
    return axios.get("/api/wines/" + id);
  },
  // Deletes the book with the given id
  // deleteWine: function(id) {
  //   return axios.delete("/api/wine/" + id);
  // },
  saveWine: function(wineData) {
    return axios.post("/api/wines", wineData);
  },

  getProducers: function() {
    return axios.get("/api/producers");
  },
  getProducer: function(id) {
    // console.log("GET PRODUCER")
    return axios.get("/api/producers/" + id);
  },
  getProducerByCountry: function(country) {
    // console.log("GET PRODUCER")
    return axios.get("/api/producers/" + country);
  }
  // saveWine: function(producerData) {
  //   return axios.post("/api/producers", producerData);
  // }
};