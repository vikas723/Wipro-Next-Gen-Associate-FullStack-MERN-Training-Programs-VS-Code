const request = require("supertest");
const app = require("../server");

describe("Users API", () => {
  it("GET /api/users", async () => {
    const res = await request(app).get("/api/users");
    if (res.status !== 200) throw new Error("Failed");
  });
});
