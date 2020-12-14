import './implementation.dart';

class ConcreteImplementationB implements Implementation {
  @override
  String operationImplementation() {
    return 'ConcreteImplementationB: Here\'s the result on the platform B.';
  }
}
