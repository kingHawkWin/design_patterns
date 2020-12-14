export abstract class Component {
  protected parent: Component

  public setParent(parent: Component): void {
    this.parent = parent
  }

  public getParent(): Component {
    return this.parent
  }

  public isComposite(): boolean {
    return false
  }

  public add(component: Component): void {}

  public remove(component: Component): void {}

  public abstract operation(): string
}
