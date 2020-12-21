import {ConcreteMemento} from "./concreteMemento";
import {Memento} from "./memento";

export class Originator {
  private state: string

  constructor(state: string) {
    this.state = state
    console.log(`Originator state = ${this.state}`)
  }

  public doSomething(): void {
    console.log('Originator doSomething')
    this.generateRandomString(30)
  }

  public generateRandomString(length: number = 10): string {
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return Array
      .apply(null, {length})
      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
      .join('')
  }

  public save(): Memento {
    return new ConcreteMemento(this.state)
  }

  public restore(memento: Memento): void {
    this.state = memento.getState()
    console.log(`Originator state = ${this.state}`)
  }
}
