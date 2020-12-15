abstract class Component {
  Component parent;

  void setParent(Component component) {
    parent = component;
  }

  Component getParent() {
    return parent;
  }

  void add(Component component) {}

  void remove(Component component) {}

  bool isComposite() {
    return false;
  }

  String operation();
}
