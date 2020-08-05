import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
import userMutation from "./mutations/user/";
import userQuires from "./queries/user";
import { model } from "./models";
import GraphQLJSON from "graphql-type-json";
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from "graphql-iso-date";
import utils from "./utils";
import { IsChecked } from "./middleware/middleware";

const resolvers = {
  Query: {
    ...userQuires
  },
  Mutation: {
    ...userMutation
  },
  JSON: GraphQLJSON,
  DateTime: GraphQLDateTime
  // Date: GraphQLDate,
  // Time: GraphQLTime
};

const typeDefs = importSchema(`${__dirname}/schema.graphql`);
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
export default {
  schemaDirectives: {
    isChecked: IsChecked
  },
  schema,
  context: req => {
    return {
      req,
      model,
      utils
    };
  }
};
