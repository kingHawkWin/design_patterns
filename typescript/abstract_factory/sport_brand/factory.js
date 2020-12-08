"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nike = exports.Adidas = void 0;
const product_1 = require("./product");
class Adidas {
    makeShoe() {
        return new product_1.AdidasShoe();
    }
    makeShirt() {
        return new product_1.AdidasShirt();
    }
}
exports.Adidas = Adidas;
class Nike {
    makeShoe() {
        return new product_1.NikeShoe();
    }
    makeShirt() {
        return new product_1.NikeShirt();
    }
}
exports.Nike = Nike;
