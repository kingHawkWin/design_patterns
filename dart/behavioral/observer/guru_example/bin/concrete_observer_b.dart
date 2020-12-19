import 'concrete_subject.dart';
import 'observer.dart';
import 'subject.dart';

class ConcreteObserverB implements Observer {
  @override
  void update(Subject subject) {
    if (subject is ConcreteSubject &&
        (subject.state == 2 || subject.state == 4 || subject.state == 8)) {
      print('ConcreteObserverB');
    }
  }
}
