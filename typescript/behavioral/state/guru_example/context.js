"use strict";
exports.__esModule = true;
exports.Context = void 0;
var Context = /** @class */ (function () {
    function Context(s) {
        this.transitionTo(s);
    }
    Context.prototype.transitionTo = function (s) {
        console.log("Context transitionTo " + s.constructor.name + ".");
        this.state = s;
        this.state.setContext(this);
    };
    Context.prototype.require1 = function () {
        this.state.handle1();
    };
    Context.prototype.require2 = function () {
        this.state.handle2();
    };
    return Context;
}());
exports.Context = Context;
//# sourceMappingURL=context.js.map