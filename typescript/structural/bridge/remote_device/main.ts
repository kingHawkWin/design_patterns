import {Tv} from './tv'
import {Radio} from './radio'
import {Remote} from "./remote";
import {AdvancedRemote} from "./advanced_remote";

const tv = new Tv()
const radio = new Radio()

const remote = new Remote(radio)
const advancedRemote = new AdvancedRemote(tv)

console.log('---- radio start ----')
console.log('toggle power', remote.togglePower())
console.log('volume down', remote.volumeDown())
console.log('volume down', remote.volumeDown())
console.log('volume up', remote.volumeUp())
console.log('volume up', remote.volumeUp())
console.log('channel down', remote.channelDown())
console.log('channel down', remote.channelDown())
console.log('channel up', remote.channelUp())
console.log('---- radio end ----')

console.log()

console.log('---- tv start ----')
console.log('toggle power', advancedRemote.togglePower())
console.log('volume down', advancedRemote.volumeDown())
console.log('volume down', advancedRemote.volumeDown())
console.log('volume up', advancedRemote.volumeUp())
console.log('mute', advancedRemote.mute())
console.log('volume up', advancedRemote.volumeUp())
console.log('channel down', advancedRemote.channelDown())
console.log('channel down', advancedRemote.channelDown())
console.log('channel up', advancedRemote.channelUp())
console.log('---- tv end ----')
