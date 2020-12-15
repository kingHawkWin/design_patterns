import {Dot} from "./dot";

export class Circle extends Dot {
  radius: number

  constructor(x: number, y: number, radius: number) {
    super(x, y);
    this.radius = radius
  }

  draw() {
    super.draw();
    console.log(`CIRCLE: radius = ${this.radius}`)
  }
}
