import 'concrete_component_a.dart';
import 'concrete_component_b.dart';

abstract class Visitor {
  void visitConcreteComponentA(ConcreteComponentA element);
  void visitConcreteComponentB(ConcreteComponentB element);
}
