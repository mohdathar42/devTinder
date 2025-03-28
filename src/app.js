const express = require("express");
const app = express();
const connectDB = require("./config/database.js");
const User = require("./model/user.js");

app.use(express.json()); // Middleware to parse JSON request body
app.post("/signup", async (req, res) => {
  //creating a new instanse of user model

  const user = new User(req.body);

  try {
    //saving the user to the database
    await user.save();
    res.send("User created successfully");
  } catch (err) {
    res.status(400).send("error saving the user " + err.message);
  }
});

connectDB()
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(3000, () => {
      console.log("Server started on port 3000");
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed", err.message);
  });
