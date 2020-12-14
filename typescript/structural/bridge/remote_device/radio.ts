import {Device} from "./device";

export class Radio implements Device {
  able: boolean
  volume: number
  channel: number

  constructor() {
    this.able = Math.random() < 0.2 ? true : false
    this.volume = Math.round(Math.random() * 100)
    this.channel = Math.round(Math.random() * 100)
  }

  disable(): boolean {
    this.able = false;
    return this.able;
  }

  enable(): boolean {
    this.able = true;
    return this.able;
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
