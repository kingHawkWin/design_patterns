import 'dart:math';

import 'concrete_memento.dart';
import 'memento.dart';

class Originator {
  String _state;

  Originator(String s) {
    _state = s;
    print('Originator constructor state = $_state');
  }

  void doSomething() {
    _state = generateRandomString(30);
    print('Originator doSomething state = ${_state}');
  }

  String generateRandomString([int length = 10]) {
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    Random rand = Random();
    var arr = List(length);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = charSet[rand.nextInt(charSet.length)];
    }
    return arr.join('');
  }

  Memento save() {
    return ConcreteMemento(_state);
  }

  void restore(Memento memento) {
    _state = memento.getState();
    print('Originator restore state = $_state');
  }
}
