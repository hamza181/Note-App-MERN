const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const noteRoute = require("./routes/note-route");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/notes/", noteRoute);
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

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
