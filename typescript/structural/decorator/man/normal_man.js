"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NormalMan = void 0;
var NormalMan = /** @class */ (function () {
    function NormalMan(height, weight, sex) {
        this.height = height;
        this.weight = weight;
        this.sex = sex;
    }
    NormalMan.prototype.attributes = function () {
        return "NORMAL MAN: height = " + this.height + ", weight = " + this.weight + ", sex = " + this.sex;
    };
    return NormalMan;
}());
exports.NormalMan = NormalMan;
