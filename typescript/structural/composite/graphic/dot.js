"use strict";
exports.__esModule = true;
exports.Dot = void 0;
var Dot = /** @class */ (function () {
    function Dot(x, y) {
        this.x = x;
        this.y = y;
    }
    Dot.prototype.draw = function () {
        console.log("DOT: x = " + this.x + ", y = " + this.y);
    };
    Dot.prototype.move = function (x, y) {
        this.x += x;
        this.y += y;
        this.draw();
    };
    return Dot;
}());
exports.Dot = Dot;
//# sourceMappingURL=dot.js.map