import 'circle.dart';
import 'compound_graphic.dart';
import 'dot.dart';
import 'graphic.dart';

class ImageEditor {
  List<Graphic> all;

  ImageEditor() {
    all = [];
  }

  void load() {
    all = CompoundGraphic().children;
    all.add(Dot(32, 423));
    all.add(Circle(43, 2323, 556555));
    draw();
  }

  void draw() {
    all.forEach((v) {
      v.draw();
    });
  }

  void graphicSelected(List<Graphic> components) {
    final group = CompoundGraphic().children;
    components.forEach((v) {
      group.add(v);
      all.remove(v);
    });
    all.addAll(group);
    draw();
  }
}
