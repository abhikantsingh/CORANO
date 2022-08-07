//jshint esversion:6

const express = require("express");

const app = express();
require("dotenv").config();
app.use(express.json());
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Blog = require("./model/Blog");
const Contact = require("./model/Contact");
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "*");
  next();
});

app.delete("/deleteBlog/:id", (req, res) => {
  const id = req.params.id;
  Blog.deleteOne({ _id: id }).then(() => {
    Blog.find().then((blogs) => {
      console.log(blogs);
      res.status(200).json({
        allBlog: blogs,
        message: "blog created",
      });
    });
  });
});

app.get("/allBlog", async (req, res) => {
  const data = await Blog.find();
  res.status(200).json({
    allBlog: data,
  });
  //   Blog.find().then((blogs) => {
  //     console.log(blogs);
  //     res.status(200).json({
  //      allBlog:blogs,
  //    message:"blog created"
  //  })
  // })
});
app.post("/Blog", (req, res) => {
  console.log(req);
  const blog = new Blog({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phone: req.body.phone,
    content: req.body.experience,
  });
  blog.save().then(() => {
    Blog.find().then((blogs) => {
      console.log(blogs);
      res.status(200).json({
        allBlog: blogs,
        message: "blog created",
      });
    });
  });
});
app.post("/Contact", (req, res) => {
  console.log(req);
  const contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    country: req.body.country,
    message: req.body.message,
  });
  contact.save().then(() => {
    Contact.find().then((contact) => {
      console.log(contact);
      res.status(200).json({
        message: "contact created",
      });
    });
  });
});

const PORT = process.env.PORT || 8000;
mongoose
  .connect(
    "mongodb+srv://abhikantsingh29:1234567890@cluster0.8wdhiqk.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(PORT, function () {
      console.log("Server started on port 3001");
    });
  })
  .catch((error) => {
    console.log(error);
  });
