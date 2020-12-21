import 'concrete_state_b.dart';
import 'state.dart';

class ConcreteStateA extends State {
  @override
  void handle1() {
    print('ConcreteStateA handle1, transitionTo ConcreteStateB.');
    context.transitionTo(ConcreteStateB());
  }

  @override
  void handle2() {
    print('ConcreteStateA handle2.');
  }
}
