"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Adapter = void 0;
var round_peg_1 = require("./round_peg");
var peg_1 = require("./peg");
var square_peg_1 = require("./square_peg");
var angular_peg_1 = require("./angular_peg");
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(peg) {
        var _this = _super.call(this) || this;
        _this.peg = peg;
        return _this;
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
}(peg_1.Peg));
exports.Adapter = Adapter;
