import 'bin/concrete_observer_a.dart';
import 'bin/concrete_observer_b.dart';
import 'bin/concrete_subject.dart';

void main() {
  final concreteSubject = ConcreteSubject();
  final concreteObserverA = ConcreteObserverA();
  final concreteObserverB = ConcreteObserverB();

  concreteSubject.attach(concreteObserverA);
  concreteSubject.attach(concreteObserverB);
  concreteSubject.detach(concreteObserverA);
  concreteSubject.attach(concreteObserverA);

  concreteSubject.bloc();
  concreteSubject.bloc();
  concreteSubject.bloc();
}
