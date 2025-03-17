// index.js
// where your node app starts
// init project
require("dotenv").config();
const express = require("express");
const app = express();
const requestIp = require('request-ip');
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...

app.get("/api/whoami", function (req, res) {
  res.json({
    ipaddress: requestIp.getClientIp(req),
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
  });
});

// listen for requests :)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server up and running at ${PORT}`));
