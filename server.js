const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Array variables

// get route for home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.listen(PORT, function() {
console.log(`App listening on http://localhost:${PORT}`);
});