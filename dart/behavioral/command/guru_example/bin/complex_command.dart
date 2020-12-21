import 'command.dart';
import 'receiver.dart';

class ComplexCommand implements Command {
  Receiver _receiver;
  String _a;
  String _b;

  ComplexCommand(Receiver r, String a, String b) {
    _receiver = r;
    _a = a;
    _b = b;
  }

  @override
  void execute() {
    print('ComplexCommand');
    _receiver.doA(_a);
    _receiver.doB(_b);
  }
}
