import 'strategy.dart';

class ConcreteStrategyA implements Strategy {
  @override
  List<String> doAlgorithm(List<String> data) {
    data.sort((a, b) => a.compareTo(b));
    return data;
  }
}
