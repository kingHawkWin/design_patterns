"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.ConcreteCreatorB = void 0;
var creator_1 = require("./creator");
var concreteProductB_1 = require("./concreteProductB");
var ConcreteCreatorB = /** @class */ (function (_super) {
    __extends(ConcreteCreatorB, _super);
    function ConcreteCreatorB() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCreatorB.prototype.create = function () {
        return new concreteProductB_1.ConcreteProductB();
    };
    return ConcreteCreatorB;
}(creator_1.Creator));
exports.ConcreteCreatorB = ConcreteCreatorB;
//# sourceMappingURL=concreteCreatorB.js.map