
const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/files", (req, res) => {
  const userInput = req.query.dir;
  exec("ls " + userInput, (err, stdout) => {
    res.send(stdout);
  });
});

module.exports = app;
