import 'strategy.dart';

class Context {
  Strategy _strategy;

  Context(Strategy s) {
    _strategy = s;
  }

  void setStrategy(Strategy s) {
    _strategy = s;
  }

  double operation(double a, double b) {
    return _strategy.execute(a, b);
  }
}
