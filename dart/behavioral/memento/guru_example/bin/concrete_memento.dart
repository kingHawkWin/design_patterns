import 'memento.dart';

class ConcreteMemento implements Memento {
  String _state;
  String _date;

  ConcreteMemento(String state) {
    _state = state;
    var date = DateTime.now();
    _date =
        '${date.year}-${date.month + 1}-${date.day} ${date.hour}:${date.minute}:${date.second}.${date.millisecond}';
  }

  @override
  String getDate() {
    return _date;
  }

  @override
  String getName() {
    return '$_date / ${_state.substring(0, 9)}...';
  }

  @override
  String getState() {
    return _state;
  }
}
