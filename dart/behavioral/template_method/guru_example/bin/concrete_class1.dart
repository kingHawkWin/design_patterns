import 'abstract_class.dart';

class ConcreteClass1 extends AbstractClass {
  @override
  void requiredOperation1() {
    print('ConcreteClass1: requiredOperation1.');
  }

  @override
  void requiredOperation2() {
    print('ConcreteClass2: requiredOperation2.');
  }
}
