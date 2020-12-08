import {Adidas, Factory, Nike} from "./factory";


function client(factory: Factory, shoeSize: number, shirtSize: string) {
  const shoe = factory.makeShoe().generate(shoeSize)
  const shirt = factory.makeShirt().generate(shirtSize)

  console.log(shoe)
  console.log(shirt)
  console.log('-----')
}

client(new Adidas(), 23, 'xxl')
client(new Nike(), 43, 'xl')
