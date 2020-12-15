"use strict";
exports.__esModule = true;
var image_editor_1 = require("./image_editor");
var dot_1 = require("./dot");
var circle_1 = require("./circle");
var imageEditor = new image_editor_1.ImageEditor();
// imageEditor.load()
var components = [];
components.push(new dot_1.Dot(32, 2422));
components.push(new circle_1.Circle(432, 2342, 565666));
imageEditor.groupSelected(components);
components.push(new dot_1.Dot(3, 111));
components.push(new circle_1.Circle(43, 23, 586));
imageEditor.groupSelected(components);
//# sourceMappingURL=main.js.map