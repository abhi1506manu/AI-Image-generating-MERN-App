const express = require("express");
const { v2 } = require("cloudinary");
const Post = require("../mongodb/models/post");

require("dotenv").config();

const router = express.Router();

//cloudinary setup
v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

//get all post
router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    console.log("posts are getting");
    console.log(posts);
    res.status(200).json({ success: true, data: posts });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error,
    });
  }
});

// create a post
router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    //uploading photo to cloudinary
    const photoUrl = await v2.uploader.upload(photo);
    // console.log("******photoURL********");
    // console.log(photoUrl);

    // console.log("**********New post********");

    //creating new post in database
    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url,
    });
    console.log("*****************************");
    console.log(newPost);

    res.status(201).json({ success: true, data: newPost });
    console;
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to create a post, Please try again",
    });
  }
});

module.exports = router;
