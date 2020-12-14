import 'dart:math';

import './angular_peg.dart';
import './peg.dart';
import './round_peg.dart';
import './square_peg.dart';

class Adapter extends Peg {
  final Peg _peg;

  Adapter(this._peg);

  @override
  double getRadius() {
    if (_peg is RoundPeg) {
      return _peg.getRadius();
    }
    if (_peg is SquarePeg) {
      return (_peg as SquarePeg).getWidth() * sqrt(2) / 2;
    }
    if (_peg is AngularPeg) {
      final sides = (_peg as AngularPeg).getSideLength();
      final a = sides[0];
      final b = sides[1];
      final c = sides[2];
      final p = (a + b + c) / 2;

      return (a * b * c) / 4 * sqrt(p * (p - a) * (p - b) * (p - c));
    }
    return _peg.getRadius();
  }
}
