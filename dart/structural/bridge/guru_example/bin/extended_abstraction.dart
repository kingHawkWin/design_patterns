import './abstraction.dart';
import 'implementation.dart';

class ExtendedAbstraction extends Abstraction {
  ExtendedAbstraction(Implementation implementation) : super(implementation);

  @override
  String operation() {
    final result = implementation.operationImplementation();
    return 'ExtendedAbstraction: Extended operation with: \n${result}';
  }
}
