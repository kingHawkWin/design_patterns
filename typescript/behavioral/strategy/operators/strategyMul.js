"use strict";
exports.__esModule = true;
exports.StrategyMul = void 0;
var StrategyMul = /** @class */ (function () {
    function StrategyMul() {
    }
    StrategyMul.prototype.execute = function (a, b) {
        console.log("a * b = " + a * b);
        return a * b;
    };
    return StrategyMul;
}());
exports.StrategyMul = StrategyMul;
//# sourceMappingURL=strategyMul.js.map