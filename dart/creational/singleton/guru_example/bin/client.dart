import 'singleton.dart';

void client() {
  final s1 = Singleton.getInstance();
  final s2 = Singleton.getInstance();
  print('s1 == s2, ${s1 == s2}');
}
