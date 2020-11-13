exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("hobbits")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("hobbits").insert([
        { name: "Sean" },
        { name: "Trevor" },
        { name: "Cruise" },
        { name: "Morgan" },
      ]);
    });
};
