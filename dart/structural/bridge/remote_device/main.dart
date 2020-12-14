import './bin/advanced_remote.dart';
import './bin/radio.dart';
import './bin/remote.dart';
import './bin/tv.dart';

void main() {
  final tv = Tv();
  final radio = Radio();

  final remote = Remote(radio);
  final advancedRemote = AdvancedRemote(tv);

  print('---- radio start ----');
  print('toggle power, ${remote.togglePower()}');
  print('volume down, ${remote.volumeDown()}');
  print('volume down, ${remote.volumeDown()}');
  print('volume up, ${remote.volumeUp()}');
  print('volume up, ${remote.volumeUp()}');
  print('channel down, ${remote.channelDown()}');
  print('channel up, ${remote.channelUp()}');
  print('channel down, ${remote.channelDown()}');
  print('---- radio end ----');

  print('****');

  print('---- tv start ----');
  print('toggle power, ${advancedRemote.togglePower()}');
  print('volume down, ${advancedRemote.volumeDown()}');
  print('volume down, ${advancedRemote.volumeDown()}');
  print('mute, ${advancedRemote.mute()}');
  print('volume up, ${advancedRemote.volumeUp()}');
  print('volume up, ${advancedRemote.volumeUp()}');
  print('channel down, ${advancedRemote.channelDown()}');
  print('channel up, ${advancedRemote.channelUp()}');
  print('channel down, ${advancedRemote.channelDown()}');
  print('---- tv end ----');
}
