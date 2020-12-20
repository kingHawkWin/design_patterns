import {Strategy} from "./strategy";

export class StrategyDiv implements Strategy {
  execute(a: number, b: number): number {
    console.log(`a / b = ${a / b}`);
    return a / b;
  }
}
