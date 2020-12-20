import 'strategy.dart';

class StrategySub implements Strategy {
  @override
  double execute(double a, double b) {
    print('a - b = ${a - b}');
    return a - b;
  }
}
