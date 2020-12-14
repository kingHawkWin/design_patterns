import './device.dart';

class Remote {
  final Device device;

  Remote(this.device);

  bool togglePower() {
    if (device.isEnabled()) {
      device.disable();
    } else {
      device.enable();
    }
    return device.isEnabled();
  }

  int volumeDown() {
    int volume = device.getVolume();
    if (volume >= 10) {
      device.setVolume(volume - 10);
    }
    return device.getVolume();
  }

  int volumeUp() {
    int volume = device.getVolume();
    if (volume <= 90) {
      device.setVolume(volume + 10);
    }
    return device.getVolume();
  }

  int channelDown() {
    int channel = device.getChannel();
    if (channel >= 1) {
      device.setChannel(channel - 1);
    }
    return device.getChannel();
  }

  int channelUp() {
    int channel = device.getChannel();
    if (channel <= 99) {
      device.setChannel(channel + 1);
    }
    return device.getChannel();
  }
}
