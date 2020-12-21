export class Flyweight {
  private readonly sharedState: any

  constructor(sharedState: any) {
    this.sharedState = sharedState
  }

  public operation(uniqueState): void {
    const s = JSON.stringify(this.sharedState)
    const u = JSON.stringify(uniqueState)

    console.log(`Flyweight: \n  shared state = ${s}, \n  unique state = ${u}`)
  }
}
