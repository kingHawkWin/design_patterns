import 'bin/concrete_strategy_a.dart';
import 'bin/concrete_strategy_b.dart';
import 'bin/context.dart';

void main() {
  final context = Context(ConcreteStrategyA());
  print(context.bloc());

  print('');

  context.setStrategy(ConcreteStrategyB());
  print(context.bloc());
}
