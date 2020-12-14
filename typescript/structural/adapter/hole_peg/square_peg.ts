import {Peg} from "./peg";

export class SquarePeg extends Peg {
  private readonly width: number

  constructor(width: number) {
    super()
    this.width = width
  }

  getWidth(): number {
    return this.width
  }
}
