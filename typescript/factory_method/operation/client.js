"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var operation_1 = require("./operation");
function client(operation, a, b) {
    return operation.createOperator(a, b);
}
client(new operation_1.Addition(), 1, 2);
client(new operation_1.Subtraction(), 1, 2);
client(new operation_1.Multiplication(), 1, 2);
client(new operation_1.Division(), 1, 2);
client(new operation_1.Modulo(), 1, 2);
