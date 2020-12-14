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
exports.SquarePeg = void 0;
var peg_1 = require("./peg");
var SquarePeg = /** @class */ (function (_super) {
    __extends(SquarePeg, _super);
    function SquarePeg(width) {
        var _this = _super.call(this) || this;
        _this.width = width;
        return _this;
    }
    SquarePeg.prototype.getWidth = function () {
        return this.width;
    };
    return SquarePeg;
}(peg_1.Peg));
exports.SquarePeg = SquarePeg;
