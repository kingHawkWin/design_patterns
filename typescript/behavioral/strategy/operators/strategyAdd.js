"use strict";
exports.__esModule = true;
exports.StrategyAdd = void 0;
var StrategyAdd = /** @class */ (function () {
    function StrategyAdd() {
    }
    StrategyAdd.prototype.execute = function (a, b) {
        console.log("a + b = " + (a + b));
        return a + b;
    };
    return StrategyAdd;
}());
exports.StrategyAdd = StrategyAdd;
//# sourceMappingURL=strategyAdd.js.map