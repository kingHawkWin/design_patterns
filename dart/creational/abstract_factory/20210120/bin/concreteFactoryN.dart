import './abstractFactory.dart';
import 'productGradeA.dart';
import 'productGradeZ.dart';
import 'concreteProductAn.dart';
import 'concreteProductZn.dart';

class ConcreteFactoryN implements AbstractFactory {
  @override
  ProductGradeA createProductFamilyA() {
    return ConcreteProductAn();
  }

  @override
  ProductGradeZ createProductFamilyZ() {
    return ConcreteProductZn();
  }
}
