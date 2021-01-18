import './product.dart';

class ConcreteProductB implements Product {
  @override
  void methodA() {
    print('ConcreteProductB methodA');
  }

  @override
  void methodB() {
    print('ConcreteProductB methodB');
  }
}
