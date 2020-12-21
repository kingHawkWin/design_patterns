import {Invoker} from "./invoker";
import {SimpleCommand} from "./simpleCommand";
import {Receiver} from "./receiver";
import {ComplexCommand} from "./complexCommand";

const invoker = new Invoker()
invoker.setOnStart(new SimpleCommand('simpleCommand xxxx'))
const receiver = new Receiver()
invoker.setOnEnd(new ComplexCommand(receiver, 'aaa', 'bbb'))
invoker.do()
