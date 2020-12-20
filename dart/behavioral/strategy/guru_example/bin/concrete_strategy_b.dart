import 'strategy.dart';

class ConcreteStrategyB implements Strategy {
  @override
  List<String> doAlgorithm(List<String> data) {
    return data.reversed.toList();
  }
}
