import {Graphic} from "./graphic";

export class CompoundGraphic implements Graphic {
  children: Graphic[]

  constructor() {
    this.children = []
  }

  add(child: Graphic): void {
    this.children.push(child)
    this.draw()
  }

  remove(child: Graphic): void {
    const childIndex = this.children.indexOf(child)
    this.children.splice(childIndex, 1)
    this.draw()
  }

  move(x: number, y: number) {
    this.children.forEach(v => {
      v.move(x, y)
    })
    this.draw()
  }

  draw() {
    this.children.forEach(v => {
      v.draw()
    })
  }
}
