"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NikeShirt = exports.AdidasShirt = exports.NikeShoe = exports.AdidasShoe = void 0;
class AdidasShoe {
    generate(size) {
        const result = new Map();
        result.set('logo', 'Adidas');
        result.set('size', size);
        return result;
    }
}
exports.AdidasShoe = AdidasShoe;
class NikeShoe {
    generate(size) {
        const result = new Map();
        result.set('logo', 'Nike');
        result.set('size', size);
        return result;
    }
}
exports.NikeShoe = NikeShoe;
class AdidasShirt {
    generate(size) {
        const result = new Map();
        result.set('logo', 'Adidas');
        result.set('size', size);
        return result;
    }
}
exports.AdidasShirt = AdidasShirt;
class NikeShirt {
    generate(size) {
        const result = new Map();
        result.set('logo', 'Nike');
        result.set('size', size);
        return result;
    }
}
exports.NikeShirt = NikeShirt;
