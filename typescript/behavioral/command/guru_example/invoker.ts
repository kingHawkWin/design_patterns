import {Command} from "./command";

export class Invoker {
  private onStart: Command
  private onEnd: Command

  public setOnStart(command: Command): void {
    this.onStart = command
  }

  public setOnEnd(command: Command): void {
    this.onEnd = command
  }

  public isCommand(c: Command): boolean {
    return c.execute !== undefined
  }

  public do() {
    console.log('Invoker')
    if (this.isCommand(this.onStart)) {
      this.onStart.execute()
    }
    if (this.isCommand(this.onEnd)) {
      this.onEnd.execute()
    }
  }
}
