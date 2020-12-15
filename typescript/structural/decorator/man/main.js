"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var normal_man_1 = require("./normal_man");
var winter_1 = require("./winter");
var iron_man_1 = require("./iron_man");
var normalMan = new normal_man_1.NormalMan(177, 85, 'male');
console.log(normalMan.attributes());
console.log();
var winterMan = new winter_1.Winter(normalMan);
console.log(winterMan.attributes());
console.log();
var ironMan = new iron_man_1.IronMan(normalMan);
console.log(ironMan.attributes());
console.log();
var winterIronMan = new iron_man_1.IronMan(winterMan);
console.log(winterIronMan.attributes());
