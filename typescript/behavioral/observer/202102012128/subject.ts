import {Observer} from "./observer";

export interface Subject {
  attach(o: Observer)
  detach(o: Observer)
  notify()
}
