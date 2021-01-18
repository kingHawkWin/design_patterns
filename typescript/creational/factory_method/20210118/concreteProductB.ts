import {Product} from "./product";

export class ConcreteProductB implements Product {
  methodA() {
    console.log('ConcreteProductB methodA')
  }
  methodB() {
    console.log('ConcreteProductB methodB')
  }
}
