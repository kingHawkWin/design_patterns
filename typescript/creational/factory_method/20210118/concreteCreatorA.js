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
exports.ConcreteCreatorA = void 0;
var creator_1 = require("./creator");
var concreteProductA_1 = require("./concreteProductA");
var ConcreteCreatorA = /** @class */ (function (_super) {
    __extends(ConcreteCreatorA, _super);
    function ConcreteCreatorA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConcreteCreatorA.prototype.create = function () {
        return new concreteProductA_1.ConcreteProductA();
    };
    return ConcreteCreatorA;
}(creator_1.Creator));
exports.ConcreteCreatorA = ConcreteCreatorA;
//# sourceMappingURL=concreteCreatorA.js.map