import 'concrete_subject.dart';
import 'observer.dart';
import 'subject.dart';

class ConcreteObserverA implements Observer {
  @override
  void update(Subject subject) {
    if (subject is ConcreteSubject &&
        (subject.state < 2 || subject.state > 7)) {
      print('ConcreteObserverA');
    }
  }
}
