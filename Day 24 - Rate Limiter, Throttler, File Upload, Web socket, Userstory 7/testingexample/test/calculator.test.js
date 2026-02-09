const {expect} = require("chai");

describe("Calculator unit tests", () => {
    const add = (a, b) => a+b;
    const sub = (a, b) => a-b;
    const mul = (a, b) => a*b;
    const div = (a, b) => a/b;

    it("should add numbers", () => {
        expect(add(2, 4)).to.equal(6);
    });
    
    it("should subtract numbers", () => {
        expect(sub(4, 2)).to.equal(2);
    });
    
    it("should multiply numbers", () => {
        expect(mul(2, 4)).to.equal(8);
    });
    
    it("should divide numbers", () => {
        expect(div(4, 2)).to.equal(2);
    });

})

// const { expect } = require("chai");

// describe("Calculator Unit Tests", () => {

//   // calculator functions
//   const add = (a, b) => a + b;
//   const subtract = (a, b) => a - b;
//   const multiply = (a, b) => a * b;
//   const divide = (a, b) => a / b;

//   it("should add numbers correctly", () => {
//     expect(add(2, 3)).to.equal(5);
//   });


//   it("should subtract numbers correctly", () => {
//     expect(subtract(5, 3)).to.equal(2);
//   });

//   // Multiplication Test
//   it("should multiply numbers correctly", () => {
//     expect(multiply(4, 3)).to.equal(12);
//   });

//   // Division Test
//   it("should divide numbers correctly", () => {
//     expect(divide(10, 2)).to.equal(5);
//   });

//   // Division by zero (edge case)
//   it("should return Infinity when dividing by zero", () => {
//     expect(divide(5, 0)).to.equal(Infinity);
//   });

// });
