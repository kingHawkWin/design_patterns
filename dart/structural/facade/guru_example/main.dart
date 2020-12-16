import 'bin/client.dart';
import 'bin/facade.dart';
import 'bin/subsystem1.dart';
import 'bin/subsystem2.dart';

void main() {
  final subsystem1 = Subsystem1();
  final subsystem2 = Subsystem2();
  final facade = Facade(subsystem1: subsystem1, subsystem2: subsystem2);
  client(facade);
}
