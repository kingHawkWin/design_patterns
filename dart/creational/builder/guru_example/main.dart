abstract class Builder {
  void producePartA();
  void producePartB();
  void producePartC();
}

class ConcreteBuilder1 implements Builder {
  Product1 _product1;

  ConcreteBuilder1() {
    reset();
  }

  void reset() {
    _product1 = Product1();
  }

  @override
  void producePartA() {
    _product1.parts.add('PartA1');
  }

  @override
  void producePartB() {
    _product1.parts.add('PartB1');
  }

  @override
  void producePartC() {
    _product1.parts.add('PartC1');
  }

  Product1 getProduct() {
    final result = _product1;
    reset();
    return result;
  }
}

class Product1 {
  List<String> parts = [];
  void listParts() {
    print('Product parts: ${parts.join(', ')}\n');
  }
}

class Director {
  Builder _builder;

  void setBuilder(Builder builder) {
    _builder = builder;
  }

  void buildMinimalViableProduct() {
    _builder.producePartA();
  }

  void buildFullFeaturedProduct() {
    _builder.producePartA();
    _builder.producePartB();
    _builder.producePartC();
  }
}

void client(Director director) {
  final builder = ConcreteBuilder1();
  director.setBuilder(builder);

  print('Standard basic product:');
  director.buildMinimalViableProduct();
  builder.getProduct().listParts();

  print('Standard full featured product:');
  director.buildFullFeaturedProduct();
  builder.getProduct().listParts();

  print('Custom product:');
  builder.producePartA();
  builder.producePartC();
  builder.getProduct().listParts();
}

void main() {
  final director = Director();
  client(director);
}
