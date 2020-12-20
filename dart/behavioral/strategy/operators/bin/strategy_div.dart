import 'strategy.dart';

class StrategyDiv implements Strategy {
  @override
  double execute(double a, double b) {
    print('a / b = ${a / b}');
    return a / b;
  }
}
