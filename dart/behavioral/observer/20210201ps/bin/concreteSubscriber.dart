import 'dart:math';

import 'publisher.dart';
import 'subscriber.dart';

class ConcreteSubscriber implements Subscriber {
  int n = Random().nextInt(10);

  @override
  void update(Publisher p) {
    print(n);
  }

}
