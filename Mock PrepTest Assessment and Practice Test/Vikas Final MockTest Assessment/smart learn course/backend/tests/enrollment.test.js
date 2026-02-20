const request = require("supertest");
const express = require("express");
const mongoose = require("mongoose");
const chai = require("chai");
const expect = chai.expect;

const enrollmentRoutes = require("../routes/enrollmentRoutes");
const Course = require("../models/Course");
const Enrollment = require("../models/Enrollment");

const app = express();
app.use(express.json());
app.use("/api/enroll", enrollmentRoutes);

describe("Enrollment API", function () {

  before(async function () {
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb");

    // Clean database before test
    await Course.deleteMany({});
    await Enrollment.deleteMany({});

    await Course.create({
      courseId: "C100",
      title: "Node Course",
      category: "Backend",
      price: 100
    });
  });

  after(async function () {
    await mongoose.connection.close();
  });

  it("Should enroll successfully (201)", async function () {
    const res = await request(app)
      .post("/api/enroll")
      .send({ userId: "U1", courseId: "C100" });

    expect(res.status).to.equal(201);
    expect(res.body.success).to.equal(true);
  });

  it("Should prevent duplicate enrollment (400)", async function () {
    const res = await request(app)
      .post("/api/enroll")
      .send({ userId: "U1", courseId: "C100" });

    expect(res.status).to.equal(400);
  });

});