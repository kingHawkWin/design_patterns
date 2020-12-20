"use strict";
exports.__esModule = true;
exports.Context = void 0;
var Context = /** @class */ (function () {
    function Context(strategy) {
        this.strategy = strategy;
    }
    Context.prototype.setStrategy = function (strategy) {
        this.strategy = strategy;
    };
    Context.prototype.operation = function (a, b) {
        return this.strategy.execute(a, b);
    };
    return Context;
}());
exports.Context = Context;
//# sourceMappingURL=context.js.map