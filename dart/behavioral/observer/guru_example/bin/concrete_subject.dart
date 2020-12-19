import 'dart:math';

import 'observer.dart';
import 'subject.dart';

class ConcreteSubject implements Subject {
  int state;
  List<Observer> _observers = [];

  @override
  void attach(Observer observer) {
    if (!_observers.contains(observer)) {
      _observers.add(observer);
      print('ConcreteSubject: new observer attached.');
    }
    print('ConcreteSubject: observer already attached.');
  }

  @override
  void detach(Observer observer) {
    if (_observers.contains(observer)) {
      _observers.remove(_observers);
      print('ConcreteSubject: observer detached.');
    }
    print('ConcreteSubject: observer does not exist.');
  }

  @override
  void notify() {
    for (var observer in _observers) {
      observer.update(this);
    }
  }

  void bloc() {
    Random rand = Random();
    state = rand.nextInt(10);
    print('ConcreteSubject: state is $state');
    notify();
  }
}
