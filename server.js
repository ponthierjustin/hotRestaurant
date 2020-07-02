const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Array variables
const tables = [
    {
        tableNumber: 1,
        name: 'Betsy',
        email: 'betsy@gmail.com',
        phone: 4044044040,
        id: 5
    }
];

// get route for home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

app.get("/tables", function(req, res) {
res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

app.post("/api/tables", function(req, res) {
    let newTable  = req.body;
    tables.push(newTable);
    res.json(newTable);
});


app.listen(PORT, function() {
console.log(`App listening on http://localhost:${PORT}`);
});