"use strict";
exports.__esModule = true;
var invoker_1 = require("./invoker");
var simpleCommand_1 = require("./simpleCommand");
var receiver_1 = require("./receiver");
var complexCommand_1 = require("./complexCommand");
var invoker = new invoker_1.Invoker();
invoker.setOnStart(new simpleCommand_1.SimpleCommand('simpleCommand xxxx'));
var receiver = new receiver_1.Receiver();
invoker.setOnEnd(new complexCommand_1.ComplexCommand(receiver, 'aaa', 'bbb'));
invoker["do"]();
//# sourceMappingURL=main.js.map