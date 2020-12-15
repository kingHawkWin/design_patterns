import 'component.dart';
import 'decorator.dart';

class ConcreteDecoratorA extends Decorator {
  ConcreteDecoratorA(Component componentValue) : super(componentValue);

  @override
  String operation() {
    return 'ConcreteDecoratorA(${super.operation()})';
  }
}
