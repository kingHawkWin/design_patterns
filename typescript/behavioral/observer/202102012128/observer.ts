import {Subject} from "./subject";

export interface Observer {
  update(s: Subject)
}
