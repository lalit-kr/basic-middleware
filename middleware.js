const express = require("express");
const app = express();
const route=express.Router();

const middleware = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please Provide Age!");
  } else if (req.query.age < 18) {
    res.send("You are not authorised...");
  } else {
    next();
  }
};
// app.use(middleware);
route.use(middleware);
app.get("/", (req, res) => {
  console.log("This is the Home Page");
  res.send("This is the Home Page");
});
route.get("/about", (req, res) => {
  console.log("This is the About Page");
  res.send("This is the About Page");
});
route.get("/contact", (req, res) => {
  console.log("This is the Contact Page");
  res.send("This is the Contact Page");
});
app.use('/',route);

app.listen(1700);
