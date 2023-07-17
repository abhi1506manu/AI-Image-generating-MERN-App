const express = require("express");
const cors = require("cors");

require("dotenv").config();

//initialize express
const app = express();

//additional middleware
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get('/',async(req,res)=>{
    res.send('Hello from server');
})

const startServer = async () => {
  app.listen(5000, () => console.log("Server listening on port 5000"));
};
startServer();
