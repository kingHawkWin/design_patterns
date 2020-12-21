import {State} from "./state";

export class Context {
  private state: State

  constructor(s: State) {
    this.transitionTo(s)
  }

  public transitionTo(s: State): void {
    console.log(`Context transitionTo ${(<any>s).constructor.name}.`)
    this.state = s
    this.state.setContext(this)
  }

  public require1(): void {
    this.state.handle1()
  }

  public require2(): void {
    this.state.handle2()
  }
}
