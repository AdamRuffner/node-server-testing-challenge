const request = require("supertest");
const server = require("./server");

describe("[GET] /", () => {
  it("is able to get data", () => {
    return request(server)
      .get("/")
      .expect("Content-Type", /json/)
      .expect("Content-Length", "14")
      .expect({ api: "down" });
  });
});
