import {RealSubject} from "./real_subject";
import {client} from "./client";
import {Proxy} from "./proxy";

console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject()
client(realSubject)

console.log('Client: Executing the same client code with a proxy:');
const proxy = new Proxy(realSubject)
client(proxy)
