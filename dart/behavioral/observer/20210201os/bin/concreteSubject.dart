import 'observer.dart';
import 'subject.dart';

class ConcreteSubject implements Subject {
  List<Observer> _observer = [];

  @override
  void attach(Observer o) {
    _observer.add(o);
  }

  @override
  void detach(Observer o) {
    _observer.remove(o);
  }

  @override
  void notify() {
    _observer.forEach((v) {
      v.update(this);
    });
  }
}
