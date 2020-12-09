import 'operators.dart';

abstract class Operation {
  Operators operatorFactory();

  double createOperator(double a, double b) {
    return operatorFactory().operate(a, b);
  }
}

class Addition extends Operation {
  @override
  Operators operatorFactory() {
    return Add();
  }
}

class Subtraction extends Operation {
  @override
  Operators operatorFactory() {
    return Sub();
  }
}

class Multiplication extends Operation {
  @override
  Operators operatorFactory() {
    return Mul();
  }
}

class Division extends Operation {
  @override
  Operators operatorFactory() {
    return Div();
  }
}

class Modulo extends Operation {
  @override
  Operators operatorFactory() {
    return Mod();
  }
}
