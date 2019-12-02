import { importSchema } from "graphql-import"; 
import { makeExecutableSchema } from "graphql-tools";
import user from "./user/user.resolvers";
import { User } from "./user/userModel"; 

const model = {
  User
};
const resolvers = {
  Query: {
    ...user.Query
  },
  Mutation: {
    ...user.Mutation,
  }, 
};
/** TODO: remove email  from update
 *  and fetch it using the id for the update
 */

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
      model
    };
  }
};
