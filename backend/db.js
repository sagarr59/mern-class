//ES6 ma import... yaa require

const mongoose = require("mongoose");
const Mongo_URI = "mongodb://localhost:27017/mern-project";
const dbConnect = () => {
  mongoose.connect(Mongo_URI).then(() => {
    console.log("mongoDB connected");
  });
};

module.exports = dbConnect;
