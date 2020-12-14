"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adapter = void 0;
var round_peg_1 = require("./round_peg");
var square_peg_1 = require("./square_peg");
var angular_peg_1 = require("./angular_peg");
var Adapter = /** @class */ (function () {
    function Adapter(peg) {
        this.peg = peg;
    }
    Adapter.prototype.getRadius = function () {
        if (this.peg instanceof round_peg_1.RoundPeg) {
            return this.peg.getRadius();
        }
        if (this.peg instanceof square_peg_1.SquarePeg) {
            return this.peg.getWidth() * Math.sqrt(2) / 2;
        }
        if (this.peg instanceof angular_peg_1.AngularPeg) {
            var sides = this.peg.getSideLength();
            var a = sides[0];
            var b = sides[1];
            var c = sides[2];
            var p = (a + b + c) / 2;
            return (a * b * c) / 4 * (Math.sqrt(p * (p - a) * (p - b) * (p - c)));
        }
        return 0;
    };
    return Adapter;
}());
exports.Adapter = Adapter;
