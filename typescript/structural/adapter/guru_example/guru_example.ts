class Target {
  public request(): string {
    return 'test'
  }
}

class Adaptee {
  public specificRequest(): string {
    return 'tset'
  }
}

class Adapter extends Adaptee {
  private adaptee: Adaptee

  constructor(adaptee: Adaptee) {
    super();
    this.adaptee = adaptee
  }

  public request() {
    const result = this.adaptee.specificRequest().split('').reverse().join('')
    return result
  }
}

const targetResult = new Target().request()
const adapteeResult = new Adaptee().specificRequest()
const adapterResult = new Adapter(new Adaptee()).request()

console.log(`targetResult === adapteeResult, ${targetResult === adapteeResult}`)
console.log(`targetResult === adapterResult, ${targetResult === adapterResult}`)
