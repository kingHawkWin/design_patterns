import {Subscriber} from "./subscriber";

export class Publisher {
  private subscribers: Subscriber[] = []
  subscribe(s: Subscriber): void {
    this.subscribers.push(s)
  }
  unsubscribe(s: Subscriber): void {
    const index = this.subscribers.indexOf(s)
    this.subscribers.splice(index, 1)
  }
  notify() {
    this.subscribers.forEach(v => {
      v.update(this)
    })
  }
}
