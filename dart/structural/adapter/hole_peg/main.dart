import './bin/adapter.dart';
import './bin/angular_peg.dart';
import './bin/round_hole.dart';
import './bin/round_peg.dart';
import './bin/square_peg.dart';

void main() {
  final roundHoleS = RoundHole(5);
  final roundHoleM = RoundHole(100);
  final roundHoleL = RoundHole(500);

  final roundPeg = RoundPeg(5);
  final squarePeg = SquarePeg(5);
  final angularPeg = AngularPeg(5, 5, 5);

  print('roundPeg fit roundHoleS, ${roundHoleS.fits(Adapter(roundPeg))}');
  print('roundPeg fit roundHoleM, ${roundHoleM.fits(Adapter(roundPeg))}');
  print('roundPeg fit roundHoleL, ${roundHoleL.fits(Adapter(roundPeg))}');

  print('squarePeg fit roundHoleS, ${roundHoleS.fits(Adapter(squarePeg))}');
  print('squarePeg fit roundHoleM, ${roundHoleM.fits(Adapter(squarePeg))}');
  print('squarePeg fit roundHoleL, ${roundHoleL.fits(Adapter(squarePeg))}');

  print('angularPeg fit roundHoleS, ${roundHoleS.fits(Adapter(angularPeg))}');
  print('angularPeg fit roundHoleM, ${roundHoleM.fits(Adapter(angularPeg))}');
  print('angularPeg fit roundHoleL, ${roundHoleL.fits(Adapter(angularPeg))}');
}
