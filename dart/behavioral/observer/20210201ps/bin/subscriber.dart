import 'publisher.dart';

abstract class Subscriber {
  void update(Publisher p);
}
