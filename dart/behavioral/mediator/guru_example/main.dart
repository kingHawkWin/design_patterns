import 'bin/component1.dart';
import 'bin/component2.dart';
import 'bin/concrete_mediator.dart';

void main() {
  final c1 = Component1();
  final c2 = Component2();
  ConcreteMediator(c1, c2);

  c1.doA();
  c2.doD();
}
