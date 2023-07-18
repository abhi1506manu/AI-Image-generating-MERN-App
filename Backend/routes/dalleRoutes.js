const express = require("express");
const { Configuration, OpenAIApi } = require("openai");

require("dotenv").config();

const router = express.Router();
// console.log('**************************')

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});


const openai = new OpenAIApi(configuration);
console.log('************api3**************')

router.route("/").get((req, res) => {
  res.send("Hello from Dall-E");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    // console.log(req.body)
    //getting response from openai
    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });

    console.log(aiResponse)
//image
    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.log(error.response.data);
    res
      .status(500)
      .send(error?.response.data.error.message || "Somthing wrong");
  }
});

module.exports = router;
