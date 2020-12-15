import {Man} from "./man";

export class NormalMan implements Man {
  height: number
  weight: number
  sex: string

  constructor(height: number, weight: number, sex: string) {
    this.height = height
    this.weight = weight
    this.sex = sex
  }

  attributes(): string {
    return `NORMAL MAN: height = ${this.height}, weight = ${this.weight}, sex = ${this.sex}`
  }
}
