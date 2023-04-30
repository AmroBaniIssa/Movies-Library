"use strict";
const express = require("express");
const app = express();
const moviesData = require('./data.json');
const port = 3001;
const cors = require("cors");
app.use(cors());

let result=[];
function Movie(title,path,overview){
this.title=title;
this.path=path;
this.overview=overview;
result.push(this);
}


app.get("/", (req, res) => {
//   res.send("welcom");
   moviesData.data.forEach(element => {
    new Movie(element.Title,element.Poster,element.Plot)
   });
   res.send(result);
});

app.get("/favorite", (req, res) => {
  res.send("Welcome to Favorite Page");
});

app.get("*", (req, res) => {
  res.send("page not found error");
});

app.use(InternalServerError);

function InternalServerError(req, res) {
  res.status(500).send("Internal Server Error");
}

app.listen(port, () => {
  console.log(`server is listining ${port}`);
});
