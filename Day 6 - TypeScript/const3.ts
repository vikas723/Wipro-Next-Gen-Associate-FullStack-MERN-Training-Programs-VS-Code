export {}; 

class User2 {
    username2: string;
    password2: string;

    constructor() {
        this.username2 = prompt("Enter username:") || "";
        this.password2 = prompt("Enter password:") || "";
    }

    display(): void {
        console.log("Username is:", this.username2);
        console.log("Password is:", this.password2);
    }
}

const u2 = new User2();
u2.display();

//It is a error program  you can use it in html then the constructor works