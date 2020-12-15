"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Winter = void 0;
var Winter = /** @class */ (function () {
    function Winter(man) {
        this.man = man;
        this.clothes = [
            'down jacket',
            'long johns',
            'cotton shoes'
        ];
    }
    Winter.prototype.attributes = function () {
        console.log(this.man.attributes());
        return "WINTER MAN: clothes = " + this.clothes[0] + ", " + this.clothes[1] + ", " + this.clothes[2];
    };
    return Winter;
}());
exports.Winter = Winter;
