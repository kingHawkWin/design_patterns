import './peg.dart';

class RoundPeg extends Peg {
  final double _radius;

  RoundPeg(this._radius);

  @override
  double getRadius() {
    return _radius;
  }
}
