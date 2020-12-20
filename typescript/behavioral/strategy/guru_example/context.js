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
    Context.prototype.bloc = function () {
        console.log('Context bloc');
        return this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
    };
    return Context;
}());
exports.Context = Context;
//# sourceMappingURL=context.js.map