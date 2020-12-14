import './implementation.dart';

class Abstraction {
  final Implementation implementation;

  Abstraction(this.implementation);

  String operation() {
    final result = implementation.operationImplementation();
    return 'Abstraction: Base operation with:\n${result}';
  }
}
