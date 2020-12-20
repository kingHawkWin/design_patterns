import {BaseComponent} from "./baseComponent";

export class Component2 extends BaseComponent {
  public doC(): void {
    console.log('Component2 doC.')
    this.mediator.notify(this, 'C')
  }

  public doD(): void {
    console.log('Component2 doD.')
    this.mediator.notify(this, 'D')
  }
}
