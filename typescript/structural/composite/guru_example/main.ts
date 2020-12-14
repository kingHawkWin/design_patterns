import {Leaf} from "./leaf";
import {client1, client2} from "./client";
import {Composite} from "./composite";

const simple = new Leaf()
console.log('Client: I\'ve got a simple component:');
client1(simple)
console.log()

const tree = new Composite()
const branch1 = new Composite()
branch1.add(new Leaf())
branch1.add(new Leaf())
const branch2 = new Composite()
branch2.add(new Leaf())
tree.add(branch1)
tree.add(branch2)
console.log('Client: Now I\'ve got a composite tree:');
client1(tree)
console.log()

console.log('Client: I don\'t need to check the components classes even when managing the tree:');
client2(tree, simple)
