// User input reaches a shell command through string concatenation, so anything
// a shell treats as a separator runs as its own command. Planted deliberately:
// see the README.
const { exec } = require("child_process");

function listFiles(userInput) {
  exec("ls " + userInput, (err, stdout) => {
    console.log(stdout);
  });
}

module.exports = { listFiles };
