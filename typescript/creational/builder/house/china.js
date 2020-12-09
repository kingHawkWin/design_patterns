"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.China = void 0;
var house_1 = require("./house");
var China = /** @class */ (function () {
    function China() {
        this.reset();
    }
    China.prototype.reset = function () {
        this.house = new house_1.House();
    };
    China.prototype.buildLocation = function (location) {
        this.house.location = location;
    };
    China.prototype.buildPrice = function (price) {
        this.house.price = price;
    };
    China.prototype.buildArea = function (area) {
        this.house.area = area;
    };
    China.prototype.buildTotal = function () {
        this.house.total = this.house.area * this.house.price;
    };
    China.prototype.buildLevel = function (level) {
        this.house.level = level;
    };
    China.prototype.buildBedRoom = function (sum) {
        this.house.bedRoom = sum;
    };
    China.prototype.buildRestRoom = function (sum) {
        this.house.restRoom = sum;
    };
    China.prototype.buildBalcony = function (has) {
        this.house.isBalcony = has;
    };
    China.prototype.buildDuplex = function (has) {
        this.house.isDuplex = has;
    };
    China.prototype.buildVilla = function (has) {
        this.house.isVilla = has;
    };
    China.prototype.buildPool = function (has) {
        this.house.isPool = has;
    };
    China.prototype.buildPlants = function (has) {
        this.house.isPlants = has;
    };
    China.prototype.getHouse = function () {
        var result = this.house;
        this.reset();
        return result;
    };
    return China;
}());
exports.China = China;
