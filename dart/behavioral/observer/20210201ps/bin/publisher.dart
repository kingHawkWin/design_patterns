import 'subscriber.dart';

class Publisher {
  List<Subscriber> _subscribers = [];

  void subscribe(Subscriber s) {
    _subscribers.add(s);
  }

  void unsubscribe(Subscriber s) {
    _subscribers.remove(s);
  }

  void notify() {
    _subscribers.forEach((v) {
      v.update(this);
    });
  }
}
