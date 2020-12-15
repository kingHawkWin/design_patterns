import './bin/circle.dart';
import './bin/compound_graphic.dart';
import './bin/dot.dart';
import './bin/image_editor.dart';

void main() {
  final imageEditor = ImageEditor();
  imageEditor.load();
  print('----');
  final components = CompoundGraphic().children;
  components.add(Dot(43, 22222));
  components.add(Circle(444, 333, 232323));
  imageEditor.graphicSelected(components);
  print('----');
  components.add(Dot(55, 333333));
  components.add(Circle(434343, 232323, 111111));
  imageEditor.graphicSelected(components);
}
