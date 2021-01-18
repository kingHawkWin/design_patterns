import './creator.dart';
import './concreteProductB.dart';

class ConcreteCreatorB extends Creator {
  @override
  create () {
    return new ConcreteProductB();
  }
}
