import 'factory.dart';

void client(Factory factory, double shoeSize, String shirtSize) {
  Map<String, dynamic> shoe = factory.makeShoe().generate(shoeSize);
  Map<String, String> shirt = factory.makeShirt().generate(shirtSize);

  print(shoe);
  print(shirt);
  print('------');
}
