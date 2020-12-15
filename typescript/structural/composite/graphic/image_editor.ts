import {Graphic} from "./graphic";
import {CompoundGraphic} from "./compound_graphic";
import {Dot} from "./dot";
import {Circle} from "./circle";

export class ImageEditor {
  all: Graphic[]

  constructor() {
    this.all = []
  }

  load(): void {
    this.all = new CompoundGraphic().children
    this.all.push(new Dot(32, 11))
    this.all.push(new Circle(43, 223, 56))
    this.draw()
  }

  groupSelected(components: Graphic[]): void {
    const group = new CompoundGraphic().children
    components.forEach(v => {
      group.push(v)
      const vIndex = this.all.indexOf(v)
      this.all.splice(vIndex, 1)
    })
    this.all.push(...group)
    this.draw()
  }

  draw(): void {
    this.all.forEach(v => {
      v.draw()
    })
  }
}
