import 'component.dart';
import 'visitor.dart';

void client(List<Component> components, Visitor visitor) {
  for (var component in components) {
    component.accept(visitor);
  }
}
