const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');

const app = express();
const port = 8001;

app.use(bodyParser.json());

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@howtocreateanapp.zadn9.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(port, console.log(`running on port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
