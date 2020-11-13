const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  remove,
};

async function insert(hobbit) {
  // 2- implement the code that makes the test pass
  const [id] = await db("hobbits").insert(hobbit);
  return db("hobbits").where({ id }).first();
}

function remove(id) {
  return db("hobbits").where({ id }).delete();
}
