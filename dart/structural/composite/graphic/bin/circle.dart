import './dot.dart';

class Circle extends Dot {
  double radius;

  Circle(int x, int y, double radiusValue) : super(x, y) {
    radius = radiusValue;
  }

  @override
  void draw() {
    print('CIRCLE: x = $x, y = $y, radius = $radius');
  }
}
