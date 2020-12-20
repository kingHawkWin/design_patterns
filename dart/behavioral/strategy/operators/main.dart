import 'bin/context.dart';
import 'bin/strategy_add.dart';
import 'bin/strategy_div.dart';
import 'bin/strategy_mul.dart';
import 'bin/strategy_sub.dart';

void main() {
  final context = Context(StrategyAdd());
  context.operation(3, 4);
  context.setStrategy(StrategySub());
  context.operation(3, 4);
  context.setStrategy(StrategyMul());
  context.operation(3, 4);
  context.setStrategy(StrategyDiv());
  context.operation(3, 4);
}
