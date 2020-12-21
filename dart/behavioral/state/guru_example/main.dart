import 'bin/concrete_state_a.dart';
import 'bin/concrete_state_b.dart';
import 'bin/context.dart';

void main() {
  final context = Context(ConcreteStateA());
  context.require1();
  print('');
  context.transitionTo(ConcreteStateB());
  context.require2();
}
