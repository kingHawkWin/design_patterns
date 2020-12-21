"use strict";
exports.__esModule = true;
exports.Flyweight = void 0;
var Flyweight = /** @class */ (function () {
    function Flyweight(sharedState) {
        this.sharedState = sharedState;
    }
    Flyweight.prototype.operation = function (uniqueState) {
        var s = JSON.stringify(this.sharedState);
        var u = JSON.stringify(uniqueState);
        console.log("Flyweight: \n  shared state = " + s + ", \n  unique state = " + u);
    };
    return Flyweight;
}());
exports.Flyweight = Flyweight;
//# sourceMappingURL=flyweight.js.map