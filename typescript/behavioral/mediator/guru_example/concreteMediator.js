"use strict";
exports.__esModule = true;
exports.ConcreteMediator = void 0;
var ConcreteMediator = /** @class */ (function () {
    function ConcreteMediator(c1, c2) {
        this.component1 = c1;
        this.component1.setMediator(this);
        this.component2 = c2;
        this.component2.setMediator(this);
    }
    ConcreteMediator.prototype.notify = function (sender, event) {
        if (event === 'A') {
            console.log('ConcreteMediator: A');
            this.component1.doB();
        }
        if (event === 'D') {
            console.log('ConcreteMediator: B');
            this.component1.doA();
            this.component2.doC();
        }
    };
    return ConcreteMediator;
}());
exports.ConcreteMediator = ConcreteMediator;
//# sourceMappingURL=concreteMediator.js.map