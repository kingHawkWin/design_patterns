import 'handler.dart';

void client(Handler handler) {
  const foods = ['Banana', 'Nut', 'Shit'];

  for (String food in foods) {
    print('Client: Who wants a $food ?');

    final result = handler.handle(food);
    if (result != null) {
      print('  $result}');
    } else {
      print('  $food wat left untouched');
    }
  }
}
