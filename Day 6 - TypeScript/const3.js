"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User2 = /** @class */ (function () {
    function User2() {
        this.username2 = prompt("Enter username:") || "";
        this.password2 = prompt("Enter password:") || "";
    }
    User2.prototype.display = function () {
        console.log("Username is:", this.username2);
        console.log("Password is:", this.password2);
    };
    return User2;
}());
// Constructor is called automatically
var u2 = new User2();
u2.display();
