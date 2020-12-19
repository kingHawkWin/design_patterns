import {Subject} from "./subject";
import {Observer} from "./observer";

export class ConcreteSubject implements Subject {
  public state!: number

  private observers: Observer[] = []

  public attach(observer: Observer) {
    if (!this.observers.includes(observer)) {
      console.log('ConcreteSubject: new observer attached.')
      this.observers.push(observer)
    } else {
      console.log('ConcreteSubject: already attached.')
    }
  }

  public detach(observer: Observer) {
    if (this.observers.includes(observer)) {
      this.observers.splice(this.observers.indexOf(observer), 1)
      console.log('ConcreteSubject: observer detached.')
    } else {
      console.log('ConcreteSubject: observer does not exist, so can not detach.')
    }
  }

  public notify() {
    for (const observer of this.observers) {
      observer.update(this)
    }
  }

  public bloc() {
    this.state = Math.round(Math.random() * 12)
    console.log(`ConcreteSubject: state is ${this.state}`)

    this.notify()
  }
}
