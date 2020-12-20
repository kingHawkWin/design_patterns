import {BaseComponent} from "./baseComponent";

export class Component1 extends BaseComponent {
  public doA(): void {
    console.log('Component1 doA.')
    this.mediator.notify(this, 'A')
  }

  public doB(): void {
    console.log('Component1 doB.')
    this.mediator.notify(this, 'B')
  }
}
