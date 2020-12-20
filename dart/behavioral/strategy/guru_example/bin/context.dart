import 'strategy.dart';

class Context {
  Strategy _strategy;

  Context(Strategy s) {
    _strategy = s;
  }

  void setStrategy(Strategy s) {
    _strategy = s;
  }

  List<String> bloc() {
    print('Context bloc');
    return _strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
  }
}
