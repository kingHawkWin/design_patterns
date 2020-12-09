import './builder.dart';
import './house.dart';

class Castle implements Builder {
  House _house;

  Castle() {
    reset();
  }

  void reset() {
    _house = House();
  }

  @override
  void buildWindow() {
    _house.window = 'shone';
  }

  @override
  void buildDoor() {
    _house.door = 'shone';
  }

  @override
  void buildFloor() {
    _house.floor = 'shone';
  }

  House getProduct() {
    final result = _house;
    reset();
    return result;
  }
}
