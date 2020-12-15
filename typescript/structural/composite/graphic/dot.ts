import {Graphic} from "./graphic";

export class Dot implements Graphic {
  x: number
  y: number

  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }

  draw(): void {
    console.log(`DOT: x = ${this.x}, y = ${this.y}`)
  }

  move(x: number, y: number): void {
    this.x += x
    this.y += y
    this.draw()
  }
}
