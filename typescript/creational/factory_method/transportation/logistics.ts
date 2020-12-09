import { Transport_unit, Truck, Ship, Plane } from "./transport_unit";

export abstract class Logistics {
  public abstract playDelivery(): Transport_unit

  public createTransport(): string {
    return this.playDelivery().deliver()
  }
}

export class RoadLogistics extends Logistics {
  playDelivery(): Transport_unit {
    return new Truck()
  }
}

export class SeaLogistics extends Logistics {
  playDelivery(): Transport_unit {
    return new Ship()
  }
}

export class SkyLogistics extends Logistics {
  playDelivery(): Transport_unit {
    return new Plane()
  }
}
