interface person
{
    id:number;
    name: string;
    salary: number;
    age?: number; // ? for optional fields
}
let p : person = { //p is a object variable of Person interface
    id: 2,
    name: "Vihaan",
    salary: 60000,
};
console.log(p.name);


interface employee{
    id: number;
    name: string;
    salary: number;
    display(): number
}
let e : employee={
    id: 4,
    name: "Vyaan",
    salary : 80000,
    display() : number {
        return this.salary*0.1;
        
    }
}
console.log("the id is:", e.id);
console.log("the name is:", e.name);
console.log("the updated bonus is:", e.display());
console.log("the id is:",e.id);


  