import {FlyweightFactory} from "./flyweightFactory";

const factory = new FlyweightFactory([
  ['Chevrolet', 'Camaro2018', 'pink'],
  ['Mercedes Benz', 'C300', 'black'],
  ['Mercedes Benz', 'C500', 'red'],
  ['BMW', 'M5', 'red'],
  ['BMW', 'X6', 'white'],
])
factory.listFlyweight()

function addCarToPoliceDatabase(
  ff: FlyweightFactory, plates: string, owner: string,
  brand: string, model: string, color: string
) {
  console.log(`${plates} - ${owner} - ${brand} - ${model} - ${color} is add to police db.`)
  const flyweight = ff.getFlyweight([brand, model, color])
  flyweight.operation([plates, owner])
}

addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'M5', 'red')
addCarToPoliceDatabase(factory, 'CL234IR', 'James Doe', 'BMW', 'X1', 'red')

factory.listFlyweight()
