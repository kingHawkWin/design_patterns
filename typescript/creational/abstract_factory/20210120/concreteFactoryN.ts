import {AbstractFactory} from "./abstractFactory";
import {ProductGradeA} from "./productGradeA";
import {ProductGradeZ} from "./productGradeZ";
import {ConcreteProductAn} from "./concreteProductAn";
import {ConcreteProductZn} from "./concreteProductZn";

export class ConcreteFactoryN implements AbstractFactory {
  createFamilyA(): ProductGradeA {
    return new ConcreteProductAn()
  }

  createFamilyZ(): ProductGradeZ {
    return new ConcreteProductZn()
  }

}
