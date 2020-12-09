"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.setBuilder = function (builder) {
        this.builder = builder;
    };
    Director.prototype.dongfangyueju = function () {
        this.builder.buildLocation('上海市浦东新区三林镇上南路');
        this.builder.buildPrice(60000);
        this.builder.buildArea(110);
        this.builder.buildTotal();
        this.builder.buildLevel(8);
        this.builder.buildBedRoom(2);
        this.builder.buildRestRoom(1);
        this.builder.buildBalcony(true);
    };
    Director.prototype.jingyao = function () {
        this.builder.buildLocation('上海市浦东新区三林镇前滩');
        this.builder.buildPrice(80000);
        this.builder.buildArea(140);
        this.builder.buildTotal();
        this.builder.buildLevel(23);
        this.builder.buildBedRoom(4);
        this.builder.buildRestRoom(2);
        this.builder.buildBalcony(true);
    };
    Director.prototype.tangchenyipin = function () {
        this.builder.buildLocation('上海市浦东新区陆家嘴');
        this.builder.buildPrice(2000000);
        this.builder.buildArea(430);
        this.builder.buildTotal();
        this.builder.buildLevel(1);
        this.builder.buildBedRoom(8);
        this.builder.buildRestRoom(4);
        this.builder.buildBalcony(true);
        this.builder.buildDuplex(true);
        this.builder.buildVilla(true);
        this.builder.buildPool(true);
        this.builder.buildPlants(true);
    };
    return Director;
}());
exports.Director = Director;
