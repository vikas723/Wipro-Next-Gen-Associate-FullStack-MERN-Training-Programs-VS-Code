var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    User.prototype.display = function () {
        console.log("\n User Details: ");
        console.log("Username: ", this.username);
        console.group("Password :", this.password);
    };
    return User;
}());
var u1 = new User("Vikas", "Hello1234");
u1.display();
