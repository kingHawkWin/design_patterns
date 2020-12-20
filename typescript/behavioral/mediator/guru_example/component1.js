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
exports.__esModule = true;
exports.Component1 = void 0;
var baseComponent_1 = require("./baseComponent");
var Component1 = /** @class */ (function (_super) {
    __extends(Component1, _super);
    function Component1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component1.prototype.doA = function () {
        console.log('Component1 doA.');
        this.mediator.notify(this, 'A');
    };
    Component1.prototype.doB = function () {
        console.log('Component1 doB.');
        this.mediator.notify(this, 'B');
    };
    return Component1;
}(baseComponent_1.BaseComponent));
exports.Component1 = Component1;
//# sourceMappingURL=component1.js.map