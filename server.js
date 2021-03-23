const express = require("express");
const app = express();
const portNumber = 3007;

app.get("/", (req, res) => res.send("Welcome Imran Khan"));

app.listen(portNumber, () => console.log("Listening to port " + portNumber));
