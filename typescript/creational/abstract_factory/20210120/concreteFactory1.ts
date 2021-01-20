import {AbstractFactory} from "./abstractFactory";
import {ProductGradeA} from "./productGradeA";
import {ProductGradeZ} from "./productGradeZ";
import {ConcreteProductA1} from "./concreteProductA1";
import {ConcreteProductZ1} from "./concreteProductZ1";

export class ConcreteFactory1 implements AbstractFactory {
  createFamilyA(): ProductGradeA {
    return new ConcreteProductA1()
  }
  createFamilyZ(): ProductGradeZ {
    return new ConcreteProductZ1()
  }
}
