"use strict";
exports.__esModule = true;
exports.Creator = void 0;
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.operation = function () {
        var product = this.create();
        product.methodA();
        product.methodB();
    };
    return Creator;
}());
exports.Creator = Creator;
//# sourceMappingURL=creator.js.map