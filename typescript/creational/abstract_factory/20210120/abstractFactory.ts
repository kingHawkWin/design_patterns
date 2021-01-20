import {ProductGradeA} from "./productGradeA";
import {ProductGradeZ} from "./productGradeZ";

export interface AbstractFactory {
  createFamilyA(): ProductGradeA
  createFamilyZ(): ProductGradeZ
}
