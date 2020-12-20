import {AbstractClass} from "./abstractClass";

export class ConcreteClass2 extends AbstractClass {
  protected requiredOperation1() {
    console.log('ConcreteClass2: requiredOperation1.')
  }

  protected requiredOperation2() {
    console.log('ConcreteClass2: requiredOperation2.')
  }

  protected hook1() {
    console.log('ConcreteClass2: hook1.')
  }
}
