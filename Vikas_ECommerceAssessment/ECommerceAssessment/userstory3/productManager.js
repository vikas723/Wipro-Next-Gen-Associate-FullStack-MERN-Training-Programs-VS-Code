// interface IProduct {
//     id: number;
//     name: string;
//     category: string;
//     price: number;
//     stock: number;
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator to log changes separately for each object
function LogChange(target, propertyKey) {
    const privateKey = `_${propertyKey}`;
    Object.defineProperty(target, propertyKey, {
        get: function () {
            return this[privateKey];
        },
        set: function (newVal) {
            console.log(`${propertyKey} changed to ${newVal}`);
            this[privateKey] = newVal;
        },
        enumerable: true,
        configurable: true
    });
}
// Product class implementing interface
class Product {
    constructor(id, name, category, price, stock) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.stock = stock;
    }
}
__decorate([
    LogChange
], Product.prototype, "price", void 0);
__decorate([
    LogChange
], Product.prototype, "stock", void 0);
// Storing products in tuple array
const inventory = [];
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
