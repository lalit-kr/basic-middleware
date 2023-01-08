let express = require("express");
let app = express();

app.get("/:name/:id([0-9]{5})", (req, res) => {
  res.send(`<h1>User ID : ${req.params.id}
     Username : ${req.params.name}</h1>`);
});

app.get("*", (req, res) => {
  res.send("<h1>404! Page Not Found</h1>");
});

app.listen(1001);
