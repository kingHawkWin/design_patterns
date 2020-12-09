export interface Builder {
  buildLocation(location: string): void
  buildPrice(price: number): void
  buildArea(area: number): void
  buildTotal(): void
  buildLevel(level: number): void
  buildBedRoom(sum: number): void
  buildRestRoom(sum: number): void
  buildBalcony(has: boolean): void
  buildDuplex(has: boolean): void
  buildVilla(has: boolean): void
  buildPool(has: boolean): void
  buildPlants(has: boolean): void
}
