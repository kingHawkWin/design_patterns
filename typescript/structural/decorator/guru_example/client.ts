import {Component} from "./component";

export function client(component: Component): void {
  console.log(`RESULT: ${component.operation()}`)
}
