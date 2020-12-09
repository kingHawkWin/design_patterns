"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var factory_1 = require("./factory");
function client(factory) {
    var chair = factory.createChair().chair();
    var table = factory.createTable().table();
    var sofa = factory.createSofa().sofa();
}
client(new factory_1.ArtDeco());
client(new factory_1.Victorian());
client(new factory_1.Modern());
