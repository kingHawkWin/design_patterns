import './adaptee.dart';

class Adapter extends Adaptee {
  Adaptee _adaptee;

  Adapter(Adaptee adaptee) : super() {
    _adaptee = adaptee;
  }

  String request() {
    return _adaptee.specificRequest().split('').reversed.join('');
  }
}
