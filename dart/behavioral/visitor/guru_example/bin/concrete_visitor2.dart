import 'concrete_component_a.dart';
import 'concrete_component_b.dart';
import 'visitor.dart';

class ConcreteVisitor2 implements Visitor {
  @override
  void visitConcreteComponentA(ConcreteComponentA element) {
    print('ConcreteVisitor2: visitConcreteComponentA ${element.a()}.');
  }

  @override
  void visitConcreteComponentB(ConcreteComponentB element) {
    print('ConcreteVisitor2: visitConcreteComponentB ${element.b()}.');
  }
}
