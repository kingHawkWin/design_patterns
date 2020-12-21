import 'command.dart';

class Invoker {
  Command _onStart;
  Command _onEnd;

  void setOnStart(Command c) {
    _onStart = c;
  }

  void setOnEnd(Command c) {
    _onEnd = c;
  }

  bool isCommand(Command o) {
    return o.execute != null;
  }

  void doIt() {
    print('Invoker');
    if (isCommand(_onStart)) {
      _onStart.execute();
    }
    if (isCommand(_onEnd)) {
      _onEnd.execute();
    }
  }
}
