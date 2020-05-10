const objection = require("objection");

export class BaseModel extends objection.Model {
  $beforeInsert() {}

  $beforeUpdate() {
    this.updated_at = new Date().toISOString();
  }
}
