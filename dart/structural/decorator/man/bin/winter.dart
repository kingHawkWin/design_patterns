import 'man.dart';

class Winter implements Man {
  Man man;
  List<String> clothes;

  Winter(Man manValue) {
    man = manValue;
    clothes = [
      'down jacket',
      'long johns',
      'cotton shoes'
    ];
  }

  @override
  String attributes() {
    man.attributes();
    final result = 'WINTER: clothes = ${clothes[0]}, ${clothes[1]}, ${clothes[2]}';
    print(result);
    return result;
  }
}
