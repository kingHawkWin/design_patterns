"use strict";
exports.__esModule = true;
exports.ImageEditor = void 0;
var compound_graphic_1 = require("./compound_graphic");
var dot_1 = require("./dot");
var circle_1 = require("./circle");
var ImageEditor = /** @class */ (function () {
    function ImageEditor() {
        this.all = [];
    }
    ImageEditor.prototype.load = function () {
        this.all = new compound_graphic_1.CompoundGraphic().children;
        this.all.push(new dot_1.Dot(32, 11));
        this.all.push(new circle_1.Circle(43, 223, 56));
        this.draw();
    };
    ImageEditor.prototype.groupSelected = function (components) {
        var _a;
        var _this = this;
        var group = new compound_graphic_1.CompoundGraphic().children;
        components.forEach(function (v) {
            group.push(v);
            var vIndex = _this.all.indexOf(v);
            _this.all.splice(vIndex, 1);
        });
        (_a = this.all).push.apply(_a, group);
        this.draw();
    };
    ImageEditor.prototype.draw = function () {
        this.all.forEach(function (v) {
            v.draw();
        });
    };
    return ImageEditor;
}());
exports.ImageEditor = ImageEditor;
//# sourceMappingURL=image_editor.js.map