"use strict";
exports.__esModule = true;
exports.Receiver = void 0;
var Receiver = /** @class */ (function () {
    function Receiver() {
    }
    Receiver.prototype.doA = function (s) {
        console.log("Receiver doA: s = " + s);
    };
    Receiver.prototype.doB = function (s) {
        console.log("Receiver doB: s = " + s);
    };
    return Receiver;
}());
exports.Receiver = Receiver;
//# sourceMappingURL=receiver.js.map