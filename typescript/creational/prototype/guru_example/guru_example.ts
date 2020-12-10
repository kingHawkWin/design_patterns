class Prototype {
  public primitive!: any
  public component!: Object
  public circularReference!: ComponentWithBackReference

  public clone(): this {
    const result = Object.create(this) // 以p1为基类创建子类
    result.component = Object.create(this.component) // 同上
    result.circularReference = {
      ...this.circularReference, // 展开
      prototype: {...this} // 展开，不然就是拷贝指针
    }
    return result
  }
}

class ComponentWithBackReference {
  public testValue = 111
  public prototype!: any

  constructor(prototype: Prototype) {
    this.prototype = prototype
  }
}

function client() {
  const p1 = new Prototype()
  p1.primitive = 222
  p1.component = [3, 2, 1]
  p1.circularReference = new ComponentWithBackReference(p1)
  const p2 = p1.clone()
  console.log(`p1.primitive = ${p1.primitive}, p2.primitive = ${p2.primitive}`, p1.primitive === p2.primitive)
  console.log(`p1.component = ${p1.component}, p2.component = ${p2.component}`, p1.component === p2.component)
  console.log(`p1.circularReference = ${p1.circularReference}, p2.circularReference = ${p2.circularReference}`, p1.circularReference === p2.circularReference)
  console.log(`p1.circularReference.prototype = ${p1.circularReference.prototype}, p2.circularReference.prototype = ${p2.circularReference.prototype}`, p1.circularReference.prototype === p2.circularReference.prototype)

  console.log(p2.circularReference.testValue)
  console.log(p1 === Object.getPrototypeOf(p2))
  console.log(p1.component === Object.getPrototypeOf(p2.component))
}

client()