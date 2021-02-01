import 'subject.dart';
import 'observer.dart';

class ConcreteObserver2 implements Observer {
  @override
  void update(Subject s) {
    print('ConcreteObserver2');
  }
}
