import {Device} from "./device";

export class Tv implements Device {
  able: boolean
  volume: number
  channel: number

  constructor() {
    this.able = Math.random() < 0.5 ? true : false
    this.volume = Math.round(Math.random() * 100)
    this.channel = Math.round(Math.random() * 100)
  }


  disable(): boolean {
    return false;
  }

  enable(): boolean {
    return true;
  }

  getChannel(): number {
    return this.channel;
  }

  getVolume(): number {
    return this.volume;
  }

  isEnabled(): boolean {
    return this.able;
  }

  setChannel(channel: number): number {
    this.channel = channel
    return this.channel;
  }

  setVolume(percent: number): number {
    this.volume = percent
    return this.volume;
  }

}
