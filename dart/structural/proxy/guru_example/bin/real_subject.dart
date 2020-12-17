import 'subject.dart';

class RealSubject implements Subject {
  @override
  void request() {
    print('RealSubject: Handling request.');
  }
}
