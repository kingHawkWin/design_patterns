"use strict";
exports.__esModule = true;
exports.ConcreteMemento = void 0;
var ConcreteMemento = /** @class */ (function () {
    function ConcreteMemento(state) {
        this.state = state;
        this.date = new Date().toISOString().slice(0, 19).replace('T', '');
    }
    ConcreteMemento.prototype.getState = function () {
        return this.state;
    };
    ConcreteMemento.prototype.getName = function () {
        return this.date + " / (" + this.state.substr(0, 9) + ")";
    };
    ConcreteMemento.prototype.getDate = function () {
        return this.date;
    };
    return ConcreteMemento;
}());
exports.ConcreteMemento = ConcreteMemento;
//# sourceMappingURL=concreteMemento.js.map