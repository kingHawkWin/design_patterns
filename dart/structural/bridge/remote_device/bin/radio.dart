import 'dart:math';

import './device.dart';

class Radio implements Device {
  bool able;
  int volume;
  int channel;

  Radio() {
    Random rand = Random();
    able = rand.nextBool();
    volume = rand.nextInt(100);
    channel = rand.nextInt(100);
  }

  @override
  bool disable() {
    able = false;
    return able;
  }

  @override
  bool enable() {
    able = true;
    return able;
  }

  @override
  int getChannel() {
    return channel;
  }

  @override
  int getVolume() {
    return volume;
  }

  @override
  bool isEnabled() {
    return able;
  }

  @override
  int setChannel(int channelValue) {
    channel = channelValue;
    return channel;
  }

  @override
  int setVolume(int volumeValue) {
    volume = volumeValue;
    return volume;
  }
}
