import {Man} from "./man";

export class Winter implements Man {
  man: Man
  clothes: string[]

  constructor(man: Man) {
    this.man = man
    this.clothes = [
      'down jacket',
      'long johns',
      'cotton shoes'
    ]
  }

  attributes(): string {
    console.log(this.man.attributes())
    return `WINTER MAN: clothes = ${this.clothes[0]}, ${this.clothes[1]}, ${this.clothes[2]}`
  }
}
