import {RoundPeg} from "./round_peg";
import {Peg} from "./peg";

export class RoundHole implements Peg{
  private radius: number

  constructor(radius: number) {
    this.radius = radius
  }

  getRadius(): number {
    return this.radius
  }

  fits(peg: Peg): boolean {
    const result = this.getRadius() >= peg.getRadius()
    console.log(result)
    return result
  }
}
