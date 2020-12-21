import 'bin/caretaker.dart';
import 'bin/originator.dart';

void main() {
  final originator = Originator('o-r-i-g-i-n-a-t-o-r');
  final caretaker = Caretaker(originator);

  caretaker.backup();
  originator.doSomething();

  caretaker.backup();
  originator.doSomething();

  caretaker.backup();
  originator.doSomething();

  print('');
  caretaker.showHistory();

  print('*** rollback ****');
  caretaker.undo();

  print('**** rollback ****');
  caretaker.undo();

  caretaker.showHistory();
}
