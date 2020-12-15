import 'component.dart';

class Decorator implements Component {
  Component component;

  Decorator(Component componentValue) {
    component = componentValue;
  }

  @override
  String operation() {
    return component.operation();
  }
}
