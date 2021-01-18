import './bin/concreteCreatorA.dart';
import './bin/concreteCreatorB.dart';
import './bin/client.dart';

void main () {
  client(ConcreteCreatorA());
  client(ConcreteCreatorB());
}
