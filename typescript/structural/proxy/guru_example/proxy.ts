import {Subject} from "./subject";
import {RealSubject} from "./real_subject";

export class Proxy implements Subject {
  private realSubject: RealSubject

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject
  }

  private checkAccess(): boolean {
    console.log('Proxy: Checking access prior to firing a real request.');
    return true
  }

  private logAccess(): void {
    console.log('Proxy: Logging the time of request.');
  }

  public request(): void {
    if (this.checkAccess()) {
      this.realSubject.request()
      this.logAccess()
    }
  }
}
