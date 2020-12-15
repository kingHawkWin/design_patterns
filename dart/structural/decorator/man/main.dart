import 'bin/normal.dart';
import 'bin/winter.dart';
import 'bin/iron.dart';
import 'bin/client.dart';

void main() {
  final normalMan = Normal(188, 84, 'female');
  client(normalMan);
  print('');

  final winterMan = Winter(normalMan);
  client(winterMan);
  print('');

  final IronMan = Iron(normalMan);
  client(IronMan);
  print('');

  final winterIronMan = Iron(winterMan);
  client(winterIronMan);
}
