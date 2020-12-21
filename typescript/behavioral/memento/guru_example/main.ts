import {Originator} from "./originator";
import {Caretaker} from "./caretaker";

const originator = new Originator('Super-duper-super-puper-super.')
const caretaker = new Caretaker(originator)

caretaker.backup()
originator.doSomething()

caretaker.backup()
originator.doSomething()

caretaker.backup()
originator.doSomething()

console.log()
caretaker.showHistory()

console.log('---- rollback ----')
caretaker.undo()

console.log('---- rollback ----')
caretaker.undo()

caretaker.showHistory()
