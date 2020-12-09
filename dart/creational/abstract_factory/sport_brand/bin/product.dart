abstract class Shoe {
  Map<String, dynamic> generate(double size);
}

class AdidasShoe implements Shoe {
  @override
  Map<String, dynamic> generate(double size) {
    Map<String, dynamic> result = Map();
    result['logo'] = 'Adidas';
    result['size'] = size;
    return result;
  }
}

class NikeShoe implements Shoe {
  @override
  Map<String, dynamic> generate(double size) {
    Map<String, dynamic> result = Map();
    result['logo'] = 'Nike';
    result['size'] = size;
    return result;
  }
}

abstract class Shirt {
  Map<String, String> generate(String size);
}

class AdidasShirt implements Shirt {
  @override
  Map<String, String> generate(String size) {
    Map<String, String> result = Map();
    result['logo'] = 'Adidas';
    result['size'] = size;
    return result;
  }
}

class NikeShirt implements Shirt {
  @override
  Map<String, String> generate(String size) {
    Map<String, String> result = Map();
    result['logo'] = 'Nike';
    result['size'] = size;
    return result;
  }
}
