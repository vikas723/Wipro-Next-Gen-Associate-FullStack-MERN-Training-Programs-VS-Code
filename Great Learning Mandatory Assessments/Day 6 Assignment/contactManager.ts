
// 1. Interface Definition

// Interface defines the structure (contract) of a Contact
interface Contact {
    id: number;
    name: string;
    email: string;
    phone: string;
}


// 2. ContactManager Class

class ContactManager {
    // Array to store contacts (Encapsulation)
    private contacts: Contact[] = [];

    // Add a new contact
    addContact(contact: Contact): void {
        this.contacts.push(contact);
        console.log(`Contact with ID ${contact.id} added successfully.`);
    }

    // View all contacts
    viewContacts(): Contact[] {
        return this.contacts;
    }

    // Modify an existing contact
    modifyContact(id: number, updatedContact: Partial<Contact>): void {
        const contact = this.contacts.find(c => c.id === id);

        if (!contact) {
            console.log(`Error: Contact with ID ${id} does not exist.`);
            return;
        }

        // Update only provided fields
        Object.assign(contact, updatedContact);
        console.log(`Contact with ID ${id} modified successfully.`);
    }

    // Delete a contact
    deleteContact(id: number): void {
        const index = this.contacts.findIndex(c => c.id === id);

        if (index === -1) {
            console.log(`Error: Contact with ID ${id} does not exist.`);
            return;
        }

        this.contacts.splice(index, 1);
        console.log(`Contact with ID ${id} deleted successfully.`);
    }
}


// 3. Testing Script

const manager = new ContactManager();

// Add contacts
manager.addContact({
    id: 1,
    name: "Vikas",
    email: "vikas@gmail.com",
    phone: "9876543210"
});

manager.addContact({
    id: 2,
    name: "Aarav",
    email: "aarav@gmail.com",
    phone: "9123456780"
});

// View contacts
console.log(" All Contacts:", manager.viewContacts());

// Modify contact
manager.modifyContact(1, { phone: "9999999999" });

// Delete contact
manager.deleteContact(2);

// Attempt to delete non-existing contact (error case)
manager.deleteContact(3);

// Final contact list
console.log(" Final Contacts:", manager.viewContacts());
