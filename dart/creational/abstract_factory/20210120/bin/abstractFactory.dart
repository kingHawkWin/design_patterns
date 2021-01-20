import './productGradeA.dart';
import './productGradeZ.dart';

abstract class AbstractFactory {
  ProductGradeA createProductFamilyA();
  ProductGradeZ createProductFamilyZ();
}
