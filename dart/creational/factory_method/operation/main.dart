import 'bin/operation.dart';

double client(Operation operation, double a, double b) {
  return operation.createOperator(a, b);
}

void main() {
  client(Addition(), 1, 2);
  client(Subtraction(), 1, 2);
  client(Multiplication(), 1, 2);
  client(Division(), 1, 2);
  client(Modulo(), 1, 2);
}
