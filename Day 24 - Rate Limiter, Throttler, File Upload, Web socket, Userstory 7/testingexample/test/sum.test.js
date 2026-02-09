// const chai = require("chai");
const {expect} = require("chai");
// const assert = require('asset');

describe("Sum Unit Test", () => {
    it("should add numbers correctly", () => {
        const sum = (a, b) => a+b;
        expect(sum (2, 4)).to.equal(6);
        // assert.equal(6, sum(2, 4));
    })
})