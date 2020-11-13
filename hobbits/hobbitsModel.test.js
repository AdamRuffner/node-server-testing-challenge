const Hobbit = require("./hobbitsModel");
const db = require("../data/dbConfig");

beforeEach(async () => {
  await db("hobbits").truncate();
});

describe("hobbits model", () => {
  describe("inserting a new hobbit", () => {
    it("inserts new hobbit", async () => {
      await Hobbit.insert({ name: "Adam" });
      let hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(1);
      await Hobbit.insert({ name: "Nick" });
      hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(2);
    });
    it("comes back with the inserted hobbit", async () => {
      const adam = await Hobbit.insert({ name: "Adam" });
      expect(adam).toMatchObject({ id: 1, name: "Adam" });
      const nick = await Hobbit.insert({ name: "Nick" });
      expect(nick).toMatchObject({ id: 2, name: "Nick" });
    });
  });

  describe("removing a hobbit", () => {
    it("deletes a hobbit", async () => {
      await db("hobbits").insert({ name: "Adam" });
      await db("hobbits").insert({ name: "Nick" });
      await Hobbit.remove(1);
      let hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(1);
    });
  });
});
