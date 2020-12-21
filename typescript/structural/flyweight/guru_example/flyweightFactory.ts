import {Flyweight} from "./flyweight";

export class FlyweightFactory {
  private flyweights: {[key: string]: Flyweight} = <any>{}

  constructor(initialFlyweights: string[][]) {
    for (const state of initialFlyweights) {
      this.flyweights[this.getKey(state)] = new Flyweight(state)
    }
  }

  private getKey(state: string[]): string {
    return state.join('_')
  }

  public getFlyweight(sharedState: string[]): Flyweight {
    const key = this.getKey(sharedState)

    if (!(key in this.flyweights)) {
      console.log(`FlyweightFactory: ${key} is not find in flyweights`)
      this.flyweights[key] = new Flyweight(sharedState)
    } else {
      console.log(`FlyweightFactory: ${key} already exist.`)
    }

    return this.flyweights[key]
  }

  public listFlyweight(): void {
    const count = Object.keys(this.flyweights).length
    console.log(`FlyweightFactory: now have ${count} flyweight.`)
    for (const key in this.flyweights) {
      console.log(key)
    }
  }
}
