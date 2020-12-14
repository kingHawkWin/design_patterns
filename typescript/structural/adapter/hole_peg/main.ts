import {RoundHole} from "./round_hole";
import {RoundPeg} from "./round_peg";
import {SquarePeg} from "./square_peg";
import {AngularPeg} from "./angular_peg";
import {Adapter} from "./adapter";

const roundHoleS = new RoundHole(5)
const roundHoleM = new RoundHole(10)
const roundHoleL = new RoundHole(350)

const roundPeg = new RoundPeg(5)
const squarePeg = new Adapter(new SquarePeg(5))
const angularPeg = new Adapter(new AngularPeg(5, 5, 5))

roundHoleS.fits(roundPeg)
roundHoleS.fits(squarePeg)
roundHoleS.fits(angularPeg)

roundHoleM.fits(roundPeg)
roundHoleM.fits(squarePeg)
roundHoleM.fits(angularPeg)

roundHoleL.fits(roundPeg)
roundHoleL.fits(squarePeg)
roundHoleL.fits(angularPeg)
