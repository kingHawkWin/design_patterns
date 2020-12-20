import 'base_component.dart';
import 'mediator.dart';

class Component2 extends BaseComponent {
  Component2({Mediator m}) : super();

  void doC() {
    print('Component2 doC.');
    mediator.notify(this, 'C');
  }

  void doD() {
    print('Component2 doD.');
    mediator.notify(this, 'D');
  }
}
