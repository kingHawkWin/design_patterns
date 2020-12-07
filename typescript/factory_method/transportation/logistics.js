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
exports.SkyLogistics = exports.SeaLogistics = exports.RoadLogistics = exports.Logistics = void 0;
var transport_unit_1 = require("./transport_unit");
var Logistics = /** @class */ (function () {
    function Logistics() {
    }
    Logistics.prototype.createTransport = function () {
        return this.playDelivery().deliver();
    };
    return Logistics;
}());
exports.Logistics = Logistics;
var RoadLogistics = /** @class */ (function (_super) {
    __extends(RoadLogistics, _super);
    function RoadLogistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoadLogistics.prototype.playDelivery = function () {
        return new transport_unit_1.Truck();
    };
    return RoadLogistics;
}(Logistics));
exports.RoadLogistics = RoadLogistics;
var SeaLogistics = /** @class */ (function (_super) {
    __extends(SeaLogistics, _super);
    function SeaLogistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeaLogistics.prototype.playDelivery = function () {
        return new transport_unit_1.Ship();
    };
    return SeaLogistics;
}(Logistics));
exports.SeaLogistics = SeaLogistics;
var SkyLogistics = /** @class */ (function (_super) {
    __extends(SkyLogistics, _super);
    function SkyLogistics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SkyLogistics.prototype.playDelivery = function () {
        return new transport_unit_1.Plane();
    };
    return SkyLogistics;
}(Logistics));
exports.SkyLogistics = SkyLogistics;
