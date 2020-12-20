import {Strategy} from "./strategy";

export class Context {
  private strategy: Strategy

  constructor(strategy: Strategy) {
    this.strategy = strategy
  }

  public setStrategy(strategy: Strategy): void {
    this.strategy = strategy
  }

  public bloc(): string[] {
    console.log('Context bloc')
    return this.strategy.doAlgorithm(['a', 'b' ,'c', 'd', 'e', 'f', 'g'])
  }
}
