import {Shoe, Shirt, AdidasShoe, AdidasShirt, NikeShoe, NikeShirt} from "./product";

export interface Factory {
  makeShoe(): Shoe
  makeShirt(): Shirt
}

export class Adidas implements Factory {
  makeShoe(): Shoe {
    return new AdidasShoe()
  }
  makeShirt(): Shirt {
    return new AdidasShirt()
  }
}

export class Nike implements Factory {
  makeShoe(): Shoe {
    return new NikeShoe()
  }
  makeShirt(): Shirt {
    return new NikeShirt()
  }
}
