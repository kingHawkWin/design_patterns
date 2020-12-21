import 'flyweight_factory.dart';

void addCarToPoliceDb(
  FlyweightFactory ff,
  String plates,
  String owner,
  String brand,
  String model,
  String color,
) {
  print(
      '$plates - $owner - $brand - $model - $color has been add to police db.');
  final flyweight = ff.getFlyweight([brand, model, color]);
  flyweight.operation([plates, owner]);
}
