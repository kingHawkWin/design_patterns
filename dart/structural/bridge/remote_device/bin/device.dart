abstract class Device {
  bool isEnabled();
  bool enable();
  bool disable();
  int getVolume();
  int setVolume(int volume);
  int getChannel();
  int setChannel(int channel);
}
