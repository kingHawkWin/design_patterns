import './abstractFactory.dart';
import 'productGradeA.dart';
import 'productGradeZ.dart';
import 'concreteProductA1.dart';
import 'concreteProductZ1.dart';

class ConcreteFactory1 implements AbstractFactory {
  @override
  ProductGradeA createProductFamilyA() {
    return ConcreteProductA1();
  }

  @override
  ProductGradeZ createProductFamilyZ() {
    return ConcreteProductZ1();
  }
}
