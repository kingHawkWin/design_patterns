import {MonkeyHandler} from "./monkeyHandler";
import {SquirrelHandler} from "./squirrel_handler";
import {DogHandler} from "./dog_handler";
import {client} from "./client";

const monkey = new MonkeyHandler()
const squirrel = new SquirrelHandler()
const dog = new DogHandler()

monkey.setNext(squirrel).setNext(dog)

console.log('Chain: Monkey > Squirrel > Dog\n')
client(monkey)
console.log('')

console.log('Subchain: Squirrel > Dog\n')
client(squirrel)
