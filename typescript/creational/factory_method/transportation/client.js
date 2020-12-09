"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logistics_1 = require("./logistics");
function client(logistics) {
    return logistics.createTransport();
}
client(new logistics_1.RoadLogistics);
client(new logistics_1.SeaLogistics);
client(new logistics_1.SkyLogistics);
