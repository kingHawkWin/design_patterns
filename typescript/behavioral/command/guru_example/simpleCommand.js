"use strict";
exports.__esModule = true;
exports.SimpleCommand = void 0;
var SimpleCommand = /** @class */ (function () {
    function SimpleCommand(payload) {
        this.payload = payload;
    }
    SimpleCommand.prototype.execute = function () {
        console.log("SimpleCommand: payload = " + this.payload);
    };
    return SimpleCommand;
}());
exports.SimpleCommand = SimpleCommand;
//# sourceMappingURL=simpleCommand.js.map