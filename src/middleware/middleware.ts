import { SchemaDirectiveVisitor } from "apollo-server-express";
import { defaultFieldResolver } from "graphql";

export class IsChecked extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    field.resolve = async function(...args) {
      const result = await resolve.apply(this, args);
      console.log(result);
      return result;
    };
  }
}
