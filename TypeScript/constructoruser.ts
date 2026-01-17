class Username
{
    username: string;
    password: string;

    constructor(username: string, password : string)
    {
        this.username = username;
        this.password= password;
    }
    display(): void
    {
        console.log("\n User Details: ");
        console.log("Username: " , this.username);
        console.group("Password :", this.password);
    }
}
const user1 = new Username("Vikas", "Hello1234");
user1.display();