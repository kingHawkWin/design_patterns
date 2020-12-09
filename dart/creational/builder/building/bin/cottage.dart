import './builder.dart';
import './house.dart';

class Cottage implements Builder {
  House _house;

  Cottage() {
    reset();
  }

  void reset() {
    _house = House();
  }

  @override
  void buildWindow() {
    _house.window = 'grass';
  }

  @override
  void buildDoor() {
    _house.door = 'grass';
  }

  @override
  void buildFloor() {
    _house.floor = 'grass';
  }

  House getProduct() {
    final result = _house;
    reset();
    return result;
  }
}
