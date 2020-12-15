import 'man.dart';

class Iron implements Man {
  Man man;
  List<String> equipment;

  Iron(Man manValue) {
    man = manValue;
    equipment = [
      'thruster',
      'missile'
    ];
  }

  @override
  String attributes() {
    man.attributes();
    final result = 'IRON: equipment = ${equipment[0]}, ${equipment[1]}';
    print(result);
    return result;
  }
}
