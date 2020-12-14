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
exports.AngularPeg = void 0;
var peg_1 = require("./peg");
var AngularPeg = /** @class */ (function (_super) {
    __extends(AngularPeg, _super);
    function AngularPeg(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    AngularPeg.prototype.getSideLength = function () {
        return [this.a, this.b, this.c];
    };
    return AngularPeg;
}(peg_1.Peg));
exports.AngularPeg = AngularPeg;
