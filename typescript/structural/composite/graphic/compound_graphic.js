"use strict";
exports.__esModule = true;
exports.CompoundGraphic = void 0;
var CompoundGraphic = /** @class */ (function () {
    function CompoundGraphic() {
        this.children = [];
    }
    CompoundGraphic.prototype.add = function (child) {
        this.children.push(child);
        this.draw();
    };
    CompoundGraphic.prototype.remove = function (child) {
        var childIndex = this.children.indexOf(child);
        this.children.splice(childIndex, 1);
        this.draw();
    };
    CompoundGraphic.prototype.move = function (x, y) {
        this.children.forEach(function (v) {
            v.move(x, y);
        });
        this.draw();
    };
    CompoundGraphic.prototype.draw = function () {
        this.children.forEach(function (v) {
            v.draw();
        });
    };
    return CompoundGraphic;
}());
exports.CompoundGraphic = CompoundGraphic;
//# sourceMappingURL=compound_graphic.js.map