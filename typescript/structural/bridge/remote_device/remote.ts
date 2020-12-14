import {Device} from "./device";

export class Remote {
  device: Device;

  constructor(device: Device) {
    this.device = device
  }

  togglePower() {
    if (this.device.isEnabled()) {
      this.device.disable()
    } else {
      this.device.enable()
    }
    return this.device.isEnabled()
  }

  volumeDown() {
    const volume = this.device.getVolume()
    if (volume >= 10) {
      this.device.setVolume(volume - 10)
    }
    return this.device.getVolume()
  }

  volumeUp() {
    const volume = this.device.getVolume()
    if (volume <= 90) {
      this.device.setVolume(volume + 10)
    }
    return this.device.getVolume()
  }

  channelDown() {
    const channel = this.device.getChannel()
    if (channel > 1) {
      this.device.setChannel(channel - 1)
    }
    return this.device.getChannel()
  }

  channelUp() {
    const channel = this.device.getChannel()
    if (channel < 100) {
      this.device.setChannel(channel + 1)
    }
    return this.device.getChannel()
  }
}
