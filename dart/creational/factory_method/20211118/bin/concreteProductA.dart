import './product.dart';

class ConcreteProductA implements Product {
  @override
  void methodA() {
    print('ConcreteProductA methodA');
  }

  @override
  void methodB() {
    print('ConcreteProductA methodB');
  }
}
