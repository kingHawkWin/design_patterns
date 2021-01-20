import 'productGradeA.dart';
import 'productGradeZ.dart';
import 'concreteFactory1.dart';
import 'concreteFactoryN.dart';
import 'concreteProductA1.dart';

class Client {
  ProductGradeA _productGradeA;
  ProductGradeZ _productGradeZ;

  void productFamily1 () {
    ConcreteFactory1().createProductFamilyA().gradeA();
    ConcreteFactory1().createProductFamilyZ().gradeZ();
  }

  void productFamilyN () {
    ConcreteFactoryN().createProductFamilyA().gradeA();
    ConcreteFactoryN().createProductFamilyZ().gradeZ();
  }

  void productA1 () {
    _productGradeA = ConcreteProductA1();
    _productGradeA.gradeA();
  }
}
