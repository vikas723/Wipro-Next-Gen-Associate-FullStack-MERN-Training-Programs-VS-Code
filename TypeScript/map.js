// map is a data structure used to store data in a key value pairs like hashmap or map we use in collections in Java
var _a;
let m1 = new Map();
m1.set(101, "Vikas"); //set is used to store data in key, vaue like hashmap
console.log(m1.get(101));
let userMap = new Map();
userMap.set(1, "Admin");
userMap.set(2, "Editor");
console.log(userMap.get(1)); // Admin
//Iterator
let items = ["laptop", "mouse", "mobile"];
for (let item of items) // using enhanced for loop
 {
    console.log("The value ", item);
}
let u1 = new Map();
u1.set(1, { id: 1, name: "Typescript" });
u1.set(2, { id: 2, name: "Javascript" });
console.log((_a = u1.get(1)) === null || _a === void 0 ? void 0 : _a.name); // ? is used if you do not want to display id in output
