import './builder.dart';
import './house.dart';

class Palace implements Builder {
  House _house;

  Palace() {
    reset();
  }

  void reset() {
    _house = House();
  }

  @override
  void buildWindow() {
    _house.window = 'diamond';
  }

  @override
  void buildDoor() {
    _house.door = 'gold';
  }

  @override
  void buildFloor() {
    _house.floor = 'gold';
  }

  House getProduct() {
    final result = _house;
    reset();
    return result;
  }
}
