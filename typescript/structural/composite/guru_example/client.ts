import {Component} from "./component";

export function client1(component: Component): void {
  console.log(component.operation())
}

export function client2(component1: Component, component2: Component): void {
  if (component1.isComposite()) {
    component1.add(component2)
  }
  console.log(`RESULT: ${component1.operation()}`);
}
