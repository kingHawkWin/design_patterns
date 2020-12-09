export interface Shoe {
  generate(size: number): Map<String, String|number>
}

export class AdidasShoe implements Shoe {
  public generate(size: number): Map<String, String|number> {
    const result: Map<String, String|number> = new Map()
    result.set('logo', 'Adidas')
    result.set('size', size)
    return result
  }
}

export class NikeShoe implements Shoe {
  public generate(size: number): Map<String, String|number> {
    const result: Map<String, String|number> = new Map()
    result.set('logo', 'Nike')
    result.set('size', size)
    return result
  }
}

export interface Shirt {
  generate(size: string): Map<String, String>
}

export class AdidasShirt implements Shirt {
  public generate(size: string): Map<String, String> {
    const result: Map<String, String> = new Map()
    result.set('logo', 'Adidas')
    result.set('size', size)
    return result
  }
}

export class NikeShirt implements Shirt {
  public generate(size: string): Map<String, String> {
    const result: Map<String, String> = new Map()
    result.set('logo', 'Nike')
    result.set('size', size)
    return result
  }
}
