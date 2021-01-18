import {Creator} from "./creator";
import {ConcreteProductA} from "./concreteProductA";
import {Product} from "./product";

export class ConcreteCreatorA extends Creator {
  create(): Product {
    return new ConcreteProductA()
  }
}
