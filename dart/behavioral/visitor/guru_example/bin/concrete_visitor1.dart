import 'concrete_component_a.dart';
import 'concrete_component_b.dart';
import 'visitor.dart';

class ConcreteVisitor1 implements Visitor {
  @override
  void visitConcreteComponentA(ConcreteComponentA element) {
    print('ConcreteVisitor1: visitConcreteComponentA ${element.a()}.');
  }

  @override
  void visitConcreteComponentB(ConcreteComponentB element) {
    print('ConcreteVisitor1: visitConcreteComponentB ${element.b()}.');
  }
}
