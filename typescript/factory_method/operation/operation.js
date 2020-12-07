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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modulo = exports.Division = exports.Multiplication = exports.Subtraction = exports.Addition = exports.Operation = void 0;
var operators_1 = require("./operators");
var Operation = /** @class */ (function () {
    function Operation() {
    }
    Operation.prototype.createOperator = function (a, b) {
        return this.operatorFactory().operate(a, b);
    };
    return Operation;
}());
exports.Operation = Operation;
var Addition = /** @class */ (function (_super) {
    __extends(Addition, _super);
    function Addition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Addition.prototype.operatorFactory = function () {
        return new operators_1.Add();
    };
    return Addition;
}(Operation));
exports.Addition = Addition;
var Subtraction = /** @class */ (function (_super) {
    __extends(Subtraction, _super);
    function Subtraction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Subtraction.prototype.operatorFactory = function () {
        return new operators_1.Sub();
    };
    return Subtraction;
}(Operation));
exports.Subtraction = Subtraction;
var Multiplication = /** @class */ (function (_super) {
    __extends(Multiplication, _super);
    function Multiplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multiplication.prototype.operatorFactory = function () {
        return new operators_1.Mul();
    };
    return Multiplication;
}(Operation));
exports.Multiplication = Multiplication;
var Division = /** @class */ (function (_super) {
    __extends(Division, _super);
    function Division() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Division.prototype.operatorFactory = function () {
        return new operators_1.Div();
    };
    return Division;
}(Operation));
exports.Division = Division;
var Modulo = /** @class */ (function (_super) {
    __extends(Modulo, _super);
    function Modulo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Modulo.prototype.operatorFactory = function () {
        return new operators_1.Mod();
    };
    return Modulo;
}(Operation));
exports.Modulo = Modulo;
