const express = require("express");
const app = express();
const portNumber = 300;
app.listen(portNumber, () => {
  console.log(`Its the new server on ${portNumber}`);
});
