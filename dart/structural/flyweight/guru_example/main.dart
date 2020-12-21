import 'bin/add_to_police_db.dart';
import 'bin/flyweight_factory.dart';

void main() {
  final factory = FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'pink'],
    ['Mercedes Benz', 'C300', 'black'],
    ['Mercedes Benz', 'C500', 'red'],
    ['BMW', 'M5', 'red'],
    ['BMW', 'X6', 'white'],
  ]);
  factory.listFlyweights();

  addCarToPoliceDb(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red');
  addCarToPoliceDb(factory, 'Cl234IR', 'James Doe', 'BMW', 'X1', 'red');

  factory.listFlyweights();
}
