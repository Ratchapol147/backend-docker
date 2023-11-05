const db = require("../configs/config-connection");

module.exports = class model {
  constructor(dataInfo) {
    this.id = dataInfo?.id || "";
    this.name = dataInfo?.name || "";

  };
  static getall(){
    return db.query(
      `
      SELECT test.*
      FROM test;
      `
    )
  }
}
