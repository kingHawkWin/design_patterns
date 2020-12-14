import './peg.dart';

class SquarePeg extends Peg {
  final double _width;

  SquarePeg(this._width);

  double getWidth() {
    return _width;
  }
}
