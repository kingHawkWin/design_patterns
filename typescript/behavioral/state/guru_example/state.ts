import {Context} from "./context";

export abstract class State {
  protected context: Context

  public setContext(c: Context): void {
    this.context = c
  }

  public abstract handle1(): void
  public abstract handle2(): void
}
