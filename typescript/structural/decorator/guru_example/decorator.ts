import {Component} from "./component";

export class Decorator implements Component {
  component: Component

  constructor(component: Component) {
    this.component = component
  }

  public operation(): string {
    return this.component.operation()
  }
}
