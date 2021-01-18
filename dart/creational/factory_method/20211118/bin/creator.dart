import './product.dart';

abstract class Creator {
  void operation () {
    Product product = create();
    product.methodA();
    product.methodB();
  }
  Product create();
}
