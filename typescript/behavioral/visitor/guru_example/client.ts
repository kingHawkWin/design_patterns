import {Component} from "./component";
import {Visitor} from "./visitor";

export function client(components: Component[], visitor: Visitor): void {
  for (const component of components) {
    component.accept(visitor)
  }
}
