import 'abstract_handler.dart';

class DogHandler extends AbstractHandler {
  @override
  String handle(String request) {
    if (request == 'MeatBall') {
      return 'Dog: I\'ll eat the $request';
    }
    return super.handle(request);
  }
}
