"use strict";
// enum CustomerType {
//   Regular,
//   Premium
// }
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// type ContactInfo = [string, string];
// function Logger(target: Function) {
//   console.log(`Class Loaded: ${target.name}`);
// }
// interface ICustomer {
//   id: number;
//   name: string;
//   type: CustomerType;
//   contact: ContactInfo;
// }
// @Logger
// class Customer implements ICustomer {
//   constructor(
//     public id: number,
//     public name: string,
//     public type: CustomerType,
//     public contact: ContactInfo
//   ) {}
// }
// class CustomerManager {
//   private customers: Customer[] = [];
//   addCustomer(customer: Customer): void {
//     this.customers.push(customer);
//   }
//   *getCustomers() {
//     for (const customer of this.customers) {
//       yield customer;
//     }
//   }
// }
// // Execution
// const manager = new CustomerManager();
// manager.addCustomer(new Customer(1, "Rahul", CustomerType.Regular, ["rahul@mail.com", "9999999999"]));
// manager.addCustomer(new Customer(2, "Anita", CustomerType.Premium, ["anita@mail.com", "8888888888"]));
// for (const cust of manager.getCustomers()) {
//   console.log(cust);
// }
// Enum for customer classification
var CustomerType;
(function (CustomerType) {
    CustomerType[CustomerType["Regular"] = 0] = "Regular";
    CustomerType[CustomerType["Premium"] = 1] = "Premium";
})(CustomerType || (CustomerType = {}));
// Decorator with safe constructor typing
function Logger(constructor) {
    console.log(`Class Loaded`);
}
// Customer class implementing interface
let Customer = (() => {
    let _classDecorators = [Logger];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    var Customer = _classThis = class {
        constructor(id, name, type, contact) {
            this.id = id;
            this.name = name;
            this.type = type;
            this.contact = contact;
        }
    };
    __setFunctionName(_classThis, "Customer");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Customer = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Customer = _classThis;
})();
// Manager class handling customers
class CustomerManager {
    constructor() {
        this.customers = [];
    }
    addCustomer(customer) {
        this.customers.push(customer);
    }
    // Explicit iterable return type
    *getCustomers() {
        for (const customer of this.customers) {
            yield customer;
        }
    }
}
// Execution logic
const manager = new CustomerManager();
manager.addCustomer(new Customer(1, "Vikas", CustomerType.Regular, ["vikas@mail.com", "9999999999"]));
manager.addCustomer(new Customer(2, "Vihaan", CustomerType.Premium, ["Vihaan@mail.com", "8888888888"]));
manager.addCustomer(new Customer(3, "Viyaas", CustomerType.Premium, ["Viyaas@mail.com", "7777777777"]));
manager.addCustomer(new Customer(4, "Vridul", CustomerType.Premium, ["Vridul.com", "666666666"]));
manager.addCustomer(new Customer(5, "Vikram", CustomerType.Premium, ["Vikram.com", "5555555555"]));
// Iterator usage
for (const cust of manager.getCustomers()) {
    console.log(cust);
}
