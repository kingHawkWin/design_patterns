import 'circle.dart';
import 'rectangle.dart';

void client() {
  var rectangle = Rectangle(100, 100);
  var rectangleCloned = rectangle.clone();

  var circle = Circle(200);
  circle.x = 10;
  circle.y = 10;
  circle.color = 0xff009fab;
  var circleClone = circle.clone();

  print(
      'rectangle: x = ${rectangle.x}, y = ${rectangle.y}, color = ${rectangle.color}, width = ${rectangle.width}, height = ${rectangle.height}');
  print(
      'rectangleCloned: x = ${rectangleCloned.x}, y = ${rectangleCloned.y}, color = ${rectangleCloned.color}, width = ${rectangleCloned.width}, height = ${rectangleCloned.height}, rectangle == rectangleCloned = ${rectangle == rectangleCloned}');
  print(
      'circle: x = ${circle.x}, y = ${circle.y}, color = ${circle.color}, radius = ${circle.radius}');
  print(
      'circleClone: x = ${circleClone.x}, y = ${circleClone.y}, color = ${circleClone.color}, radius = ${circleClone.radius}, circle == circleClone = ${circle == circleClone}');
}
