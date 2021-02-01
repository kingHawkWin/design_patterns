import {Subscriber} from "./subscriber";
import {Publisher} from "./publisher";

export class ConcreteSubscriber implements Subscriber {
  n: number = Math.random()
  update(p: Publisher): void {
    console.log(this.n)
  }
}
