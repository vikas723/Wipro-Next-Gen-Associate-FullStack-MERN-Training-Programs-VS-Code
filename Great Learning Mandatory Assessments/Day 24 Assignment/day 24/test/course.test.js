const request = require("supertest");
const app = require("../server");
const chai = require("chai");
const expect = chai.expect;

describe("Courses API", () => {
  it("GET /api/courses", async () => {
    const res = await request(app).get("/api/courses");
    expect(res.status).to.equal(200);
  });
});
