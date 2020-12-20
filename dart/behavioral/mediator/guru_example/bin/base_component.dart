import 'mediator.dart';

class BaseComponent {
  Mediator mediator;

  BaseComponent({Mediator m}) {
    mediator = m;
  }

  void setMediator(Mediator m) {
    mediator = m;
  }
}
