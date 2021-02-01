import {Subject} from "./subject";
import {Observer} from "./observer";

export class ConcreteSubject implements Subject {
  private observers: Observer[] = []

  attach(o: Observer) {
    console.log('attach')
    this.observers.push(o)
  }

  detach(o: Observer) {
    console.log('detach')
    const INDEX = this.observers.indexOf(o)
    this.observers.splice(INDEX, 1)
  }

  notify() {
    this.observers.forEach(v => {
      v.update(this)
    })
  }

}
