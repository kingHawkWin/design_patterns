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
exports.Component2 = void 0;
var baseComponent_1 = require("./baseComponent");
var Component2 = /** @class */ (function (_super) {
    __extends(Component2, _super);
    function Component2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Component2.prototype.doC = function () {
        console.log('Component2 doC.');
        this.mediator.notify(this, 'C');
    };
    Component2.prototype.doD = function () {
        console.log('Component2 doD.');
        this.mediator.notify(this, 'D');
    };
    return Component2;
}(baseComponent_1.BaseComponent));
exports.Component2 = Component2;
//# sourceMappingURL=component2.js.map