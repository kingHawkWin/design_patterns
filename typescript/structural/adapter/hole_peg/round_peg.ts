import {Peg} from "./peg";

export class RoundPeg implements Peg {
  private radius: number

  constructor(radius: number) {
    this.radius = radius
  }

  getRadius(): number {
    return this.radius
  }
}
