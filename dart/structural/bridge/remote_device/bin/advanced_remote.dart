import './remote.dart';
import 'device.dart';

class AdvancedRemote extends Remote {
  AdvancedRemote(Device device) : super(device);

  int mute() {
    device.setVolume(0);
    return device.getVolume();
  }
}
