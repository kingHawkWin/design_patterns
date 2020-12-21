import 'bin/complex_command.dart';
import 'bin/invoker.dart';
import 'bin/receiver.dart';
import 'bin/simple_command.dart';

void main() {
  final invoker = Invoker();
  invoker.setOnStart(SimpleCommand('simpleCommand xxxx'));
  final receiver = Receiver();
  invoker.setOnEnd(ComplexCommand(receiver, 'aaa', 'bbb'));
  invoker.doIt();
}
