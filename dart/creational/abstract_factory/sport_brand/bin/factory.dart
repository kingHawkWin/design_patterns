import 'product.dart';

abstract class Factory {
  Shoe makeShoe();
  Shirt makeShirt();
}

class AdidasFactory implements Factory {
  @override
  Shoe makeShoe() {
    return AdidasShoe();
  }

  @override
  Shirt makeShirt() {
    return AdidasShirt();
  }
}

class NikeFactory implements Factory {
  @override
  Shoe makeShoe() {
    return NikeShoe();
  }

  @override
  Shirt makeShirt() {
    return NikeShirt();
  }
}
