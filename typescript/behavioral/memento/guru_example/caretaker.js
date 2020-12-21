"use strict";
exports.__esModule = true;
exports.Caretaker = void 0;
var Caretaker = /** @class */ (function () {
    function Caretaker(originator) {
        this.mementos = [];
        this.originator = originator;
    }
    Caretaker.prototype.backup = function () {
        console.log('Caretaker backup.');
        this.mementos.push(this.originator.save());
    };
    Caretaker.prototype.undo = function () {
        if (!this.mementos.length) {
            return;
        }
        var memento = this.mementos.pop();
        console.log("Caretaker undo memento name = " + memento.getName());
        this.originator.restore(memento);
    };
    Caretaker.prototype.showHistory = function () {
        console.log('Caretaker showHistory.');
        for (var _i = 0, _a = this.mementos; _i < _a.length; _i++) {
            var memento = _a[_i];
            console.log(memento.getName());
        }
    };
    return Caretaker;
}());
exports.Caretaker = Caretaker;
//# sourceMappingURL=caretaker.js.map