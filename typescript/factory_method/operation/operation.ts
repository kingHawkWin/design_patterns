import { Operators, Add, Sub, Mul, Div, Mod } from './operators'

export abstract class Operation {
  abstract operatorFactory(): Operators

  createOperator(a: number, b: number): number {
    return this.operatorFactory().operate(a, b);
  }
}

export class Addition extends Operation {
  operatorFactory(): Operators {
    return new Add();
  }
}

export class Subtraction extends Operation {
  operatorFactory(): Operators {
    return new Sub();
  }
}

export class Multiplication extends Operation {
  operatorFactory(): Operators {
    return new Mul();
  }
}

export class Division extends Operation {
  operatorFactory(): Operators {
    return new Div();
  }
}

export class Modulo extends Operation {
  operatorFactory(): Operators {
    return new Mod();
  }
}
