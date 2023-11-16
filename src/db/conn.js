const mongoose = require("mongoose");
require('dotenv').config();

mongoose
  .connect(
    `${process.env.CONNECTION_STRING}`
  )
  .then(() => {
    console.log("Connection successful.");
  })
  .catch((e) => {
    console.log(e);
  });
