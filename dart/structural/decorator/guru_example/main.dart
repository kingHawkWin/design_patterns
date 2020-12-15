import 'bin/client.dart';
import 'bin/concrete_component.dart';
import 'bin/concrete_decorator_a.dart';
import 'bin/concrete_decorator_b.dart';

void main() {
  final simple = ConcreteComponent();
  print('Client: I\'ve got a simple component:');
  client(simple);
  print('');

  final decoratorA = ConcreteDecoratorA(simple);
  final decoratorB = ConcreteDecoratorB(decoratorA);
  print('Client: Now I\'ve got a decorated component:');
  client(decoratorB);
}
