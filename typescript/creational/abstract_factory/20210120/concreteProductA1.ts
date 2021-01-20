import {ProductGradeA} from "./productGradeA";

export class ConcreteProductA1 implements ProductGradeA {
  gradeA(): void {
    console.log('ConcreteProductA1')
  }
}
