"use strict";
exports.__esModule = true;
exports.ComplexCommand = void 0;
var ComplexCommand = /** @class */ (function () {
    function ComplexCommand(receiver, a, b) {
        this.receiver = receiver;
        this.a = a;
        this.b = b;
    }
    ComplexCommand.prototype.execute = function () {
        console.log('ComplexCommand');
        this.receiver.doA(this.a);
        this.receiver.doB(this.b);
    };
    return ComplexCommand;
}());
exports.ComplexCommand = ComplexCommand;
//# sourceMappingURL=complexCommand.js.map