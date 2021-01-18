import './creator.dart';
import './concreteProductA.dart';

class ConcreteCreatorA extends Creator {
  @override
  create () {
    return new ConcreteProductA();
  }
}
