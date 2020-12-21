"use strict";
exports.__esModule = true;
exports.Originator = void 0;
var concreteMemento_1 = require("./concreteMemento");
var Originator = /** @class */ (function () {
    function Originator(state) {
        this.state = state;
        console.log("Originator state = " + this.state);
    }
    Originator.prototype.doSomething = function () {
        console.log('Originator doSomething');
        this.generateRandomString(30);
    };
    Originator.prototype.generateRandomString = function (length) {
        if (length === void 0) { length = 10; }
        var charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return Array
            .apply(null, { length: length })
            .map(function () { return charSet.charAt(Math.floor(Math.random() * charSet.length)); })
            .join('');
    };
    Originator.prototype.save = function () {
        return new concreteMemento_1.ConcreteMemento(this.state);
    };
    Originator.prototype.restore = function (memento) {
        this.state = memento.getState();
        console.log("Originator state = " + this.state);
    };
    return Originator;
}());
exports.Originator = Originator;
//# sourceMappingURL=originator.js.map