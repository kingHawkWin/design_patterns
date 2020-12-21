import {Command} from "./command";

export class SimpleCommand implements Command {
  private payload: string

  constructor(payload: string) {
    this.payload = payload
  }

  public execute() {
    console.log(`SimpleCommand: payload = ${this.payload}`)
  }
}
