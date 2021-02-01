import 'subject.dart';
import 'observer.dart';

class ConcreteObserver1 implements Observer {
  @override
  void update(Subject s) {
    print('ConcreteObserver1');
  }
}
