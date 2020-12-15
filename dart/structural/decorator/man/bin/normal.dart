import 'man.dart';

class Normal implements Man {
  double height;
  double weight;
  String sex;

  Normal(double heightValue, double weightValue, String sexValue) {
    height = heightValue;
    weight = weightValue;
    sex = sexValue;
  }

  @override
  String attributes() {
    final result = 'NORMAL: height = $height, weight = $weight, sex = $sex';
    print(result);
    return result;
  }
}
