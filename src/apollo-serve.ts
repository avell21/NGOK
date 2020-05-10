import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
import userMutation from "./mutations/user/";
import userQuires from "./queries/user";
import { model } from "./models";
import utils from "./utils";

const resolvers = {
  Query: {
    ...userQuires
  },
  Mutation: {
    ...userMutation
  }
};

const typeDefs = importSchema(`${__dirname}/schema.graphql`);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});
export default {
  schema,
  context: req => {
    return {
      req,
      model,
      utils
    };
  }
};
