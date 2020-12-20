import {Mediator} from "./mediator";

export class BaseComponent {
  protected mediator: Mediator

  constructor(mediator: Mediator = null) {
    this.mediator = mediator
  }

  public setMediator(mediator: Mediator) {
    this.mediator = mediator
  }
}
