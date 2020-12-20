import 'strategy.dart';

class StrategyAdd implements Strategy {
  @override
  double execute(double a, double b) {
    print('a + b = ${a + b}');
    return a + b;
  }
}
