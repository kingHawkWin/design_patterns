import 'bin/publisher.dart';
import 'bin/concreteSubscriber.dart';

void main() {
  final publisher = Publisher();
  final s1 = ConcreteSubscriber();
  final s2 = ConcreteSubscriber();
  publisher.subscribe(s1);
  publisher.subscribe(s2);
  publisher.notify();
  publisher.unsubscribe(s1);
  publisher.notify();
}
