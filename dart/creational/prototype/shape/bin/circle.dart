import 'shape.dart';

class Circle extends Shape {
  int radius;

  Circle(this.radius);

  Circle.copy({Circle source}) : super.copy(source: source) {
    radius = source.radius;
  }

  @override
  Circle clone() {
    return Circle.copy(source: this);
  }
}
