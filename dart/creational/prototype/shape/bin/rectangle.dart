import 'shape.dart';

class Rectangle extends Shape {
  int width;
  int height;

  Rectangle(this.width, this.height);

  Rectangle.copy({Rectangle source}) : super.copy(source: source) {
    width = source.width;
    height = source.height;
  }

  @override
  Rectangle clone() {
    return Rectangle.copy(source: this);
  }
}
