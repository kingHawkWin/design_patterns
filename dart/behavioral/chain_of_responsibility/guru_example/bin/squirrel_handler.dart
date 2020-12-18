import 'abstract_handler.dart';

class SquirrelHandler extends AbstractHandler {
  @override
  String handle(String request) {
    if (request == 'Nut') {
      return 'Squirrel: I\'ll eat the $request';
    }
    return super.handle(request);
  }
}
