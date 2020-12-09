import './castle.dart';
import './cottage.dart';
import './house.dart';
import './palace.dart';

class Client {
  void printDetails(House house) {
    print('${house.window}');
    print('${house.door}');
    print('${house.floor}');
  }

  void makeCottage() {
    Cottage cottage = Cottage();
    cottage.buildWindow();
    cottage.buildDoor();
    cottage.buildFloor();
    House result = cottage.getProduct();
    print('cottage');
    printDetails(result);
    print('');
  }

  void makeCastle() {
    Castle castle = Castle();
    castle.buildWindow();
    castle.buildDoor();
    castle.buildFloor();
    House result = castle.getProduct();
    print('castle');
    printDetails(result);
    print('');
  }

  void makePalace() {
    Palace palace = Palace();
    palace.buildWindow();
    palace.buildDoor();
    palace.buildFloor();
    House result = palace.getProduct();
    print('palace');
    printDetails(result);
    print('');
  }
}
