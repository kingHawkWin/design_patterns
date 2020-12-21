import 'state.dart';

class Context {
  State _state;

  Context(State s) {
    transitionTo(s);
  }

  void transitionTo(State s) {
    _state = s;
    _state.setContext(this);
  }

  void require1() {
    _state.handle1();
  }

  void require2() {
    _state.handle2();
  }
}
