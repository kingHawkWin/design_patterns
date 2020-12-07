import './bin/logistics.dart';

String client(Logistics logistics) {
  return logistics.createTransport();
}

void main() {
  client(RoadLogistics());
  client(SeaLogistics());
  client(SkyLogistics());
}
