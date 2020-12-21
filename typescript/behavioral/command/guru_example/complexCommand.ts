import {Command} from "./command";
import {Receiver} from "./receiver";

export class ComplexCommand implements Command {
  private receiver: Receiver
  private a: string
  private b: string

  constructor(receiver: Receiver, a: string, b: string) {
    this.receiver = receiver
    this.a = a
    this.b = b
  }

  public execute() {
    console.log('ComplexCommand')
    this.receiver.doA(this.a)
    this.receiver.doB(this.b)
  }
}
