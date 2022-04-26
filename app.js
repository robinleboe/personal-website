const express = require('express');
const bodyParser = require('body-parser');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');

const gqlSchema = require('./graphql/schema/index');
const gqlResolvers = require('./graphql/resolvers/index');

const app = express();
const PORT = 8001;

app.use(bodyParser.json());

// allow CORS
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   if (req.method === 'OPTIONS') {
//     return res.sendStatus(200);
//   }
//   next();
// });

app.use(
  '/graphql',
  graphqlHTTP({
    schema: gqlSchema,
    rootValue: gqlResolvers,
    graphiql: true,
  })
);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@howtocreateanapp.zadn9.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(PORT, console.log(`running on port ${PORT}`));
  })
  .catch((err) => {
    console.log(err);
  });
