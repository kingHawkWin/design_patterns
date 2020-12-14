import {RoundPeg} from "./round_peg";
import {Peg} from "./peg";
import {SquarePeg} from './square_peg'
import {AngularPeg} from "./angular_peg";

export class Adapter extends Peg {
  private readonly peg: Peg

  constructor(peg: Peg) {
    super()
    this.peg = peg
  }

  getRadius(): number {
    if (this.peg instanceof RoundPeg) {
      return this.peg.getRadius()
    }
    if (this.peg instanceof SquarePeg) {
      return this.peg.getWidth() * Math.sqrt(2) / 2
    }
    if (this.peg instanceof AngularPeg) {
      const sides = this.peg.getSideLength()
      const a = sides[0]
      const b = sides[1]
      const c = sides[2]
      const p = (a + b + c) / 2

      return (a * b * c) / 4 * (Math.sqrt(p * (p - a) * (p - b) * (p - c)))
    }
    return 0
  }
}
