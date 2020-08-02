const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const routes = require("./routes");
const PORT = 3002;
const app = express();

app.use(logger("dev"));


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/workout", {useNewUrlParser: true });




app.listen(PORT, () => {console.log(`App listeningin on PORT: ${PORT}`)});