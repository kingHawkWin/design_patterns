abstract class Chair {
  String chair();
}

class ArtDecoChair implements Chair {
  @override
  String chair() {
    const result = 'art deco chair';
    print(result);
    return result;
  }
}

class VictorianChair implements Chair {
  @override
  String chair() {
    const result = 'victorian chair';
    print(result);
    return result;
  }
}

class ModernChair implements Chair {
  @override
  String chair() {
    const result = 'modern chair';
    print(result);
    return result;
  }
}

abstract class Table {
  String table();
}

class ArtDecoTable implements Table {
  @override
  String table() {
    const result = 'art deco table';
    print(result);
    return result;
  }
}

class VictorianTable implements Table {
  @override
  String table() {
    const result = 'victorian table';
    print(result);
    return result;
  }
}

class ModernTable implements Table {
  @override
  String table() {
    const result = 'modern table';
    print(result);
    return result;
  }
}

abstract class Sofa {
  String sofa();
}

class ArtDecoSofa implements Sofa {
  @override
  String sofa() {
    const result = 'art deco sofa';
    print(result);
    return result;
  }
}

class VictorianSofa implements Sofa {
  @override
  String sofa() {
    const result = 'victorian sofa';
    print(result);
    return result;
  }
}

class ModernSofa implements Sofa {
  @override
  String sofa() {
    const result = 'modern sofa';
    print(result);
    return result;
  }
}
