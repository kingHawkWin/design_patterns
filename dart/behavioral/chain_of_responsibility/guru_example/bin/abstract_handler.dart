import 'handler.dart';

class AbstractHandler implements Handler {
  Handler _nextHandler;

  @override
  Handler setNext(Handler handler) {
    _nextHandler = handler;
    return handler;
  }

  @override
  String handle(String request) {
    if (_nextHandler != null) {
      return _nextHandler.handle(request);
    }
    return null;
  }
}
