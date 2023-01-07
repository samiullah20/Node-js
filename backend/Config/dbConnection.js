const mongoose = require("mongoose");

const dbConnection = () => {
  try {
    mongoose
      .connect(
        "mongodb+srv://zaheer:zaheer12@cluster0.atgagwn.mongodb.net/?retryWrites=true&w=majority"
      )
      .then((res) => {
        console.log("connected");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnection;
