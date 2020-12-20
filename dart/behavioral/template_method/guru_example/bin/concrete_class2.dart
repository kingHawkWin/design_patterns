import 'abstract_class.dart';

class ConcreteClass2 extends AbstractClass {
  @override
  void requiredOperation1() {
    print('ConcreteClass2: requiredOperation1.');
  }

  @override
  void requiredOperation2() {
    print('ConcreteClass2: requiredOperation2.');
  }

  @override
  void hook1() {
    print('ConcreteClass2: hook1.');
  }
}
