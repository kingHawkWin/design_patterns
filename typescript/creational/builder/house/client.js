"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
function client(house) {
    console.log(house.location);
    console.log("\uFFE5" + house.price);
    console.log(house.area + " m2");
    console.log("\uFFE5" + house.total);
    console.log(house.level + " \u5C42");
    console.log(house.bedRoom + " \u4E2A\u5367\u5BA4");
    console.log(house.restRoom + " \u4E2A\u536B\u751F\u95F4");
    console.log((house.isBalcony ? '有' : '没有') + " \u9633\u53F0");
    console.log((house.isDuplex ? '是' : '不是') + " \u590D\u5F0F");
    console.log("" + (house.isVilla ? '别墅' : '普通住宅'));
    console.log("" + (house.isPool ? '带泳池' : ''));
    console.log("" + (house.isPlants ? '带绿化' : ''));
}
exports.client = client;
