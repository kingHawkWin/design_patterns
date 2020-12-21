"use strict";
exports.__esModule = true;
exports.Invoker = void 0;
var Invoker = /** @class */ (function () {
    function Invoker() {
    }
    Invoker.prototype.setOnStart = function (command) {
        this.onStart = command;
    };
    Invoker.prototype.setOnEnd = function (command) {
        this.onEnd = command;
    };
    Invoker.prototype.isCommand = function (c) {
        return c.execute !== undefined;
    };
    Invoker.prototype["do"] = function () {
        console.log('Invoker');
        if (this.isCommand(this.onStart)) {
            this.onStart.execute();
        }
        if (this.isCommand(this.onEnd)) {
            this.onEnd.execute();
        }
    };
    return Invoker;
}());
exports.Invoker = Invoker;
//# sourceMappingURL=invoker.js.map