import 'component.dart';
import 'decorator.dart';

class ConcreteDecoratorB extends Decorator {
  ConcreteDecoratorB(Component componentValue) : super(componentValue);

  @override
  String operation() {
    return 'ConcreteComponentB(${super.operation()})';
  }
}
