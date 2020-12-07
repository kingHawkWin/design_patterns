import './bin/factory.dart';

void client(Factory factory) {
  final chair = factory.createChair().chair();
  final table = factory.createTable().table();
  final sofa = factory.createSofa().sofa();
}

void main() {
  client(ArtDeco());
  client(Victorian());
  client(Modern());
}
