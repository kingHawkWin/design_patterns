abstract class TransportUnit {
  String deliver();
}

class Truck implements TransportUnit {
  @override
  String deliver() {
    print('truck');
    return 'truck';
  }
}

class Ship implements TransportUnit {
  @override
  String deliver() {
    print('ship');
    return 'ship';
  }
}

class Plane implements TransportUnit {
  @override
  String deliver() {
    print('plane');
    return 'plane';
  }
}
