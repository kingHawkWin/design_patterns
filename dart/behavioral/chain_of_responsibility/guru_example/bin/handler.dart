abstract class Handler {
  Handler setNext(Handler handler);
  String handle(String request);
}
