"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plane = exports.Ship = exports.Truck = void 0;
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.deliver = function () {
        console.log('truck');
        return 'truck';
    };
    return Truck;
}());
exports.Truck = Truck;
var Ship = /** @class */ (function () {
    function Ship() {
    }
    Ship.prototype.deliver = function () {
        console.log('ship');
        return 'ship';
    };
    return Ship;
}());
exports.Ship = Ship;
var Plane = /** @class */ (function () {
    function Plane() {
    }
    Plane.prototype.deliver = function () {
        console.log('plane');
        return 'plane';
    };
    return Plane;
}());
exports.Plane = Plane;
