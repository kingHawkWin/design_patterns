import 'observer.dart';

abstract class Subject {
  void attach(Observer o);
  void detach(Observer o);
  void notify();
}
