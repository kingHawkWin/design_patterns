import {Product} from "./product";

export abstract class Creator {
  abstract create (): Product;
  operation (): void {
    const product: Product = this.create()
    product.methodA()
    product.methodB()
  }
}
