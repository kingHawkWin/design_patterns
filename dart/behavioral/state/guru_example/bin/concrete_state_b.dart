import 'concrete_state_a.dart';
import 'state.dart';

class ConcreteStateB extends State {
  @override
  void handle1() {
    print('ConcreteStateB handle1.');
  }

  @override
  void handle2() {
    print('ConcreteStateB handle2, transitionTo ConcreteStateA.');
    context.transitionTo(ConcreteStateA());
  }
}
