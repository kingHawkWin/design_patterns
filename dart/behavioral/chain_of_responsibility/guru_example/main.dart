import 'bin/client.dart';
import 'bin/dog_handler.dart';
import 'bin/monkey_handler.dart';
import 'bin/squirrel_handler.dart';

void main() {
  final monkeyHandler = MonkeyHandler();
  final squirrelHandler = SquirrelHandler();
  final dogHandler = DogHandler();
  monkeyHandler.setNext(squirrelHandler).setNext(dogHandler);

  print('Chain: Monkey > Squirrel > Dog\n');
  client(monkeyHandler);
  print('');

  print('SubChain: Squirrel > Dog\n');
  client(squirrelHandler);
  print('');
}
