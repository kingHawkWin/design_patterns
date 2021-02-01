import 'bin/concreteObserver1.dart';
import 'bin/concreteObserver2.dart';
import 'bin/concreteSubject.dart';

void main() {
  final s = ConcreteSubject();
  final o1 = ConcreteObserver1();
  final o2 = ConcreteObserver2();
  s.attach(o1);
  s.attach(o2);
  s.notify();
  s.detach(o2);
  s.notify();
}
