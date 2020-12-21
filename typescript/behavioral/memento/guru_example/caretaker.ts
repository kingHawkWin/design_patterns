import {Memento} from "./memento";
import {Originator} from "./originator";

export class Caretaker {
  private mementos: Memento[] = []
  private originator: Originator

  constructor(originator: Originator) {
    this.originator = originator
  }

  public backup(): void {
    console.log('Caretaker backup.')
    this.mementos.push(this.originator.save())
  }

  public undo(): void {
    if (!this.mementos.length) {
      return;
    }
    const memento = this.mementos.pop()
    console.log(`Caretaker undo memento name = ${memento.getName()}`)
    this.originator.restore(memento)
  }

  public showHistory(): void {
    console.log('Caretaker showHistory.')
    for (const memento of this.mementos) {
      console.log(memento.getName())
    }
  }
}
