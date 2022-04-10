const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const noteRoute = require("./routes/note-route");

const app = express();

app.use(bodyParser.json());

app.use("/notes/", noteRoute);

mongoose
  .connect(
    "mongodb+srv://hamza:0OMa3pwSrAHCQUQ5@cluster0.2kdmw.mongodb.net/noteDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
