"use strict";
exports.__esModule = true;
exports.Component = void 0;
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.setParent = function (parent) {
        this.parent = parent;
    };
    Component.prototype.getParent = function () {
        return this.parent;
    };
    Component.prototype.isComposite = function () {
        return false;
    };
    Component.prototype.add = function (component) { };
    Component.prototype.remove = function (component) { };
    return Component;
}());
exports.Component = Component;
//# sourceMappingURL=component.js.map