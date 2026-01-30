// map is a data structure used to store data in a key value pairs like hashmap or map we use in collections in Java

let m1 = new Map<number, string>();
m1.set(101, "Vikas"); //set is used to store data in key, vaue like hashmap
console.log(m1.get(101));

let userMap = new Map<number, string>();
userMap.set(1, "Admin");
userMap.set(2, "Editor");

console.log(userMap.get(1)); // Admin


//Iterator
let items = ["laptop", "mouse", "mobile"];
for(let item of items) // using enhanced for loop
{
    console.log("The value ", item);
}

//Map with Interface 
interface user
{
    id: number;
    name: string;
}
let u1 = new Map<number, user>();
u1.set(1, {id: 1, name: "Typescript" });
u1.set(2, {id: 2, name: "Javascript"});
console.log(u1.get(1)?.name); // ? is used if you do not want to display id in output
