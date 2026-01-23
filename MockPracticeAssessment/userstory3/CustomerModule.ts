// Decorator
function Logger(target: any) {
  console.log("Customer Service Loaded");
}

// Interface
interface Customer {
  id: number;
  name: string;
}

// Enum
enum CustomerType {
  Regular,
  Premium
}

// Class with Decorator
@Logger
class CustomerService {
  private customers: Customer[] = [];

  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  getCustomers(): Customer[] {
    return this.customers;
  }
}

// Object creation
const service = new CustomerService();

service.addCustomer({ id: 1, name: "Vikas" });
service.addCustomer({ id: 2, name: "Vihaan" });
service.addCustomer({ id: 3, name: "Viyaas" });
service.addCustomer({ id: 4, name: "Vikram" });
service.addCustomer({ id: 5, name: "Vedha" });
service.addCustomer({ id: 6, name: "Vishal" });

console.log(service.getCustomers());