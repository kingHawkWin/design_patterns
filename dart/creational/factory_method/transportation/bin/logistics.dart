import 'transport_unit.dart';

abstract class Logistics {
  TransportUnit playDelivery();

  String createTransport() {
    return playDelivery().deliver();
  }
}

class RoadLogistics extends Logistics {
  @override
  TransportUnit playDelivery() {
    return Truck();
  }
}

class SeaLogistics extends Logistics {
  @override
  TransportUnit playDelivery() {
    return Ship();
  }
}

class SkyLogistics extends Logistics {
  @override
  TransportUnit playDelivery() {
    return Plane();
  }
}
