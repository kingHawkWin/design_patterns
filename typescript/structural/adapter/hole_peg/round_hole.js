"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoundHole = void 0;
var RoundHole = /** @class */ (function () {
    function RoundHole(radius) {
        this.radius = radius;
    }
    RoundHole.prototype.getRadius = function () {
        return this.radius;
    };
    RoundHole.prototype.fits = function (peg) {
        var result = this.getRadius() >= peg.getRadius();
        console.log(result);
        return result;
    };
    return RoundHole;
}());
exports.RoundHole = RoundHole;
