var p = {
    id: 2,
    name: "Vihaan",
    salary: 60000,
};
console.log(p.name);
var e = {
    id: 4,
    name: "Vyaan",
    salary: 80000,
    display: function () {
        return this.salary * 0.1;
    }
};
console.log("the id is:", e.id);
console.log("the name is:", e.name);
console.log("the updated bonus is:", e.display());
console.log("the id is:", e.id);
