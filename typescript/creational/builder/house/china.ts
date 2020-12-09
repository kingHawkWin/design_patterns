import {Builder} from "./builder";
import {House} from "./house";

export class China implements Builder {
  private house!: House;

  constructor() {
    this.reset()
  }

  reset(): void {
    this.house = new House()
  }

  buildLocation(location: string) {
    this.house.location = location
  }

  buildPrice(price: number) {
    this.house.price = price
  }

  buildArea(area: number) {
    this.house.area = area
  }

  buildTotal() {
    this.house.total = this.house.area * this.house.price
  }

  buildLevel(level: number) {
    this.house.level = level
  }

  buildBedRoom(sum: number) {
    this.house.bedRoom = sum
  }

  buildRestRoom(sum: number) {
    this.house.restRoom = sum
  }

  buildBalcony(has: boolean) {
    this.house.isBalcony = has
  }

  buildDuplex(has: boolean) {
    this.house.isDuplex = has
  }

  buildVilla(has: boolean) {
    this.house.isVilla = has
  }

  buildPool(has: boolean) {
    this.house.isPool = has
  }

  buildPlants(has: boolean) {
    this.house.isPlants = has
  }

  getHouse(): House {
    const result = this.house
    this.reset()
    return result
  }
}
