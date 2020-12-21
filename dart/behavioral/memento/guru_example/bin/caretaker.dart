import 'memento.dart';
import 'originator.dart';

class Caretaker {
  List<Memento> _mementos = [];
  Originator _originator;

  Caretaker(Originator o) {
    _originator = o;
  }

  void backup() {
    print('Caretaker backup.');
    _mementos.add(_originator.save());
  }

  void undo() {
    if (_mementos.isEmpty) {
      return;
    }

    final memento = _mementos.removeAt(0);
    print('Caretaker undo state = ${memento.getState()}');
    _originator.restore(memento);
  }

  void showHistory() {
    print('Caretaker showHistory.');
    for (var memento in _mementos) {
      print(memento.getName());
    }
  }
}
