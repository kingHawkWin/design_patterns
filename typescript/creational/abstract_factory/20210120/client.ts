import {ProductGradeA} from "./productGradeA";
import {ConcreteFactory1} from "./concreteFactory1";
import {ConcreteFactoryN} from "./concreteFactoryN";
import {ConcreteProductA1} from "./concreteProductA1";

export class Client {
  productGradeA: ProductGradeA

  productFamily1 (): void {
    const factory1: ConcreteFactory1 = new ConcreteFactory1()
    factory1.createFamilyA().gradeA()
    factory1.createFamilyZ().gradeZ()
  }

  productFamilyN (): void {
    const factoryN: ConcreteFactoryN = new ConcreteFactoryN()
    factoryN.createFamilyA().gradeA()
    factoryN.createFamilyZ().gradeZ()
  }

  productA (): void {
    this.productGradeA = new ConcreteProductA1()
    this.productGradeA.gradeA()
  }
}
