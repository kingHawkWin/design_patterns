import {AbstractClass} from "./abstractClass";

export class ConcreteClass1 extends AbstractClass {
  protected requiredOperation1() {
    console.log('ConcreteClass1: requiredOperation.')
  }

  protected requiredOperation2() {
    console.log('ConcreteClass2: requiredOperation.')
  }
}
