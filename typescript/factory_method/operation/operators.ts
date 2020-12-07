export interface Operators {
  operate(a: number, b: number): number
}

export class Add implements Operators {
  operate(a: number, b: number): number {
    console.log(a + b)
    return a + b
  }
}

export class Sub implements Operators {
  operate(a: number, b: number): number {
    console.log(a - b)
    return a - b
  }
}

export class Mul implements Operators {
  operate(a: number, b: number): number {
    console.log(a * b)
    return a * b
  }
}

export class Div implements Operators {
  operate(a: number, b: number): number {
    console.log(a / b)
    return a / b
  }
}

export class Mod implements  Operators {
  operate(a: number, b: number): number {
    console.log(a % b)
    return a % b
  }
}

