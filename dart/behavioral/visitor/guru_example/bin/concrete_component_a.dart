import 'component.dart';
import 'visitor.dart';

class ConcreteComponentA implements Component {
  @override
  void accept(Visitor visitor) {
    visitor.visitConcreteComponentA(this);
  }

  String a() {
    return 'ConcreteComponentA: a.';
  }
}
