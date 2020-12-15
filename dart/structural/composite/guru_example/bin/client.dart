import 'component.dart';

void client1(Component component) {
  print('RESULT: ${component.operation()}');
}

void client2(Component component1, Component component2) {
  if (component1.isComposite()) {
    component1.add(component2);
  }
  print('RESULT: ${component1.operation()}');
}
