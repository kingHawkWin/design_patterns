import 'base_component.dart';
import 'mediator.dart';

class Component1 extends BaseComponent {
  Component1({Mediator m}) : super();

  void doA() {
    print('Component1 doA.');
    mediator.notify(this, 'A');
  }

  void doB() {
    print('Component2 doB.');
    mediator.notify(this, 'B');
  }
}
