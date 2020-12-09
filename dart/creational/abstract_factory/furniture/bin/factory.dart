import 'product.dart';

abstract class Factory {
  Chair createChair();
  Table createTable();
  Sofa createSofa();
}

class ArtDeco implements Factory {
  @override
  Chair createChair() {
    return ArtDecoChair();
  }

  @override
  Table createTable() {
    return ArtDecoTable();
  }

  @override
  Sofa createSofa() {
    return ArtDecoSofa();
  }
}

class Victorian implements Factory {
  @override
  Chair createChair() {
    return VictorianChair();
  }

  @override
  Table createTable() {
    return VictorianTable();
  }

  @override
  Sofa createSofa() {
    return VictorianSofa();
  }
}

class Modern implements Factory {
  @override
  Chair createChair() {
    return ModernChair();
  }

  @override
  Table createTable() {
    return ModernTable();
  }

  @override
  Sofa createSofa() {
    return ModernSofa();
  }
}
