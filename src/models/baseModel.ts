const objection = require("objection");

export class BaseModel extends objection.Model {
  $beforeInsert() {}

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}
