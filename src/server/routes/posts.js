const express = require("express");
const router = express.Router();

const Post = require("../models/Post");

//find all
router.get("/", (req, res) => {
  Post.find()
    .then(data => res.json(data))
    .catch(err => {
      res.json({ message: err });
    });
});

//submit

router.post("/", (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description
  });
  post
    .save()
    .then(data => res.json(data))
    .catch(err => {
      console.log("err", err);
      res.json({ message: err });
    });
});

//find specific post
router.get("/:postId", (req, res) => {
  Post.findById(req.params.postId)
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

//delete
router.delete("/:postId", (req, res) => {
  Post.remove({ _id: req.params.postId })
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

//update
router.patch("/:postId", (req, res) => {
  Post.updateOne(
    { _id: req.params.postId },
    { $set: { title: req.body.title } }
  )
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

module.exports = router;
