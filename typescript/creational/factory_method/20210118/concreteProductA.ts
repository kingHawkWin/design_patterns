import {Product} from "./product";

export class ConcreteProductA implements Product {
  methodA() {
    console.log('ConcreteProductA methodA')
  }
  methodB() {
    console.log('ConcreteProductA methodB')
  }
}
