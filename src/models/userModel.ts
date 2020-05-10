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
      required: ["email", "phoneNumber", "firstName", "lastName", "avatar"],
      properties: {
        email: { type: "string", minLength: 1, maxLength: 255 },
        phoneNumber: { type: "string", minLength: 1, maxLength: 255 },
        firstName: { type: "string", minLength: 1, maxLength: 255 },
        lastName: { type: "string", minLength: 1, maxLength: 255 },
        avatar: { type: "string", minLength: 1, maxLength: 255 }
      }
    };
  }
}
