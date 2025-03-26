const express = require("express");
const app = express();
const { adminAuth,userAuth } = require("./middlewares/auth.js");
//use middleware function to handle all request which are coming with /admin
app.use("/admin", adminAuth);


app.get("/user/login",userAuth, (req, res) => {
  res.send("User login successfully!");
});
app.get("/admin/getAllUserData", (req, res) => {
  res.send("User data retrieved successfully!");
});
app.delete("/admin/deleteUserData", (req, res) => {
  res.send("User data delete successfully!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
