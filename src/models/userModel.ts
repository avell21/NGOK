import { BaseModel } from "./baseModel";
const unique = require("objection-unique")({
  fields: ["email"],
  identifiers: ["id"]
});

export class User extends unique(BaseModel) {
  static get tableName() {
    return "users";
  }

  static get idColumn() {
    return "id";
  }
  static get jsonSchema() {
    return {
      type: "object",
      required: [],
      properties: {
        email: { type: "string" },
        phoneNumber: { type: "string" },
        firstName: { type: "string" },
        lastName: { type: "string" },
        avatar: { type: "string" }
      }
    };
  }
}
