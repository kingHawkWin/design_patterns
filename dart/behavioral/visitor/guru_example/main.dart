import 'bin/client.dart';
import 'bin/concrete_component_a.dart';
import 'bin/concrete_component_b.dart';
import 'bin/concrete_visitor1.dart';
import 'bin/concrete_visitor2.dart';

void main() {
  final components = [
    ConcreteComponentA(),
    ConcreteComponentB(),
  ];

  final visitor1 = ConcreteVisitor1();
  client(components, visitor1);

  print('');

  final visitor2 = ConcreteVisitor2();
  client(components, visitor2);
}
