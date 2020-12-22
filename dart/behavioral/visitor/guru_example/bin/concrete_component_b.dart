import 'component.dart';
import 'visitor.dart';

class ConcreteComponentB implements Component {
  @override
  void accept(Visitor visitor) {
    visitor.visitConcreteComponentB(this);
  }

  String b() {
    return 'ConcreteComponentB: b.';
  }
}
