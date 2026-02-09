const { expect } = require("chai");

describe("Simple Salary Calculator", () => {

  const salaryCalc = (base, bonus, leaves, taxPercent) => {
    const leaveDeduction = leaves * 500;     // 500 per leave
    const gross = base + bonus - leaveDeduction;
    const tax = (gross * taxPercent) / 100;
    const net = gross - tax;

    return net;
  };

  it("should calculate net salary correctly", () => {
    const netSalary = salaryCalc(50000, 5000, 2, 10);
    expect(netSalary).to.equal(48600);
  });

  it("should work when no bonus", () => {
    const netSalary = salaryCalc(40000, 0, 1, 5);
    expect(netSalary).to.equal(37525);
  });

});


//salary calaculation based on number of leaves formula

// const { expect } = require("chai");

// describe("Salary Calculator - Real Concept", () => {

//   const salaryCalc = (monthlySalary, bonus, leaveDays, taxPercent, workingDays) => {

//     const perDaySalary = monthlySalary / workingDays;
//     const leaveDeduction = perDaySalary * leaveDays;

//     const gross = monthlySalary + bonus - leaveDeduction;
//     const tax = (gross * taxPercent) / 100;
//     const net = gross - tax;

//     return Math.round(net);
//   };

//   it("should calculate net salary correctly", () => {
//     // monthlySalary, bonus, leaves, tax%, workingDays
//     const result = salaryCalc(30000, 5000, 2, 10, 30);
//     expect(result).to.equal(31500);
//   });

// });
