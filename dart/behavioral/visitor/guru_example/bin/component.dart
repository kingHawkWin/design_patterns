import 'visitor.dart';

abstract class Component {
  void accept(Visitor visitor);
}
