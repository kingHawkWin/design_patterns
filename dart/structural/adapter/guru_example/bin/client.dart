import './adaptee.dart';
import './adapter.dart';
import './target.dart';

void client() {
  final targetResult = Target().request();
  final adapteeResult = Adaptee().specificRequest();
  final adapterResult = Adapter(Adaptee()).request();

  print('targetResult == adapteeResult, ${targetResult == adapteeResult}');
  print('targetResult == adapterResult, ${targetResult == adapterResult}');
}
