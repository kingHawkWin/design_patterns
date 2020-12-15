import 'component.dart';

class Composite extends Component {
  List<Component> children = [];

  @override
  void add(Component component) {
    children.add(component);
    component.setParent(this);
  }

  @override
  void remove(Component component) {
    children.remove(component);
    component.setParent(null);
  }

  @override
  bool isComposite() {
    return true;
  }

  @override
  String operation() {
    final results = [];
    for (Component child in children) {
      results.add(child.operation());
    }
    return 'Branch(${results.join('+')})';
  }
}
