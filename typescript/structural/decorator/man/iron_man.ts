import {Man} from "./man";

export class IronMan implements Man {
  man: Man
  equipment: string[]

  constructor(man: Man) {
    this.man = man
    this.equipment = [
      'thruster',
      'missile'
    ]
  }

  attributes(): string {
    console.log(this.man.attributes())
    return `IRON MAN: equipment = ${this.equipment[0]}, ${this.equipment[1]}`
  }
}
