import './peg.dart';

class AngularPeg extends Peg {
  final double a;
  final double b;
  final double c;

  AngularPeg(this.a, this.b, this.c);

  List<double> getSideLength() {
    return [a, b, c];
  }
}
