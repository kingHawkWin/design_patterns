import './graphic.dart';

class Dot implements Graphic {
  int x;
  int y;

  Dot(int xValue, int yValue) {
    x = xValue;
    y = yValue;
  }

  @override
  void draw() {
    print('DOT: x = $x, y = $y');
  }

  @override
  void move(int xValue, int yValue) {
    x += xValue;
    y += yValue;
  }
}
