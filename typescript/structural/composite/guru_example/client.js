"use strict";
exports.__esModule = true;
exports.client2 = exports.client1 = void 0;
function client1(component) {
    console.log(component.operation());
}
exports.client1 = client1;
function client2(component1, component2) {
    if (component1.isComposite()) {
        component1.add(component2);
    }
    console.log("RESULT: " + component1.operation());
}
exports.client2 = client2;
//# sourceMappingURL=client.js.map