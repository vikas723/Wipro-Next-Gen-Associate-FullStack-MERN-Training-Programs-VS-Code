
enum CustomerType {
  Regular,
  Premium
}

// Tuple for contact details
type ContactInfo = [email: string, phone: string];

// Decorator with safe constructor typing
function Logger(constructor: { new (...args: any[]): {} }) {
  console.log(`Class Loaded`);
}

// Interface defining customer structure
interface ICustomer {
  id: number;
  name: string;
  type: CustomerType;
  contact: ContactInfo;
}

// Customer class implementing interface
@Logger
class Customer implements ICustomer {
  constructor(
    public id: number,
    public name: string,
    public type: CustomerType,
    public contact: ContactInfo
  ) {}
}

// Manager class handling customers
class CustomerManager {
  private customers: Customer[] = [];

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  // Explicit iterable return type
  *getCustomers(): IterableIterator<Customer> {
    for (const customer of this.customers) {
      yield customer;
    }
  }
}

// Execution logic
const manager = new CustomerManager();

manager.addCustomer(
  new Customer(1, "Vikas", CustomerType.Regular, ["vikas@mail.com", "9999999999"])
);

manager.addCustomer(
  new Customer(2, "Vihaan", CustomerType.Premium, ["Vihaan@mail.com", "8888888888"])
);
manager.addCustomer(
  new Customer(3, "Viyaas", CustomerType.Premium, ["Viyaas@mail.com", "7777777777"])
);
manager.addCustomer(
  new Customer(4, "Vridul", CustomerType.Premium, ["Vridul.com", "666666666"])
);
manager.addCustomer(
  new Customer(5, "Vikram", CustomerType.Premium, ["Vikram.com", "5555555555"])
);

// Iterator usage
for (const cust of manager.getCustomers()) {
  console.log(cust);
}
