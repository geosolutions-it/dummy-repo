// User input reaches a shell command through string concatenation, so anything
// a shell treats as a separator runs as its own command. Planted deliberately:
// see the README.
const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/files", (req, res) => {
  const userInput = req.query.dir; // fonte non fidata, riconosciuta da CodeQL
  exec("ls " + userInput, (err, stdout) => {
    res.send(stdout);
  });
});

module.exports = app;
