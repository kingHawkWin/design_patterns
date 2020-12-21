import 'context.dart';

abstract class State {
  Context context;

  void setContext(Context c) {
    context = c;
  }

  void handle1();
  void handle2();
}
