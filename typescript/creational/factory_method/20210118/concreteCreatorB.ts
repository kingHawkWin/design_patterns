import {Creator} from "./creator";
import {ConcreteProductB} from "./concreteProductB";
import {Product} from "./product";

export class ConcreteCreatorB extends Creator {
  create(): Product {
    return new ConcreteProductB()
  }
}
