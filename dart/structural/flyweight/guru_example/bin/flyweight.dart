import 'dart:convert';

class Flyweight {
  dynamic _sharedState;

  Flyweight(dynamic ss) {
    _sharedState = ss;
  }

  void operation(dynamic uniqueState) {
    final s = jsonEncode(_sharedState);
    final u = jsonEncode(uniqueState);
    print('Flyweight:\n  shared state = $s\n  unique state = $u');
  }
}
