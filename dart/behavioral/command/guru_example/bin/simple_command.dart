import 'command.dart';

class SimpleCommand implements Command {
  String _payload;

  SimpleCommand(String s) {
    _payload = s;
  }

  @override
  void execute() {
    print('SimpleCommand: payload = $_payload');
  }
}
