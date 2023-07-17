const express = require("express");
const cors = require("cors");
const { connectDB } = require("./mongodb/connect.js");

require("dotenv").config();

//initialize express
const app = express();

//additional middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("Hello from server");
});

const startServer = async () => {
  try {
    connectDB(process.env.MongoDB_URL);
    app.listen(8000, () => console.log("Server listening on port 5000"));
  } catch (error) {
    console.log(error);
  }
};
startServer();
