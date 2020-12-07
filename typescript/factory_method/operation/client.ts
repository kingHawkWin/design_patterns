import {Addition, Division, Modulo, Multiplication, Operation, Subtraction} from "./operation";

function client(operation: Operation, a: number, b: number) {
  return operation.createOperator(a, b);
}

client(new Addition(), 1, 2);
client(new Subtraction(), 1, 2);
client(new Multiplication(), 1, 2);
client(new Division(), 1, 2);
client(new Modulo(), 1, 2);
