export interface Transport_unit {
  deliver(): string
}

export class Truck implements Transport_unit {
  public deliver() {
    console.log('truck')
    return 'truck'
  }
}

export class Ship implements Transport_unit {
  public deliver(): string {
    console.log('ship')
    return 'ship'
  }
}

export class Plane implements Transport_unit {
  public deliver(): string {
    console.log('plane')
    return 'plane'
  }
}
