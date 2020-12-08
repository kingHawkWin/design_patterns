"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const factory_1 = require("./factory");
function client(factory, shoeSize, shirtSize) {
    const shoe = factory.makeShoe().generate(shoeSize);
    const shirt = factory.makeShirt().generate(shirtSize);
    console.log(shoe);
    console.log(shirt);
    console.log('-----');
}
client(new factory_1.Adidas(), 23, 'xxl');
client(new factory_1.Nike(), 43, 'xl');
