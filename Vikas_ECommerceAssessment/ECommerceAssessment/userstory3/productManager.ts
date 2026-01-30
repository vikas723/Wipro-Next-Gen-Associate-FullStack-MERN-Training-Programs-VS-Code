// interface IProduct {
//     id: number;
//     name: string;
//     category: string;
//     price: number;
//     stock: number;
// }

// function LogChange(target: any, propertyKey: string) {
//     let value = target[propertyKey];

//     const getter = () => value;
//     const setter = (newVal: number) => {
//         console.log(`Value changed from ${value} to ${newVal}`);
//         value = newVal;
//     };

//     Object.defineProperty(target, propertyKey, {
//         get: getter,
//         set: setter
//     });
// }

// class Product implements IProduct {
//     id: number;
//     name: string;
//     category: string;

//     @LogChange
//     price: number;

//     @LogChange
//     stock: number;

//     constructor(id: number, name: string, category: string, price: number, stock: number) {
//         this.id = id;
//         this.name = name;
//         this.category = category;
//         this.price = price;
//         this.stock = stock;
//     }
// }

// const inventory: Array<[number, Product]> = [];

// inventory.push([1, new Product(1, "Laptop", "Electronics", 800, 10)]);
// inventory.push([2, new Product(2, "Shoes", "Fashion", 100, 25)]);
// inventory.push([3, new Product(3, "Washing Machine", "Appliances", 160, 20)]);
// inventory.push([4, new Product(4, "Luxury King Size Sofa", "Furniture", 200, 15)]);
// inventory.push([5, new Product(5, "Royal Oud Perfume", "Fashion", 20, 90)]);
// inventory.push([6, new Product(6, "Chimney", "Kitchen", 140, 30)]);

// for (const [id, product] of inventory) {
//     console.log(`${product.name} | ${product.category} | $${product.price} | Stock: ${product.stock}`);
// }


// Interface defining product structure

interface IProduct {
    id: number;
    name: string;
    category: string;
    price: number;
    stock: number;
}

// Decorator to log changes separately for each object
function LogChange(target: any, propertyKey: string) {
    const privateKey = `_${propertyKey}`;

    Object.defineProperty(target, propertyKey, {
        get: function () {
            return this[privateKey];
        },
        set: function (newVal: number) {
            console.log(`${propertyKey} changed to ${newVal}`);
            this[privateKey] = newVal;
        },
        enumerable: true,
        configurable: true
    });
}

// Product class implementing interface
class Product implements IProduct {
    id: number;
    name: string;
    category: string;

    @LogChange
    price: number;

    @LogChange
    stock: number;

    constructor(id: number, name: string, category: string, price: number, stock: number) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
    }
}

// Storing products in tuple array
const inventory: Array<[number, Product]> = [];

inventory.push([1, new Product(1, "Laptop", "Electronics", 800, 10)]);
inventory.push([2, new Product(2, "Shoes", "Fashion", 100, 25)]);
inventory.push([3, new Product(3, "Washing Machine", "Appliances", 160, 20)]);
inventory.push([4, new Product(4, "Luxury King Size Sofa", "Furniture", 200, 15)]);
inventory.push([5, new Product(5, "Royal Oud Perfume", "Fashion", 20, 90)]);
inventory.push([6, new Product(6, "Chimney", "Kitchen", 140, 30)]);

// Iterating using for...of loop
console.log("\nProduct Inventory Details:\n");

for (const [id, product] of inventory) {
    console.log(`${product.name} | ${product.category} | $${product.price} | Stock: ${product.stock}`);
}
