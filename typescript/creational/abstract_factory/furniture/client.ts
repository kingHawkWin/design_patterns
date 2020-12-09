import {
  Factory,
  ArtDeco,
  Victorian,
  Modern
} from './factory'

function client(factory: Factory) {
  const chair = factory.createChair().chair()
  const table = factory.createTable().table()
  const sofa = factory.createSofa().sofa()
}

client(new ArtDeco())
client(new Victorian())
client(new Modern())
