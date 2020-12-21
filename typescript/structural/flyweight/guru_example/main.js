"use strict";
exports.__esModule = true;
var flyweightFactory_1 = require("./flyweightFactory");
var factory = new flyweightFactory_1.FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'pink'],
    ['Mercedes Benz', 'C300', 'black'],
    ['Mercedes Benz', 'C500', 'red'],
    ['BMW', 'M5', 'red'],
    ['BMW', 'X6', 'white'],
]);
factory.listFlyweight();
function addCarToPoliceDatabase(ff, plates, owner, brand, model, color) {
    console.log(plates + " - " + owner + " - " + brand + " - " + model + " - " + color + " is add to police db.");
    var flyweight = ff.getFlyweight([brand, model, color]);
    flyweight.operation([plates, owner]);
}
addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');
addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red');
factory.listFlyweight();
//# sourceMappingURL=main.js.map