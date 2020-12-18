"use strict";
exports.__esModule = true;
var monkeyHandler_1 = require("./monkeyHandler");
var squirrel_handler_1 = require("./squirrel_handler");
var dog_handler_1 = require("./dog_handler");
var client_1 = require("./client");
var monkey = new monkeyHandler_1.MonkeyHandler();
var squirrel = new squirrel_handler_1.SquirrelHandler();
var dog = new dog_handler_1.DogHandler();
monkey.setNext(squirrel).setNext(dog);
console.log('Chain: Monkey > Squirrel > Dog\n');
client_1.client(monkey);
console.log('');
console.log('Subchain: Squirrel > Dog\n');
client_1.client(squirrel);
//# sourceMappingURL=main.js.map