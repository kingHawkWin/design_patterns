import {Publisher} from "./publisher";
import {ConcreteSubscriber} from "./concreteSubscriber";

const publisher = new Publisher()
const s1 = new ConcreteSubscriber()
const s2 = new ConcreteSubscriber()
const s3 = new ConcreteSubscriber()
const s4 = new ConcreteSubscriber()

publisher.subscribe(s1)
publisher.subscribe(s2)
publisher.subscribe(s3)
publisher.subscribe(s4)

publisher.notify()

publisher.unsubscribe(s2)
publisher.unsubscribe(s4)

publisher.notify()
