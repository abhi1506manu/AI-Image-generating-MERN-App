const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));
};

// exports.connectDB=connectDB
module.exports = { connectDB };
