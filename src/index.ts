// import express and init it
import express = require("express");
import { ApolloServer } from "apollo-server-express";
import bodyParser from "body-parser";
import cors from "cors";
import api from "./apollo-serve";
import Sentry = require("@sentry/node");
import { Model } from "objection";
import Knex from "knex";
const connection = require("../knexfile");
const env = process.env.NODE_ENV || "development";
const knexConnection = Knex(connection[env]);
Model.knex(knexConnection);

// setup sentry
Sentry.init({ dsn: process.env.SENTRY_DSN });
const app: express.Application = express();

const path = "/graphql";
// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());
// use body-parser for all connections
app.use(bodyParser.json());
// allow all cross origin resource sharing using cors
app.use(cors());

const server = new ApolloServer(api);

server.applyMiddleware({ app, path });

app.get("/", async (req: express.Request, res: express.Response) => {
  res.json("very working");
});

app.use(Sentry.Handlers.errorHandler());

app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});
// start the weekly digest email
// workers.startWeeklyEmail();
app.listen(process.env.PORT, () => {
  console.log(
    `the server is running at http://localhost:${process.env.PORT}/graphql`
  );
});
