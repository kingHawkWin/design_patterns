import {client} from './client'
import {ConcreteCreatorA} from "./concreteCreatorA";
import {ConcreteCreatorB} from "./concreteCreatorB";

client(new ConcreteCreatorA())
client(new ConcreteCreatorB())
