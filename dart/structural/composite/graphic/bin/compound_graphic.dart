import './graphic.dart';

class CompoundGraphic implements Graphic {
  List<Graphic> children;

  CompoundGraphic() {
    children = [];
  }

  void add(Graphic child) {
    children.add(child);
  }

  void remove(Graphic child) {
    children.remove(child);
  }

  @override
  void draw() {
    children.forEach((v) {
      v.draw();
    });
  }

  @override
  void move(int x, int y) {
    children.forEach((v) {
      v.move(x, y);
    });
  }
}
