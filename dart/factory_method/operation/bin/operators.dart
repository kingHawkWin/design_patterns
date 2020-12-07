abstract class Operators {
  double operate(double a, double b);
}

class Add implements Operators {
  @override
  double operate(double a, double b) {
    print(a + b);
    return a + b;
  }
}

class Sub implements Operators {
  @override
  double operate(double a, double b) {
    print(a - b);
    return a - b;
  }
}

class Mul implements Operators {
  @override
  double operate(double a, double b) {
    print(a * b);
    return a * b;
  }
}

class Div implements Operators {
  @override
  double operate(double a, double b) {
    print(a / b);
    return a / b;
  }
}

class Mod implements Operators {
  @override
  double operate(double a, double b) {
    print(a % b);
    return a % b;
  }
}
