import './implementation.dart';

class ConcreteImplementationA implements Implementation {
  @override
  String operationImplementation() {
    return 'ConcreteImplementationA: Here\'s the result on the platform A.';
  }
}
