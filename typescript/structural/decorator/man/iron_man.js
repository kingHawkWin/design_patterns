"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IronMan = void 0;
var IronMan = /** @class */ (function () {
    function IronMan(man) {
        this.man = man;
        this.equipment = [
            'thruster',
            'missile'
        ];
    }
    IronMan.prototype.attributes = function () {
        console.log(this.man.attributes());
        return "IRON MAN: equipment = " + this.equipment[0] + ", " + this.equipment[1];
    };
    return IronMan;
}());
exports.IronMan = IronMan;
