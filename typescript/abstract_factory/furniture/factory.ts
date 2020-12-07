import {
  Chair, ArtDecoChair, VictorianChair, ModernChair,
  Table, ArtDecoTable, VictorianTable, ModernTable,
  Sofa, ArtDecoSofa, VictorianSofa, ModernSofa
} from './product'

export interface Factory {
  createChair(): Chair,
  createTable(): Table,
  createSofa(): Sofa
}

export class ArtDeco implements Factory {
  public createChair(): Chair {
    return new ArtDecoChair()
  }
  public createTable(): Table {
    return new ArtDecoTable()
  }
  public createSofa(): Sofa {
    return new ArtDecoSofa()
  }
}

export class Victorian implements Factory {
  public createChair(): Chair {
    return new VictorianChair()
  }
  public createTable(): Table {
    return new VictorianTable()
  }
  public createSofa(): Sofa {
    return new VictorianSofa()
  }
}

export class Modern implements Factory {
  public createChair(): Chair {
    return new ModernChair()
  }
  public createTable(): Table {
    return new ModernTable()
  }
  public createSofa(): Sofa {
    return new ModernSofa()
  }
}
