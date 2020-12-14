export interface Device {
  isEnabled(): boolean
  enable(): boolean
  disable(): boolean
  getVolume(): number
  setVolume(percent: number): number
  getChannel(): number
  setChannel(channel: number): number
}
