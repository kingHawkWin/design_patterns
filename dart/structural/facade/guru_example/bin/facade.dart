import 'subsystem1.dart';
import 'subsystem2.dart';

class Facade {
  Subsystem1 _subsystem1;
  Subsystem2 _subsystem2;

  Facade({Subsystem1 subsystem1 = null, Subsystem2 subsystem2 = null}) {
    _subsystem1 = subsystem1;
    _subsystem2 = subsystem2;
  }

  String operation() {
    String result = 'Facade initializes subsystems:\n';
    result += _subsystem1.operation1();
    result += _subsystem2.operationZ();
    result += 'Facade orders subsystems to perform the action:\n';
    result += _subsystem1.operation1();
    result += _subsystem2.operationZ();
    return result;
  }
}
