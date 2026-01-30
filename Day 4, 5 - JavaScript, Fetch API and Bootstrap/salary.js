
const employee = {
    name: prompt("Enter Employee Name:"),
    workingDays: Number(prompt("Enter Working Days:")),
    basicPay: Number(prompt("Enter Basic Pay:")),
    bonus: Number(prompt("Enter Bonus Amount:"))
};

function calculateNetSalary(emp) {

    const TOTAL_WORKING_DAYS = 30;
    
    const perDaySalary = emp.basicPay / TOTAL_WORKING_DAYS;
    
    const earnedSalary = perDaySalary * emp.workingDays;

    const grossSalary = earnedSalary + emp.bonus;

    let taxRate = 0;

    if (grossSalary <= 25000) {
        taxRate = 0.05;
    } else if (grossSalary <= 50000) {
        taxRate = 0.10;
    } else {
        taxRate = 0.20;
    }

    const taxAmount = grossSalary * taxRate;
    const netSalary = grossSalary - taxAmount;

    console.log("Employee Salary Details");
    console.log("------------------------");
    console.log("Employee Name :", emp.name);
    console.log("Working Days  :", emp.workingDays);
    console.log("Basic Pay     :", emp.basicPay);
    console.log("Bonus         :", emp.bonus);
    console.log("Gross Salary  :", grossSalary.toFixed(2));
    console.log("Tax Deduction :", taxAmount.toFixed(2));
    console.log("Net Salary    :", netSalary.toFixed(2));

    return netSalary;
}

calculateNetSalary(employee);
