import {Subject} from "./subject";

export function client(subject: Subject): void {
  subject.request()
}
