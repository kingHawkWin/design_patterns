"use strict";
exports.__esModule = true;
exports.client = void 0;
function client(handler) {
    var foods = ['Nut', 'Banana', 'Cup of coffee'];
    for (var _i = 0, foods_1 = foods; _i < foods_1.length; _i++) {
        var food = foods_1[_i];
        console.log("Client: Who wants a " + food);
        var result = handler.handle(food);
        if (result) {
            console.log("  " + result);
        }
        else {
            console.log("  " + food + " was left untouched.");
        }
    }
}
exports.client = client;
//# sourceMappingURL=client.js.map