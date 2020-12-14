import './bin/abstraction.dart';
import './bin/client.dart';
import './bin/concrete_implementation_a.dart';
import './bin/concrete_implementation_b.dart';
import './bin/extended_abstraction.dart';
import './bin/implementation.dart';

void main() {
  Implementation implementation = ConcreteImplementationA();
  Abstraction abstraction = Abstraction(implementation);
  client(abstraction);

  print('');

  implementation = ConcreteImplementationB();
  abstraction = ExtendedAbstraction(implementation);
  client(abstraction);
}
