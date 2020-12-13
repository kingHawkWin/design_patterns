import 'prototype.dart';

class Shape implements Prototype {
  int x = 0;
  int y = 0;
  int color = 0xffffffff;

  Shape();

  Shape.copy({Shape source}) {
    print(source);
    x = source.x;
    y = source.y;
    color = source.color;
  }

  @override
  Shape clone() {
    return Shape.copy(source: this);
  }
}
