import 'subject.dart';

class Proxy implements Subject {
  Subject _realSubject;

  Proxy(Subject realSubject) {
    _realSubject = realSubject;
  }

  bool _checkAccess() {
    print('Proxy: Checking access prior to firing a real request.');
    return true;
  }

  void _logAccess() {
    print('Proxy: Logging the time of request.');
  }

  @override
  void request() {
    if (_checkAccess()) {
      _realSubject.request();
      _logAccess();
    }
  }
}
