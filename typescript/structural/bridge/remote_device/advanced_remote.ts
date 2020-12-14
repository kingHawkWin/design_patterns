import {Remote} from "./remote";

export class AdvancedRemote extends Remote {
  mute() {
    this.device.setVolume(0)
    return this.device.getVolume()
  }
}
