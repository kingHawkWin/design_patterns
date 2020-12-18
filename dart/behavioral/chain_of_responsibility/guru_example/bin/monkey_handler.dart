import 'abstract_handler.dart';

class MonkeyHandler extends AbstractHandler {
  @override
  String handle(String request) {
    if (request == 'banana') {
      return 'Monkey: I\'ll eat the $request}';
    }
    return super.handle(request);
  }
}
