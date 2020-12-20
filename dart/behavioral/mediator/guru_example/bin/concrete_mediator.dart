import 'component1.dart';
import 'component2.dart';
import 'mediator.dart';

class ConcreteMediator implements Mediator {
  Component1 _component1;
  Component2 _component2;

  ConcreteMediator(Component1 c1, Component2 c2) {
    _component1 = c1;
    c1.setMediator(this);
    _component2 = c2;
    c2.setMediator(this);
  }

  @override
  void notify(sender, String event) {
    if (event == 'A') {
      print('ConcreteMediator: A.');
      _component1.doB();
    }

    if (event == 'D') {
      print('ConcreteMediator: D.');
      _component1.doB();
      _component2.doC();
    }
  }
}
