var User2 = /** @class */ (function () {
    function User2() {
        this.username = prompt("Enter username:") || "";
        this.password = prompt("Enter password:") || "";
    }
    User2.prototype.display = function () {
        console.log("Username is:", this.username);
        console.log("Password is:", this.password);
    };
    return User2;
}());
// Object creation automatically calls constructor
var u2 = new User2();
u2.display();
