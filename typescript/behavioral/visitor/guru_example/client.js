"use strict";
exports.__esModule = true;
exports.client = void 0;
function client(components, visitor) {
    for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
        var component = components_1[_i];
        component.accept(visitor);
    }
}
exports.client = client;
//# sourceMappingURL=client.js.map