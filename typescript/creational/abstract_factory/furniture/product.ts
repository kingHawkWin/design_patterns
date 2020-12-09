export interface Chair {
  chair(): string
}

export class ArtDecoChair implements Chair {
  public chair(): string {
    const result = 'art deco chair'
    console.log(result)
    return result
  }
}

export class VictorianChair implements Chair {
  public chair(): string {
    const result = 'victorian chair'
    console.log(result)
    return result
  }
}

export class ModernChair implements Chair {
  public chair(): string {
    const result = 'modern chair'
    console.log(result)
    return result
  }
}

export interface Table {
  table(): string
}

export class ArtDecoTable implements Table {
  public table(): string {
    const result = 'art deco table'
    console.log(result)
    return result
  }
}

export class VictorianTable implements Table {
  public table(): string {
    const result = 'victorian table'
    console.log(result)
    return result
  }
}

export class ModernTable implements Table {
  public table(): string {
    const result = 'modern table'
    console.log(result)
    return result
  }
}

export interface Sofa {
  sofa(): string
}

export class ArtDecoSofa implements Sofa {
  public sofa(): string {
    const result = 'art deco sofa'
    console.log(result)
    return result
  }
}

export class VictorianSofa implements Sofa {
  public sofa(): string {
    const result = 'victorian sofa'
    console.log(result)
    return result
  }
}

export class ModernSofa implements  Sofa {
  public sofa(): string {
    const result = 'modern sofa'
    console.log(result)
    return result
  }
}
