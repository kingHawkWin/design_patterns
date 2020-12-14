import './peg.dart';

class RoundHole {
  final double _radius;

  RoundHole(this._radius);

  double getRadius() {
    return _radius;
  }

  bool fits(Peg peg) {
    return _radius >= peg.getRadius();
  }
}
