import {Publisher} from "./publisher";

export interface Subscriber {
  update(p: Publisher): void
}
