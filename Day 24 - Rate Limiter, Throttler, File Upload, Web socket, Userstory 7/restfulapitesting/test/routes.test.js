const request = require("supertest");
const app = require("../server");
const { expect } = require("chai");

describe("Product Routes", () => {

  it("GET /products - should return array", async () => {
    const res = await request(app)
      .get("/products")
      .set("Authorization", "token");

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });

  it("POST /products - should create product", async () => {
    const res = await request(app)
      .post("/products")
      .set("Authorization", "token")
      .send({ id: 2, name: "phone", email: "a@b.com" });

    expect(res.status).to.equal(201);
  });

});
