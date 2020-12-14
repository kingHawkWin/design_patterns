import {Peg} from "./peg";

export class AngularPeg extends Peg {
  private readonly a: number
  private readonly b: number
  private readonly c: number

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
