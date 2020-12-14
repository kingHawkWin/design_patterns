import {Peg} from "./peg";

export class AngularPeg extends Peg {
  private a: number
  private b: number
  private c: number

  constructor(a: number, b: number, c: number) {
    super()
    this.a = a
    this.b = b
    this.c = c
  }

  getSideLength(): number[] {
    return [this.a, this.b, this.c]
  }
}
